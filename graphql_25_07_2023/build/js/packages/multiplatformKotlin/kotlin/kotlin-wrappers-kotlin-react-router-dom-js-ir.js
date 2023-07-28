(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-router-dom-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-router-dom-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-router-dom-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.ab;
  var setMetadataFor = kotlin_kotlin.$_$.fc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(NavigateFunction, 'NavigateFunction', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function NavigateFunction() {
  }
  NavigateFunction.prototype.invoke_pl8f16_k$ = function (to) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0(to);
  };
  NavigateFunction.prototype.invoke_9xvy9a_k$ = function (to, options) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0(to, options);
  };
  NavigateFunction.prototype.invoke_oj3vm0_k$ = function (delta) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0(delta);
  };
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-router-dom-js-ir.js.map
