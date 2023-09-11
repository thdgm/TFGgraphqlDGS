(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-emotion-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-emotion-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-emotion-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-emotion-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-emotion-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_FROM_PERCENTAGE() {
    init_properties_keyframes_ext_kt_ujlesk();
    return FROM_PERCENTAGE;
  }
  var FROM_PERCENTAGE;
  function get_TO_PERCENTAGE() {
    init_properties_keyframes_ext_kt_ujlesk();
    return TO_PERCENTAGE;
  }
  var TO_PERCENTAGE;
  var properties_initialized_keyframes_ext_kt_pgb1s8;
  function init_properties_keyframes_ext_kt_ujlesk() {
    if (properties_initialized_keyframes_ext_kt_pgb1s8) {
    } else {
      properties_initialized_keyframes_ext_kt_pgb1s8 = true;
      var tmp$ret$2;
      // Inline function 'csstype.pct' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '0%';
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      FROM_PERCENTAGE = tmp$ret$2;
      var tmp$ret$2_0;
      // Inline function 'csstype.pct' call
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = '100%';
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      tmp$ret$2_0 = tmp$ret$1_0;
      TO_PERCENTAGE = tmp$ret$2_0;
    }
  }
  function set_index(_set____db54di) {
    index = _set____db54di;
  }
  function get_index() {
    return index;
  }
  var index;
  //region block: init
  index = 0;
  //endregion
  return _;
}));
