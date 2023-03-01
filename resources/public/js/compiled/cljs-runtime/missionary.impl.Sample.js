goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__38677 = (arguments.length - (1));
switch (G__38677) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args38675){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38675)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__38681 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__38681.cljs$core$IFn$_invoke$arity$0 ? fexpr__38681.cljs$core$IFn$_invoke$arity$0() : fexpr__38681.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___38793 = sampled;
var i_38795 = (0);
while(true){
if((i_38795 < n__5636__auto___38793)){
var input_38796 = (inputs[i_38795]);
(input_38796.cljs$core$IFn$_invoke$arity$0 ? input_38796.cljs$core$IFn$_invoke$arity$0() : input_38796.call(null));

if(((args[i_38795]) === args)){
try{cljs.core.deref(input_38796);
}catch (e38726){var __38798 = e38726;
}} else {
(args[i_38795] = args);
}

var G__38800 = (i_38795 + (1));
i_38795 = G__38800;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e38729){var __38806 = e38729;
}
var G__38808 = cb;
cb = G__38808;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___38814 = sampled;
var i_38815 = (0);
while(true){
if((i_38815 < n__5636__auto___38814)){
if(((args[i_38815]) === args)){
var input_38818 = (inputs[i_38815]);
while(true){
(args[i_38815] = null);

var x_38822 = cljs.core.deref(input_38818);
if(((args[i_38815]) === args)){
continue;
} else {
(args[i_38815] = x_38822);
}
break;
}
} else {
}

var G__38825 = (i_38815 + (1));
i_38815 = G__38825;
continue;
} else {
}
break;
}
}catch (e38733){var e_38826 = e38733;
try{cljs.core.deref(sampler);
}catch (e38735){var __38827 = e38735;
}
throw e_38826;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e38732){var e = e38732;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___38829 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___38829 == null)){
} else {
var cb_38830 = temp__5808__auto___38829;
(cb_38830.cljs$core$IFn$_invoke$arity$0 ? cb_38830.cljs$core$IFn$_invoke$arity$0() : cb_38830.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e38752){var _ = e38752;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__38762 = ps.terminator;
return (fexpr__38762.cljs$core$IFn$_invoke$arity$0 ? fexpr__38762.cljs$core$IFn$_invoke$arity$0() : fexpr__38762.call(null));
} else {
return null;
}
});
var index_38845 = (0);
var flow_38846 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_38845] = (function (){var G__38765 = ((function (index_38845,flow_38846,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_38845);
});})(index_38845,flow_38846,it,arity,args,inputs,ps,done))
;
var G__38766 = done;
return (flow_38846.cljs$core$IFn$_invoke$arity$2 ? flow_38846.cljs$core$IFn$_invoke$arity$2(G__38765,G__38766) : flow_38846.call(null,G__38765,G__38766));
})());

if(((args[index_38845]) == null)){
(ps.combinator = null);
} else {
}

var G__38848 = (index_38845 + (1));
var G__38849 = it.next();
index_38845 = G__38848;
flow_38846 = G__38849;
continue;
} else {
(inputs[index_38845] = (function (){var G__38767 = ((function (index_38845,flow_38846,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_38845,flow_38846,it,arity,args,inputs,ps,done))
;
var G__38768 = ((function (index_38845,flow_38846,G__38767,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_38845,flow_38846,G__38767,it,arity,args,inputs,ps,done))
;
return (flow_38846.cljs$core$IFn$_invoke$arity$2 ? flow_38846.cljs$core$IFn$_invoke$arity$2(G__38767,G__38768) : flow_38846.call(null,G__38767,G__38768));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
