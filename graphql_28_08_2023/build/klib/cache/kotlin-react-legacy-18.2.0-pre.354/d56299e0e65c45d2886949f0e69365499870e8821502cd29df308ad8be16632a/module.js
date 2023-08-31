(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-wrappers-kotlin-react-legacy-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-legacy-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-legacy-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
