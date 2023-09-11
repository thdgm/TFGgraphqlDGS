(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-dom-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-dom-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.q7;
  var setMetadataFor = kotlin_kotlin.$_$.r7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ReactHTML, 'ReactHTML', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-dom-js-ir.js.map
