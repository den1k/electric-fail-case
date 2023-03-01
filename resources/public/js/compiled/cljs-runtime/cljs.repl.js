goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37293){
var map__37294 = p__37293;
var map__37294__$1 = cljs.core.__destructure_map(map__37294);
var m = map__37294__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37295_37675 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37296_37676 = null;
var count__37297_37677 = (0);
var i__37298_37678 = (0);
while(true){
if((i__37298_37678 < count__37297_37677)){
var f_37679 = chunk__37296_37676.cljs$core$IIndexed$_nth$arity$2(null,i__37298_37678);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37679], 0));


var G__37680 = seq__37295_37675;
var G__37681 = chunk__37296_37676;
var G__37682 = count__37297_37677;
var G__37683 = (i__37298_37678 + (1));
seq__37295_37675 = G__37680;
chunk__37296_37676 = G__37681;
count__37297_37677 = G__37682;
i__37298_37678 = G__37683;
continue;
} else {
var temp__5804__auto___37684 = cljs.core.seq(seq__37295_37675);
if(temp__5804__auto___37684){
var seq__37295_37685__$1 = temp__5804__auto___37684;
if(cljs.core.chunked_seq_QMARK_(seq__37295_37685__$1)){
var c__5568__auto___37686 = cljs.core.chunk_first(seq__37295_37685__$1);
var G__37687 = cljs.core.chunk_rest(seq__37295_37685__$1);
var G__37688 = c__5568__auto___37686;
var G__37689 = cljs.core.count(c__5568__auto___37686);
var G__37690 = (0);
seq__37295_37675 = G__37687;
chunk__37296_37676 = G__37688;
count__37297_37677 = G__37689;
i__37298_37678 = G__37690;
continue;
} else {
var f_37691 = cljs.core.first(seq__37295_37685__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37691], 0));


var G__37692 = cljs.core.next(seq__37295_37685__$1);
var G__37693 = null;
var G__37694 = (0);
var G__37695 = (0);
seq__37295_37675 = G__37692;
chunk__37296_37676 = G__37693;
count__37297_37677 = G__37694;
i__37298_37678 = G__37695;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37696 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37696], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37696)))?cljs.core.second(arglists_37696):arglists_37696)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37345_37700 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37346_37701 = null;
var count__37347_37702 = (0);
var i__37348_37703 = (0);
while(true){
if((i__37348_37703 < count__37347_37702)){
var vec__37376_37706 = chunk__37346_37701.cljs$core$IIndexed$_nth$arity$2(null,i__37348_37703);
var name_37707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37376_37706,(0),null);
var map__37379_37708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37376_37706,(1),null);
var map__37379_37709__$1 = cljs.core.__destructure_map(map__37379_37708);
var doc_37710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37707], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37711], 0));

if(cljs.core.truth_(doc_37710)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37710], 0));
} else {
}


var G__37716 = seq__37345_37700;
var G__37717 = chunk__37346_37701;
var G__37718 = count__37347_37702;
var G__37719 = (i__37348_37703 + (1));
seq__37345_37700 = G__37716;
chunk__37346_37701 = G__37717;
count__37347_37702 = G__37718;
i__37348_37703 = G__37719;
continue;
} else {
var temp__5804__auto___37720 = cljs.core.seq(seq__37345_37700);
if(temp__5804__auto___37720){
var seq__37345_37722__$1 = temp__5804__auto___37720;
if(cljs.core.chunked_seq_QMARK_(seq__37345_37722__$1)){
var c__5568__auto___37723 = cljs.core.chunk_first(seq__37345_37722__$1);
var G__37725 = cljs.core.chunk_rest(seq__37345_37722__$1);
var G__37726 = c__5568__auto___37723;
var G__37727 = cljs.core.count(c__5568__auto___37723);
var G__37728 = (0);
seq__37345_37700 = G__37725;
chunk__37346_37701 = G__37726;
count__37347_37702 = G__37727;
i__37348_37703 = G__37728;
continue;
} else {
var vec__37382_37729 = cljs.core.first(seq__37345_37722__$1);
var name_37730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37382_37729,(0),null);
var map__37385_37731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37382_37729,(1),null);
var map__37385_37732__$1 = cljs.core.__destructure_map(map__37385_37731);
var doc_37733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385_37732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385_37732__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37730], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37734], 0));

if(cljs.core.truth_(doc_37733)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37733], 0));
} else {
}


var G__37735 = cljs.core.next(seq__37345_37722__$1);
var G__37736 = null;
var G__37737 = (0);
var G__37738 = (0);
seq__37345_37700 = G__37735;
chunk__37346_37701 = G__37736;
count__37347_37702 = G__37737;
i__37348_37703 = G__37738;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37388 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37389 = null;
var count__37390 = (0);
var i__37391 = (0);
while(true){
if((i__37391 < count__37390)){
var role = chunk__37389.cljs$core$IIndexed$_nth$arity$2(null,i__37391);
var temp__5804__auto___37743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37743__$1)){
var spec_37744 = temp__5804__auto___37743__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37744)], 0));
} else {
}


var G__37745 = seq__37388;
var G__37746 = chunk__37389;
var G__37747 = count__37390;
var G__37748 = (i__37391 + (1));
seq__37388 = G__37745;
chunk__37389 = G__37746;
count__37390 = G__37747;
i__37391 = G__37748;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37388);
if(temp__5804__auto____$1){
var seq__37388__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37388__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37388__$1);
var G__37750 = cljs.core.chunk_rest(seq__37388__$1);
var G__37751 = c__5568__auto__;
var G__37752 = cljs.core.count(c__5568__auto__);
var G__37753 = (0);
seq__37388 = G__37750;
chunk__37389 = G__37751;
count__37390 = G__37752;
i__37391 = G__37753;
continue;
} else {
var role = cljs.core.first(seq__37388__$1);
var temp__5804__auto___37754__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37754__$2)){
var spec_37755 = temp__5804__auto___37754__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37755)], 0));
} else {
}


var G__37757 = cljs.core.next(seq__37388__$1);
var G__37758 = null;
var G__37759 = (0);
var G__37760 = (0);
seq__37388 = G__37757;
chunk__37389 = G__37758;
count__37390 = G__37759;
i__37391 = G__37760;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37769 = cljs.core.ex_cause(t);
via = G__37768;
t = G__37769;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37457 = datafied_throwable;
var map__37457__$1 = cljs.core.__destructure_map(map__37457);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37457__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37458 = cljs.core.last(via);
var map__37458__$1 = cljs.core.__destructure_map(map__37458);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37459 = data;
var map__37459__$1 = cljs.core.__destructure_map(map__37459);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37460 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37460__$1 = cljs.core.__destructure_map(map__37460);
var top_data = map__37460__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37487 = phase;
var G__37487__$1 = (((G__37487 instanceof cljs.core.Keyword))?G__37487.fqn:null);
switch (G__37487__$1) {
case "read-source":
var map__37494 = data;
var map__37494__$1 = cljs.core.__destructure_map(map__37494);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37500 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37500__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37500,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37500);
var G__37500__$2 = (cljs.core.truth_((function (){var fexpr__37505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37505.cljs$core$IFn$_invoke$arity$1 ? fexpr__37505.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37505.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37500__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37500__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37500__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37520 = top_data;
var G__37520__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37520,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37520);
var G__37520__$2 = (cljs.core.truth_((function (){var fexpr__37529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37529.cljs$core$IFn$_invoke$arity$1 ? fexpr__37529.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37529.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37520__$1);
var G__37520__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37520__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37520__$2);
var G__37520__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37520__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37520__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37543 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(3),null);
var G__37555 = top_data;
var G__37555__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37555);
var G__37555__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37555__$1);
var G__37555__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37555__$2);
var G__37555__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37555__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37555__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37555__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37555__$4;
}

break;
case "execution":
var vec__37571 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37442_SHARP_){
var or__5045__auto__ = (p1__37442_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37574 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37574.cljs$core$IFn$_invoke$arity$1 ? fexpr__37574.cljs$core$IFn$_invoke$arity$1(p1__37442_SHARP_) : fexpr__37574.call(null,p1__37442_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37579 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37579__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37579,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37579);
var G__37579__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37579__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37579__$1);
var G__37579__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37579__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37579__$2);
var G__37579__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37579__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37579__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37487__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37591){
var map__37594 = p__37591;
var map__37594__$1 = cljs.core.__destructure_map(map__37594);
var triage_data = map__37594__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37607 = phase;
var G__37607__$1 = (((G__37607 instanceof cljs.core.Keyword))?G__37607.fqn:null);
switch (G__37607__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37609 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37610 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37611 = loc;
var G__37612 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37613_37841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37614_37842 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37615_37843 = true;
var _STAR_print_fn_STAR__temp_val__37616_37844 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37615_37843);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37616_37844);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37586_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37586_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37614_37842);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37613_37841);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37609,G__37610,G__37611,G__37612) : format.call(null,G__37609,G__37610,G__37611,G__37612));

break;
case "macroexpansion":
var G__37628 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37629 = cause_type;
var G__37630 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37631 = loc;
var G__37632 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37628,G__37629,G__37630,G__37631,G__37632) : format.call(null,G__37628,G__37629,G__37630,G__37631,G__37632));

break;
case "compile-syntax-check":
var G__37635 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37636 = cause_type;
var G__37637 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37638 = loc;
var G__37639 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37635,G__37636,G__37637,G__37638,G__37639) : format.call(null,G__37635,G__37636,G__37637,G__37638,G__37639));

break;
case "compilation":
var G__37640 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37641 = cause_type;
var G__37642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37643 = loc;
var G__37644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37640,G__37641,G__37642,G__37643,G__37644) : format.call(null,G__37640,G__37641,G__37642,G__37643,G__37644));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37648 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37650 = symbol;
var G__37652 = loc;
var G__37653 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37656_37873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37657_37874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37658_37875 = true;
var _STAR_print_fn_STAR__temp_val__37659_37876 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37658_37875);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37659_37876);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37589_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37589_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37657_37874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37656_37873);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37648,G__37650,G__37652,G__37653) : format.call(null,G__37648,G__37650,G__37652,G__37653));
} else {
var G__37663 = "Execution error%s at %s(%s).\n%s\n";
var G__37664 = cause_type;
var G__37665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37666 = loc;
var G__37667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37663,G__37664,G__37665,G__37666,G__37667) : format.call(null,G__37663,G__37664,G__37665,G__37666,G__37667));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37607__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
