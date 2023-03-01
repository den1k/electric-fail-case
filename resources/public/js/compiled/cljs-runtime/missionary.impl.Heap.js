goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__38612 = (new Array((cap + (1))));
(G__38612[(0)] = (0));

return G__38612;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__38629 = p;
j__$1 = G__38629;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_38630 = (1);
while(true){
var l_38631 = (j_38630 << (1));
if((l_38631 < s)){
var x_38632 = (heap[j_38630]);
var y_38633 = (heap[l_38631]);
var r_38634 = (l_38631 + (1));
if((r_38634 < s)){
var z_38635 = (heap[r_38634]);
if((y_38633 < z_38635)){
if((z_38635 < x_38632)){
(heap[r_38634] = x_38632);

(heap[j_38630] = z_38635);

var G__38638 = r_38634;
j_38630 = G__38638;
continue;
} else {
}
} else {
if((y_38633 < x_38632)){
(heap[l_38631] = x_38632);

(heap[j_38630] = y_38633);

var G__38639 = l_38631;
j_38630 = G__38639;
continue;
} else {
}
}
} else {
if((y_38633 < x_38632)){
(heap[l_38631] = x_38632);

(heap[j_38630] = y_38633);

var G__38640 = l_38631;
j_38630 = G__38640;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
