goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58478 = arguments.length;
var i__5770__auto___58479 = (0);
while(true){
if((i__5770__auto___58479 < len__5769__auto___58478)){
args__5775__auto__.push((arguments[i__5770__auto___58479]));

var G__58480 = (i__5770__auto___58479 + (1));
i__5770__auto___58479 = G__58480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__58388_58481 = keyvals;
var vec__58389_58482 = G__58388_58481;
var seq__58390_58483 = cljs.core.seq(vec__58389_58482);
var first__58391_58484 = cljs.core.first(seq__58390_58483);
var seq__58390_58485__$1 = cljs.core.next(seq__58390_58483);
var k_58486 = first__58391_58484;
var first__58391_58487__$1 = cljs.core.first(seq__58390_58485__$1);
var seq__58390_58488__$2 = cljs.core.next(seq__58390_58485__$1);
var v_58489 = first__58391_58487__$1;
var keyvals_58490__$1 = seq__58390_58488__$2;
var G__58388_58491__$1 = G__58388_58481;
while(true){
var vec__58392_58493 = G__58388_58491__$1;
var seq__58393_58494 = cljs.core.seq(vec__58392_58493);
var first__58394_58495 = cljs.core.first(seq__58393_58494);
var seq__58393_58496__$1 = cljs.core.next(seq__58393_58494);
var k_58497__$1 = first__58394_58495;
var first__58394_58498__$1 = cljs.core.first(seq__58393_58496__$1);
var seq__58393_58499__$2 = cljs.core.next(seq__58393_58496__$1);
var v_58500__$1 = first__58394_58498__$1;
var keyvals_58501__$2 = seq__58393_58499__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_58497__$1)] = v_58500__$1);

if(keyvals_58501__$2){
var G__58502 = keyvals_58501__$2;
G__58388_58491__$1 = G__58502;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq58380){
var G__58381 = cljs.core.first(seq58380);
var seq58380__$1 = cljs.core.next(seq58380);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58381,seq58380__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__58396 = arguments.length;
switch (G__58396) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj58397 = obj;
if((!((obj58397 == null)))){
return (obj58397[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj58398 = obj;
if((!((obj58398 == null)))){
return (obj58398[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__58114__auto__ = (function (){var obj58399 = obj;
if((!((obj58399 == null)))){
return (obj58399[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__58114__auto__)){
return not_found;
} else {
return val__58114__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__58401 = arguments.length;
switch (G__58401) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj58402 = self__.obj;
if((!((obj58402 == null)))){
return (obj58402[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__58114__auto__ = (function (){var obj58403 = self__.obj;
if((!((obj58403 == null)))){
return (obj58403[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__58114__auto__)){
return not_found;
} else {
return val__58114__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58508 = arguments.length;
var i__5770__auto___58509 = (0);
while(true){
if((i__5770__auto___58509 < len__5769__auto___58508)){
args__5775__auto__.push((arguments[i__5770__auto___58509]));

var G__58510 = (i__5770__auto___58509 + (1));
i__5770__auto___58509 = G__58510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__58409 = keyvals;
var vec__58410 = G__58409;
var seq__58411 = cljs.core.seq(vec__58410);
var first__58412 = cljs.core.first(seq__58411);
var seq__58411__$1 = cljs.core.next(seq__58411);
var k = first__58412;
var first__58412__$1 = cljs.core.first(seq__58411__$1);
var seq__58411__$2 = cljs.core.next(seq__58411__$1);
var v = first__58412__$1;
var kvs = seq__58411__$2;
var G__58409__$1 = G__58409;
while(true){
var vec__58413 = G__58409__$1;
var seq__58414 = cljs.core.seq(vec__58413);
var first__58415 = cljs.core.first(seq__58414);
var seq__58414__$1 = cljs.core.next(seq__58414);
var k__$1 = first__58415;
var first__58415__$1 = cljs.core.first(seq__58414__$1);
var seq__58414__$2 = cljs.core.next(seq__58414__$1);
var v__$1 = first__58415__$1;
var kvs__$1 = seq__58414__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__58511 = kvs__$1;
G__58409__$1 = G__58511;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq58404){
var G__58405 = cljs.core.first(seq58404);
var seq58404__$1 = cljs.core.next(seq58404);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58405,seq58404__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58512 = arguments.length;
var i__5770__auto___58513 = (0);
while(true){
if((i__5770__auto___58513 < len__5769__auto___58512)){
args__5775__auto__.push((arguments[i__5770__auto___58513]));

var G__58514 = (i__5770__auto___58513 + (1));
i__5770__auto___58513 = G__58514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq58416){
var G__58417 = cljs.core.first(seq58416);
var seq58416__$1 = cljs.core.next(seq58416);
var G__58418 = cljs.core.first(seq58416__$1);
var seq58416__$2 = cljs.core.next(seq58416__$1);
var G__58419 = cljs.core.first(seq58416__$2);
var seq58416__$3 = cljs.core.next(seq58416__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58417,G__58418,G__58419,seq58416__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58515 = arguments.length;
var i__5770__auto___58516 = (0);
while(true){
if((i__5770__auto___58516 < len__5769__auto___58515)){
args__5775__auto__.push((arguments[i__5770__auto___58516]));

var G__58517 = (i__5770__auto___58516 + (1));
i__5770__auto___58516 = G__58517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq58420){
var G__58421 = cljs.core.first(seq58420);
var seq58420__$1 = cljs.core.next(seq58420);
var G__58422 = cljs.core.first(seq58420__$1);
var seq58420__$2 = cljs.core.next(seq58420__$1);
var G__58423 = cljs.core.first(seq58420__$2);
var seq58420__$3 = cljs.core.next(seq58420__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58421,G__58422,G__58423,seq58420__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__58428 = arguments.length;
switch (G__58428) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___58519 = arguments.length;
var i__5770__auto___58520 = (0);
while(true){
if((i__5770__auto___58520 < len__5769__auto___58519)){
args_arr__5794__auto__.push((arguments[i__5770__auto___58520]));

var G__58521 = (i__5770__auto___58520 + (1));
i__5770__auto___58520 = G__58521;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__58429_58522 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__58430_58523 = null;
var count__58431_58524 = (0);
var i__58432_58525 = (0);
while(true){
if((i__58432_58525 < count__58431_58524)){
var k_58526 = chunk__58430_58523.cljs$core$IIndexed$_nth$arity$2(null,i__58432_58525);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_58526,applied_science.js_interop.unchecked_get(x,k_58526)], 0));


var G__58527 = seq__58429_58522;
var G__58528 = chunk__58430_58523;
var G__58529 = count__58431_58524;
var G__58530 = (i__58432_58525 + (1));
seq__58429_58522 = G__58527;
chunk__58430_58523 = G__58528;
count__58431_58524 = G__58529;
i__58432_58525 = G__58530;
continue;
} else {
var temp__5804__auto___58531 = cljs.core.seq(seq__58429_58522);
if(temp__5804__auto___58531){
var seq__58429_58532__$1 = temp__5804__auto___58531;
if(cljs.core.chunked_seq_QMARK_(seq__58429_58532__$1)){
var c__5568__auto___58533 = cljs.core.chunk_first(seq__58429_58532__$1);
var G__58534 = cljs.core.chunk_rest(seq__58429_58532__$1);
var G__58535 = c__5568__auto___58533;
var G__58536 = cljs.core.count(c__5568__auto___58533);
var G__58537 = (0);
seq__58429_58522 = G__58534;
chunk__58430_58523 = G__58535;
count__58431_58524 = G__58536;
i__58432_58525 = G__58537;
continue;
} else {
var k_58538 = cljs.core.first(seq__58429_58532__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_58538,applied_science.js_interop.unchecked_get(x,k_58538)], 0));


var G__58539 = cljs.core.next(seq__58429_58532__$1);
var G__58540 = null;
var G__58541 = (0);
var G__58542 = (0);
seq__58429_58522 = G__58539;
chunk__58430_58523 = G__58540;
count__58431_58524 = G__58541;
i__58432_58525 = G__58542;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq58425){
var G__58426 = cljs.core.first(seq58425);
var seq58425__$1 = cljs.core.next(seq58425);
var G__58427 = cljs.core.first(seq58425__$1);
var seq58425__$2 = cljs.core.next(seq58425__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58426,G__58427,seq58425__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__58433 = array;
G__58433.push(x);

return G__58433;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__58434 = array;
G__58434.unshift(x);

return G__58434;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58543 = arguments.length;
var i__5770__auto___58544 = (0);
while(true){
if((i__5770__auto___58544 < len__5769__auto___58543)){
args__5775__auto__.push((arguments[i__5770__auto___58544]));

var G__58545 = (i__5770__auto___58544 + (1));
i__5770__auto___58544 = G__58545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj58438 = obj;
if((!((obj58438 == null)))){
return (obj58438[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq58435){
var G__58436 = cljs.core.first(seq58435);
var seq58435__$1 = cljs.core.next(seq58435);
var G__58437 = cljs.core.first(seq58435__$1);
var seq58435__$2 = cljs.core.next(seq58435__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58436,G__58437,seq58435__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj58439 = obj;
if((!((obj58439 == null)))){
return (obj58439[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58546 = arguments.length;
var i__5770__auto___58547 = (0);
while(true){
if((i__5770__auto___58547 < len__5769__auto___58546)){
args__5775__auto__.push((arguments[i__5770__auto___58547]));

var G__58548 = (i__5770__auto___58547 + (1));
i__5770__auto___58547 = G__58548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq58440){
var G__58441 = cljs.core.first(seq58440);
var seq58440__$1 = cljs.core.next(seq58440);
var G__58442 = cljs.core.first(seq58440__$1);
var seq58440__$2 = cljs.core.next(seq58440__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58441,G__58442,seq58440__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58549 = arguments.length;
var i__5770__auto___58550 = (0);
while(true){
if((i__5770__auto___58550 < len__5769__auto___58549)){
args__5775__auto__.push((arguments[i__5770__auto___58550]));

var G__58551 = (i__5770__auto___58550 + (1));
i__5770__auto___58550 = G__58551;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__58446_58552 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__58447_58553 = null;
var count__58448_58554 = (0);
var i__58449_58555 = (0);
while(true){
if((i__58449_58555 < count__58448_58554)){
var vec__58464_58556 = chunk__58447_58553.cljs$core$IIndexed$_nth$arity$2(null,i__58449_58555);
var k_58557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58464_58556,(0),null);
var v_58558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58464_58556,(1),null);
var obj58467_58559 = obj;
var obj58468_58560 = (((!((obj58467_58559 == null))))?obj58467_58559:({}));
(obj58468_58560[applied_science.js_interop.impl.wrap_key(k_58557)] = v_58558);



var G__58561 = seq__58446_58552;
var G__58562 = chunk__58447_58553;
var G__58563 = count__58448_58554;
var G__58564 = (i__58449_58555 + (1));
seq__58446_58552 = G__58561;
chunk__58447_58553 = G__58562;
count__58448_58554 = G__58563;
i__58449_58555 = G__58564;
continue;
} else {
var temp__5804__auto___58565 = cljs.core.seq(seq__58446_58552);
if(temp__5804__auto___58565){
var seq__58446_58566__$1 = temp__5804__auto___58565;
if(cljs.core.chunked_seq_QMARK_(seq__58446_58566__$1)){
var c__5568__auto___58567 = cljs.core.chunk_first(seq__58446_58566__$1);
var G__58568 = cljs.core.chunk_rest(seq__58446_58566__$1);
var G__58569 = c__5568__auto___58567;
var G__58570 = cljs.core.count(c__5568__auto___58567);
var G__58571 = (0);
seq__58446_58552 = G__58568;
chunk__58447_58553 = G__58569;
count__58448_58554 = G__58570;
i__58449_58555 = G__58571;
continue;
} else {
var vec__58471_58572 = cljs.core.first(seq__58446_58566__$1);
var k_58573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471_58572,(0),null);
var v_58574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471_58572,(1),null);
var obj58474_58575 = obj;
var obj58475_58576 = (((!((obj58474_58575 == null))))?obj58474_58575:({}));
(obj58475_58576[applied_science.js_interop.impl.wrap_key(k_58573)] = v_58574);



var G__58577 = cljs.core.next(seq__58446_58566__$1);
var G__58578 = null;
var G__58579 = (0);
var G__58580 = (0);
seq__58446_58552 = G__58577;
chunk__58447_58553 = G__58578;
count__58448_58554 = G__58579;
i__58449_58555 = G__58580;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq58443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58443));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
