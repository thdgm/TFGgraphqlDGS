(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'uuid-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'uuid-js-ir'.");
    }
    root['uuid-js-ir'] = factory(typeof this['uuid-js-ir'] === 'undefined' ? {} : this['uuid-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var until = kotlin_kotlin.$_$.qc;
  var listOf = kotlin_kotlin.$_$.l8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.h3;
  var plus = kotlin_kotlin.$_$.t8;
  var Default_getInstance = kotlin_kotlin.$_$.h5;
  var Long = kotlin_kotlin.$_$.cf;
  var toLong = kotlin_kotlin.$_$.ec;
  var downTo = kotlin_kotlin.$_$.nc;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.i3;
  var objectMeta = kotlin_kotlin.$_$.bc;
  var setMetadataFor = kotlin_kotlin.$_$.cc;
  var toString = kotlin_kotlin.$_$.gc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var charArray = kotlin_kotlin.$_$.ta;
  var concatToString = kotlin_kotlin.$_$.dd;
  var contentEquals = kotlin_kotlin.$_$.v6;
  var contentHashCode = kotlin_kotlin.$_$.w6;
  var compareTo = kotlin_kotlin.$_$.ya;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var Comparable = kotlin_kotlin.$_$.se;
  var classMeta = kotlin_kotlin.$_$.xa;
  var toByte = kotlin_kotlin.$_$.dc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Uuid, 'Uuid', classMeta, undefined, [Comparable], undefined, undefined, []);
  //endregion
  function get_UUID_CHAR_RANGES() {
    init_properties_uuid_kt_4sj141();
    return UUID_CHAR_RANGES;
  }
  var UUID_CHAR_RANGES;
  function get_UUID_HYPHEN_INDICES() {
    init_properties_uuid_kt_4sj141();
    return UUID_HYPHEN_INDICES;
  }
  var UUID_HYPHEN_INDICES;
  function get_UUID_CHARS() {
    init_properties_uuid_kt_4sj141();
    return UUID_CHARS;
  }
  var UUID_CHARS;
  function get_UUID_BYTES() {
    return UUID_BYTES;
  }
  var UUID_BYTES;
  function get_UUID_STRING_LENGTH() {
    return UUID_STRING_LENGTH;
  }
  var UUID_STRING_LENGTH;
  var properties_initialized_uuid_kt_pyvynx;
  function init_properties_uuid_kt_4sj141() {
    if (properties_initialized_uuid_kt_pyvynx) {
    } else {
      properties_initialized_uuid_kt_pyvynx = true;
      UUID_CHAR_RANGES = listOf([until(0, 8), until(9, 13), until(14, 18), until(19, 23), until(24, 36)]);
      UUID_HYPHEN_INDICES = listOf([8, 13, 18, 23]);
      UUID_CHARS = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)));
    }
  }
  function freeze(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function getRandomUuidBytes() {
    return Default_getInstance().nextBytes_oxmcdz_k$(get_UUID_BYTES());
  }
  function bits(_this__u8e3s4, $this, start, end) {
    var b = new Long(0, 0);
    var i = start;
    $l$1: do {
      $l$0: do {
        b = b.shl_po5ip6_k$(8).or_s401rn_k$(toLong(_this__u8e3s4[i]).and_jhajnj_k$(new Long(255, 0)));
      }
       while (false);
      i = i + 1 | 0;
    }
     while (i < end);
    return b;
  }
  function fromBits($this, msb, lsb) {
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Int8Array(get_UUID_BYTES());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.Companion.fromBits.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = downTo(7, 0);
    var accumulator = msb;
    var inductionVariable = tmp0_fold.get_first_irdx8n_k$();
    var last = tmp0_fold.get_last_wopotb_k$();
    var step = tmp0_fold.get_step_woujh1_k$();
    if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + step | 0;
        var tmp$ret$0;
        // Inline function 'com.benasher44.uuid.Companion.fromBits.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = accumulator;
        tmp0_also[element] = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
        tmp$ret$0 = tmp1__anonymous__uwfjfc.shr_wjue3g_k$(8);
        accumulator = tmp$ret$0;
      }
       while (!(element === last));
    tmp$ret$1 = accumulator;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var tmp2_fold = downTo(15, 8);
    var accumulator_0 = lsb;
    var inductionVariable_0 = tmp2_fold.get_first_irdx8n_k$();
    var last_0 = tmp2_fold.get_last_wopotb_k$();
    var step_0 = tmp2_fold.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable_0 <= last_0 : false) ? true : step_0 < 0 ? last_0 <= inductionVariable_0 : false)
      do {
        var element_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_0 | 0;
        var tmp$ret$2;
        // Inline function 'com.benasher44.uuid.Companion.fromBits.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = accumulator_0;
        tmp0_also[element_0] = tmp3__anonymous__ufb84q.and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
        tmp$ret$2 = tmp3__anonymous__ufb84q.shr_wjue3g_k$(8);
        accumulator_0 = tmp$ret$2;
      }
       while (!(element_0 === last_0));
    tmp$ret$3 = accumulator_0;
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  }
  function halfByteFromChar($this, char) {
    var tmp0_subject = char;
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(char);
      tmp = tmp$ret$0 - 48 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(char);
      tmp = tmp$ret$1 - 87 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(char);
      tmp = tmp$ret$2 - 55 | 0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _get_uuidByteRanges__vs2yge($this) {
    return $this.uuidByteRanges_1;
  }
  function Uuid_init_$Init$(msb, lsb, $this) {
    Uuid.call($this, fromBits(Companion_getInstance(), msb, lsb));
    return $this;
  }
  function Uuid_init_$Create$(msb, lsb) {
    return Uuid_init_$Init$(msb, lsb, Object.create(Uuid.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.uuidByteRanges_1 = listOf([until(0, 4), until(4, 6), until(6, 8), until(8, 10), until(10, 16)]);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Uuid(uuidBytes) {
    Companion_getInstance();
    this.uuidBytes_1 = uuidBytes;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.count' call
    var tmp0_count = this.uuidBytes_1;
    tmp$ret$0 = tmp0_count.length;
    var tmp1_require = tmp$ret$0 === get_UUID_BYTES();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'com.benasher44.uuid.Uuid.<anonymous>' call
      var tmp = get_UUID_BYTES();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.count' call
      var tmp0_count_0 = this.uuidBytes_1;
      tmp$ret$1 = tmp0_count_0.length;
      tmp$ret$2 = 'Invalid UUID bytes. Expected ' + tmp + ' bytes; found ' + tmp$ret$1;
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    freeze(this);
  }
  Uuid.prototype.get_uuidBytes_in7ak9_k$ = function () {
    return this.uuidBytes_1;
  };
  Uuid.prototype.get_mostSignificantBits_50ugdp_k$ = function () {
    return bits(this.uuidBytes_1, Companion_getInstance(), 0, 8);
  };
  Uuid.prototype.get_leastSignificantBits_mmkdbt_k$ = function () {
    return bits(this.uuidBytes_1, Companion_getInstance(), 8, 16);
  };
  Uuid.prototype.toString = function () {
    var characters = charArray(get_UUID_STRING_LENGTH());
    var charIndex = 0;
    var tmp0_iterator = Companion_getInstance().uuidByteRanges_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var range = tmp0_iterator.next_20eer_k$();
      var inductionVariable = range.get_first_irdx8n_k$();
      var last = range.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var octetPair = this.uuidBytes_1[i];
          var left = octetPair >> 4 & 15;
          var right = octetPair & 15;
          var tmp2 = charIndex;
          charIndex = tmp2 + 1 | 0;
          characters[tmp2] = get_UUID_CHARS().get_fkrdnv_k$(left).value_1;
          var tmp3 = charIndex;
          charIndex = tmp3 + 1 | 0;
          characters[tmp3] = get_UUID_CHARS().get_fkrdnv_k$(right).value_1;
        }
         while (!(i === last));
      if (charIndex < get_UUID_STRING_LENGTH()) {
        var tmp4 = charIndex;
        charIndex = tmp4 + 1 | 0;
        characters[tmp4] = _Char___init__impl__6a9atx(45);
      }
    }
    return concatToString(characters);
  };
  Uuid.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Uuid) {
      tmp = contentEquals(this.uuidBytes_1, other.uuidBytes_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Uuid.prototype.hashCode = function () {
    return contentHashCode(this.uuidBytes_1);
  };
  Uuid.prototype.compareTo_a3ihes_k$ = function (other) {
    var inductionVariable = 0;
    var last = get_UUID_BYTES();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var compareResult = compareTo(this.uuidBytes_1[i], other.uuidBytes_1[i]);
        if (!(compareResult === 0))
          return compareResult;
      }
       while (inductionVariable < last);
    return 0;
  };
  Uuid.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_a3ihes_k$(other instanceof Uuid ? other : THROW_CCE());
  };
  function uuid4() {
    var tmp$ret$1;
    // Inline function 'com.benasher44.uuid.setVersion' call
    var tmp0_setVersion = getRandomUuidBytes();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.setVersion.<anonymous>' call
    tmp0_setVersion[6] = toByte(tmp0_setVersion[6] & 15 | 64);
    tmp0_setVersion[8] = toByte(tmp0_setVersion[8] & 63 | 128);
    tmp$ret$0 = tmp0_setVersion;
    tmp$ret$1 = tmp$ret$0;
    return new Uuid(tmp$ret$1);
  }
  function setVersion(_this__u8e3s4, version) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.setVersion.<anonymous>' call
    _this__u8e3s4[6] = toByte(_this__u8e3s4[6] & 15 | version << 4);
    _this__u8e3s4[8] = toByte(_this__u8e3s4[8] & 63 | 128);
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  //region block: init
  UUID_BYTES = 16;
  UUID_STRING_LENGTH = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = uuid4;
  //endregion
  return _;
}));
