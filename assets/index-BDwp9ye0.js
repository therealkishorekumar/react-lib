(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const u of g)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function s(g){const u={};return g.integrity&&(u.integrity=g.integrity),g.referrerPolicy&&(u.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?u.credentials="include":g.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function p(g){if(g.ep)return;g.ep=!0;const u=s(g);fetch(g.href,u)}})();var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ks={exports:{}},nl={};var gh;function dg(){if(gh)return nl;gh=1;var o=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function s(p,g,u){var h=null;if(u!==void 0&&(h=""+u),g.key!==void 0&&(h=""+g.key),"key"in g){u={};for(var f in g)f!=="key"&&(u[f]=g[f])}else u=g;return g=u.ref,{$$typeof:o,type:p,key:h,ref:g!==void 0?g:null,props:u}}return nl.Fragment=b,nl.jsx=s,nl.jsxs=s,nl}var vh;function fg(){return vh||(vh=1,Ks.exports=dg()),Ks.exports}var i=fg(),Js={exports:{}},ke={};var bh;function hg(){if(bh)return ke;bh=1;var o=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),T=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,A={};function C(N,E,te){this.props=N,this.context=E,this.refs=A,this.updater=te||y}C.prototype.isReactComponent={},C.prototype.setState=function(N,E){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,E,"setState")},C.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function M(){}M.prototype=C.prototype;function B(N,E,te){this.props=N,this.context=E,this.refs=A,this.updater=te||y}var H=B.prototype=new M;H.constructor=B,j(H,C.prototype),H.isPureReactComponent=!0;var U=Array.isArray;function F(){}var X={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function I(N,E,te){var P=te.ref;return{$$typeof:o,type:N,key:E,ref:P!==void 0?P:null,props:te}}function pe(N,E){return I(N.type,E,N.props)}function _e(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function D(N){var E={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return E[te]})}var ee=/\/+/g;function x(N,E){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):E.toString(36)}function ae(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(E){N.status==="pending"&&(N.status="fulfilled",N.value=E)},function(E){N.status==="pending"&&(N.status="rejected",N.reason=E)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Z(N,E,te,P,re){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(Se){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case o:case b:Ae=!0;break;case z:return Ae=N._init,Z(Ae(N._payload),E,te,P,re)}}if(Ae)return re=re(N),Ae=P===""?"."+x(N,0):P,U(re)?(te="",Ae!=null&&(te=Ae.replace(ee,"$&/")+"/"),Z(re,E,te,"",function(tt){return tt})):re!=null&&(_e(re)&&(re=pe(re,te+(re.key==null||N&&N.key===re.key?"":(""+re.key).replace(ee,"$&/")+"/")+Ae)),E.push(re)),1;Ae=0;var he=P===""?".":P+":";if(U(N))for(var Te=0;Te<N.length;Te++)P=N[Te],Se=he+x(P,Te),Ae+=Z(P,E,te,Se,re);else if(Te=S(N),typeof Te=="function")for(N=Te.call(N),Te=0;!(P=N.next()).done;)P=P.value,Se=he+x(P,Te++),Ae+=Z(P,E,te,Se,re);else if(Se==="object"){if(typeof N.then=="function")return Z(ae(N),E,te,P,re);throw E=String(N),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function G(N,E,te){if(N==null)return N;var P=[],re=0;return Z(N,P,"","",function(Se){return E.call(te,Se,re++)}),P}function me(N){if(N._status===-1){var E=N._result;E=E(),E.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=E)}if(N._status===1)return N._result.default;throw N._result}var le=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ye={map:G,forEach:function(N,E,te){G(N,function(){E.apply(this,arguments)},te)},count:function(N){var E=0;return G(N,function(){E++}),E},toArray:function(N){return G(N,function(E){return E})||[]},only:function(N){if(!_e(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ke.Activity=_,ke.Children=ye,ke.Component=C,ke.Fragment=s,ke.Profiler=g,ke.PureComponent=B,ke.StrictMode=p,ke.Suspense=d,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ke.__COMPILER_RUNTIME={__proto__:null,c:function(N){return X.H.useMemoCache(N)}},ke.cache=function(N){return function(){return N.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(N,E,te){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var P=j({},N.props),re=N.key;if(E!=null)for(Se in E.key!==void 0&&(re=""+E.key),E)!ce.call(E,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&E.ref===void 0||(P[Se]=E[Se]);var Se=arguments.length-2;if(Se===1)P.children=te;else if(1<Se){for(var Ae=Array(Se),he=0;he<Se;he++)Ae[he]=arguments[he+2];P.children=Ae}return I(N.type,re,P)},ke.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ke.createElement=function(N,E,te){var P,re={},Se=null;if(E!=null)for(P in E.key!==void 0&&(Se=""+E.key),E)ce.call(E,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(re[P]=E[P]);var Ae=arguments.length-2;if(Ae===1)re.children=te;else if(1<Ae){for(var he=Array(Ae),Te=0;Te<Ae;Te++)he[Te]=arguments[Te+2];re.children=he}if(N&&N.defaultProps)for(P in Ae=N.defaultProps,Ae)re[P]===void 0&&(re[P]=Ae[P]);return I(N,Se,re)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(N){return{$$typeof:f,render:N}},ke.isValidElement=_e,ke.lazy=function(N){return{$$typeof:z,_payload:{_status:-1,_result:N},_init:me}},ke.memo=function(N,E){return{$$typeof:v,type:N,compare:E===void 0?null:E}},ke.startTransition=function(N){var E=X.T,te={};X.T=te;try{var P=N(),re=X.S;re!==null&&re(te,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(F,le)}catch(Se){le(Se)}finally{E!==null&&te.types!==null&&(E.types=te.types),X.T=E}},ke.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ke.use=function(N){return X.H.use(N)},ke.useActionState=function(N,E,te){return X.H.useActionState(N,E,te)},ke.useCallback=function(N,E){return X.H.useCallback(N,E)},ke.useContext=function(N){return X.H.useContext(N)},ke.useDebugValue=function(){},ke.useDeferredValue=function(N,E){return X.H.useDeferredValue(N,E)},ke.useEffect=function(N,E){return X.H.useEffect(N,E)},ke.useEffectEvent=function(N){return X.H.useEffectEvent(N)},ke.useId=function(){return X.H.useId()},ke.useImperativeHandle=function(N,E,te){return X.H.useImperativeHandle(N,E,te)},ke.useInsertionEffect=function(N,E){return X.H.useInsertionEffect(N,E)},ke.useLayoutEffect=function(N,E){return X.H.useLayoutEffect(N,E)},ke.useMemo=function(N,E){return X.H.useMemo(N,E)},ke.useOptimistic=function(N,E){return X.H.useOptimistic(N,E)},ke.useReducer=function(N,E,te){return X.H.useReducer(N,E,te)},ke.useRef=function(N){return X.H.useRef(N)},ke.useState=function(N){return X.H.useState(N)},ke.useSyncExternalStore=function(N,E,te){return X.H.useSyncExternalStore(N,E,te)},ke.useTransition=function(){return X.H.useTransition()},ke.version="19.2.3",ke}var yh;function pc(){return yh||(yh=1,Js.exports=hg()),Js.exports}var fe=pc();const pg=Dh(fe);var Ws={exports:{}},al={},Fs={exports:{}},Is={};var xh;function mg(){return xh||(xh=1,(function(o){function b(Z,G){var me=Z.length;Z.push(G);e:for(;0<me;){var le=me-1>>>1,ye=Z[le];if(0<g(ye,G))Z[le]=G,Z[me]=ye,me=le;else break e}}function s(Z){return Z.length===0?null:Z[0]}function p(Z){if(Z.length===0)return null;var G=Z[0],me=Z.pop();if(me!==G){Z[0]=me;e:for(var le=0,ye=Z.length,N=ye>>>1;le<N;){var E=2*(le+1)-1,te=Z[E],P=E+1,re=Z[P];if(0>g(te,me))P<ye&&0>g(re,te)?(Z[le]=re,Z[P]=me,le=P):(Z[le]=te,Z[E]=me,le=E);else if(P<ye&&0>g(re,me))Z[le]=re,Z[P]=me,le=P;else break e}}return G}function g(Z,G){var me=Z.sortIndex-G.sortIndex;return me!==0?me:Z.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();o.unstable_now=function(){return h.now()-f}}var d=[],v=[],z=1,_=null,T=3,S=!1,y=!1,j=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function H(Z){for(var G=s(v);G!==null;){if(G.callback===null)p(v);else if(G.startTime<=Z)p(v),G.sortIndex=G.expirationTime,b(d,G);else break;G=s(v)}}function U(Z){if(j=!1,H(Z),!y)if(s(d)!==null)y=!0,F||(F=!0,D());else{var G=s(v);G!==null&&ae(U,G.startTime-Z)}}var F=!1,X=-1,ce=5,I=-1;function pe(){return A?!0:!(o.unstable_now()-I<ce)}function _e(){if(A=!1,F){var Z=o.unstable_now();I=Z;var G=!0;try{e:{y=!1,j&&(j=!1,M(X),X=-1),S=!0;var me=T;try{t:{for(H(Z),_=s(d);_!==null&&!(_.expirationTime>Z&&pe());){var le=_.callback;if(typeof le=="function"){_.callback=null,T=_.priorityLevel;var ye=le(_.expirationTime<=Z);if(Z=o.unstable_now(),typeof ye=="function"){_.callback=ye,H(Z),G=!0;break t}_===s(d)&&p(d),H(Z)}else p(d);_=s(d)}if(_!==null)G=!0;else{var N=s(v);N!==null&&ae(U,N.startTime-Z),G=!1}}break e}finally{_=null,T=me,S=!1}G=void 0}}finally{G?D():F=!1}}}var D;if(typeof B=="function")D=function(){B(_e)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,x=ee.port2;ee.port1.onmessage=_e,D=function(){x.postMessage(null)}}else D=function(){C(_e,0)};function ae(Z,G){X=C(function(){Z(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(Z){switch(T){case 1:case 2:case 3:var G=3;break;default:G=T}var me=T;T=G;try{return Z()}finally{T=me}},o.unstable_requestPaint=function(){A=!0},o.unstable_runWithPriority=function(Z,G){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var me=T;T=Z;try{return G()}finally{T=me}},o.unstable_scheduleCallback=function(Z,G,me){var le=o.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?le+me:le):me=le,Z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=me+ye,Z={id:z++,callback:G,priorityLevel:Z,startTime:me,expirationTime:ye,sortIndex:-1},me>le?(Z.sortIndex=me,b(v,Z),s(d)===null&&Z===s(v)&&(j?(M(X),X=-1):j=!0,ae(U,me-le))):(Z.sortIndex=ye,b(d,Z),y||S||(y=!0,F||(F=!0,D()))),Z},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function(Z){var G=T;return function(){var me=T;T=G;try{return Z.apply(this,arguments)}finally{T=me}}}})(Is)),Is}var _h;function gg(){return _h||(_h=1,Fs.exports=mg()),Fs.exports}var Ps={exports:{}},wt={};var Sh;function vg(){if(Sh)return wt;Sh=1;var o=pc();function b(d){var v="https://react.dev/errors/"+d;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)v+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+d+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var p={d:{f:s,r:function(){throw Error(b(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},g=Symbol.for("react.portal");function u(d,v,z){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:_==null?null:""+_,children:d,containerInfo:v,implementation:z}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,v){if(d==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,wt.createPortal=function(d,v){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(b(299));return u(d,v,null,z)},wt.flushSync=function(d){var v=h.T,z=p.p;try{if(h.T=null,p.p=2,d)return d()}finally{h.T=v,p.p=z,p.d.f()}},wt.preconnect=function(d,v){typeof d=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,p.d.C(d,v))},wt.prefetchDNS=function(d){typeof d=="string"&&p.d.D(d)},wt.preinit=function(d,v){if(typeof d=="string"&&v&&typeof v.as=="string"){var z=v.as,_=f(z,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;z==="style"?p.d.S(d,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:_,integrity:T,fetchPriority:S}):z==="script"&&p.d.X(d,{crossOrigin:_,integrity:T,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},wt.preinitModule=function(d,v){if(typeof d=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var z=f(v.as,v.crossOrigin);p.d.M(d,{crossOrigin:z,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&p.d.M(d)},wt.preload=function(d,v){if(typeof d=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var z=v.as,_=f(z,v.crossOrigin);p.d.L(d,z,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},wt.preloadModule=function(d,v){if(typeof d=="string")if(v){var z=f(v.as,v.crossOrigin);p.d.m(d,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:z,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else p.d.m(d)},wt.requestFormReset=function(d){p.d.r(d)},wt.unstable_batchedUpdates=function(d,v){return d(v)},wt.useFormState=function(d,v,z){return h.H.useFormState(d,v,z)},wt.useFormStatus=function(){return h.H.useHostTransitionStatus()},wt.version="19.2.3",wt}var wh;function bg(){if(wh)return Ps.exports;wh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(b){console.error(b)}}return o(),Ps.exports=vg(),Ps.exports}var jh;function yg(){if(jh)return al;jh=1;var o=gg(),b=pc(),s=bg();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(p(188))}function v(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return d(r),e;if(l===a)return d(r),t;l=l.sibling}throw Error(p(188))}if(n.return!==a.return)n=r,a=l;else{for(var c=!1,w=r.child;w;){if(w===n){c=!0,n=r,a=l;break}if(w===a){c=!0,a=r,n=l;break}w=w.sibling}if(!c){for(w=l.child;w;){if(w===n){c=!0,n=l,a=r;break}if(w===a){c=!0,a=l,n=r;break}w=w.sibling}if(!c)throw Error(p(189))}}if(n.alternate!==a)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function x(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case C:return"Profiler";case A:return"StrictMode";case U:return"Suspense";case F:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case B:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:x(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return x(e(t))}catch{}}return null}var ae=Array.isArray,Z=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},le=[],ye=-1;function N(e){return{current:e}}function E(e){0>ye||(e.current=le[ye],le[ye]=null,ye--)}function te(e,t){ye++,le[ye]=e.current,e.current=t}var P=N(null),re=N(null),Se=N(null),Ae=N(null);function he(e,t){switch(te(Se,t),te(re,e),te(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(P),te(P,e)}function Te(){E(P),E(re),E(Se)}function tt(e){e.memoizedState!==null&&te(Ae,e);var t=P.current,n=qf(t,e.type);t!==n&&(te(re,e),te(P,n))}function Ie(e){re.current===e&&(E(P),E(re)),Ae.current===e&&(E(Ae),Ir._currentValue=me)}var Tt,Ct;function m(e){if(Tt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tt=t&&t[1]||"",Ct=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+e+Ct}var oe=!1;function W(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(J){var K=J}Reflect.construct(e,[],se)}else{try{se.call()}catch(J){K=J}e.call(se.prototype)}}else{try{throw Error()}catch(J){K=J}(se=e())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),c=l[0],w=l[1];if(c&&w){var R=c.split(`
`),$=w.split(`
`);for(r=a=0;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;for(;r<$.length&&!$[r].includes("DetermineComponentFrameRoot");)r++;if(a===R.length||r===$.length)for(a=R.length-1,r=$.length-1;1<=a&&0<=r&&R[a]!==$[r];)r--;for(;1<=a&&0<=r;a--,r--)if(R[a]!==$[r]){if(a!==1||r!==1)do if(a--,r--,0>r||R[a]!==$[r]){var ne=`
`+R[a].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=a&&0<=r);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?m(n):""}function O(e,t){switch(e.tag){case 26:case 27:case 5:return m(e.type);case 16:return m("Lazy");case 13:return e.child!==t&&t!==null?m("Suspense Fallback"):m("Suspense");case 19:return m("SuspenseList");case 0:case 15:return W(e.type,!1);case 11:return W(e.type.render,!1);case 1:return W(e.type,!0);case 31:return m("Activity");default:return""}}function k(e){try{var t="",n=null;do t+=O(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var q=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,de=o.unstable_cancelCallback,Q=o.unstable_shouldYield,ge=o.unstable_requestPaint,be=o.unstable_now,ve=o.unstable_getCurrentPriorityLevel,je=o.unstable_ImmediatePriority,Ve=o.unstable_UserBlockingPriority,Oe=o.unstable_NormalPriority,At=o.unstable_LowPriority,Mn=o.unstable_IdlePriority,Vt=o.log,la=o.unstable_setDisableYieldValue,We=null,pt=null;function $t(e){if(typeof Vt=="function"&&la(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(We,e)}catch{}}var at=Math.clz32?Math.clz32:Ri,ul=Math.log,Oi=Math.LN2;function Ri(e){return e>>>=0,e===0?32:31-(ul(e)/Oi|0)|0}var ja=256,ia=262144,cn=4194304;function Xt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,l=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var w=a&134217727;return w!==0?(a=w&~l,a!==0?r=Xt(a):(c&=w,c!==0?r=Xt(c):n||(n=w&~e,n!==0&&(r=Xt(n))))):(w=a&~l,w!==0?r=Xt(w):c!==0?r=Xt(c):n||(n=a&~e,n!==0&&(r=Xt(n)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:r}function dr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ih(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function Di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ph(e,t,n,a,r,l){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,R=e.expirationTimes,$=e.hiddenUpdates;for(n=c&~n;0<n;){var ne=31-at(n),se=1<<ne;w[ne]=0,R[ne]=-1;var K=$[ne];if(K!==null)for($[ne]=null,ne=0;ne<K.length;ne++){var J=K[ne];J!==null&&(J.lane&=-536870913)}n&=~se}a!==0&&xc(e,a,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(c&~t))}function xc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function _c(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-at(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Sc(e,t){var n=t&-t;return n=(n&42)!==0?1:Bi(n),(n&(e.suspendedLanes|t))!==0?0:n}function Bi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wc(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:ch(e.type))}function jc(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var On=Math.random().toString(36).slice(2),vt="__reactFiber$"+On,kt="__reactProps$"+On,za="__reactContainer$"+On,Li="__reactEvents$"+On,ep="__reactListeners$"+On,tp="__reactHandles$"+On,zc="__reactResources$"+On,hr="__reactMarker$"+On;function Ui(e){delete e[vt],delete e[kt],delete e[Li],delete e[ep],delete e[tp]}function Na(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[za]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[vt])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function Ta(e){if(e=e[vt]||e[za]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function pr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Ca(e){var t=e[zc];return t||(t=e[zc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function mt(e){e[hr]=!0}var Nc=new Set,Tc={};function oa(e,t){Aa(e,t),Aa(e+"Capture",t)}function Aa(e,t){for(Tc[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var np=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cc={},Ac={};function ap(e){return q.call(Ac,e)?!0:q.call(Cc,e)?!1:np.test(e)?Ac[e]=!0:(Cc[e]=!0,!1)}function fl(e,t,n){if(ap(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function hl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function pn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){if(!e._valueTracker){var t=kc(e)?"checked":"value";e._valueTracker=rp(e,t,""+e[t])}}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=kc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lp=/[\n"\\]/g;function Kt(e){return e.replace(lp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yi(e,t,n,a,r,l,c,w){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Zi(e,c,Qt(t)):n!=null?Zi(e,c,Qt(n)):a!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Qt(w):e.removeAttribute("name")}function Mc(e,t,n,a,r,l,c,w){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){qi(e);return}n=n!=null?""+Qt(n):"",t=t!=null?""+Qt(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=w?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),qi(e)}function Zi(e,t,n){t==="number"&&pl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ka(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Oc(e,t,n){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Qt(n):""}function Rc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(p(92));if(ae(a)){if(1<a.length)throw Error(p(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),qi(e)}function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ip=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ip.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Bc(e,t,n){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Dc(e,r,a)}else for(var l in t)t.hasOwnProperty(l)&&Dc(e,l,t[l])}function Gi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return sp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var Vi=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Oa=null;function Hc(e){var t=Ta(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[kt]||null;if(!r)throw Error(p(90));Yi(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ec(a)}break e;case"textarea":Oc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ka(e,!!n.multiple,t,!1)}}}var Xi=!1;function Lc(e,t,n){if(Xi)return e(t,n);Xi=!0;try{var a=e(t);return a}finally{if(Xi=!1,(Ma!==null||Oa!==null)&&(ni(),Ma&&(t=Ma,e=Oa,Oa=Ma=null,Hc(t),e)))for(t=0;t<e.length;t++)Hc(e[t])}}function mr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[kt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=!1;if(gn)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Qi=!1}var Rn=null,Ki=null,gl=null;function Uc(){if(gl)return gl;var e,t=Ki,n=t.length,a,r="value"in Rn?Rn.value:Rn.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===r[l-a];a++);return gl=r.slice(e,1<a?1-a:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function qc(){return!1}function Et(e){function t(n,a,r,l,c){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(l):l[w]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?bl:qc,this.isPropagationStopped=qc,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Et(sa),vr=_({},sa,{view:0,detail:0}),cp=Et(vr),Ji,Wi,br,xl=_({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ji=e.screenX-br.screenX,Wi=e.screenY-br.screenY):Wi=Ji=0,br=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),Yc=Et(xl),up=_({},xl,{dataTransfer:0}),dp=Et(up),fp=_({},vr,{relatedTarget:0}),Fi=Et(fp),hp=_({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=Et(hp),mp=_({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=Et(mp),vp=_({},sa,{data:0}),Zc=Et(vp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function Ii(){return _p}var Sp=_({},vr,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ii,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=Et(Sp),jp=_({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Et(jp),zp=_({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ii}),Np=Et(zp),Tp=_({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cp=Et(Tp),Ap=_({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=Et(Ap),Ep=_({},sa,{newState:0,oldState:0}),Mp=Et(Ep),Op=[9,13,27,32],Pi=gn&&"CompositionEvent"in window,yr=null;gn&&"documentMode"in document&&(yr=document.documentMode);var Rp=gn&&"TextEvent"in window&&!yr,Vc=gn&&(!Pi||yr&&8<yr&&11>=yr),$c=" ",Xc=!1;function Qc(e,t){switch(e){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function Dp(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(Xc=!0,$c);case"textInput":return e=t.data,e===$c&&Xc?null:e;default:return null}}function Bp(e,t){if(Ra)return e==="compositionend"||!Pi&&Qc(e,t)?(e=Uc(),gl=Ki=Rn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hp[e.type]:t==="textarea"}function Wc(e,t,n,a){Ma?Oa?Oa.push(a):Oa=[a]:Ma=a,t=ci(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var xr=null,_r=null;function Lp(e){Of(e,0)}function _l(e){var t=pr(e);if(Ec(t))return e}function Fc(e,t){if(e==="change")return t}var Ic=!1;if(gn){var eo;if(gn){var to="oninput"in document;if(!to){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),to=typeof Pc.oninput=="function"}eo=to}else eo=!1;Ic=eo&&(!document.documentMode||9<document.documentMode)}function eu(){xr&&(xr.detachEvent("onpropertychange",tu),_r=xr=null)}function tu(e){if(e.propertyName==="value"&&_l(_r)){var t=[];Wc(t,_r,e,$i(e)),Lc(Lp,t)}}function Up(e,t,n){e==="focusin"?(eu(),xr=t,_r=n,xr.attachEvent("onpropertychange",tu)):e==="focusout"&&eu()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(_r)}function Yp(e,t){if(e==="click")return _l(t)}function Zp(e,t){if(e==="input"||e==="change")return _l(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Gp;function Sr(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!q.call(t,r)||!Ht(e[r],t[r]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=nu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pl(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Vp=gn&&"documentMode"in document&&11>=document.documentMode,Da=null,ao=null,wr=null,ro=!1;function iu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ro||Da==null||Da!==pl(a)||(a=Da,"selectionStart"in a&&no(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wr&&Sr(wr,a)||(wr=a,a=ci(ao,"onSelect"),0<a.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Da)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},lo={},ou={};gn&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function ua(e){if(lo[e])return lo[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return lo[e]=t[n];return e}var su=ua("animationend"),cu=ua("animationiteration"),uu=ua("animationstart"),$p=ua("transitionrun"),Xp=ua("transitionstart"),Qp=ua("transitioncancel"),du=ua("transitionend"),fu=new Map,io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");io.push("scrollEnd");function ln(e,t){fu.set(e,t),oa(t,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Jt=[],Ha=0,oo=0;function wl(){for(var e=Ha,t=oo=Ha=0;t<e;){var n=Jt[t];Jt[t++]=null;var a=Jt[t];Jt[t++]=null;var r=Jt[t];Jt[t++]=null;var l=Jt[t];if(Jt[t++]=null,a!==null&&r!==null){var c=a.pending;c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r}l!==0&&hu(n,r,l)}}function jl(e,t,n,a){Jt[Ha++]=e,Jt[Ha++]=t,Jt[Ha++]=n,Jt[Ha++]=a,oo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function so(e,t,n,a){return jl(e,t,n,a),zl(e)}function da(e,t){return jl(e,null,null,t),zl(e)}function hu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-at(n),e=l.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),l):null}function zl(e){if(50<$r)throw $r=0,bs=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function Kp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,a){return new Kp(e,t,n,a)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Nl(e,t,n,a,r,l){var c=0;if(a=e,typeof e=="function")co(e)&&(c=1);else if(typeof e=="string")c=Pm(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=Lt(31,n,t,r),e.elementType=I,e.lanes=l,e;case j:return fa(n.children,r,l,t);case A:c=8,r|=24;break;case C:return e=Lt(12,n,t,r|2),e.elementType=C,e.lanes=l,e;case U:return e=Lt(13,n,t,r),e.elementType=U,e.lanes=l,e;case F:return e=Lt(19,n,t,r),e.elementType=F,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:c=10;break e;case M:c=9;break e;case H:c=11;break e;case X:c=14;break e;case ce:c=16,a=null;break e}c=29,n=Error(p(130,e===null?"null":typeof e,"")),a=null}return t=Lt(c,n,t,r),t.elementType=e,t.type=a,t.lanes=l,t}function fa(e,t,n,a){return e=Lt(7,e,a,t),e.lanes=n,e}function uo(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function mu(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function fo(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gu=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=gu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:k(t)},gu.set(e,t),t)}return{value:e,source:t,stack:k(t)}}var Ua=[],qa=0,Tl=null,jr=0,Ft=[],It=0,Dn=null,un=1,dn="";function bn(e,t){Ua[qa++]=jr,Ua[qa++]=Tl,Tl=e,jr=t}function vu(e,t,n){Ft[It++]=un,Ft[It++]=dn,Ft[It++]=Dn,Dn=e;var a=un;e=dn;var r=32-at(a)-1;a&=~(1<<r),n+=1;var l=32-at(t)+r;if(30<l){var c=r-r%5;l=(a&(1<<c)-1).toString(32),a>>=c,r-=c,un=1<<32-at(t)+r|n<<r|a,dn=l+e}else un=1<<l|n<<r|a,dn=e}function ho(e){e.return!==null&&(bn(e,1),vu(e,1,0))}function po(e){for(;e===Tl;)Tl=Ua[--qa],Ua[qa]=null,jr=Ua[--qa],Ua[qa]=null;for(;e===Dn;)Dn=Ft[--It],Ft[It]=null,dn=Ft[--It],Ft[It]=null,un=Ft[--It],Ft[It]=null}function bu(e,t){Ft[It++]=un,Ft[It++]=dn,Ft[It++]=Dn,un=t.id,dn=t.overflow,Dn=e}var bt=null,Pe=null,Le=!1,Bn=null,Pt=!1,mo=Error(p(519));function Hn(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zr(Wt(t,e)),mo}function yu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[kt]=a,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)De(Qr[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),Mc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),Rc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Hf(t.textContent,n)?(a.popover!=null&&(De("beforetoggle",t),De("toggle",t)),a.onScroll!=null&&De("scroll",t),a.onScrollEnd!=null&&De("scrollend",t),a.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||Hn(e,!0)}function xu(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:bt=bt.return}}function Ya(e){if(e!==bt)return!1;if(!Le)return xu(e),Le=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Os(e.type,e.memoizedProps)),n=!n),n&&Pe&&Hn(e),xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));Pe=Xf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));Pe=Xf(e)}else t===27?(t=Pe,Fn(e.type)?(e=Ls,Ls=null,Pe=e):Pe=t):Pe=bt?tn(e.stateNode.nextSibling):null;return!0}function ha(){Pe=bt=null,Le=!1}function go(){var e=Bn;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),Bn=null),e}function zr(e){Bn===null?Bn=[e]:Bn.push(e)}var vo=N(null),pa=null,yn=null;function Ln(e,t,n){te(vo,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=vo.current,E(vo)}function bo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function yo(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var c=r.child;l=l.firstContext;e:for(;l!==null;){var w=l;l=r;for(var R=0;R<t.length;R++)if(w.context===t[R]){l.lanes|=n,w=l.alternate,w!==null&&(w.lanes|=n),bo(l.return,n,e),a||(c=null);break e}l=w.next}}else if(r.tag===18){if(c=r.return,c===null)throw Error(p(341));c.lanes|=n,l=c.alternate,l!==null&&(l.lanes|=n),bo(c,n,e),c=null}else c=r.child;if(c!==null)c.return=r;else for(c=r;c!==null;){if(c===e){c=null;break}if(r=c.sibling,r!==null){r.return=c.return,c=r;break}c=c.return}r=c}}function Za(e,t,n,a){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var c=r.alternate;if(c===null)throw Error(p(387));if(c=c.memoizedProps,c!==null){var w=r.type;Ht(r.pendingProps.value,c.value)||(e!==null?e.push(w):e=[w])}}else if(r===Ae.current){if(c=r.alternate,c===null)throw Error(p(387));c.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ir):e=[Ir])}r=r.return}e!==null&&yo(t,e,n,a),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){pa=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return _u(pa,e)}function Al(e,t){return pa===null&&ma(e),_u(e,t)}function _u(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},yn===null){if(e===null)throw Error(p(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return n}var Jp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Wp=o.unstable_scheduleCallback,Fp=o.unstable_NormalPriority,ct={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xo(){return{controller:new Jp,data:new Map,refCount:0}}function Nr(e){e.refCount--,e.refCount===0&&Wp(Fp,function(){e.controller.abort()})}var Tr=null,_o=0,Ga=0,Va=null;function Ip(e,t){if(Tr===null){var n=Tr=[];_o=0,Ga=js(),Va={status:"pending",value:void 0,then:function(a){n.push(a)}}}return _o++,t.then(Su,Su),t}function Su(){if(--_o===0&&Tr!==null){Va!==null&&(Va.status="fulfilled");var e=Tr;Tr=null,Ga=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var wu=Z.S;Z.S=function(e,t){of=be(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ip(e,t),wu!==null&&wu(e,t)};var ga=N(null);function So(){var e=ga.current;return e!==null?e:Fe.pooledCache}function kl(e,t){t===null?te(ga,ga.current):te(ga,t.pool)}function ju(){var e=So();return e===null?null:{parent:ct._currentValue,pool:e}}var $a=Error(p(460)),wo=Error(p(474)),El=Error(p(542)),Ml={then:function(){}};function zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cu(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cu(e),e}throw ba=t,$a}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ba=n,$a):n}}var ba=null;function Tu(){if(ba===null)throw Error(p(459));var e=ba;return ba=null,e}function Cu(e){if(e===$a||e===El)throw Error(p(483))}var Xa=null,Cr=0;function Ol(e){var t=Cr;return Cr+=1,Xa===null&&(Xa=[]),Nu(Xa,e,t)}function Ar(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Rl(e,t){throw t.$$typeof===T?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Au(e){function t(Y,L){if(e){var V=Y.deletions;V===null?(Y.deletions=[L],Y.flags|=16):V.push(L)}}function n(Y,L){if(!e)return null;for(;L!==null;)t(Y,L),L=L.sibling;return null}function a(Y){for(var L=new Map;Y!==null;)Y.key!==null?L.set(Y.key,Y):L.set(Y.index,Y),Y=Y.sibling;return L}function r(Y,L){return Y=vn(Y,L),Y.index=0,Y.sibling=null,Y}function l(Y,L,V){return Y.index=V,e?(V=Y.alternate,V!==null?(V=V.index,V<L?(Y.flags|=67108866,L):V):(Y.flags|=67108866,L)):(Y.flags|=1048576,L)}function c(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,L,V,ie){return L===null||L.tag!==6?(L=uo(V,Y.mode,ie),L.return=Y,L):(L=r(L,V),L.return=Y,L)}function R(Y,L,V,ie){var ze=V.type;return ze===j?ne(Y,L,V.props.children,ie,V.key):L!==null&&(L.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ce&&va(ze)===L.type)?(L=r(L,V.props),Ar(L,V),L.return=Y,L):(L=Nl(V.type,V.key,V.props,null,Y.mode,ie),Ar(L,V),L.return=Y,L)}function $(Y,L,V,ie){return L===null||L.tag!==4||L.stateNode.containerInfo!==V.containerInfo||L.stateNode.implementation!==V.implementation?(L=fo(V,Y.mode,ie),L.return=Y,L):(L=r(L,V.children||[]),L.return=Y,L)}function ne(Y,L,V,ie,ze){return L===null||L.tag!==7?(L=fa(V,Y.mode,ie,ze),L.return=Y,L):(L=r(L,V),L.return=Y,L)}function se(Y,L,V){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=uo(""+L,Y.mode,V),L.return=Y,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return V=Nl(L.type,L.key,L.props,null,Y.mode,V),Ar(V,L),V.return=Y,V;case y:return L=fo(L,Y.mode,V),L.return=Y,L;case ce:return L=va(L),se(Y,L,V)}if(ae(L)||D(L))return L=fa(L,Y.mode,V,null),L.return=Y,L;if(typeof L.then=="function")return se(Y,Ol(L),V);if(L.$$typeof===B)return se(Y,Al(Y,L),V);Rl(Y,L)}return null}function K(Y,L,V,ie){var ze=L!==null?L.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return ze!==null?null:w(Y,L,""+V,ie);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return V.key===ze?R(Y,L,V,ie):null;case y:return V.key===ze?$(Y,L,V,ie):null;case ce:return V=va(V),K(Y,L,V,ie)}if(ae(V)||D(V))return ze!==null?null:ne(Y,L,V,ie,null);if(typeof V.then=="function")return K(Y,L,Ol(V),ie);if(V.$$typeof===B)return K(Y,L,Al(Y,V),ie);Rl(Y,V)}return null}function J(Y,L,V,ie,ze){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Y=Y.get(V)||null,w(L,Y,""+ie,ze);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return Y=Y.get(ie.key===null?V:ie.key)||null,R(L,Y,ie,ze);case y:return Y=Y.get(ie.key===null?V:ie.key)||null,$(L,Y,ie,ze);case ce:return ie=va(ie),J(Y,L,V,ie,ze)}if(ae(ie)||D(ie))return Y=Y.get(V)||null,ne(L,Y,ie,ze,null);if(typeof ie.then=="function")return J(Y,L,V,Ol(ie),ze);if(ie.$$typeof===B)return J(Y,L,V,Al(L,ie),ze);Rl(L,ie)}return null}function xe(Y,L,V,ie){for(var ze=null,Ye=null,we=L,Me=L=0,He=null;we!==null&&Me<V.length;Me++){we.index>Me?(He=we,we=null):He=we.sibling;var Ze=K(Y,we,V[Me],ie);if(Ze===null){we===null&&(we=He);break}e&&we&&Ze.alternate===null&&t(Y,we),L=l(Ze,L,Me),Ye===null?ze=Ze:Ye.sibling=Ze,Ye=Ze,we=He}if(Me===V.length)return n(Y,we),Le&&bn(Y,Me),ze;if(we===null){for(;Me<V.length;Me++)we=se(Y,V[Me],ie),we!==null&&(L=l(we,L,Me),Ye===null?ze=we:Ye.sibling=we,Ye=we);return Le&&bn(Y,Me),ze}for(we=a(we);Me<V.length;Me++)He=J(we,Y,Me,V[Me],ie),He!==null&&(e&&He.alternate!==null&&we.delete(He.key===null?Me:He.key),L=l(He,L,Me),Ye===null?ze=He:Ye.sibling=He,Ye=He);return e&&we.forEach(function(na){return t(Y,na)}),Le&&bn(Y,Me),ze}function Ce(Y,L,V,ie){if(V==null)throw Error(p(151));for(var ze=null,Ye=null,we=L,Me=L=0,He=null,Ze=V.next();we!==null&&!Ze.done;Me++,Ze=V.next()){we.index>Me?(He=we,we=null):He=we.sibling;var na=K(Y,we,Ze.value,ie);if(na===null){we===null&&(we=He);break}e&&we&&na.alternate===null&&t(Y,we),L=l(na,L,Me),Ye===null?ze=na:Ye.sibling=na,Ye=na,we=He}if(Ze.done)return n(Y,we),Le&&bn(Y,Me),ze;if(we===null){for(;!Ze.done;Me++,Ze=V.next())Ze=se(Y,Ze.value,ie),Ze!==null&&(L=l(Ze,L,Me),Ye===null?ze=Ze:Ye.sibling=Ze,Ye=Ze);return Le&&bn(Y,Me),ze}for(we=a(we);!Ze.done;Me++,Ze=V.next())Ze=J(we,Y,Me,Ze.value,ie),Ze!==null&&(e&&Ze.alternate!==null&&we.delete(Ze.key===null?Me:Ze.key),L=l(Ze,L,Me),Ye===null?ze=Ze:Ye.sibling=Ze,Ye=Ze);return e&&we.forEach(function(ug){return t(Y,ug)}),Le&&bn(Y,Me),ze}function Je(Y,L,V,ie){if(typeof V=="object"&&V!==null&&V.type===j&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case S:e:{for(var ze=V.key;L!==null;){if(L.key===ze){if(ze=V.type,ze===j){if(L.tag===7){n(Y,L.sibling),ie=r(L,V.props.children),ie.return=Y,Y=ie;break e}}else if(L.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ce&&va(ze)===L.type){n(Y,L.sibling),ie=r(L,V.props),Ar(ie,V),ie.return=Y,Y=ie;break e}n(Y,L);break}else t(Y,L);L=L.sibling}V.type===j?(ie=fa(V.props.children,Y.mode,ie,V.key),ie.return=Y,Y=ie):(ie=Nl(V.type,V.key,V.props,null,Y.mode,ie),Ar(ie,V),ie.return=Y,Y=ie)}return c(Y);case y:e:{for(ze=V.key;L!==null;){if(L.key===ze)if(L.tag===4&&L.stateNode.containerInfo===V.containerInfo&&L.stateNode.implementation===V.implementation){n(Y,L.sibling),ie=r(L,V.children||[]),ie.return=Y,Y=ie;break e}else{n(Y,L);break}else t(Y,L);L=L.sibling}ie=fo(V,Y.mode,ie),ie.return=Y,Y=ie}return c(Y);case ce:return V=va(V),Je(Y,L,V,ie)}if(ae(V))return xe(Y,L,V,ie);if(D(V)){if(ze=D(V),typeof ze!="function")throw Error(p(150));return V=ze.call(V),Ce(Y,L,V,ie)}if(typeof V.then=="function")return Je(Y,L,Ol(V),ie);if(V.$$typeof===B)return Je(Y,L,Al(Y,V),ie);Rl(Y,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,L!==null&&L.tag===6?(n(Y,L.sibling),ie=r(L,V),ie.return=Y,Y=ie):(n(Y,L),ie=uo(V,Y.mode,ie),ie.return=Y,Y=ie),c(Y)):n(Y,L)}return function(Y,L,V,ie){try{Cr=0;var ze=Je(Y,L,V,ie);return Xa=null,ze}catch(we){if(we===$a||we===El)throw we;var Ye=Lt(29,we,null,Y.mode);return Ye.lanes=ie,Ye.return=Y,Ye}}}var ya=Au(!0),ku=Au(!1),Un=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=zl(e),hu(e,null,n),t}return jl(e,a,t,n),zl(e)}function kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_c(e,n)}}function No(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?r=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var To=!1;function Er(){if(To){var e=Va;if(e!==null)throw e}}function Mr(e,t,n,a){To=!1;var r=e.updateQueue;Un=!1;var l=r.firstBaseUpdate,c=r.lastBaseUpdate,w=r.shared.pending;if(w!==null){r.shared.pending=null;var R=w,$=R.next;R.next=null,c===null?l=$:c.next=$,c=R;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,w=ne.lastBaseUpdate,w!==c&&(w===null?ne.firstBaseUpdate=$:w.next=$,ne.lastBaseUpdate=R))}if(l!==null){var se=r.baseState;c=0,ne=$=R=null,w=l;do{var K=w.lane&-536870913,J=K!==w.lane;if(J?(Be&K)===K:(a&K)===K){K!==0&&K===Ga&&(To=!0),ne!==null&&(ne=ne.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var xe=e,Ce=w;K=t;var Je=n;switch(Ce.tag){case 1:if(xe=Ce.payload,typeof xe=="function"){se=xe.call(Je,se,K);break e}se=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Ce.payload,K=typeof xe=="function"?xe.call(Je,se,K):xe,K==null)break e;se=_({},se,K);break e;case 2:Un=!0}}K=w.callback,K!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[K]:J.push(K))}else J={lane:K,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ne===null?($=ne=J,R=se):ne=ne.next=J,c|=K;if(w=w.next,w===null){if(w=r.shared.pending,w===null)break;J=w,w=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);ne===null&&(R=se),r.baseState=R,r.firstBaseUpdate=$,r.lastBaseUpdate=ne,l===null&&(r.shared.lanes=0),Xn|=c,e.lanes=c,e.memoizedState=se}}function Eu(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function Mu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eu(n[e],t)}var Qa=N(null),Dl=N(0);function Ou(e,t){e=An,te(Dl,e),te(Qa,t),An=e|t.baseLanes}function Co(){te(Dl,An),te(Qa,Qa.current)}function Ao(){An=Dl.current,E(Qa),E(Dl)}var Ut=N(null),en=null;function Zn(e){var t=e.alternate;te(ot,ot.current&1),te(Ut,e),en===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(en=e)}function ko(e){te(ot,ot.current),te(Ut,e),en===null&&(en=e)}function Ru(e){e.tag===22?(te(ot,ot.current),te(Ut,e),en===null&&(en=e)):Gn()}function Gn(){te(ot,ot.current),te(Ut,Ut.current)}function qt(e){E(Ut),en===e&&(en=null),E(ot)}var ot=N(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bs(n)||Hs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _n=0,Ee=null,Qe=null,ut=null,Hl=!1,Ka=!1,xa=!1,Ll=0,Or=0,Ja=null,em=0;function lt(){throw Error(p(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Mo(e,t,n,a,r,l){return _n=l,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Z.H=e===null||e.memoizedState===null?vd:Qo,xa=!1,l=n(a,r),xa=!1,Ka&&(l=Bu(t,n,a,r)),Du(e),l}function Du(e){Z.H=Br;var t=Qe!==null&&Qe.next!==null;if(_n=0,ut=Qe=Ee=null,Hl=!1,Or=0,Ja=null,t)throw Error(p(300));e===null||dt||(e=e.dependencies,e!==null&&Cl(e)&&(dt=!0))}function Bu(e,t,n,a){Ee=e;var r=0;do{if(Ka&&(Ja=null),Or=0,Ka=!1,25<=r)throw Error(p(301));if(r+=1,ut=Qe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}Z.H=bd,l=t(n,a)}while(Ka);return l}function tm(){var e=Z.H,t=e.useState()[0];return t=typeof t.then=="function"?Rr(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Ee.flags|=1024),t}function Oo(){var e=Ll!==0;return Ll=0,e}function Ro(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(Hl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hl=!1}_n=0,ut=Qe=Ee=null,Ka=!1,Or=Ll=0,Ja=null}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ee.memoizedState=ut=e:ut=ut.next=e,ut}function st(){if(Qe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=ut===null?Ee.memoizedState:ut.next;if(t!==null)ut=t,Qe=e;else{if(e===null)throw Ee.alternate===null?Error(p(467)):Error(p(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},ut===null?Ee.memoizedState=ut=e:ut=ut.next=e}return ut}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rr(e){var t=Or;return Or+=1,Ja===null&&(Ja=[]),e=Nu(Ja,e,t),t=Ee,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,Z.H=t===null||t.memoizedState===null?vd:Qo),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rr(e);if(e.$$typeof===B)return yt(e)}throw Error(p(438,String(e)))}function Bo(e){var t=null,n=Ee.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ul(),Ee.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=pe;return t.index++,n}function Sn(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=st();return Ho(t,Qe,e)}function Ho(e,t,n){var a=e.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=n;var r=e.baseQueue,l=a.pending;if(l!==null){if(r!==null){var c=r.next;r.next=l.next,l.next=c}t.baseQueue=r=l,a.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var w=c=null,R=null,$=t,ne=!1;do{var se=$.lane&-536870913;if(se!==$.lane?(Be&se)===se:(_n&se)===se){var K=$.revertLane;if(K===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),se===Ga&&(ne=!0);else if((_n&K)===K){$=$.next,K===Ga&&(ne=!0);continue}else se={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},R===null?(w=R=se,c=l):R=R.next=se,Ee.lanes|=K,Xn|=K;se=$.action,xa&&n(l,se),l=$.hasEagerState?$.eagerState:n(l,se)}else K={lane:se,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},R===null?(w=R=K,c=l):R=R.next=K,Ee.lanes|=se,Xn|=se;$=$.next}while($!==null&&$!==t);if(R===null?c=l:R.next=w,!Ht(l,e.memoizedState)&&(dt=!0,ne&&(n=Va,n!==null)))throw n;e.memoizedState=l,e.baseState=c,e.baseQueue=R,a.lastRenderedState=l}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Lo(e){var t=st(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var c=r=r.next;do l=e(l,c.action),c=c.next;while(c!==r);Ht(l,t.memoizedState)||(dt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Hu(e,t,n){var a=Ee,r=st(),l=Le;if(l){if(n===void 0)throw Error(p(407));n=n()}else n=t();var c=!Ht((Qe||r).memoizedState,n);if(c&&(r.memoizedState=n,dt=!0),r=r.queue,Yo(qu.bind(null,a,r,e),[e]),r.getSnapshot!==t||c||ut!==null&&ut.memoizedState.tag&1){if(a.flags|=2048,Wa(9,{destroy:void 0},Uu.bind(null,a,r,n,t),null),Fe===null)throw Error(p(349));l||(_n&127)!==0||Lu(a,t,n)}return n}function Lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t=Ul(),Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,a){t.value=n,t.getSnapshot=a,Yu(t)&&Zu(e)}function qu(e,t,n){return n(function(){Yu(t)&&Zu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Zu(e){var t=da(e,2);t!==null&&Bt(t,e,2)}function Uo(e){var t=jt();if(typeof e=="function"){var n=e;if(e=n(),xa){$t(!0);try{n()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function Gu(e,t,n,a){return e.baseState=n,Ho(e,Qe,typeof a=="function"?a:Sn)}function nm(e,t,n,a,r){if(Vl(e))throw Error(p(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};Z.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,Vu(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Vu(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var l=Z.T,c={};Z.T=c;try{var w=n(r,a),R=Z.S;R!==null&&R(c,w),$u(e,t,w)}catch($){qo(e,t,$)}finally{l!==null&&c.types!==null&&(l.types=c.types),Z.T=l}}else try{l=n(r,a),$u(e,t,l)}catch($){qo(e,t,$)}}function $u(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Xu(e,t,a)},function(a){return qo(e,t,a)}):Xu(e,t,n)}function Xu(e,t,n){t.status="fulfilled",t.value=n,Qu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vu(e,n)))}function qo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qu(t),t=t.next;while(t!==a)}e.action=null}function Qu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ku(e,t){return t}function Ju(e,t){if(Le){var n=Fe.formState;if(n!==null){e:{var a=Ee;if(Le){if(Pe){t:{for(var r=Pe,l=Pt;r.nodeType!==8;){if(!l){r=null;break t}if(r=tn(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){Pe=tn(r.nextSibling),a=r.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=jt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ku,lastRenderedState:t},n.queue=a,n=pd.bind(null,Ee,a),a.dispatch=n,a=Uo(!1),l=Xo.bind(null,Ee,!1,a.queue),a=jt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=nm.bind(null,Ee,r,l,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Wu(e){var t=st();return Fu(t,Qe,e)}function Fu(e,t,n){if(t=Ho(e,t,Ku)[0],e=Yl(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Rr(t)}catch(c){throw c===$a?El:c}else a=t;t=st();var r=t.queue,l=r.dispatch;return n!==t.memoizedState&&(Ee.flags|=2048,Wa(9,{destroy:void 0},am.bind(null,r,n),null)),[a,l,e]}function am(e,t){e.action=t}function Iu(e){var t=st(),n=Qe;if(n!==null)return Fu(t,n,e);st(),t=t.memoizedState,n=st();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Ee.updateQueue,t===null&&(t=Ul(),Ee.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pu(){return st().memoizedState}function Zl(e,t,n,a){var r=jt();Ee.flags|=e,r.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gl(e,t,n,a){var r=st();a=a===void 0?null:a;var l=r.memoizedState.inst;Qe!==null&&a!==null&&Eo(a,Qe.memoizedState.deps)?r.memoizedState=Wa(t,l,n,a):(Ee.flags|=e,r.memoizedState=Wa(1|t,l,n,a))}function ed(e,t){Zl(8390656,8,e,t)}function Yo(e,t){Gl(2048,8,e,t)}function rm(e){Ee.flags|=4;var t=Ee.updateQueue;if(t===null)t=Ul(),Ee.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function td(e){var t=st().memoizedState;return rm({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return Gl(4,2,e,t)}function ad(e,t){return Gl(4,4,e,t)}function rd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){n=n!=null?n.concat([e]):null,Gl(4,4,rd.bind(null,t,e),n)}function Zo(){}function id(e,t){var n=st();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Eo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function od(e,t){var n=st();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Eo(t,a[1]))return a[0];if(a=e(),xa){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a}function Go(e,t,n){return n===void 0||(_n&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cf(),Ee.lanes|=e,Xn|=e,n)}function sd(e,t,n,a){return Ht(n,t)?n:Qa.current!==null?(e=Go(e,n,a),Ht(e,t)||(dt=!0),e):(_n&42)===0||(_n&1073741824)!==0&&(Be&261930)===0?(dt=!0,e.memoizedState=n):(e=cf(),Ee.lanes|=e,Xn|=e,t)}function cd(e,t,n,a,r){var l=G.p;G.p=l!==0&&8>l?l:8;var c=Z.T,w={};Z.T=w,Xo(e,!1,t,n);try{var R=r(),$=Z.S;if($!==null&&$(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var ne=Pp(R,a);Dr(e,t,ne,Gt(e))}else Dr(e,t,a,Gt(e))}catch(se){Dr(e,t,{then:function(){},status:"rejected",reason:se},Gt())}finally{G.p=l,c!==null&&w.types!==null&&(c.types=w.types),Z.T=c}}function lm(){}function Vo(e,t,n,a){if(e.tag!==5)throw Error(p(476));var r=ud(e).queue;cd(e,r,t,me,n===null?lm:function(){return dd(e),n(a)})}function ud(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dd(e){var t=ud(e);t.next===null&&(t=e.alternate.memoizedState),Dr(e,t.next.queue,{},Gt())}function $o(){return yt(Ir)}function fd(){return st().memoizedState}function hd(){return st().memoizedState}function im(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gt();e=qn(n);var a=Yn(t,e,n);a!==null&&(Bt(a,t,n),kr(a,t,n)),t={cache:xo()},e.payload=t;return}t=t.return}}function om(e,t,n){var a=Gt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vl(e)?md(t,n):(n=so(e,t,n,a),n!==null&&(Bt(n,e,a),gd(n,t,a)))}function pd(e,t,n){var a=Gt();Dr(e,t,n,a)}function Dr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))md(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,w=l(c,n);if(r.hasEagerState=!0,r.eagerState=w,Ht(w,c))return jl(e,t,r,0),Fe===null&&wl(),!1}catch{}if(n=so(e,t,r,a),n!==null)return Bt(n,e,a),gd(n,t,a),!0}return!1}function Xo(e,t,n,a){if(a={lane:2,revertLane:js(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(t)throw Error(p(479))}else t=so(e,n,a,2),t!==null&&Bt(t,e,2)}function Vl(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function md(e,t){Ka=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_c(e,n)}}var Br={readContext:yt,use:ql,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};Br.useEffectEvent=lt;var vd={readContext:yt,use:ql,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:ed,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Zl(4194308,4,rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){Zl(4,2,e,t)},useMemo:function(e,t){var n=jt();t=t===void 0?null:t;var a=e();if(xa){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=jt();if(n!==void 0){var r=n(t);if(xa){$t(!0);try{n(t)}finally{$t(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=om.bind(null,Ee,e),[a.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=pd.bind(null,Ee,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zo,useDeferredValue:function(e,t){var n=jt();return Go(n,e,t)},useTransition:function(){var e=Uo(!1);return e=cd.bind(null,Ee,e.queue,!0,!1),jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Ee,r=jt();if(Le){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),Fe===null)throw Error(p(349));(Be&127)!==0||Lu(a,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,ed(qu.bind(null,a,l,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},Uu.bind(null,a,l,n,t),null),n},useId:function(){var e=jt(),t=Fe.identifierPrefix;if(Le){var n=dn,a=un;n=(a&~(1<<32-at(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ll++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=em++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$o,useFormState:Ju,useActionState:Ju,useOptimistic:function(e){var t=jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xo.bind(null,Ee,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bo,useCacheRefresh:function(){return jt().memoizedState=im.bind(null,Ee)},useEffectEvent:function(e){var t=jt(),n={impl:e};return t.memoizedState=n,function(){if((Ge&2)!==0)throw Error(p(440));return n.impl.apply(void 0,arguments)}}},Qo={readContext:yt,use:ql,useCallback:id,useContext:yt,useEffect:Yo,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:od,useReducer:Yl,useRef:Pu,useState:function(){return Yl(Sn)},useDebugValue:Zo,useDeferredValue:function(e,t){var n=st();return sd(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Yl(Sn)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Rr(e),t]},useSyncExternalStore:Hu,useId:fd,useHostTransitionStatus:$o,useFormState:Wu,useActionState:Wu,useOptimistic:function(e,t){var n=st();return Gu(n,Qe,e,t)},useMemoCache:Bo,useCacheRefresh:hd};Qo.useEffectEvent=td;var bd={readContext:yt,use:ql,useCallback:id,useContext:yt,useEffect:Yo,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:od,useReducer:Lo,useRef:Pu,useState:function(){return Lo(Sn)},useDebugValue:Zo,useDeferredValue:function(e,t){var n=st();return Qe===null?Go(n,e,t):sd(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Lo(Sn)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Rr(e),t]},useSyncExternalStore:Hu,useId:fd,useHostTransitionStatus:$o,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,t){var n=st();return Qe!==null?Gu(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bo,useCacheRefresh:hd};bd.useEffectEvent=td;function Ko(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Gt(),r=qn(a);r.payload=t,n!=null&&(r.callback=n),t=Yn(e,r,a),t!==null&&(Bt(t,e,a),kr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Gt(),r=qn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Yn(e,r,a),t!==null&&(Bt(t,e,a),kr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),a=qn(n);a.tag=2,t!=null&&(a.callback=t),t=Yn(e,a,n),t!==null&&(Bt(t,e,n),kr(t,e,n))}};function yd(e,t,n,a,r,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,c):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,a)||!Sr(r,l):!0}function xd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function _d(e){Sl(e)}function Sd(e){console.error(e)}function wd(e){Sl(e)}function $l(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function jd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Wo(e,t,n){return n=qn(n),n.tag=3,n.payload={element:null},n.callback=function(){$l(e,t)},n}function zd(e){return e=qn(e),e.tag=3,e}function Nd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=a.value;e.payload=function(){return r(l)},e.callback=function(){jd(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){jd(t,n,a),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function sm(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Za(t,n,r,!0),n=Ut.current,n!==null){switch(n.tag){case 31:case 13:return en===null?ai():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Ml?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),_s(e,a,r)),!1;case 22:return n.flags|=65536,a===Ml?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),_s(e,a,r)),!1}throw Error(p(435,n.tag))}return _s(e,a,r),ai(),!1}if(Le)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==mo&&(e=Error(p(422),{cause:a}),zr(Wt(e,n)))):(a!==mo&&(t=Error(p(423),{cause:a}),zr(Wt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Wt(a,n),r=Wo(e.stateNode,a,r),No(e,r),it!==4&&(it=2)),!1;var l=Error(p(520),{cause:a});if(l=Wt(l,n),Vr===null?Vr=[l]:Vr.push(l),it!==4&&(it=2),t===null)return!0;a=Wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Wo(n.stateNode,a,e),No(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Qn===null||!Qn.has(l))))return n.flags|=65536,r&=-r,n.lanes|=r,r=zd(r),Nd(r,e,n,a),No(n,r),!1}n=n.return}while(n!==null);return!1}var Fo=Error(p(461)),dt=!1;function xt(e,t,n,a){t.child=e===null?ku(t,null,n,a):ya(t,e.child,n,a)}function Td(e,t,n,a,r){n=n.render;var l=t.ref;if("ref"in a){var c={};for(var w in a)w!=="ref"&&(c[w]=a[w])}else c=a;return ma(t),a=Mo(e,t,n,c,l,r),w=Oo(),e!==null&&!dt?(Ro(e,t,r),wn(e,t,r)):(Le&&w&&ho(t),t.flags|=1,xt(e,t,a,r),t.child)}function Cd(e,t,n,a,r){if(e===null){var l=n.type;return typeof l=="function"&&!co(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Ad(e,t,l,a,r)):(e=Nl(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!ls(e,r)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(c,a)&&e.ref===t.ref)return wn(e,t,r)}return t.flags|=1,e=vn(l,a),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,n,a,r){if(e!==null){var l=e.memoizedProps;if(Sr(l,a)&&e.ref===t.ref)if(dt=!1,t.pendingProps=a=l,ls(e,r))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,wn(e,t,r)}return Io(e,t,n,a,r)}function kd(e,t,n,a){var r=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~l}else a=0,t.child=null;return Ed(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,l!==null?l.cachePool:null),l!==null?Ou(t,l):Co(),Ru(t);else return a=t.lanes=536870912,Ed(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(kl(t,l.cachePool),Ou(t,l),Gn(),t.memoizedState=null):(e!==null&&kl(t,null),Co(),Gn());return xt(e,t,r,n),t.child}function Hr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ed(e,t,n,a,r){var l=So();return l=l===null?null:{parent:ct._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&kl(t,null),Co(),Ru(t),e!==null&&Za(e,t,a,!0),t.childLanes=r,null}function Xl(e,t){return t=Kl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Md(e,t,n){return ya(t,e.child,null,n),e=Xl(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function cm(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Le){if(a.mode==="hidden")return e=Xl(t,a),t.lanes=536870912,Hr(null,e);if(ko(t),(e=Pe)?(e=$f(e,Pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=mu(e),n.return=t,t.child=n,bt=t,Pe=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return Xl(t,a)}var l=e.memoizedState;if(l!==null){var c=l.dehydrated;if(ko(t),r)if(t.flags&256)t.flags&=-257,t=Md(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(dt||Za(e,t,n,!1),r=(n&e.childLanes)!==0,dt||r){if(a=Fe,a!==null&&(c=Sc(a,n),c!==0&&c!==l.retryLane))throw l.retryLane=c,da(e,c),Bt(a,e,c),Fo;ai(),t=Md(e,t,n)}else e=l.treeContext,Pe=tn(c.nextSibling),bt=t,Le=!0,Bn=null,Pt=!1,e!==null&&bu(t,e),t=Xl(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ql(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(p(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Io(e,t,n,a,r){return ma(t),n=Mo(e,t,n,a,void 0,r),a=Oo(),e!==null&&!dt?(Ro(e,t,r),wn(e,t,r)):(Le&&a&&ho(t),t.flags|=1,xt(e,t,n,r),t.child)}function Od(e,t,n,a,r,l){return ma(t),t.updateQueue=null,n=Bu(t,a,n,r),Du(e),a=Oo(),e!==null&&!dt?(Ro(e,t,l),wn(e,t,l)):(Le&&a&&ho(t),t.flags|=1,xt(e,t,n,l),t.child)}function Rd(e,t,n,a,r){if(ma(t),t.stateNode===null){var l=La,c=n.contextType;typeof c=="object"&&c!==null&&(l=yt(c)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Jo,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},jo(t),c=n.contextType,l.context=typeof c=="object"&&c!==null?yt(c):La,l.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(Ko(t,n,c,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&Jo.enqueueReplaceState(l,l.state,null),Mr(t,a,l,r),Er(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var w=t.memoizedProps,R=_a(n,w);l.props=R;var $=l.context,ne=n.contextType;c=La,typeof ne=="object"&&ne!==null&&(c=yt(ne));var se=n.getDerivedStateFromProps;ne=typeof se=="function"||typeof l.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,ne||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(w||$!==c)&&xd(t,l,a,c),Un=!1;var K=t.memoizedState;l.state=K,Mr(t,a,l,r),Er(),$=t.memoizedState,w||K!==$||Un?(typeof se=="function"&&(Ko(t,n,se,a),$=t.memoizedState),(R=Un||yd(t,n,R,a,K,$,c))?(ne||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=$),l.props=a,l.state=$,l.context=c,a=R):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,zo(e,t),c=t.memoizedProps,ne=_a(n,c),l.props=ne,se=t.pendingProps,K=l.context,$=n.contextType,R=La,typeof $=="object"&&$!==null&&(R=yt($)),w=n.getDerivedStateFromProps,($=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==se||K!==R)&&xd(t,l,a,R),Un=!1,K=t.memoizedState,l.state=K,Mr(t,a,l,r),Er();var J=t.memoizedState;c!==se||K!==J||Un||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof w=="function"&&(Ko(t,n,w,a),J=t.memoizedState),(ne=Un||yd(t,n,ne,a,K,J,R)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?($||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,J,R),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,J,R)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=J),l.props=a,l.state=J,l.context=R,a=ne):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,Ql(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=ya(t,e.child,null,r),t.child=ya(t,null,n,r)):xt(e,t,n,r),t.memoizedState=l.state,e=t.child):e=wn(e,t,r),e}function Dd(e,t,n,a){return ha(),t.flags|=256,xt(e,t,n,a),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function es(e){return{baseLanes:e,cachePool:ju()}}function ts(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function Bd(e,t,n){var a=t.pendingProps,r=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),c&&(r=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(r?Zn(t):Gn(),(e=Pe)?(e=$f(e,Pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=mu(e),n.return=t,t.child=n,bt=t,Pe=null)):e=null,e===null)throw Hn(t);return Hs(e)?t.lanes=32:t.lanes=536870912,null}var w=a.children;return a=a.fallback,r?(Gn(),r=t.mode,w=Kl({mode:"hidden",children:w},r),a=fa(a,r,n,null),w.return=t,a.return=t,w.sibling=a,t.child=w,a=t.child,a.memoizedState=es(n),a.childLanes=ts(e,c,n),t.memoizedState=Po,Hr(null,a)):(Zn(t),ns(t,w))}var R=e.memoizedState;if(R!==null&&(w=R.dehydrated,w!==null)){if(l)t.flags&256?(Zn(t),t.flags&=-257,t=as(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),w=a.fallback,r=t.mode,a=Kl({mode:"visible",children:a.children},r),w=fa(w,r,n,null),w.flags|=2,a.return=t,w.return=t,a.sibling=w,t.child=a,ya(t,e.child,null,n),a=t.child,a.memoizedState=es(n),a.childLanes=ts(e,c,n),t.memoizedState=Po,t=Hr(null,a));else if(Zn(t),Hs(w)){if(c=w.nextSibling&&w.nextSibling.dataset,c)var $=c.dgst;c=$,a=Error(p(419)),a.stack="",a.digest=c,zr({value:a,source:null,stack:null}),t=as(e,t,n)}else if(dt||Za(e,t,n,!1),c=(n&e.childLanes)!==0,dt||c){if(c=Fe,c!==null&&(a=Sc(c,n),a!==0&&a!==R.retryLane))throw R.retryLane=a,da(e,a),Bt(c,e,a),Fo;Bs(w)||ai(),t=as(e,t,n)}else Bs(w)?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,Pe=tn(w.nextSibling),bt=t,Le=!0,Bn=null,Pt=!1,e!==null&&bu(t,e),t=ns(t,a.children),t.flags|=4096);return t}return r?(Gn(),w=a.fallback,r=t.mode,R=e.child,$=R.sibling,a=vn(R,{mode:"hidden",children:a.children}),a.subtreeFlags=R.subtreeFlags&65011712,$!==null?w=vn($,w):(w=fa(w,r,n,null),w.flags|=2),w.return=t,a.return=t,a.sibling=w,t.child=a,Hr(null,a),a=t.child,w=e.child.memoizedState,w===null?w=es(n):(r=w.cachePool,r!==null?(R=ct._currentValue,r=r.parent!==R?{parent:R,pool:R}:r):r=ju(),w={baseLanes:w.baseLanes|n,cachePool:r}),a.memoizedState=w,a.childLanes=ts(e,c,n),t.memoizedState=Po,Hr(e.child,a)):(Zn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function ns(e,t){return t=Kl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kl(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function as(e,t,n){return ya(t,e.child,null,n),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),bo(e.return,t,n)}function rs(e,t,n,a,r,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=r,c.treeForkCount=l)}function Ld(e,t,n){var a=t.pendingProps,r=a.revealOrder,l=a.tail;a=a.children;var c=ot.current,w=(c&2)!==0;if(w?(c=c&1|2,t.flags|=128):c&=1,te(ot,c),xt(e,t,a,n),a=Le?jr:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hd(e,n,t);else if(e.tag===19)Hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),rs(t,!1,r,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Bl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}rs(t,!0,n,null,l,a);break;case"together":rs(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function um(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Ln(t,ct,e.memoizedState.cache),ha();break;case 27:case 5:tt(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Ln(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ko(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Zn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bd(e,t,n):(Zn(t),e=wn(e,t,n),e!==null?e.sibling:null);Zn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Za(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Ld(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),te(ot,ot.current),a)break;return null;case 22:return t.lanes=0,kd(e,t,n,t.pendingProps);case 24:Ln(t,ct,e.memoizedState.cache)}return wn(e,t,n)}function Ud(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!ls(e,n)&&(t.flags&128)===0)return dt=!1,um(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Le&&(t.flags&1048576)!==0&&vu(t,jr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")co(e)?(a=_a(e,a),t.tag=1,t=Rd(null,t,e,a,n)):(t.tag=0,t=Io(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===H){t.tag=11,t=Td(null,t,e,a,n);break e}else if(r===X){t.tag=14,t=Cd(null,t,e,a,n);break e}}throw t=x(e)||e,Error(p(306,t,""))}}return t;case 0:return Io(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=_a(a,t.pendingProps),Rd(e,t,a,r,n);case 3:e:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(p(387));a=t.pendingProps;var l=t.memoizedState;r=l.element,zo(e,t),Mr(t,a,null,n);var c=t.memoizedState;if(a=c.cache,Ln(t,ct,a),a!==l.cache&&yo(t,[ct],n,!0),Er(),a=c.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Dd(e,t,a,n);break e}else if(a!==r){r=Wt(Error(p(424)),t),zr(r),t=Dd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pe=tn(e.firstChild),bt=t,Le=!0,Bn=null,Pt=!0,n=ku(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ha(),a===r){t=wn(e,t,n);break e}xt(e,t,a,n)}t=t.child}return t;case 26:return Ql(e,t),e===null?(n=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:Le||(n=t.type,e=t.pendingProps,a=ui(Se.current).createElement(n),a[vt]=t,a[kt]=e,_t(a,n,e),mt(a),t.stateNode=a):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return tt(t),e===null&&Le&&(a=t.stateNode=Kf(t.type,t.pendingProps,Se.current),bt=t,Pt=!0,r=Pe,Fn(t.type)?(Ls=r,Pe=tn(a.firstChild)):Pe=r),xt(e,t,t.pendingProps.children,n),Ql(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((r=a=Pe)&&(a=qm(a,t.type,t.pendingProps,Pt),a!==null?(t.stateNode=a,bt=t,Pe=tn(a.firstChild),Pt=!1,r=!0):r=!1),r||Hn(t)),tt(t),r=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,a=l.children,Os(r,l)?a=null:c!==null&&Os(r,c)&&(t.flags|=32),t.memoizedState!==null&&(r=Mo(e,t,tm,null,null,n),Ir._currentValue=r),Ql(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&Le&&((e=n=Pe)&&(n=Ym(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,bt=t,Pe=null,e=!0):e=!1),e||Hn(t)),null;case 13:return Bd(e,t,n);case 4:return he(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ya(t,null,a,n):xt(e,t,a,n),t.child;case 11:return Td(e,t,t.type,t.pendingProps,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ln(t,t.type,a.value),xt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ma(t),r=yt(r),a=a(r),t.flags|=1,xt(e,t,a,n),t.child;case 14:return Cd(e,t,t.type,t.pendingProps,n);case 15:return Ad(e,t,t.type,t.pendingProps,n);case 19:return Ld(e,t,n);case 31:return cm(e,t,n);case 22:return kd(e,t,n,t.pendingProps);case 24:return ma(t),a=yt(ct),e===null?(r=So(),r===null&&(r=Fe,l=xo(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=n),r=l),t.memoizedState={parent:a,cache:r},jo(t),Ln(t,ct,r)):((e.lanes&n)!==0&&(zo(e,t),Mr(t,null,null,n),Er()),r=e.memoizedState,l=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ln(t,ct,a)):(a=l.cache,Ln(t,ct,a),a!==r.cache&&yo(t,[ct],n,!0))),xt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function jn(e){e.flags|=4}function is(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(hf())e.flags|=8192;else throw ba=Ml,wo}else e.flags&=-16777217}function qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nh(t))if(hf())e.flags|=8192;else throw ba=Ml,wo}function Jl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yc():536870912,e.lanes|=t,er|=t)}function Lr(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dm(e,t,n){var a=t.pendingProps;switch(po(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xn(ct),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ya(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,go())),et(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(jn(t),l!==null?(et(t),qd(t,l)):(et(t),is(t,r,null,a,n))):l?l!==e.memoizedState?(jn(t),et(t),qd(t,l)):(et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&jn(t),et(t),is(t,r,e,a,n)),null;case 27:if(Ie(t),n=Se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return et(t),null}e=P.current,Ya(t)?yu(t):(e=Kf(r,a,n),t.stateNode=e,jn(t))}return et(t),null;case 5:if(Ie(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return et(t),null}if(l=P.current,Ya(t))yu(t);else{var c=ui(Se.current);switch(l){case 1:l=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=c.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?c.createElement(r,{is:a.is}):c.createElement(r)}}l[vt]=t,l[kt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)l.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=l;e:switch(_t(l,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jn(t)}}return et(t),is(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(p(166));if(e=Se.current,Ya(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Hf(e.nodeValue,n)),e||Hn(t,!0)}else e=ui(e).createTextNode(a),e[vt]=t,t.stateNode=e}return et(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ya(t),n!==null){if(e===null){if(!a)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),e=!1}else n=go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ya(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(p(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(p(317));r[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),r=!1}else r=go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jl(t,t.updateQueue),et(t),null);case 4:return Te(),e===null&&Cs(t.stateNode.containerInfo),et(t),null;case 10:return xn(t.type),et(t),null;case 19:if(E(ot),a=t.memoizedState,a===null)return et(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Lr(a,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Bl(e),l!==null){for(t.flags|=128,Lr(a,!1),e=l.updateQueue,t.updateQueue=e,Jl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pu(n,e),n=n.sibling;return te(ot,ot.current&1|2),Le&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&be()>ei&&(t.flags|=128,r=!0,Lr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Jl(t,e),Lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Le)return et(t),null}else 2*be()-a.renderingStartTime>ei&&n!==536870912&&(t.flags|=128,r=!0,Lr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=be(),e.sibling=null,n=ot.current,te(ot,r?n&1|2:n&1),Le&&bn(t,a.treeForkCount),e):(et(t),null);case 22:case 23:return qt(t),Ao(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&Jl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&E(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(ct),et(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function fm(e,t){switch(po(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(ct),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ie(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(p(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(ot),null;case 4:return Te(),null;case 10:return xn(t.type),null;case 22:case 23:return qt(t),Ao(),e!==null&&E(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(ct),null;case 25:return null;default:return null}}function Yd(e,t){switch(po(t),t.tag){case 3:xn(ct),Te();break;case 26:case 27:case 5:Ie(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:E(ot);break;case 10:xn(t.type);break;case 22:case 23:qt(t),Ao(),e!==null&&E(ga);break;case 24:xn(ct)}}function Ur(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var l=n.create,c=n.inst;a=l(),c.destroy=a}n=n.next}while(n!==r)}}catch(w){Xe(t,t.return,w)}}function Vn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){var c=a.inst,w=c.destroy;if(w!==void 0){c.destroy=void 0,r=t;var R=n,$=w;try{$()}catch(ne){Xe(r,R,ne)}}}a=a.next}while(a!==l)}}catch(ne){Xe(t,t.return,ne)}}function Zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mu(t,n)}catch(a){Xe(e,e.return,a)}}}function Gd(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Xe(e,t,a)}}function qr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Xe(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Xe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function Vd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Xe(e,e.return,r)}}function os(e,t,n){try{var a=e.stateNode;Rm(a,e.type,n,t),a[kt]=t}catch(r){Xe(e,e.return,r)}}function $d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fn(e.type)||e.tag===4}function ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn));else if(a!==4&&(a===27&&Fn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function Wl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Fn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Xd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);_t(t,a,n),t[vt]=e,t[kt]=n}catch(l){Xe(e,e.return,l)}}var zn=!1,ft=!1,us=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,gt=null;function hm(e,t){if(e=e.containerInfo,Es=vi,e=lu(e),no(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,w=-1,R=-1,$=0,ne=0,se=e,K=null;t:for(;;){for(var J;se!==n||r!==0&&se.nodeType!==3||(w=c+r),se!==l||a!==0&&se.nodeType!==3||(R=c+a),se.nodeType===3&&(c+=se.nodeValue.length),(J=se.firstChild)!==null;)K=se,se=J;for(;;){if(se===e)break t;if(K===n&&++$===r&&(w=c),K===l&&++ne===a&&(R=c),(J=se.nextSibling)!==null)break;se=K,K=se.parentNode}se=J}n=w===-1||R===-1?null:{start:w,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},vi=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,r=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var xe=_a(n.type,r);e=a.getSnapshotBeforeUpdate(xe,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){Xe(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ds(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function Kd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&Ur(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){Xe(n,n.return,c)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Xe(n,n.return,c)}}a&64&&Zd(n),a&512&&qr(n,n.return);break;case 3:if(Tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mu(e,t)}catch(c){Xe(n,n.return,c)}}break;case 27:t===null&&a&4&&Xd(n);case 26:case 5:Tn(e,n),t===null&&a&4&&Vd(n),a&512&&qr(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),a&4&&Fd(e,n);break;case 13:Tn(e,n),a&4&&Id(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Sm.bind(null,n),Zm(e,n))));break;case 22:if(a=n.memoizedState!==null||zn,!a){t=t!==null&&t.memoizedState!==null||ft,r=zn;var l=ft;zn=a,(ft=t)&&!l?Cn(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),zn=r,ft=l}break;case 30:break;default:Tn(e,n)}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ui(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nt=null,Mt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)Wd(e,t,n),n=n.sibling}function Wd(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:ft||fn(n,t),Nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ft||fn(n,t);var a=nt,r=Mt;Fn(n.type)&&(nt=n.stateNode,Mt=!1),Nn(e,t,n),Jr(n.stateNode),nt=a,Mt=r;break;case 5:ft||fn(n,t);case 6:if(a=nt,r=Mt,nt=null,Nn(e,t,n),nt=a,Mt=r,nt!==null)if(Mt)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(n.stateNode)}catch(l){Xe(n,t,l)}else try{nt.removeChild(n.stateNode)}catch(l){Xe(n,t,l)}break;case 18:nt!==null&&(Mt?(e=nt,Gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),sr(e)):Gf(nt,n.stateNode));break;case 4:a=nt,r=Mt,nt=n.stateNode.containerInfo,Mt=!0,Nn(e,t,n),nt=a,Mt=r;break;case 0:case 11:case 14:case 15:Vn(2,n,t),ft||Vn(4,n,t),Nn(e,t,n);break;case 1:ft||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gd(n,t,a)),Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:ft=(a=ft)||n.memoizedState!==null,Nn(e,t,n),ft=a;break;default:Nn(e,t,n)}}function Fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sr(e)}catch(n){Xe(t,t.return,n)}}}function Id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sr(e)}catch(n){Xe(t,t.return,n)}}function pm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(p(435,e.tag))}}function Fl(e,t){var n=pm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=wm.bind(null,e,a);a.then(r,r)}})}function Ot(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],l=e,c=t,w=c;e:for(;w!==null;){switch(w.tag){case 27:if(Fn(w.type)){nt=w.stateNode,Mt=!1;break e}break;case 5:nt=w.stateNode,Mt=!1;break e;case 3:case 4:nt=w.stateNode.containerInfo,Mt=!0;break e}w=w.return}if(nt===null)throw Error(p(160));Wd(l,c,r),nt=null,Mt=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}var on=null;function Pd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),Rt(e),a&4&&(Vn(3,e,e.return),Ur(3,e),Vn(5,e,e.return));break;case 1:Ot(t,e),Rt(e),a&512&&(ft||n===null||fn(n,n.return)),a&64&&zn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=on;if(Ot(t,e),Rt(e),a&512&&(ft||n===null||fn(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":l=r.getElementsByTagName("title")[0],(!l||l[hr]||l[vt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(a),r.head.insertBefore(l,r.querySelector("head > title"))),_t(l,a,n),l[vt]=e,mt(l),a=l;break e;case"link":var c=eh("link","href",r).get(a+(n.href||""));if(c){for(var w=0;w<c.length;w++)if(l=c[w],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(w,1);break t}}l=r.createElement(a),_t(l,a,n),r.head.appendChild(l);break;case"meta":if(c=eh("meta","content",r).get(a+(n.content||""))){for(w=0;w<c.length;w++)if(l=c[w],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(w,1);break t}}l=r.createElement(a),_t(l,a,n),r.head.appendChild(l);break;default:throw Error(p(468,a))}l[vt]=e,mt(l),a=l}e.stateNode=a}else th(r,e.type,e.stateNode);else e.stateNode=Pf(r,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?th(r,e.type,e.stateNode):Pf(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&os(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ot(t,e),Rt(e),a&512&&(ft||n===null||fn(n,n.return)),n!==null&&a&4&&os(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ot(t,e),Rt(e),a&512&&(ft||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{Ea(r,"")}catch(xe){Xe(e,e.return,xe)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,os(e,r,n!==null?n.memoizedProps:r)),a&1024&&(us=!0);break;case 6:if(Ot(t,e),Rt(e),a&4){if(e.stateNode===null)throw Error(p(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(xe){Xe(e,e.return,xe)}}break;case 3:if(hi=null,r=on,on=di(t.containerInfo),Ot(t,e),on=r,Rt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(xe){Xe(e,e.return,xe)}us&&(us=!1,ef(e));break;case 4:a=on,on=di(e.stateNode.containerInfo),Ot(t,e),Rt(e),on=a;break;case 12:Ot(t,e),Rt(e);break;case 31:Ot(t,e),Rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Fl(e,a)));break;case 13:Ot(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pl=be()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Fl(e,a)));break;case 22:r=e.memoizedState!==null;var R=n!==null&&n.memoizedState!==null,$=zn,ne=ft;if(zn=$||r,ft=ne||R,Ot(t,e),ft=ne,zn=$,Rt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||R||zn||ft||Sa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){R=n=t;try{if(l=R.stateNode,r)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{w=R.stateNode;var se=R.memoizedProps.style,K=se!=null&&se.hasOwnProperty("display")?se.display:null;w.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(xe){Xe(R,R.return,xe)}}}else if(t.tag===6){if(n===null){R=t;try{R.stateNode.nodeValue=r?"":R.memoizedProps}catch(xe){Xe(R,R.return,xe)}}}else if(t.tag===18){if(n===null){R=t;try{var J=R.stateNode;r?Vf(J,!0):Vf(R.stateNode,!1)}catch(xe){Xe(R,R.return,xe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Fl(e,n))));break;case 19:Ot(t,e),Rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Fl(e,a)));break;case 30:break;case 21:break;default:Ot(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($d(a)){n=a;break}a=a.return}if(n==null)throw Error(p(160));switch(n.tag){case 27:var r=n.stateNode,l=ss(e);Wl(e,l,r);break;case 5:var c=n.stateNode;n.flags&32&&(Ea(c,""),n.flags&=-33);var w=ss(e);Wl(e,w,c);break;case 3:case 4:var R=n.stateNode.containerInfo,$=ss(e);cs(e,$,R);break;default:throw Error(p(161))}}catch(ne){Xe(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kd(e,t.alternate,t),t=t.sibling}function Sa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vn(4,t,t.return),Sa(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gd(t,t.return,n),Sa(t);break;case 27:Jr(t.stateNode);case 26:case 5:fn(t,t.return),Sa(t);break;case 22:t.memoizedState===null&&Sa(t);break;case 30:Sa(t);break;default:Sa(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,l=t,c=l.flags;switch(l.tag){case 0:case 11:case 15:Cn(r,l,n),Ur(4,l);break;case 1:if(Cn(r,l,n),a=l,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch($){Xe(a,a.return,$)}if(a=l,r=a.updateQueue,r!==null){var w=a.stateNode;try{var R=r.shared.hiddenCallbacks;if(R!==null)for(r.shared.hiddenCallbacks=null,r=0;r<R.length;r++)Eu(R[r],w)}catch($){Xe(a,a.return,$)}}n&&c&64&&Zd(l),qr(l,l.return);break;case 27:Xd(l);case 26:case 5:Cn(r,l,n),n&&a===null&&c&4&&Vd(l),qr(l,l.return);break;case 12:Cn(r,l,n);break;case 31:Cn(r,l,n),n&&c&4&&Fd(r,l);break;case 13:Cn(r,l,n),n&&c&4&&Id(r,l);break;case 22:l.memoizedState===null&&Cn(r,l,n),qr(l,l.return);break;case 30:break;default:Cn(r,l,n)}t=t.sibling}}function ds(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Nr(n))}function fs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nr(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tf(e,t,n,a),t=t.sibling}function tf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),r&2048&&Ur(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nr(e)));break;case 12:if(r&2048){sn(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,c=l.id,w=l.onPostCommit;typeof w=="function"&&w(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Xe(t,t.return,R)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,c=t.alternate,t.memoizedState!==null?l._visibility&2?sn(e,t,n,a):Yr(e,t):l._visibility&2?sn(e,t,n,a):(l._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ds(c,t);break;case 24:sn(e,t,n,a),r&2048&&fs(t.alternate,t);break;default:sn(e,t,n,a)}}function Fa(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,c=t,w=n,R=a,$=c.flags;switch(c.tag){case 0:case 11:case 15:Fa(l,c,w,R,r),Ur(8,c);break;case 23:break;case 22:var ne=c.stateNode;c.memoizedState!==null?ne._visibility&2?Fa(l,c,w,R,r):Yr(l,c):(ne._visibility|=2,Fa(l,c,w,R,r)),r&&$&2048&&ds(c.alternate,c);break;case 24:Fa(l,c,w,R,r),r&&$&2048&&fs(c.alternate,c);break;default:Fa(l,c,w,R,r)}t=t.sibling}}function Yr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Yr(n,a),r&2048&&ds(a.alternate,a);break;case 24:Yr(n,a),r&2048&&fs(a.alternate,a);break;default:Yr(n,a)}t=t.sibling}}var Zr=8192;function Ia(e,t,n){if(e.subtreeFlags&Zr)for(e=e.child;e!==null;)nf(e,t,n),e=e.sibling}function nf(e,t,n){switch(e.tag){case 26:Ia(e,t,n),e.flags&Zr&&e.memoizedState!==null&&eg(n,on,e.memoizedState,e.memoizedProps);break;case 5:Ia(e,t,n);break;case 3:case 4:var a=on;on=di(e.stateNode.containerInfo),Ia(e,t,n),on=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Zr,Zr=16777216,Ia(e,t,n),Zr=a):Ia(e,t,n));break;default:Ia(e,t,n)}}function af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];gt=a,lf(a,e)}af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rf(e),e=e.sibling}function rf(e){switch(e.tag){case 0:case 11:case 15:Gr(e),e.flags&2048&&Vn(9,e,e.return);break;case 3:Gr(e);break;case 12:Gr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Gr(e);break;default:Gr(e)}}function Il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];gt=a,lf(a,e)}af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vn(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function lf(e,t){for(;gt!==null;){var n=gt;switch(n.tag){case 0:case 11:case 15:Vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Nr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,gt=a;else e:for(n=e;gt!==null;){a=gt;var r=a.sibling,l=a.return;if(Jd(a),a===n){gt=null;break e}if(r!==null){r.return=l,gt=r;break e}gt=l}}}var mm={getCacheForType:function(e){var t=yt(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return yt(ct).controller.signal}},gm=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Fe=null,Re=null,Be=0,$e=0,Yt=null,$n=!1,Pa=!1,hs=!1,An=0,it=0,Xn=0,wa=0,ps=0,Zt=0,er=0,Vr=null,Dt=null,ms=!1,Pl=0,of=0,ei=1/0,ti=null,Qn=null,ht=0,Kn=null,tr=null,kn=0,gs=0,vs=null,sf=null,$r=0,bs=null;function Gt(){return(Ge&2)!==0&&Be!==0?Be&-Be:Z.T!==null?js():wc()}function cf(){if(Zt===0)if((Be&536870912)===0||Le){var e=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),Zt=e}else Zt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),Zt}function Bt(e,t,n){(e===Fe&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Jn(e,Be,Zt,!1)),fr(e,n),((Ge&2)===0||e!==Fe)&&(e===Fe&&((Ge&2)===0&&(wa|=n),it===4&&Jn(e,Be,Zt,!1)),hn(e))}function uf(e,t,n){if((Ge&6)!==0)throw Error(p(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||dr(e,t),r=a?ym(e,t):xs(e,t,!0),l=a;do{if(r===0){Pa&&!a&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!vm(n)){r=xs(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var w=e;r=Vr;var R=w.current.memoizedState.isDehydrated;if(R&&(nr(w,c).flags|=256),c=xs(w,c,!1),c!==2){if(hs&&!R){w.errorRecoveryDisabledLanes|=l,wa|=l,r=4;break e}l=Dt,Dt=r,l!==null&&(Dt===null?Dt=l:Dt.push.apply(Dt,l))}r=c}if(l=!1,r!==2)continue}}if(r===1){nr(e,0),Jn(e,t,0,!0);break}e:{switch(a=e,l=r,l){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:Jn(a,t,Zt,!$n);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(r=Pl+300-be(),10<r)){if(Jn(a,t,Zt,!$n),dl(a,0,!0)!==0)break e;kn=t,a.timeoutHandle=Yf(df.bind(null,a,n,Dt,ti,ms,t,Zt,wa,er,$n,l,"Throttled",-0,0),r);break e}df(a,n,Dt,ti,ms,t,Zt,wa,er,$n,l,null,-0,0)}}break}while(!0);hn(e)}function df(e,t,n,a,r,l,c,w,R,$,ne,se,K,J){if(e.timeoutHandle=-1,se=t.subtreeFlags,se&8192||(se&16785408)===16785408){se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},nf(t,l,se);var xe=(l&62914560)===l?Pl-be():(l&4194048)===l?of-be():0;if(xe=tg(se,xe),xe!==null){kn=l,e.cancelPendingCommit=xe(yf.bind(null,e,t,l,n,a,r,c,w,R,ne,se,null,K,J)),Jn(e,l,c,!$);return}}yf(e,t,l,n,a,r,c,w,R)}function vm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],l=r.getSnapshot;r=r.value;try{if(!Ht(l(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,a){t&=~ps,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var l=31-at(r),c=1<<l;a[l]=-1,r&=~c}n!==0&&xc(e,n,t)}function ni(){return(Ge&6)===0?(Xr(0),!1):!0}function ys(){if(Re!==null){if($e===0)var e=Re.return;else e=Re,yn=pa=null,Do(e),Xa=null,Cr=0,e=Re;for(;e!==null;)Yd(e.alternate,e),e=e.return;Re=null}}function nr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kn=0,ys(),Fe=e,Re=n=vn(e.current,null),Be=t,$e=0,Yt=null,$n=!1,Pa=dr(e,t),hs=!1,er=Zt=ps=wa=Xn=it=0,Dt=Vr=null,ms=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-at(a),l=1<<r;t|=e[r],a&=~l}return An=t,wl(),n}function ff(e,t){Ee=null,Z.H=Br,t===$a||t===El?(t=Tu(),$e=3):t===wo?(t=Tu(),$e=4):$e=t===Fo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,Re===null&&(it=1,$l(e,Wt(t,e.current)))}function hf(){var e=Ut.current;return e===null?!0:(Be&4194048)===Be?en===null:(Be&62914560)===Be||(Be&536870912)!==0?e===en:!1}function pf(){var e=Z.H;return Z.H=Br,e===null?Br:e}function mf(){var e=Z.A;return Z.A=mm,e}function ai(){it=4,$n||(Be&4194048)!==Be&&Ut.current!==null||(Pa=!0),(Xn&134217727)===0&&(wa&134217727)===0||Fe===null||Jn(Fe,Be,Zt,!1)}function xs(e,t,n){var a=Ge;Ge|=2;var r=pf(),l=mf();(Fe!==e||Be!==t)&&(ti=null,nr(e,t)),t=!1;var c=it;e:do try{if($e!==0&&Re!==null){var w=Re,R=Yt;switch($e){case 8:ys(),c=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var $=$e;if($e=0,Yt=null,ar(e,w,R,$),n&&Pa){c=0;break e}break;default:$=$e,$e=0,Yt=null,ar(e,w,R,$)}}bm(),c=it;break}catch(ne){ff(e,ne)}while(!0);return t&&e.shellSuspendCounter++,yn=pa=null,Ge=a,Z.H=r,Z.A=l,Re===null&&(Fe=null,Be=0,wl()),c}function bm(){for(;Re!==null;)gf(Re)}function ym(e,t){var n=Ge;Ge|=2;var a=pf(),r=mf();Fe!==e||Be!==t?(ti=null,ei=be()+500,nr(e,t)):Pa=dr(e,t);e:do try{if($e!==0&&Re!==null){t=Re;var l=Yt;t:switch($e){case 1:$e=0,Yt=null,ar(e,t,l,1);break;case 2:case 9:if(zu(l)){$e=0,Yt=null,vf(t);break}t=function(){$e!==2&&$e!==9||Fe!==e||($e=7),hn(e)},l.then(t,t);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:zu(l)?($e=0,Yt=null,vf(t)):($e=0,Yt=null,ar(e,t,l,7));break;case 5:var c=null;switch(Re.tag){case 26:c=Re.memoizedState;case 5:case 27:var w=Re;if(c?nh(c):w.stateNode.complete){$e=0,Yt=null;var R=w.sibling;if(R!==null)Re=R;else{var $=w.return;$!==null?(Re=$,ri($)):Re=null}break t}}$e=0,Yt=null,ar(e,t,l,5);break;case 6:$e=0,Yt=null,ar(e,t,l,6);break;case 8:ys(),it=6;break e;default:throw Error(p(462))}}xm();break}catch(ne){ff(e,ne)}while(!0);return yn=pa=null,Z.H=a,Z.A=r,Ge=n,Re!==null?0:(Fe=null,Be=0,wl(),it)}function xm(){for(;Re!==null&&!Q();)gf(Re)}function gf(e){var t=Ud(e.alternate,e,An);e.memoizedProps=e.pendingProps,t===null?ri(e):Re=t}function vf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Od(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Od(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:Do(t);default:Yd(n,t),t=Re=pu(t,An),t=Ud(n,t,An)}e.memoizedProps=e.pendingProps,t===null?ri(e):Re=t}function ar(e,t,n,a){yn=pa=null,Do(t),Xa=null,Cr=0;var r=t.return;try{if(sm(e,r,t,n,Be)){it=1,$l(e,Wt(n,e.current)),Re=null;return}}catch(l){if(r!==null)throw Re=r,l;it=1,$l(e,Wt(n,e.current)),Re=null;return}t.flags&32768?(Le||a===1?e=!0:Pa||(Be&536870912)!==0?e=!1:($n=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),bf(t,e)):ri(t)}function ri(e){var t=e;do{if((t.flags&32768)!==0){bf(t,$n);return}e=t.return;var n=dm(t.alternate,t,An);if(n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);it===0&&(it=5)}function bf(e,t){do{var n=fm(e.alternate,e);if(n!==null){n.flags&=32767,Re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Re=e;return}Re=e=n}while(e!==null);it=6,Re=null}function yf(e,t,n,a,r,l,c,w,R){e.cancelPendingCommit=null;do li();while(ht!==0);if((Ge&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(l=t.lanes|t.childLanes,l|=oo,Ph(e,n,l,c,w,R),e===Fe&&(Re=Fe=null,Be=0),tr=t,Kn=e,kn=n,gs=l,vs=r,sf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jm(Oe,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=Z.T,Z.T=null,r=G.p,G.p=2,c=Ge,Ge|=4;try{hm(e,t,n)}finally{Ge=c,G.p=r,Z.T=a}}ht=1,xf(),_f(),Sf()}}function xf(){if(ht===1){ht=0;var e=Kn,t=tr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Z.T,Z.T=null;var a=G.p;G.p=2;var r=Ge;Ge|=4;try{Pd(t,e);var l=Ms,c=lu(e.containerInfo),w=l.focusedElem,R=l.selectionRange;if(c!==w&&w&&w.ownerDocument&&ru(w.ownerDocument.documentElement,w)){if(R!==null&&no(w)){var $=R.start,ne=R.end;if(ne===void 0&&(ne=$),"selectionStart"in w)w.selectionStart=$,w.selectionEnd=Math.min(ne,w.value.length);else{var se=w.ownerDocument||document,K=se&&se.defaultView||window;if(K.getSelection){var J=K.getSelection(),xe=w.textContent.length,Ce=Math.min(R.start,xe),Je=R.end===void 0?Ce:Math.min(R.end,xe);!J.extend&&Ce>Je&&(c=Je,Je=Ce,Ce=c);var Y=au(w,Ce),L=au(w,Je);if(Y&&L&&(J.rangeCount!==1||J.anchorNode!==Y.node||J.anchorOffset!==Y.offset||J.focusNode!==L.node||J.focusOffset!==L.offset)){var V=se.createRange();V.setStart(Y.node,Y.offset),J.removeAllRanges(),Ce>Je?(J.addRange(V),J.extend(L.node,L.offset)):(V.setEnd(L.node,L.offset),J.addRange(V))}}}}for(se=[],J=w;J=J.parentNode;)J.nodeType===1&&se.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<se.length;w++){var ie=se[w];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}vi=!!Es,Ms=Es=null}finally{Ge=r,G.p=a,Z.T=n}}e.current=t,ht=2}}function _f(){if(ht===2){ht=0;var e=Kn,t=tr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Z.T,Z.T=null;var a=G.p;G.p=2;var r=Ge;Ge|=4;try{Kd(e,t.alternate,t)}finally{Ge=r,G.p=a,Z.T=n}}ht=3}}function Sf(){if(ht===4||ht===3){ht=0,ge();var e=Kn,t=tr,n=kn,a=sf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,tr=Kn=null,wf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Qn=null),Hi(n),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=Z.T,r=G.p,G.p=2,Z.T=null;try{for(var l=e.onRecoverableError,c=0;c<a.length;c++){var w=a[c];l(w.value,{componentStack:w.stack})}}finally{Z.T=t,G.p=r}}(kn&3)!==0&&li(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===bs?$r++:($r=0,bs=e):$r=0,Xr(0)}}function wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nr(t)))}function li(){return xf(),_f(),Sf(),jf()}function jf(){if(ht!==5)return!1;var e=Kn,t=gs;gs=0;var n=Hi(kn),a=Z.T,r=G.p;try{G.p=32>n?32:n,Z.T=null,n=vs,vs=null;var l=Kn,c=kn;if(ht=0,tr=Kn=null,kn=0,(Ge&6)!==0)throw Error(p(331));var w=Ge;if(Ge|=4,rf(l.current),tf(l,l.current,c,n),Ge=w,Xr(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(We,l)}catch{}return!0}finally{G.p=r,Z.T=a,wf(e,t)}}function zf(e,t,n){t=Wt(n,t),t=Wo(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&(fr(e,2),hn(e))}function Xe(e,t,n){if(e.tag===3)zf(e,e,n);else for(;t!==null;){if(t.tag===3){zf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qn===null||!Qn.has(a))){e=Wt(n,e),n=zd(2),a=Yn(t,n,2),a!==null&&(Nd(n,a,t,e),fr(a,2),hn(a));break}}t=t.return}}function _s(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new gm;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(hs=!0,r.add(n),e=_m.bind(null,e,t,n),t.then(e,e))}function _m(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(Be&n)===n&&(it===4||it===3&&(Be&62914560)===Be&&300>be()-Pl?(Ge&2)===0&&nr(e,0):ps|=n,er===Be&&(er=0)),hn(e)}function Nf(e,t){t===0&&(t=yc()),e=da(e,t),e!==null&&(fr(e,t),hn(e))}function Sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nf(e,n)}function wm(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(t),Nf(e,n)}function jm(e,t){return ue(e,t)}var ii=null,rr=null,Ss=!1,oi=!1,ws=!1,Wn=0;function hn(e){e!==rr&&e.next===null&&(rr===null?ii=rr=e:rr=rr.next=e),oi=!0,Ss||(Ss=!0,Nm())}function Xr(e,t){if(!ws&&oi){ws=!0;do for(var n=!1,a=ii;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var l=0;else{var c=a.suspendedLanes,w=a.pingedLanes;l=(1<<31-at(42|e)+1)-1,l&=r&~(c&~w),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,kf(a,l))}else l=Be,l=dl(a,a===Fe?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||dr(a,l)||(n=!0,kf(a,l));a=a.next}while(n);ws=!1}}function zm(){Tf()}function Tf(){oi=Ss=!1;var e=0;Wn!==0&&Bm()&&(e=Wn);for(var t=be(),n=null,a=ii;a!==null;){var r=a.next,l=Cf(a,t);l===0?(a.next=null,n===null?ii=r:n.next=r,r===null&&(rr=n)):(n=a,(e!==0||(l&3)!==0)&&(oi=!0)),a=r}ht!==0&&ht!==5||Xr(e),Wn!==0&&(Wn=0)}function Cf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var c=31-at(l),w=1<<c,R=r[c];R===-1?((w&n)===0||(w&a)!==0)&&(r[c]=Ih(w,t)):R<=t&&(e.expiredLanes|=w),l&=~w}if(t=Fe,n=Be,n=dl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&($e===2||$e===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&de(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||dr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&de(a),Hi(n)){case 2:case 8:n=Ve;break;case 32:n=Oe;break;case 268435456:n=Mn;break;default:n=Oe}return a=Af.bind(null,e),n=ue(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&de(a),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var a=Be;return a=dl(e,e===Fe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(uf(e,a,t),Cf(e,be()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function kf(e,t){if(li())return null;uf(e,t,!0)}function Nm(){Lm(function(){(Ge&6)!==0?ue(je,zm):Tf()})}function js(){if(Wn===0){var e=Ga;e===0&&(e=ja,ja<<=1,(ja&261888)===0&&(ja=256)),Wn=e}return Wn}function Ef(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function Mf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tm(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var l=Ef((r[kt]||null).action),c=a.submitter;c&&(t=(t=c[kt]||null)?Ef(t.formAction):c.getAttribute("formAction"),t!==null&&(l=t,c=null));var w=new yl("action","action",null,a,r);e.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var R=c?Mf(r,c):new FormData(r);Vo(n,{pending:!0,data:R,method:r.method,action:l},null,R)}}else typeof l=="function"&&(w.preventDefault(),R=c?Mf(r,c):new FormData(r),Vo(n,{pending:!0,data:R,method:r.method,action:l},l,R))},currentTarget:r}]})}}for(var zs=0;zs<io.length;zs++){var Ns=io[zs],Cm=Ns.toLowerCase(),Am=Ns[0].toUpperCase()+Ns.slice(1);ln(Cm,"on"+Am)}ln(su,"onAnimationEnd"),ln(cu,"onAnimationIteration"),ln(uu,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln($p,"onTransitionRun"),ln(Xp,"onTransitionStart"),ln(Qp,"onTransitionCancel"),ln(du,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var c=a.length-1;0<=c;c--){var w=a[c],R=w.instance,$=w.currentTarget;if(w=w.listener,R!==l&&r.isPropagationStopped())break e;l=w,r.currentTarget=$;try{l(r)}catch(ne){Sl(ne)}r.currentTarget=null,l=R}else for(c=0;c<a.length;c++){if(w=a[c],R=w.instance,$=w.currentTarget,w=w.listener,R!==l&&r.isPropagationStopped())break e;l=w,r.currentTarget=$;try{l(r)}catch(ne){Sl(ne)}r.currentTarget=null,l=R}}}}function De(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var a=e+"__bubble";n.has(a)||(Rf(t,e,2,!1),n.add(a))}function Ts(e,t,n){var a=0;t&&(a|=4),Rf(n,e,a,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function Cs(e){if(!e[si]){e[si]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(km.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,Ts("selectionchange",!1,t))}}function Rf(e,t,n,a){switch(ch(t)){case 2:var r=rg;break;case 8:r=lg;break;default:r=Gs}n=r.bind(null,t,n,e),r=void 0,!Qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function As(e,t,n,a,r){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var w=a.stateNode.containerInfo;if(w===r)break;if(c===4)for(c=a.return;c!==null;){var R=c.tag;if((R===3||R===4)&&c.stateNode.containerInfo===r)return;c=c.return}for(;w!==null;){if(c=Na(w),c===null)return;if(R=c.tag,R===5||R===6||R===26||R===27){a=l=c;continue e}w=w.parentNode}}a=a.return}Lc(function(){var $=l,ne=$i(n),se=[];e:{var K=fu.get(e);if(K!==void 0){var J=yl,xe=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":J=wp;break;case"focusin":xe="focus",J=Fi;break;case"focusout":xe="blur",J=Fi;break;case"beforeblur":case"afterblur":J=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Np;break;case su:case cu:case uu:J=pp;break;case du:J=Cp;break;case"scroll":case"scrollend":J=cp;break;case"wheel":J=kp;break;case"copy":case"cut":case"paste":J=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Gc;break;case"toggle":case"beforetoggle":J=Mp}var Ce=(t&4)!==0,Je=!Ce&&(e==="scroll"||e==="scrollend"),Y=Ce?K!==null?K+"Capture":null:K;Ce=[];for(var L=$,V;L!==null;){var ie=L;if(V=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||V===null||Y===null||(ie=mr(L,Y),ie!=null&&Ce.push(Kr(L,ie,V))),Je)break;L=L.return}0<Ce.length&&(K=new J(K,xe,null,n,ne),se.push({event:K,listeners:Ce}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",K&&n!==Vi&&(xe=n.relatedTarget||n.fromElement)&&(Na(xe)||xe[za]))break e;if((J||K)&&(K=ne.window===ne?ne:(K=ne.ownerDocument)?K.defaultView||K.parentWindow:window,J?(xe=n.relatedTarget||n.toElement,J=$,xe=xe?Na(xe):null,xe!==null&&(Je=u(xe),Ce=xe.tag,xe!==Je||Ce!==5&&Ce!==27&&Ce!==6)&&(xe=null)):(J=null,xe=$),J!==xe)){if(Ce=Yc,ie="onMouseLeave",Y="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=Gc,ie="onPointerLeave",Y="onPointerEnter",L="pointer"),Je=J==null?K:pr(J),V=xe==null?K:pr(xe),K=new Ce(ie,L+"leave",J,n,ne),K.target=Je,K.relatedTarget=V,ie=null,Na(ne)===$&&(Ce=new Ce(Y,L+"enter",xe,n,ne),Ce.target=V,Ce.relatedTarget=Je,ie=Ce),Je=ie,J&&xe)t:{for(Ce=Em,Y=J,L=xe,V=0,ie=Y;ie;ie=Ce(ie))V++;ie=0;for(var ze=L;ze;ze=Ce(ze))ie++;for(;0<V-ie;)Y=Ce(Y),V--;for(;0<ie-V;)L=Ce(L),ie--;for(;V--;){if(Y===L||L!==null&&Y===L.alternate){Ce=Y;break t}Y=Ce(Y),L=Ce(L)}Ce=null}else Ce=null;J!==null&&Df(se,K,J,Ce,!1),xe!==null&&Je!==null&&Df(se,Je,xe,Ce,!0)}}e:{if(K=$?pr($):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var Ye=Fc;else if(Jc(K))if(Ic)Ye=Zp;else{Ye=qp;var we=Up}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&Gi($.elementType)&&(Ye=Fc):Ye=Yp;if(Ye&&(Ye=Ye(e,$))){Wc(se,Ye,n,ne);break e}we&&we(e,K,$),e==="focusout"&&$&&K.type==="number"&&$.memoizedProps.value!=null&&Zi(K,"number",K.value)}switch(we=$?pr($):window,e){case"focusin":(Jc(we)||we.contentEditable==="true")&&(Da=we,ao=$,wr=null);break;case"focusout":wr=ao=Da=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,iu(se,n,ne);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":iu(se,n,ne)}var Me;if(Pi)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else Ra?Qc(e,n)&&(He="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(He="onCompositionStart");He&&(Vc&&n.locale!=="ko"&&(Ra||He!=="onCompositionStart"?He==="onCompositionEnd"&&Ra&&(Me=Uc()):(Rn=ne,Ki="value"in Rn?Rn.value:Rn.textContent,Ra=!0)),we=ci($,He),0<we.length&&(He=new Zc(He,e,null,n,ne),se.push({event:He,listeners:we}),Me?He.data=Me:(Me=Kc(n),Me!==null&&(He.data=Me)))),(Me=Rp?Dp(e,n):Bp(e,n))&&(He=ci($,"onBeforeInput"),0<He.length&&(we=new Zc("onBeforeInput","beforeinput",null,n,ne),se.push({event:we,listeners:He}),we.data=Me)),Tm(se,e,$,n,ne)}Of(se,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=mr(e,n),r!=null&&a.unshift(Kr(e,r,l)),r=mr(e,t),r!=null&&a.push(Kr(e,r,l))),e.tag===3)return a;e=e.return}return[]}function Em(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Df(e,t,n,a,r){for(var l=t._reactName,c=[];n!==null&&n!==a;){var w=n,R=w.alternate,$=w.stateNode;if(w=w.tag,R!==null&&R===a)break;w!==5&&w!==26&&w!==27||$===null||(R=$,r?($=mr(n,l),$!=null&&c.unshift(Kr(n,$,R))):r||($=mr(n,l),$!=null&&c.push(Kr(n,$,R)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Mm=/\r\n?/g,Om=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Om,"")}function Hf(e,t){return t=Bf(t),Bf(e)===t}function Ke(e,t,n,a,r,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ea(e,""+a);break;case"className":hl(e,"class",a);break;case"tabIndex":hl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(e,n,a);break;case"style":Bc(e,a,l);break;case"data":if(t!=="object"){hl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ml(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ke(e,t,"name",r.name,r,null),Ke(e,t,"formEncType",r.formEncType,r,null),Ke(e,t,"formMethod",r.formMethod,r,null),Ke(e,t,"formTarget",r.formTarget,r,null)):(Ke(e,t,"encType",r.encType,r,null),Ke(e,t,"method",r.method,r,null),Ke(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ml(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=mn);break;case"onScroll":a!=null&&De("scroll",e);break;case"onScrollEnd":a!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(p(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ml(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":De("beforetoggle",e),De("toggle",e),fl(e,"popover",a);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":fl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=op.get(n)||n,fl(e,n,a))}}function ks(e,t,n,a,r,l){switch(n){case"style":Bc(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(p(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&De("scroll",e);break;case"onScrollEnd":a!=null&&De("scrollend",e);break;case"onClick":a!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),l=e[kt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):fl(e,n,a)}}}function _t(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var a=!1,r=!1,l;for(l in n)if(n.hasOwnProperty(l)){var c=n[l];if(c!=null)switch(l){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:Ke(e,t,l,c,n,null)}}r&&Ke(e,t,"srcSet",n.srcSet,n,null),a&&Ke(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var w=l=c=r=null,R=null,$=null;for(a in n)if(n.hasOwnProperty(a)){var ne=n[a];if(ne!=null)switch(a){case"name":r=ne;break;case"type":c=ne;break;case"checked":R=ne;break;case"defaultChecked":$=ne;break;case"value":l=ne;break;case"defaultValue":w=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(p(137,t));break;default:Ke(e,t,a,ne,n,null)}}Mc(e,l,w,R,$,c,r,!1);return;case"select":De("invalid",e),a=c=l=null;for(r in n)if(n.hasOwnProperty(r)&&(w=n[r],w!=null))switch(r){case"value":l=w;break;case"defaultValue":c=w;break;case"multiple":a=w;default:Ke(e,t,r,w,n,null)}t=l,n=c,e.multiple=!!a,t!=null?ka(e,!!a,t,!1):n!=null&&ka(e,!!a,n,!0);return;case"textarea":De("invalid",e),l=r=a=null;for(c in n)if(n.hasOwnProperty(c)&&(w=n[c],w!=null))switch(c){case"value":a=w;break;case"defaultValue":r=w;break;case"children":l=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(p(91));break;default:Ke(e,t,c,w,n,null)}Rc(e,a,r,l);return;case"option":for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!=null)&&(R==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ke(e,t,R,a,n,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(a=0;a<Qr.length;a++)De(Qr[a],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in n)if(n.hasOwnProperty($)&&(a=n[$],a!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:Ke(e,t,$,a,n,null)}return;default:if(Gi(t)){for(ne in n)n.hasOwnProperty(ne)&&(a=n[ne],a!==void 0&&ks(e,t,ne,a,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!=null&&Ke(e,t,w,a,n,null))}function Rm(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,c=null,w=null,R=null,$=null,ne=null;for(J in n){var se=n[J];if(n.hasOwnProperty(J)&&se!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":R=se;default:a.hasOwnProperty(J)||Ke(e,t,J,null,a,se)}}for(var K in a){var J=a[K];if(se=n[K],a.hasOwnProperty(K)&&(J!=null||se!=null))switch(K){case"type":l=J;break;case"name":r=J;break;case"checked":$=J;break;case"defaultChecked":ne=J;break;case"value":c=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(p(137,t));break;default:J!==se&&Ke(e,t,K,J,a,se)}}Yi(e,c,w,R,$,ne,l,r);return;case"select":J=c=w=K=null;for(l in n)if(R=n[l],n.hasOwnProperty(l)&&R!=null)switch(l){case"value":break;case"multiple":J=R;default:a.hasOwnProperty(l)||Ke(e,t,l,null,a,R)}for(r in a)if(l=a[r],R=n[r],a.hasOwnProperty(r)&&(l!=null||R!=null))switch(r){case"value":K=l;break;case"defaultValue":w=l;break;case"multiple":c=l;default:l!==R&&Ke(e,t,r,l,a,R)}t=w,n=c,a=J,K!=null?ka(e,!!n,K,!1):!!a!=!!n&&(t!=null?ka(e,!!n,t,!0):ka(e,!!n,n?[]:"",!1));return;case"textarea":J=K=null;for(w in n)if(r=n[w],n.hasOwnProperty(w)&&r!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ke(e,t,w,null,a,r)}for(c in a)if(r=a[c],l=n[c],a.hasOwnProperty(c)&&(r!=null||l!=null))switch(c){case"value":K=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(p(91));break;default:r!==l&&Ke(e,t,c,r,a,l)}Oc(e,K,J);return;case"option":for(var xe in n)K=n[xe],n.hasOwnProperty(xe)&&K!=null&&!a.hasOwnProperty(xe)&&(xe==="selected"?e.selected=!1:Ke(e,t,xe,null,a,K));for(R in a)K=a[R],J=n[R],a.hasOwnProperty(R)&&K!==J&&(K!=null||J!=null)&&(R==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":Ke(e,t,R,K,a,J));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)K=n[Ce],n.hasOwnProperty(Ce)&&K!=null&&!a.hasOwnProperty(Ce)&&Ke(e,t,Ce,null,a,K);for($ in a)if(K=a[$],J=n[$],a.hasOwnProperty($)&&K!==J&&(K!=null||J!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(p(137,t));break;default:Ke(e,t,$,K,a,J)}return;default:if(Gi(t)){for(var Je in n)K=n[Je],n.hasOwnProperty(Je)&&K!==void 0&&!a.hasOwnProperty(Je)&&ks(e,t,Je,void 0,a,K);for(ne in a)K=a[ne],J=n[ne],!a.hasOwnProperty(ne)||K===J||K===void 0&&J===void 0||ks(e,t,ne,K,a,J);return}}for(var Y in n)K=n[Y],n.hasOwnProperty(Y)&&K!=null&&!a.hasOwnProperty(Y)&&Ke(e,t,Y,null,a,K);for(se in a)K=a[se],J=n[se],!a.hasOwnProperty(se)||K===J||K==null&&J==null||Ke(e,t,se,K,a,J)}function Lf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],l=r.transferSize,c=r.initiatorType,w=r.duration;if(l&&w&&Lf(c)){for(c=0,w=r.responseEnd,a+=1;a<n.length;a++){var R=n[a],$=R.startTime;if($>w)break;var ne=R.transferSize,se=R.initiatorType;ne&&Lf(se)&&(R=R.responseEnd,c+=ne*(R<w?1:(w-$)/(R-$)))}if(--a,t+=8*(l+c)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Es=null,Ms=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rs=null;function Bm(){var e=window.event;return e&&e.type==="popstate"?e===Rs?!1:(Rs=e,!0):(Rs=null,!1)}var Yf=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(e){return Zf.resolve(null).then(e).catch(Um)}:Yf;function Um(e){setTimeout(function(){throw e})}function Fn(e){return e==="head"}function Gf(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),sr(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Jr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Jr(n);for(var l=n.firstChild;l;){var c=l.nextSibling,w=l.nodeName;l[hr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=c}}else n==="body"&&Jr(e.ownerDocument.body);n=r}while(n);sr(t)}function Vf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ds(n),Ui(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qm(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[hr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function Ym(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function $f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function Bs(e){return e.data==="$?"||e.data==="$~"}function Hs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zm(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ls=null;function Xf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kf(e,t,n){switch(t=ui(n),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function Jr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ui(e)}var nn=new Map,Jf=new Set;function di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var En=G.d;G.d={f:Gm,r:Vm,D:$m,C:Xm,L:Qm,m:Km,X:Wm,S:Jm,M:Fm};function Gm(){var e=En.f(),t=ni();return e||t}function Vm(e){var t=Ta(e);t!==null&&t.tag===5&&t.type==="form"?dd(t):En.r(e)}var lr=typeof document>"u"?null:document;function Wf(e,t,n){var a=lr;if(a&&typeof t=="string"&&t){var r=Kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Jf.has(r)||(Jf.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),_t(t,"link",e),mt(t),a.head.appendChild(t)))}}function $m(e){En.D(e),Wf("dns-prefetch",e,null)}function Xm(e,t){En.C(e,t),Wf("preconnect",e,t)}function Qm(e,t,n){En.L(e,t,n);var a=lr;if(a&&e&&t){var r='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Kt(n.imageSizes)+'"]')):r+='[href="'+Kt(e)+'"]';var l=r;switch(t){case"style":l=ir(e);break;case"script":l=or(e)}nn.has(l)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(l,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Wr(l))||t==="script"&&a.querySelector(Fr(l))||(t=a.createElement("link"),_t(t,"link",e),mt(t),a.head.appendChild(t)))}}function Km(e,t){En.m(e,t);var n=lr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Kt(a)+'"][href="'+Kt(e)+'"]',l=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=or(e)}if(!nn.has(l)&&(e=_({rel:"modulepreload",href:e},t),nn.set(l,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fr(l)))return}a=n.createElement("link"),_t(a,"link",e),mt(a),n.head.appendChild(a)}}}function Jm(e,t,n){En.S(e,t,n);var a=lr;if(a&&e){var r=Ca(a).hoistableStyles,l=ir(e);t=t||"default";var c=r.get(l);if(!c){var w={loading:0,preload:null};if(c=a.querySelector(Wr(l)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(l))&&Us(e,n);var R=c=a.createElement("link");mt(R),_t(R,"link",e),R._p=new Promise(function($,ne){R.onload=$,R.onerror=ne}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,fi(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:w},r.set(l,c)}}}function Wm(e,t){En.X(e,t);var n=lr;if(n&&e){var a=Ca(n).hoistableScripts,r=or(e),l=a.get(r);l||(l=n.querySelector(Fr(r)),l||(e=_({src:e,async:!0},t),(t=nn.get(r))&&qs(e,t),l=n.createElement("script"),mt(l),_t(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function Fm(e,t){En.M(e,t);var n=lr;if(n&&e){var a=Ca(n).hoistableScripts,r=or(e),l=a.get(r);l||(l=n.querySelector(Fr(r)),l||(e=_({src:e,async:!0,type:"module"},t),(t=nn.get(r))&&qs(e,t),l=n.createElement("script"),mt(l),_t(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function Ff(e,t,n,a){var r=(r=Se.current)?di(r):null;if(!r)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ir(n.href),n=Ca(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ir(n.href);var l=Ca(r).hoistableStyles,c=l.get(e);if(c||(r=r.ownerDocument||r,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,c),(l=r.querySelector(Wr(e)))&&!l._p&&(c.instance=l,c.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),l||Im(r,e,n,c.state))),t&&a===null)throw Error(p(528,""));return c}if(t&&a!==null)throw Error(p(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=or(n),n=Ca(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function ir(e){return'href="'+Kt(e)+'"'}function Wr(e){return'link[rel="stylesheet"]['+e+"]"}function If(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Im(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),_t(t,"link",n),mt(t),e.head.appendChild(t))}function or(e){return'[src="'+Kt(e)+'"]'}function Fr(e){return"script[async]"+e}function Pf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(a)return t.instance=a,mt(a),a;var r=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),mt(a),_t(a,"style",r),fi(a,n.precedence,e),t.instance=a;case"stylesheet":r=ir(n.href);var l=e.querySelector(Wr(r));if(l)return t.state.loading|=4,t.instance=l,mt(l),l;a=If(n),(r=nn.get(r))&&Us(a,r),l=(e.ownerDocument||e).createElement("link"),mt(l);var c=l;return c._p=new Promise(function(w,R){c.onload=w,c.onerror=R}),_t(l,"link",a),t.state.loading|=4,fi(l,n.precedence,e),t.instance=l;case"script":return l=or(n.src),(r=e.querySelector(Fr(l)))?(t.instance=r,mt(r),r):(a=n,(r=nn.get(l))&&(a=_({},n),qs(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),mt(r),_t(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,fi(a,n.precedence,e));return t.instance}function fi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,l=r,c=0;c<a.length;c++){var w=a[c];if(w.dataset.precedence===t)l=w;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hi=null;function eh(e,t,n){if(hi===null){var a=new Map,r=hi=new Map;r.set(n,a)}else r=hi,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var l=n[r];if(!(l[hr]||l[vt]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(t)||"";c=e+c;var w=a.get(c);w?w.push(l):a.set(c,[l])}}return a}function th(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Pm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ir(a.href),l=t.querySelector(Wr(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,mt(l);return}l=t.ownerDocument||t,a=If(a),(r=nn.get(r))&&Us(a,r),l=l.createElement("link"),mt(l);var c=l;c._p=new Promise(function(w,R){c.onload=w,c.onerror=R}),_t(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=pi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ys=0;function tg(e,t){return e.stylesheets&&e.count===0&&gi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&gi(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Ys===0&&(Ys=62500*Dm());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gi(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function pi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mi=null;function gi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mi=new Map,t.forEach(ng,e),mi=null,pi.call(e))}function ng(e,t){if(!(t.state.loading&4)){var n=mi.get(e);if(n)var a=n.get(null);else{n=new Map,mi.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var c=r[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}r=t.instance,c=r.getAttribute("data-precedence"),l=n.get(c)||a,l===a&&n.set(null,r),n.set(c,r),this.count++,a=pi.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ir={$$typeof:B,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ag(e,t,n,a,r,l,c,w,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.hiddenUpdates=Di(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function ah(e,t,n,a,r,l,c,w,R,$,ne,se){return e=new ag(e,t,n,c,R,$,ne,se,w),t=1,l===!0&&(t|=24),l=Lt(3,null,null,t),e.current=l,l.stateNode=e,t=xo(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},jo(l),e}function rh(e){return e?(e=La,e):La}function lh(e,t,n,a,r,l){r=rh(r),a.context===null?a.context=r:a.pendingContext=r,a=qn(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=Yn(e,a,t),n!==null&&(Bt(n,e,t),kr(n,e,t))}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zs(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function oh(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&Bt(t,e,67108864),Zs(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var t=Gt();t=Bi(t);var n=da(e,t);n!==null&&Bt(n,e,t),Zs(e,t)}}var vi=!0;function rg(e,t,n,a){var r=Z.T;Z.T=null;var l=G.p;try{G.p=2,Gs(e,t,n,a)}finally{G.p=l,Z.T=r}}function lg(e,t,n,a){var r=Z.T;Z.T=null;var l=G.p;try{G.p=8,Gs(e,t,n,a)}finally{G.p=l,Z.T=r}}function Gs(e,t,n,a){if(vi){var r=Vs(a);if(r===null)As(e,t,a,bi,n),uh(e,a);else if(og(r,e,t,n,a))a.stopPropagation();else if(uh(e,a),t&4&&-1<ig.indexOf(e)){for(;r!==null;){var l=Ta(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Xt(l.pendingLanes);if(c!==0){var w=l;for(w.pendingLanes|=2,w.entangledLanes|=2;c;){var R=1<<31-at(c);w.entanglements[1]|=R,c&=~R}hn(l),(Ge&6)===0&&(ei=be()+500,Xr(0))}}break;case 31:case 13:w=da(l,2),w!==null&&Bt(w,l,2),ni(),Zs(l,2)}if(l=Vs(a),l===null&&As(e,t,a,bi,n),l===r)break;r=l}r!==null&&a.stopPropagation()}else As(e,t,a,null,n)}}function Vs(e){return e=$i(e),$s(e)}var bi=null;function $s(e){if(bi=null,e=Na(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bi=e,null}function ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case je:return 2;case Ve:return 8;case Oe:case At:return 32;case Mn:return 268435456;default:return 32}default:return 32}}var Xs=!1,In=null,Pn=null,ea=null,Pr=new Map,el=new Map,ta=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":ea=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(t.pointerId)}}function tl(e,t,n,a,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[r]},t!==null&&(t=Ta(t),t!==null&&oh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function og(e,t,n,a,r){switch(t){case"focusin":return In=tl(In,e,t,n,a,r),!0;case"dragenter":return Pn=tl(Pn,e,t,n,a,r),!0;case"mouseover":return ea=tl(ea,e,t,n,a,r),!0;case"pointerover":var l=r.pointerId;return Pr.set(l,tl(Pr.get(l)||null,e,t,n,a,r)),!0;case"gotpointercapture":return l=r.pointerId,el.set(l,tl(el.get(l)||null,e,t,n,a,r)),!0}return!1}function dh(e){var t=Na(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,jc(e.priority,function(){sh(n)});return}}else if(t===31){if(t=f(n),t!==null){e.blockedOn=t,jc(e.priority,function(){sh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Vi=a,n.target.dispatchEvent(a),Vi=null}else return t=Ta(n),t!==null&&oh(t),e.blockedOn=n,!1;t.shift()}return!0}function fh(e,t,n){yi(e)&&n.delete(t)}function sg(){Xs=!1,In!==null&&yi(In)&&(In=null),Pn!==null&&yi(Pn)&&(Pn=null),ea!==null&&yi(ea)&&(ea=null),Pr.forEach(fh),el.forEach(fh)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sg)))}var _i=null;function hh(e){_i!==e&&(_i=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){_i===e&&(_i=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if($s(a||n)===null)continue;break}var l=Ta(n);l!==null&&(e.splice(t,3),t-=3,Vo(l,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function sr(e){function t(R){return xi(R,e)}In!==null&&xi(In,e),Pn!==null&&xi(Pn,e),ea!==null&&xi(ea,e),Pr.forEach(t),el.forEach(t);for(var n=0;n<ta.length;n++){var a=ta[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ta.length&&(n=ta[0],n.blockedOn===null);)dh(n),n.blockedOn===null&&ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],l=n[a+1],c=r[kt]||null;if(typeof l=="function")c||hh(n);else if(c){var w=null;if(l&&l.hasAttribute("formAction")){if(r=l,c=l[kt]||null)w=c.formAction;else if($s(r)!==null)continue}else w=c.action;typeof w=="function"?n[a+1]=w:(n.splice(a,3),a-=3),hh(n)}}}function ph(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(c){return r=c})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Qs(e){this._internalRoot=e}Si.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var n=t.current,a=Gt();lh(n,a,e,t,null,null)},Si.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lh(e.current,2,null,e,null,null),ni(),t[za]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ta.length&&t!==0&&t<ta[n].priority;n++);ta.splice(n,0,e),n===0&&dh(e)}};var mh=b.version;if(mh!=="19.2.3")throw Error(p(527,mh,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=v(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var cg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{We=wi.inject(cg),pt=wi}catch{}}return al.createRoot=function(e,t){if(!g(e))throw Error(p(299));var n=!1,a="",r=_d,l=Sd,c=wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ah(e,1,!1,null,null,n,a,null,r,l,c,ph),e[za]=t.current,Cs(e),new Qs(t)},al.hydrateRoot=function(e,t,n){if(!g(e))throw Error(p(299));var a=!1,r="",l=_d,c=Sd,w=wd,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(R=n.formState)),t=ah(e,1,!0,t,n??null,a,r,R,l,c,w,ph),t.context=rh(null),n=t.current,a=Gt(),a=Bi(a),r=qn(a),r.callback=null,Yn(n,r,a),n=a,t.current.lanes=n,fr(t,n),hn(t),e[za]=t.current,Cs(e),new Si(t)},al.version="19.2.3",al}var zh;function xg(){if(zh)return Ws.exports;zh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(b){console.error(b)}}return o(),Ws.exports=yg(),Ws.exports}var _g=xg();class Sg extends fe.Component{constructor(b){super(b),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(b){return{hasError:!0,error:b}}componentDidCatch(b,s){this.setState({error:b,errorInfo:s})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:i.jsx("div",{className:"error-boundary",children:i.jsxs("div",{className:"error-boundary-content",children:[i.jsx("div",{className:"error-boundary-icon",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),i.jsx("h1",{className:"error-boundary-title",children:"Something went wrong"}),i.jsx("p",{className:"error-boundary-message",children:"We encountered an unexpected error. Please try refreshing the page."}),!1,i.jsxs("div",{className:"error-boundary-actions",children:[i.jsx("button",{onClick:this.handleReset,className:"error-boundary-button error-boundary-button-secondary",children:"Try Again"}),i.jsx("button",{onClick:()=>window.location.reload(),className:"error-boundary-button error-boundary-button-primary",children:"Refresh Page"})]})]})}):this.props.children}}const Bh=(...o)=>o.filter((b,s,p)=>!!b&&b.trim()!==""&&p.indexOf(b)===s).join(" ").trim();const wg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const jg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(b,s,p)=>p?p.toUpperCase():s.toLowerCase());const Nh=o=>{const b=jg(o);return b.charAt(0).toUpperCase()+b.slice(1)};var zg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ng=o=>{for(const b in o)if(b.startsWith("aria-")||b==="role"||b==="title")return!0;return!1};const Tg=fe.forwardRef(({color:o="currentColor",size:b=24,strokeWidth:s=2,absoluteStrokeWidth:p,className:g="",children:u,iconNode:h,...f},d)=>fe.createElement("svg",{ref:d,...zg,width:b,height:b,stroke:o,strokeWidth:p?Number(s)*24/Number(b):s,className:Bh("lucide",g),...!u&&!Ng(f)&&{"aria-hidden":"true"},...f},[...h.map(([v,z])=>fe.createElement(v,z)),...Array.isArray(u)?u:[u]]));const Ue=(o,b)=>{const s=fe.forwardRef(({className:p,...g},u)=>fe.createElement(Tg,{ref:u,iconNode:b,className:Bh(`lucide-${wg(Nh(o))}`,`lucide-${o}`,p),...g}));return s.displayName=Nh(o),s};const Cg=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ag=Ue("activity",Cg);const kg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Th=Ue("bell",kg);const Eg=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ec=Ue("box",Eg);const Mg=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Og=Ue("boxes",Mg);const Rg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sl=Ue("chevron-down",Rg);const Dg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Bg=Ue("chevron-right",Dg);const Hg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ch=Ue("chevron-up",Hg);const Lg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Hh=Ue("circle-alert",Lg);const Ug=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Lh=Ue("circle-check-big",Ug);const qg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Yg=Ue("circle-x",qg);const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gg=Ue("circle",Zg);const Vg=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$g=Ue("copy",Vg);const Xg=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Qg=Ue("credit-card",Xg);const Kg=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Jg=Ue("download",Kg);const Wg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Fg=Ue("house",Wg);const Ig=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Pg=Ue("image",Ig);const ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Uh=Ue("info",ev);const tv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],mc=Ue("layers",tv);const nv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],av=Ue("moon",nv);const rv=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],lv=Ue("move",rv);const iv=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],gc=Ue("palette",iv);const ov=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],sv=Ue("panels-top-left",ov);const cv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],uv=Ue("plus",cv);const dv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],fv=Ue("rotate-ccw",dv);const hv=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],pv=Ue("square-check-big",hv);const mv=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],gv=Ue("square-pen",mv);const vv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],tc=Ue("square",vv);const bv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],yv=Ue("sun",bv);const xv=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],_v=Ue("toggle-left",xv);const Sv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],wv=Ue("trash-2",Sv);const jv=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],zv=Ue("trash",jv);const Nv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Tv=Ue("triangle-alert",Nv);const Cv=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Av=Ue("type",Cv);const kv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qh=Ue("x",kv);const Ev=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mv=Ue("zap",Ev),Yh=fe.createContext(null);function Ov(){const o=fe.useContext(Yh);if(!o)throw new Error("useToast must be used within ToastProvider");return o}function Rv({children:o,position:b="top-right",maxToasts:s=5}){const[p,g]=fe.useState([]),u=fe.useCallback(_=>{g(T=>T.filter(S=>S.id!==_))},[]),h=fe.useCallback(_=>{const T=`toast-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,S={..._,id:T,duration:_.duration??5e3};g(j=>[...j,S].slice(-s));const y=S.duration??5e3;y>0&&setTimeout(()=>{u(T)},y)},[u,s]),f=fe.useCallback((_,T)=>{h({type:"success",title:_,message:T})},[h]),d=fe.useCallback((_,T)=>{h({type:"error",title:_,message:T,duration:7e3})},[h]),v=fe.useCallback((_,T)=>{h({type:"warning",title:_,message:T,duration:6e3})},[h]),z=fe.useCallback((_,T)=>{h({type:"info",title:_,message:T})},[h]);return i.jsxs(Yh.Provider,{value:{showToast:h,hideToast:u,success:f,error:d,warning:v,info:z},children:[o,i.jsx("div",{className:`toast-container toast-${b}`,children:p.map(_=>i.jsx(Dv,{toast:_,onClose:()=>u(_.id)},_.id))})]})}function Dv({toast:o,onClose:b}){const s={success:i.jsx(Lh,{size:20}),error:i.jsx(Yg,{size:20}),warning:i.jsx(Hh,{size:20}),info:i.jsx(Uh,{size:20})};return i.jsxs("div",{className:`toast toast-${o.type}`,role:"alert","aria-live":"polite",children:[i.jsx("div",{className:"toast-icon",children:s[o.type]}),i.jsxs("div",{className:"toast-content",children:[i.jsx("div",{className:"toast-title",children:o.title}),o.message&&i.jsx("div",{className:"toast-message",children:o.message})]}),i.jsx("button",{className:"toast-close",onClick:b,"aria-label":"Close notification",children:i.jsx(qh,{size:16})})]})}const qe={lightTheme:{primary:"#3b82f6",primaryHover:"#2563eb",secondary:"#6b7280",secondaryHover:"#4b5563",success:"#22c55e",warning:"#f59e0b",error:"#ef4444",info:"#06b6d4",background:"#ffffff",surface:"#f9fafb",text:"#111827",textMuted:"#6b7280",textOnAccent:"#ffffff",border:"#e5e7eb"},darkTheme:{primary:"#6366f1",primaryHover:"#4f46e5",secondary:"#94a3b8",secondaryHover:"#64748b",success:"#22c55e",warning:"#f59e0b",error:"#ef4444",info:"#22d3ee",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textMuted:"#94a3b8",textOnAccent:"#0b0b0b",border:"#334155"},typography:{fontFamily:"Inter, system-ui, sans-serif",fontFamilyMono:"JetBrains Mono, monospace",fontSizeXs:"0.75rem",fontSizeSm:"0.875rem",fontSizeMd:"1rem",fontSizeLg:"1.125rem",fontSizeXl:"1.25rem",fontWeightNormal:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700,lineHeightTight:1.25,lineHeightNormal:1.5,lineHeightRelaxed:1.75},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},borderRadius:{none:"0",control:"6px",surface:"10px",overlay:"14px",full:"999px"},shadows:{none:"none",control:"0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)",surface:"0 4px 6px -1px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--shadow-color) 40%, transparent)",overlay:"0 10px 15px -3px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--shadow-color) 40%, transparent)",float:"0 20px 25px -5px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--shadow-color) 40%, transparent)"},transitions:{fast:"150ms ease",normal:"200ms ease",slow:"300ms ease"},effects:{focusRingWidth:"2px",focusRingOffset:"2px",focusRingColor:"#3b82f6",shadowColor:"rgb(0 0 0 / 0.2)"},patterns:{background:{type:"none",opacity:.08,size:16},surface:{type:"none",opacity:.06,size:14}},components:{button:{borderWidth:"1px",innerShadow:"none",textTransform:"none",letterSpacing:"normal"},input:{borderWidth:"1px",focusRingWidth:"3px",focusRingAlpha:.2},avatar:{borderWidth:"0px",borderColor:"var(--color-border)"},checkbox:{borderRadius:"var(--radius-control)",borderWidth:"2px",size:"18px"},radio:{borderWidth:"2px",size:"18px",dotSize:"8px"},toggle:{trackHeight:"22px",thumbSize:"18px",borderWidth:"0px",trackShadow:"var(--shadow-control)",thumbBorderWidth:"0px",thumbShadow:"var(--shadow-control)"},badge:{textTransform:"none",letterSpacing:"normal",borderWidth:"0px"},card:{borderWidth:"1px",elevatedBorderWidth:"1px",elevatedBorderEnabled:!1,headerBorderWidth:"1px"},alert:{iconSize:"20px",borderWidth:"1px"},tabs:{indicatorHeight:"2px",indicatorStyle:"underline"},progress:{trackHeight:"8px",borderRadius:"var(--radius-full)"},modal:{backdropOpacity:"0.5",backdropBlur:"0px",borderWidth:"0px",backdropColor:"var(--color-text)"}}};function Zh(o){const b="300;400;500;600;700",s=new Set;for(const p of o){const g=p.split(",")[0]?.trim().replace(/["']/g,"");if(!g)continue;const u=g.replace(/\s+/g,"+");s.add(`family=${u}:wght@${b}`)}return s.size===0?null:`https://fonts.googleapis.com/css2?${Array.from(s).join("&")}&display=swap`}const Gh=fe.createContext(null);function Bv(o){const b=o.trim();if(b.startsWith("#")){const p=b.slice(1);if(p.length===3){const g=parseInt(p[0]+p[0],16),u=parseInt(p[1]+p[1],16),h=parseInt(p[2]+p[2],16);return{r:g,g:u,b:h}}if(p.length===6){const g=parseInt(p.slice(0,2),16),u=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16);return{r:g,g:u,b:h}}return null}const s=b.match(/^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);if(s){const p=Math.min(255,parseInt(s[1],10)),g=Math.min(255,parseInt(s[2],10)),u=Math.min(255,parseInt(s[3],10));return{r:p,g,b:u}}return null}function uc(o,b){const s=Bv(o);if(!s)return b;const{r:p,g,b:u}=s;return(.2126*p+.7152*g+.0722*u)/255>.5?"#111111":"#ffffff"}function Hv(o,b){switch(b.type){case"SET_TOKEN":return{...o,[b.category]:{...o[b.category],[b.key]:b.value}};case"SET_CATEGORY":return{...o,[b.category]:{...o[b.category],...b.values}};case"RESET_TOKENS":return qe;case"LOAD_PRESET":return b.tokens;default:return o}}function Lv(o,b){const s=[],p=b==="light"?o.lightTheme:o.darkTheme,g=uc(p.background,p.text),u=uc(p.primary,p.textOnAccent);Object.entries(p).forEach(([v,z])=>{const _=v.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`--color-${_}: ${z}`)}),s.push("--platform-background: var(--color-background)"),s.push("--platform-surface: var(--color-surface)"),s.push("--platform-surface-elevated: var(--color-surface)"),s.push("--platform-surface-hover: color-mix(in srgb, var(--color-surface) 90%, var(--color-border))"),s.push(`--platform-text: ${g}`),s.push(`--platform-text-secondary: color-mix(in srgb, ${g} 75%, var(--color-background))`),s.push(`--platform-text-muted: color-mix(in srgb, ${g} 60%, var(--color-background))`),s.push(`--platform-text-on-primary: ${u}`),s.push("--platform-border: var(--color-border)"),s.push("--platform-border-light: color-mix(in srgb, var(--color-border) 70%, transparent)"),s.push("--platform-border-hover: color-mix(in srgb, var(--color-border) 85%, var(--color-text))"),s.push("--platform-primary-solid: var(--color-primary)"),s.push("--platform-primary: var(--color-primary)"),s.push("--platform-primary-hover: var(--color-primary-hover)"),s.push("--platform-accent: var(--color-secondary)"),s.push(`--font-family: ${o.typography.fontFamily}`),s.push(`--font-family-mono: ${o.typography.fontFamilyMono}`),s.push(`--font-size-xs: ${o.typography.fontSizeXs}`),s.push(`--font-size-sm: ${o.typography.fontSizeSm}`),s.push(`--font-size-md: ${o.typography.fontSizeMd}`),s.push(`--font-size-lg: ${o.typography.fontSizeLg}`),s.push(`--font-size-xl: ${o.typography.fontSizeXl}`),s.push(`--font-weight-normal: ${o.typography.fontWeightNormal}`),s.push(`--font-weight-medium: ${o.typography.fontWeightMedium}`),s.push(`--font-weight-semibold: ${o.typography.fontWeightSemibold}`),s.push(`--font-weight-bold: ${o.typography.fontWeightBold}`),s.push(`--line-height-tight: ${o.typography.lineHeightTight}`),s.push(`--line-height-normal: ${o.typography.lineHeightNormal}`),s.push(`--line-height-relaxed: ${o.typography.lineHeightRelaxed}`),Object.entries(o.spacing).forEach(([v,z])=>{s.push(`--spacing-${v}: ${z}`)}),Object.entries(o.borderRadius).forEach(([v,z])=>{s.push(`--radius-${v}: ${z}`)}),Object.entries(o.shadows).forEach(([v,z])=>{s.push(`--shadow-${v}: ${z}`)}),Object.entries(o.transitions).forEach(([v,z])=>{s.push(`--transition-${v}: ${z}`)}),s.push(`--focus-ring-width: ${o.effects.focusRingWidth}`),s.push(`--focus-ring-offset: ${o.effects.focusRingOffset}`),s.push(`--focus-ring-color: ${o.effects.focusRingColor}`),s.push(`--shadow-color: ${o.effects.shadowColor}`);const h=`color-mix(in srgb, var(--color-text) ${Math.round(o.patterns.background.opacity*100)}%, transparent)`,f=`color-mix(in srgb, var(--color-text) ${Math.round(o.patterns.surface.opacity*100)}%, transparent)`,d=(v,z)=>v==="dots"?`radial-gradient(circle, ${z} 1px, transparent 1px)`:v==="grid"?`linear-gradient(${z} 1px, transparent 1px), linear-gradient(90deg, ${z} 1px, transparent 1px)`:v==="plus"?`linear-gradient(${z} 1px, transparent 1px), linear-gradient(90deg, ${z} 1px, transparent 1px), radial-gradient(circle, ${z} 1px, transparent 1px)`:"none";return s.push(`--pattern-background-image: ${d(o.patterns.background.type,h)}`),s.push(`--pattern-background-size: ${o.patterns.background.size}px ${o.patterns.background.size}px`),s.push(`--pattern-surface-image: ${d(o.patterns.surface.type,f)}`),s.push(`--pattern-surface-size: ${o.patterns.surface.size}px ${o.patterns.surface.size}px`),Object.entries(o.components).forEach(([v,z])=>{Object.entries(z).forEach(([_,T])=>{const S=_.replace(/([A-Z])/g,"-$1").toLowerCase();if(_==="focusRingAlpha"){const y=Math.round(T*100);s.push(`--${v}-focus-ring-color: color-mix(in srgb, var(--color-primary) ${y}%, transparent)`)}else if(_==="elevatedBorderWidth"){const y=o.components.card?.elevatedBorderEnabled;s.push(`--card-elevated-border-width: ${y?T:"0px"}`)}else s.push(`--${v}-${S}: ${T}`)})}),`.app {
  ${s.join(`;
  `)}
}`}function Uv({children:o}){const[b,s]=fe.useReducer(Hv,qe),[p,g]=fe.useState("light"),u=fe.useRef(null),h=fe.useRef(null),f=fe.useRef(null),d=fe.useMemo(()=>Lv(b,p),[b,p]),v=fe.useMemo(()=>Zh([b.typography.fontFamily,b.typography.fontFamilyMono]),[b.typography.fontFamily,b.typography.fontFamilyMono]);fe.useLayoutEffect(()=>{if(!u.current){const j=document.createElement("style");j.id="dynamic-styles",document.head.appendChild(j),u.current=j}u.current.textContent=d},[d]),fe.useLayoutEffect(()=>{const A=document.querySelector(".app")||document.body,C=getComputedStyle(A).backgroundColor,M=uc(C,"var(--color-text)");if(f.current===M)return;f.current=M;const B=document.documentElement.style;B.setProperty("--platform-text",M),B.setProperty("--platform-text-secondary",`color-mix(in srgb, ${M} 75%, var(--color-background))`),B.setProperty("--platform-text-muted",`color-mix(in srgb, ${M} 60%, var(--color-background))`)},[d]),fe.useLayoutEffect(()=>{if(v){if(!h.current){const j=document.createElement("link");j.id="dynamic-fonts",j.rel="stylesheet",document.head.appendChild(j),h.current=j}h.current.href=v}},[v]);const z=fe.useCallback((j,A,C)=>{s({type:"SET_TOKEN",category:j,key:A,value:C})},[]),_=fe.useCallback((j,A)=>{s({type:"SET_CATEGORY",category:j,values:A})},[]),T=fe.useCallback(()=>{s({type:"RESET_TOKENS"})},[]),S=fe.useCallback(j=>{s({type:"LOAD_PRESET",tokens:j})},[]),y=fe.useMemo(()=>({tokens:b,themeMode:p,setThemeMode:g,setToken:z,setCategory:_,resetTokens:T,loadPreset:S}),[b,p,z,_,T,S]);return i.jsx(Gh.Provider,{value:y,children:o})}function Mi(){const o=fe.useContext(Gh);if(!o)throw new Error("useDesignTokens must be used within a DesignTokenProvider");return o}function qv(o){return/^#([0-9A-Fa-f]{3}){1,2}$/.test(o)}function Yv(o){const b=/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*([0-9.]+)\s*)?\)$/,s=o.match(b);if(!s)return!1;const[,p,g,u,,h]=s,f=d=>{const v=parseInt(d,10);return v>=0&&v<=255};if(!f(p)||!f(g)||!f(u))return!1;if(h!==void 0){const d=parseFloat(h);if(isNaN(d)||d<0||d>1)return!1}return!0}function Zv(o){const b=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*([0-9.]+)\s*)?\)$/,s=o.match(b);if(!s)return!1;const[,p,g,u,,h]=s,f=parseInt(p,10);if(f<0||f>360)return!1;const d=parseInt(g,10),v=parseInt(u,10);if(d<0||d>100||v<0||v>100)return!1;if(h!==void 0){const z=parseFloat(h);if(isNaN(z)||z<0||z>1)return!1}return!0}function Ah(o){return!o||typeof o!="string"?!1:qv(o)||Yv(o)||Zv(o)?!0:["transparent","currentcolor","inherit","initial","unset","black","white","red","green","blue","yellow","orange","purple","pink","gray","grey","cyan","magenta","lime","navy","teal","aqua","maroon","olive","silver","fuchsia"].includes(o.toLowerCase())}function cr(o){return!o||typeof o!="string"?"":o.replace(/<script[^>]*>.*?<\/script>/gi,"").replace(/javascript:/gi,"").replace(/expression\(/gi,"").replace(/@import/gi,"").replace(/<!--/g,"").replace(/-->/g,"").trim()}function kh(o){return["none","uppercase","lowercase","capitalize"].includes(o)?o:null}function Gv(o){if(!o||typeof o!="string")return null;const b=o.match(/^(-?\d+(?:\.\d+)?)(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)?$/);if(!b)return null;const[,s,p="px"]=b,g=parseFloat(s);return isNaN(g)||!isFinite(g)?null:{value:g,unit:p}}function Vv(o,b){return isFinite(o)?`${o}${b}`:"0px"}function St({label:o,value:b,onChange:s,showSync:p=!1,syncTitle:g,syncAriaLabel:u,onSync:h}){const[f,d]=fe.useState(b);fe.useEffect(()=>{d(b)},[b]);const v=_=>{const T=_.target.value,S=cr(T);d(S),S&&Ah(S)&&s(S)},z=_=>{const T=_.target.value;Ah(T)&&(d(T),s(T))};return i.jsxs("div",{className:"color-picker",children:[i.jsx("label",{className:"color-picker-label",children:o}),i.jsxs("div",{className:"color-picker-controls",children:[i.jsx("input",{type:"color",value:b,onChange:z,className:"color-picker-swatch"}),i.jsx("input",{type:"text",value:f,onChange:v,className:"color-picker-input",placeholder:"#000000"}),p&&h&&i.jsx("button",{type:"button",className:"color-picker-sync",onClick:h,title:g,"aria-label":u||g||"Sync theme color",children:i.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[i.jsx("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),i.jsx("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})]})})]})]})}function Ne({label:o,value:b,min:s,max:p,step:g=1,unit:u="",onChange:h}){return i.jsxs("div",{className:"slider-control",children:[i.jsxs("div",{className:"slider-control-header",children:[i.jsx("label",{className:"slider-control-label",children:o}),i.jsxs("span",{className:"slider-control-value",children:[b,u]})]}),i.jsx("input",{type:"range",min:s,max:p,step:g,value:b,onChange:f=>h(Number(f.target.value)),className:"slider-control-input"})]})}const vc=[{name:"Sans Serif",fonts:["Inter","Roboto","JetBrains Mono","Source Sans 3","Noto Sans","IBM Plex Sans","Manrope","Space Grotesk","Rubik","Work Sans","Lato","Poppins","DM Sans","Figtree","Plus Jakarta Sans"]},{name:"Serif",fonts:["Merriweather","Playfair Display"]},{name:"Monospace",fonts:["JetBrains Mono","Fira Code","Source Code Pro","IBM Plex Mono"]}],$v=vc.flatMap(o=>o.fonts.map(b=>`${b}, ${Vh(o.name)}`));function Vh(o){switch(o){case"Sans Serif":return"sans-serif";case"Serif":return"serif";case"Display":return"cursive";case"Handwriting":return"cursive";case"Monospace":return"monospace";default:return"sans-serif"}}const Xv=vc.find(o=>o.name==="Monospace").fonts.map(o=>`${o}, monospace`);function Eh({label:o,value:b,onChange:s,fonts:p,showCategories:g=!0}){const[u,h]=fe.useState(""),f=o.toLowerCase().includes("mono"),d=p||(f?Xv:$v),v=g&&!f?vc.filter(_=>_.name!=="Monospace").map(_=>({..._,fonts:_.fonts.filter(T=>T.toLowerCase().includes(u.toLowerCase()))})).filter(_=>_.fonts.length>0):[],z=d.filter(_=>_.toLowerCase().includes(u.toLowerCase()));return i.jsxs("div",{className:"font-selector",children:[i.jsx("label",{className:"font-selector-label",children:o}),i.jsx("input",{type:"text",placeholder:"Search fonts...",value:u,onChange:_=>h(_.target.value),className:"font-selector-search"}),i.jsx("select",{value:b,onChange:_=>s(_.target.value),className:"font-selector-select",style:{fontFamily:b},size:8,children:g&&!f?v.map(_=>i.jsx("optgroup",{label:_.name,children:_.fonts.map(T=>{const S=`${T}, ${Vh(_.name)}`;return i.jsx("option",{value:S,style:{fontFamily:S},children:T},T)})},_.name)):z.map(_=>i.jsx("option",{value:_,style:{fontFamily:_},children:_.split(",")[0]},_))}),i.jsx("div",{className:"font-selector-preview",style:{fontFamily:b},children:"The quick brown fox jumps over the lazy dog"})]})}const Qv=[{label:"None",value:"none"},{label:"Small",value:"0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)"},{label:"Medium",value:"0 4px 6px -1px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--shadow-color) 40%, transparent)"},{label:"Large",value:"0 10px 15px -3px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--shadow-color) 40%, transparent)"},{label:"Extra Large",value:"0 20px 25px -5px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--shadow-color) 40%, transparent)"},{label:"Hard Offset",value:"6px 6px 0 0 var(--shadow-color)"}];function ji({label:o,value:b,onChange:s}){return i.jsxs("div",{className:"shadow-editor",children:[i.jsx("label",{className:"shadow-editor-label",children:o}),i.jsx("div",{className:"shadow-editor-presets",children:Qv.map(p=>i.jsx("button",{className:`shadow-editor-preset ${b===p.value?"shadow-editor-preset-active":""}`,onClick:()=>s(p.value),title:p.label,children:i.jsx("div",{className:"shadow-editor-preview",style:{boxShadow:p.value}})},p.label))}),i.jsx("input",{type:"text",className:"shadow-editor-input",value:b,onChange:p=>s(p.target.value),placeholder:"e.g. 6px 6px 0 0 var(--shadow-color)","aria-label":`${o} value`})]})}function aa({title:o,icon:b,children:s,defaultOpen:p=!1}){const[g,u]=fe.useState(p);return i.jsxs("div",{className:`panel-section ${g?"panel-section-open":""}`,children:[i.jsxs("button",{className:"panel-section-header",onClick:()=>u(!g),children:[i.jsx("span",{className:"panel-section-icon",children:b}),i.jsx("span",{className:"panel-section-title",children:o}),i.jsx(sl,{className:"panel-section-chevron",size:16})]}),g&&i.jsx("div",{className:"panel-section-content",children:s})]})}function Kv(){const{tokens:o,setToken:b,setCategory:s}=Mi(),[p,g]=fe.useState("light"),u=y=>parseFloat(y.replace(/[^0-9.]/g,""))||0,h=(y,j)=>`${y}${j}`,f=p==="light"?o.lightTheme:o.darkTheme,d=p==="light"?"lightTheme":"darkTheme",v=d==="lightTheme"?"darkTheme":"lightTheme",z=o[v],_=y=>f[y]!==z[y],T=y=>{s(v,{[y]:f[y]})},S=p==="light"?"Sync this token to dark theme":"Sync this token to light theme";return i.jsxs("div",{className:"token-panel",children:[i.jsxs(aa,{title:"Colors",icon:i.jsx(gc,{size:16}),defaultOpen:!0,children:[i.jsxs("div",{className:"theme-mode-toggle",children:[i.jsx("button",{className:`theme-toggle-btn ${p==="light"?"active":""}`,onClick:()=>g("light"),children:"Light Theme"}),i.jsx("button",{className:`theme-toggle-btn ${p==="dark"?"active":""}`,onClick:()=>g("dark"),children:"Dark Theme"})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Brand Colors"}),i.jsx(St,{label:"Primary",value:f.primary,onChange:y=>s(d,{...o[d],primary:y}),showSync:_("primary"),syncTitle:S,onSync:()=>T("primary")}),i.jsx(St,{label:"Primary Hover",value:f.primaryHover,onChange:y=>s(d,{...o[d],primaryHover:y}),showSync:_("primaryHover"),syncTitle:S,onSync:()=>T("primaryHover")}),i.jsx(St,{label:"Secondary",value:f.secondary,onChange:y=>s(d,{...o[d],secondary:y}),showSync:_("secondary"),syncTitle:S,onSync:()=>T("secondary")}),i.jsx(St,{label:"Secondary Hover",value:f.secondaryHover,onChange:y=>s(d,{...o[d],secondaryHover:y}),showSync:_("secondaryHover"),syncTitle:S,onSync:()=>T("secondaryHover")})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Semantic Colors"}),i.jsx(St,{label:"Success",value:f.success,onChange:y=>s(d,{...o[d],success:y}),showSync:_("success"),syncTitle:S,onSync:()=>T("success")}),i.jsx(St,{label:"Warning",value:f.warning,onChange:y=>s(d,{...o[d],warning:y}),showSync:_("warning"),syncTitle:S,onSync:()=>T("warning")}),i.jsx(St,{label:"Error",value:f.error,onChange:y=>s(d,{...o[d],error:y}),showSync:_("error"),syncTitle:S,onSync:()=>T("error")}),i.jsx(St,{label:"Info",value:f.info,onChange:y=>s(d,{...o[d],info:y}),showSync:_("info"),syncTitle:S,onSync:()=>T("info")})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Base Colors"}),i.jsx(St,{label:"Background",value:f.background,onChange:y=>s(d,{...o[d],background:y}),showSync:_("background"),syncTitle:S,onSync:()=>T("background")}),i.jsx(St,{label:"Surface",value:f.surface,onChange:y=>s(d,{...o[d],surface:y}),showSync:_("surface"),syncTitle:S,onSync:()=>T("surface")}),i.jsx(St,{label:"Primary Text",value:f.text,onChange:y=>s(d,{...o[d],text:y}),showSync:_("text"),syncTitle:S,onSync:()=>T("text")}),i.jsx(St,{label:"Text Muted",value:f.textMuted,onChange:y=>s(d,{...o[d],textMuted:y}),showSync:_("textMuted"),syncTitle:S,onSync:()=>T("textMuted")}),i.jsx(St,{label:"On Accent Text",value:f.textOnAccent,onChange:y=>s(d,{...o[d],textOnAccent:y}),showSync:_("textOnAccent"),syncTitle:S,onSync:()=>T("textOnAccent")}),i.jsx(St,{label:"Border",value:f.border,onChange:y=>s(d,{...o[d],border:y}),showSync:_("border"),syncTitle:S,onSync:()=>T("border")})]})]}),i.jsxs(aa,{title:"Background Patterns",icon:i.jsx(tc,{size:16}),children:[i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Background"}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Pattern Type"}),i.jsxs("select",{value:o.patterns.background.type,onChange:y=>s("patterns",{...o.patterns,background:{...o.patterns.background,type:y.target.value}}),className:"control-select",children:[i.jsx("option",{value:"none",children:"None"}),i.jsx("option",{value:"dots",children:"Dots"}),i.jsx("option",{value:"grid",children:"Grid"}),i.jsx("option",{value:"plus",children:"Plus"})]})]}),i.jsx(Ne,{label:"Opacity",value:o.patterns.background.opacity,min:0,max:.2,step:.01,onChange:y=>s("patterns",{...o.patterns,background:{...o.patterns.background,opacity:y}})}),i.jsx(Ne,{label:"Size",value:o.patterns.background.size,min:8,max:40,step:1,unit:"px",onChange:y=>s("patterns",{...o.patterns,background:{...o.patterns.background,size:y}})})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Surface"}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Pattern Type"}),i.jsxs("select",{value:o.patterns.surface.type,onChange:y=>s("patterns",{...o.patterns,surface:{...o.patterns.surface,type:y.target.value}}),className:"control-select",children:[i.jsx("option",{value:"none",children:"None"}),i.jsx("option",{value:"dots",children:"Dots"}),i.jsx("option",{value:"grid",children:"Grid"}),i.jsx("option",{value:"plus",children:"Plus"})]})]}),i.jsx(Ne,{label:"Opacity",value:o.patterns.surface.opacity,min:0,max:.2,step:.01,onChange:y=>s("patterns",{...o.patterns,surface:{...o.patterns.surface,opacity:y}})}),i.jsx(Ne,{label:"Size",value:o.patterns.surface.size,min:8,max:40,step:1,unit:"px",onChange:y=>s("patterns",{...o.patterns,surface:{...o.patterns.surface,size:y}})})]})]}),i.jsxs(aa,{title:"Typography",icon:i.jsx(Av,{size:16}),children:[i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Font Families"}),i.jsx(Eh,{label:"Primary Font",value:o.typography.fontFamily,onChange:y=>b("typography","fontFamily",y)}),i.jsx(Eh,{label:"Monospace Font",value:o.typography.fontFamilyMono,onChange:y=>b("typography","fontFamilyMono",y)})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Font Sizes"}),i.jsx(Ne,{label:"Extra Small",value:u(o.typography.fontSizeXs),min:.5,max:1,step:.05,unit:"rem",onChange:y=>b("typography","fontSizeXs",h(y,"rem"))}),i.jsx(Ne,{label:"Small",value:u(o.typography.fontSizeSm),min:.75,max:1,step:.05,unit:"rem",onChange:y=>b("typography","fontSizeSm",h(y,"rem"))}),i.jsx(Ne,{label:"Medium",value:u(o.typography.fontSizeMd),min:.875,max:1.25,step:.05,unit:"rem",onChange:y=>b("typography","fontSizeMd",h(y,"rem"))}),i.jsx(Ne,{label:"Large",value:u(o.typography.fontSizeLg),min:1,max:1.5,step:.05,unit:"rem",onChange:y=>b("typography","fontSizeLg",h(y,"rem"))}),i.jsx(Ne,{label:"Extra Large",value:u(o.typography.fontSizeXl),min:1.125,max:2,step:.05,unit:"rem",onChange:y=>b("typography","fontSizeXl",h(y,"rem"))})]}),i.jsxs("div",{className:"panel-subsection",children:[i.jsx("h4",{className:"panel-subsection-title",children:"Font Weights"}),i.jsx(Ne,{label:"Normal",value:o.typography.fontWeightNormal,min:300,max:500,step:100,onChange:y=>b("typography","fontWeightNormal",y)}),i.jsx(Ne,{label:"Medium",value:o.typography.fontWeightMedium,min:400,max:600,step:100,onChange:y=>b("typography","fontWeightMedium",y)}),i.jsx(Ne,{label:"Semibold",value:o.typography.fontWeightSemibold,min:500,max:700,step:100,onChange:y=>b("typography","fontWeightSemibold",y)}),i.jsx(Ne,{label:"Bold",value:o.typography.fontWeightBold,min:600,max:900,step:100,onChange:y=>b("typography","fontWeightBold",y)})]})]}),i.jsxs(aa,{title:"Spacing",icon:i.jsx(lv,{size:16}),children:[i.jsx(Ne,{label:"Extra Small",value:u(o.spacing.xs),min:.125,max:.5,step:.05,unit:"rem",onChange:y=>b("spacing","xs",h(y,"rem"))}),i.jsx(Ne,{label:"Small",value:u(o.spacing.sm),min:.25,max:1,step:.05,unit:"rem",onChange:y=>b("spacing","sm",h(y,"rem"))}),i.jsx(Ne,{label:"Medium",value:u(o.spacing.md),min:.5,max:1.5,step:.05,unit:"rem",onChange:y=>b("spacing","md",h(y,"rem"))}),i.jsx(Ne,{label:"Large",value:u(o.spacing.lg),min:1,max:2,step:.05,unit:"rem",onChange:y=>b("spacing","lg",h(y,"rem"))}),i.jsx(Ne,{label:"Extra Large",value:u(o.spacing.xl),min:1.5,max:3,step:.05,unit:"rem",onChange:y=>b("spacing","xl",h(y,"rem"))}),i.jsx(Ne,{label:"2X Large",value:u(o.spacing.xxl),min:2,max:4,step:.1,unit:"rem",onChange:y=>b("spacing","xxl",h(y,"rem"))})]}),i.jsxs(aa,{title:"Border Radius",icon:i.jsx(tc,{size:16}),children:[i.jsx(Ne,{label:"Control",value:u(o.borderRadius.control),min:0,max:24,step:1,unit:"px",onChange:y=>b("borderRadius","control",h(y,"px"))}),i.jsx(Ne,{label:"Surface",value:u(o.borderRadius.surface),min:0,max:32,step:1,unit:"px",onChange:y=>b("borderRadius","surface",h(y,"px"))}),i.jsx(Ne,{label:"Overlay",value:u(o.borderRadius.overlay),min:0,max:48,step:1,unit:"px",onChange:y=>b("borderRadius","overlay",h(y,"px"))}),i.jsx(Ne,{label:"Full",value:u(o.borderRadius.full),min:0,max:200,step:1,unit:"px",onChange:y=>b("borderRadius","full",h(y,"px"))})]}),i.jsxs(aa,{title:"Shadows",icon:i.jsx(mc,{size:16}),children:[i.jsx(St,{label:"Shadow Color",value:o.effects.shadowColor,onChange:y=>b("effects","shadowColor",y)}),i.jsx(ji,{label:"Control Shadow",value:o.shadows.control,onChange:y=>b("shadows","control",y)}),i.jsx(ji,{label:"Surface Shadow",value:o.shadows.surface,onChange:y=>b("shadows","surface",y)}),i.jsx(ji,{label:"Overlay Shadow",value:o.shadows.overlay,onChange:y=>b("shadows","overlay",y)}),i.jsx(ji,{label:"Float Shadow",value:o.shadows.float,onChange:y=>b("shadows","float",y)})]}),i.jsxs(aa,{title:"Transitions",icon:i.jsx(Mv,{size:16}),children:[i.jsx(Ne,{label:"Fast",value:parseInt(o.transitions.fast),min:50,max:200,step:10,unit:"ms",onChange:y=>b("transitions","fast",`${y}ms ease`)}),i.jsx(Ne,{label:"Normal",value:parseInt(o.transitions.normal),min:100,max:300,step:10,unit:"ms",onChange:y=>b("transitions","normal",`${y}ms ease`)}),i.jsx(Ne,{label:"Slow",value:parseInt(o.transitions.slow),min:200,max:500,step:10,unit:"ms",onChange:y=>b("transitions","slow",`${y}ms ease`)})]}),i.jsxs(aa,{title:"Focus Ring",icon:i.jsx(tc,{size:16}),children:[i.jsx(St,{label:"Focus Color",value:o.effects.focusRingColor,onChange:y=>b("effects","focusRingColor",y)}),i.jsx(Ne,{label:"Focus Width",value:u(o.effects.focusRingWidth),min:1,max:6,step:1,unit:"px",onChange:y=>b("effects","focusRingWidth",h(y,"px"))}),i.jsx(Ne,{label:"Focus Offset",value:u(o.effects.focusRingOffset),min:0,max:6,step:1,unit:"px",onChange:y=>b("effects","focusRingOffset",h(y,"px"))})]})]})}function Jv(o){try{if(!o||typeof o!="string")return{isSolid:!0,solidColor:"#3b82f6"};const b=o.trim();if(b.startsWith("linear-gradient")||b.startsWith("radial-gradient")){const s=b.startsWith("linear-gradient"),p=b.match(/gradient\((.*)\)/);if(!p||!p[1])return console.warn("Invalid gradient format, falling back to solid color"),{isSolid:!0,solidColor:"#3b82f6"};const g=[];let u="",h=0;for(const z of p[1])z==="("&&h++,z===")"&&h--,z===","&&h===0?(g.push(u.trim()),u=""):u+=z;u&&g.push(u.trim());let f=180,d=g;if(s&&g.length>0){const z=g[0];if(z.includes("deg")){const _=parseInt(z,10);!isNaN(_)&&isFinite(_)&&(f=Math.max(0,Math.min(360,_)),d=g.slice(1))}}const v=[];for(const z of d){const _=z.match(/(.*?)\s+(\d+)%/);if(_){const T=_[1].trim(),S=parseInt(_[2],10);T&&!isNaN(S)&&isFinite(S)&&v.push({color:T,position:Math.max(0,Math.min(100,S))})}else z.trim()&&v.push({color:z.trim(),position:0})}return v.length<2?{isSolid:!1,gradient:{type:s?"linear":"radial",angle:f,stops:[{color:"#3b82f6",position:0},{color:"#8b5cf6",position:100}]}}:{isSolid:!1,gradient:{type:s?"linear":"radial",angle:f,stops:v}}}return{isSolid:!0,solidColor:b||"#3b82f6"}}catch(b){return console.error("Error parsing gradient:",b),{isSolid:!0,solidColor:"#3b82f6"}}}function nc(o){const b=o.stops.sort((s,p)=>s.position-p.position).map(s=>`${s.color} ${s.position}%`).join(", ");return o.type==="linear"?`linear-gradient(${o.angle}deg, ${b})`:`radial-gradient(circle, ${b})`}function Wv({label:o,value:b,onChange:s}){const p=Jv(b),[g,u]=fe.useState(p.isSolid?"solid":"gradient"),[h,f]=fe.useState(p.solidColor||"#3b82f6"),[d,v]=fe.useState(p.gradient||{type:"linear",angle:180,stops:[{color:"#3b82f6",position:0},{color:"#8b5cf6",position:100}]}),[z,_]=fe.useState(0),T=H=>{u(H),s(H==="solid"?h:nc(d))},S=H=>{f(H),s(H)},y=H=>{v(H),s(nc(H))},j=(H,U)=>{const F=[...d.stops];F[H]={...F[H],color:U},y({...d,stops:F})},A=(H,U)=>{const F=[...d.stops];F[H]={...F[H],position:U},y({...d,stops:F})},C=()=>{const F=[...d.stops,{color:"#8b5cf6",position:50}];y({...d,stops:F}),_(F.length-1)},M=H=>{if(d.stops.length<=2)return;const U=d.stops.filter((F,X)=>X!==H);y({...d,stops:U}),_(Math.max(0,H-1))},B=g==="solid"?h:nc(d);return i.jsxs("div",{className:"gradient-picker",children:[i.jsx("label",{className:"gradient-picker-label",children:o}),i.jsxs("div",{className:"gradient-mode-toggle",children:[i.jsx("button",{className:`mode-toggle-btn ${g==="solid"?"active":""}`,onClick:()=>T("solid"),children:"Solid"}),i.jsx("button",{className:`mode-toggle-btn ${g==="gradient"?"active":""}`,onClick:()=>T("gradient"),children:"Gradient"})]}),i.jsx("div",{className:"gradient-preview",style:{background:B}}),g==="solid"?i.jsxs("div",{className:"solid-color-control",children:[i.jsx("input",{type:"color",value:h,onChange:H=>S(H.target.value),className:"color-input"}),i.jsx("input",{type:"text",value:h,onChange:H=>S(H.target.value),className:"color-text-input"})]}):i.jsxs("div",{className:"gradient-controls",children:[i.jsxs("div",{className:"gradient-type-control",children:[i.jsx("label",{className:"control-label-sm",children:"Type"}),i.jsxs("select",{value:d.type,onChange:H=>y({...d,type:H.target.value}),className:"gradient-select",children:[i.jsx("option",{value:"linear",children:"Linear"}),i.jsx("option",{value:"radial",children:"Radial"})]})]}),d.type==="linear"&&i.jsxs("div",{className:"gradient-angle-control",children:[i.jsxs("label",{className:"control-label-sm",children:["Angle: ",d.angle,"°"]}),i.jsx("input",{type:"range",min:"0",max:"360",value:d.angle,onChange:H=>y({...d,angle:parseInt(H.target.value)}),className:"gradient-slider"})]}),i.jsx("div",{className:"gradient-stops-bar",children:d.stops.map((H,U)=>i.jsx("div",{className:`stop-marker ${z===U?"selected":""}`,style:{left:`${H.position}%`,backgroundColor:H.color},onClick:()=>_(U)},U))}),i.jsxs("div",{className:"gradient-stop-editor",children:[i.jsxs("div",{className:"stop-color-control",children:[i.jsx("label",{className:"control-label-sm",children:"Color"}),i.jsxs("div",{className:"stop-color-inputs",children:[i.jsx("input",{type:"color",value:d.stops[z]?.color||"#000000",onChange:H=>j(z,H.target.value),className:"color-input-sm"}),i.jsx("input",{type:"text",value:d.stops[z]?.color||"#000000",onChange:H=>j(z,H.target.value),className:"color-text-input-sm"})]})]}),i.jsxs("div",{className:"stop-position-control",children:[i.jsxs("label",{className:"control-label-sm",children:["Position: ",d.stops[z]?.position||0,"%"]}),i.jsx("input",{type:"range",min:"0",max:"100",value:d.stops[z]?.position||0,onChange:H=>A(z,parseInt(H.target.value)),className:"gradient-slider"})]}),i.jsxs("div",{className:"stop-actions",children:[i.jsx("button",{onClick:C,className:"stop-action-btn",title:"Add color stop",children:i.jsx(uv,{size:14})}),i.jsx("button",{onClick:()=>M(z),className:"stop-action-btn",disabled:d.stops.length<=2,title:"Remove color stop",children:i.jsx(wv,{size:14})})]})]})]})]})}function an({title:o,icon:b,children:s,defaultOpen:p=!1}){const[g,u]=fe.useState(p);return i.jsxs("div",{className:`panel-section ${g?"panel-section-open":""}`,children:[i.jsxs("button",{className:"panel-section-header",onClick:()=>u(!g),children:[i.jsx("span",{className:"panel-section-icon",children:b}),i.jsx("span",{className:"panel-section-title",children:o}),i.jsx(sl,{className:"panel-section-chevron",size:16})]}),g&&i.jsx("div",{className:"panel-section-content",children:s})]})}function Fv(){const{tokens:o,setCategory:b}=Mi(),s=g=>{const u=Gv(g);return u?u.value:0},p=(g,u)=>Vv(g,u);return i.jsxs("div",{className:"component-panel",children:[i.jsxs(an,{title:"Button",icon:i.jsx(ec,{size:16}),defaultOpen:!0,children:[i.jsx(Ne,{label:"Border Width",value:s(o.components.button.borderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{button:{...o.components.button,borderWidth:p(g,"px")}})}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Inner Shadow"}),i.jsx("input",{type:"text",value:o.components.button.innerShadow,onChange:g=>{const u=cr(g.target.value);b("components",{button:{...o.components.button,innerShadow:u}})},className:"control-input",placeholder:"none or inset 0 1px 2px rgba(0,0,0,0.1)"})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Text Transform"}),i.jsxs("select",{value:o.components.button.textTransform,onChange:g=>{const u=kh(g.target.value);u&&b("components",{button:{...o.components.button,textTransform:u}})},className:"control-select",children:[i.jsx("option",{value:"none",children:"None"}),i.jsx("option",{value:"uppercase",children:"Uppercase"}),i.jsx("option",{value:"lowercase",children:"Lowercase"}),i.jsx("option",{value:"capitalize",children:"Capitalize"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Letter Spacing"}),i.jsx("input",{type:"text",value:o.components.button.letterSpacing,onChange:g=>{const u=cr(g.target.value);b("components",{button:{...o.components.button,letterSpacing:u}})},className:"control-input",placeholder:"normal or 0.05em"})]})]}),i.jsxs(an,{title:"Input",icon:i.jsx(ec,{size:16}),children:[i.jsx(Ne,{label:"Border Width",value:s(o.components.input.borderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{input:{...o.components.input,borderWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Focus Ring Width",value:s(o.components.input.focusRingWidth),min:0,max:6,step:1,unit:"px",onChange:g=>b("components",{input:{...o.components.input,focusRingWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Focus Ring Opacity",value:o.components.input.focusRingAlpha,min:0,max:1,step:.05,onChange:g=>b("components",{input:{...o.components.input,focusRingAlpha:g}})})]}),i.jsxs(an,{title:"Avatar",icon:i.jsx(Pg,{size:16}),children:[i.jsx(Ne,{label:"Border Width",value:s(o.components.avatar.borderWidth),min:0,max:8,step:1,unit:"px",onChange:g=>b("components",{avatar:{...o.components.avatar,borderWidth:p(g,"px")}})}),i.jsx(Wv,{label:"Border Color",value:o.components.avatar.borderColor.includes("var(")?"#e5e7eb":o.components.avatar.borderColor,onChange:g=>b("components",{avatar:{...o.components.avatar,borderColor:g}})})]}),i.jsxs(an,{title:"Checkbox",icon:i.jsx(pv,{size:16}),children:[i.jsx(Ne,{label:"Size",value:s(o.components.checkbox.size),min:14,max:28,step:2,unit:"px",onChange:g=>b("components",{checkbox:{...o.components.checkbox,size:p(g,"px")}})}),i.jsx(Ne,{label:"Border Width",value:s(o.components.checkbox.borderWidth),min:1,max:4,step:1,unit:"px",onChange:g=>b("components",{checkbox:{...o.components.checkbox,borderWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Border Radius",value:s(o.components.checkbox.borderRadius.includes("var(")?"4px":o.components.checkbox.borderRadius),min:0,max:999,step:1,unit:"px",onChange:g=>b("components",{checkbox:{...o.components.checkbox,borderRadius:p(g,"px")}})})]}),i.jsxs(an,{title:"Radio",icon:i.jsx(Gg,{size:16}),children:[i.jsx(Ne,{label:"Size",value:s(o.components.radio.size),min:14,max:28,step:2,unit:"px",onChange:g=>b("components",{radio:{...o.components.radio,size:p(g,"px")}})}),i.jsx(Ne,{label:"Border Width",value:s(o.components.radio.borderWidth),min:1,max:4,step:1,unit:"px",onChange:g=>b("components",{radio:{...o.components.radio,borderWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Dot Size",value:s(o.components.radio.dotSize),min:4,max:16,step:2,unit:"px",onChange:g=>b("components",{radio:{...o.components.radio,dotSize:p(g,"px")}})})]}),i.jsxs(an,{title:"Toggle",icon:i.jsx(_v,{size:16}),children:[i.jsx(Ne,{label:"Track Height",value:s(o.components.toggle.trackHeight),min:16,max:36,step:2,unit:"px",onChange:g=>b("components",{toggle:{...o.components.toggle,trackHeight:p(g,"px")}})}),i.jsx(Ne,{label:"Thumb Size",value:s(o.components.toggle.thumbSize),min:12,max:32,step:2,unit:"px",onChange:g=>b("components",{toggle:{...o.components.toggle,thumbSize:p(g,"px")}})}),i.jsx(Ne,{label:"Border Width",value:s(o.components.toggle.borderWidth),min:0,max:4,step:1,unit:"px",onChange:g=>b("components",{toggle:{...o.components.toggle,borderWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Thumb Border",value:s(o.components.toggle.thumbBorderWidth),min:0,max:4,step:1,unit:"px",onChange:g=>b("components",{toggle:{...o.components.toggle,thumbBorderWidth:p(g,"px")}})}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Track Shadow"}),i.jsx("input",{type:"text",value:o.components.toggle.trackShadow,onChange:g=>{const u=cr(g.target.value);b("components",{toggle:{...o.components.toggle,trackShadow:u}})},className:"control-input",placeholder:"e.g. 4px 4px 0 0 var(--shadow-color)"})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Thumb Shadow"}),i.jsx("input",{type:"text",value:o.components.toggle.thumbShadow,onChange:g=>{const u=cr(g.target.value);b("components",{toggle:{...o.components.toggle,thumbShadow:u}})},className:"control-input",placeholder:"e.g. 2px 2px 0 0 var(--shadow-color)"})]})]}),i.jsxs(an,{title:"Badge",icon:i.jsx(Th,{size:16}),children:[i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Text Transform"}),i.jsxs("select",{value:o.components.badge.textTransform,onChange:g=>{const u=kh(g.target.value);u&&b("components",{badge:{...o.components.badge,textTransform:u}})},className:"control-select",children:[i.jsx("option",{value:"none",children:"None"}),i.jsx("option",{value:"uppercase",children:"Uppercase"}),i.jsx("option",{value:"lowercase",children:"Lowercase"}),i.jsx("option",{value:"capitalize",children:"Capitalize"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Letter Spacing"}),i.jsx("input",{type:"text",value:o.components.badge.letterSpacing,onChange:g=>{const u=cr(g.target.value);b("components",{badge:{...o.components.badge,letterSpacing:u}})},className:"control-input",placeholder:"normal or 0.05em"})]}),i.jsx(Ne,{label:"Border Width",value:s(o.components.badge.borderWidth),min:0,max:3,step:1,unit:"px",onChange:g=>b("components",{badge:{...o.components.badge,borderWidth:p(g,"px")}})})]}),i.jsxs(an,{title:"Card",icon:i.jsx(Qg,{size:16}),children:[i.jsx(Ne,{label:"Border Width",value:s(o.components.card.borderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{card:{...o.components.card,borderWidth:p(g,"px")}})}),i.jsx("div",{className:"control-group",children:i.jsxs("label",{className:"control-label",children:[i.jsx("input",{type:"checkbox",checked:o.components.card.elevatedBorderEnabled,onChange:g=>b("components",{card:{...o.components.card,elevatedBorderEnabled:g.target.checked}}),style:{marginRight:"8px"}}),"Elevated Border"]})}),i.jsx(Ne,{label:"Elevated Border Width",value:s(o.components.card.elevatedBorderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{card:{...o.components.card,elevatedBorderWidth:p(g,"px")}})}),i.jsx(Ne,{label:"Header Border Width",value:s(o.components.card.headerBorderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{card:{...o.components.card,headerBorderWidth:p(g,"px")}})})]}),i.jsxs(an,{title:"Alert",icon:i.jsx(Th,{size:16}),children:[i.jsx(Ne,{label:"Icon Size",value:s(o.components.alert.iconSize),min:16,max:32,step:2,unit:"px",onChange:g=>b("components",{alert:{...o.components.alert,iconSize:p(g,"px")}})}),i.jsx(Ne,{label:"Border Width",value:s(o.components.alert.borderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{alert:{...o.components.alert,borderWidth:p(g,"px")}})})]}),i.jsxs(an,{title:"Tabs",icon:i.jsx(sv,{size:16}),children:[i.jsx(Ne,{label:"Indicator Height",value:s(o.components.tabs.indicatorHeight),min:1,max:6,step:1,unit:"px",onChange:g=>b("components",{tabs:{...o.components.tabs,indicatorHeight:p(g,"px")}})}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{className:"control-label",children:"Indicator Style"}),i.jsxs("select",{value:o.components.tabs.indicatorStyle,onChange:g=>{const u=g.target.value;(u==="underline"||u==="pill"||u==="enclosed")&&b("components",{tabs:{...o.components.tabs,indicatorStyle:u}})},className:"control-select",children:[i.jsx("option",{value:"underline",children:"Underline"}),i.jsx("option",{value:"pill",children:"Pill"}),i.jsx("option",{value:"enclosed",children:"Enclosed"})]})]})]}),i.jsxs(an,{title:"Progress",icon:i.jsx(Ag,{size:16}),children:[i.jsx(Ne,{label:"Track Height",value:s(o.components.progress.trackHeight),min:4,max:20,step:2,unit:"px",onChange:g=>b("components",{progress:{...o.components.progress,trackHeight:p(g,"px")}})}),i.jsx(Ne,{label:"Border Radius",value:s(o.components.progress.borderRadius.includes("var(")?"9999px":o.components.progress.borderRadius),min:0,max:999,step:1,unit:"px",onChange:g=>b("components",{progress:{...o.components.progress,borderRadius:p(g,"px")}})})]}),i.jsxs(an,{title:"Modal",icon:i.jsx(ec,{size:16}),children:[i.jsx(St,{label:"Backdrop Color",value:o.components.modal.backdropColor,onChange:g=>b("components",{modal:{...o.components.modal,backdropColor:g}})}),i.jsx(Ne,{label:"Backdrop Opacity",value:parseFloat(o.components.modal.backdropOpacity),min:0,max:1,step:.1,onChange:g=>b("components",{modal:{...o.components.modal,backdropOpacity:g.toString()}})}),i.jsx(Ne,{label:"Backdrop Blur",value:s(o.components.modal.backdropBlur),min:0,max:20,step:2,unit:"px",onChange:g=>b("components",{modal:{...o.components.modal,backdropBlur:p(g,"px")}})}),i.jsx(Ne,{label:"Border Width",value:s(o.components.modal.borderWidth),min:0,max:5,step:1,unit:"px",onChange:g=>b("components",{modal:{...o.components.modal,borderWidth:p(g,"px")}})})]})]})}function Iv(){const[o,b]=fe.useState("tokens");return i.jsxs("div",{className:"editor-sidebar",children:[i.jsxs("div",{className:"editor-tabs",children:[i.jsxs("button",{className:`editor-tab ${o==="tokens"?"editor-tab-active":""}`,onClick:()=>b("tokens"),children:[i.jsx(gc,{size:16}),i.jsx("span",{children:"Design Tokens"})]}),i.jsxs("button",{className:`editor-tab ${o==="components"?"editor-tab-active":""}`,onClick:()=>b("components"),children:[i.jsx(Og,{size:16}),i.jsx("span",{children:"Components"})]})]}),i.jsx("div",{className:"editor-content",children:o==="tokens"?i.jsx(Kv,{}):i.jsx(Fv,{})})]})}const rt=fe.forwardRef(({variant:o="primary",size:b="md",fullWidth:s=!1,loading:p=!1,disabled:g,children:u,className:h="",...f},d)=>i.jsx("button",{ref:d,className:`btn btn-${o} btn-${b} ${s?"btn-full":""} ${h}`,disabled:g||p,...f,children:p?i.jsx("span",{className:"btn-loader"}):u}));rt.displayName="Button";function cl(){return`${Date.now().toString(36)}-${Math.random().toString(36).substring(2,9)}`}const il=fe.forwardRef(({label:o,error:b,helperText:s,className:p="",id:g,...u},h)=>{const f=fe.useMemo(()=>g||`input-${cl()}`,[g]);return i.jsxs("div",{className:`input-wrapper ${b?"input-error":""} ${p}`,children:[o&&i.jsx("label",{htmlFor:f,className:"input-label",children:o}),i.jsx("input",{ref:h,id:f,className:"input-field","aria-invalid":!!b,"aria-describedby":b?`${f}-error`:s?`${f}-helper`:void 0,...u}),b&&i.jsx("span",{id:`${f}-error`,className:"input-error-text",children:b}),s&&!b&&i.jsx("span",{id:`${f}-helper`,className:"input-helper-text",children:s})]})});il.displayName="Input";const bc=fe.forwardRef(({label:o,options:b,placeholder:s,error:p,className:g="",id:u,...h},f)=>{const d=fe.useMemo(()=>u||`select-${cl()}`,[u]);return i.jsxs("div",{className:`select-wrapper ${p?"select-error":""} ${g}`,children:[o&&i.jsx("label",{htmlFor:d,className:"select-label",children:o}),i.jsxs("div",{className:"select-container",children:[i.jsxs("select",{ref:f,id:d,className:"select-field","aria-invalid":!!p,...h,children:[s&&i.jsx("option",{value:"",disabled:!0,children:s}),b.map(v=>i.jsx("option",{value:v.value,disabled:v.disabled,children:v.label},v.value))]}),i.jsx("span",{className:"select-icon",children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),p&&i.jsx("span",{className:"select-error-text",children:p})]})});bc.displayName="Select";const ur=fe.forwardRef(({label:o,indeterminate:b,className:s="",id:p,...g},u)=>{const h=fe.useMemo(()=>p||`checkbox-${cl()}`,[p]),f=d=>{d&&(d.indeterminate=b||!1),typeof u=="function"?u(d):u&&(u.current=d)};return i.jsxs("label",{htmlFor:h,className:`checkbox-wrapper ${s}`,children:[i.jsx("input",{ref:f,type:"checkbox",id:h,className:"checkbox-input",...g}),i.jsxs("span",{className:"checkbox-box",children:[i.jsx("svg",{className:"checkbox-check",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3.5 8L6.5 11L12.5 5",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})}),i.jsx("svg",{className:"checkbox-indeterminate",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M4 8H12",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})})]}),o&&i.jsx("span",{className:"checkbox-label",children:o})]})});ur.displayName="Checkbox";const $h=fe.forwardRef(({label:o,className:b="",id:s,...p},g)=>{const u=fe.useMemo(()=>s||`radio-${cl()}`,[s]);return i.jsxs("label",{htmlFor:u,className:`radio-wrapper ${b}`,children:[i.jsx("input",{ref:g,type:"radio",id:u,className:"radio-input",...p}),i.jsx("span",{className:"radio-circle",children:i.jsx("span",{className:"radio-dot"})}),o&&i.jsx("span",{className:"radio-label",children:o})]})});$h.displayName="Radio";function Pv({name:o,options:b,value:s,onChange:p,direction:g="vertical",className:u=""}){return i.jsx("div",{className:`radio-group radio-group-${g} ${u}`,role:"radiogroup",children:b.map(h=>i.jsx($h,{name:o,value:h.value,label:h.label,checked:s===h.value,disabled:h.disabled,onChange:()=>p?.(h.value)},h.value))})}const ol=fe.forwardRef(({label:o,size:b="md",className:s="",id:p,...g},u)=>{const h=fe.useMemo(()=>p||`toggle-${cl()}`,[p]);return i.jsxs("label",{htmlFor:h,className:`toggle-wrapper toggle-${b} ${s}`,children:[i.jsx("input",{ref:u,type:"checkbox",id:h,className:"toggle-input",role:"switch",...g}),i.jsx("span",{className:"toggle-track",children:i.jsx("span",{className:"toggle-thumb"})}),o&&i.jsx("span",{className:"toggle-label",children:o})]})});ol.displayName="Toggle";function dc({variant:o="default",padding:b="md",className:s="",children:p,...g}){return i.jsx("div",{className:`card card-${o} card-padding-${b} ${s}`,...g,children:p})}function fc({title:o,subtitle:b,action:s,className:p="",children:g,...u}){return i.jsxs("div",{className:`card-header ${p}`,...u,children:[o||b?i.jsxs("div",{className:"card-header-content",children:[o&&i.jsx("h3",{className:"card-title",children:o}),b&&i.jsx("p",{className:"card-subtitle",children:b})]}):g,s&&i.jsx("div",{className:"card-header-action",children:s})]})}function hc({className:o="",children:b,...s}){return i.jsx("div",{className:`card-body ${o}`,...s,children:b})}function eb({className:o="",children:b,...s}){return i.jsx("div",{className:`card-footer ${o}`,...s,children:b})}function tb({isOpen:o,onClose:b,title:s,size:p="md",closeOnOverlayClick:g=!0,closeOnEscape:u=!0,showCloseButton:h=!0,footer:f,className:d="",children:v,...z}){const _=fe.useRef(null);if(fe.useEffect(()=>{if(!u)return;const S=y=>{y.key==="Escape"&&o&&b()};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[o,b,u]),fe.useEffect(()=>(o?(document.body.style.overflow="hidden",_.current?.focus()):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]),!o)return null;const T=S=>{g&&S.target===S.currentTarget&&b()};return i.jsx("div",{className:"modal-overlay",onClick:T,children:i.jsxs("div",{ref:_,className:`modal modal-${p} ${d}`,role:"dialog","aria-modal":"true","aria-labelledby":s?"modal-title":void 0,tabIndex:-1,...z,children:[(s||h)&&i.jsxs("div",{className:"modal-header",children:[s&&i.jsx("h2",{id:"modal-title",className:"modal-title",children:s}),h&&i.jsx("button",{className:"modal-close",onClick:b,"aria-label":"Close modal",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:i.jsx("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),i.jsx("div",{className:"modal-body",children:v}),f&&i.jsx("div",{className:"modal-footer",children:f})]})})}function Nt({variant:o="default",size:b="md",rounded:s=!1,className:p="",children:g,...u}){return i.jsx("span",{className:`badge badge-${o} badge-${b} ${s?"badge-rounded":""} ${p}`,...u,children:g})}const nb={info:Uh,success:Lh,warning:Tv,error:Hh};function rl({variant:o="info",title:b,icon:s,dismissible:p=!1,onDismiss:g,className:u="",children:h,...f}){const d=nb[o];return i.jsxs("div",{className:`alert alert-${o} ${u}`,role:"alert",...f,children:[i.jsx("span",{className:"alert-icon",children:s||i.jsx(d,{size:20})}),i.jsxs("div",{className:"alert-content",children:[b&&i.jsx("div",{className:"alert-title",children:b}),h&&i.jsx("div",{className:"alert-message",children:h})]}),p&&i.jsx("button",{className:"alert-dismiss",onClick:g,"aria-label":"Dismiss alert",children:i.jsx(qh,{size:16})})]})}const Xh=fe.createContext(null);function Qh(){const o=fe.useContext(Xh);if(!o)throw new Error("Tab components must be used within a Tabs component");return o}function ab({defaultValue:o,value:b,onChange:s,className:p="",children:g,...u}){const[h,f]=fe.useState(o||""),d=b!==void 0?b:h,v=z=>{b===void 0&&f(z),s?.(z)};return i.jsx(Xh.Provider,{value:{activeTab:d,setActiveTab:v},children:i.jsx("div",{className:`tabs ${p}`,...u,children:g})})}function rb({className:o="",children:b,...s}){return i.jsx("div",{className:`tab-list ${o}`,role:"tablist",...s,children:b})}function ac({value:o,disabled:b,className:s="",children:p,...g}){const{activeTab:u,setActiveTab:h}=Qh(),f=u===o;return i.jsx("button",{className:`tab ${f?"tab-active":""} ${s}`,role:"tab","aria-selected":f,"aria-controls":`panel-${o}`,disabled:b,onClick:()=>h(o),...g,children:p})}function rc({value:o,className:b="",children:s,...p}){const{activeTab:g}=Qh();return g===o?i.jsx("div",{className:`tab-panel ${b}`,role:"tabpanel",id:`panel-${o}`,...p,children:s}):null}const Kh=fe.createContext(null);function Jh(){const o=fe.useContext(Kh);if(!o)throw new Error("AccordionItem must be used within an Accordion component");return o}const Wh=fe.createContext(null);function Fh(){const o=fe.useContext(Wh);if(!o)throw new Error("AccordionTrigger/Content must be used within an AccordionItem");return o}function lb({defaultValue:o=[],multiple:b=!1,className:s="",children:p,...g}){const[u,h]=fe.useState(o),f=d=>{h(v=>v.includes(d)?v.filter(z=>z!==d):b?[...v,d]:[d])};return i.jsx(Kh.Provider,{value:{openItems:u,toggleItem:f,multiple:b},children:i.jsx("div",{className:`accordion ${s}`,...g,children:p})})}function lc({value:o,disabled:b=!1,className:s="",children:p,...g}){const{openItems:u}=Jh(),h=u.includes(o);return i.jsx(Wh.Provider,{value:{value:o,isOpen:h,disabled:b},children:i.jsx("div",{className:`accordion-item ${h?"accordion-item-open":""} ${s}`,...g,children:p})})}function ic({className:o="",children:b,...s}){const{toggleItem:p}=Jh(),{value:g,isOpen:u,disabled:h}=Fh();return i.jsxs("button",{className:`accordion-trigger ${o}`,"aria-expanded":u,disabled:h,onClick:()=>p(g),...s,children:[i.jsx("span",{className:"accordion-trigger-text",children:b}),i.jsx(sl,{className:`accordion-icon ${u?"accordion-icon-open":""}`,size:18})]})}function oc({className:o="",children:b,...s}){const{isOpen:p}=Fh();return i.jsx("div",{className:`accordion-content ${p?"accordion-content-open":""} ${o}`,hidden:!p,...s,children:i.jsx("div",{className:"accordion-content-inner",children:b})})}function ib({striped:o=!1,hoverable:b=!1,bordered:s=!1,compact:p=!1,className:g="",children:u,...h}){const f=["table",o&&"table-striped",b&&"table-hoverable",s&&"table-bordered",p&&"table-compact",g].filter(Boolean).join(" ");return i.jsx("div",{className:"table-wrapper",children:i.jsx("table",{className:f,...h,children:u})})}function ob({className:o="",children:b,...s}){return i.jsx("thead",{className:`table-header ${o}`,...s,children:b})}function sb({className:o="",children:b,...s}){return i.jsx("tbody",{className:`table-body ${o}`,...s,children:b})}function zi({selected:o,className:b="",children:s,...p}){return i.jsx("tr",{className:`table-row ${o?"table-row-selected":""} ${b}`,...p,children:s})}function Ni({sortable:o,sortDirection:b,onSort:s,className:p="",children:g,...u}){return i.jsx("th",{className:`table-head ${o?"table-head-sortable":""} ${p}`,onClick:o?s:void 0,"aria-sort":b==="asc"?"ascending":b==="desc"?"descending":void 0,...u,children:i.jsxs("div",{className:"table-head-content",children:[i.jsx("span",{children:g}),o&&i.jsxs("span",{className:"table-sort-icon",children:[b==="asc"&&i.jsx(Ch,{size:14}),b==="desc"&&i.jsx(sl,{size:14}),!b&&i.jsx("span",{className:"table-sort-icon-inactive",children:i.jsx(Ch,{size:14})})]})]})})}function rn({className:o="",children:b,...s}){return i.jsx("td",{className:`table-cell ${o}`,...s,children:b})}function cb({trigger:o,items:b,onSelect:s,align:p="left",className:g="",...u}){const[h,f]=fe.useState(!1),d=fe.useRef(null);fe.useEffect(()=>{const z=_=>{d.current&&!d.current.contains(_.target)&&f(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),fe.useEffect(()=>{const z=_=>{_.key==="Escape"&&h&&f(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[h]);const v=z=>{z.disabled||z.divider||(s?.(z),f(!1))};return i.jsxs("div",{ref:d,className:`dropdown ${g}`,...u,children:[i.jsxs("button",{className:"dropdown-trigger",onClick:()=>f(!h),"aria-haspopup":"true","aria-expanded":h,children:[o,i.jsx(sl,{className:`dropdown-icon ${h?"dropdown-icon-open":""}`,size:16})]}),h&&i.jsx("div",{className:`dropdown-menu dropdown-align-${p}`,role:"menu",children:b.map((z,_)=>z.divider?i.jsx("div",{className:"dropdown-divider",role:"separator"},_):i.jsxs("button",{className:`dropdown-item ${z.disabled?"dropdown-item-disabled":""}`,role:"menuitem",disabled:z.disabled,onClick:()=>v(z),children:[z.icon&&i.jsx("span",{className:"dropdown-item-icon",children:z.icon}),i.jsx("span",{children:z.label})]},z.id))})]})}function ub({sticky:o=!1,className:b="",children:s,...p}){return i.jsx("nav",{className:`navbar ${o?"navbar-sticky":""} ${b}`,...p,children:i.jsx("div",{className:"navbar-container",children:s})})}function db({logo:o,name:b,className:s="",children:p,...g}){return i.jsxs("div",{className:`navbar-brand ${s}`,...g,children:[o&&i.jsx("span",{className:"navbar-logo",children:o}),b&&i.jsx("span",{className:"navbar-name",children:b}),p]})}function fb({className:o="",children:b,...s}){return i.jsx("div",{className:`navbar-links ${o}`,...s,children:b})}function sc({href:o="#",active:b,className:s="",children:p,...g}){return i.jsx("a",{href:o,className:`navbar-link ${b?"navbar-link-active":""} ${s}`,...g,children:p})}function hb({className:o="",children:b,...s}){return i.jsx("div",{className:`navbar-actions ${o}`,...s,children:b})}function Ti({content:o,position:b="top",delay:s=200,className:p="",children:g,...u}){const[h,f]=fe.useState(!1),d=fe.useRef(null),v=()=>{d.current=setTimeout(()=>{f(!0)},s)},z=()=>{d.current&&clearTimeout(d.current),f(!1)};return i.jsxs("div",{className:`tooltip-wrapper ${p}`,onMouseEnter:v,onMouseLeave:z,onFocus:v,onBlur:z,...u,children:[g,h&&i.jsxs("div",{className:`tooltip tooltip-${b}`,role:"tooltip",children:[i.jsx("div",{className:"tooltip-content",children:o}),i.jsx("div",{className:"tooltip-arrow"})]})]})}function ll({value:o,max:b=100,size:s="md",variant:p="default",showValue:g=!1,animated:u=!1,className:h="",...f}){const d=Math.min(100,Math.max(0,o/b*100));return i.jsxs("div",{className:`progress progress-${s} ${h}`,...f,children:[i.jsx("div",{className:"progress-track",role:"progressbar","aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":b,children:i.jsx("div",{className:`progress-bar progress-${p} ${u?"progress-animated":""}`,style:{width:`${d}%`}})}),g&&i.jsxs("span",{className:"progress-value",children:[Math.round(d),"%"]})]})}function Ci({value:o,max:b=100,size:s=48,strokeWidth:p=4,variant:g="default",showValue:u=!1,className:h="",...f}){const d=Math.min(100,Math.max(0,o/b*100)),v=(s-p)/2,z=v*2*Math.PI,_=z-d/100*z;return i.jsxs("div",{className:`circular-progress circular-progress-${g} ${h}`,style:{width:s,height:s},role:"progressbar","aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":b,...f,children:[i.jsxs("svg",{width:s,height:s,children:[i.jsx("circle",{className:"circular-progress-track",cx:s/2,cy:s/2,r:v,strokeWidth:p}),i.jsx("circle",{className:"circular-progress-bar",cx:s/2,cy:s/2,r:v,strokeWidth:p,strokeDasharray:z,strokeDashoffset:_,transform:`rotate(-90 ${s/2} ${s/2})`})]}),u&&i.jsxs("span",{className:"circular-progress-value",style:{fontSize:s*.25},children:[Math.round(d),"%"]})]})}function pb(o){return o.split(" ").map(b=>b[0]).join("").toUpperCase().slice(0,2)}function mb(o){const b=["var(--color-primary)","var(--color-secondary)","var(--color-success)","var(--color-warning)","var(--color-error)","var(--color-info)","var(--color-text)"];let s=0;for(let p=0;p<o.length;p++)s=o.charCodeAt(p)+((s<<5)-s);return b[Math.abs(s)%b.length]}function zt({src:o,alt:b,name:s,size:p="md",shape:g="circle",status:u,className:h="",...f}){const[d,v]=fe.useState(!1),z=o&&!d,_=s?pb(s):"?",T=s?mb(s):"var(--color-secondary)";return i.jsxs("div",{className:`avatar avatar-${p} avatar-${g} ${h}`,...f,children:[z?i.jsx("img",{src:o,alt:b||s||"Avatar",className:"avatar-image",onError:()=>v(!0)}):i.jsx("span",{className:"avatar-initials",style:{backgroundColor:T},children:_}),u&&i.jsx("span",{className:`avatar-status avatar-status-${u}`})]})}function gb({max:o=4,className:b="",children:s,...p}){const g=pg.Children.toArray(s),u=g.slice(0,o),h=g.length-o;return i.jsxs("div",{className:`avatar-group ${b}`,...p,children:[u,h>0&&i.jsx("div",{className:"avatar avatar-md avatar-circle avatar-overflow",children:i.jsxs("span",{className:"avatar-initials",children:["+",h]})})]})}function vb({items:o,separator:b=i.jsx(Bg,{size:14}),maxItems:s,className:p="",...g}){let u=o;if(s&&o.length>s){const h=o.slice(0,1),f=o.slice(-(s-2));u=[...h,{label:"..."},...f]}return i.jsx("nav",{"aria-label":"Breadcrumb",className:`breadcrumb ${p}`,...g,children:i.jsx("ol",{className:"breadcrumb-list",children:u.map((h,f)=>{const d=f===u.length-1,v=h.label==="...",z=h.id||(h.href?`${h.label}-${h.href}`:`${h.label}-${f}`);return i.jsxs("li",{className:"breadcrumb-item",children:[v?i.jsx("span",{className:"breadcrumb-ellipsis",children:h.label}):h.href&&!d?i.jsxs("a",{href:h.href,className:"breadcrumb-link",children:[h.icon&&i.jsx("span",{className:"breadcrumb-icon",children:h.icon}),i.jsx("span",{children:h.label})]}):i.jsxs("span",{className:`breadcrumb-text ${d?"breadcrumb-current":""}`,"aria-current":d?"page":void 0,children:[h.icon&&i.jsx("span",{className:"breadcrumb-icon",children:h.icon}),i.jsx("span",{children:h.label})]}),!d&&i.jsx("span",{className:"breadcrumb-separator","aria-hidden":"true",children:b})]},z)})})})}function bb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Accordion"}),i.jsxs(lb,{defaultValue:["item1"],children:[i.jsxs(lc,{value:"item1",children:[i.jsx(ic,{children:"What is this component library?"}),i.jsx(oc,{children:"This is a customizable React component library with real-time theming capabilities."})]}),i.jsxs(lc,{value:"item2",children:[i.jsx(ic,{children:"How do I customize the theme?"}),i.jsx(oc,{children:"Use the editor panel on the left to modify colors, typography, spacing, and more."})]}),i.jsxs(lc,{value:"item3",children:[i.jsx(ic,{children:"Can I export the customized library?"}),i.jsx(oc,{children:"Yes! Click the Export button to download a zip file with all components and your custom theme."})]})]})]})}function yb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Alerts"}),i.jsxs("div",{className:"showcase-stack",children:[i.jsx(rl,{variant:"info",title:"Information",children:"This is an informational alert message."}),i.jsx(rl,{variant:"success",title:"Success",children:"Your changes have been saved successfully."}),i.jsx(rl,{variant:"warning",title:"Warning",children:"Please review the changes before proceeding."}),i.jsx(rl,{variant:"error",title:"Error",dismissible:!0,children:"An error occurred while processing your request."})]})]})}function xb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Avatar"}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(zt,{name:"John Doe",size:"xs"}),i.jsx(zt,{name:"Jane Smith",size:"sm"}),i.jsx(zt,{name:"Bob Johnson",size:"md"}),i.jsx(zt,{name:"Alice Brown",size:"lg"}),i.jsx(zt,{name:"Charlie Davis",size:"xl"})]}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(zt,{name:"John Doe",status:"online"}),i.jsx(zt,{name:"Jane Smith",status:"offline"}),i.jsx(zt,{name:"Bob Johnson",status:"away"}),i.jsx(zt,{name:"Alice Brown",status:"busy"})]}),i.jsx("div",{className:"showcase-row",children:i.jsxs(gb,{max:3,children:[i.jsx(zt,{name:"John Doe"}),i.jsx(zt,{name:"Jane Smith"}),i.jsx(zt,{name:"Bob Johnson"}),i.jsx(zt,{name:"Alice Brown"}),i.jsx(zt,{name:"Charlie Davis"})]})})]})}function _b(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Badges"}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(Nt,{children:"Default"}),i.jsx(Nt,{variant:"primary",children:"Primary"}),i.jsx(Nt,{variant:"secondary",children:"Secondary"}),i.jsx(Nt,{variant:"success",children:"Success"}),i.jsx(Nt,{variant:"warning",children:"Warning"}),i.jsx(Nt,{variant:"error",children:"Error"}),i.jsx(Nt,{variant:"info",children:"Info"})]}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(Nt,{size:"sm",children:"Small"}),i.jsx(Nt,{size:"md",children:"Medium"}),i.jsx(Nt,{size:"lg",children:"Large"}),i.jsx(Nt,{rounded:!0,variant:"primary",children:"Rounded"})]})]})}function Sb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Buttons"}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(rt,{variant:"primary",children:"Primary"}),i.jsx(rt,{variant:"secondary",children:"Secondary"}),i.jsx(rt,{variant:"outline",children:"Outline"}),i.jsx(rt,{variant:"ghost",children:"Ghost"}),i.jsx(rt,{variant:"danger",children:"Danger"})]}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(rt,{size:"sm",children:"Small"}),i.jsx(rt,{size:"md",children:"Medium"}),i.jsx(rt,{size:"lg",children:"Large"}),i.jsx(rt,{disabled:!0,children:"Disabled"}),i.jsx(rt,{loading:!0,children:"Loading"})]})]})}function wb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Cards"}),i.jsxs("div",{className:"showcase-grid-cards",children:[i.jsxs(dc,{variant:"outlined",children:[i.jsx(fc,{title:"Card Title",subtitle:"Card subtitle"}),i.jsx(hc,{children:"This is the card body content. It can contain any text or elements."}),i.jsx(eb,{children:i.jsx(rt,{size:"sm",children:"Action"})})]}),i.jsxs(dc,{variant:"elevated",children:[i.jsx(fc,{title:"Elevated Card",action:i.jsx(rt,{size:"sm",variant:"ghost",children:"Edit"})}),i.jsx(hc,{children:"Cards can have different variants like outlined, elevated, or default."})]})]})]})}function jb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Dropdown"}),i.jsx("div",{className:"showcase-row",children:i.jsx(cb,{trigger:"Options",items:[{id:"edit",label:"Edit",icon:i.jsx(gv,{size:14})},{id:"copy",label:"Copy",icon:i.jsx($g,{size:14})},{id:"divider",label:"",divider:!0},{id:"delete",label:"Delete",icon:i.jsx(zv,{size:14})}],onSelect:o=>console.log("Selected:",o.id)})})]})}function zb(){const[o,b]=fe.useState(!1),[s,p]=fe.useState(!1),[g,u]=fe.useState("option1");return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Form Controls"}),i.jsxs("div",{className:"showcase-grid",children:[i.jsx(il,{label:"Text Input",placeholder:"Enter text..."}),i.jsx(il,{label:"With Error",error:"This field is required"}),i.jsx(il,{label:"Disabled",disabled:!0,placeholder:"Disabled input"}),i.jsx(bc,{label:"Select",placeholder:"Choose option...",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})]}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(ur,{label:"Checkbox",checked:o,onChange:h=>b(h.target.checked)}),i.jsx(ur,{label:"Checked",checked:!0,readOnly:!0}),i.jsx(ur,{label:"Indeterminate",indeterminate:!0}),i.jsx(ur,{label:"Disabled",disabled:!0})]}),i.jsx("div",{className:"showcase-row",children:i.jsx(Pv,{name:"demo-radio",direction:"horizontal",value:g,onChange:u,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]})}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(ol,{label:"Toggle Switch",checked:s,onChange:h=>p(h.target.checked)}),i.jsx(ol,{label:"Small",size:"sm"}),i.jsx(ol,{label:"Large",size:"lg",checked:!0,readOnly:!0})]})]})}function Nb(){const[o,b]=fe.useState(!1);return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Modal"}),i.jsx(rt,{onClick:()=>b(!0),children:"Open Modal"}),i.jsx(tb,{isOpen:o,onClose:()=>b(!1),title:"Modal Title",footer:i.jsxs(i.Fragment,{children:[i.jsx(rt,{variant:"ghost",onClick:()=>b(!1),children:"Cancel"}),i.jsx(rt,{onClick:()=>b(!1),children:"Confirm"})]}),children:i.jsx("p",{children:"This is the modal content. You can put any content here including forms, text, or other components."})})]})}function Tb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Navigation"}),i.jsxs(ub,{children:[i.jsx(db,{logo:i.jsx(mc,{size:24}),name:"Brand"}),i.jsxs(fb,{children:[i.jsx(sc,{active:!0,children:"Home"}),i.jsx(sc,{children:"Products"}),i.jsx(sc,{children:"About"})]}),i.jsxs(hb,{children:[i.jsx(rt,{size:"sm",variant:"outline",children:"Sign In"}),i.jsx(rt,{size:"sm",children:"Sign Up"})]})]}),i.jsx("div",{className:"showcase-spacer"}),i.jsx(vb,{items:[{label:"Home",href:"#",icon:i.jsx(Fg,{size:14})},{label:"Products",href:"#"},{label:"Electronics",href:"#"},{label:"Phones"}]})]})}function Cb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Progress"}),i.jsxs("div",{className:"showcase-stack",children:[i.jsx(ll,{value:25,showValue:!0}),i.jsx(ll,{value:50,variant:"success",showValue:!0}),i.jsx(ll,{value:75,variant:"warning",showValue:!0,animated:!0}),i.jsx(ll,{value:90,variant:"error",showValue:!0})]}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(Ci,{value:25,showValue:!0}),i.jsx(Ci,{value:50,variant:"success",showValue:!0}),i.jsx(Ci,{value:75,variant:"warning",showValue:!0}),i.jsx(Ci,{value:100,variant:"error",showValue:!0})]})]})}function Ab(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Table"}),i.jsxs(ib,{striped:!0,hoverable:!0,children:[i.jsx(ob,{children:i.jsxs(zi,{children:[i.jsx(Ni,{children:"Name"}),i.jsx(Ni,{children:"Email"}),i.jsx(Ni,{children:"Role"}),i.jsx(Ni,{children:"Status"})]})}),i.jsxs(sb,{children:[i.jsxs(zi,{children:[i.jsx(rn,{children:"John Doe"}),i.jsx(rn,{children:"john@example.com"}),i.jsx(rn,{children:"Admin"}),i.jsx(rn,{children:i.jsx(Nt,{variant:"success",children:"Active"})})]}),i.jsxs(zi,{children:[i.jsx(rn,{children:"Jane Smith"}),i.jsx(rn,{children:"jane@example.com"}),i.jsx(rn,{children:"Editor"}),i.jsx(rn,{children:i.jsx(Nt,{variant:"success",children:"Active"})})]}),i.jsxs(zi,{children:[i.jsx(rn,{children:"Bob Johnson"}),i.jsx(rn,{children:"bob@example.com"}),i.jsx(rn,{children:"Viewer"}),i.jsx(rn,{children:i.jsx(Nt,{variant:"warning",children:"Pending"})})]})]})]})]})}function kb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Tabs"}),i.jsxs(ab,{defaultValue:"tab1",children:[i.jsxs(rb,{children:[i.jsx(ac,{value:"tab1",children:"Overview"}),i.jsx(ac,{value:"tab2",children:"Features"}),i.jsx(ac,{value:"tab3",children:"Settings"})]}),i.jsx(rc,{value:"tab1",children:"This is the overview tab content. It provides a general summary."}),i.jsx(rc,{value:"tab2",children:"This is the features tab content. It lists all the key features."}),i.jsx(rc,{value:"tab3",children:"This is the settings tab content. Configure your preferences here."})]})]})}function Eb(){return i.jsxs("section",{className:"showcase-section",children:[i.jsx("h2",{className:"showcase-title",children:"Tooltip"}),i.jsxs("div",{className:"showcase-row",children:[i.jsx(Ti,{content:"Top tooltip",position:"top",children:i.jsx(rt,{variant:"outline",children:"Top"})}),i.jsx(Ti,{content:"Bottom tooltip",position:"bottom",children:i.jsx(rt,{variant:"outline",children:"Bottom"})}),i.jsx(Ti,{content:"Left tooltip",position:"left",children:i.jsx(rt,{variant:"outline",children:"Left"})}),i.jsx(Ti,{content:"Right tooltip",position:"right",children:i.jsx(rt,{variant:"outline",children:"Right"})})]})]})}function Mb(){return i.jsxs("div",{className:"showcase",children:[i.jsx(Sb,{}),i.jsx(zb,{}),i.jsx(_b,{}),i.jsx(yb,{}),i.jsx(wb,{}),i.jsx(Nb,{}),i.jsx(kb,{}),i.jsx(bb,{}),i.jsx(Ab,{}),i.jsx(jb,{}),i.jsx(Tb,{}),i.jsx(Eb,{}),i.jsx(Cb,{}),i.jsx(xb,{})]})}const Ob=[{name:"Button",component:"button"},{name:"Input",component:"input"},{name:"Select",component:"select"},{name:"Checkbox",component:"checkbox"},{name:"Toggle",component:"toggle"},{name:"Card",component:"card"},{name:"Badge",component:"badge"},{name:"Alert",component:"alert"},{name:"Progress",component:"progress"},{name:"Avatar",component:"avatar"}];function Rb(){const[o,b]=fe.useState("button"),[s,p]=fe.useState("primary"),[g,u]=fe.useState("md"),[h,f]=fe.useState(!1),[d,v]=fe.useState(!1),[z,_]=fe.useState(""),[T,S]=fe.useState("Label"),[y,j]=fe.useState(""),[A,C]=fe.useState(!1),[M,B]=fe.useState("primary"),[H,U]=fe.useState("md"),[F,X]=fe.useState(!1),[ce,I]=fe.useState("info"),[pe,_e]=fe.useState("Alert Title"),[D,ee]=fe.useState(!1),[x,ae]=fe.useState(50),[Z,G]=fe.useState("default"),[me,le]=fe.useState(!1),[ye,N]=fe.useState("John Doe"),[E,te]=fe.useState("md"),[P,re]=fe.useState(""),Se=()=>{switch(o){case"button":return i.jsx(rt,{variant:s,size:g,disabled:h,loading:d,children:"Button Text"});case"input":return i.jsx(il,{label:T,value:z,onChange:he=>_(he.target.value),placeholder:"Enter text...",error:y,disabled:A});case"select":return i.jsx(bc,{label:"Select Option",placeholder:"Choose...",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]});case"checkbox":return i.jsx(ur,{label:"Checkbox Label"});case"toggle":return i.jsx(ol,{label:"Toggle Switch"});case"card":return i.jsxs(dc,{variant:"outlined",style:{maxWidth:300},children:[i.jsx(fc,{title:"Card Title",subtitle:"Card subtitle"}),i.jsx(hc,{children:"This is the card body content."})]});case"badge":return i.jsx(Nt,{variant:M,size:H,rounded:F,children:"Badge"});case"alert":return i.jsx(rl,{variant:ce,title:pe,dismissible:D,style:{maxWidth:400},children:"This is an alert message with additional details."});case"progress":return i.jsx("div",{style:{width:300},children:i.jsx(ll,{value:x,variant:Z,animated:me,showValue:!0})});case"avatar":return i.jsx(zt,{name:ye,size:E,status:P||void 0});default:return null}},Ae=()=>{switch(o){case"button":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Variant"}),i.jsxs("select",{value:s,onChange:he=>p(he.target.value),children:[i.jsx("option",{value:"primary",children:"Primary"}),i.jsx("option",{value:"secondary",children:"Secondary"}),i.jsx("option",{value:"outline",children:"Outline"}),i.jsx("option",{value:"ghost",children:"Ghost"}),i.jsx("option",{value:"danger",children:"Danger"})]})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Size"}),i.jsxs("select",{value:g,onChange:he=>u(he.target.value),children:[i.jsx("option",{value:"sm",children:"Small"}),i.jsx("option",{value:"md",children:"Medium"}),i.jsx("option",{value:"lg",children:"Large"})]})]}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:h,onChange:he=>f(he.target.checked)}),"Disabled"]})}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:d,onChange:he=>v(he.target.checked)}),"Loading"]})})]});case"input":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Label"}),i.jsx("input",{type:"text",value:T,onChange:he=>S(he.target.value)})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Error"}),i.jsx("input",{type:"text",value:y,onChange:he=>j(he.target.value),placeholder:"Error message"})]}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:A,onChange:he=>C(he.target.checked)}),"Disabled"]})})]});case"badge":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Variant"}),i.jsxs("select",{value:M,onChange:he=>B(he.target.value),children:[i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"primary",children:"Primary"}),i.jsx("option",{value:"success",children:"Success"}),i.jsx("option",{value:"warning",children:"Warning"}),i.jsx("option",{value:"error",children:"Error"})]})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Size"}),i.jsxs("select",{value:H,onChange:he=>U(he.target.value),children:[i.jsx("option",{value:"sm",children:"Small"}),i.jsx("option",{value:"md",children:"Medium"}),i.jsx("option",{value:"lg",children:"Large"})]})]}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:F,onChange:he=>X(he.target.checked)}),"Rounded"]})})]});case"alert":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Variant"}),i.jsxs("select",{value:ce,onChange:he=>I(he.target.value),children:[i.jsx("option",{value:"info",children:"Info"}),i.jsx("option",{value:"success",children:"Success"}),i.jsx("option",{value:"warning",children:"Warning"}),i.jsx("option",{value:"error",children:"Error"})]})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Title"}),i.jsx("input",{type:"text",value:pe,onChange:he=>_e(he.target.value)})]}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:D,onChange:he=>ee(he.target.checked)}),"Dismissible"]})})]});case"progress":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsxs("label",{children:["Value: ",x,"%"]}),i.jsx("input",{type:"range",min:"0",max:"100",value:x,onChange:he=>ae(Number(he.target.value))})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Variant"}),i.jsxs("select",{value:Z,onChange:he=>G(he.target.value),children:[i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"success",children:"Success"}),i.jsx("option",{value:"warning",children:"Warning"}),i.jsx("option",{value:"error",children:"Error"})]})]}),i.jsx("div",{className:"playground-control",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",checked:me,onChange:he=>le(he.target.checked)}),"Animated"]})})]});case"avatar":return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",value:ye,onChange:he=>N(he.target.value)})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Size"}),i.jsxs("select",{value:E,onChange:he=>te(he.target.value),children:[i.jsx("option",{value:"xs",children:"Extra Small"}),i.jsx("option",{value:"sm",children:"Small"}),i.jsx("option",{value:"md",children:"Medium"}),i.jsx("option",{value:"lg",children:"Large"}),i.jsx("option",{value:"xl",children:"Extra Large"})]})]}),i.jsxs("div",{className:"playground-control",children:[i.jsx("label",{children:"Status"}),i.jsxs("select",{value:P,onChange:he=>re(he.target.value),children:[i.jsx("option",{value:"",children:"None"}),i.jsx("option",{value:"online",children:"Online"}),i.jsx("option",{value:"offline",children:"Offline"}),i.jsx("option",{value:"away",children:"Away"}),i.jsx("option",{value:"busy",children:"Busy"})]})]})]});default:return i.jsx("p",{className:"playground-no-controls",children:"No configurable options for this component."})}};return i.jsxs("div",{className:"playground",children:[i.jsxs("div",{className:"playground-sidebar",children:[i.jsx("h3",{className:"playground-sidebar-title",children:"Components"}),i.jsx("div",{className:"playground-component-list",children:Ob.map(he=>i.jsx("button",{className:`playground-component-item ${o===he.component?"active":""}`,onClick:()=>b(he.component),children:he.name},he.component))})]}),i.jsxs("div",{className:"playground-main",children:[i.jsxs("div",{className:"playground-preview",children:[i.jsx("h3",{className:"playground-section-title",children:"Preview"}),i.jsx("div",{className:"playground-preview-area",children:Se()})]}),i.jsxs("div",{className:"playground-controls",children:[i.jsx("h3",{className:"playground-section-title",children:"Controls"}),i.jsx("div",{className:"playground-controls-list",children:Ae()})]})]})]})}function Db({mode:o,onChange:b}){return i.jsxs("div",{className:"preview-toggle",children:[i.jsx("button",{className:`preview-toggle-btn ${o==="showcase"?"active":""}`,onClick:()=>b("showcase"),children:"Showcase"}),i.jsx("button",{className:`preview-toggle-btn ${o==="playground"?"active":""}`,onClick:()=>b("playground"),children:"Playground"})]})}function Bb({previewMode:o,onPreviewModeChange:b,onExport:s,exporting:p,onPresetChange:g}){const{themeMode:u,setThemeMode:h,resetTokens:f}=Mi();return i.jsxs("header",{className:"app-header",children:[i.jsx("div",{className:"app-header-left",children:i.jsxs("div",{className:"app-logo",children:[i.jsx(mc,{size:24}),i.jsx("span",{className:"app-title",children:"Component Library Customizer"})]})}),i.jsxs("div",{className:"app-header-center",children:[i.jsx(Db,{mode:o,onChange:b}),i.jsxs("div",{className:"background-mode-toggle",children:[i.jsx("button",{className:`mode-btn ${u==="light"?"mode-btn-active":""}`,onClick:()=>h("light"),title:"Light theme",children:i.jsx(yv,{size:16})}),i.jsx("button",{className:`mode-btn ${u==="dark"?"mode-btn-active":""}`,onClick:()=>h("dark"),title:"Dark theme",children:i.jsx(av,{size:16})})]})]}),i.jsxs("div",{className:"app-header-right",children:[i.jsxs("div",{className:"preset-selector",children:[i.jsx(gc,{size:16}),i.jsxs("select",{onChange:d=>g(d.target.value),defaultValue:"",children:[i.jsx("option",{value:"",disabled:!0,children:"Theme Presets"}),i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"nature",children:"Nature"}),i.jsx("option",{value:"ocean",children:"Ocean"}),i.jsx("option",{value:"sunset",children:"Sunset"}),i.jsx("option",{value:"neon",children:"Neon"}),i.jsx("option",{value:"modernRetro",children:"Modern Retro"})]})]}),i.jsxs("button",{className:"header-btn",onClick:f,title:"Reset to defaults",children:[i.jsx(fv,{size:16}),i.jsx("span",{children:"Reset"})]}),i.jsxs("button",{className:"header-btn header-btn-primary",onClick:s,disabled:p,children:[i.jsx(Jg,{size:16}),i.jsx("span",{children:p?"Exporting...":"Export"})]})]})]})}const Hb=`import React, { createContext, useContext, useState, ReactNode, HTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (id: string) => void;
  multiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion component');
  }
  return context;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string[];
  multiple?: boolean;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  disabled: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within an AccordionItem');
  }
  return context;
}

export function Accordion({
  defaultValue = [],
  multiple = false,
  className = '',
  children,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return multiple ? [...prev, id] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple }}>
      <div className={\`accordion \${className}\`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  disabled = false,
  className = '',
  children,
  ...props
}: AccordionItemProps) {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, disabled }}>
      <div
        className={\`accordion-item \${isOpen ? 'accordion-item-open' : ''} \${className}\`}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className = '',
  children,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const { value, isOpen, disabled } = useAccordionItemContext();

  return (
    <button
      className={\`accordion-trigger \${className}\`}
      aria-expanded={isOpen}
      disabled={disabled}
      onClick={() => toggleItem(value)}
      {...props}
    >
      <span className="accordion-trigger-text">{children}</span>
      <ChevronDown className={\`accordion-icon \${isOpen ? 'accordion-icon-open' : ''}\`} size={18} />
    </button>
  );
}

export function AccordionContent({
  className = '',
  children,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext();

  return (
    <div
      className={\`accordion-content \${isOpen ? 'accordion-content-open' : ''} \${className}\`}
      hidden={!isOpen}
      {...props}
    >
      <div className="accordion-content-inner">{children}</div>
    </div>
  );
}
`,Lb=`import React, { HTMLAttributes, ReactNode } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import './Alert.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const defaultIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

export function Alert({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  children,
  ...props
}: AlertProps) {
  const IconComponent = defaultIcons[variant];

  return (
    <div
      className={\`alert alert-\${variant} \${className}\`}
      role="alert"
      {...props}
    >
      <span className="alert-icon">
        {icon || <IconComponent size={20} />}
      </span>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        {children && <div className="alert-message">{children}</div>}
      </div>
      {dismissible && (
        <button
          className="alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
`,Ub=`import React, { HTMLAttributes, useState } from 'react';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-success)',
    'var(--color-warning)',
    'var(--color-error)',
    'var(--color-info)',
    'var(--color-text)',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className = '',
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;
  const initials = name ? getInitials(name) : '?';
  const bgColor = name ? getColorFromName(name) : 'var(--color-secondary)';

  return (
    <div
      className={\`avatar avatar-\${size} avatar-\${shape} \${className}\`}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="avatar-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="avatar-initials" style={{ backgroundColor: bgColor }}>
          {initials}
        </span>
      )}
      {status && <span className={\`avatar-status avatar-status-\${status}\`} />}
    </div>
  );
}

export function AvatarGroup({ max = 4, className = '', children, ...props }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const visibleChildren = childArray.slice(0, max);
  const remainingCount = childArray.length - max;

  return (
    <div className={\`avatar-group \${className}\`} {...props}>
      {visibleChildren}
      {remainingCount > 0 && (
        <div className="avatar avatar-md avatar-circle avatar-overflow">
          <span className="avatar-initials">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
}
`,qb=`import React, { HTMLAttributes } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

export function Badge({
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={\`badge badge-\${variant} badge-\${size} \${rounded ? 'badge-rounded' : ''} \${className}\`}
      {...props}
    >
      {children}
    </span>
  );
}
`,Yb=`import React, { HTMLAttributes, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  id?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

export function Breadcrumb({
  items,
  separator = <ChevronRight size={14} />,
  maxItems,
  className = '',
  ...props
}: BreadcrumbProps) {
  let displayItems = items;

  if (maxItems && items.length > maxItems) {
    const firstItems = items.slice(0, 1);
    const lastItems = items.slice(-(maxItems - 2));
    displayItems = [
      ...firstItems,
      { label: '...' },
      ...lastItems,
    ];
  }

  return (
    <nav aria-label="Breadcrumb" className={\`breadcrumb \${className}\`} {...props}>
      <ol className="breadcrumb-list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === '...';
          // Use id if available, otherwise combine label and href, fallback to index
          const key = item.id || (item.href ? \`\${item.label}-\${item.href}\` : \`\${item.label}-\${index}\`);

          return (
            <li key={key} className="breadcrumb-item">
              {isEllipsis ? (
                <span className="breadcrumb-ellipsis">{item.label}</span>
              ) : item.href && !isLast ? (
                <a href={item.href} className="breadcrumb-link">
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className={\`breadcrumb-text \${isLast ? 'breadcrumb-current' : ''}\`} aria-current={isLast ? 'page' : undefined}>
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
`,Zb=`import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={\`btn btn-\${variant} btn-\${size} \${fullWidth ? 'btn-full' : ''} \${className}\`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="btn-loader" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
`,Gb=`import React, { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={\`card card-\${variant} card-padding-\${padding} \${className}\`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
  className = '',
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div className={\`card-header \${className}\`} {...props}>
      {(title || subtitle) ? (
        <div className="card-header-content">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      ) : children}
      {action && <div className="card-header-action">{action}</div>}
    </div>
  );
}

export function CardBody({ className = '', children, ...props }: CardBodyProps) {
  return (
    <div className={\`card-body \${className}\`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }: CardFooterProps) {
  return (
    <div className={\`card-footer \${className}\`} {...props}>
      {children}
    </div>
  );
}
`,Vb=`import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, className = '', id, ...props }, ref) => {
    const checkboxId = useMemo(() => id || \`checkbox-\${generateShortId()}\`, [id]);

    const handleRef = (element: HTMLInputElement | null) => {
      if (element) {
        element.indeterminate = indeterminate || false;
      }
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <label htmlFor={checkboxId} className={\`checkbox-wrapper \${className}\`}>
        <input
          ref={handleRef}
          type="checkbox"
          id={checkboxId}
          className="checkbox-input"
          {...props}
        />
        <span className="checkbox-box">
          <svg className="checkbox-check" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="checkbox-indeterminate" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 8H12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
`,$b=`import React, { useState, useRef, useEffect, HTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import './Dropdown.css';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
  trigger: ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  align?: 'left' | 'right';
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  align = 'left',
  className = '',
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled || item.divider) return;
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={\`dropdown \${className}\`} {...props}>
      <button
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown className={\`dropdown-icon \${isOpen ? 'dropdown-icon-open' : ''}\`} size={16} />
      </button>
      {isOpen && (
        <div className={\`dropdown-menu dropdown-align-\${align}\`} role="menu">
          {items.map((item, index) =>
            item.divider ? (
              <div key={index} className="dropdown-divider" role="separator" />
            ) : (
              <button
                key={item.id}
                className={\`dropdown-item \${item.disabled ? 'dropdown-item-disabled' : ''}\`}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleSelect(item)}
              >
                {item.icon && <span className="dropdown-item-icon">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
`,Xb=`import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = useMemo(() => id || \`input-\${generateShortId()}\`, [id]);

    return (
      <div className={\`input-wrapper \${error ? 'input-error' : ''} \${className}\`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className="input-field"
          aria-invalid={!!error}
          aria-describedby={error ? \`\${inputId}-error\` : helperText ? \`\${inputId}-helper\` : undefined}
          {...props}
        />
        {error && (
          <span id={\`\${inputId}-error\`} className="input-error-text">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={\`\${inputId}-helper\`} className="input-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
`,Qb=`import React, { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import './Modal.css';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  footer,
  className = '',
  children,
  ...props
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={\`modal modal-\${size} \${className}\`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="modal-header">
            {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
            {showCloseButton && (
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
`,Kb=`import React, { HTMLAttributes, ReactNode } from 'react';
import './Navbar.css';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {
  logo?: ReactNode;
  name?: string;
}

export interface NavbarLinksProps extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  active?: boolean;
}

export interface NavbarActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function Navbar({
  sticky = false,
  className = '',
  children,
  ...props
}: NavbarProps) {
  return (
    <nav className={\`navbar \${sticky ? 'navbar-sticky' : ''} \${className}\`} {...props}>
      <div className="navbar-container">
        {children}
      </div>
    </nav>
  );
}

export function NavbarBrand({ logo, name, className = '', children, ...props }: NavbarBrandProps) {
  return (
    <div className={\`navbar-brand \${className}\`} {...props}>
      {logo && <span className="navbar-logo">{logo}</span>}
      {name && <span className="navbar-name">{name}</span>}
      {children}
    </div>
  );
}

export function NavbarLinks({ className = '', children, ...props }: NavbarLinksProps) {
  return (
    <div className={\`navbar-links \${className}\`} {...props}>
      {children}
    </div>
  );
}

export function NavbarLink({
  href = '#',
  active,
  className = '',
  children,
  ...props
}: NavbarLinkProps) {
  return (
    <a
      href={href}
      className={\`navbar-link \${active ? 'navbar-link-active' : ''} \${className}\`}
      {...props}
    >
      {children}
    </a>
  );
}

export function NavbarActions({ className = '', children, ...props }: NavbarActionsProps) {
  return (
    <div className={\`navbar-actions \${className}\`} {...props}>
      {children}
    </div>
  );
}
`,Jb=`import React, { HTMLAttributes } from 'react';
import './Progress.css';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
  animated?: boolean;
}

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  animated = false,
  className = '',
  ...props
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={\`progress progress-\${size} \${className}\`} {...props}>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={\`progress-bar progress-\${variant} \${animated ? 'progress-animated' : ''}\`}
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
      {showValue && <span className="progress-value">{Math.round(percentage)}%</span>}
    </div>
  );
}

export function CircularProgress({
  value,
  max = 100,
  size = 48,
  strokeWidth = 4,
  variant = 'default',
  showValue = false,
  className = '',
  ...props
}: CircularProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={\`circular-progress circular-progress-\${variant} \${className}\`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <svg width={size} height={size}>
        <circle
          className="circular-progress-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="circular-progress-bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={\`rotate(-90 \${size / 2} \${size / 2})\`}
        />
      </svg>
      {showValue && (
        <span className="circular-progress-value" style={{ fontSize: size * 0.25 }}>
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
`,Wb=`import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Radio.css';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const radioId = useMemo(() => id || \`radio-\${generateShortId()}\`, [id]);

    return (
      <label htmlFor={radioId} className={\`radio-wrapper \${className}\`}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className="radio-input"
          {...props}
        />
        <span className="radio-circle">
          <span className="radio-dot" />
        </span>
        {label && <span className="radio-label">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  direction = 'vertical',
  className = '',
}: RadioGroupProps) {
  return (
    <div className={\`radio-group radio-group-\${direction} \${className}\`} role="radiogroup">
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          disabled={option.disabled}
          onChange={() => onChange?.(option.value)}
        />
      ))}
    </div>
  );
}
`,Fb=`import React, { SelectHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, className = '', id, ...props }, ref) => {
    const selectId = useMemo(() => id || \`select-\${generateShortId()}\`, [id]);

    return (
      <div className={\`select-wrapper \${error ? 'select-error' : ''} \${className}\`}>
        {label && (
          <label htmlFor={selectId} className="select-label">
            {label}
          </label>
        )}
        <div className="select-container">
          <select
            ref={ref}
            id={selectId}
            className="select-field"
            aria-invalid={!!error}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="select-icon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        {error && <span className="select-error-text">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
`,Ib=`import React, { HTMLAttributes, ReactNode } from 'react';
import './Sidebar.css';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export interface SidebarItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
  badge?: string | number;
}

export function Sidebar({
  collapsed = false,
  className = '',
  children,
  ...props
}: SidebarProps) {
  return (
    <aside className={\`sidebar \${collapsed ? 'sidebar-collapsed' : ''} \${className}\`} {...props}>
      {children}
    </aside>
  );
}

export function SidebarSection({ title, className = '', children, ...props }: SidebarSectionProps) {
  return (
    <div className={\`sidebar-section \${className}\`} {...props}>
      {title && <div className="sidebar-section-title">{title}</div>}
      <div className="sidebar-section-items">{children}</div>
    </div>
  );
}

export function SidebarItem({
  icon,
  active,
  badge,
  className = '',
  children,
  ...props
}: SidebarItemProps) {
  return (
    <button
      className={\`sidebar-item \${active ? 'sidebar-item-active' : ''} \${className}\`}
      {...props}
    >
      {icon && <span className="sidebar-item-icon">{icon}</span>}
      <span className="sidebar-item-text">{children}</span>
      {badge !== undefined && <span className="sidebar-item-badge">{badge}</span>}
    </button>
  );
}
`,Pb=`import React, { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './Table.css';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

export function Table({
  striped = false,
  hoverable = false,
  bordered = false,
  compact = false,
  className = '',
  children,
  ...props
}: TableProps) {
  const classes = [
    'table',
    striped && 'table-striped',
    hoverable && 'table-hoverable',
    bordered && 'table-bordered',
    compact && 'table-compact',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="table-wrapper">
      <table className={classes} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className = '', children, ...props }: TableHeaderProps) {
  return (
    <thead className={\`table-header \${className}\`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className = '', children, ...props }: TableBodyProps) {
  return (
    <tbody className={\`table-body \${className}\`} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ selected, className = '', children, ...props }: TableRowProps) {
  return (
    <tr className={\`table-row \${selected ? 'table-row-selected' : ''} \${className}\`} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({
  sortable,
  sortDirection,
  onSort,
  className = '',
  children,
  ...props
}: TableHeadProps) {
  return (
    <th
      className={\`table-head \${sortable ? 'table-head-sortable' : ''} \${className}\`}
      onClick={sortable ? onSort : undefined}
      aria-sort={sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : undefined}
      {...props}
    >
      <div className="table-head-content">
        <span>{children}</span>
        {sortable && (
          <span className="table-sort-icon">
            {sortDirection === 'asc' && <ChevronUp size={14} />}
            {sortDirection === 'desc' && <ChevronDown size={14} />}
            {!sortDirection && (
              <span className="table-sort-icon-inactive">
                <ChevronUp size={14} />
              </span>
            )}
          </span>
        )}
      </div>
    </th>
  );
}

export function TableCell({ className = '', children, ...props }: TableCellProps) {
  return (
    <td className={\`table-cell \${className}\`} {...props}>
      {children}
    </td>
  );
}
`,e0=`import React, { createContext, useContext, useState, ReactNode, HTMLAttributes } from 'react';
import './Tabs.css';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within a Tabs component');
  }
  return context;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function Tabs({
  defaultValue,
  value,
  onChange,
  className = '',
  children,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const activeTab = value !== undefined ? value : internalValue;

  const setActiveTab = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={\`tabs \${className}\`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ className = '', children, ...props }: TabListProps) {
  return (
    <div className={\`tab-list \${className}\`} role="tablist" {...props}>
      {children}
    </div>
  );
}

export function Tab({ value, disabled, className = '', children, ...props }: TabProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      className={\`tab \${isActive ? 'tab-active' : ''} \${className}\`}
      role="tab"
      aria-selected={isActive}
      aria-controls={\`panel-\${value}\`}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, className = '', children, ...props }: TabPanelProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={\`tab-panel \${className}\`}
      role="tabpanel"
      id={\`panel-\${value}\`}
      {...props}
    >
      {children}
    </div>
  );
}
`,t0=`import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, size = 'md', className = '', id, ...props }, ref) => {
    const toggleId = useMemo(() => id || \`toggle-\${generateShortId()}\`, [id]);

    return (
      <label htmlFor={toggleId} className={\`toggle-wrapper toggle-\${size} \${className}\`}>
        <input
          ref={ref}
          type="checkbox"
          id={toggleId}
          className="toggle-input"
          role="switch"
          {...props}
        />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        {label && <span className="toggle-label">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
`,n0=`import React, { useState, useRef, HTMLAttributes, ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export function Tooltip({
  content,
  position = 'top',
  delay = 200,
  className = '',
  children,
  ...props
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <div
      className={\`tooltip-wrapper \${className}\`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      {...props}
    >
      {children}
      {isVisible && (
        <div className={\`tooltip tooltip-\${position}\`} role="tooltip">
          <div className="tooltip-content">{content}</div>
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
}
`,a0=`.accordion {
  font-family: var(--font-family);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-surface);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background-color: var(--color-background);
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
}

.accordion-trigger:hover:not(:disabled) {
  background-color: var(--color-surface);
}

.accordion-trigger:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset) * -1);
}

.accordion-trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.accordion-trigger-text {
  flex: 1;
}

.accordion-icon {
  flex-shrink: 0;
  color: var(--color-text-muted);
  transition: transform var(--transition-fast);
}

.accordion-icon-open {
  transform: rotate(180deg);
}

.accordion-content {
  overflow: hidden;
  background-color: var(--color-background);
  max-height: 0;
  transition: max-height var(--transition-normal);
}

.accordion-content-open {
  max-height: 500px;
}

.accordion-content[hidden] {
  display: none;
}

.accordion-content-inner {
  padding: 0 var(--spacing-md) var(--spacing-md);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}
`,r0=`.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  font-family: var(--font-family);
  border-radius: var(--radius-surface);
  border: var(--alert-border-width) solid transparent;
  box-shadow: var(--shadow-control);
}

.alert-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: var(--alert-icon-size);
  height: var(--alert-icon-size);
}

.alert-icon svg {
  width: 100%;
  height: 100%;
}

.alert-content {
  flex: 1;
  min-width: 0;
}

.alert-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-xs);
}

.alert-title:last-child {
  margin-bottom: 0;
}

.alert-message {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
}

.alert-dismiss {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: var(--radius-control);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.alert-dismiss:hover {
  opacity: 1;
}

.alert-dismiss:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

/* Variants */
.alert-info {
  background-color: color-mix(in srgb, var(--color-info) 10%, var(--color-background));
  border-color: color-mix(in srgb, var(--color-info) 30%, transparent);
  color: var(--color-info);
}

.alert-info .alert-title,
.alert-info .alert-message {
  color: color-mix(in srgb, var(--color-info) 80%, var(--color-text));
}

.alert-success {
  background-color: color-mix(in srgb, var(--color-success) 10%, var(--color-background));
  border-color: color-mix(in srgb, var(--color-success) 30%, transparent);
  color: var(--color-success);
}

.alert-success .alert-title,
.alert-success .alert-message {
  color: color-mix(in srgb, var(--color-success) 80%, var(--color-text));
}

.alert-warning {
  background-color: color-mix(in srgb, var(--color-warning) 10%, var(--color-background));
  border-color: color-mix(in srgb, var(--color-warning) 30%, transparent);
  color: var(--color-warning);
}

.alert-warning .alert-title,
.alert-warning .alert-message {
  color: color-mix(in srgb, var(--color-warning) 80%, var(--color-text));
}

.alert-error {
  background-color: color-mix(in srgb, var(--color-error) 10%, var(--color-background));
  border-color: color-mix(in srgb, var(--color-error) 30%, transparent);
  color: var(--color-error);
}

.alert-error .alert-title,
.alert-error .alert-message {
  color: color-mix(in srgb, var(--color-error) 80%, var(--color-text));
}
`,l0=`.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  overflow: hidden;
  background-color: var(--color-surface);
  border: var(--avatar-border-width) solid var(--avatar-border-color);
}

/* Sizes */
.avatar-xs {
  width: 24px;
  height: 24px;
  font-size: 10px;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: var(--font-size-xs);
}

.avatar-md {
  width: 40px;
  height: 40px;
  font-size: var(--font-size-sm);
}

.avatar-lg {
  width: 48px;
  height: 48px;
  font-size: var(--font-size-md);
}

.avatar-xl {
  width: 64px;
  height: 64px;
  font-size: var(--font-size-lg);
}

/* Shapes */
.avatar-circle {
  border-radius: var(--radius-full);
}

.avatar-square {
  border-radius: var(--radius-control);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-text-on-accent);
  background-color: var(--color-secondary);
}

/* Status indicator */
.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 25%;
  min-width: 8px;
  min-height: 8px;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-background);
}

.avatar-status-online {
  background-color: var(--color-success);
}

.avatar-status-offline {
  background-color: var(--color-text-muted);
}

.avatar-status-away {
  background-color: var(--color-warning);
}

.avatar-status-busy {
  background-color: var(--color-error);
}

/* Avatar Group */
.avatar-group {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.avatar-group .avatar {
  margin-left: -8px;
  border: 2px solid var(--color-background);
}

.avatar-group .avatar:last-child {
  margin-left: 0;
}

.avatar-overflow .avatar-initials {
  background-color: var(--color-secondary);
  font-size: 0.8em;
}
`,i0=`.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  white-space: nowrap;
  border-radius: var(--radius-control);
  text-transform: var(--badge-text-transform);
  letter-spacing: var(--badge-letter-spacing);
  border: var(--badge-border-width) solid transparent;
}

/* Sizes */
.badge-sm {
  padding: 2px var(--spacing-xs);
  font-size: var(--font-size-xs);
}

.badge-md {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.badge-lg {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-md);
}

/* Rounded variant */
.badge-rounded {
  border-radius: var(--radius-full);
}

/* Color variants */
.badge-default {
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.badge-primary {
  background-color: color-mix(in srgb, var(--color-primary) 15%, transparent);
  color: var(--color-primary);
}

.badge-secondary {
  background-color: color-mix(in srgb, var(--color-secondary) 15%, transparent);
  color: var(--color-secondary);
}

.badge-success {
  background-color: color-mix(in srgb, var(--color-success) 15%, transparent);
  color: var(--color-success);
}

.badge-warning {
  background-color: color-mix(in srgb, var(--color-warning) 15%, transparent);
  color: color-mix(in srgb, var(--color-warning) 80%, var(--color-text));
}

.badge-error {
  background-color: color-mix(in srgb, var(--color-error) 15%, transparent);
  color: var(--color-error);
}

.badge-info {
  background-color: color-mix(in srgb, var(--color-info) 15%, transparent);
  color: var(--color-info);
}
`,o0=`.breadcrumb {
  font-family: var(--font-family);
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.breadcrumb-link,
.breadcrumb-text {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-primary);
}

.breadcrumb-link:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  border-radius: var(--radius-control);
}

.breadcrumb-current {
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

.breadcrumb-icon {
  display: flex;
  align-items: center;
}

.breadcrumb-separator {
  display: flex;
  align-items: center;
  color: var(--color-border);
}

.breadcrumb-ellipsis {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
`,s0=`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  border: var(--button-border-width) solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  line-height: var(--line-height-normal);
  text-transform: var(--button-text-transform);
  letter-spacing: var(--button-letter-spacing);
  box-shadow: var(--shadow-control), var(--button-inner-shadow);
}

.btn:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.btn-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-control);
}

.btn-md {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-md);
  border-radius: var(--radius-control);
}

.btn-lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-control);
}

/* Variants */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-on-accent);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-text-on-accent);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-hover);
}

.btn-outline {
  background-color: transparent;
  border-color: var(--color-border);
  color: var(--color-text);
}

.btn-outline:hover:not(:disabled) {
  background-color: var(--color-surface);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-text);
}

.btn-ghost:hover:not(:disabled) {
  background-color: var(--color-surface);
}

.btn-danger {
  background-color: var(--color-error);
  color: var(--color-text-on-accent);
}

.btn-danger:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-error) 85%, var(--color-text));
}

/* Full width */
.btn-full {
  width: 100%;
}

/* Loading spinner */
.btn-loader {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: btn-spin 0.6s linear infinite;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}
`,c0=`.card {
  font-family: var(--font-family);
  background-color: var(--color-background);
  border-radius: var(--radius-surface);
  overflow: hidden;
  box-shadow: var(--shadow-control);
}

.card-default {
  background-color: var(--color-surface);
}

.card-outlined {
  border: var(--card-border-width) solid var(--color-border);
}

.card-elevated {
  box-shadow: var(--shadow-surface);
  border: var(--card-elevated-border-width, 0px) solid var(--color-border);
}

/* Padding variants */
.card-padding-none {
  padding: 0;
}

.card-padding-sm {
  padding: var(--spacing-sm);
}

.card-padding-md {
  padding: var(--spacing-md);
}

.card-padding-lg {
  padding: var(--spacing-lg);
}

/* Card sections */
.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-bottom: var(--card-header-border-width) solid var(--color-border);
}

.card-padding-none > .card-header {
  padding: var(--spacing-md);
}

.card-padding-sm > .card-header,
.card-padding-md > .card-header,
.card-padding-lg > .card-header {
  padding: 0;
  padding-bottom: var(--spacing-md);
  border-bottom: none;
}

.card-header-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.card-title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
}

.card-subtitle {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-normal);
}

.card-header-action {
  flex-shrink: 0;
}

.card-body {
  padding: var(--spacing-md);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}

.card-padding-none > .card-body {
  padding: var(--spacing-md);
}

.card-padding-sm > .card-body,
.card-padding-md > .card-body,
.card-padding-lg > .card-body {
  padding: 0;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  border-top: var(--card-header-border-width) solid var(--color-border);
}

.card-padding-none > .card-footer {
  padding: var(--spacing-md);
}

.card-padding-sm > .card-footer,
.card-padding-md > .card-footer,
.card-padding-lg > .card-footer {
  padding: 0;
  padding-top: var(--spacing-md);
  border-top: none;
}
`,u0=`.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  color: var(--color-text);
}

.checkbox-wrapper:has(.checkbox-input:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border: var(--checkbox-border-width) solid var(--color-border);
  border-radius: var(--checkbox-border-radius);
  background-color: var(--color-background);
  box-shadow: var(--shadow-control);
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.checkbox-box svg {
  width: 85%;
  height: 85%;
  display: block;
  color: var(--color-text-on-accent);
  opacity: 0;
  transform: scale(0.9);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.checkbox-input:checked + .checkbox-box {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:checked + .checkbox-box .checkbox-check {
  opacity: 1;
  transform: scale(1);
}

.checkbox-input:indeterminate + .checkbox-box {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:indeterminate + .checkbox-box .checkbox-indeterminate {
  opacity: 1;
  transform: scale(1);
}

.checkbox-input:focus-visible + .checkbox-box {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.checkbox-wrapper:hover .checkbox-box {
  border-color: var(--color-primary);
}

.checkbox-label {
  user-select: none;
}
`,d0=`.dropdown {
  position: relative;
  display: inline-block;
  font-family: var(--font-family);
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-surface);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dropdown-trigger:hover {
  border-color: var(--color-secondary);
}

.dropdown-trigger:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.dropdown-icon {
  transition: transform var(--transition-fast);
}

.dropdown-icon-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  margin-top: var(--spacing-xs);
  min-width: 160px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-surface);
  box-shadow: var(--shadow-overlay);
  z-index: 100;
  animation: dropdown-fade 0.15s ease;
}

@keyframes dropdown-fade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-align-left {
  left: 0;
}

.dropdown-align-right {
  right: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
}

.dropdown-item:first-child {
  border-radius: var(--radius-surface) var(--radius-surface) 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 var(--radius-surface) var(--radius-surface);
}

.dropdown-item:hover:not(:disabled) {
  background-color: var(--color-surface);
}

.dropdown-item:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset) * -1);
}

.dropdown-item-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dropdown-item-icon {
  display: flex;
  align-items: center;
  color: var(--color-text-muted);
}

.dropdown-divider {
  height: 1px;
  margin: var(--spacing-xs) 0;
  background-color: var(--color-border);
}
`,f0=`.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.input-label {
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.input-field {
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  color: var(--color-text);
  background-color: var(--color-background);
  border: var(--input-border-width) solid var(--color-border);
  border-radius: var(--radius-control);
  box-shadow: var(--shadow-control);
  transition: all var(--transition-fast);
  line-height: var(--line-height-normal);
}

.input-field::placeholder {
  color: var(--color-text-muted);
}

.input-field:hover:not(:disabled) {
  border-color: var(--color-secondary);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 var(--input-focus-ring-width) var(--input-focus-ring-color);
}

.input-field:disabled {
  background-color: var(--color-surface);
  cursor: not-allowed;
  opacity: 0.6;
}

.input-error .input-field {
  border-color: var(--color-error);
}

.input-error .input-field:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-error) 20%, transparent);
}

.input-error-text {
  font-size: var(--font-size-sm);
  color: var(--color-error);
}

.input-helper-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
`,h0=`.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  background-color: color-mix(
    in srgb,
    var(--modal-backdrop-color) calc(var(--modal-backdrop-opacity) * 100%),
    transparent
  );
  backdrop-filter: blur(var(--modal-backdrop-blur));
  z-index: 1000;
  animation: modal-overlay-fade 0.2s ease;
}

@keyframes modal-overlay-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - var(--spacing-xl) * 2);
  background-color: var(--color-background);
  border-radius: var(--radius-overlay);
  border: var(--modal-border-width) solid var(--color-border);
  box-shadow: var(--shadow-float);
  font-family: var(--font-family);
  animation: modal-slide 0.2s ease;
}

@keyframes modal-slide {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Sizes */
.modal-sm {
  width: 100%;
  max-width: 400px;
}

.modal-md {
  width: 100%;
  max-width: 500px;
}

.modal-lg {
  width: 100%;
  max-width: 700px;
}

.modal-xl {
  width: 100%;
  max-width: 900px;
}

.modal-full {
  width: calc(100vw - var(--spacing-xl) * 2);
  height: calc(100vh - var(--spacing-xl) * 2);
  max-width: none;
  max-height: none;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: var(--modal-border-width) solid var(--color-border);
  flex-shrink: 0;
}

.modal-title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  border-radius: var(--radius-control);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background-color: var(--color-surface);
  color: var(--color-text);
}

.modal-close:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: var(--modal-border-width) solid var(--color-border);
  flex-shrink: 0;
}
`,p0=`.navbar {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-family);
}

.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-text);
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.navbar-link {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  border-radius: var(--radius-surface);
  transition: all var(--transition-fast);
}

.navbar-link:hover {
  color: var(--color-text);
  background-color: var(--color-surface);
}

.navbar-link:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.navbar-link-active {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
`,m0=`.progress {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-family);
}

.progress-track {
  flex: 1;
  background-color: var(--color-surface);
  border-radius: var(--progress-border-radius);
  overflow: hidden;
}

.progress-sm .progress-track {
  height: calc(var(--progress-track-height) / 2);
}

.progress-md .progress-track {
  height: var(--progress-track-height);
}

.progress-lg .progress-track {
  height: calc(var(--progress-track-height) * 1.5);
}

.progress-bar {
  height: 100%;
  border-radius: var(--progress-border-radius);
  transition: width var(--transition-normal);
}

.progress-default {
  background-color: var(--color-primary);
}

.progress-success {
  background-color: var(--color-success);
}

.progress-warning {
  background-color: var(--color-warning);
}

.progress-error {
  background-color: var(--color-error);
}

.progress-animated {
  background-image: linear-gradient(
    45deg,
    color-mix(in srgb, var(--color-text-on-accent) 20%, transparent) 25%,
    transparent 25%,
    transparent 50%,
    color-mix(in srgb, var(--color-text-on-accent) 20%, transparent) 50%,
    color-mix(in srgb, var(--color-text-on-accent) 20%, transparent) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  min-width: 36px;
  text-align: right;
}

/* Circular Progress */
.circular-progress {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.circular-progress-track {
  fill: none;
  stroke: var(--color-surface);
}

.circular-progress-bar {
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset var(--transition-normal);
}

.circular-progress-default .circular-progress-bar {
  stroke: var(--color-primary);
}

.circular-progress-success .circular-progress-bar {
  stroke: var(--color-success);
}

.circular-progress-warning .circular-progress-bar {
  stroke: var(--color-warning);
}

.circular-progress-error .circular-progress-bar {
  stroke: var(--color-error);
}

.circular-progress-value {
  position: absolute;
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}
`,g0=`.radio-group {
  display: flex;
  gap: var(--spacing-md);
}

.radio-group-vertical {
  flex-direction: column;
}

.radio-group-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}

.radio-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  color: var(--color-text);
}

.radio-wrapper:has(.radio-input:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--radio-size);
  height: var(--radio-size);
  border: var(--radio-border-width) solid var(--color-border);
  border-radius: var(--radius-full);
  background-color: var(--color-background);
  box-shadow: var(--shadow-control);
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.radio-dot {
  width: var(--radio-dot-size);
  height: var(--radio-dot-size);
  border-radius: var(--radius-full);
  background-color: var(--color-text-on-accent);
  transform: scale(0);
  transition: transform var(--transition-fast);
}

.radio-input:checked + .radio-circle {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.radio-input:checked + .radio-circle .radio-dot {
  transform: scale(1);
}

.radio-input:focus-visible + .radio-circle {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.radio-wrapper:hover .radio-circle {
  border-color: var(--color-primary);
}

.radio-label {
  user-select: none;
}
`,v0=`.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.select-label {
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.select-container {
  position: relative;
}

.select-field {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  padding-right: calc(var(--spacing-md) + 20px);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-control);
  box-shadow: var(--shadow-control);
  cursor: pointer;
  appearance: none;
  transition: all var(--transition-fast);
}

.select-field:hover:not(:disabled) {
  border-color: var(--color-secondary);
}

.select-field:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.select-field:disabled {
  background-color: var(--color-surface);
  cursor: not-allowed;
  opacity: 0.6;
}

.select-icon {
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-text-muted);
}

.select-error .select-field {
  border-color: var(--color-error);
}

.select-error-text {
  font-size: var(--font-size-sm);
  color: var(--color-error);
}
`,b0=`.sidebar {
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  font-family: var(--font-family);
  transition: width var(--transition-normal);
}

.sidebar-collapsed {
  width: 64px;
}

.sidebar-collapsed .sidebar-section-title,
.sidebar-collapsed .sidebar-item-text,
.sidebar-collapsed .sidebar-item-badge {
  display: none;
}

.sidebar-section {
  padding: var(--spacing-sm);
}

.sidebar-section + .sidebar-section {
  border-top: 1px solid var(--color-border);
}

.sidebar-section-title {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar-section-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  border-radius: var(--radius-surface);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-fast);
}

.sidebar-item:hover {
  color: var(--color-text);
  background-color: var(--color-background);
}

.sidebar-item:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset) * -1);
}

.sidebar-item-active {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.sidebar-item-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.sidebar-item-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-item-badge {
  flex-shrink: 0;
  padding: 2px var(--spacing-xs);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-on-accent);
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  min-width: 18px;
  text-align: center;
}
`,y0=`.table-wrapper {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  color: var(--color-text);
}

.table-header {
  background-color: var(--color-surface);
}

.table-head {
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: var(--font-weight-semibold);
  text-align: left;
  border-bottom: 2px solid var(--color-border);
}

.table-head-sortable {
  cursor: pointer;
  user-select: none;
}

.table-head-sortable:hover {
  background-color: var(--color-border);
}

.table-head-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.table-sort-icon {
  display: flex;
  align-items: center;
  color: var(--color-primary);
}

.table-sort-icon-inactive {
  opacity: 0.3;
}

.table-row {
  border-bottom: 1px solid var(--color-border);
}

.table-row-selected {
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.table-cell {
  padding: var(--spacing-sm) var(--spacing-md);
  vertical-align: middle;
}

/* Striped */
.table-striped .table-body .table-row:nth-child(even) {
  background-color: var(--color-surface);
}

/* Hoverable */
.table-hoverable .table-body .table-row:hover {
  background-color: color-mix(in srgb, var(--color-primary) 5%, transparent);
}

/* Bordered */
.table-bordered {
  border: 1px solid var(--color-border);
}

.table-bordered .table-head,
.table-bordered .table-cell {
  border: 1px solid var(--color-border);
}

/* Compact */
.table-compact .table-head,
.table-compact .table-cell {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}
`,x0=`.tabs {
  font-family: var(--font-family);
}

.tab-list {
  display: flex;
  gap: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
}

.tab {
  position: relative;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.tab::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: var(--tabs-indicator-height);
  background-color: transparent;
  transition: background-color var(--transition-fast);
}

.tab:hover:not(:disabled) {
  color: var(--color-text);
}

.tab:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset) * -1);
  border-radius: var(--radius-control);
}

.tab:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tab-active {
  color: var(--color-primary);
}

.tab-active::after {
  background-color: var(--color-primary);
}

.tab-panel {
  padding: var(--spacing-md) 0;
  color: var(--color-text);
  line-height: var(--line-height-normal);
}
`,_0=`.toggle-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-family: var(--font-family);
  color: var(--color-text);
}

.toggle-wrapper:has(.toggle-input:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

.toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-track {
  position: relative;
  background-color: var(--color-border);
  border-radius: var(--radius-full);
  transition: background-color var(--transition-fast);
  border: var(--toggle-border-width) solid transparent;
  box-shadow: var(--toggle-track-shadow);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: var(--toggle-thumb-size);
  height: var(--toggle-thumb-size);
  background-color: var(--color-text-on-accent);
  border-radius: var(--radius-full);
  border: var(--toggle-thumb-border-width) solid var(--color-border);
  box-shadow: var(--toggle-thumb-shadow);
  transition: transform var(--transition-fast);
}

/* Sizes */
.toggle-sm {
  --toggle-track-height: 18px;
  --toggle-thumb-size: 14px;
}

.toggle-md {
  --toggle-track-height: var(--toggle-track-height);
  --toggle-thumb-size: var(--toggle-thumb-size);
}

.toggle-lg {
  --toggle-track-height: 28px;
  --toggle-thumb-size: 24px;
}

.toggle-sm .toggle-track {
  width: calc(var(--toggle-track-height) * 1.8);
  height: var(--toggle-track-height);
}

.toggle-sm .toggle-thumb {
  width: var(--toggle-thumb-size);
  height: var(--toggle-thumb-size);
}

.toggle-sm .toggle-input:checked + .toggle-track .toggle-thumb {
  transform: translateX(calc(var(--toggle-track-height) * 1.8 - var(--toggle-thumb-size) - 4px));
}

.toggle-sm .toggle-label {
  font-size: var(--font-size-sm);
}

.toggle-md .toggle-track {
  width: calc(var(--toggle-track-height) * 1.8);
  height: var(--toggle-track-height);
}

.toggle-md .toggle-input:checked + .toggle-track .toggle-thumb {
  transform: translateX(calc(var(--toggle-track-height) * 1.8 - var(--toggle-thumb-size) - 4px));
}

.toggle-md .toggle-label {
  font-size: var(--font-size-md);
}

.toggle-lg .toggle-track {
  width: calc(var(--toggle-track-height) * 2);
  height: var(--toggle-track-height);
}

.toggle-lg .toggle-thumb {
  width: var(--toggle-thumb-size);
  height: var(--toggle-thumb-size);
}

.toggle-lg .toggle-input:checked + .toggle-track .toggle-thumb {
  transform: translateX(calc(var(--toggle-track-height) * 2 - var(--toggle-thumb-size) - 4px));
}

.toggle-lg .toggle-label {
  font-size: var(--font-size-lg);
}

/* Checked state */
.toggle-input:checked + .toggle-track {
  background-color: var(--color-primary);
}

/* Focus state */
.toggle-input:focus-visible + .toggle-track {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.toggle-label {
  user-select: none;
}
`,S0=`.tooltip-wrapper {
  position: relative;
  display: inline-flex;
}

.tooltip {
  position: absolute;
  z-index: 1000;
  animation: tooltip-fade 0.15s ease;
}

@keyframes tooltip-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tooltip-content {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  color: var(--color-text-on-accent);
  background-color: var(--color-text);
  border-radius: var(--radius-overlay);
  white-space: nowrap;
  box-shadow: var(--shadow-overlay);
}

.tooltip-arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--color-text);
  transform: rotate(45deg);
}

/* Positions */
.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 8px;
}

.tooltip-top .tooltip-arrow {
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 8px;
}

.tooltip-bottom .tooltip-arrow {
  top: 4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 8px;
}

.tooltip-left .tooltip-arrow {
  right: 4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 8px;
}

.tooltip-right .tooltip-arrow {
  left: 4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
`,w0=`export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './Accordion';
`,j0=`export { Alert } from './Alert';
export type { AlertProps } from './Alert';
`,z0=`export { Avatar, AvatarGroup } from './Avatar';
export type { AvatarProps, AvatarGroupProps } from './Avatar';
`,N0=`export { Badge } from './Badge';
export type { BadgeProps } from './Badge';
`,T0=`export { Breadcrumb } from './Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './Breadcrumb';
`,C0=`export { Button } from './Button';
export type { ButtonProps } from './Button';
`,A0=`export { Card, CardHeader, CardBody, CardFooter } from './Card';
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card';
`,k0=`export { Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';
`,E0=`export { Dropdown } from './Dropdown';
export type { DropdownProps, DropdownItem } from './Dropdown';
`,M0=`export { Input } from './Input';
export type { InputProps } from './Input';
`,O0=`export { Modal } from './Modal';
export type { ModalProps } from './Modal';
`,R0=`export { Navbar, NavbarBrand, NavbarLinks, NavbarLink, NavbarActions } from './Navbar';
export type { NavbarProps, NavbarBrandProps, NavbarLinksProps, NavbarLinkProps, NavbarActionsProps } from './Navbar';
`,D0=`export { Progress, CircularProgress } from './Progress';
export type { ProgressProps, CircularProgressProps } from './Progress';
`,B0=`export { Radio, RadioGroup } from './Radio';
export type { RadioProps, RadioGroupProps, RadioOption } from './Radio';
`,H0=`export { Select } from './Select';
export type { SelectProps, SelectOption } from './Select';
`,L0=`export { Sidebar, SidebarSection, SidebarItem } from './Sidebar';
export type { SidebarProps, SidebarSectionProps, SidebarItemProps } from './Sidebar';
`,U0=`export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';
export type { TableProps, TableHeaderProps, TableBodyProps, TableRowProps, TableHeadProps, TableCellProps } from './Table';
`,q0=`export { Tabs, TabList, Tab, TabPanel } from './Tabs';
export type { TabsProps, TabListProps, TabProps, TabPanelProps } from './Tabs';
`,Y0=`export { Toggle } from './Toggle';
export type { ToggleProps } from './Toggle';
`,Z0=`export { Tooltip } from './Tooltip';
export type { TooltipProps } from './Tooltip';
`;function Ai(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var cc={exports:{}};var Mh;function G0(){return Mh||(Mh=1,(function(o,b){(function(s){o.exports=s()})(function(){return(function s(p,g,u){function h(v,z){if(!g[v]){if(!p[v]){var _=typeof Ai=="function"&&Ai;if(!z&&_)return _(v,!0);if(f)return f(v,!0);var T=new Error("Cannot find module '"+v+"'");throw T.code="MODULE_NOT_FOUND",T}var S=g[v]={exports:{}};p[v][0].call(S.exports,function(y){var j=p[v][1][y];return h(j||y)},S,S.exports,s,p,g,u)}return g[v].exports}for(var f=typeof Ai=="function"&&Ai,d=0;d<u.length;d++)h(u[d]);return h})({1:[function(s,p,g){var u=s("./utils"),h=s("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";g.encode=function(d){for(var v,z,_,T,S,y,j,A=[],C=0,M=d.length,B=M,H=u.getTypeOf(d)!=="string";C<d.length;)B=M-C,_=H?(v=d[C++],z=C<M?d[C++]:0,C<M?d[C++]:0):(v=d.charCodeAt(C++),z=C<M?d.charCodeAt(C++):0,C<M?d.charCodeAt(C++):0),T=v>>2,S=(3&v)<<4|z>>4,y=1<B?(15&z)<<2|_>>6:64,j=2<B?63&_:64,A.push(f.charAt(T)+f.charAt(S)+f.charAt(y)+f.charAt(j));return A.join("")},g.decode=function(d){var v,z,_,T,S,y,j=0,A=0,C="data:";if(d.substr(0,C.length)===C)throw new Error("Invalid base64 input, it looks like a data url.");var M,B=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===f.charAt(64)&&B--,d.charAt(d.length-2)===f.charAt(64)&&B--,B%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=h.uint8array?new Uint8Array(0|B):new Array(0|B);j<d.length;)v=f.indexOf(d.charAt(j++))<<2|(T=f.indexOf(d.charAt(j++)))>>4,z=(15&T)<<4|(S=f.indexOf(d.charAt(j++)))>>2,_=(3&S)<<6|(y=f.indexOf(d.charAt(j++))),M[A++]=v,S!==64&&(M[A++]=z),y!==64&&(M[A++]=_);return M}},{"./support":30,"./utils":32}],2:[function(s,p,g){var u=s("./external"),h=s("./stream/DataWorker"),f=s("./stream/Crc32Probe"),d=s("./stream/DataLengthProbe");function v(z,_,T,S,y){this.compressedSize=z,this.uncompressedSize=_,this.crc32=T,this.compression=S,this.compressedContent=y}v.prototype={getContentWorker:function(){var z=new h(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),_=this;return z.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),z},getCompressedWorker:function(){return new h(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},v.createWorkerFrom=function(z,_,T){return z.pipe(new f).pipe(new d("uncompressedSize")).pipe(_.compressWorker(T)).pipe(new d("compressedSize")).withStreamInfo("compression",_)},p.exports=v},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,p,g){var u=s("./stream/GenericWorker");g.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},g.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,p,g){var u=s("./utils"),h=(function(){for(var f,d=[],v=0;v<256;v++){f=v;for(var z=0;z<8;z++)f=1&f?3988292384^f>>>1:f>>>1;d[v]=f}return d})();p.exports=function(f,d){return f!==void 0&&f.length?u.getTypeOf(f)!=="string"?(function(v,z,_,T){var S=h,y=T+_;v^=-1;for(var j=T;j<y;j++)v=v>>>8^S[255&(v^z[j])];return-1^v})(0|d,f,f.length,0):(function(v,z,_,T){var S=h,y=T+_;v^=-1;for(var j=T;j<y;j++)v=v>>>8^S[255&(v^z.charCodeAt(j))];return-1^v})(0|d,f,f.length,0):0}},{"./utils":32}],5:[function(s,p,g){g.base64=!1,g.binary=!1,g.dir=!1,g.createFolders=!0,g.date=null,g.compression=null,g.compressionOptions=null,g.comment=null,g.unixPermissions=null,g.dosPermissions=null},{}],6:[function(s,p,g){var u=null;u=typeof Promise<"u"?Promise:s("lie"),p.exports={Promise:u}},{lie:37}],7:[function(s,p,g){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=s("pako"),f=s("./utils"),d=s("./stream/GenericWorker"),v=u?"uint8array":"array";function z(_,T){d.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=T,this.meta={}}g.magic="\b\0",f.inherits(z,d),z.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(v,_.data),!1)},z.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},z.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},z.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(T){_.push({data:T,meta:_.meta})}},g.compressWorker=function(_){return new z("Deflate",_)},g.uncompressWorker=function(){return new z("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,p,g){function u(S,y){var j,A="";for(j=0;j<y;j++)A+=String.fromCharCode(255&S),S>>>=8;return A}function h(S,y,j,A,C,M){var B,H,U=S.file,F=S.compression,X=M!==v.utf8encode,ce=f.transformTo("string",M(U.name)),I=f.transformTo("string",v.utf8encode(U.name)),pe=U.comment,_e=f.transformTo("string",M(pe)),D=f.transformTo("string",v.utf8encode(pe)),ee=I.length!==U.name.length,x=D.length!==pe.length,ae="",Z="",G="",me=U.dir,le=U.date,ye={crc32:0,compressedSize:0,uncompressedSize:0};y&&!j||(ye.crc32=S.crc32,ye.compressedSize=S.compressedSize,ye.uncompressedSize=S.uncompressedSize);var N=0;y&&(N|=8),X||!ee&&!x||(N|=2048);var E=0,te=0;me&&(E|=16),C==="UNIX"?(te=798,E|=(function(re,Se){var Ae=re;return re||(Ae=Se?16893:33204),(65535&Ae)<<16})(U.unixPermissions,me)):(te=20,E|=(function(re){return 63&(re||0)})(U.dosPermissions)),B=le.getUTCHours(),B<<=6,B|=le.getUTCMinutes(),B<<=5,B|=le.getUTCSeconds()/2,H=le.getUTCFullYear()-1980,H<<=4,H|=le.getUTCMonth()+1,H<<=5,H|=le.getUTCDate(),ee&&(Z=u(1,1)+u(z(ce),4)+I,ae+="up"+u(Z.length,2)+Z),x&&(G=u(1,1)+u(z(_e),4)+D,ae+="uc"+u(G.length,2)+G);var P="";return P+=`
\0`,P+=u(N,2),P+=F.magic,P+=u(B,2),P+=u(H,2),P+=u(ye.crc32,4),P+=u(ye.compressedSize,4),P+=u(ye.uncompressedSize,4),P+=u(ce.length,2),P+=u(ae.length,2),{fileRecord:_.LOCAL_FILE_HEADER+P+ce+ae,dirRecord:_.CENTRAL_FILE_HEADER+u(te,2)+P+u(_e.length,2)+"\0\0\0\0"+u(E,4)+u(A,4)+ce+ae+_e}}var f=s("../utils"),d=s("../stream/GenericWorker"),v=s("../utf8"),z=s("../crc32"),_=s("../signature");function T(S,y,j,A){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=j,this.encodeFileName=A,this.streamFiles=S,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(T,d),T.prototype.push=function(S){var y=S.meta.percent||0,j=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(S):(this.bytesWritten+=S.data.length,d.prototype.push.call(this,{data:S.data,meta:{currentFile:this.currentFile,percent:j?(y+100*(j-A-1))/j:100}}))},T.prototype.openedSource=function(S){this.currentSourceOffset=this.bytesWritten,this.currentFile=S.file.name;var y=this.streamFiles&&!S.file.dir;if(y){var j=h(S,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:j.fileRecord,meta:{percent:0}})}else this.accumulate=!0},T.prototype.closedSource=function(S){this.accumulate=!1;var y=this.streamFiles&&!S.file.dir,j=h(S,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(j.dirRecord),y)this.push({data:(function(A){return _.DATA_DESCRIPTOR+u(A.crc32,4)+u(A.compressedSize,4)+u(A.uncompressedSize,4)})(S),meta:{percent:100}});else for(this.push({data:j.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},T.prototype.flush=function(){for(var S=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var j=this.bytesWritten-S,A=(function(C,M,B,H,U){var F=f.transformTo("string",U(H));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(C,2)+u(C,2)+u(M,4)+u(B,4)+u(F.length,2)+F})(this.dirRecords.length,j,S,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},T.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},T.prototype.registerPrevious=function(S){this._sources.push(S);var y=this;return S.on("data",function(j){y.processChunk(j)}),S.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),S.on("error",function(j){y.error(j)}),this},T.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},T.prototype.error=function(S){var y=this._sources;if(!d.prototype.error.call(this,S))return!1;for(var j=0;j<y.length;j++)try{y[j].error(S)}catch{}return!0},T.prototype.lock=function(){d.prototype.lock.call(this);for(var S=this._sources,y=0;y<S.length;y++)S[y].lock()},p.exports=T},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,p,g){var u=s("../compressions"),h=s("./ZipFileWorker");g.generateWorker=function(f,d,v){var z=new h(d.streamFiles,v,d.platform,d.encodeFileName),_=0;try{f.forEach(function(T,S){_++;var y=(function(M,B){var H=M||B,U=u[H];if(!U)throw new Error(H+" is not a valid compression method !");return U})(S.options.compression,d.compression),j=S.options.compressionOptions||d.compressionOptions||{},A=S.dir,C=S.date;S._compressWorker(y,j).withStreamInfo("file",{name:T,dir:A,date:C,comment:S.comment||"",unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions}).pipe(z)}),z.entriesCount=_}catch(T){z.error(T)}return z}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,p,g){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new u;for(var f in this)typeof this[f]!="function"&&(h[f]=this[f]);return h}}(u.prototype=s("./object")).loadAsync=s("./load"),u.support=s("./support"),u.defaults=s("./defaults"),u.version="3.10.1",u.loadAsync=function(h,f){return new u().loadAsync(h,f)},u.external=s("./external"),p.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,p,g){var u=s("./utils"),h=s("./external"),f=s("./utf8"),d=s("./zipEntries"),v=s("./stream/Crc32Probe"),z=s("./nodejsUtils");function _(T){return new h.Promise(function(S,y){var j=T.decompressed.getContentWorker().pipe(new v);j.on("error",function(A){y(A)}).on("end",function(){j.streamInfo.crc32!==T.decompressed.crc32?y(new Error("Corrupted zip : CRC32 mismatch")):S()}).resume()})}p.exports=function(T,S){var y=this;return S=u.extend(S||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),z.isNode&&z.isStream(T)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",T,!0,S.optimizedBinaryString,S.base64).then(function(j){var A=new d(S);return A.load(j),A}).then(function(j){var A=[h.Promise.resolve(j)],C=j.files;if(S.checkCRC32)for(var M=0;M<C.length;M++)A.push(_(C[M]));return h.Promise.all(A)}).then(function(j){for(var A=j.shift(),C=A.files,M=0;M<C.length;M++){var B=C[M],H=B.fileNameStr,U=u.resolve(B.fileNameStr);y.file(U,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:S.createFolders}),B.dir||(y.file(U).unsafeOriginalName=H)}return A.zipComment.length&&(y.comment=A.zipComment),y})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,p,g){var u=s("../utils"),h=s("../stream/GenericWorker");function f(d,v){h.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(v)}u.inherits(f,h),f.prototype._bindStream=function(d){var v=this;(this._stream=d).pause(),d.on("data",function(z){v.push({data:z,meta:{percent:0}})}).on("error",function(z){v.isPaused?this.generatedError=z:v.error(z)}).on("end",function(){v.isPaused?v._upstreamEnded=!0:v.end()})},f.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},p.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,p,g){var u=s("readable-stream").Readable;function h(f,d,v){u.call(this,d),this._helper=f;var z=this;f.on("data",function(_,T){z.push(_)||z._helper.pause(),v&&v(T)}).on("error",function(_){z.emit("error",_)}).on("end",function(){z.push(null)})}s("../utils").inherits(h,u),h.prototype._read=function(){this._helper.resume()},p.exports=h},{"../utils":32,"readable-stream":16}],14:[function(s,p,g){p.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,h);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,h)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var h=new Buffer(u);return h.fill(0),h},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(s,p,g){function u(U,F,X){var ce,I=f.getTypeOf(F),pe=f.extend(X||{},z);pe.date=pe.date||new Date,pe.compression!==null&&(pe.compression=pe.compression.toUpperCase()),typeof pe.unixPermissions=="string"&&(pe.unixPermissions=parseInt(pe.unixPermissions,8)),pe.unixPermissions&&16384&pe.unixPermissions&&(pe.dir=!0),pe.dosPermissions&&16&pe.dosPermissions&&(pe.dir=!0),pe.dir&&(U=C(U)),pe.createFolders&&(ce=A(U))&&M.call(this,ce,!0);var _e=I==="string"&&pe.binary===!1&&pe.base64===!1;X&&X.binary!==void 0||(pe.binary=!_e),(F instanceof _&&F.uncompressedSize===0||pe.dir||!F||F.length===0)&&(pe.base64=!1,pe.binary=!0,F="",pe.compression="STORE",I="string");var D=null;D=F instanceof _||F instanceof d?F:y.isNode&&y.isStream(F)?new j(U,F):f.prepareContent(U,F,pe.binary,pe.optimizedBinaryString,pe.base64);var ee=new T(U,D,pe);this.files[U]=ee}var h=s("./utf8"),f=s("./utils"),d=s("./stream/GenericWorker"),v=s("./stream/StreamHelper"),z=s("./defaults"),_=s("./compressedObject"),T=s("./zipObject"),S=s("./generate"),y=s("./nodejsUtils"),j=s("./nodejs/NodejsStreamInputAdapter"),A=function(U){U.slice(-1)==="/"&&(U=U.substring(0,U.length-1));var F=U.lastIndexOf("/");return 0<F?U.substring(0,F):""},C=function(U){return U.slice(-1)!=="/"&&(U+="/"),U},M=function(U,F){return F=F!==void 0?F:z.createFolders,U=C(U),this.files[U]||u.call(this,U,null,{dir:!0,createFolders:F}),this.files[U]};function B(U){return Object.prototype.toString.call(U)==="[object RegExp]"}var H={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(U){var F,X,ce;for(F in this.files)ce=this.files[F],(X=F.slice(this.root.length,F.length))&&F.slice(0,this.root.length)===this.root&&U(X,ce)},filter:function(U){var F=[];return this.forEach(function(X,ce){U(X,ce)&&F.push(ce)}),F},file:function(U,F,X){if(arguments.length!==1)return U=this.root+U,u.call(this,U,F,X),this;if(B(U)){var ce=U;return this.filter(function(pe,_e){return!_e.dir&&ce.test(pe)})}var I=this.files[this.root+U];return I&&!I.dir?I:null},folder:function(U){if(!U)return this;if(B(U))return this.filter(function(I,pe){return pe.dir&&U.test(I)});var F=this.root+U,X=M.call(this,F),ce=this.clone();return ce.root=X.name,ce},remove:function(U){U=this.root+U;var F=this.files[U];if(F||(U.slice(-1)!=="/"&&(U+="/"),F=this.files[U]),F&&!F.dir)delete this.files[U];else for(var X=this.filter(function(I,pe){return pe.name.slice(0,U.length)===U}),ce=0;ce<X.length;ce++)delete this.files[X[ce].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(U){var F,X={};try{if((X=f.extend(U||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");f.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ce=X.comment||this.comment||"";F=S.generateWorker(this,X,ce)}catch(I){(F=new d("error")).error(I)}return new v(F,X.type||"string",X.mimeType)},generateAsync:function(U,F){return this.generateInternalStream(U).accumulate(F)},generateNodeStream:function(U,F){return(U=U||{}).type||(U.type="nodebuffer"),this.generateInternalStream(U).toNodejsStream(F)}};p.exports=H},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,p,g){p.exports=s("stream")},{stream:void 0}],17:[function(s,p,g){var u=s("./DataReader");function h(f){u.call(this,f);for(var d=0;d<this.data.length;d++)f[d]=255&f[d]}s("../utils").inherits(h,u),h.prototype.byteAt=function(f){return this.data[this.zero+f]},h.prototype.lastIndexOfSignature=function(f){for(var d=f.charCodeAt(0),v=f.charCodeAt(1),z=f.charCodeAt(2),_=f.charCodeAt(3),T=this.length-4;0<=T;--T)if(this.data[T]===d&&this.data[T+1]===v&&this.data[T+2]===z&&this.data[T+3]===_)return T-this.zero;return-1},h.prototype.readAndCheckSignature=function(f){var d=f.charCodeAt(0),v=f.charCodeAt(1),z=f.charCodeAt(2),_=f.charCodeAt(3),T=this.readData(4);return d===T[0]&&v===T[1]&&z===T[2]&&_===T[3]},h.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},p.exports=h},{"../utils":32,"./DataReader":18}],18:[function(s,p,g){var u=s("../utils");function h(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var d,v=0;for(this.checkOffset(f),d=this.index+f-1;d>=this.index;d--)v=(v<<8)+this.byteAt(d);return this.index+=f,v},readString:function(f){return u.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},p.exports=h},{"../utils":32}],19:[function(s,p,g){var u=s("./Uint8ArrayReader");function h(f){u.call(this,f)}s("../utils").inherits(h,u),h.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},p.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,p,g){var u=s("./DataReader");function h(f){u.call(this,f)}s("../utils").inherits(h,u),h.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},h.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},h.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},h.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},p.exports=h},{"../utils":32,"./DataReader":18}],21:[function(s,p,g){var u=s("./ArrayReader");function h(f){u.call(this,f)}s("../utils").inherits(h,u),h.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},p.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(s,p,g){var u=s("../utils"),h=s("../support"),f=s("./ArrayReader"),d=s("./StringReader"),v=s("./NodeBufferReader"),z=s("./Uint8ArrayReader");p.exports=function(_){var T=u.getTypeOf(_);return u.checkSupport(T),T!=="string"||h.uint8array?T==="nodebuffer"?new v(_):h.uint8array?new z(u.transformTo("uint8array",_)):new f(u.transformTo("array",_)):new d(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,p,g){g.LOCAL_FILE_HEADER="PK",g.CENTRAL_FILE_HEADER="PK",g.CENTRAL_DIRECTORY_END="PK",g.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",g.ZIP64_CENTRAL_DIRECTORY_END="PK",g.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,p,g){var u=s("./GenericWorker"),h=s("../utils");function f(d){u.call(this,"ConvertWorker to "+d),this.destType=d}h.inherits(f,u),f.prototype.processChunk=function(d){this.push({data:h.transformTo(this.destType,d.data),meta:d.meta})},p.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(s,p,g){var u=s("./GenericWorker"),h=s("../crc32");function f(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(f,u),f.prototype.processChunk=function(d){this.streamInfo.crc32=h(d.data,this.streamInfo.crc32||0),this.push(d)},p.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,p,g){var u=s("../utils"),h=s("./GenericWorker");function f(d){h.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}u.inherits(f,h),f.prototype.processChunk=function(d){if(d){var v=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=v+d.data.length}h.prototype.processChunk.call(this,d)},p.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(s,p,g){var u=s("../utils"),h=s("./GenericWorker");function f(d){h.call(this,"DataWorker");var v=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(z){v.dataIsReady=!0,v.data=z,v.max=z&&z.length||0,v.type=u.getTypeOf(z),v.isPaused||v._tickAndRepeat()},function(z){v.error(z)})}u.inherits(f,h),f.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,v=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,v);break;case"uint8array":d=this.data.subarray(this.index,v);break;case"array":case"nodebuffer":d=this.data.slice(this.index,v)}return this.index=v,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},p.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(s,p,g){function u(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,f){return this._listeners[h].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,f){if(this._listeners[h])for(var d=0;d<this._listeners[h].length;d++)this._listeners[h][d].call(this,f)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var f=this;return h.on("data",function(d){f.processChunk(d)}),h.on("end",function(){f.end()}),h.on("error",function(d){f.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,f){return this.extraStreamInfo[h]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},p.exports=u},{}],29:[function(s,p,g){var u=s("../utils"),h=s("./ConvertWorker"),f=s("./GenericWorker"),d=s("../base64"),v=s("../support"),z=s("../external"),_=null;if(v.nodestream)try{_=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function T(y,j){return new z.Promise(function(A,C){var M=[],B=y._internalType,H=y._outputType,U=y._mimeType;y.on("data",function(F,X){M.push(F),j&&j(X)}).on("error",function(F){M=[],C(F)}).on("end",function(){try{var F=(function(X,ce,I){switch(X){case"blob":return u.newBlob(u.transformTo("arraybuffer",ce),I);case"base64":return d.encode(ce);default:return u.transformTo(X,ce)}})(H,(function(X,ce){var I,pe=0,_e=null,D=0;for(I=0;I<ce.length;I++)D+=ce[I].length;switch(X){case"string":return ce.join("");case"array":return Array.prototype.concat.apply([],ce);case"uint8array":for(_e=new Uint8Array(D),I=0;I<ce.length;I++)_e.set(ce[I],pe),pe+=ce[I].length;return _e;case"nodebuffer":return Buffer.concat(ce);default:throw new Error("concat : unsupported type '"+X+"'")}})(B,M),U);A(F)}catch(X){C(X)}M=[]}).resume()})}function S(y,j,A){var C=j;switch(j){case"blob":case"arraybuffer":C="uint8array";break;case"base64":C="string"}try{this._internalType=C,this._outputType=j,this._mimeType=A,u.checkSupport(C),this._worker=y.pipe(new h(C)),y.lock()}catch(M){this._worker=new f("error"),this._worker.error(M)}}S.prototype={accumulate:function(y){return T(this,y)},on:function(y,j){var A=this;return y==="data"?this._worker.on(y,function(C){j.call(A,C.data,C.meta)}):this._worker.on(y,function(){u.delay(j,arguments,A)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(y){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},y)}},p.exports=S},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,p,g){if(g.base64=!0,g.array=!0,g.string=!0,g.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",g.nodebuffer=typeof Buffer<"u",g.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")g.blob=!1;else{var u=new ArrayBuffer(0);try{g.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(u),g.blob=h.getBlob("application/zip").size===0}catch{g.blob=!1}}}try{g.nodestream=!!s("readable-stream").Readable}catch{g.nodestream=!1}},{"readable-stream":16}],31:[function(s,p,g){for(var u=s("./utils"),h=s("./support"),f=s("./nodejsUtils"),d=s("./stream/GenericWorker"),v=new Array(256),z=0;z<256;z++)v[z]=252<=z?6:248<=z?5:240<=z?4:224<=z?3:192<=z?2:1;v[254]=v[254]=1;function _(){d.call(this,"utf-8 decode"),this.leftOver=null}function T(){d.call(this,"utf-8 encode")}g.utf8encode=function(S){return h.nodebuffer?f.newBufferFrom(S,"utf-8"):(function(y){var j,A,C,M,B,H=y.length,U=0;for(M=0;M<H;M++)(64512&(A=y.charCodeAt(M)))==55296&&M+1<H&&(64512&(C=y.charCodeAt(M+1)))==56320&&(A=65536+(A-55296<<10)+(C-56320),M++),U+=A<128?1:A<2048?2:A<65536?3:4;for(j=h.uint8array?new Uint8Array(U):new Array(U),M=B=0;B<U;M++)(64512&(A=y.charCodeAt(M)))==55296&&M+1<H&&(64512&(C=y.charCodeAt(M+1)))==56320&&(A=65536+(A-55296<<10)+(C-56320),M++),A<128?j[B++]=A:(A<2048?j[B++]=192|A>>>6:(A<65536?j[B++]=224|A>>>12:(j[B++]=240|A>>>18,j[B++]=128|A>>>12&63),j[B++]=128|A>>>6&63),j[B++]=128|63&A);return j})(S)},g.utf8decode=function(S){return h.nodebuffer?u.transformTo("nodebuffer",S).toString("utf-8"):(function(y){var j,A,C,M,B=y.length,H=new Array(2*B);for(j=A=0;j<B;)if((C=y[j++])<128)H[A++]=C;else if(4<(M=v[C]))H[A++]=65533,j+=M-1;else{for(C&=M===2?31:M===3?15:7;1<M&&j<B;)C=C<<6|63&y[j++],M--;1<M?H[A++]=65533:C<65536?H[A++]=C:(C-=65536,H[A++]=55296|C>>10&1023,H[A++]=56320|1023&C)}return H.length!==A&&(H.subarray?H=H.subarray(0,A):H.length=A),u.applyFromCharCode(H)})(S=u.transformTo(h.uint8array?"uint8array":"array",S))},u.inherits(_,d),_.prototype.processChunk=function(S){var y=u.transformTo(h.uint8array?"uint8array":"array",S.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var j=y;(y=new Uint8Array(j.length+this.leftOver.length)).set(this.leftOver,0),y.set(j,this.leftOver.length)}else y=this.leftOver.concat(y);this.leftOver=null}var A=(function(M,B){var H;for((B=B||M.length)>M.length&&(B=M.length),H=B-1;0<=H&&(192&M[H])==128;)H--;return H<0||H===0?B:H+v[M[H]]>B?H:B})(y),C=y;A!==y.length&&(h.uint8array?(C=y.subarray(0,A),this.leftOver=y.subarray(A,y.length)):(C=y.slice(0,A),this.leftOver=y.slice(A,y.length))),this.push({data:g.utf8decode(C),meta:S.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:g.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},g.Utf8DecodeWorker=_,u.inherits(T,d),T.prototype.processChunk=function(S){this.push({data:g.utf8encode(S.data),meta:S.meta})},g.Utf8EncodeWorker=T},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,p,g){var u=s("./support"),h=s("./base64"),f=s("./nodejsUtils"),d=s("./external");function v(j){return j}function z(j,A){for(var C=0;C<j.length;++C)A[C]=255&j.charCodeAt(C);return A}s("setimmediate"),g.newBlob=function(j,A){g.checkSupport("blob");try{return new Blob([j],{type:A})}catch{try{var C=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return C.append(j),C.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(j,A,C){var M=[],B=0,H=j.length;if(H<=C)return String.fromCharCode.apply(null,j);for(;B<H;)A==="array"||A==="nodebuffer"?M.push(String.fromCharCode.apply(null,j.slice(B,Math.min(B+C,H)))):M.push(String.fromCharCode.apply(null,j.subarray(B,Math.min(B+C,H)))),B+=C;return M.join("")},stringifyByChar:function(j){for(var A="",C=0;C<j.length;C++)A+=String.fromCharCode(j[C]);return A},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function T(j){var A=65536,C=g.getTypeOf(j),M=!0;if(C==="uint8array"?M=_.applyCanBeUsed.uint8array:C==="nodebuffer"&&(M=_.applyCanBeUsed.nodebuffer),M)for(;1<A;)try{return _.stringifyByChunk(j,C,A)}catch{A=Math.floor(A/2)}return _.stringifyByChar(j)}function S(j,A){for(var C=0;C<j.length;C++)A[C]=j[C];return A}g.applyFromCharCode=T;var y={};y.string={string:v,array:function(j){return z(j,new Array(j.length))},arraybuffer:function(j){return y.string.uint8array(j).buffer},uint8array:function(j){return z(j,new Uint8Array(j.length))},nodebuffer:function(j){return z(j,f.allocBuffer(j.length))}},y.array={string:T,array:v,arraybuffer:function(j){return new Uint8Array(j).buffer},uint8array:function(j){return new Uint8Array(j)},nodebuffer:function(j){return f.newBufferFrom(j)}},y.arraybuffer={string:function(j){return T(new Uint8Array(j))},array:function(j){return S(new Uint8Array(j),new Array(j.byteLength))},arraybuffer:v,uint8array:function(j){return new Uint8Array(j)},nodebuffer:function(j){return f.newBufferFrom(new Uint8Array(j))}},y.uint8array={string:T,array:function(j){return S(j,new Array(j.length))},arraybuffer:function(j){return j.buffer},uint8array:v,nodebuffer:function(j){return f.newBufferFrom(j)}},y.nodebuffer={string:T,array:function(j){return S(j,new Array(j.length))},arraybuffer:function(j){return y.nodebuffer.uint8array(j).buffer},uint8array:function(j){return S(j,new Uint8Array(j.length))},nodebuffer:v},g.transformTo=function(j,A){if(A=A||"",!j)return A;g.checkSupport(j);var C=g.getTypeOf(A);return y[C][j](A)},g.resolve=function(j){for(var A=j.split("/"),C=[],M=0;M<A.length;M++){var B=A[M];B==="."||B===""&&M!==0&&M!==A.length-1||(B===".."?C.pop():C.push(B))}return C.join("/")},g.getTypeOf=function(j){return typeof j=="string"?"string":Object.prototype.toString.call(j)==="[object Array]"?"array":u.nodebuffer&&f.isBuffer(j)?"nodebuffer":u.uint8array&&j instanceof Uint8Array?"uint8array":u.arraybuffer&&j instanceof ArrayBuffer?"arraybuffer":void 0},g.checkSupport=function(j){if(!u[j.toLowerCase()])throw new Error(j+" is not supported by this platform")},g.MAX_VALUE_16BITS=65535,g.MAX_VALUE_32BITS=-1,g.pretty=function(j){var A,C,M="";for(C=0;C<(j||"").length;C++)M+="\\x"+((A=j.charCodeAt(C))<16?"0":"")+A.toString(16).toUpperCase();return M},g.delay=function(j,A,C){setImmediate(function(){j.apply(C||null,A||[])})},g.inherits=function(j,A){function C(){}C.prototype=A.prototype,j.prototype=new C},g.extend=function(){var j,A,C={};for(j=0;j<arguments.length;j++)for(A in arguments[j])Object.prototype.hasOwnProperty.call(arguments[j],A)&&C[A]===void 0&&(C[A]=arguments[j][A]);return C},g.prepareContent=function(j,A,C,M,B){return d.Promise.resolve(A).then(function(H){return u.blob&&(H instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(H))!==-1)&&typeof FileReader<"u"?new d.Promise(function(U,F){var X=new FileReader;X.onload=function(ce){U(ce.target.result)},X.onerror=function(ce){F(ce.target.error)},X.readAsArrayBuffer(H)}):H}).then(function(H){var U=g.getTypeOf(H);return U?(U==="arraybuffer"?H=g.transformTo("uint8array",H):U==="string"&&(B?H=h.decode(H):C&&M!==!0&&(H=(function(F){return z(F,u.uint8array?new Uint8Array(F.length):new Array(F.length))})(H))),H):d.Promise.reject(new Error("Can't read the data of '"+j+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,p,g){var u=s("./reader/readerFor"),h=s("./utils"),f=s("./signature"),d=s("./zipEntry"),v=s("./support");function z(_){this.files=[],this.loadOptions=_}z.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var T=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(T)+", expected "+h.pretty(_)+")")}},isSignature:function(_,T){var S=this.reader.index;this.reader.setIndex(_);var y=this.reader.readString(4)===T;return this.reader.setIndex(S),y},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),T=v.uint8array?"uint8array":"array",S=h.transformTo(T,_);this.zipComment=this.loadOptions.decodeFileName(S)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,T,S,y=this.zip64EndOfCentralSize-44;0<y;)_=this.reader.readInt(2),T=this.reader.readInt(4),S=this.reader.readData(T),this.zip64ExtensibleData[_]={id:_,length:T,value:S}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,T;for(_=0;_<this.files.length;_++)T=this.files[_],this.reader.setIndex(T.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),T.readLocalPart(this.reader),T.handleUTF8(),T.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(_=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var T=_;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var S=this.centralDirOffset+this.centralDirSize;this.zip64&&(S+=20,S+=12+this.zip64EndOfCentralSize);var y=T-S;if(0<y)this.isSignature(T,f.CENTRAL_FILE_HEADER)||(this.reader.zero=y);else if(y<0)throw new Error("Corrupted zip: missing "+Math.abs(y)+" bytes.")},prepareReader:function(_){this.reader=u(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},p.exports=z},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,p,g){var u=s("./reader/readerFor"),h=s("./utils"),f=s("./compressedObject"),d=s("./crc32"),v=s("./utf8"),z=s("./compressions"),_=s("./support");function T(S,y){this.options=S,this.loadOptions=y}T.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(S){var y,j;if(S.skip(22),this.fileNameLength=S.readInt(2),j=S.readInt(2),this.fileName=S.readData(this.fileNameLength),S.skip(j),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((y=(function(A){for(var C in z)if(Object.prototype.hasOwnProperty.call(z,C)&&z[C].magic===A)return z[C];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,y,S.readData(this.compressedSize))},readCentralPart:function(S){this.versionMadeBy=S.readInt(2),S.skip(2),this.bitFlag=S.readInt(2),this.compressionMethod=S.readString(2),this.date=S.readDate(),this.crc32=S.readInt(4),this.compressedSize=S.readInt(4),this.uncompressedSize=S.readInt(4);var y=S.readInt(2);if(this.extraFieldsLength=S.readInt(2),this.fileCommentLength=S.readInt(2),this.diskNumberStart=S.readInt(2),this.internalFileAttributes=S.readInt(2),this.externalFileAttributes=S.readInt(4),this.localHeaderOffset=S.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");S.skip(y),this.readExtraFields(S),this.parseZIP64ExtraField(S),this.fileComment=S.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var S=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),S==0&&(this.dosPermissions=63&this.externalFileAttributes),S==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var S=u(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=S.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=S.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=S.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=S.readInt(4))}},readExtraFields:function(S){var y,j,A,C=S.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});S.index+4<C;)y=S.readInt(2),j=S.readInt(2),A=S.readData(j),this.extraFields[y]={id:y,length:j,value:A};S.setIndex(C)},handleUTF8:function(){var S=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=v.utf8decode(this.fileName),this.fileCommentStr=v.utf8decode(this.fileComment);else{var y=this.findExtraFieldUnicodePath();if(y!==null)this.fileNameStr=y;else{var j=h.transformTo(S,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(j)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var C=h.transformTo(S,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(C)}}},findExtraFieldUnicodePath:function(){var S=this.extraFields[28789];if(S){var y=u(S.value);return y.readInt(1)!==1||d(this.fileName)!==y.readInt(4)?null:v.utf8decode(y.readData(S.length-5))}return null},findExtraFieldUnicodeComment:function(){var S=this.extraFields[25461];if(S){var y=u(S.value);return y.readInt(1)!==1||d(this.fileComment)!==y.readInt(4)?null:v.utf8decode(y.readData(S.length-5))}return null}},p.exports=T},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,p,g){function u(y,j,A){this.name=y,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=j,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var h=s("./stream/StreamHelper"),f=s("./stream/DataWorker"),d=s("./utf8"),v=s("./compressedObject"),z=s("./stream/GenericWorker");u.prototype={internalStream:function(y){var j=null,A="string";try{if(!y)throw new Error("No output type specified.");var C=(A=y.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),j=this._decompressWorker();var M=!this._dataBinary;M&&!C&&(j=j.pipe(new d.Utf8EncodeWorker)),!M&&C&&(j=j.pipe(new d.Utf8DecodeWorker))}catch(B){(j=new z("error")).error(B)}return new h(j,A,"")},async:function(y,j){return this.internalStream(y).accumulate(j)},nodeStream:function(y,j){return this.internalStream(y||"nodebuffer").toNodejsStream(j)},_compressWorker:function(y,j){if(this._data instanceof v&&this._data.compression.magic===y.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new d.Utf8EncodeWorker)),v.createWorkerFrom(A,y,j)},_decompressWorker:function(){return this._data instanceof v?this._data.getContentWorker():this._data instanceof z?this._data:new f(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],T=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},S=0;S<_.length;S++)u.prototype[_[S]]=T;p.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,p,g){(function(u){var h,f,d=u.MutationObserver||u.WebKitMutationObserver;if(d){var v=0,z=new d(y),_=u.document.createTextNode("");z.observe(_,{characterData:!0}),h=function(){_.data=v=++v%2}}else if(u.setImmediate||u.MessageChannel===void 0)h="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var j=u.document.createElement("script");j.onreadystatechange=function(){y(),j.onreadystatechange=null,j.parentNode.removeChild(j),j=null},u.document.documentElement.appendChild(j)}:function(){setTimeout(y,0)};else{var T=new u.MessageChannel;T.port1.onmessage=y,h=function(){T.port2.postMessage(0)}}var S=[];function y(){var j,A;f=!0;for(var C=S.length;C;){for(A=S,S=[],j=-1;++j<C;)A[j]();C=S.length}f=!1}p.exports=function(j){S.push(j)!==1||f||h()}}).call(this,typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,p,g){var u=s("immediate");function h(){}var f={},d=["REJECTED"],v=["FULFILLED"],z=["PENDING"];function _(C){if(typeof C!="function")throw new TypeError("resolver must be a function");this.state=z,this.queue=[],this.outcome=void 0,C!==h&&j(this,C)}function T(C,M,B){this.promise=C,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}function S(C,M,B){u(function(){var H;try{H=M(B)}catch(U){return f.reject(C,U)}H===C?f.reject(C,new TypeError("Cannot resolve promise with itself")):f.resolve(C,H)})}function y(C){var M=C&&C.then;if(C&&(typeof C=="object"||typeof C=="function")&&typeof M=="function")return function(){M.apply(C,arguments)}}function j(C,M){var B=!1;function H(X){B||(B=!0,f.reject(C,X))}function U(X){B||(B=!0,f.resolve(C,X))}var F=A(function(){M(U,H)});F.status==="error"&&H(F.value)}function A(C,M){var B={};try{B.value=C(M),B.status="success"}catch(H){B.status="error",B.value=H}return B}(p.exports=_).prototype.finally=function(C){if(typeof C!="function")return this;var M=this.constructor;return this.then(function(B){return M.resolve(C()).then(function(){return B})},function(B){return M.resolve(C()).then(function(){throw B})})},_.prototype.catch=function(C){return this.then(null,C)},_.prototype.then=function(C,M){if(typeof C!="function"&&this.state===v||typeof M!="function"&&this.state===d)return this;var B=new this.constructor(h);return this.state!==z?S(B,this.state===v?C:M,this.outcome):this.queue.push(new T(B,C,M)),B},T.prototype.callFulfilled=function(C){f.resolve(this.promise,C)},T.prototype.otherCallFulfilled=function(C){S(this.promise,this.onFulfilled,C)},T.prototype.callRejected=function(C){f.reject(this.promise,C)},T.prototype.otherCallRejected=function(C){S(this.promise,this.onRejected,C)},f.resolve=function(C,M){var B=A(y,M);if(B.status==="error")return f.reject(C,B.value);var H=B.value;if(H)j(C,H);else{C.state=v,C.outcome=M;for(var U=-1,F=C.queue.length;++U<F;)C.queue[U].callFulfilled(M)}return C},f.reject=function(C,M){C.state=d,C.outcome=M;for(var B=-1,H=C.queue.length;++B<H;)C.queue[B].callRejected(M);return C},_.resolve=function(C){return C instanceof this?C:f.resolve(new this(h),C)},_.reject=function(C){var M=new this(h);return f.reject(M,C)},_.all=function(C){var M=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=C.length,H=!1;if(!B)return this.resolve([]);for(var U=new Array(B),F=0,X=-1,ce=new this(h);++X<B;)I(C[X],X);return ce;function I(pe,_e){M.resolve(pe).then(function(D){U[_e]=D,++F!==B||H||(H=!0,f.resolve(ce,U))},function(D){H||(H=!0,f.reject(ce,D))})}},_.race=function(C){var M=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=C.length,H=!1;if(!B)return this.resolve([]);for(var U=-1,F=new this(h);++U<B;)X=C[U],M.resolve(X).then(function(ce){H||(H=!0,f.resolve(F,ce))},function(ce){H||(H=!0,f.reject(F,ce))});var X;return F}},{immediate:36}],38:[function(s,p,g){var u={};(0,s("./lib/utils/common").assign)(u,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),p.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,p,g){var u=s("./zlib/deflate"),h=s("./utils/common"),f=s("./utils/strings"),d=s("./zlib/messages"),v=s("./zlib/zstream"),z=Object.prototype.toString,_=0,T=-1,S=0,y=8;function j(C){if(!(this instanceof j))return new j(C);this.options=h.assign({level:T,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:S,to:""},C||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var B=u.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(B!==_)throw new Error(d[B]);if(M.header&&u.deflateSetHeader(this.strm,M.header),M.dictionary){var H;if(H=typeof M.dictionary=="string"?f.string2buf(M.dictionary):z.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(B=u.deflateSetDictionary(this.strm,H))!==_)throw new Error(d[B]);this._dict_set=!0}}function A(C,M){var B=new j(M);if(B.push(C,!0),B.err)throw B.msg||d[B.err];return B.result}j.prototype.push=function(C,M){var B,H,U=this.strm,F=this.options.chunkSize;if(this.ended)return!1;H=M===~~M?M:M===!0?4:0,typeof C=="string"?U.input=f.string2buf(C):z.call(C)==="[object ArrayBuffer]"?U.input=new Uint8Array(C):U.input=C,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new h.Buf8(F),U.next_out=0,U.avail_out=F),(B=u.deflate(U,H))!==1&&B!==_)return this.onEnd(B),!(this.ended=!0);U.avail_out!==0&&(U.avail_in!==0||H!==4&&H!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(h.shrinkBuf(U.output,U.next_out))):this.onData(h.shrinkBuf(U.output,U.next_out)))}while((0<U.avail_in||U.avail_out===0)&&B!==1);return H===4?(B=u.deflateEnd(this.strm),this.onEnd(B),this.ended=!0,B===_):H!==2||(this.onEnd(_),!(U.avail_out=0))},j.prototype.onData=function(C){this.chunks.push(C)},j.prototype.onEnd=function(C){C===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=C,this.msg=this.strm.msg},g.Deflate=j,g.deflate=A,g.deflateRaw=function(C,M){return(M=M||{}).raw=!0,A(C,M)},g.gzip=function(C,M){return(M=M||{}).gzip=!0,A(C,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,p,g){var u=s("./zlib/inflate"),h=s("./utils/common"),f=s("./utils/strings"),d=s("./zlib/constants"),v=s("./zlib/messages"),z=s("./zlib/zstream"),_=s("./zlib/gzheader"),T=Object.prototype.toString;function S(j){if(!(this instanceof S))return new S(j);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},j||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||j&&j.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new z,this.strm.avail_out=0;var C=u.inflateInit2(this.strm,A.windowBits);if(C!==d.Z_OK)throw new Error(v[C]);this.header=new _,u.inflateGetHeader(this.strm,this.header)}function y(j,A){var C=new S(A);if(C.push(j,!0),C.err)throw C.msg||v[C.err];return C.result}S.prototype.push=function(j,A){var C,M,B,H,U,F,X=this.strm,ce=this.options.chunkSize,I=this.options.dictionary,pe=!1;if(this.ended)return!1;M=A===~~A?A:A===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof j=="string"?X.input=f.binstring2buf(j):T.call(j)==="[object ArrayBuffer]"?X.input=new Uint8Array(j):X.input=j,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new h.Buf8(ce),X.next_out=0,X.avail_out=ce),(C=u.inflate(X,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&I&&(F=typeof I=="string"?f.string2buf(I):T.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,C=u.inflateSetDictionary(this.strm,F)),C===d.Z_BUF_ERROR&&pe===!0&&(C=d.Z_OK,pe=!1),C!==d.Z_STREAM_END&&C!==d.Z_OK)return this.onEnd(C),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&C!==d.Z_STREAM_END&&(X.avail_in!==0||M!==d.Z_FINISH&&M!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(B=f.utf8border(X.output,X.next_out),H=X.next_out-B,U=f.buf2string(X.output,B),X.next_out=H,X.avail_out=ce-H,H&&h.arraySet(X.output,X.output,B,H,0),this.onData(U)):this.onData(h.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pe=!0)}while((0<X.avail_in||X.avail_out===0)&&C!==d.Z_STREAM_END);return C===d.Z_STREAM_END&&(M=d.Z_FINISH),M===d.Z_FINISH?(C=u.inflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===d.Z_OK):M!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(X.avail_out=0))},S.prototype.onData=function(j){this.chunks.push(j)},S.prototype.onEnd=function(j){j===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=j,this.msg=this.strm.msg},g.Inflate=S,g.inflate=y,g.inflateRaw=function(j,A){return(A=A||{}).raw=!0,y(j,A)},g.ungzip=y},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,p,g){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";g.assign=function(d){for(var v=Array.prototype.slice.call(arguments,1);v.length;){var z=v.shift();if(z){if(typeof z!="object")throw new TypeError(z+"must be non-object");for(var _ in z)z.hasOwnProperty(_)&&(d[_]=z[_])}}return d},g.shrinkBuf=function(d,v){return d.length===v?d:d.subarray?d.subarray(0,v):(d.length=v,d)};var h={arraySet:function(d,v,z,_,T){if(v.subarray&&d.subarray)d.set(v.subarray(z,z+_),T);else for(var S=0;S<_;S++)d[T+S]=v[z+S]},flattenChunks:function(d){var v,z,_,T,S,y;for(v=_=0,z=d.length;v<z;v++)_+=d[v].length;for(y=new Uint8Array(_),v=T=0,z=d.length;v<z;v++)S=d[v],y.set(S,T),T+=S.length;return y}},f={arraySet:function(d,v,z,_,T){for(var S=0;S<_;S++)d[T+S]=v[z+S]},flattenChunks:function(d){return[].concat.apply([],d)}};g.setTyped=function(d){d?(g.Buf8=Uint8Array,g.Buf16=Uint16Array,g.Buf32=Int32Array,g.assign(g,h)):(g.Buf8=Array,g.Buf16=Array,g.Buf32=Array,g.assign(g,f))},g.setTyped(u)},{}],42:[function(s,p,g){var u=s("./common"),h=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var d=new u.Buf8(256),v=0;v<256;v++)d[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;function z(_,T){if(T<65537&&(_.subarray&&f||!_.subarray&&h))return String.fromCharCode.apply(null,u.shrinkBuf(_,T));for(var S="",y=0;y<T;y++)S+=String.fromCharCode(_[y]);return S}d[254]=d[254]=1,g.string2buf=function(_){var T,S,y,j,A,C=_.length,M=0;for(j=0;j<C;j++)(64512&(S=_.charCodeAt(j)))==55296&&j+1<C&&(64512&(y=_.charCodeAt(j+1)))==56320&&(S=65536+(S-55296<<10)+(y-56320),j++),M+=S<128?1:S<2048?2:S<65536?3:4;for(T=new u.Buf8(M),j=A=0;A<M;j++)(64512&(S=_.charCodeAt(j)))==55296&&j+1<C&&(64512&(y=_.charCodeAt(j+1)))==56320&&(S=65536+(S-55296<<10)+(y-56320),j++),S<128?T[A++]=S:(S<2048?T[A++]=192|S>>>6:(S<65536?T[A++]=224|S>>>12:(T[A++]=240|S>>>18,T[A++]=128|S>>>12&63),T[A++]=128|S>>>6&63),T[A++]=128|63&S);return T},g.buf2binstring=function(_){return z(_,_.length)},g.binstring2buf=function(_){for(var T=new u.Buf8(_.length),S=0,y=T.length;S<y;S++)T[S]=_.charCodeAt(S);return T},g.buf2string=function(_,T){var S,y,j,A,C=T||_.length,M=new Array(2*C);for(S=y=0;S<C;)if((j=_[S++])<128)M[y++]=j;else if(4<(A=d[j]))M[y++]=65533,S+=A-1;else{for(j&=A===2?31:A===3?15:7;1<A&&S<C;)j=j<<6|63&_[S++],A--;1<A?M[y++]=65533:j<65536?M[y++]=j:(j-=65536,M[y++]=55296|j>>10&1023,M[y++]=56320|1023&j)}return z(M,y)},g.utf8border=function(_,T){var S;for((T=T||_.length)>_.length&&(T=_.length),S=T-1;0<=S&&(192&_[S])==128;)S--;return S<0||S===0?T:S+d[_[S]]>T?S:T}},{"./common":41}],43:[function(s,p,g){p.exports=function(u,h,f,d){for(var v=65535&u|0,z=u>>>16&65535|0,_=0;f!==0;){for(f-=_=2e3<f?2e3:f;z=z+(v=v+h[d++]|0)|0,--_;);v%=65521,z%=65521}return v|z<<16|0}},{}],44:[function(s,p,g){p.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,p,g){var u=(function(){for(var h,f=[],d=0;d<256;d++){h=d;for(var v=0;v<8;v++)h=1&h?3988292384^h>>>1:h>>>1;f[d]=h}return f})();p.exports=function(h,f,d,v){var z=u,_=v+d;h^=-1;for(var T=v;T<_;T++)h=h>>>8^z[255&(h^f[T])];return-1^h}},{}],46:[function(s,p,g){var u,h=s("../utils/common"),f=s("./trees"),d=s("./adler32"),v=s("./crc32"),z=s("./messages"),_=0,T=4,S=0,y=-2,j=-1,A=4,C=2,M=8,B=9,H=286,U=30,F=19,X=2*H+1,ce=15,I=3,pe=258,_e=pe+I+1,D=42,ee=113,x=1,ae=2,Z=3,G=4;function me(m,oe){return m.msg=z[oe],oe}function le(m){return(m<<1)-(4<m?9:0)}function ye(m){for(var oe=m.length;0<=--oe;)m[oe]=0}function N(m){var oe=m.state,W=oe.pending;W>m.avail_out&&(W=m.avail_out),W!==0&&(h.arraySet(m.output,oe.pending_buf,oe.pending_out,W,m.next_out),m.next_out+=W,oe.pending_out+=W,m.total_out+=W,m.avail_out-=W,oe.pending-=W,oe.pending===0&&(oe.pending_out=0))}function E(m,oe){f._tr_flush_block(m,0<=m.block_start?m.block_start:-1,m.strstart-m.block_start,oe),m.block_start=m.strstart,N(m.strm)}function te(m,oe){m.pending_buf[m.pending++]=oe}function P(m,oe){m.pending_buf[m.pending++]=oe>>>8&255,m.pending_buf[m.pending++]=255&oe}function re(m,oe){var W,O,k=m.max_chain_length,q=m.strstart,ue=m.prev_length,de=m.nice_match,Q=m.strstart>m.w_size-_e?m.strstart-(m.w_size-_e):0,ge=m.window,be=m.w_mask,ve=m.prev,je=m.strstart+pe,Ve=ge[q+ue-1],Oe=ge[q+ue];m.prev_length>=m.good_match&&(k>>=2),de>m.lookahead&&(de=m.lookahead);do if(ge[(W=oe)+ue]===Oe&&ge[W+ue-1]===Ve&&ge[W]===ge[q]&&ge[++W]===ge[q+1]){q+=2,W++;do;while(ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&ge[++q]===ge[++W]&&q<je);if(O=pe-(je-q),q=je-pe,ue<O){if(m.match_start=oe,de<=(ue=O))break;Ve=ge[q+ue-1],Oe=ge[q+ue]}}while((oe=ve[oe&be])>Q&&--k!=0);return ue<=m.lookahead?ue:m.lookahead}function Se(m){var oe,W,O,k,q,ue,de,Q,ge,be,ve=m.w_size;do{if(k=m.window_size-m.lookahead-m.strstart,m.strstart>=ve+(ve-_e)){for(h.arraySet(m.window,m.window,ve,ve,0),m.match_start-=ve,m.strstart-=ve,m.block_start-=ve,oe=W=m.hash_size;O=m.head[--oe],m.head[oe]=ve<=O?O-ve:0,--W;);for(oe=W=ve;O=m.prev[--oe],m.prev[oe]=ve<=O?O-ve:0,--W;);k+=ve}if(m.strm.avail_in===0)break;if(ue=m.strm,de=m.window,Q=m.strstart+m.lookahead,ge=k,be=void 0,be=ue.avail_in,ge<be&&(be=ge),W=be===0?0:(ue.avail_in-=be,h.arraySet(de,ue.input,ue.next_in,be,Q),ue.state.wrap===1?ue.adler=d(ue.adler,de,be,Q):ue.state.wrap===2&&(ue.adler=v(ue.adler,de,be,Q)),ue.next_in+=be,ue.total_in+=be,be),m.lookahead+=W,m.lookahead+m.insert>=I)for(q=m.strstart-m.insert,m.ins_h=m.window[q],m.ins_h=(m.ins_h<<m.hash_shift^m.window[q+1])&m.hash_mask;m.insert&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[q+I-1])&m.hash_mask,m.prev[q&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=q,q++,m.insert--,!(m.lookahead+m.insert<I)););}while(m.lookahead<_e&&m.strm.avail_in!==0)}function Ae(m,oe){for(var W,O;;){if(m.lookahead<_e){if(Se(m),m.lookahead<_e&&oe===_)return x;if(m.lookahead===0)break}if(W=0,m.lookahead>=I&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+I-1])&m.hash_mask,W=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),W!==0&&m.strstart-W<=m.w_size-_e&&(m.match_length=re(m,W)),m.match_length>=I)if(O=f._tr_tally(m,m.strstart-m.match_start,m.match_length-I),m.lookahead-=m.match_length,m.match_length<=m.max_lazy_match&&m.lookahead>=I){for(m.match_length--;m.strstart++,m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+I-1])&m.hash_mask,W=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart,--m.match_length!=0;);m.strstart++}else m.strstart+=m.match_length,m.match_length=0,m.ins_h=m.window[m.strstart],m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+1])&m.hash_mask;else O=f._tr_tally(m,0,m.window[m.strstart]),m.lookahead--,m.strstart++;if(O&&(E(m,!1),m.strm.avail_out===0))return x}return m.insert=m.strstart<I-1?m.strstart:I-1,oe===T?(E(m,!0),m.strm.avail_out===0?Z:G):m.last_lit&&(E(m,!1),m.strm.avail_out===0)?x:ae}function he(m,oe){for(var W,O,k;;){if(m.lookahead<_e){if(Se(m),m.lookahead<_e&&oe===_)return x;if(m.lookahead===0)break}if(W=0,m.lookahead>=I&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+I-1])&m.hash_mask,W=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),m.prev_length=m.match_length,m.prev_match=m.match_start,m.match_length=I-1,W!==0&&m.prev_length<m.max_lazy_match&&m.strstart-W<=m.w_size-_e&&(m.match_length=re(m,W),m.match_length<=5&&(m.strategy===1||m.match_length===I&&4096<m.strstart-m.match_start)&&(m.match_length=I-1)),m.prev_length>=I&&m.match_length<=m.prev_length){for(k=m.strstart+m.lookahead-I,O=f._tr_tally(m,m.strstart-1-m.prev_match,m.prev_length-I),m.lookahead-=m.prev_length-1,m.prev_length-=2;++m.strstart<=k&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+I-1])&m.hash_mask,W=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),--m.prev_length!=0;);if(m.match_available=0,m.match_length=I-1,m.strstart++,O&&(E(m,!1),m.strm.avail_out===0))return x}else if(m.match_available){if((O=f._tr_tally(m,0,m.window[m.strstart-1]))&&E(m,!1),m.strstart++,m.lookahead--,m.strm.avail_out===0)return x}else m.match_available=1,m.strstart++,m.lookahead--}return m.match_available&&(O=f._tr_tally(m,0,m.window[m.strstart-1]),m.match_available=0),m.insert=m.strstart<I-1?m.strstart:I-1,oe===T?(E(m,!0),m.strm.avail_out===0?Z:G):m.last_lit&&(E(m,!1),m.strm.avail_out===0)?x:ae}function Te(m,oe,W,O,k){this.good_length=m,this.max_lazy=oe,this.nice_length=W,this.max_chain=O,this.func=k}function tt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*X),this.dyn_dtree=new h.Buf16(2*(2*U+1)),this.bl_tree=new h.Buf16(2*(2*F+1)),ye(this.dyn_ltree),ye(this.dyn_dtree),ye(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(ce+1),this.heap=new h.Buf16(2*H+1),ye(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*H+1),ye(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ie(m){var oe;return m&&m.state?(m.total_in=m.total_out=0,m.data_type=C,(oe=m.state).pending=0,oe.pending_out=0,oe.wrap<0&&(oe.wrap=-oe.wrap),oe.status=oe.wrap?D:ee,m.adler=oe.wrap===2?0:1,oe.last_flush=_,f._tr_init(oe),S):me(m,y)}function Tt(m){var oe=Ie(m);return oe===S&&(function(W){W.window_size=2*W.w_size,ye(W.head),W.max_lazy_match=u[W.level].max_lazy,W.good_match=u[W.level].good_length,W.nice_match=u[W.level].nice_length,W.max_chain_length=u[W.level].max_chain,W.strstart=0,W.block_start=0,W.lookahead=0,W.insert=0,W.match_length=W.prev_length=I-1,W.match_available=0,W.ins_h=0})(m.state),oe}function Ct(m,oe,W,O,k,q){if(!m)return y;var ue=1;if(oe===j&&(oe=6),O<0?(ue=0,O=-O):15<O&&(ue=2,O-=16),k<1||B<k||W!==M||O<8||15<O||oe<0||9<oe||q<0||A<q)return me(m,y);O===8&&(O=9);var de=new tt;return(m.state=de).strm=m,de.wrap=ue,de.gzhead=null,de.w_bits=O,de.w_size=1<<de.w_bits,de.w_mask=de.w_size-1,de.hash_bits=k+7,de.hash_size=1<<de.hash_bits,de.hash_mask=de.hash_size-1,de.hash_shift=~~((de.hash_bits+I-1)/I),de.window=new h.Buf8(2*de.w_size),de.head=new h.Buf16(de.hash_size),de.prev=new h.Buf16(de.w_size),de.lit_bufsize=1<<k+6,de.pending_buf_size=4*de.lit_bufsize,de.pending_buf=new h.Buf8(de.pending_buf_size),de.d_buf=1*de.lit_bufsize,de.l_buf=3*de.lit_bufsize,de.level=oe,de.strategy=q,de.method=W,Tt(m)}u=[new Te(0,0,0,0,function(m,oe){var W=65535;for(W>m.pending_buf_size-5&&(W=m.pending_buf_size-5);;){if(m.lookahead<=1){if(Se(m),m.lookahead===0&&oe===_)return x;if(m.lookahead===0)break}m.strstart+=m.lookahead,m.lookahead=0;var O=m.block_start+W;if((m.strstart===0||m.strstart>=O)&&(m.lookahead=m.strstart-O,m.strstart=O,E(m,!1),m.strm.avail_out===0)||m.strstart-m.block_start>=m.w_size-_e&&(E(m,!1),m.strm.avail_out===0))return x}return m.insert=0,oe===T?(E(m,!0),m.strm.avail_out===0?Z:G):(m.strstart>m.block_start&&(E(m,!1),m.strm.avail_out),x)}),new Te(4,4,8,4,Ae),new Te(4,5,16,8,Ae),new Te(4,6,32,32,Ae),new Te(4,4,16,16,he),new Te(8,16,32,32,he),new Te(8,16,128,128,he),new Te(8,32,128,256,he),new Te(32,128,258,1024,he),new Te(32,258,258,4096,he)],g.deflateInit=function(m,oe){return Ct(m,oe,M,15,8,0)},g.deflateInit2=Ct,g.deflateReset=Tt,g.deflateResetKeep=Ie,g.deflateSetHeader=function(m,oe){return m&&m.state?m.state.wrap!==2?y:(m.state.gzhead=oe,S):y},g.deflate=function(m,oe){var W,O,k,q;if(!m||!m.state||5<oe||oe<0)return m?me(m,y):y;if(O=m.state,!m.output||!m.input&&m.avail_in!==0||O.status===666&&oe!==T)return me(m,m.avail_out===0?-5:y);if(O.strm=m,W=O.last_flush,O.last_flush=oe,O.status===D)if(O.wrap===2)m.adler=0,te(O,31),te(O,139),te(O,8),O.gzhead?(te(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),te(O,255&O.gzhead.time),te(O,O.gzhead.time>>8&255),te(O,O.gzhead.time>>16&255),te(O,O.gzhead.time>>24&255),te(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),te(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(te(O,255&O.gzhead.extra.length),te(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(m.adler=v(m.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(te(O,0),te(O,0),te(O,0),te(O,0),te(O,0),te(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),te(O,3),O.status=ee);else{var ue=M+(O.w_bits-8<<4)<<8;ue|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ue|=32),ue+=31-ue%31,O.status=ee,P(O,ue),O.strstart!==0&&(P(O,m.adler>>>16),P(O,65535&m.adler)),m.adler=1}if(O.status===69)if(O.gzhead.extra){for(k=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),N(m),k=O.pending,O.pending!==O.pending_buf_size));)te(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){k=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),N(m),k=O.pending,O.pending===O.pending_buf_size)){q=1;break}q=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,te(O,q)}while(q!==0);O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),q===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){k=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),N(m),k=O.pending,O.pending===O.pending_buf_size)){q=1;break}q=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,te(O,q)}while(q!==0);O.gzhead.hcrc&&O.pending>k&&(m.adler=v(m.adler,O.pending_buf,O.pending-k,k)),q===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&N(m),O.pending+2<=O.pending_buf_size&&(te(O,255&m.adler),te(O,m.adler>>8&255),m.adler=0,O.status=ee)):O.status=ee),O.pending!==0){if(N(m),m.avail_out===0)return O.last_flush=-1,S}else if(m.avail_in===0&&le(oe)<=le(W)&&oe!==T)return me(m,-5);if(O.status===666&&m.avail_in!==0)return me(m,-5);if(m.avail_in!==0||O.lookahead!==0||oe!==_&&O.status!==666){var de=O.strategy===2?(function(Q,ge){for(var be;;){if(Q.lookahead===0&&(Se(Q),Q.lookahead===0)){if(ge===_)return x;break}if(Q.match_length=0,be=f._tr_tally(Q,0,Q.window[Q.strstart]),Q.lookahead--,Q.strstart++,be&&(E(Q,!1),Q.strm.avail_out===0))return x}return Q.insert=0,ge===T?(E(Q,!0),Q.strm.avail_out===0?Z:G):Q.last_lit&&(E(Q,!1),Q.strm.avail_out===0)?x:ae})(O,oe):O.strategy===3?(function(Q,ge){for(var be,ve,je,Ve,Oe=Q.window;;){if(Q.lookahead<=pe){if(Se(Q),Q.lookahead<=pe&&ge===_)return x;if(Q.lookahead===0)break}if(Q.match_length=0,Q.lookahead>=I&&0<Q.strstart&&(ve=Oe[je=Q.strstart-1])===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]){Ve=Q.strstart+pe;do;while(ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&ve===Oe[++je]&&je<Ve);Q.match_length=pe-(Ve-je),Q.match_length>Q.lookahead&&(Q.match_length=Q.lookahead)}if(Q.match_length>=I?(be=f._tr_tally(Q,1,Q.match_length-I),Q.lookahead-=Q.match_length,Q.strstart+=Q.match_length,Q.match_length=0):(be=f._tr_tally(Q,0,Q.window[Q.strstart]),Q.lookahead--,Q.strstart++),be&&(E(Q,!1),Q.strm.avail_out===0))return x}return Q.insert=0,ge===T?(E(Q,!0),Q.strm.avail_out===0?Z:G):Q.last_lit&&(E(Q,!1),Q.strm.avail_out===0)?x:ae})(O,oe):u[O.level].func(O,oe);if(de!==Z&&de!==G||(O.status=666),de===x||de===Z)return m.avail_out===0&&(O.last_flush=-1),S;if(de===ae&&(oe===1?f._tr_align(O):oe!==5&&(f._tr_stored_block(O,0,0,!1),oe===3&&(ye(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),N(m),m.avail_out===0))return O.last_flush=-1,S}return oe!==T?S:O.wrap<=0?1:(O.wrap===2?(te(O,255&m.adler),te(O,m.adler>>8&255),te(O,m.adler>>16&255),te(O,m.adler>>24&255),te(O,255&m.total_in),te(O,m.total_in>>8&255),te(O,m.total_in>>16&255),te(O,m.total_in>>24&255)):(P(O,m.adler>>>16),P(O,65535&m.adler)),N(m),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?S:1)},g.deflateEnd=function(m){var oe;return m&&m.state?(oe=m.state.status)!==D&&oe!==69&&oe!==73&&oe!==91&&oe!==103&&oe!==ee&&oe!==666?me(m,y):(m.state=null,oe===ee?me(m,-3):S):y},g.deflateSetDictionary=function(m,oe){var W,O,k,q,ue,de,Q,ge,be=oe.length;if(!m||!m.state||(q=(W=m.state).wrap)===2||q===1&&W.status!==D||W.lookahead)return y;for(q===1&&(m.adler=d(m.adler,oe,be,0)),W.wrap=0,be>=W.w_size&&(q===0&&(ye(W.head),W.strstart=0,W.block_start=0,W.insert=0),ge=new h.Buf8(W.w_size),h.arraySet(ge,oe,be-W.w_size,W.w_size,0),oe=ge,be=W.w_size),ue=m.avail_in,de=m.next_in,Q=m.input,m.avail_in=be,m.next_in=0,m.input=oe,Se(W);W.lookahead>=I;){for(O=W.strstart,k=W.lookahead-(I-1);W.ins_h=(W.ins_h<<W.hash_shift^W.window[O+I-1])&W.hash_mask,W.prev[O&W.w_mask]=W.head[W.ins_h],W.head[W.ins_h]=O,O++,--k;);W.strstart=O,W.lookahead=I-1,Se(W)}return W.strstart+=W.lookahead,W.block_start=W.strstart,W.insert=W.lookahead,W.lookahead=0,W.match_length=W.prev_length=I-1,W.match_available=0,m.next_in=de,m.input=Q,m.avail_in=ue,W.wrap=q,S},g.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,p,g){p.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,p,g){p.exports=function(u,h){var f,d,v,z,_,T,S,y,j,A,C,M,B,H,U,F,X,ce,I,pe,_e,D,ee,x,ae;f=u.state,d=u.next_in,x=u.input,v=d+(u.avail_in-5),z=u.next_out,ae=u.output,_=z-(h-u.avail_out),T=z+(u.avail_out-257),S=f.dmax,y=f.wsize,j=f.whave,A=f.wnext,C=f.window,M=f.hold,B=f.bits,H=f.lencode,U=f.distcode,F=(1<<f.lenbits)-1,X=(1<<f.distbits)-1;e:do{B<15&&(M+=x[d++]<<B,B+=8,M+=x[d++]<<B,B+=8),ce=H[M&F];t:for(;;){if(M>>>=I=ce>>>24,B-=I,(I=ce>>>16&255)===0)ae[z++]=65535&ce;else{if(!(16&I)){if((64&I)==0){ce=H[(65535&ce)+(M&(1<<I)-1)];continue t}if(32&I){f.mode=12;break e}u.msg="invalid literal/length code",f.mode=30;break e}pe=65535&ce,(I&=15)&&(B<I&&(M+=x[d++]<<B,B+=8),pe+=M&(1<<I)-1,M>>>=I,B-=I),B<15&&(M+=x[d++]<<B,B+=8,M+=x[d++]<<B,B+=8),ce=U[M&X];n:for(;;){if(M>>>=I=ce>>>24,B-=I,!(16&(I=ce>>>16&255))){if((64&I)==0){ce=U[(65535&ce)+(M&(1<<I)-1)];continue n}u.msg="invalid distance code",f.mode=30;break e}if(_e=65535&ce,B<(I&=15)&&(M+=x[d++]<<B,(B+=8)<I&&(M+=x[d++]<<B,B+=8)),S<(_e+=M&(1<<I)-1)){u.msg="invalid distance too far back",f.mode=30;break e}if(M>>>=I,B-=I,(I=z-_)<_e){if(j<(I=_e-I)&&f.sane){u.msg="invalid distance too far back",f.mode=30;break e}if(ee=C,(D=0)===A){if(D+=y-I,I<pe){for(pe-=I;ae[z++]=C[D++],--I;);D=z-_e,ee=ae}}else if(A<I){if(D+=y+A-I,(I-=A)<pe){for(pe-=I;ae[z++]=C[D++],--I;);if(D=0,A<pe){for(pe-=I=A;ae[z++]=C[D++],--I;);D=z-_e,ee=ae}}}else if(D+=A-I,I<pe){for(pe-=I;ae[z++]=C[D++],--I;);D=z-_e,ee=ae}for(;2<pe;)ae[z++]=ee[D++],ae[z++]=ee[D++],ae[z++]=ee[D++],pe-=3;pe&&(ae[z++]=ee[D++],1<pe&&(ae[z++]=ee[D++]))}else{for(D=z-_e;ae[z++]=ae[D++],ae[z++]=ae[D++],ae[z++]=ae[D++],2<(pe-=3););pe&&(ae[z++]=ae[D++],1<pe&&(ae[z++]=ae[D++]))}break}}break}}while(d<v&&z<T);d-=pe=B>>3,M&=(1<<(B-=pe<<3))-1,u.next_in=d,u.next_out=z,u.avail_in=d<v?v-d+5:5-(d-v),u.avail_out=z<T?T-z+257:257-(z-T),f.hold=M,f.bits=B}},{}],49:[function(s,p,g){var u=s("../utils/common"),h=s("./adler32"),f=s("./crc32"),d=s("./inffast"),v=s("./inftrees"),z=1,_=2,T=0,S=-2,y=1,j=852,A=592;function C(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function B(D){var ee;return D&&D.state?(ee=D.state,D.total_in=D.total_out=ee.total=0,D.msg="",ee.wrap&&(D.adler=1&ee.wrap),ee.mode=y,ee.last=0,ee.havedict=0,ee.dmax=32768,ee.head=null,ee.hold=0,ee.bits=0,ee.lencode=ee.lendyn=new u.Buf32(j),ee.distcode=ee.distdyn=new u.Buf32(A),ee.sane=1,ee.back=-1,T):S}function H(D){var ee;return D&&D.state?((ee=D.state).wsize=0,ee.whave=0,ee.wnext=0,B(D)):S}function U(D,ee){var x,ae;return D&&D.state?(ae=D.state,ee<0?(x=0,ee=-ee):(x=1+(ee>>4),ee<48&&(ee&=15)),ee&&(ee<8||15<ee)?S:(ae.window!==null&&ae.wbits!==ee&&(ae.window=null),ae.wrap=x,ae.wbits=ee,H(D))):S}function F(D,ee){var x,ae;return D?(ae=new M,(D.state=ae).window=null,(x=U(D,ee))!==T&&(D.state=null),x):S}var X,ce,I=!0;function pe(D){if(I){var ee;for(X=new u.Buf32(512),ce=new u.Buf32(32),ee=0;ee<144;)D.lens[ee++]=8;for(;ee<256;)D.lens[ee++]=9;for(;ee<280;)D.lens[ee++]=7;for(;ee<288;)D.lens[ee++]=8;for(v(z,D.lens,0,288,X,0,D.work,{bits:9}),ee=0;ee<32;)D.lens[ee++]=5;v(_,D.lens,0,32,ce,0,D.work,{bits:5}),I=!1}D.lencode=X,D.lenbits=9,D.distcode=ce,D.distbits=5}function _e(D,ee,x,ae){var Z,G=D.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new u.Buf8(G.wsize)),ae>=G.wsize?(u.arraySet(G.window,ee,x-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(ae<(Z=G.wsize-G.wnext)&&(Z=ae),u.arraySet(G.window,ee,x-ae,Z,G.wnext),(ae-=Z)?(u.arraySet(G.window,ee,x-ae,ae,0),G.wnext=ae,G.whave=G.wsize):(G.wnext+=Z,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=Z))),0}g.inflateReset=H,g.inflateReset2=U,g.inflateResetKeep=B,g.inflateInit=function(D){return F(D,15)},g.inflateInit2=F,g.inflate=function(D,ee){var x,ae,Z,G,me,le,ye,N,E,te,P,re,Se,Ae,he,Te,tt,Ie,Tt,Ct,m,oe,W,O,k=0,q=new u.Buf8(4),ue=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return S;(x=D.state).mode===12&&(x.mode=13),me=D.next_out,Z=D.output,ye=D.avail_out,G=D.next_in,ae=D.input,le=D.avail_in,N=x.hold,E=x.bits,te=le,P=ye,oe=T;e:for(;;)switch(x.mode){case y:if(x.wrap===0){x.mode=13;break}for(;E<16;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(2&x.wrap&&N===35615){q[x.check=0]=255&N,q[1]=N>>>8&255,x.check=f(x.check,q,2,0),E=N=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&N)<<8)+(N>>8))%31){D.msg="incorrect header check",x.mode=30;break}if((15&N)!=8){D.msg="unknown compression method",x.mode=30;break}if(E-=4,m=8+(15&(N>>>=4)),x.wbits===0)x.wbits=m;else if(m>x.wbits){D.msg="invalid window size",x.mode=30;break}x.dmax=1<<m,D.adler=x.check=1,x.mode=512&N?10:12,E=N=0;break;case 2:for(;E<16;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(x.flags=N,(255&x.flags)!=8){D.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){D.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=N>>8&1),512&x.flags&&(q[0]=255&N,q[1]=N>>>8&255,x.check=f(x.check,q,2,0)),E=N=0,x.mode=3;case 3:for(;E<32;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.head&&(x.head.time=N),512&x.flags&&(q[0]=255&N,q[1]=N>>>8&255,q[2]=N>>>16&255,q[3]=N>>>24&255,x.check=f(x.check,q,4,0)),E=N=0,x.mode=4;case 4:for(;E<16;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.head&&(x.head.xflags=255&N,x.head.os=N>>8),512&x.flags&&(q[0]=255&N,q[1]=N>>>8&255,x.check=f(x.check,q,2,0)),E=N=0,x.mode=5;case 5:if(1024&x.flags){for(;E<16;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.length=N,x.head&&(x.head.extra_len=N),512&x.flags&&(q[0]=255&N,q[1]=N>>>8&255,x.check=f(x.check,q,2,0)),E=N=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(le<(re=x.length)&&(re=le),re&&(x.head&&(m=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),u.arraySet(x.head.extra,ae,G,re,m)),512&x.flags&&(x.check=f(x.check,ae,re,G)),le-=re,G+=re,x.length-=re),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(le===0)break e;for(re=0;m=ae[G+re++],x.head&&m&&x.length<65536&&(x.head.name+=String.fromCharCode(m)),m&&re<le;);if(512&x.flags&&(x.check=f(x.check,ae,re,G)),le-=re,G+=re,m)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(le===0)break e;for(re=0;m=ae[G+re++],x.head&&m&&x.length<65536&&(x.head.comment+=String.fromCharCode(m)),m&&re<le;);if(512&x.flags&&(x.check=f(x.check,ae,re,G)),le-=re,G+=re,m)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;E<16;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(N!==(65535&x.check)){D.msg="header crc mismatch",x.mode=30;break}E=N=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),D.adler=x.check=0,x.mode=12;break;case 10:for(;E<32;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}D.adler=x.check=C(N),E=N=0,x.mode=11;case 11:if(x.havedict===0)return D.next_out=me,D.avail_out=ye,D.next_in=G,D.avail_in=le,x.hold=N,x.bits=E,2;D.adler=x.check=1,x.mode=12;case 12:if(ee===5||ee===6)break e;case 13:if(x.last){N>>>=7&E,E-=7&E,x.mode=27;break}for(;E<3;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}switch(x.last=1&N,E-=1,3&(N>>>=1)){case 0:x.mode=14;break;case 1:if(pe(x),x.mode=20,ee!==6)break;N>>>=2,E-=2;break e;case 2:x.mode=17;break;case 3:D.msg="invalid block type",x.mode=30}N>>>=2,E-=2;break;case 14:for(N>>>=7&E,E-=7&E;E<32;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if((65535&N)!=(N>>>16^65535)){D.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&N,E=N=0,x.mode=15,ee===6)break e;case 15:x.mode=16;case 16:if(re=x.length){if(le<re&&(re=le),ye<re&&(re=ye),re===0)break e;u.arraySet(Z,ae,G,re,me),le-=re,G+=re,ye-=re,me+=re,x.length-=re;break}x.mode=12;break;case 17:for(;E<14;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(x.nlen=257+(31&N),N>>>=5,E-=5,x.ndist=1+(31&N),N>>>=5,E-=5,x.ncode=4+(15&N),N>>>=4,E-=4,286<x.nlen||30<x.ndist){D.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;E<3;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.lens[ue[x.have++]]=7&N,N>>>=3,E-=3}for(;x.have<19;)x.lens[ue[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,W={bits:x.lenbits},oe=v(0,x.lens,0,19,x.lencode,0,x.work,W),x.lenbits=W.bits,oe){D.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Te=(k=x.lencode[N&(1<<x.lenbits)-1])>>>16&255,tt=65535&k,!((he=k>>>24)<=E);){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(tt<16)N>>>=he,E-=he,x.lens[x.have++]=tt;else{if(tt===16){for(O=he+2;E<O;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(N>>>=he,E-=he,x.have===0){D.msg="invalid bit length repeat",x.mode=30;break}m=x.lens[x.have-1],re=3+(3&N),N>>>=2,E-=2}else if(tt===17){for(O=he+3;E<O;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}E-=he,m=0,re=3+(7&(N>>>=he)),N>>>=3,E-=3}else{for(O=he+7;E<O;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}E-=he,m=0,re=11+(127&(N>>>=he)),N>>>=7,E-=7}if(x.have+re>x.nlen+x.ndist){D.msg="invalid bit length repeat",x.mode=30;break}for(;re--;)x.lens[x.have++]=m}}if(x.mode===30)break;if(x.lens[256]===0){D.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,W={bits:x.lenbits},oe=v(z,x.lens,0,x.nlen,x.lencode,0,x.work,W),x.lenbits=W.bits,oe){D.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,W={bits:x.distbits},oe=v(_,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,W),x.distbits=W.bits,oe){D.msg="invalid distances set",x.mode=30;break}if(x.mode=20,ee===6)break e;case 20:x.mode=21;case 21:if(6<=le&&258<=ye){D.next_out=me,D.avail_out=ye,D.next_in=G,D.avail_in=le,x.hold=N,x.bits=E,d(D,P),me=D.next_out,Z=D.output,ye=D.avail_out,G=D.next_in,ae=D.input,le=D.avail_in,N=x.hold,E=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Te=(k=x.lencode[N&(1<<x.lenbits)-1])>>>16&255,tt=65535&k,!((he=k>>>24)<=E);){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(Te&&(240&Te)==0){for(Ie=he,Tt=Te,Ct=tt;Te=(k=x.lencode[Ct+((N&(1<<Ie+Tt)-1)>>Ie)])>>>16&255,tt=65535&k,!(Ie+(he=k>>>24)<=E);){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}N>>>=Ie,E-=Ie,x.back+=Ie}if(N>>>=he,E-=he,x.back+=he,x.length=tt,Te===0){x.mode=26;break}if(32&Te){x.back=-1,x.mode=12;break}if(64&Te){D.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Te,x.mode=22;case 22:if(x.extra){for(O=x.extra;E<O;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.length+=N&(1<<x.extra)-1,N>>>=x.extra,E-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Te=(k=x.distcode[N&(1<<x.distbits)-1])>>>16&255,tt=65535&k,!((he=k>>>24)<=E);){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if((240&Te)==0){for(Ie=he,Tt=Te,Ct=tt;Te=(k=x.distcode[Ct+((N&(1<<Ie+Tt)-1)>>Ie)])>>>16&255,tt=65535&k,!(Ie+(he=k>>>24)<=E);){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}N>>>=Ie,E-=Ie,x.back+=Ie}if(N>>>=he,E-=he,x.back+=he,64&Te){D.msg="invalid distance code",x.mode=30;break}x.offset=tt,x.extra=15&Te,x.mode=24;case 24:if(x.extra){for(O=x.extra;E<O;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}x.offset+=N&(1<<x.extra)-1,N>>>=x.extra,E-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){D.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ye===0)break e;if(re=P-ye,x.offset>re){if((re=x.offset-re)>x.whave&&x.sane){D.msg="invalid distance too far back",x.mode=30;break}Se=re>x.wnext?(re-=x.wnext,x.wsize-re):x.wnext-re,re>x.length&&(re=x.length),Ae=x.window}else Ae=Z,Se=me-x.offset,re=x.length;for(ye<re&&(re=ye),ye-=re,x.length-=re;Z[me++]=Ae[Se++],--re;);x.length===0&&(x.mode=21);break;case 26:if(ye===0)break e;Z[me++]=x.length,ye--,x.mode=21;break;case 27:if(x.wrap){for(;E<32;){if(le===0)break e;le--,N|=ae[G++]<<E,E+=8}if(P-=ye,D.total_out+=P,x.total+=P,P&&(D.adler=x.check=x.flags?f(x.check,Z,P,me-P):h(x.check,Z,P,me-P)),P=ye,(x.flags?N:C(N))!==x.check){D.msg="incorrect data check",x.mode=30;break}E=N=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;E<32;){if(le===0)break e;le--,N+=ae[G++]<<E,E+=8}if(N!==(4294967295&x.total)){D.msg="incorrect length check",x.mode=30;break}E=N=0}x.mode=29;case 29:oe=1;break e;case 30:oe=-3;break e;case 31:return-4;default:return S}return D.next_out=me,D.avail_out=ye,D.next_in=G,D.avail_in=le,x.hold=N,x.bits=E,(x.wsize||P!==D.avail_out&&x.mode<30&&(x.mode<27||ee!==4))&&_e(D,D.output,D.next_out,P-D.avail_out)?(x.mode=31,-4):(te-=D.avail_in,P-=D.avail_out,D.total_in+=te,D.total_out+=P,x.total+=P,x.wrap&&P&&(D.adler=x.check=x.flags?f(x.check,Z,P,D.next_out-P):h(x.check,Z,P,D.next_out-P)),D.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(te==0&&P===0||ee===4)&&oe===T&&(oe=-5),oe)},g.inflateEnd=function(D){if(!D||!D.state)return S;var ee=D.state;return ee.window&&(ee.window=null),D.state=null,T},g.inflateGetHeader=function(D,ee){var x;return D&&D.state?(2&(x=D.state).wrap)==0?S:((x.head=ee).done=!1,T):S},g.inflateSetDictionary=function(D,ee){var x,ae=ee.length;return D&&D.state?(x=D.state).wrap!==0&&x.mode!==11?S:x.mode===11&&h(1,ee,ae,0)!==x.check?-3:_e(D,ee,ae,ae)?(x.mode=31,-4):(x.havedict=1,T):S},g.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,p,g){var u=s("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],v=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];p.exports=function(z,_,T,S,y,j,A,C){var M,B,H,U,F,X,ce,I,pe,_e=C.bits,D=0,ee=0,x=0,ae=0,Z=0,G=0,me=0,le=0,ye=0,N=0,E=null,te=0,P=new u.Buf16(16),re=new u.Buf16(16),Se=null,Ae=0;for(D=0;D<=15;D++)P[D]=0;for(ee=0;ee<S;ee++)P[_[T+ee]]++;for(Z=_e,ae=15;1<=ae&&P[ae]===0;ae--);if(ae<Z&&(Z=ae),ae===0)return y[j++]=20971520,y[j++]=20971520,C.bits=1,0;for(x=1;x<ae&&P[x]===0;x++);for(Z<x&&(Z=x),D=le=1;D<=15;D++)if(le<<=1,(le-=P[D])<0)return-1;if(0<le&&(z===0||ae!==1))return-1;for(re[1]=0,D=1;D<15;D++)re[D+1]=re[D]+P[D];for(ee=0;ee<S;ee++)_[T+ee]!==0&&(A[re[_[T+ee]]++]=ee);if(X=z===0?(E=Se=A,19):z===1?(E=h,te-=257,Se=f,Ae-=257,256):(E=d,Se=v,-1),D=x,F=j,me=ee=N=0,H=-1,U=(ye=1<<(G=Z))-1,z===1&&852<ye||z===2&&592<ye)return 1;for(;;){for(ce=D-me,pe=A[ee]<X?(I=0,A[ee]):A[ee]>X?(I=Se[Ae+A[ee]],E[te+A[ee]]):(I=96,0),M=1<<D-me,x=B=1<<G;y[F+(N>>me)+(B-=M)]=ce<<24|I<<16|pe|0,B!==0;);for(M=1<<D-1;N&M;)M>>=1;if(M!==0?(N&=M-1,N+=M):N=0,ee++,--P[D]==0){if(D===ae)break;D=_[T+A[ee]]}if(Z<D&&(N&U)!==H){for(me===0&&(me=Z),F+=x,le=1<<(G=D-me);G+me<ae&&!((le-=P[G+me])<=0);)G++,le<<=1;if(ye+=1<<G,z===1&&852<ye||z===2&&592<ye)return 1;y[H=N&U]=Z<<24|G<<16|F-j|0}}return N!==0&&(y[F+N]=D-me<<24|64<<16|0),C.bits=Z,0}},{"../utils/common":41}],51:[function(s,p,g){p.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,p,g){var u=s("../utils/common"),h=0,f=1;function d(k){for(var q=k.length;0<=--q;)k[q]=0}var v=0,z=29,_=256,T=_+1+z,S=30,y=19,j=2*T+1,A=15,C=16,M=7,B=256,H=16,U=17,F=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_e=new Array(2*(T+2));d(_e);var D=new Array(2*S);d(D);var ee=new Array(512);d(ee);var x=new Array(256);d(x);var ae=new Array(z);d(ae);var Z,G,me,le=new Array(S);function ye(k,q,ue,de,Q){this.static_tree=k,this.extra_bits=q,this.extra_base=ue,this.elems=de,this.max_length=Q,this.has_stree=k&&k.length}function N(k,q){this.dyn_tree=k,this.max_code=0,this.stat_desc=q}function E(k){return k<256?ee[k]:ee[256+(k>>>7)]}function te(k,q){k.pending_buf[k.pending++]=255&q,k.pending_buf[k.pending++]=q>>>8&255}function P(k,q,ue){k.bi_valid>C-ue?(k.bi_buf|=q<<k.bi_valid&65535,te(k,k.bi_buf),k.bi_buf=q>>C-k.bi_valid,k.bi_valid+=ue-C):(k.bi_buf|=q<<k.bi_valid&65535,k.bi_valid+=ue)}function re(k,q,ue){P(k,ue[2*q],ue[2*q+1])}function Se(k,q){for(var ue=0;ue|=1&k,k>>>=1,ue<<=1,0<--q;);return ue>>>1}function Ae(k,q,ue){var de,Q,ge=new Array(A+1),be=0;for(de=1;de<=A;de++)ge[de]=be=be+ue[de-1]<<1;for(Q=0;Q<=q;Q++){var ve=k[2*Q+1];ve!==0&&(k[2*Q]=Se(ge[ve]++,ve))}}function he(k){var q;for(q=0;q<T;q++)k.dyn_ltree[2*q]=0;for(q=0;q<S;q++)k.dyn_dtree[2*q]=0;for(q=0;q<y;q++)k.bl_tree[2*q]=0;k.dyn_ltree[2*B]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function Te(k){8<k.bi_valid?te(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function tt(k,q,ue,de){var Q=2*q,ge=2*ue;return k[Q]<k[ge]||k[Q]===k[ge]&&de[q]<=de[ue]}function Ie(k,q,ue){for(var de=k.heap[ue],Q=ue<<1;Q<=k.heap_len&&(Q<k.heap_len&&tt(q,k.heap[Q+1],k.heap[Q],k.depth)&&Q++,!tt(q,de,k.heap[Q],k.depth));)k.heap[ue]=k.heap[Q],ue=Q,Q<<=1;k.heap[ue]=de}function Tt(k,q,ue){var de,Q,ge,be,ve=0;if(k.last_lit!==0)for(;de=k.pending_buf[k.d_buf+2*ve]<<8|k.pending_buf[k.d_buf+2*ve+1],Q=k.pending_buf[k.l_buf+ve],ve++,de===0?re(k,Q,q):(re(k,(ge=x[Q])+_+1,q),(be=X[ge])!==0&&P(k,Q-=ae[ge],be),re(k,ge=E(--de),ue),(be=ce[ge])!==0&&P(k,de-=le[ge],be)),ve<k.last_lit;);re(k,B,q)}function Ct(k,q){var ue,de,Q,ge=q.dyn_tree,be=q.stat_desc.static_tree,ve=q.stat_desc.has_stree,je=q.stat_desc.elems,Ve=-1;for(k.heap_len=0,k.heap_max=j,ue=0;ue<je;ue++)ge[2*ue]!==0?(k.heap[++k.heap_len]=Ve=ue,k.depth[ue]=0):ge[2*ue+1]=0;for(;k.heap_len<2;)ge[2*(Q=k.heap[++k.heap_len]=Ve<2?++Ve:0)]=1,k.depth[Q]=0,k.opt_len--,ve&&(k.static_len-=be[2*Q+1]);for(q.max_code=Ve,ue=k.heap_len>>1;1<=ue;ue--)Ie(k,ge,ue);for(Q=je;ue=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Ie(k,ge,1),de=k.heap[1],k.heap[--k.heap_max]=ue,k.heap[--k.heap_max]=de,ge[2*Q]=ge[2*ue]+ge[2*de],k.depth[Q]=(k.depth[ue]>=k.depth[de]?k.depth[ue]:k.depth[de])+1,ge[2*ue+1]=ge[2*de+1]=Q,k.heap[1]=Q++,Ie(k,ge,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(Oe,At){var Mn,Vt,la,We,pt,$t,at=At.dyn_tree,ul=At.max_code,Oi=At.stat_desc.static_tree,Ri=At.stat_desc.has_stree,ja=At.stat_desc.extra_bits,ia=At.stat_desc.extra_base,cn=At.stat_desc.max_length,Xt=0;for(We=0;We<=A;We++)Oe.bl_count[We]=0;for(at[2*Oe.heap[Oe.heap_max]+1]=0,Mn=Oe.heap_max+1;Mn<j;Mn++)cn<(We=at[2*at[2*(Vt=Oe.heap[Mn])+1]+1]+1)&&(We=cn,Xt++),at[2*Vt+1]=We,ul<Vt||(Oe.bl_count[We]++,pt=0,ia<=Vt&&(pt=ja[Vt-ia]),$t=at[2*Vt],Oe.opt_len+=$t*(We+pt),Ri&&(Oe.static_len+=$t*(Oi[2*Vt+1]+pt)));if(Xt!==0){do{for(We=cn-1;Oe.bl_count[We]===0;)We--;Oe.bl_count[We]--,Oe.bl_count[We+1]+=2,Oe.bl_count[cn]--,Xt-=2}while(0<Xt);for(We=cn;We!==0;We--)for(Vt=Oe.bl_count[We];Vt!==0;)ul<(la=Oe.heap[--Mn])||(at[2*la+1]!==We&&(Oe.opt_len+=(We-at[2*la+1])*at[2*la],at[2*la+1]=We),Vt--)}})(k,q),Ae(ge,Ve,k.bl_count)}function m(k,q,ue){var de,Q,ge=-1,be=q[1],ve=0,je=7,Ve=4;for(be===0&&(je=138,Ve=3),q[2*(ue+1)+1]=65535,de=0;de<=ue;de++)Q=be,be=q[2*(de+1)+1],++ve<je&&Q===be||(ve<Ve?k.bl_tree[2*Q]+=ve:Q!==0?(Q!==ge&&k.bl_tree[2*Q]++,k.bl_tree[2*H]++):ve<=10?k.bl_tree[2*U]++:k.bl_tree[2*F]++,ge=Q,Ve=(ve=0)===be?(je=138,3):Q===be?(je=6,3):(je=7,4))}function oe(k,q,ue){var de,Q,ge=-1,be=q[1],ve=0,je=7,Ve=4;for(be===0&&(je=138,Ve=3),de=0;de<=ue;de++)if(Q=be,be=q[2*(de+1)+1],!(++ve<je&&Q===be)){if(ve<Ve)for(;re(k,Q,k.bl_tree),--ve!=0;);else Q!==0?(Q!==ge&&(re(k,Q,k.bl_tree),ve--),re(k,H,k.bl_tree),P(k,ve-3,2)):ve<=10?(re(k,U,k.bl_tree),P(k,ve-3,3)):(re(k,F,k.bl_tree),P(k,ve-11,7));ge=Q,Ve=(ve=0)===be?(je=138,3):Q===be?(je=6,3):(je=7,4)}}d(le);var W=!1;function O(k,q,ue,de){P(k,(v<<1)+(de?1:0),3),(function(Q,ge,be,ve){Te(Q),te(Q,be),te(Q,~be),u.arraySet(Q.pending_buf,Q.window,ge,be,Q.pending),Q.pending+=be})(k,q,ue)}g._tr_init=function(k){W||((function(){var q,ue,de,Q,ge,be=new Array(A+1);for(Q=de=0;Q<z-1;Q++)for(ae[Q]=de,q=0;q<1<<X[Q];q++)x[de++]=Q;for(x[de-1]=Q,Q=ge=0;Q<16;Q++)for(le[Q]=ge,q=0;q<1<<ce[Q];q++)ee[ge++]=Q;for(ge>>=7;Q<S;Q++)for(le[Q]=ge<<7,q=0;q<1<<ce[Q]-7;q++)ee[256+ge++]=Q;for(ue=0;ue<=A;ue++)be[ue]=0;for(q=0;q<=143;)_e[2*q+1]=8,q++,be[8]++;for(;q<=255;)_e[2*q+1]=9,q++,be[9]++;for(;q<=279;)_e[2*q+1]=7,q++,be[7]++;for(;q<=287;)_e[2*q+1]=8,q++,be[8]++;for(Ae(_e,T+1,be),q=0;q<S;q++)D[2*q+1]=5,D[2*q]=Se(q,5);Z=new ye(_e,X,_+1,T,A),G=new ye(D,ce,0,S,A),me=new ye(new Array(0),I,0,y,M)})(),W=!0),k.l_desc=new N(k.dyn_ltree,Z),k.d_desc=new N(k.dyn_dtree,G),k.bl_desc=new N(k.bl_tree,me),k.bi_buf=0,k.bi_valid=0,he(k)},g._tr_stored_block=O,g._tr_flush_block=function(k,q,ue,de){var Q,ge,be=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(ve){var je,Ve=4093624447;for(je=0;je<=31;je++,Ve>>>=1)if(1&Ve&&ve.dyn_ltree[2*je]!==0)return h;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return f;for(je=32;je<_;je++)if(ve.dyn_ltree[2*je]!==0)return f;return h})(k)),Ct(k,k.l_desc),Ct(k,k.d_desc),be=(function(ve){var je;for(m(ve,ve.dyn_ltree,ve.l_desc.max_code),m(ve,ve.dyn_dtree,ve.d_desc.max_code),Ct(ve,ve.bl_desc),je=y-1;3<=je&&ve.bl_tree[2*pe[je]+1]===0;je--);return ve.opt_len+=3*(je+1)+5+5+4,je})(k),Q=k.opt_len+3+7>>>3,(ge=k.static_len+3+7>>>3)<=Q&&(Q=ge)):Q=ge=ue+5,ue+4<=Q&&q!==-1?O(k,q,ue,de):k.strategy===4||ge===Q?(P(k,2+(de?1:0),3),Tt(k,_e,D)):(P(k,4+(de?1:0),3),(function(ve,je,Ve,Oe){var At;for(P(ve,je-257,5),P(ve,Ve-1,5),P(ve,Oe-4,4),At=0;At<Oe;At++)P(ve,ve.bl_tree[2*pe[At]+1],3);oe(ve,ve.dyn_ltree,je-1),oe(ve,ve.dyn_dtree,Ve-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,be+1),Tt(k,k.dyn_ltree,k.dyn_dtree)),he(k),de&&Te(k)},g._tr_tally=function(k,q,ue){return k.pending_buf[k.d_buf+2*k.last_lit]=q>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&q,k.pending_buf[k.l_buf+k.last_lit]=255&ue,k.last_lit++,q===0?k.dyn_ltree[2*ue]++:(k.matches++,q--,k.dyn_ltree[2*(x[ue]+_+1)]++,k.dyn_dtree[2*E(q)]++),k.last_lit===k.lit_bufsize-1},g._tr_align=function(k){P(k,2,3),re(k,B,_e),(function(q){q.bi_valid===16?(te(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(s,p,g){p.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,p,g){(function(u){(function(h,f){if(!h.setImmediate){var d,v,z,_,T=1,S={},y=!1,j=h.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(h);A=A&&A.setTimeout?A:h,d={}.toString.call(h.process)==="[object process]"?function(H){process.nextTick(function(){M(H)})}:(function(){if(h.postMessage&&!h.importScripts){var H=!0,U=h.onmessage;return h.onmessage=function(){H=!1},h.postMessage("","*"),h.onmessage=U,H}})()?(_="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",B,!1):h.attachEvent("onmessage",B),function(H){h.postMessage(_+H,"*")}):h.MessageChannel?((z=new MessageChannel).port1.onmessage=function(H){M(H.data)},function(H){z.port2.postMessage(H)}):j&&"onreadystatechange"in j.createElement("script")?(v=j.documentElement,function(H){var U=j.createElement("script");U.onreadystatechange=function(){M(H),U.onreadystatechange=null,v.removeChild(U),U=null},v.appendChild(U)}):function(H){setTimeout(M,0,H)},A.setImmediate=function(H){typeof H!="function"&&(H=new Function(""+H));for(var U=new Array(arguments.length-1),F=0;F<U.length;F++)U[F]=arguments[F+1];var X={callback:H,args:U};return S[T]=X,d(T),T++},A.clearImmediate=C}function C(H){delete S[H]}function M(H){if(y)setTimeout(M,0,H);else{var U=S[H];if(U){y=!0;try{(function(F){var X=F.callback,ce=F.args;switch(ce.length){case 0:X();break;case 1:X(ce[0]);break;case 2:X(ce[0],ce[1]);break;case 3:X(ce[0],ce[1],ce[2]);break;default:X.apply(f,ce)}})(U)}finally{C(H),y=!1}}}}function B(H){H.source===h&&typeof H.data=="string"&&H.data.indexOf(_)===0&&M(+H.data.slice(_.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(cc)),cc.exports}var V0=G0();const $0=Dh(V0);var Ei={exports:{}},X0=Ei.exports,Oh;function Q0(){return Oh||(Oh=1,(function(o,b){(function(s,p){p()})(X0,function(){function s(v,z){return typeof z>"u"?z={autoBom:!1}:typeof z!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),z={autoBom:!z}),z.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(v.type)?new Blob(["\uFEFF",v],{type:v.type}):v}function p(v,z,_){var T=new XMLHttpRequest;T.open("GET",v),T.responseType="blob",T.onload=function(){d(T.response,z,_)},T.onerror=function(){console.error("could not download file")},T.send()}function g(v){var z=new XMLHttpRequest;z.open("HEAD",v,!1);try{z.send()}catch{}return 200<=z.status&&299>=z.status}function u(v){try{v.dispatchEvent(new MouseEvent("click"))}catch{var z=document.createEvent("MouseEvents");z.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),v.dispatchEvent(z)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ra=="object"&&ra.global===ra?ra:void 0,f=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(v,z,_){var T=h.URL||h.webkitURL,S=document.createElement("a");z=z||v.name||"download",S.download=z,S.rel="noopener",typeof v=="string"?(S.href=v,S.origin===location.origin?u(S):g(S.href)?p(v,z,_):u(S,S.target="_blank")):(S.href=T.createObjectURL(v),setTimeout(function(){T.revokeObjectURL(S.href)},4e4),setTimeout(function(){u(S)},0))}:"msSaveOrOpenBlob"in navigator?function(v,z,_){if(z=z||v.name||"download",typeof v!="string")navigator.msSaveOrOpenBlob(s(v,_),z);else if(g(v))p(v,z,_);else{var T=document.createElement("a");T.href=v,T.target="_blank",setTimeout(function(){u(T)})}}:function(v,z,_,T){if(T=T||open("","_blank"),T&&(T.document.title=T.document.body.innerText="downloading..."),typeof v=="string")return p(v,z,_);var S=v.type==="application/octet-stream",y=/constructor/i.test(h.HTMLElement)||h.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||S&&y||f)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var B=A.result;B=j?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),T?T.location.href=B:location=B,T=null},A.readAsDataURL(v)}else{var C=h.URL||h.webkitURL,M=C.createObjectURL(v);T?T.location=M:location.href=M,T=null,setTimeout(function(){C.revokeObjectURL(M)},4e4)}});h.saveAs=d.saveAs=d,o.exports=d})})(Ei)),Ei.exports}var K0=Q0();function J0(o){const b=["/* Design Tokens - Generated by Component Library Customizer */"],s=Zh([o.typography.fontFamily,o.typography.fontFamilyMono]);s&&b.push(`@import url('${s}');`,""),b.push("",":root {","  /* Light Theme Colors (default) */"),Object.entries(o.lightTheme).forEach(([h,f])=>{const d=h.replace(/([A-Z])/g,"-$1").toLowerCase();b.push(`  --color-${d}: ${f};`)}),b.push(""),b.push("  /* Typography */"),b.push(`  --font-family: ${o.typography.fontFamily};`),b.push(`  --font-family-mono: ${o.typography.fontFamilyMono};`),b.push(`  --font-size-xs: ${o.typography.fontSizeXs};`),b.push(`  --font-size-sm: ${o.typography.fontSizeSm};`),b.push(`  --font-size-md: ${o.typography.fontSizeMd};`),b.push(`  --font-size-lg: ${o.typography.fontSizeLg};`),b.push(`  --font-size-xl: ${o.typography.fontSizeXl};`),b.push(`  --font-weight-normal: ${o.typography.fontWeightNormal};`),b.push(`  --font-weight-medium: ${o.typography.fontWeightMedium};`),b.push(`  --font-weight-semibold: ${o.typography.fontWeightSemibold};`),b.push(`  --font-weight-bold: ${o.typography.fontWeightBold};`),b.push(`  --line-height-tight: ${o.typography.lineHeightTight};`),b.push(`  --line-height-normal: ${o.typography.lineHeightNormal};`),b.push(`  --line-height-relaxed: ${o.typography.lineHeightRelaxed};`),b.push(""),b.push("  /* Spacing */"),Object.entries(o.spacing).forEach(([h,f])=>{b.push(`  --spacing-${h}: ${f};`)}),b.push(""),b.push("  /* Border Radius */"),Object.entries(o.borderRadius).forEach(([h,f])=>{b.push(`  --radius-${h}: ${f};`)}),b.push(""),b.push("  /* Shadows */"),Object.entries(o.shadows).forEach(([h,f])=>{b.push(`  --shadow-${h}: ${f};`)}),b.push(""),b.push("  /* Transitions */"),Object.entries(o.transitions).forEach(([h,f])=>{b.push(`  --transition-${h}: ${f};`)}),b.push(""),b.push("  /* Effects */"),b.push(`  --focus-ring-width: ${o.effects.focusRingWidth};`),b.push(`  --focus-ring-offset: ${o.effects.focusRingOffset};`),b.push(`  --focus-ring-color: ${o.effects.focusRingColor};`),b.push(`  --shadow-color: ${o.effects.shadowColor};`);const p=`color-mix(in srgb, var(--color-text) ${Math.round(o.patterns.background.opacity*100)}%, transparent)`,g=`color-mix(in srgb, var(--color-text) ${Math.round(o.patterns.surface.opacity*100)}%, transparent)`,u=(h,f)=>h==="dots"?`radial-gradient(circle, ${f} 1px, transparent 1px)`:h==="grid"?`linear-gradient(${f} 1px, transparent 1px), linear-gradient(90deg, ${f} 1px, transparent 1px)`:h==="plus"?`linear-gradient(${f} 1px, transparent 1px), linear-gradient(90deg, ${f} 1px, transparent 1px), radial-gradient(circle, ${f} 1px, transparent 1px)`:"none";return b.push(""),b.push("  /* Patterns */"),b.push(`  --pattern-background-image: ${u(o.patterns.background.type,p)};`),b.push(`  --pattern-background-size: ${o.patterns.background.size}px ${o.patterns.background.size}px;`),b.push(`  --pattern-surface-image: ${u(o.patterns.surface.type,g)};`),b.push(`  --pattern-surface-size: ${o.patterns.surface.size}px ${o.patterns.surface.size}px;`),b.push(""),b.push("  /* Component Styles */"),Object.entries(o.components).forEach(([h,f])=>{Object.entries(f).forEach(([d,v])=>{const z=d.replace(/([A-Z])/g,"-$1").toLowerCase();if(d==="focusRingAlpha"){const _=Math.round(v*100);b.push(`  --${h}-focus-ring-color: color-mix(in srgb, var(--color-primary) ${_}%, transparent);`)}else if(d==="elevatedBorderWidth"){const _=o.components.card?.elevatedBorderEnabled;b.push(`  --card-elevated-border-width: ${_?v:"0px"};`)}else d==="elevatedBorderEnabled"||b.push(`  --${h}-${z}: ${v};`)})}),b.push("}"),b.push(""),b.push('[data-theme="dark"] {'),b.push("  /* Dark Theme Colors */"),Object.entries(o.darkTheme).forEach(([h,f])=>{const d=h.replace(/([A-Z])/g,"-$1").toLowerCase();b.push(`  --color-${d}: ${f};`)}),b.push("}"),b.join(`
`)}function W0(){return`/* Minimal CSS Reset */

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-family);
  line-height: var(--line-height-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`}function F0(){return JSON.stringify({name:"custom-component-library",version:"1.0.0",description:"Custom React component library generated by Component Library Customizer",main:"index.ts",types:"index.ts",author:"Your Name",license:"MIT",keywords:["react","components","design-system","ui-library","typescript"],scripts:{build:"tsc","type-check":"tsc --noEmit"},peerDependencies:{react:"^18.0.0 || ^19.0.0","react-dom":"^18.0.0 || ^19.0.0"},dependencies:{"lucide-react":"^0.263.0"},devDependencies:{typescript:"^5.0.0","@types/react":"^18.0.0 || ^19.0.0","@types/react-dom":"^18.0.0 || ^19.0.0"},repository:{type:"git",url:"https://github.com/therealkishorekumar/custom-component-library"},bugs:{url:"https://github.com/therealkishorekumar/custom-component-library/issues"}},null,2)}function I0(o){const b=o.map(s=>`- **${s}**: A short description of the ${s} component.`).join(`
`);return`# Custom Component Library

A React component library with custom design tokens.

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage (local)

\`\`\`tsx
import { ${o.join(", ")} } from './index';
import './styles/tokens.css';
import './styles/reset.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Input label="Name" placeholder="Enter name..." />
      <Badge variant="success">Active</Badge>
    </div>
  );
}
\`\`\`

## Usage (as a package)

\`\`\`tsx
import { ${o.join(", ")} } from 'custom-component-library';
import 'custom-component-library/styles/tokens.css';
import 'custom-component-library/styles/reset.css';
\`\`\`

## Components

${b}

## Customization

Edit \`styles/tokens.css\` to customize the design tokens.

---
Generated by Component Library Customizer
`}function P0(o){return`// Component Library Index
${o.map(b=>`export * from './components/${b}';`).join(`
`)}
`}const ey=Object.assign({"../components/library/Accordion/Accordion.tsx":Hb,"../components/library/Alert/Alert.tsx":Lb,"../components/library/Avatar/Avatar.tsx":Ub,"../components/library/Badge/Badge.tsx":qb,"../components/library/Breadcrumb/Breadcrumb.tsx":Yb,"../components/library/Button/Button.tsx":Zb,"../components/library/Card/Card.tsx":Gb,"../components/library/Checkbox/Checkbox.tsx":Vb,"../components/library/Dropdown/Dropdown.tsx":$b,"../components/library/Input/Input.tsx":Xb,"../components/library/Modal/Modal.tsx":Qb,"../components/library/Navbar/Navbar.tsx":Kb,"../components/library/Progress/Progress.tsx":Jb,"../components/library/Radio/Radio.tsx":Wb,"../components/library/Select/Select.tsx":Fb,"../components/library/Sidebar/Sidebar.tsx":Ib,"../components/library/Table/Table.tsx":Pb,"../components/library/Tabs/Tabs.tsx":e0,"../components/library/Toggle/Toggle.tsx":t0,"../components/library/Tooltip/Tooltip.tsx":n0}),ty=Object.assign({"../components/library/Accordion/Accordion.css":a0,"../components/library/Alert/Alert.css":r0,"../components/library/Avatar/Avatar.css":l0,"../components/library/Badge/Badge.css":i0,"../components/library/Breadcrumb/Breadcrumb.css":o0,"../components/library/Button/Button.css":s0,"../components/library/Card/Card.css":c0,"../components/library/Checkbox/Checkbox.css":u0,"../components/library/Dropdown/Dropdown.css":d0,"../components/library/Input/Input.css":f0,"../components/library/Modal/Modal.css":h0,"../components/library/Navbar/Navbar.css":p0,"../components/library/Progress/Progress.css":m0,"../components/library/Radio/Radio.css":g0,"../components/library/Select/Select.css":v0,"../components/library/Sidebar/Sidebar.css":b0,"../components/library/Table/Table.css":y0,"../components/library/Tabs/Tabs.css":x0,"../components/library/Toggle/Toggle.css":_0,"../components/library/Tooltip/Tooltip.css":S0}),ny=Object.assign({"../components/library/Accordion/index.ts":w0,"../components/library/Alert/index.ts":j0,"../components/library/Avatar/index.ts":z0,"../components/library/Badge/index.ts":N0,"../components/library/Breadcrumb/index.ts":T0,"../components/library/Button/index.ts":C0,"../components/library/Card/index.ts":A0,"../components/library/Checkbox/index.ts":k0,"../components/library/Dropdown/index.ts":E0,"../components/library/Input/index.ts":M0,"../components/library/Modal/index.ts":O0,"../components/library/Navbar/index.ts":R0,"../components/library/Progress/index.ts":D0,"../components/library/Radio/index.ts":B0,"../components/library/Select/index.ts":H0,"../components/library/Sidebar/index.ts":L0,"../components/library/Table/index.ts":U0,"../components/library/Tabs/index.ts":q0,"../components/library/Toggle/index.ts":Y0,"../components/library/Tooltip/index.ts":Z0}),ki=Object.fromEntries(Object.entries(ey).map(([o,b])=>{const s=o.split("/"),p=s[s.length-2],g=o.replace(".tsx",".css"),u=o.replace(`${p}.tsx`,"index.ts");return[p,{tsx:b,css:ty[g]||"",index:ny[u]||""}]}));async function ay(o){try{if(!ki||Object.keys(ki).length===0)throw new Error("No components found to export. Please check the component library structure.");const b=new $0,s=Object.keys(ki);if(s.length===0)throw new Error("Component list is empty. Cannot export empty library.");const p=b.folder("component-library/components"),g=b.folder("component-library/styles"),u=b.folder("component-library");if(!p||!g||!u)throw new Error("Failed to create zip folder structure.");try{const f=J0(o),d=W0();if(!f)throw new Error("Failed to generate tokens CSS.");g.file("tokens.css",f),g.file("reset.css",d)}catch(f){throw new Error(`Failed to generate CSS files: ${f instanceof Error?f.message:"Unknown error"}`)}for(const[f,d]of Object.entries(ki)){if(!f||!d){console.warn(`Skipping invalid component: ${f}`);continue}if(!d.tsx){console.warn(`Component ${f} is missing TSX file, skipping.`);continue}try{const v=p.folder(f);if(!v)throw new Error(`Failed to create folder for component: ${f}`);v.file(`${f}.tsx`,d.tsx),v.file(`${f}.css`,d.css||"/* No styles */"),v.file("index.ts",d.index||`export * from './${f}';
`)}catch(v){console.error(`Failed to add component ${f}:`,v)}}try{u.file("index.ts",P0(s)),u.file("package.json",F0()),u.file("README.md",I0(s))}catch(f){throw new Error(`Failed to generate root files: ${f instanceof Error?f.message:"Unknown error"}`)}u.file("tsconfig.json",JSON.stringify({compilerOptions:{target:"ES2020",lib:["ES2020","DOM","DOM.Iterable"],module:"ESNext",moduleResolution:"bundler",jsx:"react-jsx",strict:!0,noEmit:!0,esModuleInterop:!0,skipLibCheck:!0,declaration:!0},include:["**/*.ts","**/*.tsx"]},null,2));const h=await Promise.race([b.generateAsync({type:"blob"}),new Promise((f,d)=>setTimeout(()=>d(new Error("Export timed out after 30 seconds")),3e4))]);K0.saveAs(h,"component-library.zip")}catch(b){const s=b instanceof Error?b.message:"Unknown error occurred";throw console.error("Export failed:",s,b),new Error(`Failed to export library: ${s}`)}}const Rh={default:qe,nature:{...qe,lightTheme:{...qe.lightTheme,primary:"#059669",primaryHover:"#047857",secondary:"#78716c",secondaryHover:"#57534e",success:"#10b981",background:"#fafaf9",surface:"#f5f5f4",text:"#1c1917",textMuted:"#78716c",border:"#e7e5e4"},darkTheme:{...qe.darkTheme,primary:"#10b981",primaryHover:"#059669",secondary:"#a8a29e",secondaryHover:"#78716c",success:"#22c55e"}},ocean:{...qe,lightTheme:{...qe.lightTheme,primary:"#0891b2",primaryHover:"#0e7490",secondary:"#64748b",secondaryHover:"#475569",info:"#22d3ee",background:"#f0f9ff",surface:"#e0f2fe",text:"#0c4a6e",textMuted:"#0369a1",border:"#bae6fd"},darkTheme:{...qe.darkTheme,primary:"#22d3ee",primaryHover:"#06b6d4",info:"#0891b2"}},sunset:{...qe,lightTheme:{...qe.lightTheme,primary:"#f97316",primaryHover:"#ea580c",secondary:"#a8a29e",secondaryHover:"#78716c",warning:"#fbbf24",error:"#dc2626",background:"#fffbeb",surface:"#fef3c7",text:"#78350f",textMuted:"#92400e",border:"#fcd34d"},darkTheme:{...qe.darkTheme,primary:"#fb923c",primaryHover:"#f97316",warning:"#fde047"}},neon:{...qe,lightTheme:{...qe.lightTheme,primary:"#ffd400",primaryHover:"#ffc300",secondary:"#ff7a00",secondaryHover:"#ff9f1a",success:"#00cc44",warning:"#ff9f1a",error:"#dd0000",info:"#ff7a00",background:"#fff5b8",surface:"#fffef5",text:"#0a0a0a",textMuted:"#3a3a3a",textOnAccent:"#0a0a0a",border:"#0a0a0a"},darkTheme:{...qe.darkTheme,primary:"#ffd400",primaryHover:"#ffe066",secondary:"#ff9933",secondaryHover:"#ffaa55",success:"#88ff77",warning:"#ffcc33",error:"#ff5555",info:"#ff9933",background:"#0b0b0b",surface:"#1a1a1a",text:"#ffffff",textMuted:"#cccccc",textOnAccent:"#0b0b0b",border:"#ffffff"},borderRadius:{...qe.borderRadius,control:"2px",surface:"4px",overlay:"6px",full:"999px"},shadows:{none:"none",control:"3px 3px 0 0 var(--shadow-color)",surface:"5px 5px 0 0 var(--shadow-color)",overlay:"7px 7px 0 0 var(--shadow-color)",float:"9px 9px 0 0 var(--shadow-color)"},effects:{...qe.effects,focusRingWidth:"3px",focusRingOffset:"2px",focusRingColor:"#ffd400",shadowColor:"#0a0a0a"},components:{...qe.components,button:{...qe.components.button,borderWidth:"3px",innerShadow:"4px 4px 0 0 var(--color-text)"},input:{...qe.components.input,borderWidth:"3px",focusRingWidth:"3px",focusRingAlpha:.6},checkbox:{...qe.components.checkbox,borderWidth:"3px",size:"20px"},radio:{...qe.components.radio,borderWidth:"3px",size:"20px",dotSize:"10px"},toggle:{...qe.components.toggle,borderWidth:"0px",trackHeight:"26px",thumbSize:"20px",thumbBorderWidth:"2px",trackShadow:"5px 5px 0 0 var(--shadow-color)",thumbShadow:"0 0 0 0 var(--shadow-color)"},card:{...qe.components.card,borderWidth:"3px",headerBorderWidth:"3px",elevatedBorderEnabled:!0,elevatedBorderWidth:"3px"},alert:{...qe.components.alert,borderWidth:"3px"},modal:{...qe.components.modal,borderWidth:"3px"},badge:{...qe.components.badge,borderWidth:"2px"},tabs:{...qe.components.tabs,indicatorHeight:"3px"},progress:{...qe.components.progress,trackHeight:"10px"}}},modernRetro:{...qe,lightTheme:{...qe.lightTheme,primary:"#b89830",primaryHover:"#a38420",secondary:"#2d4a56",secondaryHover:"#1e3742",success:"#2d6647",warning:"#c77a1f",error:"#a02d2b",info:"#476991",background:"#f4f1ea",surface:"#faf7f0",text:"#1f1d1a",textMuted:"#4a4540",textOnAccent:"#ffffff",border:"#2b2722"},darkTheme:{...qe.darkTheme,primary:"#ddc466",primaryHover:"#d0b658",secondary:"#7a9faa",secondaryHover:"#6b8d98",success:"#5fa67a",warning:"#edb55c",error:"#d66663",info:"#8bb3ca",background:"#141210",surface:"#1f1d1a",text:"#f2eee6",textMuted:"#c7c1b8",textOnAccent:"#141210",border:"#f2eee6"},borderRadius:{...qe.borderRadius,control:"4px",surface:"8px",overlay:"12px",full:"999px"},effects:{...qe.effects,focusRingColor:"#c2a542",shadowColor:"rgb(0 0 0 / 0.35)"},shadows:{none:"none",control:"0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)",surface:"0 6px 16px -6px color-mix(in srgb, var(--shadow-color) 45%, transparent)",overlay:"0 14px 28px -10px color-mix(in srgb, var(--shadow-color) 45%, transparent)",float:"0 24px 48px -14px color-mix(in srgb, var(--shadow-color) 45%, transparent)"}}};function ry(){const{tokens:o,loadPreset:b}=Mi(),s=Ov(),[p,g]=fe.useState("showcase"),[u,h]=fe.useState(!1),f=async()=>{h(!0);try{await ay(o),s.success("Export successful!","Your component library has been downloaded as component-library.zip")}catch(v){console.error("Export failed:",v);const z=v instanceof Error?v.message:"Unknown error occurred";s.error("Export failed",z)}finally{h(!1)}},d=v=>{Rh[v]&&b(Rh[v])};return i.jsxs("div",{className:"app",children:[i.jsx(Bb,{previewMode:p,onPreviewModeChange:g,onExport:f,exporting:u,onPresetChange:d}),i.jsxs("div",{className:"app-body",children:[i.jsx("aside",{className:"app-sidebar",children:i.jsx(Iv,{})}),i.jsx("main",{className:"app-main",children:p==="showcase"?i.jsx(Mb,{}):i.jsx(Rb,{})})]})]})}function ly(){return i.jsx(Sg,{children:i.jsx(Rv,{position:"top-right",children:i.jsx(Uv,{children:i.jsx(ry,{})})})})}_g.createRoot(document.getElementById("root")).render(i.jsx(fe.StrictMode,{children:i.jsx(ly,{})}));
