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
  var imul = Math.imul;
  var THROW_ISE = kotlin_kotlin.$_$.lf;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var Enum = kotlin_kotlin.$_$.xe;
  var classMeta = kotlin_kotlin.$_$.ya;
  var setMetadataFor = kotlin_kotlin.$_$.dc;
  var THROW_CCE = kotlin_kotlin.$_$.kf;
  var getStringHashCode = kotlin_kotlin.$_$.fb;
  var Annotation = kotlin_kotlin.$_$.qe;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Version, 'Version', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ApolloDeprecatedSince, 'ApolloDeprecatedSince', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(ApolloExperimental, 'ApolloExperimental', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(ApolloInternal, 'ApolloInternal', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(ApolloAdaptableWith, 'ApolloAdaptableWith', classMeta, undefined, [Annotation], 0, undefined, []);
  //endregion
  var Version_v3_0_0_instance;
  var Version_v3_0_1_instance;
  var Version_v3_1_1_instance;
  var Version_v3_2_1_instance;
  var Version_v3_2_2_instance;
  var Version_v3_2_3_instance;
  var Version_v3_3_1_instance;
  var Version_v3_3_2_instance;
  var Version_v3_3_3_instance;
  var Version_v3_4_1_instance;
  var Version_v3_5_1_instance;
  var Version_v3_6_3_instance;
  var Version_v3_7_2_instance;
  function values() {
    return [Version_v3_0_0_getInstance(), Version_v3_0_1_getInstance(), Version_v3_1_1_getInstance(), Version_v3_2_1_getInstance(), Version_v3_2_2_getInstance(), Version_v3_2_3_getInstance(), Version_v3_3_1_getInstance(), Version_v3_3_2_getInstance(), Version_v3_3_3_getInstance(), Version_v3_4_1_getInstance(), Version_v3_5_1_getInstance(), Version_v3_6_3_getInstance(), Version_v3_7_2_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'v3_0_0':
        return Version_v3_0_0_getInstance();
      case 'v3_0_1':
        return Version_v3_0_1_getInstance();
      case 'v3_1_1':
        return Version_v3_1_1_getInstance();
      case 'v3_2_1':
        return Version_v3_2_1_getInstance();
      case 'v3_2_2':
        return Version_v3_2_2_getInstance();
      case 'v3_2_3':
        return Version_v3_2_3_getInstance();
      case 'v3_3_1':
        return Version_v3_3_1_getInstance();
      case 'v3_3_2':
        return Version_v3_3_2_getInstance();
      case 'v3_3_3':
        return Version_v3_3_3_getInstance();
      case 'v3_4_1':
        return Version_v3_4_1_getInstance();
      case 'v3_5_1':
        return Version_v3_5_1_getInstance();
      case 'v3_6_3':
        return Version_v3_6_3_getInstance();
      case 'v3_7_2':
        return Version_v3_7_2_getInstance();
      default:
        Version_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Version_entriesInitialized;
  function Version_initEntries() {
    if (Version_entriesInitialized)
      return Unit_getInstance();
    Version_entriesInitialized = true;
    Version_v3_0_0_instance = new Version('v3_0_0', 0);
    Version_v3_0_1_instance = new Version('v3_0_1', 1);
    Version_v3_1_1_instance = new Version('v3_1_1', 2);
    Version_v3_2_1_instance = new Version('v3_2_1', 3);
    Version_v3_2_2_instance = new Version('v3_2_2', 4);
    Version_v3_2_3_instance = new Version('v3_2_3', 5);
    Version_v3_3_1_instance = new Version('v3_3_1', 6);
    Version_v3_3_2_instance = new Version('v3_3_2', 7);
    Version_v3_3_3_instance = new Version('v3_3_3', 8);
    Version_v3_4_1_instance = new Version('v3_4_1', 9);
    Version_v3_5_1_instance = new Version('v3_5_1', 10);
    Version_v3_6_3_instance = new Version('v3_6_3', 11);
    Version_v3_7_2_instance = new Version('v3_7_2', 12);
  }
  function Version(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Version_v3_0_0_getInstance() {
    Version_initEntries();
    return Version_v3_0_0_instance;
  }
  function Version_v3_0_1_getInstance() {
    Version_initEntries();
    return Version_v3_0_1_instance;
  }
  function Version_v3_1_1_getInstance() {
    Version_initEntries();
    return Version_v3_1_1_instance;
  }
  function Version_v3_2_1_getInstance() {
    Version_initEntries();
    return Version_v3_2_1_instance;
  }
  function Version_v3_2_2_getInstance() {
    Version_initEntries();
    return Version_v3_2_2_instance;
  }
  function Version_v3_2_3_getInstance() {
    Version_initEntries();
    return Version_v3_2_3_instance;
  }
  function Version_v3_3_1_getInstance() {
    Version_initEntries();
    return Version_v3_3_1_instance;
  }
  function Version_v3_3_2_getInstance() {
    Version_initEntries();
    return Version_v3_3_2_instance;
  }
  function Version_v3_3_3_getInstance() {
    Version_initEntries();
    return Version_v3_3_3_instance;
  }
  function Version_v3_4_1_getInstance() {
    Version_initEntries();
    return Version_v3_4_1_instance;
  }
  function Version_v3_5_1_getInstance() {
    Version_initEntries();
    return Version_v3_5_1_instance;
  }
  function Version_v3_6_3_getInstance() {
    Version_initEntries();
    return Version_v3_6_3_instance;
  }
  function Version_v3_7_2_getInstance() {
    Version_initEntries();
    return Version_v3_7_2_instance;
  }
  function ApolloDeprecatedSince(version) {
    this.version_1 = version;
  }
  ApolloDeprecatedSince.prototype.get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  ApolloDeprecatedSince.prototype.equals = function (other) {
    if (!(other instanceof ApolloDeprecatedSince))
      return false;
    var tmp0_other_with_cast = other instanceof ApolloDeprecatedSince ? other : THROW_CCE();
    if (!this.version_1.equals(tmp0_other_with_cast.version_1))
      return false;
    return true;
  };
  ApolloDeprecatedSince.prototype.hashCode = function () {
    return imul(getStringHashCode('version'), 127) ^ this.version_1.hashCode();
  };
  ApolloDeprecatedSince.prototype.toString = function () {
    return '@com.apollographql.apollo3.annotations.ApolloDeprecatedSince(version=' + this.version_1 + ')';
  };
  function ApolloExperimental() {
  }
  ApolloExperimental.prototype.equals = function (other) {
    if (!(other instanceof ApolloExperimental))
      return false;
    var tmp0_other_with_cast = other instanceof ApolloExperimental ? other : THROW_CCE();
    return true;
  };
  ApolloExperimental.prototype.hashCode = function () {
    return 0;
  };
  ApolloExperimental.prototype.toString = function () {
    return '@com.apollographql.apollo3.annotations.ApolloExperimental()';
  };
  function ApolloInternal() {
  }
  ApolloInternal.prototype.equals = function (other) {
    if (!(other instanceof ApolloInternal))
      return false;
    var tmp0_other_with_cast = other instanceof ApolloInternal ? other : THROW_CCE();
    return true;
  };
  ApolloInternal.prototype.hashCode = function () {
    return 0;
  };
  ApolloInternal.prototype.toString = function () {
    return '@com.apollographql.apollo3.annotations.ApolloInternal()';
  };
  function ApolloAdaptableWith(adapter) {
    this.adapter_1 = adapter;
  }
  ApolloAdaptableWith.prototype.get_adapter_hrffru_k$ = function () {
    return this.adapter_1;
  };
  ApolloAdaptableWith.prototype.equals = function (other) {
    if (!(other instanceof ApolloAdaptableWith))
      return false;
    var tmp0_other_with_cast = other instanceof ApolloAdaptableWith ? other : THROW_CCE();
    if (!this.adapter_1.equals(tmp0_other_with_cast.adapter_1))
      return false;
    return true;
  };
  ApolloAdaptableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('adapter'), 127) ^ this.adapter_1.hashCode();
  };
  ApolloAdaptableWith.prototype.toString = function () {
    return '@com.apollographql.apollo3.annotations.ApolloAdaptableWith(adapter=' + this.adapter_1 + ')';
  };
  return _;
}));
