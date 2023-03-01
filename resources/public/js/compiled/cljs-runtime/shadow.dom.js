goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36423 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36423(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36424 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36424(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35324 = coll;
var G__35325 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35324,G__35325) : shadow.dom.lazy_native_coll_seq.call(null,G__35324,G__35325));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35358 = arguments.length;
switch (G__35358) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35368 = arguments.length;
switch (G__35368) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35379 = arguments.length;
switch (G__35379) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35399 = arguments.length;
switch (G__35399) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35424 = arguments.length;
switch (G__35424) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35451 = arguments.length;
switch (G__35451) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35462){if((e35462 instanceof Object)){
var e = e35462;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35462;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35487 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35488 = null;
var count__35489 = (0);
var i__35490 = (0);
while(true){
if((i__35490 < count__35489)){
var el = chunk__35488.cljs$core$IIndexed$_nth$arity$2(null,i__35490);
var handler_36464__$1 = ((function (seq__35487,chunk__35488,count__35489,i__35490,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35487,chunk__35488,count__35489,i__35490,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36464__$1);


var G__36465 = seq__35487;
var G__36466 = chunk__35488;
var G__36467 = count__35489;
var G__36468 = (i__35490 + (1));
seq__35487 = G__36465;
chunk__35488 = G__36466;
count__35489 = G__36467;
i__35490 = G__36468;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35487);
if(temp__5804__auto__){
var seq__35487__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35487__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35487__$1);
var G__36469 = cljs.core.chunk_rest(seq__35487__$1);
var G__36470 = c__5568__auto__;
var G__36471 = cljs.core.count(c__5568__auto__);
var G__36472 = (0);
seq__35487 = G__36469;
chunk__35488 = G__36470;
count__35489 = G__36471;
i__35490 = G__36472;
continue;
} else {
var el = cljs.core.first(seq__35487__$1);
var handler_36473__$1 = ((function (seq__35487,chunk__35488,count__35489,i__35490,el,seq__35487__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35487,chunk__35488,count__35489,i__35490,el,seq__35487__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36473__$1);


var G__36474 = cljs.core.next(seq__35487__$1);
var G__36475 = null;
var G__36476 = (0);
var G__36477 = (0);
seq__35487 = G__36474;
chunk__35488 = G__36475;
count__35489 = G__36476;
i__35490 = G__36477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35515 = arguments.length;
switch (G__35515) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35548 = cljs.core.seq(events);
var chunk__35549 = null;
var count__35550 = (0);
var i__35551 = (0);
while(true){
if((i__35551 < count__35550)){
var vec__35567 = chunk__35549.cljs$core$IIndexed$_nth$arity$2(null,i__35551);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36481 = seq__35548;
var G__36482 = chunk__35549;
var G__36483 = count__35550;
var G__36484 = (i__35551 + (1));
seq__35548 = G__36481;
chunk__35549 = G__36482;
count__35550 = G__36483;
i__35551 = G__36484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35548);
if(temp__5804__auto__){
var seq__35548__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35548__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35548__$1);
var G__36486 = cljs.core.chunk_rest(seq__35548__$1);
var G__36487 = c__5568__auto__;
var G__36488 = cljs.core.count(c__5568__auto__);
var G__36489 = (0);
seq__35548 = G__36486;
chunk__35549 = G__36487;
count__35550 = G__36488;
i__35551 = G__36489;
continue;
} else {
var vec__35573 = cljs.core.first(seq__35548__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35573,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36490 = cljs.core.next(seq__35548__$1);
var G__36491 = null;
var G__36492 = (0);
var G__36493 = (0);
seq__35548 = G__36490;
chunk__35549 = G__36491;
count__35550 = G__36492;
i__35551 = G__36493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35585 = cljs.core.seq(styles);
var chunk__35586 = null;
var count__35587 = (0);
var i__35588 = (0);
while(true){
if((i__35588 < count__35587)){
var vec__35602 = chunk__35586.cljs$core$IIndexed$_nth$arity$2(null,i__35588);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36495 = seq__35585;
var G__36496 = chunk__35586;
var G__36497 = count__35587;
var G__36498 = (i__35588 + (1));
seq__35585 = G__36495;
chunk__35586 = G__36496;
count__35587 = G__36497;
i__35588 = G__36498;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35585);
if(temp__5804__auto__){
var seq__35585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35585__$1);
var G__36499 = cljs.core.chunk_rest(seq__35585__$1);
var G__36500 = c__5568__auto__;
var G__36501 = cljs.core.count(c__5568__auto__);
var G__36502 = (0);
seq__35585 = G__36499;
chunk__35586 = G__36500;
count__35587 = G__36501;
i__35588 = G__36502;
continue;
} else {
var vec__35614 = cljs.core.first(seq__35585__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36504 = cljs.core.next(seq__35585__$1);
var G__36505 = null;
var G__36506 = (0);
var G__36507 = (0);
seq__35585 = G__36504;
chunk__35586 = G__36505;
count__35587 = G__36506;
i__35588 = G__36507;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35628_36508 = key;
var G__35628_36509__$1 = (((G__35628_36508 instanceof cljs.core.Keyword))?G__35628_36508.fqn:null);
switch (G__35628_36509__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36512 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36512,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36512,"aria-");
}
})())){
el.setAttribute(ks_36512,value);
} else {
(el[ks_36512] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35670){
var map__35671 = p__35670;
var map__35671__$1 = cljs.core.__destructure_map(map__35671);
var props = map__35671__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35671__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35676 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35676,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35676,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35676,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35681 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35681,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35681;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35688 = arguments.length;
switch (G__35688) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35695){
var vec__35696 = p__35695;
var seq__35697 = cljs.core.seq(vec__35696);
var first__35698 = cljs.core.first(seq__35697);
var seq__35697__$1 = cljs.core.next(seq__35697);
var nn = first__35698;
var first__35698__$1 = cljs.core.first(seq__35697__$1);
var seq__35697__$2 = cljs.core.next(seq__35697__$1);
var np = first__35698__$1;
var nc = seq__35697__$2;
var node = vec__35696;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35701 = nn;
var G__35702 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35701,G__35702) : create_fn.call(null,G__35701,G__35702));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35703 = nn;
var G__35704 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35703,G__35704) : create_fn.call(null,G__35703,G__35704));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35706 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(1),null);
var seq__35711_36529 = cljs.core.seq(node_children);
var chunk__35712_36530 = null;
var count__35713_36531 = (0);
var i__35714_36532 = (0);
while(true){
if((i__35714_36532 < count__35713_36531)){
var child_struct_36533 = chunk__35712_36530.cljs$core$IIndexed$_nth$arity$2(null,i__35714_36532);
var children_36534 = shadow.dom.dom_node(child_struct_36533);
if(cljs.core.seq_QMARK_(children_36534)){
var seq__35753_36535 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36534));
var chunk__35755_36536 = null;
var count__35756_36537 = (0);
var i__35757_36538 = (0);
while(true){
if((i__35757_36538 < count__35756_36537)){
var child_36540 = chunk__35755_36536.cljs$core$IIndexed$_nth$arity$2(null,i__35757_36538);
if(cljs.core.truth_(child_36540)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36540);


var G__36541 = seq__35753_36535;
var G__36542 = chunk__35755_36536;
var G__36543 = count__35756_36537;
var G__36544 = (i__35757_36538 + (1));
seq__35753_36535 = G__36541;
chunk__35755_36536 = G__36542;
count__35756_36537 = G__36543;
i__35757_36538 = G__36544;
continue;
} else {
var G__36545 = seq__35753_36535;
var G__36546 = chunk__35755_36536;
var G__36547 = count__35756_36537;
var G__36548 = (i__35757_36538 + (1));
seq__35753_36535 = G__36545;
chunk__35755_36536 = G__36546;
count__35756_36537 = G__36547;
i__35757_36538 = G__36548;
continue;
}
} else {
var temp__5804__auto___36549 = cljs.core.seq(seq__35753_36535);
if(temp__5804__auto___36549){
var seq__35753_36550__$1 = temp__5804__auto___36549;
if(cljs.core.chunked_seq_QMARK_(seq__35753_36550__$1)){
var c__5568__auto___36551 = cljs.core.chunk_first(seq__35753_36550__$1);
var G__36552 = cljs.core.chunk_rest(seq__35753_36550__$1);
var G__36553 = c__5568__auto___36551;
var G__36554 = cljs.core.count(c__5568__auto___36551);
var G__36555 = (0);
seq__35753_36535 = G__36552;
chunk__35755_36536 = G__36553;
count__35756_36537 = G__36554;
i__35757_36538 = G__36555;
continue;
} else {
var child_36556 = cljs.core.first(seq__35753_36550__$1);
if(cljs.core.truth_(child_36556)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36556);


var G__36559 = cljs.core.next(seq__35753_36550__$1);
var G__36560 = null;
var G__36561 = (0);
var G__36562 = (0);
seq__35753_36535 = G__36559;
chunk__35755_36536 = G__36560;
count__35756_36537 = G__36561;
i__35757_36538 = G__36562;
continue;
} else {
var G__36563 = cljs.core.next(seq__35753_36550__$1);
var G__36564 = null;
var G__36565 = (0);
var G__36566 = (0);
seq__35753_36535 = G__36563;
chunk__35755_36536 = G__36564;
count__35756_36537 = G__36565;
i__35757_36538 = G__36566;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36534);
}


var G__36567 = seq__35711_36529;
var G__36568 = chunk__35712_36530;
var G__36569 = count__35713_36531;
var G__36570 = (i__35714_36532 + (1));
seq__35711_36529 = G__36567;
chunk__35712_36530 = G__36568;
count__35713_36531 = G__36569;
i__35714_36532 = G__36570;
continue;
} else {
var temp__5804__auto___36571 = cljs.core.seq(seq__35711_36529);
if(temp__5804__auto___36571){
var seq__35711_36572__$1 = temp__5804__auto___36571;
if(cljs.core.chunked_seq_QMARK_(seq__35711_36572__$1)){
var c__5568__auto___36573 = cljs.core.chunk_first(seq__35711_36572__$1);
var G__36574 = cljs.core.chunk_rest(seq__35711_36572__$1);
var G__36575 = c__5568__auto___36573;
var G__36576 = cljs.core.count(c__5568__auto___36573);
var G__36577 = (0);
seq__35711_36529 = G__36574;
chunk__35712_36530 = G__36575;
count__35713_36531 = G__36576;
i__35714_36532 = G__36577;
continue;
} else {
var child_struct_36578 = cljs.core.first(seq__35711_36572__$1);
var children_36579 = shadow.dom.dom_node(child_struct_36578);
if(cljs.core.seq_QMARK_(children_36579)){
var seq__35791_36580 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36579));
var chunk__35793_36581 = null;
var count__35794_36582 = (0);
var i__35795_36583 = (0);
while(true){
if((i__35795_36583 < count__35794_36582)){
var child_36584 = chunk__35793_36581.cljs$core$IIndexed$_nth$arity$2(null,i__35795_36583);
if(cljs.core.truth_(child_36584)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36584);


var G__36585 = seq__35791_36580;
var G__36586 = chunk__35793_36581;
var G__36587 = count__35794_36582;
var G__36588 = (i__35795_36583 + (1));
seq__35791_36580 = G__36585;
chunk__35793_36581 = G__36586;
count__35794_36582 = G__36587;
i__35795_36583 = G__36588;
continue;
} else {
var G__36589 = seq__35791_36580;
var G__36590 = chunk__35793_36581;
var G__36591 = count__35794_36582;
var G__36592 = (i__35795_36583 + (1));
seq__35791_36580 = G__36589;
chunk__35793_36581 = G__36590;
count__35794_36582 = G__36591;
i__35795_36583 = G__36592;
continue;
}
} else {
var temp__5804__auto___36593__$1 = cljs.core.seq(seq__35791_36580);
if(temp__5804__auto___36593__$1){
var seq__35791_36594__$1 = temp__5804__auto___36593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35791_36594__$1)){
var c__5568__auto___36596 = cljs.core.chunk_first(seq__35791_36594__$1);
var G__36597 = cljs.core.chunk_rest(seq__35791_36594__$1);
var G__36598 = c__5568__auto___36596;
var G__36599 = cljs.core.count(c__5568__auto___36596);
var G__36600 = (0);
seq__35791_36580 = G__36597;
chunk__35793_36581 = G__36598;
count__35794_36582 = G__36599;
i__35795_36583 = G__36600;
continue;
} else {
var child_36601 = cljs.core.first(seq__35791_36594__$1);
if(cljs.core.truth_(child_36601)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36601);


var G__36602 = cljs.core.next(seq__35791_36594__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__35791_36580 = G__36602;
chunk__35793_36581 = G__36603;
count__35794_36582 = G__36604;
i__35795_36583 = G__36605;
continue;
} else {
var G__36606 = cljs.core.next(seq__35791_36594__$1);
var G__36607 = null;
var G__36608 = (0);
var G__36609 = (0);
seq__35791_36580 = G__36606;
chunk__35793_36581 = G__36607;
count__35794_36582 = G__36608;
i__35795_36583 = G__36609;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36579);
}


var G__36610 = cljs.core.next(seq__35711_36572__$1);
var G__36611 = null;
var G__36612 = (0);
var G__36613 = (0);
seq__35711_36529 = G__36610;
chunk__35712_36530 = G__36611;
count__35713_36531 = G__36612;
i__35714_36532 = G__36613;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35866 = cljs.core.seq(node);
var chunk__35867 = null;
var count__35868 = (0);
var i__35869 = (0);
while(true){
if((i__35869 < count__35868)){
var n = chunk__35867.cljs$core$IIndexed$_nth$arity$2(null,i__35869);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36619 = seq__35866;
var G__36620 = chunk__35867;
var G__36621 = count__35868;
var G__36622 = (i__35869 + (1));
seq__35866 = G__36619;
chunk__35867 = G__36620;
count__35868 = G__36621;
i__35869 = G__36622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35866);
if(temp__5804__auto__){
var seq__35866__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35866__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35866__$1);
var G__36623 = cljs.core.chunk_rest(seq__35866__$1);
var G__36624 = c__5568__auto__;
var G__36625 = cljs.core.count(c__5568__auto__);
var G__36626 = (0);
seq__35866 = G__36623;
chunk__35867 = G__36624;
count__35868 = G__36625;
i__35869 = G__36626;
continue;
} else {
var n = cljs.core.first(seq__35866__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36627 = cljs.core.next(seq__35866__$1);
var G__36628 = null;
var G__36629 = (0);
var G__36630 = (0);
seq__35866 = G__36627;
chunk__35867 = G__36628;
count__35868 = G__36629;
i__35869 = G__36630;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35912 = arguments.length;
switch (G__35912) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35946 = arguments.length;
switch (G__35946) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35969 = arguments.length;
switch (G__35969) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36644 = arguments.length;
var i__5770__auto___36645 = (0);
while(true){
if((i__5770__auto___36645 < len__5769__auto___36644)){
args__5775__auto__.push((arguments[i__5770__auto___36645]));

var G__36646 = (i__5770__auto___36645 + (1));
i__5770__auto___36645 = G__36646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36005_36648 = cljs.core.seq(nodes);
var chunk__36006_36649 = null;
var count__36007_36650 = (0);
var i__36008_36651 = (0);
while(true){
if((i__36008_36651 < count__36007_36650)){
var node_36652 = chunk__36006_36649.cljs$core$IIndexed$_nth$arity$2(null,i__36008_36651);
fragment.appendChild(shadow.dom._to_dom(node_36652));


var G__36653 = seq__36005_36648;
var G__36654 = chunk__36006_36649;
var G__36655 = count__36007_36650;
var G__36656 = (i__36008_36651 + (1));
seq__36005_36648 = G__36653;
chunk__36006_36649 = G__36654;
count__36007_36650 = G__36655;
i__36008_36651 = G__36656;
continue;
} else {
var temp__5804__auto___36657 = cljs.core.seq(seq__36005_36648);
if(temp__5804__auto___36657){
var seq__36005_36658__$1 = temp__5804__auto___36657;
if(cljs.core.chunked_seq_QMARK_(seq__36005_36658__$1)){
var c__5568__auto___36659 = cljs.core.chunk_first(seq__36005_36658__$1);
var G__36660 = cljs.core.chunk_rest(seq__36005_36658__$1);
var G__36661 = c__5568__auto___36659;
var G__36662 = cljs.core.count(c__5568__auto___36659);
var G__36663 = (0);
seq__36005_36648 = G__36660;
chunk__36006_36649 = G__36661;
count__36007_36650 = G__36662;
i__36008_36651 = G__36663;
continue;
} else {
var node_36667 = cljs.core.first(seq__36005_36658__$1);
fragment.appendChild(shadow.dom._to_dom(node_36667));


var G__36668 = cljs.core.next(seq__36005_36658__$1);
var G__36669 = null;
var G__36670 = (0);
var G__36671 = (0);
seq__36005_36648 = G__36668;
chunk__36006_36649 = G__36669;
count__36007_36650 = G__36670;
i__36008_36651 = G__36671;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36001){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36001));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36018_36673 = cljs.core.seq(scripts);
var chunk__36019_36674 = null;
var count__36020_36675 = (0);
var i__36021_36676 = (0);
while(true){
if((i__36021_36676 < count__36020_36675)){
var vec__36034_36677 = chunk__36019_36674.cljs$core$IIndexed$_nth$arity$2(null,i__36021_36676);
var script_tag_36678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36034_36677,(0),null);
var script_body_36679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36034_36677,(1),null);
eval(script_body_36679);


var G__36680 = seq__36018_36673;
var G__36681 = chunk__36019_36674;
var G__36682 = count__36020_36675;
var G__36683 = (i__36021_36676 + (1));
seq__36018_36673 = G__36680;
chunk__36019_36674 = G__36681;
count__36020_36675 = G__36682;
i__36021_36676 = G__36683;
continue;
} else {
var temp__5804__auto___36684 = cljs.core.seq(seq__36018_36673);
if(temp__5804__auto___36684){
var seq__36018_36685__$1 = temp__5804__auto___36684;
if(cljs.core.chunked_seq_QMARK_(seq__36018_36685__$1)){
var c__5568__auto___36686 = cljs.core.chunk_first(seq__36018_36685__$1);
var G__36687 = cljs.core.chunk_rest(seq__36018_36685__$1);
var G__36688 = c__5568__auto___36686;
var G__36689 = cljs.core.count(c__5568__auto___36686);
var G__36690 = (0);
seq__36018_36673 = G__36687;
chunk__36019_36674 = G__36688;
count__36020_36675 = G__36689;
i__36021_36676 = G__36690;
continue;
} else {
var vec__36043_36691 = cljs.core.first(seq__36018_36685__$1);
var script_tag_36692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36691,(0),null);
var script_body_36693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36691,(1),null);
eval(script_body_36693);


var G__36694 = cljs.core.next(seq__36018_36685__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36018_36673 = G__36694;
chunk__36019_36674 = G__36695;
count__36020_36675 = G__36696;
i__36021_36676 = G__36697;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36049){
var vec__36050 = p__36049;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36050,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36050,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36067 = arguments.length;
switch (G__36067) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36091 = cljs.core.seq(style_keys);
var chunk__36092 = null;
var count__36093 = (0);
var i__36094 = (0);
while(true){
if((i__36094 < count__36093)){
var it = chunk__36092.cljs$core$IIndexed$_nth$arity$2(null,i__36094);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36716 = seq__36091;
var G__36717 = chunk__36092;
var G__36718 = count__36093;
var G__36719 = (i__36094 + (1));
seq__36091 = G__36716;
chunk__36092 = G__36717;
count__36093 = G__36718;
i__36094 = G__36719;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36091);
if(temp__5804__auto__){
var seq__36091__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36091__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36091__$1);
var G__36720 = cljs.core.chunk_rest(seq__36091__$1);
var G__36721 = c__5568__auto__;
var G__36722 = cljs.core.count(c__5568__auto__);
var G__36723 = (0);
seq__36091 = G__36720;
chunk__36092 = G__36721;
count__36093 = G__36722;
i__36094 = G__36723;
continue;
} else {
var it = cljs.core.first(seq__36091__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36724 = cljs.core.next(seq__36091__$1);
var G__36725 = null;
var G__36726 = (0);
var G__36727 = (0);
seq__36091 = G__36724;
chunk__36092 = G__36725;
count__36093 = G__36726;
i__36094 = G__36727;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36111,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36120 = k36111;
var G__36120__$1 = (((G__36120 instanceof cljs.core.Keyword))?G__36120.fqn:null);
switch (G__36120__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36111,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36125){
var vec__36126 = p__36125;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36110){
var self__ = this;
var G__36110__$1 = this;
return (new cljs.core.RecordIter((0),G__36110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36112,other36113){
var self__ = this;
var this36112__$1 = this;
return (((!((other36113 == null)))) && ((((this36112__$1.constructor === other36113.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.x,other36113.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.y,other36113.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.__extmap,other36113.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36111){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36152 = k36111;
var G__36152__$1 = (((G__36152 instanceof cljs.core.Keyword))?G__36152.fqn:null);
switch (G__36152__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36111);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36110){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36156 = cljs.core.keyword_identical_QMARK_;
var expr__36157 = k__5352__auto__;
if(cljs.core.truth_((pred__36156.cljs$core$IFn$_invoke$arity$2 ? pred__36156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36157) : pred__36156.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36157)))){
return (new shadow.dom.Coordinate(G__36110,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36156.cljs$core$IFn$_invoke$arity$2 ? pred__36156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36157) : pred__36156.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36157)))){
return (new shadow.dom.Coordinate(self__.x,G__36110,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36110),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36110){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36110,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36117){
var extmap__5385__auto__ = (function (){var G__36178 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36117,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36178);
} else {
return G__36178;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36117),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36117),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36194,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36204 = k36194;
var G__36204__$1 = (((G__36204 instanceof cljs.core.Keyword))?G__36204.fqn:null);
switch (G__36204__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36194,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36207){
var vec__36208 = p__36207;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36208,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36208,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36193){
var self__ = this;
var G__36193__$1 = this;
return (new cljs.core.RecordIter((0),G__36193__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36195,other36196){
var self__ = this;
var this36195__$1 = this;
return (((!((other36196 == null)))) && ((((this36195__$1.constructor === other36196.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36195__$1.w,other36196.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36195__$1.h,other36196.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36195__$1.__extmap,other36196.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36194){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36224 = k36194;
var G__36224__$1 = (((G__36224 instanceof cljs.core.Keyword))?G__36224.fqn:null);
switch (G__36224__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36194);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36193){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36225 = cljs.core.keyword_identical_QMARK_;
var expr__36226 = k__5352__auto__;
if(cljs.core.truth_((pred__36225.cljs$core$IFn$_invoke$arity$2 ? pred__36225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36226) : pred__36225.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36226)))){
return (new shadow.dom.Size(G__36193,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36225.cljs$core$IFn$_invoke$arity$2 ? pred__36225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36226) : pred__36225.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36226)))){
return (new shadow.dom.Size(self__.w,G__36193,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36193),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36193){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36193,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36201){
var extmap__5385__auto__ = (function (){var G__36230 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36201,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36201)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36230);
} else {
return G__36230;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36201),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__36777 = (i + (1));
var G__36778 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36777;
ret = G__36778;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36249){
var vec__36250 = p__36249;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36257 = arguments.length;
switch (G__36257) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36791 = ps;
var G__36792 = (i + (1));
el__$1 = G__36791;
i = G__36792;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36307 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36311_36795 = cljs.core.seq(props);
var chunk__36312_36796 = null;
var count__36313_36797 = (0);
var i__36314_36798 = (0);
while(true){
if((i__36314_36798 < count__36313_36797)){
var vec__36324_36799 = chunk__36312_36796.cljs$core$IIndexed$_nth$arity$2(null,i__36314_36798);
var k_36800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36324_36799,(0),null);
var v_36801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36324_36799,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36800);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36800),v_36801);


var G__36805 = seq__36311_36795;
var G__36806 = chunk__36312_36796;
var G__36807 = count__36313_36797;
var G__36808 = (i__36314_36798 + (1));
seq__36311_36795 = G__36805;
chunk__36312_36796 = G__36806;
count__36313_36797 = G__36807;
i__36314_36798 = G__36808;
continue;
} else {
var temp__5804__auto___36811 = cljs.core.seq(seq__36311_36795);
if(temp__5804__auto___36811){
var seq__36311_36815__$1 = temp__5804__auto___36811;
if(cljs.core.chunked_seq_QMARK_(seq__36311_36815__$1)){
var c__5568__auto___36816 = cljs.core.chunk_first(seq__36311_36815__$1);
var G__36817 = cljs.core.chunk_rest(seq__36311_36815__$1);
var G__36818 = c__5568__auto___36816;
var G__36819 = cljs.core.count(c__5568__auto___36816);
var G__36820 = (0);
seq__36311_36795 = G__36817;
chunk__36312_36796 = G__36818;
count__36313_36797 = G__36819;
i__36314_36798 = G__36820;
continue;
} else {
var vec__36327_36821 = cljs.core.first(seq__36311_36815__$1);
var k_36822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36327_36821,(0),null);
var v_36823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36327_36821,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36822);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36822),v_36823);


var G__36824 = cljs.core.next(seq__36311_36815__$1);
var G__36825 = null;
var G__36826 = (0);
var G__36827 = (0);
seq__36311_36795 = G__36824;
chunk__36312_36796 = G__36825;
count__36313_36797 = G__36826;
i__36314_36798 = G__36827;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36331 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(1),null);
var seq__36334_36828 = cljs.core.seq(node_children);
var chunk__36336_36829 = null;
var count__36337_36830 = (0);
var i__36338_36831 = (0);
while(true){
if((i__36338_36831 < count__36337_36830)){
var child_struct_36833 = chunk__36336_36829.cljs$core$IIndexed$_nth$arity$2(null,i__36338_36831);
if((!((child_struct_36833 == null)))){
if(typeof child_struct_36833 === 'string'){
var text_36834 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36834),child_struct_36833].join(''));
} else {
var children_36835 = shadow.dom.svg_node(child_struct_36833);
if(cljs.core.seq_QMARK_(children_36835)){
var seq__36363_36836 = cljs.core.seq(children_36835);
var chunk__36365_36837 = null;
var count__36366_36838 = (0);
var i__36367_36839 = (0);
while(true){
if((i__36367_36839 < count__36366_36838)){
var child_36840 = chunk__36365_36837.cljs$core$IIndexed$_nth$arity$2(null,i__36367_36839);
if(cljs.core.truth_(child_36840)){
node.appendChild(child_36840);


var G__36844 = seq__36363_36836;
var G__36845 = chunk__36365_36837;
var G__36846 = count__36366_36838;
var G__36847 = (i__36367_36839 + (1));
seq__36363_36836 = G__36844;
chunk__36365_36837 = G__36845;
count__36366_36838 = G__36846;
i__36367_36839 = G__36847;
continue;
} else {
var G__36848 = seq__36363_36836;
var G__36849 = chunk__36365_36837;
var G__36850 = count__36366_36838;
var G__36851 = (i__36367_36839 + (1));
seq__36363_36836 = G__36848;
chunk__36365_36837 = G__36849;
count__36366_36838 = G__36850;
i__36367_36839 = G__36851;
continue;
}
} else {
var temp__5804__auto___36852 = cljs.core.seq(seq__36363_36836);
if(temp__5804__auto___36852){
var seq__36363_36853__$1 = temp__5804__auto___36852;
if(cljs.core.chunked_seq_QMARK_(seq__36363_36853__$1)){
var c__5568__auto___36855 = cljs.core.chunk_first(seq__36363_36853__$1);
var G__36856 = cljs.core.chunk_rest(seq__36363_36853__$1);
var G__36857 = c__5568__auto___36855;
var G__36858 = cljs.core.count(c__5568__auto___36855);
var G__36859 = (0);
seq__36363_36836 = G__36856;
chunk__36365_36837 = G__36857;
count__36366_36838 = G__36858;
i__36367_36839 = G__36859;
continue;
} else {
var child_36860 = cljs.core.first(seq__36363_36853__$1);
if(cljs.core.truth_(child_36860)){
node.appendChild(child_36860);


var G__36861 = cljs.core.next(seq__36363_36853__$1);
var G__36862 = null;
var G__36863 = (0);
var G__36864 = (0);
seq__36363_36836 = G__36861;
chunk__36365_36837 = G__36862;
count__36366_36838 = G__36863;
i__36367_36839 = G__36864;
continue;
} else {
var G__36865 = cljs.core.next(seq__36363_36853__$1);
var G__36866 = null;
var G__36867 = (0);
var G__36868 = (0);
seq__36363_36836 = G__36865;
chunk__36365_36837 = G__36866;
count__36366_36838 = G__36867;
i__36367_36839 = G__36868;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36835);
}
}


var G__36869 = seq__36334_36828;
var G__36870 = chunk__36336_36829;
var G__36871 = count__36337_36830;
var G__36872 = (i__36338_36831 + (1));
seq__36334_36828 = G__36869;
chunk__36336_36829 = G__36870;
count__36337_36830 = G__36871;
i__36338_36831 = G__36872;
continue;
} else {
var G__36873 = seq__36334_36828;
var G__36874 = chunk__36336_36829;
var G__36875 = count__36337_36830;
var G__36876 = (i__36338_36831 + (1));
seq__36334_36828 = G__36873;
chunk__36336_36829 = G__36874;
count__36337_36830 = G__36875;
i__36338_36831 = G__36876;
continue;
}
} else {
var temp__5804__auto___36877 = cljs.core.seq(seq__36334_36828);
if(temp__5804__auto___36877){
var seq__36334_36878__$1 = temp__5804__auto___36877;
if(cljs.core.chunked_seq_QMARK_(seq__36334_36878__$1)){
var c__5568__auto___36879 = cljs.core.chunk_first(seq__36334_36878__$1);
var G__36880 = cljs.core.chunk_rest(seq__36334_36878__$1);
var G__36881 = c__5568__auto___36879;
var G__36882 = cljs.core.count(c__5568__auto___36879);
var G__36883 = (0);
seq__36334_36828 = G__36880;
chunk__36336_36829 = G__36881;
count__36337_36830 = G__36882;
i__36338_36831 = G__36883;
continue;
} else {
var child_struct_36884 = cljs.core.first(seq__36334_36878__$1);
if((!((child_struct_36884 == null)))){
if(typeof child_struct_36884 === 'string'){
var text_36885 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36885),child_struct_36884].join(''));
} else {
var children_36886 = shadow.dom.svg_node(child_struct_36884);
if(cljs.core.seq_QMARK_(children_36886)){
var seq__36369_36887 = cljs.core.seq(children_36886);
var chunk__36371_36888 = null;
var count__36372_36889 = (0);
var i__36373_36890 = (0);
while(true){
if((i__36373_36890 < count__36372_36889)){
var child_36891 = chunk__36371_36888.cljs$core$IIndexed$_nth$arity$2(null,i__36373_36890);
if(cljs.core.truth_(child_36891)){
node.appendChild(child_36891);


var G__36892 = seq__36369_36887;
var G__36893 = chunk__36371_36888;
var G__36894 = count__36372_36889;
var G__36895 = (i__36373_36890 + (1));
seq__36369_36887 = G__36892;
chunk__36371_36888 = G__36893;
count__36372_36889 = G__36894;
i__36373_36890 = G__36895;
continue;
} else {
var G__36896 = seq__36369_36887;
var G__36897 = chunk__36371_36888;
var G__36898 = count__36372_36889;
var G__36899 = (i__36373_36890 + (1));
seq__36369_36887 = G__36896;
chunk__36371_36888 = G__36897;
count__36372_36889 = G__36898;
i__36373_36890 = G__36899;
continue;
}
} else {
var temp__5804__auto___36900__$1 = cljs.core.seq(seq__36369_36887);
if(temp__5804__auto___36900__$1){
var seq__36369_36901__$1 = temp__5804__auto___36900__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36369_36901__$1)){
var c__5568__auto___36902 = cljs.core.chunk_first(seq__36369_36901__$1);
var G__36903 = cljs.core.chunk_rest(seq__36369_36901__$1);
var G__36904 = c__5568__auto___36902;
var G__36905 = cljs.core.count(c__5568__auto___36902);
var G__36906 = (0);
seq__36369_36887 = G__36903;
chunk__36371_36888 = G__36904;
count__36372_36889 = G__36905;
i__36373_36890 = G__36906;
continue;
} else {
var child_36907 = cljs.core.first(seq__36369_36901__$1);
if(cljs.core.truth_(child_36907)){
node.appendChild(child_36907);


var G__36909 = cljs.core.next(seq__36369_36901__$1);
var G__36910 = null;
var G__36911 = (0);
var G__36912 = (0);
seq__36369_36887 = G__36909;
chunk__36371_36888 = G__36910;
count__36372_36889 = G__36911;
i__36373_36890 = G__36912;
continue;
} else {
var G__36913 = cljs.core.next(seq__36369_36901__$1);
var G__36914 = null;
var G__36915 = (0);
var G__36916 = (0);
seq__36369_36887 = G__36913;
chunk__36371_36888 = G__36914;
count__36372_36889 = G__36915;
i__36373_36890 = G__36916;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36886);
}
}


var G__36921 = cljs.core.next(seq__36334_36878__$1);
var G__36922 = null;
var G__36923 = (0);
var G__36924 = (0);
seq__36334_36828 = G__36921;
chunk__36336_36829 = G__36922;
count__36337_36830 = G__36923;
i__36338_36831 = G__36924;
continue;
} else {
var G__36925 = cljs.core.next(seq__36334_36878__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36334_36828 = G__36925;
chunk__36336_36829 = G__36926;
count__36337_36830 = G__36927;
i__36338_36831 = G__36928;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36936 = arguments.length;
var i__5770__auto___36937 = (0);
while(true){
if((i__5770__auto___36937 < len__5769__auto___36936)){
args__5775__auto__.push((arguments[i__5770__auto___36937]));

var G__36940 = (i__5770__auto___36937 + (1));
i__5770__auto___36937 = G__36940;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36380){
var G__36381 = cljs.core.first(seq36380);
var seq36380__$1 = cljs.core.next(seq36380);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36381,seq36380__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36386 = arguments.length;
switch (G__36386) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__31745__auto___36950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_36392){
var state_val_36393 = (state_36392[(1)]);
if((state_val_36393 === (1))){
var state_36392__$1 = state_36392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36392__$1,(2),once_or_cleanup);
} else {
if((state_val_36393 === (2))){
var inst_36389 = (state_36392[(2)]);
var inst_36390 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36392__$1 = (function (){var statearr_36394 = state_36392;
(statearr_36394[(7)] = inst_36389);

return statearr_36394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36392__$1,inst_36390);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31580__auto__ = null;
var shadow$dom$state_machine__31580__auto____0 = (function (){
var statearr_36395 = [null,null,null,null,null,null,null,null];
(statearr_36395[(0)] = shadow$dom$state_machine__31580__auto__);

(statearr_36395[(1)] = (1));

return statearr_36395;
});
var shadow$dom$state_machine__31580__auto____1 = (function (state_36392){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_36392);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e36397){var ex__31584__auto__ = e36397;
var statearr_36398_36956 = state_36392;
(statearr_36398_36956[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_36392[(4)]))){
var statearr_36402_36957 = state_36392;
(statearr_36402_36957[(1)] = cljs.core.first((state_36392[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36958 = state_36392;
state_36392 = G__36958;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
shadow$dom$state_machine__31580__auto__ = function(state_36392){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31580__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31580__auto____1.call(this,state_36392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31580__auto____0;
shadow$dom$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31580__auto____1;
return shadow$dom$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_36403 = f__31746__auto__();
(statearr_36403[(6)] = c__31745__auto___36950);

return statearr_36403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
