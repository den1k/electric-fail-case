goog.provide('lambdaisland.regal');
lambdaisland.regal.flavor_hierarchy = cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.derive.cljs$core$IFn$_invoke$arity$3(cljs.core.make_hierarchy(),new cljs.core.Keyword(null,"v-is-vertical-whitespace","v-is-vertical-whitespace",610675756),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"supports-ctrl","supports-ctrl",61882778),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"v-is-vertical-tab","v-is-vertical-tab",1000316616),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"a-is-alert","a-is-alert",-2036784169),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"e-is-escape","e-is-escape",1774170578),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"R-is-linebreak","R-is-linebreak",1844565783),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"flavor","flavor",-1331636636)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"supports-ctrl","supports-ctrl",61882778)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"a-is-alert","a-is-alert",-2036784169)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"e-is-escape","e-is-escape",1774170578)),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"v-is-vertical-whitespace","v-is-vertical-whitespace",610675756)),new cljs.core.Keyword(null,"ecma","ecma",-581159647),new cljs.core.Keyword(null,"flavor","flavor",-1331636636)),new cljs.core.Keyword(null,"ecma","ecma",-581159647),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"ecma","ecma",-581159647),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)),new cljs.core.Keyword(null,"ecma","ecma",-581159647),new cljs.core.Keyword(null,"supports-ctrl","supports-ctrl",61882778)),new cljs.core.Keyword(null,"ecma","ecma",-581159647),new cljs.core.Keyword(null,"v-is-vertical-tab","v-is-vertical-tab",1000316616)),new cljs.core.Keyword(null,"java8","java8",-200726920),new cljs.core.Keyword(null,"java","java",1958249105)),new cljs.core.Keyword(null,"java8","java8",-200726920),new cljs.core.Keyword(null,"R-is-linebreak","R-is-linebreak",1844565783)),new cljs.core.Keyword(null,"java9","java9",1680833218),new cljs.core.Keyword(null,"java","java",1958249105)),new cljs.core.Keyword(null,"re2","re2",-371281786),new cljs.core.Keyword(null,"flavor","flavor",-1331636636)),new cljs.core.Keyword(null,"re2","re2",-371281786),new cljs.core.Keyword(null,"common","common",-1822281391)),new cljs.core.Keyword(null,"re2","re2",-371281786),new cljs.core.Keyword(null,"v-is-vertical-tab","v-is-vertical-tab",1000316616)),new cljs.core.Keyword(null,"re2","re2",-371281786),new cljs.core.Keyword(null,"a-is-alert","a-is-alert",-2036784169));
/**
 * The regex flavor that the current runtime understands.
 */
lambdaisland.regal.runtime_flavor = (function lambdaisland$regal$runtime_flavor(){
return new cljs.core.Keyword(null,"ecma","ecma",-581159647);
});
lambdaisland.regal._STAR_flavor_STAR_ = lambdaisland.regal.runtime_flavor();
lambdaisland.regal._STAR_character_class_STAR_ = false;
lambdaisland.regal.current_flavor_QMARK_ = (function lambdaisland$regal$current_flavor_QMARK_(f){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(lambdaisland.regal.flavor_hierarchy,lambdaisland.regal._STAR_flavor_STAR_,f);
});
/**
 * Escape a regex pattern, so that, when compiled to a regex object, it will match
 *   all characters literally.
 */
lambdaisland.regal.escape = (function lambdaisland$regal$escape(s){
return clojure.string.replace(s,/([.*+?^${}()|\[\]\\])/,"\\$1");
});
lambdaisland.regal.grouped = (function lambdaisland$regal$grouped(r){
return cljs.core.with_meta((((((!((r == null))))?(((((r.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === r.cljs$core$IWithMeta$))))?true:(((!r.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,r):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,r)))?r:(new cljs.core.List(null,r,null,(1),null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),true], null));
});
lambdaisland.regal.left_pad = (function lambdaisland$regal$left_pad(s,len,pad){
return lambdaisland.regal.grouped(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len - cljs.core.count(s)),pad),s));
});
lambdaisland.regal.left_pad_str = (function lambdaisland$regal$left_pad_str(s,len,pad){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lambdaisland.regal.left_pad(s,len,pad));
});
lambdaisland.regal.quote_char_common = (function lambdaisland$regal$quote_char_common(ch){
if(cljs.core.int_QMARK_(ch)){
} else {
throw (new Error("Assert failed: (int? ch)"));
}

if((ch <= (255))){
return ["\\","x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.left_pad_str(lambdaisland.regal.platform.int__GT_hex(ch),(2),"0"))].join('');
} else {
if((ch <= (65535))){
return ["\\","u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.left_pad_str(lambdaisland.regal.platform.int__GT_hex(ch),(4),"0"))].join('');
} else {
return ["\\","x","{",lambdaisland.regal.platform.int__GT_hex(ch),"}"].join('');

}
}
});
lambdaisland.regal.quote_char_re2 = (function lambdaisland$regal$quote_char_re2(ch){
if(cljs.core.int_QMARK_(ch)){
} else {
throw (new Error("Assert failed: (int? ch)"));
}

if((ch < (256))){
return ["\\","x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.left_pad_str(lambdaisland.regal.platform.int__GT_hex(ch),(2),"0"))].join('');
} else {
return ["\\","x","{",lambdaisland.regal.platform.int__GT_hex(ch),"}"].join('');
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.regal !== 'undefined') && (typeof lambdaisland.regal.quote_char !== 'undefined')){
} else {
lambdaisland.regal.quote_char = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return lambdaisland.regal.flavor_hierarchy;},new cljs.core.Symbol("lambdaisland.regal","flavor-hierarchy","lambdaisland.regal/flavor-hierarchy",-1825547243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"lambdaisland.regal","lambdaisland.regal",996023907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Compile Regal syntax to regex patterns.\n\n     >>> (regex [:cat\n                 :start\n                 [:class [\\a \\z] [\\A \\Z] [\\0 \\9] \\_ \\-]\n                 \"@\"\n                 [:repeat [:class [\\0 \\9]] 3 5]\n                 [:* [:not \\.]]\n                 [:alt \"com\" \"org\" \"net\"]\n                 :end])\n     #\"\\A[a-zA-Z0-9_-]\\Q@\\E[0-9]{3,5}[^.]*(?:\\Qcom\\E|\\Qorg\\E|\\Qnet\\E)\\z\" "], null)),new cljs.core.Symbol(null,"flavor-hierarchy","flavor-hierarchy",112046080,null),"lambdaisland/regal.cljc",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(lambdaisland.regal.flavor_hierarchy)?lambdaisland.regal.flavor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60489 = cljs.core.get_global_hierarchy;
return (fexpr__60489.cljs$core$IFn$_invoke$arity$0 ? fexpr__60489.cljs$core$IFn$_invoke$arity$0() : fexpr__60489.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.regal","quote-char"),(function (ch){
return lambdaisland.regal._STAR_flavor_STAR_;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.regal.quote_char.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"common","common",-1822281391),(function (ch){
return lambdaisland.regal.quote_char_common(ch);
}));
lambdaisland.regal.quote_char.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"re2","re2",-371281786),(function (ch){
return lambdaisland.regal.quote_char_re2(ch);
}));
/**
 * These are characters with the Unicode whitespace property. In JavaScript these
 *   are all matched by \s, except for NEXT LINE and MONGOLIAN VOWEL SEPARATOR. In
 *   Java \s only matches the ASCII one. In Regal :whitespace emulates the
 *   JavaScript semantics of \s.
 */
lambdaisland.regal.whitespace_char_codes = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(32),(160),(5760),(8192),(8193),(8194),(8195),(8196),(8197),(8198),(8199),(8200),(8201),(8202),(8232),(8233),(8239),(8287),(12288)], null);
lambdaisland.regal.whitespace_chars_common = lambdaisland.regal.grouped(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.quote_char_common),lambdaisland.regal.whitespace_char_codes));
lambdaisland.regal.whitespace_chars_re2 = lambdaisland.regal.grouped(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.quote_char_re2),lambdaisland.regal.whitespace_char_codes));
/**
 * Character ranges that are not whitespace (the opposite of the above)
 */
lambdaisland.regal.non_whitespace_ranges_codes = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(31)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33),(159)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(161),(5759)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5761),(8191)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8203),(8231)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8234),(8238)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8240),(8286)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8288),(12287)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12289),(65535)], null)], null);
/**
 * Character ranges that are not whitespace (the opposite of the above)
 */
lambdaisland.regal.non_whitespace_ranges_common = lambdaisland.regal.grouped(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__60512){
var vec__60513 = p__60512;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60513,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60513,(1),null);
return [lambdaisland.regal.quote_char_common(from),"-",lambdaisland.regal.quote_char_common(to)].join('');
})),lambdaisland.regal.non_whitespace_ranges_codes));
/**
 * Character ranges that are not whitespace (the opposite of the above)
 */
lambdaisland.regal.non_whitespace_ranges_re2 = lambdaisland.regal.grouped(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__60530){
var vec__60532 = p__60530;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60532,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60532,(1),null);
return [lambdaisland.regal.quote_char_re2(from),"-",lambdaisland.regal.quote_char_re2(to)].join('');
})),lambdaisland.regal.non_whitespace_ranges_codes));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.regal !== 'undefined') && (typeof lambdaisland.regal.token__GT_ir !== 'undefined')){
} else {
lambdaisland.regal.token__GT_ir = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return lambdaisland.regal.flavor_hierarchy;},new cljs.core.Symbol("lambdaisland.regal","flavor-hierarchy","lambdaisland.regal/flavor-hierarchy",-1825547243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"lambdaisland.regal","lambdaisland.regal",996023907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Compile Regal syntax to regex patterns.\n\n     >>> (regex [:cat\n                 :start\n                 [:class [\\a \\z] [\\A \\Z] [\\0 \\9] \\_ \\-]\n                 \"@\"\n                 [:repeat [:class [\\0 \\9]] 3 5]\n                 [:* [:not \\.]]\n                 [:alt \"com\" \"org\" \"net\"]\n                 :end])\n     #\"\\A[a-zA-Z0-9_-]\\Q@\\E[0-9]{3,5}[^.]*(?:\\Qcom\\E|\\Qorg\\E|\\Qnet\\E)\\z\" "], null)),new cljs.core.Symbol(null,"flavor-hierarchy","flavor-hierarchy",112046080,null),"lambdaisland/regal.cljc",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(lambdaisland.regal.flavor_hierarchy)?lambdaisland.regal.flavor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60546 = cljs.core.get_global_hierarchy;
return (fexpr__60546.cljs$core$IFn$_invoke$arity$0 ? fexpr__60546.cljs$core$IFn$_invoke$arity$0() : fexpr__60546.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.regal","token->ir"),(function (token){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,lambdaisland.regal._STAR_flavor_STAR_], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (token){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized token: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.regal","unrecognized-token","lambdaisland.regal/unrecognized-token",-1108332719),token,new cljs.core.Keyword("lambdaisland.regal","flavor","lambdaisland.regal/flavor",539748983),lambdaisland.regal._STAR_flavor_STAR_], null));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "^";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "$";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return ".";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"re2","re2",-371281786)], null),(function (_){
return lambdaisland.regal.grouped("[^\\n\\r]");
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"digit","digit",1612650493),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\d";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-digit","non-digit",74334062),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\D";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\w";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-word","non-word",1456850320),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\W";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\n";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\r";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\t";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-feed","form-feed",-1036369155),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return "\\f";
}));
lambdaisland.regal.unsupported_operation_exception = (function lambdaisland$regal$unsupported_operation_exception(msg){
return (new Error(msg));
});
lambdaisland.regal.unsupported_operation = (function lambdaisland$regal$unsupported_operation(op){
throw lambdaisland.regal.unsupported_operation_exception([cljs.core.name(op)," is not supported by flavor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal._STAR_flavor_STAR_)].join(''));
});
lambdaisland.regal.assert_line_break_not_in_class = (function lambdaisland$regal$assert_line_break_not_in_class(){
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
throw lambdaisland.regal.unsupported_operation_exception(":line-break can not be used inside [:class] or [:not]");
} else {
return null;
}
});
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"R-is-linebreak","R-is-linebreak",1844565783)], null),(function (_){
lambdaisland.regal.assert_line_break_not_in_class();

return "\\R";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (_){
lambdaisland.regal.assert_line_break_not_in_class();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"(?:\\r\\n|(?!\\r\\n)[\\n-\\r",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.quote_char,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(133),(8232),(8233)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]",")"], null)));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
lambdaisland.regal.assert_line_break_not_in_class();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"(?:\\r\\n|[\\n-\\r",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.quote_char,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(133),(8232),(8233)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]",")"], null)));
}));
cljs.core.prefer_method(lambdaisland.regal.token__GT_ir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"common","common",-1822281391)], null));
cljs.core.prefer_method(lambdaisland.regal.token__GT_ir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"R-is-linebreak","R-is-linebreak",1844565783)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"a-is-alert","a-is-alert",-2036784169)], null),(function (_){
return "\\a";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return lambdaisland.regal.quote_char.cljs$core$IFn$_invoke$arity$1((7));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"e-is-escape","e-is-escape",1774170578)], null),(function (_){
return "\\e";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return lambdaisland.regal.quote_char.cljs$core$IFn$_invoke$arity$1((27));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical-whitespace","vertical-whitespace",1286103443),new cljs.core.Keyword(null,"v-is-vertical-whitespace","v-is-vertical-whitespace",610675756)], null),(function (_){
return "\\v";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical-whitespace","vertical-whitespace",1286103443),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
var chars = lambdaisland.regal.grouped(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\n\\f\\r"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.quote_char,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(133),(8232),(8233)], null))));
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
return chars;
} else {
return lambdaisland.regal.grouped(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,chars,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"]",null,(1),null))], 0)))));
}
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"java","java",1958249105)], null),(function (_){
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
return lambdaisland.regal.whitespace_chars_common;
} else {
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,lambdaisland.regal.whitespace_chars_common,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,292,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,292,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"re2","re2",-371281786)], null),(function (_){
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
return lambdaisland.regal.whitespace_chars_re2;
} else {
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,lambdaisland.regal.whitespace_chars_re2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,297,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,297,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,46,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-whitespace","non-whitespace",31883796),new cljs.core.Keyword(null,"java","java",1958249105)], null),(function (_){
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
return lambdaisland.regal.non_whitespace_ranges_common;
} else {
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,"^",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lambdaisland.regal.whitespace_chars_common,null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,305,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,305,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-whitespace","non-whitespace",31883796),new cljs.core.Keyword(null,"re2","re2",-371281786)], null),(function (_){
if(cljs.core.truth_(lambdaisland.regal._STAR_character_class_STAR_)){
return lambdaisland.regal.non_whitespace_ranges_re2;
} else {
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,"^",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lambdaisland.regal.whitespace_chars_re2,null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,313,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,313,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"ecma","ecma",-581159647)], null),(function (_){
return "\\s";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-whitespace","non-whitespace",31883796),new cljs.core.Keyword(null,"ecma","ecma",-581159647)], null),(function (_){
return "\\S";
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical-tab","vertical-tab",-1254901571),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return lambdaisland.regal.quote_char.cljs$core$IFn$_invoke$arity$1((11));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical-tab","vertical-tab",-1254901571),new cljs.core.Keyword(null,"v-is-vertical-tab","v-is-vertical-tab",1000316616)], null),(function (_){
return lambdaisland.regal.grouped("\\v");
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"null","null",-180137709),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (_){
return lambdaisland.regal.quote_char.cljs$core$IFn$_invoke$arity$1((0));
}));
lambdaisland.regal.token__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"null","null",-180137709),new cljs.core.Keyword(null,"ecma","ecma",-581159647)], null),(function (_){
return "\\0";
}));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.regal !== 'undefined') && (typeof lambdaisland.regal._regal__GT_ir !== 'undefined')){
} else {
lambdaisland.regal._regal__GT_ir = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return lambdaisland.regal.flavor_hierarchy;},new cljs.core.Symbol("lambdaisland.regal","flavor-hierarchy","lambdaisland.regal/flavor-hierarchy",-1825547243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"lambdaisland.regal","lambdaisland.regal",996023907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Compile Regal syntax to regex patterns.\n\n     >>> (regex [:cat\n                 :start\n                 [:class [\\a \\z] [\\A \\Z] [\\0 \\9] \\_ \\-]\n                 \"@\"\n                 [:repeat [:class [\\0 \\9]] 3 5]\n                 [:* [:not \\.]]\n                 [:alt \"com\" \"org\" \"net\"]\n                 :end])\n     #\"\\A[a-zA-Z0-9_-]\\Q@\\E[0-9]{3,5}[^.]*(?:\\Qcom\\E|\\Qorg\\E|\\Qnet\\E)\\z\" "], null)),new cljs.core.Symbol(null,"flavor-hierarchy","flavor-hierarchy",112046080,null),"lambdaisland/regal.cljc",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(lambdaisland.regal.flavor_hierarchy)?lambdaisland.regal.flavor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60649 = cljs.core.get_global_hierarchy;
return (fexpr__60649.cljs$core$IFn$_invoke$arity$0 ? fexpr__60649.cljs$core$IFn$_invoke$arity$0() : fexpr__60649.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.regal","-regal->ir"),(function (p__60654,opts){
var vec__60655 = p__60654;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60655,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,lambdaisland.regal._STAR_flavor_STAR_], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__60659,opts){
var vec__60661 = p__60659;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60661,(0),null);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(lambdaisland.regal.flavor_hierarchy,lambdaisland.regal._STAR_flavor_STAR_,new cljs.core.Keyword(null,"flavor","flavor",-1331636636))){
return lambdaisland.regal.unsupported_operation(op);
} else {
throw lambdaisland.regal.unsupported_operation_exception(["Unknown flavor: ",cljs.core.name(lambdaisland.regal._STAR_flavor_STAR_)].join(''));
}
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60669,opts){
var vec__60670 = p__60669;
var seq__60671 = cljs.core.seq(vec__60670);
var first__60672 = cljs.core.first(seq__60671);
var seq__60671__$1 = cljs.core.next(seq__60671);
var _ = first__60672;
var rs = seq__60671__$1;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60668_SHARP_){
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(p1__60668_SHARP_,opts) : lambdaisland.regal.regal__GT_ir.call(null,p1__60668_SHARP_,opts));
}),rs);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60677,opts){
var vec__60679 = p__60677;
var seq__60680 = cljs.core.seq(vec__60679);
var first__60681 = cljs.core.first(seq__60680);
var seq__60680__$1 = cljs.core.next(seq__60680);
var _ = first__60681;
var rs = seq__60680__$1;
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60676_SHARP_){
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(p1__60676_SHARP_,opts) : lambdaisland.regal.regal__GT_ir.call(null,p1__60676_SHARP_,opts));
}),rs));
}));
lambdaisland.regal.single_character_QMARK_ = (function lambdaisland$regal$single_character_QMARK_(s){
if(((typeof s === 'string') && ((cljs.core.count(s) <= (9))))){
var G__60691 = cljs.core.count(s);
switch (G__60691) {
case (1):
return true;

break;
case (2):
var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"\\\\");
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.re_find(/\\0[0-7]/,s);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.re_find(/\\[trnfaedDsSvwW]/,s);
}
}

break;
case (3):
var or__5045__auto__ = cljs.core.re_find(/\\0[0-7]{2}/,s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.re_find(/\\x[0-9a-zA-Z]{2}/,s);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.re_find(/\\c[A-Z]/,s);
}
}

break;
case (4):
return cljs.core.re_find(/\\0[0-3][0-7]{2}/,s);

break;
default:
if(lambdaisland.regal.current_flavor_QMARK_(new cljs.core.Keyword(null,"java","java",1958249105))){
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.re_find(/\\Q(.*)\\E/,s);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__60705 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(1),null);
return (lambdaisland.regal.single_character_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.regal.single_character_QMARK_.cljs$core$IFn$_invoke$arity$1(match) : lambdaisland.regal.single_character_QMARK_.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_find(/\\u[0-9a-zA-Z]{4}/,s);
}
} else {
return cljs.core.re_find(/^\\[xu]\{[\d{1,5}]\}$/,s);
}

}
} else {
return null;
}
});
lambdaisland.regal.quantifier__GT_ir = (function lambdaisland$regal$quantifier__GT_ir(q,rs,opts){
var rsg = (function (){var G__60714 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60715 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60714,G__60715) : lambdaisland.regal.regal__GT_ir.call(null,G__60714,G__60715));
})();
var rsg__$1 = ((cljs.core.seq_QMARK_(rsg))?(cljs.core.truth_(new cljs.core.Keyword("lambdaisland.regal","quantifier","lambdaisland.regal/quantifier",35733752).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsg)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(rsg,cljs.core.dissoc,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765)):rsg):(cljs.core.truth_(lambdaisland.regal.single_character_QMARK_(rsg))?rsg:(new cljs.core.List(null,rsg,null,(1),null))
));
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsg__$1,null,(1),null)),(new cljs.core.List(null,q,null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,388,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,388,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,40,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","quantifier","lambdaisland.regal/quantifier",35733752),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
});
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60723,opts){
var vec__60725 = p__60723;
var seq__60726 = cljs.core.seq(vec__60725);
var first__60727 = cljs.core.first(seq__60726);
var seq__60726__$1 = cljs.core.next(seq__60726);
var _ = first__60727;
var rs = seq__60726__$1;
return lambdaisland.regal.quantifier__GT_ir("*",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60728,opts){
var vec__60729 = p__60728;
var seq__60730 = cljs.core.seq(vec__60729);
var first__60731 = cljs.core.first(seq__60730);
var seq__60730__$1 = cljs.core.next(seq__60730);
var _ = first__60731;
var rs = seq__60730__$1;
return lambdaisland.regal.quantifier__GT_ir("+",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60734,opts){
var vec__60735 = p__60734;
var seq__60736 = cljs.core.seq(vec__60735);
var first__60737 = cljs.core.first(seq__60736);
var seq__60736__$1 = cljs.core.next(seq__60736);
var _ = first__60737;
var rs = seq__60736__$1;
return lambdaisland.regal.quantifier__GT_ir("?",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*?","*?",-1267174501),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60740,opts){
var vec__60741 = p__60740;
var seq__60742 = cljs.core.seq(vec__60741);
var first__60743 = cljs.core.first(seq__60742);
var seq__60742__$1 = cljs.core.next(seq__60742);
var _ = first__60743;
var rs = seq__60742__$1;
return lambdaisland.regal.quantifier__GT_ir("*?",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+?","+?",978724714),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60745,opts){
var vec__60746 = p__60745;
var seq__60747 = cljs.core.seq(vec__60746);
var first__60748 = cljs.core.first(seq__60747);
var seq__60747__$1 = cljs.core.next(seq__60747);
var _ = first__60748;
var rs = seq__60747__$1;
return lambdaisland.regal.quantifier__GT_ir("+?",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"??","??",1556538996),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60750,opts){
var vec__60751 = p__60750;
var seq__60752 = cljs.core.seq(vec__60751);
var first__60753 = cljs.core.first(seq__60752);
var seq__60752__$1 = cljs.core.next(seq__60752);
var _ = first__60753;
var rs = seq__60752__$1;
return lambdaisland.regal.quantifier__GT_ir("??",rs,opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60760,opts){
var vec__60761 = p__60760;
var seq__60762 = cljs.core.seq(vec__60761);
var first__60763 = cljs.core.first(seq__60762);
var seq__60762__$1 = cljs.core.next(seq__60762);
var _ = first__60763;
var first__60763__$1 = cljs.core.first(seq__60762__$1);
var seq__60762__$2 = cljs.core.next(seq__60762__$1);
var r = first__60763__$1;
var ns = seq__60762__$2;
return lambdaisland.regal.quantifier__GT_ir(cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"{",null,(1),null)),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,ns)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"}",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,409,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,20,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,409,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,68,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null),opts);
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lazy-repeat","lazy-repeat",-1434215756),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60774,opts){
var vec__60779 = p__60774;
var seq__60780 = cljs.core.seq(vec__60779);
var first__60781 = cljs.core.first(seq__60780);
var seq__60780__$1 = cljs.core.next(seq__60780);
var _ = first__60781;
var first__60781__$1 = cljs.core.first(seq__60780__$1);
var seq__60780__$2 = cljs.core.next(seq__60780__$1);
var r = first__60781__$1;
var ns = seq__60780__$2;
return lambdaisland.regal.quantifier__GT_ir(cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"{",null,(1),null)),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,ns)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,412,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,20,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,412,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,71,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null),opts);
}));
lambdaisland.regal.char_class_escape = (function lambdaisland$regal$char_class_escape(ch){
var ch__$1 = ch;
var G__60792 = ch__$1;
switch (G__60792) {
case "^":
return "\\^";

break;
case "]":
return "\\]";

break;
case "[":
return "\\[";

break;
case "\\":
return "\\\\";

break;
case "-":
return "\\-";

break;
case "&":
return "\\&";

break;
default:
return ch__$1;

}
});
lambdaisland.regal.compile_class = (function lambdaisland$regal$compile_class(cs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,c){
if(typeof c === 'string'){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(r,cljs.core.map.cljs$core$IFn$_invoke$arity$1(lambdaisland.regal.char_class_escape),c);
} else {
if(cljs.core.char_QMARK_(c)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,lambdaisland.regal.char_class_escape(c));
} else {
if(cljs.core.vector_QMARK_(c)){
if(cljs.core.truth_((function (){var G__60797 = cljs.core.first(c);
var fexpr__60796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null);
return (fexpr__60796.cljs$core$IFn$_invoke$arity$1 ? fexpr__60796.cljs$core$IFn$_invoke$arity$1(G__60797) : fexpr__60796.call(null,G__60797));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(function (){var G__60798 = c;
var G__60799 = cljs.core.PersistentArrayMap.EMPTY;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60798,G__60799) : lambdaisland.regal.regal__GT_ir.call(null,G__60798,G__60799));
})());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r,lambdaisland.regal.char_class_escape(cljs.core.first(c)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-",lambdaisland.regal.char_class_escape(cljs.core.second(c))], 0));
}
} else {
if((c instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,lambdaisland.regal.token__GT_ir.cljs$core$IFn$_invoke$arity$1(c));
} else {
return null;
}
}
}
}
}),cljs.core.PersistentVector.EMPTY,cs);
});
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60808,opts){
var vec__60813 = p__60808;
var seq__60814 = cljs.core.seq(vec__60813);
var first__60815 = cljs.core.first(seq__60814);
var seq__60814__$1 = cljs.core.next(seq__60814);
var _ = first__60815;
var cs = seq__60814__$1;
var _STAR_character_class_STAR__orig_val__60820 = lambdaisland.regal._STAR_character_class_STAR_;
var _STAR_character_class_STAR__temp_val__60821 = true;
(lambdaisland.regal._STAR_character_class_STAR_ = _STAR_character_class_STAR__temp_val__60821);

try{return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),lambdaisland.regal.compile_class(cs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,459,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,459,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,45,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}finally {(lambdaisland.regal._STAR_character_class_STAR_ = _STAR_character_class_STAR__orig_val__60820);
}}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60827,opts){
var vec__60828 = p__60827;
var seq__60829 = cljs.core.seq(vec__60828);
var first__60830 = cljs.core.first(seq__60829);
var seq__60829__$1 = cljs.core.next(seq__60829);
var _ = first__60830;
var cs = seq__60829__$1;
var _STAR_character_class_STAR__orig_val__60835 = lambdaisland.regal._STAR_character_class_STAR_;
var _STAR_character_class_STAR__temp_val__60836 = true;
(lambdaisland.regal._STAR_character_class_STAR_ = _STAR_character_class_STAR__temp_val__60836);

try{return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"[",null,(1),null)),(new cljs.core.List(null,"^",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.regal.compile_class(cs),(new cljs.core.List(null,"]",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,463,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,463,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,48,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}finally {(lambdaisland.regal._STAR_character_class_STAR_ = _STAR_character_class_STAR__orig_val__60835);
}}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",-677031143),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60839,opts){
var vec__60840 = p__60839;
var seq__60841 = cljs.core.seq(vec__60840);
var first__60842 = cljs.core.first(seq__60841);
var seq__60841__$1 = cljs.core.next(seq__60841);
var _ = first__60842;
var rs = seq__60841__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(function (){var G__60843 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60844 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60843,G__60844) : lambdaisland.regal.regal__GT_ir.call(null,G__60843,G__60844));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,466,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,466,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,58,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (p__60847,opts){
var vec__60848 = p__60847;
var seq__60849 = cljs.core.seq(vec__60848);
var first__60850 = cljs.core.first(seq__60849);
var seq__60849__$1 = cljs.core.next(seq__60849);
var _ = first__60850;
var rs = seq__60849__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"=",null,(1),null)),(function (){var G__60852 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60853 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60852,G__60853) : lambdaisland.regal.regal__GT_ir.call(null,G__60852,G__60853));
})(),(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,469,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,469,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,64,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (p__60869,opts){
var vec__60870 = p__60869;
var seq__60871 = cljs.core.seq(vec__60870);
var first__60872 = cljs.core.first(seq__60871);
var seq__60871__$1 = cljs.core.next(seq__60871);
var _ = first__60872;
var rs = seq__60871__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"!",null,(1),null)),(function (){var G__60873 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60874 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60873,G__60874) : lambdaisland.regal.regal__GT_ir.call(null,G__60873,G__60874));
})(),(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,472,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,472,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,64,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookbehind","lookbehind",1871576085),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (p__60878,opts){
var vec__60880 = p__60878;
var seq__60881 = cljs.core.seq(vec__60880);
var first__60882 = cljs.core.first(seq__60881);
var seq__60881__$1 = cljs.core.next(seq__60881);
var _ = first__60882;
var rs = seq__60881__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"<",null,(1),null)),(new cljs.core.List(null,"=",null,(1),null)),(function (){var G__60889 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60890 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60889,G__60890) : lambdaisland.regal.regal__GT_ir.call(null,G__60889,G__60890));
})(),(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,475,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,475,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,67,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"negative-lookbehind","negative-lookbehind",-1068090298),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (p__60898,opts){
var vec__60899 = p__60898;
var seq__60900 = cljs.core.seq(vec__60899);
var first__60901 = cljs.core.first(seq__60900);
var seq__60900__$1 = cljs.core.next(seq__60900);
var _ = first__60901;
var rs = seq__60900__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"<",null,(1),null)),(new cljs.core.List(null,"!",null,(1),null)),(function (){var G__60902 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60903 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60902,G__60903) : lambdaisland.regal.regal__GT_ir.call(null,G__60902,G__60903));
})(),(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,478,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,478,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,67,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"supports-lookaround","supports-lookaround",-102977485)], null),(function (p__60904,opts){
var vec__60905 = p__60904;
var seq__60906 = cljs.core.seq(vec__60905);
var first__60907 = cljs.core.first(seq__60906);
var seq__60906__$1 = cljs.core.next(seq__60906);
var _ = first__60907;
var rs = seq__60906__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,"?",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,">",null,(1),null)),(function (){var G__60908 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),rs);
var G__60909 = opts;
return (lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.regal.regal__GT_ir.cljs$core$IFn$_invoke$arity$2(G__60908,G__60909) : lambdaisland.regal.regal__GT_ir.call(null,G__60908,G__60909));
})(),(new cljs.core.List(null,")",null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,481,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,481,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,64,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60916,opts){
var vec__60917 = p__60916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60917,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60917,(1),null);
if(cljs.core.int_QMARK_(ch)){
} else {
throw (new Error("Assert failed: (int? ch)"));
}

return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,lambdaisland.regal.quote_char_common(ch),null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,485,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,485,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,40,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"supports-ctrl","supports-ctrl",61882778)], null),(function (p__60930,opts){
var vec__60931 = p__60930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60931,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60931,(1),null);
var ch__$1 = ((typeof ch === 'string')?cljs.core.first(ch):ch);
if((((lambdaisland.regal.platform.char__GT_long("A") <= lambdaisland.regal.platform.char__GT_long(ch__$1))) && ((lambdaisland.regal.platform.char__GT_long(ch__$1) <= lambdaisland.regal.platform.char__GT_long("Z"))))){
} else {
throw (new Error("Assert failed: (<= (platform/char->long \\A) (platform/char->long ch) (platform/char->long \\Z))"));
}

return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"\\",null,(1),null)),(new cljs.core.List(null,"c",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ch__$1,null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"lambdaisland/regal.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,490,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,6,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,490,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,28,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))));
}));
lambdaisland.regal._regal__GT_ir.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"common","common",-1822281391)], null),(function (p__60945,opts){
var vec__60946 = p__60945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60946,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60946,(1),null);
var ch_code = lambdaisland.regal.platform.char__GT_long(ch);
var ctrl_ch_code = ((ch_code - lambdaisland.regal.platform.char__GT_long("A")) + (1));
if((((lambdaisland.regal.platform.char__GT_long("A") <= ch_code)) && ((ch_code <= lambdaisland.regal.platform.char__GT_long("Z"))))){
} else {
throw (new Error("Assert failed: (<= (platform/char->long \\A) ch-code (platform/char->long \\Z))"));
}

return lambdaisland.regal.quote_char.cljs$core$IFn$_invoke$arity$1(ctrl_ch_code);
}));
/**
 * Convert a Regal expression into an intermediate representation,
 *   consisting of strings and nested lists, which when all concatenated together
 *   yield a regex string.
 * 
 *   A list can have the `::grouped` metadata, which indicates the regex it
 *   contains naturally introduces some kind of grouping.
 * 
 * 
 *    >>> (regal->ir "hello" {})
 *    "\Qhello\E"
 * 
 *    >>> (regal->ir [:cat "foo" "bar"] {})
 *    ("\Qfoo\E" "\Qbar\E")
 * 
 *    >>> (regal->ir [:class ["a" "z"]] {})
 *    ^::grouped (\[ "a" \- "z" \])
 */
lambdaisland.regal.regal__GT_ir = (function lambdaisland$regal$regal__GT_ir(r,p__60963){
while(true){
var map__60965 = p__60963;
var map__60965__$1 = cljs.core.__destructure_map(map__60965);
var opts = map__60965__$1;
var resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965__$1,new cljs.core.Keyword(null,"resolver","resolver",-1740553583));
if(typeof r === 'string'){
return lambdaisland.regal.escape(r);
} else {
if(cljs.core.char_QMARK_(r)){
return lambdaisland.regal.escape(r);
} else {
if(cljs.core.qualified_keyword_QMARK_(r)){
if(cljs.core.truth_(resolver)){
var temp__5802__auto__ = (resolver.cljs$core$IFn$_invoke$arity$1 ? resolver.cljs$core$IFn$_invoke$arity$1(r) : resolver.call(null,r));
if(cljs.core.truth_(temp__5802__auto__)){
var resolved = temp__5802__auto__;
var G__61403 = resolved;
var G__61404 = opts;
r = G__61403;
p__60963 = G__61404;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to resolve Regal Expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lambdaisland.regal","unresolved","lambdaisland.regal/unresolved",-1071991556),r], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Regal expression contains qualified keyword, but no resolver was specified.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lambdaisland.regal","no-resolver-for","lambdaisland.regal/no-resolver-for",1493951526),r], null));
}
} else {
if(cljs.core.simple_keyword_QMARK_(r)){
return lambdaisland.regal.token__GT_ir.cljs$core$IFn$_invoke$arity$1(r);
} else {
var g = lambdaisland.regal._regal__GT_ir.cljs$core$IFn$_invoke$arity$2(r,opts);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(g));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.next(g);
}
})())){
return g;
} else {
return cljs.core.first(g);
}

}
}
}
}
break;
}
});
lambdaisland.regal.grouped__GT_str_STAR_ = (function lambdaisland$regal$grouped__GT_str_STAR_(g){
if(((typeof g === 'string') || (cljs.core.char_QMARK_(g)))){
return g;
} else {
if(((cljs.core.seq_QMARK_(g)) || (cljs.core.vector_QMARK_(g)))){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.grouped__GT_str_STAR_,g));
if(cljs.core.truth_(new cljs.core.Keyword("lambdaisland.regal","grouped","lambdaisland.regal/grouped",2101179765).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(g)))){
return s;
} else {
return ["(?:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lambdaisland.regal","unrecognized-component","lambdaisland.regal/unrecognized-component",-970518994),g], null));

}
}
});
lambdaisland.regal.grouped__GT_str = (function lambdaisland$regal$grouped__GT_str(g){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.grouped__GT_str_STAR_,g));
});
/**
 * Is the given `form` a vector with the given `tag` as first element?
 */
lambdaisland.regal.tagged_form_QMARK_ = (function lambdaisland$regal$tagged_form_QMARK_(tag,form){
return ((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.first(form))));
});
lambdaisland.regal.join_strings = (function lambdaisland$regal$join_strings(v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v__$1,e){
if(((typeof cljs.core.last(v__$1) === 'string') && (typeof e === 'string'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(v__$1,(cljs.core.count(v__$1) - (1)),cljs.core.str,e);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,e);
}
}),cljs.core.PersistentVector.EMPTY,v);
});
lambdaisland.regal.splice_cats = (function lambdaisland$regal$splice_cats(p__61010){
var vec__61012 = p__61010;
var seq__61013 = cljs.core.seq(vec__61012);
var first__61014 = cljs.core.first(seq__61013);
var seq__61013__$1 = cljs.core.next(seq__61013);
var tag = first__61014;
var forms = seq__61013__$1;
var form = vec__61012;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat","repeat",832692087),tag);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lazy-repeat","lazy-repeat",-1434215756),tag);
if(and__5043__auto____$1){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.tagged_form_QMARK_,new cljs.core.Keyword(null,"cat","cat",-1457810207)),forms);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,f){
if(lambdaisland.regal.tagged_form_QMARK_(new cljs.core.Keyword(null,"cat","cat",-1457810207),f)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.next(f));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,f);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),forms);
} else {
return form;
}
});
/**
 * Returns a canonical, normalized version of a Regal form. Normalization is
 *   idempotent. This function is mostly here to allow us to do property-based
 *   testing on Regal itself, in particular we guarantee that for normalized form
 *   compiling to regex, then parsing again returns the same form. Might be useful
 *   for some other cases, e.g. if you want to memoize compiled regexes.
 * 
 *   Parsing generally returns canonical (normalized) forms, so there is no need to
 *   normalize the result of [[lambdaisland.regal.parse/parse]].
 * 
 *   - Turns characters into strings (Java)
 *   - removes unnecessary `[:cat ...]` groupings
 *   - removes single element `[:alt ...]` grouping
 *   - join consecutive strings
 *   - remove `[:class ...]` groups that only wrap a single character or token (keyword)
 *   - replace `:null` with `[:char 0]`
 *   - replace `[:not :whitespace]` with `:non-whitespace`
 */
lambdaisland.regal.normalize = (function lambdaisland$regal$normalize(form){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),form)){
return new cljs.core.Keyword(null,"non-whitespace","non-whitespace",31883796);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"null","null",-180137709),form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),(0)], null);
} else {
if(cljs.core.vector_QMARK_(form)){
if(((((lambdaisland.regal.tagged_form_QMARK_(new cljs.core.Keyword(null,"cat","cat",-1457810207),form)) || (lambdaisland.regal.tagged_form_QMARK_(new cljs.core.Keyword(null,"alt","alt",-3214426),form)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form))))){
var G__61432 = cljs.core.second(form);
form = G__61432;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = lambdaisland.regal.tagged_form_QMARK_(new cljs.core.Keyword(null,"class","class",-2030961996),form);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form));
if(and__5043__auto____$1){
var or__5045__auto__ = (cljs.core.second(form) instanceof cljs.core.Keyword);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return lambdaisland.regal.single_character_QMARK_(cljs.core.second(form));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var G__61438 = cljs.core.second(form);
form = G__61438;
continue;
} else {
if((cljs.core.first(form) instanceof cljs.core.Keyword)){
var form_SINGLEQUOTE_ = lambdaisland.regal.splice_cats(lambdaisland.regal.join_strings(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.normalize,form)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form_SINGLEQUOTE_,form)){
var G__61441 = form_SINGLEQUOTE_;
form = G__61441;
continue;
} else {
return form;
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lambdaisland.regal.normalize,form);

}
}
}
} else {
if(cljs.core.char_QMARK_(form)){
return form;
} else {
return form;

}
}
}
}
break;
}
});
/**
 * Regex to string, remove the slashes that JavaScript likes to add. This will
 *   drop any regex modifiers.
 */
lambdaisland.regal.regex_pattern = (function lambdaisland$regal$regex_pattern(r){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(r);
var len = s.lastIndexOf("/");
return clojure.string.replace(s.substring((1),len),"\\/","/");
});
/**
 * Compile a regex pattern (string) to a regex.
 */
lambdaisland.regal.compile = (function lambdaisland$regal$compile(s){
return (new RegExp(s));
});
/**
 * Convert a Regal form to a regex pattern as a string.
 */
lambdaisland.regal.pattern = (function lambdaisland$regal$pattern(var_args){
var G__61083 = arguments.length;
switch (G__61083) {
case 1:
return lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$1 = (function (form){
return lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$2(form,null);
}));

(lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$2 = (function (form,opts){
return lambdaisland.regal.grouped__GT_str(lambdaisland.regal.regal__GT_ir(form,opts));
}));

(lambdaisland.regal.pattern.cljs$lang$maxFixedArity = 2);

/**
 * Convert a Regal form into a platform-specific regex pattern object.
 * 
 *   Can take an options map:
 * 
 *   - `:resolver` a function/map used to resolve namespaced keywords inside Regal
 *   expressions.
 *   
 */
lambdaisland.regal.regex = (function lambdaisland$regal$regex(var_args){
var G__61091 = arguments.length;
switch (G__61091) {
case 1:
return lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$1 = (function (form){
return lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$2(form,null);
}));

(lambdaisland.regal.regex.cljs$core$IFn$_invoke$arity$2 = (function (form,p__61101){
var map__61102 = p__61101;
var map__61102__$1 = cljs.core.__destructure_map(map__61102);
var opts = map__61102__$1;
var resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61102__$1,new cljs.core.Keyword(null,"resolver","resolver",-1740553583));
return lambdaisland.regal.compile(lambdaisland.regal.pattern.cljs$core$IFn$_invoke$arity$2(form,opts));
}));

(lambdaisland.regal.regex.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=lambdaisland.regal.js.map
