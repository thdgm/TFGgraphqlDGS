(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './uuid-js-ir.js', './okio-parent-okio-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./uuid-js-ir.js'), require('./okio-parent-okio-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-api'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'apollo-kotlin-apollo-api'.");
    }
    if (typeof this['uuid-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-api'. Its dependency 'uuid-js-ir' was not found. Please, check whether 'uuid-js-ir' is loaded prior to 'apollo-kotlin-apollo-api'.");
    }
    if (typeof this['okio-parent-okio-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-api'. Its dependency 'okio-parent-okio-js-ir' was not found. Please, check whether 'okio-parent-okio-js-ir' is loaded prior to 'apollo-kotlin-apollo-api'.");
    }
    root['apollo-kotlin-apollo-api'] = factory(typeof this['apollo-kotlin-apollo-api'] === 'undefined' ? {} : this['apollo-kotlin-apollo-api'], this['kotlin-kotlin-stdlib-js-ir'], this['uuid-js-ir'], this['okio-parent-okio-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_uuid, kotlin_com_squareup_okio_okio) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.jb;
  var setMetadataFor = kotlin_kotlin.$_$.fc;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.ab;
  var emptySet = kotlin_kotlin.$_$.s7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l1;
  var equals = kotlin_kotlin.$_$.cb;
  var toString = kotlin_kotlin.$_$.jc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var isObject = kotlin_kotlin.$_$.vb;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c1;
  var List = kotlin_kotlin.$_$.d6;
  var isInterface = kotlin_kotlin.$_$.sb;
  var Long = kotlin_kotlin.$_$.ff;
  var uuid4 = kotlin_uuid.$_$.a;
  var emptyList = kotlin_kotlin.$_$.q7;
  var plus = kotlin_kotlin.$_$.y8;
  var emptyMap = kotlin_kotlin.$_$.r7;
  var toSet = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.ec;
  var hashCode = kotlin_kotlin.$_$.ib;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var toSet_0 = kotlin_kotlin.$_$.q9;
  var first = kotlin_kotlin.$_$.y7;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var drop = kotlin_kotlin.$_$.o7;
  var toList = kotlin_kotlin.$_$.l9;
  var getStringHashCode = kotlin_kotlin.$_$.hb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  var Collection = kotlin_kotlin.$_$.v5;
  var contains = kotlin_kotlin.$_$.u6;
  var mapCapacity = kotlin_kotlin.$_$.p8;
  var coerceAtLeast = kotlin_kotlin.$_$.lc;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var Exception = kotlin_kotlin.$_$.bf;
  var Map = kotlin_kotlin.$_$.f6;
  var toList_0 = kotlin_kotlin.$_$.j9;
  var sortedWith = kotlin_kotlin.$_$.f9;
  var toMap = kotlin_kotlin.$_$.m9;
  var Comparator = kotlin_kotlin.$_$.we;
  var compareValues = kotlin_kotlin.$_$.v9;
  var listOf = kotlin_kotlin.$_$.o8;
  var isNumber = kotlin_kotlin.$_$.ub;
  var toLong = kotlin_kotlin.$_$.hc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v1;
  var contains$default = kotlin_kotlin.$_$.n;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var plus_0 = kotlin_kotlin.$_$.x8;
  var checkIndexOverflow = kotlin_kotlin.$_$.s6;
  var listOf_0 = kotlin_kotlin.$_$.n8;
  var to = kotlin_kotlin.$_$.tg;
  var blackholeSink = kotlin_com_squareup_okio_okio.$_$.j;
  var buffer = kotlin_com_squareup_okio_okio.$_$.l;
  var lazy = kotlin_kotlin.$_$.kg;
  var Sink = kotlin_com_squareup_okio_okio.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.gb;
  var THROW_ISE = kotlin_kotlin.$_$.nf;
  var Enum = kotlin_kotlin.$_$.ze;
  var equals_0 = kotlin_kotlin.$_$.kd;
  var charSequenceGet = kotlin_kotlin.$_$.xa;
  var contains$default_0 = kotlin_kotlin.$_$.o;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.i3;
  var toString_0 = kotlin_kotlin.$_$.ie;
  var addSuppressed = kotlin_kotlin.$_$.zf;
  var Char = kotlin_kotlin.$_$.ue;
  var charSequenceLength = kotlin_kotlin.$_$.ya;
  var fillArrayVal = kotlin_kotlin.$_$.eb;
  var toByte = kotlin_kotlin.$_$.gc;
  var isInfinite = kotlin_kotlin.$_$.hg;
  var isNaN_0 = kotlin_kotlin.$_$.ig;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var numberToChar = kotlin_kotlin.$_$.bc;
  var numberToLong = kotlin_kotlin.$_$.dc;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var EOFException = kotlin_com_squareup_okio_okio.$_$.g;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.g3;
  var Companion_getInstance_0 = kotlin_com_squareup_okio_okio.$_$.b;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toDouble = kotlin_kotlin.$_$.de;
  var NumberFormatException = kotlin_kotlin.$_$.if;
  var toLong_0 = kotlin_kotlin.$_$.he;
  var toInt = kotlin_kotlin.$_$.fe;
  var numberToInt = kotlin_kotlin.$_$.cc;
  var Closeable = kotlin_com_squareup_okio_okio.$_$.f;
  var toString_1 = kotlin_kotlin.$_$.sg;
  var Entry = kotlin_kotlin.$_$.e6;
  var plus_1 = kotlin_kotlin.$_$.v8;
  var get_indices = kotlin_kotlin.$_$.f8;
  var lastOrNull = kotlin_kotlin.$_$.k8;
  var last = kotlin_kotlin.$_$.l8;
  var println = kotlin_kotlin.$_$.qa;
  var printStackTrace = kotlin_kotlin.$_$.ng;
  var captureStack = kotlin_kotlin.$_$.ua;
  var RuntimeException = kotlin_kotlin.$_$.lf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Adapter, 'Adapter', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Builder, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AdapterContext, 'AdapterContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NullableAdapter, 'NullableAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(ObjectAdapter, 'ObjectAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(ListAdapter, 'ListAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(PresentAdapter, 'PresentAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(ApolloOptionalAdapter, 'ApolloOptionalAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(PassThroughAdapter, 'PassThroughAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(StringAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(IntAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(DoubleAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(FloatAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(LongAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(BooleanAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(AnyAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(UploadAdapter$1, undefined, classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(ExecutionOptions, 'ExecutionOptions', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MutableExecutionOptions, 'MutableExecutionOptions', interfaceMeta, undefined, [ExecutionOptions], undefined, undefined, []);
  setMetadataFor(Builder_0, 'Builder', classMeta, undefined, [MutableExecutionOptions], undefined, undefined, []);
  setMetadataFor(ApolloRequest, 'ApolloRequest', classMeta, undefined, [ExecutionOptions], undefined, undefined, []);
  setMetadataFor(Builder_1, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloResponse, 'ApolloResponse', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BooleanExpression, 'BooleanExpression', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(True, 'True', objectMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(False, 'False', objectMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(Not, 'Not', classMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(Or, 'Or', classMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(And, 'And', classMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(Element, 'Element', classMeta, BooleanExpression, undefined, undefined, undefined, []);
  setMetadataFor(BTerm, 'BTerm', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BPossibleTypes, 'BPossibleTypes', classMeta, BTerm, undefined, undefined, undefined, []);
  setMetadataFor(BVariable, 'BVariable', classMeta, BTerm, undefined, undefined, undefined, []);
  setMetadataFor(BLabel, 'BLabel', classMeta, BTerm, undefined, undefined, undefined, []);
  setMetadataFor(CompiledType, 'CompiledType', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledNamedType, 'CompiledNamedType', classMeta, CompiledType, undefined, undefined, undefined, []);
  setMetadataFor(CustomScalarType, 'CustomScalarType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(Builder_2, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledSelection, 'CompiledSelection', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledField, 'CompiledField', classMeta, CompiledSelection, undefined, undefined, undefined, []);
  setMetadataFor(Builder_3, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ObjectType, 'ObjectType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(Builder_4, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledArgument, 'CompiledArgument', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledVariable, 'CompiledVariable', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledListType, 'CompiledListType', classMeta, CompiledType, undefined, undefined, undefined, []);
  setMetadataFor(CompiledNotNullType, 'CompiledNotNullType', classMeta, CompiledType, undefined, undefined, undefined, []);
  setMetadataFor(Builder_5, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompiledFragment, 'CompiledFragment', classMeta, CompiledSelection, undefined, undefined, undefined, []);
  setMetadataFor(Builder_6, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InterfaceType, 'InterfaceType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(CompiledCondition, 'CompiledCondition', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ScalarType, 'ScalarType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(EnumType, 'EnumType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(InputObjectType, 'InputObjectType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(UnionType, 'UnionType', classMeta, CompiledNamedType, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, [Comparator], undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, undefined, [Key_0], undefined, undefined, []);
  setMetadataFor(Builder_7, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  function plus_2(context) {
    var tmp;
    if (context === EmptyExecutionContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_oiritn_k$(this, ExecutionContext$plus$lambda);
    }
    return tmp;
  }
  setMetadataFor(ExecutionContext, 'ExecutionContext', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function get(key) {
    var tmp;
    if (equals(this.get_key_18j28a_k$(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function fold(initial, operation) {
    return operation(initial, this);
  }
  function minusKey(key) {
    return equals(this.get_key_18j28a_k$(), key) ? EmptyExecutionContext_getInstance() : this;
  }
  setMetadataFor(Element_0, 'Element', interfaceMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(CustomScalarAdapters, 'CustomScalarAdapters', classMeta, undefined, [Element_0], undefined, undefined, []);
  setMetadataFor(DeferredFragmentIdentifier, 'DeferredFragmentIdentifier', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Location, 'Location', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Error_0, 'Error', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Data, 'Data', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Variables, 'Variables', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Executable, 'Executable', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyExecutionContext, 'EmptyExecutionContext', objectMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(CombinedExecutionContext, 'CombinedExecutionContext', classMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Data_1, 'Data', interfaceMeta, undefined, [Data], undefined, undefined, []);
  setMetadataFor(Data_0, 'Data', interfaceMeta, undefined, [Data_1], undefined, undefined, []);
  setMetadataFor(Operation, 'Operation', interfaceMeta, undefined, [Executable], undefined, undefined, []);
  setMetadataFor(Mutation, 'Mutation', interfaceMeta, undefined, [Operation], undefined, undefined, []);
  setMetadataFor(BuilderScope, 'BuilderScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GlobalBuilder$1, undefined, classMeta, undefined, [BuilderScope], undefined, undefined, []);
  setMetadataFor(Optional, 'Optional', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Present, 'Present', classMeta, Optional, undefined, undefined, undefined, []);
  setMetadataFor(Absent, 'Absent', objectMeta, Optional, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Data_2, 'Data', interfaceMeta, undefined, [Data_1], undefined, undefined, []);
  setMetadataFor(Query, 'Query', interfaceMeta, undefined, [Operation], undefined, undefined, []);
  setMetadataFor(Data_3, 'Data', interfaceMeta, undefined, [Data_1], undefined, undefined, []);
  setMetadataFor(Subscription, 'Subscription', interfaceMeta, undefined, [Operation], undefined, undefined, []);
  setMetadataFor(Upload, 'Upload', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CustomTypeAdapter, 'CustomTypeAdapter', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CustomTypeValue, 'CustomTypeValue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLNull, 'GraphQLNull', objectMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLString, 'GraphQLString', classMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLBoolean, 'GraphQLBoolean', classMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLNumber, 'GraphQLNumber', classMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLJsonObject, 'GraphQLJsonObject', classMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(GraphQLJsonList, 'GraphQLJsonList', classMeta, CustomTypeValue, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpBody, 'HttpBody', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpRequestComposer$Companion$buildPostBody$1, undefined, classMeta, undefined, [HttpBody], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestComposer, 'HttpRequestComposer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpRequestComposer, 'DefaultHttpRequestComposer', classMeta, undefined, [HttpRequestComposer], undefined, undefined, []);
  setMetadataFor(UploadsHttpBody, 'UploadsHttpBody', classMeta, undefined, [HttpBody], undefined, undefined, []);
  setMetadataFor(CountingSink, 'CountingSink', classMeta, undefined, [Sink], undefined, undefined, []);
  setMetadataFor(HttpHeader, 'HttpHeader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Builder_8, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Builder_9, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequest, 'HttpRequest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseParser, 'ResponseParser', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Version2CustomTypeAdapterToAdapter, 'Version2CustomTypeAdapterToAdapter', classMeta, undefined, [Adapter], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonWriter, 'JsonWriter', interfaceMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(BufferedSinkJsonWriter, 'BufferedSinkJsonWriter', classMeta, undefined, [JsonWriter], undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonReader, 'JsonReader', interfaceMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(BufferedSourceJsonReader, 'BufferedSourceJsonReader', classMeta, undefined, [JsonReader], undefined, undefined, []);
  setMetadataFor(JsonNumber, 'JsonNumber', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Token, 'Token', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MapJsonReader, 'MapJsonReader', classMeta, undefined, [JsonReader], undefined, undefined, []);
  setMetadataFor(State, 'State', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(List_0, 'List', classMeta, State, undefined, undefined, undefined, []);
  setMetadataFor(Map_0, 'Map', classMeta, State, undefined, undefined, undefined, []);
  setMetadataFor(MapJsonWriter, 'MapJsonWriter', classMeta, undefined, [JsonWriter], undefined, undefined, []);
  setMetadataFor(FileUploadAwareJsonWriter, 'FileUploadAwareJsonWriter', classMeta, undefined, [JsonWriter], undefined, undefined, []);
  setMetadataFor(JsonScope, 'JsonScope', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TestResolver, 'TestResolver', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloException, 'ApolloException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(MissingValueException, 'MissingValueException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(JsonDataException, 'JsonDataException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(AutoPersistedQueriesNotSupported, 'AutoPersistedQueriesNotSupported', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloHttpException, 'ApolloHttpException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloParseException, 'ApolloParseException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(SubscriptionOperationException, 'SubscriptionOperationException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloNetworkException, 'ApolloNetworkException', classMeta, ApolloException, undefined, undefined, undefined, []);
  //endregion
  function Adapter() {
  }
  function _set_variables__m6ltxu($this, _set____db54di) {
    $this.variables_1 = _set____db54di;
  }
  function _get_variables__748mgq($this) {
    return $this.variables_1;
  }
  function _set_mergedDeferredFragmentIds__i3i308($this, _set____db54di) {
    $this.mergedDeferredFragmentIds_1 = _set____db54di;
  }
  function _get_mergedDeferredFragmentIds__kcclyk($this) {
    return $this.mergedDeferredFragmentIds_1;
  }
  function _get_variables__748mgq_0($this) {
    return $this.variables_1;
  }
  function _get_mergedDeferredFragmentIds__kcclyk_0($this) {
    return $this.mergedDeferredFragmentIds_1;
  }
  function Builder() {
    this.variables_1 = null;
    this.mergedDeferredFragmentIds_1 = null;
  }
  Builder.prototype.variables_8kjs8h_k$ = function (variables) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.variables.<anonymous>' call
    this.variables_1 = variables;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder.prototype.mergedDeferredFragmentIds_lbg4c4_k$ = function (mergedDeferredFragmentIds) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.mergedDeferredFragmentIds.<anonymous>' call
    this.mergedDeferredFragmentIds_1 = mergedDeferredFragmentIds;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder.prototype.build_1k0s4u_k$ = function () {
    return new AdapterContext(this.variables_1, this.mergedDeferredFragmentIds_1);
  };
  function AdapterContext(variables, mergedDeferredFragmentIds) {
    this.variables_1 = variables;
    this.mergedDeferredFragmentIds_1 = mergedDeferredFragmentIds;
  }
  AdapterContext.prototype.newBuilder_dnl2aj_k$ = function () {
    return (new Builder()).variables_8kjs8h_k$(this.variables_1).mergedDeferredFragmentIds_lbg4c4_k$(this.mergedDeferredFragmentIds_1);
  };
  AdapterContext.prototype.variables_1d3s7d_k$ = function () {
    if (this.variables_1 == null) {
      return emptySet();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this.variables_1.get_valueMap_fwl910_k$();
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
      // Inline function 'com.apollographql.apollo3.api.AdapterContext.variables.<anonymous>' call
      tmp$ret$1 = equals(element.get_value_j01efc_k$(), false);
      if (tmp$ret$1) {
        tmp0_filterTo.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3.get_keys_wop4xp_k$();
  };
  AdapterContext.prototype.hasDeferredFragment_x07n3_k$ = function (path, label) {
    if (this.mergedDeferredFragmentIds_1 == null) {
      return true;
    }
    return this.mergedDeferredFragmentIds_1.contains_2ehdt1_k$(new DeferredFragmentIdentifier(path, label));
  };
  function withDeferredFragmentIds(_this__u8e3s4, deferredFragmentIds) {
    return _this__u8e3s4.newBuilder_dnl2aj_k$().adapterContext_cvw8n6_k$(_this__u8e3s4.get_adapterContext_no3aeh_k$().newBuilder_dnl2aj_k$().mergedDeferredFragmentIds_lbg4c4_k$(deferredFragmentIds).build_1k0s4u_k$()).build_1k0s4u_k$();
  }
  function get_StringAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return StringAdapter;
  }
  var StringAdapter;
  function get_IntAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return IntAdapter;
  }
  var IntAdapter;
  function get_DoubleAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return DoubleAdapter;
  }
  var DoubleAdapter;
  function get_FloatAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return FloatAdapter;
  }
  var FloatAdapter;
  function get_LongAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return LongAdapter;
  }
  var LongAdapter;
  function get_BooleanAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return BooleanAdapter;
  }
  var BooleanAdapter;
  function get_AnyAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return AnyAdapter;
  }
  var AnyAdapter;
  function get_UploadAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return UploadAdapter;
  }
  var UploadAdapter;
  function get_NullableStringAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableStringAdapter;
  }
  var NullableStringAdapter;
  function get_NullableDoubleAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableDoubleAdapter;
  }
  var NullableDoubleAdapter;
  function get_NullableIntAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableIntAdapter;
  }
  var NullableIntAdapter;
  function get_NullableBooleanAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableBooleanAdapter;
  }
  var NullableBooleanAdapter;
  function get_NullableAnyAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableAnyAdapter;
  }
  var NullableAnyAdapter;
  function get_ApolloOptionalStringAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return ApolloOptionalStringAdapter;
  }
  var ApolloOptionalStringAdapter;
  function get_ApolloOptionalDoubleAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return ApolloOptionalDoubleAdapter;
  }
  var ApolloOptionalDoubleAdapter;
  function get_ApolloOptionalIntAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return ApolloOptionalIntAdapter;
  }
  var ApolloOptionalIntAdapter;
  function get_ApolloOptionalBooleanAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return ApolloOptionalBooleanAdapter;
  }
  var ApolloOptionalBooleanAdapter;
  function get_ApolloOptionalAnyAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return ApolloOptionalAnyAdapter;
  }
  var ApolloOptionalAnyAdapter;
  function nullable(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new NullableAdapter(_this__u8e3s4);
  }
  function _get_wrappedAdapter__23dfsx($this) {
    return $this.wrappedAdapter_1;
  }
  function NullableAdapter(wrappedAdapter) {
    this.wrappedAdapter_1 = wrappedAdapter;
    // Inline function 'kotlin.check' call
    var tmp = this.wrappedAdapter_1;
    var tmp0_check = !(tmp instanceof NullableAdapter);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.NullableAdapter.<anonymous>' call
      tmp$ret$0 = 'The adapter is already nullable';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  NullableAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    var tmp;
    if (reader.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      reader.skipValue_18a9r5_k$();
      tmp = null;
    } else {
      tmp = this.wrappedAdapter_1.fromJson_vznj7e_k$(reader, customScalarAdapters);
    }
    return tmp;
  };
  NullableAdapter.prototype.toJson_r81dz4_k$ = function (writer, customScalarAdapters, value) {
    if (value == null) {
      writer.nullValue_h3u4a2_k$();
    } else {
      this.wrappedAdapter_1.toJson_gtgp5p_k$(writer, customScalarAdapters, value);
    }
  };
  NullableAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_r81dz4_k$(writer, customScalarAdapters, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function obj(_this__u8e3s4, buffered) {
    init_properties_Adapters_kt_a8j8k6();
    return new ObjectAdapter(_this__u8e3s4, buffered);
  }
  function obj$default(_this__u8e3s4, buffered, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      buffered = false;
    return obj(_this__u8e3s4, buffered);
  }
  function _get_wrappedAdapter__23dfsx_0($this) {
    return $this.wrappedAdapter_1;
  }
  function _get_buffered__piv6x8($this) {
    return $this.buffered_1;
  }
  function ObjectAdapter(wrappedAdapter, buffered) {
    this.wrappedAdapter_1 = wrappedAdapter;
    this.buffered_1 = buffered;
  }
  ObjectAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    var tmp;
    if (this.buffered_1) {
      tmp = Companion_getInstance_8().buffer_f9k3tr_k$(reader);
    } else {
      tmp = reader;
    }
    var actualReader = tmp;
    actualReader.beginObject_5wddq0_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.wrappedAdapter_1.fromJson_vznj7e_k$(actualReader, customScalarAdapters);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.ObjectAdapter.fromJson.<anonymous>' call
    actualReader.endObject_ofuv3u_k$();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  ObjectAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    var tmp;
    if (this.buffered_1) {
      tmp = !(writer instanceof MapJsonWriter);
    } else {
      tmp = false;
    }
    if (tmp) {
      var mapWriter = new MapJsonWriter();
      mapWriter.beginObject_5wddq0_k$();
      this.wrappedAdapter_1.toJson_gtgp5p_k$(mapWriter, customScalarAdapters, value);
      mapWriter.endObject_ofuv3u_k$();
      writeAny(writer, ensureNotNull(mapWriter.root_235k2_k$()));
    } else {
      writer.beginObject_5wddq0_k$();
      this.wrappedAdapter_1.toJson_gtgp5p_k$(writer, customScalarAdapters, value);
      writer.endObject_ofuv3u_k$();
    }
  };
  function list(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new ListAdapter(_this__u8e3s4);
  }
  function _get_wrappedAdapter__23dfsx_1($this) {
    return $this.wrappedAdapter_1;
  }
  function ListAdapter(wrappedAdapter) {
    this.wrappedAdapter_1 = wrappedAdapter;
  }
  ListAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    reader.beginArray_hxn19s_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    while (reader.hasNext_bitz1p_k$()) {
      list.add_1j60pz_k$(this.wrappedAdapter_1.fromJson_vznj7e_k$(reader, customScalarAdapters));
    }
    reader.endArray_s2tmpq_k$();
    return list;
  };
  ListAdapter.prototype.toJson_ievkeh_k$ = function (writer, customScalarAdapters, value) {
    writer.beginArray_hxn19s_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = value.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.apollographql.apollo3.api.ListAdapter.toJson.<anonymous>' call
      this.wrappedAdapter_1.toJson_gtgp5p_k$(writer, customScalarAdapters, element);
    }
    writer.endArray_s2tmpq_k$();
  };
  ListAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_ievkeh_k$(writer, customScalarAdapters, (!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
  };
  function present(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new PresentAdapter(_this__u8e3s4);
  }
  function _get_wrappedAdapter__23dfsx_2($this) {
    return $this.wrappedAdapter_1;
  }
  function PresentAdapter(wrappedAdapter) {
    this.wrappedAdapter_1 = wrappedAdapter;
  }
  PresentAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return new Present(this.wrappedAdapter_1.fromJson_vznj7e_k$(reader, customScalarAdapters));
  };
  PresentAdapter.prototype.toJson_pbe5tt_k$ = function (writer, customScalarAdapters, value) {
    this.wrappedAdapter_1.toJson_gtgp5p_k$(writer, customScalarAdapters, value.get_value_j01efc_k$());
  };
  PresentAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_pbe5tt_k$(writer, customScalarAdapters, value instanceof Present ? value : THROW_CCE());
  };
  function _get_wrappedAdapter__23dfsx_3($this) {
    return $this.wrappedAdapter_1;
  }
  function ApolloOptionalAdapter(wrappedAdapter) {
    this.wrappedAdapter_1 = wrappedAdapter;
  }
  ApolloOptionalAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    var tmp;
    if (reader.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      reader.skipValue_18a9r5_k$();
      tmp = Absent_getInstance();
    } else {
      tmp = new Present(this.wrappedAdapter_1.fromJson_vznj7e_k$(reader, customScalarAdapters));
    }
    return tmp;
  };
  ApolloOptionalAdapter.prototype.toJson_oqb974_k$ = function (writer, customScalarAdapters, value) {
    if (value instanceof Present) {
      this.wrappedAdapter_1.toJson_gtgp5p_k$(writer, customScalarAdapters, value.get_value_j01efc_k$());
    } else {
      writer.nullValue_h3u4a2_k$();
    }
  };
  ApolloOptionalAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_oqb974_k$(writer, customScalarAdapters, value instanceof Optional ? value : THROW_CCE());
  };
  function PassThroughAdapter() {
  }
  PassThroughAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader instanceof MapJsonReader)) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.PassThroughAdapter.fromJson.<anonymous>' call
      tmp$ret$0 = 'UnsafeAdapter only supports MapJsonReader';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = reader.nextValue_jzf51a_k$();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  PassThroughAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer instanceof MapJsonWriter)) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.PassThroughAdapter.toJson.<anonymous>' call
      tmp$ret$0 = 'UnsafeAdapter only supports MapJsonWriter';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    writer.value_oig1rm_k$(value);
  };
  function StringAdapter$1() {
  }
  StringAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return ensureNotNull(reader.nextString_kwkc9o_k$());
  };
  StringAdapter$1.prototype.toJson_eb77ll_k$ = function (writer, customScalarAdapters, value) {
    writer.value_h8ym4w_k$(value);
  };
  StringAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_eb77ll_k$(writer, customScalarAdapters, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  function IntAdapter$1() {
  }
  IntAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return reader.nextInt_ujorgc_k$();
  };
  IntAdapter$1.prototype.toJson_1k0zjr_k$ = function (writer, customScalarAdapters, value) {
    writer.value_7nxl9s_k$(value);
  };
  IntAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_1k0zjr_k$(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function DoubleAdapter$1() {
  }
  DoubleAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return reader.nextDouble_s2xvfg_k$();
  };
  DoubleAdapter$1.prototype.toJson_sr4wop_k$ = function (writer, customScalarAdapters, value) {
    writer.value_ofc5ao_k$(value);
  };
  DoubleAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_sr4wop_k$(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function FloatAdapter$1() {
  }
  FloatAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return reader.nextDouble_s2xvfg_k$();
  };
  FloatAdapter$1.prototype.toJson_j89lpg_k$ = function (writer, customScalarAdapters, value) {
    writer.value_ofc5ao_k$(value);
  };
  FloatAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_j89lpg_k$(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function LongAdapter$1() {
  }
  LongAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return reader.nextLong_njwv0v_k$();
  };
  LongAdapter$1.prototype.toJson_gtjoqa_k$ = function (writer, customScalarAdapters, value) {
    writer.value_oin34r_k$(value);
  };
  LongAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_gtjoqa_k$(writer, customScalarAdapters, value instanceof Long ? value : THROW_CCE());
  };
  function BooleanAdapter$1() {
  }
  BooleanAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return reader.nextBoolean_nfdk1h_k$();
  };
  BooleanAdapter$1.prototype.toJson_fia53k_k$ = function (writer, customScalarAdapters, value) {
    writer.value_5b51sn_k$(value);
  };
  BooleanAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_fia53k_k$(writer, customScalarAdapters, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  function AnyAdapter$1() {
  }
  AnyAdapter$1.prototype.fromJson_1yvzid_k$ = function (reader) {
    return ensureNotNull(readAny(reader));
  };
  AnyAdapter$1.prototype.toJson_i6c82h_k$ = function (writer, value) {
    writeAny(writer, value);
  };
  AnyAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    return this.fromJson_1yvzid_k$(reader);
  };
  AnyAdapter$1.prototype.toJson_c3j56c_k$ = function (writer, customScalarAdapters, value) {
    this.toJson_i6c82h_k$(writer, value);
  };
  AnyAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_c3j56c_k$(writer, customScalarAdapters, isObject(value) ? value : THROW_CCE());
  };
  function UploadAdapter$1() {
  }
  UploadAdapter$1.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('File Upload used in output position');
  };
  UploadAdapter$1.prototype.toJson_p0fo97_k$ = function (writer, customScalarAdapters, value) {
    writer.value_b5cpri_k$(value);
  };
  UploadAdapter$1.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    return this.toJson_p0fo97_k$(writer, customScalarAdapters, (!(value == null) ? isInterface(value, Upload) : false) ? value : THROW_CCE());
  };
  var properties_initialized_Adapters_kt_fd10e2;
  function init_properties_Adapters_kt_a8j8k6() {
    if (properties_initialized_Adapters_kt_fd10e2) {
    } else {
      properties_initialized_Adapters_kt_fd10e2 = true;
      StringAdapter = new StringAdapter$1();
      IntAdapter = new IntAdapter$1();
      DoubleAdapter = new DoubleAdapter$1();
      FloatAdapter = new FloatAdapter$1();
      LongAdapter = new LongAdapter$1();
      BooleanAdapter = new BooleanAdapter$1();
      AnyAdapter = new AnyAdapter$1();
      UploadAdapter = new UploadAdapter$1();
      NullableStringAdapter = nullable(get_StringAdapter());
      NullableDoubleAdapter = nullable(get_DoubleAdapter());
      NullableIntAdapter = nullable(get_IntAdapter());
      NullableBooleanAdapter = nullable(get_BooleanAdapter());
      NullableAnyAdapter = nullable(get_AnyAdapter());
      ApolloOptionalStringAdapter = new ApolloOptionalAdapter(get_StringAdapter());
      ApolloOptionalDoubleAdapter = new ApolloOptionalAdapter(get_DoubleAdapter());
      ApolloOptionalIntAdapter = new ApolloOptionalAdapter(get_IntAdapter());
      ApolloOptionalBooleanAdapter = new ApolloOptionalAdapter(get_BooleanAdapter());
      ApolloOptionalAnyAdapter = new ApolloOptionalAdapter(get_AnyAdapter());
    }
  }
  function _set_operation__k654qm($this, _set____db54di) {
    $this.operation_1 = _set____db54di;
  }
  function _get_operation__lk4gty($this) {
    return $this.operation_1;
  }
  function _set_requestUuid__igww2j($this, _set____db54di) {
    $this.requestUuid_1 = _set____db54di;
  }
  function _get_requestUuid__m9szkp($this) {
    return $this.requestUuid_1;
  }
  function Builder_0(operation) {
    this.operation_1 = operation;
    this.requestUuid_1 = uuid4();
    this.executionContext_1 = Companion_getInstance_1().get_Empty_i9b85g_k$();
    this.httpMethod_1 = null;
    this.httpHeaders_1 = null;
    this.sendApqExtensions_1 = null;
    this.sendDocument_1 = null;
    this.enableAutoPersistedQueries_1 = null;
    this.canBeBatched_1 = null;
  }
  Builder_0.prototype.set_executionContext_fwqssw_k$ = function (_set____db54di) {
    this.executionContext_1 = _set____db54di;
  };
  Builder_0.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  Builder_0.prototype.set_httpMethod_m4snrr_k$ = function (_set____db54di) {
    this.httpMethod_1 = _set____db54di;
  };
  Builder_0.prototype.get_httpMethod_7r1vce_k$ = function () {
    return this.httpMethod_1;
  };
  Builder_0.prototype.httpMethod_mbfwat_k$ = function (httpMethod) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.httpMethod.<anonymous>' call
    this.httpMethod_1 = httpMethod;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.set_httpHeaders_i9dhf8_k$ = function (_set____db54di) {
    this.httpHeaders_1 = _set____db54di;
  };
  Builder_0.prototype.get_httpHeaders_tuo13f_k$ = function () {
    return this.httpHeaders_1;
  };
  Builder_0.prototype.httpHeaders_fukdgi_k$ = function (httpHeaders) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.httpHeaders.<anonymous>' call
    this.httpHeaders_1 = httpHeaders;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.addHttpHeader_fpgff0_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addHttpHeader.<anonymous>' call
    var tmp = this;
    var tmp0_elvis_lhs = this.httpHeaders_1;
    tmp.httpHeaders_1 = plus(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, new HttpHeader(name, value));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.set_sendApqExtensions_tur69x_k$ = function (_set____db54di) {
    this.sendApqExtensions_1 = _set____db54di;
  };
  Builder_0.prototype.get_sendApqExtensions_p33jid_k$ = function () {
    return this.sendApqExtensions_1;
  };
  Builder_0.prototype.sendApqExtensions_s8cozx_k$ = function (sendApqExtensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.sendApqExtensions.<anonymous>' call
    this.sendApqExtensions_1 = sendApqExtensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.set_sendDocument_4zxx84_k$ = function (_set____db54di) {
    this.sendDocument_1 = _set____db54di;
  };
  Builder_0.prototype.get_sendDocument_ps1uz0_k$ = function () {
    return this.sendDocument_1;
  };
  Builder_0.prototype.sendDocument_ua794o_k$ = function (sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.sendDocument.<anonymous>' call
    this.sendDocument_1 = sendDocument;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.set_enableAutoPersistedQueries_kn9xsm_k$ = function (_set____db54di) {
    this.enableAutoPersistedQueries_1 = _set____db54di;
  };
  Builder_0.prototype.get_enableAutoPersistedQueries_25oqhe_k$ = function () {
    return this.enableAutoPersistedQueries_1;
  };
  Builder_0.prototype.enableAutoPersistedQueries_t48c6i_k$ = function (enableAutoPersistedQueries) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.enableAutoPersistedQueries.<anonymous>' call
    this.enableAutoPersistedQueries_1 = enableAutoPersistedQueries;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.set_canBeBatched_o31xef_k$ = function (_set____db54di) {
    this.canBeBatched_1 = _set____db54di;
  };
  Builder_0.prototype.get_canBeBatched_43ofm9_k$ = function () {
    return this.canBeBatched_1;
  };
  Builder_0.prototype.canBeBatched_cioqad_k$ = function (canBeBatched) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.canBeBatched.<anonymous>' call
    this.canBeBatched_1 = canBeBatched;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.requestUuid_djb4cm_k$ = function (requestUuid) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.requestUuid.<anonymous>' call
    this.requestUuid_1 = requestUuid;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.executionContext_k6g5r6_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.executionContext.<anonymous>' call
    this.executionContext_1 = executionContext;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.addExecutionContext_h7mjnh_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addExecutionContext.<anonymous>' call
    this.executionContext_1 = this.executionContext_1.plus_r8myed_k$(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.build_1k0s4u_k$ = function () {
    return new ApolloRequest(this.operation_1, this.requestUuid_1, this.executionContext_1, this.httpMethod_1, this.httpHeaders_1, this.sendApqExtensions_1, this.sendDocument_1, this.enableAutoPersistedQueries_1, this.canBeBatched_1);
  };
  function ApolloRequest(operation, requestUuid, executionContext, httpMethod, httpHeaders, sendApqExtensions, sendDocument, enableAutoPersistedQueries, canBeBatched) {
    this.operation_1 = operation;
    this.requestUuid_1 = requestUuid;
    this.executionContext_1 = executionContext;
    this.httpMethod_1 = httpMethod;
    this.httpHeaders_1 = httpHeaders;
    this.sendApqExtensions_1 = sendApqExtensions;
    this.sendDocument_1 = sendDocument;
    this.enableAutoPersistedQueries_1 = enableAutoPersistedQueries;
    this.canBeBatched_1 = canBeBatched;
  }
  ApolloRequest.prototype.get_operation_z0nqyq_k$ = function () {
    return this.operation_1;
  };
  ApolloRequest.prototype.get_requestUuid_wwyd8h_k$ = function () {
    return this.requestUuid_1;
  };
  ApolloRequest.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  ApolloRequest.prototype.get_httpMethod_7r1vce_k$ = function () {
    return this.httpMethod_1;
  };
  ApolloRequest.prototype.get_httpHeaders_tuo13f_k$ = function () {
    return this.httpHeaders_1;
  };
  ApolloRequest.prototype.get_sendApqExtensions_p33jid_k$ = function () {
    return this.sendApqExtensions_1;
  };
  ApolloRequest.prototype.get_sendDocument_ps1uz0_k$ = function () {
    return this.sendDocument_1;
  };
  ApolloRequest.prototype.get_enableAutoPersistedQueries_25oqhe_k$ = function () {
    return this.enableAutoPersistedQueries_1;
  };
  ApolloRequest.prototype.get_canBeBatched_43ofm9_k$ = function () {
    return this.canBeBatched_1;
  };
  ApolloRequest.prototype.newBuilder_dnl2aj_k$ = function () {
    return this.newBuilder_p788ft_k$(this.operation_1);
  };
  ApolloRequest.prototype.newBuilder_p788ft_k$ = function (operation) {
    return (new Builder_0(operation)).requestUuid_djb4cm_k$(this.requestUuid_1).executionContext_k6g5r6_k$(this.executionContext_1).httpMethod_mbfwat_k$(this.httpMethod_1).httpHeaders_fukdgi_k$(this.httpHeaders_1).sendApqExtensions_s8cozx_k$(this.sendApqExtensions_1).sendDocument_ua794o_k$(this.sendDocument_1).enableAutoPersistedQueries_t48c6i_k$(this.enableAutoPersistedQueries_1).canBeBatched_cioqad_k$(this.canBeBatched_1);
  };
  function _get_operation__lk4gty_0($this) {
    return $this.operation_1;
  }
  function _set_requestUuid__igww2j_0($this, _set____db54di) {
    $this.requestUuid_1 = _set____db54di;
  }
  function _get_requestUuid__m9szkp_0($this) {
    return $this.requestUuid_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function _set_executionContext__hhsp8g($this, _set____db54di) {
    $this.executionContext_1 = _set____db54di;
  }
  function _get_executionContext__blbjuc($this) {
    return $this.executionContext_1;
  }
  function _set_errors__bvce8c($this, _set____db54di) {
    $this.errors_1 = _set____db54di;
  }
  function _get_errors__dc2yv4($this) {
    return $this.errors_1;
  }
  function _set_extensions__ke47p9($this, _set____db54di) {
    $this.extensions_1 = _set____db54di;
  }
  function _get_extensions__zgcsuh($this) {
    return $this.extensions_1;
  }
  function _set_isLast__ka021($this, _set____db54di) {
    $this.isLast_1 = _set____db54di;
  }
  function _get_isLast__wgkkr($this) {
    return $this.isLast_1;
  }
  function Builder_1(operation, requestUuid, data) {
    this.operation_1 = operation;
    this.requestUuid_1 = requestUuid;
    this.data_1 = data;
    this.executionContext_1 = Companion_getInstance_1().get_Empty_i9b85g_k$();
    this.errors_1 = null;
    this.extensions_1 = null;
    this.isLast_1 = false;
  }
  Builder_1.prototype.addExecutionContext_h7mjnh_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addExecutionContext.<anonymous>' call
    this.executionContext_1 = this.executionContext_1.plus_r8myed_k$(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.errors_fkcc82_k$ = function (errors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.errors.<anonymous>' call
    this.errors_1 = errors;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.extensions_iukunq_k$ = function (extensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.extensions.<anonymous>' call
    this.extensions_1 = extensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.requestUuid_djb4cm_k$ = function (requestUuid) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.requestUuid.<anonymous>' call
    this.requestUuid_1 = requestUuid;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.isLast_p26n52_k$ = function (isLast) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.isLast.<anonymous>' call
    this.isLast_1 = isLast;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.build_1k0s4u_k$ = function () {
    var tmp1_operation = this.operation_1;
    var tmp2_requestUuid = this.requestUuid_1;
    var tmp3_data = this.data_1;
    var tmp4_executionContext = this.executionContext_1;
    var tmp0_elvis_lhs = this.extensions_1;
    var tmp5_extensions = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    var tmp6_errors = this.errors_1;
    var tmp7_isLast = this.isLast_1;
    return new ApolloResponse(tmp2_requestUuid, tmp1_operation, tmp3_data, tmp6_errors, tmp5_extensions, tmp4_executionContext, tmp7_isLast);
  };
  function ApolloResponse(requestUuid, operation, data, errors, extensions, executionContext, isLast) {
    this.requestUuid_1 = requestUuid;
    this.operation_1 = operation;
    this.data_1 = data;
    this.errors_1 = errors;
    this.extensions_1 = extensions;
    this.executionContext_1 = executionContext;
    this.isLast_1 = isLast;
  }
  ApolloResponse.prototype.get_requestUuid_wwyd8h_k$ = function () {
    return this.requestUuid_1;
  };
  ApolloResponse.prototype.get_operation_z0nqyq_k$ = function () {
    return this.operation_1;
  };
  ApolloResponse.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  ApolloResponse.prototype.get_errors_czzmno_k$ = function () {
    return this.errors_1;
  };
  ApolloResponse.prototype.get_extensions_kxksyl_k$ = function () {
    return this.extensions_1;
  };
  ApolloResponse.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  ApolloResponse.prototype.get_isLast_ew1cyx_k$ = function () {
    return this.isLast_1;
  };
  ApolloResponse.prototype.get_dataAssertNoErrors_kaff3v_k$ = function () {
    var tmp;
    if (this.hasErrors_b5t4kb_k$()) {
      var tmp_0 = 'The response has errors: ' + this.errors_1;
      throw ApolloException_init_$Create$(tmp_0, null, 2, null);
    } else {
      var tmp0_elvis_lhs = this.data_1;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        throw ApolloException_init_$Create$('The server did not return any data', null, 2, null);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  ApolloResponse.prototype.hasErrors_b5t4kb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = this.errors_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : tmp0_isNullOrEmpty.isEmpty_y1axqb_k$();
    return !tmp$ret$0;
  };
  ApolloResponse.prototype.newBuilder_dnl2aj_k$ = function () {
    return (new Builder_1(this.operation_1, this.requestUuid_1, this.data_1)).errors_fkcc82_k$(this.errors_1).extensions_iukunq_k$(this.extensions_1).addExecutionContext_h7mjnh_k$(this.executionContext_1).isLast_p26n52_k$(this.isLast_1);
  };
  function possibleTypes(typenames) {
    return new Element(new BPossibleTypes(toSet(typenames)));
  }
  function Or_init_$Init$(operands, $this) {
    Or.call($this, toSet(operands));
    return $this;
  }
  function Or_init_$Create$(operands) {
    return Or_init_$Init$(operands, Object.create(Or.prototype));
  }
  function And_init_$Init$(operands, $this) {
    And.call($this, toSet(operands));
    return $this;
  }
  function And_init_$Create$(operands) {
    return And_init_$Init$(operands, Object.create(And.prototype));
  }
  function True() {
    True_instance = this;
    BooleanExpression.call(this);
  }
  True.prototype.simplify_815hjd_k$ = function () {
    return this;
  };
  var True_instance;
  function True_getInstance() {
    if (True_instance == null)
      new True();
    return True_instance;
  }
  function False() {
    False_instance = this;
    BooleanExpression.call(this);
  }
  False.prototype.simplify_815hjd_k$ = function () {
    return this;
  };
  var False_instance;
  function False_getInstance() {
    if (False_instance == null)
      new False();
    return False_instance;
  }
  function Not(operand) {
    BooleanExpression.call(this);
    this.operand_1 = operand;
  }
  Not.prototype.get_operand_jmg3ds_k$ = function () {
    return this.operand_1;
  };
  Not.prototype.simplify_815hjd_k$ = function () {
    var tmp0_subject = this.operand_1;
    var tmp;
    if (tmp0_subject instanceof True) {
      tmp = False_getInstance();
    } else {
      if (tmp0_subject instanceof False) {
        tmp = True_getInstance();
      } else {
        tmp = this;
      }
    }
    return tmp;
  };
  Not.prototype.component1_7eebsc_k$ = function () {
    return this.operand_1;
  };
  Not.prototype.copy_hfykmn_k$ = function (operand) {
    return new Not(operand);
  };
  Not.prototype.copy$default_xjkpnd_k$ = function (operand, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operand = this.operand_1;
    return this.copy_hfykmn_k$(operand);
  };
  Not.prototype.toString = function () {
    return 'Not(operand=' + this.operand_1 + ')';
  };
  Not.prototype.hashCode = function () {
    return hashCode(this.operand_1);
  };
  Not.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Not))
      return false;
    var tmp0_other_with_cast = other instanceof Not ? other : THROW_CCE();
    if (!equals(this.operand_1, tmp0_other_with_cast.operand_1))
      return false;
    return true;
  };
  function Or(operands) {
    BooleanExpression.call(this);
    this.operands_1 = operands;
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.operands_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.Or.<anonymous>' call
      tmp$ret$1 = "Apollo: cannot create a 'Or' condition from an empty list";
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  Or.prototype.get_operands_uy5l03_k$ = function () {
    return this.operands_1;
  };
  Or.prototype.simplify_815hjd_k$ = function () {
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this.operands_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.Or.simplify.<anonymous>' call
      tmp$ret$0 = !equals(element, False_getInstance());
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp3_map = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp2_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map, 10));
    var tmp0_iterator_0 = tmp3_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'com.apollographql.apollo3.api.Or.simplify.<anonymous>' call
      tmp$ret$3 = item.simplify_815hjd_k$();
      tmp2_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp2_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp4_let = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'com.apollographql.apollo3.api.Or.simplify.<anonymous>' call
    var tmp;
    if (tmp4_let.contains_2ehdt1_k$(True_getInstance())) {
      tmp = True_getInstance();
    } else if (tmp4_let.isEmpty_y1axqb_k$()) {
      tmp = False_getInstance();
    } else if (tmp4_let.get_size_woubt6_k$() === 1) {
      tmp = first(tmp4_let);
    } else {
      tmp = new Or(toSet_0(tmp4_let));
    }
    tmp$ret$6 = tmp;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  };
  Or.prototype.toString = function () {
    return joinToString$default(this.operands_1, ' | ', null, null, 0, null, null, 62, null);
  };
  Or.prototype.component1_7eebsc_k$ = function () {
    return this.operands_1;
  };
  Or.prototype.copy_q0ir0d_k$ = function (operands) {
    return new Or(operands);
  };
  Or.prototype.copy$default_mr1v75_k$ = function (operands, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operands = this.operands_1;
    return this.copy_q0ir0d_k$(operands);
  };
  Or.prototype.hashCode = function () {
    return hashCode(this.operands_1);
  };
  Or.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Or))
      return false;
    var tmp0_other_with_cast = other instanceof Or ? other : THROW_CCE();
    if (!equals(this.operands_1, tmp0_other_with_cast.operands_1))
      return false;
    return true;
  };
  function And(operands) {
    BooleanExpression.call(this);
    this.operands_1 = operands;
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.operands_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.And.<anonymous>' call
      tmp$ret$1 = "Apollo: cannot create a 'And' condition from an empty list";
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  And.prototype.get_operands_uy5l03_k$ = function () {
    return this.operands_1;
  };
  And.prototype.simplify_815hjd_k$ = function () {
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this.operands_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.And.simplify.<anonymous>' call
      tmp$ret$0 = !equals(element, True_getInstance());
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp3_map = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp2_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map, 10));
    var tmp0_iterator_0 = tmp3_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'com.apollographql.apollo3.api.And.simplify.<anonymous>' call
      tmp$ret$3 = item.simplify_815hjd_k$();
      tmp2_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp2_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp4_let = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'com.apollographql.apollo3.api.And.simplify.<anonymous>' call
    var tmp;
    if (tmp4_let.contains_2ehdt1_k$(False_getInstance())) {
      tmp = False_getInstance();
    } else if (tmp4_let.isEmpty_y1axqb_k$()) {
      tmp = True_getInstance();
    } else if (tmp4_let.get_size_woubt6_k$() === 1) {
      tmp = first(tmp4_let);
    } else {
      tmp = new And(toSet_0(tmp4_let));
    }
    tmp$ret$6 = tmp;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  };
  And.prototype.component1_7eebsc_k$ = function () {
    return this.operands_1;
  };
  And.prototype.copy_q0ir0d_k$ = function (operands) {
    return new And(operands);
  };
  And.prototype.copy$default_mr1v75_k$ = function (operands, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operands = this.operands_1;
    return this.copy_q0ir0d_k$(operands);
  };
  And.prototype.toString = function () {
    return 'And(operands=' + this.operands_1 + ')';
  };
  And.prototype.hashCode = function () {
    return hashCode(this.operands_1);
  };
  And.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof And))
      return false;
    var tmp0_other_with_cast = other instanceof And ? other : THROW_CCE();
    if (!equals(this.operands_1, tmp0_other_with_cast.operands_1))
      return false;
    return true;
  };
  function Element(value) {
    BooleanExpression.call(this);
    this.value_1 = value;
  }
  Element.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Element.prototype.simplify_815hjd_k$ = function () {
    return this;
  };
  Element.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Element.prototype.copy_mek8hi_k$ = function (value) {
    return new Element(value);
  };
  Element.prototype.copy$default_dovemi_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_mek8hi_k$(value);
  };
  Element.prototype.toString = function () {
    return 'Element(value=' + this.value_1 + ')';
  };
  Element.prototype.hashCode = function () {
    return hashCode(this.value_1);
  };
  Element.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Element))
      return false;
    var tmp0_other_with_cast = other instanceof Element ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function BooleanExpression() {
  }
  function BPossibleTypes_init_$Init$(types, $this) {
    BPossibleTypes.call($this, toSet(types));
    return $this;
  }
  function BPossibleTypes_init_$Create$(types) {
    return BPossibleTypes_init_$Init$(types, Object.create(BPossibleTypes.prototype));
  }
  function BPossibleTypes(possibleTypes) {
    BTerm.call(this);
    this.possibleTypes_1 = possibleTypes;
  }
  BPossibleTypes.prototype.get_possibleTypes_8irdlt_k$ = function () {
    return this.possibleTypes_1;
  };
  BPossibleTypes.prototype.component1_7eebsc_k$ = function () {
    return this.possibleTypes_1;
  };
  BPossibleTypes.prototype.copy_ru024q_k$ = function (possibleTypes) {
    return new BPossibleTypes(possibleTypes);
  };
  BPossibleTypes.prototype.copy$default_ov04yk_k$ = function (possibleTypes, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      possibleTypes = this.possibleTypes_1;
    return this.copy_ru024q_k$(possibleTypes);
  };
  BPossibleTypes.prototype.toString = function () {
    return 'BPossibleTypes(possibleTypes=' + this.possibleTypes_1 + ')';
  };
  BPossibleTypes.prototype.hashCode = function () {
    return hashCode(this.possibleTypes_1);
  };
  BPossibleTypes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BPossibleTypes))
      return false;
    var tmp0_other_with_cast = other instanceof BPossibleTypes ? other : THROW_CCE();
    if (!equals(this.possibleTypes_1, tmp0_other_with_cast.possibleTypes_1))
      return false;
    return true;
  };
  function evaluate(_this__u8e3s4, variables, typename, adapterContext, path) {
    var tmp0_safe_receiver = path;
    var croppedPath = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    return evaluate_0(_this__u8e3s4, evaluate$lambda(variables, adapterContext, croppedPath, typename));
  }
  function and(other) {
    return new And(toSet_0(toList(other)));
  }
  function variable(name) {
    return new Element(new BVariable(name));
  }
  function BVariable(name) {
    BTerm.call(this);
    this.name_1 = name;
  }
  BVariable.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  BVariable.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  BVariable.prototype.copy_3t26ic_k$ = function (name) {
    return new BVariable(name);
  };
  BVariable.prototype.copy$default_q3pzg4_k$ = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    return this.copy_3t26ic_k$(name);
  };
  BVariable.prototype.toString = function () {
    return 'BVariable(name=' + this.name_1 + ')';
  };
  BVariable.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  BVariable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BVariable))
      return false;
    var tmp0_other_with_cast = other instanceof BVariable ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function BTerm() {
  }
  function evaluate_0(_this__u8e3s4, block) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, True_getInstance())) {
      tmp = true;
    } else {
      if (equals(tmp0_subject, False_getInstance())) {
        tmp = false;
      } else {
        if (tmp0_subject instanceof Not) {
          tmp = !evaluate_0(_this__u8e3s4.operand_1, block);
        } else {
          if (tmp0_subject instanceof Or) {
            var tmp$ret$0;
            $l$block_0: {
              // Inline function 'kotlin.collections.any' call
              var tmp0_any = _this__u8e3s4.operands_1;
              var tmp_0;
              if (isInterface(tmp0_any, Collection)) {
                tmp_0 = tmp0_any.isEmpty_y1axqb_k$();
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
              var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                var tmp$ret$1;
                // Inline function 'com.apollographql.apollo3.api.evaluate.<anonymous>' call
                tmp$ret$1 = evaluate_0(element, block);
                if (tmp$ret$1) {
                  tmp$ret$0 = true;
                  break $l$block_0;
                }
              }
              tmp$ret$0 = false;
            }
            tmp = tmp$ret$0;
          } else {
            if (tmp0_subject instanceof And) {
              var tmp$ret$2;
              $l$block_2: {
                // Inline function 'kotlin.collections.all' call
                var tmp1_all = _this__u8e3s4.operands_1;
                var tmp_1;
                if (isInterface(tmp1_all, Collection)) {
                  tmp_1 = tmp1_all.isEmpty_y1axqb_k$();
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  tmp$ret$2 = true;
                  break $l$block_2;
                }
                var tmp0_iterator_0 = tmp1_all.iterator_jk1svi_k$();
                while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                  var element_0 = tmp0_iterator_0.next_20eer_k$();
                  var tmp$ret$3;
                  // Inline function 'com.apollographql.apollo3.api.evaluate.<anonymous>' call
                  tmp$ret$3 = evaluate_0(element_0, block);
                  if (!tmp$ret$3) {
                    tmp$ret$2 = false;
                    break $l$block_2;
                  }
                }
                tmp$ret$2 = true;
              }
              tmp = tmp$ret$2;
            } else {
              if (tmp0_subject instanceof Element) {
                tmp = block(_this__u8e3s4.value_1);
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function BLabel(label) {
    BTerm.call(this);
    this.label_1 = label;
  }
  BLabel.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  BLabel.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  BLabel.prototype.copy_o1ci45_k$ = function (label) {
    return new BLabel(label);
  };
  BLabel.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  BLabel.prototype.toString = function () {
    return 'BLabel(label=' + this.label_1 + ')';
  };
  BLabel.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  BLabel.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BLabel))
      return false;
    var tmp0_other_with_cast = other instanceof BLabel ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  function evaluate$lambda($variables, $adapterContext, $croppedPath, $typename) {
    return function (it) {
      var tmp0_subject = it;
      var tmp;
      if (tmp0_subject instanceof BVariable) {
        tmp = !$variables.contains_2ehdt1_k$(it.name_1);
      } else {
        if (tmp0_subject instanceof BLabel) {
          tmp = $adapterContext.hasDeferredFragment_x07n3_k$(ensureNotNull($croppedPath), it.label_1);
        } else {
          if (tmp0_subject instanceof BPossibleTypes) {
            tmp = contains(it.possibleTypes_1, $typename);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      return tmp;
    };
  }
  function get_CompiledStringType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledStringType;
  }
  var CompiledStringType;
  function get_CompiledIntType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledIntType;
  }
  var CompiledIntType;
  function get_CompiledFloatType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledFloatType;
  }
  var CompiledFloatType;
  function get_CompiledBooleanType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledBooleanType;
  }
  var CompiledBooleanType;
  function get_CompiledIDType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledIDType;
  }
  var CompiledIDType;
  function get_CompiledSchemaType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledSchemaType;
  }
  var CompiledSchemaType;
  function get_CompiledTypeType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledTypeType;
  }
  var CompiledTypeType;
  function get_CompiledFieldType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledFieldType;
  }
  var CompiledFieldType;
  function get_CompiledInputValueType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledInputValueType;
  }
  var CompiledInputValueType;
  function get_CompiledEnumValueType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledEnumValueType;
  }
  var CompiledEnumValueType;
  function get_CompiledDirectiveType() {
    init_properties_CompiledGraphQL_kt_nwteck();
    return CompiledDirectiveType;
  }
  var CompiledDirectiveType;
  function CustomScalarType(name, className) {
    CompiledNamedType.call(this, name);
    this.className_1 = className;
  }
  CustomScalarType.prototype.get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function _set_alias__c52a5x($this, _set____db54di) {
    $this.alias_1 = _set____db54di;
  }
  function _get_alias__jw26bj($this) {
    return $this.alias_1;
  }
  function _set_condition__4pfwne($this, _set____db54di) {
    $this.condition_1 = _set____db54di;
  }
  function _get_condition__y0ad1y($this) {
    return $this.condition_1;
  }
  function _set_arguments__t1huc1($this, _set____db54di) {
    $this.arguments_1 = _set____db54di;
  }
  function _get_arguments__9cm2j($this) {
    return $this.arguments_1;
  }
  function _set_selections__cf4m40($this, _set____db54di) {
    $this.selections_1 = _set____db54di;
  }
  function _get_selections__rhd798($this) {
    return $this.selections_1;
  }
  function Builder_init_$Init$(compiledField, $this) {
    Builder_2.call($this, compiledField.name_1, compiledField.type_1);
    $this.alias_1 = compiledField.alias_1;
    $this.condition_1 = compiledField.condition_1;
    $this.arguments_1 = compiledField.arguments_1;
    $this.selections_1 = compiledField.selections_1;
    return $this;
  }
  function Builder_init_$Create$(compiledField) {
    return Builder_init_$Init$(compiledField, Object.create(Builder_2.prototype));
  }
  function Builder_2(name, type) {
    this.name_1 = name;
    this.type_1 = type;
    this.alias_1 = null;
    this.condition_1 = emptyList();
    this.arguments_1 = emptyList();
    this.selections_1 = emptyList();
  }
  Builder_2.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Builder_2.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Builder_2.prototype.alias_2qrk0g_k$ = function (alias) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.alias.<anonymous>' call
    this.alias_1 = alias;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.condition_i03xqp_k$ = function (condition) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.condition.<anonymous>' call
    this.condition_1 = condition;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.arguments_rqepyo_k$ = function (arguments_0) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.arguments.<anonymous>' call
    this.arguments_1 = arguments_0;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.selections_qw7166_k$ = function (selections) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.selections.<anonymous>' call
    this.selections_1 = selections;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.build_1k0s4u_k$ = function () {
    var tmp0_name = this.name_1;
    var tmp1_alias = this.alias_1;
    var tmp2_type = this.type_1;
    var tmp3_condition = this.condition_1;
    var tmp4_arguments = this.arguments_1;
    var tmp5_selections = this.selections_1;
    return new CompiledField(tmp0_name, tmp2_type, tmp1_alias, tmp3_condition, tmp4_arguments, tmp5_selections);
  };
  function CompiledField(name, type, alias, condition, arguments_0, selections) {
    CompiledSelection.call(this);
    this.name_1 = name;
    this.type_1 = type;
    this.alias_1 = alias;
    this.condition_1 = condition;
    this.arguments_1 = arguments_0;
    this.selections_1 = selections;
  }
  CompiledField.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  CompiledField.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  CompiledField.prototype.get_alias_iooo4n_k$ = function () {
    return this.alias_1;
  };
  CompiledField.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  CompiledField.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  CompiledField.prototype.get_selections_nhbmr4_k$ = function () {
    return this.selections_1;
  };
  CompiledField.prototype.get_responseName_scbvlh_k$ = function () {
    var tmp0_elvis_lhs = this.alias_1;
    return tmp0_elvis_lhs == null ? this.name_1 : tmp0_elvis_lhs;
  };
  CompiledField.prototype.resolveArgument_un2qm9_k$ = function (name, variables) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.arguments_1;
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.CompiledField.resolveArgument.<anonymous>' call
        tmp$ret$0 = element.name_1 === name;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return resolveVariables(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value_1, variables);
  };
  CompiledField.prototype.nameWithArguments_p1hi3i_k$ = function (variables) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.arguments_1;
      var tmp;
      if (isInterface(tmp0_any, Collection)) {
        tmp = tmp0_any.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.api.CompiledField.nameWithArguments.<anonymous>' call
        tmp$ret$1 = element.isPagination_1;
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var filterOutPaginationArguments = tmp$ret$0;
    var tmp_0;
    if (filterOutPaginationArguments) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.filterNot' call
      var tmp2_filterNot = this.arguments_1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp1_filterNotTo = ArrayList_init_$Create$();
      var tmp0_iterator_0 = tmp2_filterNot.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'com.apollographql.apollo3.api.CompiledField.nameWithArguments.<anonymous>' call
        tmp$ret$2 = element_0.isPagination_1;
        if (!tmp$ret$2) {
          tmp1_filterNotTo.add_1j60pz_k$(element_0);
        }
      }
      tmp$ret$3 = tmp1_filterNotTo;
      tmp$ret$4 = tmp$ret$3;
      tmp_0 = tmp$ret$4;
    } else {
      tmp_0 = this.arguments_1;
    }
    var arguments_0 = tmp_0;
    if (arguments_0.isEmpty_y1axqb_k$()) {
      return this.name_1;
    }
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$7;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(arguments_0, 10)), 16);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp3_associateByTo = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator_1 = arguments_0.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'com.apollographql.apollo3.api.CompiledField.nameWithArguments.<anonymous>' call
      tmp$ret$5 = element_1.name_1;
      tmp3_associateByTo.put_3mhbri_k$(tmp$ret$5, element_1);
    }
    tmp$ret$6 = tmp3_associateByTo;
    tmp$ret$7 = tmp$ret$6;
    var tmp6_mapValues = tmp$ret$7;
    var tmp$ret$11;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp5_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp6_mapValues.get_size_woubt6_k$()));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp4_associateByTo = tmp6_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator_2 = tmp4_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$8 = element_2.get_key_18j28a_k$();
      var tmp_1 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'com.apollographql.apollo3.api.CompiledField.nameWithArguments.<anonymous>' call
      tmp$ret$9 = element_2.get_value_j01efc_k$().value_1;
      tmp5_mapValuesTo.put_3mhbri_k$(tmp_1, tmp$ret$9);
    }
    tmp$ret$10 = tmp5_mapValuesTo;
    tmp$ret$11 = tmp$ret$10;
    tmp$ret$12 = tmp$ret$11;
    var map = tmp$ret$12;
    var resolvedArguments = resolveVariables(map, variables);
    var tmp_2;
    try {
      var buffer = new Buffer();
      var jsonWriter = BufferedSinkJsonWriter_init_$Create$(buffer, null, 2, null);
      writeAny(jsonWriter, resolvedArguments);
      jsonWriter.close_ymq55z_k$();
      tmp_2 = this.name_1 + '(' + buffer.readUtf8_echivt_k$() + ')';
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        throw RuntimeException_init_$Create$($p);
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    return tmp_2;
  };
  CompiledField.prototype.newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$(this);
  };
  function CompiledType() {
  }
  function CompiledSelection() {
  }
  function _set_keyFields__c23r9p($this, _set____db54di) {
    $this.keyFields_1 = _set____db54di;
  }
  function _get_keyFields__to5uav($this) {
    return $this.keyFields_1;
  }
  function _set_implements__bs365j($this, _set____db54di) {
    $this.implements_1 = _set____db54di;
  }
  function _get_implements__3a5ezp($this) {
    return $this.implements_1;
  }
  function _set_embeddedFields__h4sk9g($this, _set____db54di) {
    $this.embeddedFields_1 = _set____db54di;
  }
  function _get_embeddedFields__sd81o8($this) {
    return $this.embeddedFields_1;
  }
  function Builder_init_$Init$_0(objectType, $this) {
    Builder_3.call($this, objectType.name_1);
    $this.keyFields_1 = objectType.keyFields_1;
    $this.implements_1 = objectType.implements_1;
    $this.embeddedFields_1 = objectType.embeddedFields_1;
    return $this;
  }
  function Builder_init_$Create$_0(objectType) {
    return Builder_init_$Init$_0(objectType, Object.create(Builder_3.prototype));
  }
  function ObjectType_init_$Init$(name, keyFields, implements_0, $this) {
    ObjectType.call($this, name, keyFields, implements_0, emptyList());
    return $this;
  }
  function ObjectType_init_$Create$(name, keyFields, implements_0) {
    return ObjectType_init_$Init$(name, keyFields, implements_0, Object.create(ObjectType.prototype));
  }
  function ObjectType_init_$Init$_0(name, keyFields, implements_0, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      keyFields = emptyList();
    if (!(($mask0 & 4) === 0))
      implements_0 = emptyList();
    ObjectType_init_$Init$(name, keyFields, implements_0, $this);
    return $this;
  }
  function ObjectType_init_$Create$_0(name, keyFields, implements_0, $mask0, $marker) {
    return ObjectType_init_$Init$_0(name, keyFields, implements_0, $mask0, $marker, Object.create(ObjectType.prototype));
  }
  function Builder_3(name) {
    this.name_1 = name;
    this.keyFields_1 = emptyList();
    this.implements_1 = emptyList();
    this.embeddedFields_1 = emptyList();
  }
  Builder_3.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Builder_3.prototype.keyFields_ua67j5_k$ = function (keyFields) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.keyFields.<anonymous>' call
    this.keyFields_1 = keyFields;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.interfaces_t23zo9_k$ = function (implements_0) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.interfaces.<anonymous>' call
    this.implements_1 = implements_0;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.embeddedFields_2q7d3o_k$ = function (embeddedFields) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.embeddedFields.<anonymous>' call
    this.embeddedFields_1 = embeddedFields;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.build_1k0s4u_k$ = function () {
    return new ObjectType(this.name_1, this.keyFields_1, this.implements_1, this.embeddedFields_1);
  };
  function ObjectType(name, keyFields, implements_0, embeddedFields) {
    CompiledNamedType.call(this, name);
    this.keyFields_1 = keyFields;
    this.implements_1 = implements_0;
    this.embeddedFields_1 = embeddedFields;
  }
  ObjectType.prototype.get_keyFields_up3sfl_k$ = function () {
    return this.keyFields_1;
  };
  ObjectType.prototype.get_implements_zb8xqf_k$ = function () {
    return this.implements_1;
  };
  ObjectType.prototype.get_embeddedFields_lgs25o_k$ = function () {
    return this.embeddedFields_1;
  };
  ObjectType.prototype.newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_0(this);
  };
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function _set_isKey__g0qqz4($this, _set____db54di) {
    $this.isKey_1 = _set____db54di;
  }
  function _get_isKey__g0dpic($this) {
    return $this.isKey_1;
  }
  function _set_isPagination__h55aq5($this, _set____db54di) {
    $this.isPagination_1 = _set____db54di;
  }
  function _get_isPagination__1lek61($this) {
    return $this.isPagination_1;
  }
  function CompiledArgument_init_$Init$(name, value, isKey, isPagination, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      isKey = false;
    if (!(($mask0 & 8) === 0))
      isPagination = false;
    CompiledArgument.call($this, name, value, isKey, isPagination);
    return $this;
  }
  function CompiledArgument_init_$Create$(name, value, isKey, isPagination, $mask0, $marker) {
    return CompiledArgument_init_$Init$(name, value, isKey, isPagination, $mask0, $marker, Object.create(CompiledArgument.prototype));
  }
  function CompiledArgument_init_$Init$_0(name, value, isKey, $this) {
    CompiledArgument.call($this, name, value, isKey, false);
    return $this;
  }
  function CompiledArgument_init_$Create$_0(name, value, isKey) {
    return CompiledArgument_init_$Init$_0(name, value, isKey, Object.create(CompiledArgument.prototype));
  }
  function CompiledArgument_init_$Init$_1(name, value, isKey, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      isKey = false;
    CompiledArgument_init_$Init$_0(name, value, isKey, $this);
    return $this;
  }
  function CompiledArgument_init_$Create$_1(name, value, isKey, $mask0, $marker) {
    return CompiledArgument_init_$Init$_1(name, value, isKey, $mask0, $marker, Object.create(CompiledArgument.prototype));
  }
  function Builder_4(name, value) {
    this.name_1 = name;
    this.value_1 = value;
    this.isKey_1 = false;
    this.isPagination_1 = false;
  }
  Builder_4.prototype.isKey_9jm24b_k$ = function (isKey) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.isKey.<anonymous>' call
    this.isKey_1 = isKey;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.isPagination_zg6cly_k$ = function (isPagination) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.isPagination.<anonymous>' call
    this.isPagination_1 = isPagination;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.build_1k0s4u_k$ = function () {
    return new CompiledArgument(this.name_1, this.value_1, this.isKey_1, this.isPagination_1);
  };
  function CompiledArgument(name, value, isKey, isPagination) {
    this.name_1 = name;
    this.value_1 = value;
    this.isKey_1 = isKey;
    this.isPagination_1 = isPagination;
  }
  CompiledArgument.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  CompiledArgument.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  CompiledArgument.prototype.get_isKey_it6vn0_k$ = function () {
    return this.isKey_1;
  };
  CompiledArgument.prototype.get_isPagination_947sr7_k$ = function () {
    return this.isPagination_1;
  };
  function CompiledVariable(name) {
    this.name_1 = name;
  }
  CompiledVariable.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function list_0(_this__u8e3s4) {
    init_properties_CompiledGraphQL_kt_nwteck();
    return new CompiledListType(_this__u8e3s4);
  }
  function CompiledListType(ofType) {
    CompiledType.call(this);
    this.ofType_1 = ofType;
  }
  CompiledListType.prototype.get_ofType_hjbd8a_k$ = function () {
    return this.ofType_1;
  };
  CompiledListType.prototype.leafType_pu6uuw_k$ = function () {
    return this.ofType_1.rawType_gaw48y_k$();
  };
  CompiledListType.prototype.rawType_gaw48y_k$ = function () {
    return this.ofType_1.rawType_gaw48y_k$();
  };
  function CompiledNotNullType(ofType) {
    CompiledType.call(this);
    this.ofType_1 = ofType;
  }
  CompiledNotNullType.prototype.get_ofType_hjbd8a_k$ = function () {
    return this.ofType_1;
  };
  CompiledNotNullType.prototype.leafType_pu6uuw_k$ = function () {
    return this.ofType_1.rawType_gaw48y_k$();
  };
  CompiledNotNullType.prototype.rawType_gaw48y_k$ = function () {
    return this.ofType_1.rawType_gaw48y_k$();
  };
  function notNull(_this__u8e3s4) {
    init_properties_CompiledGraphQL_kt_nwteck();
    return new CompiledNotNullType(_this__u8e3s4);
  }
  function Builder_5(typeCondition, possibleTypes) {
    this.typeCondition_1 = typeCondition;
    this.possibleTypes_1 = possibleTypes;
    this.condition_1 = emptyList();
    this.selections_1 = emptyList();
  }
  Builder_5.prototype.get_typeCondition_y5k7vc_k$ = function () {
    return this.typeCondition_1;
  };
  Builder_5.prototype.get_possibleTypes_8irdlt_k$ = function () {
    return this.possibleTypes_1;
  };
  Builder_5.prototype.set_condition_uqjbbv_k$ = function (_set____db54di) {
    this.condition_1 = _set____db54di;
  };
  Builder_5.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Builder_5.prototype.set_selections_oh8twc_k$ = function (_set____db54di) {
    this.selections_1 = _set____db54di;
  };
  Builder_5.prototype.get_selections_nhbmr4_k$ = function () {
    return this.selections_1;
  };
  Builder_5.prototype.condition_i03xqp_k$ = function (condition) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.condition.<anonymous>' call
    this.condition_1 = condition;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.selections_qw7166_k$ = function (selections) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.selections.<anonymous>' call
    this.selections_1 = selections;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.build_1k0s4u_k$ = function () {
    return new CompiledFragment(this.typeCondition_1, this.possibleTypes_1, this.condition_1, this.selections_1);
  };
  function CompiledFragment(typeCondition, possibleTypes, condition, selections) {
    CompiledSelection.call(this);
    this.typeCondition_1 = typeCondition;
    this.possibleTypes_1 = possibleTypes;
    this.condition_1 = condition;
    this.selections_1 = selections;
  }
  CompiledFragment.prototype.get_typeCondition_y5k7vc_k$ = function () {
    return this.typeCondition_1;
  };
  CompiledFragment.prototype.get_possibleTypes_8irdlt_k$ = function () {
    return this.possibleTypes_1;
  };
  CompiledFragment.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  CompiledFragment.prototype.get_selections_nhbmr4_k$ = function () {
    return this.selections_1;
  };
  function _set_keyFields__c23r9p_0($this, _set____db54di) {
    $this.keyFields_1 = _set____db54di;
  }
  function _get_keyFields__to5uav_0($this) {
    return $this.keyFields_1;
  }
  function _set_implements__bs365j_0($this, _set____db54di) {
    $this.implements_1 = _set____db54di;
  }
  function _get_implements__3a5ezp_0($this) {
    return $this.implements_1;
  }
  function _set_embeddedFields__h4sk9g_0($this, _set____db54di) {
    $this.embeddedFields_1 = _set____db54di;
  }
  function _get_embeddedFields__sd81o8_0($this) {
    return $this.embeddedFields_1;
  }
  function Builder_init_$Init$_1(interfaceType, $this) {
    Builder_6.call($this, interfaceType.name_1);
    $this.keyFields_1 = interfaceType.keyFields_1;
    $this.implements_1 = interfaceType.implements_1;
    $this.embeddedFields_1 = interfaceType.embeddedFields_1;
    return $this;
  }
  function Builder_init_$Create$_1(interfaceType) {
    return Builder_init_$Init$_1(interfaceType, Object.create(Builder_6.prototype));
  }
  function InterfaceType_init_$Init$(name, keyFields, implements_0, $this) {
    InterfaceType.call($this, name, keyFields, implements_0, emptyList());
    return $this;
  }
  function InterfaceType_init_$Create$(name, keyFields, implements_0) {
    return InterfaceType_init_$Init$(name, keyFields, implements_0, Object.create(InterfaceType.prototype));
  }
  function InterfaceType_init_$Init$_0(name, keyFields, implements_0, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      keyFields = emptyList();
    if (!(($mask0 & 4) === 0))
      implements_0 = emptyList();
    InterfaceType_init_$Init$(name, keyFields, implements_0, $this);
    return $this;
  }
  function InterfaceType_init_$Create$_0(name, keyFields, implements_0, $mask0, $marker) {
    return InterfaceType_init_$Init$_0(name, keyFields, implements_0, $mask0, $marker, Object.create(InterfaceType.prototype));
  }
  function Builder_6(name) {
    this.name_1 = name;
    this.keyFields_1 = emptyList();
    this.implements_1 = emptyList();
    this.embeddedFields_1 = emptyList();
  }
  Builder_6.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Builder_6.prototype.keyFields_ua67j5_k$ = function (keyFields) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.keyFields.<anonymous>' call
    this.keyFields_1 = keyFields;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_6.prototype.interfaces_t23zo9_k$ = function (implements_0) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.interfaces.<anonymous>' call
    this.implements_1 = implements_0;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_6.prototype.embeddedFields_2q7d3o_k$ = function (embeddedFields) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.embeddedFields.<anonymous>' call
    this.embeddedFields_1 = embeddedFields;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_6.prototype.build_1k0s4u_k$ = function () {
    return new InterfaceType(this.name_1, this.keyFields_1, this.implements_1, this.embeddedFields_1);
  };
  function InterfaceType(name, keyFields, implements_0, embeddedFields) {
    CompiledNamedType.call(this, name);
    this.keyFields_1 = keyFields;
    this.implements_1 = implements_0;
    this.embeddedFields_1 = embeddedFields;
  }
  InterfaceType.prototype.get_keyFields_up3sfl_k$ = function () {
    return this.keyFields_1;
  };
  InterfaceType.prototype.get_implements_zb8xqf_k$ = function () {
    return this.implements_1;
  };
  InterfaceType.prototype.get_embeddedFields_lgs25o_k$ = function () {
    return this.embeddedFields_1;
  };
  InterfaceType.prototype.newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_1(this);
  };
  function CompiledCondition(name, inverted) {
    this.name_1 = name;
    this.inverted_1 = inverted;
  }
  CompiledCondition.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  CompiledCondition.prototype.get_inverted_lf8hmq_k$ = function () {
    return this.inverted_1;
  };
  CompiledCondition.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  CompiledCondition.prototype.component2_7eebsb_k$ = function () {
    return this.inverted_1;
  };
  CompiledCondition.prototype.copy_akifye_k$ = function (name, inverted) {
    return new CompiledCondition(name, inverted);
  };
  CompiledCondition.prototype.copy$default_c6y8ve_k$ = function (name, inverted, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      inverted = this.inverted_1;
    return this.copy_akifye_k$(name, inverted);
  };
  CompiledCondition.prototype.toString = function () {
    return 'CompiledCondition(name=' + this.name_1 + ', inverted=' + this.inverted_1 + ')';
  };
  CompiledCondition.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.inverted_1 | 0) | 0;
    return result;
  };
  CompiledCondition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledCondition))
      return false;
    var tmp0_other_with_cast = other instanceof CompiledCondition ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.inverted_1 === tmp0_other_with_cast.inverted_1))
      return false;
    return true;
  };
  function ScalarType(name) {
    CompiledNamedType.call(this, name);
  }
  function CompiledNamedType(name) {
    CompiledType.call(this);
    this.name_1 = name;
  }
  CompiledNamedType.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  CompiledNamedType.prototype.leafType_pu6uuw_k$ = function () {
    return this;
  };
  CompiledNamedType.prototype.rawType_gaw48y_k$ = function () {
    return this;
  };
  function resolveVariables(value, variables) {
    init_properties_CompiledGraphQL_kt_nwteck();
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (tmp0_subject instanceof CompiledVariable) {
        tmp = variables.get_valueMap_fwl910_k$().get_1mhr4y_k$(value.name_1);
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
          if (!(value == null) ? isInterface(value, Map) : false)
            value;
          else
            THROW_CCE();
          var tmp$ret$6;
          // Inline function 'kotlin.collections.sortedBy' call
          var tmp$ret$4;
          // Inline function 'kotlin.collections.mapValues' call
          var tmp2_mapValues = value;
          var tmp$ret$3;
          // Inline function 'kotlin.collections.mapValuesTo' call
          var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp2_mapValues.get_size_woubt6_k$()));
          var tmp$ret$2;
          // Inline function 'kotlin.collections.associateByTo' call
          var tmp0_associateByTo = tmp2_mapValues.get_entries_p20ztl_k$();
          var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
            tmp$ret$0 = element.get_key_18j28a_k$();
            var tmp_0 = tmp$ret$0;
            var tmp$ret$1;
            // Inline function 'com.apollographql.apollo3.api.resolveVariables.<anonymous>' call
            tmp$ret$1 = resolveVariables(element.get_value_j01efc_k$(), variables);
            tmp1_mapValuesTo.put_3mhbri_k$(tmp_0, tmp$ret$1);
          }
          tmp$ret$2 = tmp1_mapValuesTo;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var tmp3_sortedBy = toList_0(tmp$ret$4);
          var tmp$ret$5;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_1 = resolveVariables$lambda;
          tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_1);
          tmp$ret$6 = sortedWith(tmp3_sortedBy, tmp$ret$5);
          tmp = toMap(tmp$ret$6);
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
            var tmp$ret$9;
            // Inline function 'kotlin.collections.map' call
            var tmp5_map = value;
            var tmp$ret$8;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp4_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_map, 10));
            var tmp0_iterator_0 = tmp5_map.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator_0.next_20eer_k$();
              var tmp$ret$7;
              // Inline function 'com.apollographql.apollo3.api.resolveVariables.<anonymous>' call
              tmp$ret$7 = resolveVariables(item, variables);
              tmp4_mapTo.add_1j60pz_k$(tmp$ret$7);
            }
            tmp$ret$8 = tmp4_mapTo;
            tmp$ret$9 = tmp$ret$8;
            tmp = tmp$ret$9;
          } else {
            tmp = value;
          }
        }
      }
    }
    return tmp;
  }
  function EnumType_init_$Init$(name, $this) {
    EnumType.call($this, name, emptyList());
    return $this;
  }
  function EnumType_init_$Create$(name) {
    return EnumType_init_$Init$(name, Object.create(EnumType.prototype));
  }
  function EnumType(name, values) {
    CompiledNamedType.call(this, name);
    this.values_1 = values;
  }
  EnumType.prototype.get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  function InputObjectType(name) {
    CompiledNamedType.call(this, name);
  }
  function UnionType(name, members) {
    CompiledNamedType.call(this, name);
    this.members_1 = members;
  }
  UnionType.prototype.get_members_gyhru8_k$ = function () {
    return this.members_1;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function resolveVariables$lambda(a, b) {
    init_properties_CompiledGraphQL_kt_nwteck();
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.resolveVariables.<anonymous>' call
    tmp$ret$0 = a.get_first_irdx8n_k$();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'com.apollographql.apollo3.api.resolveVariables.<anonymous>' call
    tmp$ret$1 = b.get_first_irdx8n_k$();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  var properties_initialized_CompiledGraphQL_kt_w9zwqw;
  function init_properties_CompiledGraphQL_kt_nwteck() {
    if (properties_initialized_CompiledGraphQL_kt_w9zwqw) {
    } else {
      properties_initialized_CompiledGraphQL_kt_w9zwqw = true;
      CompiledStringType = new ScalarType('String');
      CompiledIntType = new ScalarType('Int');
      CompiledFloatType = new ScalarType('Float');
      CompiledBooleanType = new ScalarType('Boolean');
      CompiledIDType = new ScalarType('ID');
      CompiledSchemaType = (new Builder_3('__Schema')).build_1k0s4u_k$();
      CompiledTypeType = (new Builder_3('__Type')).build_1k0s4u_k$();
      CompiledFieldType = (new Builder_3('__Field')).build_1k0s4u_k$();
      CompiledInputValueType = (new Builder_3('__InputValue')).build_1k0s4u_k$();
      CompiledEnumValueType = (new Builder_3('__EnumValue')).build_1k0s4u_k$();
      CompiledDirectiveType = (new Builder_3('__Directive')).build_1k0s4u_k$();
    }
  }
  function _get_adaptersMap__r82k9z($this) {
    return $this.adaptersMap_1;
  }
  function _set_adapterContext__eeclvb($this, _set____db54di) {
    $this.adapterContext_1 = _set____db54di;
  }
  function _get_adapterContext__v3o02d($this) {
    return $this.adapterContext_1;
  }
  function _set_unsafe__vqgvu9($this, _set____db54di) {
    $this.unsafe_1 = _set____db54di;
  }
  function _get_unsafe__x77gh1($this) {
    return $this.unsafe_1;
  }
  function _get_unsafe__x77gh1_0($this) {
    return $this.unsafe_1;
  }
  function _get_adaptersMap__r82k9z_0($this) {
    return $this.adaptersMap_1;
  }
  function Key() {
    Key_instance = this;
    this.Empty_1 = (new Builder_7()).build_1k0s4u_k$();
    this.PassThrough_1 = (new Builder_7()).unsafe_j0i3vw_k$(true).build_1k0s4u_k$();
  }
  Key.prototype.get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  Key.prototype.get_PassThrough_q5c8b9_k$ = function () {
    return this.PassThrough_1;
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function Builder_7() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.adaptersMap_1 = tmp$ret$0;
    this.adapterContext_1 = (new Builder()).build_1k0s4u_k$();
    this.unsafe_1 = false;
  }
  Builder_7.prototype.add_7nwrc1_k$ = function (customScalarType, customScalarAdapter) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.adaptersMap_1;
    var tmp1_set = customScalarType.get_name_woqyms_k$();
    tmp0_set.put_3mhbri_k$(tmp1_set, customScalarAdapter);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_7.prototype.add_p4o9me_k$ = function (customScalarType, customTypeAdapter) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.adaptersMap_1;
    var tmp1_set = customScalarType.get_name_woqyms_k$();
    var tmp2_set = new Version2CustomTypeAdapterToAdapter(customTypeAdapter);
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_7.prototype.addAll_exlxlr_k$ = function (customScalarAdapters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addAll.<anonymous>' call
    this.adaptersMap_1.putAll_mee1c3_k$(customScalarAdapters.adaptersMap_1);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_7.prototype.unsafe_j0i3vw_k$ = function (unsafe) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.unsafe.<anonymous>' call
    this.unsafe_1 = unsafe;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_7.prototype.clear_j9y8zo_k$ = function () {
    this.adaptersMap_1.clear_j9y8zo_k$();
  };
  Builder_7.prototype.build_1k0s4u_k$ = function () {
    return new CustomScalarAdapters(this.adaptersMap_1, this.adapterContext_1, this.unsafe_1);
  };
  Builder_7.prototype.adapterContext_cvw8n6_k$ = function (adapterContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.adapterContext.<anonymous>' call
    this.adapterContext_1 = adapterContext;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_7.prototype.variables_4uxez4_k$ = function (variables) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.variables.<anonymous>' call
    this.adapterContext_1 = this.adapterContext_1.newBuilder_dnl2aj_k$().variables_8kjs8h_k$(variables).build_1k0s4u_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  function CustomScalarAdapters(customScalarAdapters, adapterContext, unsafe) {
    Key_getInstance();
    this.adapterContext_1 = adapterContext;
    this.unsafe_1 = unsafe;
    this.adaptersMap_1 = customScalarAdapters;
  }
  CustomScalarAdapters.prototype.get_adapterContext_no3aeh_k$ = function () {
    return this.adapterContext_1;
  };
  CustomScalarAdapters.prototype.responseAdapterFor_wwapol_k$ = function (customScalar) {
    var tmp;
    if (!(this.adaptersMap_1.get_1mhr4y_k$(customScalar.get_name_woqyms_k$()) == null)) {
      tmp = this.adaptersMap_1.get_1mhr4y_k$(customScalar.get_name_woqyms_k$());
    } else if (customScalar.get_className_8cmv0a_k$() === 'com.apollographql.apollo3.api.Upload') {
      tmp = get_UploadAdapter();
    } else if (listOf(['kotlin.String', 'java.lang.String']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_StringAdapter();
    } else if (listOf(['kotlin.Boolean', 'java.lang.Boolean']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_BooleanAdapter();
    } else if (listOf(['kotlin.Int', 'java.lang.Int']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_IntAdapter();
    } else if (listOf(['kotlin.Double', 'java.lang.Double']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_DoubleAdapter();
    } else if (listOf(['kotlin.Long', 'java.lang.Long']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_LongAdapter();
    } else if (listOf(['kotlin.Float', 'java.lang.Float']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_FloatAdapter();
    } else if (listOf(['kotlin.Any', 'java.lang.Object']).contains_2ehdt1_k$(customScalar.get_className_8cmv0a_k$())) {
      tmp = get_AnyAdapter();
    } else if (this.unsafe_1) {
      tmp = new PassThroughAdapter();
    } else {
      var tmp0_error = "Can't map GraphQL type: `" + customScalar.get_name_woqyms_k$() + '` to: `' + customScalar.get_className_8cmv0a_k$() + '`. Did you forget to add a CustomScalarAdapter?';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    var tmp_0 = tmp;
    return (!(tmp_0 == null) ? isInterface(tmp_0, Adapter) : false) ? tmp_0 : THROW_CCE();
  };
  CustomScalarAdapters.prototype.variables_1d3s7d_k$ = function () {
    return this.adapterContext_1.variables_1d3s7d_k$();
  };
  CustomScalarAdapters.prototype.get_key_18j28a_k$ = function () {
    return Key_getInstance();
  };
  CustomScalarAdapters.prototype.newBuilder_dnl2aj_k$ = function () {
    return (new Builder_7()).addAll_exlxlr_k$(this);
  };
  function DeferredFragmentIdentifier(path, label) {
    this.path_1 = path;
    this.label_1 = label;
  }
  DeferredFragmentIdentifier.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  DeferredFragmentIdentifier.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  DeferredFragmentIdentifier.prototype.component1_7eebsc_k$ = function () {
    return this.path_1;
  };
  DeferredFragmentIdentifier.prototype.component2_7eebsb_k$ = function () {
    return this.label_1;
  };
  DeferredFragmentIdentifier.prototype.copy_43e9j7_k$ = function (path, label) {
    return new DeferredFragmentIdentifier(path, label);
  };
  DeferredFragmentIdentifier.prototype.copy$default_sgbgcz_k$ = function (path, label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      path = this.path_1;
    if (!(($mask0 & 2) === 0))
      label = this.label_1;
    return this.copy_43e9j7_k$(path, label);
  };
  DeferredFragmentIdentifier.prototype.toString = function () {
    return 'DeferredFragmentIdentifier(path=' + this.path_1 + ', label=' + this.label_1 + ')';
  };
  DeferredFragmentIdentifier.prototype.hashCode = function () {
    var result = hashCode(this.path_1);
    result = imul(result, 31) + (this.label_1 == null ? 0 : getStringHashCode(this.label_1)) | 0;
    return result;
  };
  DeferredFragmentIdentifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeferredFragmentIdentifier))
      return false;
    var tmp0_other_with_cast = other instanceof DeferredFragmentIdentifier ? other : THROW_CCE();
    if (!equals(this.path_1, tmp0_other_with_cast.path_1))
      return false;
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  function Location(line, column) {
    this.line_1 = line;
    this.column_1 = column;
  }
  Location.prototype.get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  Location.prototype.get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  Location.prototype.toString = function () {
    return 'Location(line = ' + this.line_1 + ', column = ' + this.column_1 + ')';
  };
  function Error_0(message, locations, path, extensions, nonStandardFields) {
    this.message_1 = message;
    this.locations_1 = locations;
    this.path_1 = path;
    this.extensions_1 = extensions;
    this.nonStandardFields_1 = nonStandardFields;
  }
  Error_0.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Error_0.prototype.get_locations_ba93yj_k$ = function () {
    return this.locations_1;
  };
  Error_0.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  Error_0.prototype.get_extensions_kxksyl_k$ = function () {
    return this.extensions_1;
  };
  Error_0.prototype.get_nonStandardFields_8869ba_k$ = function () {
    return this.nonStandardFields_1;
  };
  Error_0.prototype.get_customAttributes_xgas8h_k$ = function () {
    throw IllegalStateException_init_$Create$('Use nonStandardFields instead');
  };
  Error_0.prototype.toString = function () {
    return 'Error(message = ' + this.message_1 + ', locations = ' + this.locations_1 + ', path=' + this.path_1 + ', extensions = ' + this.extensions_1 + ', nonStandardFields = ' + this.nonStandardFields_1 + ')';
  };
  function Data() {
  }
  function Variables(valueMap) {
    this.valueMap_1 = valueMap;
  }
  Variables.prototype.get_valueMap_fwl910_k$ = function () {
    return this.valueMap_1;
  };
  function Executable() {
  }
  function variables(_this__u8e3s4, customScalarAdapters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new MapJsonWriter();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.variables.<anonymous>' call
    tmp0_apply.beginObject_5wddq0_k$();
    _this__u8e3s4.serializeVariables_7jkd78_k$(tmp0_apply, customScalarAdapters);
    tmp0_apply.endObject_ofuv3u_k$();
    tmp$ret$0 = tmp0_apply;
    var tmp = tmp$ret$0.root_235k2_k$();
    var valueMap = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    return new Variables(valueMap);
  }
  function Key_0() {
  }
  function Element_0() {
  }
  function Companion() {
    Companion_instance = this;
    this.Empty_1 = EmptyExecutionContext_getInstance();
  }
  Companion.prototype.get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ExecutionContext$plus$lambda(acc, element) {
    var removed = acc.minusKey_3qgl28_k$(element.get_key_18j28a_k$());
    var tmp;
    if (removed === EmptyExecutionContext_getInstance()) {
      tmp = element;
    } else {
      tmp = new CombinedExecutionContext(removed, element);
    }
    return tmp;
  }
  function ExecutionContext() {
    Companion_getInstance_1();
  }
  function EmptyExecutionContext() {
    EmptyExecutionContext_instance = this;
  }
  EmptyExecutionContext.prototype.get_ge4w64_k$ = function (key) {
    return null;
  };
  EmptyExecutionContext.prototype.fold_oiritn_k$ = function (initial, operation) {
    return initial;
  };
  EmptyExecutionContext.prototype.plus_r8myed_k$ = function (context) {
    return context;
  };
  EmptyExecutionContext.prototype.minusKey_3qgl28_k$ = function (key) {
    return this;
  };
  var EmptyExecutionContext_instance;
  function EmptyExecutionContext_getInstance() {
    if (EmptyExecutionContext_instance == null)
      new EmptyExecutionContext();
    return EmptyExecutionContext_instance;
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_element__z0t21h($this) {
    return $this.element_1;
  }
  function CombinedExecutionContext(left, element) {
    this.left_1 = left;
    this.element_1 = element;
  }
  CombinedExecutionContext.prototype.get_ge4w64_k$ = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur.element_1.get_ge4w64_k$(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var next = cur.left_1;
      if (next instanceof CombinedExecutionContext) {
        cur = next;
      } else {
        return next.get_ge4w64_k$(key);
      }
    }
  };
  CombinedExecutionContext.prototype.fold_oiritn_k$ = function (initial, operation) {
    return operation(this.left_1.fold_oiritn_k$(initial, operation), this.element_1);
  };
  CombinedExecutionContext.prototype.minusKey_3qgl28_k$ = function (key) {
    var tmp0_safe_receiver = this.element_1.get_ge4w64_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return this.left_1;
    }
    var newLeft = this.left_1.minusKey_3qgl28_k$(key);
    return newLeft === this.left_1 ? this : newLeft === EmptyExecutionContext_getInstance() ? this.element_1 : new CombinedExecutionContext(newLeft, this.element_1);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.CAN_BE_BATCHED_1 = 'X-APOLLO-CAN-BE-BATCHED';
  }
  Companion_0.prototype.get_CAN_BE_BATCHED_mw3tpx_k$ = function () {
    return this.CAN_BE_BATCHED_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExecutionOptions() {
    Companion_getInstance_2();
  }
  function MutableExecutionOptions() {
  }
  function Data_0() {
  }
  function Mutation() {
  }
  function get_GlobalBuilder() {
    init_properties_ObjectBuilder_kt_i78b6g();
    return GlobalBuilder;
  }
  var GlobalBuilder;
  function BuilderScope() {
  }
  function GlobalBuilder$1() {
  }
  GlobalBuilder$1.prototype.get_customScalarAdapters_jxtx62_k$ = function () {
    return Key_getInstance().get_PassThrough_q5c8b9_k$();
  };
  var properties_initialized_ObjectBuilder_kt_naio6s;
  function init_properties_ObjectBuilder_kt_i78b6g() {
    if (properties_initialized_ObjectBuilder_kt_naio6s) {
    } else {
      properties_initialized_ObjectBuilder_kt_naio6s = true;
      GlobalBuilder = new GlobalBuilder$1();
    }
  }
  function Data_1() {
  }
  function Operation() {
  }
  function parseJsonResponse(_this__u8e3s4, jsonReader, customScalarAdapters) {
    var variables_0 = variables(_this__u8e3s4, customScalarAdapters);
    return ResponseParser_getInstance().parse_uvnn8v_k$(jsonReader, _this__u8e3s4, customScalarAdapters.newBuilder_dnl2aj_k$().adapterContext_cvw8n6_k$(customScalarAdapters.get_adapterContext_no3aeh_k$().newBuilder_dnl2aj_k$().variables_8kjs8h_k$(variables_0).build_1k0s4u_k$()).build_1k0s4u_k$());
  }
  function parseJsonResponse$default(_this__u8e3s4, jsonReader, customScalarAdapters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      customScalarAdapters = Key_getInstance().get_Empty_i9b85g_k$();
    return parseJsonResponse(_this__u8e3s4, jsonReader, customScalarAdapters);
  }
  function Present(value) {
    Optional.call(this);
    this.value_1 = value;
  }
  Present.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Present.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Present.prototype.copy_mek8hg_k$ = function (value) {
    return new Present(value);
  };
  Present.prototype.copy$default_g0jumk_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_mek8hg_k$(value);
  };
  Present.prototype.toString = function () {
    return 'Present(value=' + this.value_1 + ')';
  };
  Present.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Present.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Present))
      return false;
    var tmp0_other_with_cast = other instanceof Present ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Absent() {
    Absent_instance = this;
    Optional.call(this);
  }
  var Absent_instance;
  function Absent_getInstance() {
    if (Absent_instance == null)
      new Absent();
    return Absent_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.absent_6rdsi1_k$ = function () {
    return Absent_getInstance();
  };
  Companion_1.prototype.present_iakpq_k$ = function (value) {
    return new Present(value);
  };
  Companion_1.prototype.presentIfNotNull_9iyps9_k$ = function (value) {
    return value == null ? Absent_getInstance() : new Present(value);
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Optional() {
    Companion_getInstance_3();
  }
  Optional.prototype.getOrNull_bcsbgg_k$ = function () {
    var tmp0_safe_receiver = this instanceof Present ? this : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value_1;
  };
  Optional.prototype.getOrThrow_323tdf_k$ = function () {
    var tmp0_elvis_lhs = this.getOrNull_bcsbgg_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingValueException();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function Data_2() {
  }
  function Query() {
  }
  function Data_3() {
  }
  function Subscription() {
  }
  function Upload() {
  }
  function CustomTypeAdapter() {
  }
  function GraphQLNull() {
    GraphQLNull_instance = this;
    CustomTypeValue.call(this, Unit_getInstance());
  }
  var GraphQLNull_instance;
  function GraphQLNull_getInstance() {
    if (GraphQLNull_instance == null)
      new GraphQLNull();
    return GraphQLNull_instance;
  }
  function GraphQLString(value) {
    CustomTypeValue.call(this, value);
  }
  function GraphQLBoolean(value) {
    CustomTypeValue.call(this, value);
  }
  function GraphQLNumber(value) {
    CustomTypeValue.call(this, value);
  }
  function GraphQLJsonObject(value) {
    CustomTypeValue.call(this, value);
  }
  function GraphQLJsonList(value) {
    CustomTypeValue.call(this, value);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.fromRawValue_76b5ak_k$ = function (value) {
    var tmp0_subject = value;
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
      tmp = new GraphQLJsonObject((!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE());
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = new GraphQLJsonList((!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
      } else {
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
          tmp = new GraphQLBoolean(value);
        } else {
          if (isNumber(tmp0_subject)) {
            tmp = new GraphQLNumber(value);
          } else {
            if (tmp0_subject == null) {
              tmp = GraphQLNull_getInstance();
            } else {
              tmp = new GraphQLString(toString(value));
            }
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CustomTypeValue(value) {
    Companion_getInstance_4();
    this.value_1 = value;
  }
  CustomTypeValue.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function _get_HEADER_ACCEPT_NAME__87463($this) {
    return $this.HEADER_ACCEPT_NAME_1;
  }
  function _get_HEADER_ACCEPT_VALUE__auh9hh($this) {
    return $this.HEADER_ACCEPT_VALUE_1;
  }
  function buildGetUrl($this, serverUrl, operation, customScalarAdapters, sendApqExtensions, sendDocument) {
    return $this.appendQueryParameters_inffx6_k$(serverUrl, composeGetParams($this, operation, customScalarAdapters, sendApqExtensions, sendDocument));
  }
  function composePostParams($this, writer, operation, customScalarAdapters, sendApqExtensions, query) {
    var uploads = {_v: null};
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    writer.beginObject_5wddq0_k$();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>' call
    writer.name_u79i4q_k$('operationName');
    writer.value_h8ym4w_k$(operation.name_20b63_k$());
    writer.name_u79i4q_k$('variables');
    var uploadAwareWriter = new FileUploadAwareJsonWriter(writer);
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    uploadAwareWriter.beginObject_5wddq0_k$();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>' call
    operation.serializeVariables_7jkd78_k$(uploadAwareWriter, customScalarAdapters);
    uploadAwareWriter.endObject_ofuv3u_k$();
    uploads._v = uploadAwareWriter.collectedUploads_cst71z_k$();
    if (!(query == null)) {
      writer.name_u79i4q_k$('query');
      writer.value_h8ym4w_k$(query);
    }
    if (sendApqExtensions) {
      writer.name_u79i4q_k$('extensions');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      writer.beginObject_5wddq0_k$();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>' call
      writer.name_u79i4q_k$('persistedQuery');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      writer.beginObject_5wddq0_k$();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>.<anonymous>' call
      writer.name_u79i4q_k$('version').value_7nxl9s_k$(1);
      writer.name_u79i4q_k$('sha256Hash').value_h8ym4w_k$(operation.operationId());
      writer.endObject_ofuv3u_k$();
      writer.endObject_ofuv3u_k$();
    }
    writer.endObject_ofuv3u_k$();
    return uploads._v;
  }
  function composeGetParams($this, operation, customScalarAdapters, autoPersistQueries, sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var queryParams = tmp$ret$0;
    queryParams.put_3mhbri_k$('operationName', operation.name_20b63_k$());
    var tmp$ret$2;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    var uploadAwareWriter = new FileUploadAwareJsonWriter(tmp0__anonymous__q1qw7t);
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    uploadAwareWriter.beginObject_5wddq0_k$();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
    operation.serializeVariables_7jkd78_k$(uploadAwareWriter, customScalarAdapters);
    uploadAwareWriter.endObject_ofuv3u_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = uploadAwareWriter.collectedUploads_cst71z_k$().isEmpty_y1axqb_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
      tmp$ret$1 = 'FileUpload and Http GET are not supported at the same time';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$2 = buffer.readUtf8_echivt_k$();
    var variables = tmp$ret$2;
    queryParams.put_3mhbri_k$('variables', variables);
    if (sendDocument) {
      queryParams.put_3mhbri_k$('query', operation.document_e91o2j_k$());
    }
    if (autoPersistQueries) {
      var tmp$ret$3;
      // Inline function 'com.apollographql.apollo3.api.json.buildJsonString' call
      // Inline function 'kotlin.contracts.contract' call
      var buffer_0 = new Buffer();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>' call
      var tmp1__anonymous__uwfjfc = new BufferedSinkJsonWriter(buffer_0, null);
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      tmp1__anonymous__uwfjfc.beginObject_5wddq0_k$();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
      tmp1__anonymous__uwfjfc.name_u79i4q_k$('persistedQuery');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      tmp1__anonymous__uwfjfc.beginObject_5wddq0_k$();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>.<anonymous>' call
      tmp1__anonymous__uwfjfc.name_u79i4q_k$('version').value_7nxl9s_k$(1);
      tmp1__anonymous__uwfjfc.name_u79i4q_k$('sha256Hash').value_h8ym4w_k$(operation.operationId());
      tmp1__anonymous__uwfjfc.endObject_ofuv3u_k$();
      tmp1__anonymous__uwfjfc.endObject_ofuv3u_k$();
      tmp$ret$3 = buffer_0.readUtf8_echivt_k$();
      var extensions = tmp$ret$3;
      queryParams.put_3mhbri_k$('extensions', extensions);
    }
    return queryParams;
  }
  function DefaultHttpRequestComposer$Companion$buildPostBody$1($operationByteString) {
    this.$operationByteString_1 = $operationByteString;
    this.contentType_1 = 'application/json';
    this.contentLength_1 = toLong($operationByteString.get_size_woubt6_k$());
  }
  DefaultHttpRequestComposer$Companion$buildPostBody$1.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  DefaultHttpRequestComposer$Companion$buildPostBody$1.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.contentLength_1;
  };
  DefaultHttpRequestComposer$Companion$buildPostBody$1.prototype.writeTo_258rns_k$ = function (bufferedSink) {
    bufferedSink.write_cdq4rf_k$(this.$operationByteString_1);
  };
  function _get_serverUrl__j7eug5($this) {
    return $this.serverUrl_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.HEADER_APOLLO_OPERATION_ID_1 = 'X-APOLLO-OPERATION-ID';
    this.HEADER_APOLLO_OPERATION_NAME_1 = 'X-APOLLO-OPERATION-NAME';
    this.HEADER_ACCEPT_NAME_1 = 'Accept';
    this.HEADER_ACCEPT_VALUE_1 = 'multipart/mixed; deferSpec=20220824, application/json';
  }
  Companion_3.prototype.get_HEADER_APOLLO_OPERATION_ID_5i65ye_k$ = function () {
    return this.HEADER_APOLLO_OPERATION_ID_1;
  };
  Companion_3.prototype.get_HEADER_APOLLO_OPERATION_NAME_xs5q7q_k$ = function () {
    return this.HEADER_APOLLO_OPERATION_NAME_1;
  };
  Companion_3.prototype.appendQueryParameters_inffx6_k$ = function (_this__u8e3s4, parameters) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Companion.appendQueryParameters.<anonymous>' call
    tmp0_apply.append_ssq29y_k$(_this__u8e3s4);
    var hasQuestionMark = contains$default(_this__u8e3s4, '?', false, 2, null);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.appendQueryParameters.<anonymous>.<anonymous>' call
      if (hasQuestionMark) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(38));
      } else {
        hasQuestionMark = true;
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(63));
      }
      tmp0_apply.append_ssq29y_k$(urlEncode(element.get_key_18j28a_k$()));
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(61));
      tmp0_apply.append_ssq29y_k$(urlEncode(element.get_value_j01efc_k$()));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Companion_3.prototype.buildPostBody_oh9jdr_k$ = function (operation, customScalarAdapters, autoPersistQueries, query) {
    var uploads = {_v: null};
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.buildPostBody.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    uploads._v = composePostParams(Companion_getInstance_5(), tmp0__anonymous__q1qw7t, operation, customScalarAdapters, autoPersistQueries, query);
    tmp$ret$0 = buffer.readByteString_nzt46n_k$();
    var operationByteString = tmp$ret$0;
    if (uploads._v.isEmpty_y1axqb_k$()) {
      return new DefaultHttpRequestComposer$Companion$buildPostBody$1(operationByteString);
    } else {
      return new UploadsHttpBody(uploads._v, operationByteString);
    }
  };
  Companion_3.prototype.buildParamsMap_lvwwd_k$ = function (operation, customScalarAdapters, autoPersistQueries, sendDocument) {
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.buildParamsMap.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    var query = sendDocument ? operation.document_e91o2j_k$() : null;
    composePostParams(Companion_getInstance_5(), tmp0__anonymous__q1qw7t, operation, customScalarAdapters, autoPersistQueries, query);
    tmp$ret$0 = buffer.readByteString_nzt46n_k$();
    return tmp$ret$0;
  };
  Companion_3.prototype.composePayload_8eh6rl_k$ = function (apolloRequest) {
    var operation = apolloRequest.get_operation_z0nqyq_k$();
    var tmp0_elvis_lhs = apolloRequest.get_sendApqExtensions_p33jid_k$();
    var sendApqExtensions = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = apolloRequest.get_sendDocument_ps1uz0_k$();
    var sendDocument = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = apolloRequest.get_executionContext_yb2vgg_k$().get_ge4w64_k$(Key_getInstance());
    var tmp;
    if (tmp2_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot find a ResponseAdapterCache');
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var customScalarAdapters = tmp;
    var query = sendDocument ? operation.document_e91o2j_k$() : null;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonMap' call
    // Inline function 'kotlin.contracts.contract' call
    var writer = new MapJsonWriter();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePayload.<anonymous>' call
    composePostParams(Companion_getInstance_5(), writer, operation, customScalarAdapters, sendApqExtensions, query);
    tmp$ret$0 = writer.root_235k2_k$();
    var tmp_0 = tmp$ret$0;
    return (!(tmp_0 == null) ? isInterface(tmp_0, Map) : false) ? tmp_0 : THROW_CCE();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DefaultHttpRequestComposer(serverUrl) {
    Companion_getInstance_5();
    this.serverUrl_1 = serverUrl;
  }
  DefaultHttpRequestComposer.prototype.compose_om5ohj_k$ = function (apolloRequest) {
    var operation = apolloRequest.get_operation_z0nqyq_k$();
    var tmp0_elvis_lhs = apolloRequest.get_executionContext_yb2vgg_k$().get_ge4w64_k$(Key_getInstance());
    var customScalarAdapters = tmp0_elvis_lhs == null ? Key_getInstance().get_Empty_i9b85g_k$() : tmp0_elvis_lhs;
    Companion_getInstance_5();
    var tmp = new HttpHeader('X-APOLLO-OPERATION-ID', operation.operationId());
    Companion_getInstance_5();
    var tmp_0 = new HttpHeader('X-APOLLO-OPERATION-NAME', operation.name_20b63_k$());
    Companion_getInstance_5();
    Companion_getInstance_5();
    var tmp_1 = listOf([tmp, tmp_0, new HttpHeader('Accept', 'multipart/mixed; deferSpec=20220824, application/json')]);
    var tmp1_elvis_lhs = apolloRequest.get_httpHeaders_tuo13f_k$();
    var requestHeaders = plus_0(tmp_1, tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = apolloRequest.get_sendApqExtensions_p33jid_k$();
    var sendApqExtensions = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = apolloRequest.get_sendDocument_ps1uz0_k$();
    var sendDocument = tmp3_elvis_lhs == null ? true : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = apolloRequest.get_httpMethod_7r1vce_k$();
    var tmp5_subject = tmp4_elvis_lhs == null ? HttpMethod_Post_getInstance() : tmp4_elvis_lhs;
    var tmp0 = tmp5_subject.get_ordinal_ip24qg_k$();
    var tmp_2;
    switch (tmp0) {
      case 0:
        tmp_2 = (new Builder_9(HttpMethod_Get_getInstance(), buildGetUrl(Companion_getInstance_5(), this.serverUrl_1, operation, customScalarAdapters, sendApqExtensions, sendDocument))).addHeaders_y6idf8_k$(requestHeaders).build_1k0s4u_k$();
        break;
      case 1:
        var query = sendDocument ? operation.document_e91o2j_k$() : null;
        tmp_2 = (new Builder_9(HttpMethod_Post_getInstance(), this.serverUrl_1)).addHeaders_y6idf8_k$(requestHeaders).body_38gmcs_k$(Companion_getInstance_5().buildPostBody_oh9jdr_k$(operation, customScalarAdapters, sendApqExtensions, query)).build_1k0s4u_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_2;
  };
  function _get_uploads__a06hc1($this) {
    return $this.uploads_1;
  }
  function _get_operationByteString__fmc49d($this) {
    return $this.operationByteString_1;
  }
  function _get_boundary__5hh5up($this) {
    return $this.boundary_1;
  }
  function buildUploadMap($this, uploads) {
    var tmp$ret$3;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.buildUploadMap.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp1_mapIndexed = uploads.get_entries_p20ztl_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_mapIndexed, 10));
    var index = 0;
    var tmp0_iterator = tmp1_mapIndexed.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.buildUploadMap.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      tmp$ret$0 = to(tmp2__anonymous__z9zvc9.toString(), listOf_0(item.get_key_18j28a_k$()));
      tmp0_mapIndexedTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapIndexedTo;
    tmp$ret$2 = tmp$ret$1;
    writeAny(tmp0__anonymous__q1qw7t, toMap(tmp$ret$2));
    tmp$ret$3 = buffer.readByteString_nzt46n_k$();
    return tmp$ret$3;
  }
  function writeBoundaries(_this__u8e3s4, $this, writeUploadContents) {
    _this__u8e3s4.writeUtf8_688wup_k$('--' + $this.boundary_1 + '\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Disposition: form-data; name="operations"\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Type: application/json\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Length: ' + $this.operationByteString_1.get_size_woubt6_k$() + '\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('\r\n');
    _this__u8e3s4.write_cdq4rf_k$($this.operationByteString_1);
    var uploadsMap = buildUploadMap($this, $this.uploads_1);
    _this__u8e3s4.writeUtf8_688wup_k$('\r\n--' + $this.boundary_1 + '\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Disposition: form-data; name="map"\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Type: application/json\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('Content-Length: ' + uploadsMap.get_size_woubt6_k$() + '\r\n');
    _this__u8e3s4.writeUtf8_688wup_k$('\r\n');
    _this__u8e3s4.write_cdq4rf_k$(uploadsMap);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var tmp0_forEachIndexed = $this.uploads_1.get_values_ksazhn_k$();
    var index = 0;
    var tmp0_iterator = tmp0_forEachIndexed.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.writeBoundaries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
      _this__u8e3s4.writeUtf8_688wup_k$('\r\n--' + $this.boundary_1 + '\r\n');
      _this__u8e3s4.writeUtf8_688wup_k$('Content-Disposition: form-data; name="' + tmp1__anonymous__uwfjfc + '"');
      if (!(item.get_fileName_r258mo_k$() == null)) {
        _this__u8e3s4.writeUtf8_688wup_k$('; filename="' + item.get_fileName_r258mo_k$() + '"');
      }
      _this__u8e3s4.writeUtf8_688wup_k$('\r\n');
      _this__u8e3s4.writeUtf8_688wup_k$('Content-Type: ' + item.get_contentType_7git4a_k$() + '\r\n');
      var contentLength = item.get_contentLength_a5o8yy_k$();
      if (!contentLength.equals(new Long(-1, -1))) {
        _this__u8e3s4.writeUtf8_688wup_k$('Content-Length: ' + toString(contentLength) + '\r\n');
      }
      _this__u8e3s4.writeUtf8_688wup_k$('\r\n');
      if (writeUploadContents) {
        item.writeTo_258rns_k$(_this__u8e3s4);
      }
    }
    _this__u8e3s4.writeUtf8_688wup_k$('\r\n--' + $this.boundary_1 + '--\r\n');
  }
  function UploadsHttpBody$contentLength$delegate$lambda(this$0) {
    return function () {
      var countingSink = new CountingSink(blackholeSink());
      var bufferedCountingSink = buffer(countingSink);
      writeBoundaries(bufferedCountingSink, this$0, false);
      bufferedCountingSink.flush_sgqoqb_k$();
      var tmp = countingSink.bytesWritten_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp0_sumOf = this$0.uploads_1.get_values_ksazhn_k$();
      var sum = new Long(0, 0);
      var tmp0_iterator = tmp0_sumOf.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp_0 = sum;
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.contentLength$delegate.<anonymous>.<anonymous>' call
        tmp$ret$0 = element.get_contentLength_a5o8yy_k$();
        sum = tmp_0.plus_u6jwas_k$(tmp$ret$0);
      }
      tmp$ret$1 = sum;
      var result = tmp.plus_u6jwas_k$(tmp$ret$1);
      return result;
    };
  }
  function UploadsHttpBody(uploads, operationByteString) {
    this.uploads_1 = uploads;
    this.operationByteString_1 = operationByteString;
    this.boundary_1 = uuid4().toString();
    this.contentType_1 = 'multipart/form-data; boundary=' + this.boundary_1;
    var tmp = this;
    tmp.contentLength$delegate_1 = lazy(UploadsHttpBody$contentLength$delegate$lambda(this));
  }
  UploadsHttpBody.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  UploadsHttpBody.prototype.get_contentLength_a5o8yy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = contentLength$factory();
    tmp$ret$0 = this.contentLength$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  UploadsHttpBody.prototype.writeTo_258rns_k$ = function (bufferedSink) {
    writeBoundaries(bufferedSink, this, true);
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _set_bytesWritten__lfnhhx($this, _set____db54di) {
    $this.bytesWritten_1 = _set____db54di;
  }
  function CountingSink(delegate) {
    this.delegate_1 = delegate;
    this.bytesWritten_1 = new Long(0, 0);
  }
  CountingSink.prototype.close_ymq55z_k$ = function () {
    this.delegate_1.close_ymq55z_k$();
  };
  CountingSink.prototype.flush_sgqoqb_k$ = function () {
    this.delegate_1.flush_sgqoqb_k$();
  };
  CountingSink.prototype.timeout_lq9okf_k$ = function () {
    return this.delegate_1.timeout_lq9okf_k$();
  };
  CountingSink.prototype.get_bytesWritten_390uj_k$ = function () {
    return this.bytesWritten_1;
  };
  CountingSink.prototype.write_x0zrut_k$ = function (source, byteCount) {
    this.delegate_1.write_x0zrut_k$(source, byteCount);
    var tmp0_this = this;
    tmp0_this.bytesWritten_1 = tmp0_this.bytesWritten_1.plus_u6jwas_k$(byteCount);
  };
  function contentLength$factory() {
    return getPropertyCallableRef('contentLength', 1, KProperty1, function (receiver) {
      return receiver.get_contentLength_a5o8yy_k$();
    }, null);
  }
  function HttpHeader(name, value) {
    this.name_1 = name;
    this.value_1 = value;
  }
  HttpHeader.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  HttpHeader.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  HttpHeader.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  HttpHeader.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  HttpHeader.prototype.copy_jxa1ir_k$ = function (name, value) {
    return new HttpHeader(name, value);
  };
  HttpHeader.prototype.copy$default_jej4nk_k$ = function (name, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_jxa1ir_k$(name, value);
  };
  HttpHeader.prototype.toString = function () {
    return 'HttpHeader(name=' + this.name_1 + ', value=' + this.value_1 + ')';
  };
  HttpHeader.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + getStringHashCode(this.value_1) | 0;
    return result;
  };
  HttpHeader.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpHeader))
      return false;
    var tmp0_other_with_cast = other instanceof HttpHeader ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  var HttpMethod_Get_instance;
  var HttpMethod_Post_instance;
  function values() {
    return [HttpMethod_Get_getInstance(), HttpMethod_Post_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Get':
        return HttpMethod_Get_getInstance();
      case 'Post':
        return HttpMethod_Post_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_Get_instance = new HttpMethod('Get', 0);
    HttpMethod_Post_instance = new HttpMethod('Post', 1);
  }
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _set_bodySource__qlriue($this, _set____db54di) {
    $this.bodySource_1 = _set____db54di;
  }
  function _get_bodySource__td3xzi($this) {
    return $this.bodySource_1;
  }
  function _set_bodyString__oacbbw($this, _set____db54di) {
    $this.bodyString_1 = _set____db54di;
  }
  function _get_bodyString__voj5i0($this) {
    return $this.bodyString_1;
  }
  function _get_headers__gprxor($this) {
    return $this.headers_1;
  }
  function _get_hasBody__xziwnf($this) {
    return !($this.bodySource_1 == null) ? true : !($this.bodyString_1 == null);
  }
  function _get_bodySource__td3xzi_0($this) {
    return $this.bodySource_1;
  }
  function _get_bodyString__voj5i0_0($this) {
    return $this.bodyString_1;
  }
  function Builder_8(statusCode) {
    this.statusCode_1 = statusCode;
    this.bodySource_1 = null;
    this.bodyString_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.headers_1 = tmp$ret$0;
  }
  Builder_8.prototype.get_statusCode_g2w4u0_k$ = function () {
    return this.statusCode_1;
  };
  Builder_8.prototype.body_j4v2yf_k$ = function (bodySource) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !_get_hasBody__xziwnf(this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'body() can only be called once';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.bodySource_1 = bodySource;
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  Builder_8.prototype.body_ne46js_k$ = function (bodyString) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !_get_hasBody__xziwnf(this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'body() can only be called once';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.bodyString_1 = bodyString;
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  Builder_8.prototype.addHeader_266l70_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeader.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.headers_1;
    var tmp1_plusAssign = new HttpHeader(name, value);
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_8.prototype.addHeaders_y6idf8_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeaders.<anonymous>' call
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_8.prototype.headers_3z5tgz_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.headers.<anonymous>' call
    this.headers_1.clear_j9y8zo_k$();
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_8.prototype.build_1k0s4u_k$ = function () {
    return new HttpResponse(this.statusCode_1, this.headers_1, this.bodySource_1, this.bodyString_1);
  };
  function HttpResponse(statusCode, headers, bodySource, bodyString) {
    this.statusCode_1 = statusCode;
    this.headers_1 = headers;
    this.bodySource_1 = bodySource;
    this.bodyString_1 = bodyString;
  }
  HttpResponse.prototype.get_statusCode_g2w4u0_k$ = function () {
    return this.statusCode_1;
  };
  HttpResponse.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpResponse.prototype.get_body_wojkyz_k$ = function () {
    var tmp1_elvis_lhs = this.bodySource_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.bodyString_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.HttpResponse.<get-body>.<anonymous>' call
        tmp$ret$0 = (new Buffer()).write_cdq4rf_k$(tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  HttpResponse.prototype.newBuilder_dnl2aj_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Builder_8(this.statusCode_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.HttpResponse.newBuilder.<anonymous>' call
    if (!(this.bodySource_1 == null)) {
      tmp0_apply.body_j4v2yf_k$(this.bodySource_1);
    }
    if (!(this.bodyString_1 == null)) {
      tmp0_apply.body_ne46js_k$(this.bodyString_1);
    }
    tmp0_apply.addHeaders_y6idf8_k$(this.headers_1);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  function _get_method__hfkwqe($this) {
    return $this.method_1;
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function _set_body__9kndo5($this, _set____db54di) {
    $this.body_1 = _set____db54di;
  }
  function _get_body__d4fd9l($this) {
    return $this.body_1;
  }
  function _get_headers__gprxor_0($this) {
    return $this.headers_1;
  }
  function Builder_9(method, url) {
    this.method_1 = method;
    this.url_1 = url;
    this.body_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.headers_1 = tmp$ret$0;
  }
  Builder_9.prototype.body_38gmcs_k$ = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>' call
    this.body_1 = body;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_9.prototype.addHeader_266l70_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeader.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.headers_1;
    var tmp1_plusAssign = new HttpHeader(name, value);
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_9.prototype.addHeaders_y6idf8_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeaders.<anonymous>' call
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_9.prototype.headers_3z5tgz_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.headers.<anonymous>' call
    this.headers_1.clear_j9y8zo_k$();
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_9.prototype.build_1k0s4u_k$ = function () {
    return new HttpRequest(this.method_1, this.url_1, this.headers_1, this.body_1);
  };
  function HttpRequest(method, url, headers, body) {
    this.method_1 = method;
    this.url_1 = url;
    this.headers_1 = headers;
    this.body_1 = body;
  }
  HttpRequest.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  HttpRequest.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  HttpRequest.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpRequest.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  HttpRequest.prototype.newBuilder_5ffcnf_k$ = function (method, url) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Builder_9(method, url);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.HttpRequest.newBuilder.<anonymous>' call
    if (!(this.body_1 == null)) {
      tmp0_apply.body_38gmcs_k$(this.body_1);
    }
    tmp0_apply.addHeaders_y6idf8_k$(this.headers_1);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  HttpRequest.prototype.newBuilder$default_2xuoko_k$ = function (method, url, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      method = this.method_1;
    if (!(($mask0 & 2) === 0))
      url = this.url_1;
    return this.newBuilder_5ffcnf_k$(method, url);
  };
  function HttpBody() {
  }
  function HttpMethod_Get_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_Get_instance;
  }
  function HttpMethod_Post_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_Post_instance;
  }
  function valueOf_0(_this__u8e3s4, name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.valueOf.<anonymous>' call
        tmp$ret$0 = equals_0(element.get_name_woqyms_k$(), name, true);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
  }
  function HttpRequestComposer() {
  }
  function get_RESERVED_CHARS() {
    return RESERVED_CHARS;
  }
  var RESERVED_CHARS;
  function urlEncode(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.internal.urlEncode.<anonymous>' call
    // Inline function 'kotlin.text.forEach' call
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.apollographql.apollo3.api.http.internal.urlEncode.<anonymous>.<anonymous>' call
      var tmp0_subject = element;
      if (contains$default_0(RESERVED_CHARS, tmp0_subject, false, 2, null)) {
        tmp0_apply.append_ssq29y_k$(percentEncode(element));
      } else {
        tmp0_apply.append_t8oh9e_k$(element);
      }
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function percentEncode(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.uppercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
    var tmp0_uppercase = '%' + toString_0(tmp$ret$0, 16);
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_uppercase;
    tmp$ret$2 = tmp$ret$1.toUpperCase();
    return tmp$ret$2;
  }
  function readErrors(_this__u8e3s4, $this) {
    if (_this__u8e3s4.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      _this__u8e3s4.nextNull_njy9ei_k$();
      return emptyList();
    }
    _this__u8e3s4.beginArray_hxn19s_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    while (_this__u8e3s4.hasNext_bitz1p_k$()) {
      list.add_1j60pz_k$(readError(_this__u8e3s4, $this));
    }
    _this__u8e3s4.endArray_s2tmpq_k$();
    return list;
  }
  function readError(_this__u8e3s4, $this) {
    var message = '';
    var locations = null;
    var path = null;
    var extensions = null;
    var nonStandardFields = null;
    _this__u8e3s4.beginObject_5wddq0_k$();
    while (_this__u8e3s4.hasNext_bitz1p_k$()) {
      var name = _this__u8e3s4.nextName_njxula_k$();
      switch (name) {
        case 'message':
          var tmp0_elvis_lhs = _this__u8e3s4.nextString_kwkc9o_k$();
          message = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
          break;
        case 'locations':
          locations = readErrorLocations(_this__u8e3s4, $this);
          break;
        case 'path':
          path = readPath(_this__u8e3s4, $this);
          break;
        case 'extensions':
          var tmp = readAny(_this__u8e3s4);
          extensions = (tmp == null ? true : isInterface(tmp, Map)) ? tmp : null;
          break;
        default:
          if (nonStandardFields == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableMapOf' call
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            nonStandardFields = tmp$ret$0;
          }

          // Inline function 'kotlin.collections.set' call
          var tmp0_set = nonStandardFields;
          var tmp1_set = readAny(_this__u8e3s4);
          tmp0_set.put_3mhbri_k$(name, tmp1_set);

          break;
      }
    }
    _this__u8e3s4.endObject_ofuv3u_k$();
    return new Error_0(message, locations, path, extensions, nonStandardFields);
  }
  function readPath(_this__u8e3s4, $this) {
    if (_this__u8e3s4.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      return _this__u8e3s4.nextNull_njy9ei_k$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    _this__u8e3s4.beginArray_hxn19s_k$();
    while (_this__u8e3s4.hasNext_bitz1p_k$()) {
      var tmp0_subject = _this__u8e3s4.peek_21nx7_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 6:
        case 7:
          list.add_1j60pz_k$(_this__u8e3s4.nextInt_ujorgc_k$());
          ;
          break;
        default:
          list.add_1j60pz_k$(ensureNotNull(_this__u8e3s4.nextString_kwkc9o_k$()));
          ;
          break;
      }
    }
    _this__u8e3s4.endArray_s2tmpq_k$();
    return list;
  }
  function readErrorLocations(_this__u8e3s4, $this) {
    if (_this__u8e3s4.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      return _this__u8e3s4.nextNull_njy9ei_k$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    _this__u8e3s4.beginArray_hxn19s_k$();
    while (_this__u8e3s4.hasNext_bitz1p_k$()) {
      list.add_1j60pz_k$(readErrorLocation(_this__u8e3s4, $this));
    }
    _this__u8e3s4.endArray_s2tmpq_k$();
    return list;
  }
  function readErrorLocation(_this__u8e3s4, $this) {
    var line = -1;
    var column = -1;
    _this__u8e3s4.beginObject_5wddq0_k$();
    while (_this__u8e3s4.hasNext_bitz1p_k$()) {
      var tmp0_subject = _this__u8e3s4.nextName_njxula_k$();
      switch (tmp0_subject) {
        case 'line':
          line = _this__u8e3s4.nextInt_ujorgc_k$();
          break;
        case 'column':
          column = _this__u8e3s4.nextInt_ujorgc_k$();
          break;
        default:
          _this__u8e3s4.skipValue_18a9r5_k$();
          ;
          break;
      }
    }
    _this__u8e3s4.endObject_ofuv3u_k$();
    return new Location(line, column);
  }
  function ResponseParser() {
    ResponseParser_instance = this;
  }
  ResponseParser.prototype.parse_uvnn8v_k$ = function (jsonReader, operation, customScalarAdapters) {
    var tmp$ret$1;
    // Inline function 'okio.use' call
    var result = null;
    var thrown = null;
    try {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.internal.ResponseParser.parse.<anonymous>' call
      jsonReader.beginObject_5wddq0_k$();
      var data = null;
      var errors = null;
      var extensions = null;
      while (jsonReader.hasNext_bitz1p_k$()) {
        var tmp0_subject = jsonReader.nextName_njxula_k$();
        switch (tmp0_subject) {
          case 'data':
            data = nullable(operation.adapter_j0zdtd_k$()).fromJson_vznj7e_k$(jsonReader, customScalarAdapters);
            break;
          case 'errors':
            errors = readErrors(jsonReader, ResponseParser_getInstance());
            break;
          case 'extensions':
            var tmp = readAny(jsonReader);
            extensions = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : null;
            break;
          default:
            jsonReader.skipValue_18a9r5_k$();
            ;
            break;
        }
      }
      jsonReader.endObject_ofuv3u_k$();
      var tmp1_requestUuid = uuid4();
      var tmp2_data = data;
      tmp$ret$0 = (new Builder_1(operation, tmp1_requestUuid, tmp2_data)).errors_fkcc82_k$(errors).extensions_iukunq_k$(extensions).build_1k0s4u_k$();
      result = tmp$ret$0;
    } catch ($p) {
      if ($p instanceof Error) {
        thrown = $p;
      } else {
        throw $p;
      }
    }
    try {
      var tmp0_safe_receiver = jsonReader;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.close_ymq55z_k$();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        if (thrown == null)
          thrown = $p;
        else {
          addSuppressed(thrown, $p);
        }
      } else {
        throw $p;
      }
    }
    if (!(thrown == null))
      throw thrown;
    tmp$ret$1 = ensureNotNull(result);
    return tmp$ret$1;
  };
  ResponseParser.prototype.parseError_qz9ou0_k$ = function (payload) {
    return readError(MapJsonReader_init_$Create$(payload, null, 2, null), this);
  };
  var ResponseParser_instance;
  function ResponseParser_getInstance() {
    if (ResponseParser_instance == null)
      new ResponseParser();
    return ResponseParser_instance;
  }
  function _get_v2CustomTypeAdapter__tnn5qv($this) {
    return $this.v2CustomTypeAdapter_1;
  }
  function Version2CustomTypeAdapterToAdapter(v2CustomTypeAdapter) {
    this.v2CustomTypeAdapter_1 = v2CustomTypeAdapter;
  }
  Version2CustomTypeAdapterToAdapter.prototype.fromJson_vznj7e_k$ = function (reader, customScalarAdapters) {
    var value = get_NullableAnyAdapter().fromJson_vznj7e_k$(reader, customScalarAdapters);
    return this.v2CustomTypeAdapter_1.decode_y7r46y_k$(Companion_getInstance_4().fromRawValue_76b5ak_k$(value));
  };
  Version2CustomTypeAdapterToAdapter.prototype.toJson_gtgp5p_k$ = function (writer, customScalarAdapters, value) {
    var encoded = this.v2CustomTypeAdapter_1.encode_satc2z_k$(value).get_value_j01efc_k$();
    get_NullableAnyAdapter().toJson_r81dz4_k$(writer, customScalarAdapters, encoded);
  };
  function _get_HEX_ARRAY__azai2k($this) {
    return $this.HEX_ARRAY_1;
  }
  function hexString(_this__u8e3s4, $this) {
    var value = _this__u8e3s4;
    return '' + new Char(charSequenceGet('0123456789abcdef', value >>> 4 | 0)) + new Char(charSequenceGet('0123456789abcdef', value & 15));
  }
  function _get_REPLACEMENT_CHARS__kso8pt($this) {
    return $this.REPLACEMENT_CHARS_1;
  }
  function BufferedSinkJsonWriter_init_$Init$(sink, indent, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      indent = null;
    BufferedSinkJsonWriter.call($this, sink, indent);
    return $this;
  }
  function BufferedSinkJsonWriter_init_$Create$(sink, indent, $mask0, $marker) {
    return BufferedSinkJsonWriter_init_$Init$(sink, indent, $mask0, $marker, Object.create(BufferedSinkJsonWriter.prototype));
  }
  function _get_sink__ddo8ig($this) {
    return $this.sink_1;
  }
  function _get_indent__13i0wx($this) {
    return $this.indent_1;
  }
  function _set_stackSize__hfrf0k($this, _set____db54di) {
    $this.stackSize_1 = _set____db54di;
  }
  function _get_stackSize__bv31e0($this) {
    return $this.stackSize_1;
  }
  function _get_scopes__1f0kac($this) {
    return $this.scopes_1;
  }
  function _get_pathNames__agexyq($this) {
    return $this.pathNames_1;
  }
  function _get_pathIndices__9njmz3($this) {
    return $this.pathIndices_1;
  }
  function _set_isLenient__w016ko($this, _set____db54di) {
    $this.isLenient_1 = _set____db54di;
  }
  function _get_isLenient__2p6q64($this) {
    return $this.isLenient_1;
  }
  function _get_separator__ee6j2k($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = $this.indent_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (tmp$ret$0) {
      tmp = ':';
    } else {
      tmp = ': ';
    }
    return tmp;
  }
  function _set_deferredName__x5u7pp($this, _set____db54di) {
    $this.deferredName_1 = _set____db54di;
  }
  function _get_deferredName__mbj3pb($this) {
    return $this.deferredName_1;
  }
  function open($this, empty, openBracket) {
    beforeValue($this);
    pushScope($this, empty);
    $this.pathIndices_1[$this.stackSize_1 - 1 | 0] = 0;
    $this.sink_1.writeUtf8_688wup_k$(openBracket);
    return $this;
  }
  function close($this, empty, nonempty, closeBracket) {
    var context = peekScope($this);
    // Inline function 'kotlin.check' call
    var tmp0_check = !(!(context === nonempty) ? !(context === empty) : false);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.close.<anonymous>' call
      tmp$ret$0 = 'Nesting problem.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = $this.deferredName_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.close.<anonymous>' call
      tmp$ret$1 = 'Dangling name: ' + $this.deferredName_1;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp0_this = $this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 - 1 | 0;
    $this.pathNames_1[$this.stackSize_1] = null;
    var tmp2_array = $this.pathIndices_1;
    var tmp3_index0 = $this.stackSize_1 - 1 | 0;
    var tmp4 = tmp2_array[tmp3_index0];
    tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
    if (context === nonempty) {
      newline($this);
    }
    $this.sink_1.writeUtf8_688wup_k$(closeBracket);
    return $this;
  }
  function writeDeferredName($this) {
    if (!($this.deferredName_1 == null)) {
      beforeName($this);
      Companion_getInstance_6().string_h6kify_k$($this.sink_1, ensureNotNull($this.deferredName_1));
      $this.deferredName_1 = null;
    }
  }
  function newline($this) {
    if ($this.indent_1 == null) {
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    $this.sink_1.writeByte_fjn38a_k$(tmp$ret$0);
    var i = 1;
    var size = $this.stackSize_1;
    while (i < size) {
      $this.sink_1.writeUtf8_688wup_k$($this.indent_1);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
    }
  }
  function beforeName($this) {
    var context = peekScope($this);
    if (context === JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$()) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 44;
      $this.sink_1.writeByte_fjn38a_k$(tmp$ret$0);
    } else {
      // Inline function 'kotlin.check' call
      var tmp0_check = context === JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.beforeName.<anonymous>' call
        tmp$ret$1 = 'Nesting problem.';
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    newline($this);
    replaceTop($this, JsonScope_getInstance().get_DANGLING_NAME_o76qej_k$());
  }
  function beforeValue($this) {
    var tmp0_subject = peekScope($this);
    if (tmp0_subject === JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$()) {
      // Inline function 'kotlin.check' call
      var tmp0_check = $this.isLenient_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.beforeValue.<anonymous>' call
        tmp$ret$0 = 'JSON must have only one top-level value.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      replaceTop($this, JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$());
    } else if (tmp0_subject === JsonScope_getInstance().get_EMPTY_DOCUMENT_mrwzre_k$()) {
      replaceTop($this, JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$());
    } else if (tmp0_subject === JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$()) {
      replaceTop($this, JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$());
      newline($this);
    } else if (tmp0_subject === JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$()) {
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 44;
      $this.sink_1.writeByte_fjn38a_k$(tmp$ret$1);
      newline($this);
    } else if (tmp0_subject === JsonScope_getInstance().get_DANGLING_NAME_o76qej_k$()) {
      $this.sink_1.writeUtf8_688wup_k$(_get_separator__ee6j2k($this));
      replaceTop($this, JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$());
    } else
      throw IllegalStateException_init_$Create$('Nesting problem.');
  }
  function peekScope($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !($this.stackSize_1 === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.peekScope.<anonymous>' call
      tmp$ret$0 = 'JsonWriter is closed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this.scopes_1[$this.stackSize_1 - 1 | 0];
  }
  function pushScope($this, newTop) {
    if ($this.stackSize_1 === $this.scopes_1.length) {
      throw new JsonDataException('Nesting too deep at ' + $this.get_path_wos8ry_k$() + ': circular reference?');
    }
    var tmp0_this = $this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 + 1 | 0;
    $this.scopes_1[tmp1] = newTop;
  }
  function replaceTop($this, topOfStack) {
    $this.scopes_1[$this.stackSize_1 - 1 | 0] = topOfStack;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.HEX_ARRAY_1 = '0123456789abcdef';
    var tmp = this;
    var tmp$ret$7;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(128), null);
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.Companion.REPLACEMENT_CHARS.<anonymous>' call
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp0_apply[i] = '\\u00' + hexString(toByte(i), Companion_getInstance_6());
      }
       while (inductionVariable <= 31);
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 34;
    tmp0_apply[tmp$ret$1] = '\\"';
    var tmp$ret$2;
    // Inline function 'kotlin.code' call
    tmp$ret$2 = 92;
    tmp0_apply[tmp$ret$2] = '\\\\';
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    tmp$ret$3 = 9;
    tmp0_apply[tmp$ret$3] = '\\t';
    var tmp$ret$4;
    // Inline function 'kotlin.code' call
    tmp$ret$4 = 8;
    tmp0_apply[tmp$ret$4] = '\\b';
    var tmp$ret$5;
    // Inline function 'kotlin.code' call
    tmp$ret$5 = 10;
    tmp0_apply[tmp$ret$5] = '\\n';
    var tmp$ret$6;
    // Inline function 'kotlin.code' call
    tmp$ret$6 = 13;
    tmp0_apply[tmp$ret$6] = '\\r';
    tmp$ret$7 = tmp0_apply;
    tmp.REPLACEMENT_CHARS_1 = tmp$ret$7;
  }
  Companion_4.prototype.string_h6kify_k$ = function (sink, value) {
    var replacements = this.REPLACEMENT_CHARS_1;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 34;
    sink.writeByte_fjn38a_k$(tmp$ret$0);
    var last = 0;
    var length = value.length;
    var inductionVariable = 0;
    if (inductionVariable < length)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(value, i);
        var replacement;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(c);
        if (tmp$ret$1 < 128) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = Char__toInt_impl_vasixd(c);
          replacement = replacements[tmp$ret$2];
          if (replacement == null) {
            continue $l$loop_0;
          }
        } else {
          if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(8232)))) {
            replacement = '\\u2028';
          } else {
            if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(8233)))) {
              replacement = '\\u2029';
            } else {
              continue $l$loop_0;
            }
          }
        }
        if (last < i) {
          sink.writeUtf8_jl4gy7_k$(value, last, i);
        }
        sink.writeUtf8_688wup_k$(replacement);
        last = i + 1 | 0;
      }
       while (inductionVariable < length);
    if (last < length) {
      sink.writeUtf8_jl4gy7_k$(value, last, length);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    tmp$ret$3 = 34;
    sink.writeByte_fjn38a_k$(tmp$ret$3);
  };
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function BufferedSinkJsonWriter(sink, indent) {
    Companion_getInstance_6();
    this.sink_1 = sink;
    this.indent_1 = indent;
    this.stackSize_1 = 0;
    this.scopes_1 = new Int32Array(Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$());
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.pathNames_1 = tmp$ret$0;
    this.pathIndices_1 = new Int32Array(Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$());
    this.isLenient_1 = false;
    this.deferredName_1 = null;
    pushScope(this, JsonScope_getInstance().get_EMPTY_DOCUMENT_mrwzre_k$());
  }
  BufferedSinkJsonWriter.prototype.get_path_wos8ry_k$ = function () {
    var tmp = JsonScope_getInstance().getPath_lqzwqu_k$(this.stackSize_1, this.scopes_1, this.pathNames_1, this.pathIndices_1);
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  };
  BufferedSinkJsonWriter.prototype.beginArray_hxn19s_k$ = function () {
    writeDeferredName(this);
    return open(this, JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$(), '[');
  };
  BufferedSinkJsonWriter.prototype.endArray_s2tmpq_k$ = function () {
    return close(this, JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$(), JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$(), ']');
  };
  BufferedSinkJsonWriter.prototype.beginObject_5wddq0_k$ = function () {
    writeDeferredName(this);
    return open(this, JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$(), '{');
  };
  BufferedSinkJsonWriter.prototype.endObject_ofuv3u_k$ = function () {
    return close(this, JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$(), JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$(), '}');
  };
  BufferedSinkJsonWriter.prototype.name_u79i4q_k$ = function (name) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.stackSize_1 === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.name.<anonymous>' call
      tmp$ret$0 = 'JsonWriter is closed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.deferredName_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.name.<anonymous>' call
      tmp$ret$1 = 'Nesting problem.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.deferredName_1 = name;
    this.pathNames_1[this.stackSize_1 - 1 | 0] = name;
    return this;
  };
  BufferedSinkJsonWriter.prototype.value_h8ym4w_k$ = function (value) {
    writeDeferredName(this);
    beforeValue(this);
    Companion_getInstance_6().string_h6kify_k$(this.sink_1, value);
    var tmp0_array = this.pathIndices_1;
    var tmp1_index0 = this.stackSize_1 - 1 | 0;
    var tmp2 = tmp0_array[tmp1_index0];
    tmp0_array[tmp1_index0] = tmp2 + 1 | 0;
    return this;
  };
  BufferedSinkJsonWriter.prototype.nullValue_h3u4a2_k$ = function () {
    return this.jsonValue_dlj0bs_k$('null');
  };
  BufferedSinkJsonWriter.prototype.value_5b51sn_k$ = function (value) {
    return this.jsonValue_dlj0bs_k$(value ? 'true' : 'false');
  };
  BufferedSinkJsonWriter.prototype.value_ofc5ao_k$ = function (value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(!this.isLenient_1 ? isNaN_0(value) ? true : isInfinite(value) : false);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.value.<anonymous>' call
      tmp$ret$0 = 'Numeric values must be finite, but was ' + value;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.jsonValue_dlj0bs_k$(value.toString());
  };
  BufferedSinkJsonWriter.prototype.value_7nxl9s_k$ = function (value) {
    return this.jsonValue_dlj0bs_k$(value.toString());
  };
  BufferedSinkJsonWriter.prototype.value_oin34r_k$ = function (value) {
    return this.jsonValue_dlj0bs_k$(value.toString());
  };
  BufferedSinkJsonWriter.prototype.value_b3fnuy_k$ = function (value) {
    return this.jsonValue_dlj0bs_k$(value.get_value_j01efc_k$());
  };
  BufferedSinkJsonWriter.prototype.value_b5cpri_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.value.<anonymous>' call
    this.nullValue_h3u4a2_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  BufferedSinkJsonWriter.prototype.jsonValue_dlj0bs_k$ = function (value) {
    writeDeferredName(this);
    beforeValue(this);
    this.sink_1.writeUtf8_688wup_k$(value);
    var tmp0_array = this.pathIndices_1;
    var tmp1_index0 = this.stackSize_1 - 1 | 0;
    var tmp2 = tmp0_array[tmp1_index0];
    tmp0_array[tmp1_index0] = tmp2 + 1 | 0;
    return this;
  };
  BufferedSinkJsonWriter.prototype.flush_sgqoqb_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.stackSize_1 === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.flush.<anonymous>' call
      tmp$ret$0 = 'JsonWriter is closed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.sink_1.flush_sgqoqb_k$();
  };
  BufferedSinkJsonWriter.prototype.close_ymq55z_k$ = function () {
    this.sink_1.close_ymq55z_k$();
    var size = this.stackSize_1;
    if (size > 1 ? true : size === 1 ? !(this.scopes_1[size - 1 | 0] === JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$()) : false) {
      throw IOException_init_$Create$('Incomplete document');
    }
    this.stackSize_1 = 0;
  };
  function _get_MIN_INCOMPLETE_INTEGER__madyxr($this) {
    return $this.MIN_INCOMPLETE_INTEGER_1;
  }
  function _get_SINGLE_QUOTE_OR_SLASH__h7g1ey($this) {
    return $this.SINGLE_QUOTE_OR_SLASH_1;
  }
  function _get_DOUBLE_QUOTE_OR_SLASH__ymwxgf($this) {
    return $this.DOUBLE_QUOTE_OR_SLASH_1;
  }
  function _get_UNQUOTED_STRING_TERMINALS__dsy6d2($this) {
    return $this.UNQUOTED_STRING_TERMINALS_1;
  }
  function _get_LINEFEED_OR_CARRIAGE_RETURN__hnp8f9($this) {
    return $this.LINEFEED_OR_CARRIAGE_RETURN_1;
  }
  function _get_PEEKED_NONE__6xskj0($this) {
    return $this.PEEKED_NONE_1;
  }
  function _get_PEEKED_BEGIN_OBJECT__h9at3d($this) {
    return $this.PEEKED_BEGIN_OBJECT_1;
  }
  function _get_PEEKED_END_OBJECT__hsx815($this) {
    return $this.PEEKED_END_OBJECT_1;
  }
  function _get_PEEKED_BEGIN_ARRAY__6t6tvx($this) {
    return $this.PEEKED_BEGIN_ARRAY_1;
  }
  function _get_PEEKED_END_ARRAY__skal7f($this) {
    return $this.PEEKED_END_ARRAY_1;
  }
  function _get_PEEKED_TRUE__6ufqte($this) {
    return $this.PEEKED_TRUE_1;
  }
  function _get_PEEKED_FALSE__60cl9v($this) {
    return $this.PEEKED_FALSE_1;
  }
  function _get_PEEKED_NULL__6xorx7($this) {
    return $this.PEEKED_NULL_1;
  }
  function _get_PEEKED_SINGLE_QUOTED__45iusv($this) {
    return $this.PEEKED_SINGLE_QUOTED_1;
  }
  function _get_PEEKED_DOUBLE_QUOTED__sfvg86($this) {
    return $this.PEEKED_DOUBLE_QUOTED_1;
  }
  function _get_PEEKED_UNQUOTED__yb1iqz($this) {
    return $this.PEEKED_UNQUOTED_1;
  }
  function _get_PEEKED_BUFFERED__3z1wvn($this) {
    return $this.PEEKED_BUFFERED_1;
  }
  function _get_PEEKED_SINGLE_QUOTED_NAME__ppdw0v($this) {
    return $this.PEEKED_SINGLE_QUOTED_NAME_1;
  }
  function _get_PEEKED_DOUBLE_QUOTED_NAME__e3j2g($this) {
    return $this.PEEKED_DOUBLE_QUOTED_NAME_1;
  }
  function _get_PEEKED_UNQUOTED_NAME__1lyrp5($this) {
    return $this.PEEKED_UNQUOTED_NAME_1;
  }
  function _get_PEEKED_LONG__6yw5o0($this) {
    return $this.PEEKED_LONG_1;
  }
  function _get_PEEKED_NUMBER__bmlehv($this) {
    return $this.PEEKED_NUMBER_1;
  }
  function _get_PEEKED_EOF__4cr9jo($this) {
    return $this.PEEKED_EOF_1;
  }
  function _get_NUMBER_CHAR_NONE__4zhue8($this) {
    return $this.NUMBER_CHAR_NONE_1;
  }
  function _get_NUMBER_CHAR_SIGN__524ugr($this) {
    return $this.NUMBER_CHAR_SIGN_1;
  }
  function _get_NUMBER_CHAR_DIGIT__7o9pfb($this) {
    return $this.NUMBER_CHAR_DIGIT_1;
  }
  function _get_NUMBER_CHAR_DECIMAL__1xdx65($this) {
    return $this.NUMBER_CHAR_DECIMAL_1;
  }
  function _get_NUMBER_CHAR_FRACTION_DIGIT__or7ago($this) {
    return $this.NUMBER_CHAR_FRACTION_DIGIT_1;
  }
  function _get_NUMBER_CHAR_EXP_E__8dqfk1($this) {
    return $this.NUMBER_CHAR_EXP_E_1;
  }
  function _get_NUMBER_CHAR_EXP_SIGN__k1c321($this) {
    return $this.NUMBER_CHAR_EXP_SIGN_1;
  }
  function _get_NUMBER_CHAR_EXP_DIGIT__p8aa2v($this) {
    return $this.NUMBER_CHAR_EXP_DIGIT_1;
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_peeked__owo5y5($this, _set____db54di) {
    $this.peeked_1 = _set____db54di;
  }
  function _get_peeked__qdeqkx($this) {
    return $this.peeked_1;
  }
  function _set_peekedLong__gyoprz($this, _set____db54di) {
    $this.peekedLong_1 = _set____db54di;
  }
  function _get_peekedLong__w0xax7($this) {
    return $this.peekedLong_1;
  }
  function _set_peekedNumberLength__x3boi6($this, _set____db54di) {
    $this.peekedNumberLength_1 = _set____db54di;
  }
  function _get_peekedNumberLength__ujmm6($this) {
    return $this.peekedNumberLength_1;
  }
  function _set_peekedString__1ptzck($this, _set____db54di) {
    $this.peekedString_1 = _set____db54di;
  }
  function _get_peekedString__dtwr7k($this) {
    return $this.peekedString_1;
  }
  function _get_stack__b8zp2v($this) {
    return $this.stack_1;
  }
  function _set_stackSize__hfrf0k_0($this, _set____db54di) {
    $this.stackSize_1 = _set____db54di;
  }
  function _get_stackSize__bv31e0_0($this) {
    return $this.stackSize_1;
  }
  function _get_pathNames__agexyq_0($this) {
    return $this.pathNames_1;
  }
  function _get_pathIndices__9njmz3_0($this) {
    return $this.pathIndices_1;
  }
  function _set_lenient__lslzhq($this, _set____db54di) {
    $this.lenient_1 = _set____db54di;
  }
  function _get_lenient__3tmava($this) {
    return $this.lenient_1;
  }
  function _get_indexStack__8zhabv($this) {
    return $this.indexStack_1;
  }
  function _set_indexStackSize__jeheyo($this, _set____db54di) {
    $this.indexStackSize_1 = _set____db54di;
  }
  function _get_indexStackSize__q3j6z0($this) {
    return $this.indexStackSize_1;
  }
  function doPeek($this) {
    var peekStack = $this.stack_1[$this.stackSize_1 - 1 | 0];
    var tmp0_subject = peekStack;
    if (tmp0_subject === JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$()) {
      $this.stack_1[$this.stackSize_1 - 1 | 0] = JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$();
    } else if (tmp0_subject === JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$()) {
      var c = nextNonWhitespace($this, true);
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp1_subject = numberToChar(c);
      if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93)))) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp0_also = 4;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        return tmp$ret$0;
      } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        checkLenient($this);
      } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(44))))
      ;
      else
        throw syntaxError($this, 'Unterminated array');
    } else if (tmp0_subject === JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$() ? true : tmp0_subject === JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$()) {
      $this.stack_1[$this.stackSize_1 - 1 | 0] = JsonScope_getInstance().get_DANGLING_NAME_o76qej_k$();
      if (peekStack === JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$()) {
        var c_0 = nextNonWhitespace($this, true);
        $this.buffer_1.readByte_ectjk2_k$();
        var tmp2_subject = numberToChar(c_0);
        if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(125)))) {
          var tmp$ret$1;
          // Inline function 'kotlin.also' call
          Companion_getInstance_7();
          var tmp1_also = 2;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
          $this.peeked_1 = tmp1_also;
          tmp$ret$1 = tmp1_also;
          return tmp$ret$1;
        } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(59)))) {
          checkLenient($this);
        } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(44))))
        ;
        else
          throw syntaxError($this, 'Unterminated object');
      }
      var c_1 = nextNonWhitespace($this, true);
      var tmp3_subject = numberToChar(c_1);
      var tmp;
      if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(34)))) {
        $this.buffer_1.readByte_ectjk2_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp2_also = 13;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp = tmp$ret$2;
      } else if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(39)))) {
        $this.buffer_1.readByte_ectjk2_k$();
        checkLenient($this);
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp3_also = 12;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp3_also;
        tmp$ret$3 = tmp3_also;
        tmp = tmp$ret$3;
      } else if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(125)))) {
        var tmp_0;
        if (!(peekStack === JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$())) {
          $this.buffer_1.readByte_ectjk2_k$();
          var tmp$ret$4;
          // Inline function 'kotlin.also' call
          Companion_getInstance_7();
          var tmp4_also = 2;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
          $this.peeked_1 = tmp4_also;
          tmp$ret$4 = tmp4_also;
          tmp_0 = tmp$ret$4;
        } else {
          throw syntaxError($this, 'Expected name');
        }
        tmp = tmp_0;
      } else {
        checkLenient($this);
        var tmp_1;
        if (isLiteral($this, numberToChar(c_1))) {
          var tmp$ret$5;
          // Inline function 'kotlin.also' call
          Companion_getInstance_7();
          var tmp5_also = 14;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
          $this.peeked_1 = tmp5_also;
          tmp$ret$5 = tmp5_also;
          tmp_1 = tmp$ret$5;
        } else {
          throw syntaxError($this, 'Expected name');
        }
        tmp = tmp_1;
      }
      return tmp;
    } else if (tmp0_subject === JsonScope_getInstance().get_DANGLING_NAME_o76qej_k$()) {
      $this.stack_1[$this.stackSize_1 - 1 | 0] = JsonScope_getInstance().get_NONEMPTY_OBJECT_vkp591_k$();
      var c_2 = nextNonWhitespace($this, true);
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp4_subject = numberToChar(c_2);
      if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(58)))) {
      } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        checkLenient($this);
        var tmp_2;
        if ($this.source_1.request_k7c0qh_k$(new Long(1, 0))) {
          var tmp_3 = $this.buffer_1.get_ec5on4_k$(new Long(0, 0));
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          tmp$ret$6 = 62;
          tmp_2 = tmp_3 === toByte(tmp$ret$6);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          $this.buffer_1.readByte_ectjk2_k$();
        }
      } else
        throw syntaxError($this, "Expected ':'");
    } else if (tmp0_subject === JsonScope_getInstance().get_EMPTY_DOCUMENT_mrwzre_k$()) {
      $this.stack_1[$this.stackSize_1 - 1 | 0] = JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$();
    } else if (tmp0_subject === JsonScope_getInstance().get_NONEMPTY_DOCUMENT_q3bt4h_k$()) {
      var c_3 = nextNonWhitespace($this, false);
      if (c_3 === -1) {
        var tmp$ret$7;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp6_also = 17;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp6_also;
        tmp$ret$7 = tmp6_also;
        return tmp$ret$7;
      } else {
        checkLenient($this);
      }
    } else {
      // Inline function 'kotlin.check' call
      var tmp7_check = !(peekStack === JsonScope_getInstance().get_CLOSED_3p2npn_k$());
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp7_check) {
        var tmp$ret$8;
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        tmp$ret$8 = 'JsonReader is closed';
        var message = tmp$ret$8;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    var c_4 = nextNonWhitespace($this, true);
    var tmp5_subject = numberToChar(c_4);
    if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(93)))) {
      if (peekStack === JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$()) {
        $this.buffer_1.readByte_ectjk2_k$();
        var tmp$ret$9;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp8_also = 4;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp8_also;
        tmp$ret$9 = tmp8_also;
        return tmp$ret$9;
      }
      var tmp_4;
      if (peekStack === JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$() ? true : peekStack === JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$()) {
        checkLenient($this);
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp9_also = 7;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp9_also;
        tmp$ret$10 = tmp9_also;
        tmp_4 = tmp$ret$10;
      } else {
        throw syntaxError($this, 'Unexpected value');
      }
      return tmp_4;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp_5;
      if (peekStack === JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$() ? true : peekStack === JsonScope_getInstance().get_NONEMPTY_ARRAY_lfn8wz_k$()) {
        checkLenient($this);
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp10_also = 7;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.peeked_1 = tmp10_also;
        tmp$ret$11 = tmp10_also;
        tmp_5 = tmp$ret$11;
      } else {
        throw syntaxError($this, 'Unexpected value');
      }
      return tmp_5;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(39)))) {
      checkLenient($this);
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp$ret$12;
      // Inline function 'kotlin.also' call
      Companion_getInstance_7();
      var tmp11_also = 8;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.peeked_1 = tmp11_also;
      tmp$ret$12 = tmp11_also;
      return tmp$ret$12;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(34)))) {
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp$ret$13;
      // Inline function 'kotlin.also' call
      Companion_getInstance_7();
      var tmp12_also = 9;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.peeked_1 = tmp12_also;
      tmp$ret$13 = tmp12_also;
      return tmp$ret$13;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(91)))) {
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp$ret$14;
      // Inline function 'kotlin.also' call
      Companion_getInstance_7();
      var tmp13_also = 3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.peeked_1 = tmp13_also;
      tmp$ret$14 = tmp13_also;
      return tmp$ret$14;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(123)))) {
      $this.buffer_1.readByte_ectjk2_k$();
      var tmp$ret$15;
      // Inline function 'kotlin.also' call
      Companion_getInstance_7();
      var tmp14_also = 1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.peeked_1 = tmp14_also;
      tmp$ret$15 = tmp14_also;
      return tmp$ret$15;
    }
    var result = peekKeyword($this);
    var tmp_6 = result;
    Companion_getInstance_7();
    if (!(tmp_6 === 0)) {
      return result;
    }
    result = peekNumber($this);
    var tmp_7 = result;
    Companion_getInstance_7();
    if (!(tmp_7 === 0)) {
      return result;
    }
    if (!isLiteral($this, numberToChar($this.buffer_1.get_ec5on4_k$(new Long(0, 0))))) {
      throw syntaxError($this, 'Expected value');
    }
    checkLenient($this);
    var tmp$ret$16;
    // Inline function 'kotlin.also' call
    Companion_getInstance_7();
    var tmp15_also = 10;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
    $this.peeked_1 = tmp15_also;
    tmp$ret$16 = tmp15_also;
    return tmp$ret$16;
  }
  function peekKeyword($this) {
    var keyword;
    var keywordUpper;
    var peeking;
    var tmp0_subject = $this.buffer_1.get_ec5on4_k$(new Long(0, 0));
    var tmp;
    var tmp_0 = tmp0_subject;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 116;
    if (tmp_0 === toByte(tmp$ret$0)) {
      tmp = true;
    } else {
      var tmp_1 = tmp0_subject;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 84;
      tmp = tmp_1 === toByte(tmp$ret$1);
    }
    if (tmp) {
      keyword = 'true';
      keywordUpper = 'TRUE';
      Companion_getInstance_7();
      peeking = 5;
    } else {
      var tmp_2;
      var tmp_3 = tmp0_subject;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp_3 === toByte(tmp$ret$2)) {
        tmp_2 = true;
      } else {
        var tmp_4 = tmp0_subject;
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        tmp$ret$3 = 70;
        tmp_2 = tmp_4 === toByte(tmp$ret$3);
      }
      if (tmp_2) {
        keyword = 'false';
        keywordUpper = 'FALSE';
        Companion_getInstance_7();
        peeking = 6;
      } else {
        var tmp_5;
        var tmp_6 = tmp0_subject;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 110;
        if (tmp_6 === toByte(tmp$ret$4)) {
          tmp_5 = true;
        } else {
          var tmp_7 = tmp0_subject;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 78;
          tmp_5 = tmp_7 === toByte(tmp$ret$5);
        }
        if (tmp_5) {
          keyword = 'null';
          keywordUpper = 'NULL';
          Companion_getInstance_7();
          peeking = 7;
        } else {
          Companion_getInstance_7();
          return 0;
        }
      }
    }
    var length = keyword.length;
    var inductionVariable = 1;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!$this.source_1.request_k7c0qh_k$(numberToLong(i).plus_u6jwas_k$(new Long(1, 0)))) {
          Companion_getInstance_7();
          return 0;
        }
        var c = $this.buffer_1.get_ec5on4_k$(toLong(i));
        var tmp_8;
        var tmp_9 = c;
        var tmp$ret$6;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(keyword, i);
        tmp$ret$6 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        if (!(tmp_9 === toByte(tmp$ret$6))) {
          var tmp_10 = c;
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          var tmp1__get_code__adl84j = charSequenceGet(keywordUpper, i);
          tmp$ret$7 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
          tmp_8 = !(tmp_10 === toByte(tmp$ret$7));
        } else {
          tmp_8 = false;
        }
        if (tmp_8) {
          Companion_getInstance_7();
          return 0;
        }
      }
       while (inductionVariable < length);
    if ($this.source_1.request_k7c0qh_k$(numberToLong(length).plus_u6jwas_k$(new Long(1, 0))) ? isLiteral($this, numberToChar($this.buffer_1.get_ec5on4_k$(toLong(length)))) : false) {
      Companion_getInstance_7();
      return 0;
    }
    $this.buffer_1.skip_vl0dd4_k$(toLong(length));
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekKeyword.<anonymous>' call
    $this.peeked_1 = peeking;
    tmp$ret$8 = peeking;
    return tmp$ret$8;
  }
  function peekNumber($this) {
    var value = new Long(0, 0);
    var negative = false;
    var fitsInLong = true;
    Companion_getInstance_7();
    var last = 0;
    var i = 0;
    loop: while ($this.source_1.request_k7c0qh_k$(numberToLong(i).plus_u6jwas_k$(new Long(1, 0)))) {
      var c = $this.buffer_1.get_ec5on4_k$(toLong(i));
      var tmp0_subject = numberToChar(c);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(45)))) {
        var tmp1_subject = last;
        Companion_getInstance_7();
        if (tmp1_subject === 0) {
          negative = true;
          Companion_getInstance_7();
          last = 1;
        } else {
          Companion_getInstance_7();
          if (tmp1_subject === 5) {
            Companion_getInstance_7();
            last = 6;
          } else {
            Companion_getInstance_7();
            return 0;
          }
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(43)))) {
        var tmp = last;
        Companion_getInstance_7();
        if (tmp === 5) {
          Companion_getInstance_7();
          last = 6;
        } else {
          Companion_getInstance_7();
          return 0;
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(101))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(69)))) {
        var tmp_0;
        var tmp_1 = last;
        Companion_getInstance_7();
        if (tmp_1 === 2) {
          tmp_0 = true;
        } else {
          var tmp_2 = last;
          Companion_getInstance_7();
          tmp_0 = tmp_2 === 4;
        }
        if (tmp_0) {
          Companion_getInstance_7();
          last = 5;
        } else {
          Companion_getInstance_7();
          return 0;
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(46)))) {
        var tmp_3 = last;
        Companion_getInstance_7();
        if (tmp_3 === 2) {
          Companion_getInstance_7();
          last = 3;
        } else {
          Companion_getInstance_7();
          return 0;
        }
      } else {
        var tmp_4;
        var tmp_5 = c;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        if (tmp_5 < toByte(tmp$ret$0)) {
          tmp_4 = true;
        } else {
          var tmp_6 = c;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 57;
          tmp_4 = tmp_6 > toByte(tmp$ret$1);
        }
        if (tmp_4) {
          if (!isLiteral($this, numberToChar(c))) {
            break loop;
          } else {
            Companion_getInstance_7();
            return 0;
          }
        }
        var tmp2_subject = last;
        var tmp_7;
        Companion_getInstance_7();
        if (tmp2_subject === 1) {
          tmp_7 = true;
        } else {
          Companion_getInstance_7();
          tmp_7 = tmp2_subject === 0;
        }
        if (tmp_7) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          value = toLong(c - toByte(tmp$ret$2)).unaryMinus_6uz0qp_k$();
          Companion_getInstance_7();
          last = 2;
        } else {
          Companion_getInstance_7();
          if (tmp2_subject === 2) {
            if (value.equals(new Long(0, 0))) {
              Companion_getInstance_7();
              return 0;
            }
            var tmp$ret$5;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$3;
            // Inline function 'kotlin.Long.times' call
            var tmp0_times = value;
            tmp$ret$3 = tmp0_times.times_2zfqpc_k$(new Long(10, 0));
            var tmp1_minus = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 48;
            var tmp2_minus = c - toByte(tmp$ret$4);
            tmp$ret$5 = tmp1_minus.minus_llf5ei_k$(toLong(tmp2_minus));
            var newValue = tmp$ret$5;
            var tmp_8;
            var tmp_9 = fitsInLong;
            var tmp_10 = value;
            Companion_getInstance_7();
            if (!!(tmp_9 & tmp_10.compareTo_n4fqi2_k$(new Long(858993460, -214748365)) > 0)) {
              tmp_8 = true;
            } else {
              var tmp_11;
              var tmp_12 = value;
              Companion_getInstance_7();
              if (tmp_12.equals(new Long(858993460, -214748365))) {
                tmp_11 = newValue.compareTo_n4fqi2_k$(value) < 0;
              } else {
                tmp_11 = false;
              }
              tmp_8 = tmp_11;
            }
            fitsInLong = tmp_8;
            value = newValue;
          } else {
            Companion_getInstance_7();
            if (tmp2_subject === 3) {
              Companion_getInstance_7();
              last = 4;
            } else {
              var tmp_13;
              Companion_getInstance_7();
              if (tmp2_subject === 5) {
                tmp_13 = true;
              } else {
                Companion_getInstance_7();
                tmp_13 = tmp2_subject === 6;
              }
              if (tmp_13) {
                Companion_getInstance_7();
                last = 7;
              }
            }
          }
        }
      }
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
    var tmp_14;
    var tmp_15;
    var tmp_16;
    var tmp_17 = last;
    Companion_getInstance_7();
    if (tmp_17 === 2) {
      tmp_16 = fitsInLong;
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = !value.equals(Companion_getInstance().get_MIN_VALUE_7nmmor_k$()) ? true : negative;
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      $this.peekedLong_1 = negative ? value : value.unaryMinus_6uz0qp_k$();
      $this.buffer_1.skip_vl0dd4_k$(toLong(i));
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      Companion_getInstance_7();
      var tmp3_also = 15;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekNumber.<anonymous>' call
      $this.peeked_1 = tmp3_also;
      tmp$ret$6 = tmp3_also;
      tmp_14 = tmp$ret$6;
    } else {
      var tmp_18;
      var tmp_19;
      var tmp_20 = last;
      Companion_getInstance_7();
      if (tmp_20 === 2) {
        tmp_19 = true;
      } else {
        var tmp_21 = last;
        Companion_getInstance_7();
        tmp_19 = tmp_21 === 4;
      }
      if (tmp_19) {
        tmp_18 = true;
      } else {
        var tmp_22 = last;
        Companion_getInstance_7();
        tmp_18 = tmp_22 === 7;
      }
      if (tmp_18) {
        $this.peekedNumberLength_1 = i;
        var tmp$ret$7;
        // Inline function 'kotlin.also' call
        Companion_getInstance_7();
        var tmp4_also = 16;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekNumber.<anonymous>' call
        $this.peeked_1 = tmp4_also;
        tmp$ret$7 = tmp4_also;
        tmp_14 = tmp$ret$7;
      } else {
        Companion_getInstance_7();
        tmp_14 = 0;
      }
    }
    return tmp_14;
  }
  function isLiteral($this, c) {
    var tmp0_subject = c;
    var tmp;
    if ((((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(92)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(35)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
      checkLenient($this);
      tmp = false;
    } else if (((((((((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(123))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(91)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(32)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp = false;
    } else {
      tmp = true;
    }
    return tmp;
  }
  function nextQuotedValue($this, runTerminator) {
    var builder = null;
    $l$loop: while (true) {
      var index = $this.source_1.indexOfElement_aqjz7r_k$(runTerminator);
      if (index.equals(new Long(-1, -1)))
        throw syntaxError($this, 'Unterminated string');
      var tmp = $this.buffer_1.get_ec5on4_k$(index);
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 92;
      if (tmp === toByte(tmp$ret$0)) {
        if (builder == null)
          builder = StringBuilder_init_$Create$();
        builder.append_ssq29y_k$($this.buffer_1.readUtf8_y4u7qn_k$(index));
        $this.buffer_1.readByte_ectjk2_k$();
        builder.append_t8oh9e_k$(readEscapeCharacter($this));
        continue $l$loop;
      }
      var tmp_0;
      if (builder == null) {
        var result = $this.buffer_1.readUtf8_y4u7qn_k$(index);
        $this.buffer_1.readByte_ectjk2_k$();
        tmp_0 = result;
      } else {
        builder.append_ssq29y_k$($this.buffer_1.readUtf8_y4u7qn_k$(index));
        $this.buffer_1.readByte_ectjk2_k$();
        tmp_0 = builder.toString();
      }
      return tmp_0;
    }
  }
  function nextUnquotedValue($this) {
    var i = $this.source_1.indexOfElement_aqjz7r_k$(Companion_getInstance_7().UNQUOTED_STRING_TERMINALS_1);
    return !i.equals(new Long(-1, -1)) ? $this.buffer_1.readUtf8_y4u7qn_k$(i) : $this.buffer_1.readUtf8_echivt_k$();
  }
  function skipQuotedValue($this, runTerminator) {
    while (true) {
      var index = $this.source_1.indexOfElement_aqjz7r_k$(runTerminator);
      if (index.equals(new Long(-1, -1)))
        throw syntaxError($this, 'Unterminated string');
      var tmp = $this.buffer_1.get_ec5on4_k$(index);
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 92;
      if (tmp === toByte(tmp$ret$0)) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = index.plus_u6jwas_k$(new Long(1, 0));
        $this.buffer_1.skip_vl0dd4_k$(tmp$ret$1);
        readEscapeCharacter($this);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$2 = index.plus_u6jwas_k$(new Long(1, 0));
        $this.buffer_1.skip_vl0dd4_k$(tmp$ret$2);
        return Unit_getInstance();
      }
    }
  }
  function skipUnquotedValue($this) {
    var i = $this.source_1.indexOfElement_aqjz7r_k$(Companion_getInstance_7().UNQUOTED_STRING_TERMINALS_1);
    $this.buffer_1.skip_vl0dd4_k$(!i.equals(new Long(-1, -1)) ? i : $this.buffer_1.get_size_woubt6_k$());
  }
  function push($this, newTop) {
    if ($this.stackSize_1 === $this.stack_1.length)
      throw new JsonDataException('Nesting too deep at ' + $this.getPath_18su3p_k$());
    var tmp0_this = $this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 + 1 | 0;
    $this.stack_1[tmp1] = newTop;
  }
  function nextNonWhitespace($this, throwOnEof) {
    var p = 0;
    loop: while ($this.source_1.request_k7c0qh_k$(numberToLong(p).plus_u6jwas_k$(new Long(1, 0)))) {
      var tmp0 = p;
      p = tmp0 + 1 | 0;
      var c = $this.buffer_1.get_ec5on4_k$(toLong(tmp0));
      var tmp;
      var tmp_0;
      var tmp_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 10;
      if (c === tmp$ret$0) {
        tmp_1 = true;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 32;
        tmp_1 = c === tmp$ret$1;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 13;
        tmp_0 = c === tmp$ret$2;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        tmp$ret$3 = 9;
        tmp = c === tmp$ret$3;
      }
      if (tmp) {
        continue loop;
      }
      $this.buffer_1.skip_vl0dd4_k$(numberToLong(p).minus_llf5ei_k$(new Long(1, 0)));
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 47;
      if (c === tmp$ret$4) {
        if (!$this.source_1.request_k7c0qh_k$(new Long(2, 0))) {
          return c;
        }
        checkLenient($this);
        var peek = $this.buffer_1.get_ec5on4_k$(new Long(1, 0));
        var tmp1_subject = numberToChar(peek);
        var tmp_2;
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(42)))) {
          $this.buffer_1.readByte_ectjk2_k$();
          $this.buffer_1.readByte_ectjk2_k$();
          if (!skipTo($this, '*/')) {
            throw syntaxError($this, 'Unterminated comment');
          }
          $this.buffer_1.readByte_ectjk2_k$();
          $this.buffer_1.readByte_ectjk2_k$();
          p = 0;
          continue loop;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(47)))) {
          $this.buffer_1.readByte_ectjk2_k$();
          $this.buffer_1.readByte_ectjk2_k$();
          skipToEndOfLine($this);
          p = 0;
          continue loop;
        } else {
          tmp_2 = c;
        }
        return tmp_2;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = 35;
        if (c === tmp$ret$5) {
          checkLenient($this);
          skipToEndOfLine($this);
          p = 0;
        } else {
          return c;
        }
      }
    }
    var tmp_3;
    if (throwOnEof) {
      throw new EOFException('End of input');
    } else {
      tmp_3 = -1;
    }
    return tmp_3;
  }
  function checkLenient($this) {
    if (!$this.lenient_1)
      throw syntaxError($this, 'Use JsonReader.setLenient(true) to accept malformed JSON');
  }
  function skipToEndOfLine($this) {
    var index = $this.source_1.indexOfElement_aqjz7r_k$(Companion_getInstance_7().LINEFEED_OR_CARRIAGE_RETURN_1);
    var tmp;
    if (!index.equals(new Long(-1, -1))) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.plus_u6jwas_k$(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      tmp = $this.buffer_1.get_size_woubt6_k$();
    }
    $this.buffer_1.skip_vl0dd4_k$(tmp);
  }
  function skipTo($this, toFind) {
    outer: while ($this.source_1.request_k7c0qh_k$(toLong(toFind.length))) {
      var inductionVariable = 0;
      var last = charSequenceLength(toFind) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = $this.buffer_1.get_ec5on4_k$(toLong(c));
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          var tmp0__get_code__88qj9g = charSequenceGet(toFind, c);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
          if (!(tmp === toByte(tmp$ret$0))) {
            $this.buffer_1.readByte_ectjk2_k$();
            continue outer;
          }
        }
         while (inductionVariable <= last);
      return true;
    }
    return false;
  }
  function getPathAsString($this) {
    var tmp = $this.getPath_18su3p_k$();
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  }
  function readEscapeCharacter($this) {
    if (!$this.source_1.request_k7c0qh_k$(new Long(1, 0)))
      throw syntaxError($this, 'Unterminated escape sequence');
    var escaped = numberToChar($this.buffer_1.readByte_ectjk2_k$());
    var tmp;
    if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(117)))) {
      if (!$this.source_1.request_k7c0qh_k$(new Long(4, 0))) {
        throw new EOFException('Unterminated escape sequence at path ' + $this.getPath_18su3p_k$());
      }
      var result = _Char___init__impl__6a9atx(0);
      var i = 0;
      var end = i + 4 | 0;
      while (i < end) {
        var c = $this.buffer_1.get_ec5on4_k$(toLong(i));
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = result;
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        result = numberToChar(tmp$ret$0 << 4);
        var tmp_0 = result;
        var tmp_1;
        var tmp_2;
        var tmp_3 = c;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 48;
        if (tmp_3 >= toByte(tmp$ret$1)) {
          var tmp_4 = c;
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 57;
          tmp_2 = tmp_4 <= toByte(tmp$ret$2);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 48;
          tmp_1 = c - toByte(tmp$ret$3);
        } else {
          var tmp_5;
          var tmp_6 = c;
          var tmp$ret$4;
          // Inline function 'kotlin.code' call
          tmp$ret$4 = 97;
          if (tmp_6 >= toByte(tmp$ret$4)) {
            var tmp_7 = c;
            var tmp$ret$5;
            // Inline function 'kotlin.code' call
            tmp$ret$5 = 102;
            tmp_5 = tmp_7 <= toByte(tmp$ret$5);
          } else {
            tmp_5 = false;
          }
          if (tmp_5) {
            var tmp$ret$6;
            // Inline function 'kotlin.code' call
            tmp$ret$6 = 97;
            tmp_1 = c - toByte(tmp$ret$6) + 10 | 0;
          } else {
            var tmp_8;
            var tmp_9 = c;
            var tmp$ret$7;
            // Inline function 'kotlin.code' call
            tmp$ret$7 = 65;
            if (tmp_9 >= toByte(tmp$ret$7)) {
              var tmp_10 = c;
              var tmp$ret$8;
              // Inline function 'kotlin.code' call
              tmp$ret$8 = 70;
              tmp_8 = tmp_10 <= toByte(tmp$ret$8);
            } else {
              tmp_8 = false;
            }
            if (tmp_8) {
              var tmp$ret$9;
              // Inline function 'kotlin.code' call
              tmp$ret$9 = 65;
              tmp_1 = c - toByte(tmp$ret$9) + 10 | 0;
            } else {
              throw syntaxError($this, '\\u' + $this.buffer_1.readUtf8_y4u7qn_k$(new Long(4, 0)));
            }
          }
        }
        result = Char__plus_impl_qi7pgj(tmp_0, tmp_1);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
      $this.buffer_1.skip_vl0dd4_k$(new Long(4, 0));
      tmp = result;
    } else if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(116)))) {
      tmp = _Char___init__impl__6a9atx(9);
    } else if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(98)))) {
      tmp = _Char___init__impl__6a9atx(8);
    } else if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(110)))) {
      tmp = _Char___init__impl__6a9atx(10);
    } else if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(114)))) {
      tmp = _Char___init__impl__6a9atx(13);
    } else if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(102)))) {
      tmp = _Char___init__impl__6a9atx(12);
    } else if ((((equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(39)))) ? true : equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(34)))) ? true : equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(92)))) ? true : equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(47)))) {
      tmp = escaped;
    } else {
      if (!$this.lenient_1)
        throw syntaxError($this, 'Invalid escape sequence: \\' + new Char(escaped));
      tmp = escaped;
    }
    return tmp;
  }
  function syntaxError($this, message) {
    return new JsonEncodingException(message + ' at path ' + $this.getPath_18su3p_k$());
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.MIN_INCOMPLETE_INTEGER_1 = new Long(858993460, -214748365);
    this.SINGLE_QUOTE_OR_SLASH_1 = Companion_getInstance_0().encodeUtf8_lzqk50_k$("'\\");
    this.DOUBLE_QUOTE_OR_SLASH_1 = Companion_getInstance_0().encodeUtf8_lzqk50_k$('"\\');
    this.UNQUOTED_STRING_TERMINALS_1 = Companion_getInstance_0().encodeUtf8_lzqk50_k$('{}[]:, \n\t\r/\\;#=');
    this.LINEFEED_OR_CARRIAGE_RETURN_1 = Companion_getInstance_0().encodeUtf8_lzqk50_k$('\n\r');
    this.PEEKED_NONE_1 = 0;
    this.PEEKED_BEGIN_OBJECT_1 = 1;
    this.PEEKED_END_OBJECT_1 = 2;
    this.PEEKED_BEGIN_ARRAY_1 = 3;
    this.PEEKED_END_ARRAY_1 = 4;
    this.PEEKED_TRUE_1 = 5;
    this.PEEKED_FALSE_1 = 6;
    this.PEEKED_NULL_1 = 7;
    this.PEEKED_SINGLE_QUOTED_1 = 8;
    this.PEEKED_DOUBLE_QUOTED_1 = 9;
    this.PEEKED_UNQUOTED_1 = 10;
    this.PEEKED_BUFFERED_1 = 11;
    this.PEEKED_SINGLE_QUOTED_NAME_1 = 12;
    this.PEEKED_DOUBLE_QUOTED_NAME_1 = 13;
    this.PEEKED_UNQUOTED_NAME_1 = 14;
    this.PEEKED_LONG_1 = 15;
    this.PEEKED_NUMBER_1 = 16;
    this.PEEKED_EOF_1 = 17;
    this.NUMBER_CHAR_NONE_1 = 0;
    this.NUMBER_CHAR_SIGN_1 = 1;
    this.NUMBER_CHAR_DIGIT_1 = 2;
    this.NUMBER_CHAR_DECIMAL_1 = 3;
    this.NUMBER_CHAR_FRACTION_DIGIT_1 = 4;
    this.NUMBER_CHAR_EXP_E_1 = 5;
    this.NUMBER_CHAR_EXP_SIGN_1 = 6;
    this.NUMBER_CHAR_EXP_DIGIT_1 = 7;
    this.MAX_STACK_SIZE_1 = 256;
  }
  Companion_5.prototype.get_MAX_STACK_SIZE_wipl5o_k$ = function () {
    return this.MAX_STACK_SIZE_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function BufferedSourceJsonReader(source) {
    Companion_getInstance_7();
    this.source_1 = source;
    this.buffer_1 = this.source_1.get_buffer_bmaafd_k$();
    var tmp = this;
    Companion_getInstance_7();
    tmp.peeked_1 = 0;
    this.peekedLong_1 = new Long(0, 0);
    this.peekedNumberLength_1 = 0;
    this.peekedString_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    Companion_getInstance_7();
    var tmp0_apply = new Int32Array(256);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.stack.<anonymous>' call
    tmp0_apply[0] = JsonScope_getInstance().get_EMPTY_DOCUMENT_mrwzre_k$();
    tmp$ret$0 = tmp0_apply;
    tmp_0.stack_1 = tmp$ret$0;
    this.stackSize_1 = 1;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_7();
    var tmp0_arrayOfNulls = 256;
    tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_1.pathNames_1 = tmp$ret$1;
    var tmp_2 = this;
    Companion_getInstance_7();
    tmp_2.pathIndices_1 = new Int32Array(256);
    this.lenient_1 = false;
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    Companion_getInstance_7();
    var tmp0_apply_0 = new Int32Array(256);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.indexStack.<anonymous>' call
    tmp0_apply_0[0] = 0;
    tmp$ret$2 = tmp0_apply_0;
    tmp_3.indexStack_1 = tmp$ret$2;
    this.indexStackSize_1 = 1;
  }
  BufferedSourceJsonReader.prototype.beginArray_hxn19s_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginArray.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginArray.<anonymous>.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 3) {
      push(this, JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$());
      this.pathIndices_1[this.stackSize_1 - 1 | 0] = 0;
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
    } else {
      throw new JsonDataException('Expected BEGIN_ARRAY but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.endArray_s2tmpq_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endArray.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endArray.<anonymous>.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 4) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.stackSize_1;
      tmp1_this.stackSize_1 = tmp2 - 1 | 0;
      var tmp3_array = this.pathIndices_1;
      var tmp4_index0 = this.stackSize_1 - 1 | 0;
      var tmp5 = tmp3_array[tmp4_index0];
      tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
    } else {
      throw new JsonDataException('Expected END_ARRAY but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.beginObject_5wddq0_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginObject.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginObject.<anonymous>.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 1) {
      push(this, JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$());
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
      var tmp1_this = this;
      var tmp2 = tmp1_this.indexStackSize_1;
      tmp1_this.indexStackSize_1 = tmp2 + 1 | 0;
      this.indexStack_1[this.indexStackSize_1 - 1 | 0] = 0;
    } else {
      throw new JsonDataException('Expected BEGIN_OBJECT but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.endObject_ofuv3u_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endObject.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endObject.<anonymous>.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 2) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.stackSize_1;
      tmp1_this.stackSize_1 = tmp2 - 1 | 0;
      this.pathNames_1[this.stackSize_1] = null;
      var tmp3_array = this.pathIndices_1;
      var tmp4_index0 = this.stackSize_1 - 1 | 0;
      var tmp5 = tmp3_array[tmp4_index0];
      tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
      var tmp6_this = this;
      var tmp7 = tmp6_this.indexStackSize_1;
      tmp6_this.indexStackSize_1 = tmp7 - 1 | 0;
    } else {
      throw new JsonDataException('Expected END_OBJECT but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.hasNext_bitz1p_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.hasNext.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (!(p === 2)) {
      Companion_getInstance_7();
      tmp_0 = !(p === 4);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.peek_21nx7_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peek.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (tmp1_subject === 1) {
      tmp_0 = Token_BEGIN_OBJECT_getInstance();
    } else {
      Companion_getInstance_7();
      if (tmp1_subject === 2) {
        tmp_0 = Token_END_OBJECT_getInstance();
      } else {
        Companion_getInstance_7();
        if (tmp1_subject === 3) {
          tmp_0 = Token_BEGIN_ARRAY_getInstance();
        } else {
          Companion_getInstance_7();
          if (tmp1_subject === 4) {
            tmp_0 = Token_END_ARRAY_getInstance();
          } else {
            var tmp_1;
            var tmp_2;
            Companion_getInstance_7();
            if (tmp1_subject === 12) {
              tmp_2 = true;
            } else {
              Companion_getInstance_7();
              tmp_2 = tmp1_subject === 13;
            }
            if (tmp_2) {
              tmp_1 = true;
            } else {
              Companion_getInstance_7();
              tmp_1 = tmp1_subject === 14;
            }
            if (tmp_1) {
              tmp_0 = Token_NAME_getInstance();
            } else {
              var tmp_3;
              Companion_getInstance_7();
              if (tmp1_subject === 5) {
                tmp_3 = true;
              } else {
                Companion_getInstance_7();
                tmp_3 = tmp1_subject === 6;
              }
              if (tmp_3) {
                tmp_0 = Token_BOOLEAN_getInstance();
              } else {
                Companion_getInstance_7();
                if (tmp1_subject === 7) {
                  tmp_0 = Token_NULL_getInstance();
                } else {
                  var tmp_4;
                  var tmp_5;
                  var tmp_6;
                  Companion_getInstance_7();
                  if (tmp1_subject === 8) {
                    tmp_6 = true;
                  } else {
                    Companion_getInstance_7();
                    tmp_6 = tmp1_subject === 9;
                  }
                  if (tmp_6) {
                    tmp_5 = true;
                  } else {
                    Companion_getInstance_7();
                    tmp_5 = tmp1_subject === 10;
                  }
                  if (tmp_5) {
                    tmp_4 = true;
                  } else {
                    Companion_getInstance_7();
                    tmp_4 = tmp1_subject === 11;
                  }
                  if (tmp_4) {
                    tmp_0 = Token_STRING_getInstance();
                  } else {
                    Companion_getInstance_7();
                    if (tmp1_subject === 15) {
                      tmp_0 = Token_LONG_getInstance();
                    } else {
                      Companion_getInstance_7();
                      if (tmp1_subject === 16) {
                        tmp_0 = Token_NUMBER_getInstance();
                      } else {
                        Companion_getInstance_7();
                        if (tmp1_subject === 17) {
                          tmp_0 = Token_END_DOCUMENT_getInstance();
                        } else {
                          throw AssertionError_init_$Create$();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.nextName_njxula_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextName.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (tmp1_subject === 14) {
      tmp_0 = nextUnquotedValue(this);
    } else {
      Companion_getInstance_7();
      if (tmp1_subject === 13) {
        tmp_0 = nextQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
      } else {
        Companion_getInstance_7();
        if (tmp1_subject === 12) {
          tmp_0 = nextQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
        } else {
          throw new JsonDataException('Expected a name but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
        }
      }
    }
    var result = tmp_0;
    var tmp_1 = this;
    Companion_getInstance_7();
    tmp_1.peeked_1 = 0;
    this.pathNames_1[this.stackSize_1 - 1 | 0] = result;
    return result;
  };
  BufferedSourceJsonReader.prototype.nextString_kwkc9o_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextString.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (tmp1_subject === 10) {
      tmp_0 = nextUnquotedValue(this);
    } else {
      Companion_getInstance_7();
      if (tmp1_subject === 9) {
        tmp_0 = nextQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
      } else {
        Companion_getInstance_7();
        if (tmp1_subject === 8) {
          tmp_0 = nextQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
        } else {
          Companion_getInstance_7();
          if (tmp1_subject === 11) {
            var tmp2_safe_receiver = this.peekedString_1;
            var tmp_1;
            if (tmp2_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp$ret$2;
              // Inline function 'kotlin.also' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextString.<anonymous>' call
              this.peekedString_1 = null;
              tmp$ret$2 = tmp2_safe_receiver;
              tmp_1 = tmp$ret$2;
            }
            tmp_0 = tmp_1;
          } else {
            Companion_getInstance_7();
            if (tmp1_subject === 15) {
              tmp_0 = this.peekedLong_1.toString();
            } else {
              Companion_getInstance_7();
              if (tmp1_subject === 16) {
                tmp_0 = this.buffer_1.readUtf8_y4u7qn_k$(toLong(this.peekedNumberLength_1));
              } else {
                throw new JsonDataException('Expected a string but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
              }
            }
          }
        }
      }
    }
    var result = tmp_0;
    var tmp_2 = this;
    Companion_getInstance_7();
    tmp_2.peeked_1 = 0;
    var tmp3_array = this.pathIndices_1;
    var tmp4_index0 = this.stackSize_1 - 1 | 0;
    var tmp5 = tmp3_array[tmp4_index0];
    tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
    return result;
  };
  BufferedSourceJsonReader.prototype.nextBoolean_nfdk1h_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextBoolean.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (tmp1_subject === 5) {
      var tmp_1 = this;
      Companion_getInstance_7();
      tmp_1.peeked_1 = 0;
      var tmp2_array = this.pathIndices_1;
      var tmp3_index0 = this.stackSize_1 - 1 | 0;
      var tmp4 = tmp2_array[tmp3_index0];
      tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
      tmp_0 = true;
    } else {
      Companion_getInstance_7();
      if (tmp1_subject === 6) {
        var tmp_2 = this;
        Companion_getInstance_7();
        tmp_2.peeked_1 = 0;
        var tmp5_array = this.pathIndices_1;
        var tmp6_index0 = this.stackSize_1 - 1 | 0;
        var tmp7 = tmp5_array[tmp6_index0];
        tmp5_array[tmp6_index0] = tmp7 + 1 | 0;
        tmp_0 = false;
      } else {
        throw new JsonDataException('Expected a boolean but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
      }
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.nextNull_njy9ei_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextNull.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    var tmp_0;
    Companion_getInstance_7();
    if (tmp1_subject === 7) {
      var tmp_1 = this;
      Companion_getInstance_7();
      tmp_1.peeked_1 = 0;
      var tmp2_array = this.pathIndices_1;
      var tmp3_index0 = this.stackSize_1 - 1 | 0;
      var tmp4 = tmp2_array[tmp3_index0];
      tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
      tmp_0 = null;
    } else {
      throw new JsonDataException('Expected null but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.nextDouble_s2xvfg_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextDouble.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 15) {
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
      var tmp1_array = this.pathIndices_1;
      var tmp2_index0 = this.stackSize_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return this.peekedLong_1.toDouble_ygsx0s_k$();
    } else {
      Companion_getInstance_7();
      if (p === 16) {
        this.peekedString_1 = this.buffer_1.readUtf8_y4u7qn_k$(toLong(this.peekedNumberLength_1));
      } else {
        Companion_getInstance_7();
        if (p === 9) {
          this.peekedString_1 = nextQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
        } else {
          Companion_getInstance_7();
          if (p === 8) {
            this.peekedString_1 = nextQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
          } else {
            Companion_getInstance_7();
            if (p === 10) {
              this.peekedString_1 = nextUnquotedValue(this);
            } else {
              Companion_getInstance_7();
              if (!(p === 11))
                throw new JsonDataException('Expected a double but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
            }
          }
        }
      }
    }
    var tmp_1 = this;
    Companion_getInstance_7();
    tmp_1.peeked_1 = 11;
    var tmp_2;
    try {
      tmp_2 = toDouble(ensureNotNull(this.peekedString_1));
    } catch ($p) {
      var tmp_3;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected a double but was ' + this.peekedString_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var result = tmp_2;
    if (!this.lenient_1 ? isNaN_0(result) ? true : isInfinite(result) : false) {
      throw new JsonEncodingException('JSON forbids NaN and infinities: ' + result + ' at path ' + getPathAsString(this));
    }
    this.peekedString_1 = null;
    var tmp_4 = this;
    Companion_getInstance_7();
    tmp_4.peeked_1 = 0;
    var tmp4_array = this.pathIndices_1;
    var tmp5_index0 = this.stackSize_1 - 1 | 0;
    var tmp6 = tmp4_array[tmp5_index0];
    tmp4_array[tmp5_index0] = tmp6 + 1 | 0;
    return result;
  };
  BufferedSourceJsonReader.prototype.nextLong_njwv0v_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextLong.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 15) {
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
      var tmp1_array = this.pathIndices_1;
      var tmp2_index0 = this.stackSize_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return this.peekedLong_1;
    } else {
      Companion_getInstance_7();
      if (p === 16) {
        this.peekedString_1 = this.buffer_1.readUtf8_y4u7qn_k$(toLong(this.peekedNumberLength_1));
      } else {
        var tmp_1;
        Companion_getInstance_7();
        if (p === 9) {
          tmp_1 = true;
        } else {
          Companion_getInstance_7();
          tmp_1 = p === 8;
        }
        if (tmp_1) {
          var tmp_2 = this;
          var tmp_3;
          Companion_getInstance_7();
          if (p === 9) {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
          } else {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
          }
          tmp_2.peekedString_1 = tmp_3;
          try {
            var result = toLong_0(ensureNotNull(this.peekedString_1));
            var tmp_4 = this;
            Companion_getInstance_7();
            tmp_4.peeked_1 = 0;
            var tmp4_array = this.pathIndices_1;
            var tmp5_index0 = this.stackSize_1 - 1 | 0;
            var tmp6 = tmp4_array[tmp5_index0];
            tmp4_array[tmp5_index0] = tmp6 + 1 | 0;
            return result;
          } catch ($p) {
            if ($p instanceof NumberFormatException) {
            } else {
              throw $p;
            }
          }
        } else {
          Companion_getInstance_7();
          if (!(p === 11))
            throw new JsonDataException('Expected a long but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
        }
      }
    }
    var tmp_5 = this;
    Companion_getInstance_7();
    tmp_5.peeked_1 = 11;
    var tmp_6;
    try {
      tmp_6 = toDouble(ensureNotNull(this.peekedString_1));
    } catch ($p) {
      var tmp_7;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected a long but was ' + this.peekedString_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_6 = tmp_7;
    }
    var asDouble = tmp_6;
    var result_0 = numberToLong(asDouble);
    if (!(result_0.toDouble_ygsx0s_k$() === asDouble)) {
      throw new JsonDataException('Expected a long but was ' + this.peekedString_1 + ' at path ' + getPathAsString(this));
    }
    this.peekedString_1 = null;
    var tmp_8 = this;
    Companion_getInstance_7();
    tmp_8.peeked_1 = 0;
    var tmp7_array = this.pathIndices_1;
    var tmp8_index0 = this.stackSize_1 - 1 | 0;
    var tmp9 = tmp7_array[tmp8_index0];
    tmp7_array[tmp8_index0] = tmp9 + 1 | 0;
    return result_0;
  };
  BufferedSourceJsonReader.prototype.nextNumber_n9bzz8_k$ = function () {
    return new JsonNumber(ensureNotNull(this.nextString_kwkc9o_k$()));
  };
  BufferedSourceJsonReader.prototype.nextInt_ujorgc_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.peeked_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextInt.<anonymous>' call
    Companion_getInstance_7();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_7();
    if (p === 15) {
      var result = this.peekedLong_1.toInt_1tsl84_k$();
      if (!this.peekedLong_1.equals(toLong(result))) {
        throw new JsonDataException('Expected an int but was ' + toString(this.peekedLong_1) + ' at path ' + this.getPath_18su3p_k$());
      }
      var tmp_0 = this;
      Companion_getInstance_7();
      tmp_0.peeked_1 = 0;
      var tmp1_array = this.pathIndices_1;
      var tmp2_index0 = this.stackSize_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return result;
    } else {
      Companion_getInstance_7();
      if (p === 16) {
        this.peekedString_1 = this.buffer_1.readUtf8_y4u7qn_k$(toLong(this.peekedNumberLength_1));
      } else {
        var tmp_1;
        Companion_getInstance_7();
        if (p === 9) {
          tmp_1 = true;
        } else {
          Companion_getInstance_7();
          tmp_1 = p === 8;
        }
        if (tmp_1) {
          var tmp_2 = this;
          var tmp_3;
          Companion_getInstance_7();
          if (p === 9) {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
          } else {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
          }
          tmp_2.peekedString_1 = tmp_3;
          try {
            var result_0 = toInt(ensureNotNull(this.peekedString_1));
            var tmp_4 = this;
            Companion_getInstance_7();
            tmp_4.peeked_1 = 0;
            var tmp4_array = this.pathIndices_1;
            var tmp5_index0 = this.stackSize_1 - 1 | 0;
            var tmp6 = tmp4_array[tmp5_index0];
            tmp4_array[tmp5_index0] = tmp6 + 1 | 0;
            return result_0;
          } catch ($p) {
            if ($p instanceof NumberFormatException) {
            } else {
              throw $p;
            }
          }
        } else {
          Companion_getInstance_7();
          if (!(p === 11)) {
            throw new JsonDataException('Expected an int but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString(this));
          }
        }
      }
    }
    var tmp_5 = this;
    Companion_getInstance_7();
    tmp_5.peeked_1 = 11;
    var tmp_6;
    try {
      tmp_6 = toDouble(ensureNotNull(this.peekedString_1));
    } catch ($p) {
      var tmp_7;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected an int but was ' + this.peekedString_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_6 = tmp_7;
    }
    var asDouble = tmp_6;
    var result_1 = numberToInt(asDouble);
    if (!(result_1 === asDouble)) {
      throw new JsonDataException('Expected an int but was ' + this.peekedString_1 + ' at path ' + getPathAsString(this));
    }
    this.peekedString_1 = null;
    var tmp_8 = this;
    Companion_getInstance_7();
    tmp_8.peeked_1 = 0;
    var tmp7_array = this.pathIndices_1;
    var tmp8_index0 = this.stackSize_1 - 1 | 0;
    var tmp9 = tmp7_array[tmp8_index0];
    tmp7_array[tmp8_index0] = tmp9 + 1 | 0;
    return result_1;
  };
  BufferedSourceJsonReader.prototype.close_ymq55z_k$ = function () {
    var tmp = this;
    Companion_getInstance_7();
    tmp.peeked_1 = 0;
    this.stack_1[0] = JsonScope_getInstance().get_CLOSED_3p2npn_k$();
    this.stackSize_1 = 1;
    this.buffer_1.clear_j9y8zo_k$();
    this.source_1.close_ymq55z_k$();
  };
  BufferedSourceJsonReader.prototype.skipValue_18a9r5_k$ = function () {
    var count = 0;
    do {
      var tmp$ret$1;
      // Inline function 'kotlin.takeUnless' call
      var tmp0_takeUnless = this.peeked_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.skipValue.<anonymous>' call
      Companion_getInstance_7();
      tmp$ret$0 = tmp0_takeUnless === 0;
      if (!tmp$ret$0) {
        tmp = tmp0_takeUnless;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
      var tmp0_elvis_lhs = tmp$ret$1;
      var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
      Companion_getInstance_7();
      if (tmp1_subject === 3) {
        push(this, JsonScope_getInstance().get_EMPTY_ARRAY_ikubem_k$());
        var tmp2 = count;
        count = tmp2 + 1 | 0;
      } else {
        Companion_getInstance_7();
        if (tmp1_subject === 1) {
          push(this, JsonScope_getInstance().get_EMPTY_OBJECT_e2wcey_k$());
          var tmp3 = count;
          count = tmp3 + 1 | 0;
        } else {
          Companion_getInstance_7();
          if (tmp1_subject === 4) {
            var tmp4_this = this;
            var tmp5 = tmp4_this.stackSize_1;
            tmp4_this.stackSize_1 = tmp5 - 1 | 0;
            var tmp6 = count;
            count = tmp6 - 1 | 0;
          } else {
            Companion_getInstance_7();
            if (tmp1_subject === 2) {
              var tmp7_this = this;
              var tmp8 = tmp7_this.stackSize_1;
              tmp7_this.stackSize_1 = tmp8 - 1 | 0;
              var tmp9 = count;
              count = tmp9 - 1 | 0;
            } else {
              var tmp_0;
              Companion_getInstance_7();
              if (tmp1_subject === 14) {
                tmp_0 = true;
              } else {
                Companion_getInstance_7();
                tmp_0 = tmp1_subject === 10;
              }
              if (tmp_0) {
                skipUnquotedValue(this);
              } else {
                var tmp_1;
                Companion_getInstance_7();
                if (tmp1_subject === 9) {
                  tmp_1 = true;
                } else {
                  Companion_getInstance_7();
                  tmp_1 = tmp1_subject === 13;
                }
                if (tmp_1) {
                  skipQuotedValue(this, Companion_getInstance_7().DOUBLE_QUOTE_OR_SLASH_1);
                } else {
                  var tmp_2;
                  Companion_getInstance_7();
                  if (tmp1_subject === 8) {
                    tmp_2 = true;
                  } else {
                    Companion_getInstance_7();
                    tmp_2 = tmp1_subject === 12;
                  }
                  if (tmp_2) {
                    skipQuotedValue(this, Companion_getInstance_7().SINGLE_QUOTE_OR_SLASH_1);
                  } else {
                    Companion_getInstance_7();
                    if (tmp1_subject === 16) {
                      this.buffer_1.skip_vl0dd4_k$(toLong(this.peekedNumberLength_1));
                    }
                  }
                }
              }
            }
          }
        }
      }
      var tmp_3 = this;
      Companion_getInstance_7();
      tmp_3.peeked_1 = 0;
    }
     while (!(count === 0));
    var tmp10_array = this.pathIndices_1;
    var tmp11_index0 = this.stackSize_1 - 1 | 0;
    var tmp12 = tmp10_array[tmp11_index0];
    tmp10_array[tmp11_index0] = tmp12 + 1 | 0;
    this.pathNames_1[this.stackSize_1 - 1 | 0] = 'null';
  };
  BufferedSourceJsonReader.prototype.selectName_7r3epc_k$ = function (names) {
    if (names.isEmpty_y1axqb_k$()) {
      return -1;
    }
    while (this.hasNext_bitz1p_k$()) {
      var name = this.nextName_njxula_k$();
      var expectedIndex = this.indexStack_1[this.indexStackSize_1 - 1 | 0];
      if (names.get_fkrdnv_k$(expectedIndex) === name) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.selectName.<anonymous>' call
        this.indexStack_1[this.indexStackSize_1 - 1 | 0] = expectedIndex + 1 | 0;
        if (this.indexStack_1[this.indexStackSize_1 - 1 | 0] === names.get_size_woubt6_k$()) {
          this.indexStack_1[this.indexStackSize_1 - 1 | 0] = 0;
        }
        tmp$ret$0 = expectedIndex;
        return tmp$ret$0;
      } else {
        var index = expectedIndex;
        $l$loop: while (true) {
          var tmp0 = index;
          index = tmp0 + 1 | 0;
          if (index === names.get_size_woubt6_k$()) {
            index = 0;
          }
          if (index === expectedIndex) {
            break $l$loop;
          }
          if (names.get_fkrdnv_k$(index) === name) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp0_also = index;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.selectName.<anonymous>' call
            this.indexStack_1[this.indexStackSize_1 - 1 | 0] = index + 1 | 0;
            if (this.indexStack_1[this.indexStackSize_1 - 1 | 0] === names.get_size_woubt6_k$()) {
              this.indexStack_1[this.indexStackSize_1 - 1 | 0] = 0;
            }
            tmp$ret$1 = tmp0_also;
            return tmp$ret$1;
          }
        }
        this.skipValue_18a9r5_k$();
      }
    }
    return -1;
  };
  BufferedSourceJsonReader.prototype.getPath_18su3p_k$ = function () {
    return JsonScope_getInstance().getPath_lqzwqu_k$(this.stackSize_1, this.stack_1, this.pathNames_1, this.pathIndices_1);
  };
  BufferedSourceJsonReader.prototype.rewind_xapxey_k$ = function () {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('BufferedSourceJsonReader cannot rewind.');
  };
  function JsonNumber(value) {
    this.value_1 = value;
  }
  JsonNumber.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  var Token_BEGIN_ARRAY_instance;
  var Token_END_ARRAY_instance;
  var Token_BEGIN_OBJECT_instance;
  var Token_END_OBJECT_instance;
  var Token_NAME_instance;
  var Token_STRING_instance;
  var Token_NUMBER_instance;
  var Token_LONG_instance;
  var Token_BOOLEAN_instance;
  var Token_NULL_instance;
  var Token_END_DOCUMENT_instance;
  var Token_ANY_instance;
  function values_0() {
    return [Token_BEGIN_ARRAY_getInstance(), Token_END_ARRAY_getInstance(), Token_BEGIN_OBJECT_getInstance(), Token_END_OBJECT_getInstance(), Token_NAME_getInstance(), Token_STRING_getInstance(), Token_NUMBER_getInstance(), Token_LONG_getInstance(), Token_BOOLEAN_getInstance(), Token_NULL_getInstance(), Token_END_DOCUMENT_getInstance(), Token_ANY_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'BEGIN_ARRAY':
        return Token_BEGIN_ARRAY_getInstance();
      case 'END_ARRAY':
        return Token_END_ARRAY_getInstance();
      case 'BEGIN_OBJECT':
        return Token_BEGIN_OBJECT_getInstance();
      case 'END_OBJECT':
        return Token_END_OBJECT_getInstance();
      case 'NAME':
        return Token_NAME_getInstance();
      case 'STRING':
        return Token_STRING_getInstance();
      case 'NUMBER':
        return Token_NUMBER_getInstance();
      case 'LONG':
        return Token_LONG_getInstance();
      case 'BOOLEAN':
        return Token_BOOLEAN_getInstance();
      case 'NULL':
        return Token_NULL_getInstance();
      case 'END_DOCUMENT':
        return Token_END_DOCUMENT_getInstance();
      case 'ANY':
        return Token_ANY_getInstance();
      default:
        Token_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Token_entriesInitialized;
  function Token_initEntries() {
    if (Token_entriesInitialized)
      return Unit_getInstance();
    Token_entriesInitialized = true;
    Token_BEGIN_ARRAY_instance = new Token('BEGIN_ARRAY', 0);
    Token_END_ARRAY_instance = new Token('END_ARRAY', 1);
    Token_BEGIN_OBJECT_instance = new Token('BEGIN_OBJECT', 2);
    Token_END_OBJECT_instance = new Token('END_OBJECT', 3);
    Token_NAME_instance = new Token('NAME', 4);
    Token_STRING_instance = new Token('STRING', 5);
    Token_NUMBER_instance = new Token('NUMBER', 6);
    Token_LONG_instance = new Token('LONG', 7);
    Token_BOOLEAN_instance = new Token('BOOLEAN', 8);
    Token_NULL_instance = new Token('NULL', 9);
    Token_END_DOCUMENT_instance = new Token('END_DOCUMENT', 10);
    Token_ANY_instance = new Token('ANY', 11);
  }
  function Token(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Token_BEGIN_ARRAY_getInstance() {
    Token_initEntries();
    return Token_BEGIN_ARRAY_instance;
  }
  function Token_END_ARRAY_getInstance() {
    Token_initEntries();
    return Token_END_ARRAY_instance;
  }
  function Token_BEGIN_OBJECT_getInstance() {
    Token_initEntries();
    return Token_BEGIN_OBJECT_instance;
  }
  function Token_END_OBJECT_getInstance() {
    Token_initEntries();
    return Token_END_OBJECT_instance;
  }
  function Token_NAME_getInstance() {
    Token_initEntries();
    return Token_NAME_instance;
  }
  function Token_STRING_getInstance() {
    Token_initEntries();
    return Token_STRING_instance;
  }
  function Token_NUMBER_getInstance() {
    Token_initEntries();
    return Token_NUMBER_instance;
  }
  function Token_LONG_getInstance() {
    Token_initEntries();
    return Token_LONG_instance;
  }
  function Token_BOOLEAN_getInstance() {
    Token_initEntries();
    return Token_BOOLEAN_instance;
  }
  function Token_NULL_getInstance() {
    Token_initEntries();
    return Token_NULL_instance;
  }
  function Token_END_DOCUMENT_getInstance() {
    Token_initEntries();
    return Token_END_DOCUMENT_instance;
  }
  function Token_ANY_getInstance() {
    Token_initEntries();
    return Token_ANY_instance;
  }
  function JsonReader() {
  }
  function readAny(_this__u8e3s4) {
    var token = _this__u8e3s4.peek_21nx7_k$();
    var tmp0 = token.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 9:
        tmp = _this__u8e3s4.nextNull_njy9ei_k$();
        break;
      case 8:
        tmp = _this__u8e3s4.nextBoolean_nfdk1h_k$();
        break;
      case 7:
      case 6:
        tmp = guessNumber(_this__u8e3s4);
        break;
      case 5:
        tmp = _this__u8e3s4.nextString_kwkc9o_k$();
        break;
      case 2:
        _this__u8e3s4.beginObject_5wddq0_k$();
        ;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp$ret$0 = LinkedHashMap_init_$Create$();

        var result = tmp$ret$0;
        while (_this__u8e3s4.hasNext_bitz1p_k$()) {
          result.put_3mhbri_k$(_this__u8e3s4.nextName_njxula_k$(), readAny(_this__u8e3s4));
        }

        _this__u8e3s4.endObject_ofuv3u_k$();
        ;
        tmp = result;
        break;
      case 0:
        _this__u8e3s4.beginArray_hxn19s_k$();
        ;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$1 = ArrayList_init_$Create$();

        var result_0 = tmp$ret$1;
        while (_this__u8e3s4.hasNext_bitz1p_k$()) {
          result_0.add_1j60pz_k$(readAny(_this__u8e3s4));
        }

        _this__u8e3s4.endArray_s2tmpq_k$();
        ;
        tmp = result_0;
        break;
      default:
        var tmp0_error = 'unknown token ' + token;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function guessNumber(_this__u8e3s4) {
    try {
      return _this__u8e3s4.nextInt_ujorgc_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    try {
      return _this__u8e3s4.nextLong_njwv0v_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    try {
      return _this__u8e3s4.nextDouble_s2xvfg_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    return _this__u8e3s4.nextNumber_n9bzz8_k$();
  }
  function jsonReader(_this__u8e3s4) {
    return new BufferedSourceJsonReader(_this__u8e3s4);
  }
  function jsonReader_0(_this__u8e3s4) {
    return MapJsonReader_init_$Create$(_this__u8e3s4, null, 2, null);
  }
  function JsonWriter() {
  }
  function writeAny(_this__u8e3s4, value) {
    var tmp0_subject = value;
    if (tmp0_subject == null) {
      _this__u8e3s4.nullValue_h3u4a2_k$();
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
        // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.beginObject_5wddq0_k$();
        // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = value;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.iterator' call
        tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        var tmp0_iterator = tmp$ret$0;
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>.<anonymous>' call
          var tmp$ret$1;
          // Inline function 'kotlin.collections.component1' call
          tmp$ret$1 = element.get_key_18j28a_k$();
          var key = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.collections.component2' call
          tmp$ret$2 = element.get_value_j01efc_k$();
          var value_0 = tmp$ret$2;
          _this__u8e3s4.name_u79i4q_k$(toString_1(key));
          writeAny(_this__u8e3s4, value_0);
        }
        _this__u8e3s4.endObject_ofuv3u_k$();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
          // Inline function 'com.apollographql.apollo3.api.json.writeArray' call
          // Inline function 'kotlin.contracts.contract' call
          _this__u8e3s4.beginArray_hxn19s_k$();
          // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_forEach_0 = value;
          var tmp0_iterator_0 = tmp0_forEach_0.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>.<anonymous>' call
            writeAny(_this__u8e3s4, element_0);
          }
          _this__u8e3s4.endArray_s2tmpq_k$();
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
            _this__u8e3s4.value_5b51sn_k$(value);
          } else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
              _this__u8e3s4.value_7nxl9s_k$(value);
            } else {
              if (tmp0_subject instanceof Long) {
                _this__u8e3s4.value_oin34r_k$(value);
              } else {
                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                  _this__u8e3s4.value_ofc5ao_k$(value);
                } else {
                  if (tmp0_subject instanceof JsonNumber) {
                    _this__u8e3s4.value_b3fnuy_k$(value);
                  } else {
                    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                      _this__u8e3s4.value_h8ym4w_k$(value);
                    } else {
                      var tmp0_error = 'Cannot write ' + toString_1(value) + ' to Json';
                      throw IllegalStateException_init_$Create$(toString(tmp0_error));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function writeObject(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.beginObject_5wddq0_k$();
    block(_this__u8e3s4);
    _this__u8e3s4.endObject_ofuv3u_k$();
  }
  function writeArray(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.beginArray_hxn19s_k$();
    block(_this__u8e3s4);
    _this__u8e3s4.endArray_s2tmpq_k$();
  }
  function buildJsonByteString(indent, block) {
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    block(new BufferedSinkJsonWriter(buffer, indent));
    return buffer.readByteString_nzt46n_k$();
  }
  function buildJsonString(indent, block) {
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    block(new BufferedSinkJsonWriter(buffer, indent));
    return buffer.readUtf8_echivt_k$();
  }
  function buildJsonMap(block) {
    // Inline function 'kotlin.contracts.contract' call
    var writer = new MapJsonWriter();
    block(writer);
    return writer.root_235k2_k$();
  }
  function MapJsonReader_init_$Init$(root, pathRoot, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      pathRoot = emptyList();
    MapJsonReader.call($this, root, pathRoot);
    return $this;
  }
  function MapJsonReader_init_$Create$(root, pathRoot, $mask0, $marker) {
    return MapJsonReader_init_$Init$(root, pathRoot, $mask0, $marker, Object.create(MapJsonReader.prototype));
  }
  function _get_pathRoot__i27fus($this) {
    return $this.pathRoot_1;
  }
  function _set_peekedToken__ov6rcq($this, _set____db54di) {
    $this.peekedToken_1 = _set____db54di;
  }
  function _get_peekedToken__5f7ez6($this) {
    return $this.peekedToken_1;
  }
  function _set_peekedData__h3bw19($this, _set____db54di) {
    $this.peekedData_1 = _set____db54di;
  }
  function _get_peekedData__w5kh6h($this) {
    return $this.peekedData_1;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_containerStack__xip768($this, _set____db54di) {
    $this.containerStack_1 = _set____db54di;
  }
  function _get_containerStack__7zlr4s($this) {
    return $this.containerStack_1;
  }
  function _get_iteratorStack__75fhw7($this) {
    return $this.iteratorStack_1;
  }
  function _get_nameIndexStack__ji87ze($this) {
    return $this.nameIndexStack_1;
  }
  function _set_stackSize__hfrf0k_1($this, _set____db54di) {
    $this.stackSize_1 = _set____db54di;
  }
  function _get_stackSize__bv31e0_1($this) {
    return $this.stackSize_1;
  }
  function anyToToken($this, any) {
    var tmp0_subject = any;
    var tmp;
    if (tmp0_subject == null) {
      tmp = Token_NULL_getInstance();
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = Token_BEGIN_ARRAY_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
          tmp = Token_BEGIN_OBJECT_getInstance();
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
            tmp = Token_NUMBER_getInstance();
          } else {
            if (tmp0_subject instanceof Long) {
              tmp = Token_LONG_getInstance();
            } else {
              if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                tmp = Token_NUMBER_getInstance();
              } else {
                if (tmp0_subject instanceof JsonNumber) {
                  tmp = Token_NUMBER_getInstance();
                } else {
                  if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                    tmp = Token_STRING_getInstance();
                  } else {
                    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
                      tmp = Token_BOOLEAN_getInstance();
                    } else {
                      tmp = Token_ANY_getInstance();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function advanceIterator($this) {
    if ($this.stackSize_1 === 0) {
      $this.peekedToken_1 = Token_END_DOCUMENT_getInstance();
      return Unit_getInstance();
    }
    var currentIterator = ensureNotNull($this.iteratorStack_1[$this.stackSize_1 - 1 | 0]);
    var tmp = $this.path_1[$this.stackSize_1 - 1 | 0];
    if (!(tmp == null) ? typeof tmp === 'number' : false) {
      var tmp_0 = $this.stackSize_1 - 1 | 0;
      var tmp_1 = $this.path_1[$this.stackSize_1 - 1 | 0];
      $this.path_1[tmp_0] = ((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()) + 1 | 0;
    }
    if (currentIterator.hasNext_bitz1p_k$()) {
      var next = currentIterator.next_20eer_k$();
      $this.peekedData_1 = next;
      var tmp_2 = $this;
      var tmp0_subject = next;
      var tmp_3;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Entry) : false) {
        tmp_3 = Token_NAME_getInstance();
      } else {
        tmp_3 = anyToToken($this, next);
      }
      tmp_2.peekedToken_1 = tmp_3;
    } else {
      var tmp_4 = $this;
      var tmp_5;
      var tmp_6 = $this.path_1[$this.stackSize_1 - 1 | 0];
      if (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) {
        tmp_5 = Token_END_ARRAY_getInstance();
      } else {
        tmp_5 = Token_END_OBJECT_getInstance();
      }
      tmp_4.peekedToken_1 = tmp_5;
    }
  }
  function findName($this, needle, haystack) {
    var expectedIndex = $this.nameIndexStack_1[$this.stackSize_1 - 1 | 0];
    if (expectedIndex < haystack.get_size_woubt6_k$() ? haystack.get_fkrdnv_k$(expectedIndex) === needle : false) {
      $this.nameIndexStack_1[$this.stackSize_1 - 1 | 0] = $this.nameIndexStack_1[$this.stackSize_1 - 1 | 0] + 1 | 0;
      return expectedIndex;
    } else {
      var index = haystack.indexOf_dcv8dt_k$(needle);
      if (!(index === -1)) {
        $this.nameIndexStack_1[$this.stackSize_1 - 1 | 0] = index + 1 | 0;
      }
      return index;
    }
  }
  function getPathAsString_0($this) {
    var tmp = $this.getPath_18su3p_k$();
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.buffer_f9k3tr_k$ = function (_this__u8e3s4) {
    if (_this__u8e3s4 instanceof MapJsonReader)
      return _this__u8e3s4;
    var token = _this__u8e3s4.peek_21nx7_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = token.equals(Token_BEGIN_OBJECT_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.Companion.buffer.<anonymous>' call
      tmp$ret$0 = 'Failed to buffer json reader, expected `BEGIN_OBJECT` but found `' + token + '` json token';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var pathRoot = _this__u8e3s4.getPath_18su3p_k$();
    var tmp = readAny(_this__u8e3s4);
    var data = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    return new MapJsonReader(data, pathRoot);
  };
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function MapJsonReader(root, pathRoot) {
    Companion_getInstance_8();
    this.root_1 = root;
    this.pathRoot_1 = pathRoot;
    this.peekedData_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.path_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls_0 = Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    tmp_0.containerStack_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls_1 = Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls_1), null);
    tmp_1.iteratorStack_1 = tmp$ret$2;
    this.nameIndexStack_1 = new Int32Array(Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$());
    this.stackSize_1 = 0;
    this.peekedToken_1 = Token_BEGIN_OBJECT_getInstance();
    this.peekedData_1 = this.root_1;
  }
  MapJsonReader.prototype.get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  MapJsonReader.prototype.beginArray_hxn19s_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginArray.<anonymous>' call
    if (!this.peek_21nx7_k$().equals(Token_BEGIN_ARRAY_getInstance())) {
      throw new JsonDataException('Expected BEGIN_ARRAY but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp = this.peekedData_1;
    var currentValue = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.check' call
    var tmp0_check = this.stackSize_1 < Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginArray.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Nesting too deep';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 + 1 | 0;
    this.path_1[this.stackSize_1 - 1 | 0] = -1;
    this.iteratorStack_1[this.stackSize_1 - 1 | 0] = currentValue.iterator_jk1svi_k$();
    advanceIterator(this);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonReader.prototype.endArray_s2tmpq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.endArray.<anonymous>' call
    if (!this.peek_21nx7_k$().equals(Token_END_ARRAY_getInstance())) {
      throw new JsonDataException('Expected END_ARRAY but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 - 1 | 0;
    this.iteratorStack_1[this.stackSize_1] = null;
    this.path_1[this.stackSize_1] = null;
    advanceIterator(this);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.beginObject_5wddq0_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginObject.<anonymous>' call
    if (!this.peek_21nx7_k$().equals(Token_BEGIN_OBJECT_getInstance())) {
      throw new JsonDataException('Expected BEGIN_OBJECT but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    // Inline function 'kotlin.check' call
    var tmp0_check = this.stackSize_1 < Companion_getInstance_7().get_MAX_STACK_SIZE_wipl5o_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginObject.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Nesting too deep';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 + 1 | 0;
    var tmp = this.containerStack_1;
    var tmp_0 = this.stackSize_1 - 1 | 0;
    var tmp_1 = this.peekedData_1;
    tmp[tmp_0] = (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : THROW_CCE();
    this.rewind_xapxey_k$();
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonReader.prototype.endObject_ofuv3u_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.endObject.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.stackSize_1;
    tmp0_this.stackSize_1 = tmp1 - 1 | 0;
    this.iteratorStack_1[this.stackSize_1] = null;
    this.path_1[this.stackSize_1] = null;
    this.containerStack_1[this.stackSize_1] = null;
    advanceIterator(this);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.hasNext_bitz1p_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 3:
        return false;
      case 1:
        return false;
      default:
        return true;
    }
  };
  MapJsonReader.prototype.peek_21nx7_k$ = function () {
    return this.peekedToken_1;
  };
  MapJsonReader.prototype.nextName_njxula_k$ = function () {
    if (!this.peek_21nx7_k$().equals(Token_NAME_getInstance())) {
      throw new JsonDataException('Expected NAME but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp = this.peekedData_1;
    var data = (!(tmp == null) ? isInterface(tmp, Entry) : false) ? tmp : THROW_CCE();
    this.path_1[this.stackSize_1 - 1 | 0] = data.get_key_18j28a_k$();
    this.peekedData_1 = data.get_value_j01efc_k$();
    this.peekedToken_1 = anyToToken(this, data.get_value_j01efc_k$());
    return data.get_key_18j28a_k$();
  };
  MapJsonReader.prototype.nextString_kwkc9o_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a String but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = toString(ensureNotNull(this.peekedData_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextString.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextBoolean_nfdk1h_k$ = function () {
    if (!this.peek_21nx7_k$().equals(Token_BOOLEAN_getInstance())) {
      throw new JsonDataException('Expected BOOLEAN but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.peekedData_1;
    var tmp0_also = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextBoolean.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextNull_njy9ei_k$ = function () {
    if (!this.peek_21nx7_k$().equals(Token_NULL_getInstance())) {
      throw new JsonDataException('Expected NULL but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    advanceIterator(this);
    return null;
  };
  MapJsonReader.prototype.nextDouble_s2xvfg_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Double but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.peekedData_1;
    var tmp;
    if (!(value == null) ? typeof value === 'number' : false) {
      tmp = value;
    } else {
      if (value instanceof Long) {
        tmp = toDoubleExact(value);
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          tmp = value;
        } else {
          if (!(value == null) ? typeof value === 'string' : false) {
            tmp = toDouble(value);
          } else {
            if (value instanceof JsonNumber) {
              tmp = toDouble(value.get_value_j01efc_k$());
            } else {
              var tmp0_error = 'Expected a Double but got ' + toString_1(value) + ' instead';
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextDouble.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp1_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextInt_ujorgc_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected an Int but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.peekedData_1;
    var tmp;
    if (!(value == null) ? typeof value === 'number' : false) {
      tmp = value;
    } else {
      if (value instanceof Long) {
        tmp = toIntExact(value);
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          tmp = toIntExact_0(value);
        } else {
          if (!(value == null) ? typeof value === 'string' : false) {
            tmp = toInt(value);
          } else {
            if (value instanceof JsonNumber) {
              tmp = toInt(value.get_value_j01efc_k$());
            } else {
              var tmp0_error = 'Expected an Int but got ' + toString_1(value) + ' instead';
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextInt.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp1_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextLong_njwv0v_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Long but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.peekedData_1;
    var tmp;
    if (!(value == null) ? typeof value === 'number' : false) {
      tmp = toLong(value);
    } else {
      if (value instanceof Long) {
        tmp = value;
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          tmp = toLongExact(value);
        } else {
          if (!(value == null) ? typeof value === 'string' : false) {
            tmp = toLong_0(value);
          } else {
            if (value instanceof JsonNumber) {
              tmp = toLong_0(value.get_value_j01efc_k$());
            } else {
              var tmp0_error = 'Expected Int but got ' + toString_1(value) + ' instead';
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextLong.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp1_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextNumber_n9bzz8_k$ = function () {
    var tmp0_subject = this.peek_21nx7_k$();
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Number but was ' + this.peek_21nx7_k$() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.peekedData_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(value == null) ? typeof value === 'number' : false) {
      tmp_1 = true;
    } else {
      tmp_1 = value instanceof Long;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(value == null) ? typeof value === 'number' : false;
    }
    if (tmp_0) {
      tmp = new JsonNumber(toString(value));
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = new JsonNumber(value);
      } else {
        if (value instanceof JsonNumber) {
          tmp = value;
        } else {
          var tmp0_error = 'Expected JsonNumber but got ' + toString_1(value) + ' instead';
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextNumber.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp1_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.nextValue_jzf51a_k$ = function () {
    var tmp0_elvis_lhs = this.peekedData_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new JsonDataException('Expected a non-null value at path ' + getPathAsString_0(this));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data = tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextValue.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = data;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.skipValue_18a9r5_k$ = function () {
    advanceIterator(this);
  };
  MapJsonReader.prototype.close_ymq55z_k$ = function () {
  };
  MapJsonReader.prototype.selectName_7r3epc_k$ = function (names) {
    while (this.hasNext_bitz1p_k$()) {
      var name = this.nextName_njxula_k$();
      var index = findName(this, name, names);
      if (!(index === -1)) {
        return index;
      }
      this.skipValue_18a9r5_k$();
    }
    return -1;
  };
  MapJsonReader.prototype.rewind_xapxey_k$ = function () {
    var container = this.containerStack_1[this.stackSize_1 - 1 | 0];
    this.path_1[this.stackSize_1 - 1 | 0] = null;
    var tmp = this.stackSize_1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = ensureNotNull(container);
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    this.iteratorStack_1[tmp] = tmp$ret$0;
    this.nameIndexStack_1[this.stackSize_1 - 1 | 0] = 0;
    advanceIterator(this);
  };
  MapJsonReader.prototype.getPath_18su3p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    result.addAll_oxxjjk_k$(this.pathRoot_1);
    var inductionVariable = 0;
    var last = this.stackSize_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.path_1[index];
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          result.add_1j60pz_k$(tmp1_safe_receiver);
          tmp$ret$1 = Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    return result;
  };
  function List_0(list) {
    State.call(this);
    this.list_1 = list;
  }
  List_0.prototype.get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  List_0.prototype.toString = function () {
    return 'List (' + this.list_1.get_size_woubt6_k$() + ')';
  };
  function Map_0(map, name) {
    State.call(this);
    this.map_1 = map;
    this.name_1 = name;
  }
  Map_0.prototype.get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  Map_0.prototype.set_name_1v3553_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  Map_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Map_0.prototype.toString = function () {
    return 'Map (' + this.name_1 + ')';
  };
  function State() {
  }
  function _set_root__9tgb79($this, _set____db54di) {
    $this.root_1 = _set____db54di;
  }
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _set_rootSet__d0gxaz($this, _set____db54di) {
    $this.rootSet_1 = _set____db54di;
  }
  function _get_rootSet__weeub5($this) {
    return $this.rootSet_1;
  }
  function _get_stack__b8zp2v_0($this) {
    return $this.stack_1;
  }
  function mergeWith(_this__u8e3s4, $this, other) {
    if (_this__u8e3s4 == null) {
      return other;
    }
    if (other == null) {
      return _this__u8e3s4;
    }
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(!(other == null) ? isInterface(other, List) : false)) {
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
        tmp$ret$0 = 'Cannot merge ' + toString_1(_this__u8e3s4) + ' with ' + toString_1(other);
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = _this__u8e3s4.get_size_woubt6_k$() === other.get_size_woubt6_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
        tmp$ret$1 = 'Cannot merge ' + toString_1(_this__u8e3s4) + ' with ' + toString_1(other);
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = get_indices(_this__u8e3s4);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp1_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
      var inductionVariable = tmp2_map.get_first_irdx8n_k$();
      var last = tmp2_map.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          tmp$ret$2 = mergeWith(_this__u8e3s4.get_fkrdnv_k$(item), $this, other.get_fkrdnv_k$(item));
          tmp1_mapTo.add_1j60pz_k$(tmp$ret$2);
        }
         while (!(item === last));
      tmp$ret$3 = tmp1_mapTo;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(!(other == null) ? isInterface(other, Map) : false)) {
          var tmp$ret$5;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          tmp$ret$5 = 'Cannot merge ' + toString_1(_this__u8e3s4) + ' with ' + toString_1(other);
          var message_1 = tmp$ret$5;
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false)
          _this__u8e3s4;
        else
          THROW_CCE();
        if (!(other == null) ? isInterface(other, Map) : false)
          other;
        else
          THROW_CCE();
        var tmp$ret$8;
        // Inline function 'kotlin.collections.map' call
        var tmp4_map = plus_1(_this__u8e3s4.get_keys_wop4xp_k$(), other.get_keys_wop4xp_k$());
        var tmp$ret$7;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp3_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp4_map, 10));
        var tmp0_iterator = tmp4_map.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator.next_20eer_k$();
          var tmp$ret$6;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          tmp$ret$6 = to(item_0, mergeWith(_this__u8e3s4.get_1mhr4y_k$(item_0), $this, other.get_1mhr4y_k$(item_0)));
          tmp3_mapTo.add_1j60pz_k$(tmp$ret$6);
        }
        tmp$ret$7 = tmp3_mapTo;
        tmp$ret$8 = tmp$ret$7;
        tmp = toMap(tmp$ret$8);
      } else {
        // Inline function 'kotlin.check' call
        var tmp5_check = equals(_this__u8e3s4, other);
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp5_check) {
          var tmp$ret$9;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          var tmp0_error = 'Cannot merge ' + toString_1(_this__u8e3s4) + ' with ' + toString_1(other);
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
          var message_2 = tmp$ret$9;
          throw IllegalStateException_init_$Create$(toString(message_2));
        }
        tmp = _this__u8e3s4;
      }
    }
    return tmp;
  }
  function valueInternal($this, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.valueInternal.<anonymous>' call
    var state = lastOrNull($this.stack_1);
    if (state instanceof Map_0) {
      var name = state.name_1;
      // Inline function 'kotlin.check' call
      var tmp0_check = !(name == null);
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
      if (state.map_1.containsKey_wgk31w_k$(name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = state.map_1;
        var tmp2_set = mergeWith(state.map_1.get_1mhr4y_k$(name), $this, value);
        tmp1_set.put_3mhbri_k$(name, tmp2_set);
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp3_set = state.map_1;
        tmp3_set.put_3mhbri_k$(name, value);
      }
      state.name_1 = null;
    } else {
      if (state instanceof List_0) {
        state.list_1.add_1j60pz_k$(value);
      } else {
        $this.root_1 = value;
        $this.rootSet_1 = true;
      }
    }
    tmp$ret$1 = $this;
    return tmp$ret$1;
  }
  function MapJsonWriter() {
    this.root_1 = null;
    this.rootSet_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.stack_1 = tmp$ret$0;
  }
  MapJsonWriter.prototype.root_235k2_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.rootSet_1;
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
    return this.root_1;
  };
  MapJsonWriter.prototype.beginArray_hxn19s_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.beginArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    this.stack_1.add_1j60pz_k$(new List_0(list));
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.endArray_s2tmpq_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.endArray.<anonymous>' call
    var state = this.stack_1.removeAt_qvpkxi_k$(this.stack_1.get_size_woubt6_k$() - 1 | 0);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(state instanceof List_0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    valueInternal(this, state.list_1);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.beginObject_5wddq0_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.beginObject.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var map = tmp$ret$0;
    this.stack_1.add_1j60pz_k$(new Map_0(map, null));
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.endObject_ofuv3u_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.endObject.<anonymous>' call
    var state = this.stack_1.removeAt_qvpkxi_k$(this.stack_1.get_size_woubt6_k$() - 1 | 0);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(state instanceof Map_0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    valueInternal(this, state.map_1);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.name_u79i4q_k$ = function (name) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.name.<anonymous>' call
    var state = last(this.stack_1);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(state instanceof Map_0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp0_check = state.name_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    state.name_1 = name;
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  MapJsonWriter.prototype.get_path_wos8ry_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.stack_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.<get-path>.<anonymous>' call
      var tmp0_subject = item;
      var tmp;
      if (tmp0_subject instanceof List_0) {
        tmp = item.list_1.get_size_woubt6_k$().toString();
      } else {
        if (tmp0_subject instanceof Map_0) {
          var tmp1_elvis_lhs = item.name_1;
          tmp = tmp1_elvis_lhs == null ? '?' : tmp1_elvis_lhs;
        } else {
          noWhenBranchMatchedException();
        }
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    return joinToString$default(tmp_0, '.', null, null, 0, null, null, 62, null);
  };
  MapJsonWriter.prototype.value_h8ym4w_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_5b51sn_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_ofc5ao_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_7nxl9s_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_oin34r_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_b3fnuy_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.value_b5cpri_k$ = function (value) {
    return valueInternal(this, null);
  };
  MapJsonWriter.prototype.value_oig1rm_k$ = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.nullValue_h3u4a2_k$ = function () {
    return valueInternal(this, null);
  };
  MapJsonWriter.prototype.close_ymq55z_k$ = function () {
  };
  MapJsonWriter.prototype.flush_sgqoqb_k$ = function () {
  };
  function _get_wrappedWriter__6niird($this) {
    return $this.wrappedWriter_1;
  }
  function _get_uploads__a06hc1_0($this) {
    return $this.uploads_1;
  }
  function FileUploadAwareJsonWriter(wrappedWriter) {
    this.wrappedWriter_1 = wrappedWriter;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.uploads_1 = tmp$ret$0;
  }
  FileUploadAwareJsonWriter.prototype.collectedUploads_cst71z_k$ = function () {
    return this.uploads_1;
  };
  FileUploadAwareJsonWriter.prototype.beginArray_hxn19s_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.beginArray.<anonymous>' call
    this.wrappedWriter_1.beginArray_hxn19s_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.endArray_s2tmpq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.endArray.<anonymous>' call
    this.wrappedWriter_1.endArray_s2tmpq_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.beginObject_5wddq0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.beginObject.<anonymous>' call
    this.wrappedWriter_1.beginObject_5wddq0_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.endObject_ofuv3u_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.endObject.<anonymous>' call
    this.wrappedWriter_1.endObject_ofuv3u_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.name_u79i4q_k$ = function (name) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.name.<anonymous>' call
    this.wrappedWriter_1.name_u79i4q_k$(name);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_h8ym4w_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_h8ym4w_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_5b51sn_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_5b51sn_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_ofc5ao_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_ofc5ao_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_7nxl9s_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_7nxl9s_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_oin34r_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_oin34r_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_b3fnuy_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.wrappedWriter_1.value_b3fnuy_k$(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.value_b5cpri_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.uploads_1;
    var tmp1_set = this.wrappedWriter_1.get_path_wos8ry_k$();
    tmp0_set.put_3mhbri_k$(tmp1_set, value);
    this.wrappedWriter_1.nullValue_h3u4a2_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.nullValue_h3u4a2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.nullValue.<anonymous>' call
    this.wrappedWriter_1.nullValue_h3u4a2_k$();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.get_path_wos8ry_k$ = function () {
    return this.wrappedWriter_1.get_path_wos8ry_k$();
  };
  FileUploadAwareJsonWriter.prototype.close_ymq55z_k$ = function () {
    this.wrappedWriter_1.close_ymq55z_k$();
  };
  FileUploadAwareJsonWriter.prototype.flush_sgqoqb_k$ = function () {
    this.wrappedWriter_1.flush_sgqoqb_k$();
  };
  function JsonScope() {
    JsonScope_instance = this;
    this.EMPTY_ARRAY_1 = 1;
    this.NONEMPTY_ARRAY_1 = 2;
    this.EMPTY_OBJECT_1 = 3;
    this.DANGLING_NAME_1 = 4;
    this.NONEMPTY_OBJECT_1 = 5;
    this.EMPTY_DOCUMENT_1 = 6;
    this.NONEMPTY_DOCUMENT_1 = 7;
    this.CLOSED_1 = 8;
  }
  JsonScope.prototype.get_EMPTY_ARRAY_ikubem_k$ = function () {
    return this.EMPTY_ARRAY_1;
  };
  JsonScope.prototype.get_NONEMPTY_ARRAY_lfn8wz_k$ = function () {
    return this.NONEMPTY_ARRAY_1;
  };
  JsonScope.prototype.get_EMPTY_OBJECT_e2wcey_k$ = function () {
    return this.EMPTY_OBJECT_1;
  };
  JsonScope.prototype.get_DANGLING_NAME_o76qej_k$ = function () {
    return this.DANGLING_NAME_1;
  };
  JsonScope.prototype.get_NONEMPTY_OBJECT_vkp591_k$ = function () {
    return this.NONEMPTY_OBJECT_1;
  };
  JsonScope.prototype.get_EMPTY_DOCUMENT_mrwzre_k$ = function () {
    return this.EMPTY_DOCUMENT_1;
  };
  JsonScope.prototype.get_NONEMPTY_DOCUMENT_q3bt4h_k$ = function () {
    return this.NONEMPTY_DOCUMENT_1;
  };
  JsonScope.prototype.get_CLOSED_3p2npn_k$ = function () {
    return this.CLOSED_1;
  };
  JsonScope.prototype.getPath_lqzwqu_k$ = function (stackSize, stack, pathNames, pathIndices) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var inductionVariable = 0;
    if (inductionVariable < stackSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = stack[i];
        switch (tmp1_subject) {
          case 1:
          case 2:
            // Inline function 'kotlin.collections.plusAssign' call

            var tmp0_plusAssign = pathIndices[i];
            result.add_1j60pz_k$(tmp0_plusAssign);
            ;
            break;
          case 3:
          case 4:
          case 5:
            var tmp2_safe_receiver = pathNames[i];
            if (tmp2_safe_receiver == null)
              null;
            else {
              var tmp$ret$1;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              result.add_1j60pz_k$(tmp2_safe_receiver);
              tmp$ret$1 = Unit_getInstance();
            }

            ;
            break;
          case 7:
          case 6:
          case 8:
            ;
            break;
        }
      }
       while (inductionVariable < stackSize);
    return result;
  };
  var JsonScope_instance;
  function JsonScope_getInstance() {
    if (JsonScope_instance == null)
      new JsonScope();
    return JsonScope_instance;
  }
  function toDoubleExact(_this__u8e3s4) {
    var result = _this__u8e3s4.toDouble_ygsx0s_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = numberToLong(result).equals(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.internal.toDoubleExact.<anonymous>' call
      tmp$ret$0 = toString(_this__u8e3s4) + ' cannot be converted to Double';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function toIntExact(_this__u8e3s4) {
    var result = _this__u8e3s4.toInt_1tsl84_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = toLong(result).equals(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.internal.toIntExact.<anonymous>' call
      tmp$ret$0 = toString(_this__u8e3s4) + ' cannot be converted to Int';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function toIntExact_0(_this__u8e3s4) {
    var result = numberToInt(_this__u8e3s4);
    // Inline function 'kotlin.check' call
    var tmp0_check = result === _this__u8e3s4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.internal.toIntExact.<anonymous>' call
      tmp$ret$0 = '' + _this__u8e3s4 + ' cannot be converted to Int';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function toLongExact(_this__u8e3s4) {
    var result = numberToLong(_this__u8e3s4);
    // Inline function 'kotlin.check' call
    var tmp0_check = result.toDouble_ygsx0s_k$() === _this__u8e3s4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.internal.toLongExact.<anonymous>' call
      tmp$ret$0 = '' + _this__u8e3s4 + ' cannot be converted to Long';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function set_currentTestResolver(_set____db54di) {
    currentTestResolver = _set____db54di;
  }
  function get_currentTestResolver() {
    return currentTestResolver;
  }
  var currentTestResolver;
  function TestResolver() {
  }
  function get_DEFAULT_EXCEPTION_HANDLER() {
    init_properties_ApolloExceptionHandler_kt_tkf7ps();
    return DEFAULT_EXCEPTION_HANDLER;
  }
  var DEFAULT_EXCEPTION_HANDLER;
  function set_apolloExceptionHandler(_set____db54di) {
    init_properties_ApolloExceptionHandler_kt_tkf7ps();
    apolloExceptionHandler = _set____db54di;
  }
  function get_apolloExceptionHandler() {
    init_properties_ApolloExceptionHandler_kt_tkf7ps();
    return apolloExceptionHandler;
  }
  var apolloExceptionHandler;
  function DEFAULT_EXCEPTION_HANDLER$lambda(it) {
    init_properties_ApolloExceptionHandler_kt_tkf7ps();
    println('Apollo: unhandled exception');
    printStackTrace(it);
    return Unit_getInstance();
  }
  var properties_initialized_ApolloExceptionHandler_kt_1fuwk4;
  function init_properties_ApolloExceptionHandler_kt_tkf7ps() {
    if (properties_initialized_ApolloExceptionHandler_kt_1fuwk4) {
    } else {
      properties_initialized_ApolloExceptionHandler_kt_1fuwk4 = true;
      DEFAULT_EXCEPTION_HANDLER = DEFAULT_EXCEPTION_HANDLER$lambda;
      apolloExceptionHandler = get_DEFAULT_EXCEPTION_HANDLER();
    }
  }
  function MissingValueException() {
    ApolloException_init_$Init$("The optional doesn't have a value", null, 2, null, this);
    captureStack(this, MissingValueException);
  }
  function ApolloException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    if (!(($mask0 & 2) === 0))
      cause = null;
    ApolloException.call($this, message, cause);
    return $this;
  }
  function ApolloException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ApolloException_init_$Init$(message, cause, $mask0, $marker, Object.create(ApolloException.prototype));
    captureStack(tmp, ApolloException_init_$Create$);
    return tmp;
  }
  function ApolloException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, ApolloException);
  }
  function JsonDataException(message) {
    ApolloException_init_$Init$(message, null, 2, null, this);
    captureStack(this, JsonDataException);
  }
  function JsonEncodingException(message) {
    ApolloException_init_$Init$(message, null, 2, null, this);
    captureStack(this, JsonEncodingException);
  }
  function AutoPersistedQueriesNotSupported() {
    ApolloException_init_$Init$('The server does not support auto persisted queries', null, 2, null, this);
    captureStack(this, AutoPersistedQueriesNotSupported);
  }
  function ApolloHttpException_init_$Init$(statusCode, headers, body, message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      cause = null;
    ApolloHttpException.call($this, statusCode, headers, body, message, cause);
    return $this;
  }
  function ApolloHttpException_init_$Create$(statusCode, headers, body, message, cause, $mask0, $marker) {
    var tmp = ApolloHttpException_init_$Init$(statusCode, headers, body, message, cause, $mask0, $marker, Object.create(ApolloHttpException.prototype));
    captureStack(tmp, ApolloHttpException_init_$Create$);
    return tmp;
  }
  function ApolloHttpException(statusCode, headers, body, message, cause) {
    ApolloException.call(this, message, cause);
    this.statusCode_1 = statusCode;
    this.headers_1 = headers;
    this.body_1 = body;
    captureStack(this, ApolloHttpException);
  }
  ApolloHttpException.prototype.get_statusCode_g2w4u0_k$ = function () {
    return this.statusCode_1;
  };
  ApolloHttpException.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  ApolloHttpException.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  function ApolloParseException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    if (!(($mask0 & 2) === 0))
      cause = null;
    ApolloParseException.call($this, message, cause);
    return $this;
  }
  function ApolloParseException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ApolloParseException_init_$Init$(message, cause, $mask0, $marker, Object.create(ApolloParseException.prototype));
    captureStack(tmp, ApolloParseException_init_$Create$);
    return tmp;
  }
  function ApolloParseException(message, cause) {
    ApolloException.call(this, message, cause);
    captureStack(this, ApolloParseException);
  }
  function SubscriptionOperationException_init_$Init$(operationName, payload, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      payload = null;
    SubscriptionOperationException.call($this, operationName, payload);
    return $this;
  }
  function SubscriptionOperationException_init_$Create$(operationName, payload, $mask0, $marker) {
    var tmp = SubscriptionOperationException_init_$Init$(operationName, payload, $mask0, $marker, Object.create(SubscriptionOperationException.prototype));
    captureStack(tmp, SubscriptionOperationException_init_$Create$);
    return tmp;
  }
  function SubscriptionOperationException(operationName, payload) {
    var tmp = 'Operation error ' + operationName;
    ApolloException_init_$Init$(tmp, null, 2, null, this);
    this.payload_1 = payload;
    captureStack(this, SubscriptionOperationException);
  }
  SubscriptionOperationException.prototype.get_payload_bqtt23_k$ = function () {
    return this.payload_1;
  };
  function ApolloNetworkException_init_$Init$(message, platformCause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    if (!(($mask0 & 2) === 0))
      platformCause = null;
    ApolloNetworkException.call($this, message, platformCause);
    return $this;
  }
  function ApolloNetworkException_init_$Create$(message, platformCause, $mask0, $marker) {
    var tmp = ApolloNetworkException_init_$Init$(message, platformCause, $mask0, $marker, Object.create(ApolloNetworkException.prototype));
    captureStack(tmp, ApolloNetworkException_init_$Create$);
    return tmp;
  }
  function ApolloNetworkException(message, platformCause) {
    ApolloException.call(this, message, platformCause instanceof Error ? platformCause : null);
    this.platformCause_1 = platformCause;
    captureStack(this, ApolloNetworkException);
  }
  ApolloNetworkException.prototype.get_platformCause_78v825_k$ = function () {
    return this.platformCause_1;
  };
  //region block: post-declaration
  CustomScalarAdapters.prototype.get_ge4w64_k$ = get;
  CustomScalarAdapters.prototype.fold_oiritn_k$ = fold;
  CustomScalarAdapters.prototype.minusKey_3qgl28_k$ = minusKey;
  CustomScalarAdapters.prototype.plus_r8myed_k$ = plus_2;
  CombinedExecutionContext.prototype.plus_r8myed_k$ = plus_2;
  //endregion
  //region block: init
  RESERVED_CHARS = '!#$&\'"()*+,/:;=?@[]{} ';
  currentTestResolver = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DefaultHttpRequestComposer;
  _.$_$.b = HttpBody;
  _.$_$.c = HttpHeader;
  _.$_$.d = Builder_9;
  _.$_$.e = Builder_8;
  _.$_$.f = valueOf_0;
  _.$_$.g = Version2CustomTypeAdapterToAdapter;
  _.$_$.h = BufferedSinkJsonWriter;
  _.$_$.i = BufferedSourceJsonReader;
  _.$_$.j = jsonReader;
  _.$_$.k = jsonReader_0;
  _.$_$.l = readAny;
  _.$_$.m = writeAny;
  _.$_$.n = Adapter;
  _.$_$.o = get_AnyAdapter;
  _.$_$.p = Builder_0;
  _.$_$.q = ApolloResponse;
  _.$_$.r = get_BooleanAdapter;
  _.$_$.s = Builder_4;
  _.$_$.t = CompiledCondition;
  _.$_$.u = Builder_2;
  _.$_$.v = Builder_5;
  _.$_$.w = CompiledVariable;
  _.$_$.x = Builder_7;
  _.$_$.y = CustomScalarType;
  _.$_$.z = DeferredFragmentIdentifier;
  _.$_$.a1 = fold;
  _.$_$.b1 = get;
  _.$_$.c1 = minusKey;
  _.$_$.d1 = Element_0;
  _.$_$.e1 = Key_0;
  _.$_$.f1 = plus_2;
  _.$_$.g1 = ExecutionOptions;
  _.$_$.h1 = get_IntAdapter;
  _.$_$.i1 = Builder_6;
  _.$_$.j1 = MutableExecutionOptions;
  _.$_$.k1 = Mutation;
  _.$_$.l1 = get_NullableAnyAdapter;
  _.$_$.m1 = get_NullableIntAdapter;
  _.$_$.n1 = get_NullableStringAdapter;
  _.$_$.o1 = Builder_3;
  _.$_$.p1 = Present;
  _.$_$.q1 = Data_2;
  _.$_$.r1 = Query;
  _.$_$.s1 = get_StringAdapter;
  _.$_$.t1 = Subscription;
  _.$_$.u1 = and;
  _.$_$.v1 = evaluate;
  _.$_$.w1 = list_0;
  _.$_$.x1 = list;
  _.$_$.y1 = notNull;
  _.$_$.z1 = nullable;
  _.$_$.a2 = obj;
  _.$_$.b2 = parseJsonResponse;
  _.$_$.c2 = possibleTypes;
  _.$_$.d2 = present;
  _.$_$.e2 = variable;
  _.$_$.f2 = withDeferredFragmentIds;
  _.$_$.g2 = ApolloException;
  _.$_$.h2 = ApolloNetworkException;
  _.$_$.i2 = ApolloParseException;
  _.$_$.j2 = AutoPersistedQueriesNotSupported;
  _.$_$.k2 = SubscriptionOperationException;
  _.$_$.l2 = HttpMethod_Get_getInstance;
  _.$_$.m2 = HttpMethod_Post_getInstance;
  _.$_$.n2 = obj$default;
  _.$_$.o2 = BufferedSinkJsonWriter_init_$Create$;
  _.$_$.p2 = ApolloException_init_$Create$;
  _.$_$.q2 = ApolloHttpException_init_$Create$;
  _.$_$.r2 = ApolloNetworkException_init_$Create$;
  _.$_$.s2 = Companion_getInstance_5;
  _.$_$.t2 = Key_getInstance;
  _.$_$.u2 = Companion_getInstance_1;
  _.$_$.v2 = Companion_getInstance_2;
  _.$_$.w2 = Absent_getInstance;
  _.$_$.x2 = Companion_getInstance_3;
  //endregion
  return _;
}));
