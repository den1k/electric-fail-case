goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31849 = (function (f,blockable,meta31850){
this.f = f;
this.blockable = blockable;
this.meta31850 = meta31850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31851,meta31850__$1){
var self__ = this;
var _31851__$1 = this;
return (new cljs.core.async.t_cljs$core$async31849(self__.f,self__.blockable,meta31850__$1));
}));

(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31851){
var self__ = this;
var _31851__$1 = this;
return self__.meta31850;
}));

(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31850","meta31850",-1202475455,null)], null);
}));

(cljs.core.async.t_cljs$core$async31849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31849");

(cljs.core.async.t_cljs$core$async31849.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31849.
 */
cljs.core.async.__GT_t_cljs$core$async31849 = (function cljs$core$async$__GT_t_cljs$core$async31849(f,blockable,meta31850){
return (new cljs.core.async.t_cljs$core$async31849(f,blockable,meta31850));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31844 = arguments.length;
switch (G__31844) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31849(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31910 = arguments.length;
switch (G__31910) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31938 = arguments.length;
switch (G__31938) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31946 = arguments.length;
switch (G__31946) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35287 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35287) : fn1.call(null,val_35287));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35287) : fn1.call(null,val_35287));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31956 = arguments.length;
switch (G__31956) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35297 = n;
var x_35298 = (0);
while(true){
if((x_35298 < n__5636__auto___35297)){
(a[x_35298] = x_35298);

var G__35301 = (x_35298 + (1));
x_35298 = G__35301;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31976 = (function (flag,meta31977){
this.flag = flag;
this.meta31977 = meta31977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31978,meta31977__$1){
var self__ = this;
var _31978__$1 = this;
return (new cljs.core.async.t_cljs$core$async31976(self__.flag,meta31977__$1));
}));

(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31978){
var self__ = this;
var _31978__$1 = this;
return self__.meta31977;
}));

(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31977","meta31977",1743962577,null)], null);
}));

(cljs.core.async.t_cljs$core$async31976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31976");

(cljs.core.async.t_cljs$core$async31976.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31976.
 */
cljs.core.async.__GT_t_cljs$core$async31976 = (function cljs$core$async$__GT_t_cljs$core$async31976(flag,meta31977){
return (new cljs.core.async.t_cljs$core$async31976(flag,meta31977));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31976(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31994 = (function (flag,cb,meta31995){
this.flag = flag;
this.cb = cb;
this.meta31995 = meta31995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31996,meta31995__$1){
var self__ = this;
var _31996__$1 = this;
return (new cljs.core.async.t_cljs$core$async31994(self__.flag,self__.cb,meta31995__$1));
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31996){
var self__ = this;
var _31996__$1 = this;
return self__.meta31995;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31995","meta31995",1249919560,null)], null);
}));

(cljs.core.async.t_cljs$core$async31994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31994");

(cljs.core.async.t_cljs$core$async31994.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31994.
 */
cljs.core.async.__GT_t_cljs$core$async31994 = (function cljs$core$async$__GT_t_cljs$core$async31994(flag,cb,meta31995){
return (new cljs.core.async.t_cljs$core$async31994(flag,cb,meta31995));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31994(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__32015_SHARP_){
var G__32024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32015_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32024) : fret.call(null,G__32024));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__32016_SHARP_){
var G__32025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32016_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32025) : fret.call(null,G__32025));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35317 = (i + (1));
i = G__35317;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35319 = arguments.length;
var i__5770__auto___35320 = (0);
while(true){
if((i__5770__auto___35320 < len__5769__auto___35319)){
args__5775__auto__.push((arguments[i__5770__auto___35320]));

var G__35321 = (i__5770__auto___35320 + (1));
i__5770__auto___35320 = G__35321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32046){
var map__32047 = p__32046;
var map__32047__$1 = cljs.core.__destructure_map(map__32047);
var opts = map__32047__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32039){
var G__32040 = cljs.core.first(seq32039);
var seq32039__$1 = cljs.core.next(seq32039);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32040,seq32039__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32072 = arguments.length;
switch (G__32072) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31745__auto___35327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32128){
var state_val_32129 = (state_32128[(1)]);
if((state_val_32129 === (7))){
var inst_32119 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
var statearr_32142_35328 = state_32128__$1;
(statearr_32142_35328[(2)] = inst_32119);

(statearr_32142_35328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (1))){
var state_32128__$1 = state_32128;
var statearr_32143_35329 = state_32128__$1;
(statearr_32143_35329[(2)] = null);

(statearr_32143_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (4))){
var inst_32095 = (state_32128[(7)]);
var inst_32095__$1 = (state_32128[(2)]);
var inst_32096 = (inst_32095__$1 == null);
var state_32128__$1 = (function (){var statearr_32145 = state_32128;
(statearr_32145[(7)] = inst_32095__$1);

return statearr_32145;
})();
if(cljs.core.truth_(inst_32096)){
var statearr_32146_35330 = state_32128__$1;
(statearr_32146_35330[(1)] = (5));

} else {
var statearr_32148_35331 = state_32128__$1;
(statearr_32148_35331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (13))){
var state_32128__$1 = state_32128;
var statearr_32150_35332 = state_32128__$1;
(statearr_32150_35332[(2)] = null);

(statearr_32150_35332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (6))){
var inst_32095 = (state_32128[(7)]);
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32128__$1,(11),to,inst_32095);
} else {
if((state_val_32129 === (3))){
var inst_32121 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32128__$1,inst_32121);
} else {
if((state_val_32129 === (12))){
var state_32128__$1 = state_32128;
var statearr_32160_35333 = state_32128__$1;
(statearr_32160_35333[(2)] = null);

(statearr_32160_35333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (2))){
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32128__$1,(4),from);
} else {
if((state_val_32129 === (11))){
var inst_32108 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
if(cljs.core.truth_(inst_32108)){
var statearr_32161_35334 = state_32128__$1;
(statearr_32161_35334[(1)] = (12));

} else {
var statearr_32162_35335 = state_32128__$1;
(statearr_32162_35335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (9))){
var state_32128__$1 = state_32128;
var statearr_32165_35336 = state_32128__$1;
(statearr_32165_35336[(2)] = null);

(statearr_32165_35336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (5))){
var state_32128__$1 = state_32128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32168_35337 = state_32128__$1;
(statearr_32168_35337[(1)] = (8));

} else {
var statearr_32170_35338 = state_32128__$1;
(statearr_32170_35338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (14))){
var inst_32117 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
var statearr_32172_35339 = state_32128__$1;
(statearr_32172_35339[(2)] = inst_32117);

(statearr_32172_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (10))){
var inst_32105 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
var statearr_32173_35340 = state_32128__$1;
(statearr_32173_35340[(2)] = inst_32105);

(statearr_32173_35340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (8))){
var inst_32102 = cljs.core.async.close_BANG_(to);
var state_32128__$1 = state_32128;
var statearr_32174_35341 = state_32128__$1;
(statearr_32174_35341[(2)] = inst_32102);

(statearr_32174_35341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_32187 = [null,null,null,null,null,null,null,null];
(statearr_32187[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_32187[(1)] = (1));

return statearr_32187;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_32128){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32128);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32188){var ex__31584__auto__ = e32188;
var statearr_32189_35342 = state_32128;
(statearr_32189_35342[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32128[(4)]))){
var statearr_32194_35343 = state_32128;
(statearr_32194_35343[(1)] = cljs.core.first((state_32128[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_32128;
state_32128 = G__35344;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_32128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_32128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32195 = f__31746__auto__();
(statearr_32195[(6)] = c__31745__auto___35327);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32203){
var vec__32204 = p__32203;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32204,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32204,(1),null);
var job = vec__32204;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31745__auto___35345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32215){
var state_val_32216 = (state_32215[(1)]);
if((state_val_32216 === (1))){
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32215__$1,(2),res,v);
} else {
if((state_val_32216 === (2))){
var inst_32212 = (state_32215[(2)]);
var inst_32213 = cljs.core.async.close_BANG_(res);
var state_32215__$1 = (function (){var statearr_32231 = state_32215;
(statearr_32231[(7)] = inst_32212);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32215__$1,inst_32213);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_32236 = [null,null,null,null,null,null,null,null];
(statearr_32236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__);

(statearr_32236[(1)] = (1));

return statearr_32236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1 = (function (state_32215){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32215);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32240){var ex__31584__auto__ = e32240;
var statearr_32241_35346 = state_32215;
(statearr_32241_35346[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32215[(4)]))){
var statearr_32242_35347 = state_32215;
(statearr_32242_35347[(1)] = cljs.core.first((state_32215[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35349 = state_32215;
state_32215 = G__35349;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = function(state_32215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1.call(this,state_32215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32245 = f__31746__auto__();
(statearr_32245[(6)] = c__31745__auto___35345);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32252){
var vec__32253 = p__32252;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32253,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32253,(1),null);
var job = vec__32253;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35350 = n;
var __35351 = (0);
while(true){
if((__35351 < n__5636__auto___35350)){
var G__32261_35352 = type;
var G__32261_35353__$1 = (((G__32261_35352 instanceof cljs.core.Keyword))?G__32261_35352.fqn:null);
switch (G__32261_35353__$1) {
case "compute":
var c__31745__auto___35355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35351,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = ((function (__35351,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function (state_32278){
var state_val_32279 = (state_32278[(1)]);
if((state_val_32279 === (1))){
var state_32278__$1 = state_32278;
var statearr_32283_35357 = state_32278__$1;
(statearr_32283_35357[(2)] = null);

(statearr_32283_35357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (2))){
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32278__$1,(4),jobs);
} else {
if((state_val_32279 === (3))){
var inst_32276 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32278__$1,inst_32276);
} else {
if((state_val_32279 === (4))){
var inst_32268 = (state_32278[(2)]);
var inst_32269 = process__$1(inst_32268);
var state_32278__$1 = state_32278;
if(cljs.core.truth_(inst_32269)){
var statearr_32285_35359 = state_32278__$1;
(statearr_32285_35359[(1)] = (5));

} else {
var statearr_32286_35360 = state_32278__$1;
(statearr_32286_35360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (5))){
var state_32278__$1 = state_32278;
var statearr_32287_35361 = state_32278__$1;
(statearr_32287_35361[(2)] = null);

(statearr_32287_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (6))){
var state_32278__$1 = state_32278;
var statearr_32289_35362 = state_32278__$1;
(statearr_32289_35362[(2)] = null);

(statearr_32289_35362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (7))){
var inst_32274 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32291_35363 = state_32278__$1;
(statearr_32291_35363[(2)] = inst_32274);

(statearr_32291_35363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35351,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
;
return ((function (__35351,switch__31579__auto__,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_32292 = [null,null,null,null,null,null,null];
(statearr_32292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__);

(statearr_32292[(1)] = (1));

return statearr_32292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1 = (function (state_32278){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32278);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32293){var ex__31584__auto__ = e32293;
var statearr_32294_35364 = state_32278;
(statearr_32294_35364[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32278[(4)]))){
var statearr_32295_35366 = state_32278;
(statearr_32295_35366[(1)] = cljs.core.first((state_32278[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35367 = state_32278;
state_32278 = G__35367;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = function(state_32278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1.call(this,state_32278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__;
})()
;})(__35351,switch__31579__auto__,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
})();
var state__31747__auto__ = (function (){var statearr_32298 = f__31746__auto__();
(statearr_32298[(6)] = c__31745__auto___35355);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
});})(__35351,c__31745__auto___35355,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
);


break;
case "async":
var c__31745__auto___35369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35351,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = ((function (__35351,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (1))){
var state_32312__$1 = state_32312;
var statearr_32315_35370 = state_32312__$1;
(statearr_32315_35370[(2)] = null);

(statearr_32315_35370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (2))){
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32312__$1,(4),jobs);
} else {
if((state_val_32313 === (3))){
var inst_32310 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (4))){
var inst_32302 = (state_32312[(2)]);
var inst_32303 = async(inst_32302);
var state_32312__$1 = state_32312;
if(cljs.core.truth_(inst_32303)){
var statearr_32322_35371 = state_32312__$1;
(statearr_32322_35371[(1)] = (5));

} else {
var statearr_32324_35372 = state_32312__$1;
(statearr_32324_35372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (5))){
var state_32312__$1 = state_32312;
var statearr_32325_35373 = state_32312__$1;
(statearr_32325_35373[(2)] = null);

(statearr_32325_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (6))){
var state_32312__$1 = state_32312;
var statearr_32326_35374 = state_32312__$1;
(statearr_32326_35374[(2)] = null);

(statearr_32326_35374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (7))){
var inst_32308 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32327_35375 = state_32312__$1;
(statearr_32327_35375[(2)] = inst_32308);

(statearr_32327_35375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35351,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
;
return ((function (__35351,switch__31579__auto__,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_32328 = [null,null,null,null,null,null,null];
(statearr_32328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__);

(statearr_32328[(1)] = (1));

return statearr_32328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1 = (function (state_32312){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32312);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32329){var ex__31584__auto__ = e32329;
var statearr_32330_35380 = state_32312;
(statearr_32330_35380[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32312[(4)]))){
var statearr_32331_35381 = state_32312;
(statearr_32331_35381[(1)] = cljs.core.first((state_32312[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35382 = state_32312;
state_32312 = G__35382;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__;
})()
;})(__35351,switch__31579__auto__,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
})();
var state__31747__auto__ = (function (){var statearr_32333 = f__31746__auto__();
(statearr_32333[(6)] = c__31745__auto___35369);

return statearr_32333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
});})(__35351,c__31745__auto___35369,G__32261_35352,G__32261_35353__$1,n__5636__auto___35350,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32261_35353__$1)].join('')));

}

var G__35383 = (__35351 + (1));
__35351 = G__35383;
continue;
} else {
}
break;
}

var c__31745__auto___35384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32357){
var state_val_32358 = (state_32357[(1)]);
if((state_val_32358 === (7))){
var inst_32353 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
var statearr_32365_35385 = state_32357__$1;
(statearr_32365_35385[(2)] = inst_32353);

(statearr_32365_35385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (1))){
var state_32357__$1 = state_32357;
var statearr_32368_35386 = state_32357__$1;
(statearr_32368_35386[(2)] = null);

(statearr_32368_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (4))){
var inst_32338 = (state_32357[(7)]);
var inst_32338__$1 = (state_32357[(2)]);
var inst_32339 = (inst_32338__$1 == null);
var state_32357__$1 = (function (){var statearr_32369 = state_32357;
(statearr_32369[(7)] = inst_32338__$1);

return statearr_32369;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32370_35387 = state_32357__$1;
(statearr_32370_35387[(1)] = (5));

} else {
var statearr_32373_35388 = state_32357__$1;
(statearr_32373_35388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (6))){
var inst_32338 = (state_32357[(7)]);
var inst_32343 = (state_32357[(8)]);
var inst_32343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32345 = [inst_32338,inst_32343__$1];
var inst_32346 = (new cljs.core.PersistentVector(null,2,(5),inst_32344,inst_32345,null));
var state_32357__$1 = (function (){var statearr_32378 = state_32357;
(statearr_32378[(8)] = inst_32343__$1);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32357__$1,(8),jobs,inst_32346);
} else {
if((state_val_32358 === (3))){
var inst_32355 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32357__$1,inst_32355);
} else {
if((state_val_32358 === (2))){
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32357__$1,(4),from);
} else {
if((state_val_32358 === (9))){
var inst_32350 = (state_32357[(2)]);
var state_32357__$1 = (function (){var statearr_32384 = state_32357;
(statearr_32384[(9)] = inst_32350);

return statearr_32384;
})();
var statearr_32389_35398 = state_32357__$1;
(statearr_32389_35398[(2)] = null);

(statearr_32389_35398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (5))){
var inst_32341 = cljs.core.async.close_BANG_(jobs);
var state_32357__$1 = state_32357;
var statearr_32392_35400 = state_32357__$1;
(statearr_32392_35400[(2)] = inst_32341);

(statearr_32392_35400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (8))){
var inst_32343 = (state_32357[(8)]);
var inst_32348 = (state_32357[(2)]);
var state_32357__$1 = (function (){var statearr_32393 = state_32357;
(statearr_32393[(10)] = inst_32348);

return statearr_32393;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32357__$1,(9),results,inst_32343);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1 = (function (state_32357){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32357);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32396){var ex__31584__auto__ = e32396;
var statearr_32399_35402 = state_32357;
(statearr_32399_35402[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32357[(4)]))){
var statearr_32400_35403 = state_32357;
(statearr_32400_35403[(1)] = cljs.core.first((state_32357[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35404 = state_32357;
state_32357 = G__35404;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = function(state_32357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1.call(this,state_32357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32402 = f__31746__auto__();
(statearr_32402[(6)] = c__31745__auto___35384);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


var c__31745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32444){
var state_val_32445 = (state_32444[(1)]);
if((state_val_32445 === (7))){
var inst_32439 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32451_35405 = state_32444__$1;
(statearr_32451_35405[(2)] = inst_32439);

(statearr_32451_35405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (20))){
var state_32444__$1 = state_32444;
var statearr_32452_35406 = state_32444__$1;
(statearr_32452_35406[(2)] = null);

(statearr_32452_35406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (1))){
var state_32444__$1 = state_32444;
var statearr_32453_35411 = state_32444__$1;
(statearr_32453_35411[(2)] = null);

(statearr_32453_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (4))){
var inst_32405 = (state_32444[(7)]);
var inst_32405__$1 = (state_32444[(2)]);
var inst_32407 = (inst_32405__$1 == null);
var state_32444__$1 = (function (){var statearr_32455 = state_32444;
(statearr_32455[(7)] = inst_32405__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32407)){
var statearr_32456_35412 = state_32444__$1;
(statearr_32456_35412[(1)] = (5));

} else {
var statearr_32458_35413 = state_32444__$1;
(statearr_32458_35413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (15))){
var inst_32420 = (state_32444[(8)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32444__$1,(18),to,inst_32420);
} else {
if((state_val_32445 === (21))){
var inst_32434 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32459_35417 = state_32444__$1;
(statearr_32459_35417[(2)] = inst_32434);

(statearr_32459_35417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (13))){
var inst_32436 = (state_32444[(2)]);
var state_32444__$1 = (function (){var statearr_32460 = state_32444;
(statearr_32460[(9)] = inst_32436);

return statearr_32460;
})();
var statearr_32461_35418 = state_32444__$1;
(statearr_32461_35418[(2)] = null);

(statearr_32461_35418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (6))){
var inst_32405 = (state_32444[(7)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32444__$1,(11),inst_32405);
} else {
if((state_val_32445 === (17))){
var inst_32429 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
if(cljs.core.truth_(inst_32429)){
var statearr_32462_35420 = state_32444__$1;
(statearr_32462_35420[(1)] = (19));

} else {
var statearr_32464_35421 = state_32444__$1;
(statearr_32464_35421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (3))){
var inst_32441 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32444__$1,inst_32441);
} else {
if((state_val_32445 === (12))){
var inst_32416 = (state_32444[(10)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32444__$1,(14),inst_32416);
} else {
if((state_val_32445 === (2))){
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32444__$1,(4),results);
} else {
if((state_val_32445 === (19))){
var state_32444__$1 = state_32444;
var statearr_32467_35423 = state_32444__$1;
(statearr_32467_35423[(2)] = null);

(statearr_32467_35423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (11))){
var inst_32416 = (state_32444[(2)]);
var state_32444__$1 = (function (){var statearr_32471 = state_32444;
(statearr_32471[(10)] = inst_32416);

return statearr_32471;
})();
var statearr_32474_35425 = state_32444__$1;
(statearr_32474_35425[(2)] = null);

(statearr_32474_35425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (9))){
var state_32444__$1 = state_32444;
var statearr_32479_35426 = state_32444__$1;
(statearr_32479_35426[(2)] = null);

(statearr_32479_35426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (5))){
var state_32444__$1 = state_32444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32480_35430 = state_32444__$1;
(statearr_32480_35430[(1)] = (8));

} else {
var statearr_32481_35431 = state_32444__$1;
(statearr_32481_35431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (14))){
var inst_32420 = (state_32444[(8)]);
var inst_32423 = (state_32444[(11)]);
var inst_32420__$1 = (state_32444[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var inst_32423__$1 = cljs.core.not(inst_32421);
var state_32444__$1 = (function (){var statearr_32483 = state_32444;
(statearr_32483[(8)] = inst_32420__$1);

(statearr_32483[(11)] = inst_32423__$1);

return statearr_32483;
})();
if(inst_32423__$1){
var statearr_32486_35433 = state_32444__$1;
(statearr_32486_35433[(1)] = (15));

} else {
var statearr_32487_35434 = state_32444__$1;
(statearr_32487_35434[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (16))){
var inst_32423 = (state_32444[(11)]);
var state_32444__$1 = state_32444;
var statearr_32491_35435 = state_32444__$1;
(statearr_32491_35435[(2)] = inst_32423);

(statearr_32491_35435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (10))){
var inst_32413 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32492_35436 = state_32444__$1;
(statearr_32492_35436[(2)] = inst_32413);

(statearr_32492_35436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (18))){
var inst_32426 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32493_35437 = state_32444__$1;
(statearr_32493_35437[(2)] = inst_32426);

(statearr_32493_35437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (8))){
var inst_32410 = cljs.core.async.close_BANG_(to);
var state_32444__$1 = state_32444;
var statearr_32495_35438 = state_32444__$1;
(statearr_32495_35438[(2)] = inst_32410);

(statearr_32495_35438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_32502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__);

(statearr_32502[(1)] = (1));

return statearr_32502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1 = (function (state_32444){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32444);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32507){var ex__31584__auto__ = e32507;
var statearr_32508_35443 = state_32444;
(statearr_32508_35443[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32444[(4)]))){
var statearr_32509_35444 = state_32444;
(statearr_32509_35444[(1)] = cljs.core.first((state_32444[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35445 = state_32444;
state_32444 = G__35445;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__ = function(state_32444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1.call(this,state_32444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32513 = f__31746__auto__();
(statearr_32513[(6)] = c__31745__auto__);

return statearr_32513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

return c__31745__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32526 = arguments.length;
switch (G__32526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32535 = arguments.length;
switch (G__32535) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32555 = arguments.length;
switch (G__32555) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31745__auto___35456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32598){
var state_val_32599 = (state_32598[(1)]);
if((state_val_32599 === (7))){
var inst_32593 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
var statearr_32600_35457 = state_32598__$1;
(statearr_32600_35457[(2)] = inst_32593);

(statearr_32600_35457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (1))){
var state_32598__$1 = state_32598;
var statearr_32601_35458 = state_32598__$1;
(statearr_32601_35458[(2)] = null);

(statearr_32601_35458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (4))){
var inst_32570 = (state_32598[(7)]);
var inst_32570__$1 = (state_32598[(2)]);
var inst_32571 = (inst_32570__$1 == null);
var state_32598__$1 = (function (){var statearr_32603 = state_32598;
(statearr_32603[(7)] = inst_32570__$1);

return statearr_32603;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32604_35459 = state_32598__$1;
(statearr_32604_35459[(1)] = (5));

} else {
var statearr_32605_35460 = state_32598__$1;
(statearr_32605_35460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (13))){
var state_32598__$1 = state_32598;
var statearr_32606_35461 = state_32598__$1;
(statearr_32606_35461[(2)] = null);

(statearr_32606_35461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (6))){
var inst_32570 = (state_32598[(7)]);
var inst_32580 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32570) : p.call(null,inst_32570));
var state_32598__$1 = state_32598;
if(cljs.core.truth_(inst_32580)){
var statearr_32607_35463 = state_32598__$1;
(statearr_32607_35463[(1)] = (9));

} else {
var statearr_32608_35464 = state_32598__$1;
(statearr_32608_35464[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (3))){
var inst_32595 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32598__$1,inst_32595);
} else {
if((state_val_32599 === (12))){
var state_32598__$1 = state_32598;
var statearr_32611_35465 = state_32598__$1;
(statearr_32611_35465[(2)] = null);

(statearr_32611_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (2))){
var state_32598__$1 = state_32598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32598__$1,(4),ch);
} else {
if((state_val_32599 === (11))){
var inst_32570 = (state_32598[(7)]);
var inst_32584 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32598__$1,(8),inst_32584,inst_32570);
} else {
if((state_val_32599 === (9))){
var state_32598__$1 = state_32598;
var statearr_32624_35470 = state_32598__$1;
(statearr_32624_35470[(2)] = tc);

(statearr_32624_35470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (5))){
var inst_32573 = cljs.core.async.close_BANG_(tc);
var inst_32577 = cljs.core.async.close_BANG_(fc);
var state_32598__$1 = (function (){var statearr_32625 = state_32598;
(statearr_32625[(8)] = inst_32573);

return statearr_32625;
})();
var statearr_32626_35474 = state_32598__$1;
(statearr_32626_35474[(2)] = inst_32577);

(statearr_32626_35474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (14))){
var inst_32591 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
var statearr_32628_35476 = state_32598__$1;
(statearr_32628_35476[(2)] = inst_32591);

(statearr_32628_35476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (10))){
var state_32598__$1 = state_32598;
var statearr_32632_35477 = state_32598__$1;
(statearr_32632_35477[(2)] = fc);

(statearr_32632_35477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (8))){
var inst_32586 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
if(cljs.core.truth_(inst_32586)){
var statearr_32633_35478 = state_32598__$1;
(statearr_32633_35478[(1)] = (12));

} else {
var statearr_32636_35479 = state_32598__$1;
(statearr_32636_35479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_32638 = [null,null,null,null,null,null,null,null,null];
(statearr_32638[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_32638[(1)] = (1));

return statearr_32638;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_32598){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32598);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32642){var ex__31584__auto__ = e32642;
var statearr_32644_35480 = state_32598;
(statearr_32644_35480[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32598[(4)]))){
var statearr_32646_35481 = state_32598;
(statearr_32646_35481[(1)] = cljs.core.first((state_32598[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35485 = state_32598;
state_32598 = G__35485;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_32598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_32598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32657 = f__31746__auto__();
(statearr_32657[(6)] = c__31745__auto___35456);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32696){
var state_val_32697 = (state_32696[(1)]);
if((state_val_32697 === (7))){
var inst_32691 = (state_32696[(2)]);
var state_32696__$1 = state_32696;
var statearr_32700_35491 = state_32696__$1;
(statearr_32700_35491[(2)] = inst_32691);

(statearr_32700_35491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (1))){
var inst_32665 = init;
var inst_32669 = inst_32665;
var state_32696__$1 = (function (){var statearr_32707 = state_32696;
(statearr_32707[(7)] = inst_32669);

return statearr_32707;
})();
var statearr_32713_35492 = state_32696__$1;
(statearr_32713_35492[(2)] = null);

(statearr_32713_35492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (4))){
var inst_32674 = (state_32696[(8)]);
var inst_32674__$1 = (state_32696[(2)]);
var inst_32675 = (inst_32674__$1 == null);
var state_32696__$1 = (function (){var statearr_32718 = state_32696;
(statearr_32718[(8)] = inst_32674__$1);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32719_35496 = state_32696__$1;
(statearr_32719_35496[(1)] = (5));

} else {
var statearr_32722_35498 = state_32696__$1;
(statearr_32722_35498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (6))){
var inst_32669 = (state_32696[(7)]);
var inst_32674 = (state_32696[(8)]);
var inst_32678 = (state_32696[(9)]);
var inst_32678__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32669,inst_32674) : f.call(null,inst_32669,inst_32674));
var inst_32679 = cljs.core.reduced_QMARK_(inst_32678__$1);
var state_32696__$1 = (function (){var statearr_32728 = state_32696;
(statearr_32728[(9)] = inst_32678__$1);

return statearr_32728;
})();
if(inst_32679){
var statearr_32729_35499 = state_32696__$1;
(statearr_32729_35499[(1)] = (8));

} else {
var statearr_32730_35500 = state_32696__$1;
(statearr_32730_35500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (3))){
var inst_32693 = (state_32696[(2)]);
var state_32696__$1 = state_32696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32696__$1,inst_32693);
} else {
if((state_val_32697 === (2))){
var state_32696__$1 = state_32696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32696__$1,(4),ch);
} else {
if((state_val_32697 === (9))){
var inst_32678 = (state_32696[(9)]);
var inst_32669 = inst_32678;
var state_32696__$1 = (function (){var statearr_32734 = state_32696;
(statearr_32734[(7)] = inst_32669);

return statearr_32734;
})();
var statearr_32735_35501 = state_32696__$1;
(statearr_32735_35501[(2)] = null);

(statearr_32735_35501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (5))){
var inst_32669 = (state_32696[(7)]);
var state_32696__$1 = state_32696;
var statearr_32738_35502 = state_32696__$1;
(statearr_32738_35502[(2)] = inst_32669);

(statearr_32738_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (10))){
var inst_32689 = (state_32696[(2)]);
var state_32696__$1 = state_32696;
var statearr_32744_35506 = state_32696__$1;
(statearr_32744_35506[(2)] = inst_32689);

(statearr_32744_35506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32697 === (8))){
var inst_32678 = (state_32696[(9)]);
var inst_32683 = cljs.core.deref(inst_32678);
var state_32696__$1 = state_32696;
var statearr_32746_35508 = state_32696__$1;
(statearr_32746_35508[(2)] = inst_32683);

(statearr_32746_35508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31580__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31580__auto____0 = (function (){
var statearr_32755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32755[(0)] = cljs$core$async$reduce_$_state_machine__31580__auto__);

(statearr_32755[(1)] = (1));

return statearr_32755;
});
var cljs$core$async$reduce_$_state_machine__31580__auto____1 = (function (state_32696){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32696);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32760){var ex__31584__auto__ = e32760;
var statearr_32761_35509 = state_32696;
(statearr_32761_35509[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32696[(4)]))){
var statearr_32762_35510 = state_32696;
(statearr_32762_35510[(1)] = cljs.core.first((state_32696[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35512 = state_32696;
state_32696 = G__35512;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31580__auto__ = function(state_32696){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31580__auto____1.call(this,state_32696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31580__auto____0;
cljs$core$async$reduce_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31580__auto____1;
return cljs$core$async$reduce_$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32768 = f__31746__auto__();
(statearr_32768[(6)] = c__31745__auto__);

return statearr_32768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

return c__31745__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32775){
var state_val_32776 = (state_32775[(1)]);
if((state_val_32776 === (1))){
var inst_32770 = cljs.core.async.reduce(f__$1,init,ch);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32775__$1,(2),inst_32770);
} else {
if((state_val_32776 === (2))){
var inst_32772 = (state_32775[(2)]);
var inst_32773 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32772) : f__$1.call(null,inst_32772));
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32775__$1,inst_32773);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31580__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31580__auto____0 = (function (){
var statearr_32777 = [null,null,null,null,null,null,null];
(statearr_32777[(0)] = cljs$core$async$transduce_$_state_machine__31580__auto__);

(statearr_32777[(1)] = (1));

return statearr_32777;
});
var cljs$core$async$transduce_$_state_machine__31580__auto____1 = (function (state_32775){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32775);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32778){var ex__31584__auto__ = e32778;
var statearr_32779_35514 = state_32775;
(statearr_32779_35514[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32775[(4)]))){
var statearr_32780_35516 = state_32775;
(statearr_32780_35516[(1)] = cljs.core.first((state_32775[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_32775;
state_32775 = G__35521;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31580__auto__ = function(state_32775){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31580__auto____1.call(this,state_32775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31580__auto____0;
cljs$core$async$transduce_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31580__auto____1;
return cljs$core$async$transduce_$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32784 = f__31746__auto__();
(statearr_32784[(6)] = c__31745__auto__);

return statearr_32784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

return c__31745__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_32816){
var state_val_32817 = (state_32816[(1)]);
if((state_val_32817 === (7))){
var inst_32798 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32818_35527 = state_32816__$1;
(statearr_32818_35527[(2)] = inst_32798);

(statearr_32818_35527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (1))){
var inst_32792 = cljs.core.seq(coll);
var inst_32793 = inst_32792;
var state_32816__$1 = (function (){var statearr_32821 = state_32816;
(statearr_32821[(7)] = inst_32793);

return statearr_32821;
})();
var statearr_32823_35528 = state_32816__$1;
(statearr_32823_35528[(2)] = null);

(statearr_32823_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (4))){
var inst_32793 = (state_32816[(7)]);
var inst_32796 = cljs.core.first(inst_32793);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32816__$1,(7),ch,inst_32796);
} else {
if((state_val_32817 === (13))){
var inst_32810 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32827_35529 = state_32816__$1;
(statearr_32827_35529[(2)] = inst_32810);

(statearr_32827_35529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (6))){
var inst_32801 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
if(cljs.core.truth_(inst_32801)){
var statearr_32828_35533 = state_32816__$1;
(statearr_32828_35533[(1)] = (8));

} else {
var statearr_32829_35534 = state_32816__$1;
(statearr_32829_35534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (3))){
var inst_32814 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32816__$1,inst_32814);
} else {
if((state_val_32817 === (12))){
var state_32816__$1 = state_32816;
var statearr_32833_35536 = state_32816__$1;
(statearr_32833_35536[(2)] = null);

(statearr_32833_35536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (2))){
var inst_32793 = (state_32816[(7)]);
var state_32816__$1 = state_32816;
if(cljs.core.truth_(inst_32793)){
var statearr_32835_35537 = state_32816__$1;
(statearr_32835_35537[(1)] = (4));

} else {
var statearr_32837_35538 = state_32816__$1;
(statearr_32837_35538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (11))){
var inst_32807 = cljs.core.async.close_BANG_(ch);
var state_32816__$1 = state_32816;
var statearr_32838_35539 = state_32816__$1;
(statearr_32838_35539[(2)] = inst_32807);

(statearr_32838_35539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (9))){
var state_32816__$1 = state_32816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32843_35540 = state_32816__$1;
(statearr_32843_35540[(1)] = (11));

} else {
var statearr_32844_35544 = state_32816__$1;
(statearr_32844_35544[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (5))){
var inst_32793 = (state_32816[(7)]);
var state_32816__$1 = state_32816;
var statearr_32855_35545 = state_32816__$1;
(statearr_32855_35545[(2)] = inst_32793);

(statearr_32855_35545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (10))){
var inst_32812 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32863_35547 = state_32816__$1;
(statearr_32863_35547[(2)] = inst_32812);

(statearr_32863_35547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (8))){
var inst_32793 = (state_32816[(7)]);
var inst_32803 = cljs.core.next(inst_32793);
var inst_32793__$1 = inst_32803;
var state_32816__$1 = (function (){var statearr_32864 = state_32816;
(statearr_32864[(7)] = inst_32793__$1);

return statearr_32864;
})();
var statearr_32865_35552 = state_32816__$1;
(statearr_32865_35552[(2)] = null);

(statearr_32865_35552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_32867 = [null,null,null,null,null,null,null,null];
(statearr_32867[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_32867[(1)] = (1));

return statearr_32867;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_32816){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_32816);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e32869){var ex__31584__auto__ = e32869;
var statearr_32870_35556 = state_32816;
(statearr_32870_35556[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_32816[(4)]))){
var statearr_32872_35557 = state_32816;
(statearr_32872_35557[(1)] = cljs.core.first((state_32816[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35561 = state_32816;
state_32816 = G__35561;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_32816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_32816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_32873 = f__31746__auto__();
(statearr_32873[(6)] = c__31745__auto__);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

return c__31745__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32881 = arguments.length;
switch (G__32881) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35570 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35570(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35572 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35572(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35576 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35576(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35581 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35581(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32968 = (function (ch,cs,meta32969){
this.ch = ch;
this.cs = cs;
this.meta32969 = meta32969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32970,meta32969__$1){
var self__ = this;
var _32970__$1 = this;
return (new cljs.core.async.t_cljs$core$async32968(self__.ch,self__.cs,meta32969__$1));
}));

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32970){
var self__ = this;
var _32970__$1 = this;
return self__.meta32969;
}));

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32968.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32969","meta32969",2136516419,null)], null);
}));

(cljs.core.async.t_cljs$core$async32968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32968");

(cljs.core.async.t_cljs$core$async32968.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32968.
 */
cljs.core.async.__GT_t_cljs$core$async32968 = (function cljs$core$async$__GT_t_cljs$core$async32968(ch,cs,meta32969){
return (new cljs.core.async.t_cljs$core$async32968(ch,cs,meta32969));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32968(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31745__auto___35600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_33162){
var state_val_33163 = (state_33162[(1)]);
if((state_val_33163 === (7))){
var inst_33154 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33167_35601 = state_33162__$1;
(statearr_33167_35601[(2)] = inst_33154);

(statearr_33167_35601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (20))){
var inst_33046 = (state_33162[(7)]);
var inst_33062 = cljs.core.first(inst_33046);
var inst_33064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33062,(0),null);
var inst_33065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33062,(1),null);
var state_33162__$1 = (function (){var statearr_33171 = state_33162;
(statearr_33171[(8)] = inst_33064);

return statearr_33171;
})();
if(cljs.core.truth_(inst_33065)){
var statearr_33172_35608 = state_33162__$1;
(statearr_33172_35608[(1)] = (22));

} else {
var statearr_33173_35609 = state_33162__$1;
(statearr_33173_35609[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (27))){
var inst_33097 = (state_33162[(9)]);
var inst_33099 = (state_33162[(10)]);
var inst_33104 = (state_33162[(11)]);
var inst_33005 = (state_33162[(12)]);
var inst_33104__$1 = cljs.core._nth(inst_33097,inst_33099);
var inst_33105 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33104__$1,inst_33005,done);
var state_33162__$1 = (function (){var statearr_33177 = state_33162;
(statearr_33177[(11)] = inst_33104__$1);

return statearr_33177;
})();
if(cljs.core.truth_(inst_33105)){
var statearr_33180_35611 = state_33162__$1;
(statearr_33180_35611[(1)] = (30));

} else {
var statearr_33181_35612 = state_33162__$1;
(statearr_33181_35612[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (1))){
var state_33162__$1 = state_33162;
var statearr_33182_35613 = state_33162__$1;
(statearr_33182_35613[(2)] = null);

(statearr_33182_35613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (24))){
var inst_33046 = (state_33162[(7)]);
var inst_33070 = (state_33162[(2)]);
var inst_33071 = cljs.core.next(inst_33046);
var inst_33014 = inst_33071;
var inst_33015 = null;
var inst_33016 = (0);
var inst_33017 = (0);
var state_33162__$1 = (function (){var statearr_33184 = state_33162;
(statearr_33184[(13)] = inst_33070);

(statearr_33184[(14)] = inst_33014);

(statearr_33184[(15)] = inst_33015);

(statearr_33184[(16)] = inst_33016);

(statearr_33184[(17)] = inst_33017);

return statearr_33184;
})();
var statearr_33186_35617 = state_33162__$1;
(statearr_33186_35617[(2)] = null);

(statearr_33186_35617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (39))){
var state_33162__$1 = state_33162;
var statearr_33194_35621 = state_33162__$1;
(statearr_33194_35621[(2)] = null);

(statearr_33194_35621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (4))){
var inst_33005 = (state_33162[(12)]);
var inst_33005__$1 = (state_33162[(2)]);
var inst_33006 = (inst_33005__$1 == null);
var state_33162__$1 = (function (){var statearr_33196 = state_33162;
(statearr_33196[(12)] = inst_33005__$1);

return statearr_33196;
})();
if(cljs.core.truth_(inst_33006)){
var statearr_33197_35623 = state_33162__$1;
(statearr_33197_35623[(1)] = (5));

} else {
var statearr_33198_35624 = state_33162__$1;
(statearr_33198_35624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (15))){
var inst_33017 = (state_33162[(17)]);
var inst_33014 = (state_33162[(14)]);
var inst_33015 = (state_33162[(15)]);
var inst_33016 = (state_33162[(16)]);
var inst_33039 = (state_33162[(2)]);
var inst_33040 = (inst_33017 + (1));
var tmp33191 = inst_33015;
var tmp33192 = inst_33016;
var tmp33193 = inst_33014;
var inst_33014__$1 = tmp33193;
var inst_33015__$1 = tmp33191;
var inst_33016__$1 = tmp33192;
var inst_33017__$1 = inst_33040;
var state_33162__$1 = (function (){var statearr_33200 = state_33162;
(statearr_33200[(18)] = inst_33039);

(statearr_33200[(14)] = inst_33014__$1);

(statearr_33200[(15)] = inst_33015__$1);

(statearr_33200[(16)] = inst_33016__$1);

(statearr_33200[(17)] = inst_33017__$1);

return statearr_33200;
})();
var statearr_33201_35625 = state_33162__$1;
(statearr_33201_35625[(2)] = null);

(statearr_33201_35625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (21))){
var inst_33074 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33205_35626 = state_33162__$1;
(statearr_33205_35626[(2)] = inst_33074);

(statearr_33205_35626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (31))){
var inst_33104 = (state_33162[(11)]);
var inst_33108 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33104);
var state_33162__$1 = state_33162;
var statearr_33206_35629 = state_33162__$1;
(statearr_33206_35629[(2)] = inst_33108);

(statearr_33206_35629[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (32))){
var inst_33099 = (state_33162[(10)]);
var inst_33096 = (state_33162[(19)]);
var inst_33097 = (state_33162[(9)]);
var inst_33098 = (state_33162[(20)]);
var inst_33110 = (state_33162[(2)]);
var inst_33111 = (inst_33099 + (1));
var tmp33202 = inst_33096;
var tmp33203 = inst_33098;
var tmp33204 = inst_33097;
var inst_33096__$1 = tmp33202;
var inst_33097__$1 = tmp33204;
var inst_33098__$1 = tmp33203;
var inst_33099__$1 = inst_33111;
var state_33162__$1 = (function (){var statearr_33207 = state_33162;
(statearr_33207[(21)] = inst_33110);

(statearr_33207[(19)] = inst_33096__$1);

(statearr_33207[(9)] = inst_33097__$1);

(statearr_33207[(20)] = inst_33098__$1);

(statearr_33207[(10)] = inst_33099__$1);

return statearr_33207;
})();
var statearr_33209_35630 = state_33162__$1;
(statearr_33209_35630[(2)] = null);

(statearr_33209_35630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (40))){
var inst_33126 = (state_33162[(22)]);
var inst_33131 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33126);
var state_33162__$1 = state_33162;
var statearr_33213_35631 = state_33162__$1;
(statearr_33213_35631[(2)] = inst_33131);

(statearr_33213_35631[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (33))){
var inst_33117 = (state_33162[(23)]);
var inst_33119 = cljs.core.chunked_seq_QMARK_(inst_33117);
var state_33162__$1 = state_33162;
if(inst_33119){
var statearr_33215_35633 = state_33162__$1;
(statearr_33215_35633[(1)] = (36));

} else {
var statearr_33219_35634 = state_33162__$1;
(statearr_33219_35634[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (13))){
var inst_33030 = (state_33162[(24)]);
var inst_33036 = cljs.core.async.close_BANG_(inst_33030);
var state_33162__$1 = state_33162;
var statearr_33224_35635 = state_33162__$1;
(statearr_33224_35635[(2)] = inst_33036);

(statearr_33224_35635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (22))){
var inst_33064 = (state_33162[(8)]);
var inst_33067 = cljs.core.async.close_BANG_(inst_33064);
var state_33162__$1 = state_33162;
var statearr_33239_35636 = state_33162__$1;
(statearr_33239_35636[(2)] = inst_33067);

(statearr_33239_35636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (36))){
var inst_33117 = (state_33162[(23)]);
var inst_33121 = cljs.core.chunk_first(inst_33117);
var inst_33122 = cljs.core.chunk_rest(inst_33117);
var inst_33123 = cljs.core.count(inst_33121);
var inst_33096 = inst_33122;
var inst_33097 = inst_33121;
var inst_33098 = inst_33123;
var inst_33099 = (0);
var state_33162__$1 = (function (){var statearr_33252 = state_33162;
(statearr_33252[(19)] = inst_33096);

(statearr_33252[(9)] = inst_33097);

(statearr_33252[(20)] = inst_33098);

(statearr_33252[(10)] = inst_33099);

return statearr_33252;
})();
var statearr_33257_35642 = state_33162__$1;
(statearr_33257_35642[(2)] = null);

(statearr_33257_35642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (41))){
var inst_33117 = (state_33162[(23)]);
var inst_33133 = (state_33162[(2)]);
var inst_33134 = cljs.core.next(inst_33117);
var inst_33096 = inst_33134;
var inst_33097 = null;
var inst_33098 = (0);
var inst_33099 = (0);
var state_33162__$1 = (function (){var statearr_33260 = state_33162;
(statearr_33260[(25)] = inst_33133);

(statearr_33260[(19)] = inst_33096);

(statearr_33260[(9)] = inst_33097);

(statearr_33260[(20)] = inst_33098);

(statearr_33260[(10)] = inst_33099);

return statearr_33260;
})();
var statearr_33280_35643 = state_33162__$1;
(statearr_33280_35643[(2)] = null);

(statearr_33280_35643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (43))){
var state_33162__$1 = state_33162;
var statearr_33294_35644 = state_33162__$1;
(statearr_33294_35644[(2)] = null);

(statearr_33294_35644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (29))){
var inst_33142 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33301_35645 = state_33162__$1;
(statearr_33301_35645[(2)] = inst_33142);

(statearr_33301_35645[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (44))){
var inst_33151 = (state_33162[(2)]);
var state_33162__$1 = (function (){var statearr_33305 = state_33162;
(statearr_33305[(26)] = inst_33151);

return statearr_33305;
})();
var statearr_33306_35647 = state_33162__$1;
(statearr_33306_35647[(2)] = null);

(statearr_33306_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (6))){
var inst_33087 = (state_33162[(27)]);
var inst_33086 = cljs.core.deref(cs);
var inst_33087__$1 = cljs.core.keys(inst_33086);
var inst_33088 = cljs.core.count(inst_33087__$1);
var inst_33089 = cljs.core.reset_BANG_(dctr,inst_33088);
var inst_33095 = cljs.core.seq(inst_33087__$1);
var inst_33096 = inst_33095;
var inst_33097 = null;
var inst_33098 = (0);
var inst_33099 = (0);
var state_33162__$1 = (function (){var statearr_33309 = state_33162;
(statearr_33309[(27)] = inst_33087__$1);

(statearr_33309[(28)] = inst_33089);

(statearr_33309[(19)] = inst_33096);

(statearr_33309[(9)] = inst_33097);

(statearr_33309[(20)] = inst_33098);

(statearr_33309[(10)] = inst_33099);

return statearr_33309;
})();
var statearr_33310_35649 = state_33162__$1;
(statearr_33310_35649[(2)] = null);

(statearr_33310_35649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (28))){
var inst_33096 = (state_33162[(19)]);
var inst_33117 = (state_33162[(23)]);
var inst_33117__$1 = cljs.core.seq(inst_33096);
var state_33162__$1 = (function (){var statearr_33318 = state_33162;
(statearr_33318[(23)] = inst_33117__$1);

return statearr_33318;
})();
if(inst_33117__$1){
var statearr_33322_35650 = state_33162__$1;
(statearr_33322_35650[(1)] = (33));

} else {
var statearr_33324_35651 = state_33162__$1;
(statearr_33324_35651[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (25))){
var inst_33099 = (state_33162[(10)]);
var inst_33098 = (state_33162[(20)]);
var inst_33101 = (inst_33099 < inst_33098);
var inst_33102 = inst_33101;
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33102)){
var statearr_33328_35652 = state_33162__$1;
(statearr_33328_35652[(1)] = (27));

} else {
var statearr_33332_35653 = state_33162__$1;
(statearr_33332_35653[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (34))){
var state_33162__$1 = state_33162;
var statearr_33337_35654 = state_33162__$1;
(statearr_33337_35654[(2)] = null);

(statearr_33337_35654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (17))){
var state_33162__$1 = state_33162;
var statearr_33343_35655 = state_33162__$1;
(statearr_33343_35655[(2)] = null);

(statearr_33343_35655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (3))){
var inst_33156 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33162__$1,inst_33156);
} else {
if((state_val_33163 === (12))){
var inst_33079 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33352_35656 = state_33162__$1;
(statearr_33352_35656[(2)] = inst_33079);

(statearr_33352_35656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (2))){
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33162__$1,(4),ch);
} else {
if((state_val_33163 === (23))){
var state_33162__$1 = state_33162;
var statearr_33354_35657 = state_33162__$1;
(statearr_33354_35657[(2)] = null);

(statearr_33354_35657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (35))){
var inst_33140 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33366_35658 = state_33162__$1;
(statearr_33366_35658[(2)] = inst_33140);

(statearr_33366_35658[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (19))){
var inst_33046 = (state_33162[(7)]);
var inst_33053 = cljs.core.chunk_first(inst_33046);
var inst_33054 = cljs.core.chunk_rest(inst_33046);
var inst_33056 = cljs.core.count(inst_33053);
var inst_33014 = inst_33054;
var inst_33015 = inst_33053;
var inst_33016 = inst_33056;
var inst_33017 = (0);
var state_33162__$1 = (function (){var statearr_33376 = state_33162;
(statearr_33376[(14)] = inst_33014);

(statearr_33376[(15)] = inst_33015);

(statearr_33376[(16)] = inst_33016);

(statearr_33376[(17)] = inst_33017);

return statearr_33376;
})();
var statearr_33377_35660 = state_33162__$1;
(statearr_33377_35660[(2)] = null);

(statearr_33377_35660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (11))){
var inst_33014 = (state_33162[(14)]);
var inst_33046 = (state_33162[(7)]);
var inst_33046__$1 = cljs.core.seq(inst_33014);
var state_33162__$1 = (function (){var statearr_33378 = state_33162;
(statearr_33378[(7)] = inst_33046__$1);

return statearr_33378;
})();
if(inst_33046__$1){
var statearr_33379_35662 = state_33162__$1;
(statearr_33379_35662[(1)] = (16));

} else {
var statearr_33380_35663 = state_33162__$1;
(statearr_33380_35663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (9))){
var inst_33081 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33393_35664 = state_33162__$1;
(statearr_33393_35664[(2)] = inst_33081);

(statearr_33393_35664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (5))){
var inst_33012 = cljs.core.deref(cs);
var inst_33013 = cljs.core.seq(inst_33012);
var inst_33014 = inst_33013;
var inst_33015 = null;
var inst_33016 = (0);
var inst_33017 = (0);
var state_33162__$1 = (function (){var statearr_33402 = state_33162;
(statearr_33402[(14)] = inst_33014);

(statearr_33402[(15)] = inst_33015);

(statearr_33402[(16)] = inst_33016);

(statearr_33402[(17)] = inst_33017);

return statearr_33402;
})();
var statearr_33408_35665 = state_33162__$1;
(statearr_33408_35665[(2)] = null);

(statearr_33408_35665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (14))){
var state_33162__$1 = state_33162;
var statearr_33409_35666 = state_33162__$1;
(statearr_33409_35666[(2)] = null);

(statearr_33409_35666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (45))){
var inst_33148 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33410_35667 = state_33162__$1;
(statearr_33410_35667[(2)] = inst_33148);

(statearr_33410_35667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (26))){
var inst_33087 = (state_33162[(27)]);
var inst_33144 = (state_33162[(2)]);
var inst_33145 = cljs.core.seq(inst_33087);
var state_33162__$1 = (function (){var statearr_33420 = state_33162;
(statearr_33420[(29)] = inst_33144);

return statearr_33420;
})();
if(inst_33145){
var statearr_33421_35668 = state_33162__$1;
(statearr_33421_35668[(1)] = (42));

} else {
var statearr_33422_35669 = state_33162__$1;
(statearr_33422_35669[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (16))){
var inst_33046 = (state_33162[(7)]);
var inst_33050 = cljs.core.chunked_seq_QMARK_(inst_33046);
var state_33162__$1 = state_33162;
if(inst_33050){
var statearr_33426_35672 = state_33162__$1;
(statearr_33426_35672[(1)] = (19));

} else {
var statearr_33427_35673 = state_33162__$1;
(statearr_33427_35673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (38))){
var inst_33137 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33429_35674 = state_33162__$1;
(statearr_33429_35674[(2)] = inst_33137);

(statearr_33429_35674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (30))){
var state_33162__$1 = state_33162;
var statearr_33430_35675 = state_33162__$1;
(statearr_33430_35675[(2)] = null);

(statearr_33430_35675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (10))){
var inst_33015 = (state_33162[(15)]);
var inst_33017 = (state_33162[(17)]);
var inst_33027 = cljs.core._nth(inst_33015,inst_33017);
var inst_33030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33027,(0),null);
var inst_33032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33027,(1),null);
var state_33162__$1 = (function (){var statearr_33439 = state_33162;
(statearr_33439[(24)] = inst_33030);

return statearr_33439;
})();
if(cljs.core.truth_(inst_33032)){
var statearr_33440_35679 = state_33162__$1;
(statearr_33440_35679[(1)] = (13));

} else {
var statearr_33441_35680 = state_33162__$1;
(statearr_33441_35680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (18))){
var inst_33077 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33442_35682 = state_33162__$1;
(statearr_33442_35682[(2)] = inst_33077);

(statearr_33442_35682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (42))){
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33162__$1,(45),dchan);
} else {
if((state_val_33163 === (37))){
var inst_33117 = (state_33162[(23)]);
var inst_33126 = (state_33162[(22)]);
var inst_33005 = (state_33162[(12)]);
var inst_33126__$1 = cljs.core.first(inst_33117);
var inst_33128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33126__$1,inst_33005,done);
var state_33162__$1 = (function (){var statearr_33444 = state_33162;
(statearr_33444[(22)] = inst_33126__$1);

return statearr_33444;
})();
if(cljs.core.truth_(inst_33128)){
var statearr_33446_35683 = state_33162__$1;
(statearr_33446_35683[(1)] = (39));

} else {
var statearr_33448_35684 = state_33162__$1;
(statearr_33448_35684[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (8))){
var inst_33017 = (state_33162[(17)]);
var inst_33016 = (state_33162[(16)]);
var inst_33019 = (inst_33017 < inst_33016);
var inst_33020 = inst_33019;
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33020)){
var statearr_33449_35686 = state_33162__$1;
(statearr_33449_35686[(1)] = (10));

} else {
var statearr_33450_35687 = state_33162__$1;
(statearr_33450_35687[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31580__auto__ = null;
var cljs$core$async$mult_$_state_machine__31580__auto____0 = (function (){
var statearr_33452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33452[(0)] = cljs$core$async$mult_$_state_machine__31580__auto__);

(statearr_33452[(1)] = (1));

return statearr_33452;
});
var cljs$core$async$mult_$_state_machine__31580__auto____1 = (function (state_33162){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_33162);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e33453){var ex__31584__auto__ = e33453;
var statearr_33454_35689 = state_33162;
(statearr_33454_35689[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_33162[(4)]))){
var statearr_33455_35690 = state_33162;
(statearr_33455_35690[(1)] = cljs.core.first((state_33162[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35691 = state_33162;
state_33162 = G__35691;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31580__auto__ = function(state_33162){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31580__auto____1.call(this,state_33162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31580__auto____0;
cljs$core$async$mult_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31580__auto____1;
return cljs$core$async$mult_$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_33460 = f__31746__auto__();
(statearr_33460[(6)] = c__31745__auto___35600);

return statearr_33460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33463 = arguments.length;
switch (G__33463) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35693 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35693(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35694 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35694(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35699 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35699(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35700 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35700(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35705 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35705(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35709 = arguments.length;
var i__5770__auto___35710 = (0);
while(true){
if((i__5770__auto___35710 < len__5769__auto___35709)){
args__5775__auto__.push((arguments[i__5770__auto___35710]));

var G__35715 = (i__5770__auto___35710 + (1));
i__5770__auto___35710 = G__35715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33560){
var map__33561 = p__33560;
var map__33561__$1 = cljs.core.__destructure_map(map__33561);
var opts = map__33561__$1;
var statearr_33562_35722 = state;
(statearr_33562_35722[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33564_35723 = state;
(statearr_33564_35723[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33569_35724 = state;
(statearr_33569_35724[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33534){
var G__33535 = cljs.core.first(seq33534);
var seq33534__$1 = cljs.core.next(seq33534);
var G__33536 = cljs.core.first(seq33534__$1);
var seq33534__$2 = cljs.core.next(seq33534__$1);
var G__33537 = cljs.core.first(seq33534__$2);
var seq33534__$3 = cljs.core.next(seq33534__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33535,G__33536,G__33537,seq33534__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33595 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33596){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33596 = meta33596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33597,meta33596__$1){
var self__ = this;
var _33597__$1 = this;
return (new cljs.core.async.t_cljs$core$async33595(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33596__$1));
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33597){
var self__ = this;
var _33597__$1 = this;
return self__.meta33596;
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33595.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33596","meta33596",-1120226720,null)], null);
}));

(cljs.core.async.t_cljs$core$async33595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33595");

(cljs.core.async.t_cljs$core$async33595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33595.
 */
cljs.core.async.__GT_t_cljs$core$async33595 = (function cljs$core$async$__GT_t_cljs$core$async33595(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33596){
return (new cljs.core.async.t_cljs$core$async33595(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33596));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33595(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31745__auto___35733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var inst_33640 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33640)){
var statearr_33696_35734 = state_33690__$1;
(statearr_33696_35734[(1)] = (8));

} else {
var statearr_33697_35735 = state_33690__$1;
(statearr_33697_35735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (20))){
var inst_33633 = (state_33690[(7)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33690__$1,(23),out,inst_33633);
} else {
if((state_val_33691 === (1))){
var inst_33614 = calc_state();
var inst_33615 = cljs.core.__destructure_map(inst_33614);
var inst_33616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33619 = inst_33614;
var state_33690__$1 = (function (){var statearr_33698 = state_33690;
(statearr_33698[(8)] = inst_33616);

(statearr_33698[(9)] = inst_33617);

(statearr_33698[(10)] = inst_33618);

(statearr_33698[(11)] = inst_33619);

return statearr_33698;
})();
var statearr_33699_35736 = state_33690__$1;
(statearr_33699_35736[(2)] = null);

(statearr_33699_35736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (24))){
var inst_33622 = (state_33690[(12)]);
var inst_33619 = inst_33622;
var state_33690__$1 = (function (){var statearr_33700 = state_33690;
(statearr_33700[(11)] = inst_33619);

return statearr_33700;
})();
var statearr_33701_35737 = state_33690__$1;
(statearr_33701_35737[(2)] = null);

(statearr_33701_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33633 = (state_33690[(7)]);
var inst_33635 = (state_33690[(13)]);
var inst_33632 = (state_33690[(2)]);
var inst_33633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33632,(0),null);
var inst_33634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33632,(1),null);
var inst_33635__$1 = (inst_33633__$1 == null);
var state_33690__$1 = (function (){var statearr_33706 = state_33690;
(statearr_33706[(7)] = inst_33633__$1);

(statearr_33706[(14)] = inst_33634);

(statearr_33706[(13)] = inst_33635__$1);

return statearr_33706;
})();
if(cljs.core.truth_(inst_33635__$1)){
var statearr_33707_35738 = state_33690__$1;
(statearr_33707_35738[(1)] = (5));

} else {
var statearr_33708_35739 = state_33690__$1;
(statearr_33708_35739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (15))){
var inst_33624 = (state_33690[(15)]);
var inst_33659 = (state_33690[(16)]);
var inst_33659__$1 = cljs.core.empty_QMARK_(inst_33624);
var state_33690__$1 = (function (){var statearr_33713 = state_33690;
(statearr_33713[(16)] = inst_33659__$1);

return statearr_33713;
})();
if(inst_33659__$1){
var statearr_33716_35740 = state_33690__$1;
(statearr_33716_35740[(1)] = (17));

} else {
var statearr_33721_35741 = state_33690__$1;
(statearr_33721_35741[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (21))){
var inst_33622 = (state_33690[(12)]);
var inst_33619 = inst_33622;
var state_33690__$1 = (function (){var statearr_33730 = state_33690;
(statearr_33730[(11)] = inst_33619);

return statearr_33730;
})();
var statearr_33736_35743 = state_33690__$1;
(statearr_33736_35743[(2)] = null);

(statearr_33736_35743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (13))){
var inst_33647 = (state_33690[(2)]);
var inst_33648 = calc_state();
var inst_33619 = inst_33648;
var state_33690__$1 = (function (){var statearr_33737 = state_33690;
(statearr_33737[(17)] = inst_33647);

(statearr_33737[(11)] = inst_33619);

return statearr_33737;
})();
var statearr_33738_35744 = state_33690__$1;
(statearr_33738_35744[(2)] = null);

(statearr_33738_35744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (22))){
var inst_33679 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33739_35746 = state_33690__$1;
(statearr_33739_35746[(2)] = inst_33679);

(statearr_33739_35746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33634 = (state_33690[(14)]);
var inst_33638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33634,change);
var state_33690__$1 = state_33690;
var statearr_33740_35747 = state_33690__$1;
(statearr_33740_35747[(2)] = inst_33638);

(statearr_33740_35747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (25))){
var state_33690__$1 = state_33690;
var statearr_33744_35748 = state_33690__$1;
(statearr_33744_35748[(2)] = null);

(statearr_33744_35748[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (17))){
var inst_33626 = (state_33690[(18)]);
var inst_33634 = (state_33690[(14)]);
var inst_33661 = (inst_33626.cljs$core$IFn$_invoke$arity$1 ? inst_33626.cljs$core$IFn$_invoke$arity$1(inst_33634) : inst_33626.call(null,inst_33634));
var inst_33662 = cljs.core.not(inst_33661);
var state_33690__$1 = state_33690;
var statearr_33746_35749 = state_33690__$1;
(statearr_33746_35749[(2)] = inst_33662);

(statearr_33746_35749[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var state_33690__$1 = state_33690;
var statearr_33755_35750 = state_33690__$1;
(statearr_33755_35750[(2)] = null);

(statearr_33755_35750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (2))){
var inst_33619 = (state_33690[(11)]);
var inst_33622 = (state_33690[(12)]);
var inst_33622__$1 = cljs.core.__destructure_map(inst_33619);
var inst_33624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33622__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33622__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33622__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33690__$1 = (function (){var statearr_33758 = state_33690;
(statearr_33758[(12)] = inst_33622__$1);

(statearr_33758[(15)] = inst_33624);

(statearr_33758[(18)] = inst_33626);

return statearr_33758;
})();
return cljs.core.async.ioc_alts_BANG_(state_33690__$1,(4),inst_33627);
} else {
if((state_val_33691 === (23))){
var inst_33670 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33670)){
var statearr_33760_35751 = state_33690__$1;
(statearr_33760_35751[(1)] = (24));

} else {
var statearr_33762_35752 = state_33690__$1;
(statearr_33762_35752[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (19))){
var inst_33665 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33777_35759 = state_33690__$1;
(statearr_33777_35759[(2)] = inst_33665);

(statearr_33777_35759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (11))){
var inst_33634 = (state_33690[(14)]);
var inst_33644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33634);
var state_33690__$1 = state_33690;
var statearr_33793_35760 = state_33690__$1;
(statearr_33793_35760[(2)] = inst_33644);

(statearr_33793_35760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (9))){
var inst_33624 = (state_33690[(15)]);
var inst_33634 = (state_33690[(14)]);
var inst_33651 = (state_33690[(19)]);
var inst_33651__$1 = (inst_33624.cljs$core$IFn$_invoke$arity$1 ? inst_33624.cljs$core$IFn$_invoke$arity$1(inst_33634) : inst_33624.call(null,inst_33634));
var state_33690__$1 = (function (){var statearr_33798 = state_33690;
(statearr_33798[(19)] = inst_33651__$1);

return statearr_33798;
})();
if(cljs.core.truth_(inst_33651__$1)){
var statearr_33799_35761 = state_33690__$1;
(statearr_33799_35761[(1)] = (14));

} else {
var statearr_33800_35762 = state_33690__$1;
(statearr_33800_35762[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33635 = (state_33690[(13)]);
var state_33690__$1 = state_33690;
var statearr_33801_35763 = state_33690__$1;
(statearr_33801_35763[(2)] = inst_33635);

(statearr_33801_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (14))){
var inst_33651 = (state_33690[(19)]);
var state_33690__$1 = state_33690;
var statearr_33813_35764 = state_33690__$1;
(statearr_33813_35764[(2)] = inst_33651);

(statearr_33813_35764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (26))){
var inst_33675 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33824_35765 = state_33690__$1;
(statearr_33824_35765[(2)] = inst_33675);

(statearr_33824_35765[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (16))){
var inst_33667 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33667)){
var statearr_33829_35766 = state_33690__$1;
(statearr_33829_35766[(1)] = (20));

} else {
var statearr_33830_35767 = state_33690__$1;
(statearr_33830_35767[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var inst_33681 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33845_35768 = state_33690__$1;
(statearr_33845_35768[(2)] = inst_33681);

(statearr_33845_35768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (18))){
var inst_33659 = (state_33690[(16)]);
var state_33690__$1 = state_33690;
var statearr_33851_35769 = state_33690__$1;
(statearr_33851_35769[(2)] = inst_33659);

(statearr_33851_35769[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33633 = (state_33690[(7)]);
var inst_33642 = (inst_33633 == null);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33642)){
var statearr_33853_35771 = state_33690__$1;
(statearr_33853_35771[(1)] = (11));

} else {
var statearr_33857_35772 = state_33690__$1;
(statearr_33857_35772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31580__auto__ = null;
var cljs$core$async$mix_$_state_machine__31580__auto____0 = (function (){
var statearr_33858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33858[(0)] = cljs$core$async$mix_$_state_machine__31580__auto__);

(statearr_33858[(1)] = (1));

return statearr_33858;
});
var cljs$core$async$mix_$_state_machine__31580__auto____1 = (function (state_33690){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_33690);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e33859){var ex__31584__auto__ = e33859;
var statearr_33860_35774 = state_33690;
(statearr_33860_35774[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_33690[(4)]))){
var statearr_33861_35775 = state_33690;
(statearr_33861_35775[(1)] = cljs.core.first((state_33690[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35776 = state_33690;
state_33690 = G__35776;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31580__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31580__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31580__auto____0;
cljs$core$async$mix_$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31580__auto____1;
return cljs$core$async$mix_$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_33863 = f__31746__auto__();
(statearr_33863[(6)] = c__31745__auto___35733);

return statearr_33863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35786 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35786(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35788 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35788(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35789 = (function() {
var G__35790 = null;
var G__35790__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35790__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35790 = function(p,v){
switch(arguments.length){
case 1:
return G__35790__1.call(this,p);
case 2:
return G__35790__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35790.cljs$core$IFn$_invoke$arity$1 = G__35790__1;
G__35790.cljs$core$IFn$_invoke$arity$2 = G__35790__2;
return G__35790;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33919 = arguments.length;
switch (G__33919) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35789(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35789(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33942 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33943){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33943 = meta33943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33944,meta33943__$1){
var self__ = this;
var _33944__$1 = this;
return (new cljs.core.async.t_cljs$core$async33942(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33943__$1));
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33944){
var self__ = this;
var _33944__$1 = this;
return self__.meta33943;
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33943","meta33943",-339611854,null)], null);
}));

(cljs.core.async.t_cljs$core$async33942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33942");

(cljs.core.async.t_cljs$core$async33942.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33942.
 */
cljs.core.async.__GT_t_cljs$core$async33942 = (function cljs$core$async$__GT_t_cljs$core$async33942(ch,topic_fn,buf_fn,mults,ensure_mult,meta33943){
return (new cljs.core.async.t_cljs$core$async33942(ch,topic_fn,buf_fn,mults,ensure_mult,meta33943));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33932 = arguments.length;
switch (G__33932) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33926_SHARP_){
if(cljs.core.truth_((p1__33926_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33926_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33926_SHARP_.call(null,topic)))){
return p1__33926_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33926_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33942(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31745__auto___35819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34037){
var state_val_34038 = (state_34037[(1)]);
if((state_val_34038 === (7))){
var inst_34033 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34047_35823 = state_34037__$1;
(statearr_34047_35823[(2)] = inst_34033);

(statearr_34047_35823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (20))){
var state_34037__$1 = state_34037;
var statearr_34050_35824 = state_34037__$1;
(statearr_34050_35824[(2)] = null);

(statearr_34050_35824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (1))){
var state_34037__$1 = state_34037;
var statearr_34053_35825 = state_34037__$1;
(statearr_34053_35825[(2)] = null);

(statearr_34053_35825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (24))){
var inst_34016 = (state_34037[(7)]);
var inst_34025 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34016);
var state_34037__$1 = state_34037;
var statearr_34065_35826 = state_34037__$1;
(statearr_34065_35826[(2)] = inst_34025);

(statearr_34065_35826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (4))){
var inst_33959 = (state_34037[(8)]);
var inst_33959__$1 = (state_34037[(2)]);
var inst_33960 = (inst_33959__$1 == null);
var state_34037__$1 = (function (){var statearr_34070 = state_34037;
(statearr_34070[(8)] = inst_33959__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_33960)){
var statearr_34071_35828 = state_34037__$1;
(statearr_34071_35828[(1)] = (5));

} else {
var statearr_34072_35829 = state_34037__$1;
(statearr_34072_35829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (15))){
var inst_34010 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34079_35833 = state_34037__$1;
(statearr_34079_35833[(2)] = inst_34010);

(statearr_34079_35833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (21))){
var inst_34030 = (state_34037[(2)]);
var state_34037__$1 = (function (){var statearr_34084 = state_34037;
(statearr_34084[(9)] = inst_34030);

return statearr_34084;
})();
var statearr_34085_35835 = state_34037__$1;
(statearr_34085_35835[(2)] = null);

(statearr_34085_35835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (13))){
var inst_33985 = (state_34037[(10)]);
var inst_33994 = cljs.core.chunked_seq_QMARK_(inst_33985);
var state_34037__$1 = state_34037;
if(inst_33994){
var statearr_34091_35839 = state_34037__$1;
(statearr_34091_35839[(1)] = (16));

} else {
var statearr_34092_35840 = state_34037__$1;
(statearr_34092_35840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (22))){
var inst_34022 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
if(cljs.core.truth_(inst_34022)){
var statearr_34101_35841 = state_34037__$1;
(statearr_34101_35841[(1)] = (23));

} else {
var statearr_34104_35842 = state_34037__$1;
(statearr_34104_35842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (6))){
var inst_33959 = (state_34037[(8)]);
var inst_34016 = (state_34037[(7)]);
var inst_34018 = (state_34037[(11)]);
var inst_34016__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33959) : topic_fn.call(null,inst_33959));
var inst_34017 = cljs.core.deref(mults);
var inst_34018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34017,inst_34016__$1);
var state_34037__$1 = (function (){var statearr_34108 = state_34037;
(statearr_34108[(7)] = inst_34016__$1);

(statearr_34108[(11)] = inst_34018__$1);

return statearr_34108;
})();
if(cljs.core.truth_(inst_34018__$1)){
var statearr_34113_35844 = state_34037__$1;
(statearr_34113_35844[(1)] = (19));

} else {
var statearr_34115_35845 = state_34037__$1;
(statearr_34115_35845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (25))){
var inst_34027 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34118_35847 = state_34037__$1;
(statearr_34118_35847[(2)] = inst_34027);

(statearr_34118_35847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (17))){
var inst_33985 = (state_34037[(10)]);
var inst_34001 = cljs.core.first(inst_33985);
var inst_34002 = cljs.core.async.muxch_STAR_(inst_34001);
var inst_34003 = cljs.core.async.close_BANG_(inst_34002);
var inst_34004 = cljs.core.next(inst_33985);
var inst_33969 = inst_34004;
var inst_33970 = null;
var inst_33971 = (0);
var inst_33972 = (0);
var state_34037__$1 = (function (){var statearr_34128 = state_34037;
(statearr_34128[(12)] = inst_34003);

(statearr_34128[(13)] = inst_33969);

(statearr_34128[(14)] = inst_33970);

(statearr_34128[(15)] = inst_33971);

(statearr_34128[(16)] = inst_33972);

return statearr_34128;
})();
var statearr_34131_35850 = state_34037__$1;
(statearr_34131_35850[(2)] = null);

(statearr_34131_35850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (3))){
var inst_34035 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34037__$1,inst_34035);
} else {
if((state_val_34038 === (12))){
var inst_34012 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34135_35853 = state_34037__$1;
(statearr_34135_35853[(2)] = inst_34012);

(statearr_34135_35853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (2))){
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34037__$1,(4),ch);
} else {
if((state_val_34038 === (23))){
var state_34037__$1 = state_34037;
var statearr_34138_35854 = state_34037__$1;
(statearr_34138_35854[(2)] = null);

(statearr_34138_35854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (19))){
var inst_34018 = (state_34037[(11)]);
var inst_33959 = (state_34037[(8)]);
var inst_34020 = cljs.core.async.muxch_STAR_(inst_34018);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34037__$1,(22),inst_34020,inst_33959);
} else {
if((state_val_34038 === (11))){
var inst_33969 = (state_34037[(13)]);
var inst_33985 = (state_34037[(10)]);
var inst_33985__$1 = cljs.core.seq(inst_33969);
var state_34037__$1 = (function (){var statearr_34147 = state_34037;
(statearr_34147[(10)] = inst_33985__$1);

return statearr_34147;
})();
if(inst_33985__$1){
var statearr_34153_35856 = state_34037__$1;
(statearr_34153_35856[(1)] = (13));

} else {
var statearr_34154_35857 = state_34037__$1;
(statearr_34154_35857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (9))){
var inst_34014 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34160_35859 = state_34037__$1;
(statearr_34160_35859[(2)] = inst_34014);

(statearr_34160_35859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (5))){
var inst_33966 = cljs.core.deref(mults);
var inst_33967 = cljs.core.vals(inst_33966);
var inst_33968 = cljs.core.seq(inst_33967);
var inst_33969 = inst_33968;
var inst_33970 = null;
var inst_33971 = (0);
var inst_33972 = (0);
var state_34037__$1 = (function (){var statearr_34166 = state_34037;
(statearr_34166[(13)] = inst_33969);

(statearr_34166[(14)] = inst_33970);

(statearr_34166[(15)] = inst_33971);

(statearr_34166[(16)] = inst_33972);

return statearr_34166;
})();
var statearr_34172_35862 = state_34037__$1;
(statearr_34172_35862[(2)] = null);

(statearr_34172_35862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (14))){
var state_34037__$1 = state_34037;
var statearr_34185_35865 = state_34037__$1;
(statearr_34185_35865[(2)] = null);

(statearr_34185_35865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (16))){
var inst_33985 = (state_34037[(10)]);
var inst_33996 = cljs.core.chunk_first(inst_33985);
var inst_33997 = cljs.core.chunk_rest(inst_33985);
var inst_33998 = cljs.core.count(inst_33996);
var inst_33969 = inst_33997;
var inst_33970 = inst_33996;
var inst_33971 = inst_33998;
var inst_33972 = (0);
var state_34037__$1 = (function (){var statearr_34196 = state_34037;
(statearr_34196[(13)] = inst_33969);

(statearr_34196[(14)] = inst_33970);

(statearr_34196[(15)] = inst_33971);

(statearr_34196[(16)] = inst_33972);

return statearr_34196;
})();
var statearr_34199_35870 = state_34037__$1;
(statearr_34199_35870[(2)] = null);

(statearr_34199_35870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (10))){
var inst_33970 = (state_34037[(14)]);
var inst_33972 = (state_34037[(16)]);
var inst_33969 = (state_34037[(13)]);
var inst_33971 = (state_34037[(15)]);
var inst_33978 = cljs.core._nth(inst_33970,inst_33972);
var inst_33980 = cljs.core.async.muxch_STAR_(inst_33978);
var inst_33981 = cljs.core.async.close_BANG_(inst_33980);
var inst_33982 = (inst_33972 + (1));
var tmp34181 = inst_33971;
var tmp34182 = inst_33970;
var tmp34183 = inst_33969;
var inst_33969__$1 = tmp34183;
var inst_33970__$1 = tmp34182;
var inst_33971__$1 = tmp34181;
var inst_33972__$1 = inst_33982;
var state_34037__$1 = (function (){var statearr_34229 = state_34037;
(statearr_34229[(17)] = inst_33981);

(statearr_34229[(13)] = inst_33969__$1);

(statearr_34229[(14)] = inst_33970__$1);

(statearr_34229[(15)] = inst_33971__$1);

(statearr_34229[(16)] = inst_33972__$1);

return statearr_34229;
})();
var statearr_34242_35876 = state_34037__$1;
(statearr_34242_35876[(2)] = null);

(statearr_34242_35876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (18))){
var inst_34007 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34250_35881 = state_34037__$1;
(statearr_34250_35881[(2)] = inst_34007);

(statearr_34250_35881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (8))){
var inst_33972 = (state_34037[(16)]);
var inst_33971 = (state_34037[(15)]);
var inst_33974 = (inst_33972 < inst_33971);
var inst_33975 = inst_33974;
var state_34037__$1 = state_34037;
if(cljs.core.truth_(inst_33975)){
var statearr_34256_35882 = state_34037__$1;
(statearr_34256_35882[(1)] = (10));

} else {
var statearr_34257_35883 = state_34037__$1;
(statearr_34257_35883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34264[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34264[(1)] = (1));

return statearr_34264;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34037){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34037);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34265){var ex__31584__auto__ = e34265;
var statearr_34267_35885 = state_34037;
(statearr_34267_35885[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34037[(4)]))){
var statearr_34269_35887 = state_34037;
(statearr_34269_35887[(1)] = cljs.core.first((state_34037[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35888 = state_34037;
state_34037 = G__35888;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34277 = f__31746__auto__();
(statearr_34277[(6)] = c__31745__auto___35819);

return statearr_34277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34290 = arguments.length;
switch (G__34290) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34324 = arguments.length;
switch (G__34324) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34385 = arguments.length;
switch (G__34385) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31745__auto___35913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (7))){
var state_34504__$1 = state_34504;
var statearr_34513_35914 = state_34504__$1;
(statearr_34513_35914[(2)] = null);

(statearr_34513_35914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
var statearr_34517_35915 = state_34504__$1;
(statearr_34517_35915[(2)] = null);

(statearr_34517_35915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (4))){
var inst_34430 = (state_34504[(7)]);
var inst_34427 = (state_34504[(8)]);
var inst_34436 = (inst_34430 < inst_34427);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34436)){
var statearr_34524_35920 = state_34504__$1;
(statearr_34524_35920[(1)] = (6));

} else {
var statearr_34526_35921 = state_34504__$1;
(statearr_34526_35921[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (15))){
var inst_34485 = (state_34504[(9)]);
var inst_34493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34485);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34504__$1,(17),out,inst_34493);
} else {
if((state_val_34505 === (13))){
var inst_34485 = (state_34504[(9)]);
var inst_34485__$1 = (state_34504[(2)]);
var inst_34487 = cljs.core.some(cljs.core.nil_QMARK_,inst_34485__$1);
var state_34504__$1 = (function (){var statearr_34528 = state_34504;
(statearr_34528[(9)] = inst_34485__$1);

return statearr_34528;
})();
if(cljs.core.truth_(inst_34487)){
var statearr_34529_35933 = state_34504__$1;
(statearr_34529_35933[(1)] = (14));

} else {
var statearr_34530_35934 = state_34504__$1;
(statearr_34530_35934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var state_34504__$1 = state_34504;
var statearr_34532_35939 = state_34504__$1;
(statearr_34532_35939[(2)] = null);

(statearr_34532_35939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (17))){
var inst_34495 = (state_34504[(2)]);
var state_34504__$1 = (function (){var statearr_34538 = state_34504;
(statearr_34538[(10)] = inst_34495);

return statearr_34538;
})();
var statearr_34539_35945 = state_34504__$1;
(statearr_34539_35945[(2)] = null);

(statearr_34539_35945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (3))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34500);
} else {
if((state_val_34505 === (12))){
var _ = (function (){var statearr_34543 = state_34504;
(statearr_34543[(4)] = cljs.core.rest((state_34504[(4)])));

return statearr_34543;
})();
var state_34504__$1 = state_34504;
var ex34537 = (state_34504__$1[(2)]);
var statearr_34545_35947 = state_34504__$1;
(statearr_34545_35947[(5)] = ex34537);


if((ex34537 instanceof Object)){
var statearr_34547_35948 = state_34504__$1;
(statearr_34547_35948[(1)] = (11));

(statearr_34547_35948[(5)] = null);

} else {
throw ex34537;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (2))){
var inst_34423 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34427 = cnt;
var inst_34430 = (0);
var state_34504__$1 = (function (){var statearr_34549 = state_34504;
(statearr_34549[(11)] = inst_34423);

(statearr_34549[(8)] = inst_34427);

(statearr_34549[(7)] = inst_34430);

return statearr_34549;
})();
var statearr_34550_35949 = state_34504__$1;
(statearr_34550_35949[(2)] = null);

(statearr_34550_35949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (11))){
var inst_34451 = (state_34504[(2)]);
var inst_34453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34504__$1 = (function (){var statearr_34559 = state_34504;
(statearr_34559[(12)] = inst_34451);

return statearr_34559;
})();
var statearr_34564_35953 = state_34504__$1;
(statearr_34564_35953[(2)] = inst_34453);

(statearr_34564_35953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (9))){
var inst_34430 = (state_34504[(7)]);
var _ = (function (){var statearr_34566 = state_34504;
(statearr_34566[(4)] = cljs.core.cons((12),(state_34504[(4)])));

return statearr_34566;
})();
var inst_34463 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34430) : chs__$1.call(null,inst_34430));
var inst_34464 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34430) : done.call(null,inst_34430));
var inst_34465 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34463,inst_34464);
var ___$1 = (function (){var statearr_34568 = state_34504;
(statearr_34568[(4)] = cljs.core.rest((state_34504[(4)])));

return statearr_34568;
})();
var state_34504__$1 = state_34504;
var statearr_34571_35954 = state_34504__$1;
(statearr_34571_35954[(2)] = inst_34465);

(statearr_34571_35954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var inst_34479 = (state_34504[(2)]);
var state_34504__$1 = (function (){var statearr_34572 = state_34504;
(statearr_34572[(13)] = inst_34479);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,(13),dchan);
} else {
if((state_val_34505 === (14))){
var inst_34489 = cljs.core.async.close_BANG_(out);
var state_34504__$1 = state_34504;
var statearr_34573_35955 = state_34504__$1;
(statearr_34573_35955[(2)] = inst_34489);

(statearr_34573_35955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (16))){
var inst_34498 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34574_35956 = state_34504__$1;
(statearr_34574_35956[(2)] = inst_34498);

(statearr_34574_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (10))){
var inst_34430 = (state_34504[(7)]);
var inst_34468 = (state_34504[(2)]);
var inst_34473 = (inst_34430 + (1));
var inst_34430__$1 = inst_34473;
var state_34504__$1 = (function (){var statearr_34575 = state_34504;
(statearr_34575[(14)] = inst_34468);

(statearr_34575[(7)] = inst_34430__$1);

return statearr_34575;
})();
var statearr_34576_35957 = state_34504__$1;
(statearr_34576_35957[(2)] = null);

(statearr_34576_35957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (8))){
var inst_34477 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34577_35958 = state_34504__$1;
(statearr_34577_35958[(2)] = inst_34477);

(statearr_34577_35958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34579[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34579[(1)] = (1));

return statearr_34579;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34504){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34580){var ex__31584__auto__ = e34580;
var statearr_34581_35963 = state_34504;
(statearr_34581_35963[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34504[(4)]))){
var statearr_34582_35964 = state_34504;
(statearr_34582_35964[(1)] = cljs.core.first((state_34504[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35965 = state_34504;
state_34504 = G__35965;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34584 = f__31746__auto__();
(statearr_34584[(6)] = c__31745__auto___35913);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___35968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34623){
var state_val_34624 = (state_34623[(1)]);
if((state_val_34624 === (7))){
var inst_34601 = (state_34623[(7)]);
var inst_34602 = (state_34623[(8)]);
var inst_34601__$1 = (state_34623[(2)]);
var inst_34602__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34601__$1,(0),null);
var inst_34603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34601__$1,(1),null);
var inst_34604 = (inst_34602__$1 == null);
var state_34623__$1 = (function (){var statearr_34625 = state_34623;
(statearr_34625[(7)] = inst_34601__$1);

(statearr_34625[(8)] = inst_34602__$1);

(statearr_34625[(9)] = inst_34603);

return statearr_34625;
})();
if(cljs.core.truth_(inst_34604)){
var statearr_34627_35970 = state_34623__$1;
(statearr_34627_35970[(1)] = (8));

} else {
var statearr_34628_35971 = state_34623__$1;
(statearr_34628_35971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (1))){
var inst_34590 = cljs.core.vec(chs);
var inst_34591 = inst_34590;
var state_34623__$1 = (function (){var statearr_34629 = state_34623;
(statearr_34629[(10)] = inst_34591);

return statearr_34629;
})();
var statearr_34630_35972 = state_34623__$1;
(statearr_34630_35972[(2)] = null);

(statearr_34630_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (4))){
var inst_34591 = (state_34623[(10)]);
var state_34623__$1 = state_34623;
return cljs.core.async.ioc_alts_BANG_(state_34623__$1,(7),inst_34591);
} else {
if((state_val_34624 === (6))){
var inst_34618 = (state_34623[(2)]);
var state_34623__$1 = state_34623;
var statearr_34631_35973 = state_34623__$1;
(statearr_34631_35973[(2)] = inst_34618);

(statearr_34631_35973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (3))){
var inst_34620 = (state_34623[(2)]);
var state_34623__$1 = state_34623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34623__$1,inst_34620);
} else {
if((state_val_34624 === (2))){
var inst_34591 = (state_34623[(10)]);
var inst_34594 = cljs.core.count(inst_34591);
var inst_34595 = (inst_34594 > (0));
var state_34623__$1 = state_34623;
if(cljs.core.truth_(inst_34595)){
var statearr_34633_35974 = state_34623__$1;
(statearr_34633_35974[(1)] = (4));

} else {
var statearr_34634_35975 = state_34623__$1;
(statearr_34634_35975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (11))){
var inst_34591 = (state_34623[(10)]);
var inst_34611 = (state_34623[(2)]);
var tmp34632 = inst_34591;
var inst_34591__$1 = tmp34632;
var state_34623__$1 = (function (){var statearr_34635 = state_34623;
(statearr_34635[(11)] = inst_34611);

(statearr_34635[(10)] = inst_34591__$1);

return statearr_34635;
})();
var statearr_34636_35978 = state_34623__$1;
(statearr_34636_35978[(2)] = null);

(statearr_34636_35978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (9))){
var inst_34602 = (state_34623[(8)]);
var state_34623__$1 = state_34623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34623__$1,(11),out,inst_34602);
} else {
if((state_val_34624 === (5))){
var inst_34616 = cljs.core.async.close_BANG_(out);
var state_34623__$1 = state_34623;
var statearr_34638_35981 = state_34623__$1;
(statearr_34638_35981[(2)] = inst_34616);

(statearr_34638_35981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (10))){
var inst_34614 = (state_34623[(2)]);
var state_34623__$1 = state_34623;
var statearr_34639_35982 = state_34623__$1;
(statearr_34639_35982[(2)] = inst_34614);

(statearr_34639_35982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (8))){
var inst_34591 = (state_34623[(10)]);
var inst_34601 = (state_34623[(7)]);
var inst_34602 = (state_34623[(8)]);
var inst_34603 = (state_34623[(9)]);
var inst_34606 = (function (){var cs = inst_34591;
var vec__34597 = inst_34601;
var v = inst_34602;
var c = inst_34603;
return (function (p1__34585_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34585_SHARP_);
});
})();
var inst_34607 = cljs.core.filterv(inst_34606,inst_34591);
var inst_34591__$1 = inst_34607;
var state_34623__$1 = (function (){var statearr_34640 = state_34623;
(statearr_34640[(10)] = inst_34591__$1);

return statearr_34640;
})();
var statearr_34641_35988 = state_34623__$1;
(statearr_34641_35988[(2)] = null);

(statearr_34641_35988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34645[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34645[(1)] = (1));

return statearr_34645;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34623){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34623);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34646){var ex__31584__auto__ = e34646;
var statearr_34647_35991 = state_34623;
(statearr_34647_35991[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34623[(4)]))){
var statearr_34648_35992 = state_34623;
(statearr_34648_35992[(1)] = cljs.core.first((state_34623[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35993 = state_34623;
state_34623 = G__35993;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34656 = f__31746__auto__();
(statearr_34656[(6)] = c__31745__auto___35968);

return statearr_34656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___35996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34674 = (state_34692[(7)]);
var inst_34674__$1 = (state_34692[(2)]);
var inst_34675 = (inst_34674__$1 == null);
var inst_34676 = cljs.core.not(inst_34675);
var state_34692__$1 = (function (){var statearr_34699 = state_34692;
(statearr_34699[(7)] = inst_34674__$1);

return statearr_34699;
})();
if(inst_34676){
var statearr_34701_35998 = state_34692__$1;
(statearr_34701_35998[(1)] = (8));

} else {
var statearr_34702_35999 = state_34692__$1;
(statearr_34702_35999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var inst_34669 = (0);
var state_34692__$1 = (function (){var statearr_34703 = state_34692;
(statearr_34703[(8)] = inst_34669);

return statearr_34703;
})();
var statearr_34704_36000 = state_34692__$1;
(statearr_34704_36000[(2)] = null);

(statearr_34704_36000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34692__$1,(7),ch);
} else {
if((state_val_34693 === (6))){
var inst_34687 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34705_36002 = state_34692__$1;
(statearr_34705_36002[(2)] = inst_34687);

(statearr_34705_36002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var inst_34689 = (state_34692[(2)]);
var inst_34690 = cljs.core.async.close_BANG_(out);
var state_34692__$1 = (function (){var statearr_34706 = state_34692;
(statearr_34706[(9)] = inst_34689);

return statearr_34706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34692__$1,inst_34690);
} else {
if((state_val_34693 === (2))){
var inst_34669 = (state_34692[(8)]);
var inst_34671 = (inst_34669 < n);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34671)){
var statearr_34707_36003 = state_34692__$1;
(statearr_34707_36003[(1)] = (4));

} else {
var statearr_34708_36004 = state_34692__$1;
(statearr_34708_36004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (11))){
var inst_34669 = (state_34692[(8)]);
var inst_34679 = (state_34692[(2)]);
var inst_34680 = (inst_34669 + (1));
var inst_34669__$1 = inst_34680;
var state_34692__$1 = (function (){var statearr_34709 = state_34692;
(statearr_34709[(10)] = inst_34679);

(statearr_34709[(8)] = inst_34669__$1);

return statearr_34709;
})();
var statearr_34711_36009 = state_34692__$1;
(statearr_34711_36009[(2)] = null);

(statearr_34711_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (9))){
var state_34692__$1 = state_34692;
var statearr_34712_36010 = state_34692__$1;
(statearr_34712_36010[(2)] = null);

(statearr_34712_36010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var state_34692__$1 = state_34692;
var statearr_34713_36011 = state_34692__$1;
(statearr_34713_36011[(2)] = null);

(statearr_34713_36011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var inst_34684 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34714_36012 = state_34692__$1;
(statearr_34714_36012[(2)] = inst_34684);

(statearr_34714_36012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34674 = (state_34692[(7)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(11),out,inst_34674);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34715[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34715[(1)] = (1));

return statearr_34715;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34692){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34692);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34716){var ex__31584__auto__ = e34716;
var statearr_34717_36013 = state_34692;
(statearr_34717_36013[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34692[(4)]))){
var statearr_34718_36014 = state_34692;
(statearr_34718_36014[(1)] = cljs.core.first((state_34692[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36015 = state_34692;
state_34692 = G__36015;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34720 = f__31746__auto__();
(statearr_34720[(6)] = c__31745__auto___35996);

return statearr_34720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34725 = (function (f,ch,meta34723,_,fn1,meta34726){
this.f = f;
this.ch = ch;
this.meta34723 = meta34723;
this._ = _;
this.fn1 = fn1;
this.meta34726 = meta34726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34727,meta34726__$1){
var self__ = this;
var _34727__$1 = this;
return (new cljs.core.async.t_cljs$core$async34725(self__.f,self__.ch,self__.meta34723,self__._,self__.fn1,meta34726__$1));
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34727){
var self__ = this;
var _34727__$1 = this;
return self__.meta34726;
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34721_SHARP_){
var G__34729 = (((p1__34721_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34721_SHARP_) : self__.f.call(null,p1__34721_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34729) : f1.call(null,G__34729));
});
}));

(cljs.core.async.t_cljs$core$async34725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34723","meta34723",2025984340,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34722","cljs.core.async/t_cljs$core$async34722",-1128561769,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34726","meta34726",1267955562,null)], null);
}));

(cljs.core.async.t_cljs$core$async34725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34725");

(cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34725.
 */
cljs.core.async.__GT_t_cljs$core$async34725 = (function cljs$core$async$__GT_t_cljs$core$async34725(f,ch,meta34723,_,fn1,meta34726){
return (new cljs.core.async.t_cljs$core$async34725(f,ch,meta34723,_,fn1,meta34726));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34722 = (function (f,ch,meta34723){
this.f = f;
this.ch = ch;
this.meta34723 = meta34723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34724,meta34723__$1){
var self__ = this;
var _34724__$1 = this;
return (new cljs.core.async.t_cljs$core$async34722(self__.f,self__.ch,meta34723__$1));
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34724){
var self__ = this;
var _34724__$1 = this;
return self__.meta34723;
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34725(self__.f,self__.ch,self__.meta34723,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34731 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34731) : self__.f.call(null,G__34731));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34723","meta34723",2025984340,null)], null);
}));

(cljs.core.async.t_cljs$core$async34722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34722");

(cljs.core.async.t_cljs$core$async34722.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34722.
 */
cljs.core.async.__GT_t_cljs$core$async34722 = (function cljs$core$async$__GT_t_cljs$core$async34722(f,ch,meta34723){
return (new cljs.core.async.t_cljs$core$async34722(f,ch,meta34723));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34722(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34733 = (function (f,ch,meta34734){
this.f = f;
this.ch = ch;
this.meta34734 = meta34734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34735,meta34734__$1){
var self__ = this;
var _34735__$1 = this;
return (new cljs.core.async.t_cljs$core$async34733(self__.f,self__.ch,meta34734__$1));
}));

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34735){
var self__ = this;
var _34735__$1 = this;
return self__.meta34734;
}));

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34734","meta34734",-589233133,null)], null);
}));

(cljs.core.async.t_cljs$core$async34733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34733");

(cljs.core.async.t_cljs$core$async34733.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34733.
 */
cljs.core.async.__GT_t_cljs$core$async34733 = (function cljs$core$async$__GT_t_cljs$core$async34733(f,ch,meta34734){
return (new cljs.core.async.t_cljs$core$async34733(f,ch,meta34734));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34737 = (function (p,ch,meta34738){
this.p = p;
this.ch = ch;
this.meta34738 = meta34738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34739,meta34738__$1){
var self__ = this;
var _34739__$1 = this;
return (new cljs.core.async.t_cljs$core$async34737(self__.p,self__.ch,meta34738__$1));
}));

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34739){
var self__ = this;
var _34739__$1 = this;
return self__.meta34738;
}));

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34738","meta34738",756852564,null)], null);
}));

(cljs.core.async.t_cljs$core$async34737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34737");

(cljs.core.async.t_cljs$core$async34737.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34737.
 */
cljs.core.async.__GT_t_cljs$core$async34737 = (function cljs$core$async$__GT_t_cljs$core$async34737(p,ch,meta34738){
return (new cljs.core.async.t_cljs$core$async34737(p,ch,meta34738));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34743 = arguments.length;
switch (G__34743) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___36038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (7))){
var inst_34761 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34768_36039 = state_34765__$1;
(statearr_34768_36039[(2)] = inst_34761);

(statearr_34768_36039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (1))){
var state_34765__$1 = state_34765;
var statearr_34769_36040 = state_34765__$1;
(statearr_34769_36040[(2)] = null);

(statearr_34769_36040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (4))){
var inst_34747 = (state_34765[(7)]);
var inst_34747__$1 = (state_34765[(2)]);
var inst_34748 = (inst_34747__$1 == null);
var state_34765__$1 = (function (){var statearr_34770 = state_34765;
(statearr_34770[(7)] = inst_34747__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34748)){
var statearr_34771_36041 = state_34765__$1;
(statearr_34771_36041[(1)] = (5));

} else {
var statearr_34772_36042 = state_34765__$1;
(statearr_34772_36042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (6))){
var inst_34747 = (state_34765[(7)]);
var inst_34752 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34747) : p.call(null,inst_34747));
var state_34765__$1 = state_34765;
if(cljs.core.truth_(inst_34752)){
var statearr_34773_36046 = state_34765__$1;
(statearr_34773_36046[(1)] = (8));

} else {
var statearr_34774_36047 = state_34765__$1;
(statearr_34774_36047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (3))){
var inst_34763 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
} else {
if((state_val_34766 === (2))){
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34765__$1,(4),ch);
} else {
if((state_val_34766 === (11))){
var inst_34755 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34776_36048 = state_34765__$1;
(statearr_34776_36048[(2)] = inst_34755);

(statearr_34776_36048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (9))){
var state_34765__$1 = state_34765;
var statearr_34777_36053 = state_34765__$1;
(statearr_34777_36053[(2)] = null);

(statearr_34777_36053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (5))){
var inst_34750 = cljs.core.async.close_BANG_(out);
var state_34765__$1 = state_34765;
var statearr_34778_36055 = state_34765__$1;
(statearr_34778_36055[(2)] = inst_34750);

(statearr_34778_36055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (10))){
var inst_34758 = (state_34765[(2)]);
var state_34765__$1 = (function (){var statearr_34779 = state_34765;
(statearr_34779[(8)] = inst_34758);

return statearr_34779;
})();
var statearr_34780_36056 = state_34765__$1;
(statearr_34780_36056[(2)] = null);

(statearr_34780_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (8))){
var inst_34747 = (state_34765[(7)]);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34765__$1,(11),out,inst_34747);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34781 = [null,null,null,null,null,null,null,null,null];
(statearr_34781[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34781[(1)] = (1));

return statearr_34781;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34765){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34782){var ex__31584__auto__ = e34782;
var statearr_34783_36058 = state_34765;
(statearr_34783_36058[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34765[(4)]))){
var statearr_34784_36059 = state_34765;
(statearr_34784_36059[(1)] = cljs.core.first((state_34765[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36060 = state_34765;
state_34765 = G__36060;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34786 = f__31746__auto__();
(statearr_34786[(6)] = c__31745__auto___36038);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34788 = arguments.length;
switch (G__34788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34852){
var state_val_34853 = (state_34852[(1)]);
if((state_val_34853 === (7))){
var inst_34848 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34855_36066 = state_34852__$1;
(statearr_34855_36066[(2)] = inst_34848);

(statearr_34855_36066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (20))){
var inst_34818 = (state_34852[(7)]);
var inst_34829 = (state_34852[(2)]);
var inst_34830 = cljs.core.next(inst_34818);
var inst_34803 = inst_34830;
var inst_34804 = null;
var inst_34805 = (0);
var inst_34806 = (0);
var state_34852__$1 = (function (){var statearr_34856 = state_34852;
(statearr_34856[(8)] = inst_34829);

(statearr_34856[(9)] = inst_34803);

(statearr_34856[(10)] = inst_34804);

(statearr_34856[(11)] = inst_34805);

(statearr_34856[(12)] = inst_34806);

return statearr_34856;
})();
var statearr_34857_36068 = state_34852__$1;
(statearr_34857_36068[(2)] = null);

(statearr_34857_36068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (1))){
var state_34852__$1 = state_34852;
var statearr_34858_36069 = state_34852__$1;
(statearr_34858_36069[(2)] = null);

(statearr_34858_36069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (4))){
var inst_34792 = (state_34852[(13)]);
var inst_34792__$1 = (state_34852[(2)]);
var inst_34793 = (inst_34792__$1 == null);
var state_34852__$1 = (function (){var statearr_34859 = state_34852;
(statearr_34859[(13)] = inst_34792__$1);

return statearr_34859;
})();
if(cljs.core.truth_(inst_34793)){
var statearr_34860_36071 = state_34852__$1;
(statearr_34860_36071[(1)] = (5));

} else {
var statearr_34861_36072 = state_34852__$1;
(statearr_34861_36072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (15))){
var state_34852__$1 = state_34852;
var statearr_34865_36074 = state_34852__$1;
(statearr_34865_36074[(2)] = null);

(statearr_34865_36074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (21))){
var state_34852__$1 = state_34852;
var statearr_34867_36075 = state_34852__$1;
(statearr_34867_36075[(2)] = null);

(statearr_34867_36075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (13))){
var inst_34806 = (state_34852[(12)]);
var inst_34803 = (state_34852[(9)]);
var inst_34804 = (state_34852[(10)]);
var inst_34805 = (state_34852[(11)]);
var inst_34814 = (state_34852[(2)]);
var inst_34815 = (inst_34806 + (1));
var tmp34862 = inst_34803;
var tmp34863 = inst_34804;
var tmp34864 = inst_34805;
var inst_34803__$1 = tmp34862;
var inst_34804__$1 = tmp34863;
var inst_34805__$1 = tmp34864;
var inst_34806__$1 = inst_34815;
var state_34852__$1 = (function (){var statearr_34868 = state_34852;
(statearr_34868[(14)] = inst_34814);

(statearr_34868[(9)] = inst_34803__$1);

(statearr_34868[(10)] = inst_34804__$1);

(statearr_34868[(11)] = inst_34805__$1);

(statearr_34868[(12)] = inst_34806__$1);

return statearr_34868;
})();
var statearr_34869_36082 = state_34852__$1;
(statearr_34869_36082[(2)] = null);

(statearr_34869_36082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (22))){
var state_34852__$1 = state_34852;
var statearr_34870_36083 = state_34852__$1;
(statearr_34870_36083[(2)] = null);

(statearr_34870_36083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (6))){
var inst_34792 = (state_34852[(13)]);
var inst_34801 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34792) : f.call(null,inst_34792));
var inst_34802 = cljs.core.seq(inst_34801);
var inst_34803 = inst_34802;
var inst_34804 = null;
var inst_34805 = (0);
var inst_34806 = (0);
var state_34852__$1 = (function (){var statearr_34871 = state_34852;
(statearr_34871[(9)] = inst_34803);

(statearr_34871[(10)] = inst_34804);

(statearr_34871[(11)] = inst_34805);

(statearr_34871[(12)] = inst_34806);

return statearr_34871;
})();
var statearr_34872_36085 = state_34852__$1;
(statearr_34872_36085[(2)] = null);

(statearr_34872_36085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (17))){
var inst_34818 = (state_34852[(7)]);
var inst_34822 = cljs.core.chunk_first(inst_34818);
var inst_34823 = cljs.core.chunk_rest(inst_34818);
var inst_34824 = cljs.core.count(inst_34822);
var inst_34803 = inst_34823;
var inst_34804 = inst_34822;
var inst_34805 = inst_34824;
var inst_34806 = (0);
var state_34852__$1 = (function (){var statearr_34874 = state_34852;
(statearr_34874[(9)] = inst_34803);

(statearr_34874[(10)] = inst_34804);

(statearr_34874[(11)] = inst_34805);

(statearr_34874[(12)] = inst_34806);

return statearr_34874;
})();
var statearr_34875_36087 = state_34852__$1;
(statearr_34875_36087[(2)] = null);

(statearr_34875_36087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (3))){
var inst_34850 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34852__$1,inst_34850);
} else {
if((state_val_34853 === (12))){
var inst_34838 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34876_36088 = state_34852__$1;
(statearr_34876_36088[(2)] = inst_34838);

(statearr_34876_36088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (2))){
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34852__$1,(4),in$);
} else {
if((state_val_34853 === (23))){
var inst_34846 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34877_36089 = state_34852__$1;
(statearr_34877_36089[(2)] = inst_34846);

(statearr_34877_36089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (19))){
var inst_34833 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34879_36090 = state_34852__$1;
(statearr_34879_36090[(2)] = inst_34833);

(statearr_34879_36090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (11))){
var inst_34803 = (state_34852[(9)]);
var inst_34818 = (state_34852[(7)]);
var inst_34818__$1 = cljs.core.seq(inst_34803);
var state_34852__$1 = (function (){var statearr_34880 = state_34852;
(statearr_34880[(7)] = inst_34818__$1);

return statearr_34880;
})();
if(inst_34818__$1){
var statearr_34881_36095 = state_34852__$1;
(statearr_34881_36095[(1)] = (14));

} else {
var statearr_34882_36096 = state_34852__$1;
(statearr_34882_36096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (9))){
var inst_34840 = (state_34852[(2)]);
var inst_34841 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34852__$1 = (function (){var statearr_34883 = state_34852;
(statearr_34883[(15)] = inst_34840);

return statearr_34883;
})();
if(cljs.core.truth_(inst_34841)){
var statearr_34884_36098 = state_34852__$1;
(statearr_34884_36098[(1)] = (21));

} else {
var statearr_34885_36099 = state_34852__$1;
(statearr_34885_36099[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (5))){
var inst_34795 = cljs.core.async.close_BANG_(out);
var state_34852__$1 = state_34852;
var statearr_34886_36100 = state_34852__$1;
(statearr_34886_36100[(2)] = inst_34795);

(statearr_34886_36100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (14))){
var inst_34818 = (state_34852[(7)]);
var inst_34820 = cljs.core.chunked_seq_QMARK_(inst_34818);
var state_34852__$1 = state_34852;
if(inst_34820){
var statearr_34887_36102 = state_34852__$1;
(statearr_34887_36102[(1)] = (17));

} else {
var statearr_34888_36103 = state_34852__$1;
(statearr_34888_36103[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (16))){
var inst_34836 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34889_36104 = state_34852__$1;
(statearr_34889_36104[(2)] = inst_34836);

(statearr_34889_36104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (10))){
var inst_34804 = (state_34852[(10)]);
var inst_34806 = (state_34852[(12)]);
var inst_34812 = cljs.core._nth(inst_34804,inst_34806);
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34852__$1,(13),out,inst_34812);
} else {
if((state_val_34853 === (18))){
var inst_34818 = (state_34852[(7)]);
var inst_34827 = cljs.core.first(inst_34818);
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34852__$1,(20),out,inst_34827);
} else {
if((state_val_34853 === (8))){
var inst_34806 = (state_34852[(12)]);
var inst_34805 = (state_34852[(11)]);
var inst_34808 = (inst_34806 < inst_34805);
var inst_34809 = inst_34808;
var state_34852__$1 = state_34852;
if(cljs.core.truth_(inst_34809)){
var statearr_34891_36108 = state_34852__$1;
(statearr_34891_36108[(1)] = (10));

} else {
var statearr_34892_36109 = state_34852__$1;
(statearr_34892_36109[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____0 = (function (){
var statearr_34893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34893[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__);

(statearr_34893[(1)] = (1));

return statearr_34893;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____1 = (function (state_34852){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34852);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34894){var ex__31584__auto__ = e34894;
var statearr_34895_36114 = state_34852;
(statearr_34895_36114[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34852[(4)]))){
var statearr_34896_36115 = state_34852;
(statearr_34896_36115[(1)] = cljs.core.first((state_34852[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36116 = state_34852;
state_34852 = G__36116;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__ = function(state_34852){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____1.call(this,state_34852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31580__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34898 = f__31746__auto__();
(statearr_34898[(6)] = c__31745__auto__);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

return c__31745__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34900 = arguments.length;
switch (G__34900) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34903 = arguments.length;
switch (G__34903) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34905 = arguments.length;
switch (G__34905) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___36122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34930){
var state_val_34931 = (state_34930[(1)]);
if((state_val_34931 === (7))){
var inst_34925 = (state_34930[(2)]);
var state_34930__$1 = state_34930;
var statearr_34933_36123 = state_34930__$1;
(statearr_34933_36123[(2)] = inst_34925);

(statearr_34933_36123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (1))){
var inst_34907 = null;
var state_34930__$1 = (function (){var statearr_34934 = state_34930;
(statearr_34934[(7)] = inst_34907);

return statearr_34934;
})();
var statearr_34935_36124 = state_34930__$1;
(statearr_34935_36124[(2)] = null);

(statearr_34935_36124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (4))){
var inst_34910 = (state_34930[(8)]);
var inst_34910__$1 = (state_34930[(2)]);
var inst_34911 = (inst_34910__$1 == null);
var inst_34912 = cljs.core.not(inst_34911);
var state_34930__$1 = (function (){var statearr_34936 = state_34930;
(statearr_34936[(8)] = inst_34910__$1);

return statearr_34936;
})();
if(inst_34912){
var statearr_34937_36129 = state_34930__$1;
(statearr_34937_36129[(1)] = (5));

} else {
var statearr_34939_36130 = state_34930__$1;
(statearr_34939_36130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (6))){
var state_34930__$1 = state_34930;
var statearr_34941_36131 = state_34930__$1;
(statearr_34941_36131[(2)] = null);

(statearr_34941_36131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (3))){
var inst_34927 = (state_34930[(2)]);
var inst_34928 = cljs.core.async.close_BANG_(out);
var state_34930__$1 = (function (){var statearr_34942 = state_34930;
(statearr_34942[(9)] = inst_34927);

return statearr_34942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34930__$1,inst_34928);
} else {
if((state_val_34931 === (2))){
var state_34930__$1 = state_34930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34930__$1,(4),ch);
} else {
if((state_val_34931 === (11))){
var inst_34910 = (state_34930[(8)]);
var inst_34919 = (state_34930[(2)]);
var inst_34907 = inst_34910;
var state_34930__$1 = (function (){var statearr_34943 = state_34930;
(statearr_34943[(10)] = inst_34919);

(statearr_34943[(7)] = inst_34907);

return statearr_34943;
})();
var statearr_34944_36132 = state_34930__$1;
(statearr_34944_36132[(2)] = null);

(statearr_34944_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (9))){
var inst_34910 = (state_34930[(8)]);
var state_34930__$1 = state_34930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34930__$1,(11),out,inst_34910);
} else {
if((state_val_34931 === (5))){
var inst_34910 = (state_34930[(8)]);
var inst_34907 = (state_34930[(7)]);
var inst_34914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34910,inst_34907);
var state_34930__$1 = state_34930;
if(inst_34914){
var statearr_34946_36133 = state_34930__$1;
(statearr_34946_36133[(1)] = (8));

} else {
var statearr_34947_36134 = state_34930__$1;
(statearr_34947_36134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (10))){
var inst_34922 = (state_34930[(2)]);
var state_34930__$1 = state_34930;
var statearr_34948_36136 = state_34930__$1;
(statearr_34948_36136[(2)] = inst_34922);

(statearr_34948_36136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34931 === (8))){
var inst_34907 = (state_34930[(7)]);
var tmp34945 = inst_34907;
var inst_34907__$1 = tmp34945;
var state_34930__$1 = (function (){var statearr_34949 = state_34930;
(statearr_34949[(7)] = inst_34907__$1);

return statearr_34949;
})();
var statearr_34950_36140 = state_34930__$1;
(statearr_34950_36140[(2)] = null);

(statearr_34950_36140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_34953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34953[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_34953[(1)] = (1));

return statearr_34953;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34930){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34930);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e34954){var ex__31584__auto__ = e34954;
var statearr_34955_36141 = state_34930;
(statearr_34955_36141[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34930[(4)]))){
var statearr_34956_36142 = state_34930;
(statearr_34956_36142[(1)] = cljs.core.first((state_34930[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36143 = state_34930;
state_34930 = G__36143;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_34957 = f__31746__auto__();
(statearr_34957[(6)] = c__31745__auto___36122);

return statearr_34957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34959 = arguments.length;
switch (G__34959) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___36149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_34997){
var state_val_34998 = (state_34997[(1)]);
if((state_val_34998 === (7))){
var inst_34993 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35001_36150 = state_34997__$1;
(statearr_35001_36150[(2)] = inst_34993);

(statearr_35001_36150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (1))){
var inst_34960 = (new Array(n));
var inst_34961 = inst_34960;
var inst_34962 = (0);
var state_34997__$1 = (function (){var statearr_35002 = state_34997;
(statearr_35002[(7)] = inst_34961);

(statearr_35002[(8)] = inst_34962);

return statearr_35002;
})();
var statearr_35003_36151 = state_34997__$1;
(statearr_35003_36151[(2)] = null);

(statearr_35003_36151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (4))){
var inst_34965 = (state_34997[(9)]);
var inst_34965__$1 = (state_34997[(2)]);
var inst_34966 = (inst_34965__$1 == null);
var inst_34967 = cljs.core.not(inst_34966);
var state_34997__$1 = (function (){var statearr_35004 = state_34997;
(statearr_35004[(9)] = inst_34965__$1);

return statearr_35004;
})();
if(inst_34967){
var statearr_35005_36153 = state_34997__$1;
(statearr_35005_36153[(1)] = (5));

} else {
var statearr_35006_36154 = state_34997__$1;
(statearr_35006_36154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (15))){
var inst_34987 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35007_36155 = state_34997__$1;
(statearr_35007_36155[(2)] = inst_34987);

(statearr_35007_36155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (13))){
var state_34997__$1 = state_34997;
var statearr_35008_36159 = state_34997__$1;
(statearr_35008_36159[(2)] = null);

(statearr_35008_36159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (6))){
var inst_34962 = (state_34997[(8)]);
var inst_34983 = (inst_34962 > (0));
var state_34997__$1 = state_34997;
if(cljs.core.truth_(inst_34983)){
var statearr_35009_36160 = state_34997__$1;
(statearr_35009_36160[(1)] = (12));

} else {
var statearr_35010_36161 = state_34997__$1;
(statearr_35010_36161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (3))){
var inst_34995 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34997__$1,inst_34995);
} else {
if((state_val_34998 === (12))){
var inst_34961 = (state_34997[(7)]);
var inst_34985 = cljs.core.vec(inst_34961);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(15),out,inst_34985);
} else {
if((state_val_34998 === (2))){
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34997__$1,(4),ch);
} else {
if((state_val_34998 === (11))){
var inst_34977 = (state_34997[(2)]);
var inst_34978 = (new Array(n));
var inst_34961 = inst_34978;
var inst_34962 = (0);
var state_34997__$1 = (function (){var statearr_35011 = state_34997;
(statearr_35011[(10)] = inst_34977);

(statearr_35011[(7)] = inst_34961);

(statearr_35011[(8)] = inst_34962);

return statearr_35011;
})();
var statearr_35012_36162 = state_34997__$1;
(statearr_35012_36162[(2)] = null);

(statearr_35012_36162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (9))){
var inst_34961 = (state_34997[(7)]);
var inst_34975 = cljs.core.vec(inst_34961);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(11),out,inst_34975);
} else {
if((state_val_34998 === (5))){
var inst_34961 = (state_34997[(7)]);
var inst_34962 = (state_34997[(8)]);
var inst_34965 = (state_34997[(9)]);
var inst_34970 = (state_34997[(11)]);
var inst_34969 = (inst_34961[inst_34962] = inst_34965);
var inst_34970__$1 = (inst_34962 + (1));
var inst_34971 = (inst_34970__$1 < n);
var state_34997__$1 = (function (){var statearr_35013 = state_34997;
(statearr_35013[(12)] = inst_34969);

(statearr_35013[(11)] = inst_34970__$1);

return statearr_35013;
})();
if(cljs.core.truth_(inst_34971)){
var statearr_35016_36163 = state_34997__$1;
(statearr_35016_36163[(1)] = (8));

} else {
var statearr_35018_36164 = state_34997__$1;
(statearr_35018_36164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (14))){
var inst_34990 = (state_34997[(2)]);
var inst_34991 = cljs.core.async.close_BANG_(out);
var state_34997__$1 = (function (){var statearr_35020 = state_34997;
(statearr_35020[(13)] = inst_34990);

return statearr_35020;
})();
var statearr_35021_36165 = state_34997__$1;
(statearr_35021_36165[(2)] = inst_34991);

(statearr_35021_36165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (10))){
var inst_34981 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35025_36166 = state_34997__$1;
(statearr_35025_36166[(2)] = inst_34981);

(statearr_35025_36166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (8))){
var inst_34961 = (state_34997[(7)]);
var inst_34970 = (state_34997[(11)]);
var tmp35019 = inst_34961;
var inst_34961__$1 = tmp35019;
var inst_34962 = inst_34970;
var state_34997__$1 = (function (){var statearr_35029 = state_34997;
(statearr_35029[(7)] = inst_34961__$1);

(statearr_35029[(8)] = inst_34962);

return statearr_35029;
})();
var statearr_35030_36167 = state_34997__$1;
(statearr_35030_36167[(2)] = null);

(statearr_35030_36167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_34997){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_34997);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e35033){var ex__31584__auto__ = e35033;
var statearr_35034_36174 = state_34997;
(statearr_35034_36174[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_34997[(4)]))){
var statearr_35036_36176 = state_34997;
(statearr_35036_36176[(1)] = cljs.core.first((state_34997[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36177 = state_34997;
state_34997 = G__36177;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_35040 = f__31746__auto__();
(statearr_35040[(6)] = c__31745__auto___36149);

return statearr_35040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35049 = arguments.length;
switch (G__35049) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31745__auto___36180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_35107){
var state_val_35108 = (state_35107[(1)]);
if((state_val_35108 === (7))){
var inst_35103 = (state_35107[(2)]);
var state_35107__$1 = state_35107;
var statearr_35113_36184 = state_35107__$1;
(statearr_35113_36184[(2)] = inst_35103);

(statearr_35113_36184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (1))){
var inst_35058 = [];
var inst_35059 = inst_35058;
var inst_35060 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35107__$1 = (function (){var statearr_35118 = state_35107;
(statearr_35118[(7)] = inst_35059);

(statearr_35118[(8)] = inst_35060);

return statearr_35118;
})();
var statearr_35119_36185 = state_35107__$1;
(statearr_35119_36185[(2)] = null);

(statearr_35119_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (4))){
var inst_35063 = (state_35107[(9)]);
var inst_35063__$1 = (state_35107[(2)]);
var inst_35065 = (inst_35063__$1 == null);
var inst_35066 = cljs.core.not(inst_35065);
var state_35107__$1 = (function (){var statearr_35123 = state_35107;
(statearr_35123[(9)] = inst_35063__$1);

return statearr_35123;
})();
if(inst_35066){
var statearr_35125_36187 = state_35107__$1;
(statearr_35125_36187[(1)] = (5));

} else {
var statearr_35126_36188 = state_35107__$1;
(statearr_35126_36188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (15))){
var inst_35059 = (state_35107[(7)]);
var inst_35094 = cljs.core.vec(inst_35059);
var state_35107__$1 = state_35107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35107__$1,(18),out,inst_35094);
} else {
if((state_val_35108 === (13))){
var inst_35089 = (state_35107[(2)]);
var state_35107__$1 = state_35107;
var statearr_35130_36189 = state_35107__$1;
(statearr_35130_36189[(2)] = inst_35089);

(statearr_35130_36189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (6))){
var inst_35059 = (state_35107[(7)]);
var inst_35091 = inst_35059.length;
var inst_35092 = (inst_35091 > (0));
var state_35107__$1 = state_35107;
if(cljs.core.truth_(inst_35092)){
var statearr_35132_36190 = state_35107__$1;
(statearr_35132_36190[(1)] = (15));

} else {
var statearr_35135_36191 = state_35107__$1;
(statearr_35135_36191[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (17))){
var inst_35099 = (state_35107[(2)]);
var inst_35100 = cljs.core.async.close_BANG_(out);
var state_35107__$1 = (function (){var statearr_35137 = state_35107;
(statearr_35137[(10)] = inst_35099);

return statearr_35137;
})();
var statearr_35138_36200 = state_35107__$1;
(statearr_35138_36200[(2)] = inst_35100);

(statearr_35138_36200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (3))){
var inst_35105 = (state_35107[(2)]);
var state_35107__$1 = state_35107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35107__$1,inst_35105);
} else {
if((state_val_35108 === (12))){
var inst_35059 = (state_35107[(7)]);
var inst_35081 = cljs.core.vec(inst_35059);
var state_35107__$1 = state_35107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35107__$1,(14),out,inst_35081);
} else {
if((state_val_35108 === (2))){
var state_35107__$1 = state_35107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35107__$1,(4),ch);
} else {
if((state_val_35108 === (11))){
var inst_35059 = (state_35107[(7)]);
var inst_35063 = (state_35107[(9)]);
var inst_35068 = (state_35107[(11)]);
var inst_35078 = inst_35059.push(inst_35063);
var tmp35140 = inst_35059;
var inst_35059__$1 = tmp35140;
var inst_35060 = inst_35068;
var state_35107__$1 = (function (){var statearr_35145 = state_35107;
(statearr_35145[(12)] = inst_35078);

(statearr_35145[(7)] = inst_35059__$1);

(statearr_35145[(8)] = inst_35060);

return statearr_35145;
})();
var statearr_35146_36202 = state_35107__$1;
(statearr_35146_36202[(2)] = null);

(statearr_35146_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (9))){
var inst_35060 = (state_35107[(8)]);
var inst_35072 = cljs.core.keyword_identical_QMARK_(inst_35060,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35107__$1 = state_35107;
var statearr_35150_36203 = state_35107__$1;
(statearr_35150_36203[(2)] = inst_35072);

(statearr_35150_36203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (5))){
var inst_35063 = (state_35107[(9)]);
var inst_35068 = (state_35107[(11)]);
var inst_35060 = (state_35107[(8)]);
var inst_35069 = (state_35107[(13)]);
var inst_35068__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35063) : f.call(null,inst_35063));
var inst_35069__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35068__$1,inst_35060);
var state_35107__$1 = (function (){var statearr_35155 = state_35107;
(statearr_35155[(11)] = inst_35068__$1);

(statearr_35155[(13)] = inst_35069__$1);

return statearr_35155;
})();
if(inst_35069__$1){
var statearr_35157_36205 = state_35107__$1;
(statearr_35157_36205[(1)] = (8));

} else {
var statearr_35159_36206 = state_35107__$1;
(statearr_35159_36206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (14))){
var inst_35063 = (state_35107[(9)]);
var inst_35068 = (state_35107[(11)]);
var inst_35084 = (state_35107[(2)]);
var inst_35085 = [];
var inst_35086 = inst_35085.push(inst_35063);
var inst_35059 = inst_35085;
var inst_35060 = inst_35068;
var state_35107__$1 = (function (){var statearr_35163 = state_35107;
(statearr_35163[(14)] = inst_35084);

(statearr_35163[(15)] = inst_35086);

(statearr_35163[(7)] = inst_35059);

(statearr_35163[(8)] = inst_35060);

return statearr_35163;
})();
var statearr_35164_36211 = state_35107__$1;
(statearr_35164_36211[(2)] = null);

(statearr_35164_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (16))){
var state_35107__$1 = state_35107;
var statearr_35168_36212 = state_35107__$1;
(statearr_35168_36212[(2)] = null);

(statearr_35168_36212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (10))){
var inst_35075 = (state_35107[(2)]);
var state_35107__$1 = state_35107;
if(cljs.core.truth_(inst_35075)){
var statearr_35170_36213 = state_35107__$1;
(statearr_35170_36213[(1)] = (11));

} else {
var statearr_35171_36214 = state_35107__$1;
(statearr_35171_36214[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (18))){
var inst_35096 = (state_35107[(2)]);
var state_35107__$1 = state_35107;
var statearr_35172_36215 = state_35107__$1;
(statearr_35172_36215[(2)] = inst_35096);

(statearr_35172_36215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (8))){
var inst_35069 = (state_35107[(13)]);
var state_35107__$1 = state_35107;
var statearr_35176_36216 = state_35107__$1;
(statearr_35176_36216[(2)] = inst_35069);

(statearr_35176_36216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31580__auto__ = null;
var cljs$core$async$state_machine__31580__auto____0 = (function (){
var statearr_35182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35182[(0)] = cljs$core$async$state_machine__31580__auto__);

(statearr_35182[(1)] = (1));

return statearr_35182;
});
var cljs$core$async$state_machine__31580__auto____1 = (function (state_35107){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_35107);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e35183){var ex__31584__auto__ = e35183;
var statearr_35186_36217 = state_35107;
(statearr_35186_36217[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_35107[(4)]))){
var statearr_35189_36218 = state_35107;
(statearr_35189_36218[(1)] = cljs.core.first((state_35107[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36219 = state_35107;
state_35107 = G__36219;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
cljs$core$async$state_machine__31580__auto__ = function(state_35107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31580__auto____1.call(this,state_35107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31580__auto____0;
cljs$core$async$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31580__auto____1;
return cljs$core$async$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_35194 = f__31746__auto__();
(statearr_35194[(6)] = c__31745__auto___36180);

return statearr_35194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
