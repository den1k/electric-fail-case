goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__64406__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__64406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64407__i = 0, G__64407__a = new Array(arguments.length -  0);
while (G__64407__i < G__64407__a.length) {G__64407__a[G__64407__i] = arguments[G__64407__i + 0]; ++G__64407__i;}
  args = new cljs.core.IndexedSeq(G__64407__a,0,null);
} 
return G__64406__delegate.call(this,args);};
G__64406.cljs$lang$maxFixedArity = 0;
G__64406.cljs$lang$applyTo = (function (arglist__64408){
var args = cljs.core.seq(arglist__64408);
return G__64406__delegate(args);
});
G__64406.cljs$core$IFn$_invoke$arity$variadic = G__64406__delegate;
return G__64406;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64409 = arguments.length;
var i__5770__auto___64410 = (0);
while(true){
if((i__5770__auto___64410 < len__5769__auto___64409)){
args__5775__auto__.push((arguments[i__5770__auto___64410]));

var G__64411 = (i__5770__auto___64410 + (1));
i__5770__auto___64410 = G__64411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq63815){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63815));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__63821 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63822 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__63821,G__63822) : com.rpl.specter.compiled_select.call(null,G__63821,G__63822));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__63823 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63824 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__63823,G__63824) : com.rpl.specter.compiled_select_one.call(null,G__63823,G__63824));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__63827 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63828 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__63827,G__63828) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__63827,G__63828));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__63830 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63831 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__63830,G__63831) : com.rpl.specter.compiled_select_first.call(null,G__63830,G__63831));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__63834 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63835 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__63834,G__63835) : com.rpl.specter.compiled_select_any.call(null,G__63834,G__63835));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__63841 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63842 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__63841,G__63842) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__63841,G__63842));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__63844 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__63845 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__63844,G__63845) : com.rpl.specter.compiled_traverse.call(null,G__63844,G__63845));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__63846 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__63846) : com.rpl.specter.compiled_traverse_all.call(null,G__63846));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__63851 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63852 = transform_fn;
var G__63853 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__63851,G__63852,G__63853) : com.rpl.specter.compiled_transform.call(null,G__63851,G__63852,G__63853));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__63854 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63855 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__63854,G__63855) : com.rpl.specter.compiled_multi_transform.call(null,G__63854,G__63855));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__63859 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63860 = val;
var G__63861 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__63859,G__63860,G__63861) : com.rpl.specter.compiled_setval.call(null,G__63859,G__63860,G__63861));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64416 = arguments.length;
var i__5770__auto___64417 = (0);
while(true){
if((i__5770__auto___64417 < len__5769__auto___64416)){
args__5775__auto__.push((arguments[i__5770__auto___64417]));

var G__64418 = (i__5770__auto___64417 + (1));
i__5770__auto___64417 = G__64418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__63870){
var map__63871 = p__63870;
var map__63871__$1 = cljs.core.__destructure_map(map__63871);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63871__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__63873 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__63874 = transform_fn;
var G__63875 = structure;
var G__63876 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__63877 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__63873,G__63874,G__63875,G__63876,G__63877) : com.rpl.specter.compiled_replace_in.call(null,G__63873,G__63874,G__63875,G__63876,G__63877));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq63864){
var G__63865 = cljs.core.first(seq63864);
var seq63864__$1 = cljs.core.next(seq63864);
var G__63866 = cljs.core.first(seq63864__$1);
var seq63864__$2 = cljs.core.next(seq63864__$1);
var G__63867 = cljs.core.first(seq63864__$2);
var seq63864__$3 = cljs.core.next(seq63864__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63865,G__63866,G__63867,seq63864__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64420__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__64420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64421__i = 0, G__64421__a = new Array(arguments.length -  0);
while (G__64421__i < G__64421__a.length) {G__64421__a[G__64421__i] = arguments[G__64421__i + 0]; ++G__64421__i;}
  args = new cljs.core.IndexedSeq(G__64421__a,0,null);
} 
return G__64420__delegate.call(this,args);};
G__64420.cljs$lang$maxFixedArity = 0;
G__64420.cljs$lang$applyTo = (function (arglist__64422){
var args = cljs.core.seq(arglist__64422);
return G__64420__delegate(args);
});
G__64420.cljs$core$IFn$_invoke$arity$variadic = G__64420__delegate;
return G__64420;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63881 = (function (meta63882){
this.meta63882 = meta63882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63883,meta63882__$1){
var self__ = this;
var _63883__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63881(meta63882__$1));
}));

(com.rpl.specter.t_com$rpl$specter63881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63883){
var self__ = this;
var _63883__$1 = this;
return self__.meta63882;
}));

(com.rpl.specter.t_com$rpl$specter63881.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63881.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter63881.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter63881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63882","meta63882",-2002770455,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63881.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63881.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63881");

(com.rpl.specter.t_com$rpl$specter63881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63881");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63881.
 */
com.rpl.specter.__GT_t_com$rpl$specter63881 = (function com$rpl$specter$__GT_t_com$rpl$specter63881(meta63882){
return (new com.rpl.specter.t_com$rpl$specter63881(meta63882));
});




com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter63881(null));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63890 = (function (afn,meta63891){
this.afn = afn;
this.meta63891 = meta63891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63892,meta63891__$1){
var self__ = this;
var _63892__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63890(self__.afn,meta63891__$1));
}));

(com.rpl.specter.t_com$rpl$specter63890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63892){
var self__ = this;
var _63892__$1 = this;
return self__.meta63891;
}));

(com.rpl.specter.t_com$rpl$specter63890.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63890.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter63890.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter63890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta63891","meta63891",-165481829,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63890.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63890.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63890");

(com.rpl.specter.t_com$rpl$specter63890.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63890");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63890.
 */
com.rpl.specter.__GT_t_com$rpl$specter63890 = (function com$rpl$specter$__GT_t_com$rpl$specter63890(afn,meta63891){
return (new com.rpl.specter.t_com$rpl$specter63890(afn,meta63891));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter63890(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63898 = (function (afn,meta63899){
this.afn = afn;
this.meta63899 = meta63899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63900,meta63899__$1){
var self__ = this;
var _63900__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63898(self__.afn,meta63899__$1));
}));

(com.rpl.specter.t_com$rpl$specter63898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63900){
var self__ = this;
var _63900__$1 = this;
return self__.meta63899;
}));

(com.rpl.specter.t_com$rpl$specter63898.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63898.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter63898.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter63898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta63899","meta63899",-398875975,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63898.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63898.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63898");

(com.rpl.specter.t_com$rpl$specter63898.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63898");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63898.
 */
com.rpl.specter.__GT_t_com$rpl$specter63898 = (function com$rpl$specter$__GT_t_com$rpl$specter63898(afn,meta63899){
return (new com.rpl.specter.t_com$rpl$specter63898(afn,meta63899));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter63898(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__63907 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__63907) : com.rpl.specter.terminal.call(null,G__63907));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63910 = (function (meta63911){
this.meta63911 = meta63911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63912,meta63911__$1){
var self__ = this;
var _63912__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63910(meta63911__$1));
}));

(com.rpl.specter.t_com$rpl$specter63910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63912){
var self__ = this;
var _63912__$1 = this;
return self__.meta63911;
}));

(com.rpl.specter.t_com$rpl$specter63910.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63910.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63910.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63911","meta63911",-364397827,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63910.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63910.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63910");

(com.rpl.specter.t_com$rpl$specter63910.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63910");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63910.
 */
com.rpl.specter.__GT_t_com$rpl$specter63910 = (function com$rpl$specter$__GT_t_com$rpl$specter63910(meta63911){
return (new com.rpl.specter.t_com$rpl$specter63910(meta63911));
});




com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter63910(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63921 = (function (meta63922){
this.meta63922 = meta63922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63923,meta63922__$1){
var self__ = this;
var _63923__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63921(meta63922__$1));
}));

(com.rpl.specter.t_com$rpl$specter63921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63923){
var self__ = this;
var _63923__$1 = this;
return self__.meta63922;
}));

(com.rpl.specter.t_com$rpl$specter63921.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63921.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63921.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter63921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63922","meta63922",-1594022986,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63921.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63921.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63921");

(com.rpl.specter.t_com$rpl$specter63921.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63921");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63921.
 */
com.rpl.specter.__GT_t_com$rpl$specter63921 = (function com$rpl$specter$__GT_t_com$rpl$specter63921(meta63922){
return (new com.rpl.specter.t_com$rpl$specter63921(meta63922));
});




com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter63921(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63937 = (function (meta63938){
this.meta63938 = meta63938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63939,meta63938__$1){
var self__ = this;
var _63939__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63937(meta63938__$1));
}));

(com.rpl.specter.t_com$rpl$specter63937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63939){
var self__ = this;
var _63939__$1 = this;
return self__.meta63938;
}));

(com.rpl.specter.t_com$rpl$specter63937.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63937.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,v){
var ret__33527__auto__ = next_fn(v);
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter63937.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63938","meta63938",-155611249,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63937.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63937.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63937");

(com.rpl.specter.t_com$rpl$specter63937.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63937");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63937.
 */
com.rpl.specter.__GT_t_com$rpl$specter63937 = (function com$rpl$specter$__GT_t_com$rpl$specter63937(meta63938){
return (new com.rpl.specter.t_com$rpl$specter63937(meta63938));
});




com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,v){
var ret__33527__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter63937(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63946 = (function (meta63947){
this.meta63947 = meta63947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63948,meta63947__$1){
var self__ = this;
var _63948__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63946(meta63947__$1));
}));

(com.rpl.specter.t_com$rpl$specter63946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63948){
var self__ = this;
var _63948__$1 = this;
return self__.meta63947;
}));

(com.rpl.specter.t_com$rpl$specter63946.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63946.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,k){
var ret__33527__auto__ = next_fn(k);
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter63946.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63947","meta63947",-2077925517,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63946.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63946.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63946");

(com.rpl.specter.t_com$rpl$specter63946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63946");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63946.
 */
com.rpl.specter.__GT_t_com$rpl$specter63946 = (function com$rpl$specter$__GT_t_com$rpl$specter63946(meta63947){
return (new com.rpl.specter.t_com$rpl$specter63946(meta63947));
});




com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,k){
var ret__33527__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter63946(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63956 = (function (meta63957){
this.meta63957 = meta63957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63958,meta63957__$1){
var self__ = this;
var _63958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63956(meta63957__$1));
}));

(com.rpl.specter.t_com$rpl$specter63956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63958){
var self__ = this;
var _63958__$1 = this;
return self__.meta63957;
}));

(com.rpl.specter.t_com$rpl$specter63956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__63962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,structure);
var G__63963 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__63962,G__63963) : next_fn__35270__auto__.call(null,G__63962,G__63963));
}));

(com.rpl.specter.t_com$rpl$specter63956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__63964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,structure);
var G__63965 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__63964,G__63965) : next_fn__35270__auto__.call(null,G__63964,G__63965));
}));

(com.rpl.specter.t_com$rpl$specter63956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63957","meta63957",2098027929,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63956.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63956");

(com.rpl.specter.t_com$rpl$specter63956.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63956");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63956.
 */
com.rpl.specter.__GT_t_com$rpl$specter63956 = (function com$rpl$specter$__GT_t_com$rpl$specter63956(meta63957){
return (new com.rpl.specter.t_com$rpl$specter63956(meta63957));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter63956(null));
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter63983 = (function (start_index_fn,end_index_fn,meta63984){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta63984 = meta63984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter63983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63985,meta63984__$1){
var self__ = this;
var _63985__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter63983(self__.start_index_fn,self__.end_index_fn,meta63984__$1));
}));

(com.rpl.specter.t_com$rpl$specter63983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63985){
var self__ = this;
var _63985__$1 = this;
return self__.meta63984;
}));

(com.rpl.specter.t_com$rpl$specter63983.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter63983.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter63983.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__63992 = structure;
var G__63993 = s;
var G__63994 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__63995 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__63992,G__63993,G__63994,G__63995) : com.rpl.specter.navs.srange_transform.call(null,G__63992,G__63993,G__63994,G__63995));
}));

(com.rpl.specter.t_com$rpl$specter63983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta63984","meta63984",787781567,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter63983.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter63983.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter63983");

(com.rpl.specter.t_com$rpl$specter63983.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter63983");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter63983.
 */
com.rpl.specter.__GT_t_com$rpl$specter63983 = (function com$rpl$specter$__GT_t_com$rpl$specter63983(start_index_fn,end_index_fn,meta63984){
return (new com.rpl.specter.t_com$rpl$specter63983(start_index_fn,end_index_fn,meta63984));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__63976 = structure;
var G__63977 = s;
var G__63978 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__63979 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__63976,G__63977,G__63978,G__63979) : com.rpl.specter.navs.srange_transform.call(null,G__63976,G__63977,G__63978,G__63979));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter63983(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64023 = (function (start,end,meta64024){
this.start = start;
this.end = end;
this.meta64024 = meta64024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64025,meta64024__$1){
var self__ = this;
var _64025__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64023(self__.start,self__.end,meta64024__$1));
}));

(com.rpl.specter.t_com$rpl$specter64023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64025){
var self__ = this;
var _64025__$1 = this;
return self__.meta64024;
}));

(com.rpl.specter.t_com$rpl$specter64023.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64023.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64023.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter64023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta64024","meta64024",-1713023204,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64023.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64023.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64023");

(com.rpl.specter.t_com$rpl$specter64023.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64023");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64023.
 */
com.rpl.specter.__GT_t_com$rpl$specter64023 = (function com$rpl$specter$__GT_t_com$rpl$specter64023(start,end,meta64024){
return (new com.rpl.specter.t_com$rpl$specter64023(start,end,meta64024));
});




com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
return (new com.rpl.specter.t_com$rpl$specter64023(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64036 = (function (pred,meta64037){
this.pred = pred;
this.meta64037 = meta64037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64038,meta64037__$1){
var self__ = this;
var _64038__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64036(self__.pred,meta64037__$1));
}));

(com.rpl.specter.t_com$rpl$specter64036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64038){
var self__ = this;
var _64038__$1 = this;
return self__.meta64037;
}));

(com.rpl.specter.t_com$rpl$specter64036.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64036.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,p__64043){
var vec__64044 = p__64043;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64044,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64044,(1),null);
var ret__33527__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter64036.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta64037","meta64037",-1965473430,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64036.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64036.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64036");

(com.rpl.specter.t_com$rpl$specter64036.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64036");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64036.
 */
com.rpl.specter.__GT_t_com$rpl$specter64036 = (function com$rpl$specter$__GT_t_com$rpl$specter64036(pred,meta64037){
return (new com.rpl.specter.t_com$rpl$specter64036(pred,meta64037));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,p__64031){
var vec__64032 = p__64031;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64032,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64032,(1),null);
var ret__33527__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
return (new com.rpl.specter.t_com$rpl$specter64036(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64056 = (function (meta64057){
this.meta64057 = meta64057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64058,meta64057__$1){
var self__ = this;
var _64058__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64056(meta64057__$1));
}));

(com.rpl.specter.t_com$rpl$specter64056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64058){
var self__ = this;
var _64058__$1 = this;
return self__.meta64057;
}));

(com.rpl.specter.t_com$rpl$specter64056.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64056.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter64056.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter64056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64057","meta64057",-797758120,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64056.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64056.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64056");

(com.rpl.specter.t_com$rpl$specter64056.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64056");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64056.
 */
com.rpl.specter.__GT_t_com$rpl$specter64056 = (function com$rpl$specter$__GT_t_com$rpl$specter64056(meta64057){
return (new com.rpl.specter.t_com$rpl$specter64056(meta64057));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__64054 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64054) : next_fn.call(null,G__64054));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__64055 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64055) : next_fn.call(null,G__64055));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter64056(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64073 = (function (meta64074){
this.meta64074 = meta64074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64075,meta64074__$1){
var self__ = this;
var _64075__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64073(meta64074__$1));
}));

(com.rpl.specter.t_com$rpl$specter64073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64075){
var self__ = this;
var _64075__$1 = this;
return self__.meta64074;
}));

(com.rpl.specter.t_com$rpl$specter64073.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64073.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter64073.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter64073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64074","meta64074",526228709,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64073.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64073.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64073");

(com.rpl.specter.t_com$rpl$specter64073.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64073");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64073.
 */
com.rpl.specter.__GT_t_com$rpl$specter64073 = (function com$rpl$specter$__GT_t_com$rpl$specter64073(meta64074){
return (new com.rpl.specter.t_com$rpl$specter64073(meta64074));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__64071 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64071) : next_fn.call(null,G__64071));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__64072 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64072) : next_fn.call(null,G__64072));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter64073(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64082 = (function (meta64083){
this.meta64083 = meta64083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64084,meta64083__$1){
var self__ = this;
var _64084__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64082(meta64083__$1));
}));

(com.rpl.specter.t_com$rpl$specter64082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64084){
var self__ = this;
var _64084__$1 = this;
return self__.meta64083;
}));

(com.rpl.specter.t_com$rpl$specter64082.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64082.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter64082.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter64082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64083","meta64083",-1308550715,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64082.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64082.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64082");

(com.rpl.specter.t_com$rpl$specter64082.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64082");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64082.
 */
com.rpl.specter.__GT_t_com$rpl$specter64082 = (function com$rpl$specter$__GT_t_com$rpl$specter64082(meta64083){
return (new com.rpl.specter.t_com$rpl$specter64082(meta64083));
});




com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter64082(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64090 = (function (meta64091){
this.meta64091 = meta64091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64092,meta64091__$1){
var self__ = this;
var _64092__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64090(meta64091__$1));
}));

(com.rpl.specter.t_com$rpl$specter64090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64092){
var self__ = this;
var _64092__$1 = this;
return self__.meta64091;
}));

(com.rpl.specter.t_com$rpl$specter64090.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64090.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter64090.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter64090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64091","meta64091",-1566144582,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64090.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64090.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64090");

(com.rpl.specter.t_com$rpl$specter64090.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64090");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64090.
 */
com.rpl.specter.__GT_t_com$rpl$specter64090 = (function com$rpl$specter$__GT_t_com$rpl$specter64090(meta64091){
return (new com.rpl.specter.t_com$rpl$specter64090(meta64091));
});




com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter64090(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64102 = (function (meta64103){
this.meta64103 = meta64103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64104,meta64103__$1){
var self__ = this;
var _64104__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64102(meta64103__$1));
}));

(com.rpl.specter.t_com$rpl$specter64102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64104){
var self__ = this;
var _64104__$1 = this;
return self__.meta64103;
}));

(com.rpl.specter.t_com$rpl$specter64102.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64102.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter64102.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter64102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64103","meta64103",-889016808,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64102.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64102.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64102");

(com.rpl.specter.t_com$rpl$specter64102.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64102");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64102.
 */
com.rpl.specter.__GT_t_com$rpl$specter64102 = (function com$rpl$specter$__GT_t_com$rpl$specter64102(meta64103){
return (new com.rpl.specter.t_com$rpl$specter64102(meta64103));
});




com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter64102(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64126 = (function (aset,meta64127){
this.aset = aset;
this.meta64127 = meta64127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64128,meta64127__$1){
var self__ = this;
var _64128__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64126(self__.aset,meta64127__$1));
}));

(com.rpl.specter.t_com$rpl$specter64126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64128){
var self__ = this;
var _64128__$1 = this;
return self__.meta64127;
}));

(com.rpl.specter.t_com$rpl$specter64126.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64126.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter64126.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter64126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta64127","meta64127",-1004739835,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64126.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64126.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64126");

(com.rpl.specter.t_com$rpl$specter64126.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64126");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64126.
 */
com.rpl.specter.__GT_t_com$rpl$specter64126 = (function com$rpl$specter$__GT_t_com$rpl$specter64126(aset,meta64127){
return (new com.rpl.specter.t_com$rpl$specter64126(aset,meta64127));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__64121 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64121) : next_fn.call(null,G__64121));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
return (new com.rpl.specter.t_com$rpl$specter64126(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64148 = (function (m_keys,meta64149){
this.m_keys = m_keys;
this.meta64149 = meta64149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64150,meta64149__$1){
var self__ = this;
var _64150__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64148(self__.m_keys,meta64149__$1));
}));

(com.rpl.specter.t_com$rpl$specter64148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64150){
var self__ = this;
var _64150__$1 = this;
return self__.meta64149;
}));

(com.rpl.specter.t_com$rpl$specter64148.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64148.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter64148.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter64148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta64149","meta64149",-278763429,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64148.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64148.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64148");

(com.rpl.specter.t_com$rpl$specter64148.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64148");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64148.
 */
com.rpl.specter.__GT_t_com$rpl$specter64148 = (function com$rpl$specter$__GT_t_com$rpl$specter64148(m_keys,meta64149){
return (new com.rpl.specter.t_com$rpl$specter64148(m_keys,meta64149));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__64144 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64144) : next_fn.call(null,G__64144));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
return (new com.rpl.specter.t_com$rpl$specter64148(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64161 = (function (path,late,meta64162){
this.path = path;
this.late = late;
this.meta64162 = meta64162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64163,meta64162__$1){
var self__ = this;
var _64163__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64161(self__.path,self__.late,meta64162__$1));
}));

(com.rpl.specter.t_com$rpl$specter64161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64163){
var self__ = this;
var _64163__$1 = this;
return self__.meta64162;
}));

(com.rpl.specter.t_com$rpl$specter64161.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64161.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter64161.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__64167 = self__.late;
var G__64168 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__64169 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__64167,G__64168,G__64169) : com.rpl.specter.compiled_transform.call(null,G__64167,G__64168,G__64169));
}));

(com.rpl.specter.t_com$rpl$specter64161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64162","meta64162",1563522186,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64161.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64161.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64161");

(com.rpl.specter.t_com$rpl$specter64161.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64161");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64161.
 */
com.rpl.specter.__GT_t_com$rpl$specter64161 = (function com$rpl$specter$__GT_t_com$rpl$specter64161(path,late,meta64162){
return (new com.rpl.specter.t_com$rpl$specter64161(path,late,meta64162));
});


/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64461__delegate = function (path){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64161(path,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
};
var G__64461 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64462__i = 0, G__64462__a = new Array(arguments.length -  0);
while (G__64462__i < G__64462__a.length) {G__64462__a[G__64462__i] = arguments[G__64462__i + 0]; ++G__64462__i;}
  path = new cljs.core.IndexedSeq(G__64462__a,0,null);
} 
return G__64461__delegate.call(this,path);};
G__64461.cljs$lang$maxFixedArity = 0;
G__64461.cljs$lang$applyTo = (function (arglist__64463){
var path = cljs.core.seq(arglist__64463);
return G__64461__delegate(path);
});
G__64461.cljs$core$IFn$_invoke$arity$variadic = G__64461__delegate;
return G__64461;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64177 = (function (key,meta64178){
this.key = key;
this.meta64178 = meta64178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64179,meta64178__$1){
var self__ = this;
var _64179__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64177(self__.key,meta64178__$1));
}));

(com.rpl.specter.t_com$rpl$specter64177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64179){
var self__ = this;
var _64179__$1 = this;
return self__.meta64178;
}));

(com.rpl.specter.t_com$rpl$specter64177.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64177.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter64177.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter64177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta64178","meta64178",1824860024,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64177.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64177.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64177");

(com.rpl.specter.t_com$rpl$specter64177.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64177");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64177.
 */
com.rpl.specter.__GT_t_com$rpl$specter64177 = (function com$rpl$specter$__GT_t_com$rpl$specter64177(key,meta64178){
return (new com.rpl.specter.t_com$rpl$specter64177(key,meta64178));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter64177(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64186 = (function (elem,meta64187){
this.elem = elem;
this.meta64187 = meta64187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64188,meta64187__$1){
var self__ = this;
var _64188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64186(self__.elem,meta64187__$1));
}));

(com.rpl.specter.t_com$rpl$specter64186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64188){
var self__ = this;
var _64188__$1 = this;
return self__.meta64187;
}));

(com.rpl.specter.t_com$rpl$specter64186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter64186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter64186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta64187","meta64187",1185661370,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64186.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64186");

(com.rpl.specter.t_com$rpl$specter64186.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64186");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64186.
 */
com.rpl.specter.__GT_t_com$rpl$specter64186 = (function com$rpl$specter$__GT_t_com$rpl$specter64186(elem,meta64187){
return (new com.rpl.specter.t_com$rpl$specter64186(elem,meta64187));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter64186(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64198 = (function (index,meta64199){
this.index = index;
this.meta64199 = meta64199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64200,meta64199__$1){
var self__ = this;
var _64200__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64198(self__.index,meta64199__$1));
}));

(com.rpl.specter.t_com$rpl$specter64198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64200){
var self__ = this;
var _64200__$1 = this;
return self__.meta64199;
}));

(com.rpl.specter.t_com$rpl$specter64198.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64198.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter64198.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter64198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta64199","meta64199",-1049510996,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64198.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64198.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64198");

(com.rpl.specter.t_com$rpl$specter64198.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64198");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64198.
 */
com.rpl.specter.__GT_t_com$rpl$specter64198 = (function com$rpl$specter$__GT_t_com$rpl$specter64198(index,meta64199){
return (new com.rpl.specter.t_com$rpl$specter64198(index,meta64199));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter64198(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64203 = (function (i,meta64204){
this.i = i;
this.meta64204 = meta64204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64205,meta64204__$1){
var self__ = this;
var _64205__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64203(self__.i,meta64204__$1));
}));

(com.rpl.specter.t_com$rpl$specter64203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64205){
var self__ = this;
var _64205__$1 = this;
return self__.meta64204;
}));

(com.rpl.specter.t_com$rpl$specter64203.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64203.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter64203.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__64472 = (j - (1));
var G__64473 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__64472;
s = G__64473;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__64474 = (j + (1));
var G__64475 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__64474;
s = G__64475;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64206;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64207 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache64206 = info64207;

return info64207;
})():info__35278__auto__);
var precompiled64208 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled64208.cljs$core$IFn$_invoke$arity$1 ? precompiled64208.cljs$core$IFn$_invoke$arity$1(G__64209) : precompiled64208.call(null,G__64209));
} else {
return precompiled64208;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64210;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64211 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache64210 = info64211;

return info64211;
})():info__35278__auto__);
var precompiled64212 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled64212.cljs$core$IFn$_invoke$arity$1 ? precompiled64212.cljs$core$IFn$_invoke$arity$1(G__64214) : precompiled64212.call(null,G__64214));
} else {
return precompiled64212;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter64203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta64204","meta64204",-1424020575,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64203.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64203.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64203");

(com.rpl.specter.t_com$rpl$specter64203.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64203");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64203.
 */
com.rpl.specter.__GT_t_com$rpl$specter64203 = (function com$rpl$specter$__GT_t_com$rpl$specter64203(i,meta64204){
return (new com.rpl.specter.t_com$rpl$specter64203(i,meta64204));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter64203(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64235 = (function (start,meta64236){
this.start = start;
this.meta64236 = meta64236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64237,meta64236__$1){
var self__ = this;
var _64237__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64235(self__.start,meta64236__$1));
}));

(com.rpl.specter.t_com$rpl$specter64235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64237){
var self__ = this;
var _64237__$1 = this;
return self__.meta64236;
}));

(com.rpl.specter.t_com$rpl$specter64235.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64235.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,e){
var ret__33527__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter64235.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__64239 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64239,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64239,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64242;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64243 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache64242 = info64243;

return info64243;
})():info__35278__auto__);
var precompiled64244 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64245 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),(function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),(function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
})], null);
return (precompiled64244.cljs$core$IFn$_invoke$arity$1 ? precompiled64244.cljs$core$IFn$_invoke$arity$1(G__64245) : precompiled64244.call(null,G__64245));
} else {
return precompiled64244;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64246;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64247 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache64246 = info64247;

return info64247;
})():info__35278__auto__);
var precompiled64248 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled64248.cljs$core$IFn$_invoke$arity$1 ? precompiled64248.cljs$core$IFn$_invoke$arity$1(G__64249) : precompiled64248.call(null,G__64249));
} else {
return precompiled64248;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64250;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64251 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache64250 = info64251;

return info64251;
})():info__35278__auto__);
var precompiled64252 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled64252.cljs$core$IFn$_invoke$arity$1 ? precompiled64252.cljs$core$IFn$_invoke$arity$1(G__64253) : precompiled64252.call(null,G__64253));
} else {
return precompiled64252;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter64235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta64236","meta64236",2009539720,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64235.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64235.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64235");

(com.rpl.specter.t_com$rpl$specter64235.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64235");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64235.
 */
com.rpl.specter.__GT_t_com$rpl$specter64235 = (function com$rpl$specter$__GT_t_com$rpl$specter64235(start,meta64236){
return (new com.rpl.specter.t_com$rpl$specter64235(start,meta64236));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,e){
var ret__33527__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__64217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64217) : next_fn.call(null,G__64217));
})()
;
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__64218 = (function (){var G__64221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64221) : next_fn.call(null,G__64221));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64218,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64218,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64222;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64223 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__64215#","p1__64215#",-451504912,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__64216#","p1__64216#",-352369407,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache64222 = info64223;

return info64223;
})():info__35278__auto__);
var precompiled64224 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64225 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),(function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__64215_SHARP_){
return (p1__64215_SHARP_ >= (curri + (1)));
}),(function (p1__64216_SHARP_){
return (p1__64216_SHARP_ <= newi);
})], null);
return (precompiled64224.cljs$core$IFn$_invoke$arity$1 ? precompiled64224.cljs$core$IFn$_invoke$arity$1(G__64225) : precompiled64224.call(null,G__64225));
} else {
return precompiled64224;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64227;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64228 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache64227 = info64228;

return info64228;
})():info__35278__auto__);
var precompiled64229 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled64229.cljs$core$IFn$_invoke$arity$1 ? precompiled64229.cljs$core$IFn$_invoke$arity$1(G__64230) : precompiled64229.call(null,G__64230));
} else {
return precompiled64229;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__35278__auto__ = com.rpl.specter.pathcache64231;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64232 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache64231 = info64232;

return info64232;
})():info__35278__auto__);
var precompiled64233 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled64233.cljs$core$IFn$_invoke$arity$1 ? precompiled64233.cljs$core$IFn$_invoke$arity$1(G__64234) : precompiled64233.call(null,G__64234));
} else {
return precompiled64233;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
return (new com.rpl.specter.t_com$rpl$specter64235(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64254 = (function (afn,meta64255){
this.afn = afn;
this.meta64255 = meta64255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64256,meta64255__$1){
var self__ = this;
var _64256__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64254(self__.afn,meta64255__$1));
}));

(com.rpl.specter.t_com$rpl$specter64254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64256){
var self__ = this;
var _64256__$1 = this;
return self__.meta64255;
}));

(com.rpl.specter.t_com$rpl$specter64254.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64254.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__64258 = vals;
var G__64259 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__64258,G__64259) : next_fn.call(null,G__64258,G__64259));
}));

(com.rpl.specter.t_com$rpl$specter64254.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__64260 = vals;
var G__64261 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__64260,G__64261) : next_fn.call(null,G__64260,G__64261));
}));

(com.rpl.specter.t_com$rpl$specter64254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta64255","meta64255",-500081594,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64254.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64254.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64254");

(com.rpl.specter.t_com$rpl$specter64254.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64254");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64254.
 */
com.rpl.specter.__GT_t_com$rpl$specter64254 = (function com$rpl$specter$__GT_t_com$rpl$specter64254(afn,meta64255){
return (new com.rpl.specter.t_com$rpl$specter64254(afn,meta64255));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter64254(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64265 = (function (parse_fn,unparse_fn,meta64266){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta64266 = meta64266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64267,meta64266__$1){
var self__ = this;
var _64267__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64265(self__.parse_fn,self__.unparse_fn,meta64266__$1));
}));

(com.rpl.specter.t_com$rpl$specter64265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64267){
var self__ = this;
var _64267__$1 = this;
return self__.meta64266;
}));

(com.rpl.specter.t_com$rpl$specter64265.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64265.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter64265.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var G__64268 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__64268) : self__.unparse_fn.call(null,G__64268));
}));

(com.rpl.specter.t_com$rpl$specter64265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta64266","meta64266",1541880742,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64265.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64265.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64265");

(com.rpl.specter.t_com$rpl$specter64265.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64265");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64265.
 */
com.rpl.specter.__GT_t_com$rpl$specter64265 = (function com$rpl$specter$__GT_t_com$rpl$specter64265(parse_fn,unparse_fn,meta64266){
return (new com.rpl.specter.t_com$rpl$specter64265(parse_fn,unparse_fn,meta64266));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__64262 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64262) : next_fn.call(null,G__64262));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__64263 = (function (){var G__64264 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64264) : next_fn.call(null,G__64264));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__64263) : unparse_fn.call(null,G__64263));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter64265(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64271 = (function (meta64272){
this.meta64272 = meta64272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64273,meta64272__$1){
var self__ = this;
var _64273__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64271(meta64272__$1));
}));

(com.rpl.specter.t_com$rpl$specter64271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64273){
var self__ = this;
var _64273__$1 = this;
return self__.meta64272;
}));

(com.rpl.specter.t_com$rpl$specter64271.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64271.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter64271.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter64271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64272","meta64272",-1213387385,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64271.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64271.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64271");

(com.rpl.specter.t_com$rpl$specter64271.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64271");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64271.
 */
com.rpl.specter.__GT_t_com$rpl$specter64271 = (function com$rpl$specter$__GT_t_com$rpl$specter64271(meta64272){
return (new com.rpl.specter.t_com$rpl$specter64271(meta64272));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__64270 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64270) : next_fn.call(null,G__64270));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter64271(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64274 = (function (re,meta64275){
this.re = re;
this.meta64275 = meta64275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64276,meta64275__$1){
var self__ = this;
var _64276__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64274(self__.re,meta64275__$1));
}));

(com.rpl.specter.t_com$rpl$specter64274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64276){
var self__ = this;
var _64276__$1 = this;
return self__.meta64275;
}));

(com.rpl.specter.t_com$rpl$specter64274.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64274.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,s){
var ret__33527__auto__ = next_fn(s);
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter64274.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta64275","meta64275",-1757106905,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64274.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64274.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64274");

(com.rpl.specter.t_com$rpl$specter64274.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64274");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64274.
 */
com.rpl.specter.__GT_t_com$rpl$specter64274 = (function com$rpl$specter$__GT_t_com$rpl$specter64274(re,meta64275){
return (new com.rpl.specter.t_com$rpl$specter64274(re,meta64275));
});




com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__33526__auto__,s){
var ret__33527__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__33527__auto__ === com.rpl.specter.NONE)){
return curr__33526__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__33527__auto__)){
return cljs.core.reduced(ret__33527__auto__);
} else {
return ret__33527__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
return (new com.rpl.specter.t_com$rpl$specter64274(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64280 = (function (path,temp__5802__auto__,late,meta64281){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta64281 = meta64281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64282,meta64281__$1){
var self__ = this;
var _64282__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64280(self__.path,self__.temp__5802__auto__,self__.late,meta64281__$1));
}));

(com.rpl.specter.t_com$rpl$specter64280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64282){
var self__ = this;
var _64282__$1 = this;
return self__.meta64281;
}));

(com.rpl.specter.t_com$rpl$specter64280.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64280.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__64278_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__64278_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64280.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__64279_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__64279_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64281","meta64281",395822766,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64280.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64280.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64280");

(com.rpl.specter.t_com$rpl$specter64280.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64280");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64280.
 */
com.rpl.specter.__GT_t_com$rpl$specter64280 = (function com$rpl$specter$__GT_t_com$rpl$specter64280(path,temp__5802__auto__,late,meta64281){
return (new com.rpl.specter.t_com$rpl$specter64280(path,temp__5802__auto__,late,meta64281));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64504__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64280(path,temp__5802__auto__,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
}
};
var G__64504 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64505__i = 0, G__64505__a = new Array(arguments.length -  0);
while (G__64505__i < G__64505__a.length) {G__64505__a[G__64505__i] = arguments[G__64505__i + 0]; ++G__64505__i;}
  path = new cljs.core.IndexedSeq(G__64505__a,0,null);
} 
return G__64504__delegate.call(this,path);};
G__64504.cljs$lang$maxFixedArity = 0;
G__64504.cljs$lang$applyTo = (function (arglist__64506){
var path = cljs.core.seq(arglist__64506);
return G__64504__delegate(path);
});
G__64504.cljs$core$IFn$_invoke$arity$variadic = G__64504__delegate;
return G__64504;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64286 = (function (path,temp__5802__auto__,late,meta64287){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta64287 = meta64287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64288,meta64287__$1){
var self__ = this;
var _64288__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64286(self__.path,self__.temp__5802__auto__,self__.late,meta64287__$1));
}));

(com.rpl.specter.t_com$rpl$specter64286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64288){
var self__ = this;
var _64288__$1 = this;
return self__.meta64287;
}));

(com.rpl.specter.t_com$rpl$specter64286.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64286.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__64284_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__64284_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64286.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__64285_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__64285_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64287","meta64287",-98836520,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64286.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64286.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64286");

(com.rpl.specter.t_com$rpl$specter64286.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64286");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64286.
 */
com.rpl.specter.__GT_t_com$rpl$specter64286 = (function com$rpl$specter$__GT_t_com$rpl$specter64286(path,temp__5802__auto__,late,meta64287){
return (new com.rpl.specter.t_com$rpl$specter64286(path,temp__5802__auto__,late,meta64287));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64508__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64286(path,temp__5802__auto__,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
}
};
var G__64508 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64509__i = 0, G__64509__a = new Array(arguments.length -  0);
while (G__64509__i < G__64509__a.length) {G__64509__a[G__64509__i] = arguments[G__64509__i + 0]; ++G__64509__i;}
  path = new cljs.core.IndexedSeq(G__64509__a,0,null);
} 
return G__64508__delegate.call(this,path);};
G__64508.cljs$lang$maxFixedArity = 0;
G__64508.cljs$lang$applyTo = (function (arglist__64510){
var path = cljs.core.seq(arglist__64510);
return G__64508__delegate(path);
});
G__64508.cljs$core$IFn$_invoke$arity$variadic = G__64508__delegate;
return G__64508;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64511__delegate = function (path){
var G__64289 = com.rpl.specter.ALL;
var G__64290 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__64289,G__64290) : com.rpl.specter.subselect.call(null,G__64289,G__64290));
};
var G__64511 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64512__i = 0, G__64512__a = new Array(arguments.length -  0);
while (G__64512__i < G__64512__a.length) {G__64512__a[G__64512__i] = arguments[G__64512__i + 0]; ++G__64512__i;}
  path = new cljs.core.IndexedSeq(G__64512__a,0,null);
} 
return G__64511__delegate.call(this,path);};
G__64511.cljs$lang$maxFixedArity = 0;
G__64511.cljs$lang$applyTo = (function (arglist__64513){
var path = cljs.core.seq(arglist__64513);
return G__64511__delegate(path);
});
G__64511.cljs$core$IFn$_invoke$arity$variadic = G__64511__delegate;
return G__64511;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64291 = (function (path,update_fn,late,late_fn,meta64292){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta64292 = meta64292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64293,meta64292__$1){
var self__ = this;
var _64293__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64291(self__.path,self__.update_fn,self__.late,self__.late_fn,meta64292__$1));
}));

(com.rpl.specter.t_com$rpl$specter64291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64293){
var self__ = this;
var _64293__$1 = this;
return self__.meta64292;
}));

(com.rpl.specter.t_com$rpl$specter64291.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64291.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter64291.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter64291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta64292","meta64292",-718285773,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64291.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64291.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64291");

(com.rpl.specter.t_com$rpl$specter64291.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64291");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64291.
 */
com.rpl.specter.__GT_t_com$rpl$specter64291 = (function com$rpl$specter$__GT_t_com$rpl$specter64291(path,update_fn,late,late_fn,meta64292){
return (new com.rpl.specter.t_com$rpl$specter64291(path,update_fn,late,late_fn,meta64292));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter64291(path,update_fn,late,late_fn,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64295 = (function (path,reduce_fn,late,late_fn,meta64296){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta64296 = meta64296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64297,meta64296__$1){
var self__ = this;
var _64297__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64295(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta64296__$1));
}));

(com.rpl.specter.t_com$rpl$specter64295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64297){
var self__ = this;
var _64297__$1 = this;
return self__.meta64296;
}));

(com.rpl.specter.t_com$rpl$specter64295.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64295.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter64295.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter64295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta64296","meta64296",250351251,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64295.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64295.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64295");

(com.rpl.specter.t_com$rpl$specter64295.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64295");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64295.
 */
com.rpl.specter.__GT_t_com$rpl$specter64295 = (function com$rpl$specter$__GT_t_com$rpl$specter64295(path,reduce_fn,late,late_fn,meta64296){
return (new com.rpl.specter.t_com$rpl$specter64295(path,reduce_fn,late,late_fn,meta64296));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter64295(path,reduce_fn,late,late_fn,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__64300 = (function (p1__64299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__64299_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__64300) : com.rpl.specter.pred.call(null,G__64300));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__64302 = (function (p1__64301_SHARP_){
return (p1__64301_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__64302) : com.rpl.specter.pred.call(null,G__64302));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__64304 = (function (p1__64303_SHARP_){
return (p1__64303_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__64304) : com.rpl.specter.pred.call(null,G__64304));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__64306 = (function (p1__64305_SHARP_){
return (p1__64305_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__64306) : com.rpl.specter.pred.call(null,G__64306));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__64308 = (function (p1__64307_SHARP_){
return (p1__64307_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__64308) : com.rpl.specter.pred.call(null,G__64308));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64312 = (function (v,meta64313){
this.v = v;
this.meta64313 = meta64313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64314,meta64313__$1){
var self__ = this;
var _64314__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64312(self__.v,meta64313__$1));
}));

(com.rpl.specter.t_com$rpl$specter64312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64314){
var self__ = this;
var _64314__$1 = this;
return self__.meta64313;
}));

(com.rpl.specter.t_com$rpl$specter64312.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64312.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter64312.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter64312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta64313","meta64313",-1489200205,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64312.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64312.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64312");

(com.rpl.specter.t_com$rpl$specter64312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64312");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64312.
 */
com.rpl.specter.__GT_t_com$rpl$specter64312 = (function com$rpl$specter$__GT_t_com$rpl$specter64312(v,meta64313){
return (new com.rpl.specter.t_com$rpl$specter64312(v,meta64313));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__64309 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64309) : next_fn.call(null,G__64309));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__64310 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64310) : next_fn.call(null,G__64310));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter64312(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__64315 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__64315) : com.rpl.specter.nil__GT_val.call(null,G__64315));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__64316 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__64316) : com.rpl.specter.nil__GT_val.call(null,G__64316));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__64317 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__64317) : com.rpl.specter.nil__GT_val.call(null,G__64317));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64320 = (function (meta64321){
this.meta64321 = meta64321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64322,meta64321__$1){
var self__ = this;
var _64322__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64320(meta64321__$1));
}));

(com.rpl.specter.t_com$rpl$specter64320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64322){
var self__ = this;
var _64322__$1 = this;
return self__.meta64321;
}));

(com.rpl.specter.t_com$rpl$specter64320.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64320.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter64320.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter64320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64321","meta64321",-1730597560,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64320.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64320.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64320");

(com.rpl.specter.t_com$rpl$specter64320.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64320");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64320.
 */
com.rpl.specter.__GT_t_com$rpl$specter64320 = (function com$rpl$specter$__GT_t_com$rpl$specter64320(meta64321){
return (new com.rpl.specter.t_com$rpl$specter64320(meta64321));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__64318 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64318) : next_fn.call(null,G__64318));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__64319 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64319) : next_fn.call(null,G__64319));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter64320(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64326 = (function (meta64327){
this.meta64327 = meta64327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64328,meta64327__$1){
var self__ = this;
var _64328__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64326(meta64327__$1));
}));

(com.rpl.specter.t_com$rpl$specter64326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64328){
var self__ = this;
var _64328__$1 = this;
return self__.meta64327;
}));

(com.rpl.specter.t_com$rpl$specter64326.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64326.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter64326.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter64326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64327","meta64327",-2044080713,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64326.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64326.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64326");

(com.rpl.specter.t_com$rpl$specter64326.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64326");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64326.
 */
com.rpl.specter.__GT_t_com$rpl$specter64326 = (function com$rpl$specter$__GT_t_com$rpl$specter64326(meta64327){
return (new com.rpl.specter.t_com$rpl$specter64326(meta64327));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__64324 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64324) : next_fn.call(null,G__64324));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__64325 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64325) : next_fn.call(null,G__64325));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter64326(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64331 = (function (meta64332){
this.meta64332 = meta64332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64333,meta64332__$1){
var self__ = this;
var _64333__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64331(meta64332__$1));
}));

(com.rpl.specter.t_com$rpl$specter64331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64333){
var self__ = this;
var _64333__$1 = this;
return self__.meta64332;
}));

(com.rpl.specter.t_com$rpl$specter64331.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64331.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter64331.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__34605__auto__,vals__34606__auto__,structure,next_fn__34607__auto__){
var self__ = this;
var this__34605__auto____$1 = this;
var next_fn = (function (s__34608__auto__){
return (next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__34607__auto__.cljs$core$IFn$_invoke$arity$2(vals__34606__auto__,s__34608__auto__) : next_fn__34607__auto__.call(null,vals__34606__auto__,s__34608__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter64331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64332","meta64332",333891194,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64331.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64331.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64331");

(com.rpl.specter.t_com$rpl$specter64331.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64331");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64331.
 */
com.rpl.specter.__GT_t_com$rpl$specter64331 = (function com$rpl$specter$__GT_t_com$rpl$specter64331(meta64332){
return (new com.rpl.specter.t_com$rpl$specter64331(meta64332));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__64329 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64329) : next_fn.call(null,G__64329));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__64330 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__64330) : next_fn.call(null,G__64330));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter64331(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64335 = (function (path,late,meta64336){
this.path = path;
this.late = late;
this.meta64336 = meta64336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64337,meta64336__$1){
var self__ = this;
var _64337__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64335(self__.path,self__.late,meta64336__$1));
}));

(com.rpl.specter.t_com$rpl$specter64335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64337){
var self__ = this;
var _64337__$1 = this;
return self__.meta64336;
}));

(com.rpl.specter.t_com$rpl$specter64335.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64335.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__64339 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64338,G__64339) : next_fn__35270__auto__.call(null,G__64338,G__64339));
}));

(com.rpl.specter.t_com$rpl$specter64335.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__64341 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64340,G__64341) : next_fn__35270__auto__.call(null,G__64340,G__64341));
}));

(com.rpl.specter.t_com$rpl$specter64335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64336","meta64336",1521454159,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64335.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64335.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64335");

(com.rpl.specter.t_com$rpl$specter64335.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64335");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64335.
 */
com.rpl.specter.__GT_t_com$rpl$specter64335 = (function com$rpl$specter$__GT_t_com$rpl$specter64335(path,late,meta64336){
return (new com.rpl.specter.t_com$rpl$specter64335(path,late,meta64336));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64535__delegate = function (path){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64335(path,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
};
var G__64535 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64537__i = 0, G__64537__a = new Array(arguments.length -  0);
while (G__64537__i < G__64537__a.length) {G__64537__a[G__64537__i] = arguments[G__64537__i + 0]; ++G__64537__i;}
  path = new cljs.core.IndexedSeq(G__64537__a,0,null);
} 
return G__64535__delegate.call(this,path);};
G__64535.cljs$lang$maxFixedArity = 0;
G__64535.cljs$lang$applyTo = (function (arglist__64538){
var path = cljs.core.seq(arglist__64538);
return G__64535__delegate(path);
});
G__64535.cljs$core$IFn$_invoke$arity$variadic = G__64535__delegate;
return G__64535;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64342 = (function (path,late,meta64343){
this.path = path;
this.late = late;
this.meta64343 = meta64343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64344,meta64343__$1){
var self__ = this;
var _64344__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64342(self__.path,self__.late,meta64343__$1));
}));

(com.rpl.specter.t_com$rpl$specter64342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64344){
var self__ = this;
var _64344__$1 = this;
return self__.meta64343;
}));

(com.rpl.specter.t_com$rpl$specter64342.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64342.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__64346 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64345,G__64346) : next_fn__35270__auto__.call(null,G__64345,G__64346));
}));

(com.rpl.specter.t_com$rpl$specter64342.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__64348 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64347,G__64348) : next_fn__35270__auto__.call(null,G__64347,G__64348));
}));

(com.rpl.specter.t_com$rpl$specter64342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64343","meta64343",1122209054,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64342.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64342.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64342");

(com.rpl.specter.t_com$rpl$specter64342.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64342");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64342.
 */
com.rpl.specter.__GT_t_com$rpl$specter64342 = (function com$rpl$specter$__GT_t_com$rpl$specter64342(path,late,meta64343){
return (new com.rpl.specter.t_com$rpl$specter64342(path,late,meta64343));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64541__delegate = function (path){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64342(path,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
};
var G__64541 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64542__i = 0, G__64542__a = new Array(arguments.length -  0);
while (G__64542__i < G__64542__a.length) {G__64542__a[G__64542__i] = arguments[G__64542__i + 0]; ++G__64542__i;}
  path = new cljs.core.IndexedSeq(G__64542__a,0,null);
} 
return G__64541__delegate.call(this,path);};
G__64541.cljs$lang$maxFixedArity = 0;
G__64541.cljs$lang$applyTo = (function (arglist__64543){
var path = cljs.core.seq(arglist__64543);
return G__64541__delegate(path);
});
G__64541.cljs$core$IFn$_invoke$arity$variadic = G__64541__delegate;
return G__64541;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64357 = (function (val,meta64358){
this.val = val;
this.meta64358 = meta64358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64359,meta64358__$1){
var self__ = this;
var _64359__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64357(self__.val,meta64358__$1));
}));

(com.rpl.specter.t_com$rpl$specter64357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64359){
var self__ = this;
var _64359__$1 = this;
return self__.meta64358;
}));

(com.rpl.specter.t_com$rpl$specter64357.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64357.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64361 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,self__.val);
var G__64362 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64361,G__64362) : next_fn__35270__auto__.call(null,G__64361,G__64362));
}));

(com.rpl.specter.t_com$rpl$specter64357.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__35268__auto__,vals__35269__auto__,structure,next_fn__35270__auto__){
var self__ = this;
var this__35268__auto____$1 = this;
var G__64363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__35269__auto__,self__.val);
var G__64364 = structure;
return (next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__35270__auto__.cljs$core$IFn$_invoke$arity$2(G__64363,G__64364) : next_fn__35270__auto__.call(null,G__64363,G__64364));
}));

(com.rpl.specter.t_com$rpl$specter64357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta64358","meta64358",2060470537,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64357.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64357.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64357");

(com.rpl.specter.t_com$rpl$specter64357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64357");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64357.
 */
com.rpl.specter.__GT_t_com$rpl$specter64357 = (function com$rpl$specter$__GT_t_com$rpl$specter64357(val,meta64358){
return (new com.rpl.specter.t_com$rpl$specter64357(val,meta64358));
});


/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
return (new com.rpl.specter.t_com$rpl$specter64357(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64365 = (function (path,late,meta64366){
this.path = path;
this.late = late;
this.meta64366 = meta64366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64367,meta64366__$1){
var self__ = this;
var _64367__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64365(self__.path,self__.late,meta64366__$1));
}));

(com.rpl.specter.t_com$rpl$specter64365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64367){
var self__ = this;
var _64367__$1 = this;
return self__.meta64366;
}));

(com.rpl.specter.t_com$rpl$specter64365.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64365.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter64365.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter64365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta64366","meta64366",2116612247,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64365.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64365.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64365");

(com.rpl.specter.t_com$rpl$specter64365.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64365");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64365.
 */
com.rpl.specter.__GT_t_com$rpl$specter64365 = (function com$rpl$specter$__GT_t_com$rpl$specter64365(path,late,meta64366){
return (new com.rpl.specter.t_com$rpl$specter64365(path,late,meta64366));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64546__delegate = function (path){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter64365(path,late,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
};
var G__64546 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64550__i = 0, G__64550__a = new Array(arguments.length -  0);
while (G__64550__i < G__64550__a.length) {G__64550__a[G__64550__i] = arguments[G__64550__i + 0]; ++G__64550__i;}
  path = new cljs.core.IndexedSeq(G__64550__a,0,null);
} 
return G__64546__delegate.call(this,path);};
G__64546.cljs$lang$maxFixedArity = 0;
G__64546.cljs$lang$applyTo = (function (arglist__64551){
var path = cljs.core.seq(arglist__64551);
return G__64546__delegate(path);
});
G__64546.cljs$core$IFn$_invoke$arity$variadic = G__64546__delegate;
return G__64546;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64370 = (function (meta64371){
this.meta64371 = meta64371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64372,meta64371__$1){
var self__ = this;
var _64372__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64370(meta64371__$1));
}));

(com.rpl.specter.t_com$rpl$specter64370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64372){
var self__ = this;
var _64372__$1 = this;
return self__.meta64371;
}));

(com.rpl.specter.t_com$rpl$specter64370.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64370.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__64373 = cljs.core.PersistentVector.EMPTY;
var G__64374 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__64373,G__64374) : next_fn.call(null,G__64373,G__64374));
}));

(com.rpl.specter.t_com$rpl$specter64370.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__64375 = cljs.core.PersistentVector.EMPTY;
var G__64376 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__64375,G__64376) : next_fn.call(null,G__64375,G__64376));
}));

(com.rpl.specter.t_com$rpl$specter64370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64371","meta64371",-2031427365,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64370.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64370.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64370");

(com.rpl.specter.t_com$rpl$specter64370.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64370");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64370.
 */
com.rpl.specter.__GT_t_com$rpl$specter64370 = (function com$rpl$specter$__GT_t_com$rpl$specter64370(meta64371){
return (new com.rpl.specter.t_com$rpl$specter64370(meta64371));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter64370(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64379 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta64380){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta64380 = meta64380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64381,meta64380__$1){
var self__ = this;
var _64381__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64379(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta64380__$1));
}));

(com.rpl.specter.t_com$rpl$specter64379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64381){
var self__ = this;
var _64381__$1 = this;
return self__.meta64380;
}));

(com.rpl.specter.t_com$rpl$specter64379.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64379.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter64379.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter64379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta64380","meta64380",-142976362,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64379.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64379.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64379");

(com.rpl.specter.t_com$rpl$specter64379.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64379");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64379.
 */
com.rpl.specter.__GT_t_com$rpl$specter64379 = (function com$rpl$specter$__GT_t_com$rpl$specter64379(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta64380){
return (new com.rpl.specter.t_com$rpl$specter64379(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta64380));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64382 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta64383){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta64383 = meta64383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64384,meta64383__$1){
var self__ = this;
var _64384__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64382(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta64383__$1));
}));

(com.rpl.specter.t_com$rpl$specter64382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64384){
var self__ = this;
var _64384__$1 = this;
return self__.meta64383;
}));

(com.rpl.specter.t_com$rpl$specter64382.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64382.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__64377_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__64377_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter64382.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__64378_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__64378_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter64382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta64383","meta64383",1037392290,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64382.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64382.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64382");

(com.rpl.specter.t_com$rpl$specter64382.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64382");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64382.
 */
com.rpl.specter.__GT_t_com$rpl$specter64382 = (function com$rpl$specter$__GT_t_com$rpl$specter64382(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta64383){
return (new com.rpl.specter.t_com$rpl$specter64382(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta64383));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__64555 = null;
var G__64555__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__64555__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter64379(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
} else {
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter64382(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
}
});
G__64555 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__64555__2.call(this,cond_p,then_path);
case 3:
return G__64555__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64555.cljs$core$IFn$_invoke$arity$2 = G__64555__2;
G__64555.cljs$core$IFn$_invoke$arity$3 = G__64555__3;
return G__64555;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64559__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__64385){
var vec__64386 = p__64385;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64386,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64386,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__64559 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__64560__i = 0, G__64560__a = new Array(arguments.length -  0);
while (G__64560__i < G__64560__a.length) {G__64560__a[G__64560__i] = arguments[G__64560__i + 0]; ++G__64560__i;}
  conds = new cljs.core.IndexedSeq(G__64560__a,0,null);
} 
return G__64559__delegate.call(this,conds);};
G__64559.cljs$lang$maxFixedArity = 0;
G__64559.cljs$lang$applyTo = (function (arglist__64561){
var conds = cljs.core.seq(arglist__64561);
return G__64559__delegate(conds);
});
G__64559.cljs$core$IFn$_invoke$arity$variadic = G__64559__delegate;
return G__64559;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter64389 = (function (path1,path2,late1,late2,meta64390){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta64390 = meta64390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter64389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64391,meta64390__$1){
var self__ = this;
var _64391__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter64389(self__.path1,self__.path2,self__.late1,self__.late2,meta64390__$1));
}));

(com.rpl.specter.t_com$rpl$specter64389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64391){
var self__ = this;
var _64391__$1 = this;
return self__.meta64390;
}));

(com.rpl.specter.t_com$rpl$specter64389.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter64389.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter64389.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter64389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta64390","meta64390",-1603487551,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter64389.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter64389.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter64389");

(com.rpl.specter.t_com$rpl$specter64389.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter64389");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter64389.
 */
com.rpl.specter.__GT_t_com$rpl$specter64389 = (function com$rpl$specter$__GT_t_com$rpl$specter64389(path1,path2,late1,late2,meta64390){
return (new com.rpl.specter.t_com$rpl$specter64389(path1,path2,late1,late2,meta64390));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__64564 = null;
var G__64564__0 = (function (){
return com.rpl.specter.STAY;
});
var G__64564__1 = (function (path){
return path;
});
var G__64564__2 = (function (path1,path2){
var builder__35271__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter64389(path1,path2,late1,late2,null));
}));
var curr_params__35272__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__35272__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__35271__auto__,curr_params__35272__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__35271__auto__,curr_params__35272__auto__,null);
}
});
var G__64564__3 = (function() { 
var G__64565__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__64565 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__64566__i = 0, G__64566__a = new Array(arguments.length -  2);
while (G__64566__i < G__64566__a.length) {G__64566__a[G__64566__i] = arguments[G__64566__i + 2]; ++G__64566__i;}
  paths = new cljs.core.IndexedSeq(G__64566__a,0,null);
} 
return G__64565__delegate.call(this,path1,path2,paths);};
G__64565.cljs$lang$maxFixedArity = 2;
G__64565.cljs$lang$applyTo = (function (arglist__64567){
var path1 = cljs.core.first(arglist__64567);
arglist__64567 = cljs.core.next(arglist__64567);
var path2 = cljs.core.first(arglist__64567);
var paths = cljs.core.rest(arglist__64567);
return G__64565__delegate(path1,path2,paths);
});
G__64565.cljs$core$IFn$_invoke$arity$variadic = G__64565__delegate;
return G__64565;
})()
;
G__64564 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__64564__0.call(this);
case 1:
return G__64564__1.call(this,path1);
case 2:
return G__64564__2.call(this,path1,path2);
default:
var G__64568 = null;
if (arguments.length > 2) {
var G__64569__i = 0, G__64569__a = new Array(arguments.length -  2);
while (G__64569__i < G__64569__a.length) {G__64569__a[G__64569__i] = arguments[G__64569__i + 2]; ++G__64569__i;}
G__64568 = new cljs.core.IndexedSeq(G__64569__a,0,null);
}
return G__64564__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__64568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64564.cljs$lang$maxFixedArity = 2;
G__64564.cljs$lang$applyTo = G__64564__3.cljs$lang$applyTo;
G__64564.cljs$core$IFn$_invoke$arity$0 = G__64564__0;
G__64564.cljs$core$IFn$_invoke$arity$1 = G__64564__1;
G__64564.cljs$core$IFn$_invoke$arity$2 = G__64564__2;
G__64564.cljs$core$IFn$_invoke$arity$variadic = G__64564__3.cljs$core$IFn$_invoke$arity$variadic;
return G__64564;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64570__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__64570 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64571__i = 0, G__64571__a = new Array(arguments.length -  0);
while (G__64571__i < G__64571__a.length) {G__64571__a[G__64571__i] = arguments[G__64571__i + 0]; ++G__64571__i;}
  path = new cljs.core.IndexedSeq(G__64571__a,0,null);
} 
return G__64570__delegate.call(this,path);};
G__64570.cljs$lang$maxFixedArity = 0;
G__64570.cljs$lang$applyTo = (function (arglist__64572){
var path = cljs.core.seq(arglist__64572);
return G__64570__delegate(path);
});
G__64570.cljs$core$IFn$_invoke$arity$variadic = G__64570__delegate;
return G__64570;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64573__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__64573 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64574__i = 0, G__64574__a = new Array(arguments.length -  0);
while (G__64574__i < G__64574__a.length) {G__64574__a[G__64574__i] = arguments[G__64574__i + 0]; ++G__64574__i;}
  path = new cljs.core.IndexedSeq(G__64574__a,0,null);
} 
return G__64573__delegate.call(this,path);};
G__64573.cljs$lang$maxFixedArity = 0;
G__64573.cljs$lang$applyTo = (function (arglist__64575){
var path = cljs.core.seq(arglist__64575);
return G__64573__delegate(path);
});
G__64573.cljs$core$IFn$_invoke$arity$variadic = G__64573__delegate;
return G__64573;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__35278__auto__ = com.rpl.specter.pathcache64396;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64397 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2138),(2138),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache64396 = info64397;

return info64397;
})():info__35278__auto__);
var precompiled64398 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64399 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled64398.cljs$core$IFn$_invoke$arity$1 ? precompiled64398.cljs$core$IFn$_invoke$arity$1(G__64399) : precompiled64398.call(null,G__64399));
} else {
return precompiled64398;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__35278__auto__ = com.rpl.specter.pathcache64400;
var info__35278__auto____$1 = (((info__35278__auto__ == null))?(function (){var info64401 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2138),(2138),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache64400 = info64401;

return info64401;
})():info__35278__auto__);
var precompiled64402 = com.rpl.specter.impl.cached_path_info_precompiled(info__35278__auto____$1);
var dynamic_QMARK___35279__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__35278__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___35279__auto__)){
var G__64403 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled64402.cljs$core$IFn$_invoke$arity$1 ? precompiled64402.cljs$core$IFn$_invoke$arity$1(G__64403) : precompiled64402.call(null,G__64403));
} else {
return precompiled64402;
}
})());

return p;
}));
var empty__GT_NONE_64587 = (function (){var G__64404 = cljs.core.empty_QMARK_;
var G__64405 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__64404,G__64405) : com.rpl.specter.if_path.call(null,G__64404,G__64405));
})();
var compact_STAR__64588 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_64587) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_64587));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__64589__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__64588,path);
};
var G__64589 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__64590__i = 0, G__64590__a = new Array(arguments.length -  0);
while (G__64590__i < G__64590__a.length) {G__64590__a[G__64590__i] = arguments[G__64590__i + 0]; ++G__64590__i;}
  path = new cljs.core.IndexedSeq(G__64590__a,0,null);
} 
return G__64589__delegate.call(this,path);};
G__64589.cljs$lang$maxFixedArity = 0;
G__64589.cljs$lang$applyTo = (function (arglist__64591){
var path = cljs.core.seq(arglist__64591);
return G__64589__delegate(path);
});
G__64589.cljs$core$IFn$_invoke$arity$variadic = G__64589__delegate;
return G__64589;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
