goog.provide('stuffs.util');
stuffs.util.project = (function stuffs$util$project(var_args){
var G__61492 = arguments.length;
switch (G__61492) {
case 2:
return stuffs.util.project.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stuffs.util.project.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.project.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return stuffs.util.project.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,f,coll);
}));

(stuffs.util.project.cljs$core$IFn$_invoke$arity$3 = (function (to,f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(stuffs.util.project.cljs$lang$maxFixedArity = 3);

stuffs.util.project_as_keys = (function stuffs$util$project_as_keys(var_args){
var G__61494 = arguments.length;
switch (G__61494) {
case 2:
return stuffs.util.project_as_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stuffs.util.project_as_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.project_as_keys.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,coll){
return stuffs.util.project_as_keys.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,key_fn,coll);
}));

(stuffs.util.project_as_keys.cljs$core$IFn$_invoke$arity$3 = (function (to,key_fn,coll){
return stuffs.util.project.cljs$core$IFn$_invoke$arity$3(to,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x)),x], null);
}),coll);
}));

(stuffs.util.project_as_keys.cljs$lang$maxFixedArity = 3);

stuffs.util.__GT_kw_str = (function stuffs$util$__GT_kw_str(string_kw_or_sym){
var s = (function (){var G__61495 = string_kw_or_sym;
var G__61495__$1 = (((G__61495 == null))?null:cljs.core.name(G__61495));
var G__61495__$2 = (((G__61495__$1 == null))?null:clojure.string.trim(G__61495__$1));
if((G__61495__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__61495__$2);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = s;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((stuffs.util.contains_white_space_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stuffs.util.contains_white_space_QMARK_.cljs$core$IFn$_invoke$arity$1(s) : stuffs.util.contains_white_space_QMARK_.call(null,s)));
} else {
return and__5043__auto__;
}
})())){
return s;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string_kw_or_sym)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),string_kw_or_sym], null));
}
});
stuffs.util.str_starts_with_number_QMARK_ = (function stuffs$util$str_starts_with_number_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$(cljs.core.re_find(/^\d/,s))));
});
stuffs.util.namespace_key = (function (){var throw_when_str_starts_with_number = (function stuffs$util$throw_when_str_starts_with_number(s){
if(stuffs.util.str_starts_with_number_QMARK_(s)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["key cannot start with number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),s], null));
} else {
return s;
}
});
return (function() {
var stuffs$util$ns_k = null;
var stuffs$util$ns_k__1 = (function (nsp){
var nsp_SINGLEQUOTE_ = stuffs.util.__GT_kw_str(nsp);
return (function stuffs$util$ns_k_$_nsk(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(nsp_SINGLEQUOTE_,throw_when_str_starts_with_number(stuffs.util.__GT_kw_str(k)));
});
});
var stuffs$util$ns_k__2 = (function (nsp,k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(stuffs.util.__GT_kw_str(nsp),throw_when_str_starts_with_number(stuffs.util.__GT_kw_str(k)));
});
stuffs$util$ns_k = function(nsp,k){
switch(arguments.length){
case 1:
return stuffs$util$ns_k__1.call(this,nsp);
case 2:
return stuffs$util$ns_k__2.call(this,nsp,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stuffs$util$ns_k.cljs$core$IFn$_invoke$arity$1 = stuffs$util$ns_k__1;
stuffs$util$ns_k.cljs$core$IFn$_invoke$arity$2 = stuffs$util$ns_k__2;
return stuffs$util$ns_k;
})()
})();
stuffs.util.un_ns_k = (function stuffs$util$un_ns_k(k){
var G__61496 = k;
var G__61496__$1 = (((G__61496 == null))?null:cljs.core.name(G__61496));
if((G__61496__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__61496__$1);
}
});
stuffs.util.k__GT_ns_k = (function stuffs$util$k__GT_ns_k(k){
var G__61497 = k;
var G__61497__$1 = (((G__61497 == null))?null:cljs.core.namespace(G__61497));
if((G__61497__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__61497__$1);
}
});
stuffs.util.prefix_key = (function stuffs$util$prefix_key(prefix,k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(prefix),cljs.core.name(k)].join(''));
});
stuffs.util.prefix_keys = (function stuffs$util$prefix_keys(prefix,m){
return stuffs.util.project.cljs$core$IFn$_invoke$arity$2((function (p__61498){
var vec__61499 = p__61498;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61499,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuffs.util.prefix_key(prefix,k),v], null);
}),m);
});
stuffs.util.namespace_keys = (function stuffs$util$namespace_keys(prefix,m){
var prefix__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"/"].join('');
return stuffs.util.prefix_keys(prefix__$1,m);
});
stuffs.util.ffilter = (function stuffs$util$ffilter(pred,coll){
return cljs.core.some((function (p1__61502_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__61502_SHARP_) : pred.call(null,p1__61502_SHARP_)))){
return p1__61502_SHARP_;
} else {
return null;
}
}),coll);
});
stuffs.util.update_existing = medley.core.update_existing;
stuffs.util.assoc_some = medley.core.assoc_some;
/**
 * (fn-map {:odd? odd? :even? even?} 1)
 * => {:odd? true, :even? false}
 */
stuffs.util.fn_map = (function stuffs$util$fn_map(var_args){
var G__61504 = arguments.length;
switch (G__61504) {
case 1:
return stuffs.util.fn_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.fn_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.fn_map.cljs$core$IFn$_invoke$arity$1 = (function (f_map){
return (function (x){
return cljs.core.reduce_kv((function (out,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}),cljs.core.PersistentArrayMap.EMPTY,f_map);
});
}));

(stuffs.util.fn_map.cljs$core$IFn$_invoke$arity$2 = (function (f_map,x){
return stuffs.util.fn_map.cljs$core$IFn$_invoke$arity$1(f_map)(x);
}));

(stuffs.util.fn_map.cljs$lang$maxFixedArity = 2);

/**
 * (fn-map->transform {:number inc}
 *                 {:number 1})
 * => {:number 2}
 */
stuffs.util.fn_map__GT_transform = (function stuffs$util$fn_map__GT_transform(var_args){
var G__61506 = arguments.length;
switch (G__61506) {
case 1:
return stuffs.util.fn_map__GT_transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.fn_map__GT_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.fn_map__GT_transform.cljs$core$IFn$_invoke$arity$1 = (function (fn_map){
return (function (m){
return cljs.core.reduce_kv((function (out,k,f){
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if((temp__5806__auto__ == null)){
return out;
} else {
var v = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}
}),m,fn_map);
});
}));

(stuffs.util.fn_map__GT_transform.cljs$core$IFn$_invoke$arity$2 = (function (fn_map,m){
return stuffs.util.fn_map__GT_transform.cljs$core$IFn$_invoke$arity$1(fn_map)(m);
}));

(stuffs.util.fn_map__GT_transform.cljs$lang$maxFixedArity = 2);

/**
 * (nfurcate {:odd? odd?
 *         :even? even?} (range 10))
 * => {:even? [0 2 4 6 8], :odd? [1 3 5 7 9]}
 */
stuffs.util.nfurcate = (function stuffs$util$nfurcate(k__GT_pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,x){
var any_match_QMARK_ = cljs.core.volatile_BANG_(false);
var out__$1 = cljs.core.reduce_kv((function (o,k,pred){
if(cljs.core.truth_((function (){var and__5043__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vreset_BANG_(any_match_QMARK_,true);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(o,k,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not_empty,cljs.core.vec,cljs.core.conj),x);
} else {
return o;
}
}),out,k__GT_pred);
if(cljs.core.truth_(cljs.core.deref(any_match_QMARK_))){
cljs.core.vreset_BANG_(any_match_QMARK_,false);

return out__$1;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out__$1,new cljs.core.Keyword(null,"other","other",995793544),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not_empty,cljs.core.vec,cljs.core.conj),x);
}
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
stuffs.util.ensure_vec = (function stuffs$util$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
}
});
stuffs.util.remove_nil_vals = (function stuffs$util$remove_nil_vals(m){
return medley.core.remove_vals(cljs.core.nil_QMARK_,m);
});
/**
 * Like comp but composes in reverse, so:
 *   ((comp str inc) 2) => "3" becomes
 *   ((rcomp inc str)) => "3"
 */
stuffs.util.rcomp = (function stuffs$util$rcomp(var_args){
var G__61511 = arguments.length;
switch (G__61511) {
case 0:
return stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___61651 = arguments.length;
var i__5770__auto___61652 = (0);
while(true){
if((i__5770__auto___61652 < len__5769__auto___61651)){
args_arr__5794__auto__.push((arguments[i__5770__auto___61652]));

var G__61653 = (i__5770__auto___61652 + (1));
i__5770__auto___61652 = G__61653;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.identity;
}));

(stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__61654 = null;
var G__61654__0 = (function (){
var G__61512 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__61512) : g.call(null,G__61512));
});
var G__61654__1 = (function (x){
var G__61513 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__61513) : g.call(null,G__61513));
});
var G__61654__2 = (function (x,y){
var G__61514 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__61514) : g.call(null,G__61514));
});
var G__61654__3 = (function (x,y,z){
var G__61515 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__61515) : g.call(null,G__61515));
});
var G__61654__4 = (function() { 
var G__61655__delegate = function (x,y,z,args){
var G__61516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__61516) : g.call(null,G__61516));
};
var G__61655 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__61656__i = 0, G__61656__a = new Array(arguments.length -  3);
while (G__61656__i < G__61656__a.length) {G__61656__a[G__61656__i] = arguments[G__61656__i + 3]; ++G__61656__i;}
  args = new cljs.core.IndexedSeq(G__61656__a,0,null);
} 
return G__61655__delegate.call(this,x,y,z,args);};
G__61655.cljs$lang$maxFixedArity = 3;
G__61655.cljs$lang$applyTo = (function (arglist__61657){
var x = cljs.core.first(arglist__61657);
arglist__61657 = cljs.core.next(arglist__61657);
var y = cljs.core.first(arglist__61657);
arglist__61657 = cljs.core.next(arglist__61657);
var z = cljs.core.first(arglist__61657);
var args = cljs.core.rest(arglist__61657);
return G__61655__delegate(x,y,z,args);
});
G__61655.cljs$core$IFn$_invoke$arity$variadic = G__61655__delegate;
return G__61655;
})()
;
G__61654 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__61654__0.call(this);
case 1:
return G__61654__1.call(this,x);
case 2:
return G__61654__2.call(this,x,y);
case 3:
return G__61654__3.call(this,x,y,z);
default:
var G__61658 = null;
if (arguments.length > 3) {
var G__61659__i = 0, G__61659__a = new Array(arguments.length -  3);
while (G__61659__i < G__61659__a.length) {G__61659__a[G__61659__i] = arguments[G__61659__i + 3]; ++G__61659__i;}
G__61658 = new cljs.core.IndexedSeq(G__61659__a,0,null);
}
return G__61654__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__61658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61654.cljs$lang$maxFixedArity = 3;
G__61654.cljs$lang$applyTo = G__61654__4.cljs$lang$applyTo;
G__61654.cljs$core$IFn$_invoke$arity$0 = G__61654__0;
G__61654.cljs$core$IFn$_invoke$arity$1 = G__61654__1;
G__61654.cljs$core$IFn$_invoke$arity$2 = G__61654__2;
G__61654.cljs$core$IFn$_invoke$arity$3 = G__61654__3;
G__61654.cljs$core$IFn$_invoke$arity$variadic = G__61654__4.cljs$core$IFn$_invoke$arity$variadic;
return G__61654;
})()
}));

(stuffs.util.rcomp.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(stuffs.util.rcomp,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fs,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)));
}));

/** @this {Function} */
(stuffs.util.rcomp.cljs$lang$applyTo = (function (seq61508){
var G__61509 = cljs.core.first(seq61508);
var seq61508__$1 = cljs.core.next(seq61508);
var G__61510 = cljs.core.first(seq61508__$1);
var seq61508__$2 = cljs.core.next(seq61508__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61509,G__61510,seq61508__$2);
}));

(stuffs.util.rcomp.cljs$lang$maxFixedArity = (2));

/**
 * Takes a set of functions and returns a fn that is the composition
 *   of those fns.  The returned fn takes a variable number of args,
 *   applies the rightmost of fns to the args, the next
 *   fn (right-to-left) to the result, etc.
 */
stuffs.util.some_comp = (function stuffs$util$some_comp(var_args){
var G__61521 = arguments.length;
switch (G__61521) {
case 0:
return stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___61661 = arguments.length;
var i__5770__auto___61662 = (0);
while(true){
if((i__5770__auto___61662 < len__5769__auto___61661)){
args_arr__5794__auto__.push((arguments[i__5770__auto___61662]));

var G__61663 = (i__5770__auto___61662 + (1));
i__5770__auto___61662 = G__61663;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.identity;
}));

(stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__61664 = null;
var G__61664__0 = (function (){
var G__61522 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
if((G__61522 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61522) : f.call(null,G__61522));
}
});
var G__61664__1 = (function (x){
var G__61523 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
if((G__61523 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61523) : f.call(null,G__61523));
}
});
var G__61664__2 = (function (x,y){
var G__61524 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y));
if((G__61524 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61524) : f.call(null,G__61524));
}
});
var G__61664__3 = (function (x,y,z){
var G__61525 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z));
if((G__61525 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61525) : f.call(null,G__61525));
}
});
var G__61664__4 = (function() { 
var G__61665__delegate = function (x,y,z,args){
var G__61526 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
if((G__61526 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61526) : f.call(null,G__61526));
}
};
var G__61665 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__61666__i = 0, G__61666__a = new Array(arguments.length -  3);
while (G__61666__i < G__61666__a.length) {G__61666__a[G__61666__i] = arguments[G__61666__i + 3]; ++G__61666__i;}
  args = new cljs.core.IndexedSeq(G__61666__a,0,null);
} 
return G__61665__delegate.call(this,x,y,z,args);};
G__61665.cljs$lang$maxFixedArity = 3;
G__61665.cljs$lang$applyTo = (function (arglist__61667){
var x = cljs.core.first(arglist__61667);
arglist__61667 = cljs.core.next(arglist__61667);
var y = cljs.core.first(arglist__61667);
arglist__61667 = cljs.core.next(arglist__61667);
var z = cljs.core.first(arglist__61667);
var args = cljs.core.rest(arglist__61667);
return G__61665__delegate(x,y,z,args);
});
G__61665.cljs$core$IFn$_invoke$arity$variadic = G__61665__delegate;
return G__61665;
})()
;
G__61664 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__61664__0.call(this);
case 1:
return G__61664__1.call(this,x);
case 2:
return G__61664__2.call(this,x,y);
case 3:
return G__61664__3.call(this,x,y,z);
default:
var G__61668 = null;
if (arguments.length > 3) {
var G__61669__i = 0, G__61669__a = new Array(arguments.length -  3);
while (G__61669__i < G__61669__a.length) {G__61669__a[G__61669__i] = arguments[G__61669__i + 3]; ++G__61669__i;}
G__61668 = new cljs.core.IndexedSeq(G__61669__a,0,null);
}
return G__61664__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__61668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61664.cljs$lang$maxFixedArity = 3;
G__61664.cljs$lang$applyTo = G__61664__4.cljs$lang$applyTo;
G__61664.cljs$core$IFn$_invoke$arity$0 = G__61664__0;
G__61664.cljs$core$IFn$_invoke$arity$1 = G__61664__1;
G__61664.cljs$core$IFn$_invoke$arity$2 = G__61664__2;
G__61664.cljs$core$IFn$_invoke$arity$3 = G__61664__3;
G__61664.cljs$core$IFn$_invoke$arity$variadic = G__61664__4.cljs$core$IFn$_invoke$arity$variadic;
return G__61664;
})()
}));

(stuffs.util.some_comp.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(stuffs.util.some_comp,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(f,g,fs));
}));

/** @this {Function} */
(stuffs.util.some_comp.cljs$lang$applyTo = (function (seq61518){
var G__61519 = cljs.core.first(seq61518);
var seq61518__$1 = cljs.core.next(seq61518);
var G__61520 = cljs.core.first(seq61518__$1);
var seq61518__$2 = cljs.core.next(seq61518__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61519,G__61520,seq61518__$2);
}));

(stuffs.util.some_comp.cljs$lang$maxFixedArity = (2));

stuffs.util.some__GT_m = (function stuffs$util$some__GT_m(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61670 = arguments.length;
var i__5770__auto___61671 = (0);
while(true){
if((i__5770__auto___61671 < len__5769__auto___61670)){
args__5775__auto__.push((arguments[i__5770__auto___61671]));

var G__61672 = (i__5770__auto___61671 + (1));
i__5770__auto___61671 = G__61672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stuffs.util.some__GT_m.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stuffs.util.some__GT_m.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks_fns){
if(cljs.core.even_QMARK_(cljs.core.count(ks_fns))){
} else {
throw (new Error("Assert failed: (even? (count ks-fns))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__61530){
var vec__61531 = p__61530;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61531,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61531,(1),null);
var temp__5806__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m__$1) : f.call(null,m__$1));
if((temp__5806__auto__ == null)){
return cljs.core.reduced(m__$1);
} else {
var ret = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,ret);
}
}),m,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ks_fns));
}));

(stuffs.util.some__GT_m.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stuffs.util.some__GT_m.cljs$lang$applyTo = (function (seq61528){
var G__61529 = cljs.core.first(seq61528);
var seq61528__$1 = cljs.core.next(seq61528);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61529,seq61528__$1);
}));

stuffs.util.space_join = (function stuffs$util$space_join(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61673 = arguments.length;
var i__5770__auto___61674 = (0);
while(true){
if((i__5770__auto___61674 < len__5769__auto___61673)){
args__5775__auto__.push((arguments[i__5770__auto___61674]));

var G__61675 = (i__5770__auto___61674 + (1));
i__5770__auto___61674 = G__61675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return stuffs.util.space_join.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(stuffs.util.space_join.cljs$core$IFn$_invoke$arity$variadic = (function (p__61535){
var vec__61536 = p__61535;
var seq__61537 = cljs.core.seq(vec__61536);
var first__61538 = cljs.core.first(seq__61537);
var seq__61537__$1 = cljs.core.next(seq__61537);
var s = first__61538;
var more = seq__61537__$1;
var strs = vec__61536;
if(cljs.core.empty_QMARK_(more)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",strs);
}
}));

(stuffs.util.space_join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stuffs.util.space_join.cljs$lang$applyTo = (function (seq61534){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61534));
}));

/**
 * ((numbered-join {:num-right-s "." :sep "\n"}) ["foo" "bar"])
 * => "1. foo\n2. bar"
 */
stuffs.util.numbered_join = (function stuffs$util$numbered_join(p__61539){
var map__61540 = p__61539;
var map__61540__$1 = cljs.core.__destructure_map(map__61540);
var sep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61540__$1,new cljs.core.Keyword(null,"sep","sep",1970430530)," ");
var num_left_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"num-left-s","num-left-s",-530620837));
var num_right_s = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61540__$1,new cljs.core.Keyword(null,"num-right-s","num-right-s",-1003149198),".");
var coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"coll","coll",1647737163));
var start_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61540__$1,new cljs.core.Keyword(null,"start-n","start-n",933232440),(1));
var str_numbered_join = (function stuffs$util$numbered_join_$_str_numbered_join(coll__$1){
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_left_s),cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + start_n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_right_s)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
})),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(sep)),coll__$1);
});
if(cljs.core.truth_(coll)){
return str_numbered_join(coll);
} else {
return str_numbered_join;
}
});
stuffs.util.str_comma_and_join = (function stuffs$util$str_comma_and_join(coll){
var G__61541 = cljs.core.count(coll);
switch (G__61541) {
case (0):
return "";

break;
case (1):
return cljs.core.first(coll);

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coll))].join('');

break;
default:
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(coll))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(coll))].join('');

}
});
stuffs.util.read_edn = (function stuffs$util$read_edn(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
stuffs.util.parse_int = (function stuffs$util$parse_int(s){
if(typeof s === 'string'){
return parseInt(s);
} else {
return null;
}
});
stuffs.util.parse_long = (function stuffs$util$parse_long(s){
if(typeof s === 'string'){
return parseInt(s);
} else {
return null;
}
});
stuffs.util.parse_float = (function stuffs$util$parse_float(s){
if(typeof s === 'string'){
return parseFloat(s);
} else {
return null;
}
});
stuffs.util.infinity = Infinity;
stuffs.util.debounce = (function stuffs$util$debounce(thunk,interval){
return goog.functions.debounce(thunk,interval);
});
stuffs.util.throttle = (function stuffs$util$throttle(thunk,interval){
return goog.functions.throttle(thunk,interval);
});
stuffs.util.memoize_ttl = (function stuffs$util$memoize_ttl(f,interval){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__61677__delegate = function (args){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),args);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return v;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mem,cljs.core.dissoc,args);
}),interval);

return ret;
}
};
var G__61677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61678__i = 0, G__61678__a = new Array(arguments.length -  0);
while (G__61678__i < G__61678__a.length) {G__61678__a[G__61678__i] = arguments[G__61678__i + 0]; ++G__61678__i;}
  args = new cljs.core.IndexedSeq(G__61678__a,0,null);
} 
return G__61677__delegate.call(this,args);};
G__61677.cljs$lang$maxFixedArity = 0;
G__61677.cljs$lang$applyTo = (function (arglist__61679){
var args = cljs.core.seq(arglist__61679);
return G__61677__delegate(args);
});
G__61677.cljs$core$IFn$_invoke$arity$variadic = G__61677__delegate;
return G__61677;
})()
;
});
stuffs.util.memoize_last = taoensso.encore.memoize_last;
stuffs.util.minute_ms = ((1000) * (60));
stuffs.util.hour_ms = ((60) * stuffs.util.minute_ms);
stuffs.util.dedupe_f = (function stuffs$util$dedupe_f(f){

var cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__61680__delegate = function (args){
var temp__5802__auto__ = cljs.core.find(cljs.core.deref(cache),args);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__61542 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(1),null);
return v;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.reset_BANG_(cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([args,ret]));

return ret;
}
};
var G__61680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61681__i = 0, G__61681__a = new Array(arguments.length -  0);
while (G__61681__i < G__61681__a.length) {G__61681__a[G__61681__i] = arguments[G__61681__i + 0]; ++G__61681__i;}
  args = new cljs.core.IndexedSeq(G__61681__a,0,null);
} 
return G__61680__delegate.call(this,args);};
G__61680.cljs$lang$maxFixedArity = 0;
G__61680.cljs$lang$applyTo = (function (arglist__61682){
var args = cljs.core.seq(arglist__61682);
return G__61680__delegate(args);
});
G__61680.cljs$core$IFn$_invoke$arity$variadic = G__61680__delegate;
return G__61680;
})()
;
});
stuffs.util.keyword_identical_QMARK_ = (function stuffs$util$keyword_identical_QMARK_(k1,k2){
return cljs.core.keyword_identical_QMARK_(k1,k2);
});
stuffs.util.f_once = (function stuffs$util$f_once(f){
var run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var stuffs$util$f_once_$_once__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(run_QMARK_))){
return null;
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);

return cljs.core.reset_BANG_(run_QMARK_,true);
}
};
var stuffs$util$f_once_$_once = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61683__i = 0, G__61683__a = new Array(arguments.length -  0);
while (G__61683__i < G__61683__a.length) {G__61683__a[G__61683__i] = arguments[G__61683__i + 0]; ++G__61683__i;}
  args = new cljs.core.IndexedSeq(G__61683__a,0,null);
} 
return stuffs$util$f_once_$_once__delegate.call(this,args);};
stuffs$util$f_once_$_once.cljs$lang$maxFixedArity = 0;
stuffs$util$f_once_$_once.cljs$lang$applyTo = (function (arglist__61684){
var args = cljs.core.seq(arglist__61684);
return stuffs$util$f_once_$_once__delegate(args);
});
stuffs$util$f_once_$_once.cljs$core$IFn$_invoke$arity$variadic = stuffs$util$f_once_$_once__delegate;
return stuffs$util$f_once_$_once;
})()
;
});
stuffs.util.partition_all_on = (function stuffs$util$partition_all_on(n_seq,coll){
var G__61548 = n_seq;
var vec__61549 = G__61548;
var seq__61550 = cljs.core.seq(vec__61549);
var first__61551 = cljs.core.first(seq__61550);
var seq__61550__$1 = cljs.core.next(seq__61550);
var n = first__61551;
var nseq = seq__61550__$1;
var out = cljs.core.PersistentVector.EMPTY;
var coll__$1 = coll;
var G__61548__$1 = G__61548;
var out__$1 = out;
var coll__$2 = coll__$1;
while(true){
var vec__61558 = G__61548__$1;
var seq__61559 = cljs.core.seq(vec__61558);
var first__61560 = cljs.core.first(seq__61559);
var seq__61559__$1 = cljs.core.next(seq__61559);
var n__$1 = first__61560;
var nseq__$1 = seq__61559__$1;
var out__$2 = out__$1;
var coll__$3 = coll__$2;
var vec__61561 = cljs.core.split_at(n__$1,coll__$3);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61561,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61561,(1),null);
var out_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,before);
if(cljs.core.truth_((function (){var and__5043__auto__ = nseq__$1;
if(and__5043__auto__){
return cljs.core.not_empty(after);
} else {
return and__5043__auto__;
}
})())){
var G__61685 = nseq__$1;
var G__61686 = out_SINGLEQUOTE_;
var G__61687 = after;
G__61548__$1 = G__61685;
out__$1 = G__61686;
coll__$2 = G__61687;
continue;
} else {
return out_SINGLEQUOTE_;
}
break;
}
});
stuffs.util.clj_QMARK_ = false;
stuffs.util.cljs_QMARK_ = true;
stuffs.util._EQ_by = (function stuffs$util$_EQ_by(var_args){
var G__61565 = arguments.length;
switch (G__61565) {
case 1:
return stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b)));
});
}));

(stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$2 = (function (f,a){
var fa = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fa,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b)));
});
}));

(stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b)));
}));

(stuffs.util._EQ_by.cljs$core$IFn$_invoke$arity$4 = (function (f,g,a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(b) : g.call(null,b)));
}));

(stuffs.util._EQ_by.cljs$lang$maxFixedArity = 4);

stuffs.util.date_instant = (function stuffs$util$date_instant(var_args){
var G__61567 = arguments.length;
switch (G__61567) {
case 0:
return stuffs.util.date_instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.date_instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.date_instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new Date());
}));

(stuffs.util.date_instant.cljs$core$IFn$_invoke$arity$1 = (function (ts){
return (new Date(ts));
}));

(stuffs.util.date_instant.cljs$lang$maxFixedArity = 1);

stuffs.util.date_time = (function stuffs$util$date_time(var_args){
var G__61569 = arguments.length;
switch (G__61569) {
case 0:
return stuffs.util.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return stuffs.util.date_instant.cljs$core$IFn$_invoke$arity$0().getTime();
}));

(stuffs.util.date_time.cljs$core$IFn$_invoke$arity$1 = (function (d){
return d.getTime();
}));

(stuffs.util.date_time.cljs$lang$maxFixedArity = 1);

stuffs.util.date_QMARK_ = (function stuffs$util$date_QMARK_(x){
return (x instanceof Date);
});
stuffs.util.date_like_QMARK_ = (function stuffs$util$date_like_QMARK_(x){
return ((stuffs.util.date_QMARK_(x)) || (((tick.core.instant_QMARK_(x)) || (cljs.core.integer_QMARK_(x)))));
});
/**
 * Given a value-pred and a nested coll, returns a coll
 *   of paths on which pred returned true:
 *   (paths-till-pred string? {:a "foo"
 *                          :b ["foo" {:c "fan"}]})
 *   ;; => [[:a] [:b 0] [:b 1 :c]]
 * 
 *   Good for _searching_ nested data, reverse engineering API's at the REPL...
 */
stuffs.util.paths_till_pred = (function stuffs$util$paths_till_pred(v_pred,data){
var walker = (function (){var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__31828__auto__ = stuffs.util.pathcache61571;
var info__31828__auto____$1 = (((info__31828__auto__ == null))?(function (){var info61572 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",(11),(1),(2172),(2172),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",(cljs.core.truth_(cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("sp","ALL","sp/ALL",866840892,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",(7),(1),(765),(768),cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)),com.rpl.specter.impl.__GT_LocalSym(v_pred,new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null))], null),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null))], null),cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",(7),(1),(765),(768),cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.sequential_QMARK_,new cljs.core.Var(function(){return cljs.core.sequential_QMARK_;},new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),"cljs/core.cljs",(18),(1),(2160),(2160),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if coll satisfies ISequential",(cljs.core.truth_(cljs.core.sequential_QMARK_)?cljs.core.sequential_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",(15),(1),(1093),(1095),cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",(7),(1),(765),(768),cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)),com.rpl.specter.impl.__GT_LocalSym(v_pred,new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null))], null),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null))], null),cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",(7),(1),(765),(768),cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null)], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null)))], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","ALL","sp/ALL",866840892,null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null))))], null),"stuffs.util",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","ALL","sp/ALL",866840892,null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null),new cljs.core.Symbol("sp","ALL","sp/ALL",866840892,null),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null))], null),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null)], null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"v-pred","v-pred",-2034553227,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("sp","collect-one","sp/collect-one",1193558320,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
stuffs.util.pathcache61571 = info61572;

return info61572;
})():info__31828__auto__);
var precompiled61573 = com.rpl.specter.impl.cached_path_info_precompiled(info__31828__auto____$1);
var dynamic_QMARK___31829__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__31828__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___31829__auto__)){
var G__61574 = new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (){var G__61575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,v_pred], null);
var G__61576 = com.rpl.specter.FIRST;
var G__61577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.FIRST) : com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST)),com.rpl.specter.LAST,p], null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(G__61575,G__61576,G__61577) : com.rpl.specter.if_path.call(null,G__61575,G__61576,G__61577));
})()], null),com.rpl.specter.ALL,com.rpl.specter.if_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,v_pred], null),com.rpl.specter.LAST,v_pred,com.rpl.specter.FIRST,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.FIRST) : com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST)),com.rpl.specter.LAST,p], null),com.rpl.specter.collect_one,com.rpl.specter.FIRST,com.rpl.specter.LAST,p,com.rpl.specter.if_path,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__61578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,v_pred], null);
var G__61579 = com.rpl.specter.FIRST;
var G__61580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.FIRST) : com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST)),com.rpl.specter.LAST,p], null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(G__61578,G__61579,G__61580) : com.rpl.specter.if_path.call(null,G__61578,G__61579,G__61580));
})()], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.if_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,v_pred], null),com.rpl.specter.LAST,v_pred,com.rpl.specter.FIRST,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.FIRST) : com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST)),com.rpl.specter.LAST,p], null),com.rpl.specter.collect_one,com.rpl.specter.FIRST,com.rpl.specter.LAST,p], null);
return (precompiled61573.cljs$core$IFn$_invoke$arity$1 ? precompiled61573.cljs$core$IFn$_invoke$arity$1(G__61574) : precompiled61573.call(null,G__61574));
} else {
return precompiled61573;
}
})());

return p;
})();
var G__61581 = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__31828__auto__ = stuffs.util.pathcache61582;
var info__31828__auto____$1 = (((info__31828__auto__ == null))?(function (){var info61583 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(walker,new cljs.core.Symbol(null,"walker","walker",-1621010049,null))], null),"stuffs.util",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"walker","walker",-1621010049,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"walker","walker",-1621010049,null)], null));
stuffs.util.pathcache61582 = info61583;

return info61583;
})():info__31828__auto__);
var precompiled61584 = com.rpl.specter.impl.cached_path_info_precompiled(info__31828__auto____$1);
var dynamic_QMARK___31829__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__31828__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___31829__auto__)){
var G__61585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [walker], null);
return (precompiled61584.cljs$core$IFn$_invoke$arity$1 ? precompiled61584.cljs$core$IFn$_invoke$arity$1(G__61585) : precompiled61584.call(null,G__61585));
} else {
return precompiled61584;
}
})(),data);
var G__61581__$1 = (((G__61581 == null))?null:cljs.core.not_empty(G__61581));
if((G__61581__$1 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61570_SHARP_){
var G__61586 = p1__61570_SHARP_;
if((!(cljs.core.vector_QMARK_(p1__61570_SHARP_)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__61586],null));
} else {
return G__61586;
}
}),G__61581__$1);
}
});
stuffs.util.identity_thunk = (function stuffs$util$identity_thunk(thunk){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
});
stuffs.util.identity_xf = cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
stuffs.util.doto_xf = (function stuffs$util$doto_xf(f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__61587_SHARP_){
var G__61588 = p1__61587_SHARP_;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61588) : f.call(null,G__61588));

return G__61588;
}));
});
/**
 * Debug transducer. taps value
 *   (optionally with prefix)
 * and returns it unchanged.
 */
stuffs.util.tap_xf = (function stuffs$util$tap_xf(var_args){
var G__61591 = arguments.length;
switch (G__61591) {
case 0:
return stuffs.util.tap_xf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.tap_xf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.tap_xf.cljs$core$IFn$_invoke$arity$0 = (function (){
return stuffs.util.doto_xf(cljs.core.tap_GT_);
}));

(stuffs.util.tap_xf.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return stuffs.util.doto_xf((function (p1__61589_SHARP_){
return cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,p1__61589_SHARP_], null));
}));
}));

(stuffs.util.tap_xf.cljs$lang$maxFixedArity = 1);

/**
 * Debug transducer. Logs message and passes value through.
 */
stuffs.util.prn_xf = (function stuffs$util$prn_xf(var_args){
var G__61594 = arguments.length;
switch (G__61594) {
case 0:
return stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$0 = (function (){
return stuffs.util.doto_xf(cljs.core.prn);
}));

(stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.PersistentArrayMap.EMPTY);
}));

(stuffs.util.prn_xf.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__61595){
var map__61596 = p__61595;
var map__61596__$1 = cljs.core.__destructure_map(map__61596);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61596__$1,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.identity);
var prn_value_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61596__$1,new cljs.core.Keyword(null,"prn-value?","prn-value?",-935424017),true);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61596__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.constantly(true));
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__61592_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__61592_SHARP_) : pred.call(null,p1__61592_SHARP_)))){
if(cljs.core.truth_(prn_value_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__61592_SHARP_) : f.call(null,p1__61592_SHARP_))], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix], 0));
}
} else {
}

return p1__61592_SHARP_;
}));
}));

(stuffs.util.prn_xf.cljs$lang$maxFixedArity = 2);

stuffs.util.pred_xf = (function stuffs$util$pred_xf(pred,f){
return (function (rf){
return (function() {
var G__61693 = null;
var G__61693__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__61693__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__61693__2 = (function (result,input){
var G__61597 = result;
var G__61598 = (function (){var G__61599 = input;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(input) : pred.call(null,input)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61599) : f.call(null,G__61599));
} else {
return G__61599;
}
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61597,G__61598) : rf.call(null,G__61597,G__61598));
});
G__61693 = function(result,input){
switch(arguments.length){
case 0:
return G__61693__0.call(this);
case 1:
return G__61693__1.call(this,result);
case 2:
return G__61693__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61693.cljs$core$IFn$_invoke$arity$0 = G__61693__0;
G__61693.cljs$core$IFn$_invoke$arity$1 = G__61693__1;
G__61693.cljs$core$IFn$_invoke$arity$2 = G__61693__2;
return G__61693;
})()
});
});
stuffs.util.cond__GT_xf = (function stuffs$util$cond__GT_xf(test,xf){
if(cljs.core.truth_(test)){
return xf;
} else {
return stuffs.util.identity_xf;
}
});
stuffs.util.id_gen = nano_id.core.custom.cljs$core$IFn$_invoke$arity$2("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",(10));
stuffs.util.ensure_id = (function stuffs$util$ensure_id(m){
var G__61600 = m;
if(cljs.core.not(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61600,new cljs.core.Keyword(null,"id","id",-1388402092),(stuffs.util.id_gen.cljs$core$IFn$_invoke$arity$0 ? stuffs.util.id_gen.cljs$core$IFn$_invoke$arity$0() : stuffs.util.id_gen.call(null)));
} else {
return G__61600;
}
});
/**
 * Like with-meta but does not override existing meta.
 */
stuffs.util.merge_meta = (function stuffs$util$merge_meta(x,meta_map){
return cljs.core.with_meta(x,cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),meta_map));
});
/**
 * Merges data-structures recursively. For sequential colls, creates a union
 *   using the same type as the first data-structure
 */
stuffs.util.deep_merge = (function stuffs$util$deep_merge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61694 = arguments.length;
var i__5770__auto___61695 = (0);
while(true){
if((i__5770__auto___61695 < len__5769__auto___61694)){
args__5775__auto__.push((arguments[i__5770__auto___61695]));

var G__61696 = (i__5770__auto___61695 + (1));
i__5770__auto___61695 = G__61696;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return stuffs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(stuffs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (p__61602){
var vec__61603 = p__61602;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61603,(0),null);
var xs = vec__61603;
if(((cljs.core.sequential_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.cat,xs);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,stuffs.util.deep_merge,xs);
} else {
return cljs.core.last(xs);

}
}
}));

(stuffs.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stuffs.util.deep_merge.cljs$lang$applyTo = (function (seq61601){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61601));
}));

stuffs.util.template_edn = (function stuffs$util$template_edn(replace_map,expr){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.keys(replace_map))){
} else {
throw (new Error("Assert failed: (every? symbol? (keys replace-map))"));
}

return clojure.walk.postwalk_replace(replace_map,expr);
});
stuffs.util.wrap = (function stuffs$util$wrap(var_args){
var G__61607 = arguments.length;
switch (G__61607) {
case 1:
return stuffs.util.wrap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stuffs.util.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.wrap.cljs$core$IFn$_invoke$arity$1 = (function (around){
return (function (s){
return stuffs.util.wrap.cljs$core$IFn$_invoke$arity$3(s,around,around);
});
}));

(stuffs.util.wrap.cljs$core$IFn$_invoke$arity$2 = (function (before,after){
return (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(before),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(after)].join('');
});
}));

(stuffs.util.wrap.cljs$core$IFn$_invoke$arity$3 = (function (s,before,after){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(before),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(after)].join('');
}));

(stuffs.util.wrap.cljs$lang$maxFixedArity = 3);

stuffs.util.bound = (function stuffs$util$bound(num,lower_bound,upper_bound){
if((((lower_bound <= num)) && ((num <= upper_bound)))){
return num;
} else {
if((num < lower_bound)){
return lower_bound;
} else {
if((num > upper_bound)){
return upper_bound;
} else {
return null;
}
}
}
});
stuffs.util.normalize = (function stuffs$util$normalize(var_args){
var G__61609 = arguments.length;
switch (G__61609) {
case 1:
return stuffs.util.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stuffs.util.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stuffs.util.normalize.cljs$core$IFn$_invoke$arity$1 = (function (nums){
var mi = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,nums);
var mx = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,nums);
var f = stuffs.util.normalize.cljs$core$IFn$_invoke$arity$2(mi,mx);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,nums);
}));

(stuffs.util.normalize.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
if(cljs.core._GT_){
} else {
throw (new Error("Assert failed: >"));
}

if(cljs.core.truth_(max)){
} else {
throw (new Error("Assert failed: max"));
}

if(cljs.core.truth_(min)){
} else {
throw (new Error("Assert failed: min"));
}

var max_SINGLEQUOTE_ = (max - min);
return (function (num){
var normd = ((num - min) / max_SINGLEQUOTE_);
if(((((1) >= normd)) && ((normd >= (0))))){
} else {
throw (new Error("Assert failed: (>= 1 normd 0)"));
}

return normd;
});
}));

(stuffs.util.normalize.cljs$lang$maxFixedArity = 2);

stuffs.util.round = (function stuffs$util$round(points,num){
var pts = Math.pow((10),points);
return (Math.round((pts * num)) / pts);
});
stuffs.util.ceil = (function stuffs$util$ceil(num){
var G__61610 = num;
var G__61610__$1 = (((G__61610 == null))?null:Math.ceil(G__61610));
if((G__61610__$1 == null)){
return null;
} else {
return (G__61610__$1 | (0));
}
});
stuffs.util.pretty_string = (function stuffs$util$pretty_string(x){
if(cljs.core.truth_(x)){
return clojure.string.trim((function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61611_61699 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61612_61700 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61613_61701 = true;
var _STAR_print_fn_STAR__temp_val__61614_61702 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61613_61701);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61614_61702);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61612_61700);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61611_61699);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return null;
}
});
stuffs.util.prefix_pprint = (function stuffs$util$prefix_pprint(prefix,x){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,stuffs.util.pretty_string(x)], 0));
});
/**
 * Recursively delete a directory.
 */
stuffs.util.delete_directory_recursive = (function stuffs$util$delete_directory_recursive(file){
return null;
});
/**
 * Recursively delete a all-files and directories inside a directory.
 */
stuffs.util.delete_files_recursive = (function stuffs$util$delete_files_recursive(file){
return null;
});
stuffs.util.assoc_missing = (function stuffs$util$assoc_missing(var_args){
var G__61620 = arguments.length;
switch (G__61620) {
case 3:
return stuffs.util.assoc_missing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___61704 = arguments.length;
var i__5770__auto___61705 = (0);
while(true){
if((i__5770__auto___61705 < len__5769__auto___61704)){
args_arr__5794__auto__.push((arguments[i__5770__auto___61705]));

var G__61706 = (i__5770__auto___61705 + (1));
i__5770__auto___61705 = G__61706;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return stuffs.util.assoc_missing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(stuffs.util.assoc_missing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
var G__61621 = m;
if(cljs.core.contains_QMARK_(m,k) === false){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61621,k,v);
} else {
return G__61621;
}
}));

(stuffs.util.assoc_missing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = stuffs.util.assoc_missing.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__61707 = ret;
var G__61708 = cljs.core.first(kvs);
var G__61709 = cljs.core.second(kvs);
var G__61710 = cljs.core.nnext(kvs);
m = G__61707;
k = G__61708;
v = G__61709;
kvs = G__61710;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(stuffs.util.assoc_missing.cljs$lang$applyTo = (function (seq61616){
var G__61617 = cljs.core.first(seq61616);
var seq61616__$1 = cljs.core.next(seq61616);
var G__61618 = cljs.core.first(seq61616__$1);
var seq61616__$2 = cljs.core.next(seq61616__$1);
var G__61619 = cljs.core.first(seq61616__$2);
var seq61616__$3 = cljs.core.next(seq61616__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61617,G__61618,G__61619,seq61616__$3);
}));

(stuffs.util.assoc_missing.cljs$lang$maxFixedArity = (3));

/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
stuffs.util.partial = (function stuffs$util$partial(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61711 = arguments.length;
var i__5770__auto___61712 = (0);
while(true){
if((i__5770__auto___61712 < len__5769__auto___61711)){
args__5775__auto__.push((arguments[i__5770__auto___61712]));

var G__61713 = (i__5770__auto___61712 + (1));
i__5770__auto___61712 = G__61713;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stuffs.util.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stuffs.util.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return stuffs.impl.partial.make_partial_fn(f,args);
}));

(stuffs.util.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stuffs.util.partial.cljs$lang$applyTo = (function (seq61622){
var G__61623 = cljs.core.first(seq61622);
var seq61622__$1 = cljs.core.next(seq61622);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61623,seq61622__$1);
}));

stuffs.util.read_csv = (function stuffs$util$read_csv(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61714 = arguments.length;
var i__5770__auto___61715 = (0);
while(true){
if((i__5770__auto___61715 < len__5769__auto___61714)){
args__5775__auto__.push((arguments[i__5770__auto___61715]));

var G__61716 = (i__5770__auto___61715 + (1));
i__5770__auto___61715 = G__61716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stuffs.util.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stuffs.util.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__61628){
var map__61629 = p__61628;
var map__61629__$1 = cljs.core.__destructure_map(map__61629);
var header__GT_kmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61629__$1,new cljs.core.Keyword(null,"header->kmap","header->kmap",699554778));
var k__GT_cast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61629__$1,new cljs.core.Keyword(null,"k->cast","k->cast",127457062));
return null;
}));

(stuffs.util.read_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stuffs.util.read_csv.cljs$lang$applyTo = (function (seq61626){
var G__61627 = cljs.core.first(seq61626);
var seq61626__$1 = cljs.core.next(seq61626);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61627,seq61626__$1);
}));

stuffs.util.slurp_csv = (function stuffs$util$slurp_csv(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61717 = arguments.length;
var i__5770__auto___61718 = (0);
while(true){
if((i__5770__auto___61718 < len__5769__auto___61717)){
args__5775__auto__.push((arguments[i__5770__auto___61718]));

var G__61719 = (i__5770__auto___61718 + (1));
i__5770__auto___61718 = G__61719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stuffs.util.slurp_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stuffs.util.slurp_csv.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__61632){
var map__61633 = p__61632;
var map__61633__$1 = cljs.core.__destructure_map(map__61633);
var opts = map__61633__$1;
var header__GT_kmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"header->kmap","header->kmap",699554778));
var k__GT_cast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"k->cast","k->cast",127457062));
return null;
}));

(stuffs.util.slurp_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stuffs.util.slurp_csv.cljs$lang$applyTo = (function (seq61630){
var G__61631 = cljs.core.first(seq61630);
var seq61630__$1 = cljs.core.next(seq61630);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61631,seq61630__$1);
}));

stuffs.util.write_csv_string = (function stuffs$util$write_csv_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61720 = arguments.length;
var i__5770__auto___61721 = (0);
while(true){
if((i__5770__auto___61721 < len__5769__auto___61720)){
args__5775__auto__.push((arguments[i__5770__auto___61721]));

var G__61722 = (i__5770__auto___61721 + (1));
i__5770__auto___61721 = G__61722;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stuffs.util.write_csv_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stuffs.util.write_csv_string.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__61637){
var map__61638 = p__61637;
var map__61638__$1 = cljs.core.__destructure_map(map__61638);
var k__GT_headermap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"k->headermap","k->headermap",1294499833));
return null;
}));

(stuffs.util.write_csv_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stuffs.util.write_csv_string.cljs$lang$applyTo = (function (seq61635){
var G__61636 = cljs.core.first(seq61635);
var seq61635__$1 = cljs.core.next(seq61635);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61636,seq61635__$1);
}));

stuffs.util.read_json = JSON.parse;
stuffs.util.read_json_keywordized = (function stuffs$util$read_json_keywordized(json){
return null;
});
stuffs.util.write_json_string = (function stuffs$util$write_json_string(json){
return null;
});
stuffs.util.write_json_bytes = (function stuffs$util$write_json_bytes(json){
return null;
});
stuffs.util.maybe_deref = (function stuffs$util$maybe_deref(x){
var G__61639 = x;
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:false):false)){
return cljs.core.deref(G__61639);
} else {
return G__61639;
}
});
stuffs.util.html__GT_hiccup = (function stuffs$util$html__GT_hiccup(s){
var temp__5804__auto__ = (function (){var G__61641 = s;
var G__61641__$1 = (((G__61641 == null))?null:hickory.core.parse_fragment(G__61641));
if((G__61641__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__61641__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var frags = temp__5804__auto__;
var G__61642 = cljs.core.count(frags);
switch (G__61642) {
case (1):
return hickory.core.as_hiccup(cljs.core.first(frags));

break;
default:
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hickory.core.as_hiccup),frags);

}
} else {
return null;
}
});
stuffs.util.hiccup__GT_html = (function stuffs$util$hiccup__GT_html(h){
return null;
});
stuffs.util.simple_snake__GT_camel_case = (function stuffs$util$simple_snake__GT_camel_case(s){
return clojure.string.replace(s,/_/,"-");
});
stuffs.util.space__GT_dash = (function stuffs$util$space__GT_dash(s){
return clojure.string.replace(clojure.string.trim(s),/\s+/,"-");
});
stuffs.util.contains_white_space_QMARK_ = (function (){var r = lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null));
return (function (s){
return cljs.core.boolean$(cljs.core.re_find(r,s));
});
})();
stuffs.util.remove_parens_and_content = (function (){var r = lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)," "], null),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),")"], null)], null),")",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)," "], null)], null));
return (function (s){
return clojure.string.trim(clojure.string.replace(s,r," "));
});
})();
stuffs.util.collapse_whitespace = goog.string.collapseWhitespace;
stuffs.util.url_regex = cljs.core.re_pattern("^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$");
stuffs.util.url_QMARK_ = (function stuffs$util$url_QMARK_(x){
return cljs.core.boolean$((function (){var and__5043__auto__ = typeof x === 'string';
if(and__5043__auto__){
return cljs.core.re_find(stuffs.util.url_regex,x);
} else {
return and__5043__auto__;
}
})());
});
stuffs.util.url_remove_http_www_q_params = (function stuffs$util$url_remove_http_www_q_params(x){
var and__5043__auto__ = stuffs.util.url_QMARK_(x);
if(and__5043__auto__){
return clojure.string.replace(x,cljs.core.re_pattern("http(s)?(:)?(\\/\\/)?|(\\/\\/)?(www\\.)?(/?\\?.*)?(\\/$)?"),"");
} else {
return and__5043__auto__;
}
});
/**
 * same as (str/lower-case (str x))
 */
stuffs.util.strl = (function stuffs$util$strl(x){
return clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});
stuffs.util.str_unquote = (function (){var start_end_quotes = (new cljs.core.Delay((function (){
return lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"start","start",-355208981),"\""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),"\"",new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}),null));
return (function (s){
return clojure.string.replace(clojure.string.trim(s),cljs.core.deref(start_end_quotes),"");
});
})();
stuffs.util.str_ends_with_whitespace_QMARK_ = (function stuffs$util$str_ends_with_whitespace_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_find(/\s$/,s));
});

//# sourceMappingURL=stuffs.util.js.map
