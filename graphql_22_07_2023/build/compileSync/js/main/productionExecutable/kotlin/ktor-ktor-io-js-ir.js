(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    root['ktor-ktor-io-js-ir'] = factory(typeof this['ktor-ktor-io-js-ir'] === 'undefined' ? {} : this['ktor-ktor-io-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var toString = kotlin_kotlin.$_$.s7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var toLong = kotlin_kotlin.$_$.q7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var CoroutineImpl = kotlin_kotlin.$_$.i6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var classMeta = kotlin_kotlin.$_$.t6;
  var setMetadataFor = kotlin_kotlin.$_$.o7;
  var Long = kotlin_kotlin.$_$.k9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.o9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var CancellationException = kotlin_kotlin.$_$.t5;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.n6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var interfaceMeta = kotlin_kotlin.$_$.c7;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var isInterface = kotlin_kotlin.$_$.g7;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var equals = kotlin_kotlin.$_$.v6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var charSequenceLength = kotlin_kotlin.$_$.r6;
  var objectMeta = kotlin_kotlin.$_$.n7;
  var Exception = kotlin_kotlin.$_$.g9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.k1;
  var numberToChar = kotlin_kotlin.$_$.k7;
  var coerceAtLeast = kotlin_kotlin.$_$.u7;
  var coerceAtMost = kotlin_kotlin.$_$.w7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var toByte = kotlin_kotlin.$_$.p7;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var toShort = kotlin_kotlin.$_$.r7;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q2;
  var Companion_getInstance = kotlin_kotlin.$_$.z2;
  var charSequenceGet = kotlin_kotlin.$_$.q6;
  var isLowSurrogate = kotlin_kotlin.$_$.m8;
  var isHighSurrogate = kotlin_kotlin.$_$.l8;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var coerceAtMost_0 = kotlin_kotlin.$_$.v7;
  var hashCode = kotlin_kotlin.$_$.b7;
  var lazy = kotlin_kotlin.$_$.z9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x2;
  var KProperty1 = kotlin_kotlin.$_$.d8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var replace$default = kotlin_kotlin.$_$.o;
  var getStringHashCode = kotlin_kotlin.$_$.a7;
  var extendThrowable = kotlin_kotlin.$_$.w6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.s6;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var isCharSequence = kotlin_kotlin.$_$.f7;
  var trim = kotlin_kotlin.$_$.a9;
  var decodeToString = kotlin_kotlin.$_$.g8;
  var setOf = kotlin_kotlin.$_$.f5;
  var fillArrayVal = kotlin_kotlin.$_$.x6;
  var isObject = kotlin_kotlin.$_$.i7;
  //endregion
  //region block: pre-declaration
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function readRemaining$default(limit, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_0();
      limit = new Long(-1, 2147483647);
    }
    return $handler == null ? this.s1e(limit, $cont) : $handler(limit, $cont);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, undefined, undefined, undefined, undefined, [3, 1, 2, 0, 5]);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, undefined, [ByteReadChannel_1], undefined, undefined, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(CloseElement, 'CloseElement', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, undefined, [CoroutineScope, WriterScope], undefined, undefined, []);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Buffer, 'Buffer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Closeable, 'Closeable', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function close() {
    this.nh();
  }
  setMetadataFor(ObjectPool, 'ObjectPool', interfaceMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool, undefined, undefined, undefined, []);
  setMetadataFor(Output, 'Output', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Input, 'Input', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$Pool$1, undefined, classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, undefined, classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, undefined, classMeta, NoPoolImpl, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, undefined, classMeta, NoPoolImpl, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer, undefined, undefined, undefined, []);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor($sleepCOROUTINE$52, '$sleepCOROUTINE$52', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($trySuspendCOROUTINE$53, '$trySuspendCOROUTINE$53', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$54, '$copyToSequentialImplCOROUTINE$54', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($copyToTailCOROUTINE$55, '$copyToTailCOROUTINE$55', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayPool$1, undefined, classMeta, DefaultPool, undefined, undefined, undefined, []);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, undefined, undefined, undefined, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Memory, 'Memory', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Charset, 'Charset', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Charsets, 'Charsets', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset, undefined, undefined, undefined, []);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder, undefined, undefined, undefined, []);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder, undefined, undefined, undefined, []);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IOException, 'IOException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(toKtor$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function ByteChannelSequentialBase_init_$Init$(initial, autoFlush, pool, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      pool = Companion_getInstance_4().p17_1;
    ByteChannelSequentialBase.call($this, initial, autoFlush, pool);
    return $this;
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.a18_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i18_1) == null);
  }
  function flushImpl($this) {
    if ($this.b18_1.il()) {
      $this.f18_1.k18();
      return false;
    }
    flushWrittenBytes($this);
    $this.f18_1.k18();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = $this.g18_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.b18_1.c();
    var buffer = ensureNotNull($this.b18_1.b19());
    $this.h18_1.c19(buffer);
    tmp$ret$0 = $this.y17_1.atomicfu$addAndGet(size);
    tmp$ret$1 = tmp$ret$0;
  }
  function ensureNotClosed($this) {
    if ($this.e19()) {
      var tmp0_elvis_lhs = $this.d19();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.kk();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $cont) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$0 = "Can't read negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp1_minusAssign = $this.z17_1;
    tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    $this.w17_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp2_minusAssign = $this.y17_1;
    tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    var tmp3_check = $this.z17_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.r19() + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = $this.r19() >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$2 = 'Readable bytes count is negative: ' + $this.r19() + ', ' + count + ' in ' + $this;
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$0 = "Can't write negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    var tmp1_plusAssign = $this.z17_1;
    tmp1_plusAssign.atomicfu$getAndAdd(count);
    $this.x17_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    var tmp2_check = $this.z17_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.z17_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.s19() < $count ? !this$0.e19() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.r19() < $count ? !this$0.t19() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1a_1 = _this__u8e3s4;
    this.d1a_1 = count;
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!(this.c1a_1.s19() < this.d1a_1 ? !this.c1a_1.e19() : false)) {
              this.cd_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.c1a_1)) {
              this.cd_1 = 2;
              suspendResult = this.c1a_1.f18_1.e1a(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.c1a_1, this.d1a_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.cd_1 = 1;
            continue $sm;
          case 4:
            throw this.fd_1;
          case 5:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1a_1 = _this__u8e3s4;
    this.o1a_1 = count;
  }
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!(this.n1a_1.r19() < this.o1a_1 ? !this.n1a_1.t19() : false)) {
              this.cd_1 = 4;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.n1a_1.f18_1.e1a(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.n1a_1, this.o1a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.cd_1 = 1;
            continue $sm;
          case 3:
            throw this.fd_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1a_1 = _this__u8e3s4;
    this.y1a_1 = src;
  }
  $writeFullyCOROUTINE$9.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.x1a_1.z1a(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.y1a_1.c1b_1 - this.y1a_1.b1b_1 | 0;
            writeFully$default(this.x1a_1.b18_1, this.y1a_1, 0, 2, null);
            this.x1a_1.g1b(count);
            return Unit_getInstance();
          case 2:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 2) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1b_1 = _this__u8e3s4;
    this.q1b_1 = src;
    this.r1b_1 = offset;
    this.s1b_1 = length;
  }
  $writeFullyCOROUTINE$10.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.t1b_1 = this.r1b_1;
            this.u1b_1 = this.r1b_1 + this.s1b_1 | 0;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!(this.t1b_1 < this.u1b_1)) {
              this.cd_1 = 3;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.p1b_1.z1a(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.p1b_1.s19();
            var tmp1_min = this.u1b_1 - this.t1b_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.p1b_1.b18_1, this.q1b_1, this.t1b_1, bytesCount);
            this.t1b_1 = this.t1b_1 + bytesCount | 0;
            this.p1b_1.g1b(bytesCount);
            this.cd_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1c_1 = _this__u8e3s4;
    this.e1c_1 = limit;
  }
  $readRemainingCOROUTINE$26.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            ensureNotFailed(this.d1c_1);
            var tmp_0 = this;
            tmp_0.f1c_1 = BytePacketBuilder_init_$Create$(null, 1, null);
            var tmp_1 = this;
            var tmp0_minOf = this.d1c_1.c18_1.q1c();
            tmp_1.g1c_1 = this.e1c_1.v(tmp0_minOf) <= 0 ? this.e1c_1 : tmp0_minOf;
            this.f1c_1.r1c(this.d1c_1.c18_1, this.g1c_1);
            this.d1c_1.s1c(this.g1c_1.yc());
            var tmp_2 = this;
            var tmp1_minus = this.f1c_1.c();
            tmp_2.h1c_1 = this.e1c_1.s5(toLong(tmp1_minus));
            if (this.h1c_1.equals(new Long(0, 0)) ? true : this.d1c_1.t19()) {
              var tmp_3 = this;
              ensureNotFailed_0(this.d1c_1, this.f1c_1);
              tmp_3.i1c_1 = this.f1c_1.t1c();
              this.cd_1 = 2;
              continue $sm;
            } else {
              this.cd_1 = 1;
              suspendResult = readRemainingSuspend(this.d1c_1, this.f1c_1, this.e1c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.i1c_1 = suspendResult;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            return this.i1c_1;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n19_1 = _this__u8e3s4;
    this.o19_1 = builder;
    this.p19_1 = limit;
  }
  $readRemainingSuspendCOROUTINE$27.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!(toLong(this.o19_1.c()).v(this.p19_1) < 0)) {
              this.cd_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp0_minus = this.o19_1.c();
            var tmp1_minOf = this.p19_1.s5(toLong(tmp0_minus));
            var tmp2_minOf = this.n19_1.c18_1.q1c();
            tmp_0.q19_1 = tmp1_minOf.v(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
            this.o19_1.r1c(this.n19_1.c18_1, this.q19_1);
            this.n19_1.s1c(this.q19_1.yc());
            ensureNotFailed_0(this.n19_1, this.o19_1);
            if (this.n19_1.t19() ? true : this.o19_1.c() === this.p19_1.yc()) {
              this.cd_1 = 4;
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.cd_1 = 3;
            suspendResult = this.n19_1.u1c(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.cd_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.n19_1, this.o19_1);
            return this.o19_1.t1c();
          case 5:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 5) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1d_1 = _this__u8e3s4;
    this.e1d_1 = dst;
  }
  $readAvailableCOROUTINE$30.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp0_safe_receiver = this.d1d_1.d19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.d1d_1.e19() ? this.d1d_1.r19() === 0 : false)
              return -1;
            if ((this.e1d_1.e1b_1 - this.e1d_1.c1b_1 | 0) === 0)
              return 0;
            if (this.d1d_1.r19() === 0) {
              this.cd_1 = 1;
              suspendResult = this.d1d_1.u1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            if (!this.d1d_1.c18_1.g1d()) {
              this.d1d_1.f1d();
            }

            var tmp0_minOf = toLong(this.e1d_1.e1b_1 - this.e1d_1.c1b_1 | 0);
            var tmp1_minOf = this.d1d_1.c18_1.q1c();
            var size = (tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).yc();
            readFully_2(this.d1d_1.c18_1, this.e1d_1, size);
            this.d1d_1.s1c(size);
            return size;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1d_1 = _this__u8e3s4;
    this.q1d_1 = dst;
    this.r1d_1 = offset;
    this.s1d_1 = length;
  }
  $readAvailableCOROUTINE$33.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp0_safe_receiver = this.p1d_1.d19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.p1d_1.e19() ? this.p1d_1.r19() === 0 : false)
              return -1;
            if (this.s1d_1 === 0)
              return 0;
            if (this.p1d_1.r19() === 0) {
              this.cd_1 = 1;
              suspendResult = this.p1d_1.u1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            if (!this.p1d_1.c18_1.g1d()) {
              this.p1d_1.f1d();
            }

            var tmp0_minOf = toLong(this.s1d_1);
            var tmp1_minOf = this.p1d_1.c18_1.q1c();
            var size = (tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).yc();
            readFully_1(this.p1d_1.c18_1, this.q1d_1, this.r1d_1, size);
            this.p1d_1.s1c(size);
            return size;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1e_1 = _this__u8e3s4;
  }
  $awaitInternalAtLeast1COROUTINE$38.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp0__get_isNotEmpty__a29w5p = this.b1e_1.c18_1;
            if (!tmp0__get_isNotEmpty__a29w5p.d1e()) {
              var tmp_0 = this;
              tmp_0.c1e_1 = true;
              this.cd_1 = 3;
              continue $sm;
            } else {
              this.cd_1 = 1;
              suspendResult = this.b1e_1.u1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.c1e_1 = suspendResult;
            this.cd_1 = 3;
            continue $sm;
          case 2:
            throw this.fd_1;
          case 3:
            return this.c1e_1;
        }
      } catch ($p) {
        if (this.dd_1 === 2) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1e_1 = _this__u8e3s4;
    this.n1e_1 = atLeast;
  }
  $awaitSuspendCOROUTINE$39.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp0_require = this.n1e_1 >= 0;
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.cd_1 = 1;
            suspendResult = this.m1e_1.o1e(this.n1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m1e_1.f1d();
            var tmp0_safe_receiver = this.m1e_1.d19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.m1e_1.t19() ? this.m1e_1.r19() >= this.n1e_1 : false;
          case 2:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 2) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    this.u17_1 = autoFlush;
    this.v17_1 = atomic$ref$1(Companion_getInstance_4().r17_1);
    this.w17_1 = atomic$long$1(new Long(0, 0));
    this.x17_1 = atomic$long$1(new Long(0, 0));
    this.y17_1 = atomic$int$1(0);
    this.z17_1 = atomic$int$1(0);
    this.a18_1 = atomic$ref$1(null);
    this.b18_1 = new BytePacketBuilder(pool);
    this.c18_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.d18_1 = atomic$int$1(0);
    this.e18_1 = atomic$ref$1(Companion_getInstance_4().r17_1);
    this.f18_1 = new AwaitingSlot();
    this.g18_1 = new Object();
    var tmp = this;
    tmp.h18_1 = BytePacketBuilder_init_$Create$(null, 1, null);
    var count = remainingAll(initial).yc();
    this.g1b(count);
    this.y17_1.atomicfu$addAndGet(count);
  }
  ByteChannelSequentialBase.prototype.p1e = function () {
    return this.u17_1;
  };
  ByteChannelSequentialBase.prototype.e19 = function () {
    return !(this.a18_1.kotlinx$atomicfu$value == null);
  };
  ByteChannelSequentialBase.prototype.r19 = function () {
    return this.y17_1.kotlinx$atomicfu$value;
  };
  ByteChannelSequentialBase.prototype.s19 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.z17_1.kotlinx$atomicfu$value | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.t19 = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.e19() ? this.z17_1.kotlinx$atomicfu$value === 0 : false;
  };
  ByteChannelSequentialBase.prototype.d19 = function () {
    var tmp0_safe_receiver = this.a18_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i18_1;
  };
  ByteChannelSequentialBase.prototype.z1a = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.o1e = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.da = function () {
    flushImpl(this);
  };
  ByteChannelSequentialBase.prototype.f1d = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.g18_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    tmp$ret$0 = unsafeAppend(this.c18_1, this.h18_1);
    tmp$ret$1 = tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.q1e = function (src, $cont) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.r1e = function (src, offset, length, $cont) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.s1c = function (count) {
    addBytesRead(this, count);
    this.f18_1.k18();
  };
  ByteChannelSequentialBase.prototype.s1e = function (limit, $cont) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.u1e = function (dst, $cont) {
    return this.v1e(dst instanceof Buffer ? dst : THROW_CCE(), $cont);
  };
  ByteChannelSequentialBase.prototype.v1e = function (dst, $cont) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.w1e = function (dst, offset, length, $cont) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.x1e = function ($cont) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.u1c = function (atLeast, $cont) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ByteChannelSequentialBase.prototype.mi = function (cause) {
    if (!(this.d19() == null) ? true : this.e19()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.ls(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  ByteChannelSequentialBase.prototype.ls = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.a18_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.c18_1.kk();
      this.b18_1.kk();
      this.h18_1.kk();
    } else {
      this.da();
    }
    this.f18_1.y1e(cause);
    return true;
  };
  ByteChannelSequentialBase.prototype.z1e = function (dst, limit) {
    var size = this.c18_1.q1c();
    var tmp;
    if (size.v(limit) <= 0) {
      dst.b18_1.a1f(this.c18_1);
      dst.g1b(size.yc());
      this.s1c(size.yc());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  ByteChannelSequentialBase.prototype.g1b = function (count) {
    addBytesWritten(this, count);
    if (this.e19()) {
      this.b18_1.kk();
      ensureNotClosed(this);
    }
    if (this.p1e() ? true : this.s19() === 0) {
      this.da();
    }
  };
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.mi(null);
  }
  function readAvailable(_this__u8e3s4, dst, $cont) {
    return _this__u8e3s4.w1e(dst, 0, dst.length, $cont);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.ls(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $cont) {
    return _this__u8e3s4.r1e(src, 0, src.length, $cont);
  }
  function get_CLOSED_SUCCESS() {
    init_properties_CloseElement_kt_zcr6ie();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.i18_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function init_properties_CloseElement_kt_zcr6ie() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function writer$default(_this__u8e3s4, coroutineContext, autoFlush, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coroutineContext = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      autoFlush = false;
    return writer(_this__u8e3s4, coroutineContext, autoFlush, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.d1f_1 = delegate;
    this.e1f_1 = channel;
  }
  ChannelJob.prototype.c1f = function () {
    return this.e1f_1;
  };
  ChannelJob.prototype.ke = function () {
    return this.d1f_1.ke();
  };
  ChannelJob.prototype.q = function () {
    return this.d1f_1.q();
  };
  ChannelJob.prototype.wf = function (child) {
    return this.d1f_1.wf(child);
  };
  ChannelJob.prototype.pf = function (cause) {
    this.d1f_1.pf(cause);
  };
  ChannelJob.prototype.p3 = function (initial, operation) {
    return this.d1f_1.p3(initial, operation);
  };
  ChannelJob.prototype.j3 = function (key) {
    return this.d1f_1.j3(key);
  };
  ChannelJob.prototype.hf = function () {
    return this.d1f_1.hf();
  };
  ChannelJob.prototype.lf = function (onCancelling, invokeImmediately, handler) {
    return this.d1f_1.lf(onCancelling, invokeImmediately, handler);
  };
  ChannelJob.prototype.kf = function (handler) {
    return this.d1f_1.kf(handler);
  };
  ChannelJob.prototype.o3 = function (key) {
    return this.d1f_1.o3(key);
  };
  ChannelJob.prototype.q3 = function (context) {
    return this.d1f_1.q3(context);
  };
  ChannelJob.prototype.ff = function () {
    return this.d1f_1.ff();
  };
  ChannelJob.prototype.toString = function () {
    return 'ChannelJob[' + this.d1f_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.je().j3(Key_getInstance());
    var job = launch$default(_this__u8e3s4, context, null, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null), 2, null);
    job.kf(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.f1f_1 = channel;
    this.g1f_1 = delegate;
  }
  ChannelScope.prototype.c1f = function () {
    return this.f1f_1;
  };
  ChannelScope.prototype.je = function () {
    return this.g1f_1.je();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.p1f_1 = $attachJob;
    this.q1f_1 = $channel;
    this.r1f_1 = $block;
    this.s1f_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchChannel$slambda.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  launchChannel$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchChannel$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            if (this.p1f_1) {
              this.q1f_1.b1f(ensureNotNull(this.t1f_1.je().j3(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.t1f_1, this.q1f_1);
            tmp_0.u1f_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.r1f_1(this.u1f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dd_1 = 3;
            this.cd_1 = 4;
            continue $sm;
          case 2:
            this.dd_1 = 3;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof Error) {
              var cause = this.fd_1;
              if (!equals(this.s1f_1, Dispatchers_getInstance().pk_1) ? !(this.s1f_1 == null) : false) {
                throw cause;
              }
              this.q1f_1.mi(cause);
              this.cd_1 = 4;
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 3:
            throw this.fd_1;
          case 4:
            this.dd_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  launchChannel$slambda.prototype.r11 = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.p1f_1, this.q1f_1, this.r1f_1, this.s1f_1, completion);
    i.t1f_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.ls(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function decode(_this__u8e3s4, input, max) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    tmp$ret$0 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    var tmp2_buildString = tmp$ret$0.yc();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp0_apply, max);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  }
  function decode$default(_this__u8e3s4, input, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return decode(_this__u8e3s4, input, max);
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().p17_1.v1f();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.c1b_1 - single.b1b_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = BytePacketBuilder_init_$Create$(null, 1, null);
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.h1g(single.g1g());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.t1c();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            builder.kk();
            throw $p;
          } else {
            throw $p;
          }
        }
      }
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single.i1g(Companion_getInstance_4().p17_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.q1c();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.q1c();
      tmp$ret$0 = tmp0_maxOf.v(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        var before = tmp$ret$0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
        // Inline function 'kotlin.check' call
        var tmp0_check = rc >= 0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$1 = 'Check failed.';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$2 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
        tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.j1g();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        var before = tmp$ret$0;
        if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
          size = 0;
        } else {
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        var tmp = bytesWritten;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
        tmp$ret$2 = size > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.j1g();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.t1c();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.kk();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function encode$default(_this__u8e3s4, input, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(input);
    return encode(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function Companion() {
    Companion_instance = this;
    this.k1g_1 = 8;
  }
  Companion.prototype.l1g = function () {
    return Companion_getInstance_4().r17_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.a1b_1 = memory;
    this.b1b_1 = 0;
    this.c1b_1 = 0;
    this.d1b_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb = this.a1b_1;
    tmp$ret$0 = tmp0__get_size32__ezg0pb.m1g_1.byteLength;
    tmp.e1b_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb_0 = this.a1b_1;
    tmp$ret$1 = tmp0__get_size32__ezg0pb_0.m1g_1.byteLength;
    tmp_0.f1b_1 = tmp$ret$1;
  }
  Buffer.prototype.n1g = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.b1b_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.c1b_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.c1b_1 - this.b1b_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.b1b_1 = newReadPosition;
  };
  Buffer.prototype.o1g = function (count) {
    var newWritePosition = this.c1b_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.e1b_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.e1b_1 - this.c1b_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.c1b_1 = newWritePosition;
  };
  Buffer.prototype.p1g = function (position) {
    var limit = this.e1b_1;
    if (position < this.c1b_1) {
      var tmp = position - this.c1b_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.e1b_1 - this.c1b_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.c1b_1 = position;
        return false;
      }
      var tmp_0 = position - this.c1b_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.e1b_1 - this.c1b_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.c1b_1 = position;
    return true;
  };
  Buffer.prototype.q1g = function (position) {
    if (position < 0 ? true : position > this.c1b_1) {
      var tmp = position - this.b1b_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.c1b_1 - this.b1b_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.b1b_1 === position)) {
      this.b1b_1 = position;
    }
  };
  Buffer.prototype.r1g = function (count) {
    var newReadPosition = this.b1b_1 - count | 0;
    if (newReadPosition < this.d1b_1) {
      rewindFailed(count, this.b1b_1 - this.d1b_1 | 0);
    }
    this.b1b_1 = newReadPosition;
  };
  Buffer.prototype.s1g = function (startGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.b1b_1 >= startGap) {
      this.d1b_1 = startGap;
      return Unit_getInstance();
    }
    if (this.b1b_1 === this.c1b_1) {
      if (startGap > this.e1b_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.c1b_1 = startGap;
      this.b1b_1 = startGap;
      this.d1b_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.t1g = function (endGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = endGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.f1b_1 - endGap | 0;
    if (newLimit >= this.c1b_1) {
      this.e1b_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.d1b_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.b1b_1 === this.c1b_1) {
      this.e1b_1 = newLimit;
      this.b1b_1 = newLimit;
      this.c1b_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.u1g = function () {
    this.d1b_1 = 0;
    this.b1b_1 = 0;
    var capacity = this.f1b_1;
    this.c1b_1 = capacity;
  };
  Buffer.prototype.v1g = function () {
    this.w1g(this.f1b_1 - this.d1b_1 | 0);
  };
  Buffer.prototype.w1g = function (limit) {
    var startGap = this.d1b_1;
    this.b1b_1 = startGap;
    this.c1b_1 = startGap;
    this.e1b_1 = limit;
  };
  Buffer.prototype.x1g = function () {
    this.y1g(0);
    this.z1g();
  };
  Buffer.prototype.z1g = function () {
    this.e1b_1 = this.f1b_1;
  };
  Buffer.prototype.y1g = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newReadPosition >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = newReadPosition <= this.b1b_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.b1b_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.b1b_1 = newReadPosition;
    if (this.d1b_1 > newReadPosition) {
      this.d1b_1 = newReadPosition;
    }
  };
  Buffer.prototype.a1h = function (copy) {
    copy.e1b_1 = this.e1b_1;
    copy.d1b_1 = this.d1b_1;
    copy.b1b_1 = this.b1b_1;
    copy.c1b_1 = this.c1b_1;
  };
  Buffer.prototype.b1h = function () {
    var readPosition = this.b1b_1;
    if (readPosition === this.c1b_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.b1b_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.get' call
    var tmp0_get = this.a1b_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = tmp0_get.m1g_1.getInt8(readPosition);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Buffer.prototype.c1h = function (value) {
    var writePosition = this.c1b_1;
    if (writePosition === this.e1b_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.set' call
    var tmp0_set = this.a1b_1;
    tmp0_set.m1g_1.setInt8(writePosition, value);
    tmp$ret$0 = Unit_getInstance();
    this.c1b_1 = writePosition + 1 | 0;
  };
  Buffer.prototype.d1h = function () {
    this.x1g();
    this.v1g();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = this.c1b_1 - this.b1b_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$1 = this.e1b_1 - this.c1b_1 | 0;
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.d1b_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$2 = this.f1b_1 - this.e1b_1 | 0;
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.f1b_1 + ')';
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.f1b_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.f1b_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.f1b_1 - _this__u8e3s4.e1b_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.c1b_1 - _this__u8e3s4.b1b_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.b1b_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.f1b_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.d1b_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.c1b_1 - _this__u8e3s4.b1b_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.b1b_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.y1g(_this__u8e3s4.b1b_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.c1b_1 - other.b1b_1 | 0;
    var tmp0_minOf = tmp$ret$0;
    tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    var size = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = _this__u8e3s4.e1b_1 - _this__u8e3s4.c1b_1 | 0;
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.a1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.c1b_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.e1b_1;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0__anonymous__q1qw7t = other.a1b_1;
    var tmp1__anonymous__uwfjfc_0 = other.b1b_1;
    var tmp2__anonymous__z9zvc9_0 = other.c1b_1;
    tmp0__anonymous__q1qw7t.e1h(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
    tmp$ret$3 = size;
    var rc = tmp$ret$3;
    other.n1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    var rc_0 = tmp$ret$5;
    _this__u8e3s4.o1g(rc_0);
    tmp$ret$6 = rc_0;
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$0 = _this__u8e3s4.e1b_1 - _this__u8e3s4.c1b_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = _this__u8e3s4.f1b_1 - _this__u8e3s4.e1b_1 | 0;
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.c1b_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.e1b_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.z1g();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.c1b_1 - other.b1b_1 | 0;
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.b1b_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.a1b_1.e1h(_this__u8e3s4.a1b_1, other.b1b_1, size, newReadPosition);
    other.n1g(size);
    _this__u8e3s4.y1g(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    init_properties_BufferFactory_kt_l6j3be();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this.i1h_1 = bufferSize;
    this.j1h_1 = allocator;
  }
  DefaultBufferPool.prototype.k1h = function () {
    return new ChunkBuffer(this.j1h_1.l1h(this.i1h_1), null, this);
  };
  DefaultBufferPool.prototype.m1h = function (instance) {
    this.j1h_1.n1h(instance.a1b_1);
    DefaultPool.prototype.r1h.call(this, instance);
    instance.s1h();
  };
  DefaultBufferPool.prototype.r1h = function (instance) {
    return this.m1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.t1h = function (instance) {
    DefaultPool.prototype.u1h.call(this, instance);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0__get_size__8hfv5c = instance.a1b_1;
    tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.m1g_1.byteLength);
    var tmp1_check = tmp$ret$0.equals(toLong(this.i1h_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0__get_size__8hfv5c_0 = instance.a1b_1;
      tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.m1g_1.byteLength);
      tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.i1h_1 + ', actual: ' + toString(tmp$ret$1);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = !(instance === Companion_getInstance_4().r17_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = !(instance === Companion_getInstance_1().l1g());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$4 = "Empty instance couldn't be recycled";
      var message_1 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = instance.v1h() === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
      var message_2 = tmp$ret$5;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    var tmp5_check = instance.w1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_check) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
      var message_3 = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    var tmp6_check = instance.f1g_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
      var message_4 = tmp$ret$7;
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  DefaultBufferPool.prototype.u1h = function (instance) {
    return this.t1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.x1h = function (instance) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = DefaultPool.prototype.y1h.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.z1h();
    tmp0_apply.d1h();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.y1h = function (instance) {
    return this.x1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function init_properties_BufferFactory_kt_l6j3be() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.c1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.e1b_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.e1h(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = length;
    var rc = tmp$ret$2;
    _this__u8e3s4.o1g(rc);
    tmp$ret$3 = rc;
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      tmp$ret$0 = "length shouldn't be negative: " + length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = src.c1b_1 - src.b1b_1 | 0;
    var tmp1_require = length <= tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$2 = src.c1b_1 - src.b1b_1 | 0;
      tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$4 = _this__u8e3s4.e1b_1 - _this__u8e3s4.c1b_1 | 0;
    var tmp2_require = length <= tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$5 = _this__u8e3s4.e1b_1 - _this__u8e3s4.c1b_1 | 0;
      tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
      var message_1 = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$8;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp3__anonymous__ufb84q = _this__u8e3s4.a1b_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.c1b_1;
    var tmp5__anonymous__kpxxpo = _this__u8e3s4.e1b_1;
    var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.a1b_1.e1h(tmp3__anonymous__ufb84q, src.b1b_1, length, tmp4__anonymous__pkmkx7);
    src.n1g(length);
    tmp$ret$7 = length;
    var rc = tmp$ret$7;
    _this__u8e3s4.o1g(rc);
    tmp$ret$8 = rc;
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.b1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.c1b_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_0(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
    value = Unit_getInstance();
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.n1g(rc);
    tmp$ret$1 = rc;
    tmp$ret$2 = value;
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.e1b_1 - dst.c1b_1 | 0;
    var tmp1_require = length <= tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.b1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.c1b_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp0__anonymous__q1qw7t.e1h(dst.a1b_1, tmp1__anonymous__uwfjfc, length, dst.c1b_1);
    dst.o1g(length);
    value = Unit_getInstance();
    tmp$ret$4 = length;
    var rc = tmp$ret$4;
    _this__u8e3s4.n1g(rc);
    tmp$ret$5 = rc;
    tmp$ret$6 = value;
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.c1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.e1b_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0__anonymous__q1qw7t.m1g_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
    tmp$ret$0 = 2;
    var rc = tmp$ret$0;
    _this__u8e3s4.o1g(rc);
    tmp$ret$1 = rc;
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.b1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.c1b_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    tmp$ret$0 = tmp0__anonymous__q1qw7t.m1g_1.getInt16(tmp1__anonymous__uwfjfc, false);
    tmp$ret$1 = tmp$ret$0;
    value = tmp$ret$1;
    tmp$ret$2 = 2;
    var rc = tmp$ret$2;
    _this__u8e3s4.n1g(rc);
    tmp$ret$3 = rc;
    tmp$ret$4 = value;
    return tmp$ret$4;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.w1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        $this = tmp0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.b1i();
      current.i1g(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.c1b_1 - $this.b1b_1 | 0;
        var rem = toLong(tmp$ret$0).r5(n_0);
        var tmp0_elvis_lhs = $this.w1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = rem;
        $this = tmp0;
        n_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder_init_$Init$(pool, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance_4().p17_1;
    BytePacketBuilder.call($this, pool);
    return $this;
  }
  function BytePacketBuilder_init_$Create$(pool, $mask0, $marker) {
    return BytePacketBuilder_init_$Init$(pool, $mask0, $marker, Object.create(BytePacketBuilder.prototype));
  }
  function BytePacketBuilder(pool) {
    Output.call(this, pool);
  }
  BytePacketBuilder.prototype.c = function () {
    return this.c1i();
  };
  BytePacketBuilder.prototype.il = function () {
    return this.c1i() === 0;
  };
  BytePacketBuilder.prototype.d1i = function () {
  };
  BytePacketBuilder.prototype.e1i = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.n5 = function (value) {
    var tmp = Output.prototype.n5.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.b = function (value) {
    var tmp = Output.prototype.b.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.nb = function (value, startIndex, endIndex) {
    var tmp = Output.prototype.nb.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.t1c = function () {
    var size = this.c();
    var head = this.b19();
    return head == null ? Companion_getInstance_2().f1i_1 : new ByteReadPacket(head, toLong(size), this.t18_1);
  };
  BytePacketBuilder.prototype.toString = function () {
    return 'BytePacketBuilder(' + this.c() + ' bytes written)';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, Object.create(ByteReadPacket.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.f1i_1 = new ByteReadPacket(Companion_getInstance_4().r17_1, new Long(0, 0), Companion_getInstance_4().q17_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.k1i();
  }
  ByteReadPacket.prototype.s1i = function () {
    return null;
  };
  ByteReadPacket.prototype.t1i = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.u1i = function () {
  };
  ByteReadPacket.prototype.toString = function () {
    return 'ByteReadPacket(' + toString(this.q1c()) + ' bytes remaining)';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.k1c_1 = newHead;
    $this.l1c_1 = newHead.a1b_1;
    $this.m1c_1 = newHead.b1b_1;
    $this.n1c_1 = newHead.c1b_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.d1e())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            var tmp$ret$6;
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.a1b_1;
            var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.b1b_1;
            var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.c1b_1;
            var inductionVariable = tmp1__anonymous__uwfjfc;
            if (inductionVariable < tmp2__anonymous__z9zvc9)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.bits.get' call
                var tmp$ret$1;
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                tmp$ret$1 = tmp0__anonymous__q1qw7t_0.m1g_1.getInt8(index);
                tmp$ret$2 = tmp$ret$1;
                var codepoint = tmp$ret$2 & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  var tmp$ret$3;
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.n5(tmp3__anonymous__ufb84q);
                    var tmp0 = copied;
                    copied = tmp0 + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp$ret$3 = tmp_1;
                  tmp_0 = !tmp$ret$3;
                }
                if (tmp_0) {
                  tmp0__anonymous__q1qw7t.n1g(index - tmp1__anonymous__uwfjfc | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2__anonymous__z9zvc9);
            tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
            var rc = tmp$ret$5;
            tmp0__anonymous__q1qw7t.n1g(rc);
            tmp$ret$6 = rc;
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          tmp$ret$7 = tmp_2;
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.c1b_1 - tmp0__get_readRemaining__u3cy9h.b1b_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp3__anonymous__ufb84q = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.a1b_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.b1b_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.c1b_1;
                var inductionVariable = tmp1__anonymous__uwfjfc;
                if (inductionVariable < tmp2__anonymous__z9zvc9)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var tmp$ret$3;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    var tmp$ret$2;
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.m1g_1.getInt8(index);
                    tmp$ret$3 = tmp$ret$2;
                    var v = tmp$ret$3 & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      var tmp$ret$4;
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.n5(tmp3__anonymous__ufb84q_0);
                        var tmp0 = copied;
                        copied = tmp0 + 1 | 0;
                        tmp_0 = true;
                      }
                      tmp$ret$4 = tmp_0;
                      if (!tmp$ret$4) {
                        tmp3__anonymous__ufb84q.n1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            var tmp2 = byteCount;
                            byteCount = tmp2 + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      var tmp3 = byteCount;
                      byteCount = tmp3 - 1 | 0;
                      if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                        tmp3__anonymous__ufb84q.n1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      var tmp4 = byteCount;
                      byteCount = tmp4 - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          var tmp$ret$6;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp4__anonymous__pkmkx7 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.n5(tmp4__anonymous__pkmkx7);
                            var tmp0_0 = copied;
                            copied = tmp0_0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$6 = tmp_1;
                          if (!tmp$ret$6) {
                            tmp3__anonymous__ufb84q.n1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          var tmp$ret$7;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.n5(tmp5__anonymous__kpxxpo);
                            var tmp0_1 = copied;
                            copied = tmp0_1 + 1 | 0;
                            tmp_3 = true;
                          }
                          tmp$ret$7 = tmp_3;
                          if (!tmp$ret$7) {
                            tmp_2 = true;
                          } else {
                            var tmp$ret$8;
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.n5(tmp6__anonymous__fv9ai5);
                              var tmp0_2 = copied;
                              copied = tmp0_2 + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp$ret$8 = tmp_4;
                            tmp_2 = !tmp$ret$8;
                          }
                          if (tmp_2) {
                            tmp3__anonymous__ufb84q.n1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2__anonymous__z9zvc9);
                tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.n1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$12 = tmp1__get_readRemaining__qliyus.c1b_1 - tmp1__get_readRemaining__qliyus.b1b_1 | 0;
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$13 = tmp2__get_endGap__m31424.f1b_1 - tmp2__get_endGap__m31424.e1b_1 | 0;
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.g1j(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = current.c1b_1 - current.b1b_1 | 0;
      var tmp0_minOf = tmp$ret$0;
      var tmp1_minOf = currentCount;
      tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      var size = tmp$ret$1;
      current.n1g(size);
      var tmp1_this = $this;
      tmp1_this.m1c_1 = tmp1_this.m1c_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.p1c_1 ? current.w1h() == null : false) {
      $this.m1c_1 = current.b1b_1;
      $this.n1c_1 = current.c1b_1;
      $this.v1i(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.c1b_1 - current.b1b_1 | 0;
    var size = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.f1b_1 - current.e1b_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(size, tmp0_minOf);
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.j1c_1.v1f();
      Companion_getInstance_1();
      new_0.t1g(8);
      new_0.i1j(current.b1i());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.i1g($this.j1c_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.j1c_1.v1f();
    var chunk2 = $this.j1c_1.v1f();
    Companion_getInstance_1();
    chunk1.t1g(8);
    Companion_getInstance_1();
    chunk2.t1g(8);
    chunk1.i1j(chunk2);
    chunk2.i1j(current.b1i());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.v1i(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.b1i();
        current_0.i1g($this_0.j1c_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.v1i(new Long(0, 0));
          var tmp0 = $this_0;
          var tmp1 = empty_0;
          var tmp2 = empty_0;
          $this_0 = tmp0;
          current_0 = tmp1;
          empty_0 = tmp2;
          continue $l$0;
        } else {
          var tmp$ret$0;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$0 = next.c1b_1 > next.b1b_1;
          if (tmp$ret$0) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.o1c_1;
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            tmp$ret$1 = next.c1b_1 - next.b1b_1 | 0;
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.s5(toLong(tmp1_minus));
            tmp0_this.v1i(tmp$ret$2);
            tmp = next;
          } else {
            var tmp3 = $this_0;
            var tmp4 = next;
            var tmp5 = empty_0;
            $this_0 = tmp3;
            current_0 = tmp4;
            empty_0 = tmp5;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.p1c_1)
      return null;
    var chunk = $this.s1i();
    if (chunk == null) {
      $this.p1c_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.k1c_1);
    if (tail === Companion_getInstance_4().r17_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.o1c_1.equals(new Long(0, 0));
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.w1h();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.v1i(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.i1j(chunk);
      var tmp2_this = $this;
      tmp2_this.v1i(tmp2_this.o1c_1.r5(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        tmp$ret$0 = $this_0.n1c_1 - $this_0.m1c_1 | 0;
        var headSize = tmp$ret$0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.w1h();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().r17_1)) {
            $this_0.h1j(head_0);
          }
          var tmp0 = $this_0;
          var tmp1 = minSize_0;
          var tmp2 = next;
          $this_0 = tmp0;
          minSize_0 = tmp1;
          head_0 = tmp2;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.n1c_1 = head_0.c1b_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = tmp2_this.o1c_1;
          tmp$ret$1 = tmp0_minus.s5(toLong(copied));
          tmp2_this.v1i(tmp$ret$1);
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$2 = next.c1b_1 > next.b1b_1;
          if (!tmp$ret$2) {
            head_0.i1j(null);
            head_0.i1j(next.b1i());
            next.i1g($this_0.j1c_1);
          } else {
            next.s1g(copied);
          }
        }
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$3 = head_0.c1b_1 - head_0.b1b_1 | 0;
        if (tmp$ret$3 >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        var tmp3 = $this_0;
        var tmp4 = minSize_0;
        var tmp5 = head_0;
        $this_0 = tmp3;
        minSize_0 = tmp4;
        head_0 = tmp5;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = head.c1b_1 - head.b1b_1 | 0;
    if (tmp$ret$0 === 0) {
      $this.h1j(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    this.j1c_1 = pool;
    this.k1c_1 = head;
    this.l1c_1 = head.a1b_1;
    this.m1c_1 = head.b1b_1;
    this.n1c_1 = head.c1b_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.n1c_1 - this.m1c_1 | 0;
    tmp$ret$0 = remaining.s5(toLong(tmp0_minus));
    tmp.o1c_1 = tmp$ret$0;
    this.p1c_1 = false;
  }
  Input.prototype.d1e = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.n1c_1 - this.m1c_1 | 0;
    if (tmp$ret$0 === 0) {
      tmp_0 = this.o1c_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.p1c_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Input.prototype.g1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.k1c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.q1g(this.m1c_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Input.prototype.v1i = function (newValue) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newValue.v(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o1c_1 = newValue;
  };
  Input.prototype.q1c = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.n1c_1 - this.m1c_1 | 0;
    return toLong(tmp$ret$0).r5(this.o1c_1);
  };
  Input.prototype.g1d = function () {
    return !(this.m1c_1 === this.n1c_1) ? true : !this.o1c_1.equals(new Long(0, 0));
  };
  Input.prototype.kk = function () {
    var head = this.g1i();
    var empty = Companion_getInstance_4().r17_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.v1i(new Long(0, 0));
      releaseAll(head, this.j1c_1);
    }
  };
  Input.prototype.v15 = function () {
    this.kk();
    if (!this.p1c_1) {
      this.p1c_1 = true;
    }
    this.u1i();
  };
  Input.prototype.b19 = function () {
    var head = this.g1i();
    var empty = Companion_getInstance_4().r17_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.v1i(new Long(0, 0));
    return head;
  };
  Input.prototype.w1i = function () {
    var head = this.g1i();
    var next = head.w1h();
    var empty = Companion_getInstance_4().r17_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.v1i(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = tmp0_this.o1c_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = next.c1b_1 - next.b1b_1 | 0;
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.s5(toLong(tmp1_minus));
      tmp0_this.v1i(tmp$ret$1);
    }
    head.i1j(null);
    return head;
  };
  Input.prototype.x1i = function (chain) {
    if (chain === Companion_getInstance_4().r17_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.k1c_1 === Companion_getInstance_4().r17_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = this.n1c_1 - this.m1c_1 | 0;
      var tmp0_minus = tmp$ret$0;
      tmp$ret$1 = size.s5(toLong(tmp0_minus));
      this.v1i(tmp$ret$1);
    } else {
      findTail(this.k1c_1).i1j(chain);
      var tmp0_this = this;
      tmp0_this.v1i(tmp0_this.o1c_1.r5(size));
    }
  };
  Input.prototype.y1i = function (chain) {
    var tail = findTail(this.g1i());
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = chain.c1b_1 - chain.b1b_1 | 0;
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = tail.e1b_1 - tail.c1b_1 | 0;
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.g1i() === tail) {
      this.n1c_1 = tail.c1b_1;
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = tmp0_this.o1c_1;
      tmp$ret$2 = tmp0_plus.r5(toLong(size));
      tmp0_this.v1i(tmp$ret$2);
    }
    return true;
  };
  Input.prototype.z1i = function (n) {
    // Inline function 'kotlin.require' call
    var tmp0_require = n >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      tmp$ret$0 = 'Negative discard is not allowed: ' + n;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible(this, n, 0);
  };
  Input.prototype.n1g = function (n) {
    if (!(this.z1i(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  Input.prototype.a1j = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.d1e() : false)
      return '';
    var remaining = this.q1c();
    if (remaining.v(new Long(0, 0)) > 0 ? toLong(max).v(remaining) >= 0 : false) {
      var tmp = remaining.yc();
      return readTextExactBytes$default(this, tmp, null, 2, null);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Input.prototype.b1j = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = 0;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return this.a1j(min, max);
  };
  Input.prototype.c1j = function (minSize) {
    return prepareReadLoop(this, minSize, this.g1i());
  };
  Input.prototype.d1j = function (current) {
    return this.e1j(current);
  };
  Input.prototype.e1j = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().r17_1);
  };
  Input.prototype.f1j = function (current) {
    var tmp0_elvis_lhs = current.w1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.c1b_1 - current.b1b_1 | 0;
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.f1b_1 - current.e1b_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    var overrunSize = tmp$ret$2;
    if (next.d1b_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.z1g();
      this.n1c_1 = current.c1b_1;
      var tmp1_this = this;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = tmp1_this.o1c_1;
      tmp$ret$3 = tmp1_plus.r5(toLong(overrunSize));
      tmp1_this.v1i(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = tmp2_this.o1c_1;
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$4 = next.c1b_1 - next.b1b_1 | 0;
      var tmp3_minus = tmp$ret$4 - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.s5(toLong(tmp3_minus));
      tmp2_this.v1i(tmp$ret$5);
      current.b1i();
      current.i1g(this.j1c_1);
    }
  };
  Input.prototype.s1i = function () {
    var buffer = this.j1c_1.v1f();
    try {
      Companion_getInstance_1();
      buffer.t1g(8);
      var tmp = buffer.c1b_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.e1b_1 - buffer.c1b_1 | 0;
      var copied = this.t1i(buffer.a1b_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.p1c_1 = true;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        tmp$ret$1 = buffer.c1b_1 > buffer.b1b_1;
        if (!tmp$ret$1) {
          buffer.i1g(this.j1c_1);
          return null;
        }
      }
      buffer.o1g(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.i1g(this.j1c_1);
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  Input.prototype.k1i = function () {
    if (!this.p1c_1) {
      this.p1c_1 = true;
    }
  };
  Input.prototype.g1j = function (minSize) {
    var head = this.g1i();
    if ((this.n1c_1 - this.m1c_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  Input.prototype.h1j = function (head) {
    var tmp0_elvis_lhs = head.b1i();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().r17_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = tmp1_this.o1c_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = next.c1b_1 - next.b1b_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.s5(toLong(tmp1_minus));
    tmp1_this.v1i(tmp$ret$1);
    head.i1g(this.j1c_1);
    return next;
  };
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.c1b_1 - tmp0__anonymous__q1qw7t.b1b_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$4;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$3;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$2 = tmp0__anonymous__q1qw7t.c1b_1 - tmp0__anonymous__q1qw7t.b1b_1 | 0;
          var tmp1_minOf = tmp$ret$2;
          tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_0(tmp0__anonymous__q1qw7t, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$4 = remaining > 0;
          if (!tmp$ret$4) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$5 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$5;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = _this__u8e3s4.n1c_1 - _this__u8e3s4.m1c_1 | 0;
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.m1c_1;
        _this__u8e3s4.m1c_1 = index + 2 | 0;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.l1c_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.m1g_1.getInt16(index, false);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$4 = readShortFallback(_this__u8e3s4);
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    tmp$ret$0 = readShort(head);
    var value = tmp$ret$0;
    completeReadHead(_this__u8e3s4, head);
    tmp$ret$1 = value;
    return tmp$ret$1;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.b19();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0__anonymous__q1qw7t = current;
        var tmp_0 = tmp0__anonymous__q1qw7t.b1b_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.c1b_1 - tmp0__anonymous__q1qw7t.b1b_1 | 0;
        $this.e1i(tmp0__anonymous__q1qw7t.a1b_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.w1h();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.t18_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.t18_1.v1f();
    Companion_getInstance_1();
    new_0.t1g(8);
    $this.h1g(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.v18_1;
    if (_tail == null) {
      $this.u18_1 = head;
      $this.a19_1 = 0;
    } else {
      _tail.i1j(head);
      var tailPosition = $this.x18_1;
      _tail.p1g(tailPosition);
      var tmp0_this = $this;
      tmp0_this.a19_1 = tmp0_this.a19_1 + (tailPosition - $this.z18_1 | 0) | 0;
    }
    $this.v18_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.a19_1 = tmp1_this.a19_1 + chainedSizeDelta | 0;
    $this.w18_1 = newTail.a1b_1;
    $this.x18_1 = newTail.c1b_1;
    $this.z18_1 = newTail.b1b_1;
    $this.y18_1 = newTail.e1b_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).c1h(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.x18_1;
    tmp0_this.x18_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.i1i(3);
      try {
        var tmp$ret$11;
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp16_putUtf8Char = buffer.a1b_1;
        var tmp17_putUtf8Char = buffer.c1b_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        var tmp18_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp18_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp18_putUtf8Char);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp17_putUtf8Char, tmp1_set);
          tmp$ret$1 = Unit_getInstance();
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp17_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp2_set, tmp3_set);
          tmp$ret$2 = Unit_getInstance();
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp17_putUtf8Char, tmp4_set);
          tmp$ret$3 = Unit_getInstance();
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp17_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp5_set, tmp6_set);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp17_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp7_set, tmp8_set);
          tmp$ret$5 = Unit_getInstance();
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp17_putUtf8Char, tmp9_set);
          tmp$ret$6 = Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp17_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp10_set, tmp11_set);
          tmp$ret$7 = Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp17_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp12_set, tmp13_set);
          tmp$ret$8 = Unit_getInstance();
          var tmp$ret$9;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp17_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.m1g_1.setInt8(tmp14_set, tmp15_set);
          tmp$ret$9 = Unit_getInstance();
          tmp = 4;
        } else {
          malformedCodePoint(tmp18_putUtf8Char);
        }
        tmp$ret$10 = tmp;
        var size = tmp$ret$10;
        buffer.o1g(size);
        tmp$ret$11 = size;
        var result = tmp$ret$11;
        // Inline function 'kotlin.check' call
        var tmp0_check = result >= 0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$12;
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          tmp$ret$12 = "The returned value shouldn't be negative";
          var message = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.j1g();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.p1g($this.x18_1);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.c1b_1 - tail.b1b_1 | 0;
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = foreignStolen.c1b_1 - foreignStolen.b1b_1 | 0;
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$2 = tail.f1b_1 - tail.e1b_1 | 0;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$3 = tail.e1b_1 - tail.c1b_1 | 0;
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.d1b_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.h1i(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$4 = tail.e1b_1 - tail.c1b_1 | 0;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.f1b_1 - tail.e1b_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.j1g();
      var tmp0_safe_receiver = foreignStolen.b1i();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.h1i(tmp0_safe_receiver);
        tmp$ret$6 = Unit_getInstance();
      }
      foreignStolen.i1g(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.u18_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.u18_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.w1h());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.i1j(foreignStolen);
    }
    tail.i1g($this.t18_1);
    $this.v18_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.t18_1 = pool;
    this.u18_1 = null;
    this.v18_1 = null;
    this.w18_1 = Companion_getInstance_6().j1j_1;
    this.x18_1 = 0;
    this.y18_1 = 0;
    this.z18_1 = 0;
    this.a19_1 = 0;
  }
  Output.prototype.c1i = function () {
    return this.a19_1 + (this.x18_1 - this.z18_1 | 0) | 0;
  };
  Output.prototype.g1i = function () {
    var tmp0_elvis_lhs = this.u18_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().r17_1 : tmp0_elvis_lhs;
  };
  Output.prototype.da = function () {
    flushChain(this);
  };
  Output.prototype.b19 = function () {
    var tmp0_elvis_lhs = this.u18_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.v18_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.p1g(this.x18_1);
    this.u18_1 = null;
    this.v18_1 = null;
    this.x18_1 = 0;
    this.y18_1 = 0;
    this.z18_1 = 0;
    this.a19_1 = 0;
    this.w18_1 = Companion_getInstance_6().j1j_1;
    return head;
  };
  Output.prototype.h1g = function (buffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffer.w1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      tmp$ret$0 = 'It should be a single buffer chunk.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  Output.prototype.h1i = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.c1b_1 - tail.b1b_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.s5(toLong(tmp1_minus));
    var tmp2_toIntOrFail = tmp$ret$1;
    if (tmp2_toIntOrFail.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    tmp$ret$2 = tmp2_toIntOrFail.yc();
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  Output.prototype.c1h = function (v) {
    var index = this.x18_1;
    if (index < this.y18_1) {
      this.x18_1 = index + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp0_set = this.w18_1;
      tmp0_set.m1g_1.setInt8(index, v);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  Output.prototype.v15 = function () {
    try {
      this.da();
    }finally {
      this.d1i();
    }
  };
  Output.prototype.n5 = function (value) {
    var tailPosition = this.x18_1;
    if ((this.y18_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = this.w18_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(value);
      var tmp17_putUtf8Char = tmp$ret$0;
      var tmp0_subject = tmp17_putUtf8Char;
      var tmp;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp17_putUtf8Char);
        tmp16_putUtf8Char.m1g_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
        tmp16_putUtf8Char.m1g_1.setInt8(tailPosition, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
        tmp16_putUtf8Char.m1g_1.setInt8(tailPosition, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
        tmp16_putUtf8Char.m1g_1.setInt8(tailPosition, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.m1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp = 4;
      } else {
        malformedCodePoint(tmp17_putUtf8Char);
      }
      tmp$ret$10 = tmp;
      var size = tmp$ret$10;
      this.x18_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  Output.prototype.b = function (value) {
    if (value == null) {
      this.nb('null', 0, 4);
    } else {
      this.nb(value, 0, charSequenceLength(value));
    }
    return this;
  };
  Output.prototype.nb = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.nb('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().k1j_1);
    return this;
  };
  Output.prototype.a1f = function (packet) {
    var foreignStolen = packet.b19();
    if (foreignStolen == null) {
      packet.kk();
      return Unit_getInstance();
    }
    var tail = this.v18_1;
    if (tail == null) {
      this.h1i(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.j1c_1);
  };
  Output.prototype.c19 = function (chunkBuffer) {
    var _tail = this.v18_1;
    if (_tail == null) {
      this.h1i(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.t18_1);
  };
  Output.prototype.r1c = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.v(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.n1c_1 - p.m1c_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.v(remaining) <= 0) {
        remaining = remaining.s5(headRemaining);
        var tmp0_elvis_lhs = p.w1i();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.h1g(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.g1j(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.b1b_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.yc());
        }finally {
          var positionAfter = buffer.b1b_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.c1b_1) {
            p.e1j(buffer);
          } else {
            p.m1c_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  Output.prototype.kk = function () {
    this.v15();
  };
  Output.prototype.i1i = function (n) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    tmp$ret$0 = this.y18_1 - this.x18_1 | 0;
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.v18_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.p1g(this.x18_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  Output.prototype.j1g = function () {
    var tmp0_safe_receiver = this.v18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.x18_1 = tmp0_safe_receiver.c1b_1;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Output.prototype.j1i = function () {
    var head = this.g1i();
    if (!(head === Companion_getInstance_4().r17_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = head.w1h() == null;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.v1g();
      Companion_getInstance_1();
      head.t1g(8);
      this.x18_1 = head.c1b_1;
      this.z18_1 = this.x18_1;
      this.y18_1 = head.e1b_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        var tmp1_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_1(tmp0__anonymous__q1qw7t, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$3 = remaining > 0;
        if (!tmp$ret$3)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.j1g();
    }
  }
  function writeFully$default(_this__u8e3s4, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = src.c1b_1 - src.b1b_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      length = tmp$ret$0;
    }
    return writeFully_2(_this__u8e3s4, src, length);
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.e1b_1 - tmp0__anonymous__q1qw7t.c1b_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.j1g();
    }
  }
  function writeFully$default_0(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.length - offset | 0;
    return writeFully_3(_this__u8e3s4, src, offset, length);
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.x18_1;
      if ((_this__u8e3s4.y18_1 - index | 0) > 2) {
        _this__u8e3s4.x18_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.w18_1;
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        tmp0__anonymous__q1qw7t.m1g_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.i1i(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.j1g();
    tmp$ret$0 = true;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.c1h(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.c1h(tmp$ret$2);
    }
  }
  function readText(_this__u8e3s4, charset, max) {
    return decode(charset.n1j(), _this__u8e3s4, max);
  }
  function readText$default(_this__u8e3s4, charset, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      charset = Charsets_getInstance().k1j_1;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return readText(_this__u8e3s4, charset, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, tmp0_also, 0, n);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = get_EmptyByteArray();
    }
    return tmp;
  }
  function readBytes$default(_this__u8e3s4, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.q1c();
      if (tmp0_coerceAtMostMaxIntOrFail.v(toLong(IntCompanionObject_getInstance().MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.yc();
      tmp$ret$0_0 = Unit_getInstance();
      n = tmp$ret$0;
    }
    return readBytes(_this__u8e3s4, n);
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    return decodeExactBytes(charset.n1j(), _this__u8e3s4, bytesCount);
  }
  function readTextExactBytes$default(_this__u8e3s4, bytesCount, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      charset = Charsets_getInstance().k1j_1;
    return readTextExactBytes(_this__u8e3s4, bytesCount, charset);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance().k1j_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.o1j(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeText$default(_this__u8e3s4, text, fromIndex, toIndex, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(text);
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().k1j_1;
    return writeText(_this__u8e3s4, text, fromIndex, toIndex, charset);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var memory = tmp0__anonymous__q1qw7t.a1b_1;
        var dstOffset = tmp0__anonymous__q1qw7t.c1b_1;
        var dstLimit = tmp0__anonymous__q1qw7t.e1b_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
        index = tmp + tmp$ret$0 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0__anonymous__q1qw7t.o1g(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
        if (tmp$ret$2 === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        tmp$ret$3 = tmp_0;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.j1g();
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  ChunkBuffer$Companion$Pool$1.prototype.v1f = function () {
    return get_DefaultChunkedBufferPool().v1f();
  };
  ChunkBuffer$Companion$Pool$1.prototype.p1j = function (instance) {
    get_DefaultChunkedBufferPool().a1i(instance);
  };
  ChunkBuffer$Companion$Pool$1.prototype.a1i = function (instance) {
    return this.p1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$Pool$1.prototype.nh = function () {
    get_DefaultChunkedBufferPool().nh();
  };
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  ChunkBuffer$Companion$EmptyPool$1.prototype.v1f = function () {
    return Companion_getInstance_4().r17_1;
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.p1j = function (instance) {
    // Inline function 'kotlin.require' call
    var tmp0_require = instance === Companion_getInstance_4().r17_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.a1i = function (instance) {
    return this.p1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.nh = function () {
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$1.prototype.v1f = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().l1h(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.p1j = function (instance) {
    DefaultAllocator_getInstance().n1h(instance.a1b_1);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.a1i = function (instance) {
    return this.p1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.v1f = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.p1j = function (instance) {
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.a1i = function (instance) {
    return this.p1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.d1g_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.p17_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.q17_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.r17_1 = new ChunkBuffer(Companion_getInstance_6().j1j_1, null, this.q17_1);
    var tmp_1 = this;
    tmp_1.s17_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.t17_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.c1g_1 = parentPool;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(origin === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d1g_1 = atomic$ref$1(null);
    this.e1g_1 = atomic$int$1(1);
    this.f1g_1 = origin;
  }
  ChunkBuffer.prototype.i1j = function (newValue) {
    if (newValue == null) {
      this.b1i();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype.w1h = function () {
    return this.d1g_1.kotlinx$atomicfu$value;
  };
  ChunkBuffer.prototype.v1h = function () {
    return this.e1g_1.kotlinx$atomicfu$value;
  };
  ChunkBuffer.prototype.b1i = function () {
    return this.d1g_1.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.g1g = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.f1g_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.q1j();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.a1b_1, tmp0_let, this.c1g_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.a1h(tmp0_also);
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.i1g = function (pool) {
    if (this.r1j()) {
      var origin = this.f1g_1;
      if (!(origin == null)) {
        this.s1h();
        origin.i1g(pool);
      } else {
        var tmp0_elvis_lhs = this.c1g_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.a1i(this);
      }
    }
  };
  ChunkBuffer.prototype.s1h = function () {
    if (!this.e1g_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.b1i();
    this.f1g_1 = null;
  };
  ChunkBuffer.prototype.q1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.e1g_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        tmp$ret$0 = cur + 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.z1h = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.e1g_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.r1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.e1g_1;
      while (true) {
        var cur = tmp0_updateAndGet.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        tmp$ret$0 = cur - 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.d1h = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.f1g_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      tmp$ret$0 = 'Unable to reset buffer with origin';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Buffer.prototype.d1h.call(this);
    this.d1g_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.v1h() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
    var tmp1_minOf = from + tmp$ret$0 | 0;
    tmp$ret$1 = Math.min(to, tmp1_minOf);
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp6_storeAt = tmp1;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.m1g_1.setInt8(tmp6_storeAt, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject = codepoint;
      var tmp_1;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$10 = tmp_1;
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(high);
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = Char__toInt_impl_vasixd(low);
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp0_subject = codepoint;
      var tmp_1;
      if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$1 = tmp_1;
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject_0 = codepoint;
      var tmp_2;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$3 = Unit_getInstance();
        tmp_2 = 2;
      } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$5 = Unit_getInstance();
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$6 = Unit_getInstance();
        tmp_2 = 3;
      } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.m1g_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$9 = Unit_getInstance();
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.m1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$10 = Unit_getInstance();
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$11 = tmp_2;
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    init_properties_Unsafe_kt_ayh6vg();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.canRead' call
      tmp$ret$0 = current.c1b_1 > current.b1b_1;
      if (!tmp$ret$0) {
        _this__u8e3s4.e1j(current);
      } else {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        tmp$ret$1 = current.f1b_1 - current.e1b_1 | 0;
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.f1j(current);
        } else {
          _this__u8e3s4.m1c_1 = current.b1b_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    init_properties_Unsafe_kt_ayh6vg();
    return _this__u8e3s4.c1j(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.g1d() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.d1j(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    init_properties_Unsafe_kt_ayh6vg();
    var builderSize = builder.c();
    var tmp0_elvis_lhs = builder.b19();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.w1h() == null : false) ? _this__u8e3s4.y1i(builderHead) : false) {
      builder.j1i();
      return builderSize;
    }
    _this__u8e3s4.x1i(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (!(current == null)) {
      _this__u8e3s4.j1g();
    }
    return _this__u8e3s4.i1i(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function init_properties_Unsafe_kt_ayh6vg() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $cont) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1k_1 = _this__u8e3s4;
    this.n1k_1 = sleepCondition;
  }
  $sleepCOROUTINE$52.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = trySuspend(this.m1k_1, this.n1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.m1k_1.k18();
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1k_1 = _this__u8e3s4;
    this.b1k_1 = sleepCondition;
  }
  $trySuspendCOROUTINE$53.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.c1k_1 = false;
            var tmp_0 = this;
            tmp_0.d1k_1 = Job$default(null, 1, null);
            if (this.a1k_1.j18_1.atomicfu$compareAndSet(null, this.d1k_1) ? this.b1k_1() : false) {
              this.c1k_1 = true;
              this.cd_1 = 1;
              suspendResult = this.d1k_1.ek(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.cd_1 = 2;
            continue $sm;
          case 2:
            return this.c1k_1;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function AwaitingSlot() {
    this.j18_1 = atomic$ref$1(null);
  }
  AwaitingSlot.prototype.e1a = function (sleepCondition, $cont) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  AwaitingSlot.prototype.k18 = function () {
    var tmp0_safe_receiver = this.j18_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.dk();
  };
  AwaitingSlot.prototype.y1e = function (cause) {
    var tmp0_elvis_lhs = this.j18_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.ck(cause);
    } else {
      continuation.dk();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1k_1 = _this__u8e3s4;
    this.x1k_1 = dst;
    this.y1k_1 = limit;
  }
  $copyToSequentialImplCOROUTINE$54.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 10;
            var tmp0_require = !(this.w1k_1 === this.x1k_1);
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.w1k_1.d19() == null)) {
              this.x1k_1.ls(this.w1k_1.d19());
              return new Long(0, 0);
            }

            this.z1k_1 = this.y1k_1;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!(this.z1k_1.v(new Long(0, 0)) > 0)) {
              this.cd_1 = 9;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.w1k_1.x1e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a1l_1 = suspendResult;
            if (!this.a1l_1) {
              this.cd_1 = 9;
              continue $sm;
            } else {
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.b1l_1 = this.w1k_1.z1e(this.x1k_1, this.z1k_1);
            if (this.b1l_1.equals(new Long(0, 0))) {
              this.cd_1 = 6;
              suspendResult = copyToTail(this.w1k_1, this.x1k_1, this.z1k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.x1k_1.s19() === 0) {
                this.cd_1 = 4;
                suspendResult = this.x1k_1.z1a(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.cd_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.cd_1 = 5;
            continue $sm;
          case 5:
            this.c1l_1 = this.b1l_1;
            this.cd_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.cd_1 = 9;
              continue $sm;
            } else {
              this.cd_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.c1l_1 = tail;
            this.cd_1 = 8;
            continue $sm;
          case 8:
            var copied = this.c1l_1;
            this.z1k_1 = this.z1k_1.s5(copied);
            if (copied.v(new Long(0, 0)) > 0) {
              this.x1k_1.da();
            }

            this.cd_1 = 1;
            continue $sm;
          case 9:
            return this.y1k_1.s5(this.z1k_1);
          case 10:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 10) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1l_1 = _this__u8e3s4;
    this.m1l_1 = dst;
    this.n1l_1 = limit;
  }
  $copyToTailCOROUTINE$55.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 9;
            this.o1l_1 = Companion_getInstance_4().p17_1.v1f();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.dd_1 = 8;
            this.o1l_1.w1g(coerceAtMost_0(this.n1l_1, toLong(this.o1l_1.f1b_1)).yc());
            this.cd_1 = 3;
            suspendResult = this.l1l_1.u1e(this.o1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.q1l_1 = suspendResult;
            if (this.q1l_1 === -1) {
              this.o1l_1.i1g(Companion_getInstance_4().p17_1);
              this.p1l_1 = new Long(0, 0);
              this.dd_1 = 9;
              this.cd_1 = 6;
              continue $sm;
            } else {
              this.cd_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.cd_1 = 5;
            suspendResult = this.m1l_1.q1e(this.o1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.p1l_1 = toLong(this.q1l_1);
            this.dd_1 = 9;
            this.cd_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.p1l_1;
            this.o1l_1.i1g(Companion_getInstance_4().p17_1);
            ;
            return tmp_1;
          case 7:
            this.o1l_1.i1g(Companion_getInstance_4().p17_1);
            ;
            return Unit_getInstance();
          case 8:
            this.dd_1 = 9;
            var t = this.fd_1;
            this.o1l_1.i1g(Companion_getInstance_4().p17_1);
            ;
            throw t;
          case 9:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 9) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function get_ByteArrayPool() {
    init_properties_ByteArrayPool_kt_ygh2ft();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  ByteArrayPool$1.prototype.k1h = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function init_properties_ByteArrayPool_kt_ygh2ft() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.a1i = function (instance) {
  };
  NoPoolImpl.prototype.nh = function () {
  };
  function ByteChannel(autoFlush) {
    return new ByteChannelJS(Companion_getInstance_4().r17_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $cont) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $cont);
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = content.length === 0;
    if (tmp$ret$0)
      return Companion_getInstance_5().l1g();
    var head = Companion_getInstance_4().p17_1.v1f();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.t1g(8);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0__get_writeRemaining__z8qq3e = tail;
      tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.e1b_1 - tmp0__get_writeRemaining__z8qq3e.c1b_1 | 0;
      var tmp2_minOf = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().p17_1.v1f();
      current.i1j(tail);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    tmp$ret$3 = tmp3_apply;
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.j1m_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.mi(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase_init_$Init$(initial, autoFlush, null, 4, null, this);
    this.j1m_1 = null;
  }
  ByteChannelJS.prototype.b1f = function (job) {
    var tmp0_safe_receiver = this.j1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qf(null, 1, null);
    }
    this.j1m_1 = job;
    job.mf(true, false, ByteChannelJS$attachJob$lambda(this), 2, null);
  };
  ByteChannelJS.prototype.toString = function () {
    return 'ByteChannel[' + this.j1m_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().r17_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.ls(null);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.u1l_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  Companion_3.prototype.l1g = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Empty$factory();
    tmp$ret$0 = this.u1l_1.r();
    return tmp$ret$0;
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
    Companion_getInstance_5();
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.l1g();
    }, null);
  }
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.l1h = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  DefaultAllocator.prototype.n1h = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    return new Memory(new DataView(buffer, offset, length));
  }
  function of$default(_this__u8e3s4, buffer, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = buffer.byteLength - offset | 0;
    return of_1(_this__u8e3s4, buffer, offset, length);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.j1j_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.m1g_1 = view;
  }
  Memory.prototype.k1m = function (offset, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$0 = "offset shouldn't be negative: " + offset;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$1 = "length shouldn't be negative: " + length;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.m1g_1.byteLength);
    if (tmp.v(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.m1g_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.m1g_1.buffer, this.m1g_1.byteOffset + offset | 0, length));
  };
  Memory.prototype.e1h = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.m1g_1.buffer, this.m1g_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.m1g_1.buffer, destination.m1g_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = destination;
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.m1g_1.buffer, _this__u8e3s4.m1g_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.m1g_1.buffer, destination.m1g_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.l1m = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().k1j_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp_2 = _Char___init__impl__6a9atx(95);
        var tmp_3 = _Char___init__impl__6a9atx(45);
        var tmp0_let = replace$default(name, tmp_2, tmp_3, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call
        var tmp_4;
        if (tmp0_let === 'iso-8859-1') {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_let;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_4 = tmp$ret$1 === 'iso-8859-1';
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().l1j_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.m1j_1 = _name;
  }
  Charset.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.m1j_1 === other.m1j_1))
      return false;
    return true;
  };
  Charset.prototype.hashCode = function () {
    return getStringHashCode(this.m1j_1);
  };
  Charset.prototype.toString = function () {
    return this.m1j_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.m1j_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.k1j_1 = new CharsetImpl('UTF-8');
    this.l1j_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.m1m_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.n1m_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.p1m_1 = name;
  }
  CharsetImpl.prototype.o1j = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.n1j = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + this.p1m_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this.p1m_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.p1m_1 === tmp0_other_with_cast.p1m_1))
      return false;
    return true;
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.r1m_1 = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.r1m_1 + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return this.r1m_1.hashCode();
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.r1m_1.equals(tmp0_other_with_cast.r1m_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.t1m_1 = charset;
  }
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.t1m_1 + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    return this.t1m_1.hashCode();
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.t1m_1.equals(tmp0_other_with_cast.t1m_1))
      return false;
    return true;
  };
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.c1b_1 - tmp0__get_readRemaining__u3cy9h.b1b_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp0__anonymous__q1qw7t = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$2 = tmp0__anonymous__q1qw7t.c1b_1 - tmp0__anonymous__q1qw7t.b1b_1 | 0;
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.a1b_1;
                var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.b1b_1;
                var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.c1b_1;
                var tmp$ret$8;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q = new Int8Array(tmp0__anonymous__q1qw7t_0.m1g_1.buffer, tmp0__anonymous__q1qw7t_0.m1g_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                var tmp$ret$7;
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    var tmp$ret$6;
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.u1m(tmp3__anonymous__ufb84q, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp$ret$6 = tmp$ret$4;
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var tmp0_elvis_lhs_1 = $p.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$7;
                dst.b(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                tmp$ret$8 = tmp3__anonymous__ufb84q.byteLength;
                tmp$ret$9 = tmp$ret$8;
                var rc = tmp$ret$9;
                tmp0__anonymous__q1qw7t.n1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$11 = tmp$ret$10;
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.v1m();
                  } catch ($p) {
                    var tmp_2;
                    {
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  tmp$ret$12 = charSequenceLength(tail) > 0;
                  if (tmp$ret$12) {
                    tmp0__anonymous__q1qw7t.r1g(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$13 = tmp1__get_readRemaining__qliyus.c1b_1 - tmp1__get_readRemaining__qliyus.b1b_1 | 0;
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$14 = tmp2__get_endGap__m31424.f1b_1 - tmp2__get_endGap__m31424.e1b_1 | 0;
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp0__get_readRemaining__u3cy9h_0 = current_0;
            tmp$ret$16 = tmp0__get_readRemaining__u3cy9h_0.c1b_1 - tmp0__get_readRemaining__u3cy9h_0.b1b_1 | 0;
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp1__anonymous__uwfjfc_0 = current_0;
                var tmp$ret$20;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$19;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$18;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_1 = tmp1__anonymous__uwfjfc_0.a1b_1;
                var tmp1__anonymous__uwfjfc_1 = tmp1__anonymous__uwfjfc_0.b1b_1;
                var tmp2__anonymous__z9zvc9_0 = tmp1__anonymous__uwfjfc_0.c1b_1;
                var tmp$ret$17;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t_1.m1g_1.buffer, tmp0__anonymous__q1qw7t_1.m1g_1.byteOffset + tmp1__anonymous__uwfjfc_1 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_1 | 0);
                var result = decodeBufferImpl(tmp3__anonymous__ufb84q_0, decoder, max - charactersCopied | 0);
                dst.b(result.w1m_1);
                charactersCopied = charactersCopied + result.w1m_1.length | 0;
                tmp$ret$17 = result.x1m_1;
                tmp$ret$18 = tmp$ret$17;
                var rc_0 = tmp$ret$18;
                tmp1__anonymous__uwfjfc_0.n1g(rc_0);
                tmp$ret$19 = rc_0;
                tmp$ret$20 = tmp$ret$19;
                var rc_1 = tmp$ret$20;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  var tmp0 = size_0;
                  size_0 = tmp0 + 1 | 0;
                }
                tmp$ret$21 = size_0;
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp1__get_readRemaining__qliyus_0 = current_0;
                tmp$ret$22 = tmp1__get_readRemaining__qliyus_0.c1b_1 - tmp1__get_readRemaining__qliyus_0.b1b_1 | 0;
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp2__get_endGap__m31424_0 = current_0;
                tmp$ret$23 = tmp2__get_endGap__m31424_0.f1b_1 - tmp2__get_endGap__m31424_0.e1b_1 | 0;
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex <= toIndex;
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
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().l1j_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().k1j_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.e1b_1 - dst.c1b_1 | 0;
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully$default_1(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = input.n1c_1 - input.m1c_1 | 0;
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder(get_charset(_this__u8e3s4).m1j_1, true);
      var head = input.g1i();
      var view = input.l1c_1.m1g_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.b1b_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.b1b_1 | 0, inputLength);
          tmp$ret$1 = decoder.y1m(subView);
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_elvis_lhs = $p.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.n1g(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.m1m_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.n1m_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$17;
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              var tmp$ret$1;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0__get_readRemaining__u3cy9h = current;
              tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.c1b_1 - tmp0__get_readRemaining__u3cy9h.b1b_1 | 0;
              var before = tmp$ret$1;
              var after;
              if (before >= size) {
                try {
                  var tmp$ret$8;
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp0__anonymous__q1qw7t = current;
                  var tmp$ret$2;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  tmp$ret$2 = tmp0__anonymous__q1qw7t.c1b_1 - tmp0__anonymous__q1qw7t.b1b_1 | 0;
                  var chunkSize = tmp$ret$2;
                  var tmp$ret$3;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                  var size_0 = tmp$ret$3;
                  var tmp_0;
                  if (tmp0__anonymous__q1qw7t.b1b_1 === 0 ? tmp0__anonymous__q1qw7t.a1b_1.m1g_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp0__anonymous__q1qw7t.a1b_1.m1g_1;
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.u1m(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp0__anonymous__q1qw7t.a1b_1.m1g_1.buffer, tmp0__anonymous__q1qw7t.a1b_1.m1g_1.byteOffset + tmp0__anonymous__q1qw7t.b1b_1 | 0, size_0);
                      var tmp$ret$7;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.u1m(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_1 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.qb(text);
                  tmp0__anonymous__q1qw7t.n1g(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                  size = tmp$ret$8;
                }finally {
                  var tmp$ret$9;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1__get_readRemaining__qliyus = current;
                  tmp$ret$9 = tmp1__get_readRemaining__qliyus.c1b_1 - tmp1__get_readRemaining__qliyus.b1b_1 | 0;
                  after = tmp$ret$9;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  var tmp$ret$10;
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2__get_endGap__m31424 = current;
                  tmp$ret$10 = tmp2__get_endGap__m31424.f1b_1 - tmp2__get_endGap__m31424.e1b_1 | 0;
                  var tmp_3 = tmp$ret$10;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              tmp$ret$11 = Unit_getInstance();
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                var tmp$ret$16;
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp1__anonymous__uwfjfc = current_0;
                var tmp$ret$12;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$12 = tmp1__anonymous__uwfjfc.c1b_1 - tmp1__anonymous__uwfjfc.b1b_1 | 0;
                var chunkSize_0 = tmp$ret$12;
                var tmp$ret$13;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                var size_1 = tmp$ret$13;
                var tmp_6;
                if (tmp1__anonymous__uwfjfc.b1b_1 === 0 ? tmp1__anonymous__uwfjfc.a1b_1.m1g_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.y1m(tmp1__anonymous__uwfjfc.a1b_1.m1g_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp1__anonymous__uwfjfc.a1b_1.m1g_1.buffer, tmp1__anonymous__uwfjfc.a1b_1.m1g_1.byteOffset + tmp1__anonymous__uwfjfc.b1b_1 | 0, size_1);
                    var tmp$ret$15;
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.u1m(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var tmp0_elvis_lhs_3 = $p.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.qb(text_0);
                tmp1__anonymous__uwfjfc.n1g(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                tmp$ret$16 = true;
                if (!tmp$ret$16) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        tmp$ret$17 = sb.qb(decoder.v1m());
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs_4 = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.w1m_1 = charactersDecoded;
    this.x1m_1 = bytesConsumed;
  }
  DecodeBufferResult.prototype.toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.w1m_1 + ', bytesConsumed=' + this.x1m_1 + ')';
  };
  DecodeBufferResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.w1m_1);
    result = imul(result, 31) + this.x1m_1 | 0;
    return result;
  };
  DecodeBufferResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.w1m_1 === tmp0_other_with_cast.w1m_1))
      return false;
    if (!(this.x1m_1 === tmp0_other_with_cast.x1m_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.y1m(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.y1m(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.y1m(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        tmp$ret$0 = nativeDecoder.y1m(_this__u8e3s4);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = dst.a1b_1;
    var tmp1__anonymous__uwfjfc = dst.c1b_1;
    var tmp2__anonymous__z9zvc9 = dst.e1b_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.k1m(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).m1g_1;
    var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(input, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        var tmp1_set = tmp1;
        var tmp2_set = toByte(character);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = i8;
        tmp$ret$1[tmp1_set] = tmp2_set;
      }
       while (inductionVariable < toIndex);
    tmp$ret$2 = writeIndex;
    tmp$ret$3 = tmp$ret$2;
    var rc = tmp$ret$3;
    dst.o1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.a1b_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.c1b_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.e1b_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_1(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.o1g(rc);
    tmp$ret$1 = rc;
  }
  function writeFully$default_1(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_4(_this__u8e3s4, src, offset, length);
  }
  function Closeable() {
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var tmp = Companion_getInstance_6();
    var view = new ChunkBuffer(of$default(tmp, buffer, 0, 0, 6, null), null, Companion_getInstance_4().s17_1);
    view.u1g();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().t17_1);
    return decode(charset.n1j(), packet, IntCompanionObject_getInstance().MAX_VALUE);
  }
  function String$default(bytes, offset, length, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().k1j_1;
    return String_0(bytes, offset, length, charset);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (offset + length | 0) <= bytes.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.stream = stream;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.fatal = fatal;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.z1m_1 = $this_toKtor;
  }
  toKtor$1.prototype.v1m = function () {
    return this.z1m_1.decode();
  };
  toKtor$1.prototype.y1m = function (buffer) {
    return this.z1m_1.decode(buffer);
  };
  toKtor$1.prototype.u1m = function (buffer, options) {
    return this.z1m_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.a1n_1 = fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
    var tmp0_lowercase = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_lowercase;
    tmp$ret$2 = tmp$ret$1.toLowerCase();
    var requestedEncoding = tmp$ret$2;
    // Inline function 'kotlin.check' call
    var tmp1_check = get_ENCODING_ALIASES().n(requestedEncoding);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      tmp$ret$3 = encoding + ' is not supported.';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  TextDecoderFallback.prototype.v1m = function () {
    return '';
  };
  TextDecoderFallback.prototype.y1m = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = bytes;
            tmp$ret$1 = tmp$ret$0[index];
            var byte = tmp$ret$1;
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              var tmp0_check = !this.a1n_1;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Invalid character: ' + point;
                var message = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              var tmp = get_REPLACEMENT();
              writeFully$default_0(builder, tmp, 0, 0, 6, null);
              continue $l$loop;
            }
            if (point > 255) {
              builder.c1h(toByte(point >> 8));
            }
            builder.c1h(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.t1c();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.kk();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var tmp_0 = tmp$ret$3;
    return decodeToString(readBytes$default(tmp_0, 0, 1, null));
  };
  TextDecoderFallback.prototype.u1m = function (buffer, options) {
    return this.y1m(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function init_properties_TextDecoderFallback_kt_mch4cl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT = tmp$ret$0;
    }
  }
  function get_WIN1252_TABLE() {
    init_properties_Win1252Table_kt_2hu70m();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function init_properties_Win1252Table_kt_2hu70m() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.o1h_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.o1h_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.p1h_1 = tmp$ret$0;
    this.q1h_1 = 0;
  }
  DefaultPool.prototype.r1h = function (instance) {
  };
  DefaultPool.prototype.y1h = function (instance) {
    return instance;
  };
  DefaultPool.prototype.u1h = function (instance) {
  };
  DefaultPool.prototype.v1f = function () {
    if (this.q1h_1 === 0)
      return this.k1h();
    var tmp0_this = this;
    tmp0_this.q1h_1 = tmp0_this.q1h_1 - 1 | 0;
    var idx = tmp0_this.q1h_1;
    var tmp = this.p1h_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.p1h_1[idx] = null;
    return this.y1h(instance);
  };
  DefaultPool.prototype.a1i = function (instance) {
    this.u1h(instance);
    if (this.q1h_1 === this.o1h_1) {
      this.r1h(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.q1h_1;
      tmp0_this.q1h_1 = tmp1 + 1 | 0;
      this.p1h_1[tmp1] = instance;
    }
  };
  DefaultPool.prototype.nh = function () {
    var inductionVariable = 0;
    var last = this.q1h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1h_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.p1h_1[i] = null;
        this.r1h(instance);
      }
       while (inductionVariable < last);
    this.q1h_1 = 0;
  };
  //region block: post-declaration
  ByteChannelSequentialBase.prototype.t1e = readRemaining$default;
  ChannelJob.prototype.qf = cancel$default;
  ChannelJob.prototype.mf = invokeOnCompletion$default;
  DefaultPool.prototype.v15 = close;
  DefaultBufferPool.prototype.v15 = close;
  ChunkBuffer$Companion$Pool$1.prototype.v15 = close;
  ChunkBuffer$Companion$EmptyPool$1.prototype.v15 = close;
  NoPoolImpl.prototype.v15 = close;
  ChunkBuffer$Companion$NoPool$1.prototype.v15 = close;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.v15 = close;
  ByteArrayPool$1.prototype.v15 = close;
  ByteChannelJS.prototype.t1e = readRemaining$default;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = decode$default;
  _.$_$.e = encode$default;
  _.$_$.f = String$default;
  _.$_$.g = readBytes$default;
  _.$_$.h = readText$default;
  _.$_$.i = writeFully$default_0;
  _.$_$.j = writeText$default;
  _.$_$.k = writer$default;
  _.$_$.l = BytePacketBuilder_init_$Create$;
  _.$_$.m = IOException_init_$Init$;
  _.$_$.n = Companion_getInstance_7;
  _.$_$.o = Charsets_getInstance;
  _.$_$.p = Companion_getInstance_5;
  _.$_$.q = MalformedInputException;
  _.$_$.r = encodeToByteArray;
  _.$_$.s = encode;
  _.$_$.t = get_name;
  _.$_$.u = completeReadHead;
  _.$_$.v = prepareReadFirstHead;
  _.$_$.w = prepareReadNextHead;
  _.$_$.x = ByteReadPacket;
  _.$_$.y = Closeable;
  _.$_$.z = Input;
  _.$_$.a1 = String_0;
  _.$_$.b1 = readShort_0;
  _.$_$.c1 = writeShort_0;
  _.$_$.d1 = IOException;
  _.$_$.e1 = get_ByteArrayPool;
  _.$_$.f1 = ByteReadChannel;
  _.$_$.g1 = ByteReadChannel_1;
  _.$_$.h1 = WriterScope;
  _.$_$.i1 = cancel;
  _.$_$.j1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map
