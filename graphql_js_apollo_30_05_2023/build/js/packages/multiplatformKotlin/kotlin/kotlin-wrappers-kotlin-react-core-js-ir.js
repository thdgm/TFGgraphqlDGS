(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-core-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-core-js-ir'], react, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var useEffect = $module$react.useEffect;
  var useContext = $module$react.useContext;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.ya;
  var setMetadataFor = kotlin_kotlin.$_$.dc;
  var toString = kotlin_kotlin.$_$.hc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EffectBuilder, 'EffectBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StateInstance, 'StateInstance', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StateSetter, 'StateSetter', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function EffectBuilder() {
  }
  EffectBuilder.prototype.cleanup_hwidaq_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0.push(block);
  };
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup(cleanups) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = cleanups.length === 0;
    if (tmp$ret$0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function createEffectCallback$lambda($effect) {
    return function () {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var cleanups = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = cleanups;
      tmp$ret$4 = tmp$ret$3;
      $effect(tmp$ret$4);
      return buildCleanup(cleanups);
    };
  }
  function buildCleanup$lambda($cleanups) {
    return function () {
      var indexedObject = $cleanups;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var cleanup = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        cleanup();
      }
      return Unit_getInstance();
    };
  }
  function IntrinsicType(tagName) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tagName;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function ReactNode(source) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = source;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StateInstance() {
  }
  StateInstance.prototype.component1_7eebsc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[0];
  };
  StateInstance.prototype.component2_7eebsb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[1];
  };
  StateInstance.prototype.getValue_elrtsm_k$ = function (thisRef, property) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[0];
  };
  StateInstance.prototype.setValue_r8gule_k$ = function (thisRef, property, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0[1](value);
  };
  function StateSetter() {
  }
  StateSetter.prototype.invoke_n4yk90_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0(value);
  };
  StateSetter.prototype.invoke_bmpgyi_k$ = function (transform) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0(transform);
  };
  function useEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    useEffect(callback, dependencies);
  }
  function useRequiredContext(context) {
    var value = useContext(context);
    var tmp$ret$2;
    // Inline function 'kotlin.requireNotNull' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = useEffect_0;
  _.$_$.b = useRequiredContext;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-core-js-ir.js.map
