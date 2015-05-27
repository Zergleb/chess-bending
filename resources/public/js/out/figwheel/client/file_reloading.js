// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35602_SHARP_,p2__35603_SHARP_){
var and__24651__auto__ = p1__35602_SHARP_;
if(cljs.core.truth_(and__24651__auto__)){
return p2__35603_SHARP_;
} else {
return and__24651__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24663__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24663__auto__){
return or__24663__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__24663__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24663__auto__){
return or__24663__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24663__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25562__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25562__auto__,method_table__25558__auto__,prefer_table__25559__auto__,method_cache__25560__auto__,cached_hierarchy__25561__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35604){
var map__35605 = p__35604;
var map__35605__$1 = ((cljs.core.seq_QMARK_.call(null,map__35605))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605):map__35605);
var file = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35606){
var map__35607 = p__35606;
var map__35607__$1 = ((cljs.core.seq_QMARK_.call(null,map__35607))?cljs.core.apply.call(null,cljs.core.hash_map,map__35607):map__35607);
var namespace = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25562__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25562__auto__,method_table__25558__auto__,prefer_table__25559__auto__,method_cache__25560__auto__,cached_hierarchy__25561__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35608){if((e35608 instanceof Error)){
var e = e35608;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35608;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__35610 = arguments.length;
switch (G__35610) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35612,callback){
var map__35614 = p__35612;
var map__35614__$1 = ((cljs.core.seq_QMARK_.call(null,map__35614))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var file_msg = map__35614__$1;
var request_url = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35614,map__35614__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35614,map__35614__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35615){
var map__35617 = p__35615;
var map__35617__$1 = ((cljs.core.seq_QMARK_.call(null,map__35617))?cljs.core.apply.call(null,cljs.core.hash_map,map__35617):map__35617);
var file_msg = map__35617__$1;
var namespace = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__24663__auto__ = meta_data;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24651__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24651__auto__){
var or__24663__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24663__auto____$1)){
return or__24663__auto____$1;
} else {
var and__24651__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24651__auto____$1){
var or__24663__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24663__auto____$2){
return or__24663__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24651__auto____$1;
}
}
}
} else {
return and__24651__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35618,callback){
var map__35620 = p__35618;
var map__35620__$1 = ((cljs.core.seq_QMARK_.call(null,map__35620))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var file_msg = map__35620__$1;
var request_url = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29976__auto___35707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___35707,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___35707,out){
return (function (state_35689){
var state_val_35690 = (state_35689[(1)]);
if((state_val_35690 === (1))){
var inst_35667 = cljs.core.nth.call(null,files,(0),null);
var inst_35668 = cljs.core.nthnext.call(null,files,(1));
var inst_35669 = files;
var state_35689__$1 = (function (){var statearr_35691 = state_35689;
(statearr_35691[(7)] = inst_35667);

(statearr_35691[(8)] = inst_35669);

(statearr_35691[(9)] = inst_35668);

return statearr_35691;
})();
var statearr_35692_35708 = state_35689__$1;
(statearr_35692_35708[(2)] = null);

(statearr_35692_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (2))){
var inst_35669 = (state_35689[(8)]);
var inst_35672 = (state_35689[(10)]);
var inst_35672__$1 = cljs.core.nth.call(null,inst_35669,(0),null);
var inst_35673 = cljs.core.nthnext.call(null,inst_35669,(1));
var inst_35674 = (inst_35672__$1 == null);
var inst_35675 = cljs.core.not.call(null,inst_35674);
var state_35689__$1 = (function (){var statearr_35693 = state_35689;
(statearr_35693[(11)] = inst_35673);

(statearr_35693[(10)] = inst_35672__$1);

return statearr_35693;
})();
if(inst_35675){
var statearr_35694_35709 = state_35689__$1;
(statearr_35694_35709[(1)] = (4));

} else {
var statearr_35695_35710 = state_35689__$1;
(statearr_35695_35710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (3))){
var inst_35687 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35689__$1,inst_35687);
} else {
if((state_val_35690 === (4))){
var inst_35672 = (state_35689[(10)]);
var inst_35677 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35672);
var state_35689__$1 = state_35689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35689__$1,(7),inst_35677);
} else {
if((state_val_35690 === (5))){
var inst_35683 = cljs.core.async.close_BANG_.call(null,out);
var state_35689__$1 = state_35689;
var statearr_35696_35711 = state_35689__$1;
(statearr_35696_35711[(2)] = inst_35683);

(statearr_35696_35711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (6))){
var inst_35685 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35697_35712 = state_35689__$1;
(statearr_35697_35712[(2)] = inst_35685);

(statearr_35697_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (7))){
var inst_35673 = (state_35689[(11)]);
var inst_35679 = (state_35689[(2)]);
var inst_35680 = cljs.core.async.put_BANG_.call(null,out,inst_35679);
var inst_35669 = inst_35673;
var state_35689__$1 = (function (){var statearr_35698 = state_35689;
(statearr_35698[(8)] = inst_35669);

(statearr_35698[(12)] = inst_35680);

return statearr_35698;
})();
var statearr_35699_35713 = state_35689__$1;
(statearr_35699_35713[(2)] = null);

(statearr_35699_35713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29976__auto___35707,out))
;
return ((function (switch__29914__auto__,c__29976__auto___35707,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____0 = (function (){
var statearr_35703 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35703[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__);

(statearr_35703[(1)] = (1));

return statearr_35703;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____1 = (function (state_35689){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35704){if((e35704 instanceof Object)){
var ex__29918__auto__ = e35704;
var statearr_35705_35714 = state_35689;
(statearr_35705_35714[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35715 = state_35689;
state_35689 = G__35715;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__ = function(state_35689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____1.call(this,state_35689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___35707,out))
})();
var state__29978__auto__ = (function (){var statearr_35706 = f__29977__auto__.call(null);
(statearr_35706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___35707);

return statearr_35706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___35707,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35716,p__35717){
var map__35720 = p__35716;
var map__35720__$1 = ((cljs.core.seq_QMARK_.call(null,map__35720))?cljs.core.apply.call(null,cljs.core.hash_map,map__35720):map__35720);
var opts = map__35720__$1;
var url_rewriter = cljs.core.get.call(null,map__35720__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35721 = p__35717;
var map__35721__$1 = ((cljs.core.seq_QMARK_.call(null,map__35721))?cljs.core.apply.call(null,cljs.core.hash_map,map__35721):map__35721);
var file_msg = map__35721__$1;
var file = cljs.core.get.call(null,map__35721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35722){
var map__35725 = p__35722;
var map__35725__$1 = ((cljs.core.seq_QMARK_.call(null,map__35725))?cljs.core.apply.call(null,cljs.core.hash_map,map__35725):map__35725);
var eval_body__$1 = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24651__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24651__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24651__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35726){var e = e35726;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35731,p__35732){
var map__35934 = p__35731;
var map__35934__$1 = ((cljs.core.seq_QMARK_.call(null,map__35934))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934):map__35934);
var opts = map__35934__$1;
var before_jsload = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35935 = p__35732;
var map__35935__$1 = ((cljs.core.seq_QMARK_.call(null,map__35935))?cljs.core.apply.call(null,cljs.core.hash_map,map__35935):map__35935);
var msg = map__35935__$1;
var files = cljs.core.get.call(null,map__35935__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (state_36060){
var state_val_36061 = (state_36060[(1)]);
if((state_val_36061 === (7))){
var inst_35948 = (state_36060[(7)]);
var inst_35947 = (state_36060[(8)]);
var inst_35949 = (state_36060[(9)]);
var inst_35950 = (state_36060[(10)]);
var inst_35955 = cljs.core._nth.call(null,inst_35948,inst_35950);
var inst_35956 = figwheel.client.file_reloading.eval_body.call(null,inst_35955);
var inst_35957 = (inst_35950 + (1));
var tmp36062 = inst_35948;
var tmp36063 = inst_35947;
var tmp36064 = inst_35949;
var inst_35947__$1 = tmp36063;
var inst_35948__$1 = tmp36062;
var inst_35949__$1 = tmp36064;
var inst_35950__$1 = inst_35957;
var state_36060__$1 = (function (){var statearr_36065 = state_36060;
(statearr_36065[(11)] = inst_35956);

(statearr_36065[(7)] = inst_35948__$1);

(statearr_36065[(8)] = inst_35947__$1);

(statearr_36065[(9)] = inst_35949__$1);

(statearr_36065[(10)] = inst_35950__$1);

return statearr_36065;
})();
var statearr_36066_36135 = state_36060__$1;
(statearr_36066_36135[(2)] = null);

(statearr_36066_36135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (20))){
var inst_35992 = (state_36060[(12)]);
var inst_35993 = (state_36060[(13)]);
var inst_35997 = (state_36060[(14)]);
var inst_35999 = (state_36060[(15)]);
var inst_35996 = (state_36060[(16)]);
var inst_36002 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36004 = (function (){var all_files = inst_35992;
var files_SINGLEQUOTE_ = inst_35993;
var res_SINGLEQUOTE_ = inst_35996;
var res = inst_35997;
var files_not_loaded = inst_35999;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_35997,inst_35999,inst_35996,inst_36002,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p__36003){
var map__36067 = p__36003;
var map__36067__$1 = ((cljs.core.seq_QMARK_.call(null,map__36067))?cljs.core.apply.call(null,cljs.core.hash_map,map__36067):map__36067);
var namespace = cljs.core.get.call(null,map__36067__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_35997,inst_35999,inst_35996,inst_36002,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_36005 = cljs.core.map.call(null,inst_36004,inst_35997);
var inst_36006 = cljs.core.pr_str.call(null,inst_36005);
var inst_36007 = figwheel.client.utils.log.call(null,inst_36006);
var inst_36008 = (function (){var all_files = inst_35992;
var files_SINGLEQUOTE_ = inst_35993;
var res_SINGLEQUOTE_ = inst_35996;
var res = inst_35997;
var files_not_loaded = inst_35999;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_35997,inst_35999,inst_35996,inst_36002,inst_36004,inst_36005,inst_36006,inst_36007,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_35997,inst_35999,inst_35996,inst_36002,inst_36004,inst_36005,inst_36006,inst_36007,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_36009 = setTimeout(inst_36008,(10));
var state_36060__$1 = (function (){var statearr_36068 = state_36060;
(statearr_36068[(17)] = inst_36007);

(statearr_36068[(18)] = inst_36002);

return statearr_36068;
})();
var statearr_36069_36136 = state_36060__$1;
(statearr_36069_36136[(2)] = inst_36009);

(statearr_36069_36136[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (27))){
var inst_36019 = (state_36060[(19)]);
var state_36060__$1 = state_36060;
var statearr_36070_36137 = state_36060__$1;
(statearr_36070_36137[(2)] = inst_36019);

(statearr_36070_36137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (1))){
var inst_35939 = (state_36060[(20)]);
var inst_35936 = before_jsload.call(null,files);
var inst_35937 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35938 = (function (){return ((function (inst_35939,inst_35936,inst_35937,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p1__35727_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35727_SHARP_);
});
;})(inst_35939,inst_35936,inst_35937,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_35939__$1 = cljs.core.filter.call(null,inst_35938,files);
var inst_35940 = cljs.core.not_empty.call(null,inst_35939__$1);
var state_36060__$1 = (function (){var statearr_36071 = state_36060;
(statearr_36071[(21)] = inst_35937);

(statearr_36071[(22)] = inst_35936);

(statearr_36071[(20)] = inst_35939__$1);

return statearr_36071;
})();
if(cljs.core.truth_(inst_35940)){
var statearr_36072_36138 = state_36060__$1;
(statearr_36072_36138[(1)] = (2));

} else {
var statearr_36073_36139 = state_36060__$1;
(statearr_36073_36139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (24))){
var state_36060__$1 = state_36060;
var statearr_36074_36140 = state_36060__$1;
(statearr_36074_36140[(2)] = null);

(statearr_36074_36140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (4))){
var inst_35984 = (state_36060[(2)]);
var inst_35985 = (function (){return ((function (inst_35984,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p1__35728_SHARP_){
var and__24651__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35728_SHARP_);
if(cljs.core.truth_(and__24651__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35728_SHARP_));
} else {
return and__24651__auto__;
}
});
;})(inst_35984,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_35986 = cljs.core.filter.call(null,inst_35985,files);
var state_36060__$1 = (function (){var statearr_36075 = state_36060;
(statearr_36075[(23)] = inst_35984);

(statearr_36075[(24)] = inst_35986);

return statearr_36075;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36076_36141 = state_36060__$1;
(statearr_36076_36141[(1)] = (16));

} else {
var statearr_36077_36142 = state_36060__$1;
(statearr_36077_36142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (15))){
var inst_35974 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36078_36143 = state_36060__$1;
(statearr_36078_36143[(2)] = inst_35974);

(statearr_36078_36143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (21))){
var state_36060__$1 = state_36060;
var statearr_36079_36144 = state_36060__$1;
(statearr_36079_36144[(2)] = null);

(statearr_36079_36144[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (31))){
var inst_36027 = (state_36060[(25)]);
var inst_36037 = (state_36060[(2)]);
var inst_36038 = cljs.core.not_empty.call(null,inst_36027);
var state_36060__$1 = (function (){var statearr_36080 = state_36060;
(statearr_36080[(26)] = inst_36037);

return statearr_36080;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36081_36145 = state_36060__$1;
(statearr_36081_36145[(1)] = (32));

} else {
var statearr_36082_36146 = state_36060__$1;
(statearr_36082_36146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (32))){
var inst_36027 = (state_36060[(25)]);
var inst_36040 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36027);
var inst_36041 = cljs.core.pr_str.call(null,inst_36040);
var inst_36042 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_36041)].join('');
var inst_36043 = figwheel.client.utils.log.call(null,inst_36042);
var state_36060__$1 = state_36060;
var statearr_36083_36147 = state_36060__$1;
(statearr_36083_36147[(2)] = inst_36043);

(statearr_36083_36147[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (33))){
var state_36060__$1 = state_36060;
var statearr_36084_36148 = state_36060__$1;
(statearr_36084_36148[(2)] = null);

(statearr_36084_36148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (13))){
var inst_35960 = (state_36060[(27)]);
var inst_35964 = cljs.core.chunk_first.call(null,inst_35960);
var inst_35965 = cljs.core.chunk_rest.call(null,inst_35960);
var inst_35966 = cljs.core.count.call(null,inst_35964);
var inst_35947 = inst_35965;
var inst_35948 = inst_35964;
var inst_35949 = inst_35966;
var inst_35950 = (0);
var state_36060__$1 = (function (){var statearr_36085 = state_36060;
(statearr_36085[(7)] = inst_35948);

(statearr_36085[(8)] = inst_35947);

(statearr_36085[(9)] = inst_35949);

(statearr_36085[(10)] = inst_35950);

return statearr_36085;
})();
var statearr_36086_36149 = state_36060__$1;
(statearr_36086_36149[(2)] = null);

(statearr_36086_36149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (22))){
var inst_35999 = (state_36060[(15)]);
var inst_36012 = (state_36060[(2)]);
var inst_36013 = cljs.core.not_empty.call(null,inst_35999);
var state_36060__$1 = (function (){var statearr_36087 = state_36060;
(statearr_36087[(28)] = inst_36012);

return statearr_36087;
})();
if(cljs.core.truth_(inst_36013)){
var statearr_36088_36150 = state_36060__$1;
(statearr_36088_36150[(1)] = (23));

} else {
var statearr_36089_36151 = state_36060__$1;
(statearr_36089_36151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (36))){
var state_36060__$1 = state_36060;
var statearr_36090_36152 = state_36060__$1;
(statearr_36090_36152[(2)] = null);

(statearr_36090_36152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (29))){
var inst_36026 = (state_36060[(29)]);
var inst_36031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36026);
var inst_36032 = cljs.core.pr_str.call(null,inst_36031);
var inst_36033 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36032)].join('');
var inst_36034 = figwheel.client.utils.log.call(null,inst_36033);
var state_36060__$1 = state_36060;
var statearr_36091_36153 = state_36060__$1;
(statearr_36091_36153[(2)] = inst_36034);

(statearr_36091_36153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (6))){
var inst_35981 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36092_36154 = state_36060__$1;
(statearr_36092_36154[(2)] = inst_35981);

(statearr_36092_36154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (28))){
var inst_36026 = (state_36060[(29)]);
var inst_36025 = (state_36060[(2)]);
var inst_36026__$1 = cljs.core.get.call(null,inst_36025,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36027 = cljs.core.get.call(null,inst_36025,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_36028 = cljs.core.get.call(null,inst_36025,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36029 = cljs.core.not_empty.call(null,inst_36026__$1);
var state_36060__$1 = (function (){var statearr_36093 = state_36060;
(statearr_36093[(30)] = inst_36028);

(statearr_36093[(25)] = inst_36027);

(statearr_36093[(29)] = inst_36026__$1);

return statearr_36093;
})();
if(cljs.core.truth_(inst_36029)){
var statearr_36094_36155 = state_36060__$1;
(statearr_36094_36155[(1)] = (29));

} else {
var statearr_36095_36156 = state_36060__$1;
(statearr_36095_36156[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (25))){
var inst_36058 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36060__$1,inst_36058);
} else {
if((state_val_36061 === (34))){
var inst_36028 = (state_36060[(30)]);
var inst_36046 = (state_36060[(2)]);
var inst_36047 = cljs.core.not_empty.call(null,inst_36028);
var state_36060__$1 = (function (){var statearr_36096 = state_36060;
(statearr_36096[(31)] = inst_36046);

return statearr_36096;
})();
if(cljs.core.truth_(inst_36047)){
var statearr_36097_36157 = state_36060__$1;
(statearr_36097_36157[(1)] = (35));

} else {
var statearr_36098_36158 = state_36060__$1;
(statearr_36098_36158[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (17))){
var inst_35986 = (state_36060[(24)]);
var state_36060__$1 = state_36060;
var statearr_36099_36159 = state_36060__$1;
(statearr_36099_36159[(2)] = inst_35986);

(statearr_36099_36159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (3))){
var state_36060__$1 = state_36060;
var statearr_36100_36160 = state_36060__$1;
(statearr_36100_36160[(2)] = null);

(statearr_36100_36160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (12))){
var inst_35977 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36101_36161 = state_36060__$1;
(statearr_36101_36161[(2)] = inst_35977);

(statearr_36101_36161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (2))){
var inst_35939 = (state_36060[(20)]);
var inst_35946 = cljs.core.seq.call(null,inst_35939);
var inst_35947 = inst_35946;
var inst_35948 = null;
var inst_35949 = (0);
var inst_35950 = (0);
var state_36060__$1 = (function (){var statearr_36102 = state_36060;
(statearr_36102[(7)] = inst_35948);

(statearr_36102[(8)] = inst_35947);

(statearr_36102[(9)] = inst_35949);

(statearr_36102[(10)] = inst_35950);

return statearr_36102;
})();
var statearr_36103_36162 = state_36060__$1;
(statearr_36103_36162[(2)] = null);

(statearr_36103_36162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (23))){
var inst_35992 = (state_36060[(12)]);
var inst_35993 = (state_36060[(13)]);
var inst_36019 = (state_36060[(19)]);
var inst_35997 = (state_36060[(14)]);
var inst_35999 = (state_36060[(15)]);
var inst_35996 = (state_36060[(16)]);
var inst_36015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36018 = (function (){var all_files = inst_35992;
var files_SINGLEQUOTE_ = inst_35993;
var res_SINGLEQUOTE_ = inst_35996;
var res = inst_35997;
var files_not_loaded = inst_35999;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_36019,inst_35997,inst_35999,inst_35996,inst_36015,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p__36017){
var map__36104 = p__36017;
var map__36104__$1 = ((cljs.core.seq_QMARK_.call(null,map__36104))?cljs.core.apply.call(null,cljs.core.hash_map,map__36104):map__36104);
var meta_data = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35992,inst_35993,inst_36019,inst_35997,inst_35999,inst_35996,inst_36015,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_36019__$1 = cljs.core.group_by.call(null,inst_36018,inst_35999);
var inst_36020 = cljs.core.seq_QMARK_.call(null,inst_36019__$1);
var state_36060__$1 = (function (){var statearr_36105 = state_36060;
(statearr_36105[(19)] = inst_36019__$1);

(statearr_36105[(32)] = inst_36015);

return statearr_36105;
})();
if(inst_36020){
var statearr_36106_36163 = state_36060__$1;
(statearr_36106_36163[(1)] = (26));

} else {
var statearr_36107_36164 = state_36060__$1;
(statearr_36107_36164[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (35))){
var inst_36028 = (state_36060[(30)]);
var inst_36049 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36028);
var inst_36050 = cljs.core.pr_str.call(null,inst_36049);
var inst_36051 = [cljs.core.str("not required: "),cljs.core.str(inst_36050)].join('');
var inst_36052 = figwheel.client.utils.log.call(null,inst_36051);
var state_36060__$1 = state_36060;
var statearr_36108_36165 = state_36060__$1;
(statearr_36108_36165[(2)] = inst_36052);

(statearr_36108_36165[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (19))){
var inst_35992 = (state_36060[(12)]);
var inst_35993 = (state_36060[(13)]);
var inst_35997 = (state_36060[(14)]);
var inst_35996 = (state_36060[(16)]);
var inst_35996__$1 = (state_36060[(2)]);
var inst_35997__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35996__$1);
var inst_35998 = (function (){var all_files = inst_35992;
var files_SINGLEQUOTE_ = inst_35993;
var res_SINGLEQUOTE_ = inst_35996__$1;
var res = inst_35997__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35992,inst_35993,inst_35997,inst_35996,inst_35996__$1,inst_35997__$1,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p1__35730_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35730_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35992,inst_35993,inst_35997,inst_35996,inst_35996__$1,inst_35997__$1,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_35999 = cljs.core.filter.call(null,inst_35998,inst_35996__$1);
var inst_36000 = cljs.core.not_empty.call(null,inst_35997__$1);
var state_36060__$1 = (function (){var statearr_36109 = state_36060;
(statearr_36109[(14)] = inst_35997__$1);

(statearr_36109[(15)] = inst_35999);

(statearr_36109[(16)] = inst_35996__$1);

return statearr_36109;
})();
if(cljs.core.truth_(inst_36000)){
var statearr_36110_36166 = state_36060__$1;
(statearr_36110_36166[(1)] = (20));

} else {
var statearr_36111_36167 = state_36060__$1;
(statearr_36111_36167[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (11))){
var state_36060__$1 = state_36060;
var statearr_36112_36168 = state_36060__$1;
(statearr_36112_36168[(2)] = null);

(statearr_36112_36168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (9))){
var inst_35979 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36113_36169 = state_36060__$1;
(statearr_36113_36169[(2)] = inst_35979);

(statearr_36113_36169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (5))){
var inst_35949 = (state_36060[(9)]);
var inst_35950 = (state_36060[(10)]);
var inst_35952 = (inst_35950 < inst_35949);
var inst_35953 = inst_35952;
var state_36060__$1 = state_36060;
if(cljs.core.truth_(inst_35953)){
var statearr_36114_36170 = state_36060__$1;
(statearr_36114_36170[(1)] = (7));

} else {
var statearr_36115_36171 = state_36060__$1;
(statearr_36115_36171[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (14))){
var inst_35960 = (state_36060[(27)]);
var inst_35969 = cljs.core.first.call(null,inst_35960);
var inst_35970 = figwheel.client.file_reloading.eval_body.call(null,inst_35969);
var inst_35971 = cljs.core.next.call(null,inst_35960);
var inst_35947 = inst_35971;
var inst_35948 = null;
var inst_35949 = (0);
var inst_35950 = (0);
var state_36060__$1 = (function (){var statearr_36116 = state_36060;
(statearr_36116[(7)] = inst_35948);

(statearr_36116[(8)] = inst_35947);

(statearr_36116[(9)] = inst_35949);

(statearr_36116[(33)] = inst_35970);

(statearr_36116[(10)] = inst_35950);

return statearr_36116;
})();
var statearr_36117_36172 = state_36060__$1;
(statearr_36117_36172[(2)] = null);

(statearr_36117_36172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (26))){
var inst_36019 = (state_36060[(19)]);
var inst_36022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36019);
var state_36060__$1 = state_36060;
var statearr_36118_36173 = state_36060__$1;
(statearr_36118_36173[(2)] = inst_36022);

(statearr_36118_36173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (16))){
var inst_35986 = (state_36060[(24)]);
var inst_35988 = (function (){var all_files = inst_35986;
return ((function (all_files,inst_35986,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function (p1__35729_SHARP_){
return cljs.core.update_in.call(null,p1__35729_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35986,state_val_36061,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var inst_35989 = cljs.core.map.call(null,inst_35988,inst_35986);
var state_36060__$1 = state_36060;
var statearr_36119_36174 = state_36060__$1;
(statearr_36119_36174[(2)] = inst_35989);

(statearr_36119_36174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (30))){
var state_36060__$1 = state_36060;
var statearr_36120_36175 = state_36060__$1;
(statearr_36120_36175[(2)] = null);

(statearr_36120_36175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (10))){
var inst_35960 = (state_36060[(27)]);
var inst_35962 = cljs.core.chunked_seq_QMARK_.call(null,inst_35960);
var state_36060__$1 = state_36060;
if(inst_35962){
var statearr_36121_36176 = state_36060__$1;
(statearr_36121_36176[(1)] = (13));

} else {
var statearr_36122_36177 = state_36060__$1;
(statearr_36122_36177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (18))){
var inst_35992 = (state_36060[(12)]);
var inst_35993 = (state_36060[(13)]);
var inst_35992__$1 = (state_36060[(2)]);
var inst_35993__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35992__$1);
var inst_35994 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35993__$1);
var state_36060__$1 = (function (){var statearr_36123 = state_36060;
(statearr_36123[(12)] = inst_35992__$1);

(statearr_36123[(13)] = inst_35993__$1);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36060__$1,(19),inst_35994);
} else {
if((state_val_36061 === (37))){
var inst_36055 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36124_36178 = state_36060__$1;
(statearr_36124_36178[(2)] = inst_36055);

(statearr_36124_36178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (8))){
var inst_35947 = (state_36060[(8)]);
var inst_35960 = (state_36060[(27)]);
var inst_35960__$1 = cljs.core.seq.call(null,inst_35947);
var state_36060__$1 = (function (){var statearr_36125 = state_36060;
(statearr_36125[(27)] = inst_35960__$1);

return statearr_36125;
})();
if(inst_35960__$1){
var statearr_36126_36179 = state_36060__$1;
(statearr_36126_36179[(1)] = (10));

} else {
var statearr_36127_36180 = state_36060__$1;
(statearr_36127_36180[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
;
return ((function (switch__29914__auto__,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____0 = (function (){
var statearr_36131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36131[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__);

(statearr_36131[(1)] = (1));

return statearr_36131;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____1 = (function (state_36060){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36132){if((e36132 instanceof Object)){
var ex__29918__auto__ = e36132;
var statearr_36133_36181 = state_36060;
(statearr_36133_36181[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36182 = state_36060;
state_36060 = G__36182;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__ = function(state_36060){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____1.call(this,state_36060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
})();
var state__29978__auto__ = (function (){var statearr_36134 = f__29977__auto__.call(null);
(statearr_36134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__,map__35934,map__35934__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35935,map__35935__$1,msg,files))
);

return c__29976__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36185,link){
var map__36187 = p__36185;
var map__36187__$1 = ((cljs.core.seq_QMARK_.call(null,map__36187))?cljs.core.apply.call(null,cljs.core.hash_map,map__36187):map__36187);
var file = cljs.core.get.call(null,map__36187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__36187,map__36187__$1,file){
return (function (p1__36183_SHARP_,p2__36184_SHARP_){
if(cljs.core._EQ_.call(null,p1__36183_SHARP_,p2__36184_SHARP_)){
return p1__36183_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__36187,map__36187__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36191){
var map__36192 = p__36191;
var map__36192__$1 = ((cljs.core.seq_QMARK_.call(null,map__36192))?cljs.core.apply.call(null,cljs.core.hash_map,map__36192):map__36192);
var match_length = cljs.core.get.call(null,map__36192__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36192__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36188_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36188_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__36194 = arguments.length;
switch (G__36194) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36196){
var map__36198 = p__36196;
var map__36198__$1 = ((cljs.core.seq_QMARK_.call(null,map__36198))?cljs.core.apply.call(null,cljs.core.hash_map,map__36198):map__36198);
var f_data = map__36198__$1;
var file = cljs.core.get.call(null,map__36198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__36198__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24663__auto__ = request_url;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36199,files_msg){
var map__36221 = p__36199;
var map__36221__$1 = ((cljs.core.seq_QMARK_.call(null,map__36221))?cljs.core.apply.call(null,cljs.core.hash_map,map__36221):map__36221);
var opts = map__36221__$1;
var on_cssload = cljs.core.get.call(null,map__36221__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36222_36242 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36223_36243 = null;
var count__36224_36244 = (0);
var i__36225_36245 = (0);
while(true){
if((i__36225_36245 < count__36224_36244)){
var f_36246 = cljs.core._nth.call(null,chunk__36223_36243,i__36225_36245);
figwheel.client.file_reloading.reload_css_file.call(null,f_36246);

var G__36247 = seq__36222_36242;
var G__36248 = chunk__36223_36243;
var G__36249 = count__36224_36244;
var G__36250 = (i__36225_36245 + (1));
seq__36222_36242 = G__36247;
chunk__36223_36243 = G__36248;
count__36224_36244 = G__36249;
i__36225_36245 = G__36250;
continue;
} else {
var temp__4423__auto___36251 = cljs.core.seq.call(null,seq__36222_36242);
if(temp__4423__auto___36251){
var seq__36222_36252__$1 = temp__4423__auto___36251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36222_36252__$1)){
var c__25448__auto___36253 = cljs.core.chunk_first.call(null,seq__36222_36252__$1);
var G__36254 = cljs.core.chunk_rest.call(null,seq__36222_36252__$1);
var G__36255 = c__25448__auto___36253;
var G__36256 = cljs.core.count.call(null,c__25448__auto___36253);
var G__36257 = (0);
seq__36222_36242 = G__36254;
chunk__36223_36243 = G__36255;
count__36224_36244 = G__36256;
i__36225_36245 = G__36257;
continue;
} else {
var f_36258 = cljs.core.first.call(null,seq__36222_36252__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36258);

var G__36259 = cljs.core.next.call(null,seq__36222_36252__$1);
var G__36260 = null;
var G__36261 = (0);
var G__36262 = (0);
seq__36222_36242 = G__36259;
chunk__36223_36243 = G__36260;
count__36224_36244 = G__36261;
i__36225_36245 = G__36262;
continue;
}
} else {
}
}
break;
}

var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload){
return (function (state_36232){
var state_val_36233 = (state_36232[(1)]);
if((state_val_36233 === (1))){
var inst_36226 = cljs.core.async.timeout.call(null,(100));
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36232__$1,(2),inst_36226);
} else {
if((state_val_36233 === (2))){
var inst_36228 = (state_36232[(2)]);
var inst_36229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36230 = on_cssload.call(null,inst_36229);
var state_36232__$1 = (function (){var statearr_36234 = state_36232;
(statearr_36234[(7)] = inst_36228);

return statearr_36234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36232__$1,inst_36230);
} else {
return null;
}
}
});})(c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload))
;
return ((function (switch__29914__auto__,c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____0 = (function (){
var statearr_36238 = [null,null,null,null,null,null,null,null];
(statearr_36238[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__);

(statearr_36238[(1)] = (1));

return statearr_36238;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____1 = (function (state_36232){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36239){if((e36239 instanceof Object)){
var ex__29918__auto__ = e36239;
var statearr_36240_36263 = state_36232;
(statearr_36240_36263[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36264 = state_36232;
state_36232 = G__36264;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__ = function(state_36232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____1.call(this,state_36232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload))
})();
var state__29978__auto__ = (function (){var statearr_36241 = f__29977__auto__.call(null);
(statearr_36241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_36241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__,map__36221,map__36221__$1,opts,on_cssload))
);

return c__29976__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map