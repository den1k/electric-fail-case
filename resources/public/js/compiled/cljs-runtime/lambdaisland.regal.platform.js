goog.provide('lambdaisland.regal.platform');
lambdaisland.regal.platform.hex__GT_int = (function lambdaisland$regal$platform$hex__GT_int(hex){
return parseInt(hex,(16));
});
lambdaisland.regal.platform.int__GT_hex = (function lambdaisland$regal$platform$int__GT_hex(i){
return clojure.string.upper_case(i.toString((16)));
});
lambdaisland.regal.platform.char__GT_long = (function lambdaisland$regal$platform$char__GT_long(ch){
return ch.charCodeAt();
});
lambdaisland.regal.platform.parse_int = (function lambdaisland$regal$platform$parse_int(i){
return parseInt(i,(10));
});

//# sourceMappingURL=lambdaisland.regal.platform.js.map
