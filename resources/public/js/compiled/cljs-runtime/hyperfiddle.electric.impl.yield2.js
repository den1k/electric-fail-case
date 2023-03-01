goog.provide('hyperfiddle.electric.impl.yield2');

hyperfiddle.electric.impl.yield2.input = ((0) | (0));

hyperfiddle.electric.impl.yield2.recover = ((1) | (0));

hyperfiddle.electric.impl.yield2.children = ((2) | (0));

hyperfiddle.electric.impl.yield2.last_in = ((3) | (0));

hyperfiddle.electric.impl.yield2.last_out = ((4) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield2.Yield = (function (checker,notifier,terminator,state_){
this.checker = checker;
this.notifier = notifier;
this.terminator = terminator;
this.state_ = state_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__33581 = (arguments.length - (1));
switch (G__33581) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args33570){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33570)));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1(this$) : hyperfiddle.electric.impl.yield2.cancel.call(null,this$));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield2.transfer.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield2.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checker","checker",2053644407,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/Yield");

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/Yield.
 */
hyperfiddle.electric.impl.yield2.__GT_Yield = (function hyperfiddle$electric$impl$yield2$__GT_Yield(checker,notifier,terminator,state_){
return (new hyperfiddle.electric.impl.yield2.Yield(checker,notifier,terminator,state_));
});

hyperfiddle.electric.impl.yield2.iterator = ((0) | (0));

hyperfiddle.electric.impl.yield2.notified_QMARK_ = ((1) | (0));

hyperfiddle.electric.impl.yield2.on_notify = ((2) | (0));
hyperfiddle.electric.impl.yield2.input_notified = (function hyperfiddle$electric$impl$yield2$input_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var arr33598 = (function (){var arr33599 = Y.state_;
return (arr33599[hyperfiddle.electric.impl.yield2.input]);
})();
var k__29338__auto__ = hyperfiddle.electric.impl.yield2.notified_QMARK_;
var ret__29339__auto__ = (function (){var arr33602 = arr33598;
return (arr33602[k__29338__auto__]);
})();
var arr33603_33837 = arr33598;
(arr33603_33837[k__29338__auto__] = cljs.core.identity(true));

return ret__29339__auto__;
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__33606 = (function (){var arr33607 = Y.state_;
return (arr33607[hyperfiddle.electric.impl.yield2.recover]);
})();
if((G__33606 == null)){
return null;
} else {
var arr33608 = G__33606;
return (arr33608[hyperfiddle.electric.impl.yield2.notified_QMARK_]);
}
}
})())){
return null;
} else {
var fexpr__33614 = Y.notifier;
return (fexpr__33614.cljs$core$IFn$_invoke$arity$0 ? fexpr__33614.cljs$core$IFn$_invoke$arity$0() : fexpr__33614.call(null));
}
});
hyperfiddle.electric.impl.yield2.recover_notified = (function hyperfiddle$electric$impl$yield2$recover_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var arr33622 = (function (){var arr33623 = Y.state_;
return (arr33623[hyperfiddle.electric.impl.yield2.recover]);
})();
var k__29338__auto__ = hyperfiddle.electric.impl.yield2.notified_QMARK_;
var ret__29339__auto__ = (function (){var arr33628 = arr33622;
return (arr33628[k__29338__auto__]);
})();
var arr33632_33843 = arr33622;
(arr33632_33843[k__29338__auto__] = cljs.core.identity(true));

return ret__29339__auto__;
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var arr33636 = (function (){var arr33637 = Y.state_;
return (arr33637[hyperfiddle.electric.impl.yield2.input]);
})();
return (arr33636[hyperfiddle.electric.impl.yield2.notified_QMARK_]);
}
})())){
return null;
} else {
var fexpr__33639 = Y.notifier;
return (fexpr__33639.cljs$core$IFn$_invoke$arity$0 ? fexpr__33639.cljs$core$IFn$_invoke$arity$0() : fexpr__33639.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if(((function (){var arr33644 = Y.state_;
var k__29281__auto__ = hyperfiddle.electric.impl.yield2.children;
var f__29282__auto__ = cljs.core.dec;
return (arr33644[k__29281__auto__] = (function (){var G__33645 = (arr33644[k__29281__auto__]);
return (f__29282__auto__.cljs$core$IFn$_invoke$arity$1 ? f__29282__auto__.cljs$core$IFn$_invoke$arity$1(G__33645) : f__29282__auto__.call(null,G__33645));
})());
})() === (0))){
var fexpr__33646 = Y.terminator;
return (fexpr__33646.cljs$core$IFn$_invoke$arity$0 ? fexpr__33646.cljs$core$IFn$_invoke$arity$0() : fexpr__33646.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref((function (){var arr33652 = o;
return (arr33652[hyperfiddle.electric.impl.yield2.iterator]);
})());
}catch (e33651){var _ = e33651;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr33657_33851 = o;
(arr33657_33851[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__33659_33853 = (function (){var arr33660 = o;
return (arr33660[hyperfiddle.electric.impl.yield2.iterator]);
})();
(fexpr__33659_33853.cljs$core$IFn$_invoke$arity$0 ? fexpr__33659_33853.cljs$core$IFn$_invoke$arity$0() : fexpr__33659_33853.call(null));

if(cljs.core.truth_((function (){var arr33661 = o;
var k__29338__auto__ = hyperfiddle.electric.impl.yield2.notified_QMARK_;
var ret__29339__auto__ = (function (){var arr33663 = arr33661;
return (arr33663[k__29338__auto__]);
})();
var arr33665_33857 = arr33661;
(arr33665_33857[k__29338__auto__] = cljs.core.identity(false));

return ret__29339__auto__;
})())){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__33671_33860 = (function (){var arr33672 = (function (){var arr33673 = Y.state_;
return (arr33673[hyperfiddle.electric.impl.yield2.input]);
})();
return (arr33672[hyperfiddle.electric.impl.yield2.iterator]);
})();
(fexpr__33671_33860.cljs$core$IFn$_invoke$arity$0 ? fexpr__33671_33860.cljs$core$IFn$_invoke$arity$0() : fexpr__33671_33860.call(null));

var temp__5808__auto__ = (function (){var arr33676 = Y.state_;
return (arr33676[hyperfiddle.electric.impl.yield2.recover]);
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var rec = temp__5808__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5808__auto___33867 = (function (){var arr33684 = Y.state_;
return (arr33684[hyperfiddle.electric.impl.yield2.recover]);
})();
if((temp__5808__auto___33867 == null)){
} else {
var rec_33869 = temp__5808__auto___33867;
hyperfiddle.electric.impl.yield2.trash(rec_33869);
}

var arr33686_33870 = Y.state_;
var k__29281__auto___33871 = hyperfiddle.electric.impl.yield2.children;
var f__29282__auto___33872 = cljs.core.inc;
(arr33686_33870[k__29281__auto___33871] = (function (){var G__33689 = (arr33686_33870[k__29281__auto___33871]);
return (f__29282__auto___33872.cljs$core$IFn$_invoke$arity$1 ? f__29282__auto___33872.cljs$core$IFn$_invoke$arity$1(G__33689) : f__29282__auto___33872.call(null,G__33689));
})());

var me = (function (){var arr33690 = Y.state_;
return (arr33690[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr33694 = me;
(arr33694[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return null;
})));

return (arr33694[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__33697 = (function (){
var fexpr__33700 = (function (){var arr33701 = me;
return (arr33701[hyperfiddle.electric.impl.yield2.on_notify]);
})();
return (fexpr__33700.cljs$core$IFn$_invoke$arity$0 ? fexpr__33700.cljs$core$IFn$_invoke$arity$0() : fexpr__33700.call(null));
});
var G__33698 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__33697,G__33698) : _GT_r.call(null,G__33697,G__33698));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr33714_33882 = (function (){var arr33715 = Y.state_;
return (arr33715[hyperfiddle.electric.impl.yield2.recover]);
})();
(arr33714_33882[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

return cljs.core.deref((function (){var arr33717 = (function (){var arr33720 = Y.state_;
return (arr33720[hyperfiddle.electric.impl.yield2.recover]);
})();
return (arr33717[hyperfiddle.electric.impl.yield2.iterator]);
})());
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var arr33729_33883 = (function (){var arr33730 = Y.state_;
return (arr33730[hyperfiddle.electric.impl.yield2.input]);
})();
(arr33729_33883[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var in$ = cljs.core.deref((function (){var arr33732 = (function (){var arr33734 = Y.state_;
return (arr33734[hyperfiddle.electric.impl.yield2.input]);
})();
return (arr33732[hyperfiddle.electric.impl.yield2.iterator]);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,(function (){var arr33736 = Y.state_;
return (arr33736[hyperfiddle.electric.impl.yield2.last_in]);
})())){
var arr33737 = Y.state_;
return (arr33737[hyperfiddle.electric.impl.yield2.last_out]);
} else {
var temp__5806__auto__ = (function (){var fexpr__33738 = Y.checker;
return (fexpr__33738.cljs$core$IFn$_invoke$arity$1 ? fexpr__33738.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__33738.call(null,in$));
})();
if((temp__5806__auto__ == null)){
var arr33740_33886 = Y.state_;
(arr33740_33886[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5808__auto___33887 = (function (){var arr33742 = Y.state_;
return (arr33742[hyperfiddle.electric.impl.yield2.recover]);
})();
if((temp__5808__auto___33887 == null)){
} else {
var rec_33888 = temp__5808__auto___33887;
hyperfiddle.electric.impl.yield2.trash(rec_33888);
}

return in$;
} else {
var _GT_recover = temp__5806__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr33746_33892 = (function (){var arr33748 = Y.state_;
return (arr33748[hyperfiddle.electric.impl.yield2.recover]);
})();
(arr33746_33892[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr33752 = Y.state_;
(arr33752[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr33752[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
}
}
});
hyperfiddle.electric.impl.yield2.transfer = (function hyperfiddle$electric$impl$yield2$transfer(Y){
try{if(cljs.core.truth_((function (){var arr33760 = (function (){var arr33761 = Y.state_;
return (arr33761[hyperfiddle.electric.impl.yield2.input]);
})();
return (arr33760[hyperfiddle.electric.impl.yield2.notified_QMARK_]);
})())){
return hyperfiddle.electric.impl.yield2.transfer_input(Y);
} else {
if(cljs.core.truth_((function (){var arr33762 = (function (){var arr33763 = Y.state_;
return (arr33763[hyperfiddle.electric.impl.yield2.recover]);
})();
return (arr33762[hyperfiddle.electric.impl.yield2.notified_QMARK_]);
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot transfer a value if I haven't notified you",cljs.core.PersistentArrayMap.EMPTY);

}
}
}catch (e33756){var e = e33756;
hyperfiddle.electric.impl.yield2.trash((function (){var arr33757 = Y.state_;
return (arr33757[hyperfiddle.electric.impl.yield2.input]);
})());

var temp__5808__auto___33901 = (function (){var arr33758 = Y.state_;
return (arr33758[hyperfiddle.electric.impl.yield2.recover]);
})();
if((temp__5808__auto___33901 == null)){
} else {
var rec_33902 = temp__5808__auto___33901;
hyperfiddle.electric.impl.yield2.trash(rec_33902);
}

throw e;
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr33772 = Y.state_;
(arr33772[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr33772[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr33772[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr33775_33911 = me;
(arr33775_33911[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr33775_33911[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__33779 = (function (){
var fexpr__33782 = (function (){var arr33783 = me;
return (arr33783[hyperfiddle.electric.impl.yield2.on_notify]);
})();
return (fexpr__33782.cljs$core$IFn$_invoke$arity$0 ? fexpr__33782.cljs$core$IFn$_invoke$arity$0() : fexpr__33782.call(null));
});
var G__33780 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__33779,G__33780) : _GT_input.call(null,G__33779,G__33780));
})()));

return Y;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
