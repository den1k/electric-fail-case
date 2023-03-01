goog.provide('nano_id.core');
nano_id.core.alphabet = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
/**
 * Secure random ID generator.
 *   Generates IDs of the specified size, 21 by default.
 */
nano_id.core.nano_id = (function nano_id$core$nano_id(var_args){
var G__60438 = arguments.length;
switch (G__60438) {
case 0:
return nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$1((21));
}));

(nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$1 = (function (size){
if((size > (0))){
} else {
throw (new Error(["Assert failed: ","size must be positive.","\n","(pos? size)"].join('')));
}

var mask = (63);
var bytes = nano_id.random.random_bytes(size);
var id = "";
while(true){
if(cljs.core.truth_(bytes)){
var G__60478 = cljs.core.next(bytes);
var G__60480 = [id,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__60450 = (mask & cljs.core.first(bytes));
return (nano_id.core.alphabet.cljs$core$IFn$_invoke$arity$1 ? nano_id.core.alphabet.cljs$core$IFn$_invoke$arity$1(G__60450) : nano_id.core.alphabet.call(null,G__60450));
})())].join('');
bytes = G__60478;
id = G__60480;
continue;
} else {
return id;
}
break;
}
}));

(nano_id.core.nano_id.cljs$lang$maxFixedArity = 1);

/**
 * Builds ID generator with custom parameters.
 *   Takes alphabet and size. alphabet must contain 256 symbols or less; otherwise,
 *   the generator won't be secure.
 *   Also you can provide your own random bytes generator. It should be a function
 *   that takes one argument - number of bytes, and returns a byte array.
 */
nano_id.core.custom = (function nano_id$core$custom(var_args){
var G__60452 = arguments.length;
switch (G__60452) {
case 2:
return nano_id.core.custom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nano_id.core.custom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nano_id.core.custom.cljs$core$IFn$_invoke$arity$2 = (function (alphabet,size){
return nano_id.core.custom.cljs$core$IFn$_invoke$arity$3(alphabet,size,nano_id.random.random_bytes);
}));

(nano_id.core.custom.cljs$core$IFn$_invoke$arity$3 = (function (alphabet,size,random){
if(((((2) <= cljs.core.count(alphabet))) && ((cljs.core.count(alphabet) <= (256))))){
} else {
throw (new Error(["Assert failed: ","alphabet must contain from 2 to 256 characters.","\n","(<= 2 (count alphabet) 256)"].join('')));
}

if((size > (0))){
} else {
throw (new Error(["Assert failed: ","size must be positive.","\n","(pos? size)"].join('')));
}

var alphabet__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,alphabet);
var length = cljs.core.count(alphabet__$1);
var power_of_two_QMARK_ = ((length & (length - (1))) === (0));
var mask = ((power_of_two_QMARK_)?(length - (1)):(((2) << ((Math.log(length) / Math.log((2))) | (0))) - (1)));
var step = ((power_of_two_QMARK_)?size:(Math.ceil((((size * mask) * 1.1) / length)) | (0)));
return (function (){
var bytes = (random.cljs$core$IFn$_invoke$arity$1 ? random.cljs$core$IFn$_invoke$arity$1(step) : random.call(null,step));
var id = "";
while(true){
if((((id).length) === size)){
return id;
} else {
var G__60494 = (function (){var or__5045__auto__ = cljs.core.next(bytes);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (random.cljs$core$IFn$_invoke$arity$1 ? random.cljs$core$IFn$_invoke$arity$1(size) : random.call(null,size));
}
})();
var G__60495 = (function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(alphabet__$1,(cljs.core.first(bytes) & mask));
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
return [id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join('');
} else {
return id;
}
})();
bytes = G__60494;
id = G__60495;
continue;
}
break;
}
});
}));

(nano_id.core.custom.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=nano_id.core.js.map
