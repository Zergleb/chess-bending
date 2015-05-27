// Compiled by ClojureScript 0.0-3297 {}
goog.provide('elemental_chess.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.core.match');
elemental_chess.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gameboard","gameboard",-861792586),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wr","wk","wb","wq","wK","wbe","wkf","wrw"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wp","wp","wp","wp","wp","wp","wp","wp"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","0","0"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","0","0"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","0","0"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","0","0"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bp","bp","bp","bp","bp","bp","bp","bp"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["brf","bke","bbw","bq","bK","bb","bk","br"], null)], null)], null));
elemental_chess.core.game_consts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentArrayMap(null, 6, ["p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pawn"], null),"k",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"knight"], null),"b",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bishop"], null),"q",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"queen"], null),"r",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rook"], null),"K",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"king"], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["w",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"white"], null),"b",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentArrayMap(null, 4, ["f",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fire"], null),"w",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"water"], null),"e",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"earth"], null),"n",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"normal"], null)], null)], null);
elemental_chess.core.navbar = (function elemental_chess$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Elemental Chess"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"home","home",-74557309),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"about","about",1423892543),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"About"], null)], null)], null)], null)], null)], null);
});
elemental_chess.core.about_page = (function elemental_chess$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of elemental-chess... work in progress"], null);
});
elemental_chess.core.game_cell = (function elemental_chess$core$game_cell(cell,row,column){
elemental_chess.core.cell_color = ((cljs.core.even_QMARK_.call(null,(row + column)))?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP4/x8AAwAB/2+Bq7YAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMwTHD6DwADbAHTRVnX2wAAAABJRU5ErkJggg==");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell","span.cell",-564624425),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.cellimage","img.cellimage",-1481192704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),elemental_chess.core.cell_color], null)], null),(((cljs.core.count.call(null,cell) > (1)))?(function (){
elemental_chess.core.cellArray = cell.split("");

elemental_chess.core.playerClass = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(elemental_chess.core.game_consts),cljs.core.first.call(null,elemental_chess.core.cellArray)));

elemental_chess.core.pieceClass = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"pieces","pieces",-1436634023).cljs$core$IFn$_invoke$arity$1(elemental_chess.core.game_consts),cljs.core.nth.call(null,cell,(1))));

elemental_chess.core.elementClass = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(elemental_chess.core.game_consts),cljs.core.nth.call(null,cell,(2),"n")));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(elemental_chess.core.playerClass),cljs.core.str(" "),cljs.core.str(elemental_chess.core.pieceClass),cljs.core.str(" "),cljs.core.str(elemental_chess.core.elementClass),cljs.core.str(" chesspiece")].join('')], null)], null);
})()
:null
)], null);
});
elemental_chess.core.game_row = (function elemental_chess$core$game_row(rowindex,row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.map_indexed.call(null,(function (columnindex,cellValue){
return elemental_chess.core.game_cell.call(null,cellValue,rowindex,columnindex);
}),row)], null)], null);
});
elemental_chess.core.game_board = (function elemental_chess$core$game_board(gameboard){
return cljs.core.map_indexed.call(null,elemental_chess.core.game_row,gameboard);
});
elemental_chess.core.home_page = (function elemental_chess$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Elemental Chess"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to your doom!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),elemental_chess.core.game_board.call(null,new cljs.core.Keyword(null,"gameboard","gameboard",-861792586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,elemental_chess.core.app_state)))], null)], null);
});
elemental_chess.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return elemental_chess.core.home_page;},new cljs.core.Symbol("elemental-chess.core","home-page","elemental-chess.core/home-page",813178908,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elemental-chess.core","elemental-chess.core",-2047306176,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src-cljs\\elemental_chess\\core.cljs",16,1,97,97,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elemental_chess.core.home_page)?elemental_chess.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return elemental_chess.core.about_page;},new cljs.core.Symbol("elemental-chess.core","about-page","elemental-chess.core/about-page",1707998236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elemental-chess.core","elemental-chess.core",-2047306176,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src-cljs\\elemental_chess\\core.cljs",17,1,64,64,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elemental_chess.core.about_page)?elemental_chess.core.about_page.cljs$lang$test:null)]))], null);
elemental_chess.core.page = (function elemental_chess$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elemental_chess.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__27445__auto___41168 = (function (params__27446__auto__){
if(cljs.core.map_QMARK_.call(null,params__27446__auto__)){
var map__41166 = params__27446__auto__;
var map__41166__$1 = ((cljs.core.seq_QMARK_.call(null,map__41166))?cljs.core.apply.call(null,cljs.core.hash_map,map__41166):map__41166);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27446__auto__)){
var vec__41167 = params__27446__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27445__auto___41168);

var action__27445__auto___41171 = (function (params__27446__auto__){
if(cljs.core.map_QMARK_.call(null,params__27446__auto__)){
var map__41169 = params__27446__auto__;
var map__41169__$1 = ((cljs.core.seq_QMARK_.call(null,map__41169))?cljs.core.apply.call(null,cljs.core.hash_map,map__41169):map__41169);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27446__auto__)){
var vec__41170 = params__27446__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27445__auto___41171);

elemental_chess.core.hook_browser_navigation_BANG_ = (function elemental_chess$core$hook_browser_navigation_BANG_(){
var G__41173 = (new goog.History());
goog.events.listen(G__41173,goog.history.EventType.NAVIGATE,((function (G__41173){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__41173))
);

G__41173.setEnabled(true);

return G__41173;
});
elemental_chess.core.fetch_docs_BANG_ = (function elemental_chess$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__41174_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__41174_SHARP_);
})], null));
});
elemental_chess.core.mount_components = (function elemental_chess$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return elemental_chess.core.navbar;},new cljs.core.Symbol("elemental-chess.core","navbar","elemental-chess.core/navbar",-883009149,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elemental-chess.core","elemental-chess.core",-2047306176,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src-cljs\\elemental_chess\\core.cljs",13,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elemental_chess.core.navbar)?elemental_chess.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return elemental_chess.core.page;},new cljs.core.Symbol("elemental-chess.core","page","elemental-chess.core/page",-1857918039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elemental-chess.core","elemental-chess.core",-2047306176,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src-cljs\\elemental_chess\\core.cljs",11,1,113,113,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elemental_chess.core.page)?elemental_chess.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
elemental_chess.core.init_BANG_ = (function elemental_chess$core$init_BANG_(){
elemental_chess.core.fetch_docs_BANG_.call(null);

elemental_chess.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return elemental_chess.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map