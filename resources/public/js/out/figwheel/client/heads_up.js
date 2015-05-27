// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25703__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25703__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35293_35301 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35294_35302 = null;
var count__35295_35303 = (0);
var i__35296_35304 = (0);
while(true){
if((i__35296_35304 < count__35295_35303)){
var k_35305 = cljs.core._nth.call(null,chunk__35294_35302,i__35296_35304);
e.setAttribute(cljs.core.name.call(null,k_35305),cljs.core.get.call(null,attrs,k_35305));

var G__35306 = seq__35293_35301;
var G__35307 = chunk__35294_35302;
var G__35308 = count__35295_35303;
var G__35309 = (i__35296_35304 + (1));
seq__35293_35301 = G__35306;
chunk__35294_35302 = G__35307;
count__35295_35303 = G__35308;
i__35296_35304 = G__35309;
continue;
} else {
var temp__4423__auto___35310 = cljs.core.seq.call(null,seq__35293_35301);
if(temp__4423__auto___35310){
var seq__35293_35311__$1 = temp__4423__auto___35310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35293_35311__$1)){
var c__25448__auto___35312 = cljs.core.chunk_first.call(null,seq__35293_35311__$1);
var G__35313 = cljs.core.chunk_rest.call(null,seq__35293_35311__$1);
var G__35314 = c__25448__auto___35312;
var G__35315 = cljs.core.count.call(null,c__25448__auto___35312);
var G__35316 = (0);
seq__35293_35301 = G__35313;
chunk__35294_35302 = G__35314;
count__35295_35303 = G__35315;
i__35296_35304 = G__35316;
continue;
} else {
var k_35317 = cljs.core.first.call(null,seq__35293_35311__$1);
e.setAttribute(cljs.core.name.call(null,k_35317),cljs.core.get.call(null,attrs,k_35317));

var G__35318 = cljs.core.next.call(null,seq__35293_35311__$1);
var G__35319 = null;
var G__35320 = (0);
var G__35321 = (0);
seq__35293_35301 = G__35318;
chunk__35294_35302 = G__35319;
count__35295_35303 = G__35320;
i__35296_35304 = G__35321;
continue;
}
} else {
}
}
break;
}

var seq__35297_35322 = cljs.core.seq.call(null,children);
var chunk__35298_35323 = null;
var count__35299_35324 = (0);
var i__35300_35325 = (0);
while(true){
if((i__35300_35325 < count__35299_35324)){
var ch_35326 = cljs.core._nth.call(null,chunk__35298_35323,i__35300_35325);
e.appendChild(ch_35326);

var G__35327 = seq__35297_35322;
var G__35328 = chunk__35298_35323;
var G__35329 = count__35299_35324;
var G__35330 = (i__35300_35325 + (1));
seq__35297_35322 = G__35327;
chunk__35298_35323 = G__35328;
count__35299_35324 = G__35329;
i__35300_35325 = G__35330;
continue;
} else {
var temp__4423__auto___35331 = cljs.core.seq.call(null,seq__35297_35322);
if(temp__4423__auto___35331){
var seq__35297_35332__$1 = temp__4423__auto___35331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35297_35332__$1)){
var c__25448__auto___35333 = cljs.core.chunk_first.call(null,seq__35297_35332__$1);
var G__35334 = cljs.core.chunk_rest.call(null,seq__35297_35332__$1);
var G__35335 = c__25448__auto___35333;
var G__35336 = cljs.core.count.call(null,c__25448__auto___35333);
var G__35337 = (0);
seq__35297_35322 = G__35334;
chunk__35298_35323 = G__35335;
count__35299_35324 = G__35336;
i__35300_35325 = G__35337;
continue;
} else {
var ch_35338 = cljs.core.first.call(null,seq__35297_35332__$1);
e.appendChild(ch_35338);

var G__35339 = cljs.core.next.call(null,seq__35297_35332__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__35297_35322 = G__35339;
chunk__35298_35323 = G__35340;
count__35299_35324 = G__35341;
i__35300_35325 = G__35342;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35290){
var G__35291 = cljs.core.first.call(null,seq35290);
var seq35290__$1 = cljs.core.next.call(null,seq35290);
var G__35292 = cljs.core.first.call(null,seq35290__$1);
var seq35290__$2 = cljs.core.next.call(null,seq35290__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35291,G__35292,seq35290__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25562__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25558__auto__,prefer_table__25559__auto__,method_cache__25560__auto__,cached_hierarchy__25561__auto__,hierarchy__25562__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25558__auto__,prefer_table__25559__auto__,method_cache__25560__auto__,cached_hierarchy__25561__auto__,hierarchy__25562__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25562__auto__,method_table__25558__auto__,prefer_table__25559__auto__,method_cache__25560__auto__,cached_hierarchy__25561__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35343 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35343.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35343.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35343.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35343);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35344,st_map){
var map__35348 = p__35344;
var map__35348__$1 = ((cljs.core.seq_QMARK_.call(null,map__35348))?cljs.core.apply.call(null,cljs.core.hash_map,map__35348):map__35348);
var container_el = cljs.core.get.call(null,map__35348__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35348,map__35348__$1,container_el){
return (function (p__35349){
var vec__35350 = p__35349;
var k = cljs.core.nth.call(null,vec__35350,(0),null);
var v = cljs.core.nth.call(null,vec__35350,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35348,map__35348__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35351,dom_str){
var map__35353 = p__35351;
var map__35353__$1 = ((cljs.core.seq_QMARK_.call(null,map__35353))?cljs.core.apply.call(null,cljs.core.hash_map,map__35353):map__35353);
var c = map__35353__$1;
var content_area_el = cljs.core.get.call(null,map__35353__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35354){
var map__35356 = p__35354;
var map__35356__$1 = ((cljs.core.seq_QMARK_.call(null,map__35356))?cljs.core.apply.call(null,cljs.core.hash_map,map__35356):map__35356);
var content_area_el = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_35398){
var state_val_35399 = (state_35398[(1)]);
if((state_val_35399 === (1))){
var inst_35383 = (state_35398[(7)]);
var inst_35383__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35384 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35385 = ["10px","10px","100%","68px","1.0"];
var inst_35386 = cljs.core.PersistentHashMap.fromArrays(inst_35384,inst_35385);
var inst_35387 = cljs.core.merge.call(null,inst_35386,style);
var inst_35388 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35383__$1,inst_35387);
var inst_35389 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35383__$1,msg);
var inst_35390 = cljs.core.async.timeout.call(null,(300));
var state_35398__$1 = (function (){var statearr_35400 = state_35398;
(statearr_35400[(7)] = inst_35383__$1);

(statearr_35400[(8)] = inst_35389);

(statearr_35400[(9)] = inst_35388);

return statearr_35400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35398__$1,(2),inst_35390);
} else {
if((state_val_35399 === (2))){
var inst_35383 = (state_35398[(7)]);
var inst_35392 = (state_35398[(2)]);
var inst_35393 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35394 = ["auto"];
var inst_35395 = cljs.core.PersistentHashMap.fromArrays(inst_35393,inst_35394);
var inst_35396 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35383,inst_35395);
var state_35398__$1 = (function (){var statearr_35401 = state_35398;
(statearr_35401[(10)] = inst_35392);

return statearr_35401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35398__$1,inst_35396);
} else {
return null;
}
}
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____0 = (function (){
var statearr_35405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35405[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__);

(statearr_35405[(1)] = (1));

return statearr_35405;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____1 = (function (state_35398){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35406){if((e35406 instanceof Object)){
var ex__29918__auto__ = e35406;
var statearr_35407_35409 = state_35398;
(statearr_35407_35409[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35410 = state_35398;
state_35398 = G__35410;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__ = function(state_35398){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____1.call(this,state_35398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_35408 = f__29977__auto__.call(null);
(statearr_35408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_35408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__35412 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__35412,(0),null);
var ln = cljs.core.nth.call(null,vec__35412,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35415 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35415,(0),null);
var file_line = cljs.core.nth.call(null,vec__35415,(1),null);
var file_column = cljs.core.nth.call(null,vec__35415,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35415,file_name,file_line,file_column){
return (function (p1__35413_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35413_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35415,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24663__auto__ = file_line;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
var and__24651__auto__ = cause;
if(cljs.core.truth_(and__24651__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24651__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35417 = figwheel.client.heads_up.ensure_container.call(null);
var map__35417__$1 = ((cljs.core.seq_QMARK_.call(null,map__35417))?cljs.core.apply.call(null,cljs.core.hash_map,map__35417):map__35417);
var content_area_el = cljs.core.get.call(null,map__35417__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_35464){
var state_val_35465 = (state_35464[(1)]);
if((state_val_35465 === (1))){
var inst_35447 = (state_35464[(7)]);
var inst_35447__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35448 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35449 = ["0.0"];
var inst_35450 = cljs.core.PersistentHashMap.fromArrays(inst_35448,inst_35449);
var inst_35451 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35447__$1,inst_35450);
var inst_35452 = cljs.core.async.timeout.call(null,(300));
var state_35464__$1 = (function (){var statearr_35466 = state_35464;
(statearr_35466[(8)] = inst_35451);

(statearr_35466[(7)] = inst_35447__$1);

return statearr_35466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35464__$1,(2),inst_35452);
} else {
if((state_val_35465 === (2))){
var inst_35447 = (state_35464[(7)]);
var inst_35454 = (state_35464[(2)]);
var inst_35455 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35456 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35457 = cljs.core.PersistentHashMap.fromArrays(inst_35455,inst_35456);
var inst_35458 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35447,inst_35457);
var inst_35459 = cljs.core.async.timeout.call(null,(200));
var state_35464__$1 = (function (){var statearr_35467 = state_35464;
(statearr_35467[(9)] = inst_35458);

(statearr_35467[(10)] = inst_35454);

return statearr_35467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35464__$1,(3),inst_35459);
} else {
if((state_val_35465 === (3))){
var inst_35447 = (state_35464[(7)]);
var inst_35461 = (state_35464[(2)]);
var inst_35462 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35447,"");
var state_35464__$1 = (function (){var statearr_35468 = state_35464;
(statearr_35468[(11)] = inst_35461);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35464__$1,inst_35462);
} else {
return null;
}
}
}
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29915__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29915__auto____0 = (function (){
var statearr_35472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35472[(0)] = figwheel$client$heads_up$clear_$_state_machine__29915__auto__);

(statearr_35472[(1)] = (1));

return statearr_35472;
});
var figwheel$client$heads_up$clear_$_state_machine__29915__auto____1 = (function (state_35464){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35473){if((e35473 instanceof Object)){
var ex__29918__auto__ = e35473;
var statearr_35474_35476 = state_35464;
(statearr_35474_35476[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_35464;
state_35464 = G__35477;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29915__auto__ = function(state_35464){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29915__auto____1.call(this,state_35464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29915__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29915__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_35475 = f__29977__auto__.call(null);
(statearr_35475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_35475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_35509){
var state_val_35510 = (state_35509[(1)]);
if((state_val_35510 === (1))){
var inst_35499 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35509__$1 = state_35509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35509__$1,(2),inst_35499);
} else {
if((state_val_35510 === (2))){
var inst_35501 = (state_35509[(2)]);
var inst_35502 = cljs.core.async.timeout.call(null,(400));
var state_35509__$1 = (function (){var statearr_35511 = state_35509;
(statearr_35511[(7)] = inst_35501);

return statearr_35511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35509__$1,(3),inst_35502);
} else {
if((state_val_35510 === (3))){
var inst_35504 = (state_35509[(2)]);
var inst_35505 = figwheel.client.heads_up.clear.call(null);
var state_35509__$1 = (function (){var statearr_35512 = state_35509;
(statearr_35512[(8)] = inst_35504);

return statearr_35512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35509__$1,(4),inst_35505);
} else {
if((state_val_35510 === (4))){
var inst_35507 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35509__$1,inst_35507);
} else {
return null;
}
}
}
}
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____0 = (function (){
var statearr_35516 = [null,null,null,null,null,null,null,null,null];
(statearr_35516[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__);

(statearr_35516[(1)] = (1));

return statearr_35516;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____1 = (function (state_35509){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35517){if((e35517 instanceof Object)){
var ex__29918__auto__ = e35517;
var statearr_35518_35520 = state_35509;
(statearr_35518_35520[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_35509;
state_35509 = G__35521;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__ = function(state_35509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____1.call(this,state_35509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_35519 = f__29977__auto__.call(null);
(statearr_35519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_35519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map