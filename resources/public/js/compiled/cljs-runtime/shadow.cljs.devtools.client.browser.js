goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39889 = arguments.length;
var i__5770__auto___39890 = (0);
while(true){
if((i__5770__auto___39890 < len__5769__auto___39889)){
args__5775__auto__.push((arguments[i__5770__auto___39890]));

var G__39891 = (i__5770__auto___39890 + (1));
i__5770__auto___39890 = G__39891;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38976){
var G__38977 = cljs.core.first(seq38976);
var seq38976__$1 = cljs.core.next(seq38976);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38977,seq38976__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38983 = cljs.core.seq(sources);
var chunk__38984 = null;
var count__38985 = (0);
var i__38986 = (0);
while(true){
if((i__38986 < count__38985)){
var map__39017 = chunk__38984.cljs$core$IIndexed$_nth$arity$2(null,i__38986);
var map__39017__$1 = cljs.core.__destructure_map(map__39017);
var src = map__39017__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39017__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39017__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39017__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39017__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39018){var e_39894 = e39018;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39894);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39894.message)].join('')));
}

var G__39895 = seq__38983;
var G__39896 = chunk__38984;
var G__39897 = count__38985;
var G__39898 = (i__38986 + (1));
seq__38983 = G__39895;
chunk__38984 = G__39896;
count__38985 = G__39897;
i__38986 = G__39898;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38983);
if(temp__5804__auto__){
var seq__38983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38983__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38983__$1);
var G__39899 = cljs.core.chunk_rest(seq__38983__$1);
var G__39900 = c__5568__auto__;
var G__39901 = cljs.core.count(c__5568__auto__);
var G__39902 = (0);
seq__38983 = G__39899;
chunk__38984 = G__39900;
count__38985 = G__39901;
i__38986 = G__39902;
continue;
} else {
var map__39029 = cljs.core.first(seq__38983__$1);
var map__39029__$1 = cljs.core.__destructure_map(map__39029);
var src = map__39029__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39032){var e_39905 = e39032;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39905);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39905.message)].join('')));
}

var G__39906 = cljs.core.next(seq__38983__$1);
var G__39907 = null;
var G__39908 = (0);
var G__39909 = (0);
seq__38983 = G__39906;
chunk__38984 = G__39907;
count__38985 = G__39908;
i__38986 = G__39909;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39052 = cljs.core.seq(js_requires);
var chunk__39053 = null;
var count__39054 = (0);
var i__39055 = (0);
while(true){
if((i__39055 < count__39054)){
var js_ns = chunk__39053.cljs$core$IIndexed$_nth$arity$2(null,i__39055);
var require_str_39911 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39911);


var G__39912 = seq__39052;
var G__39913 = chunk__39053;
var G__39914 = count__39054;
var G__39915 = (i__39055 + (1));
seq__39052 = G__39912;
chunk__39053 = G__39913;
count__39054 = G__39914;
i__39055 = G__39915;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39052);
if(temp__5804__auto__){
var seq__39052__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39052__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39052__$1);
var G__39916 = cljs.core.chunk_rest(seq__39052__$1);
var G__39917 = c__5568__auto__;
var G__39918 = cljs.core.count(c__5568__auto__);
var G__39919 = (0);
seq__39052 = G__39916;
chunk__39053 = G__39917;
count__39054 = G__39918;
i__39055 = G__39919;
continue;
} else {
var js_ns = cljs.core.first(seq__39052__$1);
var require_str_39920 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39920);


var G__39923 = cljs.core.next(seq__39052__$1);
var G__39924 = null;
var G__39925 = (0);
var G__39926 = (0);
seq__39052 = G__39923;
chunk__39053 = G__39924;
count__39054 = G__39925;
i__39055 = G__39926;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39077){
var map__39078 = p__39077;
var map__39078__$1 = cljs.core.__destructure_map(map__39078);
var msg = map__39078__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39080(s__39081){
return (new cljs.core.LazySeq(null,(function (){
var s__39081__$1 = s__39081;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39081__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39093 = cljs.core.first(xs__6360__auto__);
var map__39093__$1 = cljs.core.__destructure_map(map__39093);
var src = map__39093__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39081__$1,map__39093,map__39093__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39078,map__39078__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39080_$_iter__39082(s__39083){
return (new cljs.core.LazySeq(null,((function (s__39081__$1,map__39093,map__39093__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39078,map__39078__$1,msg,info,reload_info){
return (function (){
var s__39083__$1 = s__39083;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39083__$1);
if(temp__5804__auto____$1){
var s__39083__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39083__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39083__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39085 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39084 = (0);
while(true){
if((i__39084 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39084);
cljs.core.chunk_append(b__39085,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39928 = (i__39084 + (1));
i__39084 = G__39928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39085),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39080_$_iter__39082(cljs.core.chunk_rest(s__39083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39085),null);
}
} else {
var warning = cljs.core.first(s__39083__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39080_$_iter__39082(cljs.core.rest(s__39083__$2)));
}
} else {
return null;
}
break;
}
});})(s__39081__$1,map__39093,map__39093__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39078,map__39078__$1,msg,info,reload_info))
,null,null));
});})(s__39081__$1,map__39093,map__39093__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39078,map__39078__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39080(cljs.core.rest(s__39081__$1)));
} else {
var G__39931 = cljs.core.rest(s__39081__$1);
s__39081__$1 = G__39931;
continue;
}
} else {
var G__39932 = cljs.core.rest(s__39081__$1);
s__39081__$1 = G__39932;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39111_39933 = cljs.core.seq(warnings);
var chunk__39112_39934 = null;
var count__39113_39935 = (0);
var i__39114_39936 = (0);
while(true){
if((i__39114_39936 < count__39113_39935)){
var map__39124_39939 = chunk__39112_39934.cljs$core$IIndexed$_nth$arity$2(null,i__39114_39936);
var map__39124_39940__$1 = cljs.core.__destructure_map(map__39124_39939);
var w_39941 = map__39124_39940__$1;
var msg_39942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39124_39940__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39124_39940__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39124_39940__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39124_39940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39945)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39943),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39944),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39942__$1)].join(''));


var G__39946 = seq__39111_39933;
var G__39947 = chunk__39112_39934;
var G__39948 = count__39113_39935;
var G__39949 = (i__39114_39936 + (1));
seq__39111_39933 = G__39946;
chunk__39112_39934 = G__39947;
count__39113_39935 = G__39948;
i__39114_39936 = G__39949;
continue;
} else {
var temp__5804__auto___39950 = cljs.core.seq(seq__39111_39933);
if(temp__5804__auto___39950){
var seq__39111_39951__$1 = temp__5804__auto___39950;
if(cljs.core.chunked_seq_QMARK_(seq__39111_39951__$1)){
var c__5568__auto___39952 = cljs.core.chunk_first(seq__39111_39951__$1);
var G__39953 = cljs.core.chunk_rest(seq__39111_39951__$1);
var G__39954 = c__5568__auto___39952;
var G__39955 = cljs.core.count(c__5568__auto___39952);
var G__39956 = (0);
seq__39111_39933 = G__39953;
chunk__39112_39934 = G__39954;
count__39113_39935 = G__39955;
i__39114_39936 = G__39956;
continue;
} else {
var map__39127_39957 = cljs.core.first(seq__39111_39951__$1);
var map__39127_39958__$1 = cljs.core.__destructure_map(map__39127_39957);
var w_39959 = map__39127_39958__$1;
var msg_39960__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39958__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39958__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39958__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39958__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39963)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39961),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39962),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39960__$1)].join(''));


var G__39966 = cljs.core.next(seq__39111_39951__$1);
var G__39967 = null;
var G__39968 = (0);
var G__39969 = (0);
seq__39111_39933 = G__39966;
chunk__39112_39934 = G__39967;
count__39113_39935 = G__39968;
i__39114_39936 = G__39969;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39076_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39076_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39137){
var map__39138 = p__39137;
var map__39138__$1 = cljs.core.__destructure_map(map__39138);
var msg = map__39138__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39139 = cljs.core.seq(updates);
var chunk__39141 = null;
var count__39142 = (0);
var i__39143 = (0);
while(true){
if((i__39143 < count__39142)){
var path = chunk__39141.cljs$core$IIndexed$_nth$arity$2(null,i__39143);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39470_39973 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39474_39974 = null;
var count__39475_39975 = (0);
var i__39476_39976 = (0);
while(true){
if((i__39476_39976 < count__39475_39975)){
var node_39977 = chunk__39474_39974.cljs$core$IIndexed$_nth$arity$2(null,i__39476_39976);
if(cljs.core.not(node_39977.shadow$old)){
var path_match_39978 = shadow.cljs.devtools.client.browser.match_paths(node_39977.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39978)){
var new_link_39979 = (function (){var G__39531 = node_39977.cloneNode(true);
G__39531.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39978),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39531;
})();
(node_39977.shadow$old = true);

(new_link_39979.onload = ((function (seq__39470_39973,chunk__39474_39974,count__39475_39975,i__39476_39976,seq__39139,chunk__39141,count__39142,i__39143,new_link_39979,path_match_39978,node_39977,path,map__39138,map__39138__$1,msg,updates,reload_info){
return (function (e){
var seq__39534_39982 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39536_39983 = null;
var count__39537_39984 = (0);
var i__39538_39985 = (0);
while(true){
if((i__39538_39985 < count__39537_39984)){
var map__39558_39989 = chunk__39536_39983.cljs$core$IIndexed$_nth$arity$2(null,i__39538_39985);
var map__39558_39990__$1 = cljs.core.__destructure_map(map__39558_39989);
var task_39991 = map__39558_39990__$1;
var fn_str_39992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39558_39990__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39558_39990__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39994 = goog.getObjectByName(fn_str_39992,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39993)].join(''));

(fn_obj_39994.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39994.cljs$core$IFn$_invoke$arity$2(path,new_link_39979) : fn_obj_39994.call(null,path,new_link_39979));


var G__39995 = seq__39534_39982;
var G__39996 = chunk__39536_39983;
var G__39997 = count__39537_39984;
var G__39998 = (i__39538_39985 + (1));
seq__39534_39982 = G__39995;
chunk__39536_39983 = G__39996;
count__39537_39984 = G__39997;
i__39538_39985 = G__39998;
continue;
} else {
var temp__5804__auto___39999 = cljs.core.seq(seq__39534_39982);
if(temp__5804__auto___39999){
var seq__39534_40000__$1 = temp__5804__auto___39999;
if(cljs.core.chunked_seq_QMARK_(seq__39534_40000__$1)){
var c__5568__auto___40001 = cljs.core.chunk_first(seq__39534_40000__$1);
var G__40002 = cljs.core.chunk_rest(seq__39534_40000__$1);
var G__40003 = c__5568__auto___40001;
var G__40004 = cljs.core.count(c__5568__auto___40001);
var G__40005 = (0);
seq__39534_39982 = G__40002;
chunk__39536_39983 = G__40003;
count__39537_39984 = G__40004;
i__39538_39985 = G__40005;
continue;
} else {
var map__39564_40006 = cljs.core.first(seq__39534_40000__$1);
var map__39564_40007__$1 = cljs.core.__destructure_map(map__39564_40006);
var task_40008 = map__39564_40007__$1;
var fn_str_40009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39564_40007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39564_40007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40011 = goog.getObjectByName(fn_str_40009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40010)].join(''));

(fn_obj_40011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40011.cljs$core$IFn$_invoke$arity$2(path,new_link_39979) : fn_obj_40011.call(null,path,new_link_39979));


var G__40012 = cljs.core.next(seq__39534_40000__$1);
var G__40013 = null;
var G__40014 = (0);
var G__40015 = (0);
seq__39534_39982 = G__40012;
chunk__39536_39983 = G__40013;
count__39537_39984 = G__40014;
i__39538_39985 = G__40015;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39977);
});})(seq__39470_39973,chunk__39474_39974,count__39475_39975,i__39476_39976,seq__39139,chunk__39141,count__39142,i__39143,new_link_39979,path_match_39978,node_39977,path,map__39138,map__39138__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39978], 0));

goog.dom.insertSiblingAfter(new_link_39979,node_39977);


var G__40017 = seq__39470_39973;
var G__40018 = chunk__39474_39974;
var G__40019 = count__39475_39975;
var G__40020 = (i__39476_39976 + (1));
seq__39470_39973 = G__40017;
chunk__39474_39974 = G__40018;
count__39475_39975 = G__40019;
i__39476_39976 = G__40020;
continue;
} else {
var G__40021 = seq__39470_39973;
var G__40022 = chunk__39474_39974;
var G__40023 = count__39475_39975;
var G__40024 = (i__39476_39976 + (1));
seq__39470_39973 = G__40021;
chunk__39474_39974 = G__40022;
count__39475_39975 = G__40023;
i__39476_39976 = G__40024;
continue;
}
} else {
var G__40025 = seq__39470_39973;
var G__40026 = chunk__39474_39974;
var G__40027 = count__39475_39975;
var G__40028 = (i__39476_39976 + (1));
seq__39470_39973 = G__40025;
chunk__39474_39974 = G__40026;
count__39475_39975 = G__40027;
i__39476_39976 = G__40028;
continue;
}
} else {
var temp__5804__auto___40029 = cljs.core.seq(seq__39470_39973);
if(temp__5804__auto___40029){
var seq__39470_40030__$1 = temp__5804__auto___40029;
if(cljs.core.chunked_seq_QMARK_(seq__39470_40030__$1)){
var c__5568__auto___40031 = cljs.core.chunk_first(seq__39470_40030__$1);
var G__40032 = cljs.core.chunk_rest(seq__39470_40030__$1);
var G__40033 = c__5568__auto___40031;
var G__40034 = cljs.core.count(c__5568__auto___40031);
var G__40035 = (0);
seq__39470_39973 = G__40032;
chunk__39474_39974 = G__40033;
count__39475_39975 = G__40034;
i__39476_39976 = G__40035;
continue;
} else {
var node_40036 = cljs.core.first(seq__39470_40030__$1);
if(cljs.core.not(node_40036.shadow$old)){
var path_match_40037 = shadow.cljs.devtools.client.browser.match_paths(node_40036.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40037)){
var new_link_40038 = (function (){var G__39571 = node_40036.cloneNode(true);
G__39571.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40037),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39571;
})();
(node_40036.shadow$old = true);

(new_link_40038.onload = ((function (seq__39470_39973,chunk__39474_39974,count__39475_39975,i__39476_39976,seq__39139,chunk__39141,count__39142,i__39143,new_link_40038,path_match_40037,node_40036,seq__39470_40030__$1,temp__5804__auto___40029,path,map__39138,map__39138__$1,msg,updates,reload_info){
return (function (e){
var seq__39575_40039 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39577_40040 = null;
var count__39578_40041 = (0);
var i__39579_40042 = (0);
while(true){
if((i__39579_40042 < count__39578_40041)){
var map__39598_40043 = chunk__39577_40040.cljs$core$IIndexed$_nth$arity$2(null,i__39579_40042);
var map__39598_40044__$1 = cljs.core.__destructure_map(map__39598_40043);
var task_40045 = map__39598_40044__$1;
var fn_str_40046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39598_40044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39598_40044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40048 = goog.getObjectByName(fn_str_40046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40047)].join(''));

(fn_obj_40048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40048.cljs$core$IFn$_invoke$arity$2(path,new_link_40038) : fn_obj_40048.call(null,path,new_link_40038));


var G__40049 = seq__39575_40039;
var G__40050 = chunk__39577_40040;
var G__40051 = count__39578_40041;
var G__40052 = (i__39579_40042 + (1));
seq__39575_40039 = G__40049;
chunk__39577_40040 = G__40050;
count__39578_40041 = G__40051;
i__39579_40042 = G__40052;
continue;
} else {
var temp__5804__auto___40053__$1 = cljs.core.seq(seq__39575_40039);
if(temp__5804__auto___40053__$1){
var seq__39575_40054__$1 = temp__5804__auto___40053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39575_40054__$1)){
var c__5568__auto___40055 = cljs.core.chunk_first(seq__39575_40054__$1);
var G__40056 = cljs.core.chunk_rest(seq__39575_40054__$1);
var G__40057 = c__5568__auto___40055;
var G__40058 = cljs.core.count(c__5568__auto___40055);
var G__40059 = (0);
seq__39575_40039 = G__40056;
chunk__39577_40040 = G__40057;
count__39578_40041 = G__40058;
i__39579_40042 = G__40059;
continue;
} else {
var map__39605_40060 = cljs.core.first(seq__39575_40054__$1);
var map__39605_40061__$1 = cljs.core.__destructure_map(map__39605_40060);
var task_40062 = map__39605_40061__$1;
var fn_str_40063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39605_40061__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39605_40061__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40065 = goog.getObjectByName(fn_str_40063,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40064)].join(''));

(fn_obj_40065.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40065.cljs$core$IFn$_invoke$arity$2(path,new_link_40038) : fn_obj_40065.call(null,path,new_link_40038));


var G__40066 = cljs.core.next(seq__39575_40054__$1);
var G__40067 = null;
var G__40068 = (0);
var G__40069 = (0);
seq__39575_40039 = G__40066;
chunk__39577_40040 = G__40067;
count__39578_40041 = G__40068;
i__39579_40042 = G__40069;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40036);
});})(seq__39470_39973,chunk__39474_39974,count__39475_39975,i__39476_39976,seq__39139,chunk__39141,count__39142,i__39143,new_link_40038,path_match_40037,node_40036,seq__39470_40030__$1,temp__5804__auto___40029,path,map__39138,map__39138__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40037], 0));

goog.dom.insertSiblingAfter(new_link_40038,node_40036);


var G__40070 = cljs.core.next(seq__39470_40030__$1);
var G__40071 = null;
var G__40072 = (0);
var G__40073 = (0);
seq__39470_39973 = G__40070;
chunk__39474_39974 = G__40071;
count__39475_39975 = G__40072;
i__39476_39976 = G__40073;
continue;
} else {
var G__40074 = cljs.core.next(seq__39470_40030__$1);
var G__40075 = null;
var G__40076 = (0);
var G__40077 = (0);
seq__39470_39973 = G__40074;
chunk__39474_39974 = G__40075;
count__39475_39975 = G__40076;
i__39476_39976 = G__40077;
continue;
}
} else {
var G__40078 = cljs.core.next(seq__39470_40030__$1);
var G__40079 = null;
var G__40080 = (0);
var G__40081 = (0);
seq__39470_39973 = G__40078;
chunk__39474_39974 = G__40079;
count__39475_39975 = G__40080;
i__39476_39976 = G__40081;
continue;
}
}
} else {
}
}
break;
}


var G__40082 = seq__39139;
var G__40083 = chunk__39141;
var G__40084 = count__39142;
var G__40085 = (i__39143 + (1));
seq__39139 = G__40082;
chunk__39141 = G__40083;
count__39142 = G__40084;
i__39143 = G__40085;
continue;
} else {
var G__40086 = seq__39139;
var G__40087 = chunk__39141;
var G__40088 = count__39142;
var G__40089 = (i__39143 + (1));
seq__39139 = G__40086;
chunk__39141 = G__40087;
count__39142 = G__40088;
i__39143 = G__40089;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39139);
if(temp__5804__auto__){
var seq__39139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39139__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39139__$1);
var G__40090 = cljs.core.chunk_rest(seq__39139__$1);
var G__40091 = c__5568__auto__;
var G__40092 = cljs.core.count(c__5568__auto__);
var G__40093 = (0);
seq__39139 = G__40090;
chunk__39141 = G__40091;
count__39142 = G__40092;
i__39143 = G__40093;
continue;
} else {
var path = cljs.core.first(seq__39139__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39611_40095 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39615_40096 = null;
var count__39616_40097 = (0);
var i__39617_40098 = (0);
while(true){
if((i__39617_40098 < count__39616_40097)){
var node_40099 = chunk__39615_40096.cljs$core$IIndexed$_nth$arity$2(null,i__39617_40098);
if(cljs.core.not(node_40099.shadow$old)){
var path_match_40100 = shadow.cljs.devtools.client.browser.match_paths(node_40099.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40100)){
var new_link_40102 = (function (){var G__39724 = node_40099.cloneNode(true);
G__39724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40100),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39724;
})();
(node_40099.shadow$old = true);

(new_link_40102.onload = ((function (seq__39611_40095,chunk__39615_40096,count__39616_40097,i__39617_40098,seq__39139,chunk__39141,count__39142,i__39143,new_link_40102,path_match_40100,node_40099,path,seq__39139__$1,temp__5804__auto__,map__39138,map__39138__$1,msg,updates,reload_info){
return (function (e){
var seq__39727_40107 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39729_40108 = null;
var count__39730_40109 = (0);
var i__39731_40110 = (0);
while(true){
if((i__39731_40110 < count__39730_40109)){
var map__39737_40111 = chunk__39729_40108.cljs$core$IIndexed$_nth$arity$2(null,i__39731_40110);
var map__39737_40112__$1 = cljs.core.__destructure_map(map__39737_40111);
var task_40113 = map__39737_40112__$1;
var fn_str_40114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39737_40112__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39737_40112__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40116 = goog.getObjectByName(fn_str_40114,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40115)].join(''));

(fn_obj_40116.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40116.cljs$core$IFn$_invoke$arity$2(path,new_link_40102) : fn_obj_40116.call(null,path,new_link_40102));


var G__40117 = seq__39727_40107;
var G__40118 = chunk__39729_40108;
var G__40119 = count__39730_40109;
var G__40120 = (i__39731_40110 + (1));
seq__39727_40107 = G__40117;
chunk__39729_40108 = G__40118;
count__39730_40109 = G__40119;
i__39731_40110 = G__40120;
continue;
} else {
var temp__5804__auto___40121__$1 = cljs.core.seq(seq__39727_40107);
if(temp__5804__auto___40121__$1){
var seq__39727_40122__$1 = temp__5804__auto___40121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39727_40122__$1)){
var c__5568__auto___40123 = cljs.core.chunk_first(seq__39727_40122__$1);
var G__40124 = cljs.core.chunk_rest(seq__39727_40122__$1);
var G__40125 = c__5568__auto___40123;
var G__40127 = cljs.core.count(c__5568__auto___40123);
var G__40128 = (0);
seq__39727_40107 = G__40124;
chunk__39729_40108 = G__40125;
count__39730_40109 = G__40127;
i__39731_40110 = G__40128;
continue;
} else {
var map__39741_40129 = cljs.core.first(seq__39727_40122__$1);
var map__39741_40130__$1 = cljs.core.__destructure_map(map__39741_40129);
var task_40131 = map__39741_40130__$1;
var fn_str_40132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39741_40130__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39741_40130__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40134 = goog.getObjectByName(fn_str_40132,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40133)].join(''));

(fn_obj_40134.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40134.cljs$core$IFn$_invoke$arity$2(path,new_link_40102) : fn_obj_40134.call(null,path,new_link_40102));


var G__40135 = cljs.core.next(seq__39727_40122__$1);
var G__40136 = null;
var G__40137 = (0);
var G__40138 = (0);
seq__39727_40107 = G__40135;
chunk__39729_40108 = G__40136;
count__39730_40109 = G__40137;
i__39731_40110 = G__40138;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40099);
});})(seq__39611_40095,chunk__39615_40096,count__39616_40097,i__39617_40098,seq__39139,chunk__39141,count__39142,i__39143,new_link_40102,path_match_40100,node_40099,path,seq__39139__$1,temp__5804__auto__,map__39138,map__39138__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40100], 0));

goog.dom.insertSiblingAfter(new_link_40102,node_40099);


var G__40141 = seq__39611_40095;
var G__40142 = chunk__39615_40096;
var G__40143 = count__39616_40097;
var G__40144 = (i__39617_40098 + (1));
seq__39611_40095 = G__40141;
chunk__39615_40096 = G__40142;
count__39616_40097 = G__40143;
i__39617_40098 = G__40144;
continue;
} else {
var G__40146 = seq__39611_40095;
var G__40147 = chunk__39615_40096;
var G__40148 = count__39616_40097;
var G__40149 = (i__39617_40098 + (1));
seq__39611_40095 = G__40146;
chunk__39615_40096 = G__40147;
count__39616_40097 = G__40148;
i__39617_40098 = G__40149;
continue;
}
} else {
var G__40150 = seq__39611_40095;
var G__40151 = chunk__39615_40096;
var G__40152 = count__39616_40097;
var G__40153 = (i__39617_40098 + (1));
seq__39611_40095 = G__40150;
chunk__39615_40096 = G__40151;
count__39616_40097 = G__40152;
i__39617_40098 = G__40153;
continue;
}
} else {
var temp__5804__auto___40155__$1 = cljs.core.seq(seq__39611_40095);
if(temp__5804__auto___40155__$1){
var seq__39611_40156__$1 = temp__5804__auto___40155__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39611_40156__$1)){
var c__5568__auto___40157 = cljs.core.chunk_first(seq__39611_40156__$1);
var G__40158 = cljs.core.chunk_rest(seq__39611_40156__$1);
var G__40159 = c__5568__auto___40157;
var G__40160 = cljs.core.count(c__5568__auto___40157);
var G__40161 = (0);
seq__39611_40095 = G__40158;
chunk__39615_40096 = G__40159;
count__39616_40097 = G__40160;
i__39617_40098 = G__40161;
continue;
} else {
var node_40162 = cljs.core.first(seq__39611_40156__$1);
if(cljs.core.not(node_40162.shadow$old)){
var path_match_40163 = shadow.cljs.devtools.client.browser.match_paths(node_40162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40163)){
var new_link_40164 = (function (){var G__39744 = node_40162.cloneNode(true);
G__39744.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39744;
})();
(node_40162.shadow$old = true);

(new_link_40164.onload = ((function (seq__39611_40095,chunk__39615_40096,count__39616_40097,i__39617_40098,seq__39139,chunk__39141,count__39142,i__39143,new_link_40164,path_match_40163,node_40162,seq__39611_40156__$1,temp__5804__auto___40155__$1,path,seq__39139__$1,temp__5804__auto__,map__39138,map__39138__$1,msg,updates,reload_info){
return (function (e){
var seq__39746_40169 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39748_40170 = null;
var count__39749_40171 = (0);
var i__39750_40172 = (0);
while(true){
if((i__39750_40172 < count__39749_40171)){
var map__39759_40174 = chunk__39748_40170.cljs$core$IIndexed$_nth$arity$2(null,i__39750_40172);
var map__39759_40175__$1 = cljs.core.__destructure_map(map__39759_40174);
var task_40176 = map__39759_40175__$1;
var fn_str_40177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39759_40175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39759_40175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40181 = goog.getObjectByName(fn_str_40177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40178)].join(''));

(fn_obj_40181.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40181.cljs$core$IFn$_invoke$arity$2(path,new_link_40164) : fn_obj_40181.call(null,path,new_link_40164));


var G__40182 = seq__39746_40169;
var G__40183 = chunk__39748_40170;
var G__40184 = count__39749_40171;
var G__40185 = (i__39750_40172 + (1));
seq__39746_40169 = G__40182;
chunk__39748_40170 = G__40183;
count__39749_40171 = G__40184;
i__39750_40172 = G__40185;
continue;
} else {
var temp__5804__auto___40186__$2 = cljs.core.seq(seq__39746_40169);
if(temp__5804__auto___40186__$2){
var seq__39746_40187__$1 = temp__5804__auto___40186__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39746_40187__$1)){
var c__5568__auto___40188 = cljs.core.chunk_first(seq__39746_40187__$1);
var G__40189 = cljs.core.chunk_rest(seq__39746_40187__$1);
var G__40190 = c__5568__auto___40188;
var G__40191 = cljs.core.count(c__5568__auto___40188);
var G__40192 = (0);
seq__39746_40169 = G__40189;
chunk__39748_40170 = G__40190;
count__39749_40171 = G__40191;
i__39750_40172 = G__40192;
continue;
} else {
var map__39761_40193 = cljs.core.first(seq__39746_40187__$1);
var map__39761_40194__$1 = cljs.core.__destructure_map(map__39761_40193);
var task_40195 = map__39761_40194__$1;
var fn_str_40196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39761_40194__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39761_40194__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40198 = goog.getObjectByName(fn_str_40196,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40197)].join(''));

(fn_obj_40198.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40198.cljs$core$IFn$_invoke$arity$2(path,new_link_40164) : fn_obj_40198.call(null,path,new_link_40164));


var G__40199 = cljs.core.next(seq__39746_40187__$1);
var G__40200 = null;
var G__40201 = (0);
var G__40202 = (0);
seq__39746_40169 = G__40199;
chunk__39748_40170 = G__40200;
count__39749_40171 = G__40201;
i__39750_40172 = G__40202;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40162);
});})(seq__39611_40095,chunk__39615_40096,count__39616_40097,i__39617_40098,seq__39139,chunk__39141,count__39142,i__39143,new_link_40164,path_match_40163,node_40162,seq__39611_40156__$1,temp__5804__auto___40155__$1,path,seq__39139__$1,temp__5804__auto__,map__39138,map__39138__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40163], 0));

goog.dom.insertSiblingAfter(new_link_40164,node_40162);


var G__40206 = cljs.core.next(seq__39611_40156__$1);
var G__40207 = null;
var G__40208 = (0);
var G__40209 = (0);
seq__39611_40095 = G__40206;
chunk__39615_40096 = G__40207;
count__39616_40097 = G__40208;
i__39617_40098 = G__40209;
continue;
} else {
var G__40210 = cljs.core.next(seq__39611_40156__$1);
var G__40211 = null;
var G__40212 = (0);
var G__40213 = (0);
seq__39611_40095 = G__40210;
chunk__39615_40096 = G__40211;
count__39616_40097 = G__40212;
i__39617_40098 = G__40213;
continue;
}
} else {
var G__40214 = cljs.core.next(seq__39611_40156__$1);
var G__40215 = null;
var G__40216 = (0);
var G__40217 = (0);
seq__39611_40095 = G__40214;
chunk__39615_40096 = G__40215;
count__39616_40097 = G__40216;
i__39617_40098 = G__40217;
continue;
}
}
} else {
}
}
break;
}


var G__40218 = cljs.core.next(seq__39139__$1);
var G__40219 = null;
var G__40220 = (0);
var G__40221 = (0);
seq__39139 = G__40218;
chunk__39141 = G__40219;
count__39142 = G__40220;
i__39143 = G__40221;
continue;
} else {
var G__40222 = cljs.core.next(seq__39139__$1);
var G__40223 = null;
var G__40224 = (0);
var G__40225 = (0);
seq__39139 = G__40222;
chunk__39141 = G__40223;
count__39142 = G__40224;
i__39143 = G__40225;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39766){
var map__39768 = p__39766;
var map__39768__$1 = cljs.core.__destructure_map(map__39768);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39768__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39779){
var map__39782 = p__39779;
var map__39782__$1 = cljs.core.__destructure_map(map__39782);
var _ = map__39782__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39782__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39785,done,error){
var map__39787 = p__39785;
var map__39787__$1 = cljs.core.__destructure_map(map__39787);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39787__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39793,done,error){
var map__39794 = p__39793;
var map__39794__$1 = cljs.core.__destructure_map(map__39794);
var msg = map__39794__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39796){
var map__39797 = p__39796;
var map__39797__$1 = cljs.core.__destructure_map(map__39797);
var src = map__39797__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39797__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39804 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39804) : done.call(null,G__39804));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39823){
var map__39824 = p__39823;
var map__39824__$1 = cljs.core.__destructure_map(map__39824);
var msg__$1 = map__39824__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39826){var ex = e39826;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39830){
var map__39831 = p__39830;
var map__39831__$1 = cljs.core.__destructure_map(map__39831);
var env = map__39831__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39831__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39870){
var map__39871 = p__39870;
var map__39871__$1 = cljs.core.__destructure_map(map__39871);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39871__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39871__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39876){
var map__39877 = p__39876;
var map__39877__$1 = cljs.core.__destructure_map(map__39877);
var svc = map__39877__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39877__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
