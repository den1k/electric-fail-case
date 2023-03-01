goog.provide('net.cgrand.xforms');
net.cgrand.xforms.pair_QMARK_ = (function net$cgrand$xforms$pair_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))));
});
var kw_or__AMPERSAND__61958 = (function (p1__60585_SHARP_){
return (((p1__60585_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__60585_SHARP_)));
});
net.cgrand.xforms.destructuring_pair_QMARK_ = (function net$cgrand$xforms$destructuring_pair_QMARK_(x){
return ((net.cgrand.xforms.pair_QMARK_(x)) && ((!(kw_or__AMPERSAND__61958(cljs.core.first(x))))));
});




/**
 * Protocol for reducing fns that accept key and val as separate arguments.
 * @interface
 */
net.cgrand.xforms.KvRfable = function(){};

var net$cgrand$xforms$KvRfable$some_kvrf$dyn_61959 = (function (f){
var x__5393__auto__ = (((f == null))?null:f);
var m__5394__auto__ = (net.cgrand.xforms.some_kvrf[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__5394__auto__.call(null,f));
} else {
var m__5392__auto__ = (net.cgrand.xforms.some_kvrf["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__5392__auto__.call(null,f));
} else {
throw cljs.core.missing_protocol("KvRfable.some-kvrf",f);
}
}
});
/**
 * Returns a kvrf or nil
 */
net.cgrand.xforms.some_kvrf = (function net$cgrand$xforms$some_kvrf(f){
if((((!((f == null)))) && ((!((f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 == null)))))){
return f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1(f);
} else {
return net$cgrand$xforms$KvRfable$some_kvrf$dyn_61959(f);
}
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms60720 = (function (rf,or__5045__auto__,meta60721){
this.rf = rf;
this.or__5045__auto__ = or__5045__auto__;
this.meta60721 = meta60721;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60722,meta60721__$1){
var self__ = this;
var _60722__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms60720(self__.rf,self__.or__5045__auto__,meta60721__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60722){
var self__ = this;
var _60722__$1 = this;
return self__.meta60721;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__60739 = (arguments.length - (1));
switch (G__60739) {
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.apply = (function (self__,args60724){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60724)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k__32940__auto__,v__32941__auto__){
var self__ = this;
var _60718 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__32940__auto__,v__32941__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _60718 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _60718 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _60718 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"or__5045__auto__","or__5045__auto__",497882695,null),new cljs.core.Symbol(null,"meta60721","meta60721",60724605,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60720.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms60720.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms60720");

(net.cgrand.xforms.t_net$cgrand$xforms60720.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms60720");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms60720.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms60720 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms60720(rf,or__5045__auto__,meta60721){
return (new net.cgrand.xforms.t_net$cgrand$xforms60720(rf,or__5045__auto__,meta60721));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms60776 = (function (f,rf,vacc,meta60777){
this.f = f;
this.rf = rf;
this.vacc = vacc;
this.meta60777 = meta60777;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60778,meta60777__$1){
var self__ = this;
var _60778__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms60776(self__.f,self__.rf,self__.vacc,meta60777__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60778){
var self__ = this;
var _60778__$1 = this;
return self__.meta60777;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__60793 = (arguments.length - (1));
switch (G__60793) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.apply = (function (self__,args60785){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60785)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _60775 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _60775 = this;
var v__32943__auto__ = cljs.core.deref(self__.vacc);
if((v__32943__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__32943__auto__;
var G__60800 = cljs.core.unreduced((function (){var G__60802 = acc;
var G__60803 = (function (){var G__60805 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60805) : self__.f.call(null,G__60805));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__60802,G__60803) : self__.rf.call(null,G__60802,G__60803));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__60800) : self__.rf.call(null,G__60800));
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _60775 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__60806 = cljs.core._deref(self__.vacc);
var G__60807 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__60806,G__60807) : self__.f.call(null,G__60806,G__60807));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _60775 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__60817 = cljs.core._deref(self__.vacc);
var G__60818 = k;
var G__60819 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__60817,G__60818,G__60819) : self__.f.call(null,G__60817,G__60818,G__60819));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vacc","vacc",-1937917185,null),new cljs.core.Symbol(null,"meta60777","meta60777",-621365489,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60776.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms60776.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms60776");

(net.cgrand.xforms.t_net$cgrand$xforms60776.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms60776");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms60776.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms60776 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms60776(f,rf,vacc,meta60777){
return (new net.cgrand.xforms.t_net$cgrand$xforms60776(f,rf,vacc,meta60777));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms60832 = (function (to,meta60833){
this.to = to;
this.meta60833 = meta60833;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60834,meta60833__$1){
var self__ = this;
var _60834__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms60832(self__.to,meta60833__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60834){
var self__ = this;
var _60834__$1 = this;
return self__.meta60833;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__60838 = (arguments.length - (1));
switch (G__60838) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.apply = (function (self__,args60837){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60837)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _60831 = this;
return cljs.core.transient$(self__.to);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _60831 = this;
return cljs.core.persistent_BANG_(acc);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _60831 = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _60831 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta60833","meta60833",-962653981,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60832.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms60832.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms60832");

(net.cgrand.xforms.t_net$cgrand$xforms60832.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms60832");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms60832.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms60832 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms60832(to,meta60833){
return (new net.cgrand.xforms.t_net$cgrand$xforms60832(to,meta60833));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms60862 = (function (to,meta60863){
this.to = to;
this.meta60863 = meta60863;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60864,meta60863__$1){
var self__ = this;
var _60864__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms60862(self__.to,meta60863__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60864){
var self__ = this;
var _60864__$1 = this;
return self__.meta60863;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__60888 = (arguments.length - (1));
switch (G__60888) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.apply = (function (self__,args60865){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60865)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _60861 = this;
return self__.to;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _60861 = this;
return acc;
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _60861 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _60861 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta60863","meta60863",490434537,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms60862.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms60862.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms60862");

(net.cgrand.xforms.t_net$cgrand$xforms60862.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms60862");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms60862.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms60862 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms60862(to,meta60863){
return (new net.cgrand.xforms.t_net$cgrand$xforms60862(to,meta60863));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61040 = (function (rf,meta61041){
this.rf = rf;
this.meta61041 = meta61041;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61042,meta61041__$1){
var self__ = this;
var _61042__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61040(self__.rf,meta61041__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61042){
var self__ = this;
var _61042__$1 = this;
return self__.meta61041;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61053 = (arguments.length - (1));
switch (G__61053) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.apply = (function (self__,args61045){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61045)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__61069){
var self__ = this;
var vec__61071 = p__61069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(1),null);
var _61039 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61039 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _61039 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _61039 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta61041","meta61041",-1489909572,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61040.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61040.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61040");

(net.cgrand.xforms.t_net$cgrand$xforms61040.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61040");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61040.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61040 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61040(rf,meta61041){
return (new net.cgrand.xforms.t_net$cgrand$xforms61040(rf,meta61041));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61097 = (function (rf,meta61098){
this.rf = rf;
this.meta61098 = meta61098;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61099,meta61098__$1){
var self__ = this;
var _61099__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61097(self__.rf,meta61098__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61099){
var self__ = this;
var _61099__$1 = this;
return self__.meta61098;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61108 = (arguments.length - (1));
switch (G__61108) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.apply = (function (self__,args61103){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61103)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__61120){
var self__ = this;
var vec__61122 = p__61120;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61122,(1),null);
var _61095 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61095 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _61095 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _61095 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta61098","meta61098",1455539394,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61097.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61097.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61097");

(net.cgrand.xforms.t_net$cgrand$xforms61097.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61097");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61097.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61097 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61097(rf,meta61098){
return (new net.cgrand.xforms.t_net$cgrand$xforms61097(rf,meta61098));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61154 = (function (rf,meta61155){
this.rf = rf;
this.meta61155 = meta61155;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61156,meta61155__$1){
var self__ = this;
var _61156__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61154(self__.rf,meta61155__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61156){
var self__ = this;
var _61156__$1 = this;
return self__.meta61155;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61160 = (arguments.length - (1));
switch (G__61160) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.apply = (function (self__,args61158){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61158)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61152 = this;
return null;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _61152 = this;
return acc;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _61152 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _61152 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta61155","meta61155",-1544887442,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61154.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61154.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61154");

(net.cgrand.xforms.t_net$cgrand$xforms61154.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61154");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61154.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61154 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61154(rf,meta61155){
return (new net.cgrand.xforms.t_net$cgrand$xforms61154(rf,meta61155));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61213 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61214){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta61214 = meta61214;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61215,meta61214__$1){
var self__ = this;
var _61215__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61213(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta61214__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61215){
var self__ = this;
var _61215__$1 = this;
return self__.meta61214;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61234 = (arguments.length - (1));
switch (G__61234) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.apply = (function (self__,args61222){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61222)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__61243){
var self__ = this;
var vec__61244 = p__61243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61244,(1),null);
var self = this;
var krf = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__61249 = (function (){var G__61250 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__61250) : self__.xform.call(null,G__61250));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__61249));

return G__61249;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__61252 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__61252) : krf.call(null,G__61252));
}
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var self = this;
var v__32943__auto__ = cljs.core.deref(self__.m);
if((v__32943__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__32943__auto__;
var G__61254 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
}),acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__61254) : self__.rf.call(null,G__61254));
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var self = this;
var krf = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__61263 = (function (){var G__61264 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__61264) : self__.xform.call(null,G__61264));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__61263));

return G__61263;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__61266 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__61266) : krf.call(null,G__61266));
}
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta61214","meta61214",-1898880943,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61213.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61213.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61213");

(net.cgrand.xforms.t_net$cgrand$xforms61213.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61213");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61213.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61213 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61213(kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61214){
return (new net.cgrand.xforms.t_net$cgrand$xforms61213(kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61214));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61273 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61274){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta61274 = meta61274;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61275,meta61274__$1){
var self__ = this;
var _61275__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61273(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta61274__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61275){
var self__ = this;
var _61275__$1 = this;
return self__.meta61274;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61288 = (arguments.length - (1));
switch (G__61288) {
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.apply = (function (self__,args61280){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61280)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k__32940__auto__,v__32941__auto__){
var self__ = this;
var self = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__32940__auto__,v__32941__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__61296 = (function (){var G__61297 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__61297) : self__.xform.call(null,G__61297));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__61296));

return G__61296;
}
})();
var acc__$1 = (function (){var G__61301 = acc;
var G__61302 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__61301,G__61302) : krf.call(null,G__61301,G__61302));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__61315 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__61315) : krf.call(null,G__61315));
}
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var self = this;
var v__32943__auto__ = cljs.core.deref(self__.m);
if((v__32943__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__32943__auto__;
var G__61319 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
}),acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__61319) : self__.rf.call(null,G__61319));
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var self = this;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__61327 = (function (){var G__61328 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__61328) : self__.xform.call(null,G__61328));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__61327));

return G__61327;
}
})();
var acc__$1 = (function (){var G__61329 = acc;
var G__61330 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__61329,G__61330) : krf.call(null,G__61329,G__61330));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__61333 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__61333) : krf.call(null,G__61333));
}
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta61274","meta61274",-1391804901,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61273.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61273.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61273");

(net.cgrand.xforms.t_net$cgrand$xforms61273.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61273");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61273.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61273 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61273(kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61274){
return (new net.cgrand.xforms.t_net$cgrand$xforms61273(kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta61274));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61571 = (function (rf61545,_61547,mrf,xform,acc61546,rf,meta61549,k,rf61567,xforms,meta61572){
this.rf61545 = rf61545;
this._61547 = _61547;
this.mrf = mrf;
this.xform = xform;
this.acc61546 = acc61546;
this.rf = rf;
this.meta61549 = meta61549;
this.k = k;
this.rf61567 = rf61567;
this.xforms = xforms;
this.meta61572 = meta61572;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61573,meta61572__$1){
var self__ = this;
var _61573__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61571(self__.rf61545,self__._61547,self__.mrf,self__.xform,self__.acc61546,self__.rf,self__.meta61549,self__.k,self__.rf61567,self__.xforms,meta61572__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61573){
var self__ = this;
var _61573__$1 = this;
return self__.meta61572;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61577 = (arguments.length - (1));
switch (G__61577) {
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.apply = (function (self__,args61574){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61574)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc61568,k__32940__auto__,v__32941__auto__){
var self__ = this;
var _61570 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__32940__auto__,v__32941__auto__], null);
var acc__32939__auto__ = (self__.rf61567.cljs$core$IFn$_invoke$arity$3 ? self__.rf61567.cljs$core$IFn$_invoke$arity$3(acc61568,self__.k,x) : self__.rf61567.call(null,acc61568,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61570 = this;
return (self__.rf61567.cljs$core$IFn$_invoke$arity$0 ? self__.rf61567.cljs$core$IFn$_invoke$arity$0() : self__.rf61567.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc61568){
var self__ = this;
var _61570 = this;
return (self__.rf61567.cljs$core$IFn$_invoke$arity$1 ? self__.rf61567.cljs$core$IFn$_invoke$arity$1(acc61568) : self__.rf61567.call(null,acc61568));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc61568,x){
var self__ = this;
var _61570 = this;
var acc__32939__auto__ = (self__.rf61567.cljs$core$IFn$_invoke$arity$3 ? self__.rf61567.cljs$core$IFn$_invoke$arity$3(acc61568,self__.k,x) : self__.rf61567.call(null,acc61568,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf61545","rf61545",1712557089,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_61547","_61547",160146817,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms61548","net.cgrand.xforms/t_net$cgrand$xforms61548",-1941284605,null)], null)),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"acc61546","acc61546",751746345,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta61549","meta61549",1025735467,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf61567","rf61567",1949011226,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"meta61572","meta61572",680731176,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61571.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61571.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61571");

(net.cgrand.xforms.t_net$cgrand$xforms61571.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61571");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61571.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61571 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61571(rf61545,_61547,mrf,xform,acc61546,rf,meta61549,k,rf61567,xforms,meta61572){
return (new net.cgrand.xforms.t_net$cgrand$xforms61571(rf61545,_61547,mrf,xform,acc61546,rf,meta61549,k,rf61567,xforms,meta61572));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61611 = (function (rf61545,_61547,p__61600,mrf,vec__61601,xform,acc61546,rf,meta61549,k,xforms,rf61605,meta61612){
this.rf61545 = rf61545;
this._61547 = _61547;
this.p__61600 = p__61600;
this.mrf = mrf;
this.vec__61601 = vec__61601;
this.xform = xform;
this.acc61546 = acc61546;
this.rf = rf;
this.meta61549 = meta61549;
this.k = k;
this.xforms = xforms;
this.rf61605 = rf61605;
this.meta61612 = meta61612;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61613,meta61612__$1){
var self__ = this;
var _61613__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61611(self__.rf61545,self__._61547,self__.p__61600,self__.mrf,self__.vec__61601,self__.xform,self__.acc61546,self__.rf,self__.meta61549,self__.k,self__.xforms,self__.rf61605,meta61612__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61613){
var self__ = this;
var _61613__$1 = this;
return self__.meta61612;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61631 = (arguments.length - (1));
switch (G__61631) {
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.apply = (function (self__,args61615){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61615)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc61606,k__32940__auto__,v__32941__auto__){
var self__ = this;
var _61610 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__32940__auto__,v__32941__auto__], null);
var acc__32939__auto__ = (self__.rf61605.cljs$core$IFn$_invoke$arity$3 ? self__.rf61605.cljs$core$IFn$_invoke$arity$3(acc61606,self__.k,x) : self__.rf61605.call(null,acc61606,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61610 = this;
return (self__.rf61605.cljs$core$IFn$_invoke$arity$0 ? self__.rf61605.cljs$core$IFn$_invoke$arity$0() : self__.rf61605.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc61606){
var self__ = this;
var _61610 = this;
return (self__.rf61605.cljs$core$IFn$_invoke$arity$1 ? self__.rf61605.cljs$core$IFn$_invoke$arity$1(acc61606) : self__.rf61605.call(null,acc61606));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc61606,x){
var self__ = this;
var _61610 = this;
var acc__32939__auto__ = (self__.rf61605.cljs$core$IFn$_invoke$arity$3 ? self__.rf61605.cljs$core$IFn$_invoke$arity$3(acc61606,self__.k,x) : self__.rf61605.call(null,acc61606,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf61545","rf61545",1712557089,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_61547","_61547",160146817,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms61548","net.cgrand.xforms/t_net$cgrand$xforms61548",-1941284605,null)], null)),new cljs.core.Symbol(null,"p__61600","p__61600",307427204,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"vec__61601","vec__61601",1675517543,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"acc61546","acc61546",751746345,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta61549","meta61549",1025735467,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf61605","rf61605",-320460705,null),new cljs.core.Symbol(null,"meta61612","meta61612",-1246864766,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61611.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61611.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61611");

(net.cgrand.xforms.t_net$cgrand$xforms61611.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61611");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61611.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61611 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61611(rf61545,_61547,p__61600,mrf,vec__61601,xform,acc61546,rf,meta61549,k,xforms,rf61605,meta61612){
return (new net.cgrand.xforms.t_net$cgrand$xforms61611(rf61545,_61547,p__61600,mrf,vec__61601,xform,acc61546,rf,meta61549,k,xforms,rf61605,meta61612));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61548 = (function (xforms,rf,mrf,rf61545,meta61549){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rf61545 = rf61545;
this.meta61549 = meta61549;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61550,meta61549__$1){
var self__ = this;
var _61550__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61548(self__.xforms,self__.rf,self__.mrf,self__.rf61545,meta61549__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61550){
var self__ = this;
var _61550__$1 = this;
return self__.meta61549;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61561 = (arguments.length - (1));
switch (G__61561) {
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.apply = (function (self__,args61557){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61557)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc61546,k,xform){
var self__ = this;
var _61547 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,(function (rf61567){
var rf61567__$1 = net.cgrand.xforms.ensure_kvrf(rf61567);
return (new net.cgrand.xforms.t_net$cgrand$xforms61571(self__.rf61545,_61547,self__.mrf,xform,acc61546,self__.rf,self__.meta61549,k,rf61567__$1,self__.xforms,null));
}));
var acc__32939__auto__ = (function (){var G__61596 = acc61546;
var G__61597 = k;
var G__61598 = xform__$1(self__.mrf);
return (self__.rf61545.cljs$core$IFn$_invoke$arity$3 ? self__.rf61545.cljs$core$IFn$_invoke$arity$3(G__61596,G__61597,G__61598) : self__.rf61545.call(null,G__61596,G__61597,G__61598));
})();
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61547 = this;
return (self__.rf61545.cljs$core$IFn$_invoke$arity$0 ? self__.rf61545.cljs$core$IFn$_invoke$arity$0() : self__.rf61545.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc61546){
var self__ = this;
var _61547 = this;
return (self__.rf61545.cljs$core$IFn$_invoke$arity$1 ? self__.rf61545.cljs$core$IFn$_invoke$arity$1(acc61546) : self__.rf61545.call(null,acc61546));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc61546,p__61600){
var self__ = this;
var vec__61601 = p__61600;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(1),null);
var _61547 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,(function (rf61605){
var rf61605__$1 = net.cgrand.xforms.ensure_kvrf(rf61605);
return (new net.cgrand.xforms.t_net$cgrand$xforms61611(self__.rf61545,_61547,p__61600,self__.mrf,vec__61601,xform,acc61546,self__.rf,self__.meta61549,k,self__.xforms,rf61605__$1,null));
}));
var acc__32939__auto__ = (function (){var G__61639 = acc61546;
var G__61640 = k;
var G__61641 = xform__$1(self__.mrf);
return (self__.rf61545.cljs$core$IFn$_invoke$arity$3 ? self__.rf61545.cljs$core$IFn$_invoke$arity$3(G__61639,G__61640,G__61641) : self__.rf61545.call(null,G__61639,G__61640,G__61641));
})();
if(cljs.core.reduced_QMARK_(acc__32939__auto__)){
return acc__32939__auto__;
} else {
return acc__32939__auto__;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rf61545","rf61545",1712557089,null),new cljs.core.Symbol(null,"meta61549","meta61549",1025735467,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61548.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61548.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61548");

(net.cgrand.xforms.t_net$cgrand$xforms61548.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61548");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61548.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61548 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61548(xforms,rf,mrf,rf61545,meta61549){
return (new net.cgrand.xforms.t_net$cgrand$xforms61548(xforms,rf,mrf,rf61545,meta61549));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61654 = (function (xforms,rf,mrf,rfs,invoke_rfs,meta61655){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rfs = rfs;
this.invoke_rfs = invoke_rfs;
this.meta61655 = meta61655;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61656,meta61655__$1){
var self__ = this;
var _61656__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61654(self__.xforms,self__.rf,self__.mrf,self__.rfs,self__.invoke_rfs,meta61655__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61656){
var self__ = this;
var _61656__$1 = this;
return self__.meta61655;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61666 = (arguments.length - (1));
switch (G__61666) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.apply = (function (self__,args61661){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61661)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61653 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _61653 = this;
var G__61668 = (function (){var G__61669 = acc;
var G__61670 = (function (p1__60697_SHARP_,p2__60698_SHARP_){
return (p1__60697_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60697_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__60698_SHARP_) : p1__60697_SHARP_.call(null,p2__60698_SHARP_));
});
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__61669,G__61670) : self__.invoke_rfs.call(null,G__61669,G__61670));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__61668) : self__.rf.call(null,G__61668));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _61653 = this;
var acc__$1 = (function (){var G__61678 = acc;
var G__61679 = (function (p1__60699_SHARP_,p2__60700_SHARP_){
return (p1__60699_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__60699_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__60700_SHARP_,x) : p1__60699_SHARP_.call(null,p2__60700_SHARP_,x));
});
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__61678,G__61679) : self__.invoke_rfs.call(null,G__61678,G__61679));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _61653 = this;
var acc__$1 = (function (){var G__61682 = acc;
var G__61683 = (function (p1__60701_SHARP_,p2__60702_SHARP_){
return (p1__60701_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__60701_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__60702_SHARP_,k,v) : p1__60701_SHARP_.call(null,p2__60702_SHARP_,k,v));
});
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__61682,G__61683) : self__.invoke_rfs.call(null,G__61682,G__61683));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rfs","rfs",-70956169,null),new cljs.core.Symbol(null,"invoke-rfs","invoke-rfs",1691366545,null),new cljs.core.Symbol(null,"meta61655","meta61655",-865821975,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61654.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61654.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61654");

(net.cgrand.xforms.t_net$cgrand$xforms61654.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61654");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61654.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61654 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61654(xforms,rf,mrf,rfs,invoke_rfs,meta61655){
return (new net.cgrand.xforms.t_net$cgrand$xforms61654(xforms,rf,mrf,rfs,invoke_rfs,meta61655));
});



/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms61695 = (function (xforms_map,meta61696){
this.xforms_map = xforms_map;
this.meta61696 = meta61696;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61697,meta61696__$1){
var self__ = this;
var _61697__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms61695(self__.xforms_map,meta61696__$1));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61697){
var self__ = this;
var _61697__$1 = this;
return self__.meta61696;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL);

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__32942__auto__){
var self__ = this;
var this__32942__auto____$1 = this;
return this__32942__auto____$1;
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__61909 = (arguments.length - (1));
switch (G__61909) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.apply = (function (self__,args61702){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61702)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IFn$_invoke$arity$2 = (function (v,p__61910){
var self__ = this;
var vec__61911 = p__61910;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61911,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61911,(1),null);
var _61694 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _61694 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IFn$_invoke$arity$1 = (function (v){
var self__ = this;
var _61694 = this;
return cljs.core.persistent_BANG_(v);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.prototype.cljs$core$IFn$_invoke$arity$3 = (function (v,i,x){
var self__ = this;
var _61694 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms-map","xforms-map",-1836515838,null),new cljs.core.Symbol(null,"meta61696","meta61696",1824348512,null)], null);
}));

(net.cgrand.xforms.t_net$cgrand$xforms61695.cljs$lang$type = true);

(net.cgrand.xforms.t_net$cgrand$xforms61695.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms61695");

(net.cgrand.xforms.t_net$cgrand$xforms61695.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"net.cgrand.xforms/t_net$cgrand$xforms61695");
}));

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms61695.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms61695 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms61695(xforms_map,meta61696){
return (new net.cgrand.xforms.t_net$cgrand$xforms61695(xforms_map,meta61696));
});


net.cgrand.xforms.kvreducible_QMARK_ = (function net$cgrand$xforms$kvreducible_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition0$ & (1048576))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IKVReduce$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
}
});

(net.cgrand.xforms.KvRfable["_"] = true);

(net.cgrand.xforms.some_kvrf["_"] = (function (_){
return null;
}));

net.cgrand.xforms.ensure_kvrf = (function net$cgrand$xforms$ensure_kvrf(rf){
var or__5045__auto__ = net.cgrand.xforms.some_kvrf(rf);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new net.cgrand.xforms.t_net$cgrand$xforms60720(rf,or__5045__auto__,null));
}
});

/**
 * A transducer that reduces a collection to a 1-item collection consisting of only the reduced result.
 * Unlike reduce but like transduce it does call the completing arity (1) of the reducing fn.
 */
net.cgrand.xforms.reduce = (function net$cgrand$xforms$reduce(var_args){
var G__60771 = arguments.length;
switch (G__60771) {
case 1:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var vacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
var f__$1 = net.cgrand.xforms.ensure_kvrf(f);
return (new net.cgrand.xforms.t_net$cgrand$xforms60776(f__$1,rf,vacc,null));
});
}));

(net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function() {
var G__62070 = null;
var G__62070__0 = (function (){
return init;
});
var G__62070__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__62070__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__62070 = function(acc,x){
switch(arguments.length){
case 0:
return G__62070__0.call(this);
case 1:
return G__62070__1.call(this,acc);
case 2:
return G__62070__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62070.cljs$core$IFn$_invoke$arity$0 = G__62070__0;
G__62070.cljs$core$IFn$_invoke$arity$1 = G__62070__1;
G__62070.cljs$core$IFn$_invoke$arity$2 = G__62070__2;
return G__62070;
})()
);
}));

(net.cgrand.xforms.reduce.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.into_rf = (function net$cgrand$xforms$into_rf(to){
if((((!((to == null))))?(((((to.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === to.cljs$core$IEditableCollection$))))?true:(((!to.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to))){
if(cljs.core.map_QMARK_(to)){
return (new net.cgrand.xforms.t_net$cgrand$xforms60832(to,null));
} else {
return (function() {
var G__62071 = null;
var G__62071__0 = (function (){
return cljs.core.transient$(to);
});
var G__62071__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__62071__2 = (function (acc,x){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62071 = function(acc,x){
switch(arguments.length){
case 0:
return G__62071__0.call(this);
case 1:
return G__62071__1.call(this,acc);
case 2:
return G__62071__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62071.cljs$core$IFn$_invoke$arity$0 = G__62071__0;
G__62071.cljs$core$IFn$_invoke$arity$1 = G__62071__1;
G__62071.cljs$core$IFn$_invoke$arity$2 = G__62071__2;
return G__62071;
})()
}
} else {
if(cljs.core.map_QMARK_(to)){
return (new net.cgrand.xforms.t_net$cgrand$xforms60862(to,null));
} else {
return (function() {
var G__62073 = null;
var G__62073__0 = (function (){
return to;
});
var G__62073__1 = (function (acc){
return acc;
});
var G__62073__2 = (function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62073 = function(acc,x){
switch(arguments.length){
case 0:
return G__62073__0.call(this);
case 1:
return G__62073__1.call(this,acc);
case 2:
return G__62073__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62073.cljs$core$IFn$_invoke$arity$0 = G__62073__0;
G__62073.cljs$core$IFn$_invoke$arity$1 = G__62073__1;
G__62073.cljs$core$IFn$_invoke$arity$2 = G__62073__2;
return G__62073;
})()

}
}
});

/**
 * Like clojure.core/into but with a 1-arg arity returning a transducer which accumulate every input in a collection and outputs only the accumulated collection.
 */
net.cgrand.xforms.into = (function net$cgrand$xforms$into(var_args){
var G__60911 = arguments.length;
switch (G__60911) {
case 1:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1 = (function (to){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.into_rf(to));
}));

(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.identity,from);
}));

(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
var rf = (function (){var G__60920 = net.cgrand.xforms.into_rf(to);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__60920) : xform.call(null,G__60920));
})();
var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.map_QMARK_(from);
if(and__5043__auto__){
var and__5043__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(from);
if(and__5043__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var rf__$1 = temp__5802__auto__;
var G__60922 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),from);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__60922) : rf__$1.call(null,G__60922));
} else {
var G__60928 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),from);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__60928) : rf.call(null,G__60928));
}
}));

(net.cgrand.xforms.into.cljs$lang$maxFixedArity = 3);


net.cgrand.xforms.without_rf = (function net$cgrand$xforms$without_rf(from){
if((((!((from == null))))?(((((from.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === from.cljs$core$IEditableCollection$))))?true:(((!from.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from))){
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__62082 = null;
var G__62082__0 = (function (){
return cljs.core.transient$(from);
});
var G__62082__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__62082__2 = (function (acc,x){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62082 = function(acc,x){
switch(arguments.length){
case 0:
return G__62082__0.call(this);
case 1:
return G__62082__1.call(this,acc);
case 2:
return G__62082__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62082.cljs$core$IFn$_invoke$arity$0 = G__62082__0;
G__62082.cljs$core$IFn$_invoke$arity$1 = G__62082__1;
G__62082.cljs$core$IFn$_invoke$arity$2 = G__62082__2;
return G__62082;
})()
} else {
return (function() {
var G__62083 = null;
var G__62083__0 = (function (){
return cljs.core.transient$(from);
});
var G__62083__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__62083__2 = (function (acc,x){
return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62083 = function(acc,x){
switch(arguments.length){
case 0:
return G__62083__0.call(this);
case 1:
return G__62083__1.call(this,acc);
case 2:
return G__62083__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62083.cljs$core$IFn$_invoke$arity$0 = G__62083__0;
G__62083.cljs$core$IFn$_invoke$arity$1 = G__62083__1;
G__62083.cljs$core$IFn$_invoke$arity$2 = G__62083__2;
return G__62083;
})()
}
} else {
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__62084 = null;
var G__62084__0 = (function (){
return from;
});
var G__62084__1 = (function (acc){
return acc;
});
var G__62084__2 = (function (acc,x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62084 = function(acc,x){
switch(arguments.length){
case 0:
return G__62084__0.call(this);
case 1:
return G__62084__1.call(this,acc);
case 2:
return G__62084__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62084.cljs$core$IFn$_invoke$arity$0 = G__62084__0;
G__62084.cljs$core$IFn$_invoke$arity$1 = G__62084__1;
G__62084.cljs$core$IFn$_invoke$arity$2 = G__62084__2;
return G__62084;
})()
} else {
return (function() {
var G__62085 = null;
var G__62085__0 = (function (){
return from;
});
var G__62085__1 = (function (acc){
return acc;
});
var G__62085__2 = (function (acc,x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__62085 = function(acc,x){
switch(arguments.length){
case 0:
return G__62085__0.call(this);
case 1:
return G__62085__1.call(this,acc);
case 2:
return G__62085__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62085.cljs$core$IFn$_invoke$arity$0 = G__62085__0;
G__62085.cljs$core$IFn$_invoke$arity$1 = G__62085__1;
G__62085.cljs$core$IFn$_invoke$arity$2 = G__62085__2;
return G__62085;
})()

}
}
});

/**
 * The opposite of x/into: dissociate or disjoin from the target.
 */
net.cgrand.xforms.without = (function net$cgrand$xforms$without(var_args){
var G__60949 = arguments.length;
switch (G__60949) {
case 1:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1 = (function (target){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.without_rf(target));
}));

(net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2 = (function (target,keys){
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3(target,cljs.core.identity,keys);
}));

(net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3 = (function (target,xform,keys){
var rf = (function (){var G__60960 = net.cgrand.xforms.without_rf(target);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__60960) : xform.call(null,G__60960));
})();
var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.map_QMARK_(keys);
if(and__5043__auto__){
var and__5043__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(keys);
if(and__5043__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var rf__$1 = temp__5802__auto__;
var G__60970 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),keys);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__60970) : rf__$1.call(null,G__60970));
} else {
var G__60971 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),keys);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__60971) : rf.call(null,G__60971));
}
}));

(net.cgrand.xforms.without.cljs$lang$maxFixedArity = 3);


net.cgrand.xforms.minimum = (function net$cgrand$xforms$minimum(var_args){
var G__60979 = arguments.length;
switch (G__60979) {
case 1:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2(comparator,null);
}));

(net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_maximum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_maximum));
}));

(net.cgrand.xforms.minimum.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.maximum = (function net$cgrand$xforms$maximum(var_args){
var G__60989 = arguments.length;
switch (G__60989) {
case 1:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2(comparator,null);
}));

(net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_minimum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_minimum));
}));

(net.cgrand.xforms.maximum.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.min = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.min);

net.cgrand.xforms.max = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.max);

/**
 * When used as a value, it's an aggregating transducer that concatenates input values
 * into a single output value. 
 * When used as a function of two args (xform and coll) it's a transducing context that
 * concatenates all values in a string.
 */
net.cgrand.xforms.str = (function net$cgrand$xforms$str(var_args){
var G__61002 = arguments.length;
switch (G__61002) {
case 1:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.str)(rf);
}));

(net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,net.cgrand.xforms.rfs.str,coll);
}));

(net.cgrand.xforms.str.cljs$lang$maxFixedArity = 2);


/**
 * Transducer. Adds open as the first item, and close as the last. Optionally inserts delim between each input item.
 */
net.cgrand.xforms.wrap = (function net$cgrand$xforms$wrap(var_args){
var G__61025 = arguments.length;
switch (G__61025) {
case 2:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2 = (function (open,close){
return (function (rf){
var vrf = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(vrf,(function (acc,x){
var acc__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,open) : rf.call(null,acc,open));
cljs.core.vreset_BANG_(vrf,rf);

if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,x) : rf.call(null,acc__$1,x));
}
}));

return (function() {
var G__62111 = null;
var G__62111__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62111__1 = (function (acc){
var G__61030 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,close) : rf.call(null,acc,close)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__61030) : rf.call(null,G__61030));
});
var G__62111__2 = (function (acc,x){
var fexpr__61031 = cljs.core.deref(vrf);
return (fexpr__61031.cljs$core$IFn$_invoke$arity$2 ? fexpr__61031.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__61031.call(null,acc,x));
});
G__62111 = function(acc,x){
switch(arguments.length){
case 0:
return G__62111__0.call(this);
case 1:
return G__62111__1.call(this,acc);
case 2:
return G__62111__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62111.cljs$core$IFn$_invoke$arity$0 = G__62111__0;
G__62111.cljs$core$IFn$_invoke$arity$1 = G__62111__1;
G__62111.cljs$core$IFn$_invoke$arity$2 = G__62111__2;
return G__62111;
})()
});
}));

(net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3 = (function (open,close,delim){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(delim),net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2(open,close));
}));

(net.cgrand.xforms.wrap.cljs$lang$maxFixedArity = 3);


net.cgrand.xforms.vals = (function net$cgrand$xforms$vals(rf){
return (new net.cgrand.xforms.t_net$cgrand$xforms61040(rf,null));
});

net.cgrand.xforms.keys = (function net$cgrand$xforms$keys(rf){
return (new net.cgrand.xforms.t_net$cgrand$xforms61097(rf,null));
});

net.cgrand.xforms.key_SINGLEQUOTE_ = (function net$cgrand$xforms$key_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(0));
});

net.cgrand.xforms.val_SINGLEQUOTE_ = (function net$cgrand$xforms$val_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(1));
});

/**
 * The noop reducing function
 */
net.cgrand.xforms.nop_rf = (function net$cgrand$xforms$nop_rf(var_args){
var G__61146 = arguments.length;
switch (G__61146) {
case 1:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,_){
return acc;
}));

(net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3 = (function (acc,_,___$1){
return acc;
}));

(net.cgrand.xforms.nop_rf.cljs$lang$maxFixedArity = 3);


/**
 * Returns a multiplexable reducing function (doesn't init or complete the uderlying rf, wraps reduced -- like preserving-reduced)
 */
net.cgrand.xforms.multiplexable = (function net$cgrand$xforms$multiplexable(rf){
var rf__$1 = net.cgrand.xforms.ensure_kvrf(rf);
return (new net.cgrand.xforms.t_net$cgrand$xforms61154(rf__$1,null));
});

/**
 * Returns a transducer which partitions items according to kfn.
 * It applies the transform specified by xform to each partition.
 * Partitions contain the "value part" (as returned by vfn) of each item.
 * The resulting transformed items are wrapped back into a "pair" using the pair function.
 * Default values for kfn, vfn and pair are first, second (or identity if kfn is specified) and vector.
 */
net.cgrand.xforms.by_key = (function net$cgrand$xforms$by_key(var_args){
var G__61194 = arguments.length;
switch (G__61194) {
case 1:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(null,null,cljs.core.vector,xform);
}));

(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2 = (function (kfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,cljs.core.identity,cljs.core.vector,xform);
}));

(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3 = (function (kfn,vfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,vfn,cljs.core.vector,xform);
}));

(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4 = (function (kfn,vfn,pair,xform){
var pair__$1 = (((cljs.core.vector === pair))?new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165):pair);
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(rf);
var make_rf = (((pair__$1 == null))?cljs.core.constantly(mrf):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165),pair__$1))?(function (k){
return (function() {
var G__62122 = null;
var G__62122__1 = (function (acc){
return acc;
});
var G__62122__2 = (function (acc,v){
return (mrf.cljs$core$IFn$_invoke$arity$3 ? mrf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : mrf.call(null,acc,k,v));
});
G__62122 = function(acc,v){
switch(arguments.length){
case 1:
return G__62122__1.call(this,acc);
case 2:
return G__62122__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62122.cljs$core$IFn$_invoke$arity$1 = G__62122__1;
G__62122.cljs$core$IFn$_invoke$arity$2 = G__62122__2;
return G__62122;
})()
}):(function (k){
return (function() {
var G__62124 = null;
var G__62124__1 = (function (acc){
return acc;
});
var G__62124__2 = (function (acc,v){
var G__61209 = acc;
var G__61210 = (pair__$1.cljs$core$IFn$_invoke$arity$2 ? pair__$1.cljs$core$IFn$_invoke$arity$2(k,v) : pair__$1.call(null,k,v));
return (mrf.cljs$core$IFn$_invoke$arity$2 ? mrf.cljs$core$IFn$_invoke$arity$2(G__61209,G__61210) : mrf.call(null,G__61209,G__61210));
});
G__62124 = function(acc,v){
switch(arguments.length){
case 1:
return G__62124__1.call(this,acc);
case 2:
return G__62124__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62124.cljs$core$IFn$_invoke$arity$1 = G__62124__1;
G__62124.cljs$core$IFn$_invoke$arity$2 = G__62124__2;
return G__62124;
})()
})
));
var m = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if((((kfn == null)) && ((vfn == null)))){
return (new net.cgrand.xforms.t_net$cgrand$xforms61213(kfn,vfn,pair__$1,xform,rf,mrf,make_rf,m,null));
} else {
var kfn__$1 = (function (){var or__5045__auto__ = kfn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return net.cgrand.xforms.key_SINGLEQUOTE_;
}
})();
var vfn__$1 = (function (){var or__5045__auto__ = vfn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return net.cgrand.xforms.val_SINGLEQUOTE_;
}
})();
return (new net.cgrand.xforms.t_net$cgrand$xforms61273(kfn__$1,vfn__$1,pair__$1,xform,rf,mrf,make_rf,m,null));
}
});
}));

(net.cgrand.xforms.by_key.cljs$lang$maxFixedArity = 4);


/**
 * A shorthand for the common case (comp (x/by-key ...) (x/into coll)).
 */
net.cgrand.xforms.into_by_key = (function net$cgrand$xforms$into_by_key(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62135 = arguments.length;
var i__5770__auto___62136 = (0);
while(true){
if((i__5770__auto___62136 < len__5769__auto___62135)){
args__5775__auto__.push((arguments[i__5770__auto___62136]));

var G__62137 = (i__5770__auto___62136 + (1));
i__5770__auto___62136 = G__62137;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (coll,by_key_args){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.by_key,by_key_args),net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(coll));
}));

(net.cgrand.xforms.into_by_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(net.cgrand.xforms.into_by_key.cljs$lang$applyTo = (function (seq61352){
var G__61353 = cljs.core.first(seq61352);
var seq61352__$1 = cljs.core.next(seq61352);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61353,seq61352__$1);
}));


/**
 * Returns a partitioning transducer. Each partition is independently transformed using the xform transducer.
 */
net.cgrand.xforms.partition = (function net$cgrand$xforms$partition(var_args){
var G__61372 = arguments.length;
switch (G__61372) {
case 1:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1 = (function (n){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}));

(net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,step_or_xform){
if(cljs.core.fn_QMARK_(step_or_xform)){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,step_or_xform);
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,step_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
}));

(net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,step,pad_or_xform){
if(cljs.core.fn_QMARK_(pad_or_xform)){
var xform = pad_or_xform;
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60650_SHARP_){
if((dq === p1__60650_SHARP_)){
return null;
} else {
return p1__60650_SHARP_;
}
})),xform);
return (function() {
var G__62144 = null;
var G__62144__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62144__1 = (function (acc){
dq.clear();

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__62144__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__5636__auto___62150 = (function (){var x__5133__auto__ = n;
var y__5134__auto__ = step;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var __62151 = (0);
while(true){
if((__62151 < n__5636__auto___62150)){
dq.dequeue();

var G__62152 = (__62151 + (1));
__62151 = G__62152;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__62144 = function(acc,x){
switch(arguments.length){
case 0:
return G__62144__0.call(this);
case 1:
return G__62144__1.call(this,acc);
case 2:
return G__62144__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62144.cljs$core$IFn$_invoke$arity$0 = G__62144__0;
G__62144.cljs$core$IFn$_invoke$arity$1 = G__62144__1;
G__62144.cljs$core$IFn$_invoke$arity$2 = G__62144__2;
return G__62144;
})()
});
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4(n,step,pad_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
}));

(net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4 = (function (n,step,pad,xform){
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60658_SHARP_){
if((dq === p1__60658_SHARP_)){
return null;
} else {
return p1__60658_SHARP_;
}
})),xform);
return (function() {
var G__62161 = null;
var G__62161__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62161__1 = (function (acc){
if((cljs.core.deref(barrier) < n)){
var xform__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),xform__$1);
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$2,rf,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dq.getValues(),pad], null));
cljs.core.vreset_BANG_(barrier,n);

dq.clear();

return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__62161__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__5636__auto___62174 = (function (){var x__5133__auto__ = n;
var y__5134__auto__ = step;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var __62175 = (0);
while(true){
if((__62175 < n__5636__auto___62174)){
dq.dequeue();

var G__62177 = (__62175 + (1));
__62175 = G__62177;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__62161 = function(acc,x){
switch(arguments.length){
case 0:
return G__62161__0.call(this);
case 1:
return G__62161__1.call(this,acc);
case 2:
return G__62161__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62161.cljs$core$IFn$_invoke$arity$0 = G__62161__0;
G__62161.cljs$core$IFn$_invoke$arity$1 = G__62161__1;
G__62161.cljs$core$IFn$_invoke$arity$2 = G__62161__2;
return G__62161;
})()
});
}));

(net.cgrand.xforms.partition.cljs$lang$maxFixedArity = 4);


net.cgrand.xforms.take_last = (function net$cgrand$xforms$take_last(n){
return (function (rf){
var dq = (new goog.structs.Queue());
return (function() {
var G__62180 = null;
var G__62180__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62180__1 = (function (acc){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60660_SHARP_){
if((dq === p1__60660_SHARP_)){
return null;
} else {
return p1__60660_SHARP_;
}
})),rf,acc,dq.getValues());
});
var G__62180__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
dq.dequeue();
} else {
}

return acc;
});
G__62180 = function(acc,x){
switch(arguments.length){
case 0:
return G__62180__0.call(this);
case 1:
return G__62180__1.call(this,acc);
case 2:
return G__62180__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62180.cljs$core$IFn$_invoke$arity$0 = G__62180__0;
G__62180.cljs$core$IFn$_invoke$arity$1 = G__62180__1;
G__62180.cljs$core$IFn$_invoke$arity$2 = G__62180__2;
return G__62180;
})()
});
});

net.cgrand.xforms.drop_last = (function net$cgrand$xforms$drop_last(var_args){
var G__61452 = arguments.length;
switch (G__61452) {
case 0:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((1));
}));

(net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (rf){
var dq = (new goog.structs.Queue());
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60667_SHARP_){
if((dq === p1__60667_SHARP_)){
return null;
} else {
return p1__60667_SHARP_;
}
}));
var rf__$1 = xform(rf);
return (function() {
var G__62192 = null;
var G__62192__0 = (function (){
return (rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null));
});
var G__62192__1 = (function (acc){
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(acc) : rf__$1.call(null,acc));
});
var G__62192__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
var G__61457 = acc;
var G__61458 = dq.dequeue();
return (rf__$1.cljs$core$IFn$_invoke$arity$2 ? rf__$1.cljs$core$IFn$_invoke$arity$2(G__61457,G__61458) : rf__$1.call(null,G__61457,G__61458));
} else {
return acc;
}
});
G__62192 = function(acc,x){
switch(arguments.length){
case 0:
return G__62192__0.call(this);
case 1:
return G__62192__1.call(this,acc);
case 2:
return G__62192__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62192.cljs$core$IFn$_invoke$arity$0 = G__62192__0;
G__62192.cljs$core$IFn$_invoke$arity$1 = G__62192__1;
G__62192.cljs$core$IFn$_invoke$arity$2 = G__62192__2;
return G__62192;
})()
});
}));

(net.cgrand.xforms.drop_last.cljs$lang$maxFixedArity = 1);


/**
 * Given a fn that might be boolean valued or a comparator,
 *    return a fn that is a comparator.
 * 
 *    Copied from cljs.core: https://github.com/clojure/clojurescript/blob/95c5cf384a128503b072b7b1916af1a1d5c8871c/src/main/cljs/cljs/core.cljs#L2459-L2471
 */
net.cgrand.xforms.fn__GT_comparator = (function net$cgrand$xforms$fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x)))){
return (1);
} else {
return (0);
}
}
}
});
}
});

net.cgrand.xforms.sort = (function net$cgrand$xforms$sort(var_args){
var G__61464 = arguments.length;
switch (G__61464) {
case 0:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
}));

(net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (function (rf){
var buf = [];
return (function() {
var G__62200 = null;
var G__62200__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62200__1 = (function (acc){
var G__61474 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,acc,(function (){var G__61475 = buf;
G__61475.sort(net.cgrand.xforms.fn__GT_comparator(cmp));

return G__61475;
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__61474) : rf.call(null,G__61474));
});
var G__62200__2 = (function (acc,x){
buf.push(x);

return acc;
});
G__62200 = function(acc,x){
switch(arguments.length){
case 0:
return G__62200__0.call(this);
case 1:
return G__62200__1.call(this,acc);
case 2:
return G__62200__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62200.cljs$core$IFn$_invoke$arity$0 = G__62200__0;
G__62200.cljs$core$IFn$_invoke$arity$1 = G__62200__1;
G__62200.cljs$core$IFn$_invoke$arity$2 = G__62200__2;
return G__62200;
})()
});
}));

(net.cgrand.xforms.sort.cljs$lang$maxFixedArity = 1);


net.cgrand.xforms.sort_by = (function net$cgrand$xforms$sort_by(var_args){
var G__61480 = arguments.length;
switch (G__61480) {
case 1:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1 = (function (kfn){
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2(kfn,cljs.core.compare);
}));

(net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2 = (function (kfn,cmp){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((function (a,b){
var G__61484 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(a) : kfn.call(null,a));
var G__61485 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(b) : kfn.call(null,b));
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__61484,G__61485) : cmp.call(null,G__61484,G__61485));
}));
}));

(net.cgrand.xforms.sort_by.cljs$lang$maxFixedArity = 2);


/**
 * Transducer version of reductions. There's a difference in behavior when init is not provided: (f) is used.
 * So x/reductions works like x/reduce or transduce, not like reduce and reductions when no init and 1-item input.
 */
net.cgrand.xforms.reductions = (function net$cgrand$xforms$reductions(var_args){
var G__61490 = arguments.length;
switch (G__61490) {
case 1:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1 = (function (f){
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return (function (rf){
var prev = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(prev,prev);

return (function() {
var G__62210 = null;
var G__62210__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62210__1 = (function (acc){
if((cljs.core.deref(prev) === prev)){
var G__61501 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,init) : rf.call(null,acc,init)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__61501) : rf.call(null,G__61501));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__62210__2 = (function (acc,x){
while(true){
if((cljs.core.deref(prev) === prev)){
var acc__$1 = (function (){var G__61508 = acc;
var G__61509 = cljs.core.vreset_BANG_(prev,init);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61508,G__61509) : rf.call(null,G__61508,G__61509));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
var G__62212 = acc__$1;
var G__62213 = x;
acc = G__62212;
x = G__62213;
continue;
}
} else {
var curr = prev.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__61514 = prev.cljs$core$IDeref$_deref$arity$1(null);
var G__61515 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__61514,G__61515) : f.call(null,G__61514,G__61515));
})());
if(cljs.core.reduced_QMARK_(curr)){
return cljs.core.ensure_reduced((function (){var G__61518 = acc;
var G__61519 = cljs.core.deref(curr);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61518,G__61519) : rf.call(null,G__61518,G__61519));
})());
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,curr) : rf.call(null,acc,curr));
}
}
break;
}
});
G__62210 = function(acc,x){
switch(arguments.length){
case 0:
return G__62210__0.call(this);
case 1:
return G__62210__1.call(this,acc);
case 2:
return G__62210__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62210.cljs$core$IFn$_invoke$arity$0 = G__62210__0;
G__62210.cljs$core$IFn$_invoke$arity$1 = G__62210__1;
G__62210.cljs$core$IFn$_invoke$arity$2 = G__62210__2;
return G__62210;
})()
});
}));

(net.cgrand.xforms.reductions.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.avg = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.avg);

net.cgrand.xforms.sd = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.sd);

/**
 * Returns a transducer which computes an accumulator over the last n items
 * using two functions: f and its inverse invf.
 * 
 * The accumulator is initialized with (f).
 * It is updated to (f (invf acc out) in) where "acc" is the current value,
 * "in" the new item entering the window, "out" the item exiting the window.
 * The value passed to the dowstream reducing function is (f acc) enabling acc to be
 * mutable and 1-arity f to project its state to a value.
 * 
 * If you don't want to see the accumulator until the window is full then you need to
 * use (drop (dec n)) to remove them.
 * 
 * If you don't have an inverse function, consider using partition and reduce: 
 * (x/partition 4 (x/reduce rf))
 */
net.cgrand.xforms.window = (function net$cgrand$xforms$window(n,f,invf){
return (function (rf){
var ring = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var vi = cljs.core.volatile_BANG_((- n));
var vwacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
return (function() {
var G__62214 = null;
var G__62214__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62214__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__62214__2 = (function (acc,x){
var i = cljs.core.deref(vi);
var wacc = cljs.core.deref(vwacc);
if((i < (0))){
(ring[(n + i)] = x);

cljs.core.vreset_BANG_(vi,(i + (1)));

var G__61530 = acc;
var G__61531 = (function (){var G__61532 = cljs.core.vreset_BANG_(vwacc,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(wacc,x) : f.call(null,wacc,x)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61532) : f.call(null,G__61532));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61530,G__61531) : rf.call(null,G__61530,G__61531));
} else {
var x_SINGLEQUOTE_ = (ring[i]);
(ring[i] = x);

cljs.core.vreset_BANG_(vi,(function (){var i__$1 = (i + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1)){
return (0);
} else {
return i__$1;
}
})());

var G__61533 = acc;
var G__61534 = (function (){var G__61535 = cljs.core.vreset_BANG_(vwacc,(function (){var G__61536 = (invf.cljs$core$IFn$_invoke$arity$2 ? invf.cljs$core$IFn$_invoke$arity$2(wacc,x_SINGLEQUOTE_) : invf.call(null,wacc,x_SINGLEQUOTE_));
var G__61537 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__61536,G__61537) : f.call(null,G__61536,G__61537));
})());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61535) : f.call(null,G__61535));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61533,G__61534) : rf.call(null,G__61533,G__61534));
}
});
G__62214 = function(acc,x){
switch(arguments.length){
case 0:
return G__62214__0.call(this);
case 1:
return G__62214__1.call(this,acc);
case 2:
return G__62214__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62214.cljs$core$IFn$_invoke$arity$0 = G__62214__0;
G__62214.cljs$core$IFn$_invoke$arity$1 = G__62214__1;
G__62214.cljs$core$IFn$_invoke$arity$2 = G__62214__2;
return G__62214;
})()
});
});

/**
 * Count the number of items. Either used directly as a transducer or invoked with two args
 * as a transducing context.
 */
net.cgrand.xforms.count = (function net$cgrand$xforms$count(var_args){
var G__61540 = arguments.length;
switch (G__61540) {
case 1:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1 = (function (rf){
var n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__62221 = null;
var G__62221__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62221__1 = (function (acc){
var G__61542 = cljs.core.unreduced((function (){var G__61543 = acc;
var G__61544 = cljs.core.deref(n);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__61543,G__61544) : rf.call(null,G__61543,G__61544));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__61542) : rf.call(null,G__61542));
});
var G__62221__2 = (function (acc,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);

return acc;
});
G__62221 = function(acc,_){
switch(arguments.length){
case 0:
return G__62221__0.call(this);
case 1:
return G__62221__1.call(this,acc);
case 2:
return G__62221__2.call(this,acc,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62221.cljs$core$IFn$_invoke$arity$0 = G__62221__0;
G__62221.cljs$core$IFn$_invoke$arity$1 = G__62221__1;
G__62221.cljs$core$IFn$_invoke$arity$2 = G__62221__2;
return G__62221;
})()
}));

(net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,net.cgrand.xforms.count),net.cgrand.xforms.rfs.last,coll);
}));

(net.cgrand.xforms.count.cljs$lang$maxFixedArity = 2);


/**
 * Returns a transducer that runs several transducers (sepcified by xforms) in parallel.
 * If xforms is a map, values of the map are transducers and keys are used to tag each
 * transducer output:
 * => (into [] (x/multiplex [(map inc) (map dec)]) (range 3))
 * [1 -1 2 0 3 1] ; no map, no tag
 * => (into [] (x/multiplex {:up (map inc) :down (map dec)}) (range 3))
 * [[:up 1] [:down -1] [:up 2] [:down 0] [:up 3] [:down 1]]
 */
net.cgrand.xforms.multiplex = (function net$cgrand$xforms$multiplex(xforms){
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(net.cgrand.xforms.ensure_kvrf(rf));
var rfs = cljs.core.volatile_BANG_(((cljs.core.map_QMARK_(xforms))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (rf61545){
var rf61545__$1 = net.cgrand.xforms.ensure_kvrf(rf61545);
return (new net.cgrand.xforms.t_net$cgrand$xforms61548(xforms,rf,mrf,rf61545__$1,null));
}),xforms):net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60692_SHARP_){
return (p1__60692_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60692_SHARP_.cljs$core$IFn$_invoke$arity$1(mrf) : p1__60692_SHARP_.call(null,mrf));
})),xforms)));
var invoke_rfs = ((cljs.core.map_QMARK_(xforms))?(function (acc,invoke){
return cljs.core.reduce_kv((function (acc__$1,tag,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),tag));

var G__61649 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__61649) : rf__$1.call(null,G__61649));
}
} else {
return acc__$2;
}
}),acc,cljs.core.deref(rfs));
}):(function (acc,invoke){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),rf__$1));

var G__61652 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__61652) : rf__$1.call(null,G__61652));
}
} else {
return acc__$2;
}
}),acc,cljs.core.deref(rfs));
}));
return (new net.cgrand.xforms.t_net$cgrand$xforms61654(xforms,rf,mrf,rfs,invoke_rfs,null));
});
});

net.cgrand.xforms.last = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.last);

/**
 * Process coll through the specified xform and returns the first local true value.
 */
net.cgrand.xforms.some = (function net$cgrand$xforms$some(xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,net.cgrand.xforms.rfs.some,null,coll);
});

/**
 * Performs several transductions over coll at once. xforms-map can be a map or a sequential collection.
 * When xforms-map is a map, returns a map with the same keyset as xforms-map.
 * When xforms-map is a sequential collection returns a vector of same length as xforms-map.
 * Returns a transducer when coll is omitted.
 */
net.cgrand.xforms.transjuxt = (function net$cgrand$xforms$transjuxt(var_args){
var G__61693 = arguments.length;
switch (G__61693) {
case 1:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1 = (function (xforms_map){
var collect_xform = ((cljs.core.map_QMARK_(xforms_map))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY):net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((new net.cgrand.xforms.t_net$cgrand$xforms61695(xforms_map,null))));
var xforms_map__$1 = ((cljs.core.map_QMARK_(xforms_map))?xforms_map:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),xforms_map));
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.multiplex(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60704_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(p1__60704_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$1((1)));
}))),xforms_map__$1)),collect_xform);
}));

(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2 = (function (xforms_map,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1(xforms_map),net.cgrand.xforms.rfs.last,coll);
}));

(net.cgrand.xforms.transjuxt.cljs$lang$maxFixedArity = 2);


/**
 * Measures the time spent in this transformation and prints the measured time.
 * tag-or-f may be either a function of 1 argument (measured time in ms) in which case
 * this function will be called instead of printing, or tag-or-f will be print before the measured time.
 */
net.cgrand.xforms.time = (function net$cgrand$xforms$time(var_args){
var G__61949 = arguments.length;
switch (G__61949) {
case 1:
return net.cgrand.xforms.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.time.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return net.cgrand.xforms.time.cljs$core$IFn$_invoke$arity$2("Elapsed time",xform);
}));

(net.cgrand.xforms.time.cljs$core$IFn$_invoke$arity$2 = (function (tag_or_f,xform){
var pt = ((cljs.core.fn_QMARK_(tag_or_f))?tag_or_f:(function (p1__60708_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_or_f),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60708_SHARP_)," msecs"].join('')], 0));
}));
return (function (rf){
var at = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var rf__$1 = (function() {
var G__62247 = null;
var G__62247__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__62247__1 = (function (acc){
var t = cljs.core.system_time();
var r = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(at,cljs.core._PLUS_,(t - cljs.core.system_time()));

return r;
});
var G__62247__2 = (function (acc,x){
var t = cljs.core.system_time();
var r = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(at,cljs.core._PLUS_,(t - cljs.core.system_time()));

return r;
});
G__62247 = function(acc,x){
switch(arguments.length){
case 0:
return G__62247__0.call(this);
case 1:
return G__62247__1.call(this,acc);
case 2:
return G__62247__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62247.cljs$core$IFn$_invoke$arity$0 = G__62247__0;
G__62247.cljs$core$IFn$_invoke$arity$1 = G__62247__1;
G__62247.cljs$core$IFn$_invoke$arity$2 = G__62247__2;
return G__62247;
})()
;
var rf__$2 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf__$1) : xform.call(null,rf__$1));
return (function() {
var G__62263 = null;
var G__62263__0 = (function (){
return (rf__$2.cljs$core$IFn$_invoke$arity$0 ? rf__$2.cljs$core$IFn$_invoke$arity$0() : rf__$2.call(null));
});
var G__62263__1 = (function (acc){
var t = cljs.core.system_time();
var r = (rf__$2.cljs$core$IFn$_invoke$arity$1 ? rf__$2.cljs$core$IFn$_invoke$arity$1(acc) : rf__$2.call(null,acc));
var total = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(at,cljs.core._PLUS_,(cljs.core.system_time() - t));
(pt.cljs$core$IFn$_invoke$arity$1 ? pt.cljs$core$IFn$_invoke$arity$1(total) : pt.call(null,total));

return r;
});
var G__62263__2 = (function (acc,x){
var t = cljs.core.system_time();
var r = (rf__$2.cljs$core$IFn$_invoke$arity$2 ? rf__$2.cljs$core$IFn$_invoke$arity$2(acc,x) : rf__$2.call(null,acc,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(at,cljs.core._PLUS_,(cljs.core.system_time() - t));

return r;
});
G__62263 = function(acc,x){
switch(arguments.length){
case 0:
return G__62263__0.call(this);
case 1:
return G__62263__1.call(this,acc);
case 2:
return G__62263__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62263.cljs$core$IFn$_invoke$arity$0 = G__62263__0;
G__62263.cljs$core$IFn$_invoke$arity$1 = G__62263__1;
G__62263.cljs$core$IFn$_invoke$arity$2 = G__62263__2;
return G__62263;
})()
});
}));

(net.cgrand.xforms.time.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=net.cgrand.xforms.js.map
