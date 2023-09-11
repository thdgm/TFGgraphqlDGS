(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-mpp-utils'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'apollo-kotlin-apollo-mpp-utils'.");
    }
    root['apollo-kotlin-apollo-mpp-utils'] = factory(typeof this['apollo-kotlin-apollo-mpp-utils'] === 'undefined' ? {} : this['apollo-kotlin-apollo-mpp-utils'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var numberToLong = kotlin_kotlin.$_$.p7;
  //endregion
  //region block: pre-declaration
  //endregion
  function currentTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = currentTimeMillis;
  //endregion
  return _;
}));

//# sourceMappingURL=apollo-kotlin-apollo-mpp-utils.js.map
