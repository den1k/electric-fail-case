goog.provide('hyperfiddle.electric.impl.yield$');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield$.Yield = (function (check,notifier,terminator,state){
this.check = check;
this.notifier = notifier;
this.terminator = terminator;
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield$.Yield.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__39544 = (arguments.length - (1));
switch (G__39544) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.apply = (function (self__,args39542){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39542)));
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield$.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield$.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : hyperfiddle.electric.impl.yield$.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield$.sample.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield$.sample.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield$.sample.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield$.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield/Yield");

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield/Yield.
 */
hyperfiddle.electric.impl.yield$.__GT_Yield = (function hyperfiddle$electric$impl$yield$__GT_Yield(check,notifier,terminator,state){
return (new hyperfiddle.electric.impl.yield$.Yield(check,notifier,terminator,state));
});

hyperfiddle.electric.impl.yield$.transfer = (function hyperfiddle$electric$impl$yield$transfer(r,f){
var s = r.state;
while(true){
if(cljs.core.truth_((f[((1) | (0))] = cljs.core.not((f[((1) | (0))]))))){
if(cljs.core.truth_((f[((2) | (0))]))){
if(((s[((3) | (0))] = ((s[((3) | (0))]) - (1))) === (0))){
var fexpr__39584_39666 = r.terminator;
(fexpr__39584_39666.cljs$core$IFn$_invoke$arity$0 ? fexpr__39584_39666.cljs$core$IFn$_invoke$arity$0() : fexpr__39584_39666.call(null));
} else {
}

continue;
} else {
var g = (s[((4) | (0))]);
if((f === g)){
var fexpr__39590 = r.notifier;
return (fexpr__39590.cljs$core$IFn$_invoke$arity$0 ? fexpr__39590.cljs$core$IFn$_invoke$arity$0() : fexpr__39590.call(null));
} else {
if((((f === s)) && ((!((g == null)))))){
var i = (g[((0) | (0))]);
(s[((4) | (0))] = s);

(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));

if(cljs.core.truth_((g[((1) | (0))]))){
try{cljs.core.deref(i);
}catch (e39593){var __39669 = e39593;
}
return (hyperfiddle.electric.impl.yield$.transfer.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.electric.impl.yield$.transfer.cljs$core$IFn$_invoke$arity$2(r,g) : hyperfiddle.electric.impl.yield$.transfer.call(null,r,g));
} else {
var fexpr__39594 = r.notifier;
return (fexpr__39594.cljs$core$IFn$_invoke$arity$0 ? fexpr__39594.cljs$core$IFn$_invoke$arity$0() : fexpr__39594.call(null));
}
} else {
var i = (f[((0) | (0))]);
try{cljs.core.deref(i);
}catch (e39596){var __39675 = e39596;
}
continue;
}
}
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.yield$.cancel = (function hyperfiddle$electric$impl$yield$cancel(s){
var fexpr__39600 = (s[((0) | (0))]);
return (fexpr__39600.cljs$core$IFn$_invoke$arity$0 ? fexpr__39600.cljs$core$IFn$_invoke$arity$0() : fexpr__39600.call(null));
});
hyperfiddle.electric.impl.yield$.sample = (function hyperfiddle$electric$impl$yield$sample(r){
var s = r.state;
var f = (s[((4) | (0))]);
try{var x = cljs.core.deref((f[((0) | (0))]));
if((f === s)){
var temp__5806__auto__ = (function (){var fexpr__39607 = r.check;
return (fexpr__39607.cljs$core$IFn$_invoke$arity$1 ? fexpr__39607.cljs$core$IFn$_invoke$arity$1(x) : fexpr__39607.call(null,x));
})();
if((temp__5806__auto__ == null)){
return x;
} else {
var _GT_e = temp__5806__auto__;
var f__$1 = (function (){var G__39608 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__39608[((1) | (0))] = true);

(G__39608[((2) | (0))] = false);

return G__39608;
})();
var i = (function (){var G__39609 = (function (){
return hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
});
var G__39610 = (function (){
(f__$1[((2) | (0))] = true);

return hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
});
return (_GT_e.cljs$core$IFn$_invoke$arity$2 ? _GT_e.cljs$core$IFn$_invoke$arity$2(G__39609,G__39610) : _GT_e.call(null,G__39609,G__39610));
})();
(f__$1[((0) | (0))] = i);

(s[((4) | (0))] = f__$1);

(s[((3) | (0))] = ((s[((3) | (0))]) + (1)));

var G__39624_39700 = (f__$1[((1) | (0))] = cljs.core.not((f__$1[((1) | (0))])));
if(cljs.core.truth_(G__39624_39700)){
} else {
throw (new Error(["Assert failed: ","Initialization failure.","\n","G__39624"].join('')));
}


try{return cljs.core.deref(i);
}finally {hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
}}
} else {
return x;
}
}catch (e39606){var e = e39606;
hyperfiddle.electric.impl.yield$.cancel(s);

(s[((4) | (0))] = null);

throw e;
}finally {hyperfiddle.electric.impl.yield$.transfer(r,f);
}});
/**
 * 
 * Returns a continuous flow producing values produced by continuous flow >x, passing each sampled value to function f.
 * If the result is nil, the value is returned as is, otherwise the result is run as a flow and its values are output
 * until the input flow becomes ready again, at which point the recovery flow is cancelled.
 */
hyperfiddle.electric.impl.yield$.yield$ = (function hyperfiddle$electric$impl$yield$yield(f,_GT_x){
return (function (n,t){
var s = (function (){var G__39638 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__39638[((1) | (0))] = true);

(G__39638[((2) | (0))] = false);

(G__39638[((3) | (0))] = (1));

return G__39638;
})();
var r = hyperfiddle.electric.impl.yield$.__GT_Yield(f,n,t,s);
(s[((4) | (0))] = s);

(s[((0) | (0))] = (function (){var G__39643 = (function (){
return hyperfiddle.electric.impl.yield$.transfer(r,s);
});
var G__39644 = (function (){
(s[((2) | (0))] = true);

return hyperfiddle.electric.impl.yield$.transfer(r,s);
});
return (_GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT_x.cljs$core$IFn$_invoke$arity$2(G__39643,G__39644) : _GT_x.call(null,G__39643,G__39644));
})());

var G__39647 = r;
hyperfiddle.electric.impl.yield$.transfer(G__39647,s);

return G__39647;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield.js.map
