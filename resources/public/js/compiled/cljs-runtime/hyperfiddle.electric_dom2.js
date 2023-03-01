goog.provide('hyperfiddle.electric_dom2');
goog.scope(function(){
  hyperfiddle.electric_dom2.goog$module$goog$object = goog.module.get('goog.object');
});
hyperfiddle.electric_dom2.nil_subject = (function hyperfiddle$electric_dom2$nil_subject(_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
});
hyperfiddle.electric_dom2.unsupported = (function hyperfiddle$electric_dom2$unsupported(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45651 = arguments.length;
var i__5770__auto___45652 = (0);
while(true){
if((i__5770__auto___45652 < len__5769__auto___45651)){
args__5775__auto__.push((arguments[i__5770__auto___45652]));

var G__45653 = (i__5770__auto___45652 + (1));
i__5770__auto___45652 = G__45653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not available on this peer.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.unsupported.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric_dom2.unsupported.cljs$lang$applyTo = (function (seq45634){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45634));
}));

/**
 * See `with`
 */
hyperfiddle.electric_dom2.hook = (function() {
var hyperfiddle$electric_dom2$hook = null;
var hyperfiddle$electric_dom2$hook__1 = (function (x){
return x.parentNode.removeChild(x);
});
var hyperfiddle$electric_dom2$hook__2 = (function (x,y){
return x.parentNode.insertBefore(x,y);
});
hyperfiddle$electric_dom2$hook = function(x,y){
switch(arguments.length){
case 1:
return hyperfiddle$electric_dom2$hook__1.call(this,x);
case 2:
return hyperfiddle$electric_dom2$hook__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$1 = hyperfiddle$electric_dom2$hook__1;
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric_dom2$hook__2;
return hyperfiddle$electric_dom2$hook;
})()
;
hyperfiddle.electric_dom2.by_id = (function hyperfiddle$electric_dom2$by_id(id){
return document.getElementById(id);
});
hyperfiddle.electric_dom2.new_node = (function hyperfiddle$electric_dom2$new_node(parent,type){
var el = (function (){var G__45635 = type;
var G__45635__$1 = (((G__45635 instanceof cljs.core.Keyword))?G__45635.fqn:null);
switch (G__45635__$1) {
case "comment":
return document.createComment("");

break;
case "text":
return goog.dom.createTextNode("");

break;
default:
return goog.dom.createElement(type);

}
})();
parent.appendChild(el);

return el;
});
hyperfiddle.electric_dom2._googDomSetTextContentNoWarn = (function hyperfiddle$electric_dom2$_googDomSetTextContentNoWarn(node,str){
return goog.dom.setTextContent(node,str);
});
hyperfiddle.electric_dom2.class_str = (function hyperfiddle$electric_dom2$class_str(v){
if(((typeof v === 'string') || ((v instanceof cljs.core.Keyword)))){
return cljs.core.name(v);
} else {
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),v], 0)));
} else {
return "";

}
}
});
hyperfiddle.electric_dom2.SVG_NS = "http://www.w3.org/2000/svg";
hyperfiddle.electric_dom2.set_property_BANG_ = (function hyperfiddle$electric_dom2$set_property_BANG_(var_args){
var G__45637 = arguments.length;
switch (G__45637) {
case 3:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node,k,v){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4(node,node.namespaceURI,k,v);
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,k,v){
var k__$1 = cljs.core.name(k);
var v__$1 = cljs.core.clj__GT_js(v);
if(cljs.core.truth_((function (){var and__5043__auto__ = (v__$1 == null);
if(and__5043__auto__){
return node.hasAttributeNS(null,k__$1);
} else {
return and__5043__auto__;
}
})())){
return node.removeAttributeNS(null,k__$1);
} else {
var G__45638 = k__$1;
switch (G__45638) {
case "style":
return goog.style.setStyle(node,v__$1);

break;
case "class":
return (node.className = hyperfiddle.electric_dom2.class_str(v__$1));

break;
case "for":
return (node.htmlFor = v__$1);

break;
case "list":
return node.setAttributeNS(null,k__$1,v__$1);

break;
default:
var temp__5802__auto__ = hyperfiddle.electric_dom2.goog$module$goog$object.get(goog.dom.DIRECT_ATTRIBUTE_MAP_,k__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var k__$2 = temp__5802__auto__;
return node.setAttributeNS(null,k__$2,v__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg",ns)){
return node.setAttributeNS(null,k__$1,v__$1);
} else {
if(cljs.core.truth_(hyperfiddle.electric_dom2.goog$module$goog$object.containsKey(node,k__$1))){
return hyperfiddle.electric_dom2.goog$module$goog$object.set(node,k__$1,v__$1);
} else {
return node.setAttributeNS(null,k__$1,v__$1);
}
}
}

}
}
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.unmount_prop = (function hyperfiddle$electric_dom2$unmount_prop(node,k,v){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3(node,k,v);
});
}));
});
hyperfiddle.electric_dom2.event_STAR_ = (function hyperfiddle$electric_dom2$event_STAR_(var_args){
var G__45642 = arguments.length;
switch (G__45642) {
case 3:
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (dom_node,event_name,callback){
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4(dom_node,event_name,callback,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (dom_node,event_name,callback,options){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

dom_node.addEventListener(event_name,callback,cljs.core.clj__GT_js(options));

return (function (){
return dom_node.removeEventListener(event_name,callback);
});
}));
}));

(hyperfiddle.electric_dom2.event_STAR_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.happen = (function hyperfiddle$electric_dom2$happen(s,e){
var G__45643 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
var G__45643__$1 = (((G__45643 instanceof cljs.core.Keyword))?G__45643.fqn:null);
switch (G__45643__$1) {
case "idle":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "pending":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "impulse":
throw (new Error(["Assert failed: ","two events in the same frame? that's weird and wrong","\n","false"].join('')));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45643__$1)].join('')));

}
});
hyperfiddle.electric_dom2.set_val = (function hyperfiddle$electric_dom2$set_val(node,v){
return (node.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});

//# sourceMappingURL=hyperfiddle.electric_dom2.js.map
