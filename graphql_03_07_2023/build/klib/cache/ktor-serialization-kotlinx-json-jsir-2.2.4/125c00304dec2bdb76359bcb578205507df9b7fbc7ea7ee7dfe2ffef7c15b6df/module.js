(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-json-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    init_properties_JsonSupport_kt_xg0arx();
    return DefaultJson;
  }
  var DefaultJson;
  function DefaultJson$lambda($this$Json) {
    init_properties_JsonSupport_kt_xg0arx();
    $this$Json.set_encodeDefaults_awi118_k$(true);
    $this$Json.set_isLenient_9pe3jb_k$(true);
    $this$Json.set_allowSpecialFloatingPointValues_9kglh2_k$(true);
    $this$Json.set_allowStructuredMapKeys_bu0kfq_k$(true);
    $this$Json.set_prettyPrint_l338v_k$(false);
    $this$Json.set_useArrayPolymorphism_a7xwxf_k$(false);
    return Unit_getInstance();
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function init_properties_JsonSupport_kt_xg0arx() {
    if (properties_initialized_JsonSupport_kt_9cgd93) {
    } else {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json$default(null, DefaultJson$lambda, 1, null);
    }
  }
  return _;
}));
