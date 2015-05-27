// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34643__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34644__i = 0, G__34644__a = new Array(arguments.length -  0);
while (G__34644__i < G__34644__a.length) {G__34644__a[G__34644__i] = arguments[G__34644__i + 0]; ++G__34644__i;}
  args = new cljs.core.IndexedSeq(G__34644__a,0);
} 
return G__34643__delegate.call(this,args);};
G__34643.cljs$lang$maxFixedArity = 0;
G__34643.cljs$lang$applyTo = (function (arglist__34645){
var args = cljs.core.seq(arglist__34645);
return G__34643__delegate(args);
});
G__34643.cljs$core$IFn$_invoke$arity$variadic = G__34643__delegate;
return G__34643;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34646){
var map__34648 = p__34646;
var map__34648__$1 = ((cljs.core.seq_QMARK_.call(null,map__34648))?cljs.core.apply.call(null,cljs.core.hash_map,map__34648):map__34648);
var message = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24663__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24651__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24651__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24651__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29976__auto___34777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___34777,ch){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___34777,ch){
return (function (state_34751){
var state_val_34752 = (state_34751[(1)]);
if((state_val_34752 === (7))){
var inst_34747 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34753_34778 = state_34751__$1;
(statearr_34753_34778[(2)] = inst_34747);

(statearr_34753_34778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (1))){
var state_34751__$1 = state_34751;
var statearr_34754_34779 = state_34751__$1;
(statearr_34754_34779[(2)] = null);

(statearr_34754_34779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (4))){
var inst_34715 = (state_34751[(7)]);
var inst_34715__$1 = (state_34751[(2)]);
var state_34751__$1 = (function (){var statearr_34755 = state_34751;
(statearr_34755[(7)] = inst_34715__$1);

return statearr_34755;
})();
if(cljs.core.truth_(inst_34715__$1)){
var statearr_34756_34780 = state_34751__$1;
(statearr_34756_34780[(1)] = (5));

} else {
var statearr_34757_34781 = state_34751__$1;
(statearr_34757_34781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (13))){
var state_34751__$1 = state_34751;
var statearr_34758_34782 = state_34751__$1;
(statearr_34758_34782[(2)] = null);

(statearr_34758_34782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (6))){
var state_34751__$1 = state_34751;
var statearr_34759_34783 = state_34751__$1;
(statearr_34759_34783[(2)] = null);

(statearr_34759_34783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (3))){
var inst_34749 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34751__$1,inst_34749);
} else {
if((state_val_34752 === (12))){
var inst_34722 = (state_34751[(8)]);
var inst_34735 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34722);
var inst_34736 = cljs.core.first.call(null,inst_34735);
var inst_34737 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34736);
var inst_34738 = console.warn("Figwheel: Not loading code with warnings - ",inst_34737);
var state_34751__$1 = state_34751;
var statearr_34760_34784 = state_34751__$1;
(statearr_34760_34784[(2)] = inst_34738);

(statearr_34760_34784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (2))){
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34751__$1,(4),ch);
} else {
if((state_val_34752 === (11))){
var inst_34731 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34761_34785 = state_34751__$1;
(statearr_34761_34785[(2)] = inst_34731);

(statearr_34761_34785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (9))){
var inst_34721 = (state_34751[(9)]);
var inst_34733 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34721,opts);
var state_34751__$1 = state_34751;
if(cljs.core.truth_(inst_34733)){
var statearr_34762_34786 = state_34751__$1;
(statearr_34762_34786[(1)] = (12));

} else {
var statearr_34763_34787 = state_34751__$1;
(statearr_34763_34787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (5))){
var inst_34721 = (state_34751[(9)]);
var inst_34715 = (state_34751[(7)]);
var inst_34717 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34718 = (new cljs.core.PersistentArrayMap(null,2,inst_34717,null));
var inst_34719 = (new cljs.core.PersistentHashSet(null,inst_34718,null));
var inst_34720 = figwheel.client.focus_msgs.call(null,inst_34719,inst_34715);
var inst_34721__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34720);
var inst_34722 = cljs.core.first.call(null,inst_34720);
var inst_34723 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34721__$1,opts);
var state_34751__$1 = (function (){var statearr_34764 = state_34751;
(statearr_34764[(9)] = inst_34721__$1);

(statearr_34764[(8)] = inst_34722);

return statearr_34764;
})();
if(cljs.core.truth_(inst_34723)){
var statearr_34765_34788 = state_34751__$1;
(statearr_34765_34788[(1)] = (8));

} else {
var statearr_34766_34789 = state_34751__$1;
(statearr_34766_34789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (14))){
var inst_34741 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34767_34790 = state_34751__$1;
(statearr_34767_34790[(2)] = inst_34741);

(statearr_34767_34790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (10))){
var inst_34743 = (state_34751[(2)]);
var state_34751__$1 = (function (){var statearr_34768 = state_34751;
(statearr_34768[(10)] = inst_34743);

return statearr_34768;
})();
var statearr_34769_34791 = state_34751__$1;
(statearr_34769_34791[(2)] = null);

(statearr_34769_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (8))){
var inst_34722 = (state_34751[(8)]);
var inst_34725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34726 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34722);
var inst_34727 = cljs.core.async.timeout.call(null,(1000));
var inst_34728 = [inst_34726,inst_34727];
var inst_34729 = (new cljs.core.PersistentVector(null,2,(5),inst_34725,inst_34728,null));
var state_34751__$1 = state_34751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34751__$1,(11),inst_34729);
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
});})(c__29976__auto___34777,ch))
;
return ((function (switch__29914__auto__,c__29976__auto___34777,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____0 = (function (){
var statearr_34773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34773[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__);

(statearr_34773[(1)] = (1));

return statearr_34773;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____1 = (function (state_34751){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_34751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e34774){if((e34774 instanceof Object)){
var ex__29918__auto__ = e34774;
var statearr_34775_34792 = state_34751;
(statearr_34775_34792[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34793 = state_34751;
state_34751 = G__34793;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29915__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___34777,ch))
})();
var state__29978__auto__ = (function (){var statearr_34776 = f__29977__auto__.call(null);
(statearr_34776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___34777);

return statearr_34776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___34777,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34794_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34794_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34801 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34801){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34800 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34799,_STAR_print_newline_STAR_34800,base_path_34801){
return (function() { 
var G__34802__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34803__i = 0, G__34803__a = new Array(arguments.length -  0);
while (G__34803__i < G__34803__a.length) {G__34803__a[G__34803__i] = arguments[G__34803__i + 0]; ++G__34803__i;}
  args = new cljs.core.IndexedSeq(G__34803__a,0);
} 
return G__34802__delegate.call(this,args);};
G__34802.cljs$lang$maxFixedArity = 0;
G__34802.cljs$lang$applyTo = (function (arglist__34804){
var args = cljs.core.seq(arglist__34804);
return G__34802__delegate(args);
});
G__34802.cljs$core$IFn$_invoke$arity$variadic = G__34802__delegate;
return G__34802;
})()
;})(_STAR_print_fn_STAR_34799,_STAR_print_newline_STAR_34800,base_path_34801))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34800;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34799;
}}catch (e34798){if((e34798 instanceof Error)){
var e = e34798;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34801], null));
} else {
var e = e34798;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34801))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34805){
var map__34810 = p__34805;
var map__34810__$1 = ((cljs.core.seq_QMARK_.call(null,map__34810))?cljs.core.apply.call(null,cljs.core.hash_map,map__34810):map__34810);
var opts = map__34810__$1;
var build_id = cljs.core.get.call(null,map__34810__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34810,map__34810__$1,opts,build_id){
return (function (p__34811){
var vec__34812 = p__34811;
var map__34813 = cljs.core.nth.call(null,vec__34812,(0),null);
var map__34813__$1 = ((cljs.core.seq_QMARK_.call(null,map__34813))?cljs.core.apply.call(null,cljs.core.hash_map,map__34813):map__34813);
var msg = map__34813__$1;
var msg_name = cljs.core.get.call(null,map__34813__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34812,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34812,map__34813,map__34813__$1,msg,msg_name,_,map__34810,map__34810__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34812,map__34813,map__34813__$1,msg,msg_name,_,map__34810,map__34810__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34810,map__34810__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34817){
var vec__34818 = p__34817;
var map__34819 = cljs.core.nth.call(null,vec__34818,(0),null);
var map__34819__$1 = ((cljs.core.seq_QMARK_.call(null,map__34819))?cljs.core.apply.call(null,cljs.core.hash_map,map__34819):map__34819);
var msg = map__34819__$1;
var msg_name = cljs.core.get.call(null,map__34819__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34818,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34820){
var map__34828 = p__34820;
var map__34828__$1 = ((cljs.core.seq_QMARK_.call(null,map__34828))?cljs.core.apply.call(null,cljs.core.hash_map,map__34828):map__34828);
var on_compile_warning = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34828,map__34828__$1,on_compile_warning,on_compile_fail){
return (function (p__34829){
var vec__34830 = p__34829;
var map__34831 = cljs.core.nth.call(null,vec__34830,(0),null);
var map__34831__$1 = ((cljs.core.seq_QMARK_.call(null,map__34831))?cljs.core.apply.call(null,cljs.core.hash_map,map__34831):map__34831);
var msg = map__34831__$1;
var msg_name = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34830,(1));
var pred__34832 = cljs.core._EQ_;
var expr__34833 = msg_name;
if(cljs.core.truth_(pred__34832.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34833))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34832.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34833))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34828,map__34828__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__,msg_hist,msg_names,msg){
return (function (state_35034){
var state_val_35035 = (state_35034[(1)]);
if((state_val_35035 === (7))){
var inst_34968 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35036_35077 = state_35034__$1;
(statearr_35036_35077[(2)] = inst_34968);

(statearr_35036_35077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (20))){
var inst_34996 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34996)){
var statearr_35037_35078 = state_35034__$1;
(statearr_35037_35078[(1)] = (22));

} else {
var statearr_35038_35079 = state_35034__$1;
(statearr_35038_35079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (27))){
var inst_35008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35009 = figwheel.client.heads_up.display_warning.call(null,inst_35008);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(30),inst_35009);
} else {
if((state_val_35035 === (1))){
var inst_34956 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34956)){
var statearr_35039_35080 = state_35034__$1;
(statearr_35039_35080[(1)] = (2));

} else {
var statearr_35040_35081 = state_35034__$1;
(statearr_35040_35081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (24))){
var inst_35024 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35041_35082 = state_35034__$1;
(statearr_35041_35082[(2)] = inst_35024);

(statearr_35041_35082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (4))){
var inst_35032 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35034__$1,inst_35032);
} else {
if((state_val_35035 === (15))){
var inst_34984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34985 = figwheel.client.format_messages.call(null,inst_34984);
var inst_34986 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34987 = figwheel.client.heads_up.display_error.call(null,inst_34985,inst_34986);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(18),inst_34987);
} else {
if((state_val_35035 === (21))){
var inst_35026 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35042_35083 = state_35034__$1;
(statearr_35042_35083[(2)] = inst_35026);

(statearr_35042_35083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (31))){
var inst_35015 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(34),inst_35015);
} else {
if((state_val_35035 === (32))){
var state_35034__$1 = state_35034;
var statearr_35043_35084 = state_35034__$1;
(statearr_35043_35084[(2)] = null);

(statearr_35043_35084[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (33))){
var inst_35020 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35044_35085 = state_35034__$1;
(statearr_35044_35085[(2)] = inst_35020);

(statearr_35044_35085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (13))){
var inst_34974 = (state_35034[(2)]);
var inst_34975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34976 = figwheel.client.format_messages.call(null,inst_34975);
var inst_34977 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34978 = figwheel.client.heads_up.display_error.call(null,inst_34976,inst_34977);
var state_35034__$1 = (function (){var statearr_35045 = state_35034;
(statearr_35045[(7)] = inst_34974);

return statearr_35045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(14),inst_34978);
} else {
if((state_val_35035 === (22))){
var inst_34998 = figwheel.client.heads_up.clear.call(null);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(25),inst_34998);
} else {
if((state_val_35035 === (29))){
var inst_35022 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35046_35086 = state_35034__$1;
(statearr_35046_35086[(2)] = inst_35022);

(statearr_35046_35086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (6))){
var inst_34964 = figwheel.client.heads_up.clear.call(null);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(9),inst_34964);
} else {
if((state_val_35035 === (28))){
var inst_35013 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_35013)){
var statearr_35047_35087 = state_35034__$1;
(statearr_35047_35087[(1)] = (31));

} else {
var statearr_35048_35088 = state_35034__$1;
(statearr_35048_35088[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (25))){
var inst_35000 = (state_35034[(2)]);
var inst_35001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35002 = figwheel.client.heads_up.display_warning.call(null,inst_35001);
var state_35034__$1 = (function (){var statearr_35049 = state_35034;
(statearr_35049[(8)] = inst_35000);

return statearr_35049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(26),inst_35002);
} else {
if((state_val_35035 === (34))){
var inst_35017 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35050_35089 = state_35034__$1;
(statearr_35050_35089[(2)] = inst_35017);

(statearr_35050_35089[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (17))){
var inst_35028 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35051_35090 = state_35034__$1;
(statearr_35051_35090[(2)] = inst_35028);

(statearr_35051_35090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (3))){
var inst_34970 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34970)){
var statearr_35052_35091 = state_35034__$1;
(statearr_35052_35091[(1)] = (10));

} else {
var statearr_35053_35092 = state_35034__$1;
(statearr_35053_35092[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (12))){
var inst_35030 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35054_35093 = state_35034__$1;
(statearr_35054_35093[(2)] = inst_35030);

(statearr_35054_35093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (2))){
var inst_34958 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34958)){
var statearr_35055_35094 = state_35034__$1;
(statearr_35055_35094[(1)] = (5));

} else {
var statearr_35056_35095 = state_35034__$1;
(statearr_35056_35095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (23))){
var inst_35006 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_35006)){
var statearr_35057_35096 = state_35034__$1;
(statearr_35057_35096[(1)] = (27));

} else {
var statearr_35058_35097 = state_35034__$1;
(statearr_35058_35097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (19))){
var inst_34993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34994 = figwheel.client.heads_up.append_message.call(null,inst_34993);
var state_35034__$1 = state_35034;
var statearr_35059_35098 = state_35034__$1;
(statearr_35059_35098[(2)] = inst_34994);

(statearr_35059_35098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (11))){
var inst_34982 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34982)){
var statearr_35060_35099 = state_35034__$1;
(statearr_35060_35099[(1)] = (15));

} else {
var statearr_35061_35100 = state_35034__$1;
(statearr_35061_35100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (9))){
var inst_34966 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35062_35101 = state_35034__$1;
(statearr_35062_35101[(2)] = inst_34966);

(statearr_35062_35101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (5))){
var inst_34960 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(8),inst_34960);
} else {
if((state_val_35035 === (14))){
var inst_34980 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35063_35102 = state_35034__$1;
(statearr_35063_35102[(2)] = inst_34980);

(statearr_35063_35102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (26))){
var inst_35004 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35064_35103 = state_35034__$1;
(statearr_35064_35103[(2)] = inst_35004);

(statearr_35064_35103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (16))){
var inst_34991 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35034__$1 = state_35034;
if(cljs.core.truth_(inst_34991)){
var statearr_35065_35104 = state_35034__$1;
(statearr_35065_35104[(1)] = (19));

} else {
var statearr_35066_35105 = state_35034__$1;
(statearr_35066_35105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (30))){
var inst_35011 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35067_35106 = state_35034__$1;
(statearr_35067_35106[(2)] = inst_35011);

(statearr_35067_35106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (10))){
var inst_34972 = figwheel.client.heads_up.clear.call(null);
var state_35034__$1 = state_35034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(13),inst_34972);
} else {
if((state_val_35035 === (18))){
var inst_34989 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35068_35107 = state_35034__$1;
(statearr_35068_35107[(2)] = inst_34989);

(statearr_35068_35107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35035 === (8))){
var inst_34962 = (state_35034[(2)]);
var state_35034__$1 = state_35034;
var statearr_35069_35108 = state_35034__$1;
(statearr_35069_35108[(2)] = inst_34962);

(statearr_35069_35108[(1)] = (7));


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
});})(c__29976__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29914__auto__,c__29976__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____0 = (function (){
var statearr_35073 = [null,null,null,null,null,null,null,null,null];
(statearr_35073[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__);

(statearr_35073[(1)] = (1));

return statearr_35073;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____1 = (function (state_35034){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35074){if((e35074 instanceof Object)){
var ex__29918__auto__ = e35074;
var statearr_35075_35109 = state_35034;
(statearr_35075_35109[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35110 = state_35034;
state_35034 = G__35110;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__ = function(state_35034){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____1.call(this,state_35034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__,msg_hist,msg_names,msg))
})();
var state__29978__auto__ = (function (){var statearr_35076 = f__29977__auto__.call(null);
(statearr_35076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__,msg_hist,msg_names,msg))
);

return c__29976__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29976__auto___35173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___35173,ch){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___35173,ch){
return (function (state_35156){
var state_val_35157 = (state_35156[(1)]);
if((state_val_35157 === (1))){
var state_35156__$1 = state_35156;
var statearr_35158_35174 = state_35156__$1;
(statearr_35158_35174[(2)] = null);

(statearr_35158_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (2))){
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35156__$1,(4),ch);
} else {
if((state_val_35157 === (3))){
var inst_35154 = (state_35156[(2)]);
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35156__$1,inst_35154);
} else {
if((state_val_35157 === (4))){
var inst_35144 = (state_35156[(7)]);
var inst_35144__$1 = (state_35156[(2)]);
var state_35156__$1 = (function (){var statearr_35159 = state_35156;
(statearr_35159[(7)] = inst_35144__$1);

return statearr_35159;
})();
if(cljs.core.truth_(inst_35144__$1)){
var statearr_35160_35175 = state_35156__$1;
(statearr_35160_35175[(1)] = (5));

} else {
var statearr_35161_35176 = state_35156__$1;
(statearr_35161_35176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (5))){
var inst_35144 = (state_35156[(7)]);
var inst_35146 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35144);
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35156__$1,(8),inst_35146);
} else {
if((state_val_35157 === (6))){
var state_35156__$1 = state_35156;
var statearr_35162_35177 = state_35156__$1;
(statearr_35162_35177[(2)] = null);

(statearr_35162_35177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (7))){
var inst_35152 = (state_35156[(2)]);
var state_35156__$1 = state_35156;
var statearr_35163_35178 = state_35156__$1;
(statearr_35163_35178[(2)] = inst_35152);

(statearr_35163_35178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (8))){
var inst_35148 = (state_35156[(2)]);
var state_35156__$1 = (function (){var statearr_35164 = state_35156;
(statearr_35164[(8)] = inst_35148);

return statearr_35164;
})();
var statearr_35165_35179 = state_35156__$1;
(statearr_35165_35179[(2)] = null);

(statearr_35165_35179[(1)] = (2));


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
});})(c__29976__auto___35173,ch))
;
return ((function (switch__29914__auto__,c__29976__auto___35173,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29915__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29915__auto____0 = (function (){
var statearr_35169 = [null,null,null,null,null,null,null,null,null];
(statearr_35169[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29915__auto__);

(statearr_35169[(1)] = (1));

return statearr_35169;
});
var figwheel$client$heads_up_plugin_$_state_machine__29915__auto____1 = (function (state_35156){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35170){if((e35170 instanceof Object)){
var ex__29918__auto__ = e35170;
var statearr_35171_35180 = state_35156;
(statearr_35171_35180[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_35156;
state_35156 = G__35181;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29915__auto__ = function(state_35156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29915__auto____1.call(this,state_35156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29915__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29915__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___35173,ch))
})();
var state__29978__auto__ = (function (){var statearr_35172 = f__29977__auto__.call(null);
(statearr_35172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___35173);

return statearr_35172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___35173,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_35202){
var state_val_35203 = (state_35202[(1)]);
if((state_val_35203 === (1))){
var inst_35197 = cljs.core.async.timeout.call(null,(3000));
var state_35202__$1 = state_35202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35202__$1,(2),inst_35197);
} else {
if((state_val_35203 === (2))){
var inst_35199 = (state_35202[(2)]);
var inst_35200 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35202__$1 = (function (){var statearr_35204 = state_35202;
(statearr_35204[(7)] = inst_35199);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35202__$1,inst_35200);
} else {
return null;
}
}
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____0 = (function (){
var statearr_35208 = [null,null,null,null,null,null,null,null];
(statearr_35208[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__);

(statearr_35208[(1)] = (1));

return statearr_35208;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____1 = (function (state_35202){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_35202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e35209){if((e35209 instanceof Object)){
var ex__29918__auto__ = e35209;
var statearr_35210_35212 = state_35202;
(statearr_35210_35212[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35213 = state_35202;
state_35202 = G__35213;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__ = function(state_35202){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____1.call(this,state_35202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29915__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_35211 = f__29977__auto__.call(null);
(statearr_35211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_35211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35214){
var map__35220 = p__35214;
var map__35220__$1 = ((cljs.core.seq_QMARK_.call(null,map__35220))?cljs.core.apply.call(null,cljs.core.hash_map,map__35220):map__35220);
var ed = map__35220__$1;
var formatted_exception = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35221_35225 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35222_35226 = null;
var count__35223_35227 = (0);
var i__35224_35228 = (0);
while(true){
if((i__35224_35228 < count__35223_35227)){
var msg_35229 = cljs.core._nth.call(null,chunk__35222_35226,i__35224_35228);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35229);

var G__35230 = seq__35221_35225;
var G__35231 = chunk__35222_35226;
var G__35232 = count__35223_35227;
var G__35233 = (i__35224_35228 + (1));
seq__35221_35225 = G__35230;
chunk__35222_35226 = G__35231;
count__35223_35227 = G__35232;
i__35224_35228 = G__35233;
continue;
} else {
var temp__4423__auto___35234 = cljs.core.seq.call(null,seq__35221_35225);
if(temp__4423__auto___35234){
var seq__35221_35235__$1 = temp__4423__auto___35234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35221_35235__$1)){
var c__25448__auto___35236 = cljs.core.chunk_first.call(null,seq__35221_35235__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__35221_35235__$1);
var G__35238 = c__25448__auto___35236;
var G__35239 = cljs.core.count.call(null,c__25448__auto___35236);
var G__35240 = (0);
seq__35221_35225 = G__35237;
chunk__35222_35226 = G__35238;
count__35223_35227 = G__35239;
i__35224_35228 = G__35240;
continue;
} else {
var msg_35241 = cljs.core.first.call(null,seq__35221_35235__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35241);

var G__35242 = cljs.core.next.call(null,seq__35221_35235__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35221_35225 = G__35242;
chunk__35222_35226 = G__35243;
count__35223_35227 = G__35244;
i__35224_35228 = G__35245;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35246){
var map__35248 = p__35246;
var map__35248__$1 = ((cljs.core.seq_QMARK_.call(null,map__35248))?cljs.core.apply.call(null,cljs.core.hash_map,map__35248):map__35248);
var w = map__35248__$1;
var message = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24651__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24651__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24651__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35255 = cljs.core.seq.call(null,plugins);
var chunk__35256 = null;
var count__35257 = (0);
var i__35258 = (0);
while(true){
if((i__35258 < count__35257)){
var vec__35259 = cljs.core._nth.call(null,chunk__35256,i__35258);
var k = cljs.core.nth.call(null,vec__35259,(0),null);
var plugin = cljs.core.nth.call(null,vec__35259,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35261 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35255,chunk__35256,count__35257,i__35258,pl_35261,vec__35259,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35261.call(null,msg_hist);
});})(seq__35255,chunk__35256,count__35257,i__35258,pl_35261,vec__35259,k,plugin))
);
} else {
}

var G__35262 = seq__35255;
var G__35263 = chunk__35256;
var G__35264 = count__35257;
var G__35265 = (i__35258 + (1));
seq__35255 = G__35262;
chunk__35256 = G__35263;
count__35257 = G__35264;
i__35258 = G__35265;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__35255);
if(temp__4423__auto__){
var seq__35255__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35255__$1)){
var c__25448__auto__ = cljs.core.chunk_first.call(null,seq__35255__$1);
var G__35266 = cljs.core.chunk_rest.call(null,seq__35255__$1);
var G__35267 = c__25448__auto__;
var G__35268 = cljs.core.count.call(null,c__25448__auto__);
var G__35269 = (0);
seq__35255 = G__35266;
chunk__35256 = G__35267;
count__35257 = G__35268;
i__35258 = G__35269;
continue;
} else {
var vec__35260 = cljs.core.first.call(null,seq__35255__$1);
var k = cljs.core.nth.call(null,vec__35260,(0),null);
var plugin = cljs.core.nth.call(null,vec__35260,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35270 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35255,chunk__35256,count__35257,i__35258,pl_35270,vec__35260,k,plugin,seq__35255__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35270.call(null,msg_hist);
});})(seq__35255,chunk__35256,count__35257,i__35258,pl_35270,vec__35260,k,plugin,seq__35255__$1,temp__4423__auto__))
);
} else {
}

var G__35271 = cljs.core.next.call(null,seq__35255__$1);
var G__35272 = null;
var G__35273 = (0);
var G__35274 = (0);
seq__35255 = G__35271;
chunk__35256 = G__35272;
count__35257 = G__35273;
i__35258 = G__35274;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__35276 = arguments.length;
switch (G__35276) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__25703__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25703__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35279){
var map__35280 = p__35279;
var map__35280__$1 = ((cljs.core.seq_QMARK_.call(null,map__35280))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var opts = map__35280__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35278){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35278));
});

//# sourceMappingURL=client.js.map