(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-mui-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-mui-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-mui-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-mui-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-mui-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var interfaceMeta = kotlin_kotlin.$_$.hb;
  var setMetadataFor = kotlin_kotlin.$_$.dc;
  //endregion
  //region block: pre-declaration
  function invoke() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0();
  }
  function invoke_0(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0(value);
  }
  function invoke_1(topBottom, rightLeft) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0(topBottom, rightLeft);
  }
  function invoke_2(top, rightLeft, bottom) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0(top, rightLeft, bottom);
  }
  function invoke_3(top, right, bottom, left) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0(top, right, bottom, left);
  }
  setMetadataFor(Spacing, 'Spacing', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function responsive(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Spacing() {
  }
  function sx(_this__u8e3s4, block) {
    var tmp$ret$2;
    // Inline function 'kotlinx.js.jso' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlinx.js.jso' call
    tmp$ret$0 = {};
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.sx = tmp$ret$2;
  }
  return _;
}));
