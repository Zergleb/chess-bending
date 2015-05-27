// Compiled by ClojureScript 0.0-3297 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__34471){
var map__34477 = p__34471;
var map__34477__$1 = ((cljs.core.seq_QMARK_.call(null,map__34477))?cljs.core.apply.call(null,cljs.core.hash_map,map__34477):map__34477);
var replacement_transformers = cljs.core.get.call(null,map__34477__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__34477__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__34477,map__34477__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_34478 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__34479 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_34478,map__34477,map__34477__$1,replacement_transformers,custom_transformers){
return (function (p__34480,transformer){
var vec__34481 = p__34480;
var text = cljs.core.nth.call(null,vec__34481,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__34481,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_34478,map__34477,map__34477__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__24663__auto__ = replacement_transformers;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__34479,(0),null);
var new_state = cljs.core.nth.call(null,vec__34479,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_34478;
}});
;})(map__34477,map__34477__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__25703__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25703__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq34482){
var G__34483 = cljs.core.first.call(null,seq34482);
var seq34482__$1 = cljs.core.next.call(null,seq34482);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__34483,seq34482__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34488_34492 = cljs.core.seq.call(null,lines);
var chunk__34489_34493 = null;
var count__34490_34494 = (0);
var i__34491_34495 = (0);
while(true){
if((i__34491_34495 < count__34490_34494)){
var line_34496 = cljs.core._nth.call(null,chunk__34489_34493,i__34491_34495);
markdown.transformers.parse_reference_link.call(null,line_34496,references);

var G__34497 = seq__34488_34492;
var G__34498 = chunk__34489_34493;
var G__34499 = count__34490_34494;
var G__34500 = (i__34491_34495 + (1));
seq__34488_34492 = G__34497;
chunk__34489_34493 = G__34498;
count__34490_34494 = G__34499;
i__34491_34495 = G__34500;
continue;
} else {
var temp__4423__auto___34501 = cljs.core.seq.call(null,seq__34488_34492);
if(temp__4423__auto___34501){
var seq__34488_34502__$1 = temp__4423__auto___34501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34488_34502__$1)){
var c__25448__auto___34503 = cljs.core.chunk_first.call(null,seq__34488_34502__$1);
var G__34504 = cljs.core.chunk_rest.call(null,seq__34488_34502__$1);
var G__34505 = c__25448__auto___34503;
var G__34506 = cljs.core.count.call(null,c__25448__auto___34503);
var G__34507 = (0);
seq__34488_34492 = G__34504;
chunk__34489_34493 = G__34505;
count__34490_34494 = G__34506;
i__34491_34495 = G__34507;
continue;
} else {
var line_34508 = cljs.core.first.call(null,seq__34488_34502__$1);
markdown.transformers.parse_reference_link.call(null,line_34508,references);

var G__34509 = cljs.core.next.call(null,seq__34488_34502__$1);
var G__34510 = null;
var G__34511 = (0);
var G__34512 = (0);
seq__34488_34492 = G__34509;
chunk__34489_34493 = G__34510;
count__34490_34494 = G__34511;
i__34491_34495 = G__34512;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__25703__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25703__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_34515 = markdown.transformers._STAR_substring_STAR_;
var formatter34516 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_34515,formatter34516){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_34515,formatter34516))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__34518_34521 = lines;
var vec__34519_34522 = G__34518_34521;
var line_34523 = cljs.core.nth.call(null,vec__34519_34522,(0),null);
var more_34524 = cljs.core.nthnext.call(null,vec__34519_34522,(1));
var state_34525 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__34518_34526__$1 = G__34518_34521;
var state_34527__$1 = state_34525;
while(true){
var vec__34520_34528 = G__34518_34526__$1;
var line_34529__$1 = cljs.core.nth.call(null,vec__34520_34528,(0),null);
var more_34530__$1 = cljs.core.nthnext.call(null,vec__34520_34528,(1));
var state_34531__$2 = state_34527__$1;
var state_34532__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34531__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34531__$2),cljs.core.first.call(null,more_34530__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_34531__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_34531__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_34530__$1))){
var G__34533 = more_34530__$1;
var G__34534 = cljs.core.assoc.call(null,transformer.call(null,html,line_34529__$1,cljs.core.first.call(null,more_34530__$1),state_34532__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_34529__$1));
G__34518_34526__$1 = G__34533;
state_34527__$1 = G__34534;
continue;
} else {
transformer.call(null,html,line_34529__$1,"",cljs.core.assoc.call(null,state_34532__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter34516;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_34515;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq34513){
var G__34514 = cljs.core.first.call(null,seq34513);
var seq34513__$1 = cljs.core.next.call(null,seq34513);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__34514,seq34513__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__25703__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__25703__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq34535){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34535));
});

//# sourceMappingURL=core.js.map