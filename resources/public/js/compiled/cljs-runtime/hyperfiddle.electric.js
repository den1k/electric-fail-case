goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44854_block_0 = (function hyperfiddle$electric$pair_$_cr44854_block_0(cr44854_state){
try{var cr44854_place_0 = missionary.core.dfv;
var cr44854_place_1 = (function (){var fexpr__44918 = cr44854_place_0;
return (fexpr__44918.cljs$core$IFn$_invoke$arity$0 ? fexpr__44918.cljs$core$IFn$_invoke$arity$0() : fexpr__44918.call(null));
})();
var cr44854_place_2 = missionary.core.dfv;
var cr44854_place_3 = (function (){var fexpr__44919 = cr44854_place_2;
return (fexpr__44919.cljs$core$IFn$_invoke$arity$0 ? fexpr__44919.cljs$core$IFn$_invoke$arity$0() : fexpr__44919.call(null));
})();
var cr44854_place_4 = missionary.core.join;
var cr44854_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44854_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44857_block_0 = (function (cr44857_state){
try{var cr44857_place_0 = cr44854_place_1;
(cr44857_state[(0)] = cr44857_block_1);

return missionary.core.park(cr44857_place_0);
}catch (e44924){var e44863 = e44924;
var cr44857_exception = e44863;
(cr44857_state[(0)] = null);

throw cr44857_exception;
}});
var cr44857_block_1 = (function (cr44857_state){
try{var cr44857_place_1 = missionary.core.unpark();
var cr44857_place_2 = cr44857_place_1;
var cr44857_place_3 = x;
var cr44857_place_4 = (function (){var G__44866 = cr44857_place_3;
var fexpr__44865 = cr44857_place_2;
var G__44927 = G__44866;
var fexpr__44926 = fexpr__44865;
return (fexpr__44926.cljs$core$IFn$_invoke$arity$1 ? fexpr__44926.cljs$core$IFn$_invoke$arity$1(G__44927) : fexpr__44926.call(null,G__44927));
})();
(cr44857_state[(0)] = null);

return cr44857_place_4;
}catch (e44925){var e44864 = e44925;
var cr44857_exception = e44864;
(cr44857_state[(0)] = null);

throw cr44857_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44867 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__44867[(0)] = cr44857_block_0);

return G__44867;
})());
})(),missionary.core.sp_run);
});
var cr44854_place_7 = (function (_BANG_){
var G__44929_45053 = _BANG_;
var fexpr__44928_45054 = cr44854_place_3;
(fexpr__44928_45054.cljs$core$IFn$_invoke$arity$1 ? fexpr__44928_45054.cljs$core$IFn$_invoke$arity$1(G__44929_45053) : fexpr__44928_45054.call(null,G__44929_45053));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr44854_place_8 = s;
var cr44854_place_9 = cr44854_place_6;
var cr44854_place_10 = cr44854_place_7;
var cr44854_place_11 = (function (){var G__44931 = cr44854_place_9;
var G__44932 = cr44854_place_10;
var fexpr__44930 = cr44854_place_8;
return (fexpr__44930.cljs$core$IFn$_invoke$arity$2 ? fexpr__44930.cljs$core$IFn$_invoke$arity$2(G__44931,G__44932) : fexpr__44930.call(null,G__44931,G__44932));
})();
var cr44854_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44871_block_0 = (function (cr44871_state){
try{var cr44871_place_0 = cr44854_place_3;
(cr44871_state[(0)] = cr44871_block_1);

return missionary.core.park(cr44871_place_0);
}catch (e44937){var e44877 = e44937;
var cr44871_exception = e44877;
(cr44871_state[(0)] = null);

throw cr44871_exception;
}});
var cr44871_block_1 = (function (cr44871_state){
try{var cr44871_place_1 = missionary.core.unpark();
var cr44871_place_2 = cr44871_place_1;
var cr44871_place_3 = x;
var cr44871_place_4 = (function (){var G__44880 = cr44871_place_3;
var fexpr__44879 = cr44871_place_2;
var G__44940 = G__44880;
var fexpr__44939 = fexpr__44879;
return (fexpr__44939.cljs$core$IFn$_invoke$arity$1 ? fexpr__44939.cljs$core$IFn$_invoke$arity$1(G__44940) : fexpr__44939.call(null,G__44940));
})();
(cr44871_state[(0)] = null);

return cr44871_place_4;
}catch (e44938){var e44878 = e44938;
var cr44871_exception = e44878;
(cr44871_state[(0)] = null);

throw cr44871_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44881 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__44881[(0)] = cr44871_block_0);

return G__44881;
})());
})(),missionary.core.sp_run);
});
var cr44854_place_13 = (function (_BANG_){
var G__44942_45055 = _BANG_;
var fexpr__44941_45056 = cr44854_place_1;
(fexpr__44941_45056.cljs$core$IFn$_invoke$arity$1 ? fexpr__44941_45056.cljs$core$IFn$_invoke$arity$1(G__44942_45055) : fexpr__44941_45056.call(null,G__44942_45055));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr44854_place_14 = (function (p1__44853_SHARP_){
throw p1__44853_SHARP_;
});
var cr44854_place_15 = c;
var cr44854_place_16 = cr44854_place_12;
var cr44854_place_17 = cr44854_place_13;
var cr44854_place_18 = cr44854_place_14;
var cr44854_place_19 = (function (){var G__44944 = cr44854_place_16;
var G__44945 = cr44854_place_17;
var G__44946 = cr44854_place_18;
var fexpr__44943 = cr44854_place_15;
return (fexpr__44943.cljs$core$IFn$_invoke$arity$3 ? fexpr__44943.cljs$core$IFn$_invoke$arity$3(G__44944,G__44945,G__44946) : fexpr__44943.call(null,G__44944,G__44945,G__44946));
})();
var cr44854_place_20 = (function (){var G__44948 = cr44854_place_5;
var G__44949 = cr44854_place_11;
var G__44950 = cr44854_place_19;
var fexpr__44947 = cr44854_place_4;
return (fexpr__44947.cljs$core$IFn$_invoke$arity$3 ? fexpr__44947.cljs$core$IFn$_invoke$arity$3(G__44948,G__44949,G__44950) : fexpr__44947.call(null,G__44948,G__44949,G__44950));
})();
(cr44854_state[(0)] = cr44854_block_1);

return missionary.core.park(cr44854_place_20);
}catch (e44917){var cr44854_exception = e44917;
(cr44854_state[(0)] = null);

throw cr44854_exception;
}});
var cr44854_block_1 = (function hyperfiddle$electric$pair_$_cr44854_block_1(cr44854_state){
try{var cr44854_place_21 = missionary.core.unpark();
(cr44854_state[(0)] = null);

return cr44854_place_21;
}catch (e44951){var cr44854_exception = e44951;
(cr44854_state[(0)] = null);

throw cr44854_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44952 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__44952[(0)] = cr44854_block_0);

return G__44952;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.wrap_STAR_ = (function hyperfiddle$electric$wrap_STAR_(thunk){
return null;
});
hyperfiddle.electric.chan_read_BANG_ = contrib.missionary_contrib.chan_read_BANG_;
hyperfiddle.electric.chan__GT_ap = contrib.missionary_contrib.chan__GT_ap;
hyperfiddle.electric.chan__GT_task = contrib.missionary_contrib.chan__GT_task;
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__44955 = arguments.length;
switch (G__44955) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44956_block_0 = (function hyperfiddle$electric$cr44956_block_0(cr44956_state){
try{var cr44956_place_0 = _BANG_x;
(cr44956_state[(0)] = cr44956_block_1);

return missionary.core.park(cr44956_place_0);
}catch (e44959){var cr44956_exception = e44959;
(cr44956_state[(0)] = null);

throw cr44956_exception;
}});
var cr44956_block_1 = (function hyperfiddle$electric$cr44956_block_1(cr44956_state){
try{var cr44956_place_1 = missionary.core.unpark();
(cr44956_state[(0)] = null);

return cr44956_place_1;
}catch (e44960){var cr44956_exception = e44960;
(cr44956_state[(0)] = null);

throw cr44956_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44961 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__44961[(0)] = cr44956_block_0);

return G__44961;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__44963 = (arguments.length - (1));
switch (G__44963) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args44962){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44962)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(_){
return Date.now();
});
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__44967 = arguments.length;
switch (G__44967) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44968_block_4 = (function hyperfiddle$electric$cr44968_block_4(cr44968_state){
try{var cr44968_place_2 = (cr44968_state[(3)]);
var cr44968_place_9 = cr44968_place_2;
var cr44968_place_10 = missionary.Cancelled;
var cr44968_place_11 = (cr44968_place_9 instanceof cr44968_place_10);
var cr44968_place_12 = null;
if(cr44968_place_11){
(cr44968_state[(0)] = cr44968_block_9);

(cr44968_state[(1)] = cr44968_place_12);

return cr44968_state;
} else {
(cr44968_state[(0)] = cr44968_block_5);

(cr44968_state[(1)] = cr44968_place_12);

return cr44968_state;
}
}catch (e44986){var cr44968_exception = e44986;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_11 = (function hyperfiddle$electric$cr44968_block_11(cr44968_state){
try{var cr44968_place_12 = (cr44968_state[(1)]);
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(3)] = cr44968_place_12);

return cr44968_state;
}catch (e44987){var cr44968_exception = e44987;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_9 = (function hyperfiddle$electric$cr44968_block_9(cr44968_state){
try{var cr44968_place_2 = (cr44968_state[(3)]);
var cr44968_place_18 = cr44968_place_2;
var cr44968_place_19 = (1);
var cr44968_place_20 = missionary.core.none;
(cr44968_state[(0)] = cr44968_block_10);

return missionary.core.fork(cr44968_place_19,cr44968_place_20);
}catch (e44988){var cr44968_exception = e44988;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_5 = (function hyperfiddle$electric$cr44968_block_5(cr44968_state){
try{var cr44968_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr44968_place_14 = null;
if(cljs.core.truth_(cr44968_place_13)){
(cr44968_state[(0)] = cr44968_block_7);

(cr44968_state[(1)] = null);

return cr44968_state;
} else {
(cr44968_state[(0)] = cr44968_block_6);

(cr44968_state[(4)] = cr44968_place_14);

return cr44968_state;
}
}catch (e44989){var cr44968_exception = e44989;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_6 = (function hyperfiddle$electric$cr44968_block_6(cr44968_state){
try{var cr44968_place_15 = null;
(cr44968_state[(0)] = cr44968_block_8);

(cr44968_state[(4)] = cr44968_place_15);

return cr44968_state;
}catch (e44990){var cr44968_exception = e44990;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(4)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_12 = (function hyperfiddle$electric$cr44968_block_12(cr44968_state){
try{var cr44968_place_3 = (cr44968_state[(2)]);
var cr44968_place_2 = (cr44968_state[(3)]);
var cr44968_place_22 = (cljs.core.truth_(cr44968_place_3)?(function(){throw cr44968_place_2})():cr44968_place_2);
(cr44968_state[(0)] = null);

(cr44968_state[(2)] = null);

(cr44968_state[(3)] = null);

return cr44968_place_22;
}catch (e44991){var cr44968_exception = e44991;
(cr44968_state[(0)] = null);

(cr44968_state[(2)] = null);

(cr44968_state[(3)] = null);

throw cr44968_exception;
}});
var cr44968_block_7 = (function hyperfiddle$electric$cr44968_block_7(cr44968_state){
try{var cr44968_place_2 = (cr44968_state[(3)]);
var cr44968_place_16 = cr44968_place_2;
var cr44968_place_17 = (function(){throw cr44968_place_16})();
(cr44968_state[(0)] = null);

(cr44968_state[(2)] = null);

(cr44968_state[(3)] = null);

return null;
}catch (e44992){var cr44968_exception = e44992;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_2 = (function hyperfiddle$electric$cr44968_block_2(cr44968_state){
try{var cr44968_place_1 = (cr44968_state[(1)]);
var cr44968_place_4 = missionary.core.sleep;
var cr44968_place_5 = delay;
var cr44968_place_6 = cr44968_place_1;
var cr44968_place_7 = (function (){var G__44995 = cr44968_place_5;
var G__44996 = cr44968_place_6;
var fexpr__44994 = cr44968_place_4;
return (fexpr__44994.cljs$core$IFn$_invoke$arity$2 ? fexpr__44994.cljs$core$IFn$_invoke$arity$2(G__44995,G__44996) : fexpr__44994.call(null,G__44995,G__44996));
})();
(cr44968_state[(0)] = cr44968_block_3);

(cr44968_state[(1)] = null);

return missionary.core.park(cr44968_place_7);
}catch (e44993){var cr44968_exception = e44993;
(cr44968_state[(0)] = cr44968_block_4);

(cr44968_state[(1)] = null);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_0 = (function hyperfiddle$electric$cr44968_block_0(cr44968_state){
try{var cr44968_place_0 = flow;
(cr44968_state[(0)] = cr44968_block_1);

return missionary.core.switch$(cr44968_place_0);
}catch (e44997){var cr44968_exception = e44997;
(cr44968_state[(0)] = null);

throw cr44968_exception;
}});
var cr44968_block_1 = (function hyperfiddle$electric$cr44968_block_1(cr44968_state){
try{var cr44968_place_1 = missionary.core.unpark();
var cr44968_place_2 = null;
var cr44968_place_3 = false;
(cr44968_state[(0)] = cr44968_block_2);

(cr44968_state[(1)] = cr44968_place_1);

(cr44968_state[(3)] = cr44968_place_2);

(cr44968_state[(2)] = cr44968_place_3);

return cr44968_state;
}catch (e44998){var cr44968_exception = e44998;
(cr44968_state[(0)] = null);

throw cr44968_exception;
}});
var cr44968_block_8 = (function hyperfiddle$electric$cr44968_block_8(cr44968_state){
try{var cr44968_place_14 = (cr44968_state[(4)]);
(cr44968_state[(0)] = cr44968_block_11);

(cr44968_state[(4)] = null);

(cr44968_state[(1)] = cr44968_place_14);

return cr44968_state;
}catch (e44999){var cr44968_exception = e44999;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(4)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_10 = (function hyperfiddle$electric$cr44968_block_10(cr44968_state){
try{var cr44968_place_21 = missionary.core.unpark();
(cr44968_state[(0)] = cr44968_block_11);

(cr44968_state[(1)] = cr44968_place_21);

return cr44968_state;
}catch (e45000){var cr44968_exception = e45000;
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(1)] = null);

(cr44968_state[(2)] = true);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
var cr44968_block_3 = (function hyperfiddle$electric$cr44968_block_3(cr44968_state){
try{var cr44968_place_8 = missionary.core.unpark();
(cr44968_state[(0)] = cr44968_block_12);

(cr44968_state[(3)] = cr44968_place_8);

return cr44968_state;
}catch (e45001){var cr44968_exception = e45001;
(cr44968_state[(0)] = cr44968_block_4);

(cr44968_state[(3)] = cr44968_exception);

return cr44968_state;
}});
return cloroutine.impl.coroutine((function (){var G__45002 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__45002[(0)] = cr44968_block_0);

return G__45002;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45003_block_1 = (function hyperfiddle$electric$throttle_$_cr45003_block_1(cr45003_state){
try{var cr45003_place_5 = missionary.core.unpark();
var cr45003_place_6 = (1);
var cr45003_place_7 = missionary.core.seed;
var cr45003_place_8 = cljs.core.range;
var cr45003_place_9 = (2);
var cr45003_place_10 = (function (){var G__45026 = cr45003_place_9;
var fexpr__45025 = cr45003_place_8;
return (fexpr__45025.cljs$core$IFn$_invoke$arity$1 ? fexpr__45025.cljs$core$IFn$_invoke$arity$1(G__45026) : fexpr__45025.call(null,G__45026));
})();
var cr45003_place_11 = (function (){var G__45028 = cr45003_place_10;
var fexpr__45027 = cr45003_place_7;
return (fexpr__45027.cljs$core$IFn$_invoke$arity$1 ? fexpr__45027.cljs$core$IFn$_invoke$arity$1(G__45028) : fexpr__45027.call(null,G__45028));
})();
(cr45003_state[(0)] = cr45003_block_2);

(cr45003_state[(1)] = cr45003_place_5);

return missionary.core.fork(cr45003_place_6,cr45003_place_11);
}catch (e45024){var cr45003_exception = e45024;
(cr45003_state[(0)] = null);

throw cr45003_exception;
}});
var cr45003_block_0 = (function hyperfiddle$electric$throttle_$_cr45003_block_0(cr45003_state){
try{var cr45003_place_0 = (1);
var cr45003_place_1 = missionary.core.relieve;
var cr45003_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr45003_place_3 = _GT_in;
var cr45003_place_4 = (function (){var G__45031 = cr45003_place_2;
var G__45032 = cr45003_place_3;
var fexpr__45030 = cr45003_place_1;
return (fexpr__45030.cljs$core$IFn$_invoke$arity$2 ? fexpr__45030.cljs$core$IFn$_invoke$arity$2(G__45031,G__45032) : fexpr__45030.call(null,G__45031,G__45032));
})();
(cr45003_state[(0)] = cr45003_block_1);

return missionary.core.fork(cr45003_place_0,cr45003_place_4);
}catch (e45029){var cr45003_exception = e45029;
(cr45003_state[(0)] = null);

throw cr45003_exception;
}});
var cr45003_block_3 = (function hyperfiddle$electric$throttle_$_cr45003_block_3(cr45003_state){
try{var cr45003_place_5 = (cr45003_state[(1)]);
var cr45003_place_15 = cr45003_place_5;
(cr45003_state[(0)] = cr45003_block_8);

(cr45003_state[(1)] = null);

(cr45003_state[(2)] = cr45003_place_15);

return cr45003_state;
}catch (e45033){var cr45003_exception = e45033;
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

(cr45003_state[(1)] = null);

throw cr45003_exception;
}});
var cr45003_block_5 = (function hyperfiddle$electric$throttle_$_cr45003_block_5(cr45003_state){
try{var cr45003_place_19 = missionary.core.unpark();
var cr45003_place_20 = (1);
var cr45003_place_21 = missionary.core.none;
(cr45003_state[(0)] = cr45003_block_6);

return missionary.core.fork(cr45003_place_20,cr45003_place_21);
}catch (e45034){var cr45003_exception = e45034;
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

throw cr45003_exception;
}});
var cr45003_block_7 = (function hyperfiddle$electric$throttle_$_cr45003_block_7(cr45003_state){
try{var cr45003_place_12 = (cr45003_state[(1)]);
var cr45003_place_23 = "No matching clause: ";
var cr45003_place_24 = cr45003_place_12;
var cr45003_place_25 = [cr45003_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45003_place_24)].join('');
var cr45003_place_26 = (new Error(cr45003_place_25));
var cr45003_place_27 = (function(){throw cr45003_place_26})();
(cr45003_state[(0)] = null);

(cr45003_state[(1)] = null);

return null;
}catch (e45035){var cr45003_exception = e45035;
(cr45003_state[(0)] = null);

(cr45003_state[(1)] = null);

throw cr45003_exception;
}});
var cr45003_block_4 = (function hyperfiddle$electric$throttle_$_cr45003_block_4(cr45003_state){
try{var cr45003_place_16 = missionary.core.sleep;
var cr45003_place_17 = dur;
var cr45003_place_18 = (function (){var G__45038 = cr45003_place_17;
var fexpr__45037 = cr45003_place_16;
return (fexpr__45037.cljs$core$IFn$_invoke$arity$1 ? fexpr__45037.cljs$core$IFn$_invoke$arity$1(G__45038) : fexpr__45037.call(null,G__45038));
})();
(cr45003_state[(0)] = cr45003_block_5);

return missionary.core.park(cr45003_place_18);
}catch (e45036){var cr45003_exception = e45036;
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

throw cr45003_exception;
}});
var cr45003_block_6 = (function hyperfiddle$electric$throttle_$_cr45003_block_6(cr45003_state){
try{var cr45003_place_22 = missionary.core.unpark();
(cr45003_state[(0)] = cr45003_block_8);

(cr45003_state[(2)] = cr45003_place_22);

return cr45003_state;
}catch (e45039){var cr45003_exception = e45039;
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

throw cr45003_exception;
}});
var cr45003_block_8 = (function hyperfiddle$electric$throttle_$_cr45003_block_8(cr45003_state){
try{var cr45003_place_14 = (cr45003_state[(2)]);
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

return cr45003_place_14;
}catch (e45040){var cr45003_exception = e45040;
(cr45003_state[(0)] = null);

(cr45003_state[(2)] = null);

throw cr45003_exception;
}});
var cr45003_block_2 = (function hyperfiddle$electric$throttle_$_cr45003_block_2(cr45003_state){
try{var cr45003_place_12 = missionary.core.unpark();
var cr45003_place_13 = cr45003_place_12;
var cr45003_place_14 = null;
var G__45042 = cr45003_place_13;
switch (G__45042) {
case (0):
(cr45003_state[(0)] = cr45003_block_3);

(cr45003_state[(2)] = cr45003_place_14);

return cr45003_state;

break;
case (1):
(cr45003_state[(0)] = cr45003_block_4);

(cr45003_state[(1)] = null);

(cr45003_state[(2)] = cr45003_place_14);

return cr45003_state;

break;
default:
(cr45003_state[(0)] = cr45003_block_7);

(cr45003_state[(1)] = null);

(cr45003_state[(1)] = cr45003_place_12);

return cr45003_state;

}
}catch (e45041){var cr45003_exception = e45041;
(cr45003_state[(0)] = null);

(cr45003_state[(1)] = null);

throw cr45003_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45043 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__45043[(0)] = cr45003_block_0);

return G__45043;
})());
})(),missionary.core.ap_run);
});

//# sourceMappingURL=hyperfiddle.electric.js.map
