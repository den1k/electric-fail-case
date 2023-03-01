goog.provide('hyperfiddle.electric_client');
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var proto = window.location.protocol;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__40918 = proto;
switch (G__40918) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})()),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)].join('');
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e40919){var e = e40919;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr40926_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_0(cr40926_state){
try{(cr40926_state[(0)] = cr40926_block_1);

return cr40926_state;
}catch (e40954){var cr40926_exception = e40954;
(cr40926_state[(0)] = null);

throw cr40926_exception;
}});
var cr40926_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_1(cr40926_state){
try{var cr40926_place_0 = (4096);
var cr40926_place_1 = ws;
var cr40926_place_2 = cr40926_place_1.bufferedAmount;
var cr40926_place_3 = (cr40926_place_0 < cr40926_place_2);
var cr40926_place_4 = null;
if(cr40926_place_3){
(cr40926_state[(0)] = cr40926_block_3);

return cr40926_state;
} else {
(cr40926_state[(0)] = cr40926_block_2);

(cr40926_state[(1)] = cr40926_place_4);

return cr40926_state;
}
}catch (e40955){var cr40926_exception = e40955;
(cr40926_state[(0)] = null);

throw cr40926_exception;
}});
var cr40926_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_2(cr40926_state){
try{var cr40926_place_5 = null;
(cr40926_state[(0)] = cr40926_block_5);

(cr40926_state[(1)] = cr40926_place_5);

return cr40926_state;
}catch (e40956){var cr40926_exception = e40956;
(cr40926_state[(0)] = null);

(cr40926_state[(1)] = null);

throw cr40926_exception;
}});
var cr40926_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_3(cr40926_state){
try{var cr40926_place_6 = missionary.core.sleep;
var cr40926_place_7 = (50);
var cr40926_place_8 = (function (){var G__40960 = cr40926_place_7;
var fexpr__40959 = cr40926_place_6;
return (fexpr__40959.cljs$core$IFn$_invoke$arity$1 ? fexpr__40959.cljs$core$IFn$_invoke$arity$1(G__40960) : fexpr__40959.call(null,G__40960));
})();
(cr40926_state[(0)] = cr40926_block_4);

return missionary.core.park(cr40926_place_8);
}catch (e40957){var cr40926_exception = e40957;
(cr40926_state[(0)] = null);

throw cr40926_exception;
}});
var cr40926_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_4(cr40926_state){
try{var cr40926_place_9 = missionary.core.unpark();
(cr40926_state[(0)] = cr40926_block_1);

return cr40926_state;
}catch (e40962){var cr40926_exception = e40962;
(cr40926_state[(0)] = null);

throw cr40926_exception;
}});
var cr40926_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr40926_block_5(cr40926_state){
try{var cr40926_place_4 = (cr40926_state[(1)]);
(cr40926_state[(0)] = null);

(cr40926_state[(1)] = null);

return cr40926_place_4;
}catch (e40966){var cr40926_exception = e40966;
(cr40926_state[(0)] = null);

(cr40926_state[(1)] = null);

throw cr40926_exception;
}});
return cloroutine.impl.coroutine((function (){var G__40969 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__40969[(0)] = cr40926_block_0);

return G__40969;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__40972 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__40972) : s.call(null,G__40972));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__40973 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40973) : f.call(null,G__40973));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__40979 = ws;
G__40979.send(msg);

return G__40979;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr40981_block_0 = (function hyperfiddle$electric_client$send_all_$_cr40981_block_0(cr40981_state){
try{var cr40981_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr40981_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr40981_place_2 = ws;
var cr40981_place_3 = hyperfiddle.electric.impl.io.encode;
var cr40981_place_4 = (1);
var cr40981_place_5 = msgs;
(cr40981_state[(0)] = cr40981_block_1);

(cr40981_state[(4)] = cr40981_place_0);

(cr40981_state[(2)] = cr40981_place_1);

(cr40981_state[(1)] = cr40981_place_2);

(cr40981_state[(3)] = cr40981_place_3);

return missionary.core.fork(cr40981_place_4,cr40981_place_5);
}catch (e41012){var cr40981_exception = e41012;
(cr40981_state[(0)] = null);

throw cr40981_exception;
}});
var cr40981_block_1 = (function hyperfiddle$electric_client$send_all_$_cr40981_block_1(cr40981_state){
try{var cr40981_place_2 = (cr40981_state[(1)]);
var cr40981_place_1 = (cr40981_state[(2)]);
var cr40981_place_3 = (cr40981_state[(3)]);
var cr40981_place_0 = (cr40981_state[(4)]);
var cr40981_place_6 = missionary.core.unpark();
var cr40981_place_7 = (function (){var G__41024 = cr40981_place_6;
var fexpr__41023 = cr40981_place_3;
return (fexpr__41023.cljs$core$IFn$_invoke$arity$1 ? fexpr__41023.cljs$core$IFn$_invoke$arity$1(G__41024) : fexpr__41023.call(null,G__41024));
})();
var cr40981_place_8 = (function (){var G__41026 = cr40981_place_2;
var G__41027 = cr40981_place_7;
var fexpr__41025 = cr40981_place_1;
return (fexpr__41025.cljs$core$IFn$_invoke$arity$2 ? fexpr__41025.cljs$core$IFn$_invoke$arity$2(G__41026,G__41027) : fexpr__41025.call(null,G__41026,G__41027));
})();
var cr40981_place_9 = (function (){var G__41029 = cr40981_place_8;
var fexpr__41028 = cr40981_place_0;
return (fexpr__41028.cljs$core$IFn$_invoke$arity$1 ? fexpr__41028.cljs$core$IFn$_invoke$arity$1(G__41029) : fexpr__41028.call(null,G__41029));
})();
(cr40981_state[(0)] = cr40981_block_2);

(cr40981_state[(1)] = null);

(cr40981_state[(2)] = null);

(cr40981_state[(3)] = null);

(cr40981_state[(4)] = null);

return missionary.core.park(cr40981_place_9);
}catch (e41016){var cr40981_exception = e41016;
(cr40981_state[(0)] = null);

(cr40981_state[(1)] = null);

(cr40981_state[(2)] = null);

(cr40981_state[(3)] = null);

(cr40981_state[(4)] = null);

throw cr40981_exception;
}});
var cr40981_block_2 = (function hyperfiddle$electric_client$send_all_$_cr40981_block_2(cr40981_state){
try{var cr40981_place_10 = missionary.core.unpark();
(cr40981_state[(0)] = null);

return cr40981_place_10;
}catch (e41033){var cr40981_exception = e41033;
(cr40981_state[(0)] = null);

throw cr40981_exception;
}});
return cloroutine.impl.coroutine((function (){var G__41035 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__41035[(0)] = cr40981_block_0);

return G__41035;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr41045_block_1 = (function hyperfiddle$electric_client$connector_$_cr41045_block_1(cr41045_state){
try{var cr41045_place_3 = missionary.core.unpark();
var cr41045_place_4 = cr41045_place_3;
var cr41045_place_5 = null;
var cr41045_place_6 = (cr41045_place_4 == cr41045_place_5);
var cr41045_place_7 = null;
if(cr41045_place_6){
(cr41045_state[(0)] = cr41045_block_11);

(cr41045_state[(2)] = cr41045_place_7);

return cr41045_state;
} else {
(cr41045_state[(0)] = cr41045_block_2);

(cr41045_state[(1)] = cr41045_place_3);

(cr41045_state[(2)] = cr41045_place_7);

return cr41045_state;
}
}catch (e41148){var cr41045_exception = e41148;
(cr41045_state[(0)] = null);

throw cr41045_exception;
}});
var cr41045_block_3 = (function hyperfiddle$electric_client$connector_$_cr41045_block_3(cr41045_state){
try{var cr41045_place_8 = (cr41045_state[(3)]);
var cr41045_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr41045_place_12 = cr41045_place_8;
var cr41045_place_13 = hyperfiddle.electric.impl.io.encode;
var cr41045_place_14 = server;
var cr41045_place_15 = (function (){var G__41154 = cr41045_place_14;
var fexpr__41153 = cr41045_place_13;
return (fexpr__41153.cljs$core$IFn$_invoke$arity$1 ? fexpr__41153.cljs$core$IFn$_invoke$arity$1(G__41154) : fexpr__41153.call(null,G__41154));
})();
var cr41045_place_16 = (function (){var G__41156 = cr41045_place_12;
var G__41157 = cr41045_place_15;
var fexpr__41155 = cr41045_place_11;
return (fexpr__41155.cljs$core$IFn$_invoke$arity$2 ? fexpr__41155.cljs$core$IFn$_invoke$arity$2(G__41156,G__41157) : fexpr__41155.call(null,G__41156,G__41157));
})();
var cr41045_place_17 = cr41045_place_8;
var cr41045_place_18 = cljs.core.comp;
var cr41045_place_19 = cb;
var cr41045_place_20 = hyperfiddle.electric.impl.io.decode;
var cr41045_place_21 = hyperfiddle.electric_client.payload;
var cr41045_place_22 = (function (){var G__41159 = cr41045_place_19;
var G__41160 = cr41045_place_20;
var G__41161 = cr41045_place_21;
var fexpr__41158 = cr41045_place_18;
return (fexpr__41158.cljs$core$IFn$_invoke$arity$3 ? fexpr__41158.cljs$core$IFn$_invoke$arity$3(G__41159,G__41160,G__41161) : fexpr__41158.call(null,G__41159,G__41160,G__41161));
})();
var cr41045_place_23 = (cr41045_place_17.onmessage = cr41045_place_22);
var cr41045_place_24 = missionary.core.race;
var cr41045_place_25 = hyperfiddle.electric_client.send_all;
var cr41045_place_26 = cr41045_place_8;
var cr41045_place_27 = msgs;
var cr41045_place_28 = (function (){var G__41163 = cr41045_place_26;
var G__41164 = cr41045_place_27;
var fexpr__41162 = cr41045_place_25;
return (fexpr__41162.cljs$core$IFn$_invoke$arity$2 ? fexpr__41162.cljs$core$IFn$_invoke$arity$2(G__41163,G__41164) : fexpr__41162.call(null,G__41163,G__41164));
})();
var cr41045_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr41045_place_30 = cr41045_place_8;
var cr41045_place_31 = (function (){var G__41166 = cr41045_place_30;
var fexpr__41165 = cr41045_place_29;
return (fexpr__41165.cljs$core$IFn$_invoke$arity$1 ? fexpr__41165.cljs$core$IFn$_invoke$arity$1(G__41166) : fexpr__41165.call(null,G__41166));
})();
var cr41045_place_32 = (function (){var G__41168 = cr41045_place_28;
var G__41169 = cr41045_place_31;
var fexpr__41167 = cr41045_place_24;
return (fexpr__41167.cljs$core$IFn$_invoke$arity$2 ? fexpr__41167.cljs$core$IFn$_invoke$arity$2(G__41168,G__41169) : fexpr__41167.call(null,G__41168,G__41169));
})();
(cr41045_state[(0)] = cr41045_block_4);

return missionary.core.park(cr41045_place_32);
}catch (e41150){var cr41045_exception = e41150;
(cr41045_state[(0)] = cr41045_block_5);

(cr41045_state[(4)] = cr41045_exception);

return cr41045_state;
}});
var cr41045_block_10 = (function hyperfiddle$electric_client$connector_$_cr41045_block_10(cr41045_state){
try{var cr41045_place_42 = (cr41045_state[(5)]);
var cr41045_place_10 = (cr41045_state[(1)]);
var cr41045_place_9 = (cr41045_state[(4)]);
var cr41045_place_50 = (cljs.core.truth_(cr41045_place_10)?(function(){throw cr41045_place_9})():cr41045_place_9);
(cr41045_state[(0)] = cr41045_block_12);

(cr41045_state[(5)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = cr41045_place_50);

return cr41045_state;
}catch (e41170){var cr41045_exception = e41170;
(cr41045_state[(0)] = null);

(cr41045_state[(5)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_9 = (function hyperfiddle$electric_client$connector_$_cr41045_block_9(cr41045_state){
try{var cr41045_place_49 = null;
(cr41045_state[(0)] = cr41045_block_10);

(cr41045_state[(5)] = cr41045_place_49);

return cr41045_state;
}catch (e41171){var cr41045_exception = e41171;
(cr41045_state[(0)] = null);

(cr41045_state[(5)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_2 = (function hyperfiddle$electric_client$connector_$_cr41045_block_2(cr41045_state){
try{var cr41045_place_3 = (cr41045_state[(1)]);
var cr41045_place_8 = cr41045_place_3;
var cr41045_place_9 = null;
var cr41045_place_10 = false;
(cr41045_state[(0)] = cr41045_block_3);

(cr41045_state[(1)] = null);

(cr41045_state[(3)] = cr41045_place_8);

(cr41045_state[(4)] = cr41045_place_9);

(cr41045_state[(1)] = cr41045_place_10);

return cr41045_state;
}catch (e41177){var cr41045_exception = e41177;
(cr41045_state[(0)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_6 = (function hyperfiddle$electric_client$connector_$_cr41045_block_6(cr41045_state){
try{var cr41045_place_8 = (cr41045_state[(3)]);
var cr41045_place_36 = cljs.core._EQ_;
var cr41045_place_37 = WebSocket;
var cr41045_place_38 = cr41045_place_37.CLOSED;
var cr41045_place_39 = cr41045_place_8;
var cr41045_place_40 = cr41045_place_39.readyState;
var cr41045_place_41 = (function (){var G__41180 = cr41045_place_38;
var G__41181 = cr41045_place_40;
var fexpr__41179 = cr41045_place_36;
return (fexpr__41179.cljs$core$IFn$_invoke$arity$2 ? fexpr__41179.cljs$core$IFn$_invoke$arity$2(G__41180,G__41181) : fexpr__41179.call(null,G__41180,G__41181));
})();
var cr41045_place_42 = null;
if(cljs.core.truth_(cr41045_place_41)){
(cr41045_state[(0)] = cr41045_block_9);

(cr41045_state[(3)] = null);

(cr41045_state[(5)] = cr41045_place_42);

return cr41045_state;
} else {
(cr41045_state[(0)] = cr41045_block_7);

(cr41045_state[(5)] = cr41045_place_42);

return cr41045_state;
}
}catch (e41178){var cr41045_exception = e41178;
(cr41045_state[(0)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(3)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_12 = (function hyperfiddle$electric_client$connector_$_cr41045_block_12(cr41045_state){
try{var cr41045_place_7 = (cr41045_state[(2)]);
(cr41045_state[(0)] = null);

(cr41045_state[(2)] = null);

return cr41045_place_7;
}catch (e41182){var cr41045_exception = e41182;
(cr41045_state[(0)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_8 = (function hyperfiddle$electric_client$connector_$_cr41045_block_8(cr41045_state){
try{var cr41045_place_48 = missionary.core.unpark();
(cr41045_state[(0)] = cr41045_block_10);

(cr41045_state[(5)] = cr41045_place_48);

return cr41045_state;
}catch (e41183){var cr41045_exception = e41183;
(cr41045_state[(0)] = null);

(cr41045_state[(5)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_7 = (function hyperfiddle$electric_client$connector_$_cr41045_block_7(cr41045_state){
try{var cr41045_place_8 = (cr41045_state[(3)]);
var cr41045_place_43 = cr41045_place_8;
var cr41045_place_44 = cr41045_place_43.close();
var cr41045_place_45 = missionary.core.compel;
var cr41045_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr41045_place_47 = (function (){var G__41186 = cr41045_place_46;
var fexpr__41185 = cr41045_place_45;
return (fexpr__41185.cljs$core$IFn$_invoke$arity$1 ? fexpr__41185.cljs$core$IFn$_invoke$arity$1(G__41186) : fexpr__41185.call(null,G__41186));
})();
(cr41045_state[(0)] = cr41045_block_8);

(cr41045_state[(3)] = null);

return missionary.core.park(cr41045_place_47);
}catch (e41184){var cr41045_exception = e41184;
(cr41045_state[(0)] = null);

(cr41045_state[(5)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(3)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_4 = (function hyperfiddle$electric_client$connector_$_cr41045_block_4(cr41045_state){
try{var cr41045_place_33 = missionary.core.unpark();
(cr41045_state[(0)] = cr41045_block_6);

(cr41045_state[(4)] = cr41045_place_33);

return cr41045_state;
}catch (e41187){var cr41045_exception = e41187;
(cr41045_state[(0)] = cr41045_block_5);

(cr41045_state[(4)] = cr41045_exception);

return cr41045_state;
}});
var cr41045_block_0 = (function hyperfiddle$electric_client$connector_$_cr41045_block_0(cr41045_state){
try{var cr41045_place_0 = hyperfiddle.electric_client.connect;
var cr41045_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr41045_place_2 = (function (){var G__41190 = cr41045_place_1;
var fexpr__41189 = cr41045_place_0;
return (fexpr__41189.cljs$core$IFn$_invoke$arity$1 ? fexpr__41189.cljs$core$IFn$_invoke$arity$1(G__41190) : fexpr__41189.call(null,G__41190));
})();
(cr41045_state[(0)] = cr41045_block_1);

return missionary.core.park(cr41045_place_2);
}catch (e41188){var cr41045_exception = e41188;
(cr41045_state[(0)] = null);

throw cr41045_exception;
}});
var cr41045_block_11 = (function hyperfiddle$electric_client$connector_$_cr41045_block_11(cr41045_state){
try{var cr41045_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr41045_state[(0)] = cr41045_block_12);

(cr41045_state[(2)] = cr41045_place_51);

return cr41045_state;
}catch (e41194){var cr41045_exception = e41194;
(cr41045_state[(0)] = null);

(cr41045_state[(2)] = null);

throw cr41045_exception;
}});
var cr41045_block_5 = (function hyperfiddle$electric_client$connector_$_cr41045_block_5(cr41045_state){
try{var cr41045_place_9 = (cr41045_state[(4)]);
var cr41045_place_34 = cr41045_place_9;
var cr41045_place_35 = (function(){throw cr41045_place_34})();
(cr41045_state[(0)] = null);

(cr41045_state[(1)] = null);

(cr41045_state[(3)] = null);

(cr41045_state[(4)] = null);

(cr41045_state[(2)] = null);

return null;
}catch (e41202){var cr41045_exception = e41202;
(cr41045_state[(0)] = cr41045_block_6);

(cr41045_state[(1)] = true);

(cr41045_state[(4)] = cr41045_exception);

return cr41045_state;
}});
return cloroutine.impl.coroutine((function (){var G__41205 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__41205[(0)] = cr41045_block_0);

return G__41205;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__41208){
var vec__41209 = p__41208;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41209,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41209,(1),null);
var G__41212 = b;
switch (G__41212) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.retry_codes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1006),null,(1005),null], null), null);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr41229_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_13(cr41229_state){
try{var cr41229_place_113 = missionary.core.unpark();
(cr41229_state[(0)] = cr41229_block_1);

(cr41229_state[(1)] = cr41229_place_113);

return cr41229_state;
}catch (e42092){var cr41229_exception = e42092;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

throw cr41229_exception;
}});
var cr41229_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_7(cr41229_state){
try{var cr41229_place_62 = (cr41229_state[(2)]);
(cr41229_state[(0)] = cr41229_block_9);

(cr41229_state[(2)] = null);

(cr41229_state[(4)] = cr41229_place_62);

return cr41229_state;
}catch (e42093){var cr41229_exception = e42093;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(4)] = null);

(cr41229_state[(2)] = null);

throw cr41229_exception;
}});
var cr41229_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_12(cr41229_state){
try{var cr41229_place_48 = (cr41229_state[(3)]);
var cr41229_place_89 = cr41229_place_48;
var cr41229_place_90 = cljs.core.seq;
var cr41229_place_91 = cr41229_place_89;
var cr41229_place_92 = (function (){var G__42096 = cr41229_place_91;
var fexpr__42095 = cr41229_place_90;
return (fexpr__42095.cljs$core$IFn$_invoke$arity$1 ? fexpr__42095.cljs$core$IFn$_invoke$arity$1(G__42096) : fexpr__42095.call(null,G__42096));
})();
var cr41229_place_93 = cljs.core.first;
var cr41229_place_94 = cr41229_place_92;
var cr41229_place_95 = (function (){var G__42098 = cr41229_place_94;
var fexpr__42097 = cr41229_place_93;
return (fexpr__42097.cljs$core$IFn$_invoke$arity$1 ? fexpr__42097.cljs$core$IFn$_invoke$arity$1(G__42098) : fexpr__42097.call(null,G__42098));
})();
var cr41229_place_96 = cljs.core.next;
var cr41229_place_97 = cr41229_place_92;
var cr41229_place_98 = (function (){var G__42100 = cr41229_place_97;
var fexpr__42099 = cr41229_place_96;
return (fexpr__42099.cljs$core$IFn$_invoke$arity$1 ? fexpr__42099.cljs$core$IFn$_invoke$arity$1(G__42100) : fexpr__42099.call(null,G__42100));
})();
var cr41229_place_99 = cr41229_place_95;
var cr41229_place_100 = cr41229_place_98;
var cr41229_place_101 = console;
var cr41229_place_102 = "Next attempt in ";
var cr41229_place_103 = cr41229_place_99;
var cr41229_place_104 = (1000);
var cr41229_place_105 = (cr41229_place_103 / cr41229_place_104);
var cr41229_place_106 = " seconds.";
var cr41229_place_107 = [cr41229_place_102,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr41229_place_105),cr41229_place_106].join('');
var cr41229_place_108 = cr41229_place_101.log(cr41229_place_107);
var cr41229_place_109 = missionary.core.sleep;
var cr41229_place_110 = cr41229_place_99;
var cr41229_place_111 = cr41229_place_100;
var cr41229_place_112 = (function (){var G__42102 = cr41229_place_110;
var G__42103 = cr41229_place_111;
var fexpr__42101 = cr41229_place_109;
return (fexpr__42101.cljs$core$IFn$_invoke$arity$2 ? fexpr__42101.cljs$core$IFn$_invoke$arity$2(G__42102,G__42103) : fexpr__42101.call(null,G__42102,G__42103));
})();
(cr41229_state[(0)] = cr41229_block_13);

(cr41229_state[(3)] = null);

return missionary.core.park(cr41229_place_112);
}catch (e42094){var cr41229_exception = e42094;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

throw cr41229_exception;
}});
var cr41229_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_15(cr41229_state){
try{var cr41229_place_88 = (cr41229_state[(1)]);
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

return cr41229_place_88;
}catch (e42104){var cr41229_exception = e42104;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

throw cr41229_exception;
}});
var cr41229_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_6(cr41229_state){
try{var cr41229_place_74 = console;
var cr41229_place_75 = "Connection lost.";
var cr41229_place_76 = cr41229_place_74.log(cr41229_place_75);
var cr41229_place_77 = cljs.core.seq;
var cr41229_place_78 = hyperfiddle.electric_client.retry_delays;
var cr41229_place_79 = (function (){var G__42108 = cr41229_place_78;
var fexpr__42107 = cr41229_place_77;
return (fexpr__42107.cljs$core$IFn$_invoke$arity$1 ? fexpr__42107.cljs$core$IFn$_invoke$arity$1(G__42108) : fexpr__42107.call(null,G__42108));
})();
(cr41229_state[(0)] = cr41229_block_7);

(cr41229_state[(2)] = cr41229_place_79);

return cr41229_state;
}catch (e42106){var cr41229_exception = e42106;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(4)] = null);

(cr41229_state[(2)] = null);

throw cr41229_exception;
}});
var cr41229_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_1(cr41229_state){
try{var cr41229_place_1 = cljs.core.object_array;
var cr41229_place_2 = (1);
var cr41229_place_3 = (function (){var G__42111 = cr41229_place_2;
var fexpr__42110 = cr41229_place_1;
return (fexpr__42110.cljs$core$IFn$_invoke$arity$1 ? fexpr__42110.cljs$core$IFn$_invoke$arity$1(G__42111) : fexpr__42110.call(null,G__42111));
})();
var cr41229_place_4 = console;
var cr41229_place_5 = "Connecting...";
var cr41229_place_6 = cr41229_place_4.log(cr41229_place_5);
var cr41229_place_7 = (function (x){
var fexpr__41628 = (cr41229_place_3[(0)]);
var G__42113 = x;
var fexpr__42112 = fexpr__41628;
return (fexpr__42112.cljs$core$IFn$_invoke$arity$1 ? fexpr__42112.cljs$core$IFn$_invoke$arity$1(G__42113) : fexpr__42112.call(null,G__42113));
});
var cr41229_place_8 = cljs.core.partial;
var cr41229_place_16 = (function (cr41630_state){
try{var cr41630_place_13 = (cr41630_state[(2)]);
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

return cr41630_place_13;
}catch (e42150){var e41809 = e42150;
var cr41630_exception = e41809;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_20 = (function (cr41630_state){
try{var cr41630_place_49 = (1);
var cr41630_place_50 = missionary.core.none;
(cr41630_state[(0)] = cr41229_place_10);

return missionary.core.fork(cr41630_place_49,cr41630_place_50);
}catch (e42151){var e41823 = e42151;
var cr41630_exception = e41823;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_23 = (function (cr41630_state){
try{var cr41630_place_26 = missionary.core.unpark();
(cr41630_state[(0)] = cr41229_place_16);

(cr41630_state[(2)] = cr41630_place_26);

return cr41630_state;
}catch (e42152){var e41831 = e42152;
var cr41630_exception = e41831;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_10 = (function (cr41630_state){
try{var cr41630_place_51 = missionary.core.unpark();
(cr41630_state[(0)] = cr41229_place_15);

(cr41630_state[(3)] = cr41630_place_51);

return cr41630_state;
}catch (e42153){var e41765 = e42153;
var cr41630_exception = e41765;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_26 = (function (cr41630_state){
try{var cr41630_place_28 = missionary.core.unpark();
var cr41630_place_29 = cr41630_place_28;
var cr41630_place_30 = null;
var cr41630_place_31 = (cr41630_place_29 == cr41630_place_30);
var cr41630_place_32 = null;
if(cr41630_place_31){
(cr41630_state[(0)] = cr41229_place_20);

(cr41630_state[(1)] = null);

(cr41630_state[(3)] = cr41630_place_32);

return cr41630_state;
} else {
(cr41630_state[(0)] = cr41229_place_11);

(cr41630_state[(4)] = cr41630_place_28);

(cr41630_state[(3)] = cr41630_place_32);

return cr41630_state;
}
}catch (e42154){var e41848 = e42154;
var cr41630_exception = e41848;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_18 = (function (cr41630_state){
try{var cr41630_place_11 = (cr41630_state[(1)]);
var cr41630_place_52 = "No matching clause: ";
var cr41630_place_53 = cr41630_place_11;
var cr41630_place_54 = [cr41630_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr41630_place_53)].join('');
var cr41630_place_55 = (new Error(cr41630_place_54));
var cr41630_place_56 = (function(){throw cr41630_place_55})();
(cr41630_state[(0)] = null);

(cr41630_state[(1)] = null);

return null;
}catch (e42156){var e41816 = e42156;
var cr41630_exception = e41816;
(cr41630_state[(0)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_25 = (function (cr41630_state){
try{var cr41630_place_42 = (cr41630_state[(1)]);
(cr41630_state[(0)] = cr41229_place_15);

(cr41630_state[(1)] = null);

(cr41630_state[(3)] = cr41630_place_42);

return cr41630_state;
}catch (e42158){var e41846 = e42158;
var cr41630_exception = e41846;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_13 = (function (cr41630_state){
try{var cr41630_place_11 = missionary.core.unpark();
var cr41630_place_12 = cr41630_place_11;
var cr41630_place_13 = null;
var G__41800 = cr41630_place_12;
var G__42164 = G__41800;
switch (G__42164) {
case (0):
(cr41630_state[(0)] = cr41229_place_12);

(cr41630_state[(2)] = cr41630_place_13);

return cr41630_state;

break;
case (1):
(cr41630_state[(0)] = cr41229_place_14);

(cr41630_state[(2)] = cr41630_place_13);

return cr41630_state;

break;
default:
(cr41630_state[(0)] = cr41229_place_18);

(cr41630_state[(1)] = null);

(cr41630_state[(1)] = cr41630_place_11);

return cr41630_state;

}
}catch (e42163){var e41796 = e42163;
var cr41630_exception = e41796;
(cr41630_state[(0)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_15 = (function (cr41630_state){
try{var cr41630_place_32 = (cr41630_state[(3)]);
(cr41630_state[(0)] = cr41229_place_16);

(cr41630_state[(3)] = null);

(cr41630_state[(2)] = cr41630_place_32);

return cr41630_state;
}catch (e42168){var e41807 = e42168;
var cr41630_exception = e41807;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_19 = (function (cr41630_state){
try{var cr41630_place_40 = (cr41630_state[(1)]);
var cr41630_place_44 = "No matching clause: ";
var cr41630_place_45 = cr41630_place_40;
var cr41630_place_46 = [cr41630_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr41630_place_45)].join('');
var cr41630_place_47 = (new Error(cr41630_place_46));
var cr41630_place_48 = (function(){throw cr41630_place_47})();
(cr41630_state[(0)] = null);

(cr41630_state[(1)] = null);

return null;
}catch (e42169){var e41819 = e42169;
var cr41630_exception = e41819;
(cr41630_state[(0)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_24 = (function (cr41630_state){
try{var cr41630_place_0 = console;
var cr41630_place_1 = "Connected.";
var cr41630_place_2 = cr41630_place_0.log(cr41630_place_1);
var cr41630_place_3 = missionary.core.rdv;
var cr41630_place_4 = (function (){var fexpr__41839 = cr41630_place_3;
var fexpr__42171 = fexpr__41839;
return (fexpr__42171.cljs$core$IFn$_invoke$arity$0 ? fexpr__42171.cljs$core$IFn$_invoke$arity$0() : fexpr__42171.call(null));
})();
var cr41630_place_5 = (2);
var cr41630_place_6 = missionary.core.seed;
var cr41630_place_7 = cljs.core.range;
var cr41630_place_8 = (2);
var cr41630_place_9 = (function (){var G__41841 = cr41630_place_8;
var fexpr__41840 = cr41630_place_7;
var G__42173 = G__41841;
var fexpr__42172 = fexpr__41840;
return (fexpr__42172.cljs$core$IFn$_invoke$arity$1 ? fexpr__42172.cljs$core$IFn$_invoke$arity$1(G__42173) : fexpr__42172.call(null,G__42173));
})();
var cr41630_place_10 = (function (){var G__41844 = cr41630_place_9;
var fexpr__41843 = cr41630_place_6;
var G__42175 = G__41844;
var fexpr__42174 = fexpr__41843;
return (fexpr__42174.cljs$core$IFn$_invoke$arity$1 ? fexpr__42174.cljs$core$IFn$_invoke$arity$1(G__42175) : fexpr__42174.call(null,G__42175));
})();
(cr41630_state[(0)] = cr41229_place_13);

(cr41630_state[(1)] = cr41630_place_4);

return missionary.core.fork(cr41630_place_5,cr41630_place_10);
}catch (e42170){var e41836 = e42170;
var cr41630_exception = e41836;
(cr41630_state[(0)] = null);

throw cr41630_exception;
}});
var cr41229_place_22 = (function (cr41630_state){
try{var cr41630_place_33 = (cr41630_state[(4)]);
var cr41630_place_43 = cr41630_place_33;
(cr41630_state[(0)] = cr41229_place_25);

(cr41630_state[(4)] = null);

(cr41630_state[(1)] = cr41630_place_43);

return cr41630_state;
}catch (e42176){var e41829 = e42176;
var cr41630_exception = e41829;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(4)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_11 = (function (cr41630_state){
try{var cr41630_place_28 = (cr41630_state[(4)]);
var cr41630_place_33 = cr41630_place_28;
var cr41630_place_34 = (1);
var cr41630_place_35 = missionary.core.seed;
var cr41630_place_36 = cljs.core.range;
var cr41630_place_37 = (2);
var cr41630_place_38 = (function (){var G__41773 = cr41630_place_37;
var fexpr__41772 = cr41630_place_36;
var G__42179 = G__41773;
var fexpr__42178 = fexpr__41772;
return (fexpr__42178.cljs$core$IFn$_invoke$arity$1 ? fexpr__42178.cljs$core$IFn$_invoke$arity$1(G__42179) : fexpr__42178.call(null,G__42179));
})();
var cr41630_place_39 = (function (){var G__41780 = cr41630_place_38;
var fexpr__41779 = cr41630_place_35;
var G__42181 = G__41780;
var fexpr__42180 = fexpr__41779;
return (fexpr__42180.cljs$core$IFn$_invoke$arity$1 ? fexpr__42180.cljs$core$IFn$_invoke$arity$1(G__42181) : fexpr__42180.call(null,G__42181));
})();
(cr41630_state[(0)] = cr41229_place_17);

(cr41630_state[(4)] = null);

(cr41630_state[(4)] = cr41630_place_33);

return missionary.core.fork(cr41630_place_34,cr41630_place_39);
}catch (e42177){var e41767 = e42177;
var cr41630_exception = e41767;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(4)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_17 = (function (cr41630_state){
try{var cr41630_place_40 = missionary.core.unpark();
var cr41630_place_41 = cr41630_place_40;
var cr41630_place_42 = null;
var G__41812 = cr41630_place_41;
var G__42183 = G__41812;
switch (G__42183) {
case (0):
(cr41630_state[(0)] = cr41229_place_22);

(cr41630_state[(1)] = null);

(cr41630_state[(1)] = cr41630_place_42);

return cr41630_state;

break;
case (1):
(cr41630_state[(0)] = cr41229_place_9);

(cr41630_state[(3)] = null);

(cr41630_state[(4)] = null);

return cr41630_state;

break;
default:
(cr41630_state[(0)] = cr41229_place_19);

(cr41630_state[(3)] = null);

(cr41630_state[(4)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

(cr41630_state[(1)] = cr41630_place_40);

return cr41630_state;

}
}catch (e42182){var e41810 = e42182;
var cr41630_exception = e41810;
(cr41630_state[(0)] = null);

(cr41630_state[(3)] = null);

(cr41630_state[(4)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_9 = (function (cr41630_state){
try{(cr41630_state[(0)] = cr41229_place_27);

return cr41630_state;
}catch (e42184){var e41763 = e42184;
var cr41630_exception = e41763;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_27 = (function (cr41630_state){
try{var cr41630_place_4 = (cr41630_state[(1)]);
var cr41630_place_27 = cr41630_place_4;
(cr41630_state[(0)] = cr41229_place_26);

return missionary.core.park(cr41630_place_27);
}catch (e42185){var e41850 = e42185;
var cr41630_exception = e41850;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_14 = (function (cr41630_state){
try{(cr41630_state[(0)] = cr41229_place_27);

return cr41630_state;
}catch (e42186){var e41803 = e42186;
var cr41630_exception = e41803;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_12 = (function (cr41630_state){
try{var cr41630_place_4 = (cr41630_state[(1)]);
var cr41630_place_14 = cr41630_place_4;
var cr41630_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr41630_place_16 = cr41229_place_3;
var cr41630_place_17 = (0);
var cr41630_place_18 = (function (){var G__41789 = cr41630_place_16;
var G__41790 = cr41630_place_17;
var fexpr__41788 = cr41630_place_15;
var G__42189 = G__41789;
var G__42190 = G__41790;
var fexpr__42188 = fexpr__41788;
return (fexpr__42188.cljs$core$IFn$_invoke$arity$2 ? fexpr__42188.cljs$core$IFn$_invoke$arity$2(G__42189,G__42190) : fexpr__42188.call(null,G__42189,G__42190));
})();
var cr41630_place_19 = client;
var cr41630_place_20 = cr41630_place_14;
var cr41630_place_21 = cr41630_place_18;
var cr41630_place_22 = (function (){var G__41793 = cr41630_place_20;
var G__41794 = cr41630_place_21;
var fexpr__41792 = cr41630_place_19;
var G__42192 = G__41793;
var G__42193 = G__41794;
var fexpr__42191 = fexpr__41792;
return (fexpr__42191.cljs$core$IFn$_invoke$arity$2 ? fexpr__42191.cljs$core$IFn$_invoke$arity$2(G__42192,G__42193) : fexpr__42191.call(null,G__42192,G__42193));
})();
(cr41630_state[(0)] = cr41229_place_21);

(cr41630_state[(1)] = null);

return missionary.core.park(cr41630_place_22);
}catch (e42187){var e41784 = e42187;
var cr41630_exception = e41784;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

(cr41630_state[(1)] = null);

throw cr41630_exception;
}});
var cr41229_place_21 = (function (cr41630_state){
try{var cr41630_place_23 = missionary.core.unpark();
var cr41630_place_24 = (1);
var cr41630_place_25 = missionary.core.none;
(cr41630_state[(0)] = cr41229_place_23);

return missionary.core.fork(cr41630_place_24,cr41630_place_25);
}catch (e42194){var e41826 = e42194;
var cr41630_exception = e41826;
(cr41630_state[(0)] = null);

(cr41630_state[(2)] = null);

throw cr41630_exception;
}});
var cr41229_place_28 = cloroutine.impl.coroutine;
var cr41229_place_29 = cljs.core.object_array;
var cr41229_place_30 = (5);
var cr41229_place_31 = (function (){var G__42196 = cr41229_place_30;
var fexpr__42195 = cr41229_place_29;
return (fexpr__42195.cljs$core$IFn$_invoke$arity$1 ? fexpr__42195.cljs$core$IFn$_invoke$arity$1(G__42196) : fexpr__42195.call(null,G__42196));
})();
var cr41229_place_32 = cr41229_place_31;
var cr41229_place_33 = (0);
var cr41229_place_34 = cr41229_place_24;
var cr41229_place_35 = (cr41229_place_32[cr41229_place_33] = cr41229_place_34);
var cr41229_place_36 = cr41229_place_31;
var cr41229_place_37 = (function (){var G__42198 = cr41229_place_36;
var fexpr__42197 = cr41229_place_28;
return (fexpr__42197.cljs$core$IFn$_invoke$arity$1 ? fexpr__42197.cljs$core$IFn$_invoke$arity$1(G__42198) : fexpr__42197.call(null,G__42198));
})();
var cr41229_place_38 = missionary.core.ap_run;
var cr41229_place_39 = (function (){var G__42200 = cr41229_place_37;
var G__42201 = cr41229_place_38;
var fexpr__42199 = cr41229_place_8;
return (fexpr__42199.cljs$core$IFn$_invoke$arity$2 ? fexpr__42199.cljs$core$IFn$_invoke$arity$2(G__42200,G__42201) : fexpr__42199.call(null,G__42200,G__42201));
})();
var cr41229_place_40 = conn;
var cr41229_place_41 = cr41229_place_7;
var cr41229_place_42 = cr41229_place_39;
var cr41229_place_43 = (function (){var G__42203 = cr41229_place_41;
var G__42204 = cr41229_place_42;
var fexpr__42202 = cr41229_place_40;
return (fexpr__42202.cljs$core$IFn$_invoke$arity$2 ? fexpr__42202.cljs$core$IFn$_invoke$arity$2(G__42203,G__42204) : fexpr__42202.call(null,G__42203,G__42204));
})();
(cr41229_state[(0)] = cr41229_block_2);

return missionary.core.park(cr41229_place_43);
}catch (e42109){var cr41229_exception = e42109;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

throw cr41229_exception;
}});
var cr41229_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_11(cr41229_state){
try{var cr41229_place_48 = (cr41229_state[(3)]);
var cr41229_place_85 = cr41229_place_48;
var cr41229_place_86 = null;
var cr41229_place_87 = (cr41229_place_85 == cr41229_place_86);
var cr41229_place_88 = null;
if(cr41229_place_87){
(cr41229_state[(0)] = cr41229_block_14);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(1)] = cr41229_place_88);

return cr41229_state;
} else {
(cr41229_state[(0)] = cr41229_block_12);

return cr41229_state;
}
}catch (e42205){var cr41229_exception = e42205;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

throw cr41229_exception;
}});
var cr41229_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_3(cr41229_state){
try{var cr41229_place_44 = (cr41229_state[(2)]);
var cr41229_place_49 = cr41229_place_44;
var cr41229_place_50 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr41229_place_51 = cr41229_place_49;
var cr41229_place_52 = cr41229_place_50.cljs$core$IFn$_invoke$arity$1(cr41229_place_51);
var cr41229_place_53 = cr41229_place_52;
var cr41229_place_54 = null;
var cr41229_place_55 = (cr41229_place_53 == cr41229_place_54);
var cr41229_place_56 = null;
if(cr41229_place_55){
(cr41229_state[(0)] = cr41229_block_8);

(cr41229_state[(2)] = null);

(cr41229_state[(4)] = cr41229_place_56);

return cr41229_state;
} else {
(cr41229_state[(0)] = cr41229_block_4);

(cr41229_state[(2)] = null);

(cr41229_state[(2)] = cr41229_place_49);

(cr41229_state[(5)] = cr41229_place_52);

(cr41229_state[(4)] = cr41229_place_56);

return cr41229_state;
}
}catch (e42206){var cr41229_exception = e42206;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(2)] = null);

(cr41229_state[(3)] = null);

throw cr41229_exception;
}});
var cr41229_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_4(cr41229_state){
try{var cr41229_place_52 = (cr41229_state[(5)]);
var cr41229_place_57 = cr41229_place_52;
var cr41229_place_58 = cljs.core.contains_QMARK_;
var cr41229_place_59 = hyperfiddle.electric_client.retry_codes;
var cr41229_place_60 = cr41229_place_57;
var cr41229_place_61 = (function (){var G__42209 = cr41229_place_59;
var G__42210 = cr41229_place_60;
var fexpr__42208 = cr41229_place_58;
return (fexpr__42208.cljs$core$IFn$_invoke$arity$2 ? fexpr__42208.cljs$core$IFn$_invoke$arity$2(G__42209,G__42210) : fexpr__42208.call(null,G__42209,G__42210));
})();
var cr41229_place_62 = null;
if(cljs.core.truth_(cr41229_place_61)){
(cr41229_state[(0)] = cr41229_block_6);

(cr41229_state[(2)] = null);

(cr41229_state[(5)] = null);

(cr41229_state[(2)] = cr41229_place_62);

return cr41229_state;
} else {
(cr41229_state[(0)] = cr41229_block_5);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(4)] = null);

(cr41229_state[(5)] = null);

(cr41229_state[(1)] = cr41229_place_57);

return cr41229_state;
}
}catch (e42207){var cr41229_exception = e42207;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(2)] = null);

(cr41229_state[(4)] = null);

(cr41229_state[(5)] = null);

throw cr41229_exception;
}});
var cr41229_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_9(cr41229_state){
try{var cr41229_place_56 = (cr41229_state[(4)]);
(cr41229_state[(0)] = cr41229_block_11);

(cr41229_state[(4)] = null);

(cr41229_state[(3)] = cr41229_place_56);

return cr41229_state;
}catch (e42211){var cr41229_exception = e42211;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(4)] = null);

throw cr41229_exception;
}});
var cr41229_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_2(cr41229_state){
try{var cr41229_place_44 = missionary.core.unpark();
var cr41229_place_45 = cr41229_place_44;
var cr41229_place_46 = null;
var cr41229_place_47 = (cr41229_place_45 == cr41229_place_46);
var cr41229_place_48 = null;
if(cr41229_place_47){
(cr41229_state[(0)] = cr41229_block_10);

(cr41229_state[(3)] = cr41229_place_48);

return cr41229_state;
} else {
(cr41229_state[(0)] = cr41229_block_3);

(cr41229_state[(2)] = cr41229_place_44);

(cr41229_state[(3)] = cr41229_place_48);

return cr41229_state;
}
}catch (e42212){var cr41229_exception = e42212;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

throw cr41229_exception;
}});
var cr41229_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_14(cr41229_state){
try{var cr41229_place_114 = null;
(cr41229_state[(0)] = cr41229_block_15);

(cr41229_state[(1)] = cr41229_place_114);

return cr41229_state;
}catch (e42213){var cr41229_exception = e42213;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

throw cr41229_exception;
}});
var cr41229_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_10(cr41229_state){
try{var cr41229_place_84 = null;
(cr41229_state[(0)] = cr41229_block_11);

(cr41229_state[(3)] = cr41229_place_84);

return cr41229_state;
}catch (e42214){var cr41229_exception = e42214;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

throw cr41229_exception;
}});
var cr41229_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_8(cr41229_state){
try{var cr41229_place_0 = (cr41229_state[(1)]);
var cr41229_place_80 = console;
var cr41229_place_81 = "Failed to connect.";
var cr41229_place_82 = cr41229_place_80.log(cr41229_place_81);
var cr41229_place_83 = cr41229_place_0;
(cr41229_state[(0)] = cr41229_block_9);

(cr41229_state[(4)] = cr41229_place_83);

return cr41229_state;
}catch (e42215){var cr41229_exception = e42215;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(3)] = null);

(cr41229_state[(4)] = null);

throw cr41229_exception;
}});
var cr41229_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_0(cr41229_state){
try{var cr41229_place_0 = hyperfiddle.electric_client.retry_delays;
(cr41229_state[(0)] = cr41229_block_1);

(cr41229_state[(1)] = cr41229_place_0);

return cr41229_state;
}catch (e42216){var cr41229_exception = e42216;
(cr41229_state[(0)] = null);

throw cr41229_exception;
}});
var cr41229_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr41229_block_5(cr41229_state){
try{var cr41229_place_57 = (cr41229_state[(1)]);
var cr41229_place_49 = (cr41229_state[(2)]);
var cr41229_place_63 = cljs.core.ex_info;
var cr41229_place_64 = "Remote error - ";
var cr41229_place_65 = cr41229_place_57;
var cr41229_place_66 = " ";
var cr41229_place_67 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr41229_place_68 = cr41229_place_49;
var cr41229_place_69 = cr41229_place_67.cljs$core$IFn$_invoke$arity$1(cr41229_place_68);
var cr41229_place_70 = [cr41229_place_64,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr41229_place_65),cr41229_place_66,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr41229_place_69)].join('');
var cr41229_place_71 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr41229_place_72 = (function (){var G__42219 = cr41229_place_70;
var G__42220 = cr41229_place_71;
var fexpr__42218 = cr41229_place_63;
return (fexpr__42218.cljs$core$IFn$_invoke$arity$2 ? fexpr__42218.cljs$core$IFn$_invoke$arity$2(G__42219,G__42220) : fexpr__42218.call(null,G__42219,G__42220));
})();
var cr41229_place_73 = (function(){throw cr41229_place_72})();
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(2)] = null);

return null;
}catch (e42217){var cr41229_exception = e42217;
(cr41229_state[(0)] = null);

(cr41229_state[(1)] = null);

(cr41229_state[(2)] = null);

throw cr41229_exception;
}});
return cloroutine.impl.coroutine((function (){var G__42221 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__42221[(0)] = cr41229_block_0);

return G__42221;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
