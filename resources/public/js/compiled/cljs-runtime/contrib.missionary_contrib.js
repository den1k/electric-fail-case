goog.provide('contrib.missionary_contrib');
/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44154_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_7(cr44154_state){
try{var cr44154_place_18 = missionary.core.via_call;
var cr44154_place_19 = missionary.core.blk;
var cr44154_place_20 = (function (){
return it.next();
});
var cr44154_place_21 = (function (){var G__44235 = cr44154_place_19;
var G__44236 = cr44154_place_20;
var fexpr__44234 = cr44154_place_18;
return (fexpr__44234.cljs$core$IFn$_invoke$arity$2 ? fexpr__44234.cljs$core$IFn$_invoke$arity$2(G__44235,G__44236) : fexpr__44234.call(null,G__44235,G__44236));
})();
(cr44154_state[(0)] = cr44154_block_8);

return missionary.core.park(cr44154_place_21);
}catch (e44233){var cr44154_exception = e44233;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

(cr44154_state[(2)] = null);

throw cr44154_exception;
}});
var cr44154_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_4(cr44154_state){
try{var cr44154_place_8 = missionary.core.unpark();
(cr44154_state[(0)] = cr44154_block_12);

(cr44154_state[(1)] = cr44154_place_8);

return cr44154_state;
}catch (e44237){var cr44154_exception = e44237;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
var cr44154_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_5(cr44154_state){
try{var cr44154_place_9 = (1);
var cr44154_place_10 = missionary.core.seed;
var cr44154_place_11 = cljs.core.range;
var cr44154_place_12 = (2);
var cr44154_place_13 = (function (){var G__44241 = cr44154_place_12;
var fexpr__44240 = cr44154_place_11;
return (fexpr__44240.cljs$core$IFn$_invoke$arity$1 ? fexpr__44240.cljs$core$IFn$_invoke$arity$1(G__44241) : fexpr__44240.call(null,G__44241));
})();
var cr44154_place_14 = (function (){var G__44243 = cr44154_place_13;
var fexpr__44242 = cr44154_place_10;
return (fexpr__44242.cljs$core$IFn$_invoke$arity$1 ? fexpr__44242.cljs$core$IFn$_invoke$arity$1(G__44243) : fexpr__44242.call(null,G__44243));
})();
(cr44154_state[(0)] = cr44154_block_6);

return missionary.core.fork(cr44154_place_9,cr44154_place_14);
}catch (e44238){var cr44154_exception = e44238;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
var cr44154_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_8(cr44154_state){
try{var cr44154_place_22 = missionary.core.unpark();
(cr44154_state[(0)] = cr44154_block_11);

(cr44154_state[(2)] = cr44154_place_22);

return cr44154_state;
}catch (e44244){var cr44154_exception = e44244;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

(cr44154_state[(2)] = null);

throw cr44154_exception;
}});
var cr44154_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_0(cr44154_state){
try{(cr44154_state[(0)] = cr44154_block_1);

return cr44154_state;
}catch (e44246){var cr44154_exception = e44246;
(cr44154_state[(0)] = null);

throw cr44154_exception;
}});
var cr44154_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_1(cr44154_state){
try{var cr44154_place_0 = missionary.core.via_call;
var cr44154_place_1 = missionary.core.blk;
var cr44154_place_2 = (function (){
return it.hasNext();
});
var cr44154_place_3 = (function (){var G__44250 = cr44154_place_1;
var G__44251 = cr44154_place_2;
var fexpr__44249 = cr44154_place_0;
return (fexpr__44249.cljs$core$IFn$_invoke$arity$2 ? fexpr__44249.cljs$core$IFn$_invoke$arity$2(G__44250,G__44251) : fexpr__44249.call(null,G__44250,G__44251));
})();
(cr44154_state[(0)] = cr44154_block_2);

return missionary.core.park(cr44154_place_3);
}catch (e44248){var cr44154_exception = e44248;
(cr44154_state[(0)] = null);

throw cr44154_exception;
}});
var cr44154_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_9(cr44154_state){
try{(cr44154_state[(0)] = cr44154_block_1);

return cr44154_state;
}catch (e44253){var cr44154_exception = e44253;
(cr44154_state[(0)] = null);

throw cr44154_exception;
}});
var cr44154_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_10(cr44154_state){
try{var cr44154_place_15 = (cr44154_state[(1)]);
var cr44154_place_23 = "No matching clause: ";
var cr44154_place_24 = cr44154_place_15;
var cr44154_place_25 = [cr44154_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44154_place_24)].join('');
var cr44154_place_26 = (new Error(cr44154_place_25));
var cr44154_place_27 = (function(){throw cr44154_place_26})();
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

return null;
}catch (e44254){var cr44154_exception = e44254;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
var cr44154_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_12(cr44154_state){
try{var cr44154_place_5 = (cr44154_state[(1)]);
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

return cr44154_place_5;
}catch (e44263){var cr44154_exception = e44263;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
var cr44154_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_2(cr44154_state){
try{var cr44154_place_4 = missionary.core.unpark();
var cr44154_place_5 = null;
if(cljs.core.truth_(cr44154_place_4)){
(cr44154_state[(0)] = cr44154_block_5);

(cr44154_state[(1)] = cr44154_place_5);

return cr44154_state;
} else {
(cr44154_state[(0)] = cr44154_block_3);

(cr44154_state[(1)] = cr44154_place_5);

return cr44154_state;
}
}catch (e44264){var cr44154_exception = e44264;
(cr44154_state[(0)] = null);

throw cr44154_exception;
}});
var cr44154_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_3(cr44154_state){
try{var cr44154_place_6 = (1);
var cr44154_place_7 = missionary.core.none;
(cr44154_state[(0)] = cr44154_block_4);

return missionary.core.fork(cr44154_place_6,cr44154_place_7);
}catch (e44275){var cr44154_exception = e44275;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
var cr44154_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_11(cr44154_state){
try{var cr44154_place_17 = (cr44154_state[(2)]);
(cr44154_state[(0)] = cr44154_block_12);

(cr44154_state[(2)] = null);

(cr44154_state[(1)] = cr44154_place_17);

return cr44154_state;
}catch (e44278){var cr44154_exception = e44278;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

(cr44154_state[(2)] = null);

throw cr44154_exception;
}});
var cr44154_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr44154_block_6(cr44154_state){
try{var cr44154_place_15 = missionary.core.unpark();
var cr44154_place_16 = cr44154_place_15;
var cr44154_place_17 = null;
var G__44284 = cr44154_place_16;
switch (G__44284) {
case (0):
(cr44154_state[(0)] = cr44154_block_7);

(cr44154_state[(2)] = cr44154_place_17);

return cr44154_state;

break;
case (1):
(cr44154_state[(0)] = cr44154_block_9);

(cr44154_state[(1)] = null);

return cr44154_state;

break;
default:
(cr44154_state[(0)] = cr44154_block_10);

(cr44154_state[(1)] = null);

(cr44154_state[(1)] = cr44154_place_15);

return cr44154_state;

}
}catch (e44280){var cr44154_exception = e44280;
(cr44154_state[(0)] = null);

(cr44154_state[(1)] = null);

throw cr44154_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44288 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44288[(0)] = cr44154_block_0);

return G__44288;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44297_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_12(cr44297_state){
try{var cr44297_place_6 = (cr44297_state[(2)]);
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

return cr44297_place_6;
}catch (e44382){var cr44297_exception = e44382;
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

throw cr44297_exception;
}});
var cr44297_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_6(cr44297_state){
try{var cr44297_place_16 = missionary.core.unpark();
var cr44297_place_17 = cr44297_place_16;
var cr44297_place_18 = null;
var G__44388 = cr44297_place_17;
switch (G__44388) {
case (0):
(cr44297_state[(0)] = cr44297_block_7);

(cr44297_state[(3)] = cr44297_place_18);

return cr44297_state;

break;
case (1):
(cr44297_state[(0)] = cr44297_block_9);

(cr44297_state[(2)] = null);

return cr44297_state;

break;
default:
(cr44297_state[(0)] = cr44297_block_10);

(cr44297_state[(2)] = null);

(cr44297_state[(1)] = null);

(cr44297_state[(1)] = cr44297_place_16);

return cr44297_state;

}
}catch (e44385){var cr44297_exception = e44385;
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_3(cr44297_state){
try{var cr44297_place_7 = (1);
var cr44297_place_8 = missionary.core.none;
(cr44297_state[(0)] = cr44297_block_4);

return missionary.core.fork(cr44297_place_7,cr44297_place_8);
}catch (e44390){var cr44297_exception = e44390;
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

throw cr44297_exception;
}});
var cr44297_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_10(cr44297_state){
try{var cr44297_place_16 = (cr44297_state[(1)]);
var cr44297_place_27 = "No matching clause: ";
var cr44297_place_28 = cr44297_place_16;
var cr44297_place_29 = [cr44297_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44297_place_28)].join('');
var cr44297_place_30 = (new Error(cr44297_place_29));
var cr44297_place_31 = (function(){throw cr44297_place_30})();
(cr44297_state[(0)] = null);

(cr44297_state[(1)] = null);

return null;
}catch (e44393){var cr44297_exception = e44393;
(cr44297_state[(0)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_2(cr44297_state){
try{var cr44297_place_5 = missionary.core.unpark();
var cr44297_place_6 = null;
if(cljs.core.truth_(cr44297_place_5)){
(cr44297_state[(0)] = cr44297_block_5);

(cr44297_state[(2)] = cr44297_place_6);

return cr44297_state;
} else {
(cr44297_state[(0)] = cr44297_block_3);

(cr44297_state[(1)] = null);

(cr44297_state[(2)] = cr44297_place_6);

return cr44297_state;
}
}catch (e44400){var cr44297_exception = e44400;
(cr44297_state[(0)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_11(cr44297_state){
try{var cr44297_place_18 = (cr44297_state[(3)]);
(cr44297_state[(0)] = cr44297_block_12);

(cr44297_state[(3)] = null);

(cr44297_state[(2)] = cr44297_place_18);

return cr44297_state;
}catch (e44403){var cr44297_exception = e44403;
(cr44297_state[(0)] = null);

(cr44297_state[(3)] = null);

(cr44297_state[(2)] = null);

throw cr44297_exception;
}});
var cr44297_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_1(cr44297_state){
try{var cr44297_place_0 = (cr44297_state[(1)]);
var cr44297_place_1 = missionary.core.via_call;
var cr44297_place_2 = missionary.core.blk;
var cr44297_place_3 = (function (){
return cljs.core.seq(cr44297_place_0);
});
var cr44297_place_4 = (function (){var G__44412 = cr44297_place_2;
var G__44413 = cr44297_place_3;
var fexpr__44411 = cr44297_place_1;
return (fexpr__44411.cljs$core$IFn$_invoke$arity$2 ? fexpr__44411.cljs$core$IFn$_invoke$arity$2(G__44412,G__44413) : fexpr__44411.call(null,G__44412,G__44413));
})();
(cr44297_state[(0)] = cr44297_block_2);

return missionary.core.park(cr44297_place_4);
}catch (e44410){var cr44297_exception = e44410;
(cr44297_state[(0)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_4(cr44297_state){
try{var cr44297_place_9 = missionary.core.unpark();
(cr44297_state[(0)] = cr44297_block_12);

(cr44297_state[(2)] = cr44297_place_9);

return cr44297_state;
}catch (e44414){var cr44297_exception = e44414;
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

throw cr44297_exception;
}});
var cr44297_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_5(cr44297_state){
try{var cr44297_place_10 = (1);
var cr44297_place_11 = missionary.core.seed;
var cr44297_place_12 = cljs.core.range;
var cr44297_place_13 = (2);
var cr44297_place_14 = (function (){var G__44417 = cr44297_place_13;
var fexpr__44416 = cr44297_place_12;
return (fexpr__44416.cljs$core$IFn$_invoke$arity$1 ? fexpr__44416.cljs$core$IFn$_invoke$arity$1(G__44417) : fexpr__44416.call(null,G__44417));
})();
var cr44297_place_15 = (function (){var G__44419 = cr44297_place_14;
var fexpr__44418 = cr44297_place_11;
return (fexpr__44418.cljs$core$IFn$_invoke$arity$1 ? fexpr__44418.cljs$core$IFn$_invoke$arity$1(G__44419) : fexpr__44418.call(null,G__44419));
})();
(cr44297_state[(0)] = cr44297_block_6);

return missionary.core.fork(cr44297_place_10,cr44297_place_15);
}catch (e44415){var cr44297_exception = e44415;
(cr44297_state[(0)] = null);

(cr44297_state[(2)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_9(cr44297_state){
try{var cr44297_place_0 = (cr44297_state[(1)]);
var cr44297_place_24 = cljs.core.rest;
var cr44297_place_25 = cr44297_place_0;
var cr44297_place_26 = (function (){var G__44422 = cr44297_place_25;
var fexpr__44421 = cr44297_place_24;
return (fexpr__44421.cljs$core$IFn$_invoke$arity$1 ? fexpr__44421.cljs$core$IFn$_invoke$arity$1(G__44422) : fexpr__44421.call(null,G__44422));
})();
(cr44297_state[(0)] = cr44297_block_1);

(cr44297_state[(1)] = cr44297_place_26);

return cr44297_state;
}catch (e44420){var cr44297_exception = e44420;
(cr44297_state[(0)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_0(cr44297_state){
try{var cr44297_place_0 = xs;
(cr44297_state[(0)] = cr44297_block_1);

(cr44297_state[(1)] = cr44297_place_0);

return cr44297_state;
}catch (e44423){var cr44297_exception = e44423;
(cr44297_state[(0)] = null);

throw cr44297_exception;
}});
var cr44297_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_7(cr44297_state){
try{var cr44297_place_0 = (cr44297_state[(1)]);
var cr44297_place_19 = missionary.core.via_call;
var cr44297_place_20 = missionary.core.blk;
var cr44297_place_21 = (function (){
return cljs.core.first(cr44297_place_0);
});
var cr44297_place_22 = (function (){var G__44427 = cr44297_place_20;
var G__44428 = cr44297_place_21;
var fexpr__44426 = cr44297_place_19;
return (fexpr__44426.cljs$core$IFn$_invoke$arity$2 ? fexpr__44426.cljs$core$IFn$_invoke$arity$2(G__44427,G__44428) : fexpr__44426.call(null,G__44427,G__44428));
})();
(cr44297_state[(0)] = cr44297_block_8);

(cr44297_state[(1)] = null);

return missionary.core.park(cr44297_place_22);
}catch (e44424){var cr44297_exception = e44424;
(cr44297_state[(0)] = null);

(cr44297_state[(3)] = null);

(cr44297_state[(2)] = null);

(cr44297_state[(1)] = null);

throw cr44297_exception;
}});
var cr44297_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr44297_block_8(cr44297_state){
try{var cr44297_place_23 = missionary.core.unpark();
(cr44297_state[(0)] = cr44297_block_11);

(cr44297_state[(3)] = cr44297_place_23);

return cr44297_state;
}catch (e44434){var cr44297_exception = e44434;
(cr44297_state[(0)] = null);

(cr44297_state[(3)] = null);

(cr44297_state[(2)] = null);

throw cr44297_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44437 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__44437[(0)] = cr44297_block_0);

return G__44437;
})());
})(),missionary.core.ap_run);
});
/**
 * run task (or mbox) repeatedly, producing a stream of results
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44446_block_0 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_0(cr44446_state){
try{var cr44446_place_0 = task;
(cr44446_state[(0)] = cr44446_block_1);

return missionary.core.park(cr44446_place_0);
}catch (e44489){var cr44446_exception = e44489;
(cr44446_state[(0)] = null);

throw cr44446_exception;
}});
var cr44446_block_8 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_8(cr44446_state){
try{var cr44446_place_10 = (cr44446_state[(2)]);
(cr44446_state[(0)] = null);

(cr44446_state[(2)] = null);

return cr44446_place_10;
}catch (e44491){var cr44446_exception = e44491;
(cr44446_state[(0)] = null);

(cr44446_state[(2)] = null);

throw cr44446_exception;
}});
var cr44446_block_5 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_5(cr44446_state){
try{var cr44446_place_12 = task;
(cr44446_state[(0)] = cr44446_block_6);

return missionary.core.park(cr44446_place_12);
}catch (e44496){var cr44446_exception = e44496;
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
var cr44446_block_4 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_4(cr44446_state){
try{var cr44446_place_1 = (cr44446_state[(1)]);
var cr44446_place_11 = cr44446_place_1;
(cr44446_state[(0)] = cr44446_block_8);

(cr44446_state[(1)] = null);

(cr44446_state[(2)] = cr44446_place_11);

return cr44446_state;
}catch (e44498){var cr44446_exception = e44498;
(cr44446_state[(0)] = null);

(cr44446_state[(2)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
var cr44446_block_2 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_2(cr44446_state){
try{var cr44446_place_2 = (1);
var cr44446_place_3 = missionary.core.seed;
var cr44446_place_4 = cljs.core.range;
var cr44446_place_5 = (2);
var cr44446_place_6 = (function (){var G__44503 = cr44446_place_5;
var fexpr__44501 = cr44446_place_4;
return (fexpr__44501.cljs$core$IFn$_invoke$arity$1 ? fexpr__44501.cljs$core$IFn$_invoke$arity$1(G__44503) : fexpr__44501.call(null,G__44503));
})();
var cr44446_place_7 = (function (){var G__44506 = cr44446_place_6;
var fexpr__44505 = cr44446_place_3;
return (fexpr__44505.cljs$core$IFn$_invoke$arity$1 ? fexpr__44505.cljs$core$IFn$_invoke$arity$1(G__44506) : fexpr__44505.call(null,G__44506));
})();
(cr44446_state[(0)] = cr44446_block_3);

return missionary.core.fork(cr44446_place_2,cr44446_place_7);
}catch (e44500){var cr44446_exception = e44500;
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
var cr44446_block_6 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_6(cr44446_state){
try{var cr44446_place_13 = missionary.core.unpark();
(cr44446_state[(0)] = cr44446_block_2);

(cr44446_state[(1)] = cr44446_place_13);

return cr44446_state;
}catch (e44516){var cr44446_exception = e44516;
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
var cr44446_block_1 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_1(cr44446_state){
try{var cr44446_place_1 = missionary.core.unpark();
(cr44446_state[(0)] = cr44446_block_2);

(cr44446_state[(1)] = cr44446_place_1);

return cr44446_state;
}catch (e44517){var cr44446_exception = e44517;
(cr44446_state[(0)] = null);

throw cr44446_exception;
}});
var cr44446_block_7 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_7(cr44446_state){
try{var cr44446_place_8 = (cr44446_state[(1)]);
var cr44446_place_14 = "No matching clause: ";
var cr44446_place_15 = cr44446_place_8;
var cr44446_place_16 = [cr44446_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44446_place_15)].join('');
var cr44446_place_17 = (new Error(cr44446_place_16));
var cr44446_place_18 = (function(){throw cr44446_place_17})();
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

return null;
}catch (e44521){var cr44446_exception = e44521;
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
var cr44446_block_3 = (function contrib$missionary_contrib$poll_task_$_cr44446_block_3(cr44446_state){
try{var cr44446_place_8 = missionary.core.unpark();
var cr44446_place_9 = cr44446_place_8;
var cr44446_place_10 = null;
var G__44527 = cr44446_place_9;
switch (G__44527) {
case (0):
(cr44446_state[(0)] = cr44446_block_4);

(cr44446_state[(2)] = cr44446_place_10);

return cr44446_state;

break;
case (1):
(cr44446_state[(0)] = cr44446_block_5);

return cr44446_state;

break;
default:
(cr44446_state[(0)] = cr44446_block_7);

(cr44446_state[(1)] = null);

(cr44446_state[(1)] = cr44446_place_8);

return cr44446_state;

}
}catch (e44526){var cr44446_exception = e44526;
(cr44446_state[(0)] = null);

(cr44446_state[(1)] = null);

throw cr44446_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44530 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44530[(0)] = cr44446_block_0);

return G__44530;
})());
})(),missionary.core.ap_run);
});
/**
 * Return a task taking one value from `chan`. Return nil if chan is closed. Does not close chan,
 *   and when cancelled stops waiting for chan.
 */
contrib.missionary_contrib.chan_read_BANG_ = (function contrib$missionary_contrib$chan_read_BANG_(var_args){
var G__44540 = arguments.length;
switch (G__44540) {
case 1:
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (chan){
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(new missionary.Cancelled()));
}));

(contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chan,cancelled_value){
return (function (success,failure){
var cancel_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__31745__auto___44712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31746__auto__ = (function (){var switch__31579__auto__ = (function (state_44564){
var state_val_44565 = (state_44564[(1)]);
if((state_val_44565 === (1))){
var inst_44548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44549 = [chan,cancel_chan];
var inst_44550 = (new cljs.core.PersistentVector(null,2,(5),inst_44548,inst_44549,null));
var state_44564__$1 = state_44564;
return cljs.core.async.ioc_alts_BANG_(state_44564__$1,(2),inst_44550);
} else {
if((state_val_44565 === (2))){
var inst_44552 = (state_44564[(2)]);
var inst_44554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44552,(0),null);
var inst_44555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44552,(1),null);
var inst_44556 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44555,cancel_chan);
var state_44564__$1 = (function (){var statearr_44571 = state_44564;
(statearr_44571[(7)] = inst_44554);

return statearr_44571;
})();
if(inst_44556){
var statearr_44572_44713 = state_44564__$1;
(statearr_44572_44713[(1)] = (3));

} else {
var statearr_44574_44714 = state_44564__$1;
(statearr_44574_44714[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44565 === (3))){
var inst_44558 = (failure.cljs$core$IFn$_invoke$arity$1 ? failure.cljs$core$IFn$_invoke$arity$1(cancelled_value) : failure.call(null,cancelled_value));
var state_44564__$1 = state_44564;
var statearr_44575_44716 = state_44564__$1;
(statearr_44575_44716[(2)] = inst_44558);

(statearr_44575_44716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44565 === (4))){
var inst_44554 = (state_44564[(7)]);
var inst_44560 = (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(inst_44554) : success.call(null,inst_44554));
var state_44564__$1 = state_44564;
var statearr_44578_44717 = state_44564__$1;
(statearr_44578_44717[(2)] = inst_44560);

(statearr_44578_44717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44565 === (5))){
var inst_44562 = (state_44564[(2)]);
var state_44564__$1 = state_44564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44564__$1,inst_44562);
} else {
return null;
}
}
}
}
}
});
return (function() {
var contrib$missionary_contrib$state_machine__31580__auto__ = null;
var contrib$missionary_contrib$state_machine__31580__auto____0 = (function (){
var statearr_44582 = [null,null,null,null,null,null,null,null];
(statearr_44582[(0)] = contrib$missionary_contrib$state_machine__31580__auto__);

(statearr_44582[(1)] = (1));

return statearr_44582;
});
var contrib$missionary_contrib$state_machine__31580__auto____1 = (function (state_44564){
while(true){
var ret_value__31581__auto__ = (function (){try{while(true){
var result__31583__auto__ = switch__31579__auto__(state_44564);
if(cljs.core.keyword_identical_QMARK_(result__31583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31583__auto__;
}
break;
}
}catch (e44585){var ex__31584__auto__ = e44585;
var statearr_44586_44720 = state_44564;
(statearr_44586_44720[(2)] = ex__31584__auto__);


if(cljs.core.seq((state_44564[(4)]))){
var statearr_44587_44721 = state_44564;
(statearr_44587_44721[(1)] = cljs.core.first((state_44564[(4)])));

} else {
throw ex__31584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44722 = state_44564;
state_44564 = G__44722;
continue;
} else {
return ret_value__31581__auto__;
}
break;
}
});
contrib$missionary_contrib$state_machine__31580__auto__ = function(state_44564){
switch(arguments.length){
case 0:
return contrib$missionary_contrib$state_machine__31580__auto____0.call(this);
case 1:
return contrib$missionary_contrib$state_machine__31580__auto____1.call(this,state_44564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
contrib$missionary_contrib$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$0 = contrib$missionary_contrib$state_machine__31580__auto____0;
contrib$missionary_contrib$state_machine__31580__auto__.cljs$core$IFn$_invoke$arity$1 = contrib$missionary_contrib$state_machine__31580__auto____1;
return contrib$missionary_contrib$state_machine__31580__auto__;
})()
})();
var state__31747__auto__ = (function (){var statearr_44589 = f__31746__auto__();
(statearr_44589[(6)] = c__31745__auto___44712);

return statearr_44589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31747__auto__);
}));


return (function contrib$missionary_contrib$cancel(){
return cljs.core.async.close_BANG_(cancel_chan);
});
});
}));

(contrib.missionary_contrib.chan_read_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Adapt a core.async channel to a discrete flow
 */
contrib.missionary_contrib.chan__GT_ap = (function contrib$missionary_contrib$chan__GT_ap(ch){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44593_block_10 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_10(cr44593_state){
try{var cr44593_place_26 = missionary.core.unpark();
(cr44593_state[(0)] = cr44593_block_11);

(cr44593_state[(1)] = cr44593_place_26);

return cr44593_state;
}catch (e44651){var cr44593_exception = e44651;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

throw cr44593_exception;
}});
var cr44593_block_11 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_11(cr44593_state){
try{var cr44593_place_7 = (cr44593_state[(1)]);
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

return cr44593_place_7;
}catch (e44653){var cr44593_exception = e44653;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

throw cr44593_exception;
}});
var cr44593_block_8 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_8(cr44593_state){
try{var cr44593_place_17 = (cr44593_state[(3)]);
(cr44593_state[(0)] = cr44593_block_11);

(cr44593_state[(3)] = null);

(cr44593_state[(1)] = cr44593_place_17);

return cr44593_state;
}catch (e44655){var cr44593_exception = e44655;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

(cr44593_state[(3)] = null);

throw cr44593_exception;
}});
var cr44593_block_6 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_6(cr44593_state){
try{(cr44593_state[(0)] = cr44593_block_1);

return cr44593_state;
}catch (e44657){var cr44593_exception = e44657;
(cr44593_state[(0)] = null);

throw cr44593_exception;
}});
var cr44593_block_5 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_5(cr44593_state){
try{var cr44593_place_8 = (cr44593_state[(2)]);
var cr44593_place_18 = cr44593_place_8;
(cr44593_state[(0)] = cr44593_block_8);

(cr44593_state[(2)] = null);

(cr44593_state[(3)] = cr44593_place_18);

return cr44593_state;
}catch (e44658){var cr44593_exception = e44658;
(cr44593_state[(0)] = null);

(cr44593_state[(2)] = null);

(cr44593_state[(1)] = null);

(cr44593_state[(3)] = null);

throw cr44593_exception;
}});
var cr44593_block_2 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_2(cr44593_state){
try{var cr44593_place_3 = missionary.core.unpark();
var cr44593_place_4 = cr44593_place_3;
var cr44593_place_5 = null;
var cr44593_place_6 = (cr44593_place_4 == cr44593_place_5);
var cr44593_place_7 = null;
if(cr44593_place_6){
(cr44593_state[(0)] = cr44593_block_9);

(cr44593_state[(1)] = cr44593_place_7);

return cr44593_state;
} else {
(cr44593_state[(0)] = cr44593_block_3);

(cr44593_state[(2)] = cr44593_place_3);

(cr44593_state[(1)] = cr44593_place_7);

return cr44593_state;
}
}catch (e44661){var cr44593_exception = e44661;
(cr44593_state[(0)] = null);

throw cr44593_exception;
}});
var cr44593_block_9 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_9(cr44593_state){
try{var cr44593_place_24 = (1);
var cr44593_place_25 = missionary.core.none;
(cr44593_state[(0)] = cr44593_block_10);

return missionary.core.fork(cr44593_place_24,cr44593_place_25);
}catch (e44663){var cr44593_exception = e44663;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

throw cr44593_exception;
}});
var cr44593_block_4 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_4(cr44593_state){
try{var cr44593_place_15 = missionary.core.unpark();
var cr44593_place_16 = cr44593_place_15;
var cr44593_place_17 = null;
var G__44667 = cr44593_place_16;
switch (G__44667) {
case (0):
(cr44593_state[(0)] = cr44593_block_5);

(cr44593_state[(3)] = cr44593_place_17);

return cr44593_state;

break;
case (1):
(cr44593_state[(0)] = cr44593_block_6);

(cr44593_state[(2)] = null);

(cr44593_state[(1)] = null);

return cr44593_state;

break;
default:
(cr44593_state[(0)] = cr44593_block_7);

(cr44593_state[(2)] = null);

(cr44593_state[(1)] = null);

(cr44593_state[(1)] = cr44593_place_15);

return cr44593_state;

}
}catch (e44666){var cr44593_exception = e44666;
(cr44593_state[(0)] = null);

(cr44593_state[(2)] = null);

(cr44593_state[(1)] = null);

throw cr44593_exception;
}});
var cr44593_block_0 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_0(cr44593_state){
try{(cr44593_state[(0)] = cr44593_block_1);

return cr44593_state;
}catch (e44670){var cr44593_exception = e44670;
(cr44593_state[(0)] = null);

throw cr44593_exception;
}});
var cr44593_block_1 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_1(cr44593_state){
try{var cr44593_place_0 = contrib.missionary_contrib.chan_read_BANG_;
var cr44593_place_1 = ch;
var cr44593_place_2 = (function (){var G__44673 = cr44593_place_1;
var fexpr__44672 = cr44593_place_0;
return (fexpr__44672.cljs$core$IFn$_invoke$arity$1 ? fexpr__44672.cljs$core$IFn$_invoke$arity$1(G__44673) : fexpr__44672.call(null,G__44673));
})();
(cr44593_state[(0)] = cr44593_block_2);

return missionary.core.park(cr44593_place_2);
}catch (e44671){var cr44593_exception = e44671;
(cr44593_state[(0)] = null);

throw cr44593_exception;
}});
var cr44593_block_3 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_3(cr44593_state){
try{var cr44593_place_3 = (cr44593_state[(2)]);
var cr44593_place_8 = cr44593_place_3;
var cr44593_place_9 = (1);
var cr44593_place_10 = missionary.core.seed;
var cr44593_place_11 = cljs.core.range;
var cr44593_place_12 = (2);
var cr44593_place_13 = (function (){var G__44676 = cr44593_place_12;
var fexpr__44675 = cr44593_place_11;
return (fexpr__44675.cljs$core$IFn$_invoke$arity$1 ? fexpr__44675.cljs$core$IFn$_invoke$arity$1(G__44676) : fexpr__44675.call(null,G__44676));
})();
var cr44593_place_14 = (function (){var G__44679 = cr44593_place_13;
var fexpr__44678 = cr44593_place_10;
return (fexpr__44678.cljs$core$IFn$_invoke$arity$1 ? fexpr__44678.cljs$core$IFn$_invoke$arity$1(G__44679) : fexpr__44678.call(null,G__44679));
})();
(cr44593_state[(0)] = cr44593_block_4);

(cr44593_state[(2)] = null);

(cr44593_state[(2)] = cr44593_place_8);

return missionary.core.fork(cr44593_place_9,cr44593_place_14);
}catch (e44674){var cr44593_exception = e44674;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

(cr44593_state[(2)] = null);

throw cr44593_exception;
}});
var cr44593_block_7 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44593_block_7(cr44593_state){
try{var cr44593_place_15 = (cr44593_state[(1)]);
var cr44593_place_19 = "No matching clause: ";
var cr44593_place_20 = cr44593_place_15;
var cr44593_place_21 = [cr44593_place_19,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44593_place_20)].join('');
var cr44593_place_22 = (new Error(cr44593_place_21));
var cr44593_place_23 = (function(){throw cr44593_place_22})();
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

return null;
}catch (e44680){var cr44593_exception = e44680;
(cr44593_state[(0)] = null);

(cr44593_state[(1)] = null);

throw cr44593_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44682 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__44682[(0)] = cr44593_block_0);

return G__44682;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.chan__GT_task = (function contrib$missionary_contrib$chan__GT_task(ch){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,contrib.missionary_contrib.chan__GT_ap(ch));
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
