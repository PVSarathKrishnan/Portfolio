(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var z0={exports:{}},tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS=Symbol.for("react.transitional.element"),LS=Symbol.for("react.fragment");function H0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:NS,type:e,key:i,ref:t!==void 0?t:null,props:n}}tu.Fragment=LS;tu.jsx=H0;tu.jsxs=H0;z0.exports=tu;var Tt=z0.exports,G0={exports:{}},Pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=Symbol.for("react.transitional.element"),OS=Symbol.for("react.portal"),PS=Symbol.for("react.fragment"),IS=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),BS=Symbol.for("react.consumer"),zS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),XS=Symbol.for("react.activity"),am=Symbol.iterator;function kS(e){return e===null||typeof e!="object"?null:(e=am&&e[am]||e["@@iterator"],typeof e=="function"?e:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,W0={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||X0}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q0(){}q0.prototype=Dr.prototype;function Nh(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||X0}var Lh=Nh.prototype=new q0;Lh.constructor=Nh;k0(Lh,Dr.prototype);Lh.isPureReactComponent=!0;var sm=Array.isArray;function Xf(){}var ye={H:null,A:null,T:null,S:null},Y0=Object.prototype.hasOwnProperty;function Oh(e,t,n){var i=n.ref;return{$$typeof:Uh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function WS(e,t){return Oh(e.type,t,e.props)}function Ph(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uh}function qS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rm=/\/+/g;function Tu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qS(""+e.key):t.toString(36)}function YS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Xf,Xf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ks(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Uh:case OS:r=!0;break;case V0:return r=e._init,ks(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Tu(e,0):i,sm(a)?(n="",r!=null&&(n=r.replace(rm,"$&/")+"/"),ks(a,t,n,"",function(c){return c})):a!=null&&(Ph(a)&&(a=WS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(rm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(sm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Tu(i,l),r+=ks(i,t,n,s,a);else if(l=kS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Tu(i,l++),r+=ks(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return ks(YS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function al(e,t,n){if(e==null)return e;var i=[],a=0;return ks(e,i,"","",function(s){return t.call(n,s,a++)}),i}function jS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var om=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ZS={map:al,forEach:function(e,t,n){al(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return al(e,function(){t++}),t},toArray:function(e){return al(e,function(t){return t})||[]},only:function(e){if(!Ph(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=XS;Pt.Children=ZS;Pt.Component=Dr;Pt.Fragment=PS;Pt.Profiler=FS;Pt.PureComponent=Nh;Pt.StrictMode=IS;Pt.Suspense=GS;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ye.H.useMemoCache(e)}};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=k0({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Y0.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Oh(e.type,a,i)};Pt.createContext=function(e){return e={$$typeof:zS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:BS,_context:e},e};Pt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Y0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Oh(e,s,a)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:HS,render:e}};Pt.isValidElement=Ph;Pt.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:jS}};Pt.memo=function(e,t){return{$$typeof:VS,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=ye.T,n={};ye.T=n;try{var i=e(),a=ye.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Xf,om)}catch(s){om(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),ye.T=t}};Pt.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()};Pt.use=function(e){return ye.H.use(e)};Pt.useActionState=function(e,t,n){return ye.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return ye.H.useCallback(e,t)};Pt.useContext=function(e){return ye.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return ye.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return ye.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return ye.H.useEffectEvent(e)};Pt.useId=function(){return ye.H.useId()};Pt.useImperativeHandle=function(e,t,n){return ye.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return ye.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return ye.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return ye.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return ye.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return ye.H.useReducer(e,t,n)};Pt.useRef=function(e){return ye.H.useRef(e)};Pt.useState=function(e){return ye.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return ye.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return ye.H.useTransition()};Pt.version="19.2.5";G0.exports=Pt;var dn=G0.exports,j0={exports:{}},eu={},Z0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,D){var H=U.length;U.push(D);t:for(;0<H;){var j=H-1>>>1,$=U[j];if(0<a($,D))U[j]=D,U[H]=$,H=j;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var D=U[0],H=U.pop();if(H!==D){U[0]=H;t:for(var j=0,$=U.length,gt=$>>>1;j<gt;){var pt=2*(j+1)-1,At=U[pt],Vt=pt+1,wt=U[Vt];if(0>a(At,H))Vt<$&&0>a(wt,At)?(U[j]=wt,U[Vt]=H,j=Vt):(U[j]=At,U[pt]=H,j=pt);else if(Vt<$&&0>a(wt,H))U[j]=wt,U[Vt]=H,j=Vt;else break t}}return D}function a(U,D){var H=U.sortIndex-D.sortIndex;return H!==0?H:U.id-D.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,_=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function M(U){for(var D=n(c);D!==null;){if(D.callback===null)i(c);else if(D.startTime<=U)i(c),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(c)}}function C(U){if(E=!1,M(U),!_)if(n(l)!==null)_=!0,A||(A=!0,B());else{var D=n(c);D!==null&&P(C,D.startTime-U)}}var A=!1,R=-1,S=5,T=-1;function N(){return g?!0:!(e.unstable_now()-T<S)}function w(){if(g=!1,A){var U=e.unstable_now();T=U;var D=!0;try{t:{_=!1,E&&(E=!1,m(R),R=-1),h=!0;var H=u;try{e:{for(M(U),p=n(l);p!==null&&!(p.expirationTime>U&&N());){var j=p.callback;if(typeof j=="function"){p.callback=null,u=p.priorityLevel;var $=j(p.expirationTime<=U);if(U=e.unstable_now(),typeof $=="function"){p.callback=$,M(U),D=!0;break e}p===n(l)&&i(l),M(U)}else i(l);p=n(l)}if(p!==null)D=!0;else{var gt=n(c);gt!==null&&P(C,gt.startTime-U),D=!1}}break t}finally{p=null,u=H,h=!1}D=void 0}}finally{D?B():A=!1}}}var B;if(typeof v=="function")B=function(){v(w)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=w,B=function(){Y.postMessage(null)}}else B=function(){f(w,0)};function P(U,D){R=f(function(){U(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(U){switch(u){case 1:case 2:case 3:var D=3;break;default:D=u}var H=u;u=D;try{return U()}finally{u=H}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(U,D){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=u;u=U;try{return D()}finally{u=H}},e.unstable_scheduleCallback=function(U,D,H){var j=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?j+H:j):H=j,U){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=H+$,U={id:d++,callback:D,priorityLevel:U,startTime:H,expirationTime:$,sortIndex:-1},H>j?(U.sortIndex=H,t(c,U),n(l)===null&&U===n(c)&&(E?(m(R),R=-1):E=!0,P(C,H-j))):(U.sortIndex=$,t(l,U),_||h||(_=!0,A||(A=!0,B()))),U},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(U){var D=u;return function(){var H=u;u=D;try{return U.apply(this,arguments)}finally{u=H}}}})(K0);Z0.exports=K0;var KS=Z0.exports,Q0={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=dn;function J0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ua(){}var hn={d:{f:ua,r:function(){throw Error(J0(522))},D:ua,C:ua,L:ua,m:ua,X:ua,S:ua,M:ua},p:0,findDOMNode:null},JS=Symbol.for("react.portal");function $S(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:JS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var co=QS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function nu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=hn;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(J0(299));return $S(e,t,null,n)};gn.flushSync=function(e){var t=co.T,n=hn.p;try{if(co.T=null,hn.p=2,e)return e()}finally{co.T=t,hn.p=n,hn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,hn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&hn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=nu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?hn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&hn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=nu(t.as,t.crossOrigin);hn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&hn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=nu(n,t.crossOrigin);hn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=nu(t.as,t.crossOrigin);hn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else hn.d.m(e)};gn.requestFormReset=function(e){hn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return co.H.useFormState(e,t,n)};gn.useFormStatus=function(){return co.H.useHostTransitionStatus()};gn.version="19.2.5";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(e){console.error(e)}}$0(),Q0.exports=gn;var tM=Q0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=KS,t_=dn,eM=tM;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function n_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function i_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lm(e){if(Ho(e)!==e)throw Error(K(188))}function nM(e){var t=e.alternate;if(!t){if(t=Ho(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return lm(a),e;if(s===i)return lm(a),t;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function a_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=a_(e),t!==null)return t;e=e.sibling}return null}var Ee=Object.assign,iM=Symbol.for("react.element"),sl=Symbol.for("react.transitional.element"),no=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),r_=Symbol.for("react.consumer"),ki=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),Yf=Symbol.for("react.activity"),aM=Symbol.for("react.memo_cache_sentinel"),cm=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=cm&&e[cm]||e["@@iterator"],typeof e=="function"?e:null)}var sM=Symbol.for("react.client.reference");function jf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===sM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ys:return"Fragment";case kf:return"Profiler";case s_:return"StrictMode";case Wf:return"Suspense";case qf:return"SuspenseList";case Yf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case no:return"Portal";case ki:return e.displayName||"Context";case r_:return(e._context.displayName||"Context")+".Consumer";case Ih:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fh:return t=e.displayName||null,t!==null?t:jf(e.type)||"Memo";case _a:t=e._payload,e=e._init;try{return jf(e(t))}catch{}}return null}var io=Array.isArray,Ut=t_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=eM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,os={pending:!1,data:null,method:null,action:null},Zf=[],js=-1;function Ci(e){return{current:e}}function Je(e){0>js||(e.current=Zf[js],Zf[js]=null,js--)}function ve(e,t){js++,Zf[js]=e.current,e.current=t}var yi=Ci(null),bo=Ci(null),Da=Ci(null),mc=Ci(null);function gc(e,t){switch(ve(Da,t),ve(bo,e),ve(yi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mg(t),e=Ax(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(yi),ve(yi,e)}function mr(){Je(yi),Je(bo),Je(Da)}function Kf(e){e.memoizedState!==null&&ve(mc,e);var t=yi.current,n=Ax(t,e.type);t!==n&&(ve(bo,e),ve(yi,n))}function _c(e){bo.current===e&&(Je(yi),Je(bo)),mc.current===e&&(Je(mc),Po._currentValue=os)}var Au,um;function Ja(e){if(Au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Au=t&&t[1]||"",um=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Au+e+um}var Ru=!1;function Cu(e,t){if(!e||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(e,[],p)}else{try{p.call()}catch(h){u=h}e.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ja(n):""}function rM(e,t){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==t&&t!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Cu(e.type,!1);case 11:return Cu(e.type.render,!1);case 1:return Cu(e.type,!0);case 31:return Ja("Activity");default:return""}}function fm(e){try{var t="",n=null;do t+=rM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Qf=Object.prototype.hasOwnProperty,Bh=qe.unstable_scheduleCallback,wu=qe.unstable_cancelCallback,oM=qe.unstable_shouldYield,lM=qe.unstable_requestPaint,In=qe.unstable_now,cM=qe.unstable_getCurrentPriorityLevel,o_=qe.unstable_ImmediatePriority,l_=qe.unstable_UserBlockingPriority,vc=qe.unstable_NormalPriority,uM=qe.unstable_LowPriority,c_=qe.unstable_IdlePriority,fM=qe.log,dM=qe.unstable_setDisableYieldValue,Go=null,Fn=null;function ba(e){if(typeof fM=="function"&&dM(e),Fn&&typeof Fn.setStrictMode=="function")try{Fn.setStrictMode(Go,e)}catch{}}var Bn=Math.clz32?Math.clz32:mM,hM=Math.log,pM=Math.LN2;function mM(e){return e>>>=0,e===0?32:31-(hM(e)/pM|0)|0}var rl=256,ol=262144,ll=4194304;function $a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function iu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=$a(i):(r&=o,r!==0?a=$a(r):n||(n=o&~e,n!==0&&(a=$a(n))))):(o=i&~s,o!==0?a=$a(o):r!==0?a=$a(r):n||(n=i&~e,n!==0&&(a=$a(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Vo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u_(){var e=ll;return ll<<=1,!(ll&62914560)&&(ll=4194304),e}function Du(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _M(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Bn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&f_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function f_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function d_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function h_(e,t){var n=t&-t;return n=n&42?1:zh(n),n&(e.suspendedLanes|t)?0:n}function zh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function p_(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:Fx(e.type))}function dm(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var ka=Math.random().toString(36).slice(2),tn="__reactFiber$"+ka,Tn="__reactProps$"+ka,Ur="__reactContainer$"+ka,Jf="__reactEvents$"+ka,vM="__reactListeners$"+ka,xM="__reactHandles$"+ka,hm="__reactResources$"+ka,ko="__reactMarker$"+ka;function Gh(e){delete e[tn],delete e[Tn],delete e[Jf],delete e[vM],delete e[xM]}function Zs(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ur]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sg(e);e!==null;){if(n=e[tn])return n;e=Sg(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){if(e=e[tn]||e[Ur]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ao(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function rr(e){var t=e[hm];return t||(t=e[hm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[ko]=!0}var m_=new Set,g_={};function Ss(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(g_[e]=t,e=0;e<t.length;e++)m_.add(t[e])}var SM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pm={},mm={};function MM(e){return Qf.call(mm,e)?!0:Qf.call(pm,e)?!1:SM.test(e)?mm[e]=!0:(pm[e]=!0,!1)}function jl(e,t,n){if(MM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function cl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ui(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function __(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $f(e){if(!e._valueTracker){var t=__(e)?"checked":"value";e._valueTracker=yM(e,t,""+e[t])}}function v_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=__(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function xc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var EM=/[\n"\\]/g;function Zn(e){return e.replace(EM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function td(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ed(e,r,qn(t)):n!=null?ed(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function x_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){$f(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),$f(e)}function ed(e,t,n){t==="number"&&xc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function or(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function S_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function M_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(io(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),$f(e)}function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||bM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function y_(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&gm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&gm(e,s,t[s])}function Vh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(e){return AM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var nd=null;function Xh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,lr=null;function _m(e){var t=Nr(e);if(t&&(e=t.stateNode)){var n=e[Tn]||null;t:switch(e=t.stateNode,t.type){case"input":if(td(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Zn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Tn]||null;if(!a)throw Error(K(90));td(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&v_(i)}break t;case"textarea":S_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}}}var Uu=!1;function E_(e,t,n){if(Uu)return e(t,n);Uu=!0;try{var i=e(t);return i}finally{if(Uu=!1,(Ks!==null||lr!==null)&&(mu(),Ks&&(t=Ks,e=lr,lr=Ks=null,_m(t),e)))for(t=0;t<e.length;t++)_m(e[t])}}function To(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=!1;if($i)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){id=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{id=!1}var Ta=null,kh=null,Kl=null;function b_(){if(Kl)return Kl;var e,t=kh,n=t.length,i,a="value"in Ta?Ta.value:Ta.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Kl=a.slice(e,1<i?1-i:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function vm(){return!1}function Rn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:vm,this.isPropagationStopped=vm,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Rn(Ms),Wo=Ee({},Ms,{view:0,detail:0}),RM=Rn(Wo),Nu,Lu,Xr,su=Ee({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Nu=e.screenX-Xr.screenX,Lu=e.screenY-Xr.screenY):Lu=Nu=0,Xr=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),xm=Rn(su),CM=Ee({},su,{dataTransfer:0}),wM=Rn(CM),DM=Ee({},Wo,{relatedTarget:0}),Ou=Rn(DM),UM=Ee({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Rn(UM),LM=Ee({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),OM=Rn(LM),PM=Ee({},Ms,{data:0}),Sm=Rn(PM),IM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=BM[e])?!!t[e]:!1}function Wh(){return zM}var HM=Ee({},Wo,{key:function(e){if(e.key){var t=IM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GM=Rn(HM),VM=Ee({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Rn(VM),XM=Ee({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),kM=Rn(XM),WM=Ee({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=Rn(WM),YM=Ee({},su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jM=Rn(YM),ZM=Ee({},Ms,{newState:0,oldState:0}),KM=Rn(ZM),QM=[9,13,27,32],qh=$i&&"CompositionEvent"in window,uo=null;$i&&"documentMode"in document&&(uo=document.documentMode);var JM=$i&&"TextEvent"in window&&!uo,T_=$i&&(!qh||uo&&8<uo&&11>=uo),ym=" ",Em=!1;function A_(e,t){switch(e){case"keyup":return QM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function $M(e,t){switch(e){case"compositionend":return R_(t);case"keypress":return t.which!==32?null:(Em=!0,ym);case"textInput":return e=t.data,e===ym&&Em?null:e;default:return null}}function ty(e,t){if(Qs)return e==="compositionend"||!qh&&A_(e,t)?(e=b_(),Kl=kh=Ta=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return T_&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function C_(e,t,n,i){Ks?lr?lr.push(i):lr=[i]:Ks=i,t=Fc(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var fo=null,Ao=null;function ny(e){Ex(e,0)}function ru(e){var t=ao(e);if(v_(t))return e}function Tm(e,t){if(e==="change")return t}var w_=!1;if($i){var Pu;if($i){var Iu="oninput"in document;if(!Iu){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),Iu=typeof Am.oninput=="function"}Pu=Iu}else Pu=!1;w_=Pu&&(!document.documentMode||9<document.documentMode)}function Rm(){fo&&(fo.detachEvent("onpropertychange",D_),Ao=fo=null)}function D_(e){if(e.propertyName==="value"&&ru(Ao)){var t=[];C_(t,Ao,e,Xh(e)),E_(ny,t)}}function iy(e,t,n){e==="focusin"?(Rm(),fo=t,Ao=n,fo.attachEvent("onpropertychange",D_)):e==="focusout"&&Rm()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(Ao)}function sy(e,t){if(e==="click")return ru(t)}function ry(e,t){if(e==="input"||e==="change")return ru(t)}function oy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hn=typeof Object.is=="function"?Object.is:oy;function Ro(e,t){if(Hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Qf.call(t,a)||!Hn(e[a],t[a]))return!1}return!0}function Cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wm(e,t){var n=Cm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Cm(n)}}function U_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function N_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xc(e.document)}return t}function Yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ly=$i&&"documentMode"in document&&11>=document.documentMode,Js=null,ad=null,ho=null,sd=!1;function Dm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Js==null||Js!==xc(i)||(i=Js,"selectionStart"in i&&Yh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&Ro(ho,i)||(ho=i,i=Fc(ad,"onSelect"),0<i.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Js)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $s={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Fu={},L_={};$i&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function ys(e){if(Fu[e])return Fu[e];if(!$s[e])return e;var t=$s[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L_)return Fu[e]=t[n];return e}var O_=ys("animationend"),P_=ys("animationiteration"),I_=ys("animationstart"),cy=ys("transitionrun"),uy=ys("transitionstart"),fy=ys("transitioncancel"),F_=ys("transitionend"),B_=new Map,rd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rd.push("scrollEnd");function fi(e,t){B_.set(e,t),Ss(t,[e])}var Sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kn=[],tr=0,jh=0;function ou(){for(var e=tr,t=jh=tr=0;t<e;){var n=kn[t];kn[t++]=null;var i=kn[t];kn[t++]=null;var a=kn[t];kn[t++]=null;var s=kn[t];if(kn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&z_(n,a,s)}}function lu(e,t,n,i){kn[tr++]=e,kn[tr++]=t,kn[tr++]=n,kn[tr++]=i,jh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zh(e,t,n,i){return lu(e,t,n,i),Mc(e)}function Es(e,t){return lu(e,null,null,t),Mc(e)}function z_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Bn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Mc(e){if(50<yo)throw yo=0,Rd=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var er={};function dy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,n,i){return new dy(e,t,n,i)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=On(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function H_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jl(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Kh(e)&&(r=1);else if(typeof e=="string")r=_E(e,n,yi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Yf:return e=On(31,n,t,a),e.elementType=Yf,e.lanes=s,e;case Ys:return ls(n.children,a,s,t);case s_:r=8,a|=24;break;case kf:return e=On(12,n,t,a|2),e.elementType=kf,e.lanes=s,e;case Wf:return e=On(13,n,t,a),e.elementType=Wf,e.lanes=s,e;case qf:return e=On(19,n,t,a),e.elementType=qf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ki:r=10;break t;case r_:r=9;break t;case Ih:r=11;break t;case Fh:r=14;break t;case _a:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=On(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ls(e,t,n,i){return e=On(7,e,i,t),e.lanes=n,e}function Bu(e,t,n){return e=On(6,e,null,t),e.lanes=n,e}function G_(e){var t=On(18,null,null,0);return t.stateNode=e,t}function zu(e,t,n){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Um=new WeakMap;function Kn(e,t){if(typeof e=="object"&&e!==null){var n=Um.get(e);return n!==void 0?n:(t={value:e,source:t,stack:fm(t)},Um.set(e,t),t)}return{value:e,source:t,stack:fm(t)}}var nr=[],ir=0,yc=null,Co=0,Yn=[],jn=0,za=null,_i=1,vi="";function Gi(e,t){nr[ir++]=Co,nr[ir++]=yc,yc=e,Co=t}function V_(e,t,n){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=za,za=e;var i=_i;e=vi;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Bn(t)+a|n<<a|i,vi=s+e}else _i=1<<s|n<<a|i,vi=e}function Qh(e){e.return!==null&&(Gi(e,1),V_(e,1,0))}function Jh(e){for(;e===yc;)yc=nr[--ir],nr[ir]=null,Co=nr[--ir],nr[ir]=null;for(;e===za;)za=Yn[--jn],Yn[jn]=null,vi=Yn[--jn],Yn[jn]=null,_i=Yn[--jn],Yn[jn]=null}function X_(e,t){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=za,_i=t.id,vi=t.overflow,za=e}var en=null,Me=null,Qt=!1,Ua=null,Qn=!1,od=Error(K(519));function Ha(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(Kn(t,e)),od}function Nm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[tn]=e,t[Tn]=i,n){case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":case"embed":kt("load",t);break;case"video":case"audio":for(n=0;n<Lo.length;n++)kt(Lo[n],t);break;case"source":kt("error",t);break;case"img":case"image":case"link":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"input":kt("invalid",t),x_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":kt("invalid",t);break;case"textarea":kt("invalid",t),M_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Tx(t.textContent,n)?(i.popover!=null&&(kt("beforetoggle",t),kt("toggle",t)),i.onScroll!=null&&kt("scroll",t),i.onScrollEnd!=null&&kt("scrollend",t),i.onClick!=null&&(t.onclick=Wi),t=!0):t=!1,t||Ha(e,!0)}function Lm(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:en=en.return}}function Cs(e){if(e!==en)return!1;if(!Qt)return Lm(e),Qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nd(e.type,e.memoizedProps)),n=!n),n&&Me&&Ha(e),Lm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Me=xg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Me=xg(e)}else t===27?(t=Me,Wa(e.type)?(e=Id,Id=null,Me=e):Me=t):Me=en?ti(e.stateNode.nextSibling):null;return!0}function ds(){Me=en=null,Qt=!1}function Hu(){var e=Ua;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Ua=null),e}function wo(e){Ua===null?Ua=[e]:Ua.push(e)}var ld=Ci(null),bs=null,qi=null;function xa(e,t,n){ve(ld,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=ld.current,Je(ld)}function cd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ud(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),cd(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(K(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),cd(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Lr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=a.type;Hn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===mc.current){if(r=a.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}a=a.return}e!==null&&ud(t,e,n,i),t.flags|=262144}function Ec(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){bs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return k_(bs,e)}function fl(e,t){return bs===null&&hs(e),k_(e,t)}function k_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(K(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var hy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},py=qe.unstable_scheduleCallback,my=qe.unstable_NormalPriority,Ge={$$typeof:ki,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $h(){return{controller:new hy,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&py(my,function(){e.controller.abort()})}var po=null,fd=0,vr=0,cr=null;function gy(e,t){if(po===null){var n=po=[];fd=0,vr=bp(),cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fd++,t.then(Om,Om),t}function Om(){if(--fd===0&&po!==null){cr!==null&&(cr.status="fulfilled");var e=po;po=null,vr=0,cr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _y(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Pm=Ut.S;Ut.S=function(e,t){ax=In(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gy(e,t),Pm!==null&&Pm(e,t)};var cs=Ci(null);function tp(){var e=cs.current;return e!==null?e:me.pooledCache}function $l(e,t){t===null?ve(cs,cs.current):ve(cs,t.pool)}function W_(){var e=tp();return e===null?null:{parent:Ge._currentValue,pool:e}}var Or=Error(K(460)),ep=Error(K(474)),cu=Error(K(542)),bc={then:function(){}};function Im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function q_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wi,Wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e;default:if(typeof t.status=="string")t.then(Wi,Wi);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e}throw us=t,Or}}function ts(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(us=n,Or):n}}var us=null;function Fm(){if(us===null)throw Error(K(459));var e=us;return us=null,e}function Bm(e){if(e===Or||e===cu)throw Error(K(483))}var ur=null,Do=0;function dl(e){var t=Do;return Do+=1,ur===null&&(ur=[]),q_(ur,e,t)}function kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hl(e,t){throw t.$$typeof===iM?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Y_(e){function t(f,m){if(e){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=ji(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=67108866,m):v):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,v,M){return m===null||m.tag!==6?(m=Bu(v,f.mode,M),m.return=f,m):(m=a(m,v),m.return=f,m)}function l(f,m,v,M){var C=v.type;return C===Ys?d(f,m,v.props.children,M,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_a&&ts(C)===m.type)?(m=a(m,v.props),kr(m,v),m.return=f,m):(m=Jl(v.type,v.key,v.props,null,f.mode,M),kr(m,v),m.return=f,m)}function c(f,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=zu(v,f.mode,M),m.return=f,m):(m=a(m,v.children||[]),m.return=f,m)}function d(f,m,v,M,C){return m===null||m.tag!==7?(m=ls(v,f.mode,M,C),m.return=f,m):(m=a(m,v),m.return=f,m)}function p(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Bu(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case sl:return v=Jl(m.type,m.key,m.props,null,f.mode,v),kr(v,m),v.return=f,v;case no:return m=zu(m,f.mode,v),m.return=f,m;case _a:return m=ts(m),p(f,m,v)}if(io(m)||Gr(m))return m=ls(m,f.mode,v,null),m.return=f,m;if(typeof m.then=="function")return p(f,dl(m),v);if(m.$$typeof===ki)return p(f,fl(f,m),v);hl(f,m)}return null}function u(f,m,v,M){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:o(f,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:return v.key===C?l(f,m,v,M):null;case no:return v.key===C?c(f,m,v,M):null;case _a:return v=ts(v),u(f,m,v,M)}if(io(v)||Gr(v))return C!==null?null:d(f,m,v,M,null);if(typeof v.then=="function")return u(f,m,dl(v),M);if(v.$$typeof===ki)return u(f,m,fl(f,v),M);hl(f,v)}return null}function h(f,m,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(v)||null,o(m,f,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case sl:return f=f.get(M.key===null?v:M.key)||null,l(m,f,M,C);case no:return f=f.get(M.key===null?v:M.key)||null,c(m,f,M,C);case _a:return M=ts(M),h(f,m,v,M,C)}if(io(M)||Gr(M))return f=f.get(v)||null,d(m,f,M,C,null);if(typeof M.then=="function")return h(f,m,v,dl(M),C);if(M.$$typeof===ki)return h(f,m,v,fl(m,M),C);hl(m,M)}return null}function _(f,m,v,M){for(var C=null,A=null,R=m,S=m=0,T=null;R!==null&&S<v.length;S++){R.index>S?(T=R,R=null):T=R.sibling;var N=u(f,R,v[S],M);if(N===null){R===null&&(R=T);break}e&&R&&N.alternate===null&&t(f,R),m=s(N,m,S),A===null?C=N:A.sibling=N,A=N,R=T}if(S===v.length)return n(f,R),Qt&&Gi(f,S),C;if(R===null){for(;S<v.length;S++)R=p(f,v[S],M),R!==null&&(m=s(R,m,S),A===null?C=R:A.sibling=R,A=R);return Qt&&Gi(f,S),C}for(R=i(R);S<v.length;S++)T=h(R,f,S,v[S],M),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?S:T.key),m=s(T,m,S),A===null?C=T:A.sibling=T,A=T);return e&&R.forEach(function(w){return t(f,w)}),Qt&&Gi(f,S),C}function E(f,m,v,M){if(v==null)throw Error(K(151));for(var C=null,A=null,R=m,S=m=0,T=null,N=v.next();R!==null&&!N.done;S++,N=v.next()){R.index>S?(T=R,R=null):T=R.sibling;var w=u(f,R,N.value,M);if(w===null){R===null&&(R=T);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,S),A===null?C=w:A.sibling=w,A=w,R=T}if(N.done)return n(f,R),Qt&&Gi(f,S),C;if(R===null){for(;!N.done;S++,N=v.next())N=p(f,N.value,M),N!==null&&(m=s(N,m,S),A===null?C=N:A.sibling=N,A=N);return Qt&&Gi(f,S),C}for(R=i(R);!N.done;S++,N=v.next())N=h(R,f,S,N.value,M),N!==null&&(e&&N.alternate!==null&&R.delete(N.key===null?S:N.key),m=s(N,m,S),A===null?C=N:A.sibling=N,A=N);return e&&R.forEach(function(B){return t(f,B)}),Qt&&Gi(f,S),C}function g(f,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:t:{for(var C=v.key;m!==null;){if(m.key===C){if(C=v.type,C===Ys){if(m.tag===7){n(f,m.sibling),M=a(m,v.props.children),M.return=f,f=M;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_a&&ts(C)===m.type){n(f,m.sibling),M=a(m,v.props),kr(M,v),M.return=f,f=M;break t}n(f,m);break}else t(f,m);m=m.sibling}v.type===Ys?(M=ls(v.props.children,f.mode,M,v.key),M.return=f,f=M):(M=Jl(v.type,v.key,v.props,null,f.mode,M),kr(M,v),M.return=f,f=M)}return r(f);case no:t:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),M=a(m,v.children||[]),M.return=f,f=M;break t}else{n(f,m);break}else t(f,m);m=m.sibling}M=zu(v,f.mode,M),M.return=f,f=M}return r(f);case _a:return v=ts(v),g(f,m,v,M)}if(io(v))return _(f,m,v,M);if(Gr(v)){if(C=Gr(v),typeof C!="function")throw Error(K(150));return v=C.call(v),E(f,m,v,M)}if(typeof v.then=="function")return g(f,m,dl(v),M);if(v.$$typeof===ki)return g(f,m,fl(f,v),M);hl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),M=a(m,v),M.return=f,f=M):(n(f,m),M=Bu(v,f.mode,M),M.return=f,f=M),r(f)):n(f,m)}return function(f,m,v,M){try{Do=0;var C=g(f,m,v,M);return ur=null,C}catch(R){if(R===Or||R===cu)throw R;var A=On(29,R,null,f.mode);return A.lanes=M,A.return=f,A}finally{}}}var ps=Y_(!0),j_=Y_(!1),va=!1;function np(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ee&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Mc(e),z_(e,null,n),t}return lu(e,i,t,n),Mc(e)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,d_(e,n)}}function Gu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hd=!1;function go(){if(hd){var e=cr;if(e!==null)throw e}}function _o(e,t,n,i){hd=!1;var a=e.updateQueue;va=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(jt&u)===u:(i&u)===u){u!==0&&u===vr&&(hd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Ee({},p,u);break t;case 2:va=!0}}u=o.callback,u!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Va|=r,e.lanes=r,e.memoizedState=p}}function Z_(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function K_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Z_(n[e],t)}var xr=Ci(null),Tc=Ci(0);function zm(e,t){e=ia,ve(Tc,e),ve(xr,t),ia=e|t.baseLanes}function pd(){ve(Tc,ia),ve(xr,xr.current)}function ip(){ia=Tc.current,Je(xr),Je(Tc)}var Gn=Ci(null),$n=null;function Sa(e){var t=e.alternate;ve(Oe,Oe.current&1),ve(Gn,e),$n===null&&(t===null||xr.current!==null||t.memoizedState!==null)&&($n=e)}function md(e){ve(Oe,Oe.current),ve(Gn,e),$n===null&&($n=e)}function Q_(e){e.tag===22?(ve(Oe,Oe.current),ve(Gn,e),$n===null&&($n=e)):Ma()}function Ma(){ve(Oe,Oe.current),ve(Gn,Gn.current)}function Ln(e){Je(Gn),$n===e&&($n=null),Je(Oe)}var Oe=Ci(0);function Ac(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Od(n)||Pd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=0,Bt=null,de=null,ze=null,Rc=!1,fr=!1,ms=!1,Cc=0,Uo=0,dr=null,vy=0;function we(){throw Error(K(321))}function ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hn(e[n],t[n]))return!1;return!0}function sp(e,t,n,i,a,s){return ta=s,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Cv:gp,ms=!1,s=n(i,a),ms=!1,fr&&(s=$_(t,n,i,a)),J_(e),s}function J_(e){Ut.H=No;var t=de!==null&&de.next!==null;if(ta=0,ze=de=Bt=null,Rc=!1,Uo=0,dr=null,t)throw Error(K(300));e===null||Ve||(e=e.dependencies,e!==null&&Ec(e)&&(Ve=!0))}function $_(e,t,n,i){Bt=e;var a=0;do{if(fr&&(dr=null),Uo=0,fr=!1,25<=a)throw Error(K(301));if(a+=1,ze=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ut.H=wv,s=t(n,i)}while(fr);return s}function xy(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Yo(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Bt.flags|=1024),t}function rp(){var e=Cc!==0;return Cc=0,e}function op(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lp(e){if(Rc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Rc=!1}ta=0,ze=de=Bt=null,fr=!1,Uo=Cc=0,dr=null}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Bt.memoizedState=ze=e:ze=ze.next=e,ze}function Ie(){if(de===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ze===null?Bt.memoizedState:ze.next;if(t!==null)ze=t,de=e;else{if(e===null)throw Bt.alternate===null?Error(K(467)):Error(K(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ze===null?Bt.memoizedState=ze=e:ze=ze.next=e}return ze}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(e){var t=Uo;return Uo+=1,dr===null&&(dr=[]),e=q_(dr,e,t),t=Bt,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Cv:gp),e}function fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===ki)return nn(e)}throw Error(K(438,String(e)))}function cp(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=uu(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=aM;return t.index++,n}function ea(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=Ie();return up(t,de,e)}function up(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(jt&p)===p:(ta&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===vr&&(d=!0);else if((ta&u)===u){c=c.next,u===vr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Bt.lanes|=u,Va|=u;p=c.action,ms&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Bt.lanes|=p,Va|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Hn(s,e.memoizedState)&&(Ve=!0,d&&(n=cr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Vu(e){var t=Ie(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Hn(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function tv(e,t,n){var i=Bt,a=Ie(),s=Qt;if(s){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!Hn((de||a).memoizedState,n);if(r&&(a.memoizedState=n,Ve=!0),a=a.queue,fp(iv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||ze!==null&&ze.memoizedState.tag&1){if(i.flags|=2048,Sr(9,{destroy:void 0},nv.bind(null,i,a,n,t),null),me===null)throw Error(K(349));s||ta&127||ev(i,t,n)}return n}function ev(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=uu(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nv(e,t,n,i){t.value=n,t.getSnapshot=i,av(t)&&sv(e)}function iv(e,t,n){return n(function(){av(t)&&sv(e)})}function av(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hn(e,n)}catch{return!0}}function sv(e){var t=Es(e,2);t!==null&&yn(t,e,2)}function gd(e){var t=fn();if(typeof e=="function"){var n=e;if(e=n(),ms){ba(!0);try{n()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function rv(e,t,n,i){return e.baseState=n,up(e,de,typeof i=="function"?i:ea)}function Sy(e,t,n,i,a){if(hu(e))throw Error(K(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ut.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,ov(t,s)):(s.next=n.next,t.pending=n.next=s)}}function ov(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Ut.T,r={};Ut.T=r;try{var o=n(a,i),l=Ut.S;l!==null&&l(r,o),Hm(e,t,o)}catch(c){_d(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ut.T=s}}else try{s=n(a,i),Hm(e,t,s)}catch(c){_d(e,t,c)}}function Hm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Gm(e,t,i)},function(i){return _d(e,t,i)}):Gm(e,t,n)}function Gm(e,t,n){t.status="fulfilled",t.value=n,lv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ov(e,n)))}function _d(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,lv(t),t=t.next;while(t!==i)}e.action=null}function lv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cv(e,t){return t}function Vm(e,t){if(Qt){var n=me.formState;if(n!==null){t:{var i=Bt;if(Qt){if(Me){e:{for(var a=Me,s=Qn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ti(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Me=ti(a.nextSibling),i=a.data==="F!";break t}}Ha(i)}i=!1}i&&(t=n[0])}}return n=fn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cv,lastRenderedState:t},n.queue=i,n=Tv.bind(null,Bt,i),i.dispatch=n,i=gd(!1),s=mp.bind(null,Bt,!1,i.queue),i=fn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Sy.bind(null,Bt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Xm(e){var t=Ie();return uv(t,de,e)}function uv(e,t,n){if(t=up(e,t,cv)[0],e=tc(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Yo(t)}catch(r){throw r===Or?cu:r}else i=t;t=Ie();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,Sr(9,{destroy:void 0},My.bind(null,a,n),null)),[i,s,e]}function My(e,t){e.action=t}function km(e){var t=Ie(),n=de;if(n!==null)return uv(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Sr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=uu(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function fv(){return Ie().memoizedState}function ec(e,t,n,i){var a=fn();Bt.flags|=e,a.memoizedState=Sr(1|t,{destroy:void 0},n,i===void 0?null:i)}function du(e,t,n,i){var a=Ie();i=i===void 0?null:i;var s=a.memoizedState.inst;de!==null&&i!==null&&ap(i,de.memoizedState.deps)?a.memoizedState=Sr(t,s,n,i):(Bt.flags|=e,a.memoizedState=Sr(1|t,s,n,i))}function Wm(e,t){ec(8390656,8,e,t)}function fp(e,t){du(2048,8,e,t)}function yy(e){Bt.flags|=4;var t=Bt.updateQueue;if(t===null)t=uu(),Bt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dv(e){var t=Ie().memoizedState;return yy({ref:t,nextImpl:e}),function(){if(ee&2)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function hv(e,t){return du(4,2,e,t)}function pv(e,t){return du(4,4,e,t)}function mv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gv(e,t,n){n=n!=null?n.concat([e]):null,du(4,4,mv.bind(null,t,e),n)}function dp(){}function _v(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ap(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function vv(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ap(t,i[1]))return i[0];if(i=e(),ms){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i}function hp(e,t,n){return n===void 0||ta&1073741824&&!(jt&261930)?e.memoizedState=t:(e.memoizedState=n,e=rx(),Bt.lanes|=e,Va|=e,n)}function xv(e,t,n,i){return Hn(n,t)?n:xr.current!==null?(e=hp(e,n,i),Hn(e,t)||(Ve=!0),e):!(ta&42)||ta&1073741824&&!(jt&261930)?(Ve=!0,e.memoizedState=n):(e=rx(),Bt.lanes|=e,Va|=e,t)}function Sv(e,t,n,i,a){var s=ne.p;ne.p=s!==0&&8>s?s:8;var r=Ut.T,o={};Ut.T=o,mp(e,!1,t,n);try{var l=a(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=_y(l,i);vo(e,t,d,zn(e))}else vo(e,t,i,zn(e))}catch(p){vo(e,t,{then:function(){},status:"rejected",reason:p},zn())}finally{ne.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function Ey(){}function vd(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=Mv(e).queue;Sv(e,a,t,os,n===null?Ey:function(){return yv(e),n(i)})}function Mv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:os,baseState:os,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:os},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yv(e){var t=Mv(e);t.next===null&&(t=e.alternate.memoizedState),vo(e,t.next.queue,{},zn())}function pp(){return nn(Po)}function Ev(){return Ie().memoizedState}function bv(){return Ie().memoizedState}function by(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zn();e=Na(n);var i=La(t,e,n);i!==null&&(yn(i,t,n),mo(i,t,n)),t={cache:$h()},e.payload=t;return}t=t.return}}function Ty(e,t,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hu(e)?Av(t,n):(n=Zh(e,t,n,i),n!==null&&(yn(n,e,i),Rv(n,t,i)))}function Tv(e,t,n){var i=zn();vo(e,t,n,i)}function vo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(e))Av(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Hn(o,r))return lu(e,t,a,0),me===null&&ou(),!1}catch{}finally{}if(n=Zh(e,t,a,i),n!==null)return yn(n,e,i),Rv(n,t,i),!0}return!1}function mp(e,t,n,i){if(i={lane:2,revertLane:bp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hu(e)){if(t)throw Error(K(479))}else t=Zh(e,n,i,2),t!==null&&yn(t,e,2)}function hu(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function Av(e,t){fr=Rc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,d_(e,n)}}var No={readContext:nn,use:fu,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};No.useEffectEvent=we;var Cv={readContext:nn,use:fu,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Wm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ec(4194308,4,mv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ec(4194308,4,e,t)},useInsertionEffect:function(e,t){ec(4,2,e,t)},useMemo:function(e,t){var n=fn();t=t===void 0?null:t;var i=e();if(ms){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=fn();if(n!==void 0){var a=n(t);if(ms){ba(!0);try{n(t)}finally{ba(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Ty.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:function(e){e=gd(e);var t=e.queue,n=Tv.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dp,useDeferredValue:function(e,t){var n=fn();return hp(n,e,t)},useTransition:function(){var e=gd(!1);return e=Sv.bind(null,Bt,e.queue,!0,!1),fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,a=fn();if(Qt){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),me===null)throw Error(K(349));jt&127||ev(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Wm(iv.bind(null,i,s,e),[e]),i.flags|=2048,Sr(9,{destroy:void 0},nv.bind(null,i,s,n,t),null),n},useId:function(){var e=fn(),t=me.identifierPrefix;if(Qt){var n=vi,i=_i;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Cc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=vy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:pp,useFormState:Vm,useActionState:Vm,useOptimistic:function(e){var t=fn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mp.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:cp,useCacheRefresh:function(){return fn().memoizedState=by.bind(null,Bt)},useEffectEvent:function(e){var t=fn(),n={impl:e};return t.memoizedState=n,function(){if(ee&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},gp={readContext:nn,use:fu,useCallback:_v,useContext:nn,useEffect:fp,useImperativeHandle:gv,useInsertionEffect:hv,useLayoutEffect:pv,useMemo:vv,useReducer:tc,useRef:fv,useState:function(){return tc(ea)},useDebugValue:dp,useDeferredValue:function(e,t){var n=Ie();return xv(n,de.memoizedState,e,t)},useTransition:function(){var e=tc(ea)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Yo(e),t]},useSyncExternalStore:tv,useId:Ev,useHostTransitionStatus:pp,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,t){var n=Ie();return rv(n,de,e,t)},useMemoCache:cp,useCacheRefresh:bv};gp.useEffectEvent=dv;var wv={readContext:nn,use:fu,useCallback:_v,useContext:nn,useEffect:fp,useImperativeHandle:gv,useInsertionEffect:hv,useLayoutEffect:pv,useMemo:vv,useReducer:Vu,useRef:fv,useState:function(){return Vu(ea)},useDebugValue:dp,useDeferredValue:function(e,t){var n=Ie();return de===null?hp(n,e,t):xv(n,de.memoizedState,e,t)},useTransition:function(){var e=Vu(ea)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Yo(e),t]},useSyncExternalStore:tv,useId:Ev,useHostTransitionStatus:pp,useFormState:km,useActionState:km,useOptimistic:function(e,t){var n=Ie();return de!==null?rv(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:cp,useCacheRefresh:bv};wv.useEffectEvent=dv;function Xu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zn(),a=Na(i);a.payload=t,n!=null&&(a.callback=n),t=La(e,a,i),t!==null&&(yn(t,e,i),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zn(),a=Na(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=La(e,a,i),t!==null&&(yn(t,e,i),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zn(),i=Na(n);i.tag=2,t!=null&&(i.callback=t),t=La(e,i,n),t!==null&&(yn(t,e,n),mo(t,e,n))}};function qm(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,i)||!Ro(a,s):!0}function Ym(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&xd.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ee({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Dv(e){Sc(e)}function Uv(e){console.error(e)}function Nv(e){Sc(e)}function wc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function jm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Sd(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){wc(e,t)},n}function Lv(e){return e=Na(e),e.tag=3,e}function Ov(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){jm(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){jm(t,n,i),typeof a!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Ay(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Lr(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return $n===null?Oc():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===bc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),tf(e,i,a)),!1;case 22:return n.flags|=65536,i===bc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),tf(e,i,a)),!1}throw Error(K(435,n.tag))}return tf(e,i,a),Oc(),!1}if(Qt)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==od&&(e=Error(K(422),{cause:i}),wo(Kn(e,n)))):(i!==od&&(t=Error(K(423),{cause:i}),wo(Kn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Kn(i,n),a=Sd(e.stateNode,i,a),Gu(e,a),De!==4&&(De=2)),!1;var s=Error(K(520),{cause:i});if(s=Kn(s,n),Mo===null?Mo=[s]:Mo.push(s),De!==4&&(De=2),t===null)return!0;i=Kn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Sd(n.stateNode,i,e),Gu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Lv(a),Ov(a,e,n,i),Gu(n,a),!1}n=n.return}while(n!==null);return!1}var _p=Error(K(461)),Ve=!1;function $e(e,t,n,i){t.child=e===null?j_(t,null,n,i):ps(t,e.child,n,i)}function Zm(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return hs(t),i=sp(e,t,n,r,s,a),o=rp(),e!==null&&!Ve?(op(e,t,a),na(e,t,a)):(Qt&&o&&Qh(t),t.flags|=1,$e(e,t,i,a),t.child)}function Km(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Pv(e,t,s,i,a)):(e=Jl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!vp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(r,i)&&e.ref===t.ref)return na(e,t,a)}return t.flags|=1,e=ji(s,i),e.ref=t.ref,e.return=t,t.child=e}function Pv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Ro(s,i)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=i=s,vp(e,a))e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,na(e,t,a)}return Md(e,t,n,i,a)}function Iv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Qm(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$l(t,s!==null?s.cachePool:null),s!==null?zm(t,s):pd(),Q_(t);else return i=t.lanes=536870912,Qm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?($l(t,s.cachePool),zm(t,s),Ma(),t.memoizedState=null):(e!==null&&$l(t,null),pd(),Ma());return $e(e,t,a,n),t.child}function so(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Qm(e,t,n,i,a){var s=tp();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&$l(t,null),pd(),Q_(t),e!==null&&Lr(e,t,i,!0),t.childLanes=a,null}function nc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jm(e,t,n){return ps(t,e.child,null,n),e=nc(t,t.pendingProps),e.flags|=2,Ln(t),t.memoizedState=null,e}function Ry(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Qt){if(i.mode==="hidden")return e=nc(t,i),t.lanes=536870912,so(null,e);if(md(t),(e=Me)?(e=Cx(e,Qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=G_(e),n.return=t,t.child=n,en=t,Me=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return nc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(md(t),a)if(t.flags&256)t.flags&=-257,t=Jm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(Ve||Lr(e,t,n,!1),a=(n&e.childLanes)!==0,Ve||a){if(i=me,i!==null&&(r=h_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Es(e,r),yn(i,e,r),_p;Oc(),t=Jm(e,t,n)}else e=s.treeContext,Me=ti(r.nextSibling),en=t,Qt=!0,Ua=null,Qn=!1,e!==null&&X_(t,e),t=nc(t,i),t.flags|=4096;return t}return e=ji(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Md(e,t,n,i,a){return hs(t),n=sp(e,t,n,i,void 0,a),i=rp(),e!==null&&!Ve?(op(e,t,a),na(e,t,a)):(Qt&&i&&Qh(t),t.flags|=1,$e(e,t,n,a),t.child)}function $m(e,t,n,i,a,s){return hs(t),t.updateQueue=null,n=$_(t,i,n,a),J_(e),i=rp(),e!==null&&!Ve?(op(e,t,s),na(e,t,s)):(Qt&&i&&Qh(t),t.flags|=1,$e(e,t,n,s),t.child)}function tg(e,t,n,i,a){if(hs(t),t.stateNode===null){var s=er,r=n.contextType;typeof r=="object"&&r!==null&&(s=nn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xd,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},np(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?nn(r):er,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&xd.enqueueReplaceState(s,s.state,null),_o(t,i,s,a),go(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=gs(n,o);s.props=l;var c=s.context,d=n.contextType;r=er,typeof d=="object"&&d!==null&&(r=nn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Ym(t,s,i,r),va=!1;var u=t.memoizedState;s.state=u,_o(t,i,s,a),go(),c=t.memoizedState,o||u!==c||va?(typeof p=="function"&&(Xu(t,n,p,i),c=t.memoizedState),(l=va||qm(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,dd(e,t),r=t.memoizedProps,d=gs(n,r),s.props=d,p=t.pendingProps,u=s.context,c=n.contextType,l=er,typeof c=="object"&&c!==null&&(l=nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Ym(t,s,i,l),va=!1,u=t.memoizedState,s.state=u,_o(t,i,s,a),go();var h=t.memoizedState;r!==p||u!==h||va||e!==null&&e.dependencies!==null&&Ec(e.dependencies)?(typeof o=="function"&&(Xu(t,n,o,i),h=t.memoizedState),(d=va||qm(t,n,d,i,u,h,l)||e!==null&&e.dependencies!==null&&Ec(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),s.props=i,s.state=h,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,ic(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ps(t,e.child,null,a),t.child=ps(t,null,n,a)):$e(e,t,n,a),t.memoizedState=s.state,e=t.child):e=na(e,t,a),e}function eg(e,t,n,i){return ds(),t.flags|=256,$e(e,t,n,i),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:W_()}}function qu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function Fv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Qt){if(a?Sa(t):Ma(),(e=Me)?(e=Cx(e,Qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=G_(e),n.return=t,t.child=n,en=t,Me=null)):e=null,e===null)throw Ha(t);return Pd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ma(),a=t.mode,o=Dc({mode:"hidden",children:o},a),i=ls(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Wu(n),i.childLanes=qu(e,r,n),t.memoizedState=ku,so(null,i)):(Sa(t),yd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Sa(t),t.flags&=-257,t=Yu(e,t,n)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),o=i.fallback,a=t.mode,i=Dc({mode:"visible",children:i.children},a),o=ls(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ps(t,e.child,null,n),i=t.child,i.memoizedState=Wu(n),i.childLanes=qu(e,r,n),t.memoizedState=ku,t=so(null,i));else if(Sa(t),Pd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,wo({value:i,source:null,stack:null}),t=Yu(e,t,n)}else if(Ve||Lr(e,t,n,!1),r=(n&e.childLanes)!==0,Ve||r){if(r=me,r!==null&&(i=h_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Es(e,i),yn(r,e,i),_p;Od(o)||Oc(),t=Yu(e,t,n)}else Od(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Me=ti(o.nextSibling),en=t,Qt=!0,Ua=null,Qn=!1,e!==null&&X_(t,e),t=yd(t,i.children),t.flags|=4096);return t}return a?(Ma(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ji(c,o):(o=ls(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,so(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Wu(n):(a=o.cachePool,a!==null?(l=Ge._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=W_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=qu(e,r,n),t.memoizedState=ku,so(e.child,i)):(Sa(t),n=e.child,e=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function yd(e,t){return t=Dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=On(22,e,null,t),e.lanes=0,e}function Yu(e,t,n){return ps(t,e.child,null,n),e=yd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ng(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),cd(e.return,t,n)}function ju(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Bv(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Oe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ve(Oe,r),$e(e,t,i,n),i=Qt?Co:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ng(e,n,t);else if(e.tag===19)ng(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ac(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ju(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ac(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ju(t,!0,n,null,s,i);break;case"together":ju(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function na(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Va|=t.lanes,!(n&t.childLanes))if(e!==null){if(Lr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ec(e)))}function Cy(e,t,n){switch(t.tag){case 3:gc(t,t.stateNode.containerInfo),xa(t,Ge,e.memoizedState.cache),ds();break;case 27:case 5:Kf(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,md(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Sa(t),t.flags|=128,null):n&t.child.childLanes?Fv(e,t,n):(Sa(t),e=na(e,t,n),e!==null?e.sibling:null);Sa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Lr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Bv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ve(Oe,Oe.current),i)break;return null;case 22:return t.lanes=0,Iv(e,t,n,t.pendingProps);case 24:xa(t,Ge,e.memoizedState.cache)}return na(e,t,n)}function zv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!vp(e,n)&&!(t.flags&128))return Ve=!1,Cy(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,Qt&&t.flags&1048576&&V_(t,Co,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ts(t.elementType),t.type=e,typeof e=="function")Kh(e)?(i=gs(e,i),t.tag=1,t=tg(null,t,e,i,n)):(t.tag=0,t=Md(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Ih){t.tag=11,t=Zm(null,t,e,i,n);break t}else if(a===Fh){t.tag=14,t=Km(null,t,e,i,n);break t}}throw t=jf(e)||e,Error(K(306,t,""))}}return t;case 0:return Md(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=gs(i,t.pendingProps),tg(e,t,i,a,n);case 3:t:{if(gc(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,dd(e,t),_o(t,i,null,n);var r=t.memoizedState;if(i=r.cache,xa(t,Ge,i),i!==s.cache&&ud(t,[Ge],n,!0),go(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=eg(e,t,i,n);break t}else if(i!==a){a=Kn(Error(K(424)),t),wo(a),t=eg(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=ti(e.firstChild),en=t,Qt=!0,Ua=null,Qn=!0,n=j_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ds(),i===a){t=na(e,t,n);break t}$e(e,t,i,n)}t=t.child}return t;case 26:return ic(e,t),e===null?(n=yg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qt||(n=t.type,e=t.pendingProps,i=Bc(Da.current).createElement(n),i[tn]=t,i[Tn]=e,sn(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=yg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kf(t),e===null&&Qt&&(i=t.stateNode=wx(t.type,t.pendingProps,Da.current),en=t,Qn=!0,a=Me,Wa(t.type)?(Id=a,Me=ti(i.firstChild)):Me=a),$e(e,t,t.pendingProps.children,n),ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Qt&&((a=i=Me)&&(i=aE(i,t.type,t.pendingProps,Qn),i!==null?(t.stateNode=i,en=t,Me=ti(i.firstChild),Qn=!1,a=!0):a=!1),a||Ha(t)),Kf(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Nd(a,s)?i=null:r!==null&&Nd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=sp(e,t,xy,null,null,n),Po._currentValue=a),ic(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&Qt&&((e=n=Me)&&(n=sE(n,t.pendingProps,Qn),n!==null?(t.stateNode=n,en=t,Me=null,e=!0):e=!1),e||Ha(t)),null;case 13:return Fv(e,t,n);case 4:return gc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ps(t,null,i,n):$e(e,t,i,n),t.child;case 11:return Zm(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,xa(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,hs(t),a=nn(a),i=i(a),t.flags|=1,$e(e,t,i,n),t.child;case 14:return Km(e,t,t.type,t.pendingProps,n);case 15:return Pv(e,t,t.type,t.pendingProps,n);case 19:return Bv(e,t,n);case 31:return Ry(e,t,n);case 22:return Iv(e,t,n,t.pendingProps);case 24:return hs(t),i=nn(Ge),e===null?(a=tp(),a===null&&(a=me,s=$h(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},np(t),xa(t,Ge,a)):(e.lanes&n&&(dd(e,t),_o(t,null,null,n),go()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),xa(t,Ge,i)):(i=s.cache,xa(t,Ge,i),i!==a.cache&&ud(t,[Ge],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Ni(e){e.flags|=4}function Zu(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(cx())e.flags|=8192;else throw us=bc,ep}else e.flags&=-16777217}function ig(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Nx(t))if(cx())e.flags|=8192;else throw us=bc,ep}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?u_():536870912,e.lanes|=t,Mr|=t)}function Wr(e,t){if(!Qt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function wy(e,t,n){var i=t.pendingProps;switch(Jh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Zi(Ge),mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?Ni(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hu())),Se(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Ni(t),s!==null?(Se(t),ig(t,s)):(Se(t),Zu(t,a,null,i,n))):s?s!==e.memoizedState?(Ni(t),Se(t),ig(t,s)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ni(t),Se(t),Zu(t,a,e,i,n)),null;case 27:if(_c(t),n=Da.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Se(t),null}e=yi.current,Cs(t)?Nm(t):(e=wx(a,i,n),t.stateNode=e,Ni(t))}return Se(t),null;case 5:if(_c(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Se(t),null}if(s=yi.current,Cs(t))Nm(t);else{var r=Bc(Da.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[tn]=t,s[Tn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(sn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ni(t)}}return Se(t),Zu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Da.current,Cs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=en,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Tx(e.nodeValue,n)),e||Ha(t,!0)}else e=Bc(e).createTextNode(i),e[tn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Cs(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[tn]=t}else ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ln(t),t):(Ln(t),null);if(t.flags&128)throw Error(K(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Cs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[tn]=t}else ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ln(t),t):(Ln(t),null)}return Ln(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),Se(t),null);case 4:return mr(),e===null&&Tp(t.stateNode.containerInfo),Se(t),null;case 10:return Zi(t.type),Se(t),null;case 19:if(Je(Oe),i=t.memoizedState,i===null)return Se(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Wr(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ac(e),s!==null){for(t.flags|=128,Wr(i,!1),e=s.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)H_(n,e),n=n.sibling;return ve(Oe,Oe.current&1|2),Qt&&Gi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&In()>Nc&&(t.flags|=128,a=!0,Wr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ac(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Qt)return Se(t),null}else 2*In()-i.renderingStartTime>Nc&&n!==536870912&&(t.flags|=128,a=!0,Wr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=In(),e.sibling=null,n=Oe.current,ve(Oe,a?n&1|2:n&1),Qt&&Gi(t,i.treeForkCount),e):(Se(t),null);case 22:case 23:return Ln(t),ip(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Je(cs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(Ge),Se(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function Dy(e,t){switch(Jh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(Ge),mr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _c(t),null;case 31:if(t.memoizedState!==null){if(Ln(t),t.alternate===null)throw Error(K(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ln(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(Oe),null;case 4:return mr(),null;case 10:return Zi(t.type),null;case 22:case 23:return Ln(t),ip(),e!==null&&Je(cs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(Ge),null;case 25:return null;default:return null}}function Hv(e,t){switch(Jh(t),t.tag){case 3:Zi(Ge),mr();break;case 26:case 27:case 5:_c(t);break;case 4:mr();break;case 31:t.memoizedState!==null&&Ln(t);break;case 13:Ln(t);break;case 19:Je(Oe);break;case 10:Zi(t.type);break;case 22:case 23:Ln(t),ip(),e!==null&&Je(cs);break;case 24:Zi(Ge)}}function jo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){re(t,t.return,o)}}function Ga(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){re(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){re(t,t.return,d)}}function Gv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{K_(t,n)}catch(i){re(e,e.return,i)}}}function Vv(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function xo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){re(e,t,a)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){re(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){re(e,t,a)}else n.current=null}function Xv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){re(e,e.return,a)}}function Ku(e,t,n){try{var i=e.stateNode;Jy(i,e.type,n,t),i[Tn]=t}catch(a){re(e,e.return,a)}}function kv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Qu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(i!==4&&(i===27&&Wa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ed(e,t,n),e=e.sibling;e!==null;)Ed(e,t,n),e=e.sibling}function Uc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Wa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);sn(t,i,n),t[tn]=e,t[Tn]=n}catch(s){re(e,e.return,s)}}var Vi=!1,He=!1,Ju=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Uy(e,t){if(e=e.containerInfo,Dd=Vc,e=N_(e),Yh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,p=e,u=null;e:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},Vc=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=gs(n.type,a);e=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){re(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ld(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function qv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n),i&4&&jo(5,n);break;case 1:if(Oi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){re(n,n.return,r)}else{var a=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(n,n.return,r)}}i&64&&Gv(n),i&512&&xo(n,n.return);break;case 3:if(Oi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{K_(e,t)}catch(r){re(n,n.return,r)}}break;case 27:t===null&&i&4&&Wv(n);case 26:case 5:Oi(e,n),t===null&&i&4&&Xv(n),i&512&&xo(n,n.return);break;case 12:Oi(e,n);break;case 31:Oi(e,n),i&4&&Zv(e,n);break;case 13:Oi(e,n),i&4&&Kv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Hy.bind(null,n),rE(e,n))));break;case 22:if(i=n.memoizedState!==null||Vi,!i){t=t!==null&&t.memoizedState!==null||He,a=Vi;var s=He;Vi=i,(He=t)&&!s?Hi(e,n,(n.subtreeFlags&8772)!==0):Oi(e,n),Vi=a,He=s}break;case 30:break;default:Oi(e,n)}}function Yv(e){var t=e.alternate;t!==null&&(e.alternate=null,Yv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Sn=!1;function Li(e,t,n){for(n=n.child;n!==null;)jv(e,t,n),n=n.sibling}function jv(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 26:He||xi(n,t),Li(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||xi(n,t);var i=be,a=Sn;Wa(n.type)&&(be=n.stateNode,Sn=!1),Li(e,t,n),Eo(n.stateNode),be=i,Sn=a;break;case 5:He||xi(n,t);case 6:if(i=be,a=Sn,be=null,Li(e,t,n),be=i,Sn=a,be!==null)if(Sn)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(n.stateNode)}catch(s){re(n,t,s)}else try{be.removeChild(n.stateNode)}catch(s){re(n,t,s)}break;case 18:be!==null&&(Sn?(e=be,_g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tr(e)):_g(be,n.stateNode));break;case 4:i=be,a=Sn,be=n.stateNode.containerInfo,Sn=!0,Li(e,t,n),be=i,Sn=a;break;case 0:case 11:case 14:case 15:Ga(2,n,t),He||Ga(4,n,t),Li(e,t,n);break;case 1:He||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Vv(n,t,i)),Li(e,t,n);break;case 21:Li(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Li(e,t,n),He=i;break;default:Li(e,t,n)}}function Zv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(n){re(t,t.return,n)}}}function Kv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(n){re(t,t.return,n)}}function Ny(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ag),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ag),t;default:throw Error(K(435,e.tag))}}function ml(e,t){var n=Ny(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Gy.bind(null,e,i);i.then(a,a)}})}function _n(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Wa(o.type)){be=o.stateNode,Sn=!1;break t}break;case 5:be=o.stateNode,Sn=!1;break t;case 3:case 4:be=o.stateNode.containerInfo,Sn=!0;break t}o=o.return}if(be===null)throw Error(K(160));jv(s,r,a),be=null,Sn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qv(t,e),t=t.sibling}var oi=null;function Qv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_n(t,e),vn(e),i&4&&(Ga(3,e,e.return),jo(3,e),Ga(5,e,e.return));break;case 1:_n(t,e),vn(e),i&512&&(He||n===null||xi(n,n.return)),i&64&&Vi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(_n(t,e),vn(e),i&512&&(He||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[ko]||s[tn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),sn(s,i,n),s[tn]=e,Qe(s),i=s;break t;case"link":var r=bg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),sn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=bg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),sn(s,i,n),a.head.appendChild(s);break;default:throw Error(K(468,i))}s[tn]=e,Qe(s),i=s}e.stateNode=i}else Tg(a,e.type,e.stateNode);else e.stateNode=Eg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Tg(a,e.type,e.stateNode):Eg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,n.memoizedProps)}break;case 27:_n(t,e),vn(e),i&512&&(He||n===null||xi(n,n.return)),n!==null&&i&4&&Ku(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_n(t,e),vn(e),i&512&&(He||n===null||xi(n,n.return)),e.flags&32){a=e.stateNode;try{_r(a,"")}catch(_){re(e,e.return,_)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Ku(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Ju=!0);break;case 6:if(_n(t,e),vn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){re(e,e.return,_)}}break;case 3:if(rc=null,a=oi,oi=zc(t.containerInfo),_n(t,e),oi=a,vn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(_){re(e,e.return,_)}Ju&&(Ju=!1,Jv(e));break;case 4:i=oi,oi=zc(e.stateNode.containerInfo),_n(t,e),vn(e),oi=i;break;case 12:_n(t,e),vn(e);break;case 31:_n(t,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 13:_n(t,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pu=In()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Vi,d=He;if(Vi=c||a,He=d||l,_n(t,e),He=d,Vi=c,vn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Vi||He||es(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){re(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){re(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var h=l.stateNode;a?vg(h,!0):vg(l.stateNode,!1)}catch(_){re(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ml(e,n))));break;case 19:_n(t,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 30:break;case 21:break;default:_n(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(kv(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,s=Qu(e);Uc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(_r(r,""),n.flags&=-33);var o=Qu(e);Uc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Qu(e);Ed(e,c,l);break;default:throw Error(K(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qv(e,t.alternate,t),t=t.sibling}function es(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ga(4,t,t.return),es(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Vv(t,t.return,n),es(t);break;case 27:Eo(t.stateNode);case 26:case 5:xi(t,t.return),es(t);break;case 22:t.memoizedState===null&&es(t);break;case 30:es(t);break;default:es(t)}e=e.sibling}}function Hi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Hi(a,s,n),jo(4,s);break;case 1:if(Hi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){re(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Z_(l[a],o)}catch(c){re(i,i.return,c)}}n&&r&64&&Gv(s),xo(s,s.return);break;case 27:Wv(s);case 26:case 5:Hi(a,s,n),n&&i===null&&r&4&&Xv(s),xo(s,s.return);break;case 12:Hi(a,s,n);break;case 31:Hi(a,s,n),n&&r&4&&Zv(a,s);break;case 13:Hi(a,s,n),n&&r&4&&Kv(a,s);break;case 22:s.memoizedState===null&&Hi(a,s,n),xo(s,s.return);break;case 30:break;default:Hi(a,s,n)}t=t.sibling}}function xp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qo(n))}function Sp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qo(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$v(e,t,n,i),t=t.sibling}function $v(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&jo(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qo(e)));break;case 12:if(a&2048){ii(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){re(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ii(e,t,n,i):So(e,t):s._visibility&2?ii(e,t,n,i):(s._visibility|=2,Ws(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&xp(r,t);break;case 24:ii(e,t,n,i),a&2048&&Sp(t.alternate,t);break;default:ii(e,t,n,i)}}function Ws(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ws(s,r,o,l,a),jo(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ws(s,r,o,l,a):So(s,r):(d._visibility|=2,Ws(s,r,o,l,a)),a&&c&2048&&xp(r.alternate,r);break;case 24:Ws(s,r,o,l,a),a&&c&2048&&Sp(r.alternate,r);break;default:Ws(s,r,o,l,a)}t=t.sibling}}function So(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:So(n,i),a&2048&&xp(i.alternate,i);break;case 24:So(n,i),a&2048&&Sp(i.alternate,i);break;default:So(n,i)}t=t.sibling}}var ro=8192;function ws(e,t,n){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)tx(e,t,n),e=e.sibling}function tx(e,t,n){switch(e.tag){case 26:ws(e,t,n),e.flags&ro&&e.memoizedState!==null&&vE(n,oi,e.memoizedState,e.memoizedProps);break;case 5:ws(e,t,n);break;case 3:case 4:var i=oi;oi=zc(e.stateNode.containerInfo),ws(e,t,n),oi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ro,ro=16777216,ws(e,t,n),ro=i):ws(e,t,n));break;default:ws(e,t,n)}}function ex(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ke=i,ix(i,e)}ex(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nx(e),e=e.sibling}function nx(e){switch(e.tag){case 0:case 11:case 15:qr(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:qr(e);break;case 12:qr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ac(e)):qr(e);break;default:qr(e)}}function ac(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ke=i,ix(i,e)}ex(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ga(8,t,t.return),ac(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ac(t));break;default:ac(t)}e=e.sibling}}function ix(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:Ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:qo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ke=i;else t:for(n=e;Ke!==null;){i=Ke;var a=i.sibling,s=i.return;if(Yv(i),i===n){Ke=null;break t}if(a!==null){a.return=s,Ke=a;break t}Ke=s}}}var Ly={getCacheForType:function(e){var t=nn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nn(Ge).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,ee=0,me=null,Wt=null,jt=0,se=0,Nn=null,Aa=!1,Pr=!1,Mp=!1,ia=0,De=0,Va=0,fs=0,yp=0,Pn=0,Mr=0,Mo=null,Mn=null,bd=!1,pu=0,ax=0,Nc=1/0,Lc=null,Oa=null,We=0,Pa=null,yr=null,Ki=0,Td=0,Ad=null,sx=null,yo=0,Rd=null;function zn(){return ee&2&&jt!==0?jt&-jt:Ut.T!==null?bp():p_()}function rx(){if(Pn===0)if(!(jt&536870912)||Qt){var e=ol;ol<<=1,!(ol&3932160)&&(ol=262144),Pn=e}else Pn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Pn}function yn(e,t,n){(e===me&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Er(e,0),Ra(e,jt,Pn,!1)),Xo(e,n),(!(ee&2)||e!==me)&&(e===me&&(!(ee&2)&&(fs|=n),De===4&&Ra(e,jt,Pn,!1)),wi(e))}function ox(e,t,n){if(ee&6)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vo(e,t),a=i?Fy(e,t):$u(e,t,!0),s=i;do{if(a===0){Pr&&!i&&Ra(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Py(n)){a=$u(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Mo;var l=o.current.memoizedState.isDehydrated;if(l&&(Er(o,r).flags|=256),r=$u(o,r,!1),r!==2){if(Mp&&!l){o.errorRecoveryDisabledLanes|=s,fs|=s,a=4;break t}s=Mn,Mn=a,s!==null&&(Mn===null?Mn=s:Mn.push.apply(Mn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Er(e,0),Ra(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:Ra(i,t,Pn,!Aa);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(a=pu+300-In(),10<a)){if(Ra(i,t,Pn,!Aa),iu(i,0,!0)!==0)break t;Ki=t,i.timeoutHandle=Rx(sg.bind(null,i,n,Mn,Lc,bd,t,Pn,fs,Mr,Aa,s,"Throttled",-0,0),a);break t}sg(i,n,Mn,Lc,bd,t,Pn,fs,Mr,Aa,s,null,-0,0)}}break}while(!0);wi(e)}function sg(e,t,n,i,a,s,r,o,l,c,d,p,u,h){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},tx(t,s,p);var _=(s&62914560)===s?pu-In():(s&4194048)===s?ax-In():0;if(_=xE(p,_),_!==null){Ki=s,e.cancelPendingCommit=_(og.bind(null,e,t,s,n,i,a,r,o,l,d,p,null,u,h)),Ra(e,s,r,!c);return}}og(e,t,s,n,i,a,r,o,l)}function Py(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Hn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,n,i){t&=~yp,t&=~fs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&f_(e,n,t)}function mu(){return ee&6?!0:(Zo(0),!1)}function Ep(){if(Wt!==null){if(se===0)var e=Wt.return;else e=Wt,qi=bs=null,lp(e),ur=null,Do=0,e=Wt;for(;e!==null;)Hv(e.alternate,e),e=e.return;Wt=null}}function Er(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,eE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ki=0,Ep(),me=e,Wt=n=ji(e.current,null),jt=t,se=0,Nn=null,Aa=!1,Pr=Vo(e,t),Mp=!1,Mr=Pn=yp=fs=Va=De=0,Mn=Mo=null,bd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Bn(i),s=1<<a;t|=e[a],i&=~s}return ia=t,ou(),n}function lx(e,t){Bt=null,Ut.H=No,t===Or||t===cu?(t=Fm(),se=3):t===ep?(t=Fm(),se=4):se=t===_p?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nn=t,Wt===null&&(De=1,wc(e,Kn(t,e.current)))}function cx(){var e=Gn.current;return e===null?!0:(jt&4194048)===jt?$n===null:(jt&62914560)===jt||jt&536870912?e===$n:!1}function ux(){var e=Ut.H;return Ut.H=No,e===null?No:e}function fx(){var e=Ut.A;return Ut.A=Ly,e}function Oc(){De=4,Aa||(jt&4194048)!==jt&&Gn.current!==null||(Pr=!0),!(Va&134217727)&&!(fs&134217727)||me===null||Ra(me,jt,Pn,!1)}function $u(e,t,n){var i=ee;ee|=2;var a=ux(),s=fx();(me!==e||jt!==t)&&(Lc=null,Er(e,t)),t=!1;var r=De;t:do try{if(se!==0&&Wt!==null){var o=Wt,l=Nn;switch(se){case 8:Ep(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=se;if(se=0,Nn=null,ar(e,o,l,c),n&&Pr){r=0;break t}break;default:c=se,se=0,Nn=null,ar(e,o,l,c)}}Iy(),r=De;break}catch(d){lx(e,d)}while(!0);return t&&e.shellSuspendCounter++,qi=bs=null,ee=i,Ut.H=a,Ut.A=s,Wt===null&&(me=null,jt=0,ou()),r}function Iy(){for(;Wt!==null;)dx(Wt)}function Fy(e,t){var n=ee;ee|=2;var i=ux(),a=fx();me!==e||jt!==t?(Lc=null,Nc=In()+500,Er(e,t)):Pr=Vo(e,t);t:do try{if(se!==0&&Wt!==null){t=Wt;var s=Nn;e:switch(se){case 1:se=0,Nn=null,ar(e,t,s,1);break;case 2:case 9:if(Im(s)){se=0,Nn=null,rg(t);break}t=function(){se!==2&&se!==9||me!==e||(se=7),wi(e)},s.then(t,t);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:Im(s)?(se=0,Nn=null,rg(t)):(se=0,Nn=null,ar(e,t,s,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?Nx(r):o.stateNode.complete){se=0,Nn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,gu(c)):Wt=null}break e}}se=0,Nn=null,ar(e,t,s,5);break;case 6:se=0,Nn=null,ar(e,t,s,6);break;case 8:Ep(),De=6;break t;default:throw Error(K(462))}}By();break}catch(d){lx(e,d)}while(!0);return qi=bs=null,Ut.H=i,Ut.A=a,ee=n,Wt!==null?0:(me=null,jt=0,ou(),De)}function By(){for(;Wt!==null&&!oM();)dx(Wt)}function dx(e){var t=zv(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?gu(e):Wt=t}function rg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=$m(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=$m(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:lp(t);default:Hv(n,t),t=Wt=H_(t,ia),t=zv(n,t,ia)}e.memoizedProps=e.pendingProps,t===null?gu(e):Wt=t}function ar(e,t,n,i){qi=bs=null,lp(t),ur=null,Do=0;var a=t.return;try{if(Ay(e,a,t,n,jt)){De=1,wc(e,Kn(n,e.current)),Wt=null;return}}catch(s){if(a!==null)throw Wt=a,s;De=1,wc(e,Kn(n,e.current)),Wt=null;return}t.flags&32768?(Qt||i===1?e=!0:Pr||jt&536870912?e=!1:(Aa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),hx(t,e)):gu(t)}function gu(e){var t=e;do{if(t.flags&32768){hx(t,Aa);return}e=t.return;var n=wy(t.alternate,t,ia);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);De===0&&(De=5)}function hx(e,t){do{var n=Dy(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);De=6,Wt=null}function og(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do _u();while(We!==0);if(ee&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(s=t.lanes|t.childLanes,s|=jh,_M(e,n,s,r,o,l),e===me&&(Wt=me=null,jt=0),yr=t,Pa=e,Ki=n,Td=s,Ad=a,sx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Vy(vc,function(){return vx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ut.T,Ut.T=null,a=ne.p,ne.p=2,r=ee,ee|=4;try{Uy(e,t,n)}finally{ee=r,ne.p=a,Ut.T=i}}We=1,px(),mx(),gx()}}function px(){if(We===1){We=0;var e=Pa,t=yr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ut.T,Ut.T=null;var i=ne.p;ne.p=2;var a=ee;ee|=4;try{Qv(t,e);var s=Ud,r=N_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&U_(o.ownerDocument.documentElement,o)){if(l!==null&&Yh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),_=o.textContent.length,E=Math.min(l.start,_),g=l.end===void 0?E:Math.min(l.end,_);!h.extend&&E>g&&(r=g,g=E,E=r);var f=wm(o,E),m=wm(o,g);if(f&&m&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var v=p.createRange();v.setStart(f.node,f.offset),h.removeAllRanges(),E>g?(h.addRange(v),h.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),h.addRange(v))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var M=p[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Vc=!!Dd,Ud=Dd=null}finally{ee=a,ne.p=i,Ut.T=n}}e.current=t,We=2}}function mx(){if(We===2){We=0;var e=Pa,t=yr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ut.T,Ut.T=null;var i=ne.p;ne.p=2;var a=ee;ee|=4;try{qv(e,t.alternate,t)}finally{ee=a,ne.p=i,Ut.T=n}}We=3}}function gx(){if(We===4||We===3){We=0,lM();var e=Pa,t=yr,n=Ki,i=sx;t.subtreeFlags&10256||t.flags&10256?We=5:(We=0,yr=Pa=null,_x(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Oa=null),Hh(n),t=t.stateNode,Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Go,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,a=ne.p,ne.p=2,Ut.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ne.p=a}}Ki&3&&_u(),wi(e),a=e.pendingLanes,n&261930&&a&42?e===Rd?yo++:(yo=0,Rd=e):yo=0,Zo(0)}}function _x(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qo(t)))}function _u(){return px(),mx(),gx(),vx()}function vx(){if(We!==5)return!1;var e=Pa,t=Td;Td=0;var n=Hh(Ki),i=Ut.T,a=ne.p;try{ne.p=32>n?32:n,Ut.T=null,n=Ad,Ad=null;var s=Pa,r=Ki;if(We=0,yr=Pa=null,Ki=0,ee&6)throw Error(K(331));var o=ee;if(ee|=4,nx(s.current),$v(s,s.current,r,n),ee=o,Zo(0,!1),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Go,s)}catch{}return!0}finally{ne.p=a,Ut.T=i,_x(e,t)}}function lg(e,t,n){t=Kn(n,t),t=Sd(e.stateNode,t,2),e=La(e,t,2),e!==null&&(Xo(e,2),wi(e))}function re(e,t,n){if(e.tag===3)lg(e,e,n);else for(;t!==null;){if(t.tag===3){lg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){e=Kn(n,e),n=Lv(2),i=La(t,n,2),i!==null&&(Ov(n,i,t,e),Xo(i,2),wi(i));break}}t=t.return}}function tf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Oy;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Mp=!0,a.add(n),e=zy.bind(null,e,t,n),t.then(e,e))}function zy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(jt&n)===n&&(De===4||De===3&&(jt&62914560)===jt&&300>In()-pu?!(ee&2)&&Er(e,0):yp|=n,Mr===jt&&(Mr=0)),wi(e)}function xx(e,t){t===0&&(t=u_()),e=Es(e,t),e!==null&&(Xo(e,t),wi(e))}function Hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xx(e,n)}function Gy(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),xx(e,n)}function Vy(e,t){return Bh(e,t)}var Pc=null,qs=null,Cd=!1,Ic=!1,ef=!1,Ca=0;function wi(e){e!==qs&&e.next===null&&(qs===null?Pc=qs=e:qs=qs.next=e),Ic=!0,Cd||(Cd=!0,ky())}function Zo(e,t){if(!ef&&Ic){ef=!0;do for(var n=!1,i=Pc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,cg(i,s))}else s=jt,s=iu(i,i===me?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Vo(i,s)||(n=!0,cg(i,s));i=i.next}while(n);ef=!1}}function Xy(){Sx()}function Sx(){Ic=Cd=!1;var e=0;Ca!==0&&tE()&&(e=Ca);for(var t=In(),n=null,i=Pc;i!==null;){var a=i.next,s=Mx(i,t);s===0?(i.next=null,n===null?Pc=a:n.next=a,a===null&&(qs=n)):(n=i,(e!==0||s&3)&&(Ic=!0)),i=a}We!==0&&We!==5||Zo(e),Ca!==0&&(Ca=0)}function Mx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=gM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=me,n=jt,n=iu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&wu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Vo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&wu(i),Hh(n)){case 2:case 8:n=l_;break;case 32:n=vc;break;case 268435456:n=c_;break;default:n=vc}return i=yx.bind(null,e),n=Bh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&wu(i),e.callbackPriority=2,e.callbackNode=null,2}function yx(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_u()&&e.callbackNode!==n)return null;var i=jt;return i=iu(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ox(e,i,t),Mx(e,In()),e.callbackNode!=null&&e.callbackNode===n?yx.bind(null,e):null)}function cg(e,t){if(_u())return null;ox(e,t,!0)}function ky(){nE(function(){ee&6?Bh(o_,Xy):Sx()})}function bp(){if(Ca===0){var e=vr;e===0&&(e=rl,rl<<=1,!(rl&261888)&&(rl=256)),Ca=e}return Ca}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zl(""+e)}function fg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Wy(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=ug((a[Tn]||null).action),r=i.submitter;r&&(t=(t=r[Tn]||null)?ug(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new au("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ca!==0){var l=r?fg(a,r):new FormData(a);vd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?fg(a,r):new FormData(a),vd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var nf=0;nf<rd.length;nf++){var af=rd[nf],qy=af.toLowerCase(),Yy=af[0].toUpperCase()+af.slice(1);fi(qy,"on"+Yy)}fi(O_,"onAnimationEnd");fi(P_,"onAnimationIteration");fi(I_,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(cy,"onTransitionRun");fi(uy,"onTransitionStart");fi(fy,"onTransitionCancel");fi(F_,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Ex(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Sc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Sc(d)}a.currentTarget=null,s=l}}}}function kt(e,t){var n=t[Jf];n===void 0&&(n=t[Jf]=new Set);var i=e+"__bubble";n.has(i)||(bx(t,e,2,!1),n.add(i))}function sf(e,t,n){var i=0;t&&(i|=4),bx(n,e,i,t)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Tp(e){if(!e[gl]){e[gl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||sf(n,!1,e),sf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gl]||(t[gl]=!0,sf("selectionchange",!1,t))}}function bx(e,t,n,i){switch(Fx(t)){case 2:var a=yE;break;case 8:a=EE;break;default:a=wp}n=a.bind(null,t,n,e),a=void 0,!id||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function rf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Zs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}E_(function(){var c=s,d=Xh(n),p=[];t:{var u=B_.get(e);if(u!==void 0){var h=au,_=e;switch(e){case"keypress":if(Ql(n)===0)break t;case"keydown":case"keyup":h=GM;break;case"focusin":_="focus",h=Ou;break;case"focusout":_="blur",h=Ou;break;case"beforeblur":case"afterblur":h=Ou;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=kM;break;case O_:case P_:case I_:h=NM;break;case F_:h=qM;break;case"scroll":case"scrollend":h=RM;break;case"wheel":h=jM;break;case"copy":case"cut":case"paste":h=OM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Mm;break;case"toggle":case"beforetoggle":h=KM}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,v;m!==null;){var M=m;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||f===null||(M=To(m,f),M!=null&&E.push(Oo(m,M,v))),g)break;m=m.return}0<E.length&&(u=new h(u,_,null,n,d),p.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",u&&n!==nd&&(_=n.relatedTarget||n.fromElement)&&(Zs(_)||_[Ur]))break t;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=c,_=_?Zs(_):null,_!==null&&(g=Ho(_),E=_.tag,_!==g||E!==5&&E!==27&&E!==6)&&(_=null)):(h=null,_=c),h!==_)){if(E=xm,M="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Mm,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=h==null?u:ao(h),v=_==null?u:ao(_),u=new E(M,m+"leave",h,n,d),u.target=g,u.relatedTarget=v,M=null,Zs(d)===c&&(E=new E(f,m+"enter",_,n,d),E.target=v,E.relatedTarget=g,M=E),g=M,h&&_)e:{for(E=Zy,f=h,m=_,v=0,M=f;M;M=E(M))v++;M=0;for(var C=m;C;C=E(C))M++;for(;0<v-M;)f=E(f),v--;for(;0<M-v;)m=E(m),M--;for(;v--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;h!==null&&dg(p,u,h,E,!1),_!==null&&g!==null&&dg(p,g,_,E,!0)}}t:{if(u=c?ao(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var A=Tm;else if(bm(u))if(w_)A=ry;else{A=ay;var R=iy}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Vh(c.elementType)&&(A=Tm):A=sy;if(A&&(A=A(e,c))){C_(p,A,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&ed(u,"number",u.value)}switch(R=c?ao(c):window,e){case"focusin":(bm(R)||R.contentEditable==="true")&&(Js=R,ad=c,ho=null);break;case"focusout":ho=ad=Js=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Dm(p,n,d);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":Dm(p,n,d)}var S;if(qh)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Qs?A_(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(T_&&n.locale!=="ko"&&(Qs||T!=="onCompositionStart"?T==="onCompositionEnd"&&Qs&&(S=b_()):(Ta=d,kh="value"in Ta?Ta.value:Ta.textContent,Qs=!0)),R=Fc(c,T),0<R.length&&(T=new Sm(T,e,null,n,d),p.push({event:T,listeners:R}),S?T.data=S:(S=R_(n),S!==null&&(T.data=S)))),(S=JM?$M(e,n):ty(e,n))&&(T=Fc(c,"onBeforeInput"),0<T.length&&(R=new Sm("onBeforeInput","beforeinput",null,n,d),p.push({event:R,listeners:T}),R.data=S)),Wy(p,e,c,n,d)}Ex(p,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=To(e,n),a!=null&&i.unshift(Oo(e,a,s)),a=To(e,t),a!=null&&i.push(Oo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function Zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=To(n,s),c!=null&&r.unshift(Oo(n,c,l))):a||(c=To(n,s),c!=null&&r.push(Oo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function hg(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Qy,"")}function Tx(e,t){return t=hg(t),hg(e)===t}function fe(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||_r(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&_r(e,""+i);break;case"className":cl(e,"class",i);break;case"tabIndex":cl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cl(e,n,i);break;case"style":y_(e,i,s);break;case"data":if(t!=="object"){cl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Zl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",a.name,a,null),fe(e,t,"formEncType",a.formEncType,a,null),fe(e,t,"formMethod",a.formMethod,a,null),fe(e,t,"formTarget",a.formTarget,a,null)):(fe(e,t,"encType",a.encType,a,null),fe(e,t,"method",a.method,a,null),fe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Zl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wi);break;case"onScroll":i!=null&&kt("scroll",e);break;case"onScrollEnd":i!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Zl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":kt("beforetoggle",e),kt("toggle",e),jl(e,"popover",i);break;case"xlinkActuate":Ui(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ui(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ui(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ui(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ui(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ui(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=TM.get(n)||n,jl(e,n,i))}}function wd(e,t,n,i,a,s){switch(n){case"style":y_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?_r(e,i):(typeof i=="number"||typeof i=="bigint")&&_r(e,""+i);break;case"onScroll":i!=null&&kt("scroll",e);break;case"onScrollEnd":i!=null&&kt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!g_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Tn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):jl(e,n,i)}}}function sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:fe(e,t,s,r,n,null)}}a&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":kt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,t));break;default:fe(e,t,i,d,n,null)}}x_(e,s,o,l,c,r,a,!1);return;case"select":kt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?or(e,!!i,t,!1):n!=null&&or(e,!!i,n,!0);return;case"textarea":kt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:fe(e,t,r,o,n,null)}M_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(i=0;i<Lo.length;i++)kt(Lo[i],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:fe(e,t,c,i,n,null)}return;default:if(Vh(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&wd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function Jy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||fe(e,t,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:h!==p&&fe(e,t,u,h,i,p)}}td(e,r,o,l,c,d,s,a);return;case"select":h=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||fe(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&fe(e,t,a,s,i,l)}t=o,n=r,i=h,u!=null?or(e,!!n,u,!1):!!i!=!!n&&(t!=null?or(e,!!n,t,!0):or(e,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==s&&fe(e,t,r,a,i,s)}S_(e,u,h);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:fe(e,t,_,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:fe(e,t,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&fe(e,t,E,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,t));break;default:fe(e,t,c,u,i,h)}return;default:if(Vh(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&wd(e,t,g,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||wd(e,t,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&fe(e,t,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||fe(e,t,p,u,i,h)}function pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&pg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&pg(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dd=null,Ud=null;function Bc(e){return e.nodeType===9?e:e.ownerDocument}function mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ax(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var of=null;function tE(){var e=window.event;return e&&e.type==="popstate"?e===of?!1:(of=e,!0):(of=null,!1)}var Rx=typeof setTimeout=="function"?setTimeout:void 0,eE=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(e){return gg.resolve(null).then(e).catch(iE)}:Rx;function iE(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function _g(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Tr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Eo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Eo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[ko]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Eo(e.ownerDocument.body);n=a}while(n);Tr(t)}function vg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ld(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ld(n),Gh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function aE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ko])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function sE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function Cx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ti(e.nextSibling),e===null))return null;return e}function Od(e){return e.data==="$?"||e.data==="$~"}function Pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Id=null;function xg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wx(e,t,n){switch(t=Bc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function Eo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gh(e)}var ni=new Map,Mg=new Set;function zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=ne.d;ne.d={f:oE,r:lE,D:cE,C:uE,L:fE,m:dE,X:pE,S:hE,M:mE};function oE(){var e=ra.f(),t=mu();return e||t}function lE(e){var t=Nr(e);t!==null&&t.tag===5&&t.type==="form"?yv(t):ra.r(e)}var Ir=typeof document>"u"?null:document;function Dx(e,t,n){var i=Ir;if(i&&typeof t=="string"&&t){var a=Zn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Mg.has(a)||(Mg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),sn(t,"link",e),Qe(t),i.head.appendChild(t)))}}function cE(e){ra.D(e),Dx("dns-prefetch",e,null)}function uE(e,t){ra.C(e,t),Dx("preconnect",e,t)}function fE(e,t,n){ra.L(e,t,n);var i=Ir;if(i&&e&&t){var a='link[rel="preload"][as="'+Zn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Zn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Zn(n.imageSizes)+'"]')):a+='[href="'+Zn(e)+'"]';var s=a;switch(t){case"style":s=br(e);break;case"script":s=Fr(e)}ni.has(s)||(e=Ee({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ni.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ko(s))||t==="script"&&i.querySelector(Qo(s))||(t=i.createElement("link"),sn(t,"link",e),Qe(t),i.head.appendChild(t)))}}function dE(e,t){ra.m(e,t);var n=Ir;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Zn(i)+'"][href="'+Zn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Fr(e)}if(!ni.has(s)&&(e=Ee({rel:"modulepreload",href:e},t),ni.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qo(s)))return}i=n.createElement("link"),sn(i,"link",e),Qe(i),n.head.appendChild(i)}}}function hE(e,t,n){ra.S(e,t,n);var i=Ir;if(i&&e){var a=rr(i).hoistableStyles,s=br(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ko(s)))o.loading=5;else{e=Ee({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ni.get(s))&&Ap(e,n);var l=r=i.createElement("link");Qe(l),sn(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,sc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function pE(e,t){ra.X(e,t);var n=Ir;if(n&&e){var i=rr(n).hoistableScripts,a=Fr(e),s=i.get(a);s||(s=n.querySelector(Qo(a)),s||(e=Ee({src:e,async:!0},t),(t=ni.get(a))&&Rp(e,t),s=n.createElement("script"),Qe(s),sn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function mE(e,t){ra.M(e,t);var n=Ir;if(n&&e){var i=rr(n).hoistableScripts,a=Fr(e),s=i.get(a);s||(s=n.querySelector(Qo(a)),s||(e=Ee({src:e,async:!0,type:"module"},t),(t=ni.get(a))&&Rp(e,t),s=n.createElement("script"),Qe(s),sn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function yg(e,t,n,i){var a=(a=Da.current)?zc(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=rr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var s=rr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Ko(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(e,n),s||gE(a,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fr(n),n=rr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function br(e){return'href="'+Zn(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function Ux(e){return Ee({},e,{"data-precedence":e.precedence,precedence:null})}function gE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),sn(t,"link",n),Qe(t),e.head.appendChild(t))}function Fr(e){return'[src="'+Zn(e)+'"]'}function Qo(e){return"script[async]"+e}function Eg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Zn(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var a=Ee({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),sn(i,"style",a),sc(i,n.precedence,e),t.instance=i;case"stylesheet":a=br(n.href);var s=e.querySelector(Ko(a));if(s)return t.state.loading|=4,t.instance=s,Qe(s),s;i=Ux(n),(a=ni.get(a))&&Ap(i,a),s=(e.ownerDocument||e).createElement("link"),Qe(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(s,"link",i),t.state.loading|=4,sc(s,n.precedence,e),t.instance=s;case"script":return s=Fr(n.src),(a=e.querySelector(Qo(s)))?(t.instance=a,Qe(a),a):(i=n,(a=ni.get(s))&&(i=Ee({},n),Rp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),sn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,sc(i,n.precedence,e));return t.instance}function sc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ap(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rc=null;function bg(e,t,n){if(rc===null){var i=new Map,a=rc=new Map;a.set(n,i)}else a=rc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[ko]||s[tn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Tg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function _E(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function vE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=br(i.href),s=t.querySelector(Ko(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Qe(s);return}s=t.ownerDocument||t,i=Ux(i),(a=ni.get(a))&&Ap(i,a),s=s.createElement("link"),Qe(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Hc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var lf=0;function xE(e,t){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&lf===0&&(lf=62500*$y());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>lf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gc=null;function oc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gc=new Map,t.forEach(SE,e),Gc=null,Hc.call(e))}function SE(e,t){if(!(t.state.loading&4)){var n=Gc.get(e);if(n)var i=n.get(null);else{n=new Map,Gc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Hc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Po={$$typeof:ki,Provider:null,Consumer:null,_currentValue:os,_currentValue2:os,_threadCount:0};function ME(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.hiddenUpdates=Du(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Lx(e,t,n,i,a,s,r,o,l,c,d,p){return e=new ME(e,t,n,r,l,c,d,p,o),t=1,s===!0&&(t|=24),s=On(3,null,null,t),e.current=s,s.stateNode=e,t=$h(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},np(s),e}function Ox(e){return e?(e=er,e):er}function Px(e,t,n,i,a,s){a=Ox(a),i.context===null?i.context=a:i.pendingContext=a,i=Na(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=La(e,i,t),n!==null&&(yn(n,e,t),mo(n,e,t))}function Ag(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cp(e,t){Ag(e,t),(e=e.alternate)&&Ag(e,t)}function Ix(e){if(e.tag===13||e.tag===31){var t=Es(e,67108864);t!==null&&yn(t,e,67108864),Cp(e,67108864)}}function Rg(e){if(e.tag===13||e.tag===31){var t=zn();t=zh(t);var n=Es(e,t);n!==null&&yn(n,e,t),Cp(e,t)}}var Vc=!0;function yE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ne.p;try{ne.p=2,wp(e,t,n,i)}finally{ne.p=s,Ut.T=a}}function EE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ne.p;try{ne.p=8,wp(e,t,n,i)}finally{ne.p=s,Ut.T=a}}function wp(e,t,n,i){if(Vc){var a=Fd(i);if(a===null)rf(e,t,i,Xc,n),Cg(e,i);else if(TE(a,e,t,n,i))i.stopPropagation();else if(Cg(e,i),t&4&&-1<bE.indexOf(e)){for(;a!==null;){var s=Nr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$a(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}wi(s),!(ee&6)&&(Nc=In()+500,Zo(0))}}break;case 31:case 13:o=Es(s,2),o!==null&&yn(o,s,2),mu(),Cp(s,2)}if(s=Fd(i),s===null&&rf(e,t,i,Xc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else rf(e,t,i,null,n)}}function Fd(e){return e=Xh(e),Dp(e)}var Xc=null;function Dp(e){if(Xc=null,e=Zs(e),e!==null){var t=Ho(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=n_(t),e!==null)return e;e=null}else if(n===31){if(e=i_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xc=e,null}function Fx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cM()){case o_:return 2;case l_:return 8;case vc:case uM:return 32;case c_:return 268435456;default:return 32}default:return 32}}var Bd=!1,Ia=null,Fa=null,Ba=null,Io=new Map,Fo=new Map,ya=[],bE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cg(e,t){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function Yr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Nr(t),t!==null&&Ix(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function TE(e,t,n,i,a){switch(t){case"focusin":return Ia=Yr(Ia,e,t,n,i,a),!0;case"dragenter":return Fa=Yr(Fa,e,t,n,i,a),!0;case"mouseover":return Ba=Yr(Ba,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Io.set(s,Yr(Io.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Fo.set(s,Yr(Fo.get(s)||null,e,t,n,i,a)),!0}return!1}function Bx(e){var t=Zs(e.target);if(t!==null){var n=Ho(t);if(n!==null){if(t=n.tag,t===13){if(t=n_(n),t!==null){e.blockedOn=t,dm(e.priority,function(){Rg(n)});return}}else if(t===31){if(t=i_(n),t!==null){e.blockedOn=t,dm(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);nd=i,n.target.dispatchEvent(i),nd=null}else return t=Nr(n),t!==null&&Ix(t),e.blockedOn=n,!1;t.shift()}return!0}function wg(e,t,n){lc(e)&&n.delete(t)}function AE(){Bd=!1,Ia!==null&&lc(Ia)&&(Ia=null),Fa!==null&&lc(Fa)&&(Fa=null),Ba!==null&&lc(Ba)&&(Ba=null),Io.forEach(wg),Fo.forEach(wg)}function _l(e,t){e.blockedOn===t&&(e.blockedOn=null,Bd||(Bd=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,AE)))}var vl=null;function Dg(e){vl!==e&&(vl=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){vl===e&&(vl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Dp(i||n)===null)continue;break}var s=Nr(n);s!==null&&(e.splice(t,3),t-=3,vd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Tr(e){function t(l){return _l(l,e)}Ia!==null&&_l(Ia,e),Fa!==null&&_l(Fa,e),Ba!==null&&_l(Ba,e),Io.forEach(t),Fo.forEach(t);for(var n=0;n<ya.length;n++){var i=ya[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ya.length&&(n=ya[0],n.blockedOn===null);)Bx(n),n.blockedOn===null&&ya.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Tn]||null;if(typeof s=="function")r||Dg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Tn]||null)o=r.formAction;else if(Dp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Dg(n)}}}function zx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Up(e){this._internalRoot=e}vu.prototype.render=Up.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=zn();Px(n,i,e,t,null,null)};vu.prototype.unmount=Up.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Px(e.current,2,null,e,null,null),mu(),t[Ur]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=p_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ya.length&&t!==0&&t<ya[n].priority;n++);ya.splice(n,0,e),n===0&&Bx(e)}};var Ug=t_.version;if(Ug!=="19.2.5")throw Error(K(527,Ug,"19.2.5"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=nM(t),e=e!==null?a_(e):null,e=e===null?null:e.stateNode,e};var RE={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Go=xl.inject(RE),Fn=xl}catch{}}eu.createRoot=function(e,t){if(!e_(e))throw Error(K(299));var n=!1,i="",a=Dv,s=Uv,r=Nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Lx(e,1,!1,null,null,n,i,null,a,s,r,zx),e[Ur]=t.current,Tp(e),new Up(t)};eu.hydrateRoot=function(e,t,n){if(!e_(e))throw Error(K(299));var i=!1,a="",s=Dv,r=Uv,o=Nv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Lx(e,1,!0,t,n??null,i,a,l,s,r,o,zx),t.context=Ox(null),n=t.current,i=zn(),i=zh(i),a=Na(i),a.callback=null,La(n,a,i),n=i,t.current.lanes=n,Xo(t,n),wi(t),e[Ur]=t.current,Tp(e),new vu(t)};eu.version="19.2.5";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(e){console.error(e)}}Hx(),j0.exports=eu;var CE=j0.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="184",wE=0,Ng=1,DE=2,cc=1,UE=2,oo=3,Xa=0,En=1,Xi=2,Qi=0,hr=1,Lg=2,Og=3,Pg=4,NE=5,is=100,LE=101,OE=102,PE=103,IE=104,FE=200,BE=201,zE=202,HE=203,zd=204,Hd=205,GE=206,VE=207,XE=208,kE=209,WE=210,qE=211,YE=212,jE=213,ZE=214,Gd=0,Vd=1,Xd=2,Ar=3,kd=4,Wd=5,qd=6,Yd=7,Gx=0,KE=1,QE=2,Ei=0,Vx=1,Xx=2,kx=3,Wx=4,qx=5,Yx=6,jx=7,Zx=300,_s=301,Rr=302,cf=303,uf=304,xu=306,jd=1e3,Yi=1001,Zd=1002,an=1003,JE=1004,Sl=1005,cn=1006,ff=1007,ss=1008,Jn=1009,Kx=1010,Qx=1011,Bo=1012,Lp=1013,Ti=1014,Si=1015,aa=1016,Op=1017,Pp=1018,zo=1020,Jx=35902,$x=35899,tS=1021,eS=1022,ui=1023,sa=1026,rs=1027,nS=1028,Ip=1029,vs=1030,Fp=1031,Bp=1033,uc=33776,fc=33777,dc=33778,hc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37488,ah=37489,kc=37490,sh=37491,rh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,Sh=36492,Mh=36494,yh=36495,Eh=36283,bh=36284,Wc=36285,Th=36286,$E=3200,Ig=0,tb=1,Ea="",Wn="srgb",qc="srgb-linear",Yc="linear",ae="srgb",Ds=7680,Fg=519,eb=512,nb=513,ib=514,zp=515,ab=516,sb=517,Hp=518,rb=519,Bg=35044,zg="300 es",Mi=2e3,jc=2001;function ob(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Zc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function lb(){const e=Zc("canvas");return e.style.display="block",e}const Hg={};function Gg(...e){const t="THREE."+e.shift();console.log(t,...e)}function iS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ct(...e){e=iS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function $t(...e){e=iS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ah(...e){const t=e.join(" ");t in Hg||(Hg[t]=!0,Ct(...e))}function cb(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ub={[Gd]:Vd,[Xd]:qd,[kd]:Yd,[Ar]:Wd,[Vd]:Gd,[qd]:Xd,[Yd]:kd,[Wd]:Ar};class Ts{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=Math.PI/180,Rh=180/Math.PI;function Jo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[e&255]+on[e>>8&255]+on[e>>16&255]+on[e>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Kt(e,t,n){return Math.max(t,Math.min(n,e))}function fb(e,t){return(e%t+t)%t}function hf(e,t,n){return(1-n)*e+n*t}function jr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function xn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Wp=class Wp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wp.prototype.isVector2=!0;let oe=Wp;class Br{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],_=s[r+2],E=s[r+3];if(p!==E||l!==u||c!==h||d!==_){let g=l*u+c*h+d*_+p*E;g<0&&(u=-u,h=-h,_=-_,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);f=Math.sin(f*m)/v,o=Math.sin(o*m)/v,l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+E*o;const m=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=m,c*=m,d*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],_=s[r+3];return t[n]=o*_+d*p+l*h-c*u,t[n+1]=l*_+d*u+c*p-o*h,t[n+2]=c*_+d*h+o*u-l*p,t[n+3]=d*_-o*p-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),u=l(i/2),h=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qp=class qp{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Vg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Vg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-s*p,this.z=a+l*p+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pf.copy(this).projectOnVector(t),this.sub(pf)}reflect(t){return this.sub(pf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qp.prototype.isVector3=!0;let z=qp;const pf=new z,Vg=new Br,Yp=class Yp{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],E=a[0],g=a[3],f=a[6],m=a[1],v=a[4],M=a[7],C=a[2],A=a[5],R=a[8];return s[0]=r*E+o*m+l*C,s[3]=r*g+o*v+l*A,s[6]=r*f+o*M+l*R,s[1]=c*E+d*m+p*C,s[4]=c*g+d*v+p*A,s[7]=c*f+d*M+p*R,s[2]=u*E+h*m+_*C,s[5]=u*g+h*v+_*A,s[8]=u*f+h*M+_*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*r-o*c,u=o*l-d*s,h=c*s-r*l,_=n*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return t[0]=p*E,t[1]=(a*c-d*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(d*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=h*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(mf.makeScale(t,n)),this}rotate(t){return this.premultiply(mf.makeRotation(-t)),this}translate(t,n){return this.premultiply(mf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yp.prototype.isMatrix3=!0;let Ot=Yp;const mf=new Ot,Xg=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const e={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ae&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ea?Yc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Ah("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Ah("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[qc]:{primaries:t,whitePoint:i,transfer:Yc,toXYZ:Xg,fromXYZ:kg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Xg,fromXYZ:kg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}const Zt=db();function Ji(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Us;class hb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Us===void 0&&(Us=Zc("canvas")),Us.width=t.width,Us.height=t.height;const a=Us.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Us}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Zc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ji(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pb=0;class Gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(gf(a[r].image)):s.push(gf(a[r]))}else s=gf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function gf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?hb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let mb=0;const _f=new z;class pn extends Ts{constructor(t=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Yi,a=Yi,s=cn,r=ss,o=ui,l=Jn,c=pn.DEFAULT_ANISOTROPY,d=Ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Jo(),this.name="",this.source=new Gp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_f).x}get height(){return this.source.getSize(_f).y}get depth(){return this.source.getSize(_f).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ct(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Zx;pn.DEFAULT_ANISOTROPY=1;const jp=class jp{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],_=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(h+1)/2,C=(f+1)/2,A=(d+u)/4,R=(p+E)/4,S=(_+g)/4;return v>M&&v>C?v<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(v),a=A/i,s=R/i):M>C?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=A/a,s=S/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=S/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-E)*(p-E)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-E)/m,this.z=(u-d)/m,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this.w=Kt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this.w=Kt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jp.prototype.isVector4=!0;let Pe=jp;class gb extends Ts{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Pe(0,0,t,n),this.scissorTest=!1,this.viewport=new Pe(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new pn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Gp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends gb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class aS extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(t,n,i,a,s,r,o,l,c,d,p,u,h,_,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,p,u,h,_,E,g)}set(t,n,i,a,s,r,o,l,c,d,p,u,h,_,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Ns.setFromMatrixColumn(t,0).length(),s=1/Ns.setFromMatrixColumn(t,1).length(),r=1/Ns.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const u=r*d,h=r*p,_=o*d,E=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+_*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=_+h*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,h=l*p,_=c*d,E=c*p;n[0]=u+E*o,n[4]=_*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=h*o-_,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,h=l*p,_=c*d,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=_+h*o,n[1]=h+_*o,n[5]=r*d,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,h=r*p,_=o*d,E=o*p;n[0]=l*d,n[4]=_*c-h,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,h=r*c,_=o*l,E=o*c;n[0]=l*d,n[4]=E-u*p,n[8]=_*p+h,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+_,n[10]=u-E*p}else if(t.order==="XZY"){const u=r*l,h=r*c,_=o*l,E=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+E,n[5]=r*d,n[9]=h*p-_,n[2]=_*p-h,n[6]=o*d,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vb,t,xb)}lookAt(t,n,i){const a=this.elements;return Dn.subVectors(t,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),fa.crossVectors(i,Dn),fa.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),fa.crossVectors(i,Dn)),fa.normalize(),Ml.crossVectors(Dn,fa),a[0]=fa.x,a[4]=Ml.x,a[8]=Dn.x,a[1]=fa.y,a[5]=Ml.y,a[9]=Dn.y,a[2]=fa.z,a[6]=Ml.z,a[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],E=i[6],g=i[10],f=i[14],m=i[3],v=i[7],M=i[11],C=i[15],A=a[0],R=a[4],S=a[8],T=a[12],N=a[1],w=a[5],B=a[9],k=a[13],Y=a[2],P=a[6],U=a[10],D=a[14],H=a[3],j=a[7],$=a[11],gt=a[15];return s[0]=r*A+o*N+l*Y+c*H,s[4]=r*R+o*w+l*P+c*j,s[8]=r*S+o*B+l*U+c*$,s[12]=r*T+o*k+l*D+c*gt,s[1]=d*A+p*N+u*Y+h*H,s[5]=d*R+p*w+u*P+h*j,s[9]=d*S+p*B+u*U+h*$,s[13]=d*T+p*k+u*D+h*gt,s[2]=_*A+E*N+g*Y+f*H,s[6]=_*R+E*w+g*P+f*j,s[10]=_*S+E*B+g*U+f*$,s[14]=_*T+E*k+g*D+f*gt,s[3]=m*A+v*N+M*Y+C*H,s[7]=m*R+v*w+M*P+C*j,s[11]=m*S+v*B+M*U+C*$,s[15]=m*T+v*k+M*D+C*gt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],u=t[10],h=t[14],_=t[3],E=t[7],g=t[11],f=t[15],m=l*h-c*u,v=o*h-c*p,M=o*u-l*p,C=r*h-c*d,A=r*u-l*d,R=r*p-o*d;return n*(E*m-g*v+f*M)-i*(_*m-g*C+f*A)+a*(_*v-E*C+f*R)-s*(_*M-E*A+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],u=t[10],h=t[11],_=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,v=n*l-a*r,M=n*c-s*r,C=i*l-a*o,A=i*c-s*o,R=a*c-s*l,S=d*E-p*_,T=d*g-u*_,N=d*f-h*_,w=p*g-u*E,B=p*f-h*E,k=u*f-h*g,Y=m*k-v*B+M*w+C*N-A*T+R*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/Y;return t[0]=(o*k-l*B+c*w)*P,t[1]=(a*B-i*k-s*w)*P,t[2]=(E*R-g*A+f*C)*P,t[3]=(u*A-p*R-h*C)*P,t[4]=(l*N-r*k-c*T)*P,t[5]=(n*k-a*N+s*T)*P,t[6]=(g*M-_*R-f*v)*P,t[7]=(d*R-u*M+h*v)*P,t[8]=(r*B-o*N+c*S)*P,t[9]=(i*N-n*B-s*S)*P,t[10]=(_*A-E*M+f*m)*P,t[11]=(p*M-d*A-h*m)*P,t[12]=(o*T-r*w-l*S)*P,t[13]=(n*w-i*T+a*S)*P,t[14]=(E*v-_*C-g*m)*P,t[15]=(d*C-p*v+u*m)*P,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,p=o+o,u=s*c,h=s*d,_=s*p,E=r*d,g=r*p,f=o*p,m=l*c,v=l*d,M=l*p,C=i.x,A=i.y,R=i.z;return a[0]=(1-(E+f))*C,a[1]=(h+M)*C,a[2]=(_-v)*C,a[3]=0,a[4]=(h-M)*A,a[5]=(1-(u+f))*A,a[6]=(g+m)*A,a[7]=0,a[8]=(_+v)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ns.set(a[0],a[1],a[2]).length();const o=Ns.set(a[4],a[5],a[6]).length(),l=Ns.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ai.copy(this);const c=1/r,d=1/o,p=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Mi,l=!1){const c=this.elements,d=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),h=(i+a)/(i-a);let _,E;if(l)_=s/(r-s),E=r*s/(r-s);else if(o===Mi)_=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===jc)_=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Mi,l=!1){const c=this.elements,d=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),h=-(i+a)/(i-a);let _,E;if(l)_=1/(r-s),E=r/(r-s);else if(o===Mi)_=-2/(r-s),E=-(r+s)/(r-s);else if(o===jc)_=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};$c.prototype.isMatrix4=!0;let Fe=$c;const Ns=new z,ai=new Fe,vb=new z(0,0,0),xb=new z(1,1,1),fa=new z,Ml=new z,Dn=new z,Wg=new Fe,qg=new Br;class xs{constructor(t=0,n=0,i=0,a=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Wg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return qg.setFromEuler(this),this.setFromQuaternion(qg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sb=0;const Yg=new z,Ls=new Br,Pi=new Fe,yl=new z,Zr=new z,Mb=new z,yb=new Br,jg=new z(1,0,0),Zg=new z(0,1,0),Kg=new z(0,0,1),Qg={type:"added"},Eb={type:"removed"},Os={type:"childadded",child:null},vf={type:"childremoved",child:null};class mn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new z,n=new xs,i=new Br,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ot}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(Zg,t)}rotateZ(t){return this.rotateOnAxis(Kg,t)}translateOnAxis(t,n){return Yg.copy(t).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(Zg,t)}translateZ(t){return this.translateOnAxis(Kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?yl.copy(t):yl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Zr,yl,this.up):Pi.lookAt(yl,Zr,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qg),Os.child=t,this.dispatchEvent(Os),Os.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Eb),vf.child=t,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qg),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,Mb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,yb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),p=r(t.shapes),u=r(t.skeletons),h=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}mn.DEFAULT_UP=new z(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const rS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Sf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ie{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Zt.workingColorSpace){if(t=fb(t,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Sf(r,s,t+1/3),this.g=Sf(r,s,t),this.b=Sf(r,s,t-1/3)}return Zt.colorSpaceToWorking(this,a),this}setStyle(t,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ct("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const i=rS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Zt.workingToColorSpace(ln.copy(this),t),Math.round(Kt(ln.r*255,0,255))*65536+Math.round(Kt(ln.g*255,0,255))*256+Math.round(Kt(ln.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(ln.copy(this),n);const i=ln.r,a=ln.g,s=ln.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(ln.copy(this),n),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Wn){Zt.workingToColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,a=ln.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(da),this.setHSL(da.h+t,da.s+n,da.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(da),t.getHSL(bl);const i=hf(da.h,bl.h,n),a=hf(da.s,bl.s,n),s=hf(da.l,bl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ie;ie.NAMES=rS;class Tb extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Ii=new z,Mf=new z,Fi=new z,Ps=new z,Is=new z,Jg=new z,yf=new z,Ef=new z,bf=new z,Tf=new Pe,Af=new Pe,Rf=new Pe;class ci{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),si.subVectors(t,n),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){si.subVectors(a,n),Ii.subVectors(i,n),Mf.subVectors(t,n);const r=si.dot(si),o=si.dot(Ii),l=si.dot(Mf),c=Ii.dot(Ii),d=Ii.dot(Mf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,_=(r*d-o*l)*u;return s.set(1-h-_,_,h)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Tf.setScalar(0),Af.setScalar(0),Rf.setScalar(0),Tf.fromBufferAttribute(t,n),Af.fromBufferAttribute(t,i),Rf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Tf,s.x),r.addScaledVector(Af,s.y),r.addScaledVector(Rf,s.z),r}static isFrontFacing(t,n,i,a){return si.subVectors(i,n),Ii.subVectors(t,n),si.cross(Ii).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ci.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Ps.subVectors(a,i),Is.subVectors(s,i),yf.subVectors(t,i);const l=Ps.dot(yf),c=Is.dot(yf);if(l<=0&&c<=0)return n.copy(i);Ef.subVectors(t,a);const d=Ps.dot(Ef),p=Is.dot(Ef);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Ps,r);bf.subVectors(t,s);const h=Ps.dot(bf),_=Is.dot(bf);if(_>=0&&h<=_)return n.copy(s);const E=h*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Is,o);const g=d*_-h*p;if(g<=0&&p-d>=0&&h-_>=0)return Jg.subVectors(s,a),o=(p-d)/(p-d+(h-_)),n.copy(a).addScaledVector(Jg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Ps,r).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $o{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(s,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(t.matrixWorld),this.union(Tl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Al.subVectors(this.max,Kr),Fs.subVectors(t.a,Kr),Bs.subVectors(t.b,Kr),zs.subVectors(t.c,Kr),ha.subVectors(Bs,Fs),pa.subVectors(zs,Bs),ja.subVectors(Fs,zs);let n=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-ja.z,ja.y,ha.z,0,-ha.x,pa.z,0,-pa.x,ja.z,0,-ja.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-ja.y,ja.x,0];return!Cf(n,Fs,Bs,zs,Al)||(n=[1,0,0,0,1,0,0,0,1],!Cf(n,Fs,Bs,zs,Al))?!1:(Rl.crossVectors(ha,pa),n=[Rl.x,Rl.y,Rl.z],Cf(n,Fs,Bs,zs,Al))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bi=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,Tl=new $o,Fs=new z,Bs=new z,zs=new z,ha=new z,pa=new z,ja=new z,Kr=new z,Al=new z,Rl=new z,Za=new z;function Cf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Za.fromArray(e,s);const o=a.x*Math.abs(Za.x)+a.y*Math.abs(Za.y)+a.z*Math.abs(Za.z),l=t.dot(Za),c=n.dot(Za),d=i.dot(Za);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Be=new z,Cl=new oe;let Ab=0;class ei extends Ts{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Bg,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(t),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(t,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(t,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(t,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),a=xn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),a=xn(a,this.array),s=xn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class oS extends ei{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class lS extends ei{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class bn extends ei{constructor(t,n,i){super(new Float32Array(t),n,i)}}const Rb=new $o,Qr=new z,wf=new z;class tl{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Rb.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Qr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(wf)),this.expandByPoint(Qr.copy(t.center).sub(wf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cb=0;const Xn=new Fe,Df=new mn,Hs=new z,Un=new $o,Jr=new $o,Ze=new z;class An extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ob(t)?lS:oS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,n,i){return Xn.makeTranslation(t,n,i),this.applyMatrix4(Xn),this}scale(t,n,i){return Xn.makeScale(t,n,i),this.applyMatrix4(Xn),this}lookAt(t){return Df.lookAt(t),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(Un.min,Jr.min),Un.expandByPoint(Ze),Ze.addVectors(Un.max,Jr.max),Un.expandByPoint(Ze)):(Un.expandByPoint(Jr.min),Un.expandByPoint(Jr.max))}Un.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ze.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ze));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ze.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(t,c),Ze.add(Hs)),a=Math.max(a,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new z,l[S]=new z;const c=new z,d=new z,p=new z,u=new oe,h=new oe,_=new oe,E=new z,g=new z;function f(S,T,N){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,N),u.fromBufferAttribute(s,S),h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),d.sub(c),p.sub(c),h.sub(u),_.sub(u);const w=1/(h.x*_.y-_.x*h.y);isFinite(w)&&(E.copy(d).multiplyScalar(_.y).addScaledVector(p,-h.y).multiplyScalar(w),g.copy(p).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(w),o[S].add(E),o[T].add(E),o[N].add(E),l[S].add(g),l[T].add(g),l[N].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let S=0,T=m.length;S<T;++S){const N=m[S],w=N.start,B=N.count;for(let k=w,Y=w+B;k<Y;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const v=new z,M=new z,C=new z,A=new z;function R(S){C.fromBufferAttribute(a,S),A.copy(C);const T=o[S];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(A,T);const w=M.dot(l[S])<0?-1:1;r.setXYZW(S,v.x,v.y,v.z,w)}for(let S=0,T=m.length;S<T;++S){const N=m[S],w=N.start,B=N.count;for(let k=w,Y=w+B;k<Y;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,d=new z,p=new z;if(t)for(let u=0,h=t.count;u<h;u+=3){const _=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ze.fromBufferAttribute(t,n),Ze.normalize(),t.setXYZ(n,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?h=l[E]*o.data.stride+o.offset:h=l[E]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new ei(u,d,p)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=t(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wb=0;class zr extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=hr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Hd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ct(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Xa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const zi=new z,Uf=new z,wl=new z,ma=new z,Nf=new z,Dl=new z,Lf=new z;class Vp{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=zi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Uf.copy(t).add(n).multiplyScalar(.5),wl.copy(n).sub(t).normalize(),ma.copy(this.origin).sub(Uf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(wl),o=ma.dot(this.direction),l=-ma.dot(wl),c=ma.lengthSq(),d=Math.abs(1-r*r);let p,u,h,_;if(d>0)if(p=r*l-o,u=r*o-l,_=s*d,p>=0)if(u>=-_)if(u<=_){const E=1/d;p*=E,u*=E,h=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Uf).addScaledVector(wl,u),h}intersectSphere(t,n){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,n,i,a,s){Nf.subVectors(n,t),Dl.subVectors(i,t),Lf.crossVectors(Nf,Dl);let r=this.direction.dot(Lf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ma.subVectors(this.origin,t);const l=o*this.direction.dot(Dl.crossVectors(ma,Dl));if(l<0)return null;const c=o*this.direction.dot(Nf.cross(ma));if(c<0||l+c>r)return null;const d=-o*ma.dot(Lf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xp extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $g=new Fe,Ka=new Vp,Ul=new tl,t0=new z,Nl=new z,Ll=new z,Ol=new z,Of=new z,Pl=new z,e0=new z,Il=new z;class Ai extends mn{constructor(t=new An,n=new Xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(Of.fromBufferAttribute(p,t),r?Pl.addScaledVector(Of,d):Pl.addScaledVector(Of.sub(n),d))}n.add(Pl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ka.copy(t.ray).recast(t.near),!(Ul.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(Ul,t0)===null||Ka.origin.distanceToSquared(t0)>(t.far-t.near)**2))&&($g.copy(s).invert(),Ka.copy(t.ray).applyMatrix4($g),!(i.boundingBox!==null&&Ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ka)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,h.start),v=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let M=m,C=v;M<C;M+=3){const A=o.getX(M),R=o.getX(M+1),S=o.getX(M+2);a=Fl(this,f,t,i,c,d,p,A,R,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let g=_,f=E;g<f;g+=3){const m=o.getX(g),v=o.getX(g+1),M=o.getX(g+2);a=Fl(this,r,t,i,c,d,p,m,v,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let M=m,C=v;M<C;M+=3){const A=M,R=M+1,S=M+2;a=Fl(this,f,t,i,c,d,p,A,R,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let g=_,f=E;g<f;g+=3){const m=g,v=g+1,M=g+2;a=Fl(this,r,t,i,c,d,p,m,v,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Db(e,t,n,i,a,s,r,o){let l;if(t.side===En?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Xa,o),l===null)return null;Il.copy(o),Il.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:e}}function Fl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Nl),e.getVertexPosition(l,Ll),e.getVertexPosition(c,Ol);const d=Db(e,t,n,i,Nl,Ll,Ol,e0);if(d){const p=new z;ci.getBarycoord(e0,Nl,Ll,Ol,p),a&&(d.uv=ci.getInterpolatedAttribute(a,o,l,c,p,new oe)),s&&(d.uv1=ci.getInterpolatedAttribute(s,o,l,c,p,new oe)),r&&(d.normal=ci.getInterpolatedAttribute(r,o,l,c,p,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};ci.getNormal(Nl,Ll,Ol,u.normal),d.face=u,d.barycoord=p}return d}class Ub extends pn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=an,d=an,p,u){super(null,r,o,l,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pf=new z,Nb=new z,Lb=new Ot;class ns{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Pf.subVectors(i,n).cross(Nb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Pf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Lb.getNormalMatrix(t),a=this.coplanarPoint(Pf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qa=new tl,Ob=new oe(.5,.5),Bl=new z;class cS{constructor(t=new ns,n=new ns,i=new ns,a=new ns,s=new ns,r=new ns){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Mi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],_=s[8],E=s[9],g=s[10],f=s[11],m=s[12],v=s[13],M=s[14],C=s[15];if(a[0].setComponents(c-r,h-d,f-_,C-m).normalize(),a[1].setComponents(c+r,h+d,f+_,C+m).normalize(),a[2].setComponents(c+o,h+p,f+E,C+v).normalize(),a[3].setComponents(c-o,h-p,f-E,C-v).normalize(),i)a[4].setComponents(l,u,g,M).normalize(),a[5].setComponents(c-l,h-u,f-g,C-M).normalize();else if(a[4].setComponents(c-l,h-u,f-g,C-M).normalize(),n===Mi)a[5].setComponents(c+l,h+u,f+g,C+M).normalize();else if(n===jc)a[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qa)}intersectsSprite(t){Qa.center.set(0,0,0);const n=Ob.distanceTo(t.center);return Qa.radius=.7071067811865476+n,Qa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qa)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Bl.x=a.normal.x>0?t.max.x:t.min.x,Bl.y=a.normal.y>0?t.max.y:t.min.y,Bl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uS extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new z,Qc=new z,n0=new Fe,$r=new Vp,zl=new tl,If=new z,i0=new z;class Pb extends mn{constructor(t=new An,n=new uS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Kc.fromBufferAttribute(n,a-1),Qc.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Kc.distanceTo(Qc);t.setAttribute("lineDistance",new bn(i,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(a),zl.radius+=s,t.ray.intersectsSphere(zl)===!1)return;n0.copy(a).invert(),$r.copy(t.ray).applyMatrix4(n0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,r.start),_=Math.min(d.count,r.start+r.count);for(let E=h,g=_-1;E<g;E+=c){const f=d.getX(E),m=d.getX(E+1),v=Hl(this,t,$r,l,f,m,E);v&&n.push(v)}if(this.isLineLoop){const E=d.getX(_-1),g=d.getX(h),f=Hl(this,t,$r,l,E,g,_-1);f&&n.push(f)}}else{const h=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let E=h,g=_-1;E<g;E+=c){const f=Hl(this,t,$r,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=Hl(this,t,$r,l,_-1,h,_-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(Kc.fromBufferAttribute(o,a),Qc.fromBufferAttribute(o,s),n.distanceSqToSegment(Kc,Qc,If,i0)>i)return;If.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(If);if(!(c<t.near||c>t.far))return{distance:c,point:i0.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const a0=new z,s0=new z;class Ib extends Pb{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)a0.fromBufferAttribute(n,a),s0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+a0.distanceTo(s0);t.setAttribute("lineDistance",new bn(i,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fS extends zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const r0=new Fe,Ch=new Vp,Gl=new tl,Vl=new z;class Fb extends mn{constructor(t=new An,n=new fS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(a),Gl.radius+=s,t.ray.intersectsSphere(Gl)===!1)return;r0.copy(a).invert(),Ch.copy(t.ray).applyMatrix4(r0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let _=u,E=h;_<E;_++){const g=c.getX(_);Vl.fromBufferAttribute(p,g),o0(Vl,g,l,a,t,n,this)}}else{const u=Math.max(0,r.start),h=Math.min(p.count,r.start+r.count);for(let _=u,E=h;_<E;_++)Vl.fromBufferAttribute(p,_),o0(Vl,_,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function o0(e,t,n,i,a,s,r){const o=Ch.distanceSqToPoint(e);if(o<n){const l=new z;Ch.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class dS extends pn{constructor(t=[],n=_s,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cr extends pn{constructor(t,n,i=Ti,a,s,r,o=an,l=an,c,d=sa,p=1){if(d!==sa&&d!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:p};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bb extends Cr{constructor(t,n=Ti,i=_s,a,s,r=an,o=an,l,c=sa){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hS extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class el extends An{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,n,t,r,s,0),_("z","y","x",1,-1,i,n,-t,r,s,1),_("x","z","y",1,1,t,i,n,a,r,2),_("x","z","y",1,-1,t,i,-n,a,r,3),_("x","y","z",1,-1,t,n,i,a,s,4),_("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(p,2));function _(E,g,f,m,v,M,C,A,R,S,T){const N=M/R,w=C/S,B=M/2,k=C/2,Y=A/2,P=R+1,U=S+1;let D=0,H=0;const j=new z;for(let $=0;$<U;$++){const gt=$*w-k;for(let pt=0;pt<P;pt++){const At=pt*N-B;j[E]=At*m,j[g]=gt*v,j[f]=Y,c.push(j.x,j.y,j.z),j[E]=0,j[g]=0,j[f]=A>0?1:-1,d.push(j.x,j.y,j.z),p.push(pt/R),p.push(1-$/S),D+=1}}for(let $=0;$<S;$++)for(let gt=0;gt<R;gt++){const pt=u+gt+P*$,At=u+gt+P*($+1),Vt=u+(gt+1)+P*($+1),wt=u+(gt+1)+P*$;l.push(pt,At,wt),l.push(At,Vt,wt),H+=6}o.addGroup(h,H,T),h+=H,u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Su extends An{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=t/o,u=n/l,h=[],_=[],E=[],g=[];for(let f=0;f<d;f++){const m=f*u-r;for(let v=0;v<c;v++){const M=v*p-s;_.push(M,-m,0),E.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const v=m+c*f,M=m+c*(f+1),C=m+1+c*(f+1),A=m+1+c*f;h.push(v,M,A),h.push(M,C,A)}this.setIndex(h),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(E,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends An{constructor(t=.5,n=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let p=t;const u=(n-t)/a,h=new z,_=new oe;for(let E=0;E<=a;E++){for(let g=0;g<=i;g++){const f=s+g/i*r;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/n+1)/2,_.y=(h.y/n+1)/2,d.push(_.x,_.y)}p+=u}for(let E=0;E<a;E++){const g=E*(i+1);for(let f=0;f<i;f++){const m=f+g,v=m,M=m+i+1,C=m+i+2,A=m+1;o.push(v,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new bn(l,3)),this.setAttribute("normal",new bn(c,3)),this.setAttribute("uv",new bn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function wr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(l0(a))a.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(l0(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function un(e){const t={};for(let n=0;n<e.length;n++){const i=wr(e[n]);for(const a in i)t[a]=i[a]}return t}function l0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zb(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function pS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Hb={clone:wr,merge:un};var Gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=zb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xb extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kb extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wb extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xl=new z,kl=new Br,pi=new z;class mS extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xl,kl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,kl,pi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Xl,kl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,kl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ga=new z,c0=new oe,u0=new oe;class li extends mS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Rh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rh*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-t/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-t/ga.z)}getViewSize(t,n){return this.getViewBounds(t,c0,u0),n.subVectors(u0,c0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(df*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class kp extends mS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=-90,Vs=1;class qb extends mn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(Gs,Vs,t,n);a.layers=this.layers,this.add(a);const s=new li(Gs,Vs,t,n);s.layers=this.layers,this.add(s);const r=new li(Gs,Vs,t,n);r.layers=this.layers,this.add(r);const o=new li(Gs,Vs,t,n);o.layers=this.layers,this.add(o);const l=new li(Gs,Vs,t,n);l.layers=this.layers,this.add(l);const c=new li(Gs,Vs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,u,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Zp=class Zp{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};Zp.prototype.isMatrix2=!0;let f0=Zp;function d0(e,t,n,i){const a=jb(i);switch(n){case tS:return e*t;case nS:return e*t/a.components*a.byteLength;case Ip:return e*t/a.components*a.byteLength;case vs:return e*t*2/a.components*a.byteLength;case Fp:return e*t*2/a.components*a.byteLength;case eS:return e*t*3/a.components*a.byteLength;case ui:return e*t*4/a.components*a.byteLength;case Bp:return e*t*4/a.components*a.byteLength;case uc:case fc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case dc:case hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(e,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(e,8)*Math.max(t,8)/2;case th:case eh:case ih:case ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nh:case kc:case sh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case vh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Mh:case yh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Eh:case bh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wc:case Th:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jb(e){switch(e){case Jn:case Kx:return{byteLength:1,components:1};case Bo:case Qx:case aa:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case Ti:case Lp:case Si:return{byteLength:4,components:1};case Jx:case $x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Zb(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],E=p[h];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,p[u]=E)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const E=p[h];e.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Kb,alphahash_pars_fragment:Qb,alphamap_fragment:Jb,alphamap_pars_fragment:$b,alphatest_fragment:tT,alphatest_pars_fragment:eT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:aT,batching_vertex:sT,begin_vertex:rT,beginnormal_vertex:oT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:gT,color_pars_vertex:_T,color_vertex:vT,common:xT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:MT,displacementmap_pars_vertex:yT,displacementmap_vertex:ET,emissivemap_fragment:bT,emissivemap_pars_fragment:TT,colorspace_fragment:AT,colorspace_pars_fragment:RT,envmap_fragment:CT,envmap_common_pars_fragment:wT,envmap_pars_fragment:DT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:VT,envmap_vertex:NT,fog_vertex:LT,fog_pars_vertex:OT,fog_fragment:PT,fog_pars_fragment:IT,gradientmap_pars_fragment:FT,lightmap_pars_fragment:BT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:XT,lights_toon_pars_fragment:kT,lights_phong_fragment:WT,lights_phong_pars_fragment:qT,lights_physical_fragment:YT,lights_physical_pars_fragment:jT,lights_fragment_begin:ZT,lights_fragment_maps:KT,lights_fragment_end:QT,lightprobes_pars_fragment:JT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:tA,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:nA,map_fragment:iA,map_pars_fragment:aA,map_particle_fragment:sA,map_particle_pars_fragment:rA,metalnessmap_fragment:oA,metalnessmap_pars_fragment:lA,morphinstance_vertex:cA,morphcolor_vertex:uA,morphnormal_vertex:fA,morphtarget_pars_vertex:dA,morphtarget_vertex:hA,normal_fragment_begin:pA,normal_fragment_maps:mA,normal_pars_fragment:gA,normal_pars_vertex:_A,normal_vertex:vA,normalmap_pars_fragment:xA,clearcoat_normal_fragment_begin:SA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:EA,opaque_fragment:bA,packing:TA,premultiplied_alpha_fragment:AA,project_vertex:RA,dithering_fragment:CA,dithering_pars_fragment:wA,roughnessmap_fragment:DA,roughnessmap_pars_fragment:UA,shadowmap_pars_fragment:NA,shadowmap_pars_vertex:LA,shadowmap_vertex:OA,shadowmask_pars_fragment:PA,skinbase_vertex:IA,skinning_pars_vertex:FA,skinning_vertex:BA,skinnormal_vertex:zA,specularmap_fragment:HA,specularmap_pars_fragment:GA,tonemapping_fragment:VA,tonemapping_pars_fragment:XA,transmission_fragment:kA,transmission_pars_fragment:WA,uv_pars_fragment:qA,uv_pars_vertex:YA,uv_vertex:jA,worldpos_vertex:ZA,background_vert:KA,background_frag:QA,backgroundCube_vert:JA,backgroundCube_frag:$A,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distance_vert:a1,distance_frag:s1,equirect_vert:r1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:x1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:y1,meshtoon_frag:E1,points_vert:b1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:w1},ut={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},gi={basic:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:un([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:un([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:un([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:un([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:un([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:un([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:un([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:un([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:un([ut.common,ut.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:un([ut.lights,ut.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gi.physical={uniforms:un([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Wl={r:0,b:0,g:0},D1=new Fe,_S=new Ot;_S.set(-1,0,0,0,1,0,0,0,1);function U1(e,t,n,i,a,s){const r=new ie(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const M=m.backgroundBlurriness>0;v=t.get(v,M)}return v}function _(m){let v=!1;const M=h(m);M===null?g(r,o):M&&M.isColor&&(g(M,1),v=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,v){const M=h(v);M&&(M.isCubeTexture||M.mapping===xu)?(c===void 0&&(c=new Ai(new el(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:wr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_S),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,(d!==M||p!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ai(new Su(2,2),new Ri({name:"BackgroundMaterial",uniforms:wr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(Wl,pS(e)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,v,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),o=v,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:E,dispose:f}}function N1(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(w,B,k,Y,P){let U=!1;const D=p(w,Y,k,B);s!==D&&(s=D,c(s.object)),U=h(w,Y,k,P),U&&_(w,Y,k,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,M(w,B,k,Y),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function d(w){return e.deleteVertexArray(w)}function p(w,B,k,Y){const P=Y.wireframe===!0;let U=i[B.id];U===void 0&&(U={},i[B.id]=U);const D=w.isInstancedMesh===!0?w.id:0;let H=U[D];H===void 0&&(H={},U[D]=H);let j=H[k.id];j===void 0&&(j={},H[k.id]=j);let $=j[P];return $===void 0&&($=u(l()),j[P]=$),$}function u(w){const B=[],k=[],Y=[];for(let P=0;P<n;P++)B[P]=0,k[P]=0,Y[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:Y,object:w,attributes:{},index:null}}function h(w,B,k,Y){const P=s.attributes,U=B.attributes;let D=0;const H=k.getAttributes();for(const j in H)if(H[j].location>=0){const gt=P[j];let pt=U[j];if(pt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),gt===void 0||gt.attribute!==pt||pt&&gt.data!==pt.data)return!0;D++}return s.attributesNum!==D||s.index!==Y}function _(w,B,k,Y){const P={},U=B.attributes;let D=0;const H=k.getAttributes();for(const j in H)if(H[j].location>=0){let gt=U[j];gt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor));const pt={};pt.attribute=gt,gt&&gt.data&&(pt.data=gt.data),P[j]=pt,D++}s.attributes=P,s.attributesNum=D,s.index=Y}function E(){const w=s.newAttributes;for(let B=0,k=w.length;B<k;B++)w[B]=0}function g(w){f(w,0)}function f(w,B){const k=s.newAttributes,Y=s.enabledAttributes,P=s.attributeDivisors;k[w]=1,Y[w]===0&&(e.enableVertexAttribArray(w),Y[w]=1),P[w]!==B&&(e.vertexAttribDivisor(w,B),P[w]=B)}function m(){const w=s.newAttributes,B=s.enabledAttributes;for(let k=0,Y=B.length;k<Y;k++)B[k]!==w[k]&&(e.disableVertexAttribArray(k),B[k]=0)}function v(w,B,k,Y,P,U,D){D===!0?e.vertexAttribIPointer(w,B,k,P,U):e.vertexAttribPointer(w,B,k,Y,P,U)}function M(w,B,k,Y){E();const P=Y.attributes,U=k.getAttributes(),D=B.defaultAttributeValues;for(const H in U){const j=U[H];if(j.location>=0){let $=P[H];if($===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const gt=$.normalized,pt=$.itemSize,At=t.get($);if(At===void 0)continue;const Vt=At.buffer,wt=At.type,J=At.bytesPerElement,ft=wt===e.INT||wt===e.UNSIGNED_INT||$.gpuType===Lp;if($.isInterleavedBufferAttribute){const nt=$.data,Rt=nt.stride,Lt=$.offset;if(nt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<j.locationSize;Dt++)f(j.location+Dt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Dt=0;Dt<j.locationSize;Dt++)g(j.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,Vt);for(let Dt=0;Dt<j.locationSize;Dt++)v(j.location+Dt,pt/j.locationSize,wt,gt,Rt*J,(Lt+pt/j.locationSize*Dt)*J,ft)}else{if($.isInstancedBufferAttribute){for(let nt=0;nt<j.locationSize;nt++)f(j.location+nt,$.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let nt=0;nt<j.locationSize;nt++)g(j.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Vt);for(let nt=0;nt<j.locationSize;nt++)v(j.location+nt,pt/j.locationSize,wt,gt,pt*J,pt/j.locationSize*nt*J,ft)}}else if(D!==void 0){const gt=D[H];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv(j.location,gt);break;case 3:e.vertexAttrib3fv(j.location,gt);break;case 4:e.vertexAttrib4fv(j.location,gt);break;default:e.vertexAttrib1fv(j.location,gt)}}}}m()}function C(){T();for(const w in i){const B=i[w];for(const k in B){const Y=B[k];for(const P in Y){const U=Y[P];for(const D in U)d(U[D].object),delete U[D];delete Y[P]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const B=i[w.id];for(const k in B){const Y=B[k];for(const P in Y){const U=Y[P];for(const D in U)d(U[D].object),delete U[D];delete Y[P]}}delete i[w.id]}function R(w){for(const B in i){const k=i[B];for(const Y in k){const P=k[Y];if(P[w.id]===void 0)continue;const U=P[w.id];for(const D in U)d(U[D].object),delete U[D];delete P[w.id]}}}function S(w){for(const B in i){const k=i[B],Y=w.isInstancedMesh===!0?w.id:0,P=k[Y];if(P!==void 0){for(const U in P){const D=P[U];for(const H in D)d(D[H].object),delete D[H];delete P[U]}delete k[Y],Object.keys(k).length===0&&delete i[B]}}}function T(){N(),r=!0,s!==a&&(s=a,c(s.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function L1(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function O1(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==ui&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Jn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!S)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ct("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:M,maxSamples:C,samples:A}}function P1(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new ns,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let M=f.clippingState||null;l.value=M,M=d(_,u,v,h);for(let C=0;C!==v;++C)M[C]=n[C];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,u,h,_){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const f=h+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,M=h;v!==E;++v,M+=4)r.copy(p[v]).applyMatrix4(m,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const wa=4,h0=[.125,.215,.35,.446,.526,.582],as=20,I1=256,to=new kp,p0=new ie;let Ff=null,Bf=0,zf=0,Hf=!1;const F1=new z;class m0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=F1}=s;Ff=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ff,Bf,zf),this._renderer.xr.enabled=Hf,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_s||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ff=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:aa,format:ui,colorSpace:qc,depthBuffer:!1},a=g0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B1(s)),this._blurMaterial=H1(s,t,n),this._ggxMaterial=z1(s,t,n)}return a}_compileMaterial(t){const n=new Ai(new An,t);this._renderer.compile(n,to)}_sceneToCubeUV(t,n,i,a,s){const l=new li(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(p0),p.toneMapping=Ei,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new el,new Xp({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(p0),f=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const C=this._cubeSize;Xs(a,M*C,v>2?C:0,C,C),p.setRenderTarget(a),f&&p.render(E,l),p.render(t,l)}p.toneMapping=h,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===_s||t.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Xs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,to)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:_}=this,E=this._sizeLods[i],g=3*E*(i>_-wa?i-_+wa:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=_-n,Xs(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,to),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Xs(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,to)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*as-1),E=s/_,g=isFinite(s)?1+Math.floor(d*E):as;g>as&&Ct(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const f=[];let m=0;for(let R=0;R<as;++R){const S=R/E,T=Math.exp(-S*S/2);f.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-i;const M=this._sizeLods[a],C=3*M*(a>v-wa?a-v+wa:0),A=4*(this._cubeSize-M);Xs(n,C,A,3*M,2*M),l.setRenderTarget(n),l.render(p,to)}}function B1(e){const t=[],n=[],i=[];let a=e;const s=e-wa+1+h0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-wa?l=h0[r-e+wa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,_=6,E=3,g=2,f=1,m=new Float32Array(E*_*h),v=new Float32Array(g*_*h),M=new Float32Array(f*_*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,S=A>2?0:-1,T=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];m.set(T,E*_*A),v.set(u,g*_*A);const N=[A,A,A,A,A,A];M.set(N,f*_*A)}const C=new An;C.setAttribute("position",new ei(m,E)),C.setAttribute("uv",new ei(v,g)),C.setAttribute("faceIndex",new ei(M,f)),i.push(new Ai(C,null)),a>wa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function g0(e,t,n){const i=new bi(e,t,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function z1(e,t,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function H1(e,t,n){const i=new Float32Array(as),a=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function _0(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function v0(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class vS extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new dS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new el(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Qi});s.uniforms.tEquirect.value=n;const r=new Ai(a,s),o=n.minFilter;return n.minFilter===ss&&(n.minFilter=cn),new qb(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function G1(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===cf||h===uf)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new vS(_.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,_=h===cf||h===uf,E=h===_s||h===Rr;if(_||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new m0(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return _&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new m0(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,h){return h===cf?u.mapping=_s:h===uf&&(u.mapping=Rr),u}function l(u){let h=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function V1(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Ah("WebGLRenderer: "+i+" extension not supported."),a}}}function X1(e,t,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(t.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const h in u)t.update(u[h],e.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,_=p.attributes.position;let E=0;if(_===void 0)return;if(h!==null){const m=h.array;E=h.version;for(let v=0,M=m.length;v<M;v+=3){const C=m[v+0],A=m[v+1],R=m[v+2];u.push(C,A,A,R,R,C)}}else{const m=_.array;E=_.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const C=v+0,A=v+1,R=v+2;u.push(C,A,A,R,R,C)}}const g=new(_.count>=65535?lS:oS)(u,1);g.version=E;const f=s.get(p);f&&t.remove(f),s.set(p,g)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function k1(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(e.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let E=0;for(let g=0;g<h;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function W1(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:$t("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function q1(e,t,n){const i=new WeakMap,a=new Pe;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let N=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*A*4*p),S=new aS(R,C,A,p);S.type=Si,S.needsUpdate=!0;const T=M*4;for(let w=0;w<p;w++){const B=f[w],k=m[w],Y=v[w],P=C*A*4*w;for(let U=0;U<B.count;U++){const D=U*T;_===!0&&(a.fromBufferAttribute(B,U),R[P+D+0]=a.x,R[P+D+1]=a.y,R[P+D+2]=a.z,R[P+D+3]=0),E===!0&&(a.fromBufferAttribute(k,U),R[P+D+4]=a.x,R[P+D+5]=a.y,R[P+D+6]=a.z,R[P+D+7]=0),g===!0&&(a.fromBufferAttribute(Y,U),R[P+D+8]=a.x,R[P+D+9]=a.y,R[P+D+10]=a.z,R[P+D+11]=Y.itemSize===4?a.w:1)}}u={count:p,texture:S,size:new oe(C,A)},i.set(o,u),o.addEventListener("dispose",N)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Y1(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const j1={[Vx]:"LINEAR_TONE_MAPPING",[Xx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[Wx]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[jx]:"NEUTRAL_TONE_MAPPING",[qx]:"CUSTOM_TONE_MAPPING"};function Z1(e,t,n,i,a){const s=new bi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Cr(t,n):void 0}),r=new bi(t,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}),o=new An;o.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bn([0,2,0,0,2,0],2));const l=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ai(o,l),d=new kp(-1,1,1,-1,0,1);let p=null,u=null,h=!1,_,E=null,g=[],f=!1;this.setSize=function(m,v){s.setSize(m,v),r.setSize(m,v);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(m,v)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const v=s.width,M=s.height;for(let C=0;C<g.length;C++){const A=g[C];A.setSize&&A.setSize(v,M)}},this.begin=function(m,v){if(h||m.toneMapping===Ei&&g.length===0)return!1;if(E=v,v!==null){const M=v.width,C=v.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return f===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=Ei,!0},this.hasRenderPass=function(){return f},this.end=function(m,v){m.toneMapping=_,h=!0;let M=s,C=r;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(m,C,M,v),R.needsSwap!==!1)){const S=M;M=C,C=S}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},Zt.getTransfer(p)===ae&&(l.defines.SRGB_TRANSFER="");const A=j1[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(E),m.render(c,d),E=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const xS=new pn,wh=new Cr(1,1),SS=new aS,MS=new _b,yS=new dS,x0=[],S0=[],M0=new Float32Array(16),y0=new Float32Array(9),E0=new Float32Array(4);function Hr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=x0[a];if(s===void 0&&(s=new Float32Array(a),x0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function yu(e,t){let n=S0[t];n===void 0&&(n=new Int32Array(t),S0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function K1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),je(n,t)}}function J1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),je(n,t)}}function $1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),je(n,t)}}function tR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),je(n,t)}else{if(Ye(n,i))return;E0.set(i),e.uniformMatrix2fv(this.addr,!1,E0),je(n,i)}}function eR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),je(n,t)}else{if(Ye(n,i))return;y0.set(i),e.uniformMatrix3fv(this.addr,!1,y0),je(n,i)}}function nR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),je(n,t)}else{if(Ye(n,i))return;M0.set(i),e.uniformMatrix4fv(this.addr,!1,M0),je(n,i)}}function iR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function aR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),je(n,t)}}function sR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),je(n,t)}}function rR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),je(n,t)}}function oR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),je(n,t)}}function cR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),je(n,t)}}function uR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),je(n,t)}}function fR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(wh.compareFunction=n.isReversedDepthBuffer()?Hp:zp,s=wh):s=xS,n.setTexture2D(t||s,a)}function dR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||MS,a)}function hR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||yS,a)}function pR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||SS,a)}function mR(e){switch(e){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(e,t){e.uniform1fv(this.addr,t)}function _R(e,t){const n=Hr(t,this.size,2);e.uniform2fv(this.addr,n)}function vR(e,t){const n=Hr(t,this.size,3);e.uniform3fv(this.addr,n)}function xR(e,t){const n=Hr(t,this.size,4);e.uniform4fv(this.addr,n)}function SR(e,t){const n=Hr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function MR(e,t){const n=Hr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yR(e,t){const n=Hr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ER(e,t){e.uniform1iv(this.addr,t)}function bR(e,t){e.uniform2iv(this.addr,t)}function TR(e,t){e.uniform3iv(this.addr,t)}function AR(e,t){e.uniform4iv(this.addr,t)}function RR(e,t){e.uniform1uiv(this.addr,t)}function CR(e,t){e.uniform2uiv(this.addr,t)}function wR(e,t){e.uniform3uiv(this.addr,t)}function DR(e,t){e.uniform4uiv(this.addr,t)}function UR(e,t,n){const i=this.cache,a=t.length,s=yu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),je(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=wh:r=xS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function NR(e,t,n){const i=this.cache,a=t.length,s=yu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||MS,s[r])}function LR(e,t,n){const i=this.cache,a=t.length,s=yu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||yS,s[r])}function OR(e,t,n){const i=this.cache,a=t.length,s=yu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||SS,s[r])}function PR(e){switch(e){case 5126:return gR;case 35664:return _R;case 35665:return vR;case 35666:return xR;case 35674:return SR;case 35675:return MR;case 35676:return yR;case 5124:case 35670:return ER;case 35667:case 35671:return bR;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return CR;case 36295:return wR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return OR}}class IR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mR(n.type)}}class FR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PR(n.type)}}class BR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function b0(e,t){e.seq.push(t),e.map[t.id]=t}function zR(e,t,n){const i=e.name,a=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),r=Gf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){b0(n,c===void 0?new IR(o,e,t):new FR(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new BR(o),b0(n,p)),n=p}}}class pc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);zR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function T0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const HR=37297;let GR=0;function VR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const A0=new Ot;function XR(e){Zt._getMatrix(A0,Zt.workingColorSpace,e);const t=`mat3( ${A0.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Yc:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function R0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+VR(e.getShaderSource(t),o)}else return s}function kR(e,t){const n=XR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const WR={[Vx]:"Linear",[Xx]:"Reinhard",[kx]:"Cineon",[Wx]:"ACESFilmic",[Yx]:"AgX",[jx]:"Neutral",[qx]:"Custom"};function qR(e,t){const n=WR[t];return n===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ql=new z;function YR(){Zt.getLuminanceCoefficients(ql);const e=ql.x.toFixed(4),t=ql.y.toFixed(4),n=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function ZR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function KR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function lo(e){return e!==""}function C0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function w0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(e){return e.replace(QR,$R)}const JR=new Map;function $R(e,t){let n=Ht[t];if(n===void 0){const i=JR.get(t);if(i!==void 0)n=Ht[i],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dh(n)}const t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(e){return e.replace(t3,e3)}function e3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function U0(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const n3={[cc]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function i3(e){return n3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a3={[_s]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function s3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":a3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const r3={[Rr]:"ENVMAP_MODE_REFRACTION"};function o3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":r3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l3={[Gx]:"ENVMAP_BLENDING_MULTIPLY",[KE]:"ENVMAP_BLENDING_MIX",[QE]:"ENVMAP_BLENDING_ADD"};function c3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":l3[e.combine]||"ENVMAP_BLENDING_NONE"}function u3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=i3(n),c=s3(n),d=o3(n),p=c3(n),u=u3(n),h=jR(n),_=ZR(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lo).join(`
`),f.length>0&&(f+=`
`)):(g=[U0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),f=[U0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Ei?qR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,kR("linearToOutputTexel",n.outputColorSpace),YR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),r=Dh(r),r=C0(r,n),r=w0(r,n),o=Dh(o),o=C0(o,n),o=w0(o,n),r=D0(r),o=D0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=m+g+r,M=m+f+o,C=T0(a,a.VERTEX_SHADER,v),A=T0(a,a.FRAGMENT_SHADER,M);a.attachShader(E,C),a.attachShader(E,A),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(w){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(E)||"",k=a.getShaderInfoLog(C)||"",Y=a.getShaderInfoLog(A)||"",P=B.trim(),U=k.trim(),D=Y.trim();let H=!0,j=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,C,A);else{const $=R0(a,C,"vertex"),gt=R0(a,A,"fragment");$t("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+$+`
`+gt)}else P!==""?Ct("WebGLProgram: Program Info Log:",P):(U===""||D==="")&&(j=!1);j&&(w.diagnostics={runnable:H,programLog:P,vertexShader:{log:U,prefix:g},fragmentShader:{log:D,prefix:f}})}a.deleteShader(C),a.deleteShader(A),S=new pc(a,E),T=KR(a,E)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(E,HR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GR++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=A,this}let d3=0;class h3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new p3(t),n.set(t,i)),i}}class p3{constructor(t){this.id=d3++,this.code=t,this.usedTimes=0}}function m3(e){return e===vs||e===kc||e===Wc}function g3(e,t,n,i,a,s){const r=new sS,o=new h3,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function E(S,T,N,w,B,k){const Y=w.fog,P=B.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?w.environment:null,D=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,H=t.get(S.envMap||U,D),j=H&&H.mapping===xu?H.image.height:null,$=h[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Ct("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const gt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,pt=gt!==void 0?gt.length:0;let At=0;P.morphAttributes.position!==void 0&&(At=1),P.morphAttributes.normal!==void 0&&(At=2),P.morphAttributes.color!==void 0&&(At=3);let Vt,wt,J,ft;if($){const It=gi[$];Vt=It.vertexShader,wt=It.fragmentShader}else Vt=S.vertexShader,wt=S.fragmentShader,o.update(S),J=o.getVertexShaderID(S),ft=o.getFragmentShaderID(S);const nt=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,Te=!!S.map,qt=!!S.matcap,le=!!H,xe=!!S.aoMap,Xt=!!S.lightMap,Xe=!!S.bumpMap,Ae=!!S.normalMap,Cn=!!S.displacementMap,O=!!S.emissiveMap,ke=!!S.metalnessMap,Yt=!!S.roughnessMap,ge=S.anisotropy>0,ct=S.clearcoat>0,Re=S.dispersion>0,b=S.iridescence>0,x=S.sheen>0,F=S.transmission>0,Z=ge&&!!S.anisotropyMap,et=ct&&!!S.clearcoatMap,it=ct&&!!S.clearcoatNormalMap,lt=ct&&!!S.clearcoatRoughnessMap,W=b&&!!S.iridescenceMap,Q=b&&!!S.iridescenceThicknessMap,mt=x&&!!S.sheenColorMap,xt=x&&!!S.sheenRoughnessMap,rt=!!S.specularMap,at=!!S.specularColorMap,Nt=!!S.specularIntensityMap,zt=F&&!!S.transmissionMap,te=F&&!!S.thicknessMap,L=!!S.gradientMap,st=!!S.alphaMap,q=S.alphaTest>0,_t=!!S.alphaHash,ot=!!S.extensions;let tt=Ei;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(tt=e.toneMapping);const yt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Vt,fragmentShader:wt,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Te,matcap:qt,envMap:le,envMapMode:le&&H.mapping,envMapCubeUVHeight:j,aoMap:xe,lightMap:Xt,bumpMap:Xe,normalMap:Ae,displacementMap:Cn,emissiveMap:O,normalMapObjectSpace:Ae&&S.normalMapType===tb,normalMapTangentSpace:Ae&&S.normalMapType===Ig,packedNormalMap:Ae&&S.normalMapType===Ig&&m3(S.normalMap.format),metalnessMap:ke,roughnessMap:Yt,anisotropy:ge,anisotropyMap:Z,clearcoat:ct,clearcoatMap:et,clearcoatNormalMap:it,clearcoatRoughnessMap:lt,dispersion:Re,iridescence:b,iridescenceMap:W,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:mt,sheenRoughnessMap:xt,specularMap:rt,specularColorMap:at,specularIntensityMap:Nt,transmission:F,transmissionMap:zt,thicknessMap:te,gradientMap:L,opaque:S.transparent===!1&&S.blending===hr&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:q,alphaHash:_t,combine:S.combine,mapUv:Te&&_(S.map.channel),aoMapUv:xe&&_(S.aoMap.channel),lightMapUv:Xt&&_(S.lightMap.channel),bumpMapUv:Xe&&_(S.bumpMap.channel),normalMapUv:Ae&&_(S.normalMap.channel),displacementMapUv:Cn&&_(S.displacementMap.channel),emissiveMapUv:O&&_(S.emissiveMap.channel),metalnessMapUv:ke&&_(S.metalnessMap.channel),roughnessMapUv:Yt&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:rt&&_(S.specularMap.channel),specularColorMapUv:at&&_(S.specularColorMap.channel),specularIntensityMapUv:Nt&&_(S.specularIntensityMap.channel),transmissionMapUv:zt&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ae||ge),vertexNormals:!!P.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!P.attributes.uv&&(Te||st),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||P.attributes.normal===void 0&&Ae===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:At,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:tt,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:O&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(f(T,S),m(T,S),T.push(e.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function f(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),S.push(r.mask)}function v(S){const T=h[S.type];let N;if(T){const w=gi[T];N=Hb.clone(w.uniforms)}else N=S.uniforms;return N}function M(S,T){let N=d.get(T);return N!==void 0?++N.usedTimes:(N=new f3(e,T,S,a),c.push(N),d.set(T,N)),N}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:R}}function _3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function v3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function N0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function L0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:_,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=_,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,h,_,E,g,f){const m=o(u,h,_,E,g,f);_.transmission>0?i.push(m):_.transparent===!0?a.push(m):n.push(m)}function c(u,h,_,E,g,f){const m=o(u,h,_,E,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,h){n.length>1&&n.sort(u||v3),i.length>1&&i.sort(h||N0),a.length>1&&a.sort(h||N0)}function p(){for(let u=t,h=e.length;u<h;u++){const _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:d}}function x3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new L0,e.set(i,[r])):a>=s.length?(r=new L0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function S3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new ie};break;case"SpotLight":n={position:new z,direction:new z,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function M3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let y3=0;function E3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function b3(e){const t=new S3,n=M3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,s=new Fe,r=new Fe;function o(c){let d=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,_=0,E=0,g=0,f=0,m=0,v=0,M=0,C=0,A=0,R=0;c.sort(E3);for(let T=0,N=c.length;T<N;T++){const w=c[T],B=w.color,k=w.intensity,Y=w.distance;let P=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===vs?P=w.shadow.map.texture:P=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=B.r*k,p+=B.g*k,u+=B.b*k;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],k);R++}else if(w.isDirectionalLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const D=w.shadow,H=n.get(w);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=P,i.directionalShadowMatrix[h]=w.shadow.matrix,m++}i.directional[h]=U,h++}else if(w.isSpotLight){const U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(B).multiplyScalar(k),U.distance=Y,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[E]=U;const D=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,D.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[E]=D.matrix,w.castShadow){const H=n.get(w);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=P,M++}E++}else if(w.isRectAreaLight){const U=t.get(w);U.color.copy(B).multiplyScalar(k),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=U,g++}else if(w.isPointLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){const D=w.shadow,H=n.get(w);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,H.shadowCameraNear=D.camera.near,H.shadowCameraFar=D.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=U,_++}else if(w.isHemisphereLight){const U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(k),U.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[f]=U,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==h||S.pointLength!==_||S.spotLength!==E||S.rectAreaLength!==g||S.hemiLength!==f||S.numDirectionalShadows!==m||S.numPointShadows!==v||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,S.directionalLength=h,S.pointLength=_,S.spotLength=E,S.rectAreaLength=g,S.hemiLength=f,S.numDirectionalShadows=m,S.numPointShadows=v,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=R,i.version=y3++)}function l(c,d){let p=0,u=0,h=0,_=0,E=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const v=c[f];if(v.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),p++}else if(v.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),h++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(v.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function O0(e){const t=new b3(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function T3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new O0(e),t.set(a,[o])):s>=r.length?(o=new O0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],w3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],P0=new Fe,eo=new z,Vf=new z;function D3(e,t,n){let i=new cS;const a=new oe,s=new oe,r=new Pe,o=new kb,l=new Wb,c={},d=n.maxTextureSize,p={[Xa]:En,[En]:Xa,[Xi]:Xi},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:A3,fragmentShader:R3}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ai(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let f=this.type;this.render=function(A,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===UE&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cc);const T=e.getRenderTarget(),N=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Qi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=f!==this.type;k&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(P=>P.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,P=A.length;Y<P;Y++){const U=A[Y],D=U.shadow;if(D===void 0){Ct("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const H=D.getFrameExtents();a.multiply(H),s.copy(D.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/H.x),a.x=s.x*H.x,D.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/H.y),a.y=s.y*H.y,D.mapSize.y=s.y));const j=e.state.buffers.depth.getReversed();if(D.camera._reversedDepth=j,D.map===null||k===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===oo){if(U.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new bi(a.x,a.y,{format:vs,type:aa,minFilter:cn,magFilter:cn,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new Cr(a.x,a.y,Si),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=sa,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=an,D.map.depthTexture.magFilter=an}else U.isPointLight?(D.map=new vS(a.x),D.map.depthTexture=new Bb(a.x,Ti)):(D.map=new bi(a.x,a.y),D.map.depthTexture=new Cr(a.x,a.y,Ti)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=sa,this.type===cc?(D.map.depthTexture.compareFunction=j?Hp:zp,D.map.depthTexture.minFilter=cn,D.map.depthTexture.magFilter=cn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=an,D.map.depthTexture.magFilter=an);D.camera.updateProjectionMatrix()}const $=D.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<$;gt++){if(D.map.isWebGLCubeRenderTarget)e.setRenderTarget(D.map,gt),e.clear();else{gt===0&&(e.setRenderTarget(D.map),e.clear());const pt=D.getViewport(gt);r.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),B.viewport(r)}if(U.isPointLight){const pt=D.camera,At=D.matrix,Vt=U.distance||pt.far;Vt!==pt.far&&(pt.far=Vt,pt.updateProjectionMatrix()),eo.setFromMatrixPosition(U.matrixWorld),pt.position.copy(eo),Vf.copy(pt.position),Vf.add(C3[gt]),pt.up.copy(w3[gt]),pt.lookAt(Vf),pt.updateMatrixWorld(),At.makeTranslation(-eo.x,-eo.y,-eo.z),P0.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),D._frustum.setFromProjectionMatrix(P0,pt.coordinateSystem,pt.reversedDepth)}else D.updateMatrices(U);i=D.getFrustum(),M(R,S,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===oo&&m(D,S),D.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(T,N,w)};function m(A,R){const S=t.update(E);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(a.x,a.y,{format:vs,type:aa})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,S,u,E,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,S,h,E,null)}function v(A,R,S,T){let N=null;const w=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)N=w;else if(N=S.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=N.uuid,k=R.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let P=Y[k];P===void 0&&(P=N.clone(),Y[k]=P,R.addEventListener("dispose",C)),N=P}if(N.visible=R.visible,N.wireframe=R.wireframe,T===oo?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:p[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=e.properties.get(N);B.light=S}return N}function M(A,R,S,T,N){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===oo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const k=t.update(A),Y=A.material;if(Array.isArray(Y)){const P=k.groups;for(let U=0,D=P.length;U<D;U++){const H=P[U],j=Y[H.materialIndex];if(j&&j.visible){const $=v(A,j,T,N);A.onBeforeShadow(e,A,R,S,k,$,H),e.renderBufferDirect(S,null,k,$,A,H),A.onAfterShadow(e,A,R,S,k,$,H)}}}else if(Y.visible){const P=v(A,Y,T,N);A.onBeforeShadow(e,A,R,S,k,P,null),e.renderBufferDirect(S,null,k,P,A,null),A.onAfterShadow(e,A,R,S,k,P,null)}}const B=A.children;for(let k=0,Y=B.length;k<Y;k++)M(B[k],R,S,T,N)}function C(A){A.target.removeEventListener("dispose",C);for(const S in c){const T=c[S],N=A.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function U3(e,t){function n(){let L=!1;const st=new Pe;let q=null;const _t=new Pe(0,0,0,0);return{setMask:function(ot){q!==ot&&!L&&(e.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){L=ot},setClear:function(ot,tt,yt,It,Ue){Ue===!0&&(ot*=It,tt*=It,yt*=It),st.set(ot,tt,yt,It),_t.equals(st)===!1&&(e.clearColor(ot,tt,yt,It),_t.copy(st))},reset:function(){L=!1,q=null,_t.set(-1,0,0,0)}}}function i(){let L=!1,st=!1,q=null,_t=null,ot=null;return{setReversed:function(tt){if(st!==tt){const yt=t.get("EXT_clip_control");tt?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),st=tt;const It=ot;ot=null,this.setClear(It)}},getReversed:function(){return st},setTest:function(tt){tt?nt(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(tt){q!==tt&&!L&&(e.depthMask(tt),q=tt)},setFunc:function(tt){if(st&&(tt=ub[tt]),_t!==tt){switch(tt){case Gd:e.depthFunc(e.NEVER);break;case Vd:e.depthFunc(e.ALWAYS);break;case Xd:e.depthFunc(e.LESS);break;case Ar:e.depthFunc(e.LEQUAL);break;case kd:e.depthFunc(e.EQUAL);break;case Wd:e.depthFunc(e.GEQUAL);break;case qd:e.depthFunc(e.GREATER);break;case Yd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=tt}},setLocked:function(tt){L=tt},setClear:function(tt){ot!==tt&&(ot=tt,st&&(tt=1-tt),e.clearDepth(tt))},reset:function(){L=!1,q=null,_t=null,ot=null,st=!1}}}function a(){let L=!1,st=null,q=null,_t=null,ot=null,tt=null,yt=null,It=null,Ue=null;return{setTest:function(ce){L||(ce?nt(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(ce){st!==ce&&!L&&(e.stencilMask(ce),st=ce)},setFunc:function(ce,Di,di){(q!==ce||_t!==Di||ot!==di)&&(e.stencilFunc(ce,Di,di),q=ce,_t=Di,ot=di)},setOp:function(ce,Di,di){(tt!==ce||yt!==Di||It!==di)&&(e.stencilOp(ce,Di,di),tt=ce,yt=Di,It=di)},setLocked:function(ce){L=ce},setClear:function(ce){Ue!==ce&&(e.clearStencil(ce),Ue=ce)},reset:function(){L=!1,st=null,q=null,_t=null,ot=null,tt=null,yt=null,It=null,Ue=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],E=null,g=!1,f=null,m=null,v=null,M=null,C=null,A=null,R=null,S=new ie(0,0,0),T=0,N=!1,w=null,B=null,k=null,Y=null,P=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,H=0;const j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=H>=2);let $=null,gt={};const pt=e.getParameter(e.SCISSOR_BOX),At=e.getParameter(e.VIEWPORT),Vt=new Pe().fromArray(pt),wt=new Pe().fromArray(At);function J(L,st,q,_t){const ot=new Uint8Array(4),tt=e.createTexture();e.bindTexture(L,tt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let yt=0;yt<q;yt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,ot):e.texImage2D(st+yt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ot);return tt}const ft={};ft[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ft[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ft[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),r.setFunc(Ar),Xe(!1),Ae(Ng),nt(e.CULL_FACE),xe(Qi);function nt(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function Rt(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function Lt(L,st){return u[L]!==st?(e.bindFramebuffer(L,st),u[L]=st,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=st),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Dt(L,st){let q=_,_t=!1;if(L){q=h.get(st),q===void 0&&(q=[],h.set(st,q));const ot=L.textures;if(q.length!==ot.length||q[0]!==e.COLOR_ATTACHMENT0){for(let tt=0,yt=ot.length;tt<yt;tt++)q[tt]=e.COLOR_ATTACHMENT0+tt;q.length=ot.length,_t=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,_t=!0);_t&&e.drawBuffers(q)}function Te(L){return E!==L?(e.useProgram(L),E=L,!0):!1}const qt={[is]:e.FUNC_ADD,[LE]:e.FUNC_SUBTRACT,[OE]:e.FUNC_REVERSE_SUBTRACT};qt[PE]=e.MIN,qt[IE]=e.MAX;const le={[FE]:e.ZERO,[BE]:e.ONE,[zE]:e.SRC_COLOR,[zd]:e.SRC_ALPHA,[WE]:e.SRC_ALPHA_SATURATE,[XE]:e.DST_COLOR,[GE]:e.DST_ALPHA,[HE]:e.ONE_MINUS_SRC_COLOR,[Hd]:e.ONE_MINUS_SRC_ALPHA,[kE]:e.ONE_MINUS_DST_COLOR,[VE]:e.ONE_MINUS_DST_ALPHA,[qE]:e.CONSTANT_COLOR,[YE]:e.ONE_MINUS_CONSTANT_COLOR,[jE]:e.CONSTANT_ALPHA,[ZE]:e.ONE_MINUS_CONSTANT_ALPHA};function xe(L,st,q,_t,ot,tt,yt,It,Ue,ce){if(L===Qi){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(nt(e.BLEND),g=!0),L!==NE){if(L!==f||ce!==N){if((m!==is||C!==is)&&(e.blendEquation(e.FUNC_ADD),m=is,C=is),ce)switch(L){case hr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lg:e.blendFunc(e.ONE,e.ONE);break;case Og:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Pg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$t("WebGLState: Invalid blending: ",L);break}else switch(L){case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Og:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",L);break}v=null,M=null,A=null,R=null,S.set(0,0,0),T=0,f=L,N=ce}return}ot=ot||st,tt=tt||q,yt=yt||_t,(st!==m||ot!==C)&&(e.blendEquationSeparate(qt[st],qt[ot]),m=st,C=ot),(q!==v||_t!==M||tt!==A||yt!==R)&&(e.blendFuncSeparate(le[q],le[_t],le[tt],le[yt]),v=q,M=_t,A=tt,R=yt),(It.equals(S)===!1||Ue!==T)&&(e.blendColor(It.r,It.g,It.b,Ue),S.copy(It),T=Ue),f=L,N=!1}function Xt(L,st){L.side===Xi?Rt(e.CULL_FACE):nt(e.CULL_FACE);let q=L.side===En;st&&(q=!q),Xe(q),L.blending===hr&&L.transparent===!1?xe(Qi):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const _t=L.stencilWrite;o.setTest(_t),_t&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){w!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),w=L)}function Ae(L){L!==wE?(nt(e.CULL_FACE),L!==B&&(L===Ng?e.cullFace(e.BACK):L===DE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),B=L}function Cn(L){L!==k&&(D&&e.lineWidth(L),k=L)}function O(L,st,q){L?(nt(e.POLYGON_OFFSET_FILL),(Y!==st||P!==q)&&(Y=st,P=q,r.getReversed()&&(st=-st),e.polygonOffset(st,q))):Rt(e.POLYGON_OFFSET_FILL)}function ke(L){L?nt(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Yt(L){L===void 0&&(L=e.TEXTURE0+U-1),$!==L&&(e.activeTexture(L),$=L)}function ge(L,st,q){q===void 0&&($===null?q=e.TEXTURE0+U-1:q=$);let _t=gt[q];_t===void 0&&(_t={type:void 0,texture:void 0},gt[q]=_t),(_t.type!==L||_t.texture!==st)&&($!==q&&(e.activeTexture(q),$=q),e.bindTexture(L,st||ft[L]),_t.type=L,_t.texture=st)}function ct(){const L=gt[$];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Re(){try{e.compressedTexImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function b(){try{e.compressedTexImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function x(){try{e.texSubImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function F(){try{e.texSubImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function it(){try{e.texStorage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function lt(){try{e.texStorage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function W(){try{e.texImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function Q(){try{e.texImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function mt(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function xt(L,st){p[L]!==st&&(e.pixelStorei(L,st),p[L]=st)}function rt(L){Vt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Vt.copy(L))}function at(L){wt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),wt.copy(L))}function Nt(L,st){let q=c.get(st);q===void 0&&(q=new WeakMap,c.set(st,q));let _t=q.get(L);_t===void 0&&(_t=e.getUniformBlockIndex(st,L.name),q.set(L,_t))}function zt(L,st){const _t=c.get(st).get(L);l.get(st)!==_t&&(e.uniformBlockBinding(st,_t,L.__bindingPointIndex),l.set(st,_t))}function te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},$=null,gt={},u={},h=new WeakMap,_=[],E=null,g=!1,f=null,m=null,v=null,M=null,C=null,A=null,R=null,S=new ie(0,0,0),T=0,N=!1,w=null,B=null,k=null,Y=null,P=null,Vt.set(0,0,e.canvas.width,e.canvas.height),wt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:nt,disable:Rt,bindFramebuffer:Lt,drawBuffers:Dt,useProgram:Te,setBlending:xe,setMaterial:Xt,setFlipSided:Xe,setCullFace:Ae,setLineWidth:Cn,setPolygonOffset:O,setScissorTest:ke,activeTexture:Yt,bindTexture:ge,unbindTexture:ct,compressedTexImage2D:Re,compressedTexImage3D:b,texImage2D:W,texImage3D:Q,pixelStorei:xt,getParameter:mt,updateUBOMapping:Nt,uniformBlockBinding:zt,texStorage2D:it,texStorage3D:lt,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:rt,viewport:at,reset:te}}function N3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,x){return _?new OffscreenCanvas(b,x):Zc("canvas")}function g(b,x,F){let Z=1;const et=Re(b);if((et.width>F||et.height>F)&&(Z=F/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const it=Math.floor(Z*et.width),lt=Math.floor(Z*et.height);u===void 0&&(u=E(it,lt));const W=x?E(it,lt):u;return W.width=it,W.height=lt,W.getContext("2d").drawImage(b,0,0,it,lt),Ct("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+it+"x"+lt+")."),W}else return"data"in b&&Ct("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function f(b){return b.generateMipmaps}function m(b){e.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(b,x,F,Z,et,it=!1){if(b!==null){if(e[b]!==void 0)return e[b];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let lt;Z&&(lt=t.get("EXT_texture_norm16"),lt||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=x;if(x===e.RED&&(F===e.FLOAT&&(W=e.R32F),F===e.HALF_FLOAT&&(W=e.R16F),F===e.UNSIGNED_BYTE&&(W=e.R8),F===e.UNSIGNED_SHORT&&lt&&(W=lt.R16_EXT),F===e.SHORT&&lt&&(W=lt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.R8UI),F===e.UNSIGNED_SHORT&&(W=e.R16UI),F===e.UNSIGNED_INT&&(W=e.R32UI),F===e.BYTE&&(W=e.R8I),F===e.SHORT&&(W=e.R16I),F===e.INT&&(W=e.R32I)),x===e.RG&&(F===e.FLOAT&&(W=e.RG32F),F===e.HALF_FLOAT&&(W=e.RG16F),F===e.UNSIGNED_BYTE&&(W=e.RG8),F===e.UNSIGNED_SHORT&&lt&&(W=lt.RG16_EXT),F===e.SHORT&&lt&&(W=lt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RG8UI),F===e.UNSIGNED_SHORT&&(W=e.RG16UI),F===e.UNSIGNED_INT&&(W=e.RG32UI),F===e.BYTE&&(W=e.RG8I),F===e.SHORT&&(W=e.RG16I),F===e.INT&&(W=e.RG32I)),x===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RGB8UI),F===e.UNSIGNED_SHORT&&(W=e.RGB16UI),F===e.UNSIGNED_INT&&(W=e.RGB32UI),F===e.BYTE&&(W=e.RGB8I),F===e.SHORT&&(W=e.RGB16I),F===e.INT&&(W=e.RGB32I)),x===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),F===e.UNSIGNED_INT&&(W=e.RGBA32UI),F===e.BYTE&&(W=e.RGBA8I),F===e.SHORT&&(W=e.RGBA16I),F===e.INT&&(W=e.RGBA32I)),x===e.RGB&&(F===e.UNSIGNED_SHORT&&lt&&(W=lt.RGB16_EXT),F===e.SHORT&&lt&&(W=lt.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),x===e.RGBA){const Q=it?Yc:Zt.getTransfer(et);F===e.FLOAT&&(W=e.RGBA32F),F===e.HALF_FLOAT&&(W=e.RGBA16F),F===e.UNSIGNED_BYTE&&(W=Q===ae?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&lt&&(W=lt.RGBA16_EXT),F===e.SHORT&&lt&&(W=lt.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(b,x){let F;return b?x===null||x===Ti||x===zo?F=e.DEPTH24_STENCIL8:x===Si?F=e.DEPTH32F_STENCIL8:x===Bo&&(F=e.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===zo?F=e.DEPTH_COMPONENT24:x===Si?F=e.DEPTH_COMPONENT32F:x===Bo&&(F=e.DEPTH_COMPONENT16),F}function A(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==an&&b.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&p.delete(x)}function S(b){const x=b.target;x.removeEventListener("dispose",S),w(x)}function T(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,Z=h.get(F);if(Z){const et=Z[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(b),Object.keys(Z).length===0&&h.delete(F)}i.remove(b)}function N(b){const x=i.get(b);e.deleteTexture(x.__webglTexture);const F=b.source,Z=h.get(F);delete Z[x.__cacheKey],r.memory.textures--}function w(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let et=0;et<x.__webglFramebuffer[Z].length;et++)e.deleteFramebuffer(x.__webglFramebuffer[Z][et]);else e.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)e.deleteFramebuffer(x.__webglFramebuffer[Z]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let Z=0,et=F.length;Z<et;Z++){const it=i.get(F[Z]);it.__webglTexture&&(e.deleteTexture(it.__webglTexture),r.memory.textures--),i.remove(F[Z])}i.remove(b)}let B=0;function k(){B=0}function Y(){return B}function P(b){B=b}function U(){const b=B;return b>=a.maxTextures&&Ct("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function D(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function H(b,x){const F=i.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const Z=b.image;if(Z===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(F,b,x);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+x)}function j(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Rt(F,b,x);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+x)}function $(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Rt(F,b,x);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+x)}function gt(b,x){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){Lt(F,b,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+x)}const pt={[jd]:e.REPEAT,[Yi]:e.CLAMP_TO_EDGE,[Zd]:e.MIRRORED_REPEAT},At={[an]:e.NEAREST,[JE]:e.NEAREST_MIPMAP_NEAREST,[Sl]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[ff]:e.LINEAR_MIPMAP_NEAREST,[ss]:e.LINEAR_MIPMAP_LINEAR},Vt={[eb]:e.NEVER,[rb]:e.ALWAYS,[nb]:e.LESS,[zp]:e.LEQUAL,[ib]:e.EQUAL,[Hp]:e.GEQUAL,[ab]:e.GREATER,[sb]:e.NOTEQUAL};function wt(b,x){if(x.type===Si&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===ff||x.magFilter===Sl||x.magFilter===ss||x.minFilter===cn||x.minFilter===ff||x.minFilter===Sl||x.minFilter===ss)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,pt[x.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,pt[x.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,pt[x.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,At[x.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==Sl&&x.minFilter!==ss||x.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let et=h.get(Z);et===void 0&&(et={},h.set(Z,et));const it=D(x);if(it!==b.__cacheKey){et[it]===void 0&&(et[it]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),et[it].usedTimes++;const lt=et[b.__cacheKey];lt!==void 0&&(et[b.__cacheKey].usedTimes--,lt.usedTimes===0&&N(x)),b.__cacheKey=it,b.__webglTexture=et[it].texture}return F}function ft(b,x,F){return Math.floor(Math.floor(b/F)/x)}function nt(b,x,F,Z){const it=b.updateRanges;if(it.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,F,Z,x.data);else{it.sort((xt,rt)=>xt.start-rt.start);let lt=0;for(let xt=1;xt<it.length;xt++){const rt=it[lt],at=it[xt],Nt=rt.start+rt.count,zt=ft(at.start,x.width,4),te=ft(rt.start,x.width,4);at.start<=Nt+1&&zt===te&&ft(at.start+at.count-1,x.width,4)===zt?rt.count=Math.max(rt.count,at.start+at.count-rt.start):(++lt,it[lt]=at)}it.length=lt+1;const W=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),mt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let xt=0,rt=it.length;xt<rt;xt++){const at=it[xt],Nt=Math.floor(at.start/4),zt=Math.ceil(at.count/4),te=Nt%x.width,L=Math.floor(Nt/x.width),st=zt,q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,te),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,te,L,st,q,F,Z,x.data)}b.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,mt)}}function Rt(b,x,F){let Z=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=e.TEXTURE_3D);const et=J(b,x),it=x.source;n.bindTexture(Z,b.__webglTexture,e.TEXTURE0+F);const lt=i.get(it);if(it.version!==lt.__version||et===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const q=Zt.getPrimaries(Zt.workingColorSpace),_t=x.colorSpace===Ea?null:Zt.getPrimaries(x.colorSpace),ot=x.colorSpace===Ea||q===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=g(x.image,!1,a.maxTextureSize);Q=ct(x,Q);const mt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type);let rt=M(x.internalFormat,mt,xt,x.normalized,x.colorSpace,x.isVideoTexture);wt(Z,x);let at;const Nt=x.mipmaps,zt=x.isVideoTexture!==!0,te=lt.__version===void 0||et===!0,L=it.dataReady,st=A(x,Q);if(x.isDepthTexture)rt=C(x.format===rs,x.type),te&&(zt?n.texStorage2D(e.TEXTURE_2D,1,rt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,rt,Q.width,Q.height,0,mt,xt,null));else if(x.isDataTexture)if(Nt.length>0){zt&&te&&n.texStorage2D(e.TEXTURE_2D,st,rt,Nt[0].width,Nt[0].height);for(let q=0,_t=Nt.length;q<_t;q++)at=Nt[q],zt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,at.width,at.height,mt,xt,at.data):n.texImage2D(e.TEXTURE_2D,q,rt,at.width,at.height,0,mt,xt,at.data);x.generateMipmaps=!1}else zt?(te&&n.texStorage2D(e.TEXTURE_2D,st,rt,Q.width,Q.height),L&&nt(x,Q,mt,xt)):n.texImage2D(e.TEXTURE_2D,0,rt,Q.width,Q.height,0,mt,xt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,rt,Nt[0].width,Nt[0].height,Q.depth);for(let q=0,_t=Nt.length;q<_t;q++)if(at=Nt[q],x.format!==ui)if(mt!==null)if(zt){if(L)if(x.layerUpdates.size>0){const ot=d0(at.width,at.height,x.format,x.type);for(const tt of x.layerUpdates){const yt=at.data.subarray(tt*ot/at.data.BYTES_PER_ELEMENT,(tt+1)*ot/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,tt,at.width,at.height,1,mt,yt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Q.depth,mt,at.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,rt,at.width,at.height,Q.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Q.depth,mt,xt,at.data):n.texImage3D(e.TEXTURE_2D_ARRAY,q,rt,at.width,at.height,Q.depth,0,mt,xt,at.data)}else{zt&&te&&n.texStorage2D(e.TEXTURE_2D,st,rt,Nt[0].width,Nt[0].height);for(let q=0,_t=Nt.length;q<_t;q++)at=Nt[q],x.format!==ui?mt!==null?zt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,at.width,at.height,mt,at.data):n.compressedTexImage2D(e.TEXTURE_2D,q,rt,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,at.width,at.height,mt,xt,at.data):n.texImage2D(e.TEXTURE_2D,q,rt,at.width,at.height,0,mt,xt,at.data)}else if(x.isDataArrayTexture)if(zt){if(te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,rt,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){const q=d0(Q.width,Q.height,x.format,x.type);for(const _t of x.layerUpdates){const ot=Q.data.subarray(_t*q/Q.data.BYTES_PER_ELEMENT,(_t+1)*q/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,_t,Q.width,Q.height,1,mt,xt,ot)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,mt,xt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,rt,Q.width,Q.height,Q.depth,0,mt,xt,Q.data);else if(x.isData3DTexture)zt?(te&&n.texStorage3D(e.TEXTURE_3D,st,rt,Q.width,Q.height,Q.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,mt,xt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,rt,Q.width,Q.height,Q.depth,0,mt,xt,Q.data);else if(x.isFramebufferTexture){if(te)if(zt)n.texStorage2D(e.TEXTURE_2D,st,rt,Q.width,Q.height);else{let q=Q.width,_t=Q.height;for(let ot=0;ot<st;ot++)n.texImage2D(e.TEXTURE_2D,ot,rt,q,_t,0,mt,xt,null),q>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Q.parentNode!==q){q.appendChild(Q),p.add(x),q.onpaint=It=>{const Ue=It.changedElements;for(const ce of p)Ue.includes(ce.image)&&(ce.needsUpdate=!0)},q.requestPaint();return}const _t=0,ot=e.RGBA,tt=e.RGBA,yt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,_t,ot,tt,yt,Q),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(zt&&te){const q=Re(Nt[0]);n.texStorage2D(e.TEXTURE_2D,st,rt,q.width,q.height)}for(let q=0,_t=Nt.length;q<_t;q++)at=Nt[q],zt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,mt,xt,at):n.texImage2D(e.TEXTURE_2D,q,rt,mt,xt,at);x.generateMipmaps=!1}else if(zt){if(te){const q=Re(Q);n.texStorage2D(e.TEXTURE_2D,st,rt,q.width,q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,xt,Q)}else n.texImage2D(e.TEXTURE_2D,0,rt,mt,xt,Q);f(x)&&m(Z),lt.__version=it.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Lt(b,x,F){if(x.image.length!==6)return;const Z=J(b,x),et=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+F);const it=i.get(et);if(et.version!==it.__version||Z===!0){n.activeTexture(e.TEXTURE0+F);const lt=Zt.getPrimaries(Zt.workingColorSpace),W=x.colorSpace===Ea?null:Zt.getPrimaries(x.colorSpace),Q=x.colorSpace===Ea||lt===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const mt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let tt=0;tt<6;tt++)!mt&&!xt?rt[tt]=g(x.image[tt],!0,a.maxCubemapSize):rt[tt]=xt?x.image[tt].image:x.image[tt],rt[tt]=ct(x,rt[tt]);const at=rt[0],Nt=s.convert(x.format,x.colorSpace),zt=s.convert(x.type),te=M(x.internalFormat,Nt,zt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,st=it.__version===void 0||Z===!0,q=et.dataReady;let _t=A(x,at);wt(e.TEXTURE_CUBE_MAP,x);let ot;if(mt){L&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,te,at.width,at.height);for(let tt=0;tt<6;tt++){ot=rt[tt].mipmaps;for(let yt=0;yt<ot.length;yt++){const It=ot[yt];x.format!==ui?Nt!==null?L?q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,It.width,It.height,Nt,It.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,te,It.width,It.height,0,It.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,It.width,It.height,Nt,zt,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,te,It.width,It.height,0,Nt,zt,It.data)}}}else{if(ot=x.mipmaps,L&&st){ot.length>0&&_t++;const tt=Re(rt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,te,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(xt){L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,rt[tt].width,rt[tt].height,Nt,zt,rt[tt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,rt[tt].width,rt[tt].height,0,Nt,zt,rt[tt].data);for(let yt=0;yt<ot.length;yt++){const Ue=ot[yt].image[tt].image;L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Ue.width,Ue.height,Nt,zt,Ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,te,Ue.width,Ue.height,0,Nt,zt,Ue.data)}}else{L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,zt,rt[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,Nt,zt,rt[tt]);for(let yt=0;yt<ot.length;yt++){const It=ot[yt];L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Nt,zt,It.image[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,te,Nt,zt,It.image[tt])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),it.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Dt(b,x,F,Z,et,it){const lt=s.convert(F.format,F.colorSpace),W=s.convert(F.type),Q=M(F.internalFormat,lt,W,F.normalized,F.colorSpace),mt=i.get(x),xt=i.get(F);if(xt.__renderTarget=x,!mt.__hasExternalTextures){const rt=Math.max(1,x.width>>it),at=Math.max(1,x.height>>it);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,it,Q,rt,at,x.depth,0,lt,W,null):n.texImage2D(et,it,Q,rt,at,0,lt,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,b),Yt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,et,xt.__webglTexture,0,ke(x)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,et,xt.__webglTexture,it),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(b,x,F){if(e.bindRenderbuffer(e.RENDERBUFFER,b),x.depthBuffer){const Z=x.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,it=C(x.stencilBuffer,et),lt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Yt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(x),it,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(x),it,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,it,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,lt,e.RENDERBUFFER,b)}else{const Z=x.textures;for(let et=0;et<Z.length;et++){const it=Z[et],lt=s.convert(it.format,it.colorSpace),W=s.convert(it.type),Q=M(it.internalFormat,lt,W,it.normalized,it.colorSpace);Yt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(x),Q,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(x),Q,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,Q,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qt(b,x,F){const Z=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(x.depthTexture);if(et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(et.__webglInit===void 0&&(et.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),wt(e.TEXTURE_CUBE_MAP,x.depthTexture);const mt=s.convert(x.depthTexture.format),xt=s.convert(x.depthTexture.type);let rt;x.depthTexture.format===sa?rt=e.DEPTH_COMPONENT24:x.depthTexture.format===rs&&(rt=e.DEPTH24_STENCIL8);for(let at=0;at<6;at++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,rt,x.width,x.height,0,mt,xt,null)}}else H(x.depthTexture,0);const it=et.__webglTexture,lt=ke(x),W=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,Q=x.depthTexture.format===rs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===sa)Yt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,W,it,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,W,it,0);else if(x.depthTexture.format===rs)Yt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,W,it,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,W,it,0);else throw new Error("Unknown depthTexture format")}function le(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=Z}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)qt(x.__webglFramebuffer[Z],b,Z);else{const Z=b.texture.mipmaps;Z&&Z.length>0?qt(x.__webglFramebuffer[0],b,0):qt(x.__webglFramebuffer,b,0)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=e.createRenderbuffer(),Te(x.__webglDepthbuffer[Z],b,!1);else{const et=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,it)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Te(x.__webglDepthbuffer,b,!1);else{const et=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,it)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(b,x,F){const Z=i.get(b);x!==void 0&&Dt(Z.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&le(b)}function Xt(b){const x=b.texture,F=i.get(b),Z=i.get(x);b.addEventListener("dispose",S);const et=b.textures,it=b.isWebGLCubeRenderTarget===!0,lt=et.length>1;if(lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=x.version,r.memory.textures++),it){F.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[W]=[];for(let Q=0;Q<x.mipmaps.length;Q++)F.__webglFramebuffer[W][Q]=e.createFramebuffer()}else F.__webglFramebuffer[W]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)F.__webglFramebuffer[W]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(lt)for(let W=0,Q=et.length;W<Q;W++){const mt=i.get(et[W]);mt.__webglTexture===void 0&&(mt.__webglTexture=e.createTexture(),r.memory.textures++)}if(b.samples>0&&Yt(b)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<et.length;W++){const Q=et[W];F.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[W]);const mt=s.convert(Q.format,Q.colorSpace),xt=s.convert(Q.type),rt=M(Q.internalFormat,mt,xt,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),at=ke(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,at,rt,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,F.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(it){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),wt(e.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Dt(F.__webglFramebuffer[W][Q],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q);else Dt(F.__webglFramebuffer[W],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(x)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(lt){for(let W=0,Q=et.length;W<Q;W++){const mt=et[W],xt=i.get(mt);let rt=e.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,xt.__webglTexture),wt(rt,mt),Dt(F.__webglFramebuffer,b,mt,e.COLOR_ATTACHMENT0+W,rt,0),f(mt)&&m(rt)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(W=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,Z.__webglTexture),wt(W,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Dt(F.__webglFramebuffer[Q],b,x,e.COLOR_ATTACHMENT0,W,Q);else Dt(F.__webglFramebuffer,b,x,e.COLOR_ATTACHMENT0,W,0);f(x)&&m(W),n.unbindTexture()}b.depthBuffer&&le(b)}function Xe(b){const x=b.textures;for(let F=0,Z=x.length;F<Z;F++){const et=x[F];if(f(et)){const it=v(b),lt=i.get(et).__webglTexture;n.bindTexture(it,lt),m(it),n.unbindTexture()}}}const Ae=[],Cn=[];function O(b){if(b.samples>0){if(Yt(b)===!1){const x=b.textures,F=b.width,Z=b.height;let et=e.COLOR_BUFFER_BIT;const it=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=i.get(b),W=x.length>1;if(W)for(let mt=0;mt<x.length;mt++)n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);const xt=i.get(x[mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xt,0)}e.blitFramebuffer(0,0,F,Z,0,0,F,Z,et,e.NEAREST),l===!0&&(Ae.length=0,Cn.length=0,Ae.push(e.COLOR_ATTACHMENT0+mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ae.push(it),Cn.push(it),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Cn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let mt=0;mt<x.length;mt++){n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);const xt=i.get(x[mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,xt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ke(b){return Math.min(a.maxSamples,b.samples)}function Yt(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(b){const x=r.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function ct(b,x){const F=b.colorSpace,Z=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==qc&&F!==Ea&&(Zt.getTransfer(F)===ae?(Z!==ui||et!==Jn)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",F)),x}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.getTextureUnits=Y,this.setTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=gt,this.rebindTextures=xe,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function L3(e,t){function n(i,a=Ea){let s;const r=Zt.getTransfer(a);if(i===Jn)return e.UNSIGNED_BYTE;if(i===Op)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Jx)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$x)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kx)return e.BYTE;if(i===Qx)return e.SHORT;if(i===Bo)return e.UNSIGNED_SHORT;if(i===Lp)return e.INT;if(i===Ti)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===aa)return e.HALF_FLOAT;if(i===tS)return e.ALPHA;if(i===eS)return e.RGB;if(i===ui)return e.RGBA;if(i===sa)return e.DEPTH_COMPONENT;if(i===rs)return e.DEPTH_STENCIL;if(i===nS)return e.RED;if(i===Ip)return e.RED_INTEGER;if(i===vs)return e.RG;if(i===Fp)return e.RG_INTEGER;if(i===Bp)return e.RGBA_INTEGER;if(i===uc||i===fc||i===dc||i===hc)if(r===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kd||i===Qd||i===Jd||i===$d)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===eh||i===nh||i===ih||i===ah||i===kc||i===sh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===th||i===eh)return r===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ih)return s.COMPRESSED_R11_EAC;if(i===ah)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return s.COMPRESSED_RG11_EAC;if(i===sh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rh||i===oh||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sh||i===Mh||i===yh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Sh)return r===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===bh||i===Wc||i===Th)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const O3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new hS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ri({vertexShader:O3,fragmentShader:P3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ai(new Su(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F3 extends Ts{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,_=null;const E=typeof XRWebGLBinding<"u",g=new I3,f={},m=n.getContextAttributes();let v=null,M=null;const C=[],A=[],R=new oe;let S=null;const T=new li;T.viewport=new Pe;const N=new li;N.viewport=new Pe;const w=[T,N],B=new Yb;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=C[J];return ft===void 0&&(ft=new xf,C[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=C[J];return ft===void 0&&(ft=new xf,C[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=C[J];return ft===void 0&&(ft=new xf,C[J]=ft),ft.getHandSpace()};function P(J){const ft=A.indexOf(J.inputSource);if(ft===-1)return;const nt=C[ft];nt!==void 0&&(nt.update(J.inputSource,J.frame,c||r),nt.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){a.removeEventListener("select",P),a.removeEventListener("selectstart",P),a.removeEventListener("selectend",P),a.removeEventListener("squeeze",P),a.removeEventListener("squeezestart",P),a.removeEventListener("squeezeend",P),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",D);for(let J=0;J<C.length;J++){const ft=A[J];ft!==null&&(A[J]=null,C[J].disconnect(ft))}k=null,Y=null,g.reset();for(const J in f)delete f[J];t.setRenderTarget(v),h=null,u=null,p=null,a=null,M=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(v=t.getRenderTarget(),a.addEventListener("select",P),a.addEventListener("selectstart",P),a.addEventListener("selectend",P),a.addEventListener("squeeze",P),a.addEventListener("squeezestart",P),a.addEventListener("squeezeend",P),a.addEventListener("end",U),a.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Rt=null,Lt=null;m.depth&&(Lt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=m.stencil?rs:sa,Rt=m.stencil?zo:Ti);const Dt={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Dt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new bi(u.textureWidth,u.textureHeight,{format:ui,type:Jn,depthTexture:new Cr(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,nt),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new bi(h.framebufferWidth,h.framebufferHeight,{format:ui,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),wt.setContext(a),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(J){for(let ft=0;ft<J.removed.length;ft++){const nt=J.removed[ft],Rt=A.indexOf(nt);Rt>=0&&(A[Rt]=null,C[Rt].disconnect(nt))}for(let ft=0;ft<J.added.length;ft++){const nt=J.added[ft];let Rt=A.indexOf(nt);if(Rt===-1){for(let Dt=0;Dt<C.length;Dt++)if(Dt>=A.length){A.push(nt),Rt=Dt;break}else if(A[Dt]===null){A[Dt]=nt,Rt=Dt;break}if(Rt===-1)break}const Lt=C[Rt];Lt&&Lt.connect(nt)}}const H=new z,j=new z;function $(J,ft,nt){H.setFromMatrixPosition(ft.matrixWorld),j.setFromMatrixPosition(nt.matrixWorld);const Rt=H.distanceTo(j),Lt=ft.projectionMatrix.elements,Dt=nt.projectionMatrix.elements,Te=Lt[14]/(Lt[10]-1),qt=Lt[14]/(Lt[10]+1),le=(Lt[9]+1)/Lt[5],xe=(Lt[9]-1)/Lt[5],Xt=(Lt[8]-1)/Lt[0],Xe=(Dt[8]+1)/Dt[0],Ae=Te*Xt,Cn=Te*Xe,O=Rt/(-Xt+Xe),ke=O*-Xt;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ke),J.translateZ(O),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=Te+O,ge=qt+O,ct=Ae-ke,Re=Cn+(Rt-ke),b=le*qt/ge*Yt,x=xe*qt/ge*Yt;J.projectionMatrix.makePerspective(ct,Re,b,x,Yt,ge),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function gt(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ft=J.near,nt=J.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),B.near=N.near=T.near=ft,B.far=N.far=T.far=nt,(k!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,Y=B.far),B.layers.mask=J.layers.mask|6,T.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const Rt=J.parent,Lt=B.cameras;gt(B,Rt);for(let Dt=0;Dt<Lt.length;Dt++)gt(Lt[Dt],Rt);Lt.length===2?$(B,T,N):B.projectionMatrix.copy(T.projectionMatrix),pt(J,B,Rt)};function pt(J,ft,nt){nt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return f[J]};let At=null;function Vt(J,ft){if(d=ft.getViewerPose(c||r),_=ft,d!==null){const nt=d.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let Rt=!1;nt.length!==B.cameras.length&&(B.cameras.length=0,Rt=!0);for(let qt=0;qt<nt.length;qt++){const le=nt[qt];let xe=null;if(h!==null)xe=h.getViewport(le);else{const Xe=p.getViewSubImage(u,le);xe=Xe.viewport,qt===0&&(t.setRenderTargetTextures(M,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(M))}let Xt=w[qt];Xt===void 0&&(Xt=new li,Xt.layers.enable(qt),Xt.viewport=new Pe,w[qt]=Xt),Xt.matrix.fromArray(le.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(le.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(xe.x,xe.y,xe.width,xe.height),qt===0&&(B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Rt===!0&&B.cameras.push(Xt)}const Lt=a.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const qt=p.getDepthInformation(nt[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,a.renderState)}if(Lt&&Lt.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let qt=0;qt<nt.length;qt++){const le=nt[qt].camera;if(le){let xe=f[le];xe||(xe=new hS,f[le]=xe);const Xt=p.getCameraImage(le);xe.sourceTexture=Xt}}}}for(let nt=0;nt<C.length;nt++){const Rt=A[nt],Lt=C[nt];Rt!==null&&Lt!==void 0&&Lt.update(Rt,ft,c||r)}At&&At(J,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const wt=new gS;wt.setAnimationLoop(Vt),this.setAnimationLoop=function(J){At=J},this.dispose=function(){}}}const B3=new Fe,ES=new Ot;ES.set(-1,0,0,0,1,0,0,0,1);function z3(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,pS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,v,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&h(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),_(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===En&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===En&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),v=m.envMap,M=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(B3.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ES),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function H3(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=a[m.id];M===void 0&&(_(m),M=d(m),a[m.id]=M,m.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(m,C);const A=t.render.frame;s[m.id]!==A&&(u(m),s[m.id]=A)}function d(m){const v=p();m.__bindingPointIndex=v;const M=e.createBuffer(),C=m.__size,A=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,M),M}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const v=a[m.id],M=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let A=0,R=M.length;A<R;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,N=S.length;T<N;T++){const w=S[T];if(h(w,A,T,C)===!0){const B=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let P=0;P<k.length;P++){const U=k[P],D=E(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):ArrayBuffer.isView(U)?w.__data.set(new U.constructor(U.buffer,U.byteOffset,w.__data.length)):(U.toArray(w.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,v,M,C){const A=m.value,R=v+"_"+M;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:ArrayBuffer.isView(A)?C[R]=A.slice():C[R]=A.clone(),!0;{const S=C[R];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return C[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(S.equals(A)===!1)return S.copy(A),!0}}return!1}function _(m){const v=m.uniforms;let M=0;const C=16;for(let R=0,S=v.length;R<S;R++){const T=Array.isArray(v[R])?v[R]:[v[R]];for(let N=0,w=T.length;N<w;N++){const B=T[N],k=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,P=k.length;Y<P;Y++){const U=k[Y],D=E(U),H=M%C,j=H%D.boundary,$=H+j;M+=j,$!==0&&C-$<D.storage&&(M+=C-$),B.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=D.storage}}}const A=M%C;return A>0&&(M+=C-A),m.__size=M,m.__cache={},this}function E(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[v.id]),delete a[v.id],delete s[v.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const G3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function V3(){return mi===null&&(mi=new Ub(G3,16,16,vs,aa),mi.name="DFG_LUT",mi.minFilter=cn,mi.magFilter=cn,mi.wrapS=Yi,mi.wrapT=Yi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class X3{constructor(t={}){const{canvas:n=lb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Jn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const E=h,g=new Set([Bp,Fp,Ip]),f=new Set([Jn,Ti,Bo,zo,Op,Pp]),m=new Uint32Array(4),v=new Int32Array(4),M=new z;let C=null,A=null;const R=[],S=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let w=!1,B=null;this._outputColorSpace=Wn;let k=0,Y=0,P=null,U=-1,D=null;const H=new Pe,j=new Pe;let $=null;const gt=new ie(0);let pt=0,At=n.width,Vt=n.height,wt=1,J=null,ft=null;const nt=new Pe(0,0,At,Vt),Rt=new Pe(0,0,At,Vt);let Lt=!1;const Dt=new cS;let Te=!1,qt=!1;const le=new Fe,xe=new z,Xt=new Pe,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Cn(){return P===null?wt:1}let O=i;function ke(y,I){return n.getContext(y,I)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Np}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",It,!1),O===null){const I="webgl2";if(O=ke(I,y),O===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw $t("WebGLRenderer: "+y.message),y}let Yt,ge,ct,Re,b,x,F,Z,et,it,lt,W,Q,mt,xt,rt,at,Nt,zt,te,L,st,q;function _t(){Yt=new V1(O),Yt.init(),L=new L3(O,Yt),ge=new O1(O,Yt,t,L),ct=new U3(O,Yt),ge.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),Re=new W1(O),b=new _3,x=new N3(O,Yt,ct,b,ge,L,Re),F=new G1(N),Z=new Zb(O),st=new N1(O,Z),et=new X1(O,Z,Re,st),it=new Y1(O,et,Z,st,Re),Nt=new q1(O,ge,x),xt=new P1(b),lt=new g3(N,F,Yt,ge,st,xt),W=new z3(N,b),Q=new x3,mt=new T3(Yt),at=new U1(N,F,ct,it,_,l),rt=new D3(N,it,ge),q=new H3(O,Re,ge,ct),zt=new L1(O,Yt,Re),te=new k1(O,Yt,Re),Re.programs=lt.programs,N.capabilities=ge,N.extensions=Yt,N.properties=b,N.renderLists=Q,N.shadowMap=rt,N.state=ct,N.info=Re}_t(),E!==Jn&&(T=new Z1(E,n.width,n.height,a,s));const ot=new F3(N,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=Yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(y){y!==void 0&&(wt=y,this.setSize(At,Vt,!1))},this.getSize=function(y){return y.set(At,Vt)},this.setSize=function(y,I,X=!0){if(ot.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}At=y,Vt=I,n.width=Math.floor(y*wt),n.height=Math.floor(I*wt),X===!0&&(n.style.width=y+"px",n.style.height=I+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(At*wt,Vt*wt).floor()},this.setDrawingBufferSize=function(y,I,X){At=y,Vt=I,wt=X,n.width=Math.floor(y*X),n.height=Math.floor(I*X),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(E===Jn){$t("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(nt)},this.setViewport=function(y,I,X,G){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,I,X,G),ct.viewport(H.copy(nt).multiplyScalar(wt).round())},this.getScissor=function(y){return y.copy(Rt)},this.setScissor=function(y,I,X,G){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,I,X,G),ct.scissor(j.copy(Rt).multiplyScalar(wt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(y){ct.setScissorTest(Lt=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,X=!0){let G=0;if(y){let V=!1;if(P!==null){const ht=P.texture.format;V=g.has(ht)}if(V){const ht=P.texture.type,St=f.has(ht),dt=at.getClearColor(),Mt=at.getClearAlpha(),Et=dt.r,Ft=dt.g,Gt=dt.b;St?(m[0]=Et,m[1]=Ft,m[2]=Gt,m[3]=Mt,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Et,v[1]=Ft,v[2]=Gt,v[3]=Mt,O.clearBufferiv(O.COLOR,0,v))}else G|=O.COLOR_BUFFER_BIT}I&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),at.dispose(),Q.dispose(),mt.dispose(),b.dispose(),F.dispose(),it.dispose(),st.dispose(),q.dispose(),lt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Kp),ot.removeEventListener("sessionend",Qp),qa.stop()};function tt(y){y.preventDefault(),Gg("WebGLRenderer: Context Lost."),w=!0}function yt(){Gg("WebGLRenderer: Context Restored."),w=!1;const y=Re.autoReset,I=rt.enabled,X=rt.autoUpdate,G=rt.needsUpdate,V=rt.type;_t(),Re.autoReset=y,rt.enabled=I,rt.autoUpdate=X,rt.needsUpdate=G,rt.type=V}function It(y){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ue(y){const I=y.target;I.removeEventListener("dispose",Ue),ce(I)}function ce(y){Di(y),b.remove(y)}function Di(y){const I=b.get(y).programs;I!==void 0&&(I.forEach(function(X){lt.releaseProgram(X)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,X,G,V,ht){I===null&&(I=Xe);const St=V.isMesh&&V.matrixWorld.determinant()<0,dt=AS(y,I,X,G,V);ct.setMaterial(G,St);let Mt=X.index,Et=1;if(G.wireframe===!0){if(Mt=et.getWireframeAttribute(X),Mt===void 0)return;Et=2}const Ft=X.drawRange,Gt=X.attributes.position;let bt=Ft.start*Et,ue=(Ft.start+Ft.count)*Et;ht!==null&&(bt=Math.max(bt,ht.start*Et),ue=Math.min(ue,(ht.start+ht.count)*Et)),Mt!==null?(bt=Math.max(bt,0),ue=Math.min(ue,Mt.count)):Gt!=null&&(bt=Math.max(bt,0),ue=Math.min(ue,Gt.count));const Ne=ue-bt;if(Ne<0||Ne===1/0)return;st.setup(V,G,dt,X,Mt);let Ce,he=zt;if(Mt!==null&&(Ce=Z.get(Mt),he=te,he.setIndex(Ce)),V.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*Cn()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(V.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),ct.setLineWidth(rn*Cn()),V.isLineSegments?he.setMode(O.LINES):V.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else V.isPoints?he.setMode(O.POINTS):V.isSprite&&he.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const rn=V._multiDrawStarts,vt=V._multiDrawCounts,wn=V._multiDrawCount,Jt=Mt?Z.get(Mt).bytesPerElement:1,Vn=b.get(G).currentProgram.getUniforms();for(let hi=0;hi<wn;hi++)Vn.setValue(O,"_gl_DrawID",hi),he.render(rn[hi]/Jt,vt[hi])}else if(V.isInstancedMesh)he.renderInstances(bt,Ne,V.count);else if(X.isInstancedBufferGeometry){const rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,rn);he.renderInstances(bt,Ne,vt)}else he.render(bt,Ne)};function di(y,I,X){y.transparent===!0&&y.side===Xi&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,il(y,I,X),y.side=Xa,y.needsUpdate=!0,il(y,I,X),y.side=Xi):il(y,I,X)}this.compile=function(y,I,X=null){X===null&&(X=y),A=mt.get(X),A.init(I),S.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),y!==X&&y.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ht=V.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){const dt=ht[St];di(dt,X,V),G.add(dt)}else di(ht,X,V),G.add(ht)}),A=S.pop(),G},this.compileAsync=function(y,I,X=null){const G=this.compile(y,I,X);return new Promise(V=>{function ht(){if(G.forEach(function(St){b.get(St).currentProgram.isReady()&&G.delete(St)}),G.size===0){V(y);return}setTimeout(ht,10)}Yt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Eu=null;function bS(y){Eu&&Eu(y)}function Kp(){qa.stop()}function Qp(){qa.start()}const qa=new gS;qa.setAnimationLoop(bS),typeof self<"u"&&qa.setContext(self),this.setAnimationLoop=function(y){Eu=y,ot.setAnimationLoop(y),y===null?qa.stop():qa.start()},ot.addEventListener("sessionstart",Kp),ot.addEventListener("sessionend",Qp),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;B!==null&&B.renderStart(y,I);const X=ot.enabled===!0&&ot.isPresenting===!0,G=T!==null&&(P===null||X)&&T.begin(N,P);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(I),I=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,I,P),A=mt.get(y,S.length),A.init(I),A.state.textureUnits=x.getTextureUnits(),S.push(A),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Dt.setFromProjectionMatrix(le,Mi,I.reversedDepth),qt=this.localClippingEnabled,Te=xt.init(this.clippingPlanes,qt),C=Q.get(y,R.length),C.init(),R.push(C),ot.enabled===!0&&ot.isPresenting===!0){const St=N.xr.getDepthSensingMesh();St!==null&&bu(St,I,-1/0,N.sortObjects)}bu(y,I,0,N.sortObjects),C.finish(),N.sortObjects===!0&&C.sort(J,ft),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&at.addToRenderList(C,y),this.info.render.frame++,Te===!0&&xt.beginShadows();const V=A.state.shadowsArray;if(rt.render(V,y,I),Te===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&T.hasRenderPass())===!1){const St=C.opaque,dt=C.transmissive;if(A.setupLights(),I.isArrayCamera){const Mt=I.cameras;if(dt.length>0)for(let Et=0,Ft=Mt.length;Et<Ft;Et++){const Gt=Mt[Et];$p(St,dt,y,Gt)}Ae&&at.render(y);for(let Et=0,Ft=Mt.length;Et<Ft;Et++){const Gt=Mt[Et];Jp(C,y,Gt,Gt.viewport)}}else dt.length>0&&$p(St,dt,y,I),Ae&&at.render(y),Jp(C,y,I)}P!==null&&Y===0&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),G&&T.end(N),y.isScene===!0&&y.onAfterRender(N,y,I),st.resetDefaultState(),U=-1,D=null,S.pop(),S.length>0?(A=S[S.length-1],x.setTextureUnits(A.state.textureUnits),Te===!0&&xt.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,B!==null&&B.renderEnd()};function bu(y,I,X,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Dt.intersectsSprite(y)){G&&Xt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const St=it.update(y),dt=y.material;dt.visible&&C.push(y,St,dt,X,Xt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Dt.intersectsObject(y))){const St=it.update(y),dt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Xt.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Xt.copy(St.boundingSphere.center)),Xt.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(dt)){const Mt=St.groups;for(let Et=0,Ft=Mt.length;Et<Ft;Et++){const Gt=Mt[Et],bt=dt[Gt.materialIndex];bt&&bt.visible&&C.push(y,St,bt,X,Xt.z,Gt)}}else dt.visible&&C.push(y,St,dt,X,Xt.z,null)}}const ht=y.children;for(let St=0,dt=ht.length;St<dt;St++)bu(ht[St],I,X,G)}function Jp(y,I,X,G){const{opaque:V,transmissive:ht,transparent:St}=y;A.setupLightsView(X),Te===!0&&xt.setGlobalState(N.clippingPlanes,X),G&&ct.viewport(H.copy(G)),V.length>0&&nl(V,I,X),ht.length>0&&nl(ht,I,X),St.length>0&&nl(St,I,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function $p(y,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const bt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new bi(1,1,{generateMipmaps:!0,type:bt?aa:Jn,minFilter:ss,samples:Math.max(4,ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const ht=A.state.transmissionRenderTarget[G.id],St=G.viewport||H;ht.setSize(St.z*N.transmissionResolutionScale,St.w*N.transmissionResolutionScale);const dt=N.getRenderTarget(),Mt=N.getActiveCubeFace(),Et=N.getActiveMipmapLevel();N.setRenderTarget(ht),N.getClearColor(gt),pt=N.getClearAlpha(),pt<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&at.render(X);const Ft=N.toneMapping;N.toneMapping=Ei;const Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),Te===!0&&xt.setGlobalState(N.clippingPlanes,G),nl(y,X,G),x.updateMultisampleRenderTarget(ht),x.updateRenderTargetMipmap(ht),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let ue=0,Ne=I.length;ue<Ne;ue++){const Ce=I[ue],{object:he,geometry:rn,material:vt,group:wn}=Ce;if(vt.side===Xi&&he.layers.test(G.layers)){const Jt=vt.side;vt.side=En,vt.needsUpdate=!0,tm(he,X,G,rn,vt,wn),vt.side=Jt,vt.needsUpdate=!0,bt=!0}}bt===!0&&(x.updateMultisampleRenderTarget(ht),x.updateRenderTargetMipmap(ht))}N.setRenderTarget(dt,Mt,Et),N.setClearColor(gt,pt),Gt!==void 0&&(G.viewport=Gt),N.toneMapping=Ft}function nl(y,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ht=y.length;V<ht;V++){const St=y[V],{object:dt,geometry:Mt,group:Et}=St;let Ft=St.material;Ft.allowOverride===!0&&G!==null&&(Ft=G),dt.layers.test(X.layers)&&tm(dt,I,X,Mt,Ft,Et)}}function tm(y,I,X,G,V,ht){y.onBeforeRender(N,I,X,G,V,ht),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(N,I,X,G,y,ht),V.transparent===!0&&V.side===Xi&&V.forceSinglePass===!1?(V.side=En,V.needsUpdate=!0,N.renderBufferDirect(X,I,G,V,y,ht),V.side=Xa,V.needsUpdate=!0,N.renderBufferDirect(X,I,G,V,y,ht),V.side=Xi):N.renderBufferDirect(X,I,G,V,y,ht),y.onAfterRender(N,I,X,G,V,ht)}function il(y,I,X){I.isScene!==!0&&(I=Xe);const G=b.get(y),V=A.state.lights,ht=A.state.shadowsArray,St=V.state.version,dt=lt.getParameters(y,V.state,ht,I,X,A.state.lightProbeGridArray),Mt=lt.getProgramCacheKey(dt);let Et=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=F.get(y.envMap||G.environment,Ft),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Et===void 0&&(y.addEventListener("dispose",Ue),Et=new Map,G.programs=Et);let Gt=Et.get(Mt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===St)return nm(y,dt),Gt}else dt.uniforms=lt.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,dt),y.onBeforeCompile(dt,N),Gt=lt.acquireProgram(dt,Mt),Et.set(Mt,Gt),G.uniforms=dt.uniforms;const bt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=xt.uniform),nm(y,dt),G.needsLights=CS(y),G.lightsStateVersion=St,G.needsLights&&(bt.ambientLightColor.value=V.state.ambient,bt.lightProbe.value=V.state.probe,bt.directionalLights.value=V.state.directional,bt.directionalLightShadows.value=V.state.directionalShadow,bt.spotLights.value=V.state.spot,bt.spotLightShadows.value=V.state.spotShadow,bt.rectAreaLights.value=V.state.rectArea,bt.ltc_1.value=V.state.rectAreaLTC1,bt.ltc_2.value=V.state.rectAreaLTC2,bt.pointLights.value=V.state.point,bt.pointLightShadows.value=V.state.pointShadow,bt.hemisphereLights.value=V.state.hemi,bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,bt.spotLightMatrix.value=V.state.spotLightMatrix,bt.spotLightMap.value=V.state.spotLightMap,bt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=Gt,G.uniformsList=null,Gt}function em(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=pc.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function nm(y,I){const X=b.get(y);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function TS(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let X=0,G=y.length;X<G;X++){const V=y[X];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function AS(y,I,X,G,V){I.isScene!==!0&&(I=Xe),x.resetTextureUnits();const ht=I.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,dt=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zt.workingColorSpace,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Et=F.get(G.envMap||St,Mt),Ft=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Ne=!!X.morphAttributes.color;let Ce=Ei;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=N.toneMapping);const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=he!==void 0?he.length:0,vt=b.get(G),wn=A.state.lights;if(Te===!0&&(qt===!0||y!==D)){const _e=y===D&&G.id===U;xt.setState(G,y,_e)}let Jt=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==wn.state.version||vt.outputColorSpace!==dt||V.isBatchedMesh&&vt.batching===!1||!V.isBatchedMesh&&vt.batching===!0||V.isBatchedMesh&&vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&vt.instancing===!1||!V.isInstancedMesh&&vt.instancing===!0||V.isSkinnedMesh&&vt.skinning===!1||!V.isSkinnedMesh&&vt.skinning===!0||V.isInstancedMesh&&vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&vt.instancingMorph===!1&&V.morphTexture!==null||vt.envMap!==Et||G.fog===!0&&vt.fog!==ht||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==xt.numPlanes||vt.numIntersection!==xt.numIntersection)||vt.vertexAlphas!==Ft||vt.vertexTangents!==Gt||vt.morphTargets!==bt||vt.morphNormals!==ue||vt.morphColors!==Ne||vt.toneMapping!==Ce||vt.morphTargetsCount!==rn||!!vt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,vt.__version=G.version);let Vn=vt.currentProgram;Jt===!0&&(Vn=il(G,I,V),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Vn,vt));let hi=!1,oa=!1,As=!1;const pe=Vn.getUniforms(),Le=vt.uniforms;if(ct.useProgram(Vn.program)&&(hi=!0,oa=!0,As=!0),G.id!==U&&(U=G.id,oa=!0),vt.needsLights){const _e=TS(A.state.lightProbeGridArray,V);vt.lightProbeGrid!==_e&&(vt.lightProbeGrid=_e,oa=!0)}if(hi||D!==y){ct.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pe.setValue(O,"projectionMatrix",y.projectionMatrix),pe.setValue(O,"viewMatrix",y.matrixWorldInverse);const ca=pe.map.cameraPosition;ca!==void 0&&ca.setValue(O,xe.setFromMatrixPosition(y.matrixWorld)),ge.logarithmicDepthBuffer&&pe.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),D!==y&&(D=y,oa=!0,As=!0)}if(vt.needsLights&&(wn.state.directionalShadowMap.length>0&&pe.setValue(O,"directionalShadowMap",wn.state.directionalShadowMap,x),wn.state.spotShadowMap.length>0&&pe.setValue(O,"spotShadowMap",wn.state.spotShadowMap,x),wn.state.pointShadowMap.length>0&&pe.setValue(O,"pointShadowMap",wn.state.pointShadowMap,x)),V.isSkinnedMesh){pe.setOptional(O,V,"bindMatrix"),pe.setOptional(O,V,"bindMatrixInverse");const _e=V.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(O,"boneTexture",_e.boneTexture,x))}V.isBatchedMesh&&(pe.setOptional(O,V,"batchingTexture"),pe.setValue(O,"batchingTexture",V._matricesTexture,x),pe.setOptional(O,V,"batchingIdTexture"),pe.setValue(O,"batchingIdTexture",V._indirectTexture,x),pe.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(O,"batchingColorTexture",V._colorsTexture,x));const la=X.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&Nt.update(V,X,Vn),(oa||vt.receiveShadow!==V.receiveShadow)&&(vt.receiveShadow=V.receiveShadow,pe.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Le.envMapIntensity.value=I.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=V3()),oa){if(pe.setValue(O,"toneMappingExposure",N.toneMappingExposure),vt.needsLights&&RS(Le,As),ht&&G.fog===!0&&W.refreshFogUniforms(Le,ht),W.refreshMaterialUniforms(Le,G,wt,Vt,A.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const _e=vt.lightProbeGrid;Le.probesSH.value=_e.texture,Le.probesMin.value.copy(_e.boundingBox.min),Le.probesMax.value.copy(_e.boundingBox.max),Le.probesResolution.value.copy(_e.resolution)}pc.upload(O,em(vt),Le,x)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pc.upload(O,em(vt),Le,x),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(O,"center",V.center),pe.setValue(O,"modelViewMatrix",V.modelViewMatrix),pe.setValue(O,"normalMatrix",V.normalMatrix),pe.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const _e=G.uniformsGroups;for(let ca=0,Rs=_e.length;ca<Rs;ca++){const im=_e[ca];q.update(im,Vn),q.bind(im,Vn)}}return Vn}function RS(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function CS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,I,X){const G=b.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(y.texture).__webglTexture=I,b.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const X=b.get(y);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0};const wS=O.createFramebuffer();this.setRenderTarget=function(y,I=0,X=0){P=y,k=I,Y=X;let G=null,V=!1,ht=!1;if(y){const dt=b.get(y);if(dt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(O.FRAMEBUFFER,dt.__webglFramebuffer),H.copy(y.viewport),j.copy(y.scissor),$=y.scissorTest,ct.viewport(H),ct.scissor(j),ct.setScissorTest($),U=-1;return}else if(dt.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(dt.__hasExternalTextures)x.rebindTextures(y,b.get(y.texture).__webglTexture,b.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ft=y.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&b.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Mt=y.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ht=!0);const Et=b.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Et[I])?G=Et[I][X]:G=Et[I],V=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?G=b.get(y).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[X]:G=Et,H.copy(y.viewport),j.copy(y.scissor),$=y.scissorTest}else H.copy(nt).multiplyScalar(wt).floor(),j.copy(Rt).multiplyScalar(wt).floor(),$=Lt;if(X!==0&&(G=wS),ct.bindFramebuffer(O.FRAMEBUFFER,G)&&ct.drawBuffers(y,G),ct.viewport(H),ct.scissor(j),ct.setScissorTest($),V){const dt=b.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,dt.__webglTexture,X)}else if(ht){const dt=I;for(let Mt=0;Mt<y.textures.length;Mt++){const Et=b.get(y.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,X,dt)}}else if(y!==null&&X!==0){const dt=b.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dt.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(y,I,X,G,V,ht,St,dt=0){if(!(y&&y.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt){ct.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const Et=y.textures[dt],Ft=Et.format,Gt=Et.type;if(y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt),!ge.textureFormatReadable(Ft)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Gt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&X>=0&&X<=y.height-V&&O.readPixels(I,X,G,V,L.convert(Ft),L.convert(Gt),ht)}finally{const Et=P!==null?b.get(P).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,I,X,G,V,ht,St,dt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt)if(I>=0&&I<=y.width-G&&X>=0&&X<=y.height-V){ct.bindFramebuffer(O.FRAMEBUFFER,Mt);const Et=y.textures[dt],Ft=Et.format,Gt=Et.type;if(y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt),!ge.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.bufferData(O.PIXEL_PACK_BUFFER,ht.byteLength,O.STREAM_READ),O.readPixels(I,X,G,V,L.convert(Ft),L.convert(Gt),0);const ue=P!==null?b.get(P).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,ue);const Ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cb(O,Ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ht),O.deleteBuffer(bt),O.deleteSync(Ne),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,X=0){const G=Math.pow(2,-X),V=Math.floor(y.image.width*G),ht=Math.floor(y.image.height*G),St=I!==null?I.x:0,dt=I!==null?I.y:0;x.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,St,dt,V,ht),ct.unbindTexture()};const DS=O.createFramebuffer(),US=O.createFramebuffer();this.copyTextureToTexture=function(y,I,X=null,G=null,V=0,ht=0){let St,dt,Mt,Et,Ft,Gt,bt,ue,Ne;const Ce=y.isCompressedTexture?y.mipmaps[ht]:y.image;if(X!==null)St=X.max.x-X.min.x,dt=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Et=X.min.x,Ft=X.min.y,Gt=X.isBox3?X.min.z:0;else{const Le=Math.pow(2,-V);St=Math.floor(Ce.width*Le),dt=Math.floor(Ce.height*Le),y.isDataArrayTexture?Mt=Ce.depth:y.isData3DTexture?Mt=Math.floor(Ce.depth*Le):Mt=1,Et=0,Ft=0,Gt=0}G!==null?(bt=G.x,ue=G.y,Ne=G.z):(bt=0,ue=0,Ne=0);const he=L.convert(I.format),rn=L.convert(I.type);let vt;I.isData3DTexture?(x.setTexture3D(I,0),vt=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(x.setTexture2DArray(I,0),vt=O.TEXTURE_2D_ARRAY):(x.setTexture2D(I,0),vt=O.TEXTURE_2D),ct.activeTexture(O.TEXTURE0),ct.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),ct.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ct.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const wn=ct.getParameter(O.UNPACK_ROW_LENGTH),Jt=ct.getParameter(O.UNPACK_IMAGE_HEIGHT),Vn=ct.getParameter(O.UNPACK_SKIP_PIXELS),hi=ct.getParameter(O.UNPACK_SKIP_ROWS),oa=ct.getParameter(O.UNPACK_SKIP_IMAGES);ct.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),ct.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),ct.pixelStorei(O.UNPACK_SKIP_PIXELS,Et),ct.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),ct.pixelStorei(O.UNPACK_SKIP_IMAGES,Gt);const As=y.isDataArrayTexture||y.isData3DTexture,pe=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Le=b.get(y),la=b.get(I),_e=b.get(Le.__renderTarget),ca=b.get(la.__renderTarget);ct.bindFramebuffer(O.READ_FRAMEBUFFER,_e.__webglFramebuffer),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Rs=0;Rs<Mt;Rs++)As&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(y).__webglTexture,V,Gt+Rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(I).__webglTexture,ht,Ne+Rs)),O.blitFramebuffer(Et,Ft,St,dt,bt,ue,St,dt,O.DEPTH_BUFFER_BIT,O.NEAREST);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||b.has(y)){const Le=b.get(y),la=b.get(I);ct.bindFramebuffer(O.READ_FRAMEBUFFER,DS),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,US);for(let _e=0;_e<Mt;_e++)As?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.__webglTexture,V,Gt+_e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Le.__webglTexture,V),pe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,la.__webglTexture,ht,Ne+_e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,la.__webglTexture,ht),V!==0?O.blitFramebuffer(Et,Ft,St,dt,bt,ue,St,dt,O.COLOR_BUFFER_BIT,O.NEAREST):pe?O.copyTexSubImage3D(vt,ht,bt,ue,Ne+_e,Et,Ft,St,dt):O.copyTexSubImage2D(vt,ht,bt,ue,Et,Ft,St,dt);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pe?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(vt,ht,bt,ue,Ne,St,dt,Mt,he,rn,Ce.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(vt,ht,bt,ue,Ne,St,dt,Mt,he,Ce.data):O.texSubImage3D(vt,ht,bt,ue,Ne,St,dt,Mt,he,rn,Ce):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ht,bt,ue,St,dt,he,rn,Ce.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ht,bt,ue,Ce.width,Ce.height,he,Ce.data):O.texSubImage2D(O.TEXTURE_2D,ht,bt,ue,St,dt,he,rn,Ce);ct.pixelStorei(O.UNPACK_ROW_LENGTH,wn),ct.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),ct.pixelStorei(O.UNPACK_SKIP_PIXELS,Vn),ct.pixelStorei(O.UNPACK_SKIP_ROWS,hi),ct.pixelStorei(O.UNPACK_SKIP_IMAGES,oa),ht===0&&I.generateMipmaps&&O.generateMipmap(vt),ct.unbindTexture()},this.initRenderTarget=function(y){b.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),ct.unbindTexture()},this.resetState=function(){k=0,Y=0,P=null,ct.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}const I0=3,k3=[{name:"Tanq Driver",label:"driver app",href:"https://play.google.com/store/apps/details?id=app.driver.tanq&hl=en_IN"},{name:"Tanq",label:"rider app",href:"https://play.google.com/store/apps/details?id=com.tanqrider.app&hl=en_IN"},{name:"Piggyback",label:"sportsbook learning",href:"https://play.google.com/store/apps/details?id=com.piggyback.appp.piggyback&hl=en_IN"},{name:"Fintalkr",label:"finance advisory",href:"https://play.google.com/store/apps/details?id=com.fintalkr.app.fintalkr&hl=en_IN"},{name:"Agent Property Journey",label:"real-estate CRM",href:"https://play.google.com/store/apps/details?id=com.myproperty.flutterapp&hl=en"},{name:"Leadsden",label:"agent CRM",href:"https://play.google.com/store/apps/details?id=com.leadsDen.mobileApp&hl=en"}],sr=[{marker:"00",eyebrow:"sarath enters",text:"This is Sarath Krishnan P V: Kerala-born, 2001 edition, Flutter developer, AI-assisted builder, and professional overthinker of tiny app details.",bubble:"I am the narrator. welcome to sarath's story.",action:"wave",terms:["Flutter","AI","Kerala"]},{marker:"01",eyebrow:"curiosity loads",text:"His story started with gadgets, laptops, games, video edits, and movie hacking scenes where people type aggressively and somehow save the planet.",bubble:"hollywood lied. he still bought the dream.",action:"gadget",terms:["gadgets","editing","gaming"]},{marker:"02",eyebrow:"engineering turn",text:"After Plus Two, Sarath chose B.Tech Computer Science under KTU and completed it in 2023. Curiosity finally found a direction and a compiler to argue with.",bubble:"degree acquired. bugs came free.",action:"graduate",terms:["KTU","CSE","2023"]},{marker:"03",eyebrow:"flutter spark",text:"A college mobile app project pulled him toward Flutter: logic, design, performance, and real usefulness packed into one tiny rectangle.",bubble:"tiny rectangle. massive opinions.",action:"flutter",terms:["Dart","Flutter","Mobile UI"]},{marker:"04",eyebrow:"real work begins",text:"At Aster Medcity and then Coder Space, he sharpened into a stronger Flutter developer, learning how real products are planned, built, and shipped.",bubble:"tutorial mode died on impact.",action:"build",terms:["Aster","Coder Space","shipping"]},{marker:"05",eyebrow:"tanq ride",text:"Tanq Driver became a major chapter: he completed the driver app fully, contributed to the user app, and handled serious production-level mobile flows.",bubble:"cars, maps, deadlines. lovely chaos.",action:"route",terms:["Tanq Driver","maps","real time"]},{marker:"06",eyebrow:"ateam phase",text:"At Ateam Soft Solutions, the work got heavier: larger architectures, native needs, advanced integrations, and faster expectations.",bubble:"difficulty upgraded. peace uninstalled.",action:"climb",terms:["native","architecture","integrations"]},{marker:"07",eyebrow:"product range",text:"He worked across shipped products: Tanq, Piggyback, Fintalkr, Agent Property Journey, and Leadsden. Sports data, finance, real-estate CRM, APIs, Firebase, Bloc, GetX, integrations.",bubble:"actual apps. portfolio finally has receipts.",action:"data",terms:["Bloc","GetX","Firebase","REST API"],projects:k3},{marker:"08",eyebrow:"ai-assisted era",text:"When AI coding tools arrived, Sarath did not watch from the sidelines. He turned Cursor, Codex, Claude, prompts, agents, debugging, generation, and review into a faster way to think, build, and ship.",bubble:"AI entered. excuses left.",action:"prompt",terms:["Cursor","Codex","Claude","AI agents"]},{marker:"09",eyebrow:"solo achievement",text:"A big milestone: handling a project almost alone with AI as a serious force multiplier, while also managing client communication, requirements, releases, and delivery.",bubble:"solo run. AI sidekick. stress DLC.",action:"launch",terms:["Codemagic","CI/CD","Play Store","release"]},{marker:"10",eyebrow:"this portfolio too",text:"And yes, he built this portfolio with React, TypeScript, Three.js, and a suspicious amount of learning on the fly. He did not know all of it before starting. That is kind of the point.",bubble:"proof of work. slightly illegal confidence.",action:"evolve",terms:["React","TypeScript","Three.js","Vite"]}],Yl=sr.length+1,F0={wave:{color:1184015,sides:24,pulse:.16},gadget:{color:2785183,sides:4,pulse:.2},trip:{color:1184015,sides:3,pulse:.24},graduate:{color:1184015,sides:4,pulse:.18},ai:{color:9391592,sides:8,pulse:.28},flutter:{color:1620461,sides:4,pulse:.28},intern:{color:6196321,sides:5,pulse:.16},build:{color:1184015,sides:6,pulse:.22},route:{color:14438970,sides:3,pulse:.26},climb:{color:1184015,sides:5,pulse:.2},score:{color:4947033,sides:6,pulse:.24},finance:{color:11768113,sides:24,pulse:.22},prompt:{color:9391592,sides:8,pulse:.3},data:{color:1184015,sides:4,pulse:.2},connect:{color:2785183,sides:6,pulse:.22},launch:{color:14438970,sides:3,pulse:.28},client:{color:1184015,sides:24,pulse:.18},evolve:{color:1184015,sides:8,pulse:.24}};function B0(e){return e>=24?new Jc(.16,.18,40):new Jc(.14,.18,e)}function W3(e,t){return(e%t+t)%t/t}function q3({progress:e,speed:t,action:n}){const i=dn.useRef(null),a=dn.useRef({progress:e,speed:t,action:n});return dn.useEffect(()=>{a.current={progress:e,speed:t,action:n}},[e,t,n]),dn.useEffect(()=>{const s=i.current;if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=new X3({canvas:s,alpha:!0,antialias:!0});r.setClearColor(0,0),r.setPixelRatio(Math.min(window.devicePixelRatio,1.6));const o=new Tb,l=new kp(-1,1,1,-1,.1,10);l.position.z=4;const c=72,d=new Float32Array(c*3),p=Array.from({length:c},(S,T)=>({x:T%12/5.5-1,y:Math.floor(T/12)/2.8-.95,z:-Math.random()*1.8,drift:.015+Math.random()*.035}));p.forEach((S,T)=>{d[T*3]=S.x,d[T*3+1]=S.y,d[T*3+2]=S.z});const u=new An;u.setAttribute("position",new ei(d,3));const h=new Fb(u,new fS({color:1184015,size:.012,transparent:!0,opacity:.22,depthWrite:!1}));o.add(h);const _=new Float32Array([-.9,.56,-.8,-.18,.64,-1.2,.18,.64,-1.2,.86,.34,-1.1,-.72,-.2,-1.4,-.12,-.44,-1.5,-.12,-.44,-1.5,.68,-.3,-1.35,-.32,.24,-1.7,.28,.1,-1.6]),E=new An;E.setAttribute("position",new ei(_,3));const g=new Ib(E,new uS({color:1184015,transparent:!0,opacity:.09}));o.add(g);const f=new Xp({color:1184015,transparent:!0,opacity:.1,wireframe:!0});let m=B0(24);const v=new Ai(m,f);v.position.set(.62,-.36,-.6),o.add(v);const M=()=>{const S=window.innerWidth,T=window.innerHeight;r.setSize(S,T,!1);const N=S/Math.max(T,1);l.left=-N,l.right=N,l.top=1,l.bottom=-1,l.updateProjectionMatrix()};let C=24,A=0;const R=S=>{const{progress:T,speed:N,action:w}=a.current,B=u.getAttribute("position"),k=F0[w]??F0.wave;k.sides!==C&&(m.dispose(),m=B0(k.sides),v.geometry=m,C=k.sides),p.forEach((Y,P)=>{const U=Math.sin(S*25e-5+P*1.7)*Y.drift;B.setXYZ(P,Y.x+U+T*.1,Y.y+Math.cos(S*18e-5+P)*Y.drift-T*.16,Y.z)}),B.needsUpdate=!0,h.rotation.z=T*.18,g.rotation.z=-T*.08,g.position.x=N*.12,h.position.y=N*.06,f.color.setHex(k.color),f.opacity=.08+k.pulse*Math.abs(Math.sin(S*.002)),v.rotation.z=S*7e-4+T*Math.PI*2,v.scale.setScalar(1+k.pulse*Math.sin(S*.003)),v.position.x=.62+N*.22,r.render(o,l),A=requestAnimationFrame(R)};return M(),A=requestAnimationFrame(R),window.addEventListener("resize",M),()=>{cancelAnimationFrame(A),window.removeEventListener("resize",M),u.dispose(),E.dispose(),m.dispose(),h.material.dispose(),g.material.dispose(),f.dispose(),r.dispose()}},[]),Tt.jsx("canvas",{className:"paper-depth",ref:i,"aria-hidden":"true"})}function Y3({copyIndex:e,beginOrbitDrag:t,beginItemDrag:n,drag:i,endDrag:a,itemSpins:s}){return Tt.jsxs("div",{className:"story-pass","aria-hidden":e!==1,children:[Tt.jsxs("section",{className:"intro",children:[Tt.jsx("p",{className:"tiny",children:"sarath krishnan pv"}),Tt.jsx("h1",{children:"Flutter developer. AI-assisted builder. Constantly evolving."}),Tt.jsx("p",{className:"intro-copy",children:"My short scroll-story about curiosity, Flutter, real products, and using AI without forgetting how to think."}),Tt.jsx("p",{className:"scroll-cue",children:"scroll forever, basically"}),Tt.jsx("div",{className:"first-page-skills","aria-label":"Sarath skill highlights",onPointerDown:t,onPointerMove:i,onPointerUp:a,onPointerCancel:a,children:Tt.jsxs("div",{className:"orbit-rotor",children:[Tt.jsx("span",{className:"skill-card skill-flutter",onPointerDown:r=>n("flutter",r),style:{"--item-spin":`${s.flutter??0}deg`},children:"Flutter"}),Tt.jsx("span",{className:"skill-card skill-code",onPointerDown:r=>n("code",r),style:{"--item-spin":`${s.code??0}deg`},children:"Coding"}),Tt.jsx("span",{className:"skill-card skill-video",onPointerDown:r=>n("video",r),style:{"--item-spin":`${s.video??0}deg`},children:"Video editing"}),Tt.jsx("span",{className:"skill-card skill-ai",onPointerDown:r=>n("ai",r),style:{"--item-spin":`${s.ai??0}deg`},children:"AI prompting"})]})})]}),sr.slice(1).map(r=>Tt.jsxs("section",{className:"beat",children:[Tt.jsx("div",{className:"term-field","aria-hidden":"true",children:r.terms.map((o,l)=>Tt.jsx("span",{className:`floating-term term-${l+1}`,children:o},o))}),Tt.jsx("div",{className:"beat-marker",children:r.marker}),Tt.jsxs("div",{children:[Tt.jsx("p",{className:"eyebrow",children:r.eyebrow}),Tt.jsx("p",{className:"giant-copy",children:r.text}),r.projects?Tt.jsx("div",{className:"project-showcase","aria-label":"Play Store project links",children:r.projects.map(o=>Tt.jsxs("a",{className:"project-link",href:o.href,rel:"noreferrer",target:"_blank",children:[Tt.jsx("span",{children:o.name}),Tt.jsx("small",{children:o.label})]},o.href))}):null]})]},`${e}-${r.marker}`)),Tt.jsxs("section",{className:"outro",children:[Tt.jsx("p",{className:"tiny",children:"the story keeps looping"}),Tt.jsx("h2",{children:"built while learning. shipped while walking. honestly, that tracks."})]})]})}function j3(){const[e,t]=dn.useState({progress:0,speed:0}),[n,i]=dn.useState(0),[a,s]=dn.useState({}),r=dn.useRef(null),o=dn.useRef(!1),l=dn.useRef(null);dn.useEffect(()=>{let D=window.scrollY,H=performance.now(),j=0;const $=()=>{cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var nt;const gt=performance.now(),pt=(((nt=r.current)==null?void 0:nt.scrollHeight)??0)/I0;let At=window.scrollY;pt>1&&!o.current?(At=pt,window.scrollTo(0,At),D=At,o.current=!0):pt>1&&At<pt*.45?(At+=pt,window.scrollTo(0,At),D=At):pt>1&&At>pt*2.55&&(At-=pt,window.scrollTo(0,At),D=At);const Vt=At-D,wt=Math.max(gt-H,16),J=Math.max(-1,Math.min(Vt/wt/2,1)),ft=pt>1?W3(At,pt):0;t({progress:ft,speed:J}),D=At,H=gt})};return window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",$),$(),()=>{cancelAnimationFrame(j),window.removeEventListener("scroll",$),window.removeEventListener("resize",$)}},[]);const c=dn.useMemo(()=>e.progress*Math.PI*20,[e.progress]),d=Math.sin(c),p=Math.cos(c),u=Math.max(0,Math.sin(e.progress*Math.PI*9)),h=e.speed*14,_=-58+p*34,E=58+d*34,g=-28+d*36,f=28+p*36,m=e.progress*Math.PI*2,v=1,M=48-Math.cos(m)*38,C=46+Math.sin(m*1.35)*14,A=Math.min(Math.floor(e.progress*Yl),Yl-1),R=A===Yl-1,S=R?sr.length-1:Math.min(A,sr.length-1),T=sr[S].action,N=e.progress*Yl-A,w=Math.max(0,Math.sin(N*Math.PI)),B=38,k=D=>{D.currentTarget.setPointerCapture(D.pointerId),l.current={type:"orbit",startX:D.clientX,startY:D.clientY,startRotation:n}},Y=(D,H)=>{H.stopPropagation(),H.currentTarget.setPointerCapture(H.pointerId),l.current={type:"item",key:D,startX:H.clientX,startY:H.clientY,startRotation:a[D]??0}},P=D=>{const H=l.current;if(!H)return;const j=D.clientX-H.startX+(D.clientY-H.startY)*.2;if(H.type==="orbit"){i(H.startRotation+j*.32);return}H.key&&s($=>({...$,[H.key]:H.startRotation+j*1.6}))},U=()=>{l.current=null};return Tt.jsxs("main",{className:"story",style:{"--progress":e.progress,"--walk":d,"--counter-walk":p,"--jump":u,"--lean":`${h}deg`,"--left-arm":`${_}deg`,"--right-arm":`${E}deg`,"--left-leg":`${g}deg`,"--right-leg":`${f}deg`,"--travel-x":`${M}vw`,"--travel-y":`${C}vh`,"--face":v,"--action-pulse":w,"--local-progress":N,"--orbit-speed":`${B}s`,"--orbit-rotation":`${n}deg`},"data-action":T,"data-tone":R?"dark":"light",children:[Tt.jsx(q3,{progress:e.progress,speed:e.speed,action:T}),Tt.jsxs("aside",{className:"stage","aria-label":"scrolling stick man narrator",children:[Tt.jsx("div",{className:"progress-track",children:Tt.jsx("div",{className:"progress-fill"})}),Tt.jsxs("div",{className:"stick-wrap",children:[Tt.jsxs("div",{className:"paper-plane","aria-hidden":"true",children:[Tt.jsx("span",{className:"smoke smoke-one"}),Tt.jsx("span",{className:"smoke smoke-two"}),Tt.jsx("span",{className:"smoke smoke-three"})]}),Tt.jsx("div",{className:"speech",children:R?"white outfit. black slide. drama.":sr[S].bubble}),Tt.jsxs("div",{className:"stickman","aria-hidden":"true",children:[Tt.jsx("span",{className:"head"}),Tt.jsx("span",{className:"body"}),Tt.jsx("span",{className:"arm arm-left"}),Tt.jsx("span",{className:"arm arm-right"}),Tt.jsx("span",{className:"leg leg-left"}),Tt.jsx("span",{className:"leg leg-right"}),Tt.jsx("span",{className:"flower flower-one"}),Tt.jsx("span",{className:"flower flower-two"}),Tt.jsx("span",{className:"flower flower-three"}),Tt.jsx("span",{className:"stick-prop prop-one"}),Tt.jsx("span",{className:"stick-prop prop-two"}),Tt.jsx("span",{className:"stick-prop prop-three"}),Tt.jsx("span",{className:"shadow"})]})]})]}),Tt.jsx("div",{className:"story-loop",ref:r,children:Array.from({length:I0},(D,H)=>Tt.jsx(Y3,{copyIndex:H,beginOrbitDrag:k,beginItemDrag:Y,drag:P,endDrag:U,itemSpins:a},H))})]})}CE.createRoot(document.getElementById("root")).render(Tt.jsx(dn.StrictMode,{children:Tt.jsx(j3,{})}));
