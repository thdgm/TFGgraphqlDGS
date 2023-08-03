(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['ktor-ktor-serialization-kotlinx-json-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json-js-ir.js.map
