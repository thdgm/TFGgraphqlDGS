(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-extensions-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-extensions-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-extensions-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-extensions-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-extensions-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  //endregion
  //region block: pre-declaration
  //endregion
  function assign(obj, builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = clone(obj);
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function js(builder) {
    var tmp$ret$2;
    // Inline function 'kotlinx.js.jso' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlinx.js.jso' call
    tmp$ret$0 = {};
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function clone(obj) {
    var tmp = Object;
    var tmp$ret$0;
    // Inline function 'kotlinx.js.jso' call
    tmp$ret$0 = {};
    return tmp.assign(tmp$ret$0, obj);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = clone;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-extensions-js-ir.js.map
