(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.r9;
  var isObject = kotlin_kotlin.$_$.l7;
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var plus = kotlin_kotlin.$_$.k6;
  var get = kotlin_kotlin.$_$.h6;
  var fold = kotlin_kotlin.$_$.g6;
  var minusKey = kotlin_kotlin.$_$.i6;
  var Continuation = kotlin_kotlin.$_$.f6;
  var classMeta = kotlin_kotlin.$_$.w6;
  var setMetadataFor = kotlin_kotlin.$_$.r7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.y5;
  var CoroutineImpl = kotlin_kotlin.$_$.l6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x5;
  var interfaceMeta = kotlin_kotlin.$_$.f7;
  var isInterface = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var toString = kotlin_kotlin.$_$.ha;
  var toString_0 = kotlin_kotlin.$_$.v7;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.q7;
  var hashCode = kotlin_kotlin.$_$.e7;
  var equals = kotlin_kotlin.$_$.y6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p2;
  var Companion_getInstance = kotlin_kotlin.$_$.y2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.x9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.b6;
  var Key_getInstance = kotlin_kotlin.$_$.s2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.a6;
  var get_0 = kotlin_kotlin.$_$.c6;
  var minusKey_0 = kotlin_kotlin.$_$.d6;
  var ContinuationInterceptor = kotlin_kotlin.$_$.e6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var Enum = kotlin_kotlin.$_$.h9;
  var startCoroutine = kotlin_kotlin.$_$.m6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.da;
  var Long = kotlin_kotlin.$_$.n9;
  var intercepted = kotlin_kotlin.$_$.z5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x2;
  var RuntimeException = kotlin_kotlin.$_$.q9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.q6;
  var Error_0 = kotlin_kotlin.$_$.i9;
  var Error_init_$Init$ = kotlin_kotlin.$_$.i1;
  var Element = kotlin_kotlin.$_$.j6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ga;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var CancellationException = kotlin_kotlin.$_$.w5;
  var ArrayList = kotlin_kotlin.$_$.c3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var anyToString = kotlin_kotlin.$_$.o6;
  var UnsupportedOperationException = kotlin_kotlin.$_$.u9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var addSuppressed = kotlin_kotlin.$_$.v9;
  var fillArrayVal = kotlin_kotlin.$_$.a7;
  var fill = kotlin_kotlin.$_$.g4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var fill$default = kotlin_kotlin.$_$.f;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var NoSuchElementException = kotlin_kotlin.$_$.o9;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var IllegalStateException = kotlin_kotlin.$_$.l9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var Unit = kotlin_kotlin.$_$.t9;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var toLong = kotlin_kotlin.$_$.t7;
  var arrayIterator = kotlin_kotlin.$_$.p6;
  var copyOf = kotlin_kotlin.$_$.x3;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.fa;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var arrayCopy = kotlin_kotlin.$_$.o3;
  var toLongOrNull = kotlin_kotlin.$_$.z8;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.b1;
  var coerceIn = kotlin_kotlin.$_$.a8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.pf(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.lf(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, undefined, [Element], undefined, undefined, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, undefined, [Job, ParentJob], undefined, undefined, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], undefined, undefined, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], undefined, undefined, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, undefined, undefined, undefined, [0]);
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.dh(value, idempotent) : $handler(value, idempotent);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted], undefined, undefined, []);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask, undefined, undefined, undefined, []);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation], undefined, undefined, []);
  setMetadataFor(Active, 'Active', objectMeta, undefined, [NotCompleted], undefined, undefined, []);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], undefined, undefined, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally, undefined, undefined, undefined, []);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor], undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key_1, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement, undefined, undefined, undefined, []);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum, undefined, undefined, undefined, []);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().uk(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0, undefined, undefined, undefined, []);
  setMetadataFor(Key_2, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, undefined, [ChildHandle], undefined, undefined, []);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Empty, 'Empty', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], undefined, undefined, []);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete], undefined, undefined, []);
  setMetadataFor(Finishing, 'Finishing', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle], undefined, undefined, []);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], undefined, undefined, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, undefined, undefined, undefined, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Key_3, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(Itr, 'Itr', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive, undefined, undefined, undefined, []);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement, undefined, undefined, undefined, []);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive, undefined, undefined, undefined, []);
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.ls(cause) : $handler(cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, undefined, [SendChannel], undefined, undefined, [1]);
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.pf(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send, undefined, undefined, undefined, []);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send, undefined, undefined, undefined, []);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement, undefined, undefined, undefined, []);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Factory, 'Factory', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Failed, 'Failed', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException, undefined, undefined, undefined, []);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, undefined, [CoroutineScope, SendChannel], undefined, undefined, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], undefined, undefined, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, undefined, undefined, undefined, [1]);
  setMetadataFor($emitAllImplCOROUTINE$5, '$emitAllImplCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta, undefined, undefined, undefined, undefined, []);
  function fuse$default(context, capacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0)) {
      Factory_getInstance();
      capacity = -3;
    }
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return $handler == null ? this.jy(context, capacity, onBufferOverflow) : $handler(context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, FusibleFlow], undefined, undefined, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot, undefined, undefined, undefined, []);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, undefined, [FusibleFlow], undefined, undefined, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($invokeSafelyCOROUTINE$9, '$invokeSafelyCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($onSubscriptionCOROUTINE$12, '$onSubscriptionCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1, 0]);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ReadonlySharedFlow, 'ReadonlySharedFlow', classMeta, undefined, [FusibleFlow], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(SubscribedSharedFlow, 'SubscribedSharedFlow', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(single$slambda, 'single$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($singleCOROUTINE$18, '$singleCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation], undefined, undefined, []);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(Symbol, 'Symbol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CloseableCoroutineDispatcher, 'CloseableCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue, undefined, undefined, undefined, []);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.fe(parentContext.j3(Key_getInstance_3()));
    }
    this.ie_1 = parentContext.q3(this);
  }
  AbstractCoroutine.prototype.f3 = function () {
    return this.ie_1;
  };
  AbstractCoroutine.prototype.je = function () {
    return this.ie_1;
  };
  AbstractCoroutine.prototype.ke = function () {
    return JobSupport.prototype.ke.call(this);
  };
  AbstractCoroutine.prototype.le = function (value) {
  };
  AbstractCoroutine.prototype.me = function (cause, handled) {
  };
  AbstractCoroutine.prototype.ne = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.oe = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.me(state.pe_1, state.re());
    } else {
      this.le((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.g3 = function (result) {
    var state = this.se(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.te(state);
  };
  AbstractCoroutine.prototype.te = function (state) {
    return this.ue(state);
  };
  AbstractCoroutine.prototype.ve = function (exception) {
    handleCoroutineException(this.ie_1, exception);
  };
  AbstractCoroutine.prototype.we = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ie_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.we.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.we.call(this);
  };
  AbstractCoroutine.prototype.xe = function (start, receiver, block) {
    start.af(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.cg() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.xe(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.cg() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.xe(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.ag = function (exception) {
    handleCoroutineException(this.ie_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.jg_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.gf = function () {
    startCoroutineCancellable_0(this.jg_1, this);
  };
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sg_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.sg_1.tg(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.xg = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.bh_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.gf = function () {
    startCoroutineCancellable_0(this.bh_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.ih(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.lh_1 = handle;
  }
  DisposeOnCancel.prototype.mh = function (cause) {
    return this.lh_1.nh();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.lh_1 + ']';
  };
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.ih(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.uh();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.bi();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.ci_1 = node;
  }
  RemoveOnCancel.prototype.mh = function (cause) {
    this.ci_1.gi();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.ci_1 + ']';
  };
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.df();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ii_1)) {
      var tmp_0 = $this.wh_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).hi();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.wh_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.ji(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.f3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.yh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.yh_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.yh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.yh_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.f3().j3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.mf(true, false, tmp$ret$1, 2, null);
    $this.ai_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.wh_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ki($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.li();
    $this.mi(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.zh_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.ri()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.ni(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.pe_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.zh_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.ii_1, onCancellation, idempotent);
          if (!$this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.vi_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.li();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.wh_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.xh_1 = this.wh_1.f3();
    this.yh_1 = atomic$int$1(0);
    this.zh_1 = atomic$ref$1(Active_getInstance());
    this.ai_1 = null;
  }
  CancellableContinuationImpl.prototype.xi = function () {
    return this.wh_1;
  };
  CancellableContinuationImpl.prototype.f3 = function () {
    return this.xh_1;
  };
  CancellableContinuationImpl.prototype.df = function () {
    return this.zh_1.kotlinx$atomicfu$value;
  };
  CancellableContinuationImpl.prototype.ef = function () {
    var tmp = this.df();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.ch = function () {
    var tmp = this.df();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.yi = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ef()) {
      handle.nh();
      this.ai_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.bi = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.zh_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.vi_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.li();
      return false;
    }
    this.yh_1.kotlinx$atomicfu$value = 0;
    this.zh_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.zi = function () {
    return this.df();
  };
  CancellableContinuationImpl.prototype.aj = function (takenState, cause) {
    var tmp0_loop = this.zh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.bj();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.cj(null, null, null, null, cause, 15, null);
            if (this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.dj(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.mi = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.zh_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.ej(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.ii_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.fj = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.mi(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.ej = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.f3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.ni = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.f3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.gj = function (parent) {
    return parent.hf();
  };
  CancellableContinuationImpl.prototype.hj = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.ai_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.df();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.pe_1, this);
    if (get_isCancellableMode(this.ii_1)) {
      var job = this.f3().j3(Key_getInstance_3());
      if (!(job == null) ? !job.ke() : false) {
        var cause = job.hf();
        this.aj(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ij(state);
  };
  CancellableContinuationImpl.prototype.g3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.ii_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.kh = function (value, onCancellation) {
    return resumeImpl(this, value, this.ii_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.ih = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.zh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.jj()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pe_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.ti_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.bj()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.wi_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.cj(null, cancelHandler, null, null, null, 29, null);
              if (this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.zh_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.li = function () {
    var tmp0_elvis_lhs = this.ai_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.nh();
    this.ai_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.dh = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.fh = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.gh = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.hh = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ii_1);
  };
  CancellableContinuationImpl.prototype.jh = function (_this__u8e3s4, value) {
    var tmp = this.wh_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ph_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.ii_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.ij = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.si_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.kj = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.kj.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.wh_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.we() + '(' + toDebugString(this.wh_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.we = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.si_1 = result;
    this.ti_1 = cancelHandler;
    this.ui_1 = onCancellation;
    this.vi_1 = idempotentResume;
    this.wi_1 = cancelCause;
  }
  CompletedContinuation.prototype.bj = function () {
    return !(this.wi_1 == null);
  };
  CompletedContinuation.prototype.dj = function (cont, cause) {
    var tmp0_safe_receiver = this.ti_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ej(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.ui_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ni(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.nj = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.cj = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.si_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.ti_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.ui_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.vi_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.wi_1;
    return this.nj(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.si_1) + ', cancelHandler=' + this.ti_1 + ', onCancellation=' + this.ui_1 + ', idempotentResume=' + toString(this.vi_1) + ', cancelCause=' + this.wi_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.si_1 == null ? 0 : hashCode(this.si_1);
    result = imul(result, 31) + (this.ti_1 == null ? 0 : hashCode(this.ti_1)) | 0;
    result = imul(result, 31) + (this.ui_1 == null ? 0 : hashCode(this.ui_1)) | 0;
    result = imul(result, 31) + (this.vi_1 == null ? 0 : hashCode(this.vi_1)) | 0;
    result = imul(result, 31) + (this.wi_1 == null ? 0 : hashCode(this.wi_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.si_1, tmp0_other_with_cast.si_1))
      return false;
    if (!equals(this.ti_1, tmp0_other_with_cast.ti_1))
      return false;
    if (!equals(this.ui_1, tmp0_other_with_cast.ui_1))
      return false;
    if (!equals(this.vi_1, tmp0_other_with_cast.vi_1))
      return false;
    if (!equals(this.wi_1, tmp0_other_with_cast.wi_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.oj_1 = handler;
  }
  InvokeOnCancel.prototype.mh = function (cause) {
    this.oj_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.oj_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xj_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.xj_1.tg(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.fe(parent);
  }
  CompletableDeferredImpl.prototype.of = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.xg = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  CompletableDeferredImpl.prototype.ak = function (value) {
    return this.bk(value);
  };
  CompletableDeferredImpl.prototype.ck = function (exception) {
    return this.bk(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.pe_1 = cause;
    this.qe_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.re = function () {
    return this.qe_1.kotlinx$atomicfu$value;
  };
  CompletedExceptionally.prototype.jj = function () {
    return this.qe_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.pe_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.qi_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.ri = function () {
    return this.qi_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.fk_1 = result;
    this.gk_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.fk_1) + ', onCancellation=' + this.gk_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.fk_1 == null ? 0 : hashCode(this.fk_1);
    result = imul(result, 31) + hashCode(this.gk_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.fk_1, tmp0_other_with_cast.fk_1))
      return false;
    if (!equals(this.gk_1, tmp0_other_with_cast.gk_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.pe_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.ik = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.h3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.i3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.kk();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.j3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.lk(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.nk_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.nk_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.nk_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.nk_1 === tmp0_other_with_cast.nk_1))
      return false;
    return true;
  };
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.je().j3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.pf(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function CoroutineScope() {
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.je = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.j3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.q3(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function MainScope() {
    return new ContextScope(SupervisorJob$default(null, 1, null).q3(Dispatchers_getInstance().sk()));
  }
  function coroutineScope(block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.f3(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    return tmp$ret$0;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.af = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.w3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.cg = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $cont) {
    if (timeMillis.v(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.v(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.f3()).tk(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.hj();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.j3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.wk_1 = new Long(0, 0);
    this.xk_1 = false;
    this.yk_1 = null;
  }
  EventLoop.prototype.zk = function () {
    var tmp0_elvis_lhs = this.yk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.dl();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.lj();
    return true;
  };
  EventLoop.prototype.el = function (task) {
    var tmp0_elvis_lhs = this.yk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.yk_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.fl(task);
  };
  EventLoop.prototype.gl = function () {
    return this.wk_1.v(delta(this, true)) >= 0;
  };
  EventLoop.prototype.hl = function () {
    var tmp0_safe_receiver = this.yk_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.il();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.jl = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.wk_1 = tmp0_this.wk_1.r5(delta(this, unconfined));
    if (!unconfined)
      this.xk_1 = true;
  };
  EventLoop.prototype.kl = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.wk_1 = tmp0_this.wk_1.s5(delta(this, unconfined));
    if (this.wk_1.v(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.xk_1) {
      this.ll();
    }
  };
  EventLoop.prototype.ll = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ml_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.nl = function () {
    var tmp0_elvis_lhs = this.ml_1.pl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ml_1.ql(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.rl = function () {
    return null;
  };
  NonDisposableHandle.prototype.nh = function () {
  };
  NonDisposableHandle.prototype.tf = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.j3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.ke())
      throw _this__u8e3s4.hf();
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.pf(CancellationException_init_$Create$_0(message, cause));
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.kf(tmp$ret$1);
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.j3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.pf(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.sl_1 = isActive;
  }
  Empty.prototype.ke = function () {
    return this.sl_1;
  };
  Empty.prototype.tl = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.sl_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.ke = function () {
    return true;
  };
  NodeList.prototype.tl = function () {
    return this;
  };
  NodeList.prototype.xl = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.qb('List{');
    tmp0_apply.qb(state);
    tmp0_apply.qb('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.di_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.qb(', ');
        }
        tmp0_apply.pb(tmp0__anonymous__q1qw7t);
      }
      cur = cur.di_1;
    }
    tmp0_apply.qb(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.xl('Active') : LinkedListHead.prototype.toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.im = function () {
    var tmp = this.hm_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.ke = function () {
    return true;
  };
  JobNode.prototype.tl = function () {
    return null;
  };
  JobNode.prototype.nh = function () {
    return this.im().nf(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.im()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.nm_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.nm_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pe_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.om();
    var exceptions = state.pm(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.ag(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).jj();
      }
    }
    if (!wasCancelling) {
      $this.xf(finalException);
    }
    $this.oe(finalState);
    var casSuccess = $this.de_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.k()) {
      if (state.om()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ne() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.d();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.f(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.d();
        while (tmp0_iterator_0.l()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.c() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.c());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.d();
    while (tmp0_iterator.l()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.de_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.xf(null);
    $this.oe(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.cf();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.nh();
      $this.bf(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pe_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.ve(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.tl();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.xf(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.di_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.di_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ve(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.yf())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.cf();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.tf(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.di_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.di_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ve(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.sl_1)
        return 0;
      if (!$this.de_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.gf();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.de_1.atomicfu$compareAndSet(state, state.qm_1))
          return -1;
        $this.gf();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.hm_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.df() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.bm(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.sl_1 ? list : new InactiveNodeList(list);
    $this.de_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.jm(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.di_1;
    var list = tmp$ret$0;
    $this.de_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.df();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.kf(tmp$ret$1));
    tmp$ret$2 = cancellable.hj();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.df();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.rm();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ne() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).vf();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.df();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.sm())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.om();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.tm(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.um();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.km_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.ke()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.tl();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.de_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.rm())
      return get_COMPLETING_ALREADY();
    finishing.vm(true);
    if (!(finishing === state)) {
      if (!$this.de_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.om();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.tm(tmp0_safe_receiver.pe_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.um();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pe_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.tl();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.an_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.mf(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.ue(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.fi_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.ei_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.di_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.fi_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.om() ? 'Cancelling' : state.rm() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.ke() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.km_1 = list;
    this.lm_1 = atomic$boolean$1(isCompleting);
    this.mm_1 = atomic$ref$1(rootCause);
    this.nm_1 = atomic$ref$1(null);
  }
  Finishing.prototype.tl = function () {
    return this.km_1;
  };
  Finishing.prototype.vm = function (value) {
    this.lm_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.rm = function () {
    return this.lm_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.bn = function (value) {
    this.mm_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.um = function () {
    return this.mm_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.sm = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.om = function () {
    return !(this.um() == null);
  };
  Finishing.prototype.ke = function () {
    return this.um() == null;
  };
  Finishing.prototype.pm = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.um();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.j7(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.tm = function (exception) {
    var rootCause = this.um();
    if (rootCause == null) {
      this.bn(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.om() + ', completing=' + this.rm() + ', rootCause=' + this.um() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.km_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.gn_1 = parent;
    this.hn_1 = state;
    this.in_1 = child;
    this.jn_1 = proposedUpdate;
  }
  ChildCompletion.prototype.mh = function (cause) {
    continueCompleting(this.gn_1, this.hn_1, this.in_1, this.jn_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.qn_1 = job;
  }
  AwaitContinuation.prototype.gj = function (parent) {
    var state = this.qn_1.df();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.um();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.pe_1;
    return parent.hf();
  };
  AwaitContinuation.prototype.we = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.yi();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.kf(tmp$ret$1));
    tmp$ret$2 = cont.hj();
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.de_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.ee_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.q = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.bf = function (value) {
    this.ee_1.kotlinx$atomicfu$value = value;
  };
  JobSupport.prototype.cf = function () {
    return this.ee_1.kotlinx$atomicfu$value;
  };
  JobSupport.prototype.fe = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.bf(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.ff();
    var handle = parent.wf(this);
    this.bf(handle);
    if (this.ef()) {
      handle.nh();
      this.bf(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.df = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.de_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.rn(this);
    }
  };
  JobSupport.prototype.ke = function () {
    var state = this.df();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.ke();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.ef = function () {
    var tmp = this.df();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.ch = function () {
    var state = this.df();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.om();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobSupport.prototype.ff = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.df();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.gf = function () {
  };
  JobSupport.prototype.hf = function () {
    var state = this.df();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.um();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.if(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.jf(state.pe_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.if = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ne() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.jf = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.if(_this__u8e3s4, message);
  };
  JobSupport.prototype.kf = function (handler) {
    return this.lf(false, true, handler);
  };
  JobSupport.prototype.lf = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.df();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.sl_1) {
            if (this.de_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.tl();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.um();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.rm();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pe_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.ek = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.f3();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.nf = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.df();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.de_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.tl() == null)) {
            node.gi();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.of = function () {
    return false;
  };
  JobSupport.prototype.pf = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ne() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.rf(tmp);
  };
  JobSupport.prototype.ne = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.rf = function (cause) {
    this.uf(cause);
  };
  JobSupport.prototype.sf = function (parentJob) {
    this.uf(parentJob);
  };
  JobSupport.prototype.tf = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.uf(cause) ? this.zf() : false;
  };
  JobSupport.prototype.sn = function (cause) {
    return this.uf(cause);
  };
  JobSupport.prototype.uf = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.of()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.ue(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.vf = function () {
    var state = this.df();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.um();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.pe_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.bk = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.df();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.ue(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.se = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.df();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.wf = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.mf(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.ve = function (exception) {
    throw exception;
  };
  JobSupport.prototype.xf = function (cause) {
  };
  JobSupport.prototype.yf = function () {
    return false;
  };
  JobSupport.prototype.zf = function () {
    return true;
  };
  JobSupport.prototype.ag = function (exception) {
    return false;
  };
  JobSupport.prototype.oe = function (state) {
  };
  JobSupport.prototype.ue = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.bg() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.bg = function () {
    return this.we() + '{' + stateString(this, this.df()) + '}';
  };
  JobSupport.prototype.we = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.tg = function ($cont) {
    $l$loop: while (true) {
      var state = this.df();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.pe_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.qm_1 = list;
  }
  InactiveNodeList.prototype.tl = function () {
    return this.qm_1;
  };
  InactiveNodeList.prototype.ke = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.qm_1.xl('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.an_1 = childJob;
  }
  ChildHandleNode.prototype.rl = function () {
    return this.im();
  };
  ChildHandleNode.prototype.mh = function (cause) {
    return this.an_1.sf(this.im());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  ChildHandleNode.prototype.tf = function (cause) {
    return this.im().tf(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.xn_1 = handler;
    this.yn_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.mh = function (cause) {
    if (this.yn_1.atomicfu$compareAndSet(0, 1))
      this.xn_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.do_1 = handler;
  }
  InvokeOnCompletion.prototype.mh = function (cause) {
    return this.do_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.io_1 = continuation;
  }
  ResumeOnCompletion.prototype.mh = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.io_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.g3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jo_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.oo_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.mh = function (cause) {
    var state = this.im().df();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.oo_1;
      var tmp1_resumeWithException = state.pe_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.g3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.oo_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.g3(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function IncompleteStateBox(state) {
    this.jo_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.to_1 = child;
  }
  ChildContinuation.prototype.mh = function (cause) {
    this.to_1.fj(this.to_1.gj(this.im()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  function handlesException($this) {
    var tmp = $this.cf();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.im();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.zf())
        return true;
      var tmp_1 = parentJob.cf();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.im();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.fe(parent);
    this.wo_1 = handlesException(this);
  }
  JobImpl.prototype.of = function () {
    return true;
  };
  JobImpl.prototype.zf = function () {
    return this.wo_1;
  };
  JobImpl.prototype.dk = function () {
    return this.bk(Unit_getInstance());
  };
  JobImpl.prototype.ck = function (exception) {
    return this.bk(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.bp_1 = handle;
  }
  DisposeOnCompletion.prototype.mh = function (cause) {
    return this.bp_1.nh();
  };
  DisposeOnCompletion.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.ep();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.ep = function () {
    var main = Dispatchers_getInstance().sk();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.dp();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.tf = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, Object.create(TimeoutCancellationException.prototype));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.ip_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  function withTimeout(timeMillis, block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    if (timeMillis.v(new Long(0, 0)) <= 0)
      throw TimeoutCancellationException_init_$Create$('Timed out immediately');
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withTimeout.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    tmp$ret$0 = setupTimeout(new TimeoutCoroutine(timeMillis, tmp0__anonymous__q1qw7t), block);
    return tmp$ret$0;
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.mp_1;
    var context = cont.f3();
    disposeOnCompletion(coroutine, get_delay(context).uk(coroutine.rp_1, coroutine, coroutine.ie_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.f3(), uCont);
    this.rp_1 = time;
  }
  TimeoutCoroutine.prototype.lj = function () {
    this.sn(TimeoutCancellationException_0(this.rp_1, this));
  };
  TimeoutCoroutine.prototype.we = function () {
    return ScopeCoroutine.prototype.we.call(this) + '(timeMillis=' + toString_0(this.rp_1) + ')';
  };
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.ik = function (context) {
    return false;
  };
  Unconfined.prototype.jk = function (context, block) {
    var yieldContext = context.j3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.up_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.yp_1 == null))
        throw recoverStackTrace_0(result.zp());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.aq_1, receive)) {
          removeReceiveOnCancel($this.aq_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.aq_1.fq();
        $this.bq_1 = result;
        if (result instanceof Closed) {
          if (result.yp_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.g3(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.zp();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.g3(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.aq_1.gq_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.f3());
          }
          cancellable.kh(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.hj();
    return tmp$ret$5;
  }
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.gq_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.gq_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.fq();
        if (result instanceof Closed) {
          receive.oq(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.pq((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.kh(tmp_0, receive.tq((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.hj();
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.uq(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.vq();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.ih(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.xq_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.wq_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.mh = function (cause) {
    if (this.wq_1.gi()) {
      this.xq_1.yq();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.wq_1 + ']';
  };
  function Itr(channel) {
    this.aq_1 = channel;
    this.bq_1 = get_POLL_FAILED();
  }
  Itr.prototype.zq = function ($cont) {
    if (!(this.bq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.bq_1);
    this.bq_1 = this.aq_1.fq();
    if (!(this.bq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.bq_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.e = function () {
    var result = this.bq_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.zp());
    if (!(result === get_POLL_FAILED())) {
      this.bq_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.mq_1 = cont;
    this.nq_1 = receiveMode;
  }
  ReceiveElement.prototype.pq = function (value) {
    var tmp0_subject = this.nq_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().br(value)) : value;
  };
  ReceiveElement.prototype.cr = function (value, otherOp) {
    var tmp = this.pq(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.mq_1.fh(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.er_1, this.tq(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.gr();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveElement.prototype.hr = function (value) {
    return this.mq_1.hh(get_RESUME_TOKEN());
  };
  ReceiveElement.prototype.oq = function (closed) {
    if (this.nq_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = this.mq_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().ir(closed.yp_1);
      var tmp1_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
      tmp0_resume.g3(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = this.mq_1;
      var tmp3_resumeWithException = closed.zp();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
      tmp2_resumeWithException.g3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.nq_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.pr_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.tq = function (value) {
    return bindCancellationFun(this.pr_1, value, this.mq_1.f3());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.tr_1 = iterator;
    this.ur_1 = cont;
  }
  ReceiveHasNext.prototype.cr = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.ur_1.fh(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.er_1, this.tq(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.gr();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.hr = function (value) {
    this.tr_1.bq_1 = value;
    this.ur_1.hh(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.oq = function (closed) {
    var tmp;
    if (closed.yp_1 == null) {
      tmp = this.ur_1.eh(false, null, 2, null);
    } else {
      tmp = this.ur_1.gh(closed.zp());
    }
    var token = tmp;
    if (!(token == null)) {
      this.tr_1.bq_1 = closed;
      this.ur_1.hh(token);
    }
  };
  ReceiveHasNext.prototype.tq = function (value) {
    var tmp0_safe_receiver = this.tr_1.aq_1.gq_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.ur_1.f3());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.fq = function () {
    while (true) {
      var tmp0_elvis_lhs = this.xr();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.bs(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.cs();
        return send.ds();
      }
      send.es();
    }
  };
  AbstractChannel.prototype.fs = function () {
    return !(this.gs() == null) ? this.wr() : false;
  };
  AbstractChannel.prototype.hs = function ($cont) {
    var result = this.fq();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $cont);
  };
  AbstractChannel.prototype.uq = function (receive) {
    var tmp;
    if (this.vr()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.hq_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.ei_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.bm(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.hq_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.ei_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.wr();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.bm(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.is = function ($cont) {
    var result = this.fq();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().ir(result.yp_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.br((result == null ? true : isObject(result)) ? result : THROW_CCE());
      }
      tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $cont);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return new ChannelResult(tmp_1.js_1);
  };
  AbstractChannel.prototype.pf = function (cause) {
    if (this.fs())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.ks(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.ks = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.ls(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.ms(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.ms = function (wasClosed) {
    var tmp0_elvis_lhs = this.ns();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.ei_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.gi()) {
        previous.dm();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.os(list, closed);
  };
  AbstractChannel.prototype.os = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.ps(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.f(i);
              tmp1__anonymous__uwfjfc.ps(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.d = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.qs = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.qs.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.yq();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.vq = function () {
  };
  AbstractChannel.prototype.yq = function () {
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.hq_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.di_1;
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.ss();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.at();
  }
  function sendSuspend($this, element, $cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.gq_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.gq_1);
          var enqueueResult = $this.ws(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              if (enqueueResult === get_ENQUEUE_FAILED()) {
              } else {
                if (enqueueResult instanceof Receive) {
                } else {
                  var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
        var offerResult = $this.ts(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.g3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp$ret$0 = Unit_getInstance();
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              var tmp1_error = 'offerInternal returned ' + toString_0(offerResult);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.hj();
    return tmp$ret$3;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.at();
    var tmp0_safe_receiver = $this.gq_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.g3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    }
    var tmp$ret$4;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure_0 = Companion_getInstance();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.g3(tmp$ret$3);
    tmp$ret$4 = Unit_getInstance();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.iq_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.iq_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.ei_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.gi()) {
        previous.dm();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.oq(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.f(i);
              tmp2__anonymous__z9zvc9.oq(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.ys(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.hq_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.di_1;
    var head = tmp$ret$0;
    if (head === $this.hq_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.hq_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.ei_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.hq_1;
    var cur = tmp0_forEach.di_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.di_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.et_1 = element;
  }
  SendBuffered.prototype.ds = function () {
    return this.et_1;
  };
  SendBuffered.prototype.bs = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.cs = function () {
  };
  SendBuffered.prototype.ps = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.et_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.gq_1 = onUndeliveredElement;
    this.hq_1 = new LinkedListHead();
    this.iq_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.ts = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.qs();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.cr(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.hr(element);
        return receive.jr();
      }
    }
  };
  AbstractSendChannel.prototype.ns = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.hq_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.ei_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.gs = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.hq_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.di_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.xr = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.hq_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.di_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.cm();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.ft = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.hq_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.ei_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.bm(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.us = function (element, $cont) {
    if (this.ts(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $cont);
  };
  AbstractSendChannel.prototype.vs = function (element) {
    var result = this.ts(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().br(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.ns();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().gt();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().ir(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().ir(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.ws = function (send) {
    if (this.rs()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.hq_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.ei_1;
        if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
          return tmp1__anonymous__uwfjfc;
        tmp$ret$0 = true;
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.bm(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.hq_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.ei_1;
        if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
          return tmp3__anonymous__ufb84q;
        tmp$ret$2 = true;
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        tmp$ret$4 = this.ss();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.bm(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  AbstractSendChannel.prototype.ls = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.hq_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.ei_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.bm(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.hq_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.ei_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.ys = function (closed) {
  };
  AbstractSendChannel.prototype.qs = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.hq_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.di_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.cm();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.zs();
  };
  AbstractSendChannel.prototype.zs = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.es = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.yp_1 = closeCause;
  }
  Closed.prototype.at = function () {
    var tmp0_elvis_lhs = this.yp_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.zp = function () {
    var tmp0_elvis_lhs = this.yp_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.jr = function () {
    return this;
  };
  Closed.prototype.ds = function () {
    return this;
  };
  Closed.prototype.bs = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.cs = function () {
  };
  Closed.prototype.cr = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.hr = function (value) {
  };
  Closed.prototype.ps = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.yp_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.jr = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.prototype.tq = function (value) {
    return null;
  };
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.kt_1 = pollResult;
    this.lt_1 = cont;
  }
  SendElement.prototype.ds = function () {
    return this.kt_1;
  };
  SendElement.prototype.bs = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.lt_1.dh(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.er_1);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.gr();
    }
    return get_RESUME_TOKEN();
  };
  SendElement.prototype.cs = function () {
    return this.lt_1.hh(get_RESUME_TOKEN());
  };
  SendElement.prototype.ps = function (closed) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = this.lt_1;
    var tmp1_resumeWithException = closed.at();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    tmp0_resumeWithException.g3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  SendElement.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.ds() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.rt_1 = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype.gi = function () {
    if (!SendElement.prototype.gi.call(this))
      return false;
    this.es();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.es = function () {
    callUndeliveredElement(this.rt_1, this.ds(), this.lt_1.f3());
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.vt_1) {
      $this.au_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.wt_1;
    var tmp0 = tmp0_subject.w3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.vt_1) {
      ensureCapacity($this, currentSize);
      $this.yt_1[($this.zt_1 + currentSize | 0) % $this.yt_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.yt_1[$this.zt_1 % $this.yt_1.length | 0] = null;
      $this.yt_1[($this.zt_1 + currentSize | 0) % $this.yt_1.length | 0] = element;
      $this.zt_1 = ($this.zt_1 + 1 | 0) % $this.yt_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.yt_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.yt_1.length, 2);
      var tmp1_min = $this.vt_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.yt_1[($this.zt_1 + i | 0) % $this.yt_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.yt_1 = newBuffer;
      $this.zt_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.vt_1 = capacity;
    this.wt_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.vt_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.vt_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.xt_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.vt_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.yt_1 = tmp$ret$3;
    this.zt_1 = 0;
    this.au_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.vr = function () {
    return false;
  };
  ArrayChannel.prototype.wr = function () {
    return this.au_1.kotlinx$atomicfu$value === 0;
  };
  ArrayChannel.prototype.rs = function () {
    return false;
  };
  ArrayChannel.prototype.ss = function () {
    return this.au_1.kotlinx$atomicfu$value === this.vt_1 ? this.wt_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  ArrayChannel.prototype.fs = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.fs.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.ts = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.au_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.ns();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.qs();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.au_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).cr(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.au_1.kotlinx$atomicfu$value = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).hr(element);
    return ensureNotNull(receive).jr();
  };
  ArrayChannel.prototype.ws = function (send) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.ws.call(this, send);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.fq = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    var size = this.au_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.ns();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.yt_1[this.zt_1];
    this.yt_1[this.zt_1] = null;
    this.au_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.vt_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.xr();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).bs(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).ds();
          break loop;
        }
        ensureNotNull(send).es();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.au_1.kotlinx$atomicfu$value = size;
      this.yt_1[(this.zt_1 + size | 0) % this.yt_1.length | 0] = replacement;
    }
    this.zt_1 = (this.zt_1 + 1 | 0) % this.yt_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).cs();
    }
    return result;
  };
  ArrayChannel.prototype.uq = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.uq.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.ms = function (wasClosed) {
    var onUndeliveredElement = this.gq_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.xt_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.au_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.yt_1[this.zt_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.yt_1[this.zt_1] = get_EMPTY();
        this.zt_1 = (this.zt_1 + 1 | 0) % this.yt_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.au_1.kotlinx$atomicfu$value = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.ms.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.zs = function () {
    return '(buffer:capacity=' + this.vt_1 + ',size=' + this.au_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.bu_1 = 2147483647;
    this.cu_1 = 0;
    this.du_1 = -1;
    this.eu_1 = -2;
    this.fu_1 = -3;
    this.gu_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.hu_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().hu_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).iu_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).iu_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iu_1;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.iu_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.iu_1, other.iu_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.iu_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.iu_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.ar_1 = new Failed();
  }
  Companion.prototype.br = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.gt = function () {
    return _ChannelResult___init__impl__siwsuf(this.ar_1);
  };
  Companion.prototype.ir = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.js_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.js_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.js_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.js_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.js_1, other);
  };
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.mu_1 = _channel;
  }
  ChannelCoroutine.prototype.ls = function (cause) {
    return this.mu_1.ls(cause);
  };
  ChannelCoroutine.prototype.d = function () {
    return this.mu_1.d();
  };
  ChannelCoroutine.prototype.hs = function ($cont) {
    return this.mu_1.hs($cont);
  };
  ChannelCoroutine.prototype.is = function ($cont) {
    var tmp = this.mu_1.is($cont);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.js_1);
  };
  ChannelCoroutine.prototype.us = function (element, $cont) {
    return this.mu_1.us(element, $cont);
  };
  ChannelCoroutine.prototype.vs = function (element) {
    return this.mu_1.vs(element);
  };
  ChannelCoroutine.prototype.pf = function (cause) {
    if (this.ch())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ne() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.rf(tmp);
  };
  ChannelCoroutine.prototype.rf = function (cause) {
    var exception = this.jf(cause, null, 1, null);
    this.mu_1.pf(exception);
    this.sn(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.pf(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.ru_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.gq_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.ru_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.qu_1 = new NoOpLock();
    this.ru_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.vr = function () {
    return false;
  };
  ConflatedChannel.prototype.wr = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.ru_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.rs = function () {
    return false;
  };
  ConflatedChannel.prototype.ss = function () {
    return false;
  };
  ConflatedChannel.prototype.ts = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.ns();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.ru_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.qs();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).cr(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).hr(element);
    return ensureNotNull(receive).jr();
  };
  ConflatedChannel.prototype.fq = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    if (this.ru_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.ns();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.ru_1;
    this.ru_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.ms = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.ms.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.uq = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.uq.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.zs = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.qu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.ru_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.vr = function () {
    return true;
  };
  LinkedListChannel.prototype.wr = function () {
    return true;
  };
  LinkedListChannel.prototype.rs = function () {
    return false;
  };
  LinkedListChannel.prototype.ss = function () {
    return false;
  };
  LinkedListChannel.prototype.ts = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.ts.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.ft(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.os = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.gq_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.et_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.ps(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.f(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.gq_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.et_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.ps(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    var channel = Channel$default(capacity, onBufferOverflow, null, 4, null);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.kf(onCompletion);
    }
    coroutine.xe(start, coroutine, block);
    return coroutine;
  }
  function produce$default(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 8) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    if (!(($mask0 & 16) === 0))
      onCompletion = null;
    return produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block);
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  ProducerCoroutine.prototype.ke = function () {
    return ChannelCoroutine.prototype.ke.call(this);
  };
  ProducerCoroutine.prototype.zu = function (value) {
    this.mu_1.xs(null, 1, null);
  };
  ProducerCoroutine.prototype.le = function (value) {
    return this.zu(value instanceof Unit ? value : THROW_CCE());
  };
  ProducerCoroutine.prototype.me = function (cause, handled) {
    var processed = this.mu_1.ls(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.ie_1, cause);
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.vr = function () {
    return true;
  };
  RendezvousChannel.prototype.wr = function () {
    return true;
  };
  RendezvousChannel.prototype.rs = function () {
    return true;
  };
  RendezvousChannel.prototype.ss = function () {
    return true;
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.dv_1 = block;
  }
  SafeFlow.prototype.ev = function (collector, $cont) {
    return this.dv_1(collector, $cont);
  };
  function emitAll(_this__u8e3s4, channel, $cont) {
    return emitAllImpl(_this__u8e3s4, channel, true, $cont);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $cont) {
    var tmp = new $emitAllImplCOROUTINE$5(_this__u8e3s4, channel, consume, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function $emitAllImplCOROUTINE$5(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ov_1 = _this__u8e3s4;
    this.pv_1 = channel;
    this.qv_1 = consume;
  }
  $emitAllImplCOROUTINE$5.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 11;
            ensureActive_1(this.ov_1);
            this.rv_1 = null;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 9;
            this.dd_1 = 8;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.cd_1 = 7;
              continue $sm;
            }

            this.cd_1 = 3;
            suspendResult = this.pv_1.is(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.tv_1 = suspendResult.js_1;
            suspendResult = new ChannelResult(this.tv_1);
            this.cd_1 = 4;
            continue $sm;
          case 4:
            this.uv_1 = suspendResult.js_1;
            if (_ChannelResult___get_isClosed__impl__mg7kuu(this.uv_1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.uv_1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              this.cd_1 = 7;
              continue $sm;
            } else {
              this.cd_1 = 5;
              continue $sm;
            }

            break;
          case 5:
            this.cd_1 = 6;
            suspendResult = this.ov_1.vv(ChannelResult__getOrThrow_impl_od1axs(this.uv_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.cd_1 = 2;
            continue $sm;
          case 7:
            this.sv_1 = Unit_getInstance();
            this.dd_1 = 11;
            this.cd_1 = 10;
            continue $sm;
          case 8:
            this.dd_1 = 9;
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof Error) {
              var e = this.fd_1;
              var tmp_1 = this;
              this.rv_1 = e;
              throw e;
            } else {
              throw this.fd_1;
            }

            break;
          case 9:
            this.dd_1 = 11;
            var t = this.fd_1;
            if (this.qv_1) {
              cancelConsumed(this.pv_1, this.rv_1);
            }

            throw t;
          case 10:
            if (this.qv_1) {
              cancelConsumed(this.pv_1, this.rv_1);
            }

            return Unit_getInstance();
          case 11:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 11) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ew_1 = _this__u8e3s4;
    this.fw_1 = collector;
  }
  $collectCOROUTINE$6.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            var tmp_0 = this;
            tmp_0.gw_1 = new SafeCollector(this.fw_1, this.f3());
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 4;
            this.cd_1 = 2;
            suspendResult = this.ew_1.ev(this.gw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hw_1 = suspendResult;
            this.dd_1 = 5;
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.gw_1.mw();
            ;
            return Unit_getInstance();
          case 4:
            this.dd_1 = 5;
            var t = this.fd_1;
            this.gw_1.mw();
            ;
            throw t;
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
  function AbstractFlow() {
  }
  AbstractFlow.prototype.fv = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    init_properties_SharedFlow_kt_5sqb47();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_5sqb47();
    // Inline function 'kotlin.require' call
    var tmp0_require = replay >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = extraBufferCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().MAX_VALUE : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.ww_1;
    var tmp1_minOf = $this.vw_1;
    tmp$ret$0 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.xw_1;
    tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
    return tmp$ret$0.s5($this.vw_1).yc();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.xw_1 + $this.yw_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.xw_1;
    tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.xw_1;
    tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = $this.yw_1;
    tmp$ret$1 = tmp2_plus.r5(toLong(tmp3_plus));
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.ax_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.xw_1 >= $this.sw_1 ? $this.ww_1.v($this.vw_1) <= 0 : false) {
      var tmp0_subject = $this.tw_1;
      var tmp0 = tmp0_subject.w3_1;
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.xw_1;
    tmp1_this.xw_1 = tmp2 + 1 | 0;
    if ($this.xw_1 > $this.sw_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.rw_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.vw_1;
      tmp$ret$0 = tmp0_plus.r5(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.ww_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.rw_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.xw_1;
    tmp0_this.xw_1 = tmp1 + 1 | 0;
    if ($this.xw_1 > $this.rw_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.xw_1;
    tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
    tmp.ww_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.uw_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.xw_1;
    tmp0_this.xw_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.r5(new Long(1, 0));
    var newHead = tmp$ret$0;
    if ($this.vw_1.v(newHead) < 0)
      $this.vw_1 = newHead;
    if ($this.ww_1.v(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.ax_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.zw_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.dx_1.v(new Long(0, 0)) >= 0 ? element.dx_1.v(newHead) < 0 : false) {
              element.dx_1 = newHead;
            }
          }
        }
      }
    }
    $this.ww_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.uw_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.r5(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    var tmp0_check = newSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size overflow';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(newSize), null);
    var tmp1_also = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.uw_1 = tmp1_also;
    tmp$ret$2 = tmp1_also;
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = head.r5(toLong(i));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.r5(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $cont) {
    var tmp$ret$9;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.g3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp0_plus.r5(toLong(tmp1_plus));
      var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp2_also);
      var tmp0_this = $this;
      var tmp1 = tmp0_this.yw_1;
      tmp0_this.yw_1 = tmp1 + 1 | 0;
      if ($this.sw_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = tmp2_also;
      tmp$ret$2 = tmp$ret$4;
    }
    tmp$ret$5 = tmp$ret$2;
    var emitter = tmp$ret$5;
    var tmp0_safe_receiver = emitter;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, tmp0_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp2_safe_receiver = r;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp2_safe_receiver.g3(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
    tmp$ret$9 = cancellable.hj();
    return tmp$ret$9;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.gx_1.v(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.uw_1);
    if (!(getBufferAt(buffer, emitter.gx_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.gx_1, get_NO_VALUE());
    cleanupTailLocked($this);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = newMinCollectorIndex.v(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    var newHead = tmp$ret$0;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.v(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.r5(new Long(1, 0));
        setBufferAt(ensureNotNull($this.uw_1), index, null);
      }
       while (inductionVariable.v(newHead) < 0);
    $this.vw_1 = newReplayIndex;
    $this.ww_1 = newMinCollectorIndex;
    $this.xw_1 = newBufferEndIndex.s5(newHead).yc();
    $this.yw_1 = newQueueEndIndex.s5(newBufferEndIndex).yc();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.sw_1 === 0 ? $this.yw_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.uw_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.yw_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
        var tmp2_minus = tmp$ret$0;
        tmp$ret$1 = tmp2_minus.s5(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.yw_1;
      tmp0_this.yw_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.r5(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.v(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.dx_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.r5(new Long(1, 0));
      tmp_0.dx_1 = tmp$ret$0;
      resumes = $this.jx(oldIndex);
      tmp = newValue;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.g3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.dx_1;
    if (index.v(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.sw_1 > 0)
      return new Long(-1, -1);
    if (index.v(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.yw_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.uw_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.hx_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $cont) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.v(new Long(0, 0)) < 0) {
        slot.ex_1 = cancellable;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.g3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      slot.ex_1 = cancellable;
    }
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = cancellable.hj();
    return tmp$ret$4;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.ax_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.zw_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            var tmp$ret$1;
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.ex_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).v(new Long(0, 0)) < 0) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.ex_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.fx_1 = flow;
    this.gx_1 = index;
    this.hx_1 = value;
    this.ix_1 = cont;
  }
  Emitter.prototype.nh = function () {
    return cancelEmitter(this.fx_1, this);
  };
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sx_1 = _this__u8e3s4;
    this.tx_1 = collector;
  }
  $collectCOROUTINE$7.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 13;
            this.ux_1 = this.sx_1.yx();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 12;
            var tmp_0 = this.tx_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.cd_1 = 2;
              suspendResult = this.tx_1.by(this);
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
            var tmp_1 = this;
            tmp_1.wx_1 = this.f3().j3(Key_getInstance_3());
            this.cd_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.cd_1 = 10;
              continue $sm;
            }

            this.cd_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.cd_1 = 8;
              continue $sm;
            }

            this.xx_1 = tryTakeValue(this.sx_1, this.ux_1);
            if (!(this.xx_1 === get_NO_VALUE())) {
              this.cd_1 = 8;
              continue $sm;
            } else {
              this.cd_1 = 6;
              continue $sm;
            }

            break;
          case 6:
            this.cd_1 = 7;
            suspendResult = awaitValue(this.sx_1, this.ux_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.cd_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.wx_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.cd_1 = 9;
            var tmp_2 = this.xx_1;
            suspendResult = this.tx_1.vv((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.cd_1 = 4;
            continue $sm;
          case 10:
            this.vx_1 = Unit_getInstance();
            this.dd_1 = 13;
            this.cd_1 = 11;
            continue $sm;
          case 11:
            this.sx_1.cy(this.ux_1);
            ;
            return Unit_getInstance();
          case 12:
            this.dd_1 = 13;
            var t = this.fd_1;
            this.sx_1.cy(this.ux_1);
            ;
            throw t;
          case 13:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 13) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.rw_1 = replay;
    this.sw_1 = bufferCapacity;
    this.tw_1 = onBufferOverflow;
    this.uw_1 = null;
    this.vw_1 = new Long(0, 0);
    this.ww_1 = new Long(0, 0);
    this.xw_1 = 0;
    this.yw_1 = 0;
  }
  SharedFlowImpl.prototype.dy = function () {
    var tmp = ensureNotNull(this.uw_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.vw_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$0 = tmp0_plus.r5(toLong(tmp1_plus));
    var tmp2_minus = tmp$ret$0;
    tmp$ret$1 = tmp2_minus.s5(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  SharedFlowImpl.prototype.ey = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  SharedFlowImpl.prototype.fv = function (collector, $cont) {
    return this.ey(collector, $cont);
  };
  SharedFlowImpl.prototype.fy = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.g3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    return emitted;
  };
  SharedFlowImpl.prototype.vv = function (value, $cont) {
    if (this.fy(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $cont);
  };
  SharedFlowImpl.prototype.gy = function () {
    var index = this.vw_1;
    if (index.v(this.ww_1) < 0)
      this.ww_1 = index;
    return index;
  };
  SharedFlowImpl.prototype.jx = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.v(this.ww_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.xw_1;
    tmp$ret$0 = head.r5(toLong(tmp0_plus));
    var newMinCollectorIndex = tmp$ret$0;
    if (this.sw_1 === 0 ? this.yw_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.uc();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.ax_1 === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.zw_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.dx_1.v(new Long(0, 0)) >= 0 ? element.dx_1.v(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.dx_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.v(this.ww_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.ax_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.s5(newMinCollectorIndex).yc();
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.yw_1;
      var tmp2_minOf = this.sw_1 - newBufferSize0 | 0;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      tmp = tmp$ret$2;
    } else {
      tmp = this.yw_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.yw_1;
    tmp$ret$3 = tmp3_plus.r5(toLong(tmp4_plus));
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.uw_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.v(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.r5(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.ix_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.hx_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.uc();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.v(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.s5(head).yc();
    if (this.ax_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.vw_1;
    var tmp$ret$6;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.rw_1;
    tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
    var tmp7_minus = tmp$ret$5;
    tmp$ret$6 = tmp6_minus.s5(toLong(tmp7_minus));
    var tmp9_maxOf = tmp$ret$6;
    tmp$ret$7 = tmp8_maxOf.v(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    var newReplayIndex = tmp$ret$7;
    if ((this.sw_1 === 0 ? newReplayIndex.v(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.uw_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.uc();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.uc();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp10_isNotEmpty = resumes;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$8 = tmp10_isNotEmpty.length === 0;
    tmp$ret$9 = !tmp$ret$8;
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  SharedFlowImpl.prototype.hy = function () {
    return new SharedFlowSlot();
  };
  SharedFlowImpl.prototype.iy = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  SharedFlowImpl.prototype.jy = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.dx_1 = new Long(-1, -1);
    this.ex_1 = null;
  }
  SharedFlowSlot.prototype.my = function (flow) {
    if (this.dx_1.v(new Long(0, 0)) >= 0)
      return false;
    this.dx_1 = flow.gy();
    return true;
  };
  SharedFlowSlot.prototype.ny = function (flow) {
    return this.my(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.prototype.oy = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.dx_1;
    this.dx_1 = new Long(-1, -1);
    this.ex_1 = null;
    return flow.jx(oldIndex);
  };
  SharedFlowSlot.prototype.py = function (flow) {
    return this.oy(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.yc() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.yc() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_5sqb47();
    var tmp;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -3;
    }
    if (tmp_0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function init_properties_SharedFlow_kt_5sqb47() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_EMPTY_RESUMES() {
    init_properties_AbstractSharedFlow_kt_ejuukb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.zw_1 = null;
    this.ax_1 = 0;
    this.bx_1 = 0;
    this.cx_1 = null;
  }
  AbstractSharedFlow.prototype.ly = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this.cx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new SubscriptionCountStateFlow(this.ax_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this.cx_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  AbstractSharedFlow.prototype.yx = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.zw_1;
    var tmp;
    if (curSlots == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.iy(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.zw_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var tmp_0;
      if (this.ax_1 >= curSlots.length) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.zw_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.bx_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = this.hy();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).ny(this))
        break $l$loop;
    }
    this.bx_1 = index;
    var tmp2_this = this;
    var tmp3 = tmp2_this.ax_1;
    tmp2_this.ax_1 = tmp3 + 1 | 0;
    subscriptionCount = this.cx_1;
    tmp$ret$3 = slot;
    tmp$ret$4 = tmp$ret$3;
    var slot_0 = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.cz(1);
    return slot_0;
  };
  AbstractSharedFlow.prototype.cy = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.ax_1;
    tmp0_this.ax_1 = tmp1 - 1 | 0;
    subscriptionCount = this.cx_1;
    if (this.ax_1 === 0)
      this.bx_1 = 0;
    tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).py(this);
    tmp$ret$1 = tmp$ret$0;
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.g3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.cz(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance().MAX_VALUE, BufferOverflow_DROP_OLDEST_getInstance());
    this.fy(initialValue);
  }
  SubscriptionCountStateFlow.prototype.cz = function (delta) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    tmp$ret$0 = this.fy(this.dy() + delta | 0);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function init_properties_AbstractSharedFlow_kt_ejuukb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 4) === 0)) {
      Factory_getInstance();
      capacity = -3;
    }
    if (!(($mask0 & 8) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    ChannelFlowOperatorImpl.call($this, flow, context, capacity, onBufferOverflow);
    return $this;
  }
  function ChannelFlowOperatorImpl_init_$Create$(flow, context, capacity, onBufferOverflow, $mask0, $marker) {
    return ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(ChannelFlowOperatorImpl.prototype));
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  ChannelFlowOperatorImpl.prototype.hz = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.lz_1, context, capacity, onBufferOverflow);
  };
  ChannelFlowOperatorImpl.prototype.mz = function (collector, $cont) {
    return this.lz_1.fv(collector, $cont);
  };
  function collectWithContextUndispatched($this, collector, newContext, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.f3();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched$default(newContext, originalContextCollector, null, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $cont, 4, null);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.d10_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.f10 = function (it, $cont) {
    var tmp = this.g10(it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.xd = function (p1, $cont) {
    return this.f10((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.d10_1.mz(this.e10_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.g10 = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.d10_1, completion);
    i.e10_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.f10(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p10_1 = _this__u8e3s4;
    this.q10_1 = collector;
  }
  $collectCOROUTINE$8.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 7;
            Factory_getInstance();
            if (this.p10_1.pz_1 === -3) {
              var tmp_0 = this;
              tmp_0.r10_1 = this.f3();
              this.s10_1 = this.r10_1.q3(this.p10_1.oz_1);
              if (equals(this.s10_1, this.r10_1)) {
                this.cd_1 = 6;
                suspendResult = this.p10_1.mz(this.q10_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.cd_1 = 1;
                continue $sm;
              }
            } else {
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 1:
            if (equals(this.s10_1.j3(Key_getInstance()), this.r10_1.j3(Key_getInstance()))) {
              this.cd_1 = 5;
              suspendResult = collectWithContextUndispatched(this.p10_1, this.q10_1, this.s10_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.cd_1 = 4;
            suspendResult = ChannelFlow.prototype.fv.call(this.p10_1, this.q10_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 7) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.lz_1 = flow;
  }
  ChannelFlowOperator.prototype.nz = function (scope, $cont) {
    return this.mz(new SendingCollector(scope), $cont);
  };
  ChannelFlowOperator.prototype.fv = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$8(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ChannelFlowOperator.prototype.toString = function () {
    return '' + this.lz_1 + ' -> ' + ChannelFlow.prototype.toString.call(this);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.b11_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.d11 = function (it, $cont) {
    var tmp = this.e11(it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.xd = function (p1, $cont) {
    return this.d11((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.b11_1.nz(this.c11_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.e11 = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.b11_1, completion);
    i.c11_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.d11(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.n11_1 = $collector;
    this.o11_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$collect$slambda.prototype.q11 = function ($this$coroutineScope, $cont) {
    var tmp = this.r11($this$coroutineScope, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ChannelFlow$collect$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$collect$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = emitAll(this.n11_1, this.o11_1.tz(this.p11_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  ChannelFlow$collect$slambda.prototype.r11 = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.n11_1, this.o11_1, completion);
    i.p11_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.q11($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.oz_1 = context;
    this.pz_1 = capacity;
    this.qz_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  ChannelFlow.prototype.rz = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  ChannelFlow.prototype.sz = function () {
    var tmp;
    Factory_getInstance();
    if (this.pz_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.pz_1;
    }
    return tmp;
  };
  ChannelFlow.prototype.jy = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.q3(this.oz_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      Factory_getInstance();
      if (this.pz_1 === -3) {
        tmp = capacity;
      } else {
        Factory_getInstance();
        if (capacity === -3) {
          tmp = this.pz_1;
        } else {
          Factory_getInstance();
          if (this.pz_1 === -2) {
            tmp = capacity;
          } else {
            Factory_getInstance();
            if (capacity === -2) {
              tmp = this.pz_1;
            } else {
              // Inline function 'kotlinx.coroutines.assert' call
              // Inline function 'kotlinx.coroutines.assert' call
              var sum = this.pz_1 + capacity | 0;
              var tmp_0;
              if (sum >= 0) {
                tmp_0 = sum;
              } else {
                Factory_getInstance();
                tmp_0 = 2147483647;
              }
              tmp = tmp_0;
            }
          }
        }
      }
      newCapacity = tmp;
      newOverflow = this.qz_1;
    }
    if ((equals(newContext, this.oz_1) ? newCapacity === this.pz_1 : false) ? newOverflow.equals(this.qz_1) : false)
      return this;
    return this.hz(newContext, newCapacity, newOverflow);
  };
  ChannelFlow.prototype.tz = function (scope) {
    var tmp = this.sz();
    var tmp_0 = CoroutineStart_ATOMIC_getInstance();
    return produce$default(scope, this.oz_1, tmp, this.qz_1, tmp_0, null, this.rz(), 16, null);
  };
  ChannelFlow.prototype.fv = function (collector, $cont) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $cont);
  };
  ChannelFlow.prototype.uz = function () {
    return null;
  };
  ChannelFlow.prototype.toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.uz();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      tmp$ret$0 = props.a(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    if (!(this.oz_1 === EmptyCoroutineContext_getInstance())) {
      props.a('context=' + this.oz_1);
    }
    Factory_getInstance();
    if (!(this.pz_1 === -3)) {
      props.a('capacity=' + this.pz_1);
    }
    if (!this.qz_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.a('onBufferOverflow=' + this.qz_1);
    }
    var tmp = get_classSimpleName(this);
    return tmp + '[' + joinToString$default(props, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    var tmp_0;
    if (tmp0_subject instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $cont) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var tmp0_startCoroutineUninterceptedOrReturn = new StackFrameContinuation(tmp0__anonymous__q1qw7t, newContext);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = block;
    var a = tmp$ret$0;
    tmp$ret$1 = typeof a === 'function' ? a(value, tmp0_startCoroutineUninterceptedOrReturn) : block.xd(value, tmp0_startCoroutineUninterceptedOrReturn);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function withContextUndispatched$default(newContext, value, countOrElement, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      countOrElement = threadContextElements(newContext);
    return withContextUndispatched(newContext, value, countOrElement, block, $cont);
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.a12_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  UndispatchedContextCollector$emitRef$slambda.prototype.c12 = function (it, $cont) {
    var tmp = this.d12(it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.xd = function (p1, $cont) {
    return this.c12((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.a12_1.vv(this.b12_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  UndispatchedContextCollector$emitRef$slambda.prototype.d12 = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.a12_1, completion);
    i.b12_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $cont) {
      return i.c12(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.e12_1 = emitContext;
    this.f12_1 = threadContextElements(this.e12_1);
    var tmp = this;
    tmp.g12_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  UndispatchedContextCollector.prototype.vv = function (value, $cont) {
    return withContextUndispatched(this.e12_1, value, this.f12_1, this.g12_1, $cont);
  };
  function StackFrameContinuation(uCont, context) {
    this.h12_1 = uCont;
    this.i12_1 = context;
  }
  StackFrameContinuation.prototype.f3 = function () {
    return this.i12_1;
  };
  StackFrameContinuation.prototype.g3 = function (result) {
    this.h12_1.g3(result);
  };
  function NopCollector() {
  }
  function get_NULL() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function init_properties_NullSurrogate_kt_8d5lbx() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.p3(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.kw_1)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.jw_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.rl();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.q();
      var collectElement = $this_checkContext.jw_1.j3(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.j12_1 = channel;
  }
  SendingCollector.prototype.vv = function (value, $cont) {
    return this.j12_1.us(value, $cont);
  };
  function flowOn(_this__u8e3s4, context) {
    checkFlowContext(context);
    var tmp;
    if (equals(context, EmptyCoroutineContext_getInstance())) {
      tmp = _this__u8e3s4;
    } else {
      if (isInterface(_this__u8e3s4, FusibleFlow)) {
        tmp = _this__u8e3s4.ky(context, 0, null, 6, null);
      } else {
        tmp = ChannelFlowOperatorImpl_init_$Create$(_this__u8e3s4, context, 0, null, 12, null);
      }
    }
    return tmp;
  }
  function checkFlowContext(context) {
    // Inline function 'kotlin.require' call
    var tmp0_require = context.j3(Key_getInstance_3()) == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.checkFlowContext.<anonymous>' call
      tmp$ret$0 = 'Flow context cannot contain job in it. Had ' + context;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  function onCompletion(_this__u8e3s4, action) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4, action);
    return tmp$ret$0;
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.k12_1;
  }
  function invokeSafely(_this__u8e3s4, action, cause, $cont) {
    var tmp = new $invokeSafelyCOROUTINE$9(_this__u8e3s4, action, cause, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function ThrowingCollector(e) {
    this.k12_1 = e;
  }
  ThrowingCollector.prototype.w12 = function (value, $cont) {
    throw this.k12_1;
  };
  ThrowingCollector.prototype.vv = function (value, $cont) {
    return this.w12((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f13_1 = _this__u8e3s4;
    this.g13_1 = collector;
  }
  $collectCOROUTINE$10.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 9;
            this.dd_1 = 7;
            this.cd_1 = 1;
            suspendResult = this.f13_1.l13_1.fv(this.g13_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dd_1 = 9;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.dd_1 = 9;
            var tmp_0 = this;
            tmp_0.h13_1 = new SafeCollector(this.g13_1, this.f3());
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.dd_1 = 6;
            this.cd_1 = 4;
            suspendResult = this.f13_1.m13_1(this.h13_1, null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i13_1 = suspendResult;
            this.dd_1 = 9;
            this.cd_1 = 5;
            continue $sm;
          case 5:
            this.h13_1.mw();
            ;
            return Unit_getInstance();
          case 6:
            this.dd_1 = 9;
            this.j13_1 = this.fd_1;
            this.h13_1.mw();
            ;
            throw this.j13_1;
          case 7:
            this.dd_1 = 9;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof Error) {
              this.k13_1 = this.fd_1;
              this.cd_1 = 8;
              suspendResult = invokeSafely(new ThrowingCollector(this.k13_1), this.f13_1.m13_1, this.k13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 8:
            throw this.k13_1;
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
  function _no_name_provided__qut3iv($this_onCompletion, $action) {
    this.l13_1 = $this_onCompletion;
    this.m13_1 = $action;
  }
  _no_name_provided__qut3iv.prototype.fv = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function $invokeSafelyCOROUTINE$9(_this__u8e3s4, action, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t12_1 = _this__u8e3s4;
    this.u12_1 = action;
    this.v12_1 = cause;
  }
  $invokeSafelyCOROUTINE$9.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.u12_1(this.t12_1, this.v12_1, this);
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
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof Error) {
              var e = this.fd_1;
              if (!(this.v12_1 === null) ? !(this.v12_1 === e) : false) {
              }
              throw e;
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
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function onSubscription(_this__u8e3s4, action) {
    return new SubscribedSharedFlow(_this__u8e3s4, action);
  }
  function $onSubscriptionCOROUTINE$12(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v13_1 = _this__u8e3s4;
  }
  $onSubscriptionCOROUTINE$12.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 7;
            var tmp_0 = this;
            tmp_0.w13_1 = new SafeCollector(this.v13_1.zx_1, this.f3());
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 6;
            this.cd_1 = 2;
            suspendResult = this.v13_1.ay_1(this.w13_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x13_1 = suspendResult;
            this.dd_1 = 7;
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.w13_1.mw();
            ;
            var tmp_1 = this.v13_1.zx_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.cd_1 = 4;
              suspendResult = this.v13_1.zx_1.by(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.cd_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.dd_1 = 7;
            var t = this.fd_1;
            this.w13_1.mw();
            ;
            throw t;
          case 7:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 7) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector(collector, action) {
    this.zx_1 = collector;
    this.ay_1 = action;
  }
  SubscribedFlowCollector.prototype.vv = function (value, $cont) {
    return this.zx_1.vv(value, $cont);
  };
  SubscribedFlowCollector.prototype.by = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$12(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g14_1 = _this__u8e3s4;
    this.h14_1 = collector;
  }
  $collectCOROUTINE$13.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.g14_1.j14_1.ey(this.h14_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlySharedFlow(flow, job) {
    this.i14_1 = job;
    this.j14_1 = flow;
  }
  ReadonlySharedFlow.prototype.ey = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$13(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ReadonlySharedFlow.prototype.fv = function (collector, $cont) {
    return this.ey(collector, $cont);
  };
  ReadonlySharedFlow.prototype.jy = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s14_1 = _this__u8e3s4;
    this.t14_1 = collector;
  }
  $collectCOROUTINE$14.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.s14_1.u14_1.ey(new SubscribedFlowCollector(this.t14_1, this.s14_1.v14_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return throwKotlinNothingValueException();
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
  function SubscribedSharedFlow(sharedFlow, action) {
    this.u14_1 = sharedFlow;
    this.v14_1 = action;
  }
  SubscribedSharedFlow.prototype.ey = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$14(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  SubscribedSharedFlow.prototype.fv = function (collector, $cont) {
    return this.ey(collector, $cont);
  };
  function emitAll_0(_this__u8e3s4, flow, $cont) {
    ensureActive_1(_this__u8e3s4);
    return flow.fv(_this__u8e3s4, $cont);
  }
  function single(_this__u8e3s4, $cont) {
    var tmp = new $singleCOROUTINE$18(_this__u8e3s4, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.g15_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.vv = function (value, $cont) {
    return this.g15_1(value, $cont);
  };
  function single$slambda($result, resultContinuation) {
    this.p15_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  single$slambda.prototype.c12 = function (value, $cont) {
    var tmp = this.d12(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  single$slambda.prototype.xd = function (p1, $cont) {
    return this.c12((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  single$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        if (tmp === 0) {
          this.dd_1 = 1;
          var tmp0_require = this.p15_1._v === get_NULL();
          if (!tmp0_require) {
            var message = 'Flow has more than one element';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          this.p15_1._v = this.q15_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.fd_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  single$slambda.prototype.d12 = function (value, completion) {
    var i = new single$slambda(this.p15_1, completion);
    i.q15_1 = value;
    return i;
  };
  function single$slambda_0($result, resultContinuation) {
    var i = new single$slambda($result, resultContinuation);
    var l = function (value, $cont) {
      return i.c12(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $singleCOROUTINE$18(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e15_1 = _this__u8e3s4;
  }
  $singleCOROUTINE$18.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.f15_1 = {_v: get_NULL()};
            this.cd_1 = 1;
            var tmp_0 = single$slambda_0(this.f15_1, null);
            suspendResult = this.e15_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (this.f15_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$('Flow is empty');
            var tmp_1 = this.f15_1._v;
            return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
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
  function ensureCapacity_0($this) {
    var currentSize = $this.al_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.al_1;
    var tmp1_copyInto = $this.bl_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.al_1;
    var tmp4_copyInto = $this.al_1.length - $this.bl_1 | 0;
    var tmp5_copyInto = $this.bl_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.al_1 = newElements;
    $this.bl_1 = 0;
    $this.cl_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.al_1 = tmp$ret$0;
    this.bl_1 = 0;
    this.cl_1 = 0;
  }
  ArrayQueue.prototype.il = function () {
    return this.bl_1 === this.cl_1;
  };
  ArrayQueue.prototype.fl = function (element) {
    this.al_1[this.cl_1] = element;
    this.cl_1 = (this.cl_1 + 1 | 0) & (this.al_1.length - 1 | 0);
    if (this.cl_1 === this.bl_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.dl = function () {
    if (this.bl_1 === this.cl_1)
      return null;
    var element = this.al_1[this.bl_1];
    this.al_1[this.bl_1] = null;
    this.bl_1 = (this.bl_1 + 1 | 0) & (this.al_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.ph_1.ik(tmp1_resumeCancellableWith.f3())) {
        tmp1_resumeCancellableWith.rh_1 = state;
        tmp1_resumeCancellableWith.ii_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.ph_1.jk(tmp1_resumeCancellableWith.f3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().nl();
          if (false ? eventLoop.hl() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.gl()) {
            tmp1_resumeCancellableWith.rh_1 = state;
            tmp1_resumeCancellableWith.ii_1 = tmp0_executeUnconfined;
            eventLoop.el(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.jl(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.f3().j3(Key_getInstance_3());
                if (!(job == null) ? !job.ke() : false) {
                  var cause = job.hf();
                  tmp1_resumeCancellableWith.aj(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.g3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.qh_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.sh_1;
                tmp1_resumeCancellableWith.qh_1.g3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.zk())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.mj($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.kl(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.g3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.th_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.ph_1 = dispatcher;
    this.qh_1 = continuation;
    this.rh_1 = get_UNDEFINED();
    this.sh_1 = threadContextElements(this.f3());
    this.th_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.f3 = function () {
    return this.qh_1.f3();
  };
  DispatchedContinuation.prototype.hi = function () {
    return !(this.th_1.kotlinx$atomicfu$value == null);
  };
  DispatchedContinuation.prototype.r15 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.th_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.kk = function () {
    this.r15();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.li();
    }
  };
  DispatchedContinuation.prototype.uh = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.th_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === null) {
        this.th_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.th_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.ki = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.th_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.th_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.th_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.ji = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.th_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.th_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.th_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.zi = function () {
    var state = this.rh_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.rh_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.xi = function () {
    return this;
  };
  DispatchedContinuation.prototype.g3 = function (result) {
    var context = this.qh_1.f3();
    var state = toState$default(result, null, 1, null);
    if (this.ph_1.ik(context)) {
      this.rh_1 = state;
      this.ii_1 = get_MODE_ATOMIC();
      this.ph_1.jk(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().nl();
        if (false ? eventLoop.hl() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.gl()) {
          this.rh_1 = state;
          this.ii_1 = tmp0_executeUnconfined;
          eventLoop.el(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.jl(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.f3();
            var tmp1_withCoroutineContext = this.sh_1;
            this.qh_1.g3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.zk())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.mj($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.kl(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.aj = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.gk_1(cause);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.ph_1 + ', ' + toDebugString(this.qh_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ii_1 = resumeMode;
  }
  DispatchedTask.prototype.aj = function (takenState, cause) {
  };
  DispatchedTask.prototype.ij = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.kj = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pe_1;
  };
  DispatchedTask.prototype.lj = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.xi();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.qh_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.sh_1;
      var context = continuation.f3();
      var state = this.zi();
      var exception = this.kj(state);
      var job = (exception == null ? get_isCancellableMode(this.ii_1) : false) ? context.j3(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.ke() : false) {
        var cause = job.hf();
        this.aj(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.g3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.g3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.ij(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.g3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.mj(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.mj = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.xi().f3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.xi();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ii_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.ph_1;
      var context = delegate.f3();
      if (dispatcher.ik(context)) {
        dispatcher.jk(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().nl();
    if (eventLoop.gl()) {
      eventLoop.el(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.jl(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.xi(), true);
        $l$loop: while (true) {
          if (!eventLoop.zk())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.mj($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.kl(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.zi();
    var exception = _this__u8e3s4.kj(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.ij(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.qh_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.sh_1;
      tmp3_resumeUndispatchedWith.qh_1.g3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.g3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.s15_1 = context;
  }
  ContextScope.prototype.je = function () {
    return this.s15_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.s15_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.mp_1 = uCont;
  }
  ScopeCoroutine.prototype.yf = function () {
    return true;
  };
  ScopeCoroutine.prototype.rl = function () {
    var tmp0_safe_receiver = this.cf();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rl();
  };
  ScopeCoroutine.prototype.ue = function (state) {
    var tmp = intercepted(this.mp_1);
    var tmp_0 = recoverResult(state, this.mp_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.te = function (state) {
    this.mp_1.g3(recoverResult(state, this.mp_1));
  };
  function Symbol(symbol) {
    this.t15_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.t15_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).yc();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.v(parsed) <= 0 ? parsed.v(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.g3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.f3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.xd(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.g3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.g3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.xd(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.se(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.pe_1;
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.ip_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.pe_1, _this__u8e3s4.mp_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.pe_1, _this__u8e3s4.mp_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.xd(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.se(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.pe_1;
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.pe_1, _this__u8e3s4.mp_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.pe_1, _this__u8e3s4.mp_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function CloseableCoroutineDispatcher() {
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().ok_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.je().q3(context);
    return (!(combined === Dispatchers_getInstance().ok_1) ? combined.j3(Key_getInstance()) == null : false) ? combined.q3(Dispatchers_getInstance().ok_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).ea();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.ok_1 = createDefaultDispatcher();
    this.pk_1 = Unconfined_getInstance();
    this.qk_1 = new JsMainDispatcher(this.ok_1, false);
    this.rk_1 = null;
  }
  Dispatchers.prototype.sk = function () {
    var tmp0_elvis_lhs = this.rk_1;
    return tmp0_elvis_lhs == null ? this.qk_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.x15_1 = delegate;
    this.y15_1 = invokeImmediately;
    this.z15_1 = this.y15_1 ? this : new JsMainDispatcher(this.x15_1, true);
  }
  JsMainDispatcher.prototype.dp = function () {
    return this.z15_1;
  };
  JsMainDispatcher.prototype.ik = function (context) {
    return !this.y15_1;
  };
  JsMainDispatcher.prototype.jk = function (context, block) {
    return this.x15_1.jk(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.ep();
    return tmp0_elvis_lhs == null ? this.x15_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.jk = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.e16_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.e16_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.e16_1, this.e16_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.e16_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.h16 = function () {
    process.nextTick(this.q16_1.n16_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.h16 = function () {
    setTimeout(this.q16_1.n16_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.y16();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.o16_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.n16_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.z16 = function () {
    this.o16_1.h16();
  };
  ScheduledMessageQueue.prototype.a17 = function () {
    setTimeout(this.n16_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.lj();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.jh(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.q16_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.jk = function (context, block) {
    this.q16_1.b17(block);
  };
  SetTimeoutBasedDispatcher.prototype.uk = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.tk = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.ih(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.w16_1 = 16;
    this.x16_1 = false;
  }
  MessageQueue.prototype.b17 = function (element) {
    this.fl(element);
    if (!this.x16_1) {
      this.x16_1 = true;
      this.z16();
    }
  };
  MessageQueue.prototype.y16 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.w16_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.dl();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.lj();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.il()) {
        this.x16_1 = false;
      } else {
        this.a17();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).yc();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.c17_1 = handle;
  }
  ClearTimeout.prototype.nh = function () {
    clearTimeout(this.c17_1);
  };
  ClearTimeout.prototype.mh = function (cause) {
    this.nh();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.mh(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.c17_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.jh(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.lj();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.d17_1 = this$0;
    this.e17_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.nh = function () {
    this.d17_1.g17_1.clearTimeout(this.e17_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.g17_1 = window_0;
    this.h17_1 = new WindowMessageQueue(this.g17_1);
  }
  WindowDispatcher.prototype.jk = function (context, block) {
    return this.h17_1.b17(block);
  };
  WindowDispatcher.prototype.tk = function (timeMillis, continuation) {
    this.g17_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.prototype.uk = function (timeMillis, block, context) {
    var handle = this.g17_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.n17_1 ? event.data == this$0.o17_1 : false) {
        event.stopPropagation();
        this$0.y16();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.y16();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.n17_1 = window_0;
    this.o17_1 = 'dispatchCoroutine';
    this.n17_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.z16 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.a17 = function () {
    this.n17_1.postMessage(this.o17_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.iw_1 = collector;
    this.jw_1 = collectContext;
    var tmp = this;
    tmp.kw_1 = this.jw_1.p3(0, SafeCollector$collectContextSize$lambda);
    this.lw_1 = null;
  }
  SafeCollector.prototype.vv = function (value, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.f3();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.lw_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lw_1 = currentContext;
    }
    return this.iw_1.vv(value, $cont);
  };
  SafeCollector.prototype.mw = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.gi = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.di_1 = this;
    this.ei_1 = this;
    this.fi_1 = false;
  }
  LinkedListNode.prototype.bm = function (node) {
    var prev = this.ei_1;
    node.di_1 = this;
    node.ei_1 = prev;
    prev.di_1 = node;
    this.ei_1 = node;
  };
  LinkedListNode.prototype.gi = function () {
    return this.cm();
  };
  LinkedListNode.prototype.cm = function () {
    if (this.fi_1)
      return false;
    var prev = this.ei_1;
    var next = this.di_1;
    prev.di_1 = next;
    next.ei_1 = prev;
    this.fi_1 = true;
    return true;
  };
  LinkedListNode.prototype.jm = function (node) {
    if (!(this.di_1 === this))
      return false;
    this.bm(node);
    return true;
  };
  LinkedListNode.prototype.dm = function () {
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.ol_1 = null;
  }
  CommonThreadLocal.prototype.pl = function () {
    var tmp = this.ol_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.ql = function (value) {
    this.ol_1 = value;
  };
  //region block: post-declaration
  JobSupport.prototype.mf = invokeOnCompletion$default;
  JobSupport.prototype.qf = cancel$default;
  JobSupport.prototype.q3 = plus;
  JobSupport.prototype.j3 = get;
  JobSupport.prototype.p3 = fold;
  JobSupport.prototype.o3 = minusKey;
  AbstractCoroutine.prototype.mf = invokeOnCompletion$default;
  AbstractCoroutine.prototype.qf = cancel$default;
  AbstractCoroutine.prototype.q3 = plus;
  AbstractCoroutine.prototype.j3 = get;
  AbstractCoroutine.prototype.p3 = fold;
  AbstractCoroutine.prototype.o3 = minusKey;
  StandaloneCoroutine.prototype.mf = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.qf = cancel$default;
  StandaloneCoroutine.prototype.q3 = plus;
  StandaloneCoroutine.prototype.j3 = get;
  StandaloneCoroutine.prototype.p3 = fold;
  StandaloneCoroutine.prototype.o3 = minusKey;
  LazyStandaloneCoroutine.prototype.mf = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.qf = cancel$default;
  LazyStandaloneCoroutine.prototype.q3 = plus;
  LazyStandaloneCoroutine.prototype.j3 = get;
  LazyStandaloneCoroutine.prototype.p3 = fold;
  LazyStandaloneCoroutine.prototype.o3 = minusKey;
  DeferredCoroutine.prototype.mf = invokeOnCompletion$default;
  DeferredCoroutine.prototype.qf = cancel$default;
  DeferredCoroutine.prototype.q3 = plus;
  DeferredCoroutine.prototype.j3 = get;
  DeferredCoroutine.prototype.p3 = fold;
  DeferredCoroutine.prototype.o3 = minusKey;
  LazyDeferredCoroutine.prototype.mf = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.qf = cancel$default;
  LazyDeferredCoroutine.prototype.q3 = plus;
  LazyDeferredCoroutine.prototype.j3 = get;
  LazyDeferredCoroutine.prototype.p3 = fold;
  LazyDeferredCoroutine.prototype.o3 = minusKey;
  CancellableContinuationImpl.prototype.eh = tryResume$default;
  CompletableDeferredImpl.prototype.mf = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.qf = cancel$default;
  CompletableDeferredImpl.prototype.q3 = plus;
  CompletableDeferredImpl.prototype.j3 = get;
  CompletableDeferredImpl.prototype.p3 = fold;
  CompletableDeferredImpl.prototype.o3 = minusKey;
  CoroutineDispatcher.prototype.j3 = get_0;
  CoroutineDispatcher.prototype.p3 = fold;
  CoroutineDispatcher.prototype.o3 = minusKey_0;
  CoroutineDispatcher.prototype.q3 = plus;
  CoroutineName.prototype.j3 = get;
  CoroutineName.prototype.p3 = fold;
  CoroutineName.prototype.o3 = minusKey;
  CoroutineName.prototype.q3 = plus;
  EventLoop.prototype.q3 = plus;
  EventLoop.prototype.j3 = get_0;
  EventLoop.prototype.p3 = fold;
  EventLoop.prototype.o3 = minusKey_0;
  AwaitContinuation.prototype.eh = tryResume$default;
  JobImpl.prototype.mf = invokeOnCompletion$default;
  JobImpl.prototype.qf = cancel$default;
  JobImpl.prototype.q3 = plus;
  JobImpl.prototype.j3 = get;
  JobImpl.prototype.p3 = fold;
  JobImpl.prototype.o3 = minusKey;
  MainCoroutineDispatcher.prototype.q3 = plus;
  MainCoroutineDispatcher.prototype.j3 = get_0;
  MainCoroutineDispatcher.prototype.p3 = fold;
  MainCoroutineDispatcher.prototype.o3 = minusKey_0;
  SupervisorJobImpl.prototype.mf = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.qf = cancel$default;
  SupervisorJobImpl.prototype.q3 = plus;
  SupervisorJobImpl.prototype.j3 = get;
  SupervisorJobImpl.prototype.p3 = fold;
  SupervisorJobImpl.prototype.o3 = minusKey;
  ScopeCoroutine.prototype.mf = invokeOnCompletion$default;
  ScopeCoroutine.prototype.qf = cancel$default;
  ScopeCoroutine.prototype.q3 = plus;
  ScopeCoroutine.prototype.j3 = get;
  ScopeCoroutine.prototype.p3 = fold;
  ScopeCoroutine.prototype.o3 = minusKey;
  TimeoutCoroutine.prototype.mf = invokeOnCompletion$default;
  TimeoutCoroutine.prototype.qf = cancel$default;
  TimeoutCoroutine.prototype.q3 = plus;
  TimeoutCoroutine.prototype.j3 = get;
  TimeoutCoroutine.prototype.p3 = fold;
  TimeoutCoroutine.prototype.o3 = minusKey;
  Unconfined.prototype.q3 = plus;
  Unconfined.prototype.j3 = get_0;
  Unconfined.prototype.p3 = fold;
  Unconfined.prototype.o3 = minusKey_0;
  AbstractSendChannel.prototype.xs = close$default;
  AbstractChannel.prototype.qf = cancel$default_0;
  AbstractChannel.prototype.xs = close$default;
  ArrayChannel.prototype.qf = cancel$default_0;
  ArrayChannel.prototype.xs = close$default;
  ChannelCoroutine.prototype.xs = close$default;
  ChannelCoroutine.prototype.qf = cancel$default;
  ChannelCoroutine.prototype.mf = invokeOnCompletion$default;
  ChannelCoroutine.prototype.q3 = plus;
  ChannelCoroutine.prototype.j3 = get;
  ChannelCoroutine.prototype.p3 = fold;
  ChannelCoroutine.prototype.o3 = minusKey;
  ConflatedChannel.prototype.qf = cancel$default_0;
  ConflatedChannel.prototype.xs = close$default;
  LinkedListChannel.prototype.qf = cancel$default_0;
  LinkedListChannel.prototype.xs = close$default;
  ProducerCoroutine.prototype.xs = close$default;
  ProducerCoroutine.prototype.qf = cancel$default;
  ProducerCoroutine.prototype.mf = invokeOnCompletion$default;
  ProducerCoroutine.prototype.q3 = plus;
  ProducerCoroutine.prototype.j3 = get;
  ProducerCoroutine.prototype.p3 = fold;
  ProducerCoroutine.prototype.o3 = minusKey;
  RendezvousChannel.prototype.qf = cancel$default_0;
  RendezvousChannel.prototype.xs = close$default;
  SharedFlowImpl.prototype.ky = fuse$default;
  SubscriptionCountStateFlow.prototype.ky = fuse$default;
  ChannelFlow.prototype.ky = fuse$default;
  ChannelFlowOperator.prototype.ky = fuse$default;
  ChannelFlowOperatorImpl.prototype.ky = fuse$default;
  ReadonlySharedFlow.prototype.ky = fuse$default;
  JsMainDispatcher.prototype.q3 = plus;
  JsMainDispatcher.prototype.j3 = get_0;
  JsMainDispatcher.prototype.p3 = fold;
  JsMainDispatcher.prototype.o3 = minusKey_0;
  UnconfinedEventLoop.prototype.q3 = plus;
  UnconfinedEventLoop.prototype.j3 = get_0;
  UnconfinedEventLoop.prototype.p3 = fold;
  UnconfinedEventLoop.prototype.o3 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.q3 = plus;
  SetTimeoutBasedDispatcher.prototype.j3 = get_0;
  SetTimeoutBasedDispatcher.prototype.p3 = fold;
  SetTimeoutBasedDispatcher.prototype.o3 = minusKey_0;
  NodeDispatcher.prototype.q3 = plus;
  NodeDispatcher.prototype.j3 = get_0;
  NodeDispatcher.prototype.p3 = fold;
  NodeDispatcher.prototype.o3 = minusKey_0;
  SetTimeoutDispatcher.prototype.q3 = plus;
  SetTimeoutDispatcher.prototype.j3 = get_0;
  SetTimeoutDispatcher.prototype.p3 = fold;
  SetTimeoutDispatcher.prototype.o3 = minusKey_0;
  WindowDispatcher.prototype.q3 = plus;
  WindowDispatcher.prototype.j3 = get_0;
  WindowDispatcher.prototype.p3 = fold;
  WindowDispatcher.prototype.o3 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_SUSPEND_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = emitAll_0;
  _.$_$.d = single;
  _.$_$.e = delay;
  _.$_$.f = withTimeout;
  _.$_$.g = Channel$default;
  _.$_$.h = cancel$default_0;
  _.$_$.i = close$default;
  _.$_$.j = CompletableDeferred$default;
  _.$_$.k = cancel$default;
  _.$_$.l = invokeOnCompletion$default;
  _.$_$.m = Job$default;
  _.$_$.n = SupervisorJob$default;
  _.$_$.o = async$default;
  _.$_$.p = cancel$default_1;
  _.$_$.q = launch$default;
  _.$_$.r = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.s = Factory_getInstance;
  _.$_$.t = Key_getInstance_0;
  _.$_$.u = Key_getInstance_1;
  _.$_$.v = Dispatchers_getInstance;
  _.$_$.w = GlobalScope_getInstance;
  _.$_$.x = Key_getInstance_3;
  _.$_$.y = ChannelResult;
  _.$_$.z = ReceiveChannel;
  _.$_$.a1 = SendChannel;
  _.$_$.b1 = cancelConsumed;
  _.$_$.c1 = FlowCollector;
  _.$_$.d1 = MutableSharedFlow;
  _.$_$.e1 = asSharedFlow;
  _.$_$.f1 = flowOn;
  _.$_$.g1 = flow;
  _.$_$.h1 = onCompletion;
  _.$_$.i1 = onSubscription;
  _.$_$.j1 = LinkedListNode;
  _.$_$.k1 = recoverStackTrace;
  _.$_$.l1 = CancellableContinuationImpl;
  _.$_$.m1 = CloseableCoroutineDispatcher;
  _.$_$.n1 = CompletableJob;
  _.$_$.o1 = CoroutineName;
  _.$_$.p1 = CoroutineScope_0;
  _.$_$.q1 = CoroutineScope;
  _.$_$.r1 = Job_0;
  _.$_$.s1 = Job;
  _.$_$.t1 = get_MODE_CANCELLABLE;
  _.$_$.u1 = MainScope;
  _.$_$.v1 = SupervisorJob;
  _.$_$.w1 = cancel;
  _.$_$.x1 = cancel_2;
  _.$_$.y1 = cancel_0;
  _.$_$.z1 = cancel_1;
  _.$_$.a2 = get_job;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
