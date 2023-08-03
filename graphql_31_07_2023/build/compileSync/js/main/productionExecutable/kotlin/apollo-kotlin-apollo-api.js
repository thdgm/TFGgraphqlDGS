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
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var classMeta = kotlin_kotlin.$_$.w6;
  var setMetadataFor = kotlin_kotlin.$_$.q7;
  var emptySet = kotlin_kotlin.$_$.f4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var equals = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.u7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var THROW_CCE = kotlin_kotlin.$_$.q9;
  var isObject = kotlin_kotlin.$_$.k7;
  var ensureNotNull = kotlin_kotlin.$_$.x9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var List = kotlin_kotlin.$_$.e3;
  var isInterface = kotlin_kotlin.$_$.j7;
  var Long = kotlin_kotlin.$_$.m9;
  var uuid4 = kotlin_uuid.$_$.a;
  var emptyList = kotlin_kotlin.$_$.d4;
  var plus = kotlin_kotlin.$_$.e5;
  var emptyMap = kotlin_kotlin.$_$.e4;
  var drop = kotlin_kotlin.$_$.b4;
  var objectMeta = kotlin_kotlin.$_$.p7;
  var hashCode = kotlin_kotlin.$_$.e7;
  var toList = kotlin_kotlin.$_$.n5;
  var toSet = kotlin_kotlin.$_$.s5;
  var toSet_0 = kotlin_kotlin.$_$.t5;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ca;
  var Collection = kotlin_kotlin.$_$.d3;
  var contains = kotlin_kotlin.$_$.s3;
  var Map = kotlin_kotlin.$_$.g3;
  var interfaceMeta = kotlin_kotlin.$_$.f7;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var toLong = kotlin_kotlin.$_$.s7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var contains$default = kotlin_kotlin.$_$.i;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var listOf = kotlin_kotlin.$_$.v4;
  var plus_0 = kotlin_kotlin.$_$.d5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var checkIndexOverflow = kotlin_kotlin.$_$.q3;
  var listOf_0 = kotlin_kotlin.$_$.u4;
  var to = kotlin_kotlin.$_$.ha;
  var toMap = kotlin_kotlin.$_$.o5;
  var blackholeSink = kotlin_com_squareup_okio_okio.$_$.g;
  var buffer = kotlin_com_squareup_okio_okio.$_$.i;
  var lazy = kotlin_kotlin.$_$.ba;
  var Enum = kotlin_kotlin.$_$.g9;
  var equals_0 = kotlin_kotlin.$_$.k8;
  var charSequenceGet = kotlin_kotlin.$_$.t6;
  var contains$default_0 = kotlin_kotlin.$_$.j;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var toString_0 = kotlin_kotlin.$_$.a9;
  var addSuppressed = kotlin_kotlin.$_$.u9;
  var Char = kotlin_kotlin.$_$.d9;
  var charSequenceLength = kotlin_kotlin.$_$.u6;
  var fillArrayVal = kotlin_kotlin.$_$.a7;
  var toByte = kotlin_kotlin.$_$.r7;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var isInfinite = kotlin_kotlin.$_$.y9;
  var isNaN_0 = kotlin_kotlin.$_$.z9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var numberToChar = kotlin_kotlin.$_$.m7;
  var numberToLong = kotlin_kotlin.$_$.o7;
  var Companion_getInstance = kotlin_kotlin.$_$.x2;
  var EOFException = kotlin_com_squareup_okio_okio.$_$.f;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.i2;
  var Companion_getInstance_0 = kotlin_com_squareup_okio_okio.$_$.b;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toDouble = kotlin_kotlin.$_$.w8;
  var NumberFormatException = kotlin_kotlin.$_$.o9;
  var toLong_0 = kotlin_kotlin.$_$.z8;
  var toInt = kotlin_kotlin.$_$.x8;
  var numberToInt = kotlin_kotlin.$_$.n7;
  var Exception = kotlin_kotlin.$_$.i9;
  var toString_1 = kotlin_kotlin.$_$.ga;
  var Entry = kotlin_kotlin.$_$.f3;
  var plus_1 = kotlin_kotlin.$_$.b5;
  var get_indices = kotlin_kotlin.$_$.o4;
  var lastOrNull = kotlin_kotlin.$_$.r4;
  var last = kotlin_kotlin.$_$.s4;
  var captureStack = kotlin_kotlin.$_$.q6;
  var RuntimeException = kotlin_kotlin.$_$.p9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.z1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Builder, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AdapterContext, 'AdapterContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NullableAdapter, 'NullableAdapter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloOptionalAdapter, 'ApolloOptionalAdapter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ObjectAdapter, 'ObjectAdapter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ListAdapter, 'ListAdapter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PresentAdapter, 'PresentAdapter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DoubleAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FloatAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LongAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BooleanAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AnyAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UploadAdapter$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Builder_0, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloRequest, 'ApolloRequest', classMeta, undefined, undefined, undefined, undefined, []);
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
  setMetadataFor(Key, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Builder_2, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  function plus_2(context) {
    var tmp;
    if (context === EmptyExecutionContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.o2d(this, ExecutionContext$plus$lambda);
    }
    return tmp;
  }
  setMetadataFor(ExecutionContext, 'ExecutionContext', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function get(key) {
    var tmp;
    if (equals(this.q(), key)) {
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
    return equals(this.q(), key) ? EmptyExecutionContext_getInstance() : this;
  }
  setMetadataFor(Element_0, 'Element', interfaceMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(CustomScalarAdapters, 'CustomScalarAdapters', classMeta, undefined, [Element_0], undefined, undefined, []);
  setMetadataFor(DeferredFragmentIdentifier, 'DeferredFragmentIdentifier', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Location, 'Location', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Error_0, 'Error', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Variables, 'Variables', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyExecutionContext, 'EmptyExecutionContext', objectMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(CombinedExecutionContext, 'CombinedExecutionContext', classMeta, undefined, [ExecutionContext], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Mutation, 'Mutation', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Optional, 'Optional', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Present, 'Present', classMeta, Optional, undefined, undefined, undefined, []);
  setMetadataFor(Absent, 'Absent', objectMeta, Optional, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Query, 'Query', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Subscription, 'Subscription', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Upload, 'Upload', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpRequestComposer$Companion$buildPostBody$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpRequestComposer, 'DefaultHttpRequestComposer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UploadsHttpBody, 'UploadsHttpBody', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CountingSink, 'CountingSink', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpHeader, 'HttpHeader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Builder_3, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Builder_4, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequest, 'HttpRequest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseParser, 'ResponseParser', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferedSinkJsonWriter, 'BufferedSinkJsonWriter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferedSourceJsonReader, 'BufferedSourceJsonReader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonNumber, 'JsonNumber', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Token, 'Token', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MapJsonReader, 'MapJsonReader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(State, 'State', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(List_0, 'List', classMeta, State, undefined, undefined, undefined, []);
  setMetadataFor(Map_0, 'Map', classMeta, State, undefined, undefined, undefined, []);
  setMetadataFor(MapJsonWriter, 'MapJsonWriter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FileUploadAwareJsonWriter, 'FileUploadAwareJsonWriter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonScope, 'JsonScope', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloException, 'ApolloException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(JsonDataException, 'JsonDataException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloHttpException, 'ApolloHttpException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloParseException, 'ApolloParseException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(SubscriptionOperationException, 'SubscriptionOperationException', classMeta, ApolloException, undefined, undefined, undefined, []);
  setMetadataFor(ApolloNetworkException, 'ApolloNetworkException', classMeta, ApolloException, undefined, undefined, undefined, []);
  //endregion
  function Builder() {
    this.x28_1 = null;
    this.y28_1 = null;
  }
  Builder.prototype.z28 = function (variables) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.variables.<anonymous>' call
    this.x28_1 = variables;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder.prototype.a29 = function (mergedDeferredFragmentIds) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.mergedDeferredFragmentIds.<anonymous>' call
    this.y28_1 = mergedDeferredFragmentIds;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder.prototype.t1c = function () {
    return new AdapterContext(this.x28_1, this.y28_1);
  };
  function AdapterContext(variables, mergedDeferredFragmentIds) {
    this.b29_1 = variables;
    this.c29_1 = mergedDeferredFragmentIds;
  }
  AdapterContext.prototype.d29 = function () {
    return (new Builder()).z28(this.b29_1).a29(this.c29_1);
  };
  AdapterContext.prototype.e29 = function () {
    if (this.b29_1 == null) {
      return emptySet();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.b29_1.f29_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = LinkedHashMap_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_filter.p().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.AdapterContext.variables.<anonymous>' call
      tmp$ret$1 = equals(element.r(), false);
      if (tmp$ret$1) {
        tmp0_filterTo.v2(element.q(), element.r());
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3.c2();
  };
  AdapterContext.prototype.g29 = function (path, label) {
    if (this.c29_1 == null) {
      return true;
    }
    return this.c29_1.n(new DeferredFragmentIdentifier(path, label));
  };
  function withDeferredFragmentIds(_this__u8e3s4, deferredFragmentIds) {
    return _this__u8e3s4.d29().n29(_this__u8e3s4.h29_1.d29().a29(deferredFragmentIds).t1c()).t1c();
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
  var FloatAdapter;
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
  var UploadAdapter;
  function get_NullableStringAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableStringAdapter;
  }
  var NullableStringAdapter;
  var NullableDoubleAdapter;
  function get_NullableIntAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableIntAdapter;
  }
  var NullableIntAdapter;
  var NullableBooleanAdapter;
  function get_NullableAnyAdapter() {
    init_properties_Adapters_kt_a8j8k6();
    return NullableAnyAdapter;
  }
  var NullableAnyAdapter;
  var ApolloOptionalStringAdapter;
  var ApolloOptionalDoubleAdapter;
  var ApolloOptionalIntAdapter;
  var ApolloOptionalBooleanAdapter;
  var ApolloOptionalAnyAdapter;
  function NullableAdapter(wrappedAdapter) {
    this.o29_1 = wrappedAdapter;
    // Inline function 'kotlin.check' call
    var tmp = this.o29_1;
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
  NullableAdapter.prototype.p29 = function (reader, customScalarAdapters) {
    var tmp;
    if (reader.r29().equals(Token_NULL_getInstance())) {
      reader.q29();
      tmp = null;
    } else {
      tmp = this.o29_1.p29(reader, customScalarAdapters);
    }
    return tmp;
  };
  NullableAdapter.prototype.s29 = function (writer, customScalarAdapters, value) {
    if (value == null) {
      writer.u29();
    } else {
      this.o29_1.t29(writer, customScalarAdapters, value);
    }
  };
  NullableAdapter.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.s29(writer, customScalarAdapters, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function nullable(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new NullableAdapter(_this__u8e3s4);
  }
  function ApolloOptionalAdapter(wrappedAdapter) {
    this.v29_1 = wrappedAdapter;
  }
  ApolloOptionalAdapter.prototype.p29 = function (reader, customScalarAdapters) {
    var tmp;
    if (reader.r29().equals(Token_NULL_getInstance())) {
      reader.q29();
      tmp = Absent_getInstance();
    } else {
      tmp = new Present(this.v29_1.p29(reader, customScalarAdapters));
    }
    return tmp;
  };
  ApolloOptionalAdapter.prototype.w29 = function (writer, customScalarAdapters, value) {
    if (value instanceof Present) {
      this.v29_1.t29(writer, customScalarAdapters, value.x29_1);
    } else {
      writer.u29();
    }
  };
  ApolloOptionalAdapter.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.w29(writer, customScalarAdapters, value instanceof Optional ? value : THROW_CCE());
  };
  function ObjectAdapter(wrappedAdapter, buffered) {
    this.y29_1 = wrappedAdapter;
    this.z29_1 = buffered;
  }
  ObjectAdapter.prototype.p29 = function (reader, customScalarAdapters) {
    var tmp;
    if (this.z29_1) {
      tmp = Companion_getInstance_7().a2a(reader);
    } else {
      tmp = reader;
    }
    var actualReader = tmp;
    actualReader.b2a();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.y29_1.p29(actualReader, customScalarAdapters);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.ObjectAdapter.fromJson.<anonymous>' call
    actualReader.c2a();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  ObjectAdapter.prototype.t29 = function (writer, customScalarAdapters, value) {
    var tmp;
    if (this.z29_1) {
      tmp = !(writer instanceof MapJsonWriter);
    } else {
      tmp = false;
    }
    if (tmp) {
      var mapWriter = new MapJsonWriter();
      mapWriter.b2a();
      this.y29_1.t29(mapWriter, customScalarAdapters, value);
      mapWriter.c2a();
      writeAny(writer, ensureNotNull(mapWriter.g2a()));
    } else {
      writer.b2a();
      this.y29_1.t29(writer, customScalarAdapters, value);
      writer.c2a();
    }
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
  function ListAdapter(wrappedAdapter) {
    this.h2a_1 = wrappedAdapter;
  }
  ListAdapter.prototype.p29 = function (reader, customScalarAdapters) {
    reader.i2a();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    while (reader.l()) {
      list.a(this.h2a_1.p29(reader, customScalarAdapters));
    }
    reader.j2a();
    return list;
  };
  ListAdapter.prototype.k2a = function (writer, customScalarAdapters, value) {
    writer.i2a();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = value.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.apollographql.apollo3.api.ListAdapter.toJson.<anonymous>' call
      this.h2a_1.t29(writer, customScalarAdapters, element);
    }
    writer.j2a();
  };
  ListAdapter.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.k2a(writer, customScalarAdapters, (!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
  };
  function list(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new ListAdapter(_this__u8e3s4);
  }
  function PresentAdapter(wrappedAdapter) {
    this.l2a_1 = wrappedAdapter;
  }
  PresentAdapter.prototype.p29 = function (reader, customScalarAdapters) {
    return new Present(this.l2a_1.p29(reader, customScalarAdapters));
  };
  PresentAdapter.prototype.m2a = function (writer, customScalarAdapters, value) {
    this.l2a_1.t29(writer, customScalarAdapters, value.x29_1);
  };
  PresentAdapter.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.m2a(writer, customScalarAdapters, value instanceof Present ? value : THROW_CCE());
  };
  function present(_this__u8e3s4) {
    init_properties_Adapters_kt_a8j8k6();
    return new PresentAdapter(_this__u8e3s4);
  }
  function StringAdapter$1() {
  }
  StringAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return ensureNotNull(reader.n2a());
  };
  StringAdapter$1.prototype.o2a = function (writer, customScalarAdapters, value) {
    writer.p2a(value);
  };
  StringAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.o2a(writer, customScalarAdapters, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  function IntAdapter$1() {
  }
  IntAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return reader.w2();
  };
  IntAdapter$1.prototype.q2a = function (writer, customScalarAdapters, value) {
    writer.r2a(value);
  };
  IntAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.q2a(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function DoubleAdapter$1() {
  }
  DoubleAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return reader.s2a();
  };
  DoubleAdapter$1.prototype.t2a = function (writer, customScalarAdapters, value) {
    writer.u2a(value);
  };
  DoubleAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.t2a(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function FloatAdapter$1() {
  }
  FloatAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return reader.s2a();
  };
  FloatAdapter$1.prototype.v2a = function (writer, customScalarAdapters, value) {
    writer.u2a(value);
  };
  FloatAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.v2a(writer, customScalarAdapters, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  function LongAdapter$1() {
  }
  LongAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return reader.w2a();
  };
  LongAdapter$1.prototype.x2a = function (writer, customScalarAdapters, value) {
    writer.y2a(value);
  };
  LongAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.x2a(writer, customScalarAdapters, value instanceof Long ? value : THROW_CCE());
  };
  function BooleanAdapter$1() {
  }
  BooleanAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return reader.z2a();
  };
  BooleanAdapter$1.prototype.a2b = function (writer, customScalarAdapters, value) {
    writer.b2b(value);
  };
  BooleanAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.a2b(writer, customScalarAdapters, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  function AnyAdapter$1() {
  }
  AnyAdapter$1.prototype.c2b = function (reader) {
    return ensureNotNull(readAny(reader));
  };
  AnyAdapter$1.prototype.d2b = function (writer, value) {
    writeAny(writer, value);
  };
  AnyAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    return this.c2b(reader);
  };
  AnyAdapter$1.prototype.e2b = function (writer, customScalarAdapters, value) {
    this.d2b(writer, value);
  };
  AnyAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.e2b(writer, customScalarAdapters, isObject(value) ? value : THROW_CCE());
  };
  function UploadAdapter$1() {
  }
  UploadAdapter$1.prototype.p29 = function (reader, customScalarAdapters) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('File Upload used in output position');
  };
  UploadAdapter$1.prototype.f2b = function (writer, customScalarAdapters, value) {
    writer.g2b(value);
  };
  UploadAdapter$1.prototype.t29 = function (writer, customScalarAdapters, value) {
    return this.f2b(writer, customScalarAdapters, (!(value == null) ? isInterface(value, Upload) : false) ? value : THROW_CCE());
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
  function Builder_0(operation) {
    this.h2b_1 = operation;
    this.i2b_1 = uuid4();
    this.j2b_1 = Companion_getInstance_1().q2b_1;
    this.k2b_1 = null;
    this.l2b_1 = null;
    this.m2b_1 = null;
    this.n2b_1 = null;
    this.o2b_1 = null;
    this.p2b_1 = null;
  }
  Builder_0.prototype.r2b = function (httpMethod) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.httpMethod.<anonymous>' call
    this.k2b_1 = httpMethod;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.s2b = function (httpHeaders) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.httpHeaders.<anonymous>' call
    this.l2b_1 = httpHeaders;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.t2b = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addHttpHeader.<anonymous>' call
    var tmp = this;
    var tmp0_elvis_lhs = this.l2b_1;
    tmp.l2b_1 = plus(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, new HttpHeader(name, value));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.u2b = function (sendApqExtensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.sendApqExtensions.<anonymous>' call
    this.m2b_1 = sendApqExtensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.v2b = function (sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.sendDocument.<anonymous>' call
    this.n2b_1 = sendDocument;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.w2b = function (enableAutoPersistedQueries) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.enableAutoPersistedQueries.<anonymous>' call
    this.o2b_1 = enableAutoPersistedQueries;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.x2b = function (canBeBatched) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.canBeBatched.<anonymous>' call
    this.p2b_1 = canBeBatched;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.y2b = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.executionContext.<anonymous>' call
    this.j2b_1 = executionContext;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.z2b = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addExecutionContext.<anonymous>' call
    this.j2b_1 = this.j2b_1.a2c(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_0.prototype.t1c = function () {
    return new ApolloRequest(this.h2b_1, this.i2b_1, this.j2b_1, this.k2b_1, this.l2b_1, this.m2b_1, this.n2b_1, this.o2b_1, this.p2b_1);
  };
  function ApolloRequest(operation, requestUuid, executionContext, httpMethod, httpHeaders, sendApqExtensions, sendDocument, enableAutoPersistedQueries, canBeBatched) {
    this.b2c_1 = operation;
    this.c2c_1 = requestUuid;
    this.d2c_1 = executionContext;
    this.e2c_1 = httpMethod;
    this.f2c_1 = httpHeaders;
    this.g2c_1 = sendApqExtensions;
    this.h2c_1 = sendDocument;
    this.i2c_1 = enableAutoPersistedQueries;
    this.j2c_1 = canBeBatched;
  }
  function Builder_1(operation, requestUuid, data) {
    this.k2c_1 = operation;
    this.l2c_1 = requestUuid;
    this.m2c_1 = data;
    this.n2c_1 = Companion_getInstance_1().q2b_1;
    this.o2c_1 = null;
    this.p2c_1 = null;
    this.q2c_1 = false;
  }
  Builder_1.prototype.z2b = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addExecutionContext.<anonymous>' call
    this.n2c_1 = this.n2c_1.a2c(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.r2c = function (errors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.errors.<anonymous>' call
    this.o2c_1 = errors;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.s2c = function (extensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.extensions.<anonymous>' call
    this.p2c_1 = extensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.t2c = function (requestUuid) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.requestUuid.<anonymous>' call
    this.l2c_1 = requestUuid;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.u2c = function (isLast) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.isLast.<anonymous>' call
    this.q2c_1 = isLast;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_1.prototype.t1c = function () {
    var tmp1_operation = this.k2c_1;
    var tmp2_requestUuid = this.l2c_1;
    var tmp3_data = this.m2c_1;
    var tmp4_executionContext = this.n2c_1;
    var tmp0_elvis_lhs = this.p2c_1;
    var tmp5_extensions = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    var tmp6_errors = this.o2c_1;
    var tmp7_isLast = this.q2c_1;
    return new ApolloResponse(tmp2_requestUuid, tmp1_operation, tmp3_data, tmp6_errors, tmp5_extensions, tmp4_executionContext, tmp7_isLast);
  };
  function ApolloResponse(requestUuid, operation, data, errors, extensions, executionContext, isLast) {
    this.v2c_1 = requestUuid;
    this.w2c_1 = operation;
    this.x2c_1 = data;
    this.y2c_1 = errors;
    this.z2c_1 = extensions;
    this.a2d_1 = executionContext;
    this.b2d_1 = isLast;
  }
  ApolloResponse.prototype.d29 = function () {
    return (new Builder_1(this.w2c_1, this.v2c_1, this.x2c_1)).r2c(this.y2c_1).s2c(this.z2c_1).z2b(this.a2d_1).u2c(this.b2d_1);
  };
  function evaluate(_this__u8e3s4, variables, typename, adapterContext, path) {
    var tmp0_safe_receiver = path;
    var croppedPath = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    return evaluate_0(_this__u8e3s4, evaluate$lambda(variables, adapterContext, croppedPath, typename));
  }
  function True() {
    True_instance = this;
    BooleanExpression.call(this);
  }
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
  var False_instance;
  function False_getInstance() {
    if (False_instance == null)
      new False();
    return False_instance;
  }
  function Not() {
  }
  function Or() {
  }
  function And(operands) {
    BooleanExpression.call(this);
    this.c2d_1 = operands;
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.c2d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.k();
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
  And.prototype.toString = function () {
    return 'And(operands=' + this.c2d_1 + ')';
  };
  And.prototype.hashCode = function () {
    return hashCode(this.c2d_1);
  };
  And.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof And))
      return false;
    var tmp0_other_with_cast = other instanceof And ? other : THROW_CCE();
    if (!equals(this.c2d_1, tmp0_other_with_cast.c2d_1))
      return false;
    return true;
  };
  function Element(value) {
    BooleanExpression.call(this);
    this.d2d_1 = value;
  }
  Element.prototype.toString = function () {
    return 'Element(value=' + this.d2d_1 + ')';
  };
  Element.prototype.hashCode = function () {
    return hashCode(this.d2d_1);
  };
  Element.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Element))
      return false;
    var tmp0_other_with_cast = other instanceof Element ? other : THROW_CCE();
    if (!equals(this.d2d_1, tmp0_other_with_cast.d2d_1))
      return false;
    return true;
  };
  function BooleanExpression() {
  }
  function BTerm() {
  }
  function and(other) {
    return new And(toSet(toList(other)));
  }
  function BPossibleTypes(possibleTypes) {
    BTerm.call(this);
    this.e2d_1 = possibleTypes;
  }
  BPossibleTypes.prototype.toString = function () {
    return 'BPossibleTypes(possibleTypes=' + this.e2d_1 + ')';
  };
  BPossibleTypes.prototype.hashCode = function () {
    return hashCode(this.e2d_1);
  };
  BPossibleTypes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BPossibleTypes))
      return false;
    var tmp0_other_with_cast = other instanceof BPossibleTypes ? other : THROW_CCE();
    if (!equals(this.e2d_1, tmp0_other_with_cast.e2d_1))
      return false;
    return true;
  };
  function possibleTypes(typenames) {
    return new Element(new BPossibleTypes(toSet_0(typenames)));
  }
  function BVariable(name) {
    BTerm.call(this);
    this.f2d_1 = name;
  }
  BVariable.prototype.toString = function () {
    return 'BVariable(name=' + this.f2d_1 + ')';
  };
  BVariable.prototype.hashCode = function () {
    return getStringHashCode(this.f2d_1);
  };
  BVariable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BVariable))
      return false;
    var tmp0_other_with_cast = other instanceof BVariable ? other : THROW_CCE();
    if (!(this.f2d_1 === tmp0_other_with_cast.f2d_1))
      return false;
    return true;
  };
  function variable(name) {
    return new Element(new BVariable(name));
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
          tmp = !evaluate_0(_this__u8e3s4.h2d_1, block);
        } else {
          if (tmp0_subject instanceof Or) {
            var tmp$ret$0;
            $l$block_0: {
              // Inline function 'kotlin.collections.any' call
              var tmp0_any = _this__u8e3s4.g2d_1;
              var tmp_0;
              if (isInterface(tmp0_any, Collection)) {
                tmp_0 = tmp0_any.k();
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
              var tmp0_iterator = tmp0_any.d();
              while (tmp0_iterator.l()) {
                var element = tmp0_iterator.e();
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
                var tmp1_all = _this__u8e3s4.c2d_1;
                var tmp_1;
                if (isInterface(tmp1_all, Collection)) {
                  tmp_1 = tmp1_all.k();
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  tmp$ret$2 = true;
                  break $l$block_2;
                }
                var tmp0_iterator_0 = tmp1_all.d();
                while (tmp0_iterator_0.l()) {
                  var element_0 = tmp0_iterator_0.e();
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
                tmp = block(_this__u8e3s4.d2d_1);
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
  function BLabel() {
  }
  function evaluate$lambda($variables, $adapterContext, $croppedPath, $typename) {
    return function (it) {
      var tmp0_subject = it;
      var tmp;
      if (tmp0_subject instanceof BVariable) {
        tmp = !$variables.n(it.f2d_1);
      } else {
        if (tmp0_subject instanceof BLabel) {
          tmp = $adapterContext.g29(ensureNotNull($croppedPath), it.i2d_1);
        } else {
          if (tmp0_subject instanceof BPossibleTypes) {
            tmp = contains(it.e2d_1, $typename);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      return tmp;
    };
  }
  function Key() {
    Key_instance = this;
    this.j2d_1 = (new Builder_2()).t1c();
    this.k2d_1 = (new Builder_2()).l2d(true).t1c();
  }
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function Builder_2() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.k29_1 = tmp$ret$0;
    this.l29_1 = (new Builder()).t1c();
    this.m29_1 = false;
  }
  Builder_2.prototype.m2d = function (customScalarAdapters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.addAll.<anonymous>' call
    this.k29_1.z7(customScalarAdapters.j29_1);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.l2d = function (unsafe) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.unsafe.<anonymous>' call
    this.m29_1 = unsafe;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.t1c = function () {
    return new CustomScalarAdapters(this.k29_1, this.l29_1, this.m29_1);
  };
  Builder_2.prototype.n29 = function (adapterContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.Builder.adapterContext.<anonymous>' call
    this.l29_1 = adapterContext;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  function CustomScalarAdapters(customScalarAdapters, adapterContext, unsafe) {
    Key_getInstance();
    this.h29_1 = adapterContext;
    this.i29_1 = unsafe;
    this.j29_1 = customScalarAdapters;
  }
  CustomScalarAdapters.prototype.q = function () {
    return Key_getInstance();
  };
  CustomScalarAdapters.prototype.d29 = function () {
    return (new Builder_2()).m2d(this);
  };
  function DeferredFragmentIdentifier(path, label) {
    this.q2d_1 = path;
    this.r2d_1 = label;
  }
  DeferredFragmentIdentifier.prototype.toString = function () {
    return 'DeferredFragmentIdentifier(path=' + this.q2d_1 + ', label=' + this.r2d_1 + ')';
  };
  DeferredFragmentIdentifier.prototype.hashCode = function () {
    var result = hashCode(this.q2d_1);
    result = imul(result, 31) + (this.r2d_1 == null ? 0 : getStringHashCode(this.r2d_1)) | 0;
    return result;
  };
  DeferredFragmentIdentifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeferredFragmentIdentifier))
      return false;
    var tmp0_other_with_cast = other instanceof DeferredFragmentIdentifier ? other : THROW_CCE();
    if (!equals(this.q2d_1, tmp0_other_with_cast.q2d_1))
      return false;
    if (!(this.r2d_1 == tmp0_other_with_cast.r2d_1))
      return false;
    return true;
  };
  function Location(line, column) {
    this.s2d_1 = line;
    this.t2d_1 = column;
  }
  Location.prototype.toString = function () {
    return 'Location(line = ' + this.s2d_1 + ', column = ' + this.t2d_1 + ')';
  };
  function Error_0(message, locations, path, extensions, nonStandardFields) {
    this.u2d_1 = message;
    this.v2d_1 = locations;
    this.w2d_1 = path;
    this.x2d_1 = extensions;
    this.y2d_1 = nonStandardFields;
  }
  Error_0.prototype.toString = function () {
    return 'Error(message = ' + this.u2d_1 + ', locations = ' + this.v2d_1 + ', path=' + this.w2d_1 + ', extensions = ' + this.x2d_1 + ', nonStandardFields = ' + this.y2d_1 + ')';
  };
  function Variables(valueMap) {
    this.f29_1 = valueMap;
  }
  function variables(_this__u8e3s4, customScalarAdapters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new MapJsonWriter();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.variables.<anonymous>' call
    tmp0_apply.b2a();
    _this__u8e3s4.z2d(tmp0_apply, customScalarAdapters);
    tmp0_apply.c2a();
    tmp$ret$0 = tmp0_apply;
    var tmp = tmp$ret$0.g2a();
    var valueMap = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    return new Variables(valueMap);
  }
  function Element_0() {
  }
  function Companion() {
    Companion_instance = this;
    this.q2b_1 = EmptyExecutionContext_getInstance();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ExecutionContext$plus$lambda(acc, element) {
    var removed = acc.p2d(element.q());
    var tmp;
    if (removed === EmptyExecutionContext_getInstance()) {
      tmp = element;
    } else {
      tmp = new CombinedExecutionContext(removed, element);
    }
    return tmp;
  }
  function ExecutionContext() {
  }
  function EmptyExecutionContext() {
    EmptyExecutionContext_instance = this;
  }
  EmptyExecutionContext.prototype.n2d = function (key) {
    return null;
  };
  EmptyExecutionContext.prototype.o2d = function (initial, operation) {
    return initial;
  };
  EmptyExecutionContext.prototype.a2c = function (context) {
    return context;
  };
  EmptyExecutionContext.prototype.p2d = function (key) {
    return this;
  };
  var EmptyExecutionContext_instance;
  function EmptyExecutionContext_getInstance() {
    if (EmptyExecutionContext_instance == null)
      new EmptyExecutionContext();
    return EmptyExecutionContext_instance;
  }
  function CombinedExecutionContext(left, element) {
    this.a2e_1 = left;
    this.b2e_1 = element;
  }
  CombinedExecutionContext.prototype.n2d = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur.b2e_1.n2d(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var next = cur.a2e_1;
      if (next instanceof CombinedExecutionContext) {
        cur = next;
      } else {
        return next.n2d(key);
      }
    }
  };
  CombinedExecutionContext.prototype.o2d = function (initial, operation) {
    return operation(this.a2e_1.o2d(initial, operation), this.b2e_1);
  };
  CombinedExecutionContext.prototype.p2d = function (key) {
    var tmp0_safe_receiver = this.b2e_1.n2d(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return this.a2e_1;
    }
    var newLeft = this.a2e_1.p2d(key);
    return newLeft === this.a2e_1 ? this : newLeft === EmptyExecutionContext_getInstance() ? this.b2e_1 : new CombinedExecutionContext(newLeft, this.b2e_1);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.c2e_1 = 'X-APOLLO-CAN-BE-BATCHED';
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Mutation() {
  }
  function parseJsonResponse(_this__u8e3s4, jsonReader, customScalarAdapters) {
    var variables_0 = variables(_this__u8e3s4, customScalarAdapters);
    return ResponseParser_getInstance().d2e(jsonReader, _this__u8e3s4, customScalarAdapters.d29().n29(customScalarAdapters.h29_1.d29().z28(variables_0).t1c()).t1c());
  }
  function Present(value) {
    Optional.call(this);
    this.x29_1 = value;
  }
  Present.prototype.toString = function () {
    return 'Present(value=' + this.x29_1 + ')';
  };
  Present.prototype.hashCode = function () {
    return this.x29_1 == null ? 0 : hashCode(this.x29_1);
  };
  Present.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Present))
      return false;
    var tmp0_other_with_cast = other instanceof Present ? other : THROW_CCE();
    if (!equals(this.x29_1, tmp0_other_with_cast.x29_1))
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
  Companion_1.prototype.e2e = function (value) {
    return new Present(value);
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
  function Query() {
  }
  function Subscription() {
  }
  function Upload() {
  }
  function buildGetUrl($this, serverUrl, operation, customScalarAdapters, sendApqExtensions, sendDocument) {
    return $this.l2e(serverUrl, composeGetParams($this, operation, customScalarAdapters, sendApqExtensions, sendDocument));
  }
  function composePostParams($this, writer, operation, customScalarAdapters, sendApqExtensions, query) {
    var uploads = {_v: null};
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    writer.b2a();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>' call
    writer.m2e('operationName');
    writer.p2a(operation.n2e());
    writer.m2e('variables');
    var uploadAwareWriter = new FileUploadAwareJsonWriter(writer);
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    uploadAwareWriter.b2a();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>' call
    operation.z2d(uploadAwareWriter, customScalarAdapters);
    uploadAwareWriter.c2a();
    uploads._v = uploadAwareWriter.q2e();
    if (!(query == null)) {
      writer.m2e('query');
      writer.p2a(query);
    }
    if (sendApqExtensions) {
      writer.m2e('extensions');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      writer.b2a();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>' call
      writer.m2e('persistedQuery');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      writer.b2a();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composePostParams.<anonymous>.<anonymous>.<anonymous>' call
      writer.m2e('version').r2a(1);
      writer.m2e('sha256Hash').p2a(operation.operationId());
      writer.c2a();
      writer.c2a();
    }
    writer.c2a();
    return uploads._v;
  }
  function composeGetParams($this, operation, customScalarAdapters, autoPersistQueries, sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var queryParams = tmp$ret$0;
    queryParams.v2('operationName', operation.n2e());
    var tmp$ret$2;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    var uploadAwareWriter = new FileUploadAwareJsonWriter(tmp0__anonymous__q1qw7t);
    // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
    // Inline function 'kotlin.contracts.contract' call
    uploadAwareWriter.b2a();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
    operation.z2d(uploadAwareWriter, customScalarAdapters);
    uploadAwareWriter.c2a();
    // Inline function 'kotlin.check' call
    var tmp0_check = uploadAwareWriter.q2e().k();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
      tmp$ret$1 = 'FileUpload and Http GET are not supported at the same time';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$2 = buffer.e27();
    var variables = tmp$ret$2;
    queryParams.v2('variables', variables);
    if (sendDocument) {
      queryParams.v2('query', operation.r2e());
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
      tmp1__anonymous__uwfjfc.b2a();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>' call
      tmp1__anonymous__uwfjfc.m2e('persistedQuery');
      // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
      // Inline function 'kotlin.contracts.contract' call
      tmp1__anonymous__uwfjfc.b2a();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.composeGetParams.<anonymous>.<anonymous>.<anonymous>' call
      tmp1__anonymous__uwfjfc.m2e('version').r2a(1);
      tmp1__anonymous__uwfjfc.m2e('sha256Hash').p2a(operation.operationId());
      tmp1__anonymous__uwfjfc.c2a();
      tmp1__anonymous__uwfjfc.c2a();
      tmp$ret$3 = buffer_0.e27();
      var extensions = tmp$ret$3;
      queryParams.v2('extensions', extensions);
    }
    return queryParams;
  }
  function DefaultHttpRequestComposer$Companion$buildPostBody$1($operationByteString) {
    this.u2e_1 = $operationByteString;
    this.s2e_1 = 'application/json';
    this.t2e_1 = toLong($operationByteString.c());
  }
  DefaultHttpRequestComposer$Companion$buildPostBody$1.prototype.o23 = function () {
    return this.s2e_1;
  };
  DefaultHttpRequestComposer$Companion$buildPostBody$1.prototype.g2e = function (bufferedSink) {
    bufferedSink.m27(this.u2e_1);
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.h2e_1 = 'X-APOLLO-OPERATION-ID';
    this.i2e_1 = 'X-APOLLO-OPERATION-NAME';
    this.j2e_1 = 'Accept';
    this.k2e_1 = 'multipart/mixed; deferSpec=20220824, application/json';
  }
  Companion_2.prototype.l2e = function (_this__u8e3s4, parameters) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Companion.appendQueryParameters.<anonymous>' call
    tmp0_apply.qb(_this__u8e3s4);
    var hasQuestionMark = contains$default(_this__u8e3s4, '?', false, 2, null);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.p();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.apollographql.apollo3.api.http.Companion.appendQueryParameters.<anonymous>.<anonymous>' call
      if (hasQuestionMark) {
        tmp0_apply.n5(_Char___init__impl__6a9atx(38));
      } else {
        hasQuestionMark = true;
        tmp0_apply.n5(_Char___init__impl__6a9atx(63));
      }
      tmp0_apply.qb(urlEncode(element.q()));
      tmp0_apply.n5(_Char___init__impl__6a9atx(61));
      tmp0_apply.qb(urlEncode(element.r()));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Companion_2.prototype.v2e = function (operation, customScalarAdapters, autoPersistQueries, query) {
    var uploads = {_v: null};
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.buildPostBody.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    uploads._v = composePostParams(Companion_getInstance_4(), tmp0__anonymous__q1qw7t, operation, customScalarAdapters, autoPersistQueries, query);
    tmp$ret$0 = buffer.a27();
    var operationByteString = tmp$ret$0;
    if (uploads._v.k()) {
      return new DefaultHttpRequestComposer$Companion$buildPostBody$1(operationByteString);
    } else {
      return new UploadsHttpBody(uploads._v, operationByteString);
    }
  };
  Companion_2.prototype.w2e = function (apolloRequest) {
    var operation = apolloRequest.b2c_1;
    var tmp0_elvis_lhs = apolloRequest.g2c_1;
    var sendApqExtensions = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = apolloRequest.h2c_1;
    var sendDocument = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = apolloRequest.d2c_1.n2d(Key_getInstance());
    var tmp;
    if (tmp2_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot find a ResponseAdapterCache');
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var customScalarAdapters = tmp;
    var query = sendDocument ? operation.r2e() : null;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonMap' call
    // Inline function 'kotlin.contracts.contract' call
    var writer = new MapJsonWriter();
    // Inline function 'com.apollographql.apollo3.api.http.Companion.composePayload.<anonymous>' call
    composePostParams(Companion_getInstance_4(), writer, operation, customScalarAdapters, sendApqExtensions, query);
    tmp$ret$0 = writer.g2a();
    var tmp_0 = tmp$ret$0;
    return (!(tmp_0 == null) ? isInterface(tmp_0, Map) : false) ? tmp_0 : THROW_CCE();
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DefaultHttpRequestComposer(serverUrl) {
    Companion_getInstance_4();
    this.x2e_1 = serverUrl;
  }
  DefaultHttpRequestComposer.prototype.y2e = function (apolloRequest) {
    var operation = apolloRequest.b2c_1;
    var tmp0_elvis_lhs = apolloRequest.d2c_1.n2d(Key_getInstance());
    var customScalarAdapters = tmp0_elvis_lhs == null ? Key_getInstance().j2d_1 : tmp0_elvis_lhs;
    Companion_getInstance_4();
    var tmp = new HttpHeader('X-APOLLO-OPERATION-ID', operation.operationId());
    Companion_getInstance_4();
    var tmp_0 = new HttpHeader('X-APOLLO-OPERATION-NAME', operation.n2e());
    Companion_getInstance_4();
    Companion_getInstance_4();
    var tmp_1 = listOf([tmp, tmp_0, new HttpHeader('Accept', 'multipart/mixed; deferSpec=20220824, application/json')]);
    var tmp1_elvis_lhs = apolloRequest.f2c_1;
    var requestHeaders = plus_0(tmp_1, tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = apolloRequest.g2c_1;
    var sendApqExtensions = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = apolloRequest.h2c_1;
    var sendDocument = tmp3_elvis_lhs == null ? true : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = apolloRequest.e2c_1;
    var tmp5_subject = tmp4_elvis_lhs == null ? HttpMethod_Post_getInstance() : tmp4_elvis_lhs;
    var tmp0 = tmp5_subject.w3_1;
    var tmp_2;
    switch (tmp0) {
      case 0:
        tmp_2 = (new Builder_4(HttpMethod_Get_getInstance(), buildGetUrl(Companion_getInstance_4(), this.x2e_1, operation, customScalarAdapters, sendApqExtensions, sendDocument))).d2f(requestHeaders).t1c();
        break;
      case 1:
        var query = sendDocument ? operation.r2e() : null;
        tmp_2 = (new Builder_4(HttpMethod_Post_getInstance(), this.x2e_1)).d2f(requestHeaders).e2f(Companion_getInstance_4().v2e(operation, customScalarAdapters, sendApqExtensions, query)).t1c();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_2;
  };
  function buildUploadMap($this, uploads) {
    var tmp$ret$3;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.buildUploadMap.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp0_mapIndexed = uploads.p();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_mapIndexed, 10));
    var index = 0;
    var tmp0_iterator = tmp0_mapIndexed.d();
    while (tmp0_iterator.l()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.buildUploadMap.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
      tmp$ret$0 = to(tmp1__anonymous__uwfjfc.toString(), listOf_0(item.q()));
      tmp0_mapIndexedTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapIndexedTo;
    tmp$ret$2 = tmp$ret$1;
    writeAny(tmp0__anonymous__q1qw7t, toMap(tmp$ret$2));
    tmp$ret$3 = buffer.a27();
    return tmp$ret$3;
  }
  function writeBoundaries(_this__u8e3s4, $this, writeUploadContents) {
    _this__u8e3s4.p27('--' + $this.h2f_1 + '\r\n');
    _this__u8e3s4.p27('Content-Disposition: form-data; name="operations"\r\n');
    _this__u8e3s4.p27('Content-Type: application/json\r\n');
    _this__u8e3s4.p27('Content-Length: ' + $this.g2f_1.c() + '\r\n');
    _this__u8e3s4.p27('\r\n');
    _this__u8e3s4.m27($this.g2f_1);
    var uploadsMap = buildUploadMap($this, $this.f2f_1);
    _this__u8e3s4.p27('\r\n--' + $this.h2f_1 + '\r\n');
    _this__u8e3s4.p27('Content-Disposition: form-data; name="map"\r\n');
    _this__u8e3s4.p27('Content-Type: application/json\r\n');
    _this__u8e3s4.p27('Content-Length: ' + uploadsMap.c() + '\r\n');
    _this__u8e3s4.p27('\r\n');
    _this__u8e3s4.m27(uploadsMap);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var tmp0_forEachIndexed = $this.f2f_1.d2();
    var index = 0;
    var tmp0_iterator = tmp0_forEachIndexed.d();
    while (tmp0_iterator.l()) {
      var item = tmp0_iterator.e();
      // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.writeBoundaries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
      _this__u8e3s4.p27('\r\n--' + $this.h2f_1 + '\r\n');
      _this__u8e3s4.p27('Content-Disposition: form-data; name="' + tmp1__anonymous__uwfjfc + '"');
      if (!(item.f2e() == null)) {
        _this__u8e3s4.p27('; filename="' + item.f2e() + '"');
      }
      _this__u8e3s4.p27('\r\n');
      _this__u8e3s4.p27('Content-Type: ' + item.o23() + '\r\n');
      var contentLength = item.p23();
      if (!contentLength.equals(new Long(-1, -1))) {
        _this__u8e3s4.p27('Content-Length: ' + toString(contentLength) + '\r\n');
      }
      _this__u8e3s4.p27('\r\n');
      if (writeUploadContents) {
        item.g2e(_this__u8e3s4);
      }
    }
    _this__u8e3s4.p27('\r\n--' + $this.h2f_1 + '--\r\n');
  }
  function UploadsHttpBody$contentLength$delegate$lambda(this$0) {
    return function () {
      var countingSink = new CountingSink(blackholeSink());
      var bufferedCountingSink = buffer(countingSink);
      writeBoundaries(bufferedCountingSink, this$0, false);
      bufferedCountingSink.da();
      var tmp = countingSink.l2f_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp0_sumOf = this$0.f2f_1.d2();
      var sum = new Long(0, 0);
      var tmp0_iterator = tmp0_sumOf.d();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.e();
        var tmp_0 = sum;
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.UploadsHttpBody.contentLength$delegate.<anonymous>.<anonymous>' call
        tmp$ret$0 = element.p23();
        sum = tmp_0.r5(tmp$ret$0);
      }
      tmp$ret$1 = sum;
      var result = tmp.r5(tmp$ret$1);
      return result;
    };
  }
  function UploadsHttpBody(uploads, operationByteString) {
    this.f2f_1 = uploads;
    this.g2f_1 = operationByteString;
    this.h2f_1 = uuid4().toString();
    this.i2f_1 = 'multipart/form-data; boundary=' + this.h2f_1;
    var tmp = this;
    tmp.j2f_1 = lazy(UploadsHttpBody$contentLength$delegate$lambda(this));
  }
  UploadsHttpBody.prototype.o23 = function () {
    return this.i2f_1;
  };
  UploadsHttpBody.prototype.g2e = function (bufferedSink) {
    writeBoundaries(bufferedSink, this, true);
  };
  function CountingSink(delegate) {
    this.k2f_1 = delegate;
    this.l2f_1 = new Long(0, 0);
  }
  CountingSink.prototype.v15 = function () {
    this.k2f_1.v15();
  };
  CountingSink.prototype.da = function () {
    this.k2f_1.da();
  };
  CountingSink.prototype.b25 = function (source, byteCount) {
    this.k2f_1.b25(source, byteCount);
    var tmp0_this = this;
    tmp0_this.l2f_1 = tmp0_this.l2f_1.r5(byteCount);
  };
  function HttpHeader(name, value) {
    this.m2f_1 = name;
    this.n2f_1 = value;
  }
  HttpHeader.prototype.toString = function () {
    return 'HttpHeader(name=' + this.m2f_1 + ', value=' + this.n2f_1 + ')';
  };
  HttpHeader.prototype.hashCode = function () {
    var result = getStringHashCode(this.m2f_1);
    result = imul(result, 31) + getStringHashCode(this.n2f_1) | 0;
    return result;
  };
  HttpHeader.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpHeader))
      return false;
    var tmp0_other_with_cast = other instanceof HttpHeader ? other : THROW_CCE();
    if (!(this.m2f_1 === tmp0_other_with_cast.m2f_1))
      return false;
    if (!(this.n2f_1 === tmp0_other_with_cast.n2f_1))
      return false;
    return true;
  };
  var HttpMethod_Get_instance;
  var HttpMethod_Post_instance;
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
  function _get_hasBody__xziwnf($this) {
    return !($this.p2f_1 == null) ? true : !($this.q2f_1 == null);
  }
  function Builder_3(statusCode) {
    this.o2f_1 = statusCode;
    this.p2f_1 = null;
    this.q2f_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.r2f_1 = tmp$ret$0;
  }
  Builder_3.prototype.s2f = function (bodySource) {
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
    this.p2f_1 = bodySource;
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  Builder_3.prototype.d2f = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeaders.<anonymous>' call
    this.r2f_1.j(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.t1c = function () {
    return new HttpResponse(this.o2f_1, this.r2f_1, this.p2f_1, this.q2f_1);
  };
  function HttpResponse(statusCode, headers, bodySource, bodyString) {
    this.t2f_1 = statusCode;
    this.u2f_1 = headers;
    this.v2f_1 = bodySource;
    this.w2f_1 = bodyString;
  }
  HttpResponse.prototype.x2f = function () {
    var tmp1_elvis_lhs = this.v2f_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.w2f_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.HttpResponse.<get-body>.<anonymous>' call
        tmp$ret$0 = (new Buffer()).m27(tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  function Builder_4(method, url) {
    this.z2e_1 = method;
    this.a2f_1 = url;
    this.b2f_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.c2f_1 = tmp$ret$0;
  }
  Builder_4.prototype.e2f = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.body.<anonymous>' call
    this.b2f_1 = body;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.d2f = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.http.Builder.addHeaders.<anonymous>' call
    this.c2f_1.j(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.t1c = function () {
    return new HttpRequest(this.z2e_1, this.a2f_1, this.c2f_1, this.b2f_1);
  };
  function HttpRequest(method, url, headers, body) {
    this.y2f_1 = method;
    this.z2f_1 = url;
    this.a2g_1 = headers;
    this.b2g_1 = body;
  }
  function HttpMethod_Get_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_Get_instance;
  }
  function HttpMethod_Post_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_Post_instance;
  }
  function valueOf(_this__u8e3s4, name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.d();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.http.valueOf.<anonymous>' call
        tmp$ret$0 = equals_0(element.m2f_1, name, true);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2f_1;
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
        tmp0_apply.qb(percentEncode(element));
      } else {
        tmp0_apply.n5(element);
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
    if (_this__u8e3s4.r29().equals(Token_NULL_getInstance())) {
      _this__u8e3s4.c2g();
      return emptyList();
    }
    _this__u8e3s4.i2a();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    while (_this__u8e3s4.l()) {
      list.a(readError(_this__u8e3s4, $this));
    }
    _this__u8e3s4.j2a();
    return list;
  }
  function readError(_this__u8e3s4, $this) {
    var message = '';
    var locations = null;
    var path = null;
    var extensions = null;
    var nonStandardFields = null;
    _this__u8e3s4.b2a();
    while (_this__u8e3s4.l()) {
      var name = _this__u8e3s4.d2g();
      switch (name) {
        case 'message':
          var tmp0_elvis_lhs = _this__u8e3s4.n2a();
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
          tmp0_set.v2(name, tmp1_set);

          break;
      }
    }
    _this__u8e3s4.c2a();
    return new Error_0(message, locations, path, extensions, nonStandardFields);
  }
  function readPath(_this__u8e3s4, $this) {
    if (_this__u8e3s4.r29().equals(Token_NULL_getInstance())) {
      return _this__u8e3s4.c2g();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    _this__u8e3s4.i2a();
    while (_this__u8e3s4.l()) {
      var tmp0_subject = _this__u8e3s4.r29();
      var tmp0 = tmp0_subject.w3_1;
      switch (tmp0) {
        case 6:
        case 7:
          list.a(_this__u8e3s4.w2());
          ;
          break;
        default:
          list.a(ensureNotNull(_this__u8e3s4.n2a()));
          ;
          break;
      }
    }
    _this__u8e3s4.j2a();
    return list;
  }
  function readErrorLocations(_this__u8e3s4, $this) {
    if (_this__u8e3s4.r29().equals(Token_NULL_getInstance())) {
      return _this__u8e3s4.c2g();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    _this__u8e3s4.i2a();
    while (_this__u8e3s4.l()) {
      list.a(readErrorLocation(_this__u8e3s4, $this));
    }
    _this__u8e3s4.j2a();
    return list;
  }
  function readErrorLocation(_this__u8e3s4, $this) {
    var line = -1;
    var column = -1;
    _this__u8e3s4.b2a();
    while (_this__u8e3s4.l()) {
      var tmp0_subject = _this__u8e3s4.d2g();
      switch (tmp0_subject) {
        case 'line':
          line = _this__u8e3s4.w2();
          break;
        case 'column':
          column = _this__u8e3s4.w2();
          break;
        default:
          _this__u8e3s4.q29();
          ;
          break;
      }
    }
    _this__u8e3s4.c2a();
    return new Location(line, column);
  }
  function ResponseParser() {
    ResponseParser_instance = this;
  }
  ResponseParser.prototype.d2e = function (jsonReader, operation, customScalarAdapters) {
    var tmp$ret$1;
    // Inline function 'okio.use' call
    var result = null;
    var thrown = null;
    try {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.internal.ResponseParser.parse.<anonymous>' call
      jsonReader.b2a();
      var data = null;
      var errors = null;
      var extensions = null;
      while (jsonReader.l()) {
        var tmp0_subject = jsonReader.d2g();
        switch (tmp0_subject) {
          case 'data':
            data = nullable(operation.e2g()).p29(jsonReader, customScalarAdapters);
            break;
          case 'errors':
            errors = readErrors(jsonReader, ResponseParser_getInstance());
            break;
          case 'extensions':
            var tmp = readAny(jsonReader);
            extensions = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : null;
            break;
          default:
            jsonReader.q29();
            ;
            break;
        }
      }
      jsonReader.c2a();
      var tmp1_requestUuid = uuid4();
      var tmp2_data = data;
      tmp$ret$0 = (new Builder_1(operation, tmp1_requestUuid, tmp2_data)).r2c(errors).s2c(extensions).t1c();
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
        tmp0_safe_receiver.v15();
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
  var ResponseParser_instance;
  function ResponseParser_getInstance() {
    if (ResponseParser_instance == null)
      new ResponseParser();
    return ResponseParser_instance;
  }
  function hexString(_this__u8e3s4, $this) {
    var value = _this__u8e3s4;
    return '' + new Char(charSequenceGet('0123456789abcdef', value >>> 4 | 0)) + new Char(charSequenceGet('0123456789abcdef', value & 15));
  }
  function _get_separator__ee6j2k($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = $this.g2g_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (tmp$ret$0) {
      tmp = ':';
    } else {
      tmp = ': ';
    }
    return tmp;
  }
  function open($this, empty, openBracket) {
    beforeValue($this);
    pushScope($this, empty);
    $this.k2g_1[$this.h2g_1 - 1 | 0] = 0;
    $this.f2g_1.p27(openBracket);
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
    var tmp1_check = $this.m2g_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.close.<anonymous>' call
      tmp$ret$1 = 'Dangling name: ' + $this.m2g_1;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp0_this = $this;
    var tmp1 = tmp0_this.h2g_1;
    tmp0_this.h2g_1 = tmp1 - 1 | 0;
    $this.j2g_1[$this.h2g_1] = null;
    var tmp2_array = $this.k2g_1;
    var tmp3_index0 = $this.h2g_1 - 1 | 0;
    var tmp4 = tmp2_array[tmp3_index0];
    tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
    if (context === nonempty) {
      newline($this);
    }
    $this.f2g_1.p27(closeBracket);
    return $this;
  }
  function writeDeferredName($this) {
    if (!($this.m2g_1 == null)) {
      beforeName($this);
      Companion_getInstance_5().p2g($this.f2g_1, ensureNotNull($this.m2g_1));
      $this.m2g_1 = null;
    }
  }
  function newline($this) {
    if ($this.g2g_1 == null) {
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    $this.f2g_1.r27(tmp$ret$0);
    var i = 1;
    var size = $this.h2g_1;
    while (i < size) {
      $this.f2g_1.p27($this.g2g_1);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
    }
  }
  function beforeName($this) {
    var context = peekScope($this);
    JsonScope_getInstance();
    if (context === 5) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 44;
      $this.f2g_1.r27(tmp$ret$0);
    } else {
      JsonScope_getInstance();
      var tmp0_check = context === 3;
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
    JsonScope_getInstance();
    replaceTop($this, 4);
  }
  function beforeValue($this) {
    var tmp0_subject = peekScope($this);
    JsonScope_getInstance();
    if (tmp0_subject === 7) {
      // Inline function 'kotlin.check' call
      var tmp0_check = $this.l2g_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.beforeValue.<anonymous>' call
        tmp$ret$0 = 'JSON must have only one top-level value.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      JsonScope_getInstance();
      replaceTop($this, 7);
    } else {
      JsonScope_getInstance();
      if (tmp0_subject === 6) {
        JsonScope_getInstance();
        replaceTop($this, 7);
      } else {
        JsonScope_getInstance();
        if (tmp0_subject === 1) {
          JsonScope_getInstance();
          replaceTop($this, 2);
          newline($this);
        } else {
          JsonScope_getInstance();
          if (tmp0_subject === 2) {
            var tmp$ret$1;
            // Inline function 'kotlin.code' call
            tmp$ret$1 = 44;
            $this.f2g_1.r27(tmp$ret$1);
            newline($this);
          } else {
            JsonScope_getInstance();
            if (tmp0_subject === 4) {
              $this.f2g_1.p27(_get_separator__ee6j2k($this));
              JsonScope_getInstance();
              replaceTop($this, 5);
            } else {
              throw IllegalStateException_init_$Create$('Nesting problem.');
            }
          }
        }
      }
    }
  }
  function peekScope($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !($this.h2g_1 === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.peekScope.<anonymous>' call
      tmp$ret$0 = 'JsonWriter is closed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this.i2g_1[$this.h2g_1 - 1 | 0];
  }
  function pushScope($this, newTop) {
    if ($this.h2g_1 === $this.i2g_1.length) {
      throw new JsonDataException('Nesting too deep at ' + $this.q2g() + ': circular reference?');
    }
    var tmp0_this = $this;
    var tmp1 = tmp0_this.h2g_1;
    tmp0_this.h2g_1 = tmp1 + 1 | 0;
    $this.i2g_1[tmp1] = newTop;
  }
  function replaceTop($this, topOfStack) {
    $this.i2g_1[$this.h2g_1 - 1 | 0] = topOfStack;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.n2g_1 = '0123456789abcdef';
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
        tmp0_apply[i] = '\\u00' + hexString(toByte(i), Companion_getInstance_5());
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
    tmp.o2g_1 = tmp$ret$7;
  }
  Companion_3.prototype.p2g = function (sink, value) {
    var replacements = this.o2g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 34;
    sink.r27(tmp$ret$0);
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
          sink.q27(value, last, i);
        }
        sink.p27(replacement);
        last = i + 1 | 0;
      }
       while (inductionVariable < length);
    if (last < length) {
      sink.q27(value, last, length);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    tmp$ret$3 = 34;
    sink.r27(tmp$ret$3);
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function BufferedSinkJsonWriter(sink, indent) {
    Companion_getInstance_5();
    this.f2g_1 = sink;
    this.g2g_1 = indent;
    this.h2g_1 = 0;
    var tmp = this;
    Companion_getInstance_6();
    tmp.i2g_1 = new Int32Array(256);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_6();
    var tmp0_arrayOfNulls = 256;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.j2g_1 = tmp$ret$0;
    var tmp_1 = this;
    Companion_getInstance_6();
    tmp_1.k2g_1 = new Int32Array(256);
    this.l2g_1 = false;
    this.m2g_1 = null;
    JsonScope_getInstance();
    pushScope(this, 6);
  }
  BufferedSinkJsonWriter.prototype.q2g = function () {
    var tmp = JsonScope_getInstance().z2g(this.h2g_1, this.i2g_1, this.j2g_1, this.k2g_1);
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  };
  BufferedSinkJsonWriter.prototype.i2a = function () {
    writeDeferredName(this);
    JsonScope_getInstance();
    return open(this, 1, '[');
  };
  BufferedSinkJsonWriter.prototype.j2a = function () {
    JsonScope_getInstance();
    JsonScope_getInstance();
    return close(this, 1, 2, ']');
  };
  BufferedSinkJsonWriter.prototype.b2a = function () {
    writeDeferredName(this);
    JsonScope_getInstance();
    return open(this, 3, '{');
  };
  BufferedSinkJsonWriter.prototype.c2a = function () {
    JsonScope_getInstance();
    JsonScope_getInstance();
    return close(this, 3, 5, '}');
  };
  BufferedSinkJsonWriter.prototype.m2e = function (name) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.h2g_1 === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.name.<anonymous>' call
      tmp$ret$0 = 'JsonWriter is closed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.m2g_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.name.<anonymous>' call
      tmp$ret$1 = 'Nesting problem.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.m2g_1 = name;
    this.j2g_1[this.h2g_1 - 1 | 0] = name;
    return this;
  };
  BufferedSinkJsonWriter.prototype.p2a = function (value) {
    writeDeferredName(this);
    beforeValue(this);
    Companion_getInstance_5().p2g(this.f2g_1, value);
    var tmp0_array = this.k2g_1;
    var tmp1_index0 = this.h2g_1 - 1 | 0;
    var tmp2 = tmp0_array[tmp1_index0];
    tmp0_array[tmp1_index0] = tmp2 + 1 | 0;
    return this;
  };
  BufferedSinkJsonWriter.prototype.u29 = function () {
    return this.a2h('null');
  };
  BufferedSinkJsonWriter.prototype.b2b = function (value) {
    return this.a2h(value ? 'true' : 'false');
  };
  BufferedSinkJsonWriter.prototype.u2a = function (value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(!this.l2g_1 ? isNaN_0(value) ? true : isInfinite(value) : false);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.value.<anonymous>' call
      tmp$ret$0 = 'Numeric values must be finite, but was ' + value;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.a2h(value.toString());
  };
  BufferedSinkJsonWriter.prototype.r2a = function (value) {
    return this.a2h(value.toString());
  };
  BufferedSinkJsonWriter.prototype.y2a = function (value) {
    return this.a2h(value.toString());
  };
  BufferedSinkJsonWriter.prototype.b2h = function (value) {
    return this.a2h(value.c2h_1);
  };
  BufferedSinkJsonWriter.prototype.g2b = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSinkJsonWriter.value.<anonymous>' call
    this.u29();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  BufferedSinkJsonWriter.prototype.a2h = function (value) {
    writeDeferredName(this);
    beforeValue(this);
    this.f2g_1.p27(value);
    var tmp0_array = this.k2g_1;
    var tmp1_index0 = this.h2g_1 - 1 | 0;
    var tmp2 = tmp0_array[tmp1_index0];
    tmp0_array[tmp1_index0] = tmp2 + 1 | 0;
    return this;
  };
  BufferedSinkJsonWriter.prototype.v15 = function () {
    this.f2g_1.v15();
    var size = this.h2g_1;
    var tmp;
    if (size > 1) {
      tmp = true;
    } else {
      var tmp_0;
      if (size === 1) {
        var tmp_1 = this.i2g_1[size - 1 | 0];
        JsonScope_getInstance();
        tmp_0 = !(tmp_1 === 7);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    if (tmp) {
      throw IOException_init_$Create$('Incomplete document');
    }
    this.h2g_1 = 0;
  };
  function doPeek($this) {
    var peekStack = $this.j2h_1[$this.k2h_1 - 1 | 0];
    var tmp0_subject = peekStack;
    JsonScope_getInstance();
    if (tmp0_subject === 1) {
      var tmp = $this.k2h_1 - 1 | 0;
      JsonScope_getInstance();
      $this.j2h_1[tmp] = 2;
    } else {
      JsonScope_getInstance();
      if (tmp0_subject === 2) {
        var c = nextNonWhitespace($this, true);
        $this.e2h_1.b1h();
        var tmp1_subject = numberToChar(c);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93)))) {
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          Companion_getInstance_6();
          var tmp0_also = 4;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
          $this.f2h_1 = tmp0_also;
          tmp$ret$0 = tmp0_also;
          return tmp$ret$0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(59)))) {
          checkLenient($this);
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(44))))
        ;
        else
          throw syntaxError($this, 'Unterminated array');
      } else {
        var tmp_0;
        JsonScope_getInstance();
        if (tmp0_subject === 3) {
          tmp_0 = true;
        } else {
          JsonScope_getInstance();
          tmp_0 = tmp0_subject === 5;
        }
        if (tmp_0) {
          var tmp_1 = $this.k2h_1 - 1 | 0;
          JsonScope_getInstance();
          $this.j2h_1[tmp_1] = 4;
          JsonScope_getInstance();
          if (peekStack === 5) {
            var c_0 = nextNonWhitespace($this, true);
            $this.e2h_1.b1h();
            var tmp2_subject = numberToChar(c_0);
            if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(125)))) {
              var tmp$ret$1;
              // Inline function 'kotlin.also' call
              Companion_getInstance_6();
              var tmp1_also = 2;
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
              $this.f2h_1 = tmp1_also;
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
          var tmp_2;
          if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(34)))) {
            $this.e2h_1.b1h();
            var tmp$ret$2;
            // Inline function 'kotlin.also' call
            Companion_getInstance_6();
            var tmp2_also = 13;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
            $this.f2h_1 = tmp2_also;
            tmp$ret$2 = tmp2_also;
            tmp_2 = tmp$ret$2;
          } else if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(39)))) {
            $this.e2h_1.b1h();
            checkLenient($this);
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            Companion_getInstance_6();
            var tmp3_also = 12;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
            $this.f2h_1 = tmp3_also;
            tmp$ret$3 = tmp3_also;
            tmp_2 = tmp$ret$3;
          } else if (equals(new Char(tmp3_subject), new Char(_Char___init__impl__6a9atx(125)))) {
            var tmp_3;
            JsonScope_getInstance();
            if (!(peekStack === 5)) {
              $this.e2h_1.b1h();
              var tmp$ret$4;
              // Inline function 'kotlin.also' call
              Companion_getInstance_6();
              var tmp4_also = 2;
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
              $this.f2h_1 = tmp4_also;
              tmp$ret$4 = tmp4_also;
              tmp_3 = tmp$ret$4;
            } else {
              throw syntaxError($this, 'Expected name');
            }
            tmp_2 = tmp_3;
          } else {
            checkLenient($this);
            var tmp_4;
            if (isLiteral($this, numberToChar(c_1))) {
              var tmp$ret$5;
              // Inline function 'kotlin.also' call
              Companion_getInstance_6();
              var tmp5_also = 14;
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
              $this.f2h_1 = tmp5_also;
              tmp$ret$5 = tmp5_also;
              tmp_4 = tmp$ret$5;
            } else {
              throw syntaxError($this, 'Expected name');
            }
            tmp_2 = tmp_4;
          }
          return tmp_2;
        } else {
          JsonScope_getInstance();
          if (tmp0_subject === 4) {
            var tmp_5 = $this.k2h_1 - 1 | 0;
            JsonScope_getInstance();
            $this.j2h_1[tmp_5] = 5;
            var c_2 = nextNonWhitespace($this, true);
            $this.e2h_1.b1h();
            var tmp4_subject = numberToChar(c_2);
            if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(58)))) {
            } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(61)))) {
              checkLenient($this);
              var tmp_6;
              if ($this.d2h_1.x26(new Long(1, 0))) {
                var tmp_7 = $this.e2h_1.g26(new Long(0, 0));
                var tmp$ret$6;
                // Inline function 'kotlin.code' call
                tmp$ret$6 = 62;
                tmp_6 = tmp_7 === toByte(tmp$ret$6);
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                $this.e2h_1.b1h();
              }
            } else
              throw syntaxError($this, "Expected ':'");
          } else {
            JsonScope_getInstance();
            if (tmp0_subject === 6) {
              var tmp_8 = $this.k2h_1 - 1 | 0;
              JsonScope_getInstance();
              $this.j2h_1[tmp_8] = 7;
            } else {
              JsonScope_getInstance();
              if (tmp0_subject === 7) {
                var c_3 = nextNonWhitespace($this, false);
                if (c_3 === -1) {
                  var tmp$ret$7;
                  // Inline function 'kotlin.also' call
                  Companion_getInstance_6();
                  var tmp6_also = 17;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
                  $this.f2h_1 = tmp6_also;
                  tmp$ret$7 = tmp6_also;
                  return tmp$ret$7;
                } else {
                  checkLenient($this);
                }
              } else {
                JsonScope_getInstance();
                var tmp7_check = !(peekStack === 8);
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp7_check) {
                  var tmp$ret$8;
                  // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
                  tmp$ret$8 = 'JsonReader is closed';
                  var message = tmp$ret$8;
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
      }
    }
    var c_4 = nextNonWhitespace($this, true);
    var tmp5_subject = numberToChar(c_4);
    if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(93)))) {
      JsonScope_getInstance();
      if (peekStack === 1) {
        $this.e2h_1.b1h();
        var tmp$ret$9;
        // Inline function 'kotlin.also' call
        Companion_getInstance_6();
        var tmp8_also = 4;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.f2h_1 = tmp8_also;
        tmp$ret$9 = tmp8_also;
        return tmp$ret$9;
      }
      var tmp_9;
      var tmp_10;
      JsonScope_getInstance();
      if (peekStack === 1) {
        tmp_10 = true;
      } else {
        JsonScope_getInstance();
        tmp_10 = peekStack === 2;
      }
      if (tmp_10) {
        checkLenient($this);
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        Companion_getInstance_6();
        var tmp9_also = 7;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.f2h_1 = tmp9_also;
        tmp$ret$10 = tmp9_also;
        tmp_9 = tmp$ret$10;
      } else {
        throw syntaxError($this, 'Unexpected value');
      }
      return tmp_9;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp_11;
      var tmp_12;
      JsonScope_getInstance();
      if (peekStack === 1) {
        tmp_12 = true;
      } else {
        JsonScope_getInstance();
        tmp_12 = peekStack === 2;
      }
      if (tmp_12) {
        checkLenient($this);
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        Companion_getInstance_6();
        var tmp10_also = 7;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
        $this.f2h_1 = tmp10_also;
        tmp$ret$11 = tmp10_also;
        tmp_11 = tmp$ret$11;
      } else {
        throw syntaxError($this, 'Unexpected value');
      }
      return tmp_11;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(39)))) {
      checkLenient($this);
      $this.e2h_1.b1h();
      var tmp$ret$12;
      // Inline function 'kotlin.also' call
      Companion_getInstance_6();
      var tmp11_also = 8;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.f2h_1 = tmp11_also;
      tmp$ret$12 = tmp11_also;
      return tmp$ret$12;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(34)))) {
      $this.e2h_1.b1h();
      var tmp$ret$13;
      // Inline function 'kotlin.also' call
      Companion_getInstance_6();
      var tmp12_also = 9;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.f2h_1 = tmp12_also;
      tmp$ret$13 = tmp12_also;
      return tmp$ret$13;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(91)))) {
      $this.e2h_1.b1h();
      var tmp$ret$14;
      // Inline function 'kotlin.also' call
      Companion_getInstance_6();
      var tmp13_also = 3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.f2h_1 = tmp13_also;
      tmp$ret$14 = tmp13_also;
      return tmp$ret$14;
    } else if (equals(new Char(tmp5_subject), new Char(_Char___init__impl__6a9atx(123)))) {
      $this.e2h_1.b1h();
      var tmp$ret$15;
      // Inline function 'kotlin.also' call
      Companion_getInstance_6();
      var tmp14_also = 1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
      $this.f2h_1 = tmp14_also;
      tmp$ret$15 = tmp14_also;
      return tmp$ret$15;
    }
    var result = peekKeyword($this);
    var tmp_13 = result;
    Companion_getInstance_6();
    if (!(tmp_13 === 0)) {
      return result;
    }
    result = peekNumber($this);
    var tmp_14 = result;
    Companion_getInstance_6();
    if (!(tmp_14 === 0)) {
      return result;
    }
    if (!isLiteral($this, numberToChar($this.e2h_1.g26(new Long(0, 0))))) {
      throw syntaxError($this, 'Expected value');
    }
    checkLenient($this);
    var tmp$ret$16;
    // Inline function 'kotlin.also' call
    Companion_getInstance_6();
    var tmp15_also = 10;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.doPeek.<anonymous>' call
    $this.f2h_1 = tmp15_also;
    tmp$ret$16 = tmp15_also;
    return tmp$ret$16;
  }
  function peekKeyword($this) {
    var keyword;
    var keywordUpper;
    var peeking;
    var tmp0_subject = $this.e2h_1.g26(new Long(0, 0));
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
      Companion_getInstance_6();
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
        Companion_getInstance_6();
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
          Companion_getInstance_6();
          peeking = 7;
        } else {
          Companion_getInstance_6();
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
        if (!$this.d2h_1.x26(numberToLong(i).r5(new Long(1, 0)))) {
          Companion_getInstance_6();
          return 0;
        }
        var c = $this.e2h_1.g26(toLong(i));
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
          Companion_getInstance_6();
          return 0;
        }
      }
       while (inductionVariable < length);
    if ($this.d2h_1.x26(numberToLong(length).r5(new Long(1, 0))) ? isLiteral($this, numberToChar($this.e2h_1.g26(toLong(length)))) : false) {
      Companion_getInstance_6();
      return 0;
    }
    $this.e2h_1.e25(toLong(length));
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekKeyword.<anonymous>' call
    $this.f2h_1 = peeking;
    tmp$ret$8 = peeking;
    return tmp$ret$8;
  }
  function peekNumber($this) {
    var value = new Long(0, 0);
    var negative = false;
    var fitsInLong = true;
    Companion_getInstance_6();
    var last = 0;
    var i = 0;
    loop: while ($this.d2h_1.x26(numberToLong(i).r5(new Long(1, 0)))) {
      var c = $this.e2h_1.g26(toLong(i));
      var tmp0_subject = numberToChar(c);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(45)))) {
        var tmp1_subject = last;
        Companion_getInstance_6();
        if (tmp1_subject === 0) {
          negative = true;
          Companion_getInstance_6();
          last = 1;
        } else {
          Companion_getInstance_6();
          if (tmp1_subject === 5) {
            Companion_getInstance_6();
            last = 6;
          } else {
            Companion_getInstance_6();
            return 0;
          }
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(43)))) {
        var tmp = last;
        Companion_getInstance_6();
        if (tmp === 5) {
          Companion_getInstance_6();
          last = 6;
        } else {
          Companion_getInstance_6();
          return 0;
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(101))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(69)))) {
        var tmp_0;
        var tmp_1 = last;
        Companion_getInstance_6();
        if (tmp_1 === 2) {
          tmp_0 = true;
        } else {
          var tmp_2 = last;
          Companion_getInstance_6();
          tmp_0 = tmp_2 === 4;
        }
        if (tmp_0) {
          Companion_getInstance_6();
          last = 5;
        } else {
          Companion_getInstance_6();
          return 0;
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(46)))) {
        var tmp_3 = last;
        Companion_getInstance_6();
        if (tmp_3 === 2) {
          Companion_getInstance_6();
          last = 3;
        } else {
          Companion_getInstance_6();
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
            Companion_getInstance_6();
            return 0;
          }
        }
        var tmp2_subject = last;
        var tmp_7;
        Companion_getInstance_6();
        if (tmp2_subject === 1) {
          tmp_7 = true;
        } else {
          Companion_getInstance_6();
          tmp_7 = tmp2_subject === 0;
        }
        if (tmp_7) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          value = toLong(c - toByte(tmp$ret$2)).o5();
          Companion_getInstance_6();
          last = 2;
        } else {
          Companion_getInstance_6();
          if (tmp2_subject === 2) {
            if (value.equals(new Long(0, 0))) {
              Companion_getInstance_6();
              return 0;
            }
            var tmp$ret$5;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$3;
            // Inline function 'kotlin.Long.times' call
            var tmp0_times = value;
            tmp$ret$3 = tmp0_times.q5(new Long(10, 0));
            var tmp1_minus = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 48;
            var tmp2_minus = c - toByte(tmp$ret$4);
            tmp$ret$5 = tmp1_minus.s5(toLong(tmp2_minus));
            var newValue = tmp$ret$5;
            var tmp_8;
            var tmp_9 = fitsInLong;
            var tmp_10 = value;
            Companion_getInstance_6();
            if (!!(tmp_9 & tmp_10.v(new Long(858993460, -214748365)) > 0)) {
              tmp_8 = true;
            } else {
              var tmp_11;
              var tmp_12 = value;
              Companion_getInstance_6();
              if (tmp_12.equals(new Long(858993460, -214748365))) {
                tmp_11 = newValue.v(value) < 0;
              } else {
                tmp_11 = false;
              }
              tmp_8 = tmp_11;
            }
            fitsInLong = tmp_8;
            value = newValue;
          } else {
            Companion_getInstance_6();
            if (tmp2_subject === 3) {
              Companion_getInstance_6();
              last = 4;
            } else {
              var tmp_13;
              Companion_getInstance_6();
              if (tmp2_subject === 5) {
                tmp_13 = true;
              } else {
                Companion_getInstance_6();
                tmp_13 = tmp2_subject === 6;
              }
              if (tmp_13) {
                Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp_17 === 2) {
      tmp_16 = fitsInLong;
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      var tmp_18;
      var tmp_19 = value;
      Companion_getInstance();
      if (!tmp_19.equals(new Long(0, -2147483648))) {
        tmp_18 = true;
      } else {
        tmp_18 = negative;
      }
      tmp_15 = tmp_18;
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      $this.g2h_1 = negative ? value : value.o5();
      $this.e2h_1.e25(toLong(i));
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      Companion_getInstance_6();
      var tmp3_also = 15;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekNumber.<anonymous>' call
      $this.f2h_1 = tmp3_also;
      tmp$ret$6 = tmp3_also;
      tmp_14 = tmp$ret$6;
    } else {
      var tmp_20;
      var tmp_21;
      var tmp_22 = last;
      Companion_getInstance_6();
      if (tmp_22 === 2) {
        tmp_21 = true;
      } else {
        var tmp_23 = last;
        Companion_getInstance_6();
        tmp_21 = tmp_23 === 4;
      }
      if (tmp_21) {
        tmp_20 = true;
      } else {
        var tmp_24 = last;
        Companion_getInstance_6();
        tmp_20 = tmp_24 === 7;
      }
      if (tmp_20) {
        $this.h2h_1 = i;
        var tmp$ret$7;
        // Inline function 'kotlin.also' call
        Companion_getInstance_6();
        var tmp4_also = 16;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peekNumber.<anonymous>' call
        $this.f2h_1 = tmp4_also;
        tmp$ret$7 = tmp4_also;
        tmp_14 = tmp$ret$7;
      } else {
        Companion_getInstance_6();
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
      var index = $this.d2h_1.x27(runTerminator);
      if (index.equals(new Long(-1, -1)))
        throw syntaxError($this, 'Unterminated string');
      var tmp = $this.e2h_1.g26(index);
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 92;
      if (tmp === toByte(tmp$ret$0)) {
        if (builder == null)
          builder = StringBuilder_init_$Create$();
        builder.qb($this.e2h_1.h26(index));
        $this.e2h_1.b1h();
        builder.n5(readEscapeCharacter($this));
        continue $l$loop;
      }
      var tmp_0;
      if (builder == null) {
        var result = $this.e2h_1.h26(index);
        $this.e2h_1.b1h();
        tmp_0 = result;
      } else {
        builder.qb($this.e2h_1.h26(index));
        $this.e2h_1.b1h();
        tmp_0 = builder.toString();
      }
      return tmp_0;
    }
  }
  function nextUnquotedValue($this) {
    var i = $this.d2h_1.x27(Companion_getInstance_6().t2h_1);
    return !i.equals(new Long(-1, -1)) ? $this.e2h_1.h26(i) : $this.e2h_1.e27();
  }
  function skipQuotedValue($this, runTerminator) {
    while (true) {
      var index = $this.d2h_1.x27(runTerminator);
      if (index.equals(new Long(-1, -1)))
        throw syntaxError($this, 'Unterminated string');
      var tmp = $this.e2h_1.g26(index);
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 92;
      if (tmp === toByte(tmp$ret$0)) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = index.r5(new Long(1, 0));
        $this.e2h_1.e25(tmp$ret$1);
        readEscapeCharacter($this);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$2 = index.r5(new Long(1, 0));
        $this.e2h_1.e25(tmp$ret$2);
        return Unit_getInstance();
      }
    }
  }
  function skipUnquotedValue($this) {
    var i = $this.d2h_1.x27(Companion_getInstance_6().t2h_1);
    $this.e2h_1.e25(!i.equals(new Long(-1, -1)) ? i : $this.e2h_1.d25_1);
  }
  function push($this, newTop) {
    if ($this.k2h_1 === $this.j2h_1.length)
      throw new JsonDataException('Nesting too deep at ' + $this.w2i());
    var tmp0_this = $this;
    var tmp1 = tmp0_this.k2h_1;
    tmp0_this.k2h_1 = tmp1 + 1 | 0;
    $this.j2h_1[tmp1] = newTop;
  }
  function nextNonWhitespace($this, throwOnEof) {
    var p = 0;
    loop: while ($this.d2h_1.x26(numberToLong(p).r5(new Long(1, 0)))) {
      var tmp0 = p;
      p = tmp0 + 1 | 0;
      var c = $this.e2h_1.g26(toLong(tmp0));
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
      $this.e2h_1.e25(numberToLong(p).s5(new Long(1, 0)));
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 47;
      if (c === tmp$ret$4) {
        if (!$this.d2h_1.x26(new Long(2, 0))) {
          return c;
        }
        checkLenient($this);
        var peek = $this.e2h_1.g26(new Long(1, 0));
        var tmp1_subject = numberToChar(peek);
        var tmp_2;
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(42)))) {
          $this.e2h_1.b1h();
          $this.e2h_1.b1h();
          if (!skipTo($this, '*/')) {
            throw syntaxError($this, 'Unterminated comment');
          }
          $this.e2h_1.b1h();
          $this.e2h_1.b1h();
          p = 0;
          continue loop;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(47)))) {
          $this.e2h_1.b1h();
          $this.e2h_1.b1h();
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
    if (!$this.n2h_1)
      throw syntaxError($this, 'Use JsonReader.setLenient(true) to accept malformed JSON');
  }
  function skipToEndOfLine($this) {
    var index = $this.d2h_1.x27(Companion_getInstance_6().u2h_1);
    var tmp;
    if (!index.equals(new Long(-1, -1))) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.r5(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      tmp = $this.e2h_1.d25_1;
    }
    $this.e2h_1.e25(tmp);
  }
  function skipTo($this, toFind) {
    outer: while ($this.d2h_1.x26(toLong(toFind.length))) {
      var inductionVariable = 0;
      var last = charSequenceLength(toFind) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = $this.e2h_1.g26(toLong(c));
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          var tmp0__get_code__88qj9g = charSequenceGet(toFind, c);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
          if (!(tmp === toByte(tmp$ret$0))) {
            $this.e2h_1.b1h();
            continue outer;
          }
        }
         while (inductionVariable <= last);
      return true;
    }
    return false;
  }
  function getPathAsString($this) {
    var tmp = $this.w2i();
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  }
  function readEscapeCharacter($this) {
    if (!$this.d2h_1.x26(new Long(1, 0)))
      throw syntaxError($this, 'Unterminated escape sequence');
    var escaped = numberToChar($this.e2h_1.b1h());
    var tmp;
    if (equals(new Char(escaped), new Char(_Char___init__impl__6a9atx(117)))) {
      if (!$this.d2h_1.x26(new Long(4, 0))) {
        throw new EOFException('Unterminated escape sequence at path ' + $this.w2i());
      }
      var result = _Char___init__impl__6a9atx(0);
      var i = 0;
      var end = i + 4 | 0;
      while (i < end) {
        var c = $this.e2h_1.g26(toLong(i));
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
              throw syntaxError($this, '\\u' + $this.e2h_1.h26(new Long(4, 0)));
            }
          }
        }
        result = Char__plus_impl_qi7pgj(tmp_0, tmp_1);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
      $this.e2h_1.e25(new Long(4, 0));
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
      if (!$this.n2h_1)
        throw syntaxError($this, 'Invalid escape sequence: \\' + new Char(escaped));
      tmp = escaped;
    }
    return tmp;
  }
  function syntaxError($this, message) {
    return new JsonEncodingException(message + ' at path ' + $this.w2i());
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.q2h_1 = new Long(858993460, -214748365);
    this.r2h_1 = Companion_getInstance_0().d28("'\\");
    this.s2h_1 = Companion_getInstance_0().d28('"\\');
    this.t2h_1 = Companion_getInstance_0().d28('{}[]:, \n\t\r/\\;#=');
    this.u2h_1 = Companion_getInstance_0().d28('\n\r');
    this.v2h_1 = 0;
    this.w2h_1 = 1;
    this.x2h_1 = 2;
    this.y2h_1 = 3;
    this.z2h_1 = 4;
    this.a2i_1 = 5;
    this.b2i_1 = 6;
    this.c2i_1 = 7;
    this.d2i_1 = 8;
    this.e2i_1 = 9;
    this.f2i_1 = 10;
    this.g2i_1 = 11;
    this.h2i_1 = 12;
    this.i2i_1 = 13;
    this.j2i_1 = 14;
    this.k2i_1 = 15;
    this.l2i_1 = 16;
    this.m2i_1 = 17;
    this.n2i_1 = 0;
    this.o2i_1 = 1;
    this.p2i_1 = 2;
    this.q2i_1 = 3;
    this.r2i_1 = 4;
    this.s2i_1 = 5;
    this.t2i_1 = 6;
    this.u2i_1 = 7;
    this.v2i_1 = 256;
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function BufferedSourceJsonReader(source) {
    Companion_getInstance_6();
    this.d2h_1 = source;
    this.e2h_1 = this.d2h_1.v26();
    var tmp = this;
    Companion_getInstance_6();
    tmp.f2h_1 = 0;
    this.g2h_1 = new Long(0, 0);
    this.h2h_1 = 0;
    this.i2h_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    Companion_getInstance_6();
    var tmp0_apply = new Int32Array(256);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.stack.<anonymous>' call
    JsonScope_getInstance();
    tmp0_apply[0] = 6;
    tmp$ret$0 = tmp0_apply;
    tmp_0.j2h_1 = tmp$ret$0;
    this.k2h_1 = 1;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_6();
    var tmp0_arrayOfNulls = 256;
    tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_1.l2h_1 = tmp$ret$1;
    var tmp_2 = this;
    Companion_getInstance_6();
    tmp_2.m2h_1 = new Int32Array(256);
    this.n2h_1 = false;
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    Companion_getInstance_6();
    var tmp0_apply_0 = new Int32Array(256);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.indexStack.<anonymous>' call
    tmp0_apply_0[0] = 0;
    tmp$ret$2 = tmp0_apply_0;
    tmp_3.o2h_1 = tmp$ret$2;
    this.p2h_1 = 1;
  }
  BufferedSourceJsonReader.prototype.i2a = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginArray.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginArray.<anonymous>.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 3) {
      JsonScope_getInstance();
      push(this, 1);
      this.m2h_1[this.k2h_1 - 1 | 0] = 0;
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
    } else {
      throw new JsonDataException('Expected BEGIN_ARRAY but was ' + this.r29() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.j2a = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endArray.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endArray.<anonymous>.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 4) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.k2h_1;
      tmp1_this.k2h_1 = tmp2 - 1 | 0;
      var tmp3_array = this.m2h_1;
      var tmp4_index0 = this.k2h_1 - 1 | 0;
      var tmp5 = tmp3_array[tmp4_index0];
      tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
    } else {
      throw new JsonDataException('Expected END_ARRAY but was ' + this.r29() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.b2a = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginObject.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.beginObject.<anonymous>.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 1) {
      JsonScope_getInstance();
      push(this, 3);
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
      var tmp1_this = this;
      var tmp2 = tmp1_this.p2h_1;
      tmp1_this.p2h_1 = tmp2 + 1 | 0;
      this.o2h_1[this.p2h_1 - 1 | 0] = 0;
    } else {
      throw new JsonDataException('Expected BEGIN_OBJECT but was ' + this.r29() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.c2a = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endObject.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.endObject.<anonymous>.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 2) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.k2h_1;
      tmp1_this.k2h_1 = tmp2 - 1 | 0;
      this.l2h_1[this.k2h_1] = null;
      var tmp3_array = this.m2h_1;
      var tmp4_index0 = this.k2h_1 - 1 | 0;
      var tmp5 = tmp3_array[tmp4_index0];
      tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
      var tmp6_this = this;
      var tmp7 = tmp6_this.p2h_1;
      tmp6_this.p2h_1 = tmp7 - 1 | 0;
    } else {
      throw new JsonDataException('Expected END_OBJECT but was ' + this.r29() + ' at path ' + getPathAsString(this));
    }
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  BufferedSourceJsonReader.prototype.l = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.hasNext.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (!(p === 2)) {
      Companion_getInstance_6();
      tmp_0 = !(p === 4);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.r29 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.peek.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp1_subject === 1) {
      tmp_0 = Token_BEGIN_OBJECT_getInstance();
    } else {
      Companion_getInstance_6();
      if (tmp1_subject === 2) {
        tmp_0 = Token_END_OBJECT_getInstance();
      } else {
        Companion_getInstance_6();
        if (tmp1_subject === 3) {
          tmp_0 = Token_BEGIN_ARRAY_getInstance();
        } else {
          Companion_getInstance_6();
          if (tmp1_subject === 4) {
            tmp_0 = Token_END_ARRAY_getInstance();
          } else {
            var tmp_1;
            var tmp_2;
            Companion_getInstance_6();
            if (tmp1_subject === 12) {
              tmp_2 = true;
            } else {
              Companion_getInstance_6();
              tmp_2 = tmp1_subject === 13;
            }
            if (tmp_2) {
              tmp_1 = true;
            } else {
              Companion_getInstance_6();
              tmp_1 = tmp1_subject === 14;
            }
            if (tmp_1) {
              tmp_0 = Token_NAME_getInstance();
            } else {
              var tmp_3;
              Companion_getInstance_6();
              if (tmp1_subject === 5) {
                tmp_3 = true;
              } else {
                Companion_getInstance_6();
                tmp_3 = tmp1_subject === 6;
              }
              if (tmp_3) {
                tmp_0 = Token_BOOLEAN_getInstance();
              } else {
                Companion_getInstance_6();
                if (tmp1_subject === 7) {
                  tmp_0 = Token_NULL_getInstance();
                } else {
                  var tmp_4;
                  var tmp_5;
                  var tmp_6;
                  Companion_getInstance_6();
                  if (tmp1_subject === 8) {
                    tmp_6 = true;
                  } else {
                    Companion_getInstance_6();
                    tmp_6 = tmp1_subject === 9;
                  }
                  if (tmp_6) {
                    tmp_5 = true;
                  } else {
                    Companion_getInstance_6();
                    tmp_5 = tmp1_subject === 10;
                  }
                  if (tmp_5) {
                    tmp_4 = true;
                  } else {
                    Companion_getInstance_6();
                    tmp_4 = tmp1_subject === 11;
                  }
                  if (tmp_4) {
                    tmp_0 = Token_STRING_getInstance();
                  } else {
                    Companion_getInstance_6();
                    if (tmp1_subject === 15) {
                      tmp_0 = Token_LONG_getInstance();
                    } else {
                      Companion_getInstance_6();
                      if (tmp1_subject === 16) {
                        tmp_0 = Token_NUMBER_getInstance();
                      } else {
                        Companion_getInstance_6();
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
  BufferedSourceJsonReader.prototype.d2g = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextName.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp1_subject === 14) {
      tmp_0 = nextUnquotedValue(this);
    } else {
      Companion_getInstance_6();
      if (tmp1_subject === 13) {
        tmp_0 = nextQuotedValue(this, Companion_getInstance_6().s2h_1);
      } else {
        Companion_getInstance_6();
        if (tmp1_subject === 12) {
          tmp_0 = nextQuotedValue(this, Companion_getInstance_6().r2h_1);
        } else {
          throw new JsonDataException('Expected a name but was ' + this.r29() + ' at path ' + getPathAsString(this));
        }
      }
    }
    var result = tmp_0;
    var tmp_1 = this;
    Companion_getInstance_6();
    tmp_1.f2h_1 = 0;
    this.l2h_1[this.k2h_1 - 1 | 0] = result;
    return result;
  };
  BufferedSourceJsonReader.prototype.n2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextString.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp1_subject === 10) {
      tmp_0 = nextUnquotedValue(this);
    } else {
      Companion_getInstance_6();
      if (tmp1_subject === 9) {
        tmp_0 = nextQuotedValue(this, Companion_getInstance_6().s2h_1);
      } else {
        Companion_getInstance_6();
        if (tmp1_subject === 8) {
          tmp_0 = nextQuotedValue(this, Companion_getInstance_6().r2h_1);
        } else {
          Companion_getInstance_6();
          if (tmp1_subject === 11) {
            var tmp2_safe_receiver = this.i2h_1;
            var tmp_1;
            if (tmp2_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp$ret$2;
              // Inline function 'kotlin.also' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextString.<anonymous>' call
              this.i2h_1 = null;
              tmp$ret$2 = tmp2_safe_receiver;
              tmp_1 = tmp$ret$2;
            }
            tmp_0 = tmp_1;
          } else {
            Companion_getInstance_6();
            if (tmp1_subject === 15) {
              tmp_0 = this.g2h_1.toString();
            } else {
              Companion_getInstance_6();
              if (tmp1_subject === 16) {
                tmp_0 = this.e2h_1.h26(toLong(this.h2h_1));
              } else {
                throw new JsonDataException('Expected a string but was ' + this.r29() + ' at path ' + getPathAsString(this));
              }
            }
          }
        }
      }
    }
    var result = tmp_0;
    var tmp_2 = this;
    Companion_getInstance_6();
    tmp_2.f2h_1 = 0;
    var tmp3_array = this.m2h_1;
    var tmp4_index0 = this.k2h_1 - 1 | 0;
    var tmp5 = tmp3_array[tmp4_index0];
    tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
    return result;
  };
  BufferedSourceJsonReader.prototype.z2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextBoolean.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp1_subject === 5) {
      var tmp_1 = this;
      Companion_getInstance_6();
      tmp_1.f2h_1 = 0;
      var tmp2_array = this.m2h_1;
      var tmp3_index0 = this.k2h_1 - 1 | 0;
      var tmp4 = tmp2_array[tmp3_index0];
      tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
      tmp_0 = true;
    } else {
      Companion_getInstance_6();
      if (tmp1_subject === 6) {
        var tmp_2 = this;
        Companion_getInstance_6();
        tmp_2.f2h_1 = 0;
        var tmp5_array = this.m2h_1;
        var tmp6_index0 = this.k2h_1 - 1 | 0;
        var tmp7 = tmp5_array[tmp6_index0];
        tmp5_array[tmp6_index0] = tmp7 + 1 | 0;
        tmp_0 = false;
      } else {
        throw new JsonDataException('Expected a boolean but was ' + this.r29() + ' at path ' + getPathAsString(this));
      }
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.c2g = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextNull.<anonymous>' call
    Companion_getInstance_6();
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
    Companion_getInstance_6();
    if (tmp1_subject === 7) {
      var tmp_1 = this;
      Companion_getInstance_6();
      tmp_1.f2h_1 = 0;
      var tmp2_array = this.m2h_1;
      var tmp3_index0 = this.k2h_1 - 1 | 0;
      var tmp4 = tmp2_array[tmp3_index0];
      tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
      tmp_0 = null;
    } else {
      throw new JsonDataException('Expected null but was ' + this.r29() + ' at path ' + getPathAsString(this));
    }
    return tmp_0;
  };
  BufferedSourceJsonReader.prototype.s2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextDouble.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 15) {
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
      var tmp1_array = this.m2h_1;
      var tmp2_index0 = this.k2h_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return this.g2h_1.pc();
    } else {
      Companion_getInstance_6();
      if (p === 16) {
        this.i2h_1 = this.e2h_1.h26(toLong(this.h2h_1));
      } else {
        Companion_getInstance_6();
        if (p === 9) {
          this.i2h_1 = nextQuotedValue(this, Companion_getInstance_6().s2h_1);
        } else {
          Companion_getInstance_6();
          if (p === 8) {
            this.i2h_1 = nextQuotedValue(this, Companion_getInstance_6().r2h_1);
          } else {
            Companion_getInstance_6();
            if (p === 10) {
              this.i2h_1 = nextUnquotedValue(this);
            } else {
              Companion_getInstance_6();
              if (!(p === 11))
                throw new JsonDataException('Expected a double but was ' + this.r29() + ' at path ' + getPathAsString(this));
            }
          }
        }
      }
    }
    var tmp_1 = this;
    Companion_getInstance_6();
    tmp_1.f2h_1 = 11;
    var tmp_2;
    try {
      tmp_2 = toDouble(ensureNotNull(this.i2h_1));
    } catch ($p) {
      var tmp_3;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected a double but was ' + this.i2h_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var result = tmp_2;
    if (!this.n2h_1 ? isNaN_0(result) ? true : isInfinite(result) : false) {
      throw new JsonEncodingException('JSON forbids NaN and infinities: ' + result + ' at path ' + getPathAsString(this));
    }
    this.i2h_1 = null;
    var tmp_4 = this;
    Companion_getInstance_6();
    tmp_4.f2h_1 = 0;
    var tmp4_array = this.m2h_1;
    var tmp5_index0 = this.k2h_1 - 1 | 0;
    var tmp6 = tmp4_array[tmp5_index0];
    tmp4_array[tmp5_index0] = tmp6 + 1 | 0;
    return result;
  };
  BufferedSourceJsonReader.prototype.w2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextLong.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 15) {
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
      var tmp1_array = this.m2h_1;
      var tmp2_index0 = this.k2h_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return this.g2h_1;
    } else {
      Companion_getInstance_6();
      if (p === 16) {
        this.i2h_1 = this.e2h_1.h26(toLong(this.h2h_1));
      } else {
        var tmp_1;
        Companion_getInstance_6();
        if (p === 9) {
          tmp_1 = true;
        } else {
          Companion_getInstance_6();
          tmp_1 = p === 8;
        }
        if (tmp_1) {
          var tmp_2 = this;
          var tmp_3;
          Companion_getInstance_6();
          if (p === 9) {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_6().s2h_1);
          } else {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_6().r2h_1);
          }
          tmp_2.i2h_1 = tmp_3;
          try {
            var result = toLong_0(ensureNotNull(this.i2h_1));
            var tmp_4 = this;
            Companion_getInstance_6();
            tmp_4.f2h_1 = 0;
            var tmp4_array = this.m2h_1;
            var tmp5_index0 = this.k2h_1 - 1 | 0;
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
          Companion_getInstance_6();
          if (!(p === 11))
            throw new JsonDataException('Expected a long but was ' + this.r29() + ' at path ' + getPathAsString(this));
        }
      }
    }
    var tmp_5 = this;
    Companion_getInstance_6();
    tmp_5.f2h_1 = 11;
    var tmp_6;
    try {
      tmp_6 = toDouble(ensureNotNull(this.i2h_1));
    } catch ($p) {
      var tmp_7;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected a long but was ' + this.i2h_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_6 = tmp_7;
    }
    var asDouble = tmp_6;
    var result_0 = numberToLong(asDouble);
    if (!(result_0.pc() === asDouble)) {
      throw new JsonDataException('Expected a long but was ' + this.i2h_1 + ' at path ' + getPathAsString(this));
    }
    this.i2h_1 = null;
    var tmp_8 = this;
    Companion_getInstance_6();
    tmp_8.f2h_1 = 0;
    var tmp7_array = this.m2h_1;
    var tmp8_index0 = this.k2h_1 - 1 | 0;
    var tmp9 = tmp7_array[tmp8_index0];
    tmp7_array[tmp8_index0] = tmp9 + 1 | 0;
    return result_0;
  };
  BufferedSourceJsonReader.prototype.x2i = function () {
    return new JsonNumber(ensureNotNull(this.n2a()));
  };
  BufferedSourceJsonReader.prototype.w2 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.f2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.nextInt.<anonymous>' call
    Companion_getInstance_6();
    tmp$ret$0 = tmp0_takeUnless === 0;
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var p = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
    Companion_getInstance_6();
    if (p === 15) {
      var result = this.g2h_1.yc();
      if (!this.g2h_1.equals(toLong(result))) {
        throw new JsonDataException('Expected an int but was ' + toString(this.g2h_1) + ' at path ' + this.w2i());
      }
      var tmp_0 = this;
      Companion_getInstance_6();
      tmp_0.f2h_1 = 0;
      var tmp1_array = this.m2h_1;
      var tmp2_index0 = this.k2h_1 - 1 | 0;
      var tmp3 = tmp1_array[tmp2_index0];
      tmp1_array[tmp2_index0] = tmp3 + 1 | 0;
      return result;
    } else {
      Companion_getInstance_6();
      if (p === 16) {
        this.i2h_1 = this.e2h_1.h26(toLong(this.h2h_1));
      } else {
        var tmp_1;
        Companion_getInstance_6();
        if (p === 9) {
          tmp_1 = true;
        } else {
          Companion_getInstance_6();
          tmp_1 = p === 8;
        }
        if (tmp_1) {
          var tmp_2 = this;
          var tmp_3;
          Companion_getInstance_6();
          if (p === 9) {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_6().s2h_1);
          } else {
            tmp_3 = nextQuotedValue(this, Companion_getInstance_6().r2h_1);
          }
          tmp_2.i2h_1 = tmp_3;
          try {
            var result_0 = toInt(ensureNotNull(this.i2h_1));
            var tmp_4 = this;
            Companion_getInstance_6();
            tmp_4.f2h_1 = 0;
            var tmp4_array = this.m2h_1;
            var tmp5_index0 = this.k2h_1 - 1 | 0;
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
          Companion_getInstance_6();
          if (!(p === 11)) {
            throw new JsonDataException('Expected an int but was ' + this.r29() + ' at path ' + getPathAsString(this));
          }
        }
      }
    }
    var tmp_5 = this;
    Companion_getInstance_6();
    tmp_5.f2h_1 = 11;
    var tmp_6;
    try {
      tmp_6 = toDouble(ensureNotNull(this.i2h_1));
    } catch ($p) {
      var tmp_7;
      if ($p instanceof NumberFormatException) {
        throw new JsonDataException('Expected an int but was ' + this.i2h_1 + ' at path ' + getPathAsString(this));
      } else {
        throw $p;
      }
      tmp_6 = tmp_7;
    }
    var asDouble = tmp_6;
    var result_1 = numberToInt(asDouble);
    if (!(result_1 === asDouble)) {
      throw new JsonDataException('Expected an int but was ' + this.i2h_1 + ' at path ' + getPathAsString(this));
    }
    this.i2h_1 = null;
    var tmp_8 = this;
    Companion_getInstance_6();
    tmp_8.f2h_1 = 0;
    var tmp7_array = this.m2h_1;
    var tmp8_index0 = this.k2h_1 - 1 | 0;
    var tmp9 = tmp7_array[tmp8_index0];
    tmp7_array[tmp8_index0] = tmp9 + 1 | 0;
    return result_1;
  };
  BufferedSourceJsonReader.prototype.v15 = function () {
    var tmp = this;
    Companion_getInstance_6();
    tmp.f2h_1 = 0;
    JsonScope_getInstance();
    this.j2h_1[0] = 8;
    this.k2h_1 = 1;
    this.e2h_1.y6();
    this.d2h_1.v15();
  };
  BufferedSourceJsonReader.prototype.q29 = function () {
    var count = 0;
    do {
      var tmp$ret$1;
      // Inline function 'kotlin.takeUnless' call
      var tmp0_takeUnless = this.f2h_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.skipValue.<anonymous>' call
      Companion_getInstance_6();
      tmp$ret$0 = tmp0_takeUnless === 0;
      if (!tmp$ret$0) {
        tmp = tmp0_takeUnless;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
      var tmp0_elvis_lhs = tmp$ret$1;
      var tmp1_subject = tmp0_elvis_lhs == null ? doPeek(this) : tmp0_elvis_lhs;
      Companion_getInstance_6();
      if (tmp1_subject === 3) {
        JsonScope_getInstance();
        push(this, 1);
        var tmp2 = count;
        count = tmp2 + 1 | 0;
      } else {
        Companion_getInstance_6();
        if (tmp1_subject === 1) {
          JsonScope_getInstance();
          push(this, 3);
          var tmp3 = count;
          count = tmp3 + 1 | 0;
        } else {
          Companion_getInstance_6();
          if (tmp1_subject === 4) {
            var tmp4_this = this;
            var tmp5 = tmp4_this.k2h_1;
            tmp4_this.k2h_1 = tmp5 - 1 | 0;
            var tmp6 = count;
            count = tmp6 - 1 | 0;
          } else {
            Companion_getInstance_6();
            if (tmp1_subject === 2) {
              var tmp7_this = this;
              var tmp8 = tmp7_this.k2h_1;
              tmp7_this.k2h_1 = tmp8 - 1 | 0;
              var tmp9 = count;
              count = tmp9 - 1 | 0;
            } else {
              var tmp_0;
              Companion_getInstance_6();
              if (tmp1_subject === 14) {
                tmp_0 = true;
              } else {
                Companion_getInstance_6();
                tmp_0 = tmp1_subject === 10;
              }
              if (tmp_0) {
                skipUnquotedValue(this);
              } else {
                var tmp_1;
                Companion_getInstance_6();
                if (tmp1_subject === 9) {
                  tmp_1 = true;
                } else {
                  Companion_getInstance_6();
                  tmp_1 = tmp1_subject === 13;
                }
                if (tmp_1) {
                  skipQuotedValue(this, Companion_getInstance_6().s2h_1);
                } else {
                  var tmp_2;
                  Companion_getInstance_6();
                  if (tmp1_subject === 8) {
                    tmp_2 = true;
                  } else {
                    Companion_getInstance_6();
                    tmp_2 = tmp1_subject === 12;
                  }
                  if (tmp_2) {
                    skipQuotedValue(this, Companion_getInstance_6().r2h_1);
                  } else {
                    Companion_getInstance_6();
                    if (tmp1_subject === 16) {
                      this.e2h_1.e25(toLong(this.h2h_1));
                    }
                  }
                }
              }
            }
          }
        }
      }
      var tmp_3 = this;
      Companion_getInstance_6();
      tmp_3.f2h_1 = 0;
    }
     while (!(count === 0));
    var tmp10_array = this.m2h_1;
    var tmp11_index0 = this.k2h_1 - 1 | 0;
    var tmp12 = tmp10_array[tmp11_index0];
    tmp10_array[tmp11_index0] = tmp12 + 1 | 0;
    this.l2h_1[this.k2h_1 - 1 | 0] = 'null';
  };
  BufferedSourceJsonReader.prototype.y2i = function (names) {
    if (names.k()) {
      return -1;
    }
    while (this.l()) {
      var name = this.d2g();
      var expectedIndex = this.o2h_1[this.p2h_1 - 1 | 0];
      if (names.f(expectedIndex) === name) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.selectName.<anonymous>' call
        this.o2h_1[this.p2h_1 - 1 | 0] = expectedIndex + 1 | 0;
        if (this.o2h_1[this.p2h_1 - 1 | 0] === names.c()) {
          this.o2h_1[this.p2h_1 - 1 | 0] = 0;
        }
        tmp$ret$0 = expectedIndex;
        return tmp$ret$0;
      } else {
        var index = expectedIndex;
        $l$loop: while (true) {
          var tmp0 = index;
          index = tmp0 + 1 | 0;
          if (index === names.c()) {
            index = 0;
          }
          if (index === expectedIndex) {
            break $l$loop;
          }
          if (names.f(index) === name) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp0_also = index;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.apollographql.apollo3.api.json.BufferedSourceJsonReader.selectName.<anonymous>' call
            this.o2h_1[this.p2h_1 - 1 | 0] = index + 1 | 0;
            if (this.o2h_1[this.p2h_1 - 1 | 0] === names.c()) {
              this.o2h_1[this.p2h_1 - 1 | 0] = 0;
            }
            tmp$ret$1 = tmp0_also;
            return tmp$ret$1;
          }
        }
        this.q29();
      }
    }
    return -1;
  };
  BufferedSourceJsonReader.prototype.w2i = function () {
    return JsonScope_getInstance().z2g(this.k2h_1, this.j2h_1, this.l2h_1, this.m2h_1);
  };
  BufferedSourceJsonReader.prototype.z2i = function () {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('BufferedSourceJsonReader cannot rewind.');
  };
  function JsonNumber(value) {
    this.c2h_1 = value;
  }
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
  function readAny(_this__u8e3s4) {
    var token = _this__u8e3s4.r29();
    var tmp0 = token.w3_1;
    var tmp;
    switch (tmp0) {
      case 9:
        tmp = _this__u8e3s4.c2g();
        break;
      case 8:
        tmp = _this__u8e3s4.z2a();
        break;
      case 7:
      case 6:
        tmp = guessNumber(_this__u8e3s4);
        break;
      case 5:
        tmp = _this__u8e3s4.n2a();
        break;
      case 2:
        _this__u8e3s4.b2a();
        ;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp$ret$0 = LinkedHashMap_init_$Create$();

        var result = tmp$ret$0;
        while (_this__u8e3s4.l()) {
          result.v2(_this__u8e3s4.d2g(), readAny(_this__u8e3s4));
        }

        _this__u8e3s4.c2a();
        ;
        tmp = result;
        break;
      case 0:
        _this__u8e3s4.i2a();
        ;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$1 = ArrayList_init_$Create$();

        var result_0 = tmp$ret$1;
        while (_this__u8e3s4.l()) {
          result_0.a(readAny(_this__u8e3s4));
        }

        _this__u8e3s4.j2a();
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
      return _this__u8e3s4.w2();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    try {
      return _this__u8e3s4.w2a();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    try {
      return _this__u8e3s4.s2a();
    } catch ($p) {
      if ($p instanceof Exception) {
      } else {
        throw $p;
      }
    }
    return _this__u8e3s4.x2i();
  }
  function jsonReader(_this__u8e3s4) {
    return new BufferedSourceJsonReader(_this__u8e3s4);
  }
  function jsonReader_0(_this__u8e3s4) {
    return MapJsonReader_init_$Create$(_this__u8e3s4, null, 2, null);
  }
  function writeAny(_this__u8e3s4, value) {
    var tmp0_subject = value;
    if (tmp0_subject == null) {
      _this__u8e3s4.u29();
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
        // Inline function 'com.apollographql.apollo3.api.json.writeObject' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.b2a();
        // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = value;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.iterator' call
        tmp$ret$0 = tmp0_forEach.p().d();
        var tmp0_iterator = tmp$ret$0;
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.e();
          // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>.<anonymous>' call
          var tmp$ret$1;
          // Inline function 'kotlin.collections.component1' call
          tmp$ret$1 = element.q();
          var key = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.collections.component2' call
          tmp$ret$2 = element.r();
          var value_0 = tmp$ret$2;
          _this__u8e3s4.m2e(toString_1(key));
          writeAny(_this__u8e3s4, value_0);
        }
        _this__u8e3s4.c2a();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
          // Inline function 'com.apollographql.apollo3.api.json.writeArray' call
          // Inline function 'kotlin.contracts.contract' call
          _this__u8e3s4.i2a();
          // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_forEach_0 = value;
          var tmp0_iterator_0 = tmp0_forEach_0.d();
          while (tmp0_iterator_0.l()) {
            var element_0 = tmp0_iterator_0.e();
            // Inline function 'com.apollographql.apollo3.api.json.writeAny.<anonymous>.<anonymous>' call
            writeAny(_this__u8e3s4, element_0);
          }
          _this__u8e3s4.j2a();
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
            _this__u8e3s4.b2b(value);
          } else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
              _this__u8e3s4.r2a(value);
            } else {
              if (tmp0_subject instanceof Long) {
                _this__u8e3s4.y2a(value);
              } else {
                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                  _this__u8e3s4.u2a(value);
                } else {
                  if (tmp0_subject instanceof JsonNumber) {
                    _this__u8e3s4.b2h(value);
                  } else {
                    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                      _this__u8e3s4.p2a(value);
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
  function MapJsonReader_init_$Init$(root, pathRoot, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      pathRoot = emptyList();
    MapJsonReader.call($this, root, pathRoot);
    return $this;
  }
  function MapJsonReader_init_$Create$(root, pathRoot, $mask0, $marker) {
    return MapJsonReader_init_$Init$(root, pathRoot, $mask0, $marker, Object.create(MapJsonReader.prototype));
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
    if ($this.i2j_1 === 0) {
      $this.c2j_1 = Token_END_DOCUMENT_getInstance();
      return Unit_getInstance();
    }
    var currentIterator = ensureNotNull($this.g2j_1[$this.i2j_1 - 1 | 0]);
    var tmp = $this.e2j_1[$this.i2j_1 - 1 | 0];
    if (!(tmp == null) ? typeof tmp === 'number' : false) {
      var tmp_0 = $this.i2j_1 - 1 | 0;
      var tmp_1 = $this.e2j_1[$this.i2j_1 - 1 | 0];
      $this.e2j_1[tmp_0] = ((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()) + 1 | 0;
    }
    if (currentIterator.l()) {
      var next = currentIterator.e();
      $this.d2j_1 = next;
      var tmp_2 = $this;
      var tmp0_subject = next;
      var tmp_3;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Entry) : false) {
        tmp_3 = Token_NAME_getInstance();
      } else {
        tmp_3 = anyToToken($this, next);
      }
      tmp_2.c2j_1 = tmp_3;
    } else {
      var tmp_4 = $this;
      var tmp_5;
      var tmp_6 = $this.e2j_1[$this.i2j_1 - 1 | 0];
      if (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) {
        tmp_5 = Token_END_ARRAY_getInstance();
      } else {
        tmp_5 = Token_END_OBJECT_getInstance();
      }
      tmp_4.c2j_1 = tmp_5;
    }
  }
  function findName($this, needle, haystack) {
    var expectedIndex = $this.h2j_1[$this.i2j_1 - 1 | 0];
    if (expectedIndex < haystack.c() ? haystack.f(expectedIndex) === needle : false) {
      $this.h2j_1[$this.i2j_1 - 1 | 0] = $this.h2j_1[$this.i2j_1 - 1 | 0] + 1 | 0;
      return expectedIndex;
    } else {
      var index = haystack.o(needle);
      if (!(index === -1)) {
        $this.h2j_1[$this.i2j_1 - 1 | 0] = index + 1 | 0;
      }
      return index;
    }
  }
  function getPathAsString_0($this) {
    var tmp = $this.w2i();
    return joinToString$default(tmp, '.', null, null, 0, null, null, 62, null);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.a2a = function (_this__u8e3s4) {
    if (_this__u8e3s4 instanceof MapJsonReader)
      return _this__u8e3s4;
    var token = _this__u8e3s4.r29();
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
    var pathRoot = _this__u8e3s4.w2i();
    var tmp = readAny(_this__u8e3s4);
    var data = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    return new MapJsonReader(data, pathRoot);
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function MapJsonReader(root, pathRoot) {
    Companion_getInstance_7();
    this.a2j_1 = root;
    this.b2j_1 = pathRoot;
    this.d2j_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_6();
    var tmp0_arrayOfNulls = 256;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.e2j_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_6();
    var tmp0_arrayOfNulls_0 = 256;
    tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    tmp_0.f2j_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    Companion_getInstance_6();
    var tmp0_arrayOfNulls_1 = 256;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls_1), null);
    tmp_1.g2j_1 = tmp$ret$2;
    var tmp_2 = this;
    Companion_getInstance_6();
    tmp_2.h2j_1 = new Int32Array(256);
    this.i2j_1 = 0;
    this.c2j_1 = Token_BEGIN_OBJECT_getInstance();
    this.d2j_1 = this.a2j_1;
  }
  MapJsonReader.prototype.i2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginArray.<anonymous>' call
    if (!this.r29().equals(Token_BEGIN_ARRAY_getInstance())) {
      throw new JsonDataException('Expected BEGIN_ARRAY but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp = this.d2j_1;
    var currentValue = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.check' call
    var tmp_0 = this.i2j_1;
    Companion_getInstance_6();
    var tmp0_check = tmp_0 < 256;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginArray.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Nesting too deep';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2j_1;
    tmp0_this.i2j_1 = tmp1 + 1 | 0;
    this.e2j_1[this.i2j_1 - 1 | 0] = -1;
    this.g2j_1[this.i2j_1 - 1 | 0] = currentValue.d();
    advanceIterator(this);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonReader.prototype.j2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.endArray.<anonymous>' call
    if (!this.r29().equals(Token_END_ARRAY_getInstance())) {
      throw new JsonDataException('Expected END_ARRAY but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2j_1;
    tmp0_this.i2j_1 = tmp1 - 1 | 0;
    this.g2j_1[this.i2j_1] = null;
    this.e2j_1[this.i2j_1] = null;
    advanceIterator(this);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.b2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginObject.<anonymous>' call
    if (!this.r29().equals(Token_BEGIN_OBJECT_getInstance())) {
      throw new JsonDataException('Expected BEGIN_OBJECT but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    // Inline function 'kotlin.check' call
    var tmp = this.i2j_1;
    Companion_getInstance_6();
    var tmp0_check = tmp < 256;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.beginObject.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Nesting too deep';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2j_1;
    tmp0_this.i2j_1 = tmp1 + 1 | 0;
    var tmp_0 = this.f2j_1;
    var tmp_1 = this.i2j_1 - 1 | 0;
    var tmp_2 = this.d2j_1;
    tmp_0[tmp_1] = (!(tmp_2 == null) ? isInterface(tmp_2, Map) : false) ? tmp_2 : THROW_CCE();
    this.z2i();
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonReader.prototype.c2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.endObject.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2j_1;
    tmp0_this.i2j_1 = tmp1 - 1 | 0;
    this.g2j_1[this.i2j_1] = null;
    this.e2j_1[this.i2j_1] = null;
    this.f2j_1[this.i2j_1] = null;
    advanceIterator(this);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.l = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 3:
        return false;
      case 1:
        return false;
      default:
        return true;
    }
  };
  MapJsonReader.prototype.r29 = function () {
    return this.c2j_1;
  };
  MapJsonReader.prototype.d2g = function () {
    if (!this.r29().equals(Token_NAME_getInstance())) {
      throw new JsonDataException('Expected NAME but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp = this.d2j_1;
    var data = (!(tmp == null) ? isInterface(tmp, Entry) : false) ? tmp : THROW_CCE();
    this.e2j_1[this.i2j_1 - 1 | 0] = data.q();
    this.d2j_1 = data.r();
    this.c2j_1 = anyToToken(this, data.r());
    return data.q();
  };
  MapJsonReader.prototype.n2a = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a String but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = toString(ensureNotNull(this.d2j_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextString.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.z2a = function () {
    if (!this.r29().equals(Token_BOOLEAN_getInstance())) {
      throw new JsonDataException('Expected BOOLEAN but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.d2j_1;
    var tmp0_also = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonReader.nextBoolean.<anonymous>' call
    advanceIterator(this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  MapJsonReader.prototype.c2g = function () {
    if (!this.r29().equals(Token_NULL_getInstance())) {
      throw new JsonDataException('Expected NULL but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    advanceIterator(this);
    return null;
  };
  MapJsonReader.prototype.s2a = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Double but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.d2j_1;
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
              tmp = toDouble(value.c2h_1);
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
  MapJsonReader.prototype.w2 = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected an Int but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.d2j_1;
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
              tmp = toInt(value.c2h_1);
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
  MapJsonReader.prototype.w2a = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Long but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.d2j_1;
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
              tmp = toLong_0(value.c2h_1);
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
  MapJsonReader.prototype.x2i = function () {
    var tmp0_subject = this.r29();
    var tmp0 = tmp0_subject.w3_1;
    switch (tmp0) {
      case 5:
      case 6:
      case 7:
        ;
        break;
      default:
        throw new JsonDataException('Expected a Number but was ' + this.r29() + ' at path ' + getPathAsString_0(this));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.d2j_1;
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
  MapJsonReader.prototype.q29 = function () {
    advanceIterator(this);
  };
  MapJsonReader.prototype.v15 = function () {
  };
  MapJsonReader.prototype.y2i = function (names) {
    while (this.l()) {
      var name = this.d2g();
      var index = findName(this, name, names);
      if (!(index === -1)) {
        return index;
      }
      this.q29();
    }
    return -1;
  };
  MapJsonReader.prototype.z2i = function () {
    var container = this.f2j_1[this.i2j_1 - 1 | 0];
    this.e2j_1[this.i2j_1 - 1 | 0] = null;
    var tmp = this.i2j_1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = ensureNotNull(container);
    tmp$ret$0 = tmp0_iterator.p().d();
    this.g2j_1[tmp] = tmp$ret$0;
    this.h2j_1[this.i2j_1 - 1 | 0] = 0;
    advanceIterator(this);
  };
  MapJsonReader.prototype.w2i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    result.j(this.b2j_1);
    var inductionVariable = 0;
    var last = this.i2j_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.e2j_1[index];
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          result.a(tmp1_safe_receiver);
          tmp$ret$1 = Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    return result;
  };
  function List_0(list) {
    State.call(this);
    this.j2j_1 = list;
  }
  List_0.prototype.toString = function () {
    return 'List (' + this.j2j_1.c() + ')';
  };
  function Map_0(map, name) {
    State.call(this);
    this.k2j_1 = map;
    this.l2j_1 = name;
  }
  Map_0.prototype.toString = function () {
    return 'Map (' + this.l2j_1 + ')';
  };
  function State() {
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
      var tmp0_check = _this__u8e3s4.c() === other.c();
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
      var tmp1_map = get_indices(_this__u8e3s4);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var inductionVariable = tmp1_map.o4_1;
      var last = tmp1_map.p4_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          tmp$ret$2 = mergeWith(_this__u8e3s4.f(item), $this, other.f(item));
          tmp0_mapTo.a(tmp$ret$2);
        }
         while (!(item === last));
      tmp$ret$3 = tmp0_mapTo;
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
        var tmp2_map = plus_1(_this__u8e3s4.c2(), other.c2());
        var tmp$ret$7;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
        var tmp0_iterator = tmp2_map.d();
        while (tmp0_iterator.l()) {
          var item_0 = tmp0_iterator.e();
          var tmp$ret$6;
          // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.mergeWith.<anonymous>' call
          tmp$ret$6 = to(item_0, mergeWith(_this__u8e3s4.b2(item_0), $this, other.b2(item_0)));
          tmp0_mapTo_0.a(tmp$ret$6);
        }
        tmp$ret$7 = tmp0_mapTo_0;
        tmp$ret$8 = tmp$ret$7;
        tmp = toMap(tmp$ret$8);
      } else {
        // Inline function 'kotlin.check' call
        var tmp3_check = equals(_this__u8e3s4, other);
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp3_check) {
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
    var state = lastOrNull($this.f2a_1);
    if (state instanceof Map_0) {
      var name = state.l2j_1;
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
      if (state.k2j_1.v1(name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = state.k2j_1;
        var tmp2_set = mergeWith(state.k2j_1.b2(name), $this, value);
        tmp1_set.v2(name, tmp2_set);
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp3_set = state.k2j_1;
        tmp3_set.v2(name, value);
      }
      state.l2j_1 = null;
    } else {
      if (state instanceof List_0) {
        state.j2j_1.a(value);
      } else {
        $this.d2a_1 = value;
        $this.e2a_1 = true;
      }
    }
    tmp$ret$1 = $this;
    return tmp$ret$1;
  }
  function MapJsonWriter() {
    this.d2a_1 = null;
    this.e2a_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.f2a_1 = tmp$ret$0;
  }
  MapJsonWriter.prototype.g2a = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.e2a_1;
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
    return this.d2a_1;
  };
  MapJsonWriter.prototype.i2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.beginArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    this.f2a_1.a(new List_0(list));
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.j2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.endArray.<anonymous>' call
    var state = this.f2a_1.e7(this.f2a_1.c() - 1 | 0);
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
    valueInternal(this, state.j2j_1);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.b2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.beginObject.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var map = tmp$ret$0;
    this.f2a_1.a(new Map_0(map, null));
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.c2a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.endObject.<anonymous>' call
    var state = this.f2a_1.e7(this.f2a_1.c() - 1 | 0);
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
    valueInternal(this, state.k2j_1);
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  MapJsonWriter.prototype.m2e = function (name) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.name.<anonymous>' call
    var state = last(this.f2a_1);
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
    var tmp0_check = state.l2j_1 == null;
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
    state.l2j_1 = name;
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  MapJsonWriter.prototype.q2g = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.f2a_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.l()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.api.json.MapJsonWriter.<get-path>.<anonymous>' call
      var tmp0_subject = item;
      var tmp;
      if (tmp0_subject instanceof List_0) {
        tmp = item.j2j_1.c().toString();
      } else {
        if (tmp0_subject instanceof Map_0) {
          var tmp1_elvis_lhs = item.l2j_1;
          tmp = tmp1_elvis_lhs == null ? '?' : tmp1_elvis_lhs;
        } else {
          noWhenBranchMatchedException();
        }
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    return joinToString$default(tmp_0, '.', null, null, 0, null, null, 62, null);
  };
  MapJsonWriter.prototype.p2a = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.b2b = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.u2a = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.r2a = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.y2a = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.b2h = function (value) {
    return valueInternal(this, value);
  };
  MapJsonWriter.prototype.g2b = function (value) {
    return valueInternal(this, null);
  };
  MapJsonWriter.prototype.u29 = function () {
    return valueInternal(this, null);
  };
  MapJsonWriter.prototype.v15 = function () {
  };
  function FileUploadAwareJsonWriter(wrappedWriter) {
    this.o2e_1 = wrappedWriter;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.p2e_1 = tmp$ret$0;
  }
  FileUploadAwareJsonWriter.prototype.q2e = function () {
    return this.p2e_1;
  };
  FileUploadAwareJsonWriter.prototype.i2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.beginArray.<anonymous>' call
    this.o2e_1.i2a();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.j2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.endArray.<anonymous>' call
    this.o2e_1.j2a();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.b2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.beginObject.<anonymous>' call
    this.o2e_1.b2a();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.c2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.endObject.<anonymous>' call
    this.o2e_1.c2a();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.m2e = function (name) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.name.<anonymous>' call
    this.o2e_1.m2e(name);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.p2a = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.p2a(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.b2b = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.b2b(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.u2a = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.u2a(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.r2a = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.r2a(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.y2a = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.y2a(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.b2h = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    this.o2e_1.b2h(value);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.g2b = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.value.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.p2e_1;
    var tmp1_set = this.o2e_1.q2g();
    tmp0_set.v2(tmp1_set, value);
    this.o2e_1.u29();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.u29 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.api.json.internal.FileUploadAwareJsonWriter.nullValue.<anonymous>' call
    this.o2e_1.u29();
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  FileUploadAwareJsonWriter.prototype.q2g = function () {
    return this.o2e_1.q2g();
  };
  FileUploadAwareJsonWriter.prototype.v15 = function () {
    this.o2e_1.v15();
  };
  function JsonScope() {
    JsonScope_instance = this;
    this.r2g_1 = 1;
    this.s2g_1 = 2;
    this.t2g_1 = 3;
    this.u2g_1 = 4;
    this.v2g_1 = 5;
    this.w2g_1 = 6;
    this.x2g_1 = 7;
    this.y2g_1 = 8;
  }
  JsonScope.prototype.z2g = function (stackSize, stack, pathNames, pathIndices) {
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
            result.a(tmp0_plusAssign);
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
              result.a(tmp2_safe_receiver);
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
    var result = _this__u8e3s4.pc();
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
    var result = _this__u8e3s4.yc();
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
    var tmp0_check = result.pc() === _this__u8e3s4;
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
  var currentTestResolver;
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
    this.m2j_1 = statusCode;
    this.n2j_1 = headers;
    this.o2j_1 = body;
    captureStack(this, ApolloHttpException);
  }
  function ApolloParseException(message, cause) {
    ApolloException.call(this, message, cause);
    captureStack(this, ApolloParseException);
  }
  function SubscriptionOperationException(operationName, payload) {
    var tmp = 'Operation error ' + operationName;
    ApolloException_init_$Init$(tmp, null, 2, null, this);
    this.p2j_1 = payload;
    captureStack(this, SubscriptionOperationException);
  }
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
    this.q2j_1 = platformCause;
    captureStack(this, ApolloNetworkException);
  }
  //region block: post-declaration
  CustomScalarAdapters.prototype.n2d = get;
  CustomScalarAdapters.prototype.o2d = fold;
  CustomScalarAdapters.prototype.p2d = minusKey;
  CustomScalarAdapters.prototype.a2c = plus_2;
  CombinedExecutionContext.prototype.a2c = plus_2;
  //endregion
  //region block: init
  RESERVED_CHARS = '!#$&\'"()*+,/:;=?@[]{} ';
  currentTestResolver = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DefaultHttpRequestComposer;
  _.$_$.b = HttpHeader;
  _.$_$.c = Builder_3;
  _.$_$.d = valueOf;
  _.$_$.e = BufferedSinkJsonWriter;
  _.$_$.f = BufferedSourceJsonReader;
  _.$_$.g = jsonReader;
  _.$_$.h = jsonReader_0;
  _.$_$.i = readAny;
  _.$_$.j = writeAny;
  _.$_$.k = get_AnyAdapter;
  _.$_$.l = Builder_0;
  _.$_$.m = ApolloResponse;
  _.$_$.n = get_BooleanAdapter;
  _.$_$.o = Builder_2;
  _.$_$.p = DeferredFragmentIdentifier;
  _.$_$.q = fold;
  _.$_$.r = get;
  _.$_$.s = minusKey;
  _.$_$.t = Element_0;
  _.$_$.u = plus_2;
  _.$_$.v = get_IntAdapter;
  _.$_$.w = Mutation;
  _.$_$.x = get_NullableAnyAdapter;
  _.$_$.y = get_NullableIntAdapter;
  _.$_$.z = get_NullableStringAdapter;
  _.$_$.a1 = Present;
  _.$_$.b1 = Query;
  _.$_$.c1 = get_StringAdapter;
  _.$_$.d1 = Subscription;
  _.$_$.e1 = and;
  _.$_$.f1 = evaluate;
  _.$_$.g1 = list;
  _.$_$.h1 = nullable;
  _.$_$.i1 = obj;
  _.$_$.j1 = parseJsonResponse;
  _.$_$.k1 = possibleTypes;
  _.$_$.l1 = present;
  _.$_$.m1 = variable;
  _.$_$.n1 = withDeferredFragmentIds;
  _.$_$.o1 = ApolloException;
  _.$_$.p1 = ApolloNetworkException;
  _.$_$.q1 = ApolloParseException;
  _.$_$.r1 = SubscriptionOperationException;
  _.$_$.s1 = HttpMethod_Post_getInstance;
  _.$_$.t1 = obj$default;
  _.$_$.u1 = ApolloException_init_$Create$;
  _.$_$.v1 = ApolloHttpException_init_$Create$;
  _.$_$.w1 = ApolloNetworkException_init_$Create$;
  _.$_$.x1 = Companion_getInstance_4;
  _.$_$.y1 = Key_getInstance;
  _.$_$.z1 = Companion_getInstance_1;
  _.$_$.a2 = Companion_getInstance_2;
  _.$_$.b2 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=apollo-kotlin-apollo-api.js.map
