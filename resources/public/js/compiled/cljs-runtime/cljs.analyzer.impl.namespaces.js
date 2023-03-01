goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__35777 = libspec;
var seq__35778 = cljs.core.seq(vec__35777);
var first__35779 = cljs.core.first(seq__35778);
var seq__35778__$1 = cljs.core.next(seq__35778);
var lib = first__35779;
var spec = seq__35778__$1;
var libspec__$1 = vec__35777;
var vec__35780 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(0),null);
var vec__35783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(1),null);
var seq__35784 = cljs.core.seq(vec__35783);
var first__35785 = cljs.core.first(seq__35784);
var seq__35784__$1 = cljs.core.next(seq__35784);
var _ = first__35785;
var first__35785__$1 = cljs.core.first(seq__35784__$1);
var seq__35784__$2 = cljs.core.next(seq__35784__$1);
var alias = first__35785__$1;
var post_spec = seq__35784__$2;
var post = vec__35783;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__35787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35787,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__35787;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__35797 = cljs.core.seq(new_as_aliases);
var chunk__35798 = null;
var count__35799 = (0);
var i__35800 = (0);
while(true){
if((i__35800 < count__35799)){
var vec__35820 = chunk__35798.cljs$core$IIndexed$_nth$arity$2(null,i__35800);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__35916 = seq__35797;
var G__35917 = chunk__35798;
var G__35918 = count__35799;
var G__35919 = (i__35800 + (1));
seq__35797 = G__35916;
chunk__35798 = G__35917;
count__35799 = G__35918;
i__35800 = G__35919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35797);
if(temp__5804__auto__){
var seq__35797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35797__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35797__$1);
var G__35926 = cljs.core.chunk_rest(seq__35797__$1);
var G__35927 = c__5568__auto__;
var G__35928 = cljs.core.count(c__5568__auto__);
var G__35929 = (0);
seq__35797 = G__35926;
chunk__35798 = G__35927;
count__35799 = G__35928;
i__35800 = G__35929;
continue;
} else {
var vec__35836 = cljs.core.first(seq__35797__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35836,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35836,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__35935 = cljs.core.next(seq__35797__$1);
var G__35936 = null;
var G__35937 = (0);
var G__35938 = (0);
seq__35797 = G__35935;
chunk__35798 = G__35936;
count__35799 = G__35937;
i__35800 = G__35938;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__35852 = arguments.length;
switch (G__35852) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__35861 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__35864 = ret__$1;
var G__35864__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__35864,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__35864);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__35864__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__35864__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__35874,p__35875){
var map__35877 = p__35874;
var map__35877__$1 = cljs.core.__destructure_map(map__35877);
var ret__$1 = map__35877__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__35878 = p__35875;
var seq__35879 = cljs.core.seq(vec__35878);
var first__35880 = cljs.core.first(seq__35879);
var seq__35879__$1 = cljs.core.next(seq__35879);
var spec_key = first__35880;
var libspecs = seq__35879__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__35884 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__35884__$1 = cljs.core.__destructure_map(map__35884);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__35886 = ret__$1;
var G__35886__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__35886,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__35886);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__35886__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__35886__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
