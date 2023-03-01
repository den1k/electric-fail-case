goog.provide('missionary.impl.GroupBy');




/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__38604 = (arguments.length - (1));
switch (G__38604) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args38603){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38603)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__38628 = (arguments.length - (1));
switch (G__38628) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args38627){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38627)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__38663 = p.input;
return (fexpr__38663.cljs$core$IFn$_invoke$arity$0 ? fexpr__38663.cljs$core$IFn$_invoke$arity$0() : fexpr__38663.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.insert = (function missionary$impl$GroupBy$insert(p,i,g){
var table = p.table;
var ts = table.length;
var ls = (ts << (1));
(table[i] = g);

if((ls <= ((3) * (p.load = (p.load + (1)))))){
var l = (p.table = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ls));
var m = (ls - (1));
var j = (0);
while(true){
if((j < ts)){
var temp__5808__auto___38797 = (table[j]);
if((temp__5808__auto___38797 == null)){
} else {
var h_38801 = temp__5808__auto___38797;
var i_38802__$1 = (cljs.core.hash(h_38801.key) & m);
while(true){
if(((l[i_38802__$1]) == null)){
(l[i_38802__$1] = h_38801);
} else {
var G__38803 = missionary.impl.GroupBy.step(i_38802__$1,m);
i_38802__$1 = G__38803;
continue;
}
break;
}
}

var G__38804 = (j + (1));
j = G__38804;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,k,n,t){
var g = missionary.impl.GroupBy.__GT_Group(null,k,n,t);
var fexpr__38686_38810 = (function (){var temp__5806__auto__ = p.table;
if((temp__5806__auto__ == null)){
return t;
} else {
var table = temp__5806__auto__;
var m = (table.length - (1));
var i_38811 = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto___38812__$1 = (table[i_38811]);
if((temp__5806__auto___38812__$1 == null)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key)){
missionary.impl.GroupBy.insert((g.process = p),i_38811,g);
} else {
}
} else {
var h_38817 = temp__5806__auto___38812__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h_38817.key)){
} else {
var G__38820 = missionary.impl.GroupBy.step(i_38811,m);
i_38811 = G__38820;
continue;
}
}
break;
}

return n;
}
})();
(fexpr__38686_38810.cljs$core$IFn$_invoke$arity$0 ? fexpr__38686_38810.cljs$core$IFn$_invoke$arity$0() : fexpr__38686_38810.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var temp__5808__auto__ = g.process;
if((temp__5808__auto__ == null)){
return null;
} else {
var p = temp__5808__auto__;
if(cljs.core.truth_(p.live)){
(g.process = null);

var k = g.key;
var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__38836 = missionary.impl.GroupBy.step(i,m);
i = G__38836;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_38839__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___38840__$1 = (table[i_38839__$1]);
if((temp__5808__auto___38840__$1 == null)){
} else {
var h_38841 = temp__5808__auto___38840__$1;
var j_38842 = (cljs.core.hash(h_38841.key) & m);
if((i_38839__$1 === j_38842)){
} else {
(table[i_38839__$1] = null);

var j_38843__$1 = j_38842;
while(true){
if(((table[j_38843__$1]) == null)){
(table[j_38843__$1] = h_38841);
} else {
var G__38844 = missionary.impl.GroupBy.step(j_38843__$1,m);
j_38843__$1 = G__38844;
continue;
}
break;
}
}

var G__38847 = missionary.impl.GroupBy.step(i_38839__$1,m);
i_38839__$1 = G__38847;
continue;
}
break;
}

var fexpr__38713 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__38713.cljs$core$IFn$_invoke$arity$0 ? fexpr__38713.cljs$core$IFn$_invoke$arity$0() : fexpr__38713.call(null));
} else {
return null;
}
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
var temp__5808__auto__ = (function (){while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
return p.terminator;
} else {
if((p === p.value)){
try{var k = (p.key = (function (){var G__38724 = (p.value = cljs.core.deref(p.input));
var fexpr__38723 = p.keyfn;
return (fexpr__38723.cljs$core$IFn$_invoke$arity$1 ? fexpr__38723.cljs$core$IFn$_invoke$arity$1(G__38724) : fexpr__38723.call(null,G__38724));
})());
var table = p.table;
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
return p.notifier;
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
return h.notifier;
} else {
var G__38851 = missionary.impl.GroupBy.step(i,m);
i = G__38851;
continue;
}
}
break;
}
}catch (e38719){var e = e38719;
var fexpr__38722_38852 = p.input;
(fexpr__38722_38852.cljs$core$IFn$_invoke$arity$0 ? fexpr__38722_38852.cljs$core$IFn$_invoke$arity$0() : fexpr__38722_38852.call(null));

(p.value = e);

return p.notifier;
}} else {
try{cljs.core.deref(p.input);
}catch (e38728){var __38853 = e38728;
}
continue;
}
}
} else {
return null;
}
break;
}
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(missionary.impl.GroupBy.group,p,k),null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var temp__5806__auto__ = g.process;
if((temp__5806__auto__ == null)){
var fexpr__38736_38858 = g.terminator;
(fexpr__38736_38858.cljs$core$IFn$_invoke$arity$0 ? fexpr__38736_38858.cljs$core$IFn$_invoke$arity$0() : fexpr__38736_38858.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var p = temp__5806__auto__;
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,null,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.terminator = (function (){
var table = p.table;
var i_38863 = (0);
while(true){
if((i_38863 < table.length)){
var temp__5808__auto___38865 = (table[i_38863]);
if((temp__5808__auto___38865 == null)){
} else {
var g_38867 = temp__5808__auto___38865;
(g_38867.process = null);

var fexpr__38750_38868 = g_38867.terminator;
(fexpr__38750_38868.cljs$core$IFn$_invoke$arity$0 ? fexpr__38750_38868.cljs$core$IFn$_invoke$arity$0() : fexpr__38750_38868.call(null));
}

var G__38869 = (i_38863 + (1));
i_38863 = G__38869;
continue;
} else {
}
break;
}

(p.table = null);

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}));

(p.key = p);

(p.value = p);

(p.input = (function (){var G__38756 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__38758 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38756,G__38758) : f.call(null,G__38756,G__38758));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
