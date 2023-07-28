(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-extensions-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-extensions-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-ir'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-extensions-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-ir'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-redux-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-redux-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-redux-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-extensions-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var clone = kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions.$_$.a;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function rEnhancer() {
    return rEnhancer$lambda;
  }
  function rEnhancer$lambda(next) {
    return rEnhancer$lambda$lambda(next);
  }
  function invoke$wrapperReducer(reducer) {
    return rEnhancer$lambda$lambda$wrapperReducer$lambda(reducer);
  }
  function rEnhancer$lambda$lambda$lambda($store) {
    return function (action) {
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlinext.js.js' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'redux.rEnhancer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.type = getKClassFromExpression(action).get_simpleName_r6f8py_k$();
      tmp0_apply.action = action;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_unsafeCast = tmp$ret$3;
      tmp$ret$4 = tmp1_unsafeCast;
      var result = $store.dispatch(tmp$ret$4);
      return result;
    };
  }
  function rEnhancer$lambda$lambda$lambda_0($store) {
    return function (nextReducer) {
      $store.replaceReducer(invoke$wrapperReducer(nextReducer));
      return Unit_getInstance();
    };
  }
  function rEnhancer$lambda$lambda$wrapperReducer$lambda($reducer) {
    return function (state, action) {
      return $reducer(state, action.action);
    };
  }
  function rEnhancer$lambda$lambda($next) {
    return function (reducer, initialState) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $next;
      tmp$ret$1 = tmp$ret$0;
      var store = tmp$ret$1(invoke$wrapperReducer(reducer), initialState);
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlinext.js.assign' call
      var tmp = Object;
      var tmp$ret$6;
      // Inline function 'kotlinext.js.js' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$2 = {};
      var tmp0_apply = tmp$ret$2;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'redux.rEnhancer.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp2_assign = tmp.assign(tmp$ret$6, store);
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = clone(tmp2_assign);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'redux.rEnhancer.<anonymous>.<anonymous>.<anonymous>' call
      tmp1_apply.dispatch = rEnhancer$lambda$lambda$lambda(store);
      tmp1_apply.replaceReducer = rEnhancer$lambda$lambda$lambda_0(store);
      tmp$ret$7 = tmp1_apply;
      tmp$ret$8 = tmp$ret$7;
      var tmp3_unsafeCast = tmp$ret$8;
      tmp$ret$9 = tmp3_unsafeCast;
      return tmp$ret$9;
    };
  }
  function get_defaultJson() {
    init_properties_Serialization_kt_wn61l0();
    return defaultJson;
  }
  var defaultJson;
  function defaultJson$lambda($this$Json) {
    init_properties_Serialization_kt_wn61l0();
    $this$Json.set_isLenient_9pe3jb_k$(true);
    $this$Json.set_ignoreUnknownKeys_d94li_k$(true);
    $this$Json.set_allowSpecialFloatingPointValues_9kglh2_k$(true);
    $this$Json.set_useArrayPolymorphism_a7xwxf_k$(true);
    return Unit_getInstance();
  }
  var properties_initialized_Serialization_kt_xannds;
  function init_properties_Serialization_kt_wn61l0() {
    if (properties_initialized_Serialization_kt_xannds) {
    } else {
      properties_initialized_Serialization_kt_xannds = true;
      defaultJson = Json$default(null, defaultJson$lambda, 1, null);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = rEnhancer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-redux-js-ir.js.map
