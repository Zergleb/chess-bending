// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35536_35548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35537_35549 = null;
var count__35538_35550 = (0);
var i__35539_35551 = (0);
while(true){
if((i__35539_35551 < count__35538_35550)){
var f_35552 = cljs.core._nth.call(null,chunk__35537_35549,i__35539_35551);
cljs.core.println.call(null,"  ",f_35552);

var G__35553 = seq__35536_35548;
var G__35554 = chunk__35537_35549;
var G__35555 = count__35538_35550;
var G__35556 = (i__35539_35551 + (1));
seq__35536_35548 = G__35553;
chunk__35537_35549 = G__35554;
count__35538_35550 = G__35555;
i__35539_35551 = G__35556;
continue;
} else {
var temp__4423__auto___35557 = cljs.core.seq.call(null,seq__35536_35548);
if(temp__4423__auto___35557){
var seq__35536_35558__$1 = temp__4423__auto___35557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35536_35558__$1)){
var c__25448__auto___35559 = cljs.core.chunk_first.call(null,seq__35536_35558__$1);
var G__35560 = cljs.core.chunk_rest.call(null,seq__35536_35558__$1);
var G__35561 = c__25448__auto___35559;
var G__35562 = cljs.core.count.call(null,c__25448__auto___35559);
var G__35563 = (0);
seq__35536_35548 = G__35560;
chunk__35537_35549 = G__35561;
count__35538_35550 = G__35562;
i__35539_35551 = G__35563;
continue;
} else {
var f_35564 = cljs.core.first.call(null,seq__35536_35558__$1);
cljs.core.println.call(null,"  ",f_35564);

var G__35565 = cljs.core.next.call(null,seq__35536_35558__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35536_35548 = G__35565;
chunk__35537_35549 = G__35566;
count__35538_35550 = G__35567;
i__35539_35551 = G__35568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24663__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35569);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35569)))?cljs.core.second.call(null,arglists_35569):arglists_35569));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35540 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35541 = null;
var count__35542 = (0);
var i__35543 = (0);
while(true){
if((i__35543 < count__35542)){
var vec__35544 = cljs.core._nth.call(null,chunk__35541,i__35543);
var name = cljs.core.nth.call(null,vec__35544,(0),null);
var map__35545 = cljs.core.nth.call(null,vec__35544,(1),null);
var map__35545__$1 = ((cljs.core.seq_QMARK_.call(null,map__35545))?cljs.core.apply.call(null,cljs.core.hash_map,map__35545):map__35545);
var doc = cljs.core.get.call(null,map__35545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35570 = seq__35540;
var G__35571 = chunk__35541;
var G__35572 = count__35542;
var G__35573 = (i__35543 + (1));
seq__35540 = G__35570;
chunk__35541 = G__35571;
count__35542 = G__35572;
i__35543 = G__35573;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__35540);
if(temp__4423__auto__){
var seq__35540__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35540__$1)){
var c__25448__auto__ = cljs.core.chunk_first.call(null,seq__35540__$1);
var G__35574 = cljs.core.chunk_rest.call(null,seq__35540__$1);
var G__35575 = c__25448__auto__;
var G__35576 = cljs.core.count.call(null,c__25448__auto__);
var G__35577 = (0);
seq__35540 = G__35574;
chunk__35541 = G__35575;
count__35542 = G__35576;
i__35543 = G__35577;
continue;
} else {
var vec__35546 = cljs.core.first.call(null,seq__35540__$1);
var name = cljs.core.nth.call(null,vec__35546,(0),null);
var map__35547 = cljs.core.nth.call(null,vec__35546,(1),null);
var map__35547__$1 = ((cljs.core.seq_QMARK_.call(null,map__35547))?cljs.core.apply.call(null,cljs.core.hash_map,map__35547):map__35547);
var doc = cljs.core.get.call(null,map__35547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35578 = cljs.core.next.call(null,seq__35540__$1);
var G__35579 = null;
var G__35580 = (0);
var G__35581 = (0);
seq__35540 = G__35578;
chunk__35541 = G__35579;
count__35542 = G__35580;
i__35543 = G__35581;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map