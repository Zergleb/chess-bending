// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t36315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36315 = (function (fn_handler,f,meta36316){
this.fn_handler = fn_handler;
this.f = f;
this.meta36316 = meta36316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36317,meta36316__$1){
var self__ = this;
var _36317__$1 = this;
return (new cljs.core.async.t36315(self__.fn_handler,self__.f,meta36316__$1));
});

cljs.core.async.t36315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36317){
var self__ = this;
var _36317__$1 = this;
return self__.meta36316;
});

cljs.core.async.t36315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36316","meta36316",1525607063,null)], null);
});

cljs.core.async.t36315.cljs$lang$type = true;

cljs.core.async.t36315.cljs$lang$ctorStr = "cljs.core.async/t36315";

cljs.core.async.t36315.cljs$lang$ctorPrWriter = (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t36315");
});

cljs.core.async.__GT_t36315 = (function cljs$core$async$fn_handler_$___GT_t36315(fn_handler__$1,f__$1,meta36316){
return (new cljs.core.async.t36315(fn_handler__$1,f__$1,meta36316));
});

}

return (new cljs.core.async.t36315(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__36319 = buff;
if(G__36319){
var bit__25337__auto__ = null;
if(cljs.core.truth_((function (){var or__24663__auto__ = bit__25337__auto__;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return G__36319.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36319.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36319);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36319);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__36321 = arguments.length;
switch (G__36321) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__36324 = arguments.length;
switch (G__36324) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36326 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36326);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36326,ret){
return (function (){
return fn1.call(null,val_36326);
});})(val_36326,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__36328 = arguments.length;
switch (G__36328) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25548__auto___36330 = n;
var x_36331 = (0);
while(true){
if((x_36331 < n__25548__auto___36330)){
(a[x_36331] = (0));

var G__36332 = (x_36331 + (1));
x_36331 = G__36332;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36333 = (i + (1));
i = G__36333;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36337 = (function (alt_flag,flag,meta36338){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36338 = meta36338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36339,meta36338__$1){
var self__ = this;
var _36339__$1 = this;
return (new cljs.core.async.t36337(self__.alt_flag,self__.flag,meta36338__$1));
});})(flag))
;

cljs.core.async.t36337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36339){
var self__ = this;
var _36339__$1 = this;
return self__.meta36338;
});})(flag))
;

cljs.core.async.t36337.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36337.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36338","meta36338",-1451819658,null)], null);
});})(flag))
;

cljs.core.async.t36337.cljs$lang$type = true;

cljs.core.async.t36337.cljs$lang$ctorStr = "cljs.core.async/t36337";

cljs.core.async.t36337.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t36337");
});})(flag))
;

cljs.core.async.__GT_t36337 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t36337(alt_flag__$1,flag__$1,meta36338){
return (new cljs.core.async.t36337(alt_flag__$1,flag__$1,meta36338));
});})(flag))
;

}

return (new cljs.core.async.t36337(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t36343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36343 = (function (alt_handler,flag,cb,meta36344){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36344 = meta36344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36345,meta36344__$1){
var self__ = this;
var _36345__$1 = this;
return (new cljs.core.async.t36343(self__.alt_handler,self__.flag,self__.cb,meta36344__$1));
});

cljs.core.async.t36343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36345){
var self__ = this;
var _36345__$1 = this;
return self__.meta36344;
});

cljs.core.async.t36343.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36344","meta36344",-849983698,null)], null);
});

cljs.core.async.t36343.cljs$lang$type = true;

cljs.core.async.t36343.cljs$lang$ctorStr = "cljs.core.async/t36343";

cljs.core.async.t36343.cljs$lang$ctorPrWriter = (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t36343");
});

cljs.core.async.__GT_t36343 = (function cljs$core$async$alt_handler_$___GT_t36343(alt_handler__$1,flag__$1,cb__$1,meta36344){
return (new cljs.core.async.t36343(alt_handler__$1,flag__$1,cb__$1,meta36344));
});

}

return (new cljs.core.async.t36343(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36346_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36347_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24663__auto__ = wport;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36348 = (i + (1));
i = G__36348;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24663__auto__ = ret;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__24651__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24651__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24651__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__25703__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25703__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36351){
var map__36352 = p__36351;
var map__36352__$1 = ((cljs.core.seq_QMARK_.call(null,map__36352))?cljs.core.apply.call(null,cljs.core.hash_map,map__36352):map__36352);
var opts = map__36352__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36349){
var G__36350 = cljs.core.first.call(null,seq36349);
var seq36349__$1 = cljs.core.next.call(null,seq36349);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36350,seq36349__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__36354 = arguments.length;
switch (G__36354) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29976__auto___36403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___36403){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___36403){
return (function (state_36378){
var state_val_36379 = (state_36378[(1)]);
if((state_val_36379 === (7))){
var inst_36374 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36380_36404 = state_36378__$1;
(statearr_36380_36404[(2)] = inst_36374);

(statearr_36380_36404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (1))){
var state_36378__$1 = state_36378;
var statearr_36381_36405 = state_36378__$1;
(statearr_36381_36405[(2)] = null);

(statearr_36381_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (4))){
var inst_36357 = (state_36378[(7)]);
var inst_36357__$1 = (state_36378[(2)]);
var inst_36358 = (inst_36357__$1 == null);
var state_36378__$1 = (function (){var statearr_36382 = state_36378;
(statearr_36382[(7)] = inst_36357__$1);

return statearr_36382;
})();
if(cljs.core.truth_(inst_36358)){
var statearr_36383_36406 = state_36378__$1;
(statearr_36383_36406[(1)] = (5));

} else {
var statearr_36384_36407 = state_36378__$1;
(statearr_36384_36407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (13))){
var state_36378__$1 = state_36378;
var statearr_36385_36408 = state_36378__$1;
(statearr_36385_36408[(2)] = null);

(statearr_36385_36408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (6))){
var inst_36357 = (state_36378[(7)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36378__$1,(11),to,inst_36357);
} else {
if((state_val_36379 === (3))){
var inst_36376 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36378__$1,inst_36376);
} else {
if((state_val_36379 === (12))){
var state_36378__$1 = state_36378;
var statearr_36386_36409 = state_36378__$1;
(statearr_36386_36409[(2)] = null);

(statearr_36386_36409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (2))){
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36378__$1,(4),from);
} else {
if((state_val_36379 === (11))){
var inst_36367 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36367)){
var statearr_36387_36410 = state_36378__$1;
(statearr_36387_36410[(1)] = (12));

} else {
var statearr_36388_36411 = state_36378__$1;
(statearr_36388_36411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (9))){
var state_36378__$1 = state_36378;
var statearr_36389_36412 = state_36378__$1;
(statearr_36389_36412[(2)] = null);

(statearr_36389_36412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (5))){
var state_36378__$1 = state_36378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36390_36413 = state_36378__$1;
(statearr_36390_36413[(1)] = (8));

} else {
var statearr_36391_36414 = state_36378__$1;
(statearr_36391_36414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (14))){
var inst_36372 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36392_36415 = state_36378__$1;
(statearr_36392_36415[(2)] = inst_36372);

(statearr_36392_36415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (10))){
var inst_36364 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36393_36416 = state_36378__$1;
(statearr_36393_36416[(2)] = inst_36364);

(statearr_36393_36416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (8))){
var inst_36361 = cljs.core.async.close_BANG_.call(null,to);
var state_36378__$1 = state_36378;
var statearr_36394_36417 = state_36378__$1;
(statearr_36394_36417[(2)] = inst_36361);

(statearr_36394_36417[(1)] = (10));


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
});})(c__29976__auto___36403))
;
return ((function (switch__29914__auto__,c__29976__auto___36403){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_36398 = [null,null,null,null,null,null,null,null];
(statearr_36398[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_36398[(1)] = (1));

return statearr_36398;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_36378){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36399){if((e36399 instanceof Object)){
var ex__29918__auto__ = e36399;
var statearr_36400_36418 = state_36378;
(statearr_36400_36418[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36419 = state_36378;
state_36378 = G__36419;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_36378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_36378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___36403))
})();
var state__29978__auto__ = (function (){var statearr_36401 = f__29977__auto__.call(null);
(statearr_36401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36403);

return statearr_36401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___36403))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36603){
var vec__36604 = p__36603;
var v = cljs.core.nth.call(null,vec__36604,(0),null);
var p = cljs.core.nth.call(null,vec__36604,(1),null);
var job = vec__36604;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29976__auto___36786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results){
return (function (state_36609){
var state_val_36610 = (state_36609[(1)]);
if((state_val_36610 === (1))){
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36609__$1,(2),res,v);
} else {
if((state_val_36610 === (2))){
var inst_36606 = (state_36609[(2)]);
var inst_36607 = cljs.core.async.close_BANG_.call(null,res);
var state_36609__$1 = (function (){var statearr_36611 = state_36609;
(statearr_36611[(7)] = inst_36606);

return statearr_36611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36609__$1,inst_36607);
} else {
return null;
}
}
});})(c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results))
;
return ((function (switch__29914__auto__,c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_36615 = [null,null,null,null,null,null,null,null];
(statearr_36615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__);

(statearr_36615[(1)] = (1));

return statearr_36615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1 = (function (state_36609){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36616){if((e36616 instanceof Object)){
var ex__29918__auto__ = e36616;
var statearr_36617_36787 = state_36609;
(statearr_36617_36787[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36788 = state_36609;
state_36609 = G__36788;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = function(state_36609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1.call(this,state_36609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results))
})();
var state__29978__auto__ = (function (){var statearr_36618 = f__29977__auto__.call(null);
(statearr_36618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36786);

return statearr_36618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___36786,res,vec__36604,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36619){
var vec__36620 = p__36619;
var v = cljs.core.nth.call(null,vec__36620,(0),null);
var p = cljs.core.nth.call(null,vec__36620,(1),null);
var job = vec__36620;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25548__auto___36789 = n;
var __36790 = (0);
while(true){
if((__36790 < n__25548__auto___36789)){
var G__36621_36791 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36621_36791) {
case "compute":
var c__29976__auto___36793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36790,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (__36790,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function (state_36634){
var state_val_36635 = (state_36634[(1)]);
if((state_val_36635 === (1))){
var state_36634__$1 = state_36634;
var statearr_36636_36794 = state_36634__$1;
(statearr_36636_36794[(2)] = null);

(statearr_36636_36794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (2))){
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36634__$1,(4),jobs);
} else {
if((state_val_36635 === (3))){
var inst_36632 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36634__$1,inst_36632);
} else {
if((state_val_36635 === (4))){
var inst_36624 = (state_36634[(2)]);
var inst_36625 = process.call(null,inst_36624);
var state_36634__$1 = state_36634;
if(cljs.core.truth_(inst_36625)){
var statearr_36637_36795 = state_36634__$1;
(statearr_36637_36795[(1)] = (5));

} else {
var statearr_36638_36796 = state_36634__$1;
(statearr_36638_36796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (5))){
var state_36634__$1 = state_36634;
var statearr_36639_36797 = state_36634__$1;
(statearr_36639_36797[(2)] = null);

(statearr_36639_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (6))){
var state_36634__$1 = state_36634;
var statearr_36640_36798 = state_36634__$1;
(statearr_36640_36798[(2)] = null);

(statearr_36640_36798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (7))){
var inst_36630 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36641_36799 = state_36634__$1;
(statearr_36641_36799[(2)] = inst_36630);

(statearr_36641_36799[(1)] = (3));


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
});})(__36790,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
;
return ((function (__36790,switch__29914__auto__,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_36645 = [null,null,null,null,null,null,null];
(statearr_36645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__);

(statearr_36645[(1)] = (1));

return statearr_36645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1 = (function (state_36634){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36646){if((e36646 instanceof Object)){
var ex__29918__auto__ = e36646;
var statearr_36647_36800 = state_36634;
(statearr_36647_36800[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36801 = state_36634;
state_36634 = G__36801;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__;
})()
;})(__36790,switch__29914__auto__,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
})();
var state__29978__auto__ = (function (){var statearr_36648 = f__29977__auto__.call(null);
(statearr_36648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36793);

return statearr_36648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(__36790,c__29976__auto___36793,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
);


break;
case "async":
var c__29976__auto___36802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36790,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (__36790,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function (state_36661){
var state_val_36662 = (state_36661[(1)]);
if((state_val_36662 === (1))){
var state_36661__$1 = state_36661;
var statearr_36663_36803 = state_36661__$1;
(statearr_36663_36803[(2)] = null);

(statearr_36663_36803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (2))){
var state_36661__$1 = state_36661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36661__$1,(4),jobs);
} else {
if((state_val_36662 === (3))){
var inst_36659 = (state_36661[(2)]);
var state_36661__$1 = state_36661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36661__$1,inst_36659);
} else {
if((state_val_36662 === (4))){
var inst_36651 = (state_36661[(2)]);
var inst_36652 = async.call(null,inst_36651);
var state_36661__$1 = state_36661;
if(cljs.core.truth_(inst_36652)){
var statearr_36664_36804 = state_36661__$1;
(statearr_36664_36804[(1)] = (5));

} else {
var statearr_36665_36805 = state_36661__$1;
(statearr_36665_36805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (5))){
var state_36661__$1 = state_36661;
var statearr_36666_36806 = state_36661__$1;
(statearr_36666_36806[(2)] = null);

(statearr_36666_36806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (6))){
var state_36661__$1 = state_36661;
var statearr_36667_36807 = state_36661__$1;
(statearr_36667_36807[(2)] = null);

(statearr_36667_36807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (7))){
var inst_36657 = (state_36661[(2)]);
var state_36661__$1 = state_36661;
var statearr_36668_36808 = state_36661__$1;
(statearr_36668_36808[(2)] = inst_36657);

(statearr_36668_36808[(1)] = (3));


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
});})(__36790,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
;
return ((function (__36790,switch__29914__auto__,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_36672 = [null,null,null,null,null,null,null];
(statearr_36672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__);

(statearr_36672[(1)] = (1));

return statearr_36672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1 = (function (state_36661){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36673){if((e36673 instanceof Object)){
var ex__29918__auto__ = e36673;
var statearr_36674_36809 = state_36661;
(statearr_36674_36809[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36810 = state_36661;
state_36661 = G__36810;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = function(state_36661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1.call(this,state_36661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__;
})()
;})(__36790,switch__29914__auto__,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
})();
var state__29978__auto__ = (function (){var statearr_36675 = f__29977__auto__.call(null);
(statearr_36675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36802);

return statearr_36675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(__36790,c__29976__auto___36802,G__36621_36791,n__25548__auto___36789,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36811 = (__36790 + (1));
__36790 = G__36811;
continue;
} else {
}
break;
}

var c__29976__auto___36812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___36812,jobs,results,process,async){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___36812,jobs,results,process,async){
return (function (state_36697){
var state_val_36698 = (state_36697[(1)]);
if((state_val_36698 === (1))){
var state_36697__$1 = state_36697;
var statearr_36699_36813 = state_36697__$1;
(statearr_36699_36813[(2)] = null);

(statearr_36699_36813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (2))){
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36697__$1,(4),from);
} else {
if((state_val_36698 === (3))){
var inst_36695 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36697__$1,inst_36695);
} else {
if((state_val_36698 === (4))){
var inst_36678 = (state_36697[(7)]);
var inst_36678__$1 = (state_36697[(2)]);
var inst_36679 = (inst_36678__$1 == null);
var state_36697__$1 = (function (){var statearr_36700 = state_36697;
(statearr_36700[(7)] = inst_36678__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36679)){
var statearr_36701_36814 = state_36697__$1;
(statearr_36701_36814[(1)] = (5));

} else {
var statearr_36702_36815 = state_36697__$1;
(statearr_36702_36815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (5))){
var inst_36681 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36697__$1 = state_36697;
var statearr_36703_36816 = state_36697__$1;
(statearr_36703_36816[(2)] = inst_36681);

(statearr_36703_36816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (6))){
var inst_36683 = (state_36697[(8)]);
var inst_36678 = (state_36697[(7)]);
var inst_36683__$1 = cljs.core.async.chan.call(null,(1));
var inst_36684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36685 = [inst_36678,inst_36683__$1];
var inst_36686 = (new cljs.core.PersistentVector(null,2,(5),inst_36684,inst_36685,null));
var state_36697__$1 = (function (){var statearr_36704 = state_36697;
(statearr_36704[(8)] = inst_36683__$1);

return statearr_36704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36697__$1,(8),jobs,inst_36686);
} else {
if((state_val_36698 === (7))){
var inst_36693 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36705_36817 = state_36697__$1;
(statearr_36705_36817[(2)] = inst_36693);

(statearr_36705_36817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (8))){
var inst_36683 = (state_36697[(8)]);
var inst_36688 = (state_36697[(2)]);
var state_36697__$1 = (function (){var statearr_36706 = state_36697;
(statearr_36706[(9)] = inst_36688);

return statearr_36706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36697__$1,(9),results,inst_36683);
} else {
if((state_val_36698 === (9))){
var inst_36690 = (state_36697[(2)]);
var state_36697__$1 = (function (){var statearr_36707 = state_36697;
(statearr_36707[(10)] = inst_36690);

return statearr_36707;
})();
var statearr_36708_36818 = state_36697__$1;
(statearr_36708_36818[(2)] = null);

(statearr_36708_36818[(1)] = (2));


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
});})(c__29976__auto___36812,jobs,results,process,async))
;
return ((function (switch__29914__auto__,c__29976__auto___36812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_36712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__);

(statearr_36712[(1)] = (1));

return statearr_36712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1 = (function (state_36697){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36713){if((e36713 instanceof Object)){
var ex__29918__auto__ = e36713;
var statearr_36714_36819 = state_36697;
(statearr_36714_36819[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36820 = state_36697;
state_36697 = G__36820;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = function(state_36697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1.call(this,state_36697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___36812,jobs,results,process,async))
})();
var state__29978__auto__ = (function (){var statearr_36715 = f__29977__auto__.call(null);
(statearr_36715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36812);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___36812,jobs,results,process,async))
);


var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__,jobs,results,process,async){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__,jobs,results,process,async){
return (function (state_36753){
var state_val_36754 = (state_36753[(1)]);
if((state_val_36754 === (7))){
var inst_36749 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36755_36821 = state_36753__$1;
(statearr_36755_36821[(2)] = inst_36749);

(statearr_36755_36821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (20))){
var state_36753__$1 = state_36753;
var statearr_36756_36822 = state_36753__$1;
(statearr_36756_36822[(2)] = null);

(statearr_36756_36822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (1))){
var state_36753__$1 = state_36753;
var statearr_36757_36823 = state_36753__$1;
(statearr_36757_36823[(2)] = null);

(statearr_36757_36823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (4))){
var inst_36718 = (state_36753[(7)]);
var inst_36718__$1 = (state_36753[(2)]);
var inst_36719 = (inst_36718__$1 == null);
var state_36753__$1 = (function (){var statearr_36758 = state_36753;
(statearr_36758[(7)] = inst_36718__$1);

return statearr_36758;
})();
if(cljs.core.truth_(inst_36719)){
var statearr_36759_36824 = state_36753__$1;
(statearr_36759_36824[(1)] = (5));

} else {
var statearr_36760_36825 = state_36753__$1;
(statearr_36760_36825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (15))){
var inst_36731 = (state_36753[(8)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36753__$1,(18),to,inst_36731);
} else {
if((state_val_36754 === (21))){
var inst_36744 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36761_36826 = state_36753__$1;
(statearr_36761_36826[(2)] = inst_36744);

(statearr_36761_36826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (13))){
var inst_36746 = (state_36753[(2)]);
var state_36753__$1 = (function (){var statearr_36762 = state_36753;
(statearr_36762[(9)] = inst_36746);

return statearr_36762;
})();
var statearr_36763_36827 = state_36753__$1;
(statearr_36763_36827[(2)] = null);

(statearr_36763_36827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (6))){
var inst_36718 = (state_36753[(7)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36753__$1,(11),inst_36718);
} else {
if((state_val_36754 === (17))){
var inst_36739 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
if(cljs.core.truth_(inst_36739)){
var statearr_36764_36828 = state_36753__$1;
(statearr_36764_36828[(1)] = (19));

} else {
var statearr_36765_36829 = state_36753__$1;
(statearr_36765_36829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (3))){
var inst_36751 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36753__$1,inst_36751);
} else {
if((state_val_36754 === (12))){
var inst_36728 = (state_36753[(10)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36753__$1,(14),inst_36728);
} else {
if((state_val_36754 === (2))){
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36753__$1,(4),results);
} else {
if((state_val_36754 === (19))){
var state_36753__$1 = state_36753;
var statearr_36766_36830 = state_36753__$1;
(statearr_36766_36830[(2)] = null);

(statearr_36766_36830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (11))){
var inst_36728 = (state_36753[(2)]);
var state_36753__$1 = (function (){var statearr_36767 = state_36753;
(statearr_36767[(10)] = inst_36728);

return statearr_36767;
})();
var statearr_36768_36831 = state_36753__$1;
(statearr_36768_36831[(2)] = null);

(statearr_36768_36831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (9))){
var state_36753__$1 = state_36753;
var statearr_36769_36832 = state_36753__$1;
(statearr_36769_36832[(2)] = null);

(statearr_36769_36832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (5))){
var state_36753__$1 = state_36753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36770_36833 = state_36753__$1;
(statearr_36770_36833[(1)] = (8));

} else {
var statearr_36771_36834 = state_36753__$1;
(statearr_36771_36834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (14))){
var inst_36731 = (state_36753[(8)]);
var inst_36733 = (state_36753[(11)]);
var inst_36731__$1 = (state_36753[(2)]);
var inst_36732 = (inst_36731__$1 == null);
var inst_36733__$1 = cljs.core.not.call(null,inst_36732);
var state_36753__$1 = (function (){var statearr_36772 = state_36753;
(statearr_36772[(8)] = inst_36731__$1);

(statearr_36772[(11)] = inst_36733__$1);

return statearr_36772;
})();
if(inst_36733__$1){
var statearr_36773_36835 = state_36753__$1;
(statearr_36773_36835[(1)] = (15));

} else {
var statearr_36774_36836 = state_36753__$1;
(statearr_36774_36836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (16))){
var inst_36733 = (state_36753[(11)]);
var state_36753__$1 = state_36753;
var statearr_36775_36837 = state_36753__$1;
(statearr_36775_36837[(2)] = inst_36733);

(statearr_36775_36837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (10))){
var inst_36725 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36776_36838 = state_36753__$1;
(statearr_36776_36838[(2)] = inst_36725);

(statearr_36776_36838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (18))){
var inst_36736 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36777_36839 = state_36753__$1;
(statearr_36777_36839[(2)] = inst_36736);

(statearr_36777_36839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (8))){
var inst_36722 = cljs.core.async.close_BANG_.call(null,to);
var state_36753__$1 = state_36753;
var statearr_36778_36840 = state_36753__$1;
(statearr_36778_36840[(2)] = inst_36722);

(statearr_36778_36840[(1)] = (10));


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
});})(c__29976__auto__,jobs,results,process,async))
;
return ((function (switch__29914__auto__,c__29976__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_36782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__);

(statearr_36782[(1)] = (1));

return statearr_36782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1 = (function (state_36753){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36783){if((e36783 instanceof Object)){
var ex__29918__auto__ = e36783;
var statearr_36784_36841 = state_36753;
(statearr_36784_36841[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36842 = state_36753;
state_36753 = G__36842;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__ = function(state_36753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1.call(this,state_36753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__,jobs,results,process,async))
})();
var state__29978__auto__ = (function (){var statearr_36785 = f__29977__auto__.call(null);
(statearr_36785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_36785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__,jobs,results,process,async))
);

return c__29976__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__36844 = arguments.length;
switch (G__36844) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__36847 = arguments.length;
switch (G__36847) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__36850 = arguments.length;
switch (G__36850) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29976__auto___36902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___36902,tc,fc){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___36902,tc,fc){
return (function (state_36876){
var state_val_36877 = (state_36876[(1)]);
if((state_val_36877 === (7))){
var inst_36872 = (state_36876[(2)]);
var state_36876__$1 = state_36876;
var statearr_36878_36903 = state_36876__$1;
(statearr_36878_36903[(2)] = inst_36872);

(statearr_36878_36903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (1))){
var state_36876__$1 = state_36876;
var statearr_36879_36904 = state_36876__$1;
(statearr_36879_36904[(2)] = null);

(statearr_36879_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (4))){
var inst_36853 = (state_36876[(7)]);
var inst_36853__$1 = (state_36876[(2)]);
var inst_36854 = (inst_36853__$1 == null);
var state_36876__$1 = (function (){var statearr_36880 = state_36876;
(statearr_36880[(7)] = inst_36853__$1);

return statearr_36880;
})();
if(cljs.core.truth_(inst_36854)){
var statearr_36881_36905 = state_36876__$1;
(statearr_36881_36905[(1)] = (5));

} else {
var statearr_36882_36906 = state_36876__$1;
(statearr_36882_36906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (13))){
var state_36876__$1 = state_36876;
var statearr_36883_36907 = state_36876__$1;
(statearr_36883_36907[(2)] = null);

(statearr_36883_36907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (6))){
var inst_36853 = (state_36876[(7)]);
var inst_36859 = p.call(null,inst_36853);
var state_36876__$1 = state_36876;
if(cljs.core.truth_(inst_36859)){
var statearr_36884_36908 = state_36876__$1;
(statearr_36884_36908[(1)] = (9));

} else {
var statearr_36885_36909 = state_36876__$1;
(statearr_36885_36909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (3))){
var inst_36874 = (state_36876[(2)]);
var state_36876__$1 = state_36876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36876__$1,inst_36874);
} else {
if((state_val_36877 === (12))){
var state_36876__$1 = state_36876;
var statearr_36886_36910 = state_36876__$1;
(statearr_36886_36910[(2)] = null);

(statearr_36886_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (2))){
var state_36876__$1 = state_36876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36876__$1,(4),ch);
} else {
if((state_val_36877 === (11))){
var inst_36853 = (state_36876[(7)]);
var inst_36863 = (state_36876[(2)]);
var state_36876__$1 = state_36876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36876__$1,(8),inst_36863,inst_36853);
} else {
if((state_val_36877 === (9))){
var state_36876__$1 = state_36876;
var statearr_36887_36911 = state_36876__$1;
(statearr_36887_36911[(2)] = tc);

(statearr_36887_36911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (5))){
var inst_36856 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36857 = cljs.core.async.close_BANG_.call(null,fc);
var state_36876__$1 = (function (){var statearr_36888 = state_36876;
(statearr_36888[(8)] = inst_36856);

return statearr_36888;
})();
var statearr_36889_36912 = state_36876__$1;
(statearr_36889_36912[(2)] = inst_36857);

(statearr_36889_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (14))){
var inst_36870 = (state_36876[(2)]);
var state_36876__$1 = state_36876;
var statearr_36890_36913 = state_36876__$1;
(statearr_36890_36913[(2)] = inst_36870);

(statearr_36890_36913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (10))){
var state_36876__$1 = state_36876;
var statearr_36891_36914 = state_36876__$1;
(statearr_36891_36914[(2)] = fc);

(statearr_36891_36914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36877 === (8))){
var inst_36865 = (state_36876[(2)]);
var state_36876__$1 = state_36876;
if(cljs.core.truth_(inst_36865)){
var statearr_36892_36915 = state_36876__$1;
(statearr_36892_36915[(1)] = (12));

} else {
var statearr_36893_36916 = state_36876__$1;
(statearr_36893_36916[(1)] = (13));

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
});})(c__29976__auto___36902,tc,fc))
;
return ((function (switch__29914__auto__,c__29976__auto___36902,tc,fc){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_36897 = [null,null,null,null,null,null,null,null,null];
(statearr_36897[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_36897[(1)] = (1));

return statearr_36897;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_36876){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36898){if((e36898 instanceof Object)){
var ex__29918__auto__ = e36898;
var statearr_36899_36917 = state_36876;
(statearr_36899_36917[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_36876;
state_36876 = G__36918;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_36876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_36876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___36902,tc,fc))
})();
var state__29978__auto__ = (function (){var statearr_36900 = f__29977__auto__.call(null);
(statearr_36900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___36902);

return statearr_36900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___36902,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_36965){
var state_val_36966 = (state_36965[(1)]);
if((state_val_36966 === (1))){
var inst_36951 = init;
var state_36965__$1 = (function (){var statearr_36967 = state_36965;
(statearr_36967[(7)] = inst_36951);

return statearr_36967;
})();
var statearr_36968_36983 = state_36965__$1;
(statearr_36968_36983[(2)] = null);

(statearr_36968_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36966 === (2))){
var state_36965__$1 = state_36965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36965__$1,(4),ch);
} else {
if((state_val_36966 === (3))){
var inst_36963 = (state_36965[(2)]);
var state_36965__$1 = state_36965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36965__$1,inst_36963);
} else {
if((state_val_36966 === (4))){
var inst_36954 = (state_36965[(8)]);
var inst_36954__$1 = (state_36965[(2)]);
var inst_36955 = (inst_36954__$1 == null);
var state_36965__$1 = (function (){var statearr_36969 = state_36965;
(statearr_36969[(8)] = inst_36954__$1);

return statearr_36969;
})();
if(cljs.core.truth_(inst_36955)){
var statearr_36970_36984 = state_36965__$1;
(statearr_36970_36984[(1)] = (5));

} else {
var statearr_36971_36985 = state_36965__$1;
(statearr_36971_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36966 === (5))){
var inst_36951 = (state_36965[(7)]);
var state_36965__$1 = state_36965;
var statearr_36972_36986 = state_36965__$1;
(statearr_36972_36986[(2)] = inst_36951);

(statearr_36972_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36966 === (6))){
var inst_36954 = (state_36965[(8)]);
var inst_36951 = (state_36965[(7)]);
var inst_36958 = f.call(null,inst_36951,inst_36954);
var inst_36951__$1 = inst_36958;
var state_36965__$1 = (function (){var statearr_36973 = state_36965;
(statearr_36973[(7)] = inst_36951__$1);

return statearr_36973;
})();
var statearr_36974_36987 = state_36965__$1;
(statearr_36974_36987[(2)] = null);

(statearr_36974_36987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36966 === (7))){
var inst_36961 = (state_36965[(2)]);
var state_36965__$1 = state_36965;
var statearr_36975_36988 = state_36965__$1;
(statearr_36975_36988[(2)] = inst_36961);

(statearr_36975_36988[(1)] = (3));


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
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29915__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29915__auto____0 = (function (){
var statearr_36979 = [null,null,null,null,null,null,null,null,null];
(statearr_36979[(0)] = cljs$core$async$reduce_$_state_machine__29915__auto__);

(statearr_36979[(1)] = (1));

return statearr_36979;
});
var cljs$core$async$reduce_$_state_machine__29915__auto____1 = (function (state_36965){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_36965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e36980){if((e36980 instanceof Object)){
var ex__29918__auto__ = e36980;
var statearr_36981_36989 = state_36965;
(statearr_36981_36989[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36990 = state_36965;
state_36965 = G__36990;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29915__auto__ = function(state_36965){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29915__auto____1.call(this,state_36965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29915__auto____0;
cljs$core$async$reduce_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29915__auto____1;
return cljs$core$async$reduce_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_36982 = f__29977__auto__.call(null);
(statearr_36982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_36982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__36992 = arguments.length;
switch (G__36992) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_37017){
var state_val_37018 = (state_37017[(1)]);
if((state_val_37018 === (7))){
var inst_36999 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
var statearr_37019_37043 = state_37017__$1;
(statearr_37019_37043[(2)] = inst_36999);

(statearr_37019_37043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (1))){
var inst_36993 = cljs.core.seq.call(null,coll);
var inst_36994 = inst_36993;
var state_37017__$1 = (function (){var statearr_37020 = state_37017;
(statearr_37020[(7)] = inst_36994);

return statearr_37020;
})();
var statearr_37021_37044 = state_37017__$1;
(statearr_37021_37044[(2)] = null);

(statearr_37021_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (4))){
var inst_36994 = (state_37017[(7)]);
var inst_36997 = cljs.core.first.call(null,inst_36994);
var state_37017__$1 = state_37017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37017__$1,(7),ch,inst_36997);
} else {
if((state_val_37018 === (13))){
var inst_37011 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
var statearr_37022_37045 = state_37017__$1;
(statearr_37022_37045[(2)] = inst_37011);

(statearr_37022_37045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (6))){
var inst_37002 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
if(cljs.core.truth_(inst_37002)){
var statearr_37023_37046 = state_37017__$1;
(statearr_37023_37046[(1)] = (8));

} else {
var statearr_37024_37047 = state_37017__$1;
(statearr_37024_37047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (3))){
var inst_37015 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37017__$1,inst_37015);
} else {
if((state_val_37018 === (12))){
var state_37017__$1 = state_37017;
var statearr_37025_37048 = state_37017__$1;
(statearr_37025_37048[(2)] = null);

(statearr_37025_37048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (2))){
var inst_36994 = (state_37017[(7)]);
var state_37017__$1 = state_37017;
if(cljs.core.truth_(inst_36994)){
var statearr_37026_37049 = state_37017__$1;
(statearr_37026_37049[(1)] = (4));

} else {
var statearr_37027_37050 = state_37017__$1;
(statearr_37027_37050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (11))){
var inst_37008 = cljs.core.async.close_BANG_.call(null,ch);
var state_37017__$1 = state_37017;
var statearr_37028_37051 = state_37017__$1;
(statearr_37028_37051[(2)] = inst_37008);

(statearr_37028_37051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (9))){
var state_37017__$1 = state_37017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37029_37052 = state_37017__$1;
(statearr_37029_37052[(1)] = (11));

} else {
var statearr_37030_37053 = state_37017__$1;
(statearr_37030_37053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (5))){
var inst_36994 = (state_37017[(7)]);
var state_37017__$1 = state_37017;
var statearr_37031_37054 = state_37017__$1;
(statearr_37031_37054[(2)] = inst_36994);

(statearr_37031_37054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (10))){
var inst_37013 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
var statearr_37032_37055 = state_37017__$1;
(statearr_37032_37055[(2)] = inst_37013);

(statearr_37032_37055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (8))){
var inst_36994 = (state_37017[(7)]);
var inst_37004 = cljs.core.next.call(null,inst_36994);
var inst_36994__$1 = inst_37004;
var state_37017__$1 = (function (){var statearr_37033 = state_37017;
(statearr_37033[(7)] = inst_36994__$1);

return statearr_37033;
})();
var statearr_37034_37056 = state_37017__$1;
(statearr_37034_37056[(2)] = null);

(statearr_37034_37056[(1)] = (2));


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
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_37038 = [null,null,null,null,null,null,null,null];
(statearr_37038[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_37038[(1)] = (1));

return statearr_37038;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_37017){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_37017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e37039){if((e37039 instanceof Object)){
var ex__29918__auto__ = e37039;
var statearr_37040_37057 = state_37017;
(statearr_37040_37057[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37058 = state_37017;
state_37017 = G__37058;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_37017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_37017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_37041 = f__29977__auto__.call(null);
(statearr_37041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_37041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj37060 = {};
return obj37060;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24651__auto__ = _;
if(and__24651__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24651__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25299__auto__ = (((_ == null))?null:_);
return (function (){var or__24663__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj37062 = {};
return obj37062;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t37284 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37284 = (function (mult,ch,cs,meta37285){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37285 = meta37285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37286,meta37285__$1){
var self__ = this;
var _37286__$1 = this;
return (new cljs.core.async.t37284(self__.mult,self__.ch,self__.cs,meta37285__$1));
});})(cs))
;

cljs.core.async.t37284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37286){
var self__ = this;
var _37286__$1 = this;
return self__.meta37285;
});})(cs))
;

cljs.core.async.t37284.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37284.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37284.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37285","meta37285",1729136305,null)], null);
});})(cs))
;

cljs.core.async.t37284.cljs$lang$type = true;

cljs.core.async.t37284.cljs$lang$ctorStr = "cljs.core.async/t37284";

cljs.core.async.t37284.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t37284");
});})(cs))
;

cljs.core.async.__GT_t37284 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t37284(mult__$1,ch__$1,cs__$1,meta37285){
return (new cljs.core.async.t37284(mult__$1,ch__$1,cs__$1,meta37285));
});})(cs))
;

}

return (new cljs.core.async.t37284(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29976__auto___37505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___37505,cs,m,dchan,dctr,done){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___37505,cs,m,dchan,dctr,done){
return (function (state_37417){
var state_val_37418 = (state_37417[(1)]);
if((state_val_37418 === (7))){
var inst_37413 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37419_37506 = state_37417__$1;
(statearr_37419_37506[(2)] = inst_37413);

(statearr_37419_37506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (20))){
var inst_37318 = (state_37417[(7)]);
var inst_37328 = cljs.core.first.call(null,inst_37318);
var inst_37329 = cljs.core.nth.call(null,inst_37328,(0),null);
var inst_37330 = cljs.core.nth.call(null,inst_37328,(1),null);
var state_37417__$1 = (function (){var statearr_37420 = state_37417;
(statearr_37420[(8)] = inst_37329);

return statearr_37420;
})();
if(cljs.core.truth_(inst_37330)){
var statearr_37421_37507 = state_37417__$1;
(statearr_37421_37507[(1)] = (22));

} else {
var statearr_37422_37508 = state_37417__$1;
(statearr_37422_37508[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (27))){
var inst_37289 = (state_37417[(9)]);
var inst_37365 = (state_37417[(10)]);
var inst_37358 = (state_37417[(11)]);
var inst_37360 = (state_37417[(12)]);
var inst_37365__$1 = cljs.core._nth.call(null,inst_37358,inst_37360);
var inst_37366 = cljs.core.async.put_BANG_.call(null,inst_37365__$1,inst_37289,done);
var state_37417__$1 = (function (){var statearr_37423 = state_37417;
(statearr_37423[(10)] = inst_37365__$1);

return statearr_37423;
})();
if(cljs.core.truth_(inst_37366)){
var statearr_37424_37509 = state_37417__$1;
(statearr_37424_37509[(1)] = (30));

} else {
var statearr_37425_37510 = state_37417__$1;
(statearr_37425_37510[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (1))){
var state_37417__$1 = state_37417;
var statearr_37426_37511 = state_37417__$1;
(statearr_37426_37511[(2)] = null);

(statearr_37426_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (24))){
var inst_37318 = (state_37417[(7)]);
var inst_37335 = (state_37417[(2)]);
var inst_37336 = cljs.core.next.call(null,inst_37318);
var inst_37298 = inst_37336;
var inst_37299 = null;
var inst_37300 = (0);
var inst_37301 = (0);
var state_37417__$1 = (function (){var statearr_37427 = state_37417;
(statearr_37427[(13)] = inst_37300);

(statearr_37427[(14)] = inst_37298);

(statearr_37427[(15)] = inst_37299);

(statearr_37427[(16)] = inst_37301);

(statearr_37427[(17)] = inst_37335);

return statearr_37427;
})();
var statearr_37428_37512 = state_37417__$1;
(statearr_37428_37512[(2)] = null);

(statearr_37428_37512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (39))){
var state_37417__$1 = state_37417;
var statearr_37432_37513 = state_37417__$1;
(statearr_37432_37513[(2)] = null);

(statearr_37432_37513[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (4))){
var inst_37289 = (state_37417[(9)]);
var inst_37289__$1 = (state_37417[(2)]);
var inst_37290 = (inst_37289__$1 == null);
var state_37417__$1 = (function (){var statearr_37433 = state_37417;
(statearr_37433[(9)] = inst_37289__$1);

return statearr_37433;
})();
if(cljs.core.truth_(inst_37290)){
var statearr_37434_37514 = state_37417__$1;
(statearr_37434_37514[(1)] = (5));

} else {
var statearr_37435_37515 = state_37417__$1;
(statearr_37435_37515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (15))){
var inst_37300 = (state_37417[(13)]);
var inst_37298 = (state_37417[(14)]);
var inst_37299 = (state_37417[(15)]);
var inst_37301 = (state_37417[(16)]);
var inst_37314 = (state_37417[(2)]);
var inst_37315 = (inst_37301 + (1));
var tmp37429 = inst_37300;
var tmp37430 = inst_37298;
var tmp37431 = inst_37299;
var inst_37298__$1 = tmp37430;
var inst_37299__$1 = tmp37431;
var inst_37300__$1 = tmp37429;
var inst_37301__$1 = inst_37315;
var state_37417__$1 = (function (){var statearr_37436 = state_37417;
(statearr_37436[(13)] = inst_37300__$1);

(statearr_37436[(14)] = inst_37298__$1);

(statearr_37436[(15)] = inst_37299__$1);

(statearr_37436[(16)] = inst_37301__$1);

(statearr_37436[(18)] = inst_37314);

return statearr_37436;
})();
var statearr_37437_37516 = state_37417__$1;
(statearr_37437_37516[(2)] = null);

(statearr_37437_37516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (21))){
var inst_37339 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37441_37517 = state_37417__$1;
(statearr_37441_37517[(2)] = inst_37339);

(statearr_37441_37517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (31))){
var inst_37365 = (state_37417[(10)]);
var inst_37369 = done.call(null,null);
var inst_37370 = cljs.core.async.untap_STAR_.call(null,m,inst_37365);
var state_37417__$1 = (function (){var statearr_37442 = state_37417;
(statearr_37442[(19)] = inst_37369);

return statearr_37442;
})();
var statearr_37443_37518 = state_37417__$1;
(statearr_37443_37518[(2)] = inst_37370);

(statearr_37443_37518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (32))){
var inst_37359 = (state_37417[(20)]);
var inst_37357 = (state_37417[(21)]);
var inst_37358 = (state_37417[(11)]);
var inst_37360 = (state_37417[(12)]);
var inst_37372 = (state_37417[(2)]);
var inst_37373 = (inst_37360 + (1));
var tmp37438 = inst_37359;
var tmp37439 = inst_37357;
var tmp37440 = inst_37358;
var inst_37357__$1 = tmp37439;
var inst_37358__$1 = tmp37440;
var inst_37359__$1 = tmp37438;
var inst_37360__$1 = inst_37373;
var state_37417__$1 = (function (){var statearr_37444 = state_37417;
(statearr_37444[(20)] = inst_37359__$1);

(statearr_37444[(21)] = inst_37357__$1);

(statearr_37444[(11)] = inst_37358__$1);

(statearr_37444[(12)] = inst_37360__$1);

(statearr_37444[(22)] = inst_37372);

return statearr_37444;
})();
var statearr_37445_37519 = state_37417__$1;
(statearr_37445_37519[(2)] = null);

(statearr_37445_37519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (40))){
var inst_37385 = (state_37417[(23)]);
var inst_37389 = done.call(null,null);
var inst_37390 = cljs.core.async.untap_STAR_.call(null,m,inst_37385);
var state_37417__$1 = (function (){var statearr_37446 = state_37417;
(statearr_37446[(24)] = inst_37389);

return statearr_37446;
})();
var statearr_37447_37520 = state_37417__$1;
(statearr_37447_37520[(2)] = inst_37390);

(statearr_37447_37520[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (33))){
var inst_37376 = (state_37417[(25)]);
var inst_37378 = cljs.core.chunked_seq_QMARK_.call(null,inst_37376);
var state_37417__$1 = state_37417;
if(inst_37378){
var statearr_37448_37521 = state_37417__$1;
(statearr_37448_37521[(1)] = (36));

} else {
var statearr_37449_37522 = state_37417__$1;
(statearr_37449_37522[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (13))){
var inst_37308 = (state_37417[(26)]);
var inst_37311 = cljs.core.async.close_BANG_.call(null,inst_37308);
var state_37417__$1 = state_37417;
var statearr_37450_37523 = state_37417__$1;
(statearr_37450_37523[(2)] = inst_37311);

(statearr_37450_37523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (22))){
var inst_37329 = (state_37417[(8)]);
var inst_37332 = cljs.core.async.close_BANG_.call(null,inst_37329);
var state_37417__$1 = state_37417;
var statearr_37451_37524 = state_37417__$1;
(statearr_37451_37524[(2)] = inst_37332);

(statearr_37451_37524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (36))){
var inst_37376 = (state_37417[(25)]);
var inst_37380 = cljs.core.chunk_first.call(null,inst_37376);
var inst_37381 = cljs.core.chunk_rest.call(null,inst_37376);
var inst_37382 = cljs.core.count.call(null,inst_37380);
var inst_37357 = inst_37381;
var inst_37358 = inst_37380;
var inst_37359 = inst_37382;
var inst_37360 = (0);
var state_37417__$1 = (function (){var statearr_37452 = state_37417;
(statearr_37452[(20)] = inst_37359);

(statearr_37452[(21)] = inst_37357);

(statearr_37452[(11)] = inst_37358);

(statearr_37452[(12)] = inst_37360);

return statearr_37452;
})();
var statearr_37453_37525 = state_37417__$1;
(statearr_37453_37525[(2)] = null);

(statearr_37453_37525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (41))){
var inst_37376 = (state_37417[(25)]);
var inst_37392 = (state_37417[(2)]);
var inst_37393 = cljs.core.next.call(null,inst_37376);
var inst_37357 = inst_37393;
var inst_37358 = null;
var inst_37359 = (0);
var inst_37360 = (0);
var state_37417__$1 = (function (){var statearr_37454 = state_37417;
(statearr_37454[(20)] = inst_37359);

(statearr_37454[(21)] = inst_37357);

(statearr_37454[(11)] = inst_37358);

(statearr_37454[(12)] = inst_37360);

(statearr_37454[(27)] = inst_37392);

return statearr_37454;
})();
var statearr_37455_37526 = state_37417__$1;
(statearr_37455_37526[(2)] = null);

(statearr_37455_37526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (43))){
var state_37417__$1 = state_37417;
var statearr_37456_37527 = state_37417__$1;
(statearr_37456_37527[(2)] = null);

(statearr_37456_37527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (29))){
var inst_37401 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37457_37528 = state_37417__$1;
(statearr_37457_37528[(2)] = inst_37401);

(statearr_37457_37528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (44))){
var inst_37410 = (state_37417[(2)]);
var state_37417__$1 = (function (){var statearr_37458 = state_37417;
(statearr_37458[(28)] = inst_37410);

return statearr_37458;
})();
var statearr_37459_37529 = state_37417__$1;
(statearr_37459_37529[(2)] = null);

(statearr_37459_37529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (6))){
var inst_37349 = (state_37417[(29)]);
var inst_37348 = cljs.core.deref.call(null,cs);
var inst_37349__$1 = cljs.core.keys.call(null,inst_37348);
var inst_37350 = cljs.core.count.call(null,inst_37349__$1);
var inst_37351 = cljs.core.reset_BANG_.call(null,dctr,inst_37350);
var inst_37356 = cljs.core.seq.call(null,inst_37349__$1);
var inst_37357 = inst_37356;
var inst_37358 = null;
var inst_37359 = (0);
var inst_37360 = (0);
var state_37417__$1 = (function (){var statearr_37460 = state_37417;
(statearr_37460[(20)] = inst_37359);

(statearr_37460[(29)] = inst_37349__$1);

(statearr_37460[(21)] = inst_37357);

(statearr_37460[(11)] = inst_37358);

(statearr_37460[(30)] = inst_37351);

(statearr_37460[(12)] = inst_37360);

return statearr_37460;
})();
var statearr_37461_37530 = state_37417__$1;
(statearr_37461_37530[(2)] = null);

(statearr_37461_37530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (28))){
var inst_37357 = (state_37417[(21)]);
var inst_37376 = (state_37417[(25)]);
var inst_37376__$1 = cljs.core.seq.call(null,inst_37357);
var state_37417__$1 = (function (){var statearr_37462 = state_37417;
(statearr_37462[(25)] = inst_37376__$1);

return statearr_37462;
})();
if(inst_37376__$1){
var statearr_37463_37531 = state_37417__$1;
(statearr_37463_37531[(1)] = (33));

} else {
var statearr_37464_37532 = state_37417__$1;
(statearr_37464_37532[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (25))){
var inst_37359 = (state_37417[(20)]);
var inst_37360 = (state_37417[(12)]);
var inst_37362 = (inst_37360 < inst_37359);
var inst_37363 = inst_37362;
var state_37417__$1 = state_37417;
if(cljs.core.truth_(inst_37363)){
var statearr_37465_37533 = state_37417__$1;
(statearr_37465_37533[(1)] = (27));

} else {
var statearr_37466_37534 = state_37417__$1;
(statearr_37466_37534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (34))){
var state_37417__$1 = state_37417;
var statearr_37467_37535 = state_37417__$1;
(statearr_37467_37535[(2)] = null);

(statearr_37467_37535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (17))){
var state_37417__$1 = state_37417;
var statearr_37468_37536 = state_37417__$1;
(statearr_37468_37536[(2)] = null);

(statearr_37468_37536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (3))){
var inst_37415 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37417__$1,inst_37415);
} else {
if((state_val_37418 === (12))){
var inst_37344 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37469_37537 = state_37417__$1;
(statearr_37469_37537[(2)] = inst_37344);

(statearr_37469_37537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (2))){
var state_37417__$1 = state_37417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37417__$1,(4),ch);
} else {
if((state_val_37418 === (23))){
var state_37417__$1 = state_37417;
var statearr_37470_37538 = state_37417__$1;
(statearr_37470_37538[(2)] = null);

(statearr_37470_37538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (35))){
var inst_37399 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37471_37539 = state_37417__$1;
(statearr_37471_37539[(2)] = inst_37399);

(statearr_37471_37539[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (19))){
var inst_37318 = (state_37417[(7)]);
var inst_37322 = cljs.core.chunk_first.call(null,inst_37318);
var inst_37323 = cljs.core.chunk_rest.call(null,inst_37318);
var inst_37324 = cljs.core.count.call(null,inst_37322);
var inst_37298 = inst_37323;
var inst_37299 = inst_37322;
var inst_37300 = inst_37324;
var inst_37301 = (0);
var state_37417__$1 = (function (){var statearr_37472 = state_37417;
(statearr_37472[(13)] = inst_37300);

(statearr_37472[(14)] = inst_37298);

(statearr_37472[(15)] = inst_37299);

(statearr_37472[(16)] = inst_37301);

return statearr_37472;
})();
var statearr_37473_37540 = state_37417__$1;
(statearr_37473_37540[(2)] = null);

(statearr_37473_37540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (11))){
var inst_37318 = (state_37417[(7)]);
var inst_37298 = (state_37417[(14)]);
var inst_37318__$1 = cljs.core.seq.call(null,inst_37298);
var state_37417__$1 = (function (){var statearr_37474 = state_37417;
(statearr_37474[(7)] = inst_37318__$1);

return statearr_37474;
})();
if(inst_37318__$1){
var statearr_37475_37541 = state_37417__$1;
(statearr_37475_37541[(1)] = (16));

} else {
var statearr_37476_37542 = state_37417__$1;
(statearr_37476_37542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (9))){
var inst_37346 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37477_37543 = state_37417__$1;
(statearr_37477_37543[(2)] = inst_37346);

(statearr_37477_37543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (5))){
var inst_37296 = cljs.core.deref.call(null,cs);
var inst_37297 = cljs.core.seq.call(null,inst_37296);
var inst_37298 = inst_37297;
var inst_37299 = null;
var inst_37300 = (0);
var inst_37301 = (0);
var state_37417__$1 = (function (){var statearr_37478 = state_37417;
(statearr_37478[(13)] = inst_37300);

(statearr_37478[(14)] = inst_37298);

(statearr_37478[(15)] = inst_37299);

(statearr_37478[(16)] = inst_37301);

return statearr_37478;
})();
var statearr_37479_37544 = state_37417__$1;
(statearr_37479_37544[(2)] = null);

(statearr_37479_37544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (14))){
var state_37417__$1 = state_37417;
var statearr_37480_37545 = state_37417__$1;
(statearr_37480_37545[(2)] = null);

(statearr_37480_37545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (45))){
var inst_37407 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37481_37546 = state_37417__$1;
(statearr_37481_37546[(2)] = inst_37407);

(statearr_37481_37546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (26))){
var inst_37349 = (state_37417[(29)]);
var inst_37403 = (state_37417[(2)]);
var inst_37404 = cljs.core.seq.call(null,inst_37349);
var state_37417__$1 = (function (){var statearr_37482 = state_37417;
(statearr_37482[(31)] = inst_37403);

return statearr_37482;
})();
if(inst_37404){
var statearr_37483_37547 = state_37417__$1;
(statearr_37483_37547[(1)] = (42));

} else {
var statearr_37484_37548 = state_37417__$1;
(statearr_37484_37548[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (16))){
var inst_37318 = (state_37417[(7)]);
var inst_37320 = cljs.core.chunked_seq_QMARK_.call(null,inst_37318);
var state_37417__$1 = state_37417;
if(inst_37320){
var statearr_37485_37549 = state_37417__$1;
(statearr_37485_37549[(1)] = (19));

} else {
var statearr_37486_37550 = state_37417__$1;
(statearr_37486_37550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (38))){
var inst_37396 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37487_37551 = state_37417__$1;
(statearr_37487_37551[(2)] = inst_37396);

(statearr_37487_37551[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (30))){
var state_37417__$1 = state_37417;
var statearr_37488_37552 = state_37417__$1;
(statearr_37488_37552[(2)] = null);

(statearr_37488_37552[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (10))){
var inst_37299 = (state_37417[(15)]);
var inst_37301 = (state_37417[(16)]);
var inst_37307 = cljs.core._nth.call(null,inst_37299,inst_37301);
var inst_37308 = cljs.core.nth.call(null,inst_37307,(0),null);
var inst_37309 = cljs.core.nth.call(null,inst_37307,(1),null);
var state_37417__$1 = (function (){var statearr_37489 = state_37417;
(statearr_37489[(26)] = inst_37308);

return statearr_37489;
})();
if(cljs.core.truth_(inst_37309)){
var statearr_37490_37553 = state_37417__$1;
(statearr_37490_37553[(1)] = (13));

} else {
var statearr_37491_37554 = state_37417__$1;
(statearr_37491_37554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (18))){
var inst_37342 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37492_37555 = state_37417__$1;
(statearr_37492_37555[(2)] = inst_37342);

(statearr_37492_37555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (42))){
var state_37417__$1 = state_37417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37417__$1,(45),dchan);
} else {
if((state_val_37418 === (37))){
var inst_37385 = (state_37417[(23)]);
var inst_37289 = (state_37417[(9)]);
var inst_37376 = (state_37417[(25)]);
var inst_37385__$1 = cljs.core.first.call(null,inst_37376);
var inst_37386 = cljs.core.async.put_BANG_.call(null,inst_37385__$1,inst_37289,done);
var state_37417__$1 = (function (){var statearr_37493 = state_37417;
(statearr_37493[(23)] = inst_37385__$1);

return statearr_37493;
})();
if(cljs.core.truth_(inst_37386)){
var statearr_37494_37556 = state_37417__$1;
(statearr_37494_37556[(1)] = (39));

} else {
var statearr_37495_37557 = state_37417__$1;
(statearr_37495_37557[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (8))){
var inst_37300 = (state_37417[(13)]);
var inst_37301 = (state_37417[(16)]);
var inst_37303 = (inst_37301 < inst_37300);
var inst_37304 = inst_37303;
var state_37417__$1 = state_37417;
if(cljs.core.truth_(inst_37304)){
var statearr_37496_37558 = state_37417__$1;
(statearr_37496_37558[(1)] = (10));

} else {
var statearr_37497_37559 = state_37417__$1;
(statearr_37497_37559[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29976__auto___37505,cs,m,dchan,dctr,done))
;
return ((function (switch__29914__auto__,c__29976__auto___37505,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29915__auto__ = null;
var cljs$core$async$mult_$_state_machine__29915__auto____0 = (function (){
var statearr_37501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37501[(0)] = cljs$core$async$mult_$_state_machine__29915__auto__);

(statearr_37501[(1)] = (1));

return statearr_37501;
});
var cljs$core$async$mult_$_state_machine__29915__auto____1 = (function (state_37417){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_37417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e37502){if((e37502 instanceof Object)){
var ex__29918__auto__ = e37502;
var statearr_37503_37560 = state_37417;
(statearr_37503_37560[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37561 = state_37417;
state_37417 = G__37561;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29915__auto__ = function(state_37417){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29915__auto____1.call(this,state_37417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29915__auto____0;
cljs$core$async$mult_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29915__auto____1;
return cljs$core$async$mult_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___37505,cs,m,dchan,dctr,done))
})();
var state__29978__auto__ = (function (){var statearr_37504 = f__29977__auto__.call(null);
(statearr_37504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___37505);

return statearr_37504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___37505,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__37563 = arguments.length;
switch (G__37563) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj37566 = {};
return obj37566;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24651__auto__ = m;
if(and__24651__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25299__auto__ = (((m == null))?null:m);
return (function (){var or__24663__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25703__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25703__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37571){
var map__37572 = p__37571;
var map__37572__$1 = ((cljs.core.seq_QMARK_.call(null,map__37572))?cljs.core.apply.call(null,cljs.core.hash_map,map__37572):map__37572);
var opts = map__37572__$1;
var statearr_37573_37576 = state;
(statearr_37573_37576[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__37572,map__37572__$1,opts){
return (function (val){
var statearr_37574_37577 = state;
(statearr_37574_37577[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37572,map__37572__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_37575_37578 = state;
(statearr_37575_37578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37567){
var G__37568 = cljs.core.first.call(null,seq37567);
var seq37567__$1 = cljs.core.next.call(null,seq37567);
var G__37569 = cljs.core.first.call(null,seq37567__$1);
var seq37567__$2 = cljs.core.next.call(null,seq37567__$1);
var G__37570 = cljs.core.first.call(null,seq37567__$2);
var seq37567__$3 = cljs.core.next.call(null,seq37567__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37568,G__37569,G__37570,seq37567__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t37698 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37698 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37699){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37699 = meta37699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37700,meta37699__$1){
var self__ = this;
var _37700__$1 = this;
return (new cljs.core.async.t37698(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37699__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37700){
var self__ = this;
var _37700__$1 = this;
return self__.meta37699;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37699","meta37699",1181552368,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37698.cljs$lang$type = true;

cljs.core.async.t37698.cljs$lang$ctorStr = "cljs.core.async/t37698";

cljs.core.async.t37698.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t37698");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37698 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t37698(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37699){
return (new cljs.core.async.t37698(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37699));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37698(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29976__auto___37817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37770){
var state_val_37771 = (state_37770[(1)]);
if((state_val_37771 === (7))){
var inst_37714 = (state_37770[(7)]);
var inst_37719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37714);
var state_37770__$1 = state_37770;
var statearr_37772_37818 = state_37770__$1;
(statearr_37772_37818[(2)] = inst_37719);

(statearr_37772_37818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (20))){
var inst_37729 = (state_37770[(8)]);
var state_37770__$1 = state_37770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37770__$1,(23),out,inst_37729);
} else {
if((state_val_37771 === (1))){
var inst_37704 = (state_37770[(9)]);
var inst_37704__$1 = calc_state.call(null);
var inst_37705 = cljs.core.seq_QMARK_.call(null,inst_37704__$1);
var state_37770__$1 = (function (){var statearr_37773 = state_37770;
(statearr_37773[(9)] = inst_37704__$1);

return statearr_37773;
})();
if(inst_37705){
var statearr_37774_37819 = state_37770__$1;
(statearr_37774_37819[(1)] = (2));

} else {
var statearr_37775_37820 = state_37770__$1;
(statearr_37775_37820[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (24))){
var inst_37722 = (state_37770[(10)]);
var inst_37714 = inst_37722;
var state_37770__$1 = (function (){var statearr_37776 = state_37770;
(statearr_37776[(7)] = inst_37714);

return statearr_37776;
})();
var statearr_37777_37821 = state_37770__$1;
(statearr_37777_37821[(2)] = null);

(statearr_37777_37821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (4))){
var inst_37704 = (state_37770[(9)]);
var inst_37710 = (state_37770[(2)]);
var inst_37711 = cljs.core.get.call(null,inst_37710,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37712 = cljs.core.get.call(null,inst_37710,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37713 = cljs.core.get.call(null,inst_37710,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37714 = inst_37704;
var state_37770__$1 = (function (){var statearr_37778 = state_37770;
(statearr_37778[(7)] = inst_37714);

(statearr_37778[(11)] = inst_37713);

(statearr_37778[(12)] = inst_37711);

(statearr_37778[(13)] = inst_37712);

return statearr_37778;
})();
var statearr_37779_37822 = state_37770__$1;
(statearr_37779_37822[(2)] = null);

(statearr_37779_37822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (15))){
var state_37770__$1 = state_37770;
var statearr_37780_37823 = state_37770__$1;
(statearr_37780_37823[(2)] = null);

(statearr_37780_37823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (21))){
var inst_37722 = (state_37770[(10)]);
var inst_37714 = inst_37722;
var state_37770__$1 = (function (){var statearr_37781 = state_37770;
(statearr_37781[(7)] = inst_37714);

return statearr_37781;
})();
var statearr_37782_37824 = state_37770__$1;
(statearr_37782_37824[(2)] = null);

(statearr_37782_37824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (13))){
var inst_37766 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
var statearr_37783_37825 = state_37770__$1;
(statearr_37783_37825[(2)] = inst_37766);

(statearr_37783_37825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (22))){
var inst_37764 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
var statearr_37784_37826 = state_37770__$1;
(statearr_37784_37826[(2)] = inst_37764);

(statearr_37784_37826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (6))){
var inst_37768 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37770__$1,inst_37768);
} else {
if((state_val_37771 === (25))){
var state_37770__$1 = state_37770;
var statearr_37785_37827 = state_37770__$1;
(statearr_37785_37827[(2)] = null);

(statearr_37785_37827[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (17))){
var inst_37744 = (state_37770[(14)]);
var state_37770__$1 = state_37770;
var statearr_37786_37828 = state_37770__$1;
(statearr_37786_37828[(2)] = inst_37744);

(statearr_37786_37828[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (3))){
var inst_37704 = (state_37770[(9)]);
var state_37770__$1 = state_37770;
var statearr_37787_37829 = state_37770__$1;
(statearr_37787_37829[(2)] = inst_37704);

(statearr_37787_37829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (12))){
var inst_37723 = (state_37770[(15)]);
var inst_37730 = (state_37770[(16)]);
var inst_37744 = (state_37770[(14)]);
var inst_37744__$1 = inst_37723.call(null,inst_37730);
var state_37770__$1 = (function (){var statearr_37788 = state_37770;
(statearr_37788[(14)] = inst_37744__$1);

return statearr_37788;
})();
if(cljs.core.truth_(inst_37744__$1)){
var statearr_37789_37830 = state_37770__$1;
(statearr_37789_37830[(1)] = (17));

} else {
var statearr_37790_37831 = state_37770__$1;
(statearr_37790_37831[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (2))){
var inst_37704 = (state_37770[(9)]);
var inst_37707 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37704);
var state_37770__$1 = state_37770;
var statearr_37791_37832 = state_37770__$1;
(statearr_37791_37832[(2)] = inst_37707);

(statearr_37791_37832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (23))){
var inst_37755 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
if(cljs.core.truth_(inst_37755)){
var statearr_37792_37833 = state_37770__$1;
(statearr_37792_37833[(1)] = (24));

} else {
var statearr_37793_37834 = state_37770__$1;
(statearr_37793_37834[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (19))){
var inst_37752 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
if(cljs.core.truth_(inst_37752)){
var statearr_37794_37835 = state_37770__$1;
(statearr_37794_37835[(1)] = (20));

} else {
var statearr_37795_37836 = state_37770__$1;
(statearr_37795_37836[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (11))){
var inst_37729 = (state_37770[(8)]);
var inst_37735 = (inst_37729 == null);
var state_37770__$1 = state_37770;
if(cljs.core.truth_(inst_37735)){
var statearr_37796_37837 = state_37770__$1;
(statearr_37796_37837[(1)] = (14));

} else {
var statearr_37797_37838 = state_37770__$1;
(statearr_37797_37838[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (9))){
var inst_37722 = (state_37770[(10)]);
var inst_37722__$1 = (state_37770[(2)]);
var inst_37723 = cljs.core.get.call(null,inst_37722__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37724 = cljs.core.get.call(null,inst_37722__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37725 = cljs.core.get.call(null,inst_37722__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37770__$1 = (function (){var statearr_37798 = state_37770;
(statearr_37798[(15)] = inst_37723);

(statearr_37798[(17)] = inst_37724);

(statearr_37798[(10)] = inst_37722__$1);

return statearr_37798;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37770__$1,(10),inst_37725);
} else {
if((state_val_37771 === (5))){
var inst_37714 = (state_37770[(7)]);
var inst_37717 = cljs.core.seq_QMARK_.call(null,inst_37714);
var state_37770__$1 = state_37770;
if(inst_37717){
var statearr_37799_37839 = state_37770__$1;
(statearr_37799_37839[(1)] = (7));

} else {
var statearr_37800_37840 = state_37770__$1;
(statearr_37800_37840[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (14))){
var inst_37730 = (state_37770[(16)]);
var inst_37737 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37730);
var state_37770__$1 = state_37770;
var statearr_37801_37841 = state_37770__$1;
(statearr_37801_37841[(2)] = inst_37737);

(statearr_37801_37841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (26))){
var inst_37760 = (state_37770[(2)]);
var state_37770__$1 = state_37770;
var statearr_37802_37842 = state_37770__$1;
(statearr_37802_37842[(2)] = inst_37760);

(statearr_37802_37842[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (16))){
var inst_37740 = (state_37770[(2)]);
var inst_37741 = calc_state.call(null);
var inst_37714 = inst_37741;
var state_37770__$1 = (function (){var statearr_37803 = state_37770;
(statearr_37803[(7)] = inst_37714);

(statearr_37803[(18)] = inst_37740);

return statearr_37803;
})();
var statearr_37804_37843 = state_37770__$1;
(statearr_37804_37843[(2)] = null);

(statearr_37804_37843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (10))){
var inst_37729 = (state_37770[(8)]);
var inst_37730 = (state_37770[(16)]);
var inst_37728 = (state_37770[(2)]);
var inst_37729__$1 = cljs.core.nth.call(null,inst_37728,(0),null);
var inst_37730__$1 = cljs.core.nth.call(null,inst_37728,(1),null);
var inst_37731 = (inst_37729__$1 == null);
var inst_37732 = cljs.core._EQ_.call(null,inst_37730__$1,change);
var inst_37733 = (inst_37731) || (inst_37732);
var state_37770__$1 = (function (){var statearr_37805 = state_37770;
(statearr_37805[(8)] = inst_37729__$1);

(statearr_37805[(16)] = inst_37730__$1);

return statearr_37805;
})();
if(cljs.core.truth_(inst_37733)){
var statearr_37806_37844 = state_37770__$1;
(statearr_37806_37844[(1)] = (11));

} else {
var statearr_37807_37845 = state_37770__$1;
(statearr_37807_37845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (18))){
var inst_37723 = (state_37770[(15)]);
var inst_37724 = (state_37770[(17)]);
var inst_37730 = (state_37770[(16)]);
var inst_37747 = cljs.core.empty_QMARK_.call(null,inst_37723);
var inst_37748 = inst_37724.call(null,inst_37730);
var inst_37749 = cljs.core.not.call(null,inst_37748);
var inst_37750 = (inst_37747) && (inst_37749);
var state_37770__$1 = state_37770;
var statearr_37808_37846 = state_37770__$1;
(statearr_37808_37846[(2)] = inst_37750);

(statearr_37808_37846[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37771 === (8))){
var inst_37714 = (state_37770[(7)]);
var state_37770__$1 = state_37770;
var statearr_37809_37847 = state_37770__$1;
(statearr_37809_37847[(2)] = inst_37714);

(statearr_37809_37847[(1)] = (9));


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
});})(c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29914__auto__,c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29915__auto__ = null;
var cljs$core$async$mix_$_state_machine__29915__auto____0 = (function (){
var statearr_37813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37813[(0)] = cljs$core$async$mix_$_state_machine__29915__auto__);

(statearr_37813[(1)] = (1));

return statearr_37813;
});
var cljs$core$async$mix_$_state_machine__29915__auto____1 = (function (state_37770){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_37770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e37814){if((e37814 instanceof Object)){
var ex__29918__auto__ = e37814;
var statearr_37815_37848 = state_37770;
(statearr_37815_37848[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37849 = state_37770;
state_37770 = G__37849;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29915__auto__ = function(state_37770){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29915__auto____1.call(this,state_37770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29915__auto____0;
cljs$core$async$mix_$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29915__auto____1;
return cljs$core$async$mix_$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29978__auto__ = (function (){var statearr_37816 = f__29977__auto__.call(null);
(statearr_37816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___37817);

return statearr_37816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___37817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj37851 = {};
return obj37851;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24651__auto__ = p;
if(and__24651__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24651__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25299__auto__ = (((p == null))?null:p);
return (function (){var or__24663__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24651__auto__ = p;
if(and__24651__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25299__auto__ = (((p == null))?null:p);
return (function (){var or__24663__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__37853 = arguments.length;
switch (G__37853) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__24651__auto__ = p;
if(and__24651__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25299__auto__ = (((p == null))?null:p);
return (function (){var or__24663__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24651__auto__ = p;
if(and__24651__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25299__auto__ = (((p == null))?null:p);
return (function (){var or__24663__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25299__auto__)]);
if(or__24663__auto__){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24663__auto____$1){
return or__24663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__37857 = arguments.length;
switch (G__37857) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24663__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24663__auto__,mults){
return (function (p1__37855_SHARP_){
if(cljs.core.truth_(p1__37855_SHARP_.call(null,topic))){
return p1__37855_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37855_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24663__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37859 = meta37859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37860,meta37859__$1){
var self__ = this;
var _37860__$1 = this;
return (new cljs.core.async.t37858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37859__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37860){
var self__ = this;
var _37860__$1 = this;
return self__.meta37859;
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37858.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37859","meta37859",-984530420,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t37858.cljs$lang$type = true;

cljs.core.async.t37858.cljs$lang$ctorStr = "cljs.core.async/t37858";

cljs.core.async.t37858.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t37858");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37858 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t37858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37859){
return (new cljs.core.async.t37858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37859));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29976__auto___37981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___37981,mults,ensure_mult,p){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___37981,mults,ensure_mult,p){
return (function (state_37932){
var state_val_37933 = (state_37932[(1)]);
if((state_val_37933 === (7))){
var inst_37928 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37934_37982 = state_37932__$1;
(statearr_37934_37982[(2)] = inst_37928);

(statearr_37934_37982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (20))){
var state_37932__$1 = state_37932;
var statearr_37935_37983 = state_37932__$1;
(statearr_37935_37983[(2)] = null);

(statearr_37935_37983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (1))){
var state_37932__$1 = state_37932;
var statearr_37936_37984 = state_37932__$1;
(statearr_37936_37984[(2)] = null);

(statearr_37936_37984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (24))){
var inst_37911 = (state_37932[(7)]);
var inst_37920 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37911);
var state_37932__$1 = state_37932;
var statearr_37937_37985 = state_37932__$1;
(statearr_37937_37985[(2)] = inst_37920);

(statearr_37937_37985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (4))){
var inst_37863 = (state_37932[(8)]);
var inst_37863__$1 = (state_37932[(2)]);
var inst_37864 = (inst_37863__$1 == null);
var state_37932__$1 = (function (){var statearr_37938 = state_37932;
(statearr_37938[(8)] = inst_37863__$1);

return statearr_37938;
})();
if(cljs.core.truth_(inst_37864)){
var statearr_37939_37986 = state_37932__$1;
(statearr_37939_37986[(1)] = (5));

} else {
var statearr_37940_37987 = state_37932__$1;
(statearr_37940_37987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (15))){
var inst_37905 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37941_37988 = state_37932__$1;
(statearr_37941_37988[(2)] = inst_37905);

(statearr_37941_37988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (21))){
var inst_37925 = (state_37932[(2)]);
var state_37932__$1 = (function (){var statearr_37942 = state_37932;
(statearr_37942[(9)] = inst_37925);

return statearr_37942;
})();
var statearr_37943_37989 = state_37932__$1;
(statearr_37943_37989[(2)] = null);

(statearr_37943_37989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (13))){
var inst_37887 = (state_37932[(10)]);
var inst_37889 = cljs.core.chunked_seq_QMARK_.call(null,inst_37887);
var state_37932__$1 = state_37932;
if(inst_37889){
var statearr_37944_37990 = state_37932__$1;
(statearr_37944_37990[(1)] = (16));

} else {
var statearr_37945_37991 = state_37932__$1;
(statearr_37945_37991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (22))){
var inst_37917 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37917)){
var statearr_37946_37992 = state_37932__$1;
(statearr_37946_37992[(1)] = (23));

} else {
var statearr_37947_37993 = state_37932__$1;
(statearr_37947_37993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (6))){
var inst_37911 = (state_37932[(7)]);
var inst_37863 = (state_37932[(8)]);
var inst_37913 = (state_37932[(11)]);
var inst_37911__$1 = topic_fn.call(null,inst_37863);
var inst_37912 = cljs.core.deref.call(null,mults);
var inst_37913__$1 = cljs.core.get.call(null,inst_37912,inst_37911__$1);
var state_37932__$1 = (function (){var statearr_37948 = state_37932;
(statearr_37948[(7)] = inst_37911__$1);

(statearr_37948[(11)] = inst_37913__$1);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37913__$1)){
var statearr_37949_37994 = state_37932__$1;
(statearr_37949_37994[(1)] = (19));

} else {
var statearr_37950_37995 = state_37932__$1;
(statearr_37950_37995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (25))){
var inst_37922 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37951_37996 = state_37932__$1;
(statearr_37951_37996[(2)] = inst_37922);

(statearr_37951_37996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (17))){
var inst_37887 = (state_37932[(10)]);
var inst_37896 = cljs.core.first.call(null,inst_37887);
var inst_37897 = cljs.core.async.muxch_STAR_.call(null,inst_37896);
var inst_37898 = cljs.core.async.close_BANG_.call(null,inst_37897);
var inst_37899 = cljs.core.next.call(null,inst_37887);
var inst_37873 = inst_37899;
var inst_37874 = null;
var inst_37875 = (0);
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37952 = state_37932;
(statearr_37952[(12)] = inst_37898);

(statearr_37952[(13)] = inst_37874);

(statearr_37952[(14)] = inst_37873);

(statearr_37952[(15)] = inst_37876);

(statearr_37952[(16)] = inst_37875);

return statearr_37952;
})();
var statearr_37953_37997 = state_37932__$1;
(statearr_37953_37997[(2)] = null);

(statearr_37953_37997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (3))){
var inst_37930 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37932__$1,inst_37930);
} else {
if((state_val_37933 === (12))){
var inst_37907 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37954_37998 = state_37932__$1;
(statearr_37954_37998[(2)] = inst_37907);

(statearr_37954_37998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (2))){
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(4),ch);
} else {
if((state_val_37933 === (23))){
var state_37932__$1 = state_37932;
var statearr_37955_37999 = state_37932__$1;
(statearr_37955_37999[(2)] = null);

(statearr_37955_37999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (19))){
var inst_37863 = (state_37932[(8)]);
var inst_37913 = (state_37932[(11)]);
var inst_37915 = cljs.core.async.muxch_STAR_.call(null,inst_37913);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37932__$1,(22),inst_37915,inst_37863);
} else {
if((state_val_37933 === (11))){
var inst_37887 = (state_37932[(10)]);
var inst_37873 = (state_37932[(14)]);
var inst_37887__$1 = cljs.core.seq.call(null,inst_37873);
var state_37932__$1 = (function (){var statearr_37956 = state_37932;
(statearr_37956[(10)] = inst_37887__$1);

return statearr_37956;
})();
if(inst_37887__$1){
var statearr_37957_38000 = state_37932__$1;
(statearr_37957_38000[(1)] = (13));

} else {
var statearr_37958_38001 = state_37932__$1;
(statearr_37958_38001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (9))){
var inst_37909 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37959_38002 = state_37932__$1;
(statearr_37959_38002[(2)] = inst_37909);

(statearr_37959_38002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (5))){
var inst_37870 = cljs.core.deref.call(null,mults);
var inst_37871 = cljs.core.vals.call(null,inst_37870);
var inst_37872 = cljs.core.seq.call(null,inst_37871);
var inst_37873 = inst_37872;
var inst_37874 = null;
var inst_37875 = (0);
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37960 = state_37932;
(statearr_37960[(13)] = inst_37874);

(statearr_37960[(14)] = inst_37873);

(statearr_37960[(15)] = inst_37876);

(statearr_37960[(16)] = inst_37875);

return statearr_37960;
})();
var statearr_37961_38003 = state_37932__$1;
(statearr_37961_38003[(2)] = null);

(statearr_37961_38003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (14))){
var state_37932__$1 = state_37932;
var statearr_37965_38004 = state_37932__$1;
(statearr_37965_38004[(2)] = null);

(statearr_37965_38004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (16))){
var inst_37887 = (state_37932[(10)]);
var inst_37891 = cljs.core.chunk_first.call(null,inst_37887);
var inst_37892 = cljs.core.chunk_rest.call(null,inst_37887);
var inst_37893 = cljs.core.count.call(null,inst_37891);
var inst_37873 = inst_37892;
var inst_37874 = inst_37891;
var inst_37875 = inst_37893;
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37966 = state_37932;
(statearr_37966[(13)] = inst_37874);

(statearr_37966[(14)] = inst_37873);

(statearr_37966[(15)] = inst_37876);

(statearr_37966[(16)] = inst_37875);

return statearr_37966;
})();
var statearr_37967_38005 = state_37932__$1;
(statearr_37967_38005[(2)] = null);

(statearr_37967_38005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (10))){
var inst_37874 = (state_37932[(13)]);
var inst_37873 = (state_37932[(14)]);
var inst_37876 = (state_37932[(15)]);
var inst_37875 = (state_37932[(16)]);
var inst_37881 = cljs.core._nth.call(null,inst_37874,inst_37876);
var inst_37882 = cljs.core.async.muxch_STAR_.call(null,inst_37881);
var inst_37883 = cljs.core.async.close_BANG_.call(null,inst_37882);
var inst_37884 = (inst_37876 + (1));
var tmp37962 = inst_37874;
var tmp37963 = inst_37873;
var tmp37964 = inst_37875;
var inst_37873__$1 = tmp37963;
var inst_37874__$1 = tmp37962;
var inst_37875__$1 = tmp37964;
var inst_37876__$1 = inst_37884;
var state_37932__$1 = (function (){var statearr_37968 = state_37932;
(statearr_37968[(13)] = inst_37874__$1);

(statearr_37968[(14)] = inst_37873__$1);

(statearr_37968[(15)] = inst_37876__$1);

(statearr_37968[(17)] = inst_37883);

(statearr_37968[(16)] = inst_37875__$1);

return statearr_37968;
})();
var statearr_37969_38006 = state_37932__$1;
(statearr_37969_38006[(2)] = null);

(statearr_37969_38006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (18))){
var inst_37902 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37970_38007 = state_37932__$1;
(statearr_37970_38007[(2)] = inst_37902);

(statearr_37970_38007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (8))){
var inst_37876 = (state_37932[(15)]);
var inst_37875 = (state_37932[(16)]);
var inst_37878 = (inst_37876 < inst_37875);
var inst_37879 = inst_37878;
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37879)){
var statearr_37971_38008 = state_37932__$1;
(statearr_37971_38008[(1)] = (10));

} else {
var statearr_37972_38009 = state_37932__$1;
(statearr_37972_38009[(1)] = (11));

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
});})(c__29976__auto___37981,mults,ensure_mult,p))
;
return ((function (switch__29914__auto__,c__29976__auto___37981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_37976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37976[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_37976[(1)] = (1));

return statearr_37976;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_37932){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_37932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e37977){if((e37977 instanceof Object)){
var ex__29918__auto__ = e37977;
var statearr_37978_38010 = state_37932;
(statearr_37978_38010[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38011 = state_37932;
state_37932 = G__38011;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_37932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_37932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___37981,mults,ensure_mult,p))
})();
var state__29978__auto__ = (function (){var statearr_37979 = f__29977__auto__.call(null);
(statearr_37979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___37981);

return statearr_37979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___37981,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__38013 = arguments.length;
switch (G__38013) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__38016 = arguments.length;
switch (G__38016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__38019 = arguments.length;
switch (G__38019) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29976__auto___38089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38058){
var state_val_38059 = (state_38058[(1)]);
if((state_val_38059 === (7))){
var state_38058__$1 = state_38058;
var statearr_38060_38090 = state_38058__$1;
(statearr_38060_38090[(2)] = null);

(statearr_38060_38090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (1))){
var state_38058__$1 = state_38058;
var statearr_38061_38091 = state_38058__$1;
(statearr_38061_38091[(2)] = null);

(statearr_38061_38091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (4))){
var inst_38022 = (state_38058[(7)]);
var inst_38024 = (inst_38022 < cnt);
var state_38058__$1 = state_38058;
if(cljs.core.truth_(inst_38024)){
var statearr_38062_38092 = state_38058__$1;
(statearr_38062_38092[(1)] = (6));

} else {
var statearr_38063_38093 = state_38058__$1;
(statearr_38063_38093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (15))){
var inst_38054 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38064_38094 = state_38058__$1;
(statearr_38064_38094[(2)] = inst_38054);

(statearr_38064_38094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (13))){
var inst_38047 = cljs.core.async.close_BANG_.call(null,out);
var state_38058__$1 = state_38058;
var statearr_38065_38095 = state_38058__$1;
(statearr_38065_38095[(2)] = inst_38047);

(statearr_38065_38095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (6))){
var state_38058__$1 = state_38058;
var statearr_38066_38096 = state_38058__$1;
(statearr_38066_38096[(2)] = null);

(statearr_38066_38096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (3))){
var inst_38056 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38058__$1,inst_38056);
} else {
if((state_val_38059 === (12))){
var inst_38044 = (state_38058[(8)]);
var inst_38044__$1 = (state_38058[(2)]);
var inst_38045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38044__$1);
var state_38058__$1 = (function (){var statearr_38067 = state_38058;
(statearr_38067[(8)] = inst_38044__$1);

return statearr_38067;
})();
if(cljs.core.truth_(inst_38045)){
var statearr_38068_38097 = state_38058__$1;
(statearr_38068_38097[(1)] = (13));

} else {
var statearr_38069_38098 = state_38058__$1;
(statearr_38069_38098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (2))){
var inst_38021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38022 = (0);
var state_38058__$1 = (function (){var statearr_38070 = state_38058;
(statearr_38070[(9)] = inst_38021);

(statearr_38070[(7)] = inst_38022);

return statearr_38070;
})();
var statearr_38071_38099 = state_38058__$1;
(statearr_38071_38099[(2)] = null);

(statearr_38071_38099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (11))){
var inst_38022 = (state_38058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38058,(10),Object,null,(9));
var inst_38031 = chs__$1.call(null,inst_38022);
var inst_38032 = done.call(null,inst_38022);
var inst_38033 = cljs.core.async.take_BANG_.call(null,inst_38031,inst_38032);
var state_38058__$1 = state_38058;
var statearr_38072_38100 = state_38058__$1;
(statearr_38072_38100[(2)] = inst_38033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (9))){
var inst_38022 = (state_38058[(7)]);
var inst_38035 = (state_38058[(2)]);
var inst_38036 = (inst_38022 + (1));
var inst_38022__$1 = inst_38036;
var state_38058__$1 = (function (){var statearr_38073 = state_38058;
(statearr_38073[(7)] = inst_38022__$1);

(statearr_38073[(10)] = inst_38035);

return statearr_38073;
})();
var statearr_38074_38101 = state_38058__$1;
(statearr_38074_38101[(2)] = null);

(statearr_38074_38101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (5))){
var inst_38042 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38075 = state_38058;
(statearr_38075[(11)] = inst_38042);

return statearr_38075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38058__$1,(12),dchan);
} else {
if((state_val_38059 === (14))){
var inst_38044 = (state_38058[(8)]);
var inst_38049 = cljs.core.apply.call(null,f,inst_38044);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38058__$1,(16),out,inst_38049);
} else {
if((state_val_38059 === (16))){
var inst_38051 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38076 = state_38058;
(statearr_38076[(12)] = inst_38051);

return statearr_38076;
})();
var statearr_38077_38102 = state_38058__$1;
(statearr_38077_38102[(2)] = null);

(statearr_38077_38102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (10))){
var inst_38026 = (state_38058[(2)]);
var inst_38027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38058__$1 = (function (){var statearr_38078 = state_38058;
(statearr_38078[(13)] = inst_38026);

return statearr_38078;
})();
var statearr_38079_38103 = state_38058__$1;
(statearr_38079_38103[(2)] = inst_38027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (8))){
var inst_38040 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38080_38104 = state_38058__$1;
(statearr_38080_38104[(2)] = inst_38040);

(statearr_38080_38104[(1)] = (5));


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
});})(c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29914__auto__,c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38084[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38084[(1)] = (1));

return statearr_38084;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38058){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38085){if((e38085 instanceof Object)){
var ex__29918__auto__ = e38085;
var statearr_38086_38105 = state_38058;
(statearr_38086_38105[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_38058;
state_38058 = G__38106;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29978__auto__ = (function (){var statearr_38087 = f__29977__auto__.call(null);
(statearr_38087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38089);

return statearr_38087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38089,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__38109 = arguments.length;
switch (G__38109) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38164,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38164,out){
return (function (state_38139){
var state_val_38140 = (state_38139[(1)]);
if((state_val_38140 === (7))){
var inst_38119 = (state_38139[(7)]);
var inst_38118 = (state_38139[(8)]);
var inst_38118__$1 = (state_38139[(2)]);
var inst_38119__$1 = cljs.core.nth.call(null,inst_38118__$1,(0),null);
var inst_38120 = cljs.core.nth.call(null,inst_38118__$1,(1),null);
var inst_38121 = (inst_38119__$1 == null);
var state_38139__$1 = (function (){var statearr_38141 = state_38139;
(statearr_38141[(7)] = inst_38119__$1);

(statearr_38141[(9)] = inst_38120);

(statearr_38141[(8)] = inst_38118__$1);

return statearr_38141;
})();
if(cljs.core.truth_(inst_38121)){
var statearr_38142_38165 = state_38139__$1;
(statearr_38142_38165[(1)] = (8));

} else {
var statearr_38143_38166 = state_38139__$1;
(statearr_38143_38166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (1))){
var inst_38110 = cljs.core.vec.call(null,chs);
var inst_38111 = inst_38110;
var state_38139__$1 = (function (){var statearr_38144 = state_38139;
(statearr_38144[(10)] = inst_38111);

return statearr_38144;
})();
var statearr_38145_38167 = state_38139__$1;
(statearr_38145_38167[(2)] = null);

(statearr_38145_38167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (4))){
var inst_38111 = (state_38139[(10)]);
var state_38139__$1 = state_38139;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38139__$1,(7),inst_38111);
} else {
if((state_val_38140 === (6))){
var inst_38135 = (state_38139[(2)]);
var state_38139__$1 = state_38139;
var statearr_38146_38168 = state_38139__$1;
(statearr_38146_38168[(2)] = inst_38135);

(statearr_38146_38168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (3))){
var inst_38137 = (state_38139[(2)]);
var state_38139__$1 = state_38139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38139__$1,inst_38137);
} else {
if((state_val_38140 === (2))){
var inst_38111 = (state_38139[(10)]);
var inst_38113 = cljs.core.count.call(null,inst_38111);
var inst_38114 = (inst_38113 > (0));
var state_38139__$1 = state_38139;
if(cljs.core.truth_(inst_38114)){
var statearr_38148_38169 = state_38139__$1;
(statearr_38148_38169[(1)] = (4));

} else {
var statearr_38149_38170 = state_38139__$1;
(statearr_38149_38170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (11))){
var inst_38111 = (state_38139[(10)]);
var inst_38128 = (state_38139[(2)]);
var tmp38147 = inst_38111;
var inst_38111__$1 = tmp38147;
var state_38139__$1 = (function (){var statearr_38150 = state_38139;
(statearr_38150[(11)] = inst_38128);

(statearr_38150[(10)] = inst_38111__$1);

return statearr_38150;
})();
var statearr_38151_38171 = state_38139__$1;
(statearr_38151_38171[(2)] = null);

(statearr_38151_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (9))){
var inst_38119 = (state_38139[(7)]);
var state_38139__$1 = state_38139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38139__$1,(11),out,inst_38119);
} else {
if((state_val_38140 === (5))){
var inst_38133 = cljs.core.async.close_BANG_.call(null,out);
var state_38139__$1 = state_38139;
var statearr_38152_38172 = state_38139__$1;
(statearr_38152_38172[(2)] = inst_38133);

(statearr_38152_38172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (10))){
var inst_38131 = (state_38139[(2)]);
var state_38139__$1 = state_38139;
var statearr_38153_38173 = state_38139__$1;
(statearr_38153_38173[(2)] = inst_38131);

(statearr_38153_38173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38140 === (8))){
var inst_38111 = (state_38139[(10)]);
var inst_38119 = (state_38139[(7)]);
var inst_38120 = (state_38139[(9)]);
var inst_38118 = (state_38139[(8)]);
var inst_38123 = (function (){var cs = inst_38111;
var vec__38116 = inst_38118;
var v = inst_38119;
var c = inst_38120;
return ((function (cs,vec__38116,v,c,inst_38111,inst_38119,inst_38120,inst_38118,state_val_38140,c__29976__auto___38164,out){
return (function (p1__38107_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38107_SHARP_);
});
;})(cs,vec__38116,v,c,inst_38111,inst_38119,inst_38120,inst_38118,state_val_38140,c__29976__auto___38164,out))
})();
var inst_38124 = cljs.core.filterv.call(null,inst_38123,inst_38111);
var inst_38111__$1 = inst_38124;
var state_38139__$1 = (function (){var statearr_38154 = state_38139;
(statearr_38154[(10)] = inst_38111__$1);

return statearr_38154;
})();
var statearr_38155_38174 = state_38139__$1;
(statearr_38155_38174[(2)] = null);

(statearr_38155_38174[(1)] = (2));


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
});})(c__29976__auto___38164,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38164,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38159[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38159[(1)] = (1));

return statearr_38159;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38139){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38160){if((e38160 instanceof Object)){
var ex__29918__auto__ = e38160;
var statearr_38161_38175 = state_38139;
(statearr_38161_38175[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38176 = state_38139;
state_38139 = G__38176;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38164,out))
})();
var state__29978__auto__ = (function (){var statearr_38162 = f__29977__auto__.call(null);
(statearr_38162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38164);

return statearr_38162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38164,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__38178 = arguments.length;
switch (G__38178) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38226,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38226,out){
return (function (state_38202){
var state_val_38203 = (state_38202[(1)]);
if((state_val_38203 === (7))){
var inst_38184 = (state_38202[(7)]);
var inst_38184__$1 = (state_38202[(2)]);
var inst_38185 = (inst_38184__$1 == null);
var inst_38186 = cljs.core.not.call(null,inst_38185);
var state_38202__$1 = (function (){var statearr_38204 = state_38202;
(statearr_38204[(7)] = inst_38184__$1);

return statearr_38204;
})();
if(inst_38186){
var statearr_38205_38227 = state_38202__$1;
(statearr_38205_38227[(1)] = (8));

} else {
var statearr_38206_38228 = state_38202__$1;
(statearr_38206_38228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (1))){
var inst_38179 = (0);
var state_38202__$1 = (function (){var statearr_38207 = state_38202;
(statearr_38207[(8)] = inst_38179);

return statearr_38207;
})();
var statearr_38208_38229 = state_38202__$1;
(statearr_38208_38229[(2)] = null);

(statearr_38208_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (4))){
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38202__$1,(7),ch);
} else {
if((state_val_38203 === (6))){
var inst_38197 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38209_38230 = state_38202__$1;
(statearr_38209_38230[(2)] = inst_38197);

(statearr_38209_38230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (3))){
var inst_38199 = (state_38202[(2)]);
var inst_38200 = cljs.core.async.close_BANG_.call(null,out);
var state_38202__$1 = (function (){var statearr_38210 = state_38202;
(statearr_38210[(9)] = inst_38199);

return statearr_38210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38202__$1,inst_38200);
} else {
if((state_val_38203 === (2))){
var inst_38179 = (state_38202[(8)]);
var inst_38181 = (inst_38179 < n);
var state_38202__$1 = state_38202;
if(cljs.core.truth_(inst_38181)){
var statearr_38211_38231 = state_38202__$1;
(statearr_38211_38231[(1)] = (4));

} else {
var statearr_38212_38232 = state_38202__$1;
(statearr_38212_38232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (11))){
var inst_38179 = (state_38202[(8)]);
var inst_38189 = (state_38202[(2)]);
var inst_38190 = (inst_38179 + (1));
var inst_38179__$1 = inst_38190;
var state_38202__$1 = (function (){var statearr_38213 = state_38202;
(statearr_38213[(8)] = inst_38179__$1);

(statearr_38213[(10)] = inst_38189);

return statearr_38213;
})();
var statearr_38214_38233 = state_38202__$1;
(statearr_38214_38233[(2)] = null);

(statearr_38214_38233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (9))){
var state_38202__$1 = state_38202;
var statearr_38215_38234 = state_38202__$1;
(statearr_38215_38234[(2)] = null);

(statearr_38215_38234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (5))){
var state_38202__$1 = state_38202;
var statearr_38216_38235 = state_38202__$1;
(statearr_38216_38235[(2)] = null);

(statearr_38216_38235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (10))){
var inst_38194 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38217_38236 = state_38202__$1;
(statearr_38217_38236[(2)] = inst_38194);

(statearr_38217_38236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (8))){
var inst_38184 = (state_38202[(7)]);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38202__$1,(11),out,inst_38184);
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
});})(c__29976__auto___38226,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38226,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38221[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38221[(1)] = (1));

return statearr_38221;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38202){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38222){if((e38222 instanceof Object)){
var ex__29918__auto__ = e38222;
var statearr_38223_38237 = state_38202;
(statearr_38223_38237[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38238 = state_38202;
state_38202 = G__38238;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38226,out))
})();
var state__29978__auto__ = (function (){var statearr_38224 = f__29977__auto__.call(null);
(statearr_38224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38226);

return statearr_38224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38226,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t38246 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38246 = (function (map_LT_,f,ch,meta38247){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38247 = meta38247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38248,meta38247__$1){
var self__ = this;
var _38248__$1 = this;
return (new cljs.core.async.t38246(self__.map_LT_,self__.f,self__.ch,meta38247__$1));
});

cljs.core.async.t38246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38248){
var self__ = this;
var _38248__$1 = this;
return self__.meta38247;
});

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38249 = (function (map_LT_,f,ch,meta38247,_,fn1,meta38250){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38247 = meta38247;
this._ = _;
this.fn1 = fn1;
this.meta38250 = meta38250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38251,meta38250__$1){
var self__ = this;
var _38251__$1 = this;
return (new cljs.core.async.t38249(self__.map_LT_,self__.f,self__.ch,self__.meta38247,self__._,self__.fn1,meta38250__$1));
});})(___$1))
;

cljs.core.async.t38249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38251){
var self__ = this;
var _38251__$1 = this;
return self__.meta38250;
});})(___$1))
;

cljs.core.async.t38249.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38239_SHARP_){
return f1.call(null,(((p1__38239_SHARP_ == null))?null:self__.f.call(null,p1__38239_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38249.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38247","meta38247",-1081535049,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38250","meta38250",-726773671,null)], null);
});})(___$1))
;

cljs.core.async.t38249.cljs$lang$type = true;

cljs.core.async.t38249.cljs$lang$ctorStr = "cljs.core.async/t38249";

cljs.core.async.t38249.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t38249");
});})(___$1))
;

cljs.core.async.__GT_t38249 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t38249(map_LT___$1,f__$1,ch__$1,meta38247__$1,___$2,fn1__$1,meta38250){
return (new cljs.core.async.t38249(map_LT___$1,f__$1,ch__$1,meta38247__$1,___$2,fn1__$1,meta38250));
});})(___$1))
;

}

return (new cljs.core.async.t38249(self__.map_LT_,self__.f,self__.ch,self__.meta38247,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24651__auto__ = ret;
if(cljs.core.truth_(and__24651__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24651__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38247","meta38247",-1081535049,null)], null);
});

cljs.core.async.t38246.cljs$lang$type = true;

cljs.core.async.t38246.cljs$lang$ctorStr = "cljs.core.async/t38246";

cljs.core.async.t38246.cljs$lang$ctorPrWriter = (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t38246");
});

cljs.core.async.__GT_t38246 = (function cljs$core$async$map_LT__$___GT_t38246(map_LT___$1,f__$1,ch__$1,meta38247){
return (new cljs.core.async.t38246(map_LT___$1,f__$1,ch__$1,meta38247));
});

}

return (new cljs.core.async.t38246(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t38255 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38255 = (function (map_GT_,f,ch,meta38256){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38256 = meta38256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38257,meta38256__$1){
var self__ = this;
var _38257__$1 = this;
return (new cljs.core.async.t38255(self__.map_GT_,self__.f,self__.ch,meta38256__$1));
});

cljs.core.async.t38255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38257){
var self__ = this;
var _38257__$1 = this;
return self__.meta38256;
});

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38256","meta38256",2064347956,null)], null);
});

cljs.core.async.t38255.cljs$lang$type = true;

cljs.core.async.t38255.cljs$lang$ctorStr = "cljs.core.async/t38255";

cljs.core.async.t38255.cljs$lang$ctorPrWriter = (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t38255");
});

cljs.core.async.__GT_t38255 = (function cljs$core$async$map_GT__$___GT_t38255(map_GT___$1,f__$1,ch__$1,meta38256){
return (new cljs.core.async.t38255(map_GT___$1,f__$1,ch__$1,meta38256));
});

}

return (new cljs.core.async.t38255(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t38261 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38261 = (function (filter_GT_,p,ch,meta38262){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38262 = meta38262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38263,meta38262__$1){
var self__ = this;
var _38263__$1 = this;
return (new cljs.core.async.t38261(self__.filter_GT_,self__.p,self__.ch,meta38262__$1));
});

cljs.core.async.t38261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38263){
var self__ = this;
var _38263__$1 = this;
return self__.meta38262;
});

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38262","meta38262",1218336856,null)], null);
});

cljs.core.async.t38261.cljs$lang$type = true;

cljs.core.async.t38261.cljs$lang$ctorStr = "cljs.core.async/t38261";

cljs.core.async.t38261.cljs$lang$ctorPrWriter = (function (this__25242__auto__,writer__25243__auto__,opt__25244__auto__){
return cljs.core._write.call(null,writer__25243__auto__,"cljs.core.async/t38261");
});

cljs.core.async.__GT_t38261 = (function cljs$core$async$filter_GT__$___GT_t38261(filter_GT___$1,p__$1,ch__$1,meta38262){
return (new cljs.core.async.t38261(filter_GT___$1,p__$1,ch__$1,meta38262));
});

}

return (new cljs.core.async.t38261(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__38265 = arguments.length;
switch (G__38265) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38308,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38308,out){
return (function (state_38286){
var state_val_38287 = (state_38286[(1)]);
if((state_val_38287 === (7))){
var inst_38282 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
var statearr_38288_38309 = state_38286__$1;
(statearr_38288_38309[(2)] = inst_38282);

(statearr_38288_38309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (1))){
var state_38286__$1 = state_38286;
var statearr_38289_38310 = state_38286__$1;
(statearr_38289_38310[(2)] = null);

(statearr_38289_38310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (4))){
var inst_38268 = (state_38286[(7)]);
var inst_38268__$1 = (state_38286[(2)]);
var inst_38269 = (inst_38268__$1 == null);
var state_38286__$1 = (function (){var statearr_38290 = state_38286;
(statearr_38290[(7)] = inst_38268__$1);

return statearr_38290;
})();
if(cljs.core.truth_(inst_38269)){
var statearr_38291_38311 = state_38286__$1;
(statearr_38291_38311[(1)] = (5));

} else {
var statearr_38292_38312 = state_38286__$1;
(statearr_38292_38312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (6))){
var inst_38268 = (state_38286[(7)]);
var inst_38273 = p.call(null,inst_38268);
var state_38286__$1 = state_38286;
if(cljs.core.truth_(inst_38273)){
var statearr_38293_38313 = state_38286__$1;
(statearr_38293_38313[(1)] = (8));

} else {
var statearr_38294_38314 = state_38286__$1;
(statearr_38294_38314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (3))){
var inst_38284 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38286__$1,inst_38284);
} else {
if((state_val_38287 === (2))){
var state_38286__$1 = state_38286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38286__$1,(4),ch);
} else {
if((state_val_38287 === (11))){
var inst_38276 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
var statearr_38295_38315 = state_38286__$1;
(statearr_38295_38315[(2)] = inst_38276);

(statearr_38295_38315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (9))){
var state_38286__$1 = state_38286;
var statearr_38296_38316 = state_38286__$1;
(statearr_38296_38316[(2)] = null);

(statearr_38296_38316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (5))){
var inst_38271 = cljs.core.async.close_BANG_.call(null,out);
var state_38286__$1 = state_38286;
var statearr_38297_38317 = state_38286__$1;
(statearr_38297_38317[(2)] = inst_38271);

(statearr_38297_38317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (10))){
var inst_38279 = (state_38286[(2)]);
var state_38286__$1 = (function (){var statearr_38298 = state_38286;
(statearr_38298[(8)] = inst_38279);

return statearr_38298;
})();
var statearr_38299_38318 = state_38286__$1;
(statearr_38299_38318[(2)] = null);

(statearr_38299_38318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (8))){
var inst_38268 = (state_38286[(7)]);
var state_38286__$1 = state_38286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38286__$1,(11),out,inst_38268);
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
});})(c__29976__auto___38308,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38308,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38303 = [null,null,null,null,null,null,null,null,null];
(statearr_38303[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38303[(1)] = (1));

return statearr_38303;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38286){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38304){if((e38304 instanceof Object)){
var ex__29918__auto__ = e38304;
var statearr_38305_38319 = state_38286;
(statearr_38305_38319[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38320 = state_38286;
state_38286 = G__38320;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38308,out))
})();
var state__29978__auto__ = (function (){var statearr_38306 = f__29977__auto__.call(null);
(statearr_38306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38308);

return statearr_38306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38308,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__38322 = arguments.length;
switch (G__38322) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto__){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto__){
return (function (state_38489){
var state_val_38490 = (state_38489[(1)]);
if((state_val_38490 === (7))){
var inst_38485 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
var statearr_38491_38532 = state_38489__$1;
(statearr_38491_38532[(2)] = inst_38485);

(statearr_38491_38532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (20))){
var inst_38455 = (state_38489[(7)]);
var inst_38466 = (state_38489[(2)]);
var inst_38467 = cljs.core.next.call(null,inst_38455);
var inst_38441 = inst_38467;
var inst_38442 = null;
var inst_38443 = (0);
var inst_38444 = (0);
var state_38489__$1 = (function (){var statearr_38492 = state_38489;
(statearr_38492[(8)] = inst_38443);

(statearr_38492[(9)] = inst_38466);

(statearr_38492[(10)] = inst_38441);

(statearr_38492[(11)] = inst_38444);

(statearr_38492[(12)] = inst_38442);

return statearr_38492;
})();
var statearr_38493_38533 = state_38489__$1;
(statearr_38493_38533[(2)] = null);

(statearr_38493_38533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (1))){
var state_38489__$1 = state_38489;
var statearr_38494_38534 = state_38489__$1;
(statearr_38494_38534[(2)] = null);

(statearr_38494_38534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (4))){
var inst_38430 = (state_38489[(13)]);
var inst_38430__$1 = (state_38489[(2)]);
var inst_38431 = (inst_38430__$1 == null);
var state_38489__$1 = (function (){var statearr_38495 = state_38489;
(statearr_38495[(13)] = inst_38430__$1);

return statearr_38495;
})();
if(cljs.core.truth_(inst_38431)){
var statearr_38496_38535 = state_38489__$1;
(statearr_38496_38535[(1)] = (5));

} else {
var statearr_38497_38536 = state_38489__$1;
(statearr_38497_38536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (15))){
var state_38489__$1 = state_38489;
var statearr_38501_38537 = state_38489__$1;
(statearr_38501_38537[(2)] = null);

(statearr_38501_38537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (21))){
var state_38489__$1 = state_38489;
var statearr_38502_38538 = state_38489__$1;
(statearr_38502_38538[(2)] = null);

(statearr_38502_38538[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (13))){
var inst_38443 = (state_38489[(8)]);
var inst_38441 = (state_38489[(10)]);
var inst_38444 = (state_38489[(11)]);
var inst_38442 = (state_38489[(12)]);
var inst_38451 = (state_38489[(2)]);
var inst_38452 = (inst_38444 + (1));
var tmp38498 = inst_38443;
var tmp38499 = inst_38441;
var tmp38500 = inst_38442;
var inst_38441__$1 = tmp38499;
var inst_38442__$1 = tmp38500;
var inst_38443__$1 = tmp38498;
var inst_38444__$1 = inst_38452;
var state_38489__$1 = (function (){var statearr_38503 = state_38489;
(statearr_38503[(8)] = inst_38443__$1);

(statearr_38503[(10)] = inst_38441__$1);

(statearr_38503[(11)] = inst_38444__$1);

(statearr_38503[(14)] = inst_38451);

(statearr_38503[(12)] = inst_38442__$1);

return statearr_38503;
})();
var statearr_38504_38539 = state_38489__$1;
(statearr_38504_38539[(2)] = null);

(statearr_38504_38539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (22))){
var state_38489__$1 = state_38489;
var statearr_38505_38540 = state_38489__$1;
(statearr_38505_38540[(2)] = null);

(statearr_38505_38540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (6))){
var inst_38430 = (state_38489[(13)]);
var inst_38439 = f.call(null,inst_38430);
var inst_38440 = cljs.core.seq.call(null,inst_38439);
var inst_38441 = inst_38440;
var inst_38442 = null;
var inst_38443 = (0);
var inst_38444 = (0);
var state_38489__$1 = (function (){var statearr_38506 = state_38489;
(statearr_38506[(8)] = inst_38443);

(statearr_38506[(10)] = inst_38441);

(statearr_38506[(11)] = inst_38444);

(statearr_38506[(12)] = inst_38442);

return statearr_38506;
})();
var statearr_38507_38541 = state_38489__$1;
(statearr_38507_38541[(2)] = null);

(statearr_38507_38541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (17))){
var inst_38455 = (state_38489[(7)]);
var inst_38459 = cljs.core.chunk_first.call(null,inst_38455);
var inst_38460 = cljs.core.chunk_rest.call(null,inst_38455);
var inst_38461 = cljs.core.count.call(null,inst_38459);
var inst_38441 = inst_38460;
var inst_38442 = inst_38459;
var inst_38443 = inst_38461;
var inst_38444 = (0);
var state_38489__$1 = (function (){var statearr_38508 = state_38489;
(statearr_38508[(8)] = inst_38443);

(statearr_38508[(10)] = inst_38441);

(statearr_38508[(11)] = inst_38444);

(statearr_38508[(12)] = inst_38442);

return statearr_38508;
})();
var statearr_38509_38542 = state_38489__$1;
(statearr_38509_38542[(2)] = null);

(statearr_38509_38542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (3))){
var inst_38487 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38489__$1,inst_38487);
} else {
if((state_val_38490 === (12))){
var inst_38475 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
var statearr_38510_38543 = state_38489__$1;
(statearr_38510_38543[(2)] = inst_38475);

(statearr_38510_38543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (2))){
var state_38489__$1 = state_38489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38489__$1,(4),in$);
} else {
if((state_val_38490 === (23))){
var inst_38483 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
var statearr_38511_38544 = state_38489__$1;
(statearr_38511_38544[(2)] = inst_38483);

(statearr_38511_38544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (19))){
var inst_38470 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
var statearr_38512_38545 = state_38489__$1;
(statearr_38512_38545[(2)] = inst_38470);

(statearr_38512_38545[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (11))){
var inst_38441 = (state_38489[(10)]);
var inst_38455 = (state_38489[(7)]);
var inst_38455__$1 = cljs.core.seq.call(null,inst_38441);
var state_38489__$1 = (function (){var statearr_38513 = state_38489;
(statearr_38513[(7)] = inst_38455__$1);

return statearr_38513;
})();
if(inst_38455__$1){
var statearr_38514_38546 = state_38489__$1;
(statearr_38514_38546[(1)] = (14));

} else {
var statearr_38515_38547 = state_38489__$1;
(statearr_38515_38547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (9))){
var inst_38477 = (state_38489[(2)]);
var inst_38478 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38489__$1 = (function (){var statearr_38516 = state_38489;
(statearr_38516[(15)] = inst_38477);

return statearr_38516;
})();
if(cljs.core.truth_(inst_38478)){
var statearr_38517_38548 = state_38489__$1;
(statearr_38517_38548[(1)] = (21));

} else {
var statearr_38518_38549 = state_38489__$1;
(statearr_38518_38549[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (5))){
var inst_38433 = cljs.core.async.close_BANG_.call(null,out);
var state_38489__$1 = state_38489;
var statearr_38519_38550 = state_38489__$1;
(statearr_38519_38550[(2)] = inst_38433);

(statearr_38519_38550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (14))){
var inst_38455 = (state_38489[(7)]);
var inst_38457 = cljs.core.chunked_seq_QMARK_.call(null,inst_38455);
var state_38489__$1 = state_38489;
if(inst_38457){
var statearr_38520_38551 = state_38489__$1;
(statearr_38520_38551[(1)] = (17));

} else {
var statearr_38521_38552 = state_38489__$1;
(statearr_38521_38552[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (16))){
var inst_38473 = (state_38489[(2)]);
var state_38489__$1 = state_38489;
var statearr_38522_38553 = state_38489__$1;
(statearr_38522_38553[(2)] = inst_38473);

(statearr_38522_38553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38490 === (10))){
var inst_38444 = (state_38489[(11)]);
var inst_38442 = (state_38489[(12)]);
var inst_38449 = cljs.core._nth.call(null,inst_38442,inst_38444);
var state_38489__$1 = state_38489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38489__$1,(13),out,inst_38449);
} else {
if((state_val_38490 === (18))){
var inst_38455 = (state_38489[(7)]);
var inst_38464 = cljs.core.first.call(null,inst_38455);
var state_38489__$1 = state_38489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38489__$1,(20),out,inst_38464);
} else {
if((state_val_38490 === (8))){
var inst_38443 = (state_38489[(8)]);
var inst_38444 = (state_38489[(11)]);
var inst_38446 = (inst_38444 < inst_38443);
var inst_38447 = inst_38446;
var state_38489__$1 = state_38489;
if(cljs.core.truth_(inst_38447)){
var statearr_38523_38554 = state_38489__$1;
(statearr_38523_38554[(1)] = (10));

} else {
var statearr_38524_38555 = state_38489__$1;
(statearr_38524_38555[(1)] = (11));

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
});})(c__29976__auto__))
;
return ((function (switch__29914__auto__,c__29976__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____0 = (function (){
var statearr_38528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38528[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__);

(statearr_38528[(1)] = (1));

return statearr_38528;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____1 = (function (state_38489){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38529){if((e38529 instanceof Object)){
var ex__29918__auto__ = e38529;
var statearr_38530_38556 = state_38489;
(statearr_38530_38556[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38557 = state_38489;
state_38489 = G__38557;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__ = function(state_38489){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____1.call(this,state_38489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29915__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto__))
})();
var state__29978__auto__ = (function (){var statearr_38531 = f__29977__auto__.call(null);
(statearr_38531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto__);

return statearr_38531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto__))
);

return c__29976__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__38559 = arguments.length;
switch (G__38559) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__38562 = arguments.length;
switch (G__38562) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__38565 = arguments.length;
switch (G__38565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38615,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38615,out){
return (function (state_38589){
var state_val_38590 = (state_38589[(1)]);
if((state_val_38590 === (7))){
var inst_38584 = (state_38589[(2)]);
var state_38589__$1 = state_38589;
var statearr_38591_38616 = state_38589__$1;
(statearr_38591_38616[(2)] = inst_38584);

(statearr_38591_38616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (1))){
var inst_38566 = null;
var state_38589__$1 = (function (){var statearr_38592 = state_38589;
(statearr_38592[(7)] = inst_38566);

return statearr_38592;
})();
var statearr_38593_38617 = state_38589__$1;
(statearr_38593_38617[(2)] = null);

(statearr_38593_38617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (4))){
var inst_38569 = (state_38589[(8)]);
var inst_38569__$1 = (state_38589[(2)]);
var inst_38570 = (inst_38569__$1 == null);
var inst_38571 = cljs.core.not.call(null,inst_38570);
var state_38589__$1 = (function (){var statearr_38594 = state_38589;
(statearr_38594[(8)] = inst_38569__$1);

return statearr_38594;
})();
if(inst_38571){
var statearr_38595_38618 = state_38589__$1;
(statearr_38595_38618[(1)] = (5));

} else {
var statearr_38596_38619 = state_38589__$1;
(statearr_38596_38619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (6))){
var state_38589__$1 = state_38589;
var statearr_38597_38620 = state_38589__$1;
(statearr_38597_38620[(2)] = null);

(statearr_38597_38620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (3))){
var inst_38586 = (state_38589[(2)]);
var inst_38587 = cljs.core.async.close_BANG_.call(null,out);
var state_38589__$1 = (function (){var statearr_38598 = state_38589;
(statearr_38598[(9)] = inst_38586);

return statearr_38598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38589__$1,inst_38587);
} else {
if((state_val_38590 === (2))){
var state_38589__$1 = state_38589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38589__$1,(4),ch);
} else {
if((state_val_38590 === (11))){
var inst_38569 = (state_38589[(8)]);
var inst_38578 = (state_38589[(2)]);
var inst_38566 = inst_38569;
var state_38589__$1 = (function (){var statearr_38599 = state_38589;
(statearr_38599[(10)] = inst_38578);

(statearr_38599[(7)] = inst_38566);

return statearr_38599;
})();
var statearr_38600_38621 = state_38589__$1;
(statearr_38600_38621[(2)] = null);

(statearr_38600_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (9))){
var inst_38569 = (state_38589[(8)]);
var state_38589__$1 = state_38589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38589__$1,(11),out,inst_38569);
} else {
if((state_val_38590 === (5))){
var inst_38569 = (state_38589[(8)]);
var inst_38566 = (state_38589[(7)]);
var inst_38573 = cljs.core._EQ_.call(null,inst_38569,inst_38566);
var state_38589__$1 = state_38589;
if(inst_38573){
var statearr_38602_38622 = state_38589__$1;
(statearr_38602_38622[(1)] = (8));

} else {
var statearr_38603_38623 = state_38589__$1;
(statearr_38603_38623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (10))){
var inst_38581 = (state_38589[(2)]);
var state_38589__$1 = state_38589;
var statearr_38604_38624 = state_38589__$1;
(statearr_38604_38624[(2)] = inst_38581);

(statearr_38604_38624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38590 === (8))){
var inst_38566 = (state_38589[(7)]);
var tmp38601 = inst_38566;
var inst_38566__$1 = tmp38601;
var state_38589__$1 = (function (){var statearr_38605 = state_38589;
(statearr_38605[(7)] = inst_38566__$1);

return statearr_38605;
})();
var statearr_38606_38625 = state_38589__$1;
(statearr_38606_38625[(2)] = null);

(statearr_38606_38625[(1)] = (2));


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
});})(c__29976__auto___38615,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38615,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38610[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38610[(1)] = (1));

return statearr_38610;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38589){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38611){if((e38611 instanceof Object)){
var ex__29918__auto__ = e38611;
var statearr_38612_38626 = state_38589;
(statearr_38612_38626[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38627 = state_38589;
state_38589 = G__38627;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38615,out))
})();
var state__29978__auto__ = (function (){var statearr_38613 = f__29977__auto__.call(null);
(statearr_38613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38615);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38615,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__38629 = arguments.length;
switch (G__38629) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38698,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38698,out){
return (function (state_38667){
var state_val_38668 = (state_38667[(1)]);
if((state_val_38668 === (7))){
var inst_38663 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
var statearr_38669_38699 = state_38667__$1;
(statearr_38669_38699[(2)] = inst_38663);

(statearr_38669_38699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (1))){
var inst_38630 = (new Array(n));
var inst_38631 = inst_38630;
var inst_38632 = (0);
var state_38667__$1 = (function (){var statearr_38670 = state_38667;
(statearr_38670[(7)] = inst_38632);

(statearr_38670[(8)] = inst_38631);

return statearr_38670;
})();
var statearr_38671_38700 = state_38667__$1;
(statearr_38671_38700[(2)] = null);

(statearr_38671_38700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (4))){
var inst_38635 = (state_38667[(9)]);
var inst_38635__$1 = (state_38667[(2)]);
var inst_38636 = (inst_38635__$1 == null);
var inst_38637 = cljs.core.not.call(null,inst_38636);
var state_38667__$1 = (function (){var statearr_38672 = state_38667;
(statearr_38672[(9)] = inst_38635__$1);

return statearr_38672;
})();
if(inst_38637){
var statearr_38673_38701 = state_38667__$1;
(statearr_38673_38701[(1)] = (5));

} else {
var statearr_38674_38702 = state_38667__$1;
(statearr_38674_38702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (15))){
var inst_38657 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
var statearr_38675_38703 = state_38667__$1;
(statearr_38675_38703[(2)] = inst_38657);

(statearr_38675_38703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (13))){
var state_38667__$1 = state_38667;
var statearr_38676_38704 = state_38667__$1;
(statearr_38676_38704[(2)] = null);

(statearr_38676_38704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (6))){
var inst_38632 = (state_38667[(7)]);
var inst_38653 = (inst_38632 > (0));
var state_38667__$1 = state_38667;
if(cljs.core.truth_(inst_38653)){
var statearr_38677_38705 = state_38667__$1;
(statearr_38677_38705[(1)] = (12));

} else {
var statearr_38678_38706 = state_38667__$1;
(statearr_38678_38706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (3))){
var inst_38665 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38667__$1,inst_38665);
} else {
if((state_val_38668 === (12))){
var inst_38631 = (state_38667[(8)]);
var inst_38655 = cljs.core.vec.call(null,inst_38631);
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38667__$1,(15),out,inst_38655);
} else {
if((state_val_38668 === (2))){
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38667__$1,(4),ch);
} else {
if((state_val_38668 === (11))){
var inst_38647 = (state_38667[(2)]);
var inst_38648 = (new Array(n));
var inst_38631 = inst_38648;
var inst_38632 = (0);
var state_38667__$1 = (function (){var statearr_38679 = state_38667;
(statearr_38679[(7)] = inst_38632);

(statearr_38679[(10)] = inst_38647);

(statearr_38679[(8)] = inst_38631);

return statearr_38679;
})();
var statearr_38680_38707 = state_38667__$1;
(statearr_38680_38707[(2)] = null);

(statearr_38680_38707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (9))){
var inst_38631 = (state_38667[(8)]);
var inst_38645 = cljs.core.vec.call(null,inst_38631);
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38667__$1,(11),out,inst_38645);
} else {
if((state_val_38668 === (5))){
var inst_38632 = (state_38667[(7)]);
var inst_38640 = (state_38667[(11)]);
var inst_38635 = (state_38667[(9)]);
var inst_38631 = (state_38667[(8)]);
var inst_38639 = (inst_38631[inst_38632] = inst_38635);
var inst_38640__$1 = (inst_38632 + (1));
var inst_38641 = (inst_38640__$1 < n);
var state_38667__$1 = (function (){var statearr_38681 = state_38667;
(statearr_38681[(11)] = inst_38640__$1);

(statearr_38681[(12)] = inst_38639);

return statearr_38681;
})();
if(cljs.core.truth_(inst_38641)){
var statearr_38682_38708 = state_38667__$1;
(statearr_38682_38708[(1)] = (8));

} else {
var statearr_38683_38709 = state_38667__$1;
(statearr_38683_38709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (14))){
var inst_38660 = (state_38667[(2)]);
var inst_38661 = cljs.core.async.close_BANG_.call(null,out);
var state_38667__$1 = (function (){var statearr_38685 = state_38667;
(statearr_38685[(13)] = inst_38660);

return statearr_38685;
})();
var statearr_38686_38710 = state_38667__$1;
(statearr_38686_38710[(2)] = inst_38661);

(statearr_38686_38710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (10))){
var inst_38651 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
var statearr_38687_38711 = state_38667__$1;
(statearr_38687_38711[(2)] = inst_38651);

(statearr_38687_38711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (8))){
var inst_38640 = (state_38667[(11)]);
var inst_38631 = (state_38667[(8)]);
var tmp38684 = inst_38631;
var inst_38631__$1 = tmp38684;
var inst_38632 = inst_38640;
var state_38667__$1 = (function (){var statearr_38688 = state_38667;
(statearr_38688[(7)] = inst_38632);

(statearr_38688[(8)] = inst_38631__$1);

return statearr_38688;
})();
var statearr_38689_38712 = state_38667__$1;
(statearr_38689_38712[(2)] = null);

(statearr_38689_38712[(1)] = (2));


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
});})(c__29976__auto___38698,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38698,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38693[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38693[(1)] = (1));

return statearr_38693;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38667){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38694){if((e38694 instanceof Object)){
var ex__29918__auto__ = e38694;
var statearr_38695_38713 = state_38667;
(statearr_38695_38713[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38714 = state_38667;
state_38667 = G__38714;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38698,out))
})();
var state__29978__auto__ = (function (){var statearr_38696 = f__29977__auto__.call(null);
(statearr_38696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38698);

return statearr_38696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38698,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__38716 = arguments.length;
switch (G__38716) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29976__auto___38789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29976__auto___38789,out){
return (function (){
var f__29977__auto__ = (function (){var switch__29914__auto__ = ((function (c__29976__auto___38789,out){
return (function (state_38758){
var state_val_38759 = (state_38758[(1)]);
if((state_val_38759 === (7))){
var inst_38754 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38760_38790 = state_38758__$1;
(statearr_38760_38790[(2)] = inst_38754);

(statearr_38760_38790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (1))){
var inst_38717 = [];
var inst_38718 = inst_38717;
var inst_38719 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38758__$1 = (function (){var statearr_38761 = state_38758;
(statearr_38761[(7)] = inst_38719);

(statearr_38761[(8)] = inst_38718);

return statearr_38761;
})();
var statearr_38762_38791 = state_38758__$1;
(statearr_38762_38791[(2)] = null);

(statearr_38762_38791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (4))){
var inst_38722 = (state_38758[(9)]);
var inst_38722__$1 = (state_38758[(2)]);
var inst_38723 = (inst_38722__$1 == null);
var inst_38724 = cljs.core.not.call(null,inst_38723);
var state_38758__$1 = (function (){var statearr_38763 = state_38758;
(statearr_38763[(9)] = inst_38722__$1);

return statearr_38763;
})();
if(inst_38724){
var statearr_38764_38792 = state_38758__$1;
(statearr_38764_38792[(1)] = (5));

} else {
var statearr_38765_38793 = state_38758__$1;
(statearr_38765_38793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (15))){
var inst_38748 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38766_38794 = state_38758__$1;
(statearr_38766_38794[(2)] = inst_38748);

(statearr_38766_38794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (13))){
var state_38758__$1 = state_38758;
var statearr_38767_38795 = state_38758__$1;
(statearr_38767_38795[(2)] = null);

(statearr_38767_38795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (6))){
var inst_38718 = (state_38758[(8)]);
var inst_38743 = inst_38718.length;
var inst_38744 = (inst_38743 > (0));
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38744)){
var statearr_38768_38796 = state_38758__$1;
(statearr_38768_38796[(1)] = (12));

} else {
var statearr_38769_38797 = state_38758__$1;
(statearr_38769_38797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (3))){
var inst_38756 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38758__$1,inst_38756);
} else {
if((state_val_38759 === (12))){
var inst_38718 = (state_38758[(8)]);
var inst_38746 = cljs.core.vec.call(null,inst_38718);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(15),out,inst_38746);
} else {
if((state_val_38759 === (2))){
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(4),ch);
} else {
if((state_val_38759 === (11))){
var inst_38722 = (state_38758[(9)]);
var inst_38726 = (state_38758[(10)]);
var inst_38736 = (state_38758[(2)]);
var inst_38737 = [];
var inst_38738 = inst_38737.push(inst_38722);
var inst_38718 = inst_38737;
var inst_38719 = inst_38726;
var state_38758__$1 = (function (){var statearr_38770 = state_38758;
(statearr_38770[(7)] = inst_38719);

(statearr_38770[(11)] = inst_38738);

(statearr_38770[(8)] = inst_38718);

(statearr_38770[(12)] = inst_38736);

return statearr_38770;
})();
var statearr_38771_38798 = state_38758__$1;
(statearr_38771_38798[(2)] = null);

(statearr_38771_38798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (9))){
var inst_38718 = (state_38758[(8)]);
var inst_38734 = cljs.core.vec.call(null,inst_38718);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(11),out,inst_38734);
} else {
if((state_val_38759 === (5))){
var inst_38719 = (state_38758[(7)]);
var inst_38722 = (state_38758[(9)]);
var inst_38726 = (state_38758[(10)]);
var inst_38726__$1 = f.call(null,inst_38722);
var inst_38727 = cljs.core._EQ_.call(null,inst_38726__$1,inst_38719);
var inst_38728 = cljs.core.keyword_identical_QMARK_.call(null,inst_38719,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38729 = (inst_38727) || (inst_38728);
var state_38758__$1 = (function (){var statearr_38772 = state_38758;
(statearr_38772[(10)] = inst_38726__$1);

return statearr_38772;
})();
if(cljs.core.truth_(inst_38729)){
var statearr_38773_38799 = state_38758__$1;
(statearr_38773_38799[(1)] = (8));

} else {
var statearr_38774_38800 = state_38758__$1;
(statearr_38774_38800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (14))){
var inst_38751 = (state_38758[(2)]);
var inst_38752 = cljs.core.async.close_BANG_.call(null,out);
var state_38758__$1 = (function (){var statearr_38776 = state_38758;
(statearr_38776[(13)] = inst_38751);

return statearr_38776;
})();
var statearr_38777_38801 = state_38758__$1;
(statearr_38777_38801[(2)] = inst_38752);

(statearr_38777_38801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (10))){
var inst_38741 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38778_38802 = state_38758__$1;
(statearr_38778_38802[(2)] = inst_38741);

(statearr_38778_38802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (8))){
var inst_38722 = (state_38758[(9)]);
var inst_38718 = (state_38758[(8)]);
var inst_38726 = (state_38758[(10)]);
var inst_38731 = inst_38718.push(inst_38722);
var tmp38775 = inst_38718;
var inst_38718__$1 = tmp38775;
var inst_38719 = inst_38726;
var state_38758__$1 = (function (){var statearr_38779 = state_38758;
(statearr_38779[(7)] = inst_38719);

(statearr_38779[(14)] = inst_38731);

(statearr_38779[(8)] = inst_38718__$1);

return statearr_38779;
})();
var statearr_38780_38803 = state_38758__$1;
(statearr_38780_38803[(2)] = null);

(statearr_38780_38803[(1)] = (2));


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
});})(c__29976__auto___38789,out))
;
return ((function (switch__29914__auto__,c__29976__auto___38789,out){
return (function() {
var cljs$core$async$state_machine__29915__auto__ = null;
var cljs$core$async$state_machine__29915__auto____0 = (function (){
var statearr_38784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38784[(0)] = cljs$core$async$state_machine__29915__auto__);

(statearr_38784[(1)] = (1));

return statearr_38784;
});
var cljs$core$async$state_machine__29915__auto____1 = (function (state_38758){
while(true){
var ret_value__29916__auto__ = (function (){try{while(true){
var result__29917__auto__ = switch__29914__auto__.call(null,state_38758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29917__auto__;
}
break;
}
}catch (e38785){if((e38785 instanceof Object)){
var ex__29918__auto__ = e38785;
var statearr_38786_38804 = state_38758;
(statearr_38786_38804[(5)] = ex__29918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38805 = state_38758;
state_38758 = G__38805;
continue;
} else {
return ret_value__29916__auto__;
}
break;
}
});
cljs$core$async$state_machine__29915__auto__ = function(state_38758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29915__auto____1.call(this,state_38758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29915__auto____0;
cljs$core$async$state_machine__29915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29915__auto____1;
return cljs$core$async$state_machine__29915__auto__;
})()
;})(switch__29914__auto__,c__29976__auto___38789,out))
})();
var state__29978__auto__ = (function (){var statearr_38787 = f__29977__auto__.call(null);
(statearr_38787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29976__auto___38789);

return statearr_38787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29978__auto__);
});})(c__29976__auto___38789,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map