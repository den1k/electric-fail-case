goog.provide('hyperfiddle.logger');
hyperfiddle.logger.levels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)], null);
/**
 * @define {string}
 */
hyperfiddle.logger.LEVEL = goog.define("hyperfiddle.logger.LEVEL","debug");
hyperfiddle.logger._STAR_LEVEL_STAR_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(hyperfiddle.logger.LEVEL);
/**
 * Set runtime log level. See `hyperfiddle.logger/levels`.
 */
hyperfiddle.logger.set_level_BANG_ = (function hyperfiddle$logger$set_level_BANG_(level){
var level__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
if(cljs.core.truth_((function (){var fexpr__42117 = cljs.core.set(hyperfiddle.logger.levels);
return (fexpr__42117.cljs$core$IFn$_invoke$arity$1 ? fexpr__42117.cljs$core$IFn$_invoke$arity$1(level__$1) : fexpr__42117.call(null,level__$1));
})())){
} else {
throw (new Error(["Assert failed: ","Invalid log level.","\n","((set levels) level)"].join('')));
}

return (hyperfiddle.logger._STAR_LEVEL_STAR_ = level__$1);
});
goog.exportSymbol('hyperfiddle.logger.set_level_BANG_', hyperfiddle.logger.set_level_BANG_);
var rank_42148 = cljs.core.zipmap(hyperfiddle.logger.levels,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(hyperfiddle.logger.levels)));
hyperfiddle.logger.active_QMARK_ = (function hyperfiddle$logger$active_QMARK_(level){
return ((rank_42148.cljs$core$IFn$_invoke$arity$1 ? rank_42148.cljs$core$IFn$_invoke$arity$1(level) : rank_42148.call(null,level)) >= (rank_42148.cljs$core$IFn$_invoke$arity$1 ? rank_42148.cljs$core$IFn$_invoke$arity$1(hyperfiddle.logger._STAR_LEVEL_STAR_) : rank_42148.call(null,hyperfiddle.logger._STAR_LEVEL_STAR_)));
});
hyperfiddle.logger.js_prefix = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"trace","trace",-1082747415),"\u26AA TRACE",new cljs.core.Keyword(null,"debug","debug",-1608172596),"\uD83D\uDC1B DEBUG",new cljs.core.Keyword(null,"info","info",-317069002),"\u2139\uFE0F INFO",new cljs.core.Keyword(null,"warn","warn",-436710552),"  WARN",new cljs.core.Keyword(null,"error","error",-978969032),"  ERROR"], null);
/**
 * When Electric compiles to clojurescript, the server peer still don't know about the js/ namespace.
 */
hyperfiddle.logger.log_STAR_ = (function hyperfiddle$logger$log_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42149 = arguments.length;
var i__5770__auto___42150 = (0);
while(true){
if((i__5770__auto___42150 < len__5769__auto___42149)){
args__5775__auto__.push((arguments[i__5770__auto___42150]));

var G__42151 = (i__5770__auto___42150 + (1));
i__5770__auto___42150 = G__42151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (level,ns,args){
if(hyperfiddle.logger.active_QMARK_(level)){
var logger = (function (){var G__42132 = level;
var G__42132__$1 = (((G__42132 instanceof cljs.core.Keyword))?G__42132.fqn:null);
switch (G__42132__$1) {
case "trace":
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
default:
return console.log;

}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(logger,cljs.core.get.cljs$core$IFn$_invoke$arity$3(hyperfiddle.logger.js_prefix,level,""),ns,args);
} else {
return null;
}
}));

(hyperfiddle.logger.log_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.logger.log_STAR_.cljs$lang$applyTo = (function (seq42123){
var G__42124 = cljs.core.first(seq42123);
var seq42123__$1 = cljs.core.next(seq42123);
var G__42125 = cljs.core.first(seq42123__$1);
var seq42123__$2 = cljs.core.next(seq42123__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42124,G__42125,seq42123__$2);
}));

hyperfiddle.logger.gen_log = (function hyperfiddle$logger$gen_log(level,env,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"js-globals","js-globals",1670394727).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.logger","log*","hyperfiddle.logger/log*",1058317706,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),null,(1),null)),args], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.logger","active?","hyperfiddle.logger/active?",-1197304851,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("log","logp","log/logp",-1750859070,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}
});

//# sourceMappingURL=hyperfiddle.logger.js.map
