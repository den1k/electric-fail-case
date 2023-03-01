goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"info","info",-317069002),"hyperfiddle.electric.impl.io",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], 0));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__33432 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr33433_34302 = G__33432;
(arr33433_34302[(size * (2))] = cljs.core.identity((0)));

return G__33432;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(function (){var arr33446 = cache;
return (arr33446[i]);
})())){
var arr33448_34304 = cache;
(arr33448_34304[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__34307 = (i + (2));
i = G__34307;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = (function (){var arr33459 = cache;
var k__29345__auto__ = (cljs.core.count(cache) - (1));
var v__29346__auto__ = (function (){var arr33462 = arr33459;
return (arr33462[k__29345__auto__]);
})();
(arr33459[k__29345__auto__] = (function (p1__33441_SHARP_){
return cljs.core.mod((p1__33441_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
})(v__29346__auto__));

return v__29346__auto__;
})();
var arr33469 = cache;
(arr33469[widx] = cljs.core.identity(k));

return (arr33469[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(function (){var arr33476 = cache;
return (arr33476[i]);
})())){
var arr33477 = cache;
return (arr33477[(i + (1))]);
} else {
var G__34317 = (i + (2));
i = G__34317;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__34319 = (i + (2));
var G__34320 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,(function (){var arr33488 = cache;
return (arr33488[i]);
})(),(function (){var arr33489 = cache;
return (arr33489[(i + (1))]);
})());
i = G__34319;
ac = G__34320;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___34322 = cljs.core.ex_cause(fi);
if((temp__5808__auto___34322 == null)){
} else {
var cause_34323 = temp__5808__auto___34322;
if((cause_34323 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_34323);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io.write_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
})),new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler]),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
hyperfiddle.electric.impl.io.read_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["failure",cognitect.transit.read_handler((function (p__33522){
var vec__33524 = p__33522;
var seq__33525 = cljs.core.seq(vec__33524);
var first__33526 = cljs.core.first(seq__33525);
var seq__33525__$1 = cljs.core.next(seq__33525);
var tag = first__33526;
var args = seq__33525__$1;
var G__33531 = tag;
var G__33531__$1 = (((G__33531 instanceof cljs.core.Keyword))?G__33531.fqn:null);
switch (G__33531__$1) {
case "exception":
var vec__33535 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__33539 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33531__$1)].join('')));

}
}))], null)], null);
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__33550 = r;
G__33550.setInt32(offset,n);

return G__33550;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__33562 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__33562)),xs);

return G__33562;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565 = (function (b,meta33566){
this.b = b;
this.meta33566 = meta33566;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33567,meta33566__$1){
var self__ = this;
var _33567__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565(self__.b,meta33566__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33567){
var self__ = this;
var _33567__$1 = this;
return self__.meta33566;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__34329 = (function (){var G__33571 = r__$1;
var G__33572 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__33571,G__33572) : rf.call(null,G__33571,G__33572));
})();
var G__34330 = (i + (4));
r__$1 = G__34329;
i = G__34330;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta33566","meta33566",2127549727,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33565");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33565");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33565.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io33565 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io33565(b,meta33566){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565(b,meta33566));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33565(b,cljs.core.PersistentArrayMap.EMPTY)));
});
hyperfiddle.electric.impl.io.transit_writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts);
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer,x);
});
hyperfiddle.electric.impl.io.transit_reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts);
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader,s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__33589 = hyperfiddle.electric.impl.io.decode(x);
hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"trace","trace",-1082747415),"hyperfiddle.electric.impl.io",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDD3D",G__33589], 0));

return G__33589;
}catch (e33588){var t = e33588;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33597_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_10(cr33597_state){
try{var cr33597_place_7 = (cr33597_state[(2)]);
(cr33597_state[(0)] = null);

(cr33597_state[(2)] = null);

return cr33597_place_7;
}catch (e33778){var cr33597_exception = e33778;
(cr33597_state[(0)] = null);

(cr33597_state[(2)] = null);

throw cr33597_exception;
}});
var cr33597_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_7(cr33597_state){
try{var cr33597_place_22 = (cr33597_state[(7)]);
var cr33597_place_32 = cljs.core.persistent_BANG_;
var cr33597_place_33 = cr33597_place_22;
var cr33597_place_34 = (function (){var G__33789 = cr33597_place_33;
var fexpr__33788 = cr33597_place_32;
return (fexpr__33788.cljs$core$IFn$_invoke$arity$1 ? fexpr__33788.cljs$core$IFn$_invoke$arity$1(G__33789) : fexpr__33788.call(null,G__33789));
})();
(cr33597_state[(0)] = cr33597_block_8);

(cr33597_state[(7)] = null);

(cr33597_state[(3)] = cr33597_place_34);

return cr33597_state;
}catch (e33784){var cr33597_exception = e33784;
(cr33597_state[(0)] = null);

(cr33597_state[(7)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

throw cr33597_exception;
}});
var cr33597_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_6(cr33597_state){
try{var cr33597_place_22 = (cr33597_state[(7)]);
var cr33597_place_30 = missionary.core.unpark();
var cr33597_place_31 = cr33597_place_22;
(cr33597_state[(0)] = cr33597_block_4);

(cr33597_state[(7)] = null);

(cr33597_state[(3)] = cr33597_place_30);

(cr33597_state[(6)] = cr33597_place_31);

return cr33597_state;
}catch (e33792){var cr33597_exception = e33792;
(cr33597_state[(0)] = null);

(cr33597_state[(7)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

(cr33597_state[(6)] = null);

throw cr33597_exception;
}});
var cr33597_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_9(cr33597_state){
try{var cr33597_place_2 = (cr33597_state[(1)]);
var cr33597_place_4 = (cr33597_state[(3)]);
var cr33597_place_37 = cljs.core.conj_BANG_;
var cr33597_place_38 = cr33597_place_2;
var cr33597_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr33597_place_40 = cr33597_place_4;
var cr33597_place_41 = (function (){var G__33799 = cr33597_place_40;
var fexpr__33798 = cr33597_place_39;
return (fexpr__33798.cljs$core$IFn$_invoke$arity$1 ? fexpr__33798.cljs$core$IFn$_invoke$arity$1(G__33799) : fexpr__33798.call(null,G__33799));
})();
var cr33597_place_42 = (function (){var G__33804 = cr33597_place_38;
var G__33805 = cr33597_place_41;
var fexpr__33803 = cr33597_place_37;
return (fexpr__33803.cljs$core$IFn$_invoke$arity$2 ? fexpr__33803.cljs$core$IFn$_invoke$arity$2(G__33804,G__33805) : fexpr__33803.call(null,G__33804,G__33805));
})();
(cr33597_state[(0)] = cr33597_block_1);

(cr33597_state[(3)] = null);

(cr33597_state[(1)] = cr33597_place_42);

return cr33597_state;
}catch (e33795){var cr33597_exception = e33795;
(cr33597_state[(0)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(3)] = null);

throw cr33597_exception;
}});
var cr33597_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_4(cr33597_state){
try{var cr33597_place_11 = (cr33597_state[(3)]);
var cr33597_place_14 = (cr33597_state[(6)]);
var cr33597_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr33597_place_16 = cr33597_place_11;
var cr33597_place_17 = (function (){var G__33812 = cr33597_place_16;
var fexpr__33811 = cr33597_place_15;
return (fexpr__33811.cljs$core$IFn$_invoke$arity$1 ? fexpr__33811.cljs$core$IFn$_invoke$arity$1(G__33812) : fexpr__33811.call(null,G__33812));
})();
var cr33597_place_18 = cljs.core.reduce;
var cr33597_place_19 = cljs.core.conj_BANG_;
var cr33597_place_20 = cr33597_place_14;
var cr33597_place_21 = cr33597_place_17;
var cr33597_place_22 = (function (){var G__33816 = cr33597_place_19;
var G__33817 = cr33597_place_20;
var G__33818 = cr33597_place_21;
var fexpr__33815 = cr33597_place_18;
return (fexpr__33815.cljs$core$IFn$_invoke$arity$3 ? fexpr__33815.cljs$core$IFn$_invoke$arity$3(G__33816,G__33817,G__33818) : fexpr__33815.call(null,G__33816,G__33817,G__33818));
})();
var cr33597_place_23 = cljs.core.count;
var cr33597_place_24 = cr33597_place_17;
var cr33597_place_25 = (function (){var G__33820 = cr33597_place_24;
var fexpr__33819 = cr33597_place_23;
return (fexpr__33819.cljs$core$IFn$_invoke$arity$1 ? fexpr__33819.cljs$core$IFn$_invoke$arity$1(G__33820) : fexpr__33819.call(null,G__33820));
})();
var cr33597_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr33597_place_27 = (cr33597_place_25 < cr33597_place_26);
var cr33597_place_28 = null;
if(cr33597_place_27){
(cr33597_state[(0)] = cr33597_block_7);

(cr33597_state[(3)] = null);

(cr33597_state[(6)] = null);

(cr33597_state[(7)] = cr33597_place_22);

(cr33597_state[(3)] = cr33597_place_28);

return cr33597_state;
} else {
(cr33597_state[(0)] = cr33597_block_5);

(cr33597_state[(7)] = cr33597_place_22);

return cr33597_state;
}
}catch (e33807){var cr33597_exception = e33807;
(cr33597_state[(0)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

(cr33597_state[(6)] = null);

throw cr33597_exception;
}});
var cr33597_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_5(cr33597_state){
try{var cr33597_place_29 = _QMARK_read;
(cr33597_state[(0)] = cr33597_block_6);

return missionary.core.park(cr33597_place_29);
}catch (e33821){var cr33597_exception = e33821;
(cr33597_state[(0)] = null);

(cr33597_state[(7)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

(cr33597_state[(6)] = null);

throw cr33597_exception;
}});
var cr33597_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_0(cr33597_state){
try{var cr33597_place_0 = cljs.core.transient$;
var cr33597_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr33597_place_2 = (function (){var G__33829 = cr33597_place_1;
var fexpr__33828 = cr33597_place_0;
return (fexpr__33828.cljs$core$IFn$_invoke$arity$1 ? fexpr__33828.cljs$core$IFn$_invoke$arity$1(G__33829) : fexpr__33828.call(null,G__33829));
})();
(cr33597_state[(0)] = cr33597_block_1);

(cr33597_state[(1)] = cr33597_place_2);

return cr33597_state;
}catch (e33825){var cr33597_exception = e33825;
(cr33597_state[(0)] = null);

throw cr33597_exception;
}});
var cr33597_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_3(cr33597_state){
try{var cr33597_place_2 = (cr33597_state[(1)]);
var cr33597_place_4 = (cr33597_state[(3)]);
var cr33597_place_8 = cljs.core.persistent_BANG_;
var cr33597_place_9 = cljs.core.conj_BANG_;
var cr33597_place_10 = cr33597_place_2;
var cr33597_place_11 = cr33597_place_4;
var cr33597_place_12 = cljs.core.transient$;
var cr33597_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr33597_place_14 = (function (){var G__33836 = cr33597_place_13;
var fexpr__33835 = cr33597_place_12;
return (fexpr__33835.cljs$core$IFn$_invoke$arity$1 ? fexpr__33835.cljs$core$IFn$_invoke$arity$1(G__33836) : fexpr__33835.call(null,G__33836));
})();
(cr33597_state[(0)] = cr33597_block_4);

(cr33597_state[(1)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(1)] = cr33597_place_8);

(cr33597_state[(5)] = cr33597_place_9);

(cr33597_state[(4)] = cr33597_place_10);

(cr33597_state[(3)] = cr33597_place_11);

(cr33597_state[(6)] = cr33597_place_14);

return cr33597_state;
}catch (e33833){var cr33597_exception = e33833;
(cr33597_state[(0)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(3)] = null);

throw cr33597_exception;
}});
var cr33597_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_1(cr33597_state){
try{var cr33597_place_3 = _QMARK_read;
(cr33597_state[(0)] = cr33597_block_2);

return missionary.core.park(cr33597_place_3);
}catch (e33842){var cr33597_exception = e33842;
(cr33597_state[(0)] = null);

(cr33597_state[(1)] = null);

throw cr33597_exception;
}});
var cr33597_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_2(cr33597_state){
try{var cr33597_place_4 = missionary.core.unpark();
var cr33597_place_5 = cr33597_place_4;
var cr33597_place_6 = typeof cr33597_place_5 === 'string';
var cr33597_place_7 = null;
if(cr33597_place_6){
(cr33597_state[(0)] = cr33597_block_9);

(cr33597_state[(3)] = cr33597_place_4);

return cr33597_state;
} else {
(cr33597_state[(0)] = cr33597_block_3);

(cr33597_state[(3)] = cr33597_place_4);

(cr33597_state[(2)] = cr33597_place_7);

return cr33597_state;
}
}catch (e33845){var cr33597_exception = e33845;
(cr33597_state[(0)] = null);

(cr33597_state[(1)] = null);

throw cr33597_exception;
}});
var cr33597_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33597_block_8(cr33597_state){
try{var cr33597_place_8 = (cr33597_state[(1)]);
var cr33597_place_28 = (cr33597_state[(3)]);
var cr33597_place_10 = (cr33597_state[(4)]);
var cr33597_place_9 = (cr33597_state[(5)]);
var cr33597_place_35 = (function (){var G__33862 = cr33597_place_10;
var G__33863 = cr33597_place_28;
var fexpr__33861 = cr33597_place_9;
return (fexpr__33861.cljs$core$IFn$_invoke$arity$2 ? fexpr__33861.cljs$core$IFn$_invoke$arity$2(G__33862,G__33863) : fexpr__33861.call(null,G__33862,G__33863));
})();
var cr33597_place_36 = (function (){var G__33866 = cr33597_place_35;
var fexpr__33865 = cr33597_place_8;
return (fexpr__33865.cljs$core$IFn$_invoke$arity$1 ? fexpr__33865.cljs$core$IFn$_invoke$arity$1(G__33866) : fexpr__33865.call(null,G__33866));
})();
(cr33597_state[(0)] = cr33597_block_10);

(cr33597_state[(1)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

(cr33597_state[(2)] = cr33597_place_36);

return cr33597_state;
}catch (e33855){var cr33597_exception = e33855;
(cr33597_state[(0)] = null);

(cr33597_state[(1)] = null);

(cr33597_state[(2)] = null);

(cr33597_state[(3)] = null);

(cr33597_state[(4)] = null);

(cr33597_state[(5)] = null);

throw cr33597_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33874 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__33874[(0)] = cr33597_block_0);

return G__33874;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__33879_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33884_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_11(cr33884_state){
try{var cr33884_place_50 = (cr33884_state[(2)]);
var cr33884_place_64 = hyperfiddle.electric.impl.io.encode_numbers;
var cr33884_place_65 = cljs.core.subvec;
var cr33884_place_66 = cr33884_place_50;
var cr33884_place_67 = (0);
var cr33884_place_68 = hyperfiddle.electric.impl.io.chunk_size;
var cr33884_place_69 = (function (){var G__34134 = cr33884_place_66;
var G__34135 = cr33884_place_67;
var G__34136 = cr33884_place_68;
var fexpr__34133 = cr33884_place_65;
return (fexpr__34133.cljs$core$IFn$_invoke$arity$3 ? fexpr__34133.cljs$core$IFn$_invoke$arity$3(G__34134,G__34135,G__34136) : fexpr__34133.call(null,G__34134,G__34135,G__34136));
})();
var cr33884_place_70 = (function (){var G__34138 = cr33884_place_69;
var fexpr__34137 = cr33884_place_64;
return (fexpr__34137.cljs$core$IFn$_invoke$arity$1 ? fexpr__34137.cljs$core$IFn$_invoke$arity$1(G__34138) : fexpr__34137.call(null,G__34138));
})();
var cr33884_place_71 = write;
var cr33884_place_72 = cr33884_place_70;
var cr33884_place_73 = (function (){var G__34141 = cr33884_place_72;
var fexpr__34140 = cr33884_place_71;
return (fexpr__34140.cljs$core$IFn$_invoke$arity$1 ? fexpr__34140.cljs$core$IFn$_invoke$arity$1(G__34141) : fexpr__34140.call(null,G__34141));
})();
(cr33884_state[(0)] = cr33884_block_12);

return missionary.core.park(cr33884_place_73);
}catch (e34127){var cr33884_exception = e34127;
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_9(cr33884_state){
try{var cr33884_place_50 = (cr33884_state[(2)]);
var cr33884_place_57 = hyperfiddle.electric.impl.io.encode_numbers;
var cr33884_place_58 = cr33884_place_50;
var cr33884_place_59 = (function (){var G__34151 = cr33884_place_58;
var fexpr__34150 = cr33884_place_57;
return (fexpr__34150.cljs$core$IFn$_invoke$arity$1 ? fexpr__34150.cljs$core$IFn$_invoke$arity$1(G__34151) : fexpr__34150.call(null,G__34151));
})();
var cr33884_place_60 = write;
var cr33884_place_61 = cr33884_place_59;
var cr33884_place_62 = (function (){var G__34153 = cr33884_place_61;
var fexpr__34152 = cr33884_place_60;
return (fexpr__34152.cljs$core$IFn$_invoke$arity$1 ? fexpr__34152.cljs$core$IFn$_invoke$arity$1(G__34153) : fexpr__34152.call(null,G__34153));
})();
(cr33884_state[(0)] = cr33884_block_10);

(cr33884_state[(2)] = null);

return missionary.core.park(cr33884_place_62);
}catch (e34145){var cr33884_exception = e34145;
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(3)] = null);

throw cr33884_exception;
}});
var cr33884_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_2(cr33884_state){
try{var cr33884_place_5 = (cr33884_state[(2)]);
var cr33884_place_10 = cr33884_place_5;
var cr33884_place_11 = cljs.core.seq;
var cr33884_place_12 = cr33884_place_10;
var cr33884_place_13 = (function (){var G__34158 = cr33884_place_12;
var fexpr__34157 = cr33884_place_11;
return (fexpr__34157.cljs$core$IFn$_invoke$arity$1 ? fexpr__34157.cljs$core$IFn$_invoke$arity$1(G__34158) : fexpr__34157.call(null,G__34158));
})();
var cr33884_place_14 = cljs.core.first;
var cr33884_place_15 = cr33884_place_13;
var cr33884_place_16 = (function (){var G__34163 = cr33884_place_15;
var fexpr__34162 = cr33884_place_14;
return (fexpr__34162.cljs$core$IFn$_invoke$arity$1 ? fexpr__34162.cljs$core$IFn$_invoke$arity$1(G__34163) : fexpr__34162.call(null,G__34163));
})();
var cr33884_place_17 = cljs.core.next;
var cr33884_place_18 = cr33884_place_13;
var cr33884_place_19 = (function (){var G__34165 = cr33884_place_18;
var fexpr__34164 = cr33884_place_17;
return (fexpr__34164.cljs$core$IFn$_invoke$arity$1 ? fexpr__34164.cljs$core$IFn$_invoke$arity$1(G__34165) : fexpr__34164.call(null,G__34165));
})();
var cr33884_place_20 = cr33884_place_16;
var cr33884_place_21 = cr33884_place_19;
var cr33884_place_22 = hyperfiddle.logger.log_STAR_;
var cr33884_place_23 = new cljs.core.Keyword(null,"trace","trace",-1082747415);
var cr33884_place_24 = "hyperfiddle.electric.impl.io";
var cr33884_place_25 = "\uD83D\uDD3C";
var cr33884_place_26 = cr33884_place_20;
var cr33884_place_27 = (function (){var G__34168 = cr33884_place_23;
var G__34169 = cr33884_place_24;
var G__34170 = cr33884_place_25;
var G__34171 = cr33884_place_26;
var fexpr__34167 = cr33884_place_22;
return (fexpr__34167.cljs$core$IFn$_invoke$arity$4 ? fexpr__34167.cljs$core$IFn$_invoke$arity$4(G__34168,G__34169,G__34170,G__34171) : fexpr__34167.call(null,G__34168,G__34169,G__34170,G__34171));
})();
var cr33884_place_28 = null;
var cr33884_place_29 = false;
(cr33884_state[(0)] = cr33884_block_3);

(cr33884_state[(2)] = null);

(cr33884_state[(2)] = cr33884_place_28);

(cr33884_state[(3)] = cr33884_place_29);

(cr33884_state[(4)] = cr33884_place_21);

(cr33884_state[(5)] = cr33884_place_20);

return cr33884_state;
}catch (e34155){var cr33884_exception = e34155;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(2)] = null);

throw cr33884_exception;
}});
var cr33884_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_0(cr33884_state){
try{var cr33884_place_0 = cljs.core.seq;
var cr33884_place_1 = cljs.core.pop;
var cr33884_place_2 = p1__33879_SHARP_;
var cr33884_place_3 = (function (){var G__34181 = cr33884_place_2;
var fexpr__34179 = cr33884_place_1;
return (fexpr__34179.cljs$core$IFn$_invoke$arity$1 ? fexpr__34179.cljs$core$IFn$_invoke$arity$1(G__34181) : fexpr__34179.call(null,G__34181));
})();
var cr33884_place_4 = (function (){var G__34184 = cr33884_place_3;
var fexpr__34183 = cr33884_place_0;
return (fexpr__34183.cljs$core$IFn$_invoke$arity$1 ? fexpr__34183.cljs$core$IFn$_invoke$arity$1(G__34184) : fexpr__34183.call(null,G__34184));
})();
(cr33884_state[(0)] = cr33884_block_1);

(cr33884_state[(1)] = cr33884_place_4);

return cr33884_state;
}catch (e34175){var cr33884_exception = e34175;
(cr33884_state[(0)] = null);

throw cr33884_exception;
}});
var cr33884_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_7(cr33884_state){
try{var cr33884_place_48 = cljs.core.peek;
var cr33884_place_49 = p1__33879_SHARP_;
var cr33884_place_50 = (function (){var G__34190 = cr33884_place_49;
var fexpr__34189 = cr33884_place_48;
return (fexpr__34189.cljs$core$IFn$_invoke$arity$1 ? fexpr__34189.cljs$core$IFn$_invoke$arity$1(G__34190) : fexpr__34189.call(null,G__34190));
})();
(cr33884_state[(0)] = cr33884_block_8);

(cr33884_state[(2)] = cr33884_place_50);

return cr33884_state;
}catch (e34186){var cr33884_exception = e34186;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_1(cr33884_state){
try{var cr33884_place_4 = (cr33884_state[(1)]);
var cr33884_place_5 = cr33884_place_4;
var cr33884_place_6 = cr33884_place_5;
var cr33884_place_7 = null;
var cr33884_place_8 = (cr33884_place_6 == cr33884_place_7);
var cr33884_place_9 = null;
if(cr33884_place_8){
(cr33884_state[(0)] = cr33884_block_7);

(cr33884_state[(1)] = null);

(cr33884_state[(1)] = cr33884_place_9);

return cr33884_state;
} else {
(cr33884_state[(0)] = cr33884_block_2);

(cr33884_state[(2)] = cr33884_place_5);

return cr33884_state;
}
}catch (e34195){var cr33884_exception = e34195;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_6(cr33884_state){
try{var cr33884_place_21 = (cr33884_state[(4)]);
var cr33884_place_46 = missionary.core.unpark();
var cr33884_place_47 = cr33884_place_21;
(cr33884_state[(0)] = cr33884_block_1);

(cr33884_state[(4)] = null);

(cr33884_state[(1)] = cr33884_place_47);

return cr33884_state;
}catch (e34200){var cr33884_exception = e34200;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(4)] = null);

throw cr33884_exception;
}});
var cr33884_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_10(cr33884_state){
try{var cr33884_place_63 = missionary.core.unpark();
(cr33884_state[(0)] = cr33884_block_13);

(cr33884_state[(3)] = cr33884_place_63);

return cr33884_state;
}catch (e34205){var cr33884_exception = e34205;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(3)] = null);

throw cr33884_exception;
}});
var cr33884_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_12(cr33884_state){
try{var cr33884_place_50 = (cr33884_state[(2)]);
var cr33884_place_74 = missionary.core.unpark();
var cr33884_place_75 = cljs.core.subvec;
var cr33884_place_76 = cr33884_place_50;
var cr33884_place_77 = hyperfiddle.electric.impl.io.chunk_size;
var cr33884_place_78 = (function (){var G__34212 = cr33884_place_76;
var G__34213 = cr33884_place_77;
var fexpr__34211 = cr33884_place_75;
return (fexpr__34211.cljs$core$IFn$_invoke$arity$2 ? fexpr__34211.cljs$core$IFn$_invoke$arity$2(G__34212,G__34213) : fexpr__34211.call(null,G__34212,G__34213));
})();
(cr33884_state[(0)] = cr33884_block_8);

(cr33884_state[(2)] = cr33884_place_78);

return cr33884_state;
}catch (e34206){var cr33884_exception = e34206;
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_5(cr33884_state){
try{var cr33884_place_28 = (cr33884_state[(2)]);
var cr33884_place_29 = (cr33884_state[(3)]);
var cr33884_place_42 = (cljs.core.truth_(cr33884_place_29)?(function(){throw cr33884_place_28})():cr33884_place_28);
var cr33884_place_43 = write;
var cr33884_place_44 = cr33884_place_42;
var cr33884_place_45 = (function (){var G__34221 = cr33884_place_44;
var fexpr__34220 = cr33884_place_43;
return (fexpr__34220.cljs$core$IFn$_invoke$arity$1 ? fexpr__34220.cljs$core$IFn$_invoke$arity$1(G__34221) : fexpr__34220.call(null,G__34221));
})();
(cr33884_state[(0)] = cr33884_block_6);

(cr33884_state[(2)] = null);

(cr33884_state[(3)] = null);

return missionary.core.park(cr33884_place_45);
}catch (e34218){var cr33884_exception = e34218;
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(3)] = null);

(cr33884_state[(4)] = null);

throw cr33884_exception;
}});
var cr33884_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_14(cr33884_state){
try{var cr33884_place_9 = (cr33884_state[(1)]);
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

return cr33884_place_9;
}catch (e34222){var cr33884_exception = e34222;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_4(cr33884_state){
try{var cr33884_place_28 = (cr33884_state[(2)]);
var cr33884_place_20 = (cr33884_state[(5)]);
var cr33884_place_33 = cr33884_place_28;
var cr33884_place_34 = cljs.core.ex_info;
var cr33884_place_35 = "Failed to encode";
var cr33884_place_36 = new cljs.core.Keyword(null,"value","value",305978217);
var cr33884_place_37 = cr33884_place_20;
var cr33884_place_38 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr33884_place_36,cr33884_place_37]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33884_place_39 = cr33884_place_33;
var cr33884_place_40 = (function (){var G__34229 = cr33884_place_35;
var G__34230 = cr33884_place_38;
var G__34231 = cr33884_place_39;
var fexpr__34228 = cr33884_place_34;
return (fexpr__34228.cljs$core$IFn$_invoke$arity$3 ? fexpr__34228.cljs$core$IFn$_invoke$arity$3(G__34229,G__34230,G__34231) : fexpr__34228.call(null,G__34229,G__34230,G__34231));
})();
var cr33884_place_41 = (function(){throw cr33884_place_40})();
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(3)] = null);

(cr33884_state[(4)] = null);

(cr33884_state[(5)] = null);

return null;
}catch (e34227){var cr33884_exception = e34227;
(cr33884_state[(0)] = cr33884_block_5);

(cr33884_state[(5)] = null);

(cr33884_state[(2)] = cr33884_exception);

(cr33884_state[(3)] = true);

return cr33884_state;
}});
var cr33884_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_8(cr33884_state){
try{var cr33884_place_50 = (cr33884_state[(2)]);
var cr33884_place_51 = cljs.core.count;
var cr33884_place_52 = cr33884_place_50;
var cr33884_place_53 = (function (){var G__34236 = cr33884_place_52;
var fexpr__34235 = cr33884_place_51;
return (fexpr__34235.cljs$core$IFn$_invoke$arity$1 ? fexpr__34235.cljs$core$IFn$_invoke$arity$1(G__34236) : fexpr__34235.call(null,G__34236));
})();
var cr33884_place_54 = hyperfiddle.electric.impl.io.chunk_size;
var cr33884_place_55 = (cr33884_place_53 >= cr33884_place_54);
var cr33884_place_56 = null;
if(cr33884_place_55){
(cr33884_state[(0)] = cr33884_block_11);

return cr33884_state;
} else {
(cr33884_state[(0)] = cr33884_block_9);

(cr33884_state[(3)] = cr33884_place_56);

return cr33884_state;
}
}catch (e34233){var cr33884_exception = e34233;
(cr33884_state[(0)] = null);

(cr33884_state[(2)] = null);

(cr33884_state[(1)] = null);

throw cr33884_exception;
}});
var cr33884_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_13(cr33884_state){
try{var cr33884_place_56 = (cr33884_state[(3)]);
(cr33884_state[(0)] = cr33884_block_14);

(cr33884_state[(3)] = null);

(cr33884_state[(1)] = cr33884_place_56);

return cr33884_state;
}catch (e34238){var cr33884_exception = e34238;
(cr33884_state[(0)] = null);

(cr33884_state[(1)] = null);

(cr33884_state[(3)] = null);

throw cr33884_exception;
}});
var cr33884_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33884_block_3(cr33884_state){
try{var cr33884_place_20 = (cr33884_state[(5)]);
var cr33884_place_30 = hyperfiddle.electric.impl.io.encode;
var cr33884_place_31 = cr33884_place_20;
var cr33884_place_32 = (function (){var G__34244 = cr33884_place_31;
var fexpr__34243 = cr33884_place_30;
return (fexpr__34243.cljs$core$IFn$_invoke$arity$1 ? fexpr__34243.cljs$core$IFn$_invoke$arity$1(G__34244) : fexpr__34243.call(null,G__34244));
})();
(cr33884_state[(0)] = cr33884_block_5);

(cr33884_state[(5)] = null);

(cr33884_state[(2)] = cr33884_place_32);

return cr33884_state;
}catch (e34239){var cr33884_exception = e34239;
(cr33884_state[(0)] = cr33884_block_4);

(cr33884_state[(2)] = cr33884_exception);

return cr33884_state;
}});
return cloroutine.impl.coroutine((function (){var G__34248 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__34248[(0)] = cr33884_block_0);

return G__34248;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__34258 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__34258[(0)] = cljs.core.PersistentVector.EMPTY);

(G__34258[(1)] = cljs.core.PersistentVector.EMPTY);

return G__34258;
})();
return (function() {
var G__34444 = null;
var G__34444__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34444__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__34444__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__34444 = function(r,x){
switch(arguments.length){
case 0:
return G__34444__0.call(this);
case 1:
return G__34444__1.call(this,r);
case 2:
return G__34444__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34444.cljs$core$IFn$_invoke$arity$0 = G__34444__0;
G__34444.cljs$core$IFn$_invoke$arity$1 = G__34444__1;
G__34444.cljs$core$IFn$_invoke$arity$2 = G__34444__2;
return G__34444;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__34456 = null;
var G__34456__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34456__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__34456__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__34274 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__34274) {
case (0):
var G__34275 = r__$2;
var G__34276 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__34275,G__34276) : rf.call(null,G__34275,G__34276));

break;
default:
return r__$2;

}
});
G__34456 = function(r,x){
switch(arguments.length){
case 0:
return G__34456__0.call(this);
case 1:
return G__34456__1.call(this,r);
case 2:
return G__34456__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34456.cljs$core$IFn$_invoke$arity$0 = G__34456__0;
G__34456.cljs$core$IFn$_invoke$arity$1 = G__34456__1;
G__34456.cljs$core$IFn$_invoke$arity$2 = G__34456__2;
return G__34456;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__34279 = arguments.length;
switch (G__34279) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
