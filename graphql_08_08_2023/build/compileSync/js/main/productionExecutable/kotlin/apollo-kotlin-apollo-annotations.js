(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-annotations'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'apollo-kotlin-apollo-annotations'.");
    }
    root['apollo-kotlin-apollo-annotations'] = factory(typeof this['apollo-kotlin-apollo-annotations'] === 'undefined' ? {} : this['apollo-kotlin-apollo-annotations'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.w6;
  var setMetadataFor = kotlin_kotlin.$_$.q7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApolloAdaptableWith, 'ApolloAdaptableWith', classMeta, undefined, undefined, 0, undefined, []);
  //endregion
  function ApolloAdaptableWith() {
  }
  return _;
}));

//# sourceMappingURL=apollo-kotlin-apollo-annotations.js.map
