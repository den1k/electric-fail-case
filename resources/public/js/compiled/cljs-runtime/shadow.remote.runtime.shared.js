goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33879,res){
var map__33884 = p__33879;
var map__33884__$1 = cljs.core.__destructure_map(map__33884);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33884__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33884__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33886 = res;
var G__33886__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33886,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33886);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33886__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33886__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33892 = arguments.length;
switch (G__33892) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33897,msg,handlers,timeout_after_ms){
var map__33898 = p__33897;
var map__33898__$1 = cljs.core.__destructure_map(map__33898);
var runtime = map__33898__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33898__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34194 = arguments.length;
var i__5770__auto___34195 = (0);
while(true){
if((i__5770__auto___34195 < len__5769__auto___34194)){
args__5775__auto__.push((arguments[i__5770__auto___34195]));

var G__34197 = (i__5770__auto___34195 + (1));
i__5770__auto___34195 = G__34197;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33908,ev,args){
var map__33909 = p__33908;
var map__33909__$1 = cljs.core.__destructure_map(map__33909);
var runtime = map__33909__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33911 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33914 = null;
var count__33915 = (0);
var i__33916 = (0);
while(true){
if((i__33916 < count__33915)){
var ext = chunk__33914.cljs$core$IIndexed$_nth$arity$2(null,i__33916);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34209 = seq__33911;
var G__34210 = chunk__33914;
var G__34211 = count__33915;
var G__34212 = (i__33916 + (1));
seq__33911 = G__34209;
chunk__33914 = G__34210;
count__33915 = G__34211;
i__33916 = G__34212;
continue;
} else {
var G__34214 = seq__33911;
var G__34215 = chunk__33914;
var G__34216 = count__33915;
var G__34217 = (i__33916 + (1));
seq__33911 = G__34214;
chunk__33914 = G__34215;
count__33915 = G__34216;
i__33916 = G__34217;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33911);
if(temp__5804__auto__){
var seq__33911__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33911__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33911__$1);
var G__34224 = cljs.core.chunk_rest(seq__33911__$1);
var G__34225 = c__5568__auto__;
var G__34226 = cljs.core.count(c__5568__auto__);
var G__34227 = (0);
seq__33911 = G__34224;
chunk__33914 = G__34225;
count__33915 = G__34226;
i__33916 = G__34227;
continue;
} else {
var ext = cljs.core.first(seq__33911__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34230 = cljs.core.next(seq__33911__$1);
var G__34231 = null;
var G__34232 = (0);
var G__34233 = (0);
seq__33911 = G__34230;
chunk__33914 = G__34231;
count__33915 = G__34232;
i__33916 = G__34233;
continue;
} else {
var G__34235 = cljs.core.next(seq__33911__$1);
var G__34236 = null;
var G__34237 = (0);
var G__34238 = (0);
seq__33911 = G__34235;
chunk__33914 = G__34236;
count__33915 = G__34237;
i__33916 = G__34238;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33903){
var G__33904 = cljs.core.first(seq33903);
var seq33903__$1 = cljs.core.next(seq33903);
var G__33905 = cljs.core.first(seq33903__$1);
var seq33903__$2 = cljs.core.next(seq33903__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33904,G__33905,seq33903__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33937,p__33938){
var map__33939 = p__33937;
var map__33939__$1 = cljs.core.__destructure_map(map__33939);
var runtime = map__33939__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33939__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33940 = p__33938;
var map__33940__$1 = cljs.core.__destructure_map(map__33940);
var msg = map__33940__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33940__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33941 = cljs.core.deref(state_ref);
var map__33941__$1 = cljs.core.__destructure_map(map__33941);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33941__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33941__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33945){
var map__33946 = p__33945;
var map__33946__$1 = cljs.core.__destructure_map(map__33946);
var runtime = map__33946__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33950,msg){
var map__33951 = p__33950;
var map__33951__$1 = cljs.core.__destructure_map(map__33951);
var runtime = map__33951__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33951__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33953,key,p__33954){
var map__33955 = p__33953;
var map__33955__$1 = cljs.core.__destructure_map(map__33955);
var state = map__33955__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33955__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33956 = p__33954;
var map__33956__$1 = cljs.core.__destructure_map(map__33956);
var spec = map__33956__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33956__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33977,key,spec){
var map__33979 = p__33977;
var map__33979__$1 = cljs.core.__destructure_map(map__33979);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33986_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33986_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33988_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33988_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33989_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33989_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33990_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33990_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33991_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33991_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34039,key){
var map__34040 = p__34039;
var map__34040__$1 = cljs.core.__destructure_map(map__34040);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34040__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34051,msg){
var map__34052 = p__34051;
var map__34052__$1 = cljs.core.__destructure_map(map__34052);
var runtime = map__34052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34066,p__34067){
var map__34068 = p__34066;
var map__34068__$1 = cljs.core.__destructure_map(map__34068);
var runtime = map__34068__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34068__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34069 = p__34067;
var map__34069__$1 = cljs.core.__destructure_map(map__34069);
var msg = map__34069__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34069__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34069__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34093 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34095 = null;
var count__34096 = (0);
var i__34097 = (0);
while(true){
if((i__34097 < count__34096)){
var map__34122 = chunk__34095.cljs$core$IIndexed$_nth$arity$2(null,i__34097);
var map__34122__$1 = cljs.core.__destructure_map(map__34122);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34122__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34325 = seq__34093;
var G__34326 = chunk__34095;
var G__34327 = count__34096;
var G__34328 = (i__34097 + (1));
seq__34093 = G__34325;
chunk__34095 = G__34326;
count__34096 = G__34327;
i__34097 = G__34328;
continue;
} else {
var G__34329 = seq__34093;
var G__34330 = chunk__34095;
var G__34331 = count__34096;
var G__34332 = (i__34097 + (1));
seq__34093 = G__34329;
chunk__34095 = G__34330;
count__34096 = G__34331;
i__34097 = G__34332;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34093);
if(temp__5804__auto__){
var seq__34093__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34093__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34093__$1);
var G__34337 = cljs.core.chunk_rest(seq__34093__$1);
var G__34338 = c__5568__auto__;
var G__34339 = cljs.core.count(c__5568__auto__);
var G__34340 = (0);
seq__34093 = G__34337;
chunk__34095 = G__34338;
count__34096 = G__34339;
i__34097 = G__34340;
continue;
} else {
var map__34137 = cljs.core.first(seq__34093__$1);
var map__34137__$1 = cljs.core.__destructure_map(map__34137);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34341 = cljs.core.next(seq__34093__$1);
var G__34342 = null;
var G__34343 = (0);
var G__34344 = (0);
seq__34093 = G__34341;
chunk__34095 = G__34342;
count__34096 = G__34343;
i__34097 = G__34344;
continue;
} else {
var G__34347 = cljs.core.next(seq__34093__$1);
var G__34348 = null;
var G__34349 = (0);
var G__34350 = (0);
seq__34093 = G__34347;
chunk__34095 = G__34348;
count__34096 = G__34349;
i__34097 = G__34350;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
