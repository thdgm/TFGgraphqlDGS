(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-utils-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-utils-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_io_ktor_ktor_utils, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.u;
  var getKClass = kotlin_kotlin.$_$.d;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var setOf = kotlin_kotlin.$_$.a9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_LOGGER() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function init_properties_ContentNegotiation_kt_d83xzi() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
