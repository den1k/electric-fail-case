goog.provide('net.cgrand.xforms.rfs');
net.cgrand.xforms.rfs.cmp = (function net$cgrand$xforms$rfs$cmp(f,a,b){
var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(b,a) : f.call(null,b,a)))){
return (1);
} else {
return (0);

}
}
}
});

net.cgrand.xforms.rfs.minimum = (function net$cgrand$xforms$rfs$minimum(var_args){
var G__60445 = arguments.length;
switch (G__60445) {
case 1:
return net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return (function() {
var G__60576 = null;
var G__60576__0 = (function (){
return null;
});
var G__60576__1 = (function (x){
return x;
});
var G__60576__2 = (function (a,b){
if((a == null)){
return b;
} else {
if((b == null)){
return a;
} else {
if((net.cgrand.xforms.rfs.cmp(comparator,a,b) > (0))){
return b;
} else {
return a;

}
}
}
});
G__60576 = function(a,b){
switch(arguments.length){
case 0:
return G__60576__0.call(this);
case 1:
return G__60576__1.call(this,a);
case 2:
return G__60576__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60576.cljs$core$IFn$_invoke$arity$0 = G__60576__0;
G__60576.cljs$core$IFn$_invoke$arity$1 = G__60576__1;
G__60576.cljs$core$IFn$_invoke$arity$2 = G__60576__2;
return G__60576;
})()
}));

(net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_maximum){
return (function() {
var G__60584 = null;
var G__60584__0 = (function (){
return new cljs.core.Keyword("net.cgrand.xforms.rfs","+infinity","net.cgrand.xforms.rfs/+infinity",1526731506);
});
var G__60584__1 = (function (x){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","+infinity","net.cgrand.xforms.rfs/+infinity",1526731506),x)){
return absolute_maximum;
} else {
return x;
}
});
var G__60584__2 = (function (a,b){
if(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","+infinity","net.cgrand.xforms.rfs/+infinity",1526731506),a)) || ((net.cgrand.xforms.rfs.cmp(comparator,a,b) > (0))))){
return b;
} else {
return a;
}
});
G__60584 = function(a,b){
switch(arguments.length){
case 0:
return G__60584__0.call(this);
case 1:
return G__60584__1.call(this,a);
case 2:
return G__60584__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60584.cljs$core$IFn$_invoke$arity$0 = G__60584__0;
G__60584.cljs$core$IFn$_invoke$arity$1 = G__60584__1;
G__60584.cljs$core$IFn$_invoke$arity$2 = G__60584__2;
return G__60584;
})()
}));

(net.cgrand.xforms.rfs.minimum.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.rfs.maximum = (function net$cgrand$xforms$rfs$maximum(var_args){
var G__60460 = arguments.length;
switch (G__60460) {
case 1:
return net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return (function() {
var G__60587 = null;
var G__60587__0 = (function (){
return null;
});
var G__60587__1 = (function (x){
return x;
});
var G__60587__2 = (function (a,b){
if((a == null)){
return b;
} else {
if((b == null)){
return a;
} else {
if((net.cgrand.xforms.rfs.cmp(comparator,a,b) < (0))){
return b;
} else {
return a;

}
}
}
});
G__60587 = function(a,b){
switch(arguments.length){
case 0:
return G__60587__0.call(this);
case 1:
return G__60587__1.call(this,a);
case 2:
return G__60587__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60587.cljs$core$IFn$_invoke$arity$0 = G__60587__0;
G__60587.cljs$core$IFn$_invoke$arity$1 = G__60587__1;
G__60587.cljs$core$IFn$_invoke$arity$2 = G__60587__2;
return G__60587;
})()
}));

(net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_minimum){
return (function() {
var G__60588 = null;
var G__60588__0 = (function (){
return new cljs.core.Keyword("net.cgrand.xforms.rfs","-infinity","net.cgrand.xforms.rfs/-infinity",-1754519475);
});
var G__60588__1 = (function (x){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","-infinity","net.cgrand.xforms.rfs/-infinity",-1754519475),x)){
return absolute_minimum;
} else {
return x;
}
});
var G__60588__2 = (function (a,b){
if(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","-infinity","net.cgrand.xforms.rfs/-infinity",-1754519475),a)) || ((net.cgrand.xforms.rfs.cmp(comparator,a,b) < (0))))){
return b;
} else {
return a;
}
});
G__60588 = function(a,b){
switch(arguments.length){
case 0:
return G__60588__0.call(this);
case 1:
return G__60588__1.call(this,a);
case 2:
return G__60588__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60588.cljs$core$IFn$_invoke$arity$0 = G__60588__0;
G__60588.cljs$core$IFn$_invoke$arity$1 = G__60588__1;
G__60588.cljs$core$IFn$_invoke$arity$2 = G__60588__2;
return G__60588;
})()
}));

(net.cgrand.xforms.rfs.maximum.cljs$lang$maxFixedArity = 2);


net.cgrand.xforms.rfs.min = net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);

net.cgrand.xforms.rfs.max = net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);

/**
 * Reducing fn to compute the arithmetic mean.
 */
net.cgrand.xforms.rfs.avg = (function net$cgrand$xforms$rfs$avg(var_args){
var G__60471 = arguments.length;
switch (G__60471) {
case 0:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$1 = (function (acc){
if(cljs.core.truth_(acc)){
return ((acc[(1)]) / (acc[(0)]));
} else {
return null;
}
}));

(net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3(acc,x,(1));
}));

(net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3 = (function (acc,x,w){
var acc__$1 = (function (){var or__5045__auto__ = acc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [0.0,0.0];
}
})();
var G__60497 = acc__$1;
(G__60497[(0)] = ((acc__$1[(0)]) + w));

(G__60497[(1)] = ((acc__$1[(1)]) + (w * x)));

return G__60497;
}));

(net.cgrand.xforms.rfs.avg.cljs$lang$maxFixedArity = 3);


/**
 * Reducing fn to compute the standard deviation. Returns 0 if no or only one item.
 */
net.cgrand.xforms.rfs.sd = (function net$cgrand$xforms$rfs$sd(var_args){
var G__60507 = arguments.length;
switch (G__60507) {
case 0:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$0 = (function (){
return [0.0,0.0,0.0];
}));

(net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$1 = (function (a){
var s = (a[(0)]);
var n = (a[(2)]);
if(((1) < n)){
return Math.sqrt((s / (n - (1))));
} else {
return 0.0;
}
}));

(net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$2 = (function (a,x){
var s = (a[(0)]);
var m = (a[(1)]);
var n = (a[(2)]);
var d = (x - m);
var n__$1 = (n + (1));
var m_SINGLEQUOTE_ = (m + (d / n__$1));
var G__60531 = a;
(G__60531[(0)] = (s + (d * (x - m_SINGLEQUOTE_))));

(G__60531[(1)] = m_SINGLEQUOTE_);

(G__60531[(2)] = n__$1);

return G__60531;
}));

(net.cgrand.xforms.rfs.sd.cljs$lang$maxFixedArity = 2);


/**
 * Reducing function that returns the last value.
 */
net.cgrand.xforms.rfs.last = (function net$cgrand$xforms$rfs$last(var_args){
var G__60537 = arguments.length;
switch (G__60537) {
case 0:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
return x;
}));

(net.cgrand.xforms.rfs.last.cljs$lang$maxFixedArity = 2);


/**
 * Reducing function that returns the first logical true value.
 */
net.cgrand.xforms.rfs.some = (function net$cgrand$xforms$rfs$some(var_args){
var G__60552 = arguments.length;
switch (G__60552) {
case 0:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if(cljs.core.truth_(x)){
return cljs.core.reduced(x);
} else {
return null;
}
}));

(net.cgrand.xforms.rfs.some.cljs$lang$maxFixedArity = 2);


/**
 * Like xforms/str but returns a StringBuilder.
 */
net.cgrand.xforms.rfs.str_BANG_ = (function net$cgrand$xforms$rfs$str_BANG_(var_args){
var G__60566 = arguments.length;
switch (G__60566) {
case 0:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
}));

(net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (sb){
var x_60570 = sb;
if((x_60570 instanceof goog.string.StringBuffer)){
return x_60570;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
}
}));

(net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sb,x){
return (function (){var x_60571 = sb;
if((x_60571 instanceof goog.string.StringBuffer)){
return x_60571;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
}
})().append(x);
}));

(net.cgrand.xforms.rfs.str_BANG_.cljs$lang$maxFixedArity = 2);


/**
 * Reducing function to build strings in linear time. Acts as replacement for clojure.core/str in a reduce/transduce call.
 */
net.cgrand.xforms.rfs.str = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.rfs.str_BANG_,cljs.core.str);

//# sourceMappingURL=net.cgrand.xforms.rfs.js.map
