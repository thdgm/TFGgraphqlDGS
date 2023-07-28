(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'okio-parent-okio-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'okio-parent-okio-js-ir'.");
    }
    root['okio-parent-okio-js-ir'] = factory(typeof this['okio-parent-okio-js-ir'] === 'undefined' ? {} : this['okio-parent-okio-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toString = kotlin_kotlin.$_$.v7;
  var Long = kotlin_kotlin.$_$.n9;
  var classMeta = kotlin_kotlin.$_$.w6;
  var setMetadataFor = kotlin_kotlin.$_$.r7;
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var toLong = kotlin_kotlin.$_$.t7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var toMutableList = kotlin_kotlin.$_$.q5;
  var sort = kotlin_kotlin.$_$.k5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var mutableListOf = kotlin_kotlin.$_$.z4;
  var binarySearch$default = kotlin_kotlin.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.q7;
  var AbstractList = kotlin_kotlin.$_$.b3;
  var RandomAccess = kotlin_kotlin.$_$.l3;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var arrayCopy = kotlin_kotlin.$_$.o3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var toByte = kotlin_kotlin.$_$.s7;
  var charArrayOf = kotlin_kotlin.$_$.r6;
  var charSequenceGet = kotlin_kotlin.$_$.t6;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.f2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var copyOf = kotlin_kotlin.$_$.w3;
  var charArray = kotlin_kotlin.$_$.s6;
  var numberToChar = kotlin_kotlin.$_$.n7;
  var concatToString = kotlin_kotlin.$_$.i8;
  var captureStack = kotlin_kotlin.$_$.q6;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.m9;
  var IndexOutOfBoundsException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var Exception = kotlin_kotlin.$_$.j9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.l1;
  var numberToLong = kotlin_kotlin.$_$.p7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var Companion_getInstance = kotlin_kotlin.$_$.x2;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.g1;
  var fillArrayVal = kotlin_kotlin.$_$.a7;
  var THROW_CCE = kotlin_kotlin.$_$.r9;
  var isArray = kotlin_kotlin.$_$.g7;
  var interfaceMeta = kotlin_kotlin.$_$.f7;
  var concatToString_0 = kotlin_kotlin.$_$.h8;
  var contentHashCode = kotlin_kotlin.$_$.u3;
  var copyOfRange = kotlin_kotlin.$_$.v3;
  var replace$default = kotlin_kotlin.$_$.n;
  var Comparable = kotlin_kotlin.$_$.f9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BlackholeSink, 'BlackholeSink', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Options, 'Options', classMeta, AbstractList, [AbstractList, RandomAccess], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Segment, 'Segment', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IOException, 'IOException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(ArrayIndexOutOfBoundsException, 'ArrayIndexOutOfBoundsException', classMeta, IndexOutOfBoundsException, undefined, undefined, undefined, []);
  setMetadataFor(UnsafeCursor, 'UnsafeCursor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferedSource, 'BufferedSource', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Buffer, 'Buffer', classMeta, undefined, [BufferedSource], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ByteString, 'ByteString', classMeta, undefined, [Comparable], undefined, undefined, []);
  setMetadataFor(RealBufferedSink, 'RealBufferedSink', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RealBufferedSource, 'RealBufferedSource', classMeta, undefined, [BufferedSource], undefined, undefined, []);
  setMetadataFor(SegmentPool, 'SegmentPool', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SegmentedByteString, 'SegmentedByteString', classMeta, ByteString, undefined, undefined, undefined, []);
  //endregion
  var DEFAULT__new_UnsafeCursor;
  function get_DEFAULT__ByteString_size() {
    init_properties__Util_kt_azk279();
    return DEFAULT__ByteString_size;
  }
  var DEFAULT__ByteString_size;
  function checkOffsetAndCount(size, offset, byteCount) {
    init_properties__Util_kt_azk279();
    if ((offset.xc(byteCount).v(new Long(0, 0)) < 0 ? true : offset.v(size) > 0) ? true : size.s5(offset).v(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('size=' + toString(size) + ' offset=' + toString(offset) + ' byteCount=' + toString(byteCount));
    }
  }
  function resolveDefaultParameter(_this__u8e3s4, position) {
    init_properties__Util_kt_azk279();
    if (position === get_DEFAULT__ByteString_size())
      return _this__u8e3s4.c();
    return position;
  }
  function arrayRangeEquals(a, aOffset, b, bOffset, byteCount) {
    init_properties__Util_kt_azk279();
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(a[i + aOffset | 0] === b[i + bOffset | 0]))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  var properties_initialized__Util_kt_67kc5b;
  function init_properties__Util_kt_azk279() {
    if (properties_initialized__Util_kt_67kc5b) {
    } else {
      properties_initialized__Util_kt_67kc5b = true;
      DEFAULT__new_UnsafeCursor = new UnsafeCursor();
      DEFAULT__ByteString_size = -1234567890;
    }
  }
  function buffer(_this__u8e3s4) {
    return new RealBufferedSource(_this__u8e3s4);
  }
  function blackholeSink() {
    return new BlackholeSink();
  }
  function buffer_0(_this__u8e3s4) {
    return new RealBufferedSink(_this__u8e3s4);
  }
  function BlackholeSink() {
  }
  BlackholeSink.prototype.b25 = function (source, byteCount) {
    return source.e25(byteCount);
  };
  BlackholeSink.prototype.da = function () {
  };
  BlackholeSink.prototype.v15 = function () {
  };
  function buildTrieRecursive($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex < toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.require' call
        var tmp1_require = byteStrings.f(i).c() >= byteStringOffset;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlin.require.<anonymous>' call
          tmp$ret$1 = 'Failed requirement.';
          var message_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
       while (inductionVariable < toIndex);
    var fromIndex_0 = fromIndex;
    var from = byteStrings.f(fromIndex_0);
    var to = byteStrings.f(toIndex - 1 | 0);
    var prefixIndex = -1;
    if (byteStringOffset === from.c()) {
      prefixIndex = indexes.f(fromIndex_0);
      var tmp1 = fromIndex_0;
      fromIndex_0 = tmp1 + 1 | 0;
      from = byteStrings.f(fromIndex_0);
    }
    if (!(from.f(byteStringOffset) === to.f(byteStringOffset))) {
      var selectChoiceCount = 1;
      var inductionVariable_0 = fromIndex_0 + 1 | 0;
      if (inductionVariable_0 < toIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (!(byteStrings.f(i_0 - 1 | 0).f(byteStringOffset) === byteStrings.f(i_0).f(byteStringOffset))) {
            var tmp3 = selectChoiceCount;
            selectChoiceCount = tmp3 + 1 | 0;
          }
        }
         while (inductionVariable_0 < toIndex);
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp2_plus = nodeOffset.r5(_get_intCount__gol563(node, $this));
      tmp$ret$2 = tmp2_plus.r5(new Long(2, 0));
      var tmp3_plus = tmp$ret$2;
      var tmp4_plus = imul(selectChoiceCount, 2);
      tmp$ret$3 = tmp3_plus.r5(toLong(tmp4_plus));
      var childNodesOffset = tmp$ret$3;
      node.f25(selectChoiceCount);
      node.f25(prefixIndex);
      var inductionVariable_1 = fromIndex_0;
      if (inductionVariable_1 < toIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var rangeByte = byteStrings.f(i_1).f(byteStringOffset);
          if (i_1 === fromIndex_0 ? true : !(rangeByte === byteStrings.f(i_1 - 1 | 0).f(byteStringOffset))) {
            var tmp$ret$4;
            // Inline function 'okio.and' call
            tmp$ret$4 = rangeByte & 255;
            node.f25(tmp$ret$4);
          }
        }
         while (inductionVariable_1 < toIndex);
      var childNodes = new Buffer();
      var rangeStart = fromIndex_0;
      while (rangeStart < toIndex) {
        var rangeByte_0 = byteStrings.f(rangeStart).f(byteStringOffset);
        var rangeEnd = toIndex;
        var inductionVariable_2 = rangeStart + 1 | 0;
        if (inductionVariable_2 < toIndex)
          $l$loop: do {
            var i_2 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            if (!(rangeByte_0 === byteStrings.f(i_2).f(byteStringOffset))) {
              rangeEnd = i_2;
              break $l$loop;
            }
          }
           while (inductionVariable_2 < toIndex);
        if ((rangeStart + 1 | 0) === rangeEnd ? (byteStringOffset + 1 | 0) === byteStrings.f(rangeStart).c() : false) {
          node.f25(indexes.f(rangeStart));
        } else {
          node.f25(imul(-1, childNodesOffset.r5(_get_intCount__gol563(childNodes, $this)).yc()));
          buildTrieRecursive($this, childNodesOffset, childNodes, byteStringOffset + 1 | 0, byteStrings, rangeStart, rangeEnd, indexes);
        }
        rangeStart = rangeEnd;
      }
      node.g25(childNodes);
    } else {
      var scanByteCount = 0;
      var inductionVariable_3 = byteStringOffset;
      var tmp$ret$5;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp5_minOf = from.c();
      var tmp6_minOf = to.c();
      tmp$ret$5 = Math.min(tmp5_minOf, tmp6_minOf);
      var last = tmp$ret$5;
      if (inductionVariable_3 < last)
        $l$loop_0: do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          if (from.f(i_3) === to.f(i_3)) {
            var tmp7 = scanByteCount;
            scanByteCount = tmp7 + 1 | 0;
          } else {
            break $l$loop_0;
          }
        }
         while (inductionVariable_3 < last);
      var tmp$ret$8;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$7;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$6;
      // Inline function 'kotlin.Long.plus' call
      var tmp7_plus = nodeOffset.r5(_get_intCount__gol563(node, $this));
      tmp$ret$6 = tmp7_plus.r5(new Long(2, 0));
      var tmp8_plus = tmp$ret$6;
      var tmp9_plus = scanByteCount;
      tmp$ret$7 = tmp8_plus.r5(toLong(tmp9_plus));
      var tmp10_plus = tmp$ret$7;
      tmp$ret$8 = tmp10_plus.r5(new Long(1, 0));
      var childNodesOffset_0 = tmp$ret$8;
      node.f25(-scanByteCount | 0);
      node.f25(prefixIndex);
      var inductionVariable_4 = byteStringOffset;
      var last_0 = byteStringOffset + scanByteCount | 0;
      if (inductionVariable_4 < last_0)
        do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp$ret$9;
          // Inline function 'okio.and' call
          var tmp11_and = from.f(i_4);
          tmp$ret$9 = tmp11_and & 255;
          node.f25(tmp$ret$9);
        }
         while (inductionVariable_4 < last_0);
      if ((fromIndex_0 + 1 | 0) === toIndex) {
        // Inline function 'kotlin.check' call
        var tmp12_check = (byteStringOffset + scanByteCount | 0) === byteStrings.f(fromIndex_0).c();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp12_check) {
          var tmp$ret$10;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$10 = 'Check failed.';
          var message_1 = tmp$ret$10;
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        node.f25(indexes.f(fromIndex_0));
      } else {
        var childNodes_0 = new Buffer();
        node.f25(imul(-1, childNodesOffset_0.r5(_get_intCount__gol563(childNodes_0, $this)).yc()));
        buildTrieRecursive($this, childNodesOffset_0, childNodes_0, byteStringOffset + scanByteCount | 0, byteStrings, fromIndex_0, toIndex, indexes);
        node.g25(childNodes_0);
      }
    }
  }
  function buildTrieRecursive$default($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      nodeOffset = new Long(0, 0);
    if (!(($mask0 & 8) === 0))
      byteStringOffset = 0;
    if (!(($mask0 & 32) === 0))
      fromIndex = 0;
    if (!(($mask0 & 64) === 0))
      toIndex = byteStrings.c();
    return buildTrieRecursive($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes);
  }
  function _get_intCount__gol563(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = _this__u8e3s4.d25_1;
    tmp$ret$0 = tmp0_div.p5(new Long(4, 0));
    return tmp$ret$0;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.h25 = function (byteStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = byteStrings.length === 0;
    if (tmp$ret$0) {
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = [];
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$4 = new Int32Array([0, -1]);
      return new Options(tmp, tmp$ret$4);
    }
    var list = toMutableList(byteStrings);
    sort(list);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(byteStrings.length);
    var indexedObject = byteStrings;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$5;
      // Inline function 'okio.Companion.of.<anonymous>' call
      tmp$ret$5 = -1;
      tmp0_mapTo.a(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    var tmp0_toTypedArray = tmp$ret$7;
    tmp$ret$8 = copyToArray(tmp0_toTypedArray);
    var indexes = mutableListOf(tmp$ret$8.slice());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject_0 = byteStrings;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'okio.Companion.of.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = tmp1;
      var sortedIndex = binarySearch$default(list, item_0, 0, 0, 6, null);
      indexes.w6(sortedIndex, tmp1__anonymous__uwfjfc);
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = list.f(0).c() > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$9;
      // Inline function 'okio.Companion.of.<anonymous>' call
      tmp$ret$9 = 'the empty byte string is not a supported option';
      var message = tmp$ret$9;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var a = 0;
    while (a < list.c()) {
      var prefix = list.f(a);
      var b = a + 1 | 0;
      $l$loop: while (b < list.c()) {
        var byteString = list.f(b);
        if (!byteString.i25(prefix))
          break $l$loop;
        // Inline function 'kotlin.require' call
        var tmp3_require = !(byteString.c() === prefix.c());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp3_require) {
          var tmp$ret$10;
          // Inline function 'okio.Companion.of.<anonymous>' call
          tmp$ret$10 = 'duplicate option: ' + byteString;
          var message_0 = tmp$ret$10;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        if (indexes.f(b) > indexes.f(a)) {
          list.e7(b);
          indexes.e7(b);
        } else {
          var tmp0 = b;
          b = tmp0 + 1 | 0;
        }
      }
      var tmp1_0 = a;
      a = tmp1_0 + 1 | 0;
    }
    var trieBytes = new Buffer();
    var tmp_0 = new Long(0, 0);
    buildTrieRecursive$default(this, tmp_0, trieBytes, 0, list, 0, 0, indexes, 106, null);
    var trie = new Int32Array(_get_intCount__gol563(trieBytes, this).yc());
    var i = 0;
    while (!trieBytes.j25()) {
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      trie[tmp2] = trieBytes.k25();
    }
    var tmp$ret$12;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = byteStrings;
    tmp$ret$12 = tmp$ret$11.slice();
    return new Options(tmp$ret$12, trie);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Options(byteStrings, trie) {
    Companion_getInstance_0();
    AbstractList.call(this);
    this.l25_1 = byteStrings;
    this.m25_1 = trie;
  }
  Options.prototype.c = function () {
    return this.l25_1.length;
  };
  Options.prototype.f = function (index) {
    return this.l25_1[index];
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    var tmp = $this;
    Companion_getInstance_1();
    tmp.n25_1 = new Int8Array(8192);
    $this.r25_1 = true;
    $this.q25_1 = false;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(Object.create(Segment.prototype));
  }
  function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
    Segment.call($this);
    $this.n25_1 = data;
    $this.o25_1 = pos;
    $this.p25_1 = limit;
    $this.q25_1 = shared;
    $this.r25_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shared, owner, Object.create(Segment.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.u25_1 = 8192;
    this.v25_1 = 1024;
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  Segment.prototype.w25 = function () {
    this.q25_1 = true;
    return Segment_init_$Create$_0(this.n25_1, this.o25_1, this.p25_1, true, false);
  };
  Segment.prototype.x25 = function () {
    var result = !(this.s25_1 === this) ? this.s25_1 : null;
    ensureNotNull(this.t25_1).s25_1 = this.s25_1;
    ensureNotNull(this.s25_1).t25_1 = this.t25_1;
    this.s25_1 = null;
    this.t25_1 = null;
    return result;
  };
  Segment.prototype.y25 = function (segment) {
    segment.t25_1 = this;
    segment.s25_1 = this.s25_1;
    ensureNotNull(this.s25_1).t25_1 = segment;
    this.s25_1 = segment;
    return segment;
  };
  Segment.prototype.z25 = function (byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount > 0 ? byteCount <= (this.p25_1 - this.o25_1 | 0) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.split.<anonymous>' call
      tmp$ret$0 = 'byteCount out of range';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    Companion_getInstance_1();
    if (byteCount >= 1024) {
      prefix = this.w25();
    } else {
      prefix = SegmentPool_getInstance().c26();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.n25_1;
      var tmp2_copyInto = prefix.n25_1;
      var tmp3_copyInto = this.o25_1;
      var tmp4_copyInto = this.o25_1 + byteCount | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, 0, tmp3_copyInto, tmp4_copyInto);
      tmp$ret$5 = tmp2_copyInto;
    }
    prefix.p25_1 = prefix.o25_1 + byteCount | 0;
    var tmp0_this = this;
    tmp0_this.o25_1 = tmp0_this.o25_1 + byteCount | 0;
    ensureNotNull(this.t25_1).y25(prefix);
    return prefix;
  };
  Segment.prototype.d26 = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.t25_1 === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.compact.<anonymous>' call
      tmp$ret$0 = 'cannot compact';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.t25_1).r25_1)
      return Unit_getInstance();
    var byteCount = this.p25_1 - this.o25_1 | 0;
    Companion_getInstance_1();
    var availableByteCount = (8192 - ensureNotNull(this.t25_1).p25_1 | 0) + (ensureNotNull(this.t25_1).q25_1 ? 0 : ensureNotNull(this.t25_1).o25_1) | 0;
    if (byteCount > availableByteCount)
      return Unit_getInstance();
    this.e26(ensureNotNull(this.t25_1), byteCount);
    this.x25();
    SegmentPool_getInstance().f26(this);
  };
  Segment.prototype.e26 = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = sink.r25_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.writeTo.<anonymous>' call
      tmp$ret$0 = 'only owner can write';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = sink.p25_1 + byteCount | 0;
    Companion_getInstance_1();
    if (tmp > 8192) {
      if (sink.q25_1)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp_0 = (sink.p25_1 + byteCount | 0) - sink.o25_1 | 0;
      Companion_getInstance_1();
      if (tmp_0 > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = sink.n25_1;
      var tmp2_copyInto = sink.n25_1;
      var tmp3_copyInto = sink.o25_1;
      var tmp4_copyInto = sink.p25_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_1, tmp$ret$4, 0, tmp3_copyInto, tmp4_copyInto);
      tmp$ret$5 = tmp2_copyInto;
      var tmp0_this = sink;
      tmp0_this.p25_1 = tmp0_this.p25_1 - sink.o25_1 | 0;
      sink.o25_1 = 0;
    }
    var tmp$ret$10;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.n25_1;
    var tmp6_copyInto = sink.n25_1;
    var tmp7_copyInto = sink.p25_1;
    var tmp8_copyInto = this.o25_1;
    var tmp9_copyInto = this.o25_1 + byteCount | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = tmp5_copyInto;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = tmp6_copyInto;
    tmp$ret$9 = tmp$ret$8;
    arrayCopy(tmp_2, tmp$ret$9, tmp7_copyInto, tmp8_copyInto, tmp9_copyInto);
    tmp$ret$10 = tmp6_copyInto;
    var tmp1_this = sink;
    tmp1_this.p25_1 = tmp1_this.p25_1 + byteCount | 0;
    var tmp2_this = this;
    tmp2_this.o25_1 = tmp2_this.o25_1 + byteCount | 0;
  };
  function Segment() {
    Companion_getInstance_1();
    this.o25_1 = 0;
    this.p25_1 = 0;
    this.q25_1 = false;
    this.r25_1 = false;
    this.s25_1 = null;
    this.t25_1 = null;
  }
  function get_REPLACEMENT_CODE_POINT() {
    return REPLACEMENT_CODE_POINT;
  }
  var REPLACEMENT_CODE_POINT;
  function get_REPLACEMENT_BYTE() {
    return REPLACEMENT_BYTE;
  }
  var REPLACEMENT_BYTE;
  function get_MASK_2BYTES() {
    return MASK_2BYTES;
  }
  var MASK_2BYTES;
  function get_MASK_3BYTES() {
    return MASK_3BYTES;
  }
  var MASK_3BYTES;
  function get_MASK_4BYTES() {
    return MASK_4BYTES;
  }
  var MASK_4BYTES;
  function get_HIGH_SURROGATE_HEADER() {
    return HIGH_SURROGATE_HEADER;
  }
  var HIGH_SURROGATE_HEADER;
  function get_LOG_SURROGATE_HEADER() {
    return LOG_SURROGATE_HEADER;
  }
  var LOG_SURROGATE_HEADER;
  function get_REPLACEMENT_CHARACTER() {
    return REPLACEMENT_CHARACTER;
  }
  var REPLACEMENT_CHARACTER;
  var HEX_DIGIT_BYTES;
  function get_SEGMENTING_THRESHOLD() {
    return SEGMENTING_THRESHOLD;
  }
  var SEGMENTING_THRESHOLD;
  function readUtf8Line(_this__u8e3s4, newline) {
    init_properties__Buffer_kt_t3kap3();
    var tmp;
    var tmp_0;
    if (newline.v(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      tmp$ret$0 = newline.s5(new Long(1, 0));
      var tmp_1 = _this__u8e3s4.g26(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 13;
      tmp_0 = tmp_1 === toByte(tmp$ret$1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var result = _this__u8e3s4.h26(newline.s5(new Long(1, 0)));
      _this__u8e3s4.e25(new Long(2, 0));
      tmp = result;
    } else {
      var result_0 = _this__u8e3s4.h26(newline);
      _this__u8e3s4.e25(new Long(1, 0));
      tmp = result_0;
    }
    return tmp;
  }
  function selectPrefix(_this__u8e3s4, options, selectTruncated) {
    init_properties__Buffer_kt_t3kap3();
    var tmp0_elvis_lhs = _this__u8e3s4.c25_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return selectTruncated ? -2 : -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var s = head;
    var data = head.n25_1;
    var pos = head.o25_1;
    var limit = head.p25_1;
    var trie = options.m25_1;
    var triePos = 0;
    var prefixIndex = -1;
    navigateTrie: while (true) {
      var tmp1 = triePos;
      triePos = tmp1 + 1 | 0;
      var scanOrSelect = trie[tmp1];
      var tmp2 = triePos;
      triePos = tmp2 + 1 | 0;
      var possiblePrefixIndex = trie[tmp2];
      if (!(possiblePrefixIndex === -1)) {
        prefixIndex = possiblePrefixIndex;
      }
      var nextStep;
      if (s == null) {
        break navigateTrie;
      } else if (scanOrSelect < 0) {
        var scanByteCount = imul(-1, scanOrSelect);
        var trieLimit = triePos + scanByteCount | 0;
        $l$loop: while (true) {
          var tmp$ret$0;
          // Inline function 'okio.and' call
          var tmp_0 = data;
          var tmp3 = pos;
          pos = tmp3 + 1 | 0;
          var tmp0_and = tmp_0[tmp3];
          tmp$ret$0 = tmp0_and & 255;
          var byte = tmp$ret$0;
          var tmp4 = triePos;
          triePos = tmp4 + 1 | 0;
          if (!(byte === trie[tmp4]))
            return prefixIndex;
          var scanComplete = triePos === trieLimit;
          if (pos === limit) {
            s = ensureNotNull(ensureNotNull(s).s25_1);
            pos = s.o25_1;
            data = s.n25_1;
            limit = s.p25_1;
            if (s === head) {
              if (!scanComplete)
                break navigateTrie;
              s = null;
            }
          }
          if (scanComplete) {
            nextStep = trie[triePos];
            break $l$loop;
          }
        }
      } else {
        var selectChoiceCount = scanOrSelect;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp_1 = data;
        var tmp5 = pos;
        pos = tmp5 + 1 | 0;
        var tmp1_and = tmp_1[tmp5];
        tmp$ret$1 = tmp1_and & 255;
        var byte_0 = tmp$ret$1;
        var selectLimit = triePos + selectChoiceCount | 0;
        $l$loop_0: while (true) {
          if (triePos === selectLimit)
            return prefixIndex;
          if (byte_0 === trie[triePos]) {
            nextStep = trie[triePos + selectChoiceCount | 0];
            break $l$loop_0;
          }
          var tmp6 = triePos;
          triePos = tmp6 + 1 | 0;
        }
        if (pos === limit) {
          s = ensureNotNull(s.s25_1);
          pos = s.o25_1;
          data = s.n25_1;
          limit = s.p25_1;
          if (s === head) {
            s = null;
          }
        }
      }
      if (nextStep >= 0)
        return nextStep;
      triePos = -nextStep | 0;
    }
    if (selectTruncated)
      return -2;
    return prefixIndex;
  }
  function selectPrefix$default(_this__u8e3s4, options, selectTruncated, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      selectTruncated = false;
    return selectPrefix(_this__u8e3s4, options, selectTruncated);
  }
  function rangeEquals(segment, segmentPos, bytes, bytesOffset, bytesLimit) {
    init_properties__Buffer_kt_t3kap3();
    var segment_0 = segment;
    var segmentPos_0 = segmentPos;
    var segmentLimit = segment_0.p25_1;
    var data = segment_0.n25_1;
    var i = bytesOffset;
    while (i < bytesLimit) {
      if (segmentPos_0 === segmentLimit) {
        segment_0 = ensureNotNull(segment_0.s25_1);
        data = segment_0.n25_1;
        segmentPos_0 = segment_0.o25_1;
        segmentLimit = segment_0.p25_1;
      }
      if (!(data[segmentPos_0] === bytes[i])) {
        return false;
      }
      var tmp0 = segmentPos_0;
      segmentPos_0 = tmp0 + 1 | 0;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    return true;
  }
  var properties_initialized__Buffer_kt_iuq071;
  function init_properties__Buffer_kt_t3kap3() {
    if (properties_initialized__Buffer_kt_iuq071) {
    } else {
      properties_initialized__Buffer_kt_iuq071 = true;
      HEX_DIGIT_BYTES = asUtf8ToByteArray('0123456789abcdef');
    }
  }
  function get_HEX_DIGIT_CHARS() {
    init_properties__ByteString_kt_zd4rxu();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function commonWrite(_this__u8e3s4, buffer, offset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    buffer.i26(_this__u8e3s4.y24_1, offset, byteCount);
  }
  function codePointIndexToCharIndex(s, codePointCount) {
    init_properties__ByteString_kt_zd4rxu();
    var charCount = 0;
    var j = 0;
    // Inline function 'okio.processUtf8CodePoints' call
    var tmp0_processUtf8CodePoints = s.length;
    var index = 0;
    while (index < tmp0_processUtf8CodePoints) {
      var b0 = s[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
        var tmp1__anonymous__uwfjfc = b0;
        var tmp0 = j;
        j = tmp0 + 1 | 0;
        if (tmp0 === codePointCount) {
          return charCount;
        }
        var tmp;
        var tmp_0;
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 10;
        if (!(tmp1__anonymous__uwfjfc === tmp$ret$0)) {
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 13;
          tmp_1 = !(tmp1__anonymous__uwfjfc === tmp$ret$1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp$ret$2;
          // Inline function 'okio.isIsoControl' call
          tmp$ret$2 = (0 <= tmp1__anonymous__uwfjfc ? tmp1__anonymous__uwfjfc <= 31 : false) ? true : 127 <= tmp1__anonymous__uwfjfc ? tmp1__anonymous__uwfjfc <= 159 : false;
          tmp_0 = tmp$ret$2;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = true;
        } else {
          tmp = tmp1__anonymous__uwfjfc === get_REPLACEMENT_CODE_POINT();
        }
        if (tmp) {
          return -1;
        }
        charCount = charCount + (tmp1__anonymous__uwfjfc < 65536 ? 1 : 2) | 0;
        var tmp0_0 = index;
        index = tmp0_0 + 1 | 0;
        while (index < tmp0_processUtf8CodePoints ? s[index] >= 0 : false) {
          // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp2__anonymous__z9zvc9 = s[tmp1];
          var tmp0_1 = j;
          j = tmp0_1 + 1 | 0;
          if (tmp0_1 === codePointCount) {
            return charCount;
          }
          var tmp_2;
          var tmp_3;
          var tmp_4;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 10;
          if (!(tmp2__anonymous__z9zvc9 === tmp$ret$3)) {
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 13;
            tmp_4 = !(tmp2__anonymous__z9zvc9 === tmp$ret$4);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            var tmp$ret$5;
            // Inline function 'okio.isIsoControl' call
            tmp$ret$5 = (0 <= tmp2__anonymous__z9zvc9 ? tmp2__anonymous__z9zvc9 <= 31 : false) ? true : 127 <= tmp2__anonymous__z9zvc9 ? tmp2__anonymous__z9zvc9 <= 159 : false;
            tmp_3 = tmp$ret$5;
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp_2 = true;
          } else {
            tmp_2 = tmp2__anonymous__z9zvc9 === get_REPLACEMENT_CODE_POINT();
          }
          if (tmp_2) {
            return -1;
          }
          charCount = charCount + (tmp2__anonymous__z9zvc9 < 65536 ? 1 : 2) | 0;
        }
      } else {
        var tmp$ret$6;
        // Inline function 'okio.shr' call
        tmp$ret$6 = b0 >> 5;
        if (tmp$ret$6 === -2) {
          var tmp_5 = index;
          var tmp$ret$10;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (tmp0_processUtf8CodePoints <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_2 = j;
              j = tmp0_2 + 1 | 0;
              if (tmp0_2 === codePointCount) {
                return charCount;
              }
              var tmp_6;
              var tmp_7;
              var tmp_8;
              var tmp$ret$7;
              // Inline function 'kotlin.code' call
              tmp$ret$7 = 10;
              if (!(tmp1__anonymous__uwfjfc_0 === tmp$ret$7)) {
                var tmp$ret$8;
                // Inline function 'kotlin.code' call
                tmp$ret$8 = 13;
                tmp_8 = !(tmp1__anonymous__uwfjfc_0 === tmp$ret$8);
              } else {
                tmp_8 = false;
              }
              if (tmp_8) {
                var tmp$ret$9;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$9 = (0 <= tmp1__anonymous__uwfjfc_0 ? tmp1__anonymous__uwfjfc_0 <= 31 : false) ? true : 127 <= tmp1__anonymous__uwfjfc_0 ? tmp1__anonymous__uwfjfc_0 <= 159 : false;
                tmp_7 = tmp$ret$9;
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp_6 = true;
              } else {
                tmp_6 = tmp1__anonymous__uwfjfc_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_6) {
                return -1;
              }
              charCount = charCount + (tmp1__anonymous__uwfjfc_0 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var b0_0 = s[tmp0_process2Utf8Bytes];
            var b1 = s[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$12;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$11;
            // Inline function 'okio.and' call
            tmp$ret$11 = b1 & 192;
            tmp$ret$12 = tmp$ret$11 === 128;
            if (!tmp$ret$12) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp2__anonymous__z9zvc9_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_3 = j;
              j = tmp0_3 + 1 | 0;
              if (tmp0_3 === codePointCount) {
                return charCount;
              }
              var tmp_9;
              var tmp_10;
              var tmp_11;
              var tmp$ret$13;
              // Inline function 'kotlin.code' call
              tmp$ret$13 = 10;
              if (!(tmp2__anonymous__z9zvc9_0 === tmp$ret$13)) {
                var tmp$ret$14;
                // Inline function 'kotlin.code' call
                tmp$ret$14 = 13;
                tmp_11 = !(tmp2__anonymous__z9zvc9_0 === tmp$ret$14);
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                var tmp$ret$15;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$15 = (0 <= tmp2__anonymous__z9zvc9_0 ? tmp2__anonymous__z9zvc9_0 <= 31 : false) ? true : 127 <= tmp2__anonymous__z9zvc9_0 ? tmp2__anonymous__z9zvc9_0 <= 159 : false;
                tmp_10 = tmp$ret$15;
              } else {
                tmp_10 = false;
              }
              if (tmp_10) {
                tmp_9 = true;
              } else {
                tmp_9 = tmp2__anonymous__z9zvc9_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_9) {
                return -1;
              }
              charCount = charCount + (tmp2__anonymous__z9zvc9_0 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var codePoint = get_MASK_2BYTES() ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp3__anonymous__ufb84q = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_4 = j;
              j = tmp0_4 + 1 | 0;
              if (tmp0_4 === codePointCount) {
                return charCount;
              }
              var tmp_12;
              var tmp_13;
              var tmp_14;
              var tmp$ret$16;
              // Inline function 'kotlin.code' call
              tmp$ret$16 = 10;
              if (!(tmp3__anonymous__ufb84q === tmp$ret$16)) {
                var tmp$ret$17;
                // Inline function 'kotlin.code' call
                tmp$ret$17 = 13;
                tmp_14 = !(tmp3__anonymous__ufb84q === tmp$ret$17);
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                var tmp$ret$18;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$18 = (0 <= tmp3__anonymous__ufb84q ? tmp3__anonymous__ufb84q <= 31 : false) ? true : 127 <= tmp3__anonymous__ufb84q ? tmp3__anonymous__ufb84q <= 159 : false;
                tmp_13 = tmp$ret$18;
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp_12 = true;
              } else {
                tmp_12 = tmp3__anonymous__ufb84q === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_12) {
                return -1;
              }
              charCount = charCount + (tmp3__anonymous__ufb84q < 65536 ? 1 : 2) | 0;
            } else {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_5 = j;
              j = tmp0_5 + 1 | 0;
              if (tmp0_5 === codePointCount) {
                return charCount;
              }
              var tmp_15;
              var tmp_16;
              var tmp_17;
              var tmp$ret$19;
              // Inline function 'kotlin.code' call
              tmp$ret$19 = 10;
              if (!(codePoint === tmp$ret$19)) {
                var tmp$ret$20;
                // Inline function 'kotlin.code' call
                tmp$ret$20 = 13;
                tmp_17 = !(codePoint === tmp$ret$20);
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                var tmp$ret$21;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$21 = (0 <= codePoint ? codePoint <= 31 : false) ? true : 127 <= codePoint ? codePoint <= 159 : false;
                tmp_16 = tmp$ret$21;
              } else {
                tmp_16 = false;
              }
              if (tmp_16) {
                tmp_15 = true;
              } else {
                tmp_15 = codePoint === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_15) {
                return -1;
              }
              charCount = charCount + (codePoint < 65536 ? 1 : 2) | 0;
            }
            tmp$ret$10 = 2;
          }
          index = tmp_5 + tmp$ret$10 | 0;
        } else {
          var tmp$ret$22;
          // Inline function 'okio.shr' call
          tmp$ret$22 = b0 >> 4;
          if (tmp$ret$22 === -2) {
            var tmp_18 = index;
            var tmp$ret$28;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp5_process3Utf8Bytes = index;
              if (tmp0_processUtf8CodePoints <= (tmp5_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_6 = j;
                j = tmp0_6 + 1 | 0;
                if (tmp0_6 === codePointCount) {
                  return charCount;
                }
                var tmp_19;
                var tmp_20;
                var tmp_21;
                var tmp$ret$23;
                // Inline function 'kotlin.code' call
                tmp$ret$23 = 10;
                if (!(tmp6__anonymous__fv9ai5 === tmp$ret$23)) {
                  var tmp$ret$24;
                  // Inline function 'kotlin.code' call
                  tmp$ret$24 = 13;
                  tmp_21 = !(tmp6__anonymous__fv9ai5 === tmp$ret$24);
                } else {
                  tmp_21 = false;
                }
                if (tmp_21) {
                  var tmp$ret$25;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$25 = (0 <= tmp6__anonymous__fv9ai5 ? tmp6__anonymous__fv9ai5 <= 31 : false) ? true : 127 <= tmp6__anonymous__fv9ai5 ? tmp6__anonymous__fv9ai5 <= 159 : false;
                  tmp_20 = tmp$ret$25;
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_19 = true;
                } else {
                  tmp_19 = tmp6__anonymous__fv9ai5 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_19) {
                  return -1;
                }
                charCount = charCount + (tmp6__anonymous__fv9ai5 < 65536 ? 1 : 2) | 0;
                var tmp_22;
                if (tmp0_processUtf8CodePoints <= (tmp5_process3Utf8Bytes + 1 | 0)) {
                  tmp_22 = true;
                } else {
                  var tmp$ret$27;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp4_isUtf8Continuation = s[tmp5_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$26;
                  // Inline function 'okio.and' call
                  tmp$ret$26 = tmp4_isUtf8Continuation & 192;
                  tmp$ret$27 = tmp$ret$26 === 128;
                  tmp_22 = !tmp$ret$27;
                }
                if (tmp_22) {
                  tmp$ret$28 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$28 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = s[tmp5_process3Utf8Bytes];
              var b1_0 = s[tmp5_process3Utf8Bytes + 1 | 0];
              var tmp$ret$30;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$29;
              // Inline function 'okio.and' call
              tmp$ret$29 = b1_0 & 192;
              tmp$ret$30 = tmp$ret$29 === 128;
              if (!tmp$ret$30) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp7__anonymous__b0knam = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_7 = j;
                j = tmp0_7 + 1 | 0;
                if (tmp0_7 === codePointCount) {
                  return charCount;
                }
                var tmp_23;
                var tmp_24;
                var tmp_25;
                var tmp$ret$31;
                // Inline function 'kotlin.code' call
                tmp$ret$31 = 10;
                if (!(tmp7__anonymous__b0knam === tmp$ret$31)) {
                  var tmp$ret$32;
                  // Inline function 'kotlin.code' call
                  tmp$ret$32 = 13;
                  tmp_25 = !(tmp7__anonymous__b0knam === tmp$ret$32);
                } else {
                  tmp_25 = false;
                }
                if (tmp_25) {
                  var tmp$ret$33;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$33 = (0 <= tmp7__anonymous__b0knam ? tmp7__anonymous__b0knam <= 31 : false) ? true : 127 <= tmp7__anonymous__b0knam ? tmp7__anonymous__b0knam <= 159 : false;
                  tmp_24 = tmp$ret$33;
                } else {
                  tmp_24 = false;
                }
                if (tmp_24) {
                  tmp_23 = true;
                } else {
                  tmp_23 = tmp7__anonymous__b0knam === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_23) {
                  return -1;
                }
                charCount = charCount + (tmp7__anonymous__b0knam < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 1;
                break $l$block_4;
              }
              var b2 = s[tmp5_process3Utf8Bytes + 2 | 0];
              var tmp$ret$35;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$34;
              // Inline function 'okio.and' call
              tmp$ret$34 = b2 & 192;
              tmp$ret$35 = tmp$ret$34 === 128;
              if (!tmp$ret$35) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp8__anonymous__65w033 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_8 = j;
                j = tmp0_8 + 1 | 0;
                if (tmp0_8 === codePointCount) {
                  return charCount;
                }
                var tmp_26;
                var tmp_27;
                var tmp_28;
                var tmp$ret$36;
                // Inline function 'kotlin.code' call
                tmp$ret$36 = 10;
                if (!(tmp8__anonymous__65w033 === tmp$ret$36)) {
                  var tmp$ret$37;
                  // Inline function 'kotlin.code' call
                  tmp$ret$37 = 13;
                  tmp_28 = !(tmp8__anonymous__65w033 === tmp$ret$37);
                } else {
                  tmp_28 = false;
                }
                if (tmp_28) {
                  var tmp$ret$38;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$38 = (0 <= tmp8__anonymous__65w033 ? tmp8__anonymous__65w033 <= 31 : false) ? true : 127 <= tmp8__anonymous__65w033 ? tmp8__anonymous__65w033 <= 159 : false;
                  tmp_27 = tmp$ret$38;
                } else {
                  tmp_27 = false;
                }
                if (tmp_27) {
                  tmp_26 = true;
                } else {
                  tmp_26 = tmp8__anonymous__65w033 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_26) {
                  return -1;
                }
                charCount = charCount + (tmp8__anonymous__65w033 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 2;
                break $l$block_4;
              }
              var codePoint_0 = get_MASK_3BYTES() ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp9__anonymous__1b7cvk = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_9 = j;
                j = tmp0_9 + 1 | 0;
                if (tmp0_9 === codePointCount) {
                  return charCount;
                }
                var tmp_29;
                var tmp_30;
                var tmp_31;
                var tmp$ret$39;
                // Inline function 'kotlin.code' call
                tmp$ret$39 = 10;
                if (!(tmp9__anonymous__1b7cvk === tmp$ret$39)) {
                  var tmp$ret$40;
                  // Inline function 'kotlin.code' call
                  tmp$ret$40 = 13;
                  tmp_31 = !(tmp9__anonymous__1b7cvk === tmp$ret$40);
                } else {
                  tmp_31 = false;
                }
                if (tmp_31) {
                  var tmp$ret$41;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$41 = (0 <= tmp9__anonymous__1b7cvk ? tmp9__anonymous__1b7cvk <= 31 : false) ? true : 127 <= tmp9__anonymous__1b7cvk ? tmp9__anonymous__1b7cvk <= 159 : false;
                  tmp_30 = tmp$ret$41;
                } else {
                  tmp_30 = false;
                }
                if (tmp_30) {
                  tmp_29 = true;
                } else {
                  tmp_29 = tmp9__anonymous__1b7cvk === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_29) {
                  return -1;
                }
                charCount = charCount + (tmp9__anonymous__1b7cvk < 65536 ? 1 : 2) | 0;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp10__anonymous__yfiz50 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_10 = j;
                j = tmp0_10 + 1 | 0;
                if (tmp0_10 === codePointCount) {
                  return charCount;
                }
                var tmp_32;
                var tmp_33;
                var tmp_34;
                var tmp$ret$42;
                // Inline function 'kotlin.code' call
                tmp$ret$42 = 10;
                if (!(tmp10__anonymous__yfiz50 === tmp$ret$42)) {
                  var tmp$ret$43;
                  // Inline function 'kotlin.code' call
                  tmp$ret$43 = 13;
                  tmp_34 = !(tmp10__anonymous__yfiz50 === tmp$ret$43);
                } else {
                  tmp_34 = false;
                }
                if (tmp_34) {
                  var tmp$ret$44;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$44 = (0 <= tmp10__anonymous__yfiz50 ? tmp10__anonymous__yfiz50 <= 31 : false) ? true : 127 <= tmp10__anonymous__yfiz50 ? tmp10__anonymous__yfiz50 <= 159 : false;
                  tmp_33 = tmp$ret$44;
                } else {
                  tmp_33 = false;
                }
                if (tmp_33) {
                  tmp_32 = true;
                } else {
                  tmp_32 = tmp10__anonymous__yfiz50 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_32) {
                  return -1;
                }
                charCount = charCount + (tmp10__anonymous__yfiz50 < 65536 ? 1 : 2) | 0;
              } else {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_11 = j;
                j = tmp0_11 + 1 | 0;
                if (tmp0_11 === codePointCount) {
                  return charCount;
                }
                var tmp_35;
                var tmp_36;
                var tmp_37;
                var tmp$ret$45;
                // Inline function 'kotlin.code' call
                tmp$ret$45 = 10;
                if (!(codePoint_0 === tmp$ret$45)) {
                  var tmp$ret$46;
                  // Inline function 'kotlin.code' call
                  tmp$ret$46 = 13;
                  tmp_37 = !(codePoint_0 === tmp$ret$46);
                } else {
                  tmp_37 = false;
                }
                if (tmp_37) {
                  var tmp$ret$47;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$47 = (0 <= codePoint_0 ? codePoint_0 <= 31 : false) ? true : 127 <= codePoint_0 ? codePoint_0 <= 159 : false;
                  tmp_36 = tmp$ret$47;
                } else {
                  tmp_36 = false;
                }
                if (tmp_36) {
                  tmp_35 = true;
                } else {
                  tmp_35 = codePoint_0 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_35) {
                  return -1;
                }
                charCount = charCount + (codePoint_0 < 65536 ? 1 : 2) | 0;
              }
              tmp$ret$28 = 3;
            }
            index = tmp_18 + tmp$ret$28 | 0;
          } else {
            var tmp$ret$48;
            // Inline function 'okio.shr' call
            tmp$ret$48 = b0 >> 3;
            if (tmp$ret$48 === -2) {
              var tmp_38 = index;
              var tmp$ret$54;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp13_process4Utf8Bytes = index;
                if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp14__anonymous__f0seaw = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_12 = j;
                  j = tmp0_12 + 1 | 0;
                  if (tmp0_12 === codePointCount) {
                    return charCount;
                  }
                  var tmp_39;
                  var tmp_40;
                  var tmp_41;
                  var tmp$ret$49;
                  // Inline function 'kotlin.code' call
                  tmp$ret$49 = 10;
                  if (!(tmp14__anonymous__f0seaw === tmp$ret$49)) {
                    var tmp$ret$50;
                    // Inline function 'kotlin.code' call
                    tmp$ret$50 = 13;
                    tmp_41 = !(tmp14__anonymous__f0seaw === tmp$ret$50);
                  } else {
                    tmp_41 = false;
                  }
                  if (tmp_41) {
                    var tmp$ret$51;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$51 = (0 <= tmp14__anonymous__f0seaw ? tmp14__anonymous__f0seaw <= 31 : false) ? true : 127 <= tmp14__anonymous__f0seaw ? tmp14__anonymous__f0seaw <= 159 : false;
                    tmp_40 = tmp$ret$51;
                  } else {
                    tmp_40 = false;
                  }
                  if (tmp_40) {
                    tmp_39 = true;
                  } else {
                    tmp_39 = tmp14__anonymous__f0seaw === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_39) {
                    return -1;
                  }
                  charCount = charCount + (tmp14__anonymous__f0seaw < 65536 ? 1 : 2) | 0;
                  var tmp_42;
                  if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 1 | 0)) {
                    tmp_42 = true;
                  } else {
                    var tmp$ret$53;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp11_isUtf8Continuation = s[tmp13_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$52;
                    // Inline function 'okio.and' call
                    tmp$ret$52 = tmp11_isUtf8Continuation & 192;
                    tmp$ret$53 = tmp$ret$52 === 128;
                    tmp_42 = !tmp$ret$53;
                  }
                  if (tmp_42) {
                    tmp$ret$54 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_43;
                    if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 2 | 0)) {
                      tmp_43 = true;
                    } else {
                      var tmp$ret$56;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp12_isUtf8Continuation = s[tmp13_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$55;
                      // Inline function 'okio.and' call
                      tmp$ret$55 = tmp12_isUtf8Continuation & 192;
                      tmp$ret$56 = tmp$ret$55 === 128;
                      tmp_43 = !tmp$ret$56;
                    }
                    if (tmp_43) {
                      tmp$ret$54 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$54 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = s[tmp13_process4Utf8Bytes];
                var b1_1 = s[tmp13_process4Utf8Bytes + 1 | 0];
                var tmp$ret$58;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$57;
                // Inline function 'okio.and' call
                tmp$ret$57 = b1_1 & 192;
                tmp$ret$58 = tmp$ret$57 === 128;
                if (!tmp$ret$58) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp15__anonymous__a63r3d = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_13 = j;
                  j = tmp0_13 + 1 | 0;
                  if (tmp0_13 === codePointCount) {
                    return charCount;
                  }
                  var tmp_44;
                  var tmp_45;
                  var tmp_46;
                  var tmp$ret$59;
                  // Inline function 'kotlin.code' call
                  tmp$ret$59 = 10;
                  if (!(tmp15__anonymous__a63r3d === tmp$ret$59)) {
                    var tmp$ret$60;
                    // Inline function 'kotlin.code' call
                    tmp$ret$60 = 13;
                    tmp_46 = !(tmp15__anonymous__a63r3d === tmp$ret$60);
                  } else {
                    tmp_46 = false;
                  }
                  if (tmp_46) {
                    var tmp$ret$61;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$61 = (0 <= tmp15__anonymous__a63r3d ? tmp15__anonymous__a63r3d <= 31 : false) ? true : 127 <= tmp15__anonymous__a63r3d ? tmp15__anonymous__a63r3d <= 159 : false;
                    tmp_45 = tmp$ret$61;
                  } else {
                    tmp_45 = false;
                  }
                  if (tmp_45) {
                    tmp_44 = true;
                  } else {
                    tmp_44 = tmp15__anonymous__a63r3d === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_44) {
                    return -1;
                  }
                  charCount = charCount + (tmp15__anonymous__a63r3d < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 1;
                  break $l$block_10;
                }
                var b2_0 = s[tmp13_process4Utf8Bytes + 2 | 0];
                var tmp$ret$63;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$62;
                // Inline function 'okio.and' call
                tmp$ret$62 = b2_0 & 192;
                tmp$ret$63 = tmp$ret$62 === 128;
                if (!tmp$ret$63) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp16__anonymous__5bf3vu = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_14 = j;
                  j = tmp0_14 + 1 | 0;
                  if (tmp0_14 === codePointCount) {
                    return charCount;
                  }
                  var tmp_47;
                  var tmp_48;
                  var tmp_49;
                  var tmp$ret$64;
                  // Inline function 'kotlin.code' call
                  tmp$ret$64 = 10;
                  if (!(tmp16__anonymous__5bf3vu === tmp$ret$64)) {
                    var tmp$ret$65;
                    // Inline function 'kotlin.code' call
                    tmp$ret$65 = 13;
                    tmp_49 = !(tmp16__anonymous__5bf3vu === tmp$ret$65);
                  } else {
                    tmp_49 = false;
                  }
                  if (tmp_49) {
                    var tmp$ret$66;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$66 = (0 <= tmp16__anonymous__5bf3vu ? tmp16__anonymous__5bf3vu <= 31 : false) ? true : 127 <= tmp16__anonymous__5bf3vu ? tmp16__anonymous__5bf3vu <= 159 : false;
                    tmp_48 = tmp$ret$66;
                  } else {
                    tmp_48 = false;
                  }
                  if (tmp_48) {
                    tmp_47 = true;
                  } else {
                    tmp_47 = tmp16__anonymous__5bf3vu === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_47) {
                    return -1;
                  }
                  charCount = charCount + (tmp16__anonymous__5bf3vu < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 2;
                  break $l$block_10;
                }
                var b3 = s[tmp13_process4Utf8Bytes + 3 | 0];
                var tmp$ret$68;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$67;
                // Inline function 'okio.and' call
                tmp$ret$67 = b3 & 192;
                tmp$ret$68 = tmp$ret$67 === 128;
                if (!tmp$ret$68) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp17__anonymous__gqgob = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_15 = j;
                  j = tmp0_15 + 1 | 0;
                  if (tmp0_15 === codePointCount) {
                    return charCount;
                  }
                  var tmp_50;
                  var tmp_51;
                  var tmp_52;
                  var tmp$ret$69;
                  // Inline function 'kotlin.code' call
                  tmp$ret$69 = 10;
                  if (!(tmp17__anonymous__gqgob === tmp$ret$69)) {
                    var tmp$ret$70;
                    // Inline function 'kotlin.code' call
                    tmp$ret$70 = 13;
                    tmp_52 = !(tmp17__anonymous__gqgob === tmp$ret$70);
                  } else {
                    tmp_52 = false;
                  }
                  if (tmp_52) {
                    var tmp$ret$71;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$71 = (0 <= tmp17__anonymous__gqgob ? tmp17__anonymous__gqgob <= 31 : false) ? true : 127 <= tmp17__anonymous__gqgob ? tmp17__anonymous__gqgob <= 159 : false;
                    tmp_51 = tmp$ret$71;
                  } else {
                    tmp_51 = false;
                  }
                  if (tmp_51) {
                    tmp_50 = true;
                  } else {
                    tmp_50 = tmp17__anonymous__gqgob === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_50) {
                    return -1;
                  }
                  charCount = charCount + (tmp17__anonymous__gqgob < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = get_MASK_4BYTES() ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp18__anonymous__4dy6j8 = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_16 = j;
                  j = tmp0_16 + 1 | 0;
                  if (tmp0_16 === codePointCount) {
                    return charCount;
                  }
                  var tmp_53;
                  var tmp_54;
                  var tmp_55;
                  var tmp$ret$72;
                  // Inline function 'kotlin.code' call
                  tmp$ret$72 = 10;
                  if (!(tmp18__anonymous__4dy6j8 === tmp$ret$72)) {
                    var tmp$ret$73;
                    // Inline function 'kotlin.code' call
                    tmp$ret$73 = 13;
                    tmp_55 = !(tmp18__anonymous__4dy6j8 === tmp$ret$73);
                  } else {
                    tmp_55 = false;
                  }
                  if (tmp_55) {
                    var tmp$ret$74;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$74 = (0 <= tmp18__anonymous__4dy6j8 ? tmp18__anonymous__4dy6j8 <= 31 : false) ? true : 127 <= tmp18__anonymous__4dy6j8 ? tmp18__anonymous__4dy6j8 <= 159 : false;
                    tmp_54 = tmp$ret$74;
                  } else {
                    tmp_54 = false;
                  }
                  if (tmp_54) {
                    tmp_53 = true;
                  } else {
                    tmp_53 = tmp18__anonymous__4dy6j8 === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_53) {
                    return -1;
                  }
                  charCount = charCount + (tmp18__anonymous__4dy6j8 < 65536 ? 1 : 2) | 0;
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp19__anonymous__98mtqr = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_17 = j;
                  j = tmp0_17 + 1 | 0;
                  if (tmp0_17 === codePointCount) {
                    return charCount;
                  }
                  var tmp_56;
                  var tmp_57;
                  var tmp_58;
                  var tmp$ret$75;
                  // Inline function 'kotlin.code' call
                  tmp$ret$75 = 10;
                  if (!(tmp19__anonymous__98mtqr === tmp$ret$75)) {
                    var tmp$ret$76;
                    // Inline function 'kotlin.code' call
                    tmp$ret$76 = 13;
                    tmp_58 = !(tmp19__anonymous__98mtqr === tmp$ret$76);
                  } else {
                    tmp_58 = false;
                  }
                  if (tmp_58) {
                    var tmp$ret$77;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$77 = (0 <= tmp19__anonymous__98mtqr ? tmp19__anonymous__98mtqr <= 31 : false) ? true : 127 <= tmp19__anonymous__98mtqr ? tmp19__anonymous__98mtqr <= 159 : false;
                    tmp_57 = tmp$ret$77;
                  } else {
                    tmp_57 = false;
                  }
                  if (tmp_57) {
                    tmp_56 = true;
                  } else {
                    tmp_56 = tmp19__anonymous__98mtqr === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_56) {
                    return -1;
                  }
                  charCount = charCount + (tmp19__anonymous__98mtqr < 65536 ? 1 : 2) | 0;
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp20__anonymous__q2j3lv = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_18 = j;
                  j = tmp0_18 + 1 | 0;
                  if (tmp0_18 === codePointCount) {
                    return charCount;
                  }
                  var tmp_59;
                  var tmp_60;
                  var tmp_61;
                  var tmp$ret$78;
                  // Inline function 'kotlin.code' call
                  tmp$ret$78 = 10;
                  if (!(tmp20__anonymous__q2j3lv === tmp$ret$78)) {
                    var tmp$ret$79;
                    // Inline function 'kotlin.code' call
                    tmp$ret$79 = 13;
                    tmp_61 = !(tmp20__anonymous__q2j3lv === tmp$ret$79);
                  } else {
                    tmp_61 = false;
                  }
                  if (tmp_61) {
                    var tmp$ret$80;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$80 = (0 <= tmp20__anonymous__q2j3lv ? tmp20__anonymous__q2j3lv <= 31 : false) ? true : 127 <= tmp20__anonymous__q2j3lv ? tmp20__anonymous__q2j3lv <= 159 : false;
                    tmp_60 = tmp$ret$80;
                  } else {
                    tmp_60 = false;
                  }
                  if (tmp_60) {
                    tmp_59 = true;
                  } else {
                    tmp_59 = tmp20__anonymous__q2j3lv === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_59) {
                    return -1;
                  }
                  charCount = charCount + (tmp20__anonymous__q2j3lv < 65536 ? 1 : 2) | 0;
                } else {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_19 = j;
                  j = tmp0_19 + 1 | 0;
                  if (tmp0_19 === codePointCount) {
                    return charCount;
                  }
                  var tmp_62;
                  var tmp_63;
                  var tmp_64;
                  var tmp$ret$81;
                  // Inline function 'kotlin.code' call
                  tmp$ret$81 = 10;
                  if (!(codePoint_1 === tmp$ret$81)) {
                    var tmp$ret$82;
                    // Inline function 'kotlin.code' call
                    tmp$ret$82 = 13;
                    tmp_64 = !(codePoint_1 === tmp$ret$82);
                  } else {
                    tmp_64 = false;
                  }
                  if (tmp_64) {
                    var tmp$ret$83;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$83 = (0 <= codePoint_1 ? codePoint_1 <= 31 : false) ? true : 127 <= codePoint_1 ? codePoint_1 <= 159 : false;
                    tmp_63 = tmp$ret$83;
                  } else {
                    tmp_63 = false;
                  }
                  if (tmp_63) {
                    tmp_62 = true;
                  } else {
                    tmp_62 = codePoint_1 === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_62) {
                    return -1;
                  }
                  charCount = charCount + (codePoint_1 < 65536 ? 1 : 2) | 0;
                }
                tmp$ret$54 = 4;
              }
              index = tmp_38 + tmp$ret$54 | 0;
            } else {
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp3__anonymous__ufb84q_0 = get_REPLACEMENT_CODE_POINT();
              var tmp0_20 = j;
              j = tmp0_20 + 1 | 0;
              if (tmp0_20 === codePointCount) {
                return charCount;
              }
              var tmp_65;
              var tmp_66;
              var tmp_67;
              var tmp$ret$84;
              // Inline function 'kotlin.code' call
              tmp$ret$84 = 10;
              if (!(tmp3__anonymous__ufb84q_0 === tmp$ret$84)) {
                var tmp$ret$85;
                // Inline function 'kotlin.code' call
                tmp$ret$85 = 13;
                tmp_67 = !(tmp3__anonymous__ufb84q_0 === tmp$ret$85);
              } else {
                tmp_67 = false;
              }
              if (tmp_67) {
                var tmp$ret$86;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$86 = (0 <= tmp3__anonymous__ufb84q_0 ? tmp3__anonymous__ufb84q_0 <= 31 : false) ? true : 127 <= tmp3__anonymous__ufb84q_0 ? tmp3__anonymous__ufb84q_0 <= 159 : false;
                tmp_66 = tmp$ret$86;
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                tmp_65 = true;
              } else {
                tmp_65 = tmp3__anonymous__ufb84q_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_65) {
                return -1;
              }
              charCount = charCount + (tmp3__anonymous__ufb84q_0 < 65536 ? 1 : 2) | 0;
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
    return charCount;
  }
  function codePointIndexToCharIndex$accessor$13225fg(s, codePointCount) {
    init_properties__ByteString_kt_zd4rxu();
    return codePointIndexToCharIndex(s, codePointCount);
  }
  var properties_initialized__ByteString_kt_74hdzq;
  function init_properties__ByteString_kt_zd4rxu() {
    if (properties_initialized__ByteString_kt_74hdzq) {
    } else {
      properties_initialized__ByteString_kt_74hdzq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
      HEX_DIGIT_CHARS = tmp$ret$0;
    }
  }
  function segment(_this__u8e3s4, pos) {
    var i = binarySearch(_this__u8e3s4.n26_1, pos + 1 | 0, 0, _this__u8e3s4.m26_1.length);
    return i >= 0 ? i : ~i;
  }
  function binarySearch(_this__u8e3s4, value, fromIndex, toIndex) {
    var left = fromIndex;
    var right = toIndex - 1 | 0;
    while (left <= right) {
      var mid = (left + right | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value)
        left = mid + 1 | 0;
      else if (midVal > value)
        right = mid - 1 | 0;
      else
        return mid;
    }
    return (-left | 0) - 1 | 0;
  }
  function commonAsUtf8ToByteArray(_this__u8e3s4) {
    var bytes = new Int8Array(imul(4, _this__u8e3s4.length));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b0 = charSequenceGet(_this__u8e3s4, index);
        if (Char__compareTo_impl_ypi4mb(b0, _Char___init__impl__6a9atx(128)) >= 0) {
          var size = index;
          // Inline function 'okio.processUtf8Bytes' call
          var tmp0_processUtf8Bytes = _this__u8e3s4.length;
          var index_0 = index;
          while (index_0 < tmp0_processUtf8Bytes) {
            var c = charSequenceGet(_this__u8e3s4, index_0);
            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$0;
              // Inline function 'kotlin.code' call
              tmp$ret$0 = Char__toInt_impl_vasixd(c);
              var tmp1__anonymous__uwfjfc = toByte(tmp$ret$0);
              var tmp0 = size;
              size = tmp0 + 1 | 0;
              bytes[tmp0] = tmp1__anonymous__uwfjfc;
              var tmp0_0 = index_0;
              index_0 = tmp0_0 + 1 | 0;
              while (index_0 < tmp0_processUtf8Bytes ? Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index_0), _Char___init__impl__6a9atx(128)) < 0 : false) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp$ret$1;
                // Inline function 'kotlin.code' call
                var tmp1 = index_0;
                index_0 = tmp1 + 1 | 0;
                var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, tmp1);
                tmp$ret$1 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
                var tmp2__anonymous__z9zvc9 = toByte(tmp$ret$1);
                var tmp0_1 = size;
                size = tmp0_1 + 1 | 0;
                bytes[tmp0_1] = tmp2__anonymous__z9zvc9;
              }
            } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$2;
              // Inline function 'kotlin.code' call
              tmp$ret$2 = Char__toInt_impl_vasixd(c);
              var tmp3__anonymous__ufb84q = toByte(tmp$ret$2 >> 6 | 192);
              var tmp0_2 = size;
              size = tmp0_2 + 1 | 0;
              bytes[tmp0_2] = tmp3__anonymous__ufb84q;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$3;
              // Inline function 'kotlin.code' call
              tmp$ret$3 = Char__toInt_impl_vasixd(c);
              var tmp4__anonymous__pkmkx7 = toByte(tmp$ret$3 & 63 | 128);
              var tmp0_3 = size;
              size = tmp0_3 + 1 | 0;
              bytes[tmp0_3] = tmp4__anonymous__pkmkx7;
              var tmp2 = index_0;
              index_0 = tmp2 + 1 | 0;
            } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$4;
              // Inline function 'kotlin.code' call
              tmp$ret$4 = Char__toInt_impl_vasixd(c);
              var tmp5__anonymous__kpxxpo = toByte(tmp$ret$4 >> 12 | 224);
              var tmp0_4 = size;
              size = tmp0_4 + 1 | 0;
              bytes[tmp0_4] = tmp5__anonymous__kpxxpo;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$5;
              // Inline function 'kotlin.code' call
              tmp$ret$5 = Char__toInt_impl_vasixd(c);
              var tmp6__anonymous__fv9ai5 = toByte(tmp$ret$5 >> 6 & 63 | 128);
              var tmp0_5 = size;
              size = tmp0_5 + 1 | 0;
              bytes[tmp0_5] = tmp6__anonymous__fv9ai5;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$6;
              // Inline function 'kotlin.code' call
              tmp$ret$6 = Char__toInt_impl_vasixd(c);
              var tmp7__anonymous__b0knam = toByte(tmp$ret$6 & 63 | 128);
              var tmp0_6 = size;
              size = tmp0_6 + 1 | 0;
              bytes[tmp0_6] = tmp7__anonymous__b0knam;
              var tmp3 = index_0;
              index_0 = tmp3 + 1 | 0;
            } else {
              var tmp;
              if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 ? true : tmp0_processUtf8Bytes <= (index_0 + 1 | 0)) {
                tmp = true;
              } else {
                var containsArg = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
              }
              if (tmp) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp8__anonymous__65w033 = get_REPLACEMENT_BYTE();
                var tmp0_7 = size;
                size = tmp0_7 + 1 | 0;
                bytes[tmp0_7] = tmp8__anonymous__65w033;
                var tmp4 = index_0;
                index_0 = tmp4 + 1 | 0;
              } else {
                var tmp$ret$7;
                // Inline function 'kotlin.code' call
                tmp$ret$7 = Char__toInt_impl_vasixd(c);
                var tmp_0 = tmp$ret$7 << 10;
                var tmp$ret$8;
                // Inline function 'kotlin.code' call
                var tmp1__get_code__adl84j = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp$ret$8 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
                var codePoint = (tmp_0 + tmp$ret$8 | 0) + -56613888 | 0;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp9__anonymous__1b7cvk = toByte(codePoint >> 18 | 240);
                var tmp0_8 = size;
                size = tmp0_8 + 1 | 0;
                bytes[tmp0_8] = tmp9__anonymous__1b7cvk;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp10__anonymous__yfiz50 = toByte(codePoint >> 12 & 63 | 128);
                var tmp0_9 = size;
                size = tmp0_9 + 1 | 0;
                bytes[tmp0_9] = tmp10__anonymous__yfiz50;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp11__anonymous__tkubxh = toByte(codePoint >> 6 & 63 | 128);
                var tmp0_10 = size;
                size = tmp0_10 + 1 | 0;
                bytes[tmp0_10] = tmp11__anonymous__tkubxh;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp12__anonymous__oq5opy = toByte(codePoint & 63 | 128);
                var tmp0_11 = size;
                size = tmp0_11 + 1 | 0;
                bytes[tmp0_11] = tmp12__anonymous__oq5opy;
                index_0 = index_0 + 2 | 0;
              }
            }
          }
          return copyOf(bytes, size);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.code' call
        tmp$ret$9 = Char__toInt_impl_vasixd(b0);
        bytes[index] = toByte(tmp$ret$9);
      }
       while (inductionVariable < last);
    return copyOf(bytes, _this__u8e3s4.length);
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    if ((beginIndex < 0 ? true : endIndex > _this__u8e3s4.length) ? true : beginIndex > endIndex) {
      throw new ArrayIndexOutOfBoundsException('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'okio.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
        var tmp0__anonymous__q1qw7t = numberToChar(b0);
        var tmp0 = length;
        length = tmp0 + 1 | 0;
        chars[tmp0] = tmp0__anonymous__q1qw7t;
        var tmp0_0 = index;
        index = tmp0_0 + 1 | 0;
        while (index < endIndex ? _this__u8e3s4[index] >= 0 : false) {
          // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1__anonymous__uwfjfc = numberToChar(_this__u8e3s4[tmp1]);
          var tmp0_1 = length;
          length = tmp0_1 + 1 | 0;
          chars[tmp0_1] = tmp1__anonymous__uwfjfc;
        }
      } else {
        var tmp$ret$0;
        // Inline function 'okio.shr' call
        tmp$ret$0 = b0 >> 5;
        if (tmp$ret$0 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (endIndex <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = numberToChar(tmp1__anonymous__uwfjfc_0);
              var tmp0_2 = length;
              length = tmp0_2 + 1 | 0;
              chars[tmp0_2] = tmp2__anonymous__z9zvc9;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp0_process2Utf8Bytes];
            var b1 = _this__u8e3s4[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$3;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$2;
            // Inline function 'okio.and' call
            tmp$ret$2 = b1 & 192;
            tmp$ret$3 = tmp$ret$2 === 128;
            if (!tmp$ret$3) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp2__anonymous__z9zvc9_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp3__anonymous__ufb84q = numberToChar(tmp2__anonymous__z9zvc9_0);
              var tmp0_3 = length;
              length = tmp0_3 + 1 | 0;
              chars[tmp0_3] = tmp3__anonymous__ufb84q;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = get_MASK_2BYTES() ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp3__anonymous__ufb84q_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp4__anonymous__pkmkx7 = numberToChar(tmp3__anonymous__ufb84q_0);
              var tmp0_4 = length;
              length = tmp0_4 + 1 | 0;
              chars[tmp0_4] = tmp4__anonymous__pkmkx7;
            } else {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp5__anonymous__kpxxpo = numberToChar(codePoint);
              var tmp0_5 = length;
              length = tmp0_5 + 1 | 0;
              chars[tmp0_5] = tmp5__anonymous__kpxxpo;
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          var tmp$ret$4;
          // Inline function 'okio.shr' call
          tmp$ret$4 = b0 >> 4;
          if (tmp$ret$4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp4_process3Utf8Bytes = index;
              if (endIndex <= (tmp4_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp5__anonymous__kpxxpo_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = numberToChar(tmp5__anonymous__kpxxpo_0);
                var tmp0_6 = length;
                length = tmp0_6 + 1 | 0;
                chars[tmp0_6] = tmp6__anonymous__fv9ai5;
                var tmp_1;
                if (endIndex <= (tmp4_process3Utf8Bytes + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  var tmp$ret$6;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp0_isUtf8Continuation = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$5;
                  // Inline function 'okio.and' call
                  tmp$ret$5 = tmp0_isUtf8Continuation & 192;
                  tmp$ret$6 = tmp$ret$5 === 128;
                  tmp_1 = !tmp$ret$6;
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp4_process3Utf8Bytes];
              var b1_0 = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
              var tmp$ret$9;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$8;
              // Inline function 'okio.and' call
              tmp$ret$8 = b1_0 & 192;
              tmp$ret$9 = tmp$ret$8 === 128;
              if (!tmp$ret$9) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp6__anonymous__fv9ai5_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp7__anonymous__b0knam = numberToChar(tmp6__anonymous__fv9ai5_0);
                var tmp0_7 = length;
                length = tmp0_7 + 1 | 0;
                chars[tmp0_7] = tmp7__anonymous__b0knam;
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp4_process3Utf8Bytes + 2 | 0];
              var tmp$ret$11;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$10;
              // Inline function 'okio.and' call
              tmp$ret$10 = b2 & 192;
              tmp$ret$11 = tmp$ret$10 === 128;
              if (!tmp$ret$11) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp7__anonymous__b0knam_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp8__anonymous__65w033 = numberToChar(tmp7__anonymous__b0knam_0);
                var tmp0_8 = length;
                length = tmp0_8 + 1 | 0;
                chars[tmp0_8] = tmp8__anonymous__65w033;
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = get_MASK_3BYTES() ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp8__anonymous__65w033_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp9__anonymous__1b7cvk = numberToChar(tmp8__anonymous__65w033_0);
                var tmp0_9 = length;
                length = tmp0_9 + 1 | 0;
                chars[tmp0_9] = tmp9__anonymous__1b7cvk;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp9__anonymous__1b7cvk_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp10__anonymous__yfiz50 = numberToChar(tmp9__anonymous__1b7cvk_0);
                var tmp0_10 = length;
                length = tmp0_10 + 1 | 0;
                chars[tmp0_10] = tmp10__anonymous__yfiz50;
              } else {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp11__anonymous__tkubxh = numberToChar(codePoint_0);
                var tmp0_11 = length;
                length = tmp0_11 + 1 | 0;
                chars[tmp0_11] = tmp11__anonymous__tkubxh;
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            var tmp$ret$12;
            // Inline function 'okio.shr' call
            tmp$ret$12 = b0 >> 3;
            if (tmp$ret$12 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp10_process4Utf8Bytes = index;
                if (endIndex <= (tmp10_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp11__anonymous__tkubxh_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp11__anonymous__tkubxh_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp12__anonymous__oq5opy = numberToChar((tmp11__anonymous__tkubxh_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_12 = length;
                    length = tmp0_12 + 1 | 0;
                    chars[tmp0_12] = tmp12__anonymous__oq5opy;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp13__anonymous__jvh1if = numberToChar((tmp11__anonymous__tkubxh_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_13 = length;
                    length = tmp0_13 + 1 | 0;
                    chars[tmp0_13] = tmp13__anonymous__jvh1if;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp14__anonymous__f0seaw = get_REPLACEMENT_CHARACTER();
                    var tmp0_14 = length;
                    length = tmp0_14 + 1 | 0;
                    chars[tmp0_14] = tmp14__anonymous__f0seaw;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp10_process4Utf8Bytes + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    var tmp$ret$14;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp0_isUtf8Continuation_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$13;
                    // Inline function 'okio.and' call
                    tmp$ret$13 = tmp0_isUtf8Continuation_0 & 192;
                    tmp$ret$14 = tmp$ret$13 === 128;
                    tmp_3 = !tmp$ret$14;
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp10_process4Utf8Bytes + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      var tmp$ret$17;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp1_isUtf8Continuation = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$16;
                      // Inline function 'okio.and' call
                      tmp$ret$16 = tmp1_isUtf8Continuation & 192;
                      tmp$ret$17 = tmp$ret$16 === 128;
                      tmp_4 = !tmp$ret$17;
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp10_process4Utf8Bytes];
                var b1_1 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                var tmp$ret$19;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$18;
                // Inline function 'okio.and' call
                tmp$ret$18 = b1_1 & 192;
                tmp$ret$19 = tmp$ret$18 === 128;
                if (!tmp$ret$19) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp12__anonymous__oq5opy_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp12__anonymous__oq5opy_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp15__anonymous__a63r3d = numberToChar((tmp12__anonymous__oq5opy_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_15 = length;
                    length = tmp0_15 + 1 | 0;
                    chars[tmp0_15] = tmp15__anonymous__a63r3d;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp16__anonymous__5bf3vu = numberToChar((tmp12__anonymous__oq5opy_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_16 = length;
                    length = tmp0_16 + 1 | 0;
                    chars[tmp0_16] = tmp16__anonymous__5bf3vu;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp17__anonymous__gqgob = get_REPLACEMENT_CHARACTER();
                    var tmp0_17 = length;
                    length = tmp0_17 + 1 | 0;
                    chars[tmp0_17] = tmp17__anonymous__gqgob;
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                var tmp$ret$21;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$20;
                // Inline function 'okio.and' call
                tmp$ret$20 = b2_0 & 192;
                tmp$ret$21 = tmp$ret$20 === 128;
                if (!tmp$ret$21) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp13__anonymous__jvh1if_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp13__anonymous__jvh1if_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp18__anonymous__4dy6j8 = numberToChar((tmp13__anonymous__jvh1if_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_18 = length;
                    length = tmp0_18 + 1 | 0;
                    chars[tmp0_18] = tmp18__anonymous__4dy6j8;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp19__anonymous__98mtqr = numberToChar((tmp13__anonymous__jvh1if_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_19 = length;
                    length = tmp0_19 + 1 | 0;
                    chars[tmp0_19] = tmp19__anonymous__98mtqr;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp20__anonymous__q2j3lv = get_REPLACEMENT_CHARACTER();
                    var tmp0_20 = length;
                    length = tmp0_20 + 1 | 0;
                    chars[tmp0_20] = tmp20__anonymous__q2j3lv;
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp10_process4Utf8Bytes + 3 | 0];
                var tmp$ret$23;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$22;
                // Inline function 'okio.and' call
                tmp$ret$22 = b3 & 192;
                tmp$ret$23 = tmp$ret$22 === 128;
                if (!tmp$ret$23) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp14__anonymous__f0seaw_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp14__anonymous__f0seaw_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp21__anonymous__l7ugec = numberToChar((tmp14__anonymous__f0seaw_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_21 = length;
                    length = tmp0_21 + 1 | 0;
                    chars[tmp0_21] = tmp21__anonymous__l7ugec;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp22__anonymous__gd5t6t = numberToChar((tmp14__anonymous__f0seaw_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_22 = length;
                    length = tmp0_22 + 1 | 0;
                    chars[tmp0_22] = tmp22__anonymous__gd5t6t;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp23__anonymous__bih5za = get_REPLACEMENT_CHARACTER();
                    var tmp0_23 = length;
                    length = tmp0_23 + 1 | 0;
                    chars[tmp0_23] = tmp23__anonymous__bih5za;
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = get_MASK_4BYTES() ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp15__anonymous__a63r3d_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp15__anonymous__a63r3d_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp24__anonymous__6nsirr = numberToChar((tmp15__anonymous__a63r3d_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_24 = length;
                    length = tmp0_24 + 1 | 0;
                    chars[tmp0_24] = tmp24__anonymous__6nsirr;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp25__anonymous__1t3vk8 = numberToChar((tmp15__anonymous__a63r3d_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_25 = length;
                    length = tmp0_25 + 1 | 0;
                    chars[tmp0_25] = tmp25__anonymous__1t3vk8;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp26__anonymous__31krnb = get_REPLACEMENT_CHARACTER();
                    var tmp0_26 = length;
                    length = tmp0_26 + 1 | 0;
                    chars[tmp0_26] = tmp26__anonymous__31krnb;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp16__anonymous__5bf3vu_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp16__anonymous__5bf3vu_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp27__anonymous__7w9euu = numberToChar((tmp16__anonymous__5bf3vu_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_27 = length;
                    length = tmp0_27 + 1 | 0;
                    chars[tmp0_27] = tmp27__anonymous__7w9euu;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp28__anonymous__cqy22d = numberToChar((tmp16__anonymous__5bf3vu_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_28 = length;
                    length = tmp0_28 + 1 | 0;
                    chars[tmp0_28] = tmp28__anonymous__cqy22d;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp29__anonymous__hlmp9w = get_REPLACEMENT_CHARACTER();
                    var tmp0_29 = length;
                    length = tmp0_29 + 1 | 0;
                    chars[tmp0_29] = tmp29__anonymous__hlmp9w;
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp17__anonymous__gqgob_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp17__anonymous__gqgob_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp30__anonymous__hpj82q = numberToChar((tmp17__anonymous__gqgob_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_30 = length;
                    length = tmp0_30 + 1 | 0;
                    chars[tmp0_30] = tmp30__anonymous__hpj82q;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp31__anonymous__cuukv7 = numberToChar((tmp17__anonymous__gqgob_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_31 = length;
                    length = tmp0_31 + 1 | 0;
                    chars[tmp0_31] = tmp31__anonymous__cuukv7;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp32__anonymous__805xno = get_REPLACEMENT_CHARACTER();
                    var tmp0_32 = length;
                    length = tmp0_32 + 1 | 0;
                    chars[tmp0_32] = tmp32__anonymous__805xno;
                  }
                } else {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp33__anonymous__35hag5 = numberToChar((codePoint_1 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_33 = length;
                    length = tmp0_33 + 1 | 0;
                    chars[tmp0_33] = tmp33__anonymous__35hag5;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp34__anonymous__1p7cre = numberToChar((codePoint_1 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_34 = length;
                    length = tmp0_34 + 1 | 0;
                    chars[tmp0_34] = tmp34__anonymous__1p7cre;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp35__anonymous__6jvzyx = get_REPLACEMENT_CHARACTER();
                    var tmp0_35 = length;
                    length = tmp0_35 + 1 | 0;
                    chars[tmp0_35] = tmp35__anonymous__6jvzyx;
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp36__anonymous__bekn6g = get_REPLACEMENT_CHARACTER();
              var tmp0_36 = length;
              length = tmp0_36 + 1 | 0;
              chars[tmp0_36] = tmp36__anonymous__bekn6g;
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function commonToUtf8String$default(_this__u8e3s4, beginIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      beginIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = _this__u8e3s4.length;
    return commonToUtf8String(_this__u8e3s4, beginIndex, endIndex);
  }
  function asUtf8ToByteArray(_this__u8e3s4) {
    return commonAsUtf8ToByteArray(_this__u8e3s4);
  }
  function EOFException_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    EOFException.call($this, message);
    return $this;
  }
  function EOFException_init_$Create$(message, $mask0, $marker) {
    var tmp = EOFException_init_$Init$(message, $mask0, $marker, Object.create(EOFException.prototype));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function ArrayIndexOutOfBoundsException(message) {
    IndexOutOfBoundsException_init_$Init$(message, this);
    captureStack(this, ArrayIndexOutOfBoundsException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException_init_$Create$(message) {
    var tmp = IOException_init_$Init$(message, Object.create(IOException.prototype));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, IOException);
  }
  function toUtf8String(_this__u8e3s4) {
    return commonToUtf8String$default(_this__u8e3s4, 0, 0, 3, null);
  }
  function UnsafeCursor() {
    this.o26_1 = null;
    this.p26_1 = false;
    this.q26_1 = null;
    this.r26_1 = new Long(-1, -1);
    this.s26_1 = null;
    this.t26_1 = -1;
    this.u26_1 = -1;
  }
  function Buffer() {
    this.c25_1 = null;
    this.d25_1 = new Long(0, 0);
  }
  Buffer.prototype.v26 = function () {
    return this;
  };
  Buffer.prototype.j25 = function () {
    return this.d25_1.equals(new Long(0, 0));
  };
  Buffer.prototype.w26 = function (byteCount) {
    if (this.d25_1.v(byteCount) < 0)
      throw new EOFException(null);
  };
  Buffer.prototype.x26 = function (byteCount) {
    return this.d25_1.v(byteCount) >= 0;
  };
  Buffer.prototype.y26 = function (out, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCopyTo' call
      var offset_0 = offset;
      var byteCount_0 = byteCount;
      checkOffsetAndCount(this.d25_1, offset_0, byteCount_0);
      if (byteCount_0.equals(new Long(0, 0))) {
        tmp$ret$0 = this;
        break $l$block;
      }
      var tmp0_this = out;
      tmp0_this.d25_1 = tmp0_this.d25_1.r5(byteCount_0);
      var s = this.c25_1;
      while (offset_0.v(toLong(ensureNotNull(s).p25_1 - s.o25_1 | 0)) >= 0) {
        offset_0 = offset_0.s5(toLong(s.p25_1 - s.o25_1 | 0));
        s = s.s25_1;
      }
      while (byteCount_0.v(new Long(0, 0)) > 0) {
        var copy = ensureNotNull(s).w25();
        var tmp1_this = copy;
        tmp1_this.o25_1 = tmp1_this.o25_1 + offset_0.yc() | 0;
        var tmp = copy;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = copy.o25_1 + byteCount_0.yc() | 0;
        var tmp1_minOf = copy.p25_1;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        tmp.p25_1 = tmp$ret$1;
        if (out.c25_1 == null) {
          copy.t25_1 = copy;
          copy.s25_1 = copy.t25_1;
          out.c25_1 = copy.s25_1;
        } else {
          ensureNotNull(ensureNotNull(out.c25_1).t25_1).y25(copy);
        }
        byteCount_0 = byteCount_0.s5(toLong(copy.p25_1 - copy.o25_1 | 0));
        offset_0 = new Long(0, 0);
        s = s.s25_1;
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.g26 = function (pos) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'okio.internal.commonGet' call
      checkOffsetAndCount(this.d25_1, pos, new Long(1, 0));
      var tmp$ret$1;
      // Inline function 'okio.internal.seek' call
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = ensureNotNull(null).n25_1[numberToLong(null.o25_1).r5(pos).s5(new Long(-1, -1)).yc()];
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      if (this.d25_1.s5(pos).v(pos) < 0) {
        var offset = this.d25_1;
        while (offset.v(pos) > 0) {
          s = ensureNotNull(s.t25_1);
          offset = offset.s5(toLong(s.p25_1 - s.o25_1 | 0));
        }
        var tmp2__anonymous__z9zvc9 = s;
        var tmp3__anonymous__ufb84q = offset;
        tmp$ret$0 = ensureNotNull(tmp2__anonymous__z9zvc9).n25_1[numberToLong(tmp2__anonymous__z9zvc9.o25_1).r5(pos).s5(tmp3__anonymous__ufb84q).yc()];
        break $l$block_1;
      } else {
        var offset_0 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$2;
          // Inline function 'kotlin.Long.plus' call
          var tmp0_plus = offset_0;
          var tmp1_plus = s.p25_1 - s.o25_1 | 0;
          tmp$ret$2 = tmp0_plus.r5(toLong(tmp1_plus));
          var nextOffset = tmp$ret$2;
          if (nextOffset.v(pos) > 0)
            break $l$loop;
          s = ensureNotNull(s.s25_1);
          offset_0 = nextOffset;
        }
        var tmp4__anonymous__pkmkx7 = s;
        var tmp5__anonymous__kpxxpo = offset_0;
        tmp$ret$0 = ensureNotNull(tmp4__anonymous__pkmkx7).n25_1[numberToLong(tmp4__anonymous__pkmkx7.o25_1).r5(pos).s5(tmp5__anonymous__kpxxpo).yc()];
        break $l$block_1;
      }
    }
    return tmp$ret$0;
  };
  Buffer.prototype.z26 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCompleteSegmentByteCount' call
      var result = this.d25_1;
      if (result.equals(new Long(0, 0))) {
        tmp$ret$0 = new Long(0, 0);
        break $l$block;
      }
      var tail = ensureNotNull(ensureNotNull(this.c25_1).t25_1);
      var tmp;
      var tmp_0 = tail.p25_1;
      Companion_getInstance_1();
      if (tmp_0 < 8192) {
        tmp = tail.r25_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result = result.s5(toLong(tail.p25_1 - tail.o25_1 | 0));
      }
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.b1h = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByte' call
    if (this.d25_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(this.c25_1);
    var pos = segment.o25_1;
    var limit = segment.p25_1;
    var data = segment.n25_1;
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var b = data[tmp0];
    var tmp1_this = this;
    tmp1_this.d25_1 = tmp1_this.d25_1.s5(new Long(1, 0));
    if (pos === limit) {
      this.c25_1 = segment.x25();
      SegmentPool_getInstance().f26(segment);
    } else {
      segment.o25_1 = pos;
    }
    tmp$ret$0 = b;
    return tmp$ret$0;
  };
  Buffer.prototype.k25 = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'okio.internal.commonReadInt' call
      if (this.d25_1.v(new Long(4, 0)) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var segment = ensureNotNull(this.c25_1);
      var pos = segment.o25_1;
      var limit = segment.p25_1;
      if (toLong(limit - pos | 0).v(new Long(4, 0)) < 0) {
        var tmp$ret$0;
        // Inline function 'okio.and' call
        var tmp0_and = this.b1h();
        tmp$ret$0 = tmp0_and & 255;
        var tmp = tmp$ret$0 << 24;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp1_and = this.b1h();
        tmp$ret$1 = tmp1_and & 255;
        var tmp_0 = tmp | tmp$ret$1 << 16;
        var tmp$ret$2;
        // Inline function 'okio.and' call
        var tmp2_and = this.b1h();
        tmp$ret$2 = tmp2_and & 255;
        var tmp_1 = tmp_0 | tmp$ret$2 << 8;
        var tmp$ret$3;
        // Inline function 'okio.and' call
        var tmp3_and = this.b1h();
        tmp$ret$3 = tmp3_and & 255;
        tmp$ret$4 = tmp_1 | tmp$ret$3;
        break $l$block;
      }
      var data = segment.n25_1;
      var tmp$ret$5;
      // Inline function 'okio.and' call
      var tmp3 = pos;
      pos = tmp3 + 1 | 0;
      var tmp4_and = data[tmp3];
      tmp$ret$5 = tmp4_and & 255;
      var tmp_2 = tmp$ret$5 << 24;
      var tmp$ret$6;
      // Inline function 'okio.and' call
      var tmp2 = pos;
      pos = tmp2 + 1 | 0;
      var tmp5_and = data[tmp2];
      tmp$ret$6 = tmp5_and & 255;
      var tmp_3 = tmp_2 | tmp$ret$6 << 16;
      var tmp$ret$7;
      // Inline function 'okio.and' call
      var tmp1 = pos;
      pos = tmp1 + 1 | 0;
      var tmp6_and = data[tmp1];
      tmp$ret$7 = tmp6_and & 255;
      var tmp_4 = tmp_3 | tmp$ret$7 << 8;
      var tmp$ret$8;
      // Inline function 'okio.and' call
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
      var tmp7_and = data[tmp0];
      tmp$ret$8 = tmp7_and & 255;
      var i = tmp_4 | tmp$ret$8;
      var tmp4_this = this;
      tmp4_this.d25_1 = tmp4_this.d25_1.s5(new Long(4, 0));
      if (pos === limit) {
        this.c25_1 = segment.x25();
        SegmentPool_getInstance().f26(segment);
      } else {
        segment.o25_1 = pos;
      }
      tmp$ret$4 = i;
    }
    return tmp$ret$4;
  };
  Buffer.prototype.a27 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteString' call
    tmp$ret$0 = this.b27(this.d25_1);
    return tmp$ret$0;
  };
  Buffer.prototype.b27 = function (byteCount) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadByteString' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.v(new Long(0, 0)) >= 0 ? byteCount.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        tmp$ret$0 = 'byteCount: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.d25_1.v(byteCount) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      if (byteCount.v(toLong(get_SEGMENTING_THRESHOLD())) >= 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = this.d27(byteCount.yc());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        this.e25(byteCount);
        tmp$ret$1 = tmp1_also;
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      } else {
        tmp$ret$2 = new ByteString(this.c27(byteCount));
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  Buffer.prototype.e27 = function () {
    return this.h26(this.d25_1);
  };
  Buffer.prototype.h26 = function (byteCount) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.v(new Long(0, 0)) >= 0 ? byteCount.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8.<anonymous>' call
        tmp$ret$0 = 'byteCount: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.d25_1.v(byteCount) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      if (byteCount.equals(new Long(0, 0))) {
        tmp$ret$1 = '';
        break $l$block_0;
      }
      var s = ensureNotNull(this.c25_1);
      if (numberToLong(s.o25_1).r5(byteCount).v(toLong(s.p25_1)) > 0) {
        var tmp = this.c27(byteCount);
        tmp$ret$1 = commonToUtf8String$default(tmp, 0, 0, 3, null);
        break $l$block_0;
      }
      var result = commonToUtf8String(s.n25_1, s.o25_1, s.o25_1 + byteCount.yc() | 0);
      var tmp0_this = s;
      tmp0_this.o25_1 = tmp0_this.o25_1 + byteCount.yc() | 0;
      var tmp1_this = this;
      tmp1_this.d25_1 = tmp1_this.d25_1.s5(byteCount);
      if (s.o25_1 === s.p25_1) {
        this.c25_1 = s.x25();
        SegmentPool_getInstance().f26(s);
      }
      tmp$ret$1 = result;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.f27 = function () {
    Companion_getInstance();
    return this.g27(new Long(-1, 2147483647));
  };
  Buffer.prototype.g27 = function (limit) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      var tmp0_require = limit.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        tmp$ret$0 = 'limit < 0: ' + toString(limit);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp;
      Companion_getInstance();
      if (limit.equals(new Long(-1, 2147483647))) {
        Companion_getInstance();
        tmp = new Long(-1, 2147483647);
      } else {
        tmp = limit.r5(new Long(1, 0));
      }
      var scanLength = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 10;
      var newline = this.h27(toByte(tmp$ret$1), new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$2 = readUtf8Line(this, newline);
        break $l$block_0;
      }
      var tmp_0;
      var tmp_1;
      if (scanLength.v(this.d25_1) < 0) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$3 = scanLength.s5(new Long(1, 0));
        var tmp_2 = this.g26(tmp$ret$3);
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 13;
        tmp_1 = tmp_2 === toByte(tmp$ret$4);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = this.g26(scanLength);
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = 10;
        tmp_0 = tmp_3 === toByte(tmp$ret$5);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = readUtf8Line(this, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_4 = new Long(0, 0);
      var tmp$ret$7;
      // Inline function 'okio.minOf' call
      var tmp1_minOf = this.d25_1;
      var tmp$ret$6;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = new Long(32, 0);
      tmp$ret$6 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
      tmp$ret$7 = tmp$ret$6;
      this.y26(data, tmp_4, tmp$ret$7);
      var tmp$ret$8;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.d25_1;
      tmp$ret$8 = tmp2_minOf.v(limit) <= 0 ? tmp2_minOf : limit;
      throw new EOFException('\\n not found: limit=' + toString(tmp$ret$8) + ' content=' + data.a27().i27() + '\u2026');
    }
    return tmp$ret$2;
  };
  Buffer.prototype.j27 = function (options) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSelect' call
      var index = selectPrefix$default(this, options, false, 2, null);
      if (index === -1) {
        tmp$ret$0 = -1;
        break $l$block;
      }
      var selectedSize = options.l25_1[index].c();
      this.e25(toLong(selectedSize));
      tmp$ret$0 = index;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.c27 = function (byteCount) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonReadByteArray' call
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.v(new Long(0, 0)) >= 0 ? byteCount.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadByteArray.<anonymous>' call
      tmp$ret$0 = 'byteCount: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.d25_1.v(byteCount) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var result = new Int8Array(byteCount.yc());
    this.k27(result);
    tmp$ret$1 = result;
    return tmp$ret$1;
  };
  Buffer.prototype.k27 = function (sink) {
    var offset = 0;
    while (offset < sink.length) {
      var read = this.l27(sink, offset, sink.length - offset | 0);
      if (read === -1) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      offset = offset + read | 0;
    }
    return Unit_getInstance();
  };
  Buffer.prototype.l27 = function (sink, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = -1;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = s.p25_1 - s.o25_1 | 0;
      tmp$ret$1 = Math.min(byteCount, tmp0_minOf);
      var toCopy = tmp$ret$1;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = s.n25_1;
      var tmp2_copyInto = s.o25_1;
      var tmp3_copyInto = s.o25_1 + toCopy | 0;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp_0 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = sink;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp_0, tmp$ret$5, offset, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$6 = sink;
      var tmp1_this = s;
      tmp1_this.o25_1 = tmp1_this.o25_1 + toCopy | 0;
      var tmp2_this = this;
      tmp2_this.d25_1 = tmp2_this.d25_1.s5(toLong(toCopy));
      if (s.o25_1 === s.p25_1) {
        this.c25_1 = s.x25();
        SegmentPool_getInstance().f26(s);
      }
      tmp$ret$0 = toCopy;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.y6 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonClear' call
    this.e25(this.d25_1);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  Buffer.prototype.e25 = function (byteCount) {
    var byteCount_0 = byteCount;
    while (byteCount_0.v(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$(null, 1, null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp$ret$1;
      // Inline function 'okio.minOf' call
      var tmp0_minOf = byteCount_0;
      var tmp1_minOf = head.p25_1 - head.o25_1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf_0 = toLong(tmp1_minOf);
      tmp$ret$0 = tmp0_minOf.v(tmp0_minOf_0) <= 0 ? tmp0_minOf : tmp0_minOf_0;
      tmp$ret$1 = tmp$ret$0;
      var toSkip = tmp$ret$1.yc();
      var tmp1_this = this;
      tmp1_this.d25_1 = tmp1_this.d25_1.s5(toLong(toSkip));
      byteCount_0 = byteCount_0.s5(toLong(toSkip));
      var tmp2_this = head;
      tmp2_this.o25_1 = tmp2_this.o25_1 + toSkip | 0;
      if (head.o25_1 === head.p25_1) {
        this.c25_1 = head.x25();
        SegmentPool_getInstance().f26(head);
      }
    }
    return Unit_getInstance();
  };
  Buffer.prototype.m27 = function (byteString) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    var tmp0_commonWrite = byteString.c();
    byteString.n27(this, 0, tmp0_commonWrite);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.o27 = function (minimumCapacity) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonWritableSegment' call
      // Inline function 'kotlin.require' call
      var tmp;
      if (minimumCapacity >= 1) {
        Companion_getInstance_1();
        tmp = minimumCapacity <= 8192;
      } else {
        tmp = false;
      }
      var tmp0_require = tmp;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonWritableSegment.<anonymous>' call
        tmp$ret$0 = 'unexpected capacity';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.c25_1 == null) {
        var result = SegmentPool_getInstance().c26();
        this.c25_1 = result;
        result.t25_1 = result;
        result.s25_1 = result;
        tmp$ret$1 = result;
        break $l$block;
      }
      var tail = ensureNotNull(this.c25_1).t25_1;
      var tmp_0;
      var tmp_1 = ensureNotNull(tail).p25_1 + minimumCapacity | 0;
      Companion_getInstance_1();
      if (tmp_1 > 8192) {
        tmp_0 = true;
      } else {
        tmp_0 = !tail.r25_1;
      }
      if (tmp_0) {
        tail = tail.y25(SegmentPool_getInstance().c26());
      }
      tmp$ret$1 = tail;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.p27 = function (string) {
    return this.q27(string, 0, string.length);
  };
  Buffer.prototype.q27 = function (string, beginIndex, endIndex) {
    var tmp$ret$8;
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.require' call
    var tmp0_require = beginIndex >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$0 = 'beginIndex < 0: ' + beginIndex;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = endIndex >= beginIndex;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$1 = 'endIndex < beginIndex: ' + endIndex + ' < ' + beginIndex;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = endIndex <= string.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$2 = 'endIndex > string.length: ' + endIndex + ' > ' + string.length;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var i = beginIndex;
    while (i < endIndex) {
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      var tmp3__get_code__enalup = charSequenceGet(string, i);
      tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
      var c = tmp$ret$3;
      if (c < 128) {
        var tail = this.o27(1);
        var data = tail.n25_1;
        var segmentOffset = tail.p25_1 - i | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        Companion_getInstance_1();
        var tmp4_minOf = 8192 - segmentOffset | 0;
        tmp$ret$4 = Math.min(endIndex, tmp4_minOf);
        var runLimit = tmp$ret$4;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        data[segmentOffset + tmp0 | 0] = toByte(c);
        $l$loop: while (i < runLimit) {
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          var tmp5__get_code__iwzzkv = charSequenceGet(string, i);
          tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
          c = tmp$ret$5;
          if (c >= 128)
            break $l$loop;
          var tmp1 = i;
          i = tmp1 + 1 | 0;
          data[segmentOffset + tmp1 | 0] = toByte(c);
        }
        var runSize = (i + segmentOffset | 0) - tail.p25_1 | 0;
        var tmp2_this = tail;
        tmp2_this.p25_1 = tmp2_this.p25_1 + runSize | 0;
        var tmp3_this = this;
        tmp3_this.d25_1 = tmp3_this.d25_1.r5(toLong(runSize));
      } else if (c < 2048) {
        var tail_0 = this.o27(2);
        tail_0.n25_1[tail_0.p25_1] = toByte(c >> 6 | 192);
        tail_0.n25_1[tail_0.p25_1 + 1 | 0] = toByte(c & 63 | 128);
        var tmp4_this = tail_0;
        tmp4_this.p25_1 = tmp4_this.p25_1 + 2 | 0;
        var tmp5_this = this;
        tmp5_this.d25_1 = tmp5_this.d25_1.r5(new Long(2, 0));
        var tmp6 = i;
        i = tmp6 + 1 | 0;
      } else if (c < 55296 ? true : c > 57343) {
        var tail_1 = this.o27(3);
        tail_1.n25_1[tail_1.p25_1] = toByte(c >> 12 | 224);
        tail_1.n25_1[tail_1.p25_1 + 1 | 0] = toByte(c >> 6 & 63 | 128);
        tail_1.n25_1[tail_1.p25_1 + 2 | 0] = toByte(c & 63 | 128);
        var tmp7_this = tail_1;
        tmp7_this.p25_1 = tmp7_this.p25_1 + 3 | 0;
        var tmp8_this = this;
        tmp8_this.d25_1 = tmp8_this.d25_1.r5(new Long(3, 0));
        var tmp9 = i;
        i = tmp9 + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          var tmp6__get_code__l1uofy = charSequenceGet(string, i + 1 | 0);
          tmp$ret$6 = Char__toInt_impl_vasixd(tmp6__get_code__l1uofy);
          tmp = tmp$ret$6;
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 ? true : !(56320 <= low ? low <= 57343 : false)) {
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = 63;
          this.r27(tmp$ret$7);
          var tmp10 = i;
          i = tmp10 + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          var tail_2 = this.o27(4);
          tail_2.n25_1[tail_2.p25_1] = toByte(codePoint >> 18 | 240);
          tail_2.n25_1[tail_2.p25_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
          tail_2.n25_1[tail_2.p25_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
          tail_2.n25_1[tail_2.p25_1 + 3 | 0] = toByte(codePoint & 63 | 128);
          var tmp11_this = tail_2;
          tmp11_this.p25_1 = tmp11_this.p25_1 + 4 | 0;
          var tmp12_this = this;
          tmp12_this.d25_1 = tmp12_this.d25_1.r5(new Long(4, 0));
          i = i + 2 | 0;
        }
      }
    }
    tmp$ret$8 = this;
    return tmp$ret$8;
  };
  Buffer.prototype.s27 = function (source) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    tmp$ret$0 = this.i26(source, 0, source.length);
    return tmp$ret$0;
  };
  Buffer.prototype.i26 = function (source, offset, byteCount) {
    var tmp$ret$6;
    // Inline function 'okio.internal.commonWrite' call
    var offset_0 = offset;
    checkOffsetAndCount(toLong(source.length), toLong(offset_0), toLong(byteCount));
    var limit = offset_0 + byteCount | 0;
    while (offset_0 < limit) {
      var tail = this.o27(1);
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = limit - offset_0 | 0;
      Companion_getInstance_1();
      var tmp1_minOf = 8192 - tail.p25_1 | 0;
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      var toCopy = tmp$ret$0;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = tail.n25_1;
      var tmp3_copyInto = tail.p25_1;
      var tmp4_copyInto = offset_0;
      var tmp5_copyInto = offset_0 + toCopy | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = source;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, tmp3_copyInto, tmp4_copyInto, tmp5_copyInto);
      tmp$ret$5 = tmp2_copyInto;
      offset_0 = offset_0 + toCopy | 0;
      var tmp0_this = tail;
      tmp0_this.p25_1 = tmp0_this.p25_1 + toCopy | 0;
    }
    var tmp1_this = this;
    tmp1_this.d25_1 = tmp1_this.d25_1.r5(toLong(byteCount));
    tmp$ret$6 = this;
    return tmp$ret$6;
  };
  Buffer.prototype.g25 = function (source) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteAll' call
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      Companion_getInstance_1();
      var readCount = source.t27(this, toLong(8192));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.r5(readCount);
    }
    tmp$ret$0 = totalBytesRead;
    return tmp$ret$0;
  };
  Buffer.prototype.r27 = function (b) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteByte' call
    var tail = this.o27(1);
    var tmp0_this = tail;
    var tmp1 = tmp0_this.p25_1;
    tmp0_this.p25_1 = tmp1 + 1 | 0;
    tail.n25_1[tmp1] = toByte(b);
    var tmp2_this = this;
    tmp2_this.d25_1 = tmp2_this.d25_1.r5(new Long(1, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.f25 = function (i) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteInt' call
    var tail = this.o27(4);
    var data = tail.n25_1;
    var limit = tail.p25_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = toByte((i >>> 24 | 0) & 255);
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = toByte((i >>> 16 | 0) & 255);
    var tmp2 = limit;
    limit = tmp2 + 1 | 0;
    data[tmp2] = toByte((i >>> 8 | 0) & 255);
    var tmp3 = limit;
    limit = tmp3 + 1 | 0;
    data[tmp3] = toByte(i & 255);
    tail.p25_1 = limit;
    var tmp4_this = this;
    tmp4_this.d25_1 = tmp4_this.d25_1.r5(new Long(4, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.b25 = function (source, byteCount) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonWrite' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      var tmp0_require = !(source === this);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonWrite.<anonymous>' call
        tmp$ret$0 = 'source == this';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      checkOffsetAndCount(source.d25_1, new Long(0, 0), byteCount_0);
      while (byteCount_0.v(new Long(0, 0)) > 0) {
        if (byteCount_0.v(toLong(ensureNotNull(source.c25_1).p25_1 - ensureNotNull(source.c25_1).o25_1 | 0)) < 0) {
          var tail = !(this.c25_1 == null) ? ensureNotNull(this.c25_1).t25_1 : null;
          var tmp;
          if (!(tail == null) ? tail.r25_1 : false) {
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$1;
            // Inline function 'kotlin.Long.plus' call
            var tmp1_plus = byteCount_0;
            var tmp2_plus = tail.p25_1;
            tmp$ret$1 = tmp1_plus.r5(toLong(tmp2_plus));
            var tmp3_minus = tmp$ret$1;
            var tmp4_minus = tail.q25_1 ? 0 : tail.o25_1;
            tmp$ret$2 = tmp3_minus.s5(toLong(tmp4_minus));
            var tmp_0 = tmp$ret$2;
            Companion_getInstance_1();
            tmp = tmp_0.v(toLong(8192)) <= 0;
          } else {
            tmp = false;
          }
          if (tmp) {
            ensureNotNull(source.c25_1).e26(tail, byteCount_0.yc());
            var tmp0_this = source;
            tmp0_this.d25_1 = tmp0_this.d25_1.s5(byteCount_0);
            var tmp1_this = this;
            tmp1_this.d25_1 = tmp1_this.d25_1.r5(byteCount_0);
            tmp$ret$3 = Unit_getInstance();
            break $l$block;
          } else {
            source.c25_1 = ensureNotNull(source.c25_1).z25(byteCount_0.yc());
          }
        }
        var segmentToMove = source.c25_1;
        var movedByteCount = toLong(ensureNotNull(segmentToMove).p25_1 - segmentToMove.o25_1 | 0);
        source.c25_1 = segmentToMove.x25();
        if (this.c25_1 == null) {
          this.c25_1 = segmentToMove;
          segmentToMove.t25_1 = segmentToMove;
          segmentToMove.s25_1 = segmentToMove.t25_1;
        } else {
          var tail_0 = ensureNotNull(this.c25_1).t25_1;
          tail_0 = ensureNotNull(tail_0).y25(segmentToMove);
          tail_0.d26();
        }
        var tmp2_this = source;
        tmp2_this.d25_1 = tmp2_this.d25_1.s5(movedByteCount);
        var tmp3_this = this;
        tmp3_this.d25_1 = tmp3_this.d25_1.r5(movedByteCount);
        byteCount_0 = byteCount_0.s5(movedByteCount);
      }
    }
    return tmp$ret$3;
  };
  Buffer.prototype.t27 = function (sink, byteCount) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount_0.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.d25_1.equals(new Long(0, 0))) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block;
      }
      if (byteCount_0.v(this.d25_1) > 0)
        byteCount_0 = this.d25_1;
      sink.b25(this, byteCount_0);
      tmp$ret$1 = byteCount_0;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.h27 = function (b, fromIndex, toIndex) {
    var tmp$ret$1;
    $l$block_8: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      var toIndex_0 = toIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = (new Long(0, 0)).v(fromIndex_0) <= 0 ? fromIndex_0.v(toIndex_0) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'size=' + toString(this.d25_1) + ' fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (toIndex_0.v(this.d25_1) > 0)
        toIndex_0 = this.d25_1;
      if (fromIndex_0.equals(toIndex_0)) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
      var tmp$ret$3;
      // Inline function 'okio.internal.seek' call
      var tmp3_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        while (offset.v(toIndex_0) < 0) {
          var data = s.n25_1;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = toLong(s.p25_1);
          var tmp1_minOf = numberToLong(s.o25_1).r5(toIndex_0).s5(offset);
          tmp$ret$2 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
          var limit = tmp$ret$2.yc();
          var pos = numberToLong(s.o25_1).r5(fromIndex_0).s5(offset).yc();
          while (pos < limit) {
            if (data[pos] === b) {
              tmp$ret$1 = numberToLong(pos - s.o25_1 | 0).r5(offset);
              break $l$block_8;
            }
            var tmp1 = pos;
            pos = tmp1 + 1 | 0;
          }
          offset = offset.r5(toLong(s.p25_1 - s.o25_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.s25_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.d25_1.s5(tmp3_seek).v(tmp3_seek) < 0) {
        var offset_0 = this.d25_1;
        while (offset_0.v(tmp3_seek) > 0) {
          s_0 = ensureNotNull(s_0.t25_1);
          offset_0 = offset_0.s5(toLong(s_0.p25_1 - s_0.o25_1 | 0));
        }
        var tmp4__anonymous__pkmkx7 = s_0;
        var tmp5__anonymous__kpxxpo = offset_0;
        var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp5__anonymous__kpxxpo;
        while (offset_1.v(toIndex_0) < 0) {
          var data_0 = s_1.n25_1;
          var tmp$ret$4;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_0 = toLong(s_1.p25_1);
          var tmp1_minOf_0 = numberToLong(s_1.o25_1).r5(toIndex_0).s5(offset_1);
          tmp$ret$4 = tmp0_minOf_0.v(tmp1_minOf_0) <= 0 ? tmp0_minOf_0 : tmp1_minOf_0;
          var limit_0 = tmp$ret$4.yc();
          var pos_0 = numberToLong(s_1.o25_1).r5(fromIndex_0).s5(offset_1).yc();
          while (pos_0 < limit_0) {
            if (data_0[pos_0] === b) {
              tmp$ret$1 = numberToLong(pos_0 - s_1.o25_1 | 0).r5(offset_1);
              break $l$block_8;
            }
            var tmp1_0 = pos_0;
            pos_0 = tmp1_0 + 1 | 0;
          }
          offset_1 = offset_1.r5(toLong(s_1.p25_1 - s_1.o25_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.s25_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$5;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = offset_2;
          var tmp2_plus = s_0.p25_1 - s_0.o25_1 | 0;
          tmp$ret$5 = tmp1_plus.r5(toLong(tmp2_plus));
          var nextOffset = tmp$ret$5;
          if (nextOffset.v(tmp3_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.s25_1);
          offset_2 = nextOffset;
        }
        var tmp6__anonymous__fv9ai5 = s_0;
        var tmp7__anonymous__b0knam = offset_2;
        var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp7__anonymous__b0knam;
        while (offset_3.v(toIndex_0) < 0) {
          var data_1 = s_2.n25_1;
          var tmp$ret$6;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_1 = toLong(s_2.p25_1);
          var tmp1_minOf_1 = numberToLong(s_2.o25_1).r5(toIndex_0).s5(offset_3);
          tmp$ret$6 = tmp0_minOf_1.v(tmp1_minOf_1) <= 0 ? tmp0_minOf_1 : tmp1_minOf_1;
          var limit_1 = tmp$ret$6.yc();
          var pos_1 = numberToLong(s_2.o25_1).r5(fromIndex_0).s5(offset_3).yc();
          while (pos_1 < limit_1) {
            if (data_1[pos_1] === b) {
              tmp$ret$1 = numberToLong(pos_1 - s_2.o25_1 | 0).r5(offset_3);
              break $l$block_8;
            }
            var tmp1_1 = pos_1;
            pos_1 = tmp1_1 + 1 | 0;
          }
          offset_3 = offset_3.r5(toLong(s_2.p25_1 - s_2.o25_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.s25_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
    }
    return tmp$ret$1;
  };
  Buffer.prototype.u27 = function (bytes) {
    return this.v27(bytes, new Long(0, 0));
  };
  Buffer.prototype.v27 = function (bytes, fromIndex) {
    var tmp$ret$2;
    $l$block_7: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = bytes.c() > 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'bytes is empty';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = fromIndex_0.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$1 = 'fromIndex < 0: ' + toString(fromIndex_0);
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp$ret$6;
      // Inline function 'okio.internal.seek' call
      var tmp4_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        var targetByteArray = bytes.w27();
        var b0 = targetByteArray[0];
        var bytesSize = bytes.c();
        var tmp$ret$3;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus = this.d25_1;
        tmp$ret$3 = tmp0_minus.s5(toLong(bytesSize));
        var resultLimit = tmp$ret$3.r5(new Long(1, 0));
        while (offset.v(resultLimit) < 0) {
          var data = s.n25_1;
          var tmp$ret$5;
          // Inline function 'okio.minOf' call
          var tmp1_minOf = s.p25_1;
          var tmp2_minOf = numberToLong(s.o25_1).r5(resultLimit).s5(offset);
          var tmp$ret$4;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = toLong(tmp1_minOf);
          tmp$ret$4 = tmp0_minOf.v(tmp2_minOf) <= 0 ? tmp0_minOf : tmp2_minOf;
          tmp$ret$5 = tmp$ret$4;
          var segmentLimit = tmp$ret$5.yc();
          var inductionVariable = numberToLong(s.o25_1).r5(fromIndex_0).s5(offset).yc();
          if (inductionVariable < segmentLimit)
            do {
              var pos = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              if (data[pos] === b0 ? rangeEquals(s, pos + 1 | 0, targetByteArray, 1, bytesSize) : false) {
                tmp$ret$2 = numberToLong(pos - s.o25_1 | 0).r5(offset);
                break $l$block_7;
              }
            }
             while (inductionVariable < segmentLimit);
          offset = offset.r5(toLong(s.p25_1 - s.o25_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.s25_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.d25_1.s5(tmp4_seek).v(tmp4_seek) < 0) {
        var offset_0 = this.d25_1;
        while (offset_0.v(tmp4_seek) > 0) {
          s_0 = ensureNotNull(s_0.t25_1);
          offset_0 = offset_0.s5(toLong(s_0.p25_1 - s_0.o25_1 | 0));
        }
        var tmp5__anonymous__kpxxpo = s_0;
        var tmp6__anonymous__fv9ai5 = offset_0;
        var tmp0_elvis_lhs_1 = tmp5__anonymous__kpxxpo;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp6__anonymous__fv9ai5;
        var targetByteArray_0 = bytes.w27();
        var b0_0 = targetByteArray_0[0];
        var bytesSize_0 = bytes.c();
        var tmp$ret$7;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus_0 = this.d25_1;
        tmp$ret$7 = tmp0_minus_0.s5(toLong(bytesSize_0));
        var resultLimit_0 = tmp$ret$7.r5(new Long(1, 0));
        while (offset_1.v(resultLimit_0) < 0) {
          var data_0 = s_1.n25_1;
          var tmp$ret$9;
          // Inline function 'okio.minOf' call
          var tmp1_minOf_0 = s_1.p25_1;
          var tmp2_minOf_0 = numberToLong(s_1.o25_1).r5(resultLimit_0).s5(offset_1);
          var tmp$ret$8;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_0 = toLong(tmp1_minOf_0);
          tmp$ret$8 = tmp0_minOf_0.v(tmp2_minOf_0) <= 0 ? tmp0_minOf_0 : tmp2_minOf_0;
          tmp$ret$9 = tmp$ret$8;
          var segmentLimit_0 = tmp$ret$9.yc();
          var inductionVariable_0 = numberToLong(s_1.o25_1).r5(fromIndex_0).s5(offset_1).yc();
          if (inductionVariable_0 < segmentLimit_0)
            do {
              var pos_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (data_0[pos_0] === b0_0 ? rangeEquals(s_1, pos_0 + 1 | 0, targetByteArray_0, 1, bytesSize_0) : false) {
                tmp$ret$2 = numberToLong(pos_0 - s_1.o25_1 | 0).r5(offset_1);
                break $l$block_7;
              }
            }
             while (inductionVariable_0 < segmentLimit_0);
          offset_1 = offset_1.r5(toLong(s_1.p25_1 - s_1.o25_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.s25_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$10;
          // Inline function 'kotlin.Long.plus' call
          var tmp2_plus = offset_2;
          var tmp3_plus = s_0.p25_1 - s_0.o25_1 | 0;
          tmp$ret$10 = tmp2_plus.r5(toLong(tmp3_plus));
          var nextOffset = tmp$ret$10;
          if (nextOffset.v(tmp4_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.s25_1);
          offset_2 = nextOffset;
        }
        var tmp7__anonymous__b0knam = s_0;
        var tmp8__anonymous__65w033 = offset_2;
        var tmp0_elvis_lhs_2 = tmp7__anonymous__b0knam;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp8__anonymous__65w033;
        var targetByteArray_1 = bytes.w27();
        var b0_1 = targetByteArray_1[0];
        var bytesSize_1 = bytes.c();
        var tmp$ret$11;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus_1 = this.d25_1;
        tmp$ret$11 = tmp0_minus_1.s5(toLong(bytesSize_1));
        var resultLimit_1 = tmp$ret$11.r5(new Long(1, 0));
        while (offset_3.v(resultLimit_1) < 0) {
          var data_1 = s_2.n25_1;
          var tmp$ret$13;
          // Inline function 'okio.minOf' call
          var tmp1_minOf_1 = s_2.p25_1;
          var tmp2_minOf_1 = numberToLong(s_2.o25_1).r5(resultLimit_1).s5(offset_3);
          var tmp$ret$12;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_1 = toLong(tmp1_minOf_1);
          tmp$ret$12 = tmp0_minOf_1.v(tmp2_minOf_1) <= 0 ? tmp0_minOf_1 : tmp2_minOf_1;
          tmp$ret$13 = tmp$ret$12;
          var segmentLimit_1 = tmp$ret$13.yc();
          var inductionVariable_1 = numberToLong(s_2.o25_1).r5(fromIndex_0).s5(offset_3).yc();
          if (inductionVariable_1 < segmentLimit_1)
            do {
              var pos_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (data_1[pos_1] === b0_1 ? rangeEquals(s_2, pos_1 + 1 | 0, targetByteArray_1, 1, bytesSize_1) : false) {
                tmp$ret$2 = numberToLong(pos_1 - s_2.o25_1 | 0).r5(offset_3);
                break $l$block_7;
              }
            }
             while (inductionVariable_1 < segmentLimit_1);
          offset_3 = offset_3.r5(toLong(s_2.p25_1 - s_2.o25_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.s25_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      }
    }
    return tmp$ret$2;
  };
  Buffer.prototype.x27 = function (targetBytes) {
    return this.y27(targetBytes, new Long(0, 0));
  };
  Buffer.prototype.y27 = function (targetBytes, fromIndex) {
    var tmp$ret$1;
    $l$block_10: {
      // Inline function 'okio.internal.commonIndexOfElement' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = fromIndex_0.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
        tmp$ret$0 = 'fromIndex < 0: ' + toString(fromIndex_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp$ret$2;
      // Inline function 'okio.internal.seek' call
      var tmp3_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        if (targetBytes.c() === 2) {
          var b0 = targetBytes.f(0);
          var b1 = targetBytes.f(1);
          while (offset.v(this.d25_1) < 0) {
            var data = s.n25_1;
            var pos = numberToLong(s.o25_1).r5(fromIndex_0).s5(offset).yc();
            var limit = s.p25_1;
            while (pos < limit) {
              var b = data[pos];
              if (b === b0 ? true : b === b1) {
                tmp$ret$1 = numberToLong(pos - s.o25_1 | 0).r5(offset);
                break $l$block_10;
              }
              var tmp1 = pos;
              pos = tmp1 + 1 | 0;
            }
            offset = offset.r5(toLong(s.p25_1 - s.o25_1 | 0));
            fromIndex_0 = offset;
            s = ensureNotNull(s.s25_1);
          }
        } else {
          var targetByteArray = targetBytes.w27();
          while (offset.v(this.d25_1) < 0) {
            var data_0 = s.n25_1;
            var pos_0 = numberToLong(s.o25_1).r5(fromIndex_0).s5(offset).yc();
            var limit_0 = s.p25_1;
            while (pos_0 < limit_0) {
              var b_0 = data_0[pos_0];
              var indexedObject = targetByteArray;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var t = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (b_0 === t) {
                  tmp$ret$1 = numberToLong(pos_0 - s.o25_1 | 0).r5(offset);
                  break $l$block_10;
                }
              }
              var tmp3 = pos_0;
              pos_0 = tmp3 + 1 | 0;
            }
            offset = offset.r5(toLong(s.p25_1 - s.o25_1 | 0));
            fromIndex_0 = offset;
            s = ensureNotNull(s.s25_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.d25_1.s5(tmp3_seek).v(tmp3_seek) < 0) {
        var offset_0 = this.d25_1;
        while (offset_0.v(tmp3_seek) > 0) {
          s_0 = ensureNotNull(s_0.t25_1);
          offset_0 = offset_0.s5(toLong(s_0.p25_1 - s_0.o25_1 | 0));
        }
        var tmp4__anonymous__pkmkx7 = s_0;
        var tmp5__anonymous__kpxxpo = offset_0;
        var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp5__anonymous__kpxxpo;
        if (targetBytes.c() === 2) {
          var b0_0 = targetBytes.f(0);
          var b1_0 = targetBytes.f(1);
          while (offset_1.v(this.d25_1) < 0) {
            var data_1 = s_1.n25_1;
            var pos_1 = numberToLong(s_1.o25_1).r5(fromIndex_0).s5(offset_1).yc();
            var limit_1 = s_1.p25_1;
            while (pos_1 < limit_1) {
              var b_1 = data_1[pos_1];
              if (b_1 === b0_0 ? true : b_1 === b1_0) {
                tmp$ret$1 = numberToLong(pos_1 - s_1.o25_1 | 0).r5(offset_1);
                break $l$block_10;
              }
              var tmp1_0 = pos_1;
              pos_1 = tmp1_0 + 1 | 0;
            }
            offset_1 = offset_1.r5(toLong(s_1.p25_1 - s_1.o25_1 | 0));
            fromIndex_0 = offset_1;
            s_1 = ensureNotNull(s_1.s25_1);
          }
        } else {
          var targetByteArray_0 = targetBytes.w27();
          while (offset_1.v(this.d25_1) < 0) {
            var data_2 = s_1.n25_1;
            var pos_2 = numberToLong(s_1.o25_1).r5(fromIndex_0).s5(offset_1).yc();
            var limit_2 = s_1.p25_1;
            while (pos_2 < limit_2) {
              var b_2 = data_2[pos_2];
              var indexedObject_0 = targetByteArray_0;
              var inductionVariable_0 = 0;
              var last_0 = indexedObject_0.length;
              while (inductionVariable_0 < last_0) {
                var t_0 = indexedObject_0[inductionVariable_0];
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                if (b_2 === t_0) {
                  tmp$ret$1 = numberToLong(pos_2 - s_1.o25_1 | 0).r5(offset_1);
                  break $l$block_10;
                }
              }
              var tmp3_0 = pos_2;
              pos_2 = tmp3_0 + 1 | 0;
            }
            offset_1 = offset_1.r5(toLong(s_1.p25_1 - s_1.o25_1 | 0));
            fromIndex_0 = offset_1;
            s_1 = ensureNotNull(s_1.s25_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$3;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = offset_2;
          var tmp2_plus = s_0.p25_1 - s_0.o25_1 | 0;
          tmp$ret$3 = tmp1_plus.r5(toLong(tmp2_plus));
          var nextOffset = tmp$ret$3;
          if (nextOffset.v(tmp3_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.s25_1);
          offset_2 = nextOffset;
        }
        var tmp6__anonymous__fv9ai5 = s_0;
        var tmp7__anonymous__b0knam = offset_2;
        var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp7__anonymous__b0knam;
        if (targetBytes.c() === 2) {
          var b0_1 = targetBytes.f(0);
          var b1_1 = targetBytes.f(1);
          while (offset_3.v(this.d25_1) < 0) {
            var data_3 = s_2.n25_1;
            var pos_3 = numberToLong(s_2.o25_1).r5(fromIndex_0).s5(offset_3).yc();
            var limit_3 = s_2.p25_1;
            while (pos_3 < limit_3) {
              var b_3 = data_3[pos_3];
              if (b_3 === b0_1 ? true : b_3 === b1_1) {
                tmp$ret$1 = numberToLong(pos_3 - s_2.o25_1 | 0).r5(offset_3);
                break $l$block_10;
              }
              var tmp1_1 = pos_3;
              pos_3 = tmp1_1 + 1 | 0;
            }
            offset_3 = offset_3.r5(toLong(s_2.p25_1 - s_2.o25_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.s25_1);
          }
        } else {
          var targetByteArray_1 = targetBytes.w27();
          while (offset_3.v(this.d25_1) < 0) {
            var data_4 = s_2.n25_1;
            var pos_4 = numberToLong(s_2.o25_1).r5(fromIndex_0).s5(offset_3).yc();
            var limit_4 = s_2.p25_1;
            while (pos_4 < limit_4) {
              var b_4 = data_4[pos_4];
              var indexedObject_1 = targetByteArray_1;
              var inductionVariable_1 = 0;
              var last_1 = indexedObject_1.length;
              while (inductionVariable_1 < last_1) {
                var t_1 = indexedObject_1[inductionVariable_1];
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                if (b_4 === t_1) {
                  tmp$ret$1 = numberToLong(pos_4 - s_2.o25_1 | 0).r5(offset_3);
                  break $l$block_10;
                }
              }
              var tmp3_1 = pos_4;
              pos_4 = tmp3_1 + 1 | 0;
            }
            offset_3 = offset_3.r5(toLong(s_2.p25_1 - s_2.o25_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.s25_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      }
    }
    return tmp$ret$1;
  };
  Buffer.prototype.z27 = function (offset, bytes) {
    return this.a28(offset, bytes, 0, bytes.c());
  };
  Buffer.prototype.a28 = function (offset, bytes, bytesOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if ((((offset.v(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : this.d25_1.s5(offset).v(toLong(byteCount)) < 0) ? true : (bytes.c() - bytesOffset | 0) < byteCount) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var inductionVariable = 0;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$1 = offset.r5(toLong(i));
          if (!(this.g26(tmp$ret$1) === bytes.f(bytesOffset + i | 0))) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable < byteCount);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.da = function () {
    return Unit_getInstance();
  };
  Buffer.prototype.v15 = function () {
    return Unit_getInstance();
  };
  Buffer.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'okio.internal.commonEquals' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (!(other instanceof Buffer)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (!this.d25_1.equals(other.d25_1)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (this.d25_1.equals(new Long(0, 0))) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      var sa = ensureNotNull(this.c25_1);
      var sb = ensureNotNull(other.c25_1);
      var posA = sa.o25_1;
      var posB = sb.o25_1;
      var pos = new Long(0, 0);
      var count;
      while (pos.v(this.d25_1) < 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = sa.p25_1 - posA | 0;
        var tmp1_minOf = sb.p25_1 - posB | 0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        count = toLong(tmp$ret$1);
        var inductionVariable = new Long(0, 0);
        var last = count;
        if (inductionVariable.v(last) < 0)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable.r5(new Long(1, 0));
            var tmp = sa.n25_1;
            var tmp1 = posA;
            posA = tmp1 + 1 | 0;
            var tmp_0 = tmp[tmp1];
            var tmp_1 = sb.n25_1;
            var tmp2 = posB;
            posB = tmp2 + 1 | 0;
            if (!(tmp_0 === tmp_1[tmp2])) {
              tmp$ret$0 = false;
              break $l$block_3;
            }
          }
           while (inductionVariable.v(last) < 0);
        if (posA === sa.p25_1) {
          sa = ensureNotNull(sa.s25_1);
          posA = sa.o25_1;
        }
        if (posB === sb.p25_1) {
          sb = ensureNotNull(sb.s25_1);
          posB = sb.o25_1;
        }
        pos = pos.r5(count);
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var tmp0_elvis_lhs = this.c25_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = 0;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var result = 1;
      do {
        var pos = s.o25_1;
        var limit = s.p25_1;
        while (pos < limit) {
          result = imul(31, result) + s.n25_1[pos] | 0;
          var tmp1 = pos;
          pos = tmp1 + 1 | 0;
        }
        s = ensureNotNull(s.s25_1);
      }
       while (!(s === this.c25_1));
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.toString = function () {
    return this.b28().toString();
  };
  Buffer.prototype.b28 = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonSnapshot' call
    // Inline function 'kotlin.check' call
    var tmp0_check = this.d25_1.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSnapshot.<anonymous>' call
      tmp$ret$0 = 'size > Int.MAX_VALUE: ' + toString(this.d25_1);
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = this.d27(this.d25_1.yc());
    return tmp$ret$1;
  };
  Buffer.prototype.d27 = function (byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSnapshot' call
      if (byteCount === 0) {
        tmp$ret$0 = Companion_getInstance_2().c28_1;
        break $l$block;
      }
      checkOffsetAndCount(this.d25_1, new Long(0, 0), toLong(byteCount));
      var offset = 0;
      var segmentCount = 0;
      var s = this.c25_1;
      while (offset < byteCount) {
        if (ensureNotNull(s).p25_1 === s.o25_1) {
          throw AssertionError_init_$Create$('s.limit == s.pos');
        }
        offset = offset + (s.p25_1 - s.o25_1 | 0) | 0;
        var tmp0 = segmentCount;
        segmentCount = tmp0 + 1 | 0;
        s = s.s25_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = segmentCount;
      tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var segments = tmp$ret$1;
      var directory = new Int32Array(imul(segmentCount, 2));
      offset = 0;
      segmentCount = 0;
      s = this.c25_1;
      while (offset < byteCount) {
        segments[segmentCount] = ensureNotNull(s).n25_1;
        offset = offset + (s.p25_1 - s.o25_1 | 0) | 0;
        var tmp = segmentCount;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = offset;
        tmp$ret$2 = Math.min(tmp1_minOf, byteCount);
        directory[tmp] = tmp$ret$2;
        directory[segmentCount + segments.length | 0] = s.o25_1;
        s.q25_1 = true;
        var tmp1 = segmentCount;
        segmentCount = tmp1 + 1 | 0;
        s = s.s25_1;
      }
      tmp$ret$0 = new SegmentedByteString(isArray(segments) ? segments : THROW_CCE(), directory);
    }
    return tmp$ret$0;
  };
  function BufferedSource() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$0 = new Int8Array([]);
    tmp.c28_1 = new ByteString(tmp$ret$0);
  }
  Companion_1.prototype.d28 = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEncodeUtf8' call
    var byteString = new ByteString(asUtf8ToByteArray(_this__u8e3s4));
    byteString.e28(_this__u8e3s4);
    tmp$ret$0 = byteString;
    return tmp$ret$0;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ByteString(data) {
    Companion_getInstance_2();
    this.y24_1 = data;
    this.z24_1 = 0;
    this.a25_1 = null;
  }
  ByteString.prototype.f28 = function (value) {
  };
  ByteString.prototype.e28 = function (value) {
  };
  ByteString.prototype.g28 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonUtf8' call
    var result = this.a25_1;
    if (result == null) {
      result = toUtf8String(this.w27());
      this.e28(result);
    }
    tmp$ret$0 = result;
    return tmp$ret$0;
  };
  ByteString.prototype.i27 = function () {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonHex' call
    var result = charArray(imul(this.y24_1.length, 2));
    var c = 0;
    var indexedObject = this.y24_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = c;
      c = tmp1 + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      var tmp$ret$0;
      // Inline function 'okio.shr' call
      tmp$ret$0 = b >> 4;
      result[tmp1] = tmp[tmp$ret$0 & 15];
      var tmp2 = c;
      c = tmp2 + 1 | 0;
      var tmp_0 = get_HEX_DIGIT_CHARS();
      var tmp$ret$1;
      // Inline function 'okio.and' call
      tmp$ret$1 = b & 15;
      result[tmp2] = tmp_0[tmp$ret$1];
    }
    tmp$ret$2 = concatToString_0(result);
    return tmp$ret$2;
  };
  ByteString.prototype.h28 = function (pos) {
    if (pos >= this.c() ? true : pos < 0)
      throw new ArrayIndexOutOfBoundsException('size=' + this.c() + ' pos=' + pos);
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetByte' call
    tmp$ret$0 = this.y24_1[pos];
    return tmp$ret$0;
  };
  ByteString.prototype.f = function (index) {
    return this.h28(index);
  };
  ByteString.prototype.c = function () {
    return this.i28();
  };
  ByteString.prototype.i28 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetSize' call
    tmp$ret$0 = this.y24_1.length;
    return tmp$ret$0;
  };
  ByteString.prototype.j28 = function () {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonToByteArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.y24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ByteString.prototype.w27 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonInternalArray' call
    tmp$ret$0 = this.y24_1;
    return tmp$ret$0;
  };
  ByteString.prototype.n27 = function (buffer, offset, byteCount) {
    return commonWrite(this, buffer, offset, byteCount);
  };
  ByteString.prototype.k28 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonRangeEquals' call
    tmp$ret$0 = other.l28(otherOffset, this.y24_1, offset, byteCount);
    return tmp$ret$0;
  };
  ByteString.prototype.l28 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonRangeEquals' call
    tmp$ret$0 = (((offset >= 0 ? offset <= (this.y24_1.length - byteCount | 0) : false) ? otherOffset >= 0 : false) ? otherOffset <= (other.length - byteCount | 0) : false) ? arrayRangeEquals(this.y24_1, offset, other, otherOffset, byteCount) : false;
    return tmp$ret$0;
  };
  ByteString.prototype.i25 = function (prefix) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonStartsWith' call
    tmp$ret$0 = this.k28(0, prefix, 0, prefix.c());
    return tmp$ret$0;
  };
  ByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.c() === this.y24_1.length ? other.l28(0, this.y24_1, 0, this.y24_1.length) : false;
      } else {
        tmp = false;
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  ByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.z24_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = contentHashCode(this.y24_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'okio.internal.commonHashCode.<anonymous>' call
      this.f28(tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp$ret$0 = tmp$ret$1;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.m28 = function (other) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonCompareTo' call
      var sizeA = this.c();
      var sizeB = other.c();
      var i = 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(sizeA, sizeB);
      var size = tmp$ret$0;
      $l$loop: while (i < size) {
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp0_and = this.f(i);
        tmp$ret$1 = tmp0_and & 255;
        var byteA = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'okio.and' call
        var tmp1_and = other.f(i);
        tmp$ret$2 = tmp1_and & 255;
        var byteB = tmp$ret$2;
        if (byteA === byteB) {
          var tmp0 = i;
          i = tmp0 + 1 | 0;
          continue $l$loop;
        }
        tmp$ret$3 = byteA < byteB ? -1 : 1;
        break $l$block_0;
      }
      if (sizeA === sizeB) {
        tmp$ret$3 = 0;
        break $l$block_0;
      }
      tmp$ret$3 = sizeA < sizeB ? -1 : 1;
    }
    return tmp$ret$3;
  };
  ByteString.prototype.o6 = function (other) {
    return this.m28(other instanceof ByteString ? other : THROW_CCE());
  };
  ByteString.prototype.toString = function () {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonToString' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      var tmp0_isEmpty = this.y24_1;
      tmp$ret$0 = tmp0_isEmpty.length === 0;
      if (tmp$ret$0) {
        tmp$ret$1 = '[size=0]';
        break $l$block_1;
      }
      var i = codePointIndexToCharIndex$accessor$13225fg(this.y24_1, 64);
      if (i === -1) {
        var tmp;
        if (this.y24_1.length <= 64) {
          tmp = '[hex=' + this.i27() + ']';
        } else {
          var tmp_0 = this.y24_1.length;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'okio.internal.commonSubstring' call
            var endIndex = resolveDefaultParameter(this, 64);
            // Inline function 'kotlin.require' call
            var tmp0_require = true;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_require) {
              var tmp$ret$2;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$2 = 'beginIndex < 0';
              var message = tmp$ret$2;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            // Inline function 'kotlin.require' call
            var tmp1_require = endIndex <= this.y24_1.length;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp1_require) {
              var tmp$ret$3;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$3 = 'endIndex > length(' + this.y24_1.length + ')';
              var message_0 = tmp$ret$3;
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            }
            var subLen = endIndex - 0 | 0;
            // Inline function 'kotlin.require' call
            var tmp2_require = subLen >= 0;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp2_require) {
              var tmp$ret$4;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$4 = 'endIndex < beginIndex';
              var message_1 = tmp$ret$4;
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
            if (endIndex === this.y24_1.length) {
              tmp$ret$5 = this;
              break $l$block_0;
            }
            tmp$ret$5 = new ByteString(copyOfRange(this.y24_1, 0, endIndex));
          }
          tmp = '[size=' + tmp_0 + ' hex=' + tmp$ret$5.i27() + '\u2026]';
        }
        tmp$ret$1 = tmp;
        break $l$block_1;
      }
      var text = this.g28();
      var tmp$ret$7;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = text;
      tmp$ret$7 = tmp$ret$6.substring(0, i);
      var tmp_1 = tmp$ret$7;
      var tmp_2 = replace$default(tmp_1, '\\', '\\\\', false, 4, null);
      var tmp_3 = replace$default(tmp_2, '\n', '\\n', false, 4, null);
      var safeText = replace$default(tmp_3, '\r', '\\r', false, 4, null);
      var tmp_4;
      if (i < text.length) {
        tmp_4 = '[size=' + this.y24_1.length + ' text=' + safeText + '\u2026]';
      } else {
        tmp_4 = '[text=' + safeText + ']';
      }
      tmp$ret$1 = tmp_4;
    }
    return tmp$ret$1;
  };
  function RealBufferedSink(sink) {
    this.n28_1 = sink;
    this.o28_1 = false;
    this.p28_1 = new Buffer();
  }
  RealBufferedSink.prototype.b25 = function (source, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p28_1.b25(source, byteCount);
    this.q28();
    return Unit_getInstance();
  };
  RealBufferedSink.prototype.m27 = function (byteString) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonWrite' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p28_1.m27(byteString);
    tmp$ret$1 = this.q28();
    return tmp$ret$1;
  };
  RealBufferedSink.prototype.p27 = function (string) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p28_1.p27(string);
    tmp$ret$1 = this.q28();
    return tmp$ret$1;
  };
  RealBufferedSink.prototype.q27 = function (string, beginIndex, endIndex) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p28_1.q27(string, beginIndex, endIndex);
    tmp$ret$1 = this.q28();
    return tmp$ret$1;
  };
  RealBufferedSink.prototype.r27 = function (b) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonWriteByte' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteByte.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p28_1.r27(b);
    tmp$ret$1 = this.q28();
    return tmp$ret$1;
  };
  RealBufferedSink.prototype.q28 = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonEmitCompleteSegments' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonEmitCompleteSegments.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var byteCount = this.p28_1.z26();
    if (byteCount.v(new Long(0, 0)) > 0) {
      this.n28_1.b25(this.p28_1, byteCount);
    }
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  RealBufferedSink.prototype.da = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.o28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonFlush.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (this.p28_1.d25_1.v(new Long(0, 0)) > 0) {
      this.n28_1.b25(this.p28_1, this.p28_1.d25_1);
    }
    return this.n28_1.da();
  };
  RealBufferedSink.prototype.v15 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonClose' call
      if (this.o28_1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var thrown = null;
      try {
        if (this.p28_1.d25_1.v(new Long(0, 0)) > 0) {
          this.n28_1.b25(this.p28_1, this.p28_1.d25_1);
        }
      } catch ($p) {
        if ($p instanceof Error) {
          thrown = $p;
        } else {
          throw $p;
        }
      }
      try {
        this.n28_1.v15();
      } catch ($p) {
        if ($p instanceof Error) {
          if (thrown == null)
            thrown = $p;
        } else {
          throw $p;
        }
      }
      this.o28_1 = true;
      if (!(thrown == null))
        throw thrown;
    }
    return tmp$ret$0;
  };
  RealBufferedSink.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonToString' call
    tmp$ret$0 = 'buffer(' + this.n28_1 + ')';
    return tmp$ret$0;
  };
  function RealBufferedSource(source) {
    this.r28_1 = source;
    this.s28_1 = false;
    this.t28_1 = new Buffer();
  }
  RealBufferedSource.prototype.v26 = function () {
    return this.t28_1;
  };
  RealBufferedSource.prototype.t27 = function (sink, byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$1 = 'closed';
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (this.t28_1.d25_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        var read = this.r28_1.t27(this.t28_1, toLong(8192));
        if (read.equals(new Long(-1, -1))) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block;
        }
      }
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.t28_1.d25_1;
      tmp$ret$3 = byteCount.v(tmp2_minOf) <= 0 ? byteCount : tmp2_minOf;
      var toRead = tmp$ret$3;
      tmp$ret$2 = this.t28_1.t27(sink, toRead);
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.w26 = function (byteCount) {
    var tmp;
    if (!this.x26(byteCount)) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    return tmp;
  };
  RealBufferedSource.prototype.x26 = function (byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRequest' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        tmp$ret$1 = 'closed';
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      while (this.t28_1.d25_1.v(byteCount) < 0) {
        Companion_getInstance_1();
        if (this.r28_1.t27(this.t28_1, toLong(8192)).equals(new Long(-1, -1))) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.j27 = function (options) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonSelect' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonSelect.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      while (true) {
        var index = selectPrefix(this.t28_1, options, true);
        var tmp0_subject = index;
        switch (tmp0_subject) {
          case -1:
            tmp$ret$1 = -1;
            break $l$block_1;
          case -2:
            Companion_getInstance_1();
            if (this.r28_1.t27(this.t28_1, toLong(8192)).equals(new Long(-1, -1))) {
              tmp$ret$1 = -1;
              break $l$block_1;
            }

            break;
          default:
            var selectedSize = options.l25_1[index].c();
            this.t28_1.e25(toLong(selectedSize));
            tmp$ret$1 = index;
            break $l$block_1;
        }
      }
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.f27 = function () {
    Companion_getInstance();
    return this.g27(new Long(-1, 2147483647));
  };
  RealBufferedSource.prototype.g27 = function (limit) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      var tmp0_require = limit.v(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        tmp$ret$0 = 'limit < 0: ' + toString(limit);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp;
      Companion_getInstance();
      if (limit.equals(new Long(-1, 2147483647))) {
        Companion_getInstance();
        tmp = new Long(-1, 2147483647);
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = limit.r5(new Long(1, 0));
        tmp = tmp$ret$1;
      }
      var scanLength = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 10;
      var newline = this.h27(toByte(tmp$ret$2), new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$3 = readUtf8Line(this.t28_1, newline);
        break $l$block_0;
      }
      var tmp_0;
      var tmp_1;
      var tmp_2;
      var tmp_3;
      Companion_getInstance();
      if (scanLength.v(new Long(-1, 2147483647)) < 0) {
        tmp_3 = this.x26(scanLength);
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        var tmp$ret$4;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$4 = scanLength.s5(new Long(1, 0));
        var tmp_4 = this.t28_1.g26(tmp$ret$4);
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = 13;
        tmp_2 = tmp_4 === toByte(tmp$ret$5);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        var tmp$ret$6;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$6 = scanLength.r5(new Long(1, 0));
        tmp_1 = this.x26(tmp$ret$6);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_5 = this.t28_1.g26(scanLength);
        var tmp$ret$7;
        // Inline function 'kotlin.code' call
        tmp$ret$7 = 10;
        tmp_0 = tmp_5 === toByte(tmp$ret$7);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = readUtf8Line(this.t28_1, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_6 = new Long(0, 0);
      var tmp$ret$9;
      // Inline function 'okio.minOf' call
      var tmp1_minOf = this.t28_1.d25_1;
      var tmp$ret$8;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = new Long(32, 0);
      tmp$ret$8 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
      tmp$ret$9 = tmp$ret$8;
      this.t28_1.y26(data, tmp_6, tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.t28_1.d25_1;
      tmp$ret$10 = tmp2_minOf.v(limit) <= 0 ? tmp2_minOf : limit;
      throw new EOFException('\\n not found: limit=' + toString(tmp$ret$10) + ' content=' + data.a27().i27() + '\u2026');
    }
    return tmp$ret$3;
  };
  RealBufferedSource.prototype.e25 = function (byteCount) {
    var byteCount_0 = byteCount;
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.s28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSkip.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (byteCount_0.v(new Long(0, 0)) > 0) {
      var tmp;
      if (this.t28_1.d25_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        tmp = this.r28_1.t27(this.t28_1, toLong(8192)).equals(new Long(-1, -1));
      } else {
        tmp = false;
      }
      if (tmp) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = byteCount_0;
      var tmp2_minOf = this.t28_1.d25_1;
      tmp$ret$1 = tmp1_minOf.v(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
      var toSkip = tmp$ret$1;
      this.t28_1.e25(toSkip);
      byteCount_0 = byteCount_0.s5(toSkip);
    }
    return Unit_getInstance();
  };
  RealBufferedSource.prototype.h27 = function (b, fromIndex, toIndex) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = (new Long(0, 0)).v(fromIndex_0) <= 0 ? fromIndex_0.v(toIndex) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$1 = 'fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex);
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      while (fromIndex_0.v(toIndex) < 0) {
        var result = this.t28_1.h27(b, fromIndex_0, toIndex);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$2 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.t28_1.d25_1;
        var tmp;
        if (lastBufferSize.v(toIndex) >= 0) {
          tmp = true;
        } else {
          Companion_getInstance_1();
          tmp = this.r28_1.t27(this.t28_1, toLong(8192)).equals(new Long(-1, -1));
        }
        if (tmp) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_0;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp2_maxOf = fromIndex_0;
        tmp$ret$3 = tmp2_maxOf.v(lastBufferSize) >= 0 ? tmp2_maxOf : lastBufferSize;
        fromIndex_0 = tmp$ret$3;
      }
      tmp$ret$2 = new Long(-1, -1);
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.x27 = function (targetBytes) {
    return this.y27(targetBytes, new Long(0, 0));
  };
  RealBufferedSource.prototype.y27 = function (targetBytes, fromIndex) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOfElement' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      while (true) {
        var result = this.t28_1.y27(targetBytes, fromIndex_0);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$1 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.t28_1.d25_1;
        Companion_getInstance_1();
        if (this.r28_1.t27(this.t28_1, toLong(8192)).equals(new Long(-1, -1))) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp1_maxOf = fromIndex_0;
        tmp$ret$2 = tmp1_maxOf.v(lastBufferSize) >= 0 ? tmp1_maxOf : lastBufferSize;
        fromIndex_0 = tmp$ret$2;
      }
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.z27 = function (offset, bytes) {
    return this.a28(offset, bytes, 0, bytes.c());
  };
  RealBufferedSource.prototype.a28 = function (offset, bytes, bytesOffset, byteCount) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonRangeEquals' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.s28_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (((offset.v(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : (bytes.c() - bytesOffset | 0) < byteCount) {
        tmp$ret$1 = false;
        break $l$block_1;
      }
      var inductionVariable = 0;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$2 = offset.r5(toLong(i));
          var bufferOffset = tmp$ret$2;
          var tmp$ret$3;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$3 = bufferOffset.r5(new Long(1, 0));
          if (!this.x26(tmp$ret$3)) {
            tmp$ret$1 = false;
            break $l$block_1;
          }
          if (!(this.t28_1.g26(bufferOffset) === bytes.f(bytesOffset + i | 0))) {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
         while (inductionVariable < byteCount);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.v15 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonClose' call
      if (this.s28_1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      this.s28_1 = true;
      this.r28_1.v15();
      this.t28_1.y6();
    }
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonToString' call
    tmp$ret$0 = 'buffer(' + this.r28_1 + ')';
    return tmp$ret$0;
  };
  function SegmentPool() {
    SegmentPool_instance = this;
    this.a26_1 = 0;
    this.b26_1 = 0;
  }
  SegmentPool.prototype.c26 = function () {
    return Segment_init_$Create$();
  };
  SegmentPool.prototype.f26 = function (segment) {
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    if (SegmentPool_instance == null)
      new SegmentPool();
    return SegmentPool_instance;
  }
  function toByteString($this) {
    return new ByteString($this.j28());
  }
  function SegmentedByteString(segments, directory) {
    ByteString.call(this, Companion_getInstance_2().c28_1.y24_1);
    this.m26_1 = segments;
    this.n26_1 = directory;
  }
  SegmentedByteString.prototype.i27 = function () {
    return toByteString(this).i27();
  };
  SegmentedByteString.prototype.h28 = function (pos) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonInternalGet' call
    checkOffsetAndCount(toLong(this.n26_1[this.m26_1.length - 1 | 0]), toLong(pos), new Long(1, 0));
    var segment_0 = segment(this, pos);
    var segmentOffset = segment_0 === 0 ? 0 : this.n26_1[segment_0 - 1 | 0];
    var segmentPos = this.n26_1[segment_0 + this.m26_1.length | 0];
    tmp$ret$0 = this.m26_1[segment_0][(pos - segmentOffset | 0) + segmentPos | 0];
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.i28 = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetSize' call
    tmp$ret$0 = this.n26_1[this.m26_1.length - 1 | 0];
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.j28 = function () {
    var tmp$ret$5;
    // Inline function 'okio.internal.commonToByteArray' call
    var result = new Int8Array(this.c());
    var resultPos = 0;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = this.m26_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = this.n26_1[segmentCount + s | 0];
      var nextSegmentOffset = this.n26_1[s];
      // Inline function 'okio.internal.commonToByteArray.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.m26_1[s];
      var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = resultPos;
      var tmp1_copyInto = segmentPos + tmp1__anonymous__uwfjfc | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, tmp0_copyInto, segmentPos, tmp1_copyInto);
      tmp$ret$4 = result;
      resultPos = resultPos + tmp1__anonymous__uwfjfc | 0;
      pos = nextSegmentOffset;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  SegmentedByteString.prototype.n27 = function (buffer, offset, byteCount) {
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(this, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : this.n26_1[s - 1 | 0];
      var segmentSize = this.n26_1[s] - segmentOffset | 0;
      var segmentPos = this.n26_1[this.m26_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.m26_1[s];
      var segment_0 = Segment_init_$Create$_0(tmp2__anonymous__z9zvc9, offset_0, offset_0 + byteCount_0 | 0, true, false);
      if (buffer.c25_1 == null) {
        segment_0.t25_1 = segment_0;
        segment_0.s25_1 = segment_0.t25_1;
        buffer.c25_1 = segment_0.s25_1;
      } else {
        ensureNotNull(ensureNotNull(buffer.c25_1).t25_1).y25(segment_0);
      }
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    var tmp0_this = buffer;
    var tmp = tmp0_this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = tmp0_this.d25_1;
    tmp$ret$1 = tmp3_plus.r5(toLong(byteCount));
    tmp.d25_1 = tmp$ret$1;
    return Unit_getInstance();
  };
  SegmentedByteString.prototype.k28 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 ? true : offset > (this.c() - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var tmp1_forEachSegment = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < tmp1_forEachSegment) {
        var segmentOffset = s === 0 ? 0 : this.n26_1[s - 1 | 0];
        var segmentSize = this.n26_1[s] - segmentOffset | 0;
        var segmentPos = this.n26_1[this.m26_1.length + s | 0];
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = segmentOffset + segmentSize | 0;
        tmp$ret$1 = Math.min(tmp1_forEachSegment, tmp0_minOf);
        var byteCount_0 = tmp$ret$1 - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = this.m26_1[s];
        if (!other.l28(otherOffset_0, tmp2__anonymous__z9zvc9, offset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        var tmp0 = s;
        s = tmp0 + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.l28 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (((offset < 0 ? true : offset > (this.c() - byteCount | 0)) ? true : otherOffset < 0) ? true : otherOffset > (other.length - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var tmp1_forEachSegment = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < tmp1_forEachSegment) {
        var segmentOffset = s === 0 ? 0 : this.n26_1[s - 1 | 0];
        var segmentSize = this.n26_1[s] - segmentOffset | 0;
        var segmentPos = this.n26_1[this.m26_1.length + s | 0];
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = segmentOffset + segmentSize | 0;
        tmp$ret$1 = Math.min(tmp1_forEachSegment, tmp0_minOf);
        var byteCount_0 = tmp$ret$1 - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = this.m26_1[s];
        if (!arrayRangeEquals(tmp2__anonymous__z9zvc9, offset_0, other, otherOffset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        var tmp0 = s;
        s = tmp0 + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.w27 = function () {
    return this.j28();
  };
  SegmentedByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.c() === this.c() ? this.k28(0, other, 0, this.c()) : false;
      } else {
        tmp = false;
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.z24_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      result = 1;
      // Inline function 'okio.internal.forEachSegment' call
      var segmentCount = this.m26_1.length;
      var s = 0;
      var pos = 0;
      while (s < segmentCount) {
        var segmentPos = this.n26_1[segmentCount + s | 0];
        var nextSegmentOffset = this.n26_1[s];
        // Inline function 'okio.internal.commonHashCode.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.m26_1[s];
        var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
        var i = segmentPos;
        var limit = segmentPos + tmp1__anonymous__uwfjfc | 0;
        while (i < limit) {
          result = imul(31, result) + tmp0__anonymous__q1qw7t[i] | 0;
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
        pos = nextSegmentOffset;
        var tmp0_0 = s;
        s = tmp0_0 + 1 | 0;
      }
      this.f28(result);
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.toString = function () {
    return toByteString(this).toString();
  };
  //region block: init
  REPLACEMENT_CODE_POINT = 65533;
  REPLACEMENT_BYTE = 63;
  MASK_2BYTES = 3968;
  MASK_3BYTES = -123008;
  MASK_4BYTES = 3678080;
  HIGH_SURROGATE_HEADER = 55232;
  LOG_SURROGATE_HEADER = 56320;
  REPLACEMENT_CHARACTER = _Char___init__impl__6a9atx(65533);
  SEGMENTING_THRESHOLD = 4096;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IOException_init_$Create$;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = BufferedSource;
  _.$_$.e = Buffer;
  _.$_$.f = EOFException;
  _.$_$.g = blackholeSink;
  _.$_$.h = buffer;
  _.$_$.i = buffer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=okio-parent-okio-js-ir.js.map
