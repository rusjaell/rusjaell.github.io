var df=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Vv=df(($v,vs)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const qe={},sr=[],Kt=()=>{},uf=()=>!1,Ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zi=e=>e.startsWith("onUpdate:"),lt=Object.assign,Hi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ff=Object.prototype.hasOwnProperty,Fe=(e,t)=>ff.call(e,t),de=Array.isArray,ir=e=>Ls(e)==="[object Map]",Gl=e=>Ls(e)==="[object Set]",ge=e=>typeof e=="function",Je=e=>typeof e=="string",xn=e=>typeof e=="symbol",We=e=>e!==null&&typeof e=="object",Dl=e=>(We(e)||ge(e))&&ge(e.then)&&ge(e.catch),Bl=Object.prototype.toString,Ls=e=>Bl.call(e),hf=e=>Ls(e).slice(8,-1),Ul=e=>Ls(e)==="[object Object]",Xi=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Er=Wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},pf=/-(\w)/g,Dt=Cs(e=>e.replace(pf,(t,n)=>n?n.toUpperCase():"")),gf=/\B([A-Z])/g,Nn=Cs(e=>e.replace(gf,"-$1").toLowerCase()),Os=Cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),bi=Cs(e=>e?`on${Os(e)}`:""),_n=(e,t)=>!Object.is(e,t),_i=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Nl=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},mf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mo;const Ps=()=>Mo||(Mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yi(e){if(de(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Je(s)?yf(s):Yi(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(Je(e)||We(e))return e}const vf=/;(?![^(]*\))/g,bf=/:([^]+)/,_f=/\/\*[^]*?\*\//g;function yf(e){const t={};return e.replace(_f,"").split(vf).forEach(n=>{if(n){const s=n.split(bf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Is(e){let t="";if(Je(e))t=e;else if(de(e))for(let n=0;n<e.length;n++){const s=Is(e[n]);s&&(t+=s+" ")}else if(We(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xf=Wi(wf);function jl(e){return!!e||e===""}const Ml=e=>!!(e&&e.__v_isRef===!0),yt=e=>Je(e)?e:e==null?"":de(e)||We(e)&&(e.toString===Bl||!ge(e.toString))?Ml(e)?yt(e.value):JSON.stringify(e,Vl,2):String(e),Vl=(e,t)=>Ml(t)?Vl(e,t.value):ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[yi(s,o)+" =>"]=i,n),{})}:Gl(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yi(n))}:xn(t)?yi(t):We(t)&&!de(t)&&!Ul(t)?String(t):t,yi=(e,t="")=>{var n;return xn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class Af{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!t&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=wt;try{return wt=this,t()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ef(){return wt}let Ve;const wi=new WeakSet;class ql{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wi.has(this)&&(wi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vo(this),zl(this);const t=Ve,n=Mt;Ve=this,Mt=!0;try{return this.fn()}finally{Hl(this),Ve=t,Mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ji(t);this.deps=this.depsTail=void 0,Vo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fi(this)&&this.run()}get dirty(){return Fi(this)}}let $l=0,Tr,Sr;function Wl(e,t=!1){if(e.flags|=8,t){e.next=Sr,Sr=e;return}e.next=Tr,Tr=e}function Ki(){$l++}function Qi(){if(--$l>0)return;if(Sr){let t=Sr;for(Sr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Tr;){let t=Tr;for(Tr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function zl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hl(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ji(s),Tf(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Fi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Fr)||(e.globalVersion=Fr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fi(e))))return;e.flags|=2;const t=e.dep,n=Ve,s=Mt;Ve=e,Mt=!0;try{zl(e);const i=e.fn(e._value);(t.version===0||_n(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ve=n,Mt=s,Hl(e),e.flags&=-3}}function Ji(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ji(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tf(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Mt=!0;const Yl=[];function on(){Yl.push(Mt),Mt=!1}function ln(){const e=Yl.pop();Mt=e===void 0?!0:e}function Vo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ve;Ve=void 0;try{t()}finally{Ve=n}}}let Fr=0;class Sf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ve||!Mt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Sf(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Kl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=s)}return n}trigger(t){this.version++,Fr++,this.notify(t)}notify(t){Ki();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qi()}}}function Kl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Kl(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ri=new WeakMap,Un=Symbol(""),ki=Symbol(""),Rr=Symbol("");function it(e,t,n){if(Mt&&Ve){let s=Ri.get(e);s||Ri.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Zi),i.map=s,i.key=n),i.track()}}function sn(e,t,n,s,i,o){const d=Ri.get(e);if(!d){Fr++;return}const c=h=>{h&&h.trigger()};if(Ki(),t==="clear")d.forEach(c);else{const h=de(e),_=h&&Xi(n);if(h&&n==="length"){const g=Number(s);d.forEach((b,S)=>{(S==="length"||S===Rr||!xn(S)&&S>=g)&&c(b)})}else switch((n!==void 0||d.has(void 0))&&c(d.get(n)),_&&c(d.get(Rr)),t){case"add":h?_&&c(d.get("length")):(c(d.get(Un)),ir(e)&&c(d.get(ki)));break;case"delete":h||(c(d.get(Un)),ir(e)&&c(d.get(ki)));break;case"set":ir(e)&&c(d.get(Un));break}}Qi()}function tr(e){const t=Ie(e);return t===e?t:(it(t,"iterate",Rr),Gt(e)?t:t.map(st))}function Fs(e){return it(e=Ie(e),"iterate",Rr),e}const Lf={__proto__:null,[Symbol.iterator](){return xi(this,Symbol.iterator,st)},concat(...e){return tr(this).concat(...e.map(t=>de(t)?tr(t):t))},entries(){return xi(this,"entries",e=>(e[1]=st(e[1]),e))},every(e,t){return tn(this,"every",e,t,void 0,arguments)},filter(e,t){return tn(this,"filter",e,t,n=>n.map(st),arguments)},find(e,t){return tn(this,"find",e,t,st,arguments)},findIndex(e,t){return tn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tn(this,"findLast",e,t,st,arguments)},findLastIndex(e,t){return tn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ai(this,"includes",e)},indexOf(...e){return Ai(this,"indexOf",e)},join(e){return tr(this).join(e)},lastIndexOf(...e){return Ai(this,"lastIndexOf",e)},map(e,t){return tn(this,"map",e,t,void 0,arguments)},pop(){return yr(this,"pop")},push(...e){return yr(this,"push",e)},reduce(e,...t){return qo(this,"reduce",e,t)},reduceRight(e,...t){return qo(this,"reduceRight",e,t)},shift(){return yr(this,"shift")},some(e,t){return tn(this,"some",e,t,void 0,arguments)},splice(...e){return yr(this,"splice",e)},toReversed(){return tr(this).toReversed()},toSorted(e){return tr(this).toSorted(e)},toSpliced(...e){return tr(this).toSpliced(...e)},unshift(...e){return yr(this,"unshift",e)},values(){return xi(this,"values",st)}};function xi(e,t,n){const s=Fs(e),i=s[t]();return s!==e&&!Gt(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const Cf=Array.prototype;function tn(e,t,n,s,i,o){const d=Fs(e),c=d!==e&&!Gt(e),h=d[t];if(h!==Cf[t]){const b=h.apply(e,o);return c?st(b):b}let _=n;d!==e&&(c?_=function(b,S){return n.call(this,st(b),S,e)}:n.length>2&&(_=function(b,S){return n.call(this,b,S,e)}));const g=h.call(d,_,s);return c&&i?i(g):g}function qo(e,t,n,s){const i=Fs(e);let o=n;return i!==e&&(Gt(e)?n.length>3&&(o=function(d,c,h){return n.call(this,d,c,h,e)}):o=function(d,c,h){return n.call(this,d,st(c),h,e)}),i[t](o,...s)}function Ai(e,t,n){const s=Ie(e);it(s,"iterate",Rr);const i=s[t](...n);return(i===-1||i===!1)&&na(n[0])?(n[0]=Ie(n[0]),s[t](...n)):i}function yr(e,t,n=[]){on(),Ki();const s=Ie(e)[t].apply(e,n);return Qi(),ln(),s}const Of=Wi("__proto__,__v_isRef,__isVue"),Ql=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xn));function Pf(e){xn(e)||(e=String(e));const t=Ie(this);return it(t,"has",e),t.hasOwnProperty(e)}class Jl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?jf:nc:o?tc:ec).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const d=de(t);if(!i){let h;if(d&&(h=Lf[n]))return h;if(n==="hasOwnProperty")return Pf}const c=Reflect.get(t,n,ot(t)?t:s);return(xn(n)?Ql.has(n):Of(n))||(i||it(t,"get",n),o)?c:ot(c)?d&&Xi(n)?c:c.value:We(c)?i?sc(c):Rs(c):c}}class Zl extends Jl{constructor(t=!1){super(!1,t)}set(t,n,s,i){let o=t[n];if(!this._isShallow){const h=yn(o);if(!Gt(s)&&!yn(s)&&(o=Ie(o),s=Ie(s)),!de(t)&&ot(o)&&!ot(s))return h?!1:(o.value=s,!0)}const d=de(t)&&Xi(n)?Number(n)<t.length:Fe(t,n),c=Reflect.set(t,n,s,ot(t)?t:i);return t===Ie(i)&&(d?_n(s,o)&&sn(t,"set",n,s):sn(t,"add",n,s)),c}deleteProperty(t,n){const s=Fe(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&sn(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!xn(n)||!Ql.has(n))&&it(t,"has",n),s}ownKeys(t){return it(t,"iterate",de(t)?"length":Un),Reflect.ownKeys(t)}}class If extends Jl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ff=new Zl,Rf=new If,kf=new Zl(!0),Gi=e=>e,ls=e=>Reflect.getPrototypeOf(e);function Gf(e,t,n){return function(...s){const i=this.__v_raw,o=Ie(i),d=ir(o),c=e==="entries"||e===Symbol.iterator&&d,h=e==="keys"&&d,_=i[e](...s),g=n?Gi:t?bs:st;return!t&&it(o,"iterate",h?ki:Un),{next(){const{value:b,done:S}=_.next();return S?{value:b,done:S}:{value:c?[g(b[0]),g(b[1])]:g(b),done:S}},[Symbol.iterator](){return this}}}}function cs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Df(e,t){const n={get(i){const o=this.__v_raw,d=Ie(o),c=Ie(i);e||(_n(i,c)&&it(d,"get",i),it(d,"get",c));const{has:h}=ls(d),_=t?Gi:e?bs:st;if(h.call(d,i))return _(o.get(i));if(h.call(d,c))return _(o.get(c));o!==d&&o.get(i)},get size(){const i=this.__v_raw;return!e&&it(Ie(i),"iterate",Un),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,d=Ie(o),c=Ie(i);return e||(_n(i,c)&&it(d,"has",i),it(d,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const d=this,c=d.__v_raw,h=Ie(c),_=t?Gi:e?bs:st;return!e&&it(h,"iterate",Un),c.forEach((g,b)=>i.call(o,_(g),_(b),d))}};return lt(n,e?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(i){!t&&!Gt(i)&&!yn(i)&&(i=Ie(i));const o=Ie(this);return ls(o).has.call(o,i)||(o.add(i),sn(o,"add",i,i)),this},set(i,o){!t&&!Gt(o)&&!yn(o)&&(o=Ie(o));const d=Ie(this),{has:c,get:h}=ls(d);let _=c.call(d,i);_||(i=Ie(i),_=c.call(d,i));const g=h.call(d,i);return d.set(i,o),_?_n(o,g)&&sn(d,"set",i,o):sn(d,"add",i,o),this},delete(i){const o=Ie(this),{has:d,get:c}=ls(o);let h=d.call(o,i);h||(i=Ie(i),h=d.call(o,i)),c&&c.call(o,i);const _=o.delete(i);return h&&sn(o,"delete",i,void 0),_},clear(){const i=Ie(this),o=i.size!==0,d=i.clear();return o&&sn(i,"clear",void 0,void 0),d}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Gf(i,e,t)}),n}function ea(e,t){const n=Df(e,t);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Fe(n,i)&&i in s?n:s,i,o)}const Bf={get:ea(!1,!1)},Uf={get:ea(!1,!0)},Nf={get:ea(!0,!1)},ec=new WeakMap,tc=new WeakMap,nc=new WeakMap,jf=new WeakMap;function Mf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vf(e){return e.__v_skip||!Object.isExtensible(e)?0:Mf(hf(e))}function Rs(e){return yn(e)?e:ta(e,!1,Ff,Bf,ec)}function rc(e){return ta(e,!1,kf,Uf,tc)}function sc(e){return ta(e,!0,Rf,Nf,nc)}function ta(e,t,n,s,i){if(!We(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Vf(e);if(o===0)return e;const d=i.get(e);if(d)return d;const c=new Proxy(e,o===2?s:n);return i.set(e,c),c}function ar(e){return yn(e)?ar(e.__v_raw):!!(e&&e.__v_isReactive)}function yn(e){return!!(e&&e.__v_isReadonly)}function Gt(e){return!!(e&&e.__v_isShallow)}function na(e){return e?!!e.__v_raw:!1}function Ie(e){const t=e&&e.__v_raw;return t?Ie(t):e}function qf(e){return!Fe(e,"__v_skip")&&Object.isExtensible(e)&&Nl(e,"__v_skip",!0),e}const st=e=>We(e)?Rs(e):e,bs=e=>We(e)?sc(e):e;function ot(e){return e?e.__v_isRef===!0:!1}function $f(e){return ic(e,!1)}function Wf(e){return ic(e,!0)}function ic(e,t){return ot(e)?e:new zf(e,t)}class zf{constructor(t,n){this.dep=new Zi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ie(t),this._value=n?t:st(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Gt(t)||yn(t);t=s?t:Ie(t),_n(t,n)&&(this._rawValue=t,this._value=s?t:st(t),this.dep.trigger())}}function tt(e){return ot(e)?e.value:e}const Hf={get:(e,t,n)=>t==="__v_raw"?e:tt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ot(i)&&!ot(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ac(e){return ar(e)?e:new Proxy(e,Hf)}class Xf{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Wl(this,!0),!0}get value(){const t=this.dep.track();return Xl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Yf(e,t,n=!1){let s,i;return ge(e)?s=e:(s=e.get,i=e.set),new Xf(s,i,n)}const ds={},_s=new WeakMap;let Bn;function Kf(e,t=!1,n=Bn){if(n){let s=_s.get(n);s||_s.set(n,s=[]),s.push(e)}}function Qf(e,t,n=qe){const{immediate:s,deep:i,once:o,scheduler:d,augmentJob:c,call:h}=n,_=x=>i?x:Gt(x)||i===!1||i===0?bn(x,1):bn(x);let g,b,S,O,C=!1,w=!1;if(ot(e)?(b=()=>e.value,C=Gt(e)):ar(e)?(b=()=>_(e),C=!0):de(e)?(w=!0,C=e.some(x=>ar(x)||Gt(x)),b=()=>e.map(x=>{if(ot(x))return x.value;if(ar(x))return _(x);if(ge(x))return h?h(x,2):x()})):ge(e)?t?b=h?()=>h(e,2):e:b=()=>{if(S){on();try{S()}finally{ln()}}const x=Bn;Bn=g;try{return h?h(e,3,[O]):e(O)}finally{Bn=x}}:b=Kt,t&&i){const x=b,I=i===!0?1/0:i;b=()=>bn(x(),I)}const P=Ef(),L=()=>{g.stop(),P&&P.active&&Hi(P.effects,g)};if(o&&t){const x=t;t=(...I)=>{x(...I),L()}}let p=w?new Array(e.length).fill(ds):ds;const y=x=>{if(!(!(g.flags&1)||!g.dirty&&!x))if(t){const I=g.run();if(i||C||(w?I.some((B,M)=>_n(B,p[M])):_n(I,p))){S&&S();const B=Bn;Bn=g;try{const M=[I,p===ds?void 0:w&&p[0]===ds?[]:p,O];h?h(t,3,M):t(...M),p=I}finally{Bn=B}}}else g.run()};return c&&c(y),g=new ql(b),g.scheduler=d?()=>d(y,!1):y,O=x=>Kf(x,!1,g),S=g.onStop=()=>{const x=_s.get(g);if(x){if(h)h(x,4);else for(const I of x)I();_s.delete(g)}},t?s?y(!0):p=g.run():d?d(y.bind(null,!0),!0):g.run(),L.pause=g.pause.bind(g),L.resume=g.resume.bind(g),L.stop=L,L}function bn(e,t=1/0,n){if(t<=0||!We(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ot(e))bn(e.value,t,n);else if(de(e))for(let s=0;s<e.length;s++)bn(e[s],t,n);else if(Gl(e)||ir(e))e.forEach(s=>{bn(s,t,n)});else if(Ul(e)){for(const s in e)bn(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&bn(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(e,t,n,s){try{return s?e(...s):e()}catch(i){ks(i,t,n)}}function Qt(e,t,n,s){if(ge(e)){const i=Nr(e,t,n,s);return i&&Dl(i)&&i.catch(o=>{ks(o,t,n)}),i}if(de(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Qt(e[o],t,n,s));return i}}function ks(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:d}=t&&t.appContext.config||qe;if(t){let c=t.parent;const h=t.proxy,_=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g){for(let b=0;b<g.length;b++)if(g[b](e,h,_)===!1)return}c=c.parent}if(o){on(),Nr(o,null,10,[e,h,_]),ln();return}}Jf(e,n,i,s,d)}function Jf(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const vt=[];let Xt=-1;const or=[];let gn=null,nr=0;const oc=Promise.resolve();let ys=null;function lc(e){const t=ys||oc;return e?t.then(this?e.bind(this):e):t}function Zf(e){let t=Xt+1,n=vt.length;for(;t<n;){const s=t+n>>>1,i=vt[s],o=kr(i);o<e||o===e&&i.flags&2?t=s+1:n=s}return t}function ra(e){if(!(e.flags&1)){const t=kr(e),n=vt[vt.length-1];!n||!(e.flags&2)&&t>=kr(n)?vt.push(e):vt.splice(Zf(t),0,e),e.flags|=1,cc()}}function cc(){ys||(ys=oc.then(uc))}function eh(e){de(e)?or.push(...e):gn&&e.id===-1?gn.splice(nr+1,0,e):e.flags&1||(or.push(e),e.flags|=1),cc()}function $o(e,t,n=Xt+1){for(;n<vt.length;n++){const s=vt[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;vt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dc(e){if(or.length){const t=[...new Set(or)].sort((n,s)=>kr(n)-kr(s));if(or.length=0,gn){gn.push(...t);return}for(gn=t,nr=0;nr<gn.length;nr++){const n=gn[nr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gn=null,nr=0}}const kr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uc(e){try{for(Xt=0;Xt<vt.length;Xt++){const t=vt[Xt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xt<vt.length;Xt++){const t=vt[Xt];t&&(t.flags&=-2)}Xt=-1,vt.length=0,dc(),ys=null,(vt.length||or.length)&&uc()}}let jt=null,fc=null;function ws(e){const t=jt;return jt=e,fc=e&&e.type.__scopeId||null,t}function hc(e,t=jt,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&el(-1);const o=ws(t);let d;try{d=e(...i)}finally{ws(o),s._d&&el(1)}return d};return s._n=!0,s._c=!0,s._d=!0,s}function Gn(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let d=0;d<i.length;d++){const c=i[d];o&&(c.oldValue=o[d].value);let h=c.dir[s];h&&(on(),Qt(h,n,8,[e.el,c,e,t]),ln())}}const th=Symbol("_vte"),nh=e=>e.__isTeleport;function sa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function cn(e,t){return ge(e)?lt({name:e.name},t,{setup:e}):e}function pc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function xs(e,t,n,s,i=!1){if(de(e)){e.forEach((C,w)=>xs(C,t&&(de(t)?t[w]:t),n,s,i));return}if(Lr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&xs(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?la(s.component):s.el,d=i?null:o,{i:c,r:h}=e,_=t&&t.r,g=c.refs===qe?c.refs={}:c.refs,b=c.setupState,S=Ie(b),O=b===qe?()=>!1:C=>Fe(S,C);if(_!=null&&_!==h&&(Je(_)?(g[_]=null,O(_)&&(b[_]=null)):ot(_)&&(_.value=null)),ge(h))Nr(h,c,12,[d,g]);else{const C=Je(h),w=ot(h);if(C||w){const P=()=>{if(e.f){const L=C?O(h)?b[h]:g[h]:h.value;i?de(L)&&Hi(L,o):de(L)?L.includes(o)||L.push(o):C?(g[h]=[o],O(h)&&(b[h]=g[h])):(h.value=[o],e.k&&(g[e.k]=h.value))}else C?(g[h]=d,O(h)&&(b[h]=d)):w&&(h.value=d,e.k&&(g[e.k]=d))};d?(P.id=-1,Lt(P,n)):P()}}}Ps().requestIdleCallback;Ps().cancelIdleCallback;const Lr=e=>!!e.type.__asyncLoader,gc=e=>e.type.__isKeepAlive;function rh(e,t){mc(e,"a",t)}function sh(e,t){mc(e,"da",t)}function mc(e,t,n=at){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Gs(t,s,n),n){let i=n.parent;for(;i&&i.parent;)gc(i.parent.vnode)&&ih(s,t,n,i),i=i.parent}}function ih(e,t,n,s){const i=Gs(t,e,s,!0);vc(()=>{Hi(s[t],i)},n)}function Gs(e,t,n=at,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...d)=>{on();const c=Vr(n),h=Qt(t,n,e,d);return c(),ln(),h});return s?i.unshift(o):i.push(o),o}}const dn=e=>(t,n=at)=>{(!Dr||e==="sp")&&Gs(e,(...s)=>t(...s),n)},ah=dn("bm"),jr=dn("m"),oh=dn("bu"),lh=dn("u"),ch=dn("bum"),vc=dn("um"),dh=dn("sp"),Mr=dn("rtg"),uh=dn("rtc");function fh(e,t=at){Gs("ec",e,t)}const hh="components";function ph(e,t){return mh(hh,e,!0,t)||e}const gh=Symbol.for("v-ndc");function mh(e,t,n=!0,s=!1){const i=jt||at;if(i){const o=i.type;{const c=sp(o,!1);if(c&&(c===t||c===Dt(t)||c===Os(Dt(t))))return o}const d=Wo(i[e]||o[e],t)||Wo(i.appContext[e],t);return!d&&s?o:d}}function Wo(e,t){return e&&(e[t]||e[Dt(t)]||e[Os(Dt(t))])}function vh(e,t,n,s){let i;const o=n,d=de(e);if(d||Je(e)){const c=d&&ar(e);let h=!1,_=!1;c&&(h=!Gt(e),_=yn(e),e=Fs(e)),i=new Array(e.length);for(let g=0,b=e.length;g<b;g++)i[g]=t(h?_?bs(st(e[g])):st(e[g]):e[g],g,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let c=0;c<e;c++)i[c]=t(c+1,c,void 0,o)}else if(We(e))if(e[Symbol.iterator])i=Array.from(e,(c,h)=>t(c,h,void 0,o));else{const c=Object.keys(e);i=new Array(c.length);for(let h=0,_=c.length;h<_;h++){const g=c[h];i[h]=t(e[g],g,h,o)}}else i=[];return i}const Di=e=>e?Bc(e)?la(e):Di(e.parent):null,Cr=lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Di(e.parent),$root:e=>Di(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_c(e),$forceUpdate:e=>e.f||(e.f=()=>{ra(e.update)}),$nextTick:e=>e.n||(e.n=lc.bind(e.proxy)),$watch:e=>Uh.bind(e)}),Ei=(e,t)=>e!==qe&&!e.__isScriptSetup&&Fe(e,t),bh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:d,type:c,appContext:h}=e;let _;if(t[0]!=="$"){const O=d[t];if(O!==void 0)switch(O){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Ei(s,t))return d[t]=1,s[t];if(i!==qe&&Fe(i,t))return d[t]=2,i[t];if((_=e.propsOptions[0])&&Fe(_,t))return d[t]=3,o[t];if(n!==qe&&Fe(n,t))return d[t]=4,n[t];Bi&&(d[t]=0)}}const g=Cr[t];let b,S;if(g)return t==="$attrs"&&it(e.attrs,"get",""),g(e);if((b=c.__cssModules)&&(b=b[t]))return b;if(n!==qe&&Fe(n,t))return d[t]=4,n[t];if(S=h.config.globalProperties,Fe(S,t))return S[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return Ei(i,t)?(i[t]=n,!0):s!==qe&&Fe(s,t)?(s[t]=n,!0):Fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},d){let c;return!!n[d]||e!==qe&&Fe(e,d)||Ei(t,d)||(c=o[0])&&Fe(c,d)||Fe(s,d)||Fe(Cr,d)||Fe(i.config.globalProperties,d)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zo(e){return de(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bi=!0;function _h(e){const t=_c(e),n=e.proxy,s=e.ctx;Bi=!1,t.beforeCreate&&Ho(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:d,watch:c,provide:h,inject:_,created:g,beforeMount:b,mounted:S,beforeUpdate:O,updated:C,activated:w,deactivated:P,beforeDestroy:L,beforeUnmount:p,destroyed:y,unmounted:x,render:I,renderTracked:B,renderTriggered:M,errorCaptured:re,serverPrefetch:K,expose:pe,inheritAttrs:Te,components:$e,directives:ze,filters:Re}=t;if(_&&yh(_,s,null),d)for(const le in d){const ne=d[le];ge(ne)&&(s[le]=ne.bind(n))}if(i){const le=i.call(n,n);We(le)&&(e.data=Rs(le))}if(Bi=!0,o)for(const le in o){const ne=o[le],Se=ge(ne)?ne.bind(n,n):ge(ne.get)?ne.get.bind(n,n):Kt,G=!ge(ne)&&ge(ne.set)?ne.set.bind(n):Kt,ve=Nt({get:Se,set:G});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>ve.value,set:he=>ve.value=he})}if(c)for(const le in c)bc(c[le],s,n,le);if(h){const le=ge(h)?h.call(n):h;Reflect.ownKeys(le).forEach(ne=>{us(ne,le[ne])})}g&&Ho(g,e,"c");function Ae(le,ne){de(ne)?ne.forEach(Se=>le(Se.bind(n))):ne&&le(ne.bind(n))}if(Ae(ah,b),Ae(jr,S),Ae(oh,O),Ae(lh,C),Ae(rh,w),Ae(sh,P),Ae(fh,re),Ae(uh,B),Ae(Mr,M),Ae(ch,p),Ae(vc,x),Ae(dh,K),de(pe))if(pe.length){const le=e.exposed||(e.exposed={});pe.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:Se=>n[ne]=Se})})}else e.exposed||(e.exposed={});I&&e.render===Kt&&(e.render=I),Te!=null&&(e.inheritAttrs=Te),$e&&(e.components=$e),ze&&(e.directives=ze),K&&pc(e)}function yh(e,t,n=Kt){de(e)&&(e=Ui(e));for(const s in e){const i=e[s];let o;We(i)?"default"in i?o=an(i.from||s,i.default,!0):o=an(i.from||s):o=an(i),ot(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:d=>o.value=d}):t[s]=o}}function Ho(e,t,n){Qt(de(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function bc(e,t,n,s){let i=s.includes(".")?Fc(n,s):()=>n[s];if(Je(e)){const o=t[e];ge(o)&&fs(i,o)}else if(ge(e))fs(i,e.bind(n));else if(We(e))if(de(e))e.forEach(o=>bc(o,t,n,s));else{const o=ge(e.handler)?e.handler.bind(n):t[e.handler];ge(o)&&fs(i,o,e)}}function _c(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:d}}=e.appContext,c=o.get(t);let h;return c?h=c:!i.length&&!n&&!s?h=t:(h={},i.length&&i.forEach(_=>As(h,_,d,!0)),As(h,t,d)),We(t)&&o.set(t,h),h}function As(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&As(e,o,n,!0),i&&i.forEach(d=>As(e,d,n,!0));for(const d in t)if(!(s&&d==="expose")){const c=wh[d]||n&&n[d];e[d]=c?c(e[d],t[d]):t[d]}return e}const wh={data:Xo,props:Yo,emits:Yo,methods:Ar,computed:Ar,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ar,directives:Ar,watch:Ah,provide:Xo,inject:xh};function Xo(e,t){return t?e?function(){return lt(ge(e)?e.call(this,this):e,ge(t)?t.call(this,this):t)}:t:e}function xh(e,t){return Ar(Ui(e),Ui(t))}function Ui(e){if(de(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function gt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ar(e,t){return e?lt(Object.create(null),e,t):t}function Yo(e,t){return e?de(e)&&de(t)?[...new Set([...e,...t])]:lt(Object.create(null),zo(e),zo(t??{})):t}function Ah(e,t){if(!e)return t;if(!t)return e;const n=lt(Object.create(null),e);for(const s in t)n[s]=gt(e[s],t[s]);return n}function yc(){return{app:null,config:{isNativeTag:uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eh=0;function Th(e,t){return function(s,i=null){ge(s)||(s=lt({},s)),i!=null&&!We(i)&&(i=null);const o=yc(),d=new WeakSet,c=[];let h=!1;const _=o.app={_uid:Eh++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:ap,get config(){return o.config},set config(g){},use(g,...b){return d.has(g)||(g&&ge(g.install)?(d.add(g),g.install(_,...b)):ge(g)&&(d.add(g),g(_,...b))),_},mixin(g){return o.mixins.includes(g)||o.mixins.push(g),_},component(g,b){return b?(o.components[g]=b,_):o.components[g]},directive(g,b){return b?(o.directives[g]=b,_):o.directives[g]},mount(g,b,S){if(!h){const O=_._ceVNode||Qe(s,i);return O.appContext=o,S===!0?S="svg":S===!1&&(S=void 0),e(O,g,S),h=!0,_._container=g,g.__vue_app__=_,la(O.component)}},onUnmount(g){c.push(g)},unmount(){h&&(Qt(c,_._instance,16),e(null,_._container),delete _._container.__vue_app__)},provide(g,b){return o.provides[g]=b,_},runWithContext(g){const b=lr;lr=_;try{return g()}finally{lr=b}}};return _}}let lr=null;function us(e,t){if(at){let n=at.provides;const s=at.parent&&at.parent.provides;s===n&&(n=at.provides=Object.create(s)),n[e]=t}}function an(e,t,n=!1){const s=at||jt;if(s||lr){const i=lr?lr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ge(t)?t.call(s&&s.proxy):t}}const wc={},xc=()=>Object.create(wc),Ac=e=>Object.getPrototypeOf(e)===wc;function Sh(e,t,n,s=!1){const i={},o=xc();e.propsDefaults=Object.create(null),Ec(e,t,i,o);for(const d in e.propsOptions[0])d in i||(i[d]=void 0);n?e.props=s?i:rc(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Lh(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:d}}=e,c=Ie(i),[h]=e.propsOptions;let _=!1;if((s||d>0)&&!(d&16)){if(d&8){const g=e.vnode.dynamicProps;for(let b=0;b<g.length;b++){let S=g[b];if(Ds(e.emitsOptions,S))continue;const O=t[S];if(h)if(Fe(o,S))O!==o[S]&&(o[S]=O,_=!0);else{const C=Dt(S);i[C]=Ni(h,c,C,O,e,!1)}else O!==o[S]&&(o[S]=O,_=!0)}}}else{Ec(e,t,i,o)&&(_=!0);let g;for(const b in c)(!t||!Fe(t,b)&&((g=Nn(b))===b||!Fe(t,g)))&&(h?n&&(n[b]!==void 0||n[g]!==void 0)&&(i[b]=Ni(h,c,b,void 0,e,!0)):delete i[b]);if(o!==c)for(const b in o)(!t||!Fe(t,b))&&(delete o[b],_=!0)}_&&sn(e.attrs,"set","")}function Ec(e,t,n,s){const[i,o]=e.propsOptions;let d=!1,c;if(t)for(let h in t){if(Er(h))continue;const _=t[h];let g;i&&Fe(i,g=Dt(h))?!o||!o.includes(g)?n[g]=_:(c||(c={}))[g]=_:Ds(e.emitsOptions,h)||(!(h in s)||_!==s[h])&&(s[h]=_,d=!0)}if(o){const h=Ie(n),_=c||qe;for(let g=0;g<o.length;g++){const b=o[g];n[b]=Ni(i,h,b,_[b],e,!Fe(_,b))}}return d}function Ni(e,t,n,s,i,o){const d=e[n];if(d!=null){const c=Fe(d,"default");if(c&&s===void 0){const h=d.default;if(d.type!==Function&&!d.skipFactory&&ge(h)){const{propsDefaults:_}=i;if(n in _)s=_[n];else{const g=Vr(i);s=_[n]=h.call(null,t),g()}}else s=h;i.ce&&i.ce._setProp(n,s)}d[0]&&(o&&!c?s=!1:d[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}const Ch=new WeakMap;function Tc(e,t,n=!1){const s=n?Ch:t.propsCache,i=s.get(e);if(i)return i;const o=e.props,d={},c=[];let h=!1;if(!ge(e)){const g=b=>{h=!0;const[S,O]=Tc(b,t,!0);lt(d,S),O&&c.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!o&&!h)return We(e)&&s.set(e,sr),sr;if(de(o))for(let g=0;g<o.length;g++){const b=Dt(o[g]);Ko(b)&&(d[b]=qe)}else if(o)for(const g in o){const b=Dt(g);if(Ko(b)){const S=o[g],O=d[b]=de(S)||ge(S)?{type:S}:lt({},S),C=O.type;let w=!1,P=!0;if(de(C))for(let L=0;L<C.length;++L){const p=C[L],y=ge(p)&&p.name;if(y==="Boolean"){w=!0;break}else y==="String"&&(P=!1)}else w=ge(C)&&C.name==="Boolean";O[0]=w,O[1]=P,(w||Fe(O,"default"))&&c.push(b)}}const _=[d,c];return We(e)&&s.set(e,_),_}function Ko(e){return e[0]!=="$"&&!Er(e)}const ia=e=>e[0]==="_"||e==="$stable",aa=e=>de(e)?e.map(Yt):[Yt(e)],Oh=(e,t,n)=>{if(t._n)return t;const s=hc((...i)=>aa(t(...i)),n);return s._c=!1,s},Sc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(ia(i))continue;const o=e[i];if(ge(o))t[i]=Oh(i,o,s);else if(o!=null){const d=aa(o);t[i]=()=>d}}},Lc=(e,t)=>{const n=aa(t);e.slots.default=()=>n},Cc=(e,t,n)=>{for(const s in t)(n||!ia(s))&&(e[s]=t[s])},Ph=(e,t,n)=>{const s=e.slots=xc();if(e.vnode.shapeFlag&32){const i=t._;i?(Cc(s,t,n),n&&Nl(s,"_",i,!0)):Sc(t,s)}else t&&Lc(e,t)},Ih=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,d=qe;if(s.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:Cc(i,t,n):(o=!t.$stable,Sc(t,i)),d=t}else t&&(Lc(e,t),d={default:1});if(o)for(const c in i)!ia(c)&&d[c]==null&&delete i[c]},Lt=Wh;function Fh(e){return Rh(e)}function Rh(e,t){const n=Ps();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:d,createText:c,createComment:h,setText:_,setElementText:g,parentNode:b,nextSibling:S,setScopeId:O=Kt,insertStaticContent:C}=e,w=(m,v,T,D=null,U=null,N=null,H=void 0,z=null,q=!!v.dynamicChildren)=>{if(m===v)return;m&&!wr(m,v)&&(D=k(m),he(m,U,N,!0),m=null),v.patchFlag===-2&&(q=!1,v.dynamicChildren=null);const{type:V,ref:se,shapeFlag:X}=v;switch(V){case Bs:P(m,v,T,D);break;case cr:L(m,v,T,D);break;case hs:m==null&&p(v,T,D,H);break;case bt:$e(m,v,T,D,U,N,H,z,q);break;default:X&1?I(m,v,T,D,U,N,H,z,q):X&6?ze(m,v,T,D,U,N,H,z,q):(X&64||X&128)&&V.process(m,v,T,D,U,N,H,z,q,Z)}se!=null&&U&&xs(se,m&&m.ref,N,v||m,!v)},P=(m,v,T,D)=>{if(m==null)s(v.el=c(v.children),T,D);else{const U=v.el=m.el;v.children!==m.children&&_(U,v.children)}},L=(m,v,T,D)=>{m==null?s(v.el=h(v.children||""),T,D):v.el=m.el},p=(m,v,T,D)=>{[m.el,m.anchor]=C(m.children,v,T,D,m.el,m.anchor)},y=({el:m,anchor:v},T,D)=>{let U;for(;m&&m!==v;)U=S(m),s(m,T,D),m=U;s(v,T,D)},x=({el:m,anchor:v})=>{let T;for(;m&&m!==v;)T=S(m),i(m),m=T;i(v)},I=(m,v,T,D,U,N,H,z,q)=>{v.type==="svg"?H="svg":v.type==="math"&&(H="mathml"),m==null?B(v,T,D,U,N,H,z,q):K(m,v,U,N,H,z,q)},B=(m,v,T,D,U,N,H,z)=>{let q,V;const{props:se,shapeFlag:X,transition:te,dirs:ie}=m;if(q=m.el=d(m.type,N,se&&se.is,se),X&8?g(q,m.children):X&16&&re(m.children,q,null,D,U,Ti(m,N),H,z),ie&&Gn(m,null,D,"created"),M(q,m,m.scopeId,H,D),se){for(const De in se)De!=="value"&&!Er(De)&&o(q,De,null,se[De],N,D);"value"in se&&o(q,"value",null,se.value,N),(V=se.onVnodeBeforeMount)&&Ht(V,D,m)}ie&&Gn(m,null,D,"beforeMount");const ye=kh(U,te);ye&&te.beforeEnter(q),s(q,v,T),((V=se&&se.onVnodeMounted)||ye||ie)&&Lt(()=>{V&&Ht(V,D,m),ye&&te.enter(q),ie&&Gn(m,null,D,"mounted")},U)},M=(m,v,T,D,U)=>{if(T&&O(m,T),D)for(let N=0;N<D.length;N++)O(m,D[N]);if(U){let N=U.subTree;if(v===N||kc(N.type)&&(N.ssContent===v||N.ssFallback===v)){const H=U.vnode;M(m,H,H.scopeId,H.slotScopeIds,U.parent)}}},re=(m,v,T,D,U,N,H,z,q=0)=>{for(let V=q;V<m.length;V++){const se=m[V]=z?mn(m[V]):Yt(m[V]);w(null,se,v,T,D,U,N,H,z)}},K=(m,v,T,D,U,N,H)=>{const z=v.el=m.el;let{patchFlag:q,dynamicChildren:V,dirs:se}=v;q|=m.patchFlag&16;const X=m.props||qe,te=v.props||qe;let ie;if(T&&Dn(T,!1),(ie=te.onVnodeBeforeUpdate)&&Ht(ie,T,v,m),se&&Gn(v,m,T,"beforeUpdate"),T&&Dn(T,!0),(X.innerHTML&&te.innerHTML==null||X.textContent&&te.textContent==null)&&g(z,""),V?pe(m.dynamicChildren,V,z,T,D,Ti(v,U),N):H||ne(m,v,z,null,T,D,Ti(v,U),N,!1),q>0){if(q&16)Te(z,X,te,T,U);else if(q&2&&X.class!==te.class&&o(z,"class",null,te.class,U),q&4&&o(z,"style",X.style,te.style,U),q&8){const ye=v.dynamicProps;for(let De=0;De<ye.length;De++){const Ce=ye[De],et=X[Ce],Ye=te[Ce];(Ye!==et||Ce==="value")&&o(z,Ce,et,Ye,U,T)}}q&1&&m.children!==v.children&&g(z,v.children)}else!H&&V==null&&Te(z,X,te,T,U);((ie=te.onVnodeUpdated)||se)&&Lt(()=>{ie&&Ht(ie,T,v,m),se&&Gn(v,m,T,"updated")},D)},pe=(m,v,T,D,U,N,H)=>{for(let z=0;z<v.length;z++){const q=m[z],V=v[z],se=q.el&&(q.type===bt||!wr(q,V)||q.shapeFlag&70)?b(q.el):T;w(q,V,se,null,D,U,N,H,!0)}},Te=(m,v,T,D,U)=>{if(v!==T){if(v!==qe)for(const N in v)!Er(N)&&!(N in T)&&o(m,N,v[N],null,U,D);for(const N in T){if(Er(N))continue;const H=T[N],z=v[N];H!==z&&N!=="value"&&o(m,N,z,H,U,D)}"value"in T&&o(m,"value",v.value,T.value,U)}},$e=(m,v,T,D,U,N,H,z,q)=>{const V=v.el=m?m.el:c(""),se=v.anchor=m?m.anchor:c("");let{patchFlag:X,dynamicChildren:te,slotScopeIds:ie}=v;ie&&(z=z?z.concat(ie):ie),m==null?(s(V,T,D),s(se,T,D),re(v.children||[],T,se,U,N,H,z,q)):X>0&&X&64&&te&&m.dynamicChildren?(pe(m.dynamicChildren,te,T,U,N,H,z),(v.key!=null||U&&v===U.subTree)&&Oc(m,v,!0)):ne(m,v,T,se,U,N,H,z,q)},ze=(m,v,T,D,U,N,H,z,q)=>{v.slotScopeIds=z,m==null?v.shapeFlag&512?U.ctx.activate(v,T,D,H,q):Re(v,T,D,U,N,H,q):je(m,v,q)},Re=(m,v,T,D,U,N,H)=>{const z=m.component=Zh(m,D,U);if(gc(m)&&(z.ctx.renderer=Z),ep(z,!1,H),z.asyncDep){if(U&&U.registerDep(z,Ae,H),!m.el){const q=z.subTree=Qe(cr);L(null,q,v,T)}}else Ae(z,m,v,T,U,N,H)},je=(m,v,T)=>{const D=v.component=m.component;if(qh(m,v,T))if(D.asyncDep&&!D.asyncResolved){le(D,v,T);return}else D.next=v,D.update();else v.el=m.el,D.vnode=v},Ae=(m,v,T,D,U,N,H)=>{const z=()=>{if(m.isMounted){let{next:X,bu:te,u:ie,parent:ye,vnode:De}=m;{const ct=Pc(m);if(ct){X&&(X.el=De.el,le(m,X,H)),ct.asyncDep.then(()=>{m.isUnmounted||z()});return}}let Ce=X,et;Dn(m,!1),X?(X.el=De.el,le(m,X,H)):X=De,te&&_i(te),(et=X.props&&X.props.onVnodeBeforeUpdate)&&Ht(et,ye,X,De),Dn(m,!0);const Ye=Jo(m),rt=m.subTree;m.subTree=Ye,w(rt,Ye,b(rt.el),k(rt),m,U,N),X.el=Ye.el,Ce===null&&$h(m,Ye.el),ie&&Lt(ie,U),(et=X.props&&X.props.onVnodeUpdated)&&Lt(()=>Ht(et,ye,X,De),U)}else{let X;const{el:te,props:ie}=v,{bm:ye,m:De,parent:Ce,root:et,type:Ye}=m,rt=Lr(v);Dn(m,!1),ye&&_i(ye),!rt&&(X=ie&&ie.onVnodeBeforeMount)&&Ht(X,Ce,v),Dn(m,!0);{et.ce&&et.ce._injectChildStyle(Ye);const ct=m.subTree=Jo(m);w(null,ct,T,D,m,U,N),v.el=ct.el}if(De&&Lt(De,U),!rt&&(X=ie&&ie.onVnodeMounted)){const ct=v;Lt(()=>Ht(X,Ce,ct),U)}(v.shapeFlag&256||Ce&&Lr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&m.a&&Lt(m.a,U),m.isMounted=!0,v=T=D=null}};m.scope.on();const q=m.effect=new ql(z);m.scope.off();const V=m.update=q.run.bind(q),se=m.job=q.runIfDirty.bind(q);se.i=m,se.id=m.uid,q.scheduler=()=>ra(se),Dn(m,!0),V()},le=(m,v,T)=>{v.component=m;const D=m.vnode.props;m.vnode=v,m.next=null,Lh(m,v.props,D,T),Ih(m,v.children,T),on(),$o(m),ln()},ne=(m,v,T,D,U,N,H,z,q=!1)=>{const V=m&&m.children,se=m?m.shapeFlag:0,X=v.children,{patchFlag:te,shapeFlag:ie}=v;if(te>0){if(te&128){G(V,X,T,D,U,N,H,z,q);return}else if(te&256){Se(V,X,T,D,U,N,H,z,q);return}}ie&8?(se&16&&Ee(V,U,N),X!==V&&g(T,X)):se&16?ie&16?G(V,X,T,D,U,N,H,z,q):Ee(V,U,N,!0):(se&8&&g(T,""),ie&16&&re(X,T,D,U,N,H,z,q))},Se=(m,v,T,D,U,N,H,z,q)=>{m=m||sr,v=v||sr;const V=m.length,se=v.length,X=Math.min(V,se);let te;for(te=0;te<X;te++){const ie=v[te]=q?mn(v[te]):Yt(v[te]);w(m[te],ie,T,null,U,N,H,z,q)}V>se?Ee(m,U,N,!0,!1,X):re(v,T,D,U,N,H,z,q,X)},G=(m,v,T,D,U,N,H,z,q)=>{let V=0;const se=v.length;let X=m.length-1,te=se-1;for(;V<=X&&V<=te;){const ie=m[V],ye=v[V]=q?mn(v[V]):Yt(v[V]);if(wr(ie,ye))w(ie,ye,T,null,U,N,H,z,q);else break;V++}for(;V<=X&&V<=te;){const ie=m[X],ye=v[te]=q?mn(v[te]):Yt(v[te]);if(wr(ie,ye))w(ie,ye,T,null,U,N,H,z,q);else break;X--,te--}if(V>X){if(V<=te){const ie=te+1,ye=ie<se?v[ie].el:D;for(;V<=te;)w(null,v[V]=q?mn(v[V]):Yt(v[V]),T,ye,U,N,H,z,q),V++}}else if(V>te)for(;V<=X;)he(m[V],U,N,!0),V++;else{const ie=V,ye=V,De=new Map;for(V=ye;V<=te;V++){const dt=v[V]=q?mn(v[V]):Yt(v[V]);dt.key!=null&&De.set(dt.key,V)}let Ce,et=0;const Ye=te-ye+1;let rt=!1,ct=0;const An=new Array(Ye);for(V=0;V<Ye;V++)An[V]=0;for(V=ie;V<=X;V++){const dt=m[V];if(et>=Ye){he(dt,U,N,!0);continue}let Ot;if(dt.key!=null)Ot=De.get(dt.key);else for(Ce=ye;Ce<=te;Ce++)if(An[Ce-ye]===0&&wr(dt,v[Ce])){Ot=Ce;break}Ot===void 0?he(dt,U,N,!0):(An[Ot-ye]=V+1,Ot>=ct?ct=Ot:rt=!0,w(dt,v[Ot],T,null,U,N,H,z,q),et++)}const Mn=rt?Gh(An):sr;for(Ce=Mn.length-1,V=Ye-1;V>=0;V--){const dt=ye+V,Ot=v[dt],qr=dt+1<se?v[dt+1].el:D;An[V]===0?w(null,Ot,T,qr,U,N,H,z,q):rt&&(Ce<0||V!==Mn[Ce]?ve(Ot,T,qr,2):Ce--)}}},ve=(m,v,T,D,U=null)=>{const{el:N,type:H,transition:z,children:q,shapeFlag:V}=m;if(V&6){ve(m.component.subTree,v,T,D);return}if(V&128){m.suspense.move(v,T,D);return}if(V&64){H.move(m,v,T,Z);return}if(H===bt){s(N,v,T);for(let X=0;X<q.length;X++)ve(q[X],v,T,D);s(m.anchor,v,T);return}if(H===hs){y(m,v,T);return}if(D!==2&&V&1&&z)if(D===0)z.beforeEnter(N),s(N,v,T),Lt(()=>z.enter(N),U);else{const{leave:X,delayLeave:te,afterLeave:ie}=z,ye=()=>{m.ctx.isUnmounted?i(N):s(N,v,T)},De=()=>{X(N,()=>{ye(),ie&&ie()})};te?te(N,ye,De):De()}else s(N,v,T)},he=(m,v,T,D=!1,U=!1)=>{const{type:N,props:H,ref:z,children:q,dynamicChildren:V,shapeFlag:se,patchFlag:X,dirs:te,cacheIndex:ie}=m;if(X===-2&&(U=!1),z!=null&&(on(),xs(z,null,T,m,!0),ln()),ie!=null&&(v.renderCache[ie]=void 0),se&256){v.ctx.deactivate(m);return}const ye=se&1&&te,De=!Lr(m);let Ce;if(De&&(Ce=H&&H.onVnodeBeforeUnmount)&&Ht(Ce,v,m),se&6)Ze(m.component,T,D);else{if(se&128){m.suspense.unmount(T,D);return}ye&&Gn(m,null,v,"beforeUnmount"),se&64?m.type.remove(m,v,T,Z,D):V&&!V.hasOnce&&(N!==bt||X>0&&X&64)?Ee(V,v,T,!1,!0):(N===bt&&X&384||!U&&se&16)&&Ee(q,v,T),D&&He(m)}(De&&(Ce=H&&H.onVnodeUnmounted)||ye)&&Lt(()=>{Ce&&Ht(Ce,v,m),ye&&Gn(m,null,v,"unmounted")},T)},He=m=>{const{type:v,el:T,anchor:D,transition:U}=m;if(v===bt){Le(T,D);return}if(v===hs){x(m);return}const N=()=>{i(T),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(m.shapeFlag&1&&U&&!U.persisted){const{leave:H,delayLeave:z}=U,q=()=>H(T,N);z?z(m.el,N,q):q()}else N()},Le=(m,v)=>{let T;for(;m!==v;)T=S(m),i(m),m=T;i(v)},Ze=(m,v,T)=>{const{bum:D,scope:U,job:N,subTree:H,um:z,m:q,a:V,parent:se,slots:{__:X}}=m;Qo(q),Qo(V),D&&_i(D),se&&de(X)&&X.forEach(te=>{se.renderCache[te]=void 0}),U.stop(),N&&(N.flags|=8,he(H,m,v,T)),z&&Lt(z,v),Lt(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ee=(m,v,T,D=!1,U=!1,N=0)=>{for(let H=N;H<m.length;H++)he(m[H],v,T,D,U)},k=m=>{if(m.shapeFlag&6)return k(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=S(m.anchor||m.el),T=v&&v[th];return T?S(T):v};let R=!1;const W=(m,v,T)=>{m==null?v._vnode&&he(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,T),v._vnode=m,R||(R=!0,$o(),dc(),R=!1)},Z={p:w,um:he,m:ve,r:He,mt:Re,mc:re,pc:ne,pbc:pe,n:k,o:e};return{render:W,hydrate:void 0,createApp:Th(W)}}function Ti({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function kh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oc(e,t,n=!1){const s=e.children,i=t.children;if(de(s)&&de(i))for(let o=0;o<s.length;o++){const d=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=mn(i[o]),c.el=d.el),!n&&c.patchFlag!==-2&&Oc(d,c)),c.type===Bs&&(c.el=d.el),c.type===cr&&!c.el&&(c.el=d.el)}}function Gh(e){const t=e.slice(),n=[0];let s,i,o,d,c;const h=e.length;for(s=0;s<h;s++){const _=e[s];if(_!==0){if(i=n[n.length-1],e[i]<_){t[s]=i,n.push(s);continue}for(o=0,d=n.length-1;o<d;)c=o+d>>1,e[n[c]]<_?o=c+1:d=c;_<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,d=n[o-1];o-- >0;)n[o]=d,d=t[d];return n}function Pc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Pc(t)}function Qo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Dh=Symbol.for("v-scx"),Bh=()=>an(Dh);function fs(e,t,n){return Ic(e,t,n)}function Ic(e,t,n=qe){const{immediate:s,deep:i,flush:o,once:d}=n,c=lt({},n),h=t&&s||!t&&o!=="post";let _;if(Dr){if(o==="sync"){const O=Bh();_=O.__watcherHandles||(O.__watcherHandles=[])}else if(!h){const O=()=>{};return O.stop=Kt,O.resume=Kt,O.pause=Kt,O}}const g=at;c.call=(O,C,w)=>Qt(O,g,C,w);let b=!1;o==="post"?c.scheduler=O=>{Lt(O,g&&g.suspense)}:o!=="sync"&&(b=!0,c.scheduler=(O,C)=>{C?O():ra(O)}),c.augmentJob=O=>{t&&(O.flags|=4),b&&(O.flags|=2,g&&(O.id=g.uid,O.i=g))};const S=Qf(e,t,c);return Dr&&(_?_.push(S):h&&S()),S}function Uh(e,t,n){const s=this.proxy,i=Je(e)?e.includes(".")?Fc(s,e):()=>s[e]:e.bind(s,s);let o;ge(t)?o=t:(o=t.handler,n=t);const d=Vr(this),c=Ic(i,o.bind(s),n);return d(),c}function Fc(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Nh=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Dt(t)}Modifiers`]||e[`${Nn(t)}Modifiers`];function jh(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||qe;let i=n;const o=t.startsWith("update:"),d=o&&Nh(s,t.slice(7));d&&(d.trim&&(i=n.map(g=>Je(g)?g.trim():g)),d.number&&(i=n.map(mf)));let c,h=s[c=bi(t)]||s[c=bi(Dt(t))];!h&&o&&(h=s[c=bi(Nn(t))]),h&&Qt(h,e,6,i);const _=s[c+"Once"];if(_){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Qt(_,e,6,i)}}function Rc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let d={},c=!1;if(!ge(e)){const h=_=>{const g=Rc(_,t,!0);g&&(c=!0,lt(d,g))};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}return!o&&!c?(We(e)&&s.set(e,null),null):(de(o)?o.forEach(h=>d[h]=null):lt(d,o),We(e)&&s.set(e,d),d)}function Ds(e,t){return!e||!Ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),Fe(e,t[0].toLowerCase()+t.slice(1))||Fe(e,Nn(t))||Fe(e,t))}function Jo(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:d,attrs:c,emit:h,render:_,renderCache:g,props:b,data:S,setupState:O,ctx:C,inheritAttrs:w}=e,P=ws(e);let L,p;try{if(n.shapeFlag&4){const x=i||s,I=x;L=Yt(_.call(I,x,g,b,O,S,C)),p=c}else{const x=t;L=Yt(x.length>1?x(b,{attrs:c,slots:d,emit:h}):x(b,null)),p=t.props?c:Mh(c)}}catch(x){Or.length=0,ks(x,e,1),L=Qe(cr)}let y=L;if(p&&w!==!1){const x=Object.keys(p),{shapeFlag:I}=y;x.length&&I&7&&(o&&x.some(zi)&&(p=Vh(p,o)),y=dr(y,p,!1,!0))}return n.dirs&&(y=dr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&sa(y,n.transition),L=y,ws(P),L}const Mh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ss(n))&&((t||(t={}))[n]=e[n]);return t},Vh=(e,t)=>{const n={};for(const s in e)(!zi(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function qh(e,t,n){const{props:s,children:i,component:o}=e,{props:d,children:c,patchFlag:h}=t,_=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return s?Zo(s,d,_):!!d;if(h&8){const g=t.dynamicProps;for(let b=0;b<g.length;b++){const S=g[b];if(d[S]!==s[S]&&!Ds(_,S))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===d?!1:s?d?Zo(s,d,_):!0:!!d;return!1}function Zo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!Ds(n,o))return!0}return!1}function $h({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const kc=e=>e.__isSuspense;function Wh(e,t){t&&t.pendingBranch?de(e)?t.effects.push(...e):t.effects.push(e):eh(e)}const bt=Symbol.for("v-fgt"),Bs=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),hs=Symbol.for("v-stc"),Or=[];let Ct=null;function _t(e=!1){Or.push(Ct=e?null:[])}function zh(){Or.pop(),Ct=Or[Or.length-1]||null}let Gr=1;function el(e,t=!1){Gr+=e,e<0&&Ct&&t&&(Ct.hasOnce=!0)}function Gc(e){return e.dynamicChildren=Gr>0?Ct||sr:null,zh(),Gr>0&&Ct&&Ct.push(e),e}function xt(e,t,n,s,i,o){return Gc(u(e,t,n,s,i,o,!0))}function Hh(e,t,n,s,i){return Gc(Qe(e,t,n,s,i,!0))}function Es(e){return e?e.__v_isVNode===!0:!1}function wr(e,t){return e.type===t.type&&e.key===t.key}const Dc=({key:e})=>e??null,ps=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||ot(e)||ge(e)?{i:jt,r:e,k:t,f:!!n}:e:null);function u(e,t=null,n=null,s=0,i=null,o=e===bt?0:1,d=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dc(t),ref:t&&ps(t),scopeId:fc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jt};return c?(oa(h,n),o&128&&e.normalize(h)):n&&(h.shapeFlag|=Je(n)?8:16),Gr>0&&!d&&Ct&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&Ct.push(h),h}const Qe=Xh;function Xh(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===gh)&&(e=cr),Es(e)){const c=dr(e,t,!0);return n&&oa(c,n),Gr>0&&!o&&Ct&&(c.shapeFlag&6?Ct[Ct.indexOf(e)]=c:Ct.push(c)),c.patchFlag=-2,c}if(ip(e)&&(e=e.__vccOpts),t){t=Yh(t);let{class:c,style:h}=t;c&&!Je(c)&&(t.class=Is(c)),We(h)&&(na(h)&&!de(h)&&(h=lt({},h)),t.style=Yi(h))}const d=Je(e)?1:kc(e)?128:nh(e)?64:We(e)?4:ge(e)?2:0;return u(e,t,n,s,i,d,o,!0)}function Yh(e){return e?na(e)||Ac(e)?lt({},e):e:null}function dr(e,t,n=!1,s=!1){const{props:i,ref:o,patchFlag:d,children:c,transition:h}=e,_=t?Kh(i||{},t):i,g={__v_isVNode:!0,__v_skip:!0,type:e.type,props:_,key:_&&Dc(_),ref:t&&t.ref?n&&o?de(o)?o.concat(ps(t)):[o,ps(t)]:ps(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==bt?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:h,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dr(e.ssContent),ssFallback:e.ssFallback&&dr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return h&&s&&sa(g,h.clone(g)),g}function ae(e=" ",t=0){return Qe(Bs,null,e,t)}function mt(e,t){const n=Qe(hs,null,e);return n.staticCount=t,n}function Yt(e){return e==null||typeof e=="boolean"?Qe(cr):de(e)?Qe(bt,null,e.slice()):Es(e)?mn(e):Qe(Bs,null,String(e))}function mn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dr(e)}function oa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(de(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),oa(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ac(t)?t._ctx=jt:i===3&&jt&&(jt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ge(t)?(t={default:t,_ctx:jt},n=32):(t=String(t),s&64?(n=16,t=[ae(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kh(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Is([t.class,s.class]));else if(i==="style")t.style=Yi([t.style,s.style]);else if(Ss(i)){const o=t[i],d=s[i];d&&o!==d&&!(de(o)&&o.includes(d))&&(t[i]=o?[].concat(o,d):d)}else i!==""&&(t[i]=s[i])}return t}function Ht(e,t,n,s=null){Qt(e,t,7,[n,s])}const Qh=yc();let Jh=0;function Zh(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Qh,o={uid:Jh++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tc(s,i),emitsOptions:Rc(s,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:s.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=jh.bind(null,o),e.ce&&e.ce(o),o}let at=null,Ts,ji;{const e=Ps(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{i.length>1?i.forEach(d=>d(o)):i[0](o)}};Ts=t("__VUE_INSTANCE_SETTERS__",n=>at=n),ji=t("__VUE_SSR_SETTERS__",n=>Dr=n)}const Vr=e=>{const t=at;return Ts(e),e.scope.on(),()=>{e.scope.off(),Ts(t)}},tl=()=>{at&&at.scope.off(),Ts(null)};function Bc(e){return e.vnode.shapeFlag&4}let Dr=!1;function ep(e,t=!1,n=!1){t&&ji(t);const{props:s,children:i}=e.vnode,o=Bc(e);Sh(e,s,o,t),Ph(e,i,n||t);const d=o?tp(e,t):void 0;return t&&ji(!1),d}function tp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bh);const{setup:s}=n;if(s){on();const i=e.setupContext=s.length>1?rp(e):null,o=Vr(e),d=Nr(s,e,0,[e.props,i]),c=Dl(d);if(ln(),o(),(c||e.sp)&&!Lr(e)&&pc(e),c){if(d.then(tl,tl),t)return d.then(h=>{nl(e,h)}).catch(h=>{ks(h,e,0)});e.asyncDep=d}else nl(e,d)}else Uc(e)}function nl(e,t,n){ge(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:We(t)&&(e.setupState=ac(t)),Uc(e)}function Uc(e,t,n){const s=e.type;e.render||(e.render=s.render||Kt);{const i=Vr(e);on();try{_h(e)}finally{ln(),i()}}}const np={get(e,t){return it(e,"get",""),e[t]}};function rp(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,np),slots:e.slots,emit:e.emit,expose:t}}function la(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ac(qf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cr)return Cr[n](e)},has(t,n){return n in t||n in Cr}})):e.proxy}function sp(e,t=!0){return ge(e)?e.displayName||e.name:e.name||t&&e.__name}function ip(e){return ge(e)&&"__vccOpts"in e}const Nt=(e,t)=>Yf(e,t,Dr);function Nc(e,t,n){const s=arguments.length;return s===2?We(t)&&!de(t)?Es(t)?Qe(e,null,[t]):Qe(e,t):Qe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Es(n)&&(n=[n]),Qe(e,t,n))}const ap="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mi;const rl=typeof window<"u"&&window.trustedTypes;if(rl)try{Mi=rl.createPolicy("vue",{createHTML:e=>e})}catch{}const jc=Mi?e=>Mi.createHTML(e):e=>e,op="http://www.w3.org/2000/svg",lp="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,sl=rn&&rn.createElement("template"),cp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?rn.createElementNS(op,e):t==="mathml"?rn.createElementNS(lp,e):n?rn.createElement(e,{is:n}):rn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const d=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{sl.innerHTML=jc(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=sl.content;if(s==="svg"||s==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}t.insertBefore(c,n)}return[d?d.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},dp=Symbol("_vtc");function up(e,t,n){const s=e[dp];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const il=Symbol("_vod"),fp=Symbol("_vsh"),hp=Symbol(""),pp=/(^|;)\s*display\s*:/;function gp(e,t,n){const s=e.style,i=Je(n);let o=!1;if(n&&!i){if(t)if(Je(t))for(const d of t.split(";")){const c=d.slice(0,d.indexOf(":")).trim();n[c]==null&&gs(s,c,"")}else for(const d in t)n[d]==null&&gs(s,d,"");for(const d in n)d==="display"&&(o=!0),gs(s,d,n[d])}else if(i){if(t!==n){const d=s[hp];d&&(n+=";"+d),s.cssText=n,o=pp.test(n)}}else t&&e.removeAttribute("style");il in e&&(e[il]=o?s.display:"",e[fp]&&(s.display="none"))}const al=/\s*!important$/;function gs(e,t,n){if(de(n))n.forEach(s=>gs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=mp(e,t);al.test(n)?e.setProperty(Nn(s),n.replace(al,""),"important"):e[s]=n}}const ol=["Webkit","Moz","ms"],Si={};function mp(e,t){const n=Si[t];if(n)return n;let s=Dt(t);if(s!=="filter"&&s in e)return Si[t]=s;s=Os(s);for(let i=0;i<ol.length;i++){const o=ol[i]+s;if(o in e)return Si[t]=o}return t}const ll="http://www.w3.org/1999/xlink";function cl(e,t,n,s,i,o=xf(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ll,t.slice(6,t.length)):e.setAttributeNS(ll,t,n):n==null||o&&!jl(n)?e.removeAttribute(t):e.setAttribute(t,o?"":xn(n)?String(n):n)}function dl(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jc(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,h=n==null?e.type==="checkbox"?"on":"":String(n);(c!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let d=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=jl(n):n==null&&c==="string"?(n="",d=!0):c==="number"&&(n=0,d=!0)}try{e[t]=n}catch{}d&&e.removeAttribute(i||t)}function vp(e,t,n,s){e.addEventListener(t,n,s)}function bp(e,t,n,s){e.removeEventListener(t,n,s)}const ul=Symbol("_vei");function _p(e,t,n,s,i=null){const o=e[ul]||(e[ul]={}),d=o[t];if(s&&d)d.value=s;else{const[c,h]=yp(t);if(s){const _=o[t]=Ap(s,i);vp(e,c,_,h)}else d&&(bp(e,c,d,h),o[t]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function yp(e){let t;if(fl.test(e)){t={};let s;for(;s=e.match(fl);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nn(e.slice(2)),t]}let Li=0;const wp=Promise.resolve(),xp=()=>Li||(wp.then(()=>Li=0),Li=Date.now());function Ap(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qt(Ep(s,n.value),t,5,[s])};return n.value=e,n.attached=xp(),n}function Ep(e,t){if(de(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const hl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tp=(e,t,n,s,i,o)=>{const d=i==="svg";t==="class"?up(e,s,d):t==="style"?gp(e,n,s):Ss(t)?zi(t)||_p(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sp(e,t,s,d))?(dl(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&cl(e,t,s,d,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Je(s))?dl(e,Dt(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),cl(e,t,s,d))};function Sp(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&hl(t)&&ge(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return hl(t)&&Je(n)?!1:t in e}const Lp=lt({patchProp:Tp},cp);let pl;function Cp(){return pl||(pl=Fh(Lp))}const Op=(...e)=>{const t=Cp().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=Ip(s);if(!i)return;const o=t._component;!ge(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const d=n(i,!1,Pp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),d},t};function Pp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ip(e){return Je(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof document<"u";function Mc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Mc(e.default)}const Pe=Object.assign;function Ci(e,t){const n={};for(const s in t){const i=t[s];n[s]=Vt(i)?i.map(e):e(i)}return n}const Pr=()=>{},Vt=Array.isArray,Vc=/#/g,Rp=/&/g,kp=/\//g,Gp=/=/g,Dp=/\?/g,qc=/\+/g,Bp=/%5B/g,Up=/%5D/g,$c=/%5E/g,Np=/%60/g,Wc=/%7B/g,jp=/%7C/g,zc=/%7D/g,Mp=/%20/g;function ca(e){return encodeURI(""+e).replace(jp,"|").replace(Bp,"[").replace(Up,"]")}function Vp(e){return ca(e).replace(Wc,"{").replace(zc,"}").replace($c,"^")}function Vi(e){return ca(e).replace(qc,"%2B").replace(Mp,"+").replace(Vc,"%23").replace(Rp,"%26").replace(Np,"`").replace(Wc,"{").replace(zc,"}").replace($c,"^")}function qp(e){return Vi(e).replace(Gp,"%3D")}function $p(e){return ca(e).replace(Vc,"%23").replace(Dp,"%3F")}function Wp(e){return e==null?"":$p(e).replace(kp,"%2F")}function Br(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const zp=/\/$/,Hp=e=>e.replace(zp,"");function Oi(e,t,n="/"){let s,i={},o="",d="";const c=t.indexOf("#");let h=t.indexOf("?");return c<h&&c>=0&&(h=-1),h>-1&&(s=t.slice(0,h),o=t.slice(h+1,c>-1?c:t.length),i=e(o)),c>-1&&(s=s||t.slice(0,c),d=t.slice(c,t.length)),s=Qp(s??t,n),{fullPath:s+(o&&"?")+o+d,path:s,query:i,hash:Br(d)}}function Xp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yp(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ur(t.matched[s],n.matched[i])&&Hc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ur(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kp(e[n],t[n]))return!1;return!0}function Kp(e,t){return Vt(e)?ml(e,t):Vt(t)?ml(t,e):e===t}function ml(e,t){return Vt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Qp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,d,c;for(d=0;d<s.length;d++)if(c=s[d],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(d).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ur;(function(e){e.pop="pop",e.push="push"})(Ur||(Ur={}));var Ir;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ir||(Ir={}));function Jp(e){if(!e)if(rr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hp(e)}const Zp=/^[^#]+#/;function eg(e,t){return e.replace(Zp,"#")+t}function tg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Us=()=>({left:window.scrollX,top:window.scrollY});function ng(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=tg(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function vl(e,t){return(history.state?history.state.position-t:-1)+e}const qi=new Map;function rg(e,t){qi.set(e,t)}function sg(e){const t=qi.get(e);return qi.delete(e),t}let ig=()=>location.protocol+"//"+location.host;function Xc(e,t){const{pathname:n,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){let c=i.includes(e.slice(o))?e.slice(o).length:1,h=i.slice(c);return h[0]!=="/"&&(h="/"+h),gl(h,"")}return gl(n,e)+s+i}function ag(e,t,n,s){let i=[],o=[],d=null;const c=({state:S})=>{const O=Xc(e,location),C=n.value,w=t.value;let P=0;if(S){if(n.value=O,t.value=S,d&&d===C){d=null;return}P=w?S.position-w.position:0}else s(O);i.forEach(L=>{L(n.value,C,{delta:P,type:Ur.pop,direction:P?P>0?Ir.forward:Ir.back:Ir.unknown})})};function h(){d=n.value}function _(S){i.push(S);const O=()=>{const C=i.indexOf(S);C>-1&&i.splice(C,1)};return o.push(O),O}function g(){const{history:S}=window;S.state&&S.replaceState(Pe({},S.state,{scroll:Us()}),"")}function b(){for(const S of o)S();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",g,{passive:!0}),{pauseListeners:h,listen:_,destroy:b}}function bl(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Us():null}}function og(e){const{history:t,location:n}=window,s={value:Xc(e,n)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(h,_,g){const b=e.indexOf("#"),S=b>-1?(n.host&&document.querySelector("base")?e:e.slice(b))+h:ig()+e+h;try{t[g?"replaceState":"pushState"](_,"",S),i.value=_}catch(O){console.error(O),n[g?"replace":"assign"](S)}}function d(h,_){const g=Pe({},t.state,bl(i.value.back,h,i.value.forward,!0),_,{position:i.value.position});o(h,g,!0),s.value=h}function c(h,_){const g=Pe({},i.value,t.state,{forward:h,scroll:Us()});o(g.current,g,!0);const b=Pe({},bl(s.value,h,null),{position:g.position+1},_);o(h,b,!1),s.value=h}return{location:s,state:i,push:c,replace:d}}function lg(e){e=Jp(e);const t=og(e),n=ag(e,t.state,t.location,t.replace);function s(o,d=!0){d||n.pauseListeners(),history.go(o)}const i=Pe({location:"",base:e,go:s,createHref:eg.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function cg(e){return typeof e=="string"||e&&typeof e=="object"}function Yc(e){return typeof e=="string"||typeof e=="symbol"}const Kc=Symbol("");var _l;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_l||(_l={}));function fr(e,t){return Pe(new Error,{type:e,[Kc]:!0},t)}function nn(e,t){return e instanceof Error&&Kc in e&&(t==null||!!(e.type&t))}const yl="[^/]+?",dg={sensitive:!1,strict:!1,start:!0,end:!0},ug=/[.+*?^${}()[\]/\\]/g;function fg(e,t){const n=Pe({},dg,t),s=[];let i=n.start?"^":"";const o=[];for(const _ of e){const g=_.length?[]:[90];n.strict&&!_.length&&(i+="/");for(let b=0;b<_.length;b++){const S=_[b];let O=40+(n.sensitive?.25:0);if(S.type===0)b||(i+="/"),i+=S.value.replace(ug,"\\$&"),O+=40;else if(S.type===1){const{value:C,repeatable:w,optional:P,regexp:L}=S;o.push({name:C,repeatable:w,optional:P});const p=L||yl;if(p!==yl){O+=10;try{new RegExp(`(${p})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${C}" (${p}): `+x.message)}}let y=w?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;b||(y=P&&_.length<2?`(?:/${y})`:"/"+y),P&&(y+="?"),i+=y,O+=20,P&&(O+=-8),w&&(O+=-20),p===".*"&&(O+=-50)}g.push(O)}s.push(g)}if(n.strict&&n.end){const _=s.length-1;s[_][s[_].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const d=new RegExp(i,n.sensitive?"":"i");function c(_){const g=_.match(d),b={};if(!g)return null;for(let S=1;S<g.length;S++){const O=g[S]||"",C=o[S-1];b[C.name]=O&&C.repeatable?O.split("/"):O}return b}function h(_){let g="",b=!1;for(const S of e){(!b||!g.endsWith("/"))&&(g+="/"),b=!1;for(const O of S)if(O.type===0)g+=O.value;else if(O.type===1){const{value:C,repeatable:w,optional:P}=O,L=C in _?_[C]:"";if(Vt(L)&&!w)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const p=Vt(L)?L.join("/"):L;if(!p)if(P)S.length<2&&(g.endsWith("/")?g=g.slice(0,-1):b=!0);else throw new Error(`Missing required param "${C}"`);g+=p}}return g||"/"}return{re:d,score:s,keys:o,parse:c,stringify:h}}function hg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Qc(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const o=hg(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(wl(s))return 1;if(wl(i))return-1}return i.length-s.length}function wl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const pg={type:0,value:""},gg=/[a-zA-Z0-9_]/;function mg(e){if(!e)return[[]];if(e==="/")return[[pg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(O){throw new Error(`ERR (${n})/"${_}": ${O}`)}let n=0,s=n;const i=[];let o;function d(){o&&i.push(o),o=[]}let c=0,h,_="",g="";function b(){_&&(n===0?o.push({type:0,value:_}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&t(`A repeatable param (${_}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:_,regexp:g,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):t("Invalid state to consume buffer"),_="")}function S(){_+=h}for(;c<e.length;){if(h=e[c++],h==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:h==="/"?(_&&b(),d()):h===":"?(b(),n=1):S();break;case 4:S(),n=s;break;case 1:h==="("?n=2:gg.test(h)?S():(b(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case 2:h===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+h:n=3:g+=h;break;case 3:b(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--,g="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${_}"`),b(),d(),i}function vg(e,t,n){const s=fg(mg(e.path),n),i=Pe(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function bg(e,t){const n=[],s=new Map;t=Tl({strict:!1,end:!0,sensitive:!1},t);function i(b){return s.get(b)}function o(b,S,O){const C=!O,w=Al(b);w.aliasOf=O&&O.record;const P=Tl(t,b),L=[w];if("alias"in b){const x=typeof b.alias=="string"?[b.alias]:b.alias;for(const I of x)L.push(Al(Pe({},w,{components:O?O.record.components:w.components,path:I,aliasOf:O?O.record:w})))}let p,y;for(const x of L){const{path:I}=x;if(S&&I[0]!=="/"){const B=S.record.path,M=B[B.length-1]==="/"?"":"/";x.path=S.record.path+(I&&M+I)}if(p=vg(x,S,P),O?O.alias.push(p):(y=y||p,y!==p&&y.alias.push(p),C&&b.name&&!El(p)&&d(b.name)),Jc(p)&&h(p),w.children){const B=w.children;for(let M=0;M<B.length;M++)o(B[M],p,O&&O.children[M])}O=O||p}return y?()=>{d(y)}:Pr}function d(b){if(Yc(b)){const S=s.get(b);S&&(s.delete(b),n.splice(n.indexOf(S),1),S.children.forEach(d),S.alias.forEach(d))}else{const S=n.indexOf(b);S>-1&&(n.splice(S,1),b.record.name&&s.delete(b.record.name),b.children.forEach(d),b.alias.forEach(d))}}function c(){return n}function h(b){const S=wg(b,n);n.splice(S,0,b),b.record.name&&!El(b)&&s.set(b.record.name,b)}function _(b,S){let O,C={},w,P;if("name"in b&&b.name){if(O=s.get(b.name),!O)throw fr(1,{location:b});P=O.record.name,C=Pe(xl(S.params,O.keys.filter(y=>!y.optional).concat(O.parent?O.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),b.params&&xl(b.params,O.keys.map(y=>y.name))),w=O.stringify(C)}else if(b.path!=null)w=b.path,O=n.find(y=>y.re.test(w)),O&&(C=O.parse(w),P=O.record.name);else{if(O=S.name?s.get(S.name):n.find(y=>y.re.test(S.path)),!O)throw fr(1,{location:b,currentLocation:S});P=O.record.name,C=Pe({},S.params,b.params),w=O.stringify(C)}const L=[];let p=O;for(;p;)L.unshift(p.record),p=p.parent;return{name:P,path:w,params:C,matched:L,meta:yg(L)}}e.forEach(b=>o(b));function g(){n.length=0,s.clear()}return{addRoute:o,resolve:_,removeRoute:d,clearRoutes:g,getRoutes:c,getRecordMatcher:i}}function xl(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Al(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_g(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _g(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function El(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yg(e){return e.reduce((t,n)=>Pe(t,n.meta),{})}function Tl(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function wg(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;Qc(e,t[o])<0?s=o:n=o+1}const i=xg(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function xg(e){let t=e;for(;t=t.parent;)if(Jc(t)&&Qc(e,t)===0)return t}function Jc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ag(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(qc," "),d=o.indexOf("="),c=Br(d<0?o:o.slice(0,d)),h=d<0?null:Br(o.slice(d+1));if(c in t){let _=t[c];Vt(_)||(_=t[c]=[_]),_.push(h)}else t[c]=h}return t}function Sl(e){let t="";for(let n in e){const s=e[n];if(n=qp(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Vt(s)?s.map(o=>o&&Vi(o)):[s&&Vi(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Eg(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Tg=Symbol(""),Ll=Symbol(""),da=Symbol(""),Zc=Symbol(""),$i=Symbol("");function xr(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vn(e,t,n,s,i,o=d=>d()){const d=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((c,h)=>{const _=S=>{S===!1?h(fr(4,{from:n,to:t})):S instanceof Error?h(S):cg(S)?h(fr(2,{from:t,to:S})):(d&&s.enterCallbacks[i]===d&&typeof S=="function"&&d.push(S),c())},g=o(()=>e.call(s&&s.instances[i],t,n,_));let b=Promise.resolve(g);e.length<3&&(b=b.then(_)),b.catch(S=>h(S))})}function Pi(e,t,n,s,i=o=>o()){const o=[];for(const d of e)for(const c in d.components){let h=d.components[c];if(!(t!=="beforeRouteEnter"&&!d.instances[c]))if(Mc(h)){const g=(h.__vccOpts||h)[t];g&&o.push(vn(g,n,s,d,c,i))}else{let _=h();o.push(()=>_.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${c}" at "${d.path}"`);const b=Fp(g)?g.default:g;d.mods[c]=g,d.components[c]=b;const O=(b.__vccOpts||b)[t];return O&&vn(O,n,s,d,c,i)()}))}}return o}function Cl(e){const t=an(da),n=an(Zc),s=Nt(()=>{const h=tt(e.to);return t.resolve(h)}),i=Nt(()=>{const{matched:h}=s.value,{length:_}=h,g=h[_-1],b=n.matched;if(!g||!b.length)return-1;const S=b.findIndex(ur.bind(null,g));if(S>-1)return S;const O=Ol(h[_-2]);return _>1&&Ol(g)===O&&b[b.length-1].path!==O?b.findIndex(ur.bind(null,h[_-2])):S}),o=Nt(()=>i.value>-1&&Pg(n.params,s.value.params)),d=Nt(()=>i.value>-1&&i.value===n.matched.length-1&&Hc(n.params,s.value.params));function c(h={}){if(Og(h)){const _=t[tt(e.replace)?"replace":"push"](tt(e.to)).catch(Pr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>_),_}return Promise.resolve()}return{route:s,href:Nt(()=>s.value.href),isActive:o,isExactActive:d,navigate:c}}function Sg(e){return e.length===1?e[0]:e}const Lg=cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cl,setup(e,{slots:t}){const n=Rs(Cl(e)),{options:s}=an(da),i=Nt(()=>({[Pl(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pl(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Sg(t.default(n));return e.custom?o:Nc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Cg=Lg;function Og(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pg(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Vt(i)||i.length!==s.length||s.some((o,d)=>o!==i[d]))return!1}return!0}function Ol(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pl=(e,t,n)=>e??t??n,Ig=cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=an($i),i=Nt(()=>e.route||s.value),o=an(Ll,0),d=Nt(()=>{let _=tt(o);const{matched:g}=i.value;let b;for(;(b=g[_])&&!b.components;)_++;return _}),c=Nt(()=>i.value.matched[d.value]);us(Ll,Nt(()=>d.value+1)),us(Tg,c),us($i,i);const h=$f();return fs(()=>[h.value,c.value,e.name],([_,g,b],[S,O,C])=>{g&&(g.instances[b]=_,O&&O!==g&&_&&_===S&&(g.leaveGuards.size||(g.leaveGuards=O.leaveGuards),g.updateGuards.size||(g.updateGuards=O.updateGuards))),_&&g&&(!O||!ur(g,O)||!S)&&(g.enterCallbacks[b]||[]).forEach(w=>w(_))},{flush:"post"}),()=>{const _=i.value,g=e.name,b=c.value,S=b&&b.components[g];if(!S)return Il(n.default,{Component:S,route:_});const O=b.props[g],C=O?O===!0?_.params:typeof O=="function"?O(_):O:null,P=Nc(S,Pe({},C,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(b.instances[g]=null)},ref:h}));return Il(n.default,{Component:P,route:_})||P}}});function Il(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ed=Ig;function Fg(e){const t=bg(e.routes,e),n=e.parseQuery||Ag,s=e.stringifyQuery||Sl,i=e.history,o=xr(),d=xr(),c=xr(),h=Wf(pn);let _=pn;rr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Ci.bind(null,k=>""+k),b=Ci.bind(null,Wp),S=Ci.bind(null,Br);function O(k,R){let W,Z;return Yc(k)?(W=t.getRecordMatcher(k),Z=R):Z=k,t.addRoute(Z,W)}function C(k){const R=t.getRecordMatcher(k);R&&t.removeRoute(R)}function w(){return t.getRoutes().map(k=>k.record)}function P(k){return!!t.getRecordMatcher(k)}function L(k,R){if(R=Pe({},R||h.value),typeof k=="string"){const T=Oi(n,k,R.path),D=t.resolve({path:T.path},R),U=i.createHref(T.fullPath);return Pe(T,D,{params:S(D.params),hash:Br(T.hash),redirectedFrom:void 0,href:U})}let W;if(k.path!=null)W=Pe({},k,{path:Oi(n,k.path,R.path).path});else{const T=Pe({},k.params);for(const D in T)T[D]==null&&delete T[D];W=Pe({},k,{params:b(T)}),R.params=b(R.params)}const Z=t.resolve(W,R),xe=k.hash||"";Z.params=g(S(Z.params));const m=Xp(s,Pe({},k,{hash:Vp(xe),path:Z.path})),v=i.createHref(m);return Pe({fullPath:m,hash:xe,query:s===Sl?Eg(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:v})}function p(k){return typeof k=="string"?Oi(n,k,h.value.path):Pe({},k)}function y(k,R){if(_!==k)return fr(8,{from:R,to:k})}function x(k){return M(k)}function I(k){return x(Pe(p(k),{replace:!0}))}function B(k){const R=k.matched[k.matched.length-1];if(R&&R.redirect){const{redirect:W}=R;let Z=typeof W=="function"?W(k):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=p(Z):{path:Z},Z.params={}),Pe({query:k.query,hash:k.hash,params:Z.path!=null?{}:k.params},Z)}}function M(k,R){const W=_=L(k),Z=h.value,xe=k.state,m=k.force,v=k.replace===!0,T=B(W);if(T)return M(Pe(p(T),{state:typeof T=="object"?Pe({},xe,T.state):xe,force:m,replace:v}),R||W);const D=W;D.redirectedFrom=R;let U;return!m&&Yp(s,Z,W)&&(U=fr(16,{to:D,from:Z}),ve(Z,Z,!0,!1)),(U?Promise.resolve(U):pe(D,Z)).catch(N=>nn(N)?nn(N,2)?N:G(N):ne(N,D,Z)).then(N=>{if(N){if(nn(N,2))return M(Pe({replace:v},p(N.to),{state:typeof N.to=="object"?Pe({},xe,N.to.state):xe,force:m}),R||D)}else N=$e(D,Z,!0,v,xe);return Te(D,Z,N),N})}function re(k,R){const W=y(k,R);return W?Promise.reject(W):Promise.resolve()}function K(k){const R=Le.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(k):k()}function pe(k,R){let W;const[Z,xe,m]=Rg(k,R);W=Pi(Z.reverse(),"beforeRouteLeave",k,R);for(const T of Z)T.leaveGuards.forEach(D=>{W.push(vn(D,k,R))});const v=re.bind(null,k,R);return W.push(v),Ee(W).then(()=>{W=[];for(const T of o.list())W.push(vn(T,k,R));return W.push(v),Ee(W)}).then(()=>{W=Pi(xe,"beforeRouteUpdate",k,R);for(const T of xe)T.updateGuards.forEach(D=>{W.push(vn(D,k,R))});return W.push(v),Ee(W)}).then(()=>{W=[];for(const T of m)if(T.beforeEnter)if(Vt(T.beforeEnter))for(const D of T.beforeEnter)W.push(vn(D,k,R));else W.push(vn(T.beforeEnter,k,R));return W.push(v),Ee(W)}).then(()=>(k.matched.forEach(T=>T.enterCallbacks={}),W=Pi(m,"beforeRouteEnter",k,R,K),W.push(v),Ee(W))).then(()=>{W=[];for(const T of d.list())W.push(vn(T,k,R));return W.push(v),Ee(W)}).catch(T=>nn(T,8)?T:Promise.reject(T))}function Te(k,R,W){c.list().forEach(Z=>K(()=>Z(k,R,W)))}function $e(k,R,W,Z,xe){const m=y(k,R);if(m)return m;const v=R===pn,T=rr?history.state:{};W&&(Z||v?i.replace(k.fullPath,Pe({scroll:v&&T&&T.scroll},xe)):i.push(k.fullPath,xe)),h.value=k,ve(k,R,W,v),G()}let ze;function Re(){ze||(ze=i.listen((k,R,W)=>{if(!Ze.listening)return;const Z=L(k),xe=B(Z);if(xe){M(Pe(xe,{replace:!0,force:!0}),Z).catch(Pr);return}_=Z;const m=h.value;rr&&rg(vl(m.fullPath,W.delta),Us()),pe(Z,m).catch(v=>nn(v,12)?v:nn(v,2)?(M(Pe(p(v.to),{force:!0}),Z).then(T=>{nn(T,20)&&!W.delta&&W.type===Ur.pop&&i.go(-1,!1)}).catch(Pr),Promise.reject()):(W.delta&&i.go(-W.delta,!1),ne(v,Z,m))).then(v=>{v=v||$e(Z,m,!1),v&&(W.delta&&!nn(v,8)?i.go(-W.delta,!1):W.type===Ur.pop&&nn(v,20)&&i.go(-1,!1)),Te(Z,m,v)}).catch(Pr)}))}let je=xr(),Ae=xr(),le;function ne(k,R,W){G(k);const Z=Ae.list();return Z.length?Z.forEach(xe=>xe(k,R,W)):console.error(k),Promise.reject(k)}function Se(){return le&&h.value!==pn?Promise.resolve():new Promise((k,R)=>{je.add([k,R])})}function G(k){return le||(le=!k,Re(),je.list().forEach(([R,W])=>k?W(k):R()),je.reset()),k}function ve(k,R,W,Z){const{scrollBehavior:xe}=e;if(!rr||!xe)return Promise.resolve();const m=!W&&sg(vl(k.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return lc().then(()=>xe(k,R,m)).then(v=>v&&ng(v)).catch(v=>ne(v,k,R))}const he=k=>i.go(k);let He;const Le=new Set,Ze={currentRoute:h,listening:!0,addRoute:O,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:w,resolve:L,options:e,push:x,replace:I,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:o.add,beforeResolve:d.add,afterEach:c.add,onError:Ae.add,isReady:Se,install(k){const R=this;k.component("RouterLink",Cg),k.component("RouterView",ed),k.config.globalProperties.$router=R,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(h)}),rr&&!He&&h.value===pn&&(He=!0,x(i.location).catch(xe=>{}));const W={};for(const xe in pn)Object.defineProperty(W,xe,{get:()=>h.value[xe],enumerable:!0});k.provide(da,R),k.provide(Zc,rc(W)),k.provide($i,h);const Z=k.unmount;Le.add(k),k.unmount=function(){Le.delete(k),Le.size<1&&(_=pn,ze&&ze(),ze=null,h.value=pn,He=!1,le=!1),Z()}}};function Ee(k){return k.reduce((R,W)=>R.then(()=>K(W)),Promise.resolve())}return Ze}function Rg(e,t){const n=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let d=0;d<o;d++){const c=t.matched[d];c&&(e.matched.find(_=>ur(_,c))?s.push(c):n.push(c));const h=e.matched[d];h&&(t.matched.find(_=>ur(_,h))||i.push(h))}return[n,s,i]}const jn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},kg={},Gg={class:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",style:{"z-index":"1060"}};function Dg(e,t){return _t(),xt("nav",Gg,t[0]||(t[0]=[mt('<div class="container" data-v-94370daf><a href="/" class="navbar-brand fw-bold" data-v-94370daf>Portfolio</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" data-v-94370daf><span class="navbar-toggler-icon" data-v-94370daf></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-94370daf><ul class="navbar-nav ms-auto" data-v-94370daf><li class="nav-item" data-v-94370daf><a class="nav-link px-3 py-2 rounded transition" href="/#about" data-v-94370daf>About</a></li><li class="nav-item" data-v-94370daf><a class="nav-link px-3 py-2 rounded transition" href="/#personal-projects" data-v-94370daf>Personal Projects</a></li></ul></div></div>',1)]))}const Bg=jn(kg,[["render",Dg],["__scopeId","data-v-94370daf"]]),Ug={class:"d-flex flex-column min-vh-100"},Ng={class:"flex-grow-1",style:{"margin-top":"58px"}},jg=cn({__name:"App",setup(e){return(t,n)=>(_t(),xt("div",Ug,[Qe(Bg),u("main",Ng,[Qe(tt(ed))]),n[0]||(n[0]=u("footer",{class:"text-center py-3 mt-auto"},[u("div",{class:"container"},[u("p",{class:"mb-0"},"© 2025 Jay Russell. All rights reserved.")])],-1))]))}}),Mg={class:"col-md-4 mb-4"},Vg=["src","alt"],qg={class:"card-body d-flex flex-column flex-grow-1"},$g={class:"card-title"},Wg={class:"card-text"},zg=cn({__name:"ProjectCardComponent",props:{title:{type:String,required:!0},text:{type:String,required:!0},route:{type:String,required:!0},image:{type:String,required:!0},disabled:{type:Boolean}},setup(e){return(t,n)=>{const s=ph("router-link");return _t(),xt("div",Mg,[Qe(s,{to:e.route,class:Is(["card h-100 btn w-100 d-flex flex-column",e.disabled?"btn-outline-danger bg disabled":"btn-primary"])},{default:hc(()=>[u("img",{src:e.image,alt:e.title,class:"card-img-top"},null,8,Vg),u("div",qg,[u("h5",$g,yt(e.title),1),u("p",Wg,yt(e.text),1)])]),_:1},8,["to","class"])])}}}),Hg=jn(zg,[["__scopeId","data-v-7d86b9c8"]]),Xg=[{title:"Portfolio Site",text:"This portfolio built with Vue and Bootstrap aimed at improving UI/UX skills and deepening understanding of frontend development.",image:"/portfolio_card_preview.png",route:"/portfolio",disabled:!1},{title:"Graphics Engine",text:"Basic C++ graphics engine using OpenGL, GLFW, and GLAD to improve my understanding of GPU rendering for game development.",image:"/graphics_engine/graphics_engine_preview.png",route:"graphics_engine",disabled:!1},{title:"Sharp Event Bus",text:"A project focused on creating an easy to use in-memory event bus framework, utilizing a consumer-subscriber model.",image:"sharp_event_bus/sharp_event_bus_preview.png",route:"sharp_event_bus"},{title:"Understanding ASP.NET API",text:"A hands-on project focused on learning the fundamentals of building RESTful APIs with ASP.NET Core. Covering a wide variety of core features for the framework.",image:"understanding_asp/understanding_asp_preview.png",route:"understanding_asp"},{title:"More Projects to Come",text:"There will be more projects to come",image:"https://picsum.photos/350/200?random=3",route:"",disabled:!0}],Yg={id:"personal-projects",class:"py-3"},Kg={class:"container"},Qg={class:"row"},Jg=cn({__name:"HomeView",setup(e){const t=Xg;return(n,s)=>(_t(),xt(bt,null,[s[2]||(s[2]=mt('<section class="pt-5" id="about"><div class="container"><div class="row align-items-start"><div class="col-md-6 mb-4 mb-md-0"><h1 class="display-4 fw-bold mb-3">Hello, I&#39;m Jay</h1><p class="text-muted mb-1">Aspiring Full-Stack Developer</p><p class="mb-2"> With a strong foundation from college and hands-on self-driven learning, I thrive on continuous growth and exploring new technologies.<br> I enjoy crafting projects that emphasize software architecture, performance, and maintainability. Recently, I&#39;ve been sharpening my UI/UX design skills and expanding my expertise in modern web frameworks. </p></div><div class="col-md-6 d-flex flex-column align-items-md-end align-items-start"><p class="mb-2 fs-5"><a href="mailto:rusjaellgo@gmail.com" class="text-decoration-none">rusjaellgo@gmail.com</a><span class="user-select-none ms-2">📧</span></p><p class="mb-2 fs-5"><a href="https://www.linkedin.com/in/rusjaellgo/" target="_blank" rel="noopener noreferrer" class="text-decoration-none">LinkedIn</a><span class="user-select-none ms-2">🌐</span></p><p class="mb-0 fs-5"><span class="text-decoration-none user-select-none">UK</span><span class="user-select-none ms-2">🌍</span></p></div></div></div></section><section class="pt-3"><div class="container"><div class="row justify-content-center g-4"><div class="col-md-6 col-lg-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title"><span class="user-select-none">🧠</span> Strengths</h5><div class="card-text text-start"><ul class="text-start mb-0 flex-grow-1"><li>Writing high-performance, maintainable code</li><li>Proficient with async/await and multithreading paradigms</li><li>Technology agnostic, focusing on best tools for the job</li><li>Strong debugging and problem-solving skills</li><li>Quick to adapt and eager to embrace new challenges</li></ul></div></div></div></div><div class="col-md-6 col-lg-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title"><span class="user-select-none">🛠</span> Skills</h5><div class="card-text text-start"><ul class="text-start mb-0 flex-grow-1"><li>Fluent in C# &amp; .NET Core</li><li>Docker containerization</li><li>RabbitMQ message broker</li><li>SQL &amp; NoSQL databases</li><li>Modern web frameworks &amp; DevOps practices</li><li>Fast Learner</li></ul></div></div></div></div><div class="col-md-6 col-lg-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title"><span class="user-select-none">💼</span> Experience</h5><div class="card-text text-start"><ul class="text-start mb-0 flex-grow-1"><li>IT Support &amp; Infrastructure (Active Directory, Servers, Automation)</li><li>Leading backend development for an multiplayer game</li><li>Over 15 years of self-driven development</li><li>Continuously learning and building full-stack systems</li></ul></div></div></div></div><div class="col-md-6 col-lg-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title"><span class="user-select-none">🔍</span> Approach</h5><div class="card-text text-start"><ul class="text-start mb-0 flex-grow-1"><li>Detail-driven and systems-oriented mindset</li><li>Enjoys building tools that improve workflows and efficiency</li><li>Proactive problem solver focused on delivering results</li><li>Balances technical excellence with pragmatic decisions</li></ul></div></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title mb-3">Languages</h5><ul class="list-unstyled tech-list"><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-csharp-plain colored me-2 dev-icon"></i> C# </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-cplusplus-plain colored me-2 dev-icon"></i> C++ </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-html5-plain colored me-2 dev-icon"></i> HTML </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-css3-plain colored me-2 dev-icon"></i> CSS </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-typescript-plain colored me-2 dev-icon"></i> TypeScript </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-javascript-plain colored me-2 dev-icon"></i> JavaScript </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-mysql-plain colored me-2 dev-icon"></i> SQL </li></ul></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title mb-3">Developer Tools</h5><ul class="list-unstyled tech-list"><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-visualstudio-plain colored me-2 dev-icon"></i> Visual Studio </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-github-original colored me-2 dev-icon"></i> GitHub </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-git-plain colored me-2 dev-icon"></i> Git </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-docker-plain colored me-2 dev-icon"></i> Docker </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-linux-plain colored me-2 dev-icon"></i> WSL </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-dotnetcore-plain colored me-2 dev-icon"></i> XUnit </li></ul></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title mb-3">Frameworks &amp; Software</h5><ul class="list-unstyled tech-list"><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-dotnetcore-plain colored me-2 dev-icon"></i> .NET Core </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-dotnetcore-plain colored me-2 dev-icon"></i> ASP.NET API/Minimal </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-dotnetcore-plain colored me-2 dev-icon"></i> .NET Blazor </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-dotnetcore-plain colored me-2 dev-icon"></i> Entity Framework </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-rabbitmq-plain colored me-2 dev-icon"></i> RabbitMQ </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-vuejs-plain colored me-2 dev-icon"></i> Vue </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-angularjs-plain colored me-2 dev-icon"></i> Angular </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-bootstrap-plain colored me-2 dev-icon"></i> Bootstrap </li></ul></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="card h-100 shadow-sm text-center"><div class="card-body"><h5 class="card-title mb-3">Databases</h5><ul class="list-unstyled tech-list"><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-postgresql-plain colored me-2 dev-icon"></i> PostgreSQL </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-mysql-plain colored me-2 dev-icon"></i> MySQL </li><li class="d-flex align-items-center justify-content-center mb-2"><i class="devicon-redis-plain colored me-2 dev-icon"></i> Redis </li></ul></div></div></div></div></div></section><hr>',3)),u("section",Yg,[u("div",Kg,[s[0]||(s[0]=u("h2",{class:"mb-2"},"Personal Projects",-1)),s[1]||(s[1]=u("p",{class:"mb-3"}," These personal projects sometimes contain detailed technical self-reviews, showcasing documented explorations and implementations that reflect my growth and understanding across various areas, which I update whenever I get round to it. ",-1)),u("div",Qg,[(_t(!0),xt(bt,null,vh(tt(t),(i,o)=>(_t(),Hh(Hg,{key:o,title:i.title,text:i.text,image:i.image,route:i.route,disabled:i.disabled},null,8,["title","text","image","route","disabled"]))),128))])])])],64))}}),td="/graphics_engine/lighting_demo.mp4",Zg={},em={class:"py-5 pb-3",id:"about"};function tm(e,t){return _t(),xt("section",em,t[0]||(t[0]=[u("div",{class:"container"},[u("div",{class:"mb-3"},[u("h1",{class:"display-4"},"Graphics Engine"),u("p",{class:"lead"},"A project for learning about the inner workings of graphics engines.")]),u("div",{class:"alert alert-info mt-3 text-center",role:"alert"},[ae(" If you're interested in the technical specifics of the project, "),u("a",{href:"graphics_engine_deep_dive",class:"alert-link"},"click here"),ae(". ")]),u("div",{class:"row"},[u("div",{class:"col-lg-6"},[u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Project Purpose"),u("ul",{class:"list-unstyled"},[u("li",null,"Gain a deeper understanding of OpenGL Theory"),u("li",null,"Explore the stages of the graphics rendering pipeline"),u("li",null,"Develop and implement a functional graphics rendering pipeline using OpenGL"),u("li",null,"Strengthen expertise in C++")])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Languages Used"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-cplusplus-plain colored me-2 dev-icon"}),ae(" C++ ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-opengl-plain colored me-2 dev-icon"}),ae(" GLSL ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Frameworks & Software"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-opengl-plain colored me-2 dev-icon"}),ae(" OpenGL ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-visualstudio-plain colored me-2 dev-icon"}),ae(" Visual Studio ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-github-original colored me-2 dev-icon"}),ae(" GitHub ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-git-plain colored me-2 dev-icon"}),ae(" Git ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"me-2 dev-icon"}),ae(" GLFW ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"me-2 dev-icon"}),ae(" GLAD ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"me-2 dev-icon"}),ae(" GLM ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Source Code"),u("p",null,"Explore the full source code on GitHub."),u("a",{href:"https://github.com/rusjaell/basics-asp",target:"_blank",class:"btn btn-primary mt-auto"},"View Source on GitHub")])])]),u("div",{class:"col-lg-6"},[u("section",{id:"demo"},[u("div",{class:"card shadow-sm h-100"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Demo"),u("p",{class:"text-center"},"Here is an short video showcasing the end result."),u("div",{class:"ratio ratio-16x9"},[u("video",{controls:"",autoplay:"",loop:"",muted:"",style:{"border-radius":"8px"}},[u("source",{src:td,type:"video/mp4"}),ae(" Your browser does not support the video tag. ")])])])])])])])],-1)]))}const nm=jn(Zg,[["render",tm]]),rm="/graphics_engine/black_triangle.png",sm="/graphics_engine/color_triangle.png",im="/graphics_engine/camera_demo.mp4",am="/graphics_engine/texture_demo.mp4",om=`int main(int argc, char* argv[])\r
{\r
    if (glfwInit() != GLFW_TRUE) \r
    {\r
        std::cout << "Failed to Initialize GLFW" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\r
\r
    GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
    if (window == nullptr)\r
    {\r
        std::cout << "Failed to Create Window" << std::endl;\r
        glfwTerminate();\r
        return -1;\r
    }\r
\r
    glfwMakeContextCurrent(window);\r
    return 0;\r
}`,lm=`if (glfwInit() != GLFW_TRUE) \r
{\r
    std::cout << "Failed to Initialize GLFW" << std::endl;\r
    return -1;\r
}`,cm=`glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);`,dm=`GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
if (window == nullptr)\r
{\r
    std::cout << "Failed to Create Window" << std::endl;\r
    return -1;\r
}`,um=`while (!glfwWindowShouldClose(window)) \r
{\r
    glfwSwapBuffers(window);\r
    glfwPollEvents();\r
}`,fm=`glfwMakeContextCurrent(window);\r
          \r
if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) \r
{\r
    std::cout << "Failed to initialize GLAD" << std::endl;\r
    glfwTerminate();\r
    return -1;\r
}\r
\r
while (!glfwWindowShouldClose(window))`,hm=`glfwMakeContextCurrent(window);\r
          \r
if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) \r
{\r
    std::cout << "Failed to initialize GLAD" << std::endl;\r
    glfwTerminate();\r
    return -1;\r
}\r
\r
while (!glfwWindowShouldClose(window))\r
{\r
    glClearColor(0.2f, 0.3f, 0.3f, 1.0f);\r
    glClear(GL_COLOR_BUFFER_BIT);\r
\r
    glfwSwapBuffers(window);\r
    glfwPollEvents();\r
}`,pm=`#include <glad/glad.h>\r
#include <GLFW/glfw3.h>\r
\r
#include <iostream>\r
\r
int main(int argc, char* argv[])\r
{\r
    if (glfwInit() != GLFW_TRUE) \r
    {\r
        std::cout << "Failed to Initialize GLFW" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\r
\r
    GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
\r
    if (window == nullptr)\r
    {\r
        std::cout << "Failed to Create Window" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwMakeContextCurrent(window);\r
\r
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))\r
    {\r
        std::cout << "Failed to initialize GLAD" << std::endl;\r
        glfwTerminate();\r
        return -1;\r
    }\r
\r
    // CCW\r
\r
    float vertices[] = {\r
        // Positions       // Colors\r
        -0.5f, -0.5f, 0.0f,  1.0f, 0.0f, 0.0f,  // bottom left, red\r
         0.5f, -0.5f, 0.0f,  0.0f, 1.0f, 0.0f,  // bottom right, green\r
         0.0f,  0.5f, 0.0f,  0.0f, 0.0f, 1.0f   // top, blue\r
    };\r
\r
    unsigned int indices[] = {\r
        0, // left\r
        1, // right\r
        2  // top\r
    };\r
\r
    unsigned int VAO;\r
    glGenVertexArrays(1, &VAO);\r
    glBindVertexArray(VAO);\r
\r
    unsigned int VBO;\r
    glGenBuffers(1, &VBO);\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);\r
\r
    unsigned int EBO;\r
    glGenBuffers(1, &EBO);\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    const char* vertexShaderSource = R"glsl(\r
#version 460 core\r
\r
layout (location = 0) in vec3 aPos;\r
layout (location = 1) in vec3 aColor;\r
\r
out vec3 vertexColor;\r
\r
void main()\r
{\r
    gl_Position = vec4(aPos, 1.0);\r
    vertexColor = aColor;\r
}\r
)glsl";\r
\r
    const char* fragmentShaderSource = R"glsl(\r
#version 460 core\r
\r
in vec3 vertexColor;\r
out vec4 FragColor;\r
\r
void main()\r
{\r
    FragColor = vec4(vertexColor, 1.0);\r
}\r
)glsl";\r
\r
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\r
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);\r
    glCompileShader(vertexShader);\r
\r
    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\r
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);\r
    glCompileShader(fragmentShader);\r
\r
    GLuint shaderProgram = glCreateProgram();\r
    glAttachShader(shaderProgram, vertexShader);\r
    glAttachShader(shaderProgram, fragmentShader);\r
    glLinkProgram(shaderProgram);\r
\r
    glDeleteShader(vertexShader);\r
    glDeleteShader(fragmentShader);\r
\r
    while (!glfwWindowShouldClose(window))\r
    {\r
        glClear(GL_COLOR_BUFFER_BIT);\r
        glClearColor(1.0f, 0.5f, 0.5f, 1.0f);\r
\r
        glUseProgram(shaderProgram); // Bind the Shader Program to use\r
\r
        glBindVertexArray(VAO); // Bind the VAO we want to draw from\r
        glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_INT, 0); // Issue the draw call\r
\r
        glfwSwapBuffers(window);\r
        glfwPollEvents();\r
    }\r
\r
    return 0;\r
}`,gm=`#include <glad/glad.h>\r
#include <GLFW/glfw3.h>\r
#include <glm/glm.hpp>\r
#include <glm/gtc/matrix_transform.hpp>\r
#include <glm/gtc/type_ptr.hpp>\r
\r
#include <iostream>\r
\r
int main(int argc, char* argv[])\r
{\r
    if (glfwInit() != GLFW_TRUE) \r
    {\r
        std::cout << "Failed to Initialize GLFW" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\r
\r
    GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
\r
    if (window == nullptr)\r
    {\r
        std::cout << "Failed to Create Window" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwMakeContextCurrent(window);\r
\r
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))\r
    {\r
        std::cout << "Failed to initialize GLAD" << std::endl;\r
        glfwTerminate();\r
        return -1;\r
    }\r
\r
    // CCW\r
    float cubeVertices[] = {\r
        // Positions           // Colors\r
\r
        // Back face (red)\r
        -0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 0.0f,\r
         0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 0.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 0.0f, 0.0f,\r
        -0.5f,  0.5f, -0.5f,   1.0f, 0.0f, 0.0f,\r
\r
        // Front face (green)\r
        -0.5f, -0.5f,  0.5f,   0.0f, 1.0f, 0.0f,\r
         0.5f, -0.5f,  0.5f,   0.0f, 1.0f, 0.0f,\r
         0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 0.0f,\r
        -0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 0.0f,\r
\r
        // Left face (blue)\r
        -0.5f, -0.5f, -0.5f,   0.0f, 0.0f, 1.0f,\r
        -0.5f,  0.5f, -0.5f,   0.0f, 0.0f, 1.0f,\r
        -0.5f,  0.5f,  0.5f,   0.0f, 0.0f, 1.0f,\r
        -0.5f, -0.5f,  0.5f,   0.0f, 0.0f, 1.0f,\r
\r
        // Right face (yellow)\r
         0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 0.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 0.0f,\r
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 0.0f,\r
         0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 0.0f,\r
\r
         // Bottom face (magenta)\r
         -0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 1.0f,\r
          0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 1.0f,\r
          0.5f, -0.5f,  0.5f,   1.0f, 0.0f, 1.0f,\r
         -0.5f, -0.5f,  0.5f,   1.0f, 0.0f, 1.0f,\r
\r
         // Top face (cyan)\r
         -0.5f,  0.5f, -0.5f,   0.0f, 1.0f, 1.0f,\r
          0.5f,  0.5f, -0.5f,   0.0f, 1.0f, 1.0f,\r
          0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 1.0f,\r
         -0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 1.0f\r
    };\r
\r
    unsigned int cubeIndices[] = {\r
        0,  1,  2,  2,  3,  0,       // Back face\r
        4,  5,  6,  6,  7,  4,       // Front face\r
        8,  9,  10, 10, 11, 8,       // Left face\r
        12, 13, 14, 14, 15, 12,      // Right face\r
        16, 17, 18, 18, 19, 16,      // Bottom face\r
        20, 21, 22, 22, 23, 20       // Top face\r
    };\r
\r
    unsigned int VAO;\r
    glGenVertexArrays(1, &VAO);\r
    glBindVertexArray(VAO);\r
\r
    unsigned int VBO;\r
    glGenBuffers(1, &VBO);\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(cubeVertices), cubeVertices, GL_STATIC_DRAW);\r
\r
    unsigned int EBO;\r
    glGenBuffers(1, &EBO);\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(cubeIndices), cubeIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    // Floor vertices: positions (x, y, z) and colors (r, g, b)\r
    float floorVertices[] = {\r
        // Positions          // Colors (gray)\r
        -0.5f, 0.0f, -0.5f,   0.5f, 0.5f, 0.5f,\r
         0.5f, 0.0f, -0.5f,   0.5f, 0.5f, 0.5f,\r
         0.5f, 0.0f,  0.5f,   0.5f, 0.5f, 0.5f,\r
        -0.5f, 0.0f,  0.5f,   0.5f, 0.5f, 0.5f,\r
    };\r
\r
    unsigned int floorIndices[] = {\r
        0, 1, 2,\r
        2, 3, 0\r
    };\r
\r
    unsigned int VAO2, VBO2, EBO2;\r
    glGenVertexArrays(1, &VAO2);\r
    glGenBuffers(1, &VBO2);\r
    glGenBuffers(1, &EBO2);\r
\r
    glBindVertexArray(VAO2);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO2);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(floorVertices), floorVertices, GL_STATIC_DRAW);\r
\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO2);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(floorIndices), floorIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    const char* vertexShaderSource = R"glsl(\r
#version 460 core\r
layout (location = 0) in vec3 aPos;\r
layout (location = 1) in vec3 aColor;\r
\r
out vec3 vertexColor;\r
\r
uniform mat4 model;\r
uniform mat4 view;\r
uniform mat4 projection;\r
\r
void main() \r
{\r
    gl_Position = projection * view * model * vec4(aPos, 1.0);\r
    vertexColor = aColor;\r
}\r
)glsl";\r
\r
    const char* fragmentShaderSource = R"glsl(\r
#version 460 core\r
\r
in vec3 vertexColor;\r
out vec4 FragColor;\r
\r
void main()\r
{\r
    FragColor = vec4(vertexColor, 1.0);\r
}\r
)glsl";\r
\r
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\r
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);\r
    glCompileShader(vertexShader);\r
\r
    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\r
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);\r
    glCompileShader(fragmentShader);\r
\r
    GLuint shaderProgram = glCreateProgram();\r
    glAttachShader(shaderProgram, vertexShader);\r
    glAttachShader(shaderProgram, fragmentShader);\r
    glLinkProgram(shaderProgram);\r
\r
    glDeleteShader(vertexShader);\r
    glDeleteShader(fragmentShader);\r
\r
    glEnable(GL_DEPTH_TEST);\r
    glDepthFunc(GL_LESS);\r
\r
    float rotation = 0.0f;\r
    float lastFrameTime = glfwGetTime();\r
\r
    while (!glfwWindowShouldClose(window))\r
    {\r
        float currentFrameTime = glfwGetTime();\r
        float dt = currentFrameTime - lastFrameTime;\r
        lastFrameTime = currentFrameTime;\r
\r
        rotation += dt;\r
\r
        glClearColor(1.0f, 0.5f, 0.5f, 1.0f);\r
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\r
\r
        glUseProgram(shaderProgram);\r
\r
        glm::vec3 cameraPos = glm::vec3(0.0f, 10.0f, 15.0f);\r
        glm::vec3 cameraTarget = glm::vec3(0.0f, 0, 0.0f);\r
        glm::vec3 cameraUp = glm::vec3(0.0f, 1.0f, 0.0f);\r
\r
        glm::mat4 view = glm::lookAt(cameraPos, cameraTarget, cameraUp);\r
        view *= glm::rotate(glm::mat4(1.0f), rotation, glm::vec3(0.0f, 1.0f, 0.0f));\r
\r
        constexpr float fov = glm::radians(45.0f);\r
        float aspectRatio = 1280.0f / 720.0f;\r
        float nearPlane = 0.1f;\r
        float farPlane = 100.0f;\r
\r
        glm::mat4 projection = glm::perspective(fov, aspectRatio, nearPlane, farPlane);\r
\r
        GLuint viewLocation = glGetUniformLocation(shaderProgram, "view");\r
        GLuint projLocation = glGetUniformLocation(shaderProgram, "projection");\r
        GLuint modelLocation = glGetUniformLocation(shaderProgram, "model");\r
\r
        glUniformMatrix4fv(viewLocation, 1, GL_FALSE, glm::value_ptr(view));\r
        glUniformMatrix4fv(projLocation, 1, GL_FALSE, glm::value_ptr(projection));\r
\r
        // Floor\r
        {\r
            glBindVertexArray(VAO2);\r
            {\r
                glm::mat4 model = glm::scale(glm::mat4(1.0f), glm::vec3(10.0f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        // Cubes\r
        {\r
            glBindVertexArray(VAO);\r
\r
            // Cube 1\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(-1.5f, 0.5f, -1.5f));\r
                model *= glm::scale(glm::mat4(1.0f), glm::vec3(2.0f));\r
\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
\r
            // Cube 2\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(0.5f, 0.5f, 0.5f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        glfwSwapBuffers(window);\r
        glfwPollEvents();\r
    }\r
\r
    return 0;\r
}`,mm=`#include <glad/glad.h>\r
#include <GLFW/glfw3.h>\r
#include <glm/glm.hpp>\r
#include <glm/gtc/matrix_transform.hpp>\r
#include <glm/gtc/type_ptr.hpp>\r
\r
#define STB_IMAGE_IMPLEMENTATION\r
#include <stb/stb_image.h>\r
\r
#include <iostream>\r
\r
int main(int argc, char* argv[])\r
{\r
    if (glfwInit() != GLFW_TRUE)\r
    {\r
        std::cout << "Failed to Initialize GLFW" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\r
\r
    GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
\r
    if (window == nullptr)\r
    {\r
        std::cout << "Failed to Create Window" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwMakeContextCurrent(window);\r
\r
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))\r
    {\r
        std::cout << "Failed to initialize GLAD" << std::endl;\r
        glfwTerminate();\r
        return -1;\r
    }\r
\r
    // CCW\r
\r
    float cubeVertices[] = {\r
        // Positions          // Colors           // UVs (V flipped)\r
        // Back face (red)\r
        -0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 0.0f,   0.0f, 1.0f,\r
         0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 0.0f,   1.0f, 1.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 0.0f, 0.0f,   1.0f, 0.0f,\r
        -0.5f,  0.5f, -0.5f,   1.0f, 0.0f, 0.0f,   0.0f, 0.0f,\r
\r
        // Front face (green)\r
        -0.5f, -0.5f,  0.5f,   0.0f, 1.0f, 0.0f,   0.0f, 1.0f,\r
         0.5f, -0.5f,  0.5f,   0.0f, 1.0f, 0.0f,   1.0f, 1.0f,\r
         0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 0.0f,   1.0f, 0.0f,\r
        -0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 0.0f,   0.0f, 0.0f,\r
\r
        // Left face (blue)\r
        -0.5f, -0.5f, -0.5f,   0.0f, 0.0f, 1.0f,   0.0f, 1.0f,\r
        -0.5f,  0.5f, -0.5f,   0.0f, 0.0f, 1.0f,   1.0f, 1.0f,\r
        -0.5f,  0.5f,  0.5f,   0.0f, 0.0f, 1.0f,   1.0f, 0.0f,\r
        -0.5f, -0.5f,  0.5f,   0.0f, 0.0f, 1.0f,   0.0f, 0.0f,\r
\r
        // Right face (yellow)\r
         0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 0.0f,   0.0f, 1.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 0.0f,   1.0f, 1.0f,\r
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 0.0f,   1.0f, 0.0f,\r
         0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 0.0f,   0.0f, 0.0f,\r
\r
         // Bottom face (magenta)\r
         -0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 1.0f,   0.0f, 1.0f,\r
          0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 1.0f,   1.0f, 1.0f,\r
          0.5f, -0.5f,  0.5f,   1.0f, 0.0f, 1.0f,   1.0f, 0.0f,\r
         -0.5f, -0.5f,  0.5f,   1.0f, 0.0f, 1.0f,   0.0f, 0.0f,\r
\r
         // Top face (cyan)\r
         -0.5f,  0.5f, -0.5f,   0.0f, 1.0f, 1.0f,   0.0f, 1.0f,\r
          0.5f,  0.5f, -0.5f,   0.0f, 1.0f, 1.0f,   1.0f, 1.0f,\r
          0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 1.0f,   1.0f, 0.0f,\r
         -0.5f,  0.5f,  0.5f,   0.0f, 1.0f, 1.0f,   0.0f, 0.0f\r
    };\r
\r
\r
    unsigned int cubeIndices[] = {\r
        0,  1,  2,  2,  3,  0,       // Back face\r
        4,  5,  6,  6,  7,  4,       // Front face\r
        8,  9,  10, 10, 11, 8,       // Left face\r
        12, 13, 14, 14, 15, 12,      // Right face\r
        16, 17, 18, 18, 19, 16,      // Bottom face\r
        20, 21, 22, 22, 23, 20       // Top face\r
    };\r
\r
    unsigned int VAO;\r
    glGenVertexArrays(1, &VAO);\r
    glBindVertexArray(VAO);\r
\r
    unsigned int VBO;\r
    glGenBuffers(1, &VBO);\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(cubeVertices), cubeVertices, GL_STATIC_DRAW);\r
\r
    unsigned int EBO;\r
    glGenBuffers(1, &EBO);\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(cubeIndices), cubeIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    // Color attribute (location = 2)\r
    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(6 * sizeof(float)));\r
    glEnableVertexAttribArray(2);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    // Floor vertices: positions (x, y, z), colors (r, g, b), and UV coordinates (u, v)\r
    float floorVertices[] = {\r
        // Positions        // Colors (gray)   // UVs\r
        -0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 0.0f,  // bottom-left\r
         0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 0.0f,  // bottom-right\r
         0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 1.0f,  // top-right\r
        -0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 1.0f   // top-left\r
    };\r
\r
    unsigned int floorIndices[] = {\r
        0, 1, 2,\r
        2, 3, 0\r
    };\r
\r
    unsigned int VAO2, VBO2, EBO2;\r
    glGenVertexArrays(1, &VAO2);\r
    glGenBuffers(1, &VBO2);\r
    glGenBuffers(1, &EBO2);\r
\r
    glBindVertexArray(VAO2);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO2);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(floorVertices), floorVertices, GL_STATIC_DRAW);\r
\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO2);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(floorIndices), floorIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    // Color attribute (location = 2)\r
    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(6 * sizeof(float)));\r
    glEnableVertexAttribArray(2);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    // Load image with stb_image\r
    int width, height, channels;\r
    unsigned char* data = stbi_load("assets/texture.png", &width, &height, &channels, 0);\r
\r
    // Generate texture object\r
    GLuint texture;\r
    glGenTextures(1, &texture);\r
    glBindTexture(GL_TEXTURE_2D, texture);\r
\r
    // Set wrapping and filtering parameters\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\r
\r
    // Upload texture data\r
    if (data != nullptr) {\r
        GLenum format = (channels == 4) ? GL_RGBA : GL_RGB;\r
        glTexImage2D(GL_TEXTURE_2D, 0, format, width, height, 0, format, GL_UNSIGNED_BYTE, data);\r
        stbi_image_free(data);\r
    }\r
\r
    glBindTexture(GL_TEXTURE_2D, 0);\r
\r
    const char* vertexShaderSource = R"glsl(\r
#version 460 core\r
layout (location = 0) in vec3 aPos;\r
layout (location = 1) in vec3 aColor;\r
layout (location = 2) in vec2 aUV;\r
\r
out vec3 vertexColor;\r
out vec2 uv;\r
\r
uniform mat4 model;\r
uniform mat4 view;\r
uniform mat4 projection;\r
\r
void main() \r
{\r
    gl_Position = projection * view * model * vec4(aPos, 1.0);\r
    vertexColor = aColor;\r
    uv = aUV;\r
}\r
)glsl";\r
\r
    const char* fragmentShaderSource = R"glsl(\r
#version 460 core\r
\r
in vec3 vertexColor;\r
in vec2 uv;\r
\r
uniform sampler2D textureSampler;\r
\r
out vec4 FragColor;\r
\r
void main()\r
{\r
    vec3 color = texture(textureSampler, uv).rgb;\r
\r
    FragColor = vec4(color, 1.0);\r
}\r
)glsl";\r
\r
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\r
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);\r
    glCompileShader(vertexShader);\r
\r
    int success;\r
    char infoLog[512];\r
    glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);\r
    if (!success) {\r
        glGetShaderInfoLog(vertexShader, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::VERTEX::COMPILATION_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\r
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);\r
    glCompileShader(fragmentShader);\r
\r
    glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);\r
    if (!success) {\r
        glGetShaderInfoLog(fragmentShader, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::FRAGMENT::COMPILATION_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    GLuint shaderProgram = glCreateProgram();\r
    glAttachShader(shaderProgram, vertexShader);\r
    glAttachShader(shaderProgram, fragmentShader);\r
    glLinkProgram(shaderProgram);\r
\r
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);\r
    if (!success) {\r
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::PROGRAM::LINKING_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    glDeleteShader(vertexShader);\r
    glDeleteShader(fragmentShader);\r
\r
    glEnable(GL_DEPTH_TEST);\r
    glDepthFunc(GL_LESS);\r
\r
    float rotation = 0.0f;\r
    float lastFrameTime = glfwGetTime();\r
\r
    while (!glfwWindowShouldClose(window))\r
    {\r
        float currentFrameTime = glfwGetTime();\r
        float dt = currentFrameTime - lastFrameTime;\r
        lastFrameTime = currentFrameTime;\r
\r
        rotation += dt;\r
\r
        glClearColor(1.0f, 0.5f, 0.5f, 1.0f);\r
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\r
\r
        glUseProgram(shaderProgram);\r
\r
        glActiveTexture(GL_TEXTURE0);\r
        glBindTexture(GL_TEXTURE_2D, texture);\r
\r
        GLuint textureLocation = glGetUniformLocation(shaderProgram, "textureSampler");\r
        glUniform1i(textureLocation, 0);\r
\r
        glm::vec3 cameraPos = glm::vec3(0.0f, 10.0f, 15.0f);\r
        glm::vec3 cameraTarget = glm::vec3(0.0f, 0, 0.0f);\r
        glm::vec3 cameraUp = glm::vec3(0.0f, 1.0f, 0.0f);\r
\r
        glm::mat4 view = glm::lookAt(cameraPos, cameraTarget, cameraUp);\r
        view *= glm::rotate(glm::mat4(1.0f), rotation, glm::vec3(0.0f, 1.0f, 0.0f));\r
\r
        constexpr float fov = glm::radians(45.0f);\r
        float aspectRatio = 1280.0f / 720.0f;\r
        float nearPlane = 0.1f;\r
        float farPlane = 100.0f;\r
\r
        glm::mat4 projection = glm::perspective(fov, aspectRatio, nearPlane, farPlane);\r
\r
        GLuint viewLocation = glGetUniformLocation(shaderProgram, "view");\r
        GLuint projLocation = glGetUniformLocation(shaderProgram, "projection");\r
        GLuint modelLocation = glGetUniformLocation(shaderProgram, "model");\r
\r
        glUniformMatrix4fv(viewLocation, 1, GL_FALSE, glm::value_ptr(view));\r
        glUniformMatrix4fv(projLocation, 1, GL_FALSE, glm::value_ptr(projection));\r
\r
        // Floor\r
        {\r
            glBindVertexArray(VAO2);\r
            {\r
                glm::mat4 model = glm::scale(glm::mat4(1.0f), glm::vec3(10.0f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        // Cubes\r
        {\r
            glBindVertexArray(VAO);\r
\r
            // Cube 1\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(-1.5f, 0.5f, -1.5f));\r
                model *= glm::scale(glm::mat4(1.0f), glm::vec3(2.0f));\r
\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
\r
            // Cube 2\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(0.5f, 0.5f, 0.5f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        glfwSwapBuffers(window);\r
        glfwPollEvents();\r
    }\r
\r
    return 0;\r
}`,vm=`#include <glad/glad.h>\r
#include <GLFW/glfw3.h>\r
#include <glm/glm.hpp>\r
#include <glm/gtc/matrix_transform.hpp>\r
#include <glm/gtc/type_ptr.hpp>\r
\r
#define STB_IMAGE_IMPLEMENTATION\r
#include <stb/stb_image.h>\r
\r
#include <iostream>\r
\r
int main(int argc, char* argv[])\r
{\r
    if (glfwInit() != GLFW_TRUE)\r
    {\r
        std::cout << "Failed to Initialize GLFW" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);\r
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);\r
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\r
\r
    GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);\r
\r
    if (window == nullptr)\r
    {\r
        std::cout << "Failed to Create Window" << std::endl;\r
        return -1;\r
    }\r
\r
    glfwMakeContextCurrent(window);\r
\r
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))\r
    {\r
        std::cout << "Failed to initialize GLAD" << std::endl;\r
        glfwTerminate();\r
        return -1;\r
    }\r
\r
    float cubeVertices[] = {\r
        // Positions           // Colors           // UVs       // Normals\r
        -0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f,  0.0f, 0.0f, -1.0f,\r
         0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f,  0.0f, 0.0f, -1.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f,  0.0f, 0.0f, -1.0f,\r
        -0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f,  0.0f, 0.0f, -1.0f,\r
\r
        -0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f,  0.0f, 0.0f,  1.0f,\r
         0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f,  0.0f, 0.0f,  1.0f,\r
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f,  0.0f, 0.0f,  1.0f,\r
        -0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f,  0.0f, 0.0f,  1.0f,\r
\r
        -0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f, -1.0f, 0.0f,  0.0f,\r
        -0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f, -1.0f, 0.0f,  0.0f,\r
        -0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f, -1.0f, 0.0f,  0.0f,\r
        -0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f, -1.0f, 0.0f,  0.0f,\r
\r
         0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f,  1.0f, 0.0f,  0.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f,  1.0f, 0.0f,  0.0f,\r
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f,  1.0f, 0.0f,  0.0f,\r
         0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f,  1.0f, 0.0f,  0.0f,\r
\r
        -0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f,  0.0f,-1.0f,  0.0f,\r
         0.5f, -0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f,  0.0f,-1.0f,  0.0f,\r
         0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f,  0.0f,-1.0f,  0.0f,\r
        -0.5f, -0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f,  0.0f,-1.0f,  0.0f,\r
\r
        -0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 1.0f,  0.0f, 1.0f,  0.0f,\r
         0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 1.0f,  0.0f, 1.0f,  0.0f,\r
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   1.0f, 0.0f,  0.0f, 1.0f,  0.0f,\r
        -0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,   0.0f, 0.0f,  0.0f, 1.0f,  0.0f\r
    };\r
\r
    unsigned int cubeIndices[] = {\r
        0,  1,  2,  2,  3,  0,       // Back face\r
        4,  5,  6,  6,  7,  4,       // Front face\r
        8,  9,  10, 10, 11, 8,       // Left face\r
        12, 13, 14, 14, 15, 12,      // Right face\r
        16, 17, 18, 18, 19, 16,      // Bottom face\r
        20, 21, 22, 22, 23, 20       // Top face\r
    };\r
\r
    unsigned int VAO;\r
    glGenVertexArrays(1, &VAO);\r
    glBindVertexArray(VAO);\r
\r
    unsigned int VBO;\r
    glGenBuffers(1, &VBO);\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(cubeVertices), cubeVertices, GL_STATIC_DRAW);\r
\r
    unsigned int EBO;\r
    glGenBuffers(1, &EBO);\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(cubeIndices), cubeIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    // UV attribute (location = 2)\r
    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(6 * sizeof(float)));\r
    glEnableVertexAttribArray(2);\r
\r
    // Normal attribute (location = 3)\r
    glVertexAttribPointer(3, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(8 * sizeof(float)));\r
    glEnableVertexAttribArray(3);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    float floorVertices[] = {\r
        // Positions        // Colors         // UVs          // Normals\r
        -0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 0.0f,   0.0f, 1.0f, 0.0f,\r
         0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 0.0f,   0.0f, 1.0f, 0.0f,\r
         0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 1.0f,   0.0f, 1.0f, 0.0f,\r
        -0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 1.0f,   0.0f, 1.0f, 0.0f \r
    };\r
\r
    unsigned int floorIndices[] = {\r
        0, 1, 2,\r
        2, 3, 0\r
    };\r
\r
    unsigned int VAO2, VBO2, EBO2;\r
    glGenVertexArrays(1, &VAO2);\r
    glGenBuffers(1, &VBO2);\r
    glGenBuffers(1, &EBO2);\r
\r
    glBindVertexArray(VAO2);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, VBO2);\r
    glBufferData(GL_ARRAY_BUFFER, sizeof(floorVertices), floorVertices, GL_STATIC_DRAW);\r
\r
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO2);\r
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(floorIndices), floorIndices, GL_STATIC_DRAW);\r
\r
    // Position attribute (location = 0)\r
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)0);\r
    glEnableVertexAttribArray(0);\r
\r
    // Color attribute (location = 1)\r
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(3 * sizeof(float)));\r
    glEnableVertexAttribArray(1);\r
\r
    // UV attribute (location = 2)\r
    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(6 * sizeof(float)));\r
    glEnableVertexAttribArray(2);\r
\r
    // Normal attribute (location = 3)\r
    glVertexAttribPointer(3, 3, GL_FLOAT, GL_FALSE, 11 * sizeof(float), (void*)(8 * sizeof(float)));\r
    glEnableVertexAttribArray(3);\r
\r
    glBindBuffer(GL_ARRAY_BUFFER, 0);\r
    glBindVertexArray(0);\r
\r
    int width, height, channels;\r
    unsigned char* data = stbi_load("assets/texture.png", &width, &height, &channels, 0);\r
\r
    GLuint texture;\r
    glGenTextures(1, &texture);\r
    glBindTexture(GL_TEXTURE_2D, texture);\r
\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\r
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\r
\r
    if (data != nullptr) {\r
        GLenum format = (channels == 4) ? GL_RGBA : GL_RGB;\r
        glTexImage2D(GL_TEXTURE_2D, 0, format, width, height, 0, format, GL_UNSIGNED_BYTE, data);\r
        stbi_image_free(data);\r
    }\r
\r
    glBindTexture(GL_TEXTURE_2D, 0);\r
\r
    const char* vertexShaderSource = R"glsl(\r
#version 460 core\r
layout (location = 0) in vec3 aPos;\r
layout (location = 1) in vec3 aColor;\r
layout (location = 2) in vec2 aUV;\r
layout (location = 3) in vec3 aNormal;\r
\r
out vec3 fragPosition;\r
out vec3 fragColor;\r
out vec2 fragUV;\r
out vec3 fragNormal;\r
\r
uniform mat4 model;\r
uniform mat4 view;\r
uniform mat4 projection;\r
\r
void main() \r
{\r
    fragPosition = vec3(model * vec4(aPos, 1.0));\r
    fragNormal = mat3(transpose(inverse(model))) * aNormal;\r
    fragColor = aColor;\r
    fragUV = aUV;\r
\r
    gl_Position = projection * view * vec4(fragPosition, 1.0);\r
}\r
)glsl";\r
\r
    const char* fragmentShaderSource = R"glsl(\r
#version 460 core\r
\r
in vec3 fragPosition;\r
in vec3 fragColor;\r
in vec2 fragUV;\r
in vec3 fragNormal;\r
\r
uniform vec3 lightPos;\r
\r
uniform sampler2D textureSampler;\r
\r
out vec4 FragColor;\r
\r
void main()\r
{\r
    vec3 color = texture(textureSampler, fragUV).rgb;\r
\r
    vec3 normal = normalize(fragNormal);\r
    vec3 lightDir = normalize(lightPos - fragPosition);\r
\r
    float diffIntensity = max(dot(normal, lightDir), 0.0);\r
    vec3 diffuse = diffIntensity * fragColor;\r
\r
    vec3 finalColor = diffuse * color;\r
\r
    FragColor = vec4(finalColor, 1.0);\r
}\r
)glsl";\r
\r
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\r
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);\r
    glCompileShader(vertexShader);\r
\r
    int success;\r
    char infoLog[512];\r
    glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);\r
    if (!success) {\r
        glGetShaderInfoLog(vertexShader, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::VERTEX::COMPILATION_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\r
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);\r
    glCompileShader(fragmentShader);\r
\r
    glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);\r
    if (!success) {\r
        glGetShaderInfoLog(fragmentShader, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::FRAGMENT::COMPILATION_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    GLuint shaderProgram = glCreateProgram();\r
    glAttachShader(shaderProgram, vertexShader);\r
    glAttachShader(shaderProgram, fragmentShader);\r
    glLinkProgram(shaderProgram);\r
\r
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);\r
    if (!success) {\r
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);\r
        std::cout << "ERROR::SHADER::PROGRAM::LINKING_FAILED\\n" << infoLog << std::endl;\r
    }\r
\r
    glDeleteShader(vertexShader);\r
    glDeleteShader(fragmentShader);\r
\r
    glEnable(GL_DEPTH_TEST);\r
    glDepthFunc(GL_LESS);\r
\r
    float accumulatedTime = 0.0f;\r
    float lastFrameTime = glfwGetTime();\r
\r
    while (!glfwWindowShouldClose(window))\r
    {\r
        float currentFrameTime = glfwGetTime();\r
        float dt = currentFrameTime - lastFrameTime;\r
        lastFrameTime = currentFrameTime;\r
\r
        accumulatedTime += dt * 2;\r
\r
        glClearColor(0.0f, 0.0f, 0.0f, 1.0f);\r
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\r
\r
        glUseProgram(shaderProgram);\r
\r
        glActiveTexture(GL_TEXTURE0);\r
        glBindTexture(GL_TEXTURE_2D, texture);\r
\r
        GLuint textureLocation = glGetUniformLocation(shaderProgram, "textureSampler");\r
        glUniform1i(textureLocation, 0);\r
\r
        glm::vec3 lightPos = glm::vec3(glm::cos(accumulatedTime) * 5.0f, glm::sin(accumulatedTime) * 5.0f, glm::sin(accumulatedTime) * 5.0f);\r
\r
        GLuint lightPosLocation = glGetUniformLocation(shaderProgram, "lightPos");\r
        glUniform3fv(lightPosLocation, 1, glm::value_ptr(lightPos));\r
\r
        glm::vec3 cameraPos = glm::vec3(0.0f, 10.0f, 10.0f);\r
        glm::vec3 cameraTarget = glm::vec3(0.0f, 0, 0.0f);\r
        glm::vec3 cameraUp = glm::vec3(0.0f, 1.0f, 0.0f);\r
\r
        glm::mat4 view = glm::lookAt(cameraPos, cameraTarget, cameraUp);\r
\r
        constexpr float fov = glm::radians(45.0f);\r
        float aspectRatio = 1280.0f / 720.0f;\r
        float nearPlane = 0.1f;\r
        float farPlane = 100.0f;\r
\r
        glm::mat4 projection = glm::perspective(fov, aspectRatio, nearPlane, farPlane);\r
\r
        GLuint viewLocation = glGetUniformLocation(shaderProgram, "view");\r
        GLuint projLocation = glGetUniformLocation(shaderProgram, "projection");\r
        GLuint modelLocation = glGetUniformLocation(shaderProgram, "model");\r
\r
        glUniformMatrix4fv(viewLocation, 1, GL_FALSE, glm::value_ptr(view));\r
        glUniformMatrix4fv(projLocation, 1, GL_FALSE, glm::value_ptr(projection));\r
\r
        // Floor\r
        {\r
            glBindVertexArray(VAO2);\r
            {\r
                glm::mat4 model = glm::scale(glm::mat4(1.0f), glm::vec3(10.0f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        // Cubes\r
        {\r
            glBindVertexArray(VAO);\r
\r
            // Cube 1\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(-1.5f, 0.5f, -1.5f));\r
                model *= glm::scale(glm::mat4(1.0f), glm::vec3(2.0f));\r
\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
\r
            // Cube 2\r
            {\r
                glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(0.5f, 0.5f, 0.5f));\r
                glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));\r
\r
                glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);\r
            }\r
        }\r
\r
        glfwSwapBuffers(window);\r
        glfwPollEvents();\r
    }\r
\r
    return 0;\r
}`;var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ii={exports:{}},Rl;function _m(){return Rl||(Rl=1,function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,d={},c={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function p(y){return y instanceof h?new h(y.type,p(y.content),y.alias):Array.isArray(y)?y.map(p):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++o}),p.__id},clone:function p(y,x){x=x||{};var I,B;switch(c.util.type(y)){case"Object":if(B=c.util.objId(y),x[B])return x[B];I={},x[B]=I;for(var M in y)y.hasOwnProperty(M)&&(I[M]=p(y[M],x));return I;case"Array":return B=c.util.objId(y),x[B]?x[B]:(I=[],x[B]=I,y.forEach(function(re,K){I[K]=p(re,x)}),I);default:return y}},getLanguage:function(p){for(;p;){var y=i.exec(p.className);if(y)return y[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,y){p.className=p.className.replace(RegExp(i,"gi"),""),p.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(I){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(I.stack)||[])[1];if(p){var y=document.getElementsByTagName("script");for(var x in y)if(y[x].src==p)return y[x]}return null}},isActive:function(p,y,x){for(var I="no-"+y;p;){var B=p.classList;if(B.contains(y))return!0;if(B.contains(I))return!1;p=p.parentElement}return!!x}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(p,y){var x=c.util.clone(c.languages[p]);for(var I in y)x[I]=y[I];return x},insertBefore:function(p,y,x,I){I=I||c.languages;var B=I[p],M={};for(var re in B)if(B.hasOwnProperty(re)){if(re==y)for(var K in x)x.hasOwnProperty(K)&&(M[K]=x[K]);x.hasOwnProperty(re)||(M[re]=B[re])}var pe=I[p];return I[p]=M,c.languages.DFS(c.languages,function(Te,$e){$e===pe&&Te!=p&&(this[Te]=M)}),M},DFS:function p(y,x,I,B){B=B||{};var M=c.util.objId;for(var re in y)if(y.hasOwnProperty(re)){x.call(y,re,y[re],I||re);var K=y[re],pe=c.util.type(K);pe==="Object"&&!B[M(K)]?(B[M(K)]=!0,p(K,x,null,B)):pe==="Array"&&!B[M(K)]&&(B[M(K)]=!0,p(K,x,re,B))}}},plugins:{},highlightAll:function(p,y){c.highlightAllUnder(document,p,y)},highlightAllUnder:function(p,y,x){var I={callback:x,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",I),I.elements=Array.prototype.slice.apply(I.container.querySelectorAll(I.selector)),c.hooks.run("before-all-elements-highlight",I);for(var B=0,M;M=I.elements[B++];)c.highlightElement(M,y===!0,I.callback)},highlightElement:function(p,y,x){var I=c.util.getLanguage(p),B=c.languages[I];c.util.setLanguage(p,I);var M=p.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(M,I);var re=p.textContent,K={element:p,language:I,grammar:B,code:re};function pe($e){K.highlightedCode=$e,c.hooks.run("before-insert",K),K.element.innerHTML=K.highlightedCode,c.hooks.run("after-highlight",K),c.hooks.run("complete",K),x&&x.call(K.element)}if(c.hooks.run("before-sanity-check",K),M=K.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!K.code){c.hooks.run("complete",K),x&&x.call(K.element);return}if(c.hooks.run("before-highlight",K),!K.grammar){pe(c.util.encode(K.code));return}if(y&&s.Worker){var Te=new Worker(c.filename);Te.onmessage=function($e){pe($e.data)},Te.postMessage(JSON.stringify({language:K.language,code:K.code,immediateClose:!0}))}else pe(c.highlight(K.code,K.grammar,K.language))},highlight:function(p,y,x){var I={code:p,grammar:y,language:x};if(c.hooks.run("before-tokenize",I),!I.grammar)throw new Error('The language "'+I.language+'" has no grammar.');return I.tokens=c.tokenize(I.code,I.grammar),c.hooks.run("after-tokenize",I),h.stringify(c.util.encode(I.tokens),I.language)},tokenize:function(p,y){var x=y.rest;if(x){for(var I in x)y[I]=x[I];delete y.rest}var B=new b;return S(B,B.head,p),g(p,B,y,B.head,0),C(B)},hooks:{all:{},add:function(p,y){var x=c.hooks.all;x[p]=x[p]||[],x[p].push(y)},run:function(p,y){var x=c.hooks.all[p];if(!(!x||!x.length))for(var I=0,B;B=x[I++];)B(y)}},Token:h};s.Prism=c;function h(p,y,x,I){this.type=p,this.content=y,this.alias=x,this.length=(I||"").length|0}h.stringify=function p(y,x){if(typeof y=="string")return y;if(Array.isArray(y)){var I="";return y.forEach(function(pe){I+=p(pe,x)}),I}var B={type:y.type,content:p(y.content,x),tag:"span",classes:["token",y.type],attributes:{},language:x},M=y.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(B.classes,M):B.classes.push(M)),c.hooks.run("wrap",B);var re="";for(var K in B.attributes)re+=" "+K+'="'+(B.attributes[K]||"").replace(/"/g,"&quot;")+'"';return"<"+B.tag+' class="'+B.classes.join(" ")+'"'+re+">"+B.content+"</"+B.tag+">"};function _(p,y,x,I){p.lastIndex=y;var B=p.exec(x);if(B&&I&&B[1]){var M=B[1].length;B.index+=M,B[0]=B[0].slice(M)}return B}function g(p,y,x,I,B,M){for(var re in x)if(!(!x.hasOwnProperty(re)||!x[re])){var K=x[re];K=Array.isArray(K)?K:[K];for(var pe=0;pe<K.length;++pe){if(M&&M.cause==re+","+pe)return;var Te=K[pe],$e=Te.inside,ze=!!Te.lookbehind,Re=!!Te.greedy,je=Te.alias;if(Re&&!Te.pattern.global){var Ae=Te.pattern.toString().match(/[imsuy]*$/)[0];Te.pattern=RegExp(Te.pattern.source,Ae+"g")}for(var le=Te.pattern||Te,ne=I.next,Se=B;ne!==y.tail&&!(M&&Se>=M.reach);Se+=ne.value.length,ne=ne.next){var G=ne.value;if(y.length>p.length)return;if(!(G instanceof h)){var ve=1,he;if(Re){if(he=_(le,Se,p,ze),!he||he.index>=p.length)break;var Ee=he.index,He=he.index+he[0].length,Le=Se;for(Le+=ne.value.length;Ee>=Le;)ne=ne.next,Le+=ne.value.length;if(Le-=ne.value.length,Se=Le,ne.value instanceof h)continue;for(var Ze=ne;Ze!==y.tail&&(Le<He||typeof Ze.value=="string");Ze=Ze.next)ve++,Le+=Ze.value.length;ve--,G=p.slice(Se,Le),he.index-=Se}else if(he=_(le,0,G,ze),!he)continue;var Ee=he.index,k=he[0],R=G.slice(0,Ee),W=G.slice(Ee+k.length),Z=Se+G.length;M&&Z>M.reach&&(M.reach=Z);var xe=ne.prev;R&&(xe=S(y,xe,R),Se+=R.length),O(y,xe,ve);var m=new h(re,$e?c.tokenize(k,$e):k,je,k);if(ne=S(y,xe,m),W&&S(y,ne,W),ve>1){var v={cause:re+","+pe,reach:Z};g(p,y,x,ne.prev,Se,v),M&&v.reach>M.reach&&(M.reach=v.reach)}}}}}}function b(){var p={value:null,prev:null,next:null},y={value:null,prev:p,next:null};p.next=y,this.head=p,this.tail=y,this.length=0}function S(p,y,x){var I=y.next,B={value:x,prev:y,next:I};return y.next=B,I.prev=B,p.length++,B}function O(p,y,x){for(var I=y.next,B=0;B<x&&I!==p.tail;B++)I=I.next;y.next=I,I.prev=y,p.length-=B}function C(p){for(var y=[],x=p.head.next;x!==p.tail;)y.push(x.value),x=x.next;return y}if(!s.document)return s.addEventListener&&(c.disableWorkerMessageHandler||s.addEventListener("message",function(p){var y=JSON.parse(p.data),x=y.language,I=y.code,B=y.immediateClose;s.postMessage(c.highlight(I,c.languages[x],x)),B&&s.close()},!1)),c;var w=c.util.currentScript();w&&(c.filename=w.src,w.hasAttribute("data-manual")&&(c.manual=!0));function P(){c.manual||c.highlightAll()}if(!c.manual){var L=document.readyState;L==="loading"||L==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return c}(t);e.exports&&(e.exports=n),typeof Fl<"u"&&(Fl.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var d={};d["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};c["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var h={};h[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:c},n.languages.insertBefore("markup","cdata",h)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var o=s.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",i=function(w,P){return"✖ Error "+w+" while fetching file: "+P},o="✖ Error: File does not exist or is empty",d={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",h="loading",_="loaded",g="failed",b="pre[data-src]:not(["+c+'="'+_+'"]):not(['+c+'="'+h+'"])';function S(w,P,L){var p=new XMLHttpRequest;p.open("GET",w,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?P(p.responseText):p.status>=400?L(i(p.status,p.statusText)):L(o))},p.send(null)}function O(w){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(P){var L=Number(P[1]),p=P[2],y=P[3];return p?y?[L,Number(y)]:[L,void 0]:[L,L]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+b}),n.hooks.add("before-sanity-check",function(w){var P=w.element;if(P.matches(b)){w.code="",P.setAttribute(c,h);var L=P.appendChild(document.createElement("CODE"));L.textContent=s;var p=P.getAttribute("data-src"),y=w.language;if(y==="none"){var x=(/\.(\w+)$/.exec(p)||[,"none"])[1];y=d[x]||x}n.util.setLanguage(L,y),n.util.setLanguage(P,y);var I=n.plugins.autoloader;I&&I.loadLanguages(y),S(p,function(B){P.setAttribute(c,_);var M=O(P.getAttribute("data-range"));if(M){var re=B.split(/\r\n?|\n/g),K=M[0],pe=M[1]==null?re.length:M[1];K<0&&(K+=re.length),K=Math.max(0,Math.min(K-1,re.length)),pe<0&&(pe+=re.length),pe=Math.max(0,Math.min(pe,re.length)),B=re.slice(K,pe).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(K+1))}L.textContent=B,n.highlightElement(L)},function(B){P.setAttribute(c,g),L.textContent=B})}}),n.plugins.fileHighlight={highlight:function(P){for(var L=(P||document).querySelectorAll(b),p=0,y;y=L[p++];)n.highlightElement(y)}};var C=!1;n.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(Ii)),Ii.exports}var ym=_m();const wn=bm(ym),wm={},xm={class:"alert alert-danger text-center m-0",role:"alert",style:{width:"100%",position:"fixed",top:"56px","z-index":"1050",padding:"0.5rem 0"}};function Am(e,t){return _t(),xt("div",xm,t[0]||(t[0]=[ae(" 🚧 "),u("strong",null,"Page Under Construction",-1),ae(" 🚧 — This Page is being worked on. ")]))}const Ns=jn(wm,[["render",Am]]),Em={id:"windowing",class:"py-3"},Tm={class:"container"},Sm={class:"row g-4 justify-content-center"},Lm={class:"col-md-12"},Cm={class:"row g-4"},Om={class:"col-md-12"},Pm={class:"card shadow-sm h-100"},Im={class:"card-body"},Fm={class:"language-cpp"},Rm={class:"language-cpp"},km={class:"language-cpp"},Gm={class:"language-cpp"},Dm={class:"col-md-12"},Bm={class:"card shadow-sm h-100"},Um={class:"card-body"},Nm={class:"language-cpp"},jm={class:"col-md-12"},Mm={class:"card shadow-sm h-100"},Vm={class:"card-body"},qm={class:"language-cpp"},$m={class:"language-cpp"},Wm={id:"codesofar",class:"py-3"},zm={class:"container"},Hm={class:"row g-4 justify-content-center"},Xm={class:"col-12"},Ym={class:"card shadow-sm h-100"},Km={class:"card-body"},Qm={class:"language-cpp"},Jm={id:"camera",class:"py-3"},Zm={class:"container"},ev={class:"row g-4 justify-content-center"},tv={class:"col-12"},nv={class:"card shadow-sm h-100"},rv={class:"card-body"},sv={class:"language-cpp"},iv={id:"textures",class:"py-3"},av={class:"container"},ov={class:"row g-4 justify-content-center"},lv={class:"col-12"},cv={class:"card shadow-sm h-100"},dv={class:"card-body"},uv={class:"language-cpp"},fv={id:"lighting",class:"py-3"},hv={class:"container"},pv={class:"row g-4 justify-content-center"},gv={class:"col-12"},mv={class:"card shadow-sm h-100"},vv={class:"card-body"},bv={class:"language-cpp"},_v=cn({__name:"GraphicsEngineDeepDive",setup(e){return jr(()=>{wn.highlightAll()}),Mr(()=>{wn.highlightAll()}),(t,n)=>(_t(),xt(bt,null,[Qe(Ns),n[34]||(n[34]=mt('<section class="py-3" id="about"><div class="container"><h1 class="display-4 mb-1">Graphics Engine</h1><p class="lead mb-2"> A project aimed at learning about the inner workings of graphics engines. </p><p class="mb-0"> This project explores the fundamentals of modern graphics engines using OpenGL, focusing on how 3D geometry is processed and rendered on the GPU. It covers key concepts like buffer objects, shader programs, draw calls. Through examples, it provides me with a foundation I can look back on to understand concepts around a rendering pipeline, with an aim to deepen my understanding of graphics pipelines to support in the development of a multiplayer game I am working on with others. </p></div></section><hr>',2)),u("section",Em,[u("div",Tm,[n[20]||(n[20]=u("h2",{class:"mb-4 text-center"},"Windowing",-1)),u("div",Sm,[n[19]||(n[19]=mt('<div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">What is Windowing?</h5><p class="card-text"> Windowing is the process of creating and managing an operating system window that serves as the surface for rendering graphics and receiving user input. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">System APIs</h5><p class="card-text"> It involves interacting with the OS&#39;s window manager through APIs like Win32, X11, Wayland, or Cocoa to create a window context with size, position, and pixel format. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Window Lifecycle</h5><p class="card-text"> The windowing system handles opening, resizing, minimizing, and closing the window, along with managing event queues for keyboard, mouse, and other input. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">GPU Integration</h5><p class="card-text"> Windowing provides a drawable surface, such as a framebuffer or swapchain, which the GPU renders into using APIs like OpenGL, Vulkan, or DirectX. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Buffer Swapping</h5><p class="card-text"> Buffer swapping swaps the back buffer (off-screen) with the front buffer (display) to present rendered frames smoothly and avoid flickering. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Handling</h5><p class="card-text"> Event handling lets the program notice when an action event occurs like inputs, window resizes, so it can react and work properly. </p></div></div></div>',6)),u("div",Lm,[n[18]||(n[18]=u("h3",{class:"text-center mb-4"},"Windowing Implementation",-1)),u("div",Cm,[u("div",Om,[u("div",Pm,[u("div",Im,[n[0]||(n[0]=u("h5",{class:"card-title"},"GLFW",-1)),n[1]||(n[1]=u("p",{class:"card-text"},[ae(" GLFW is a lightweight, open-source library that simplifies cross-platform window creation and input handling for OpenGL, Vulkan, and other graphics APIs. It abstracts platform-specific windowing APIs, this is perfect for my project. "),u("span",null,[ae("Learn more at the "),u("a",{href:"https://www.glfw.org",target:"_blank",rel:"noopener noreferrer"},"GLFW official website")])],-1)),n[2]||(n[2]=u("p",{class:"card-text"}," Before using any meaningful GLFW functions the library must be initialized. ",-1)),u("pre",Fm,[u("code",null,yt(tt(lm)),1)]),n[3]||(n[3]=u("p",{class:"card-text"}," After initialization, window hints are set to specify the desired OpenGL version and profile. In this project decided on utilizing the latest versions, OpenGL version 4.6 with the core profile. ",-1)),u("pre",Rm,[u("code",null,yt(tt(cm)),1)]),n[4]||(n[4]=u("p",{class:"card-text"},[ae(" Next is the window creation step. If successful, the returned pointer should not be a "),u("code",null,"nullptr"),ae(". ")],-1)),u("pre",km,[u("code",null,yt(tt(dm)),1)]),n[5]||(n[5]=u("p",{class:"card-text"}," After the window is created it has to be bound to the glfw context. this is something i forget often and leaves me scratching my head for a short period of time. ",-1)),n[6]||(n[6]=u("pre",{class:"language-cpp"},[u("code",null,"glfwMakeContextCurrent(window);")],-1)),n[7]||(n[7]=u("p",{class:"card-text"},"Full Code:",-1)),u("pre",Gm,[u("code",null,yt(tt(om)),1)])])])]),u("div",Dm,[u("div",Bm,[u("div",Um,[n[8]||(n[8]=mt(`<h5 class="card-title">Main Loop</h5><p class="card-text"> The main loop is a fundamental part of most graphical applications and games. It continuously runs while the window is open, repeatedly processing user input, updating the application state, and rendering graphics to the screen. Without this loop, the program would execute once and exit immediately, causing the window to close. </p><p class="card-text"> In GLFW, this function should be called inside a while loop after setting the context as current. This keeps the window open instead of closing immediately, though there still requires a bit more before the window becomes fully functional. </p><pre class="language-cpp"><code>while (!glfwWindowShouldClose(window))</code></pre><p class="card-text"> For the window to be responsive and function, both the buffers and poll events need to be called to allow events to be processed and rendering to the surface to begin. </p><pre class="language-cpp"><code>glfwSwapBuffers(window);
glfwPollEvents();</code></pre><p class="card-text">Full Code:</p>`,7)),u("pre",Nm,[u("code",null,yt(tt(um)),1)])])])]),n[16]||(n[16]=mt(`<div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Delta Time</h5><p class="card-text"> In real-time applications like games or simulations, it&#39;s essential to keep updates frame rate-independent. This is where delta time comes in. It measures how much time has passed since the last frame. </p><p class="card-text"> Using delta time ensures that movement, physics, and animations behave consistently across systems with different frame rates. Without it, faster computers would run the game logic more often, causing objects to move too quickly. </p><pre class="language-cpp"><code>float lastFrameTime = glfwGetTime();
while (!glfwWindowShouldClose(window))
{
    float currentFrameTime = glfwGetTime();
    float dt = currentFrameTime - lastFrameTime;
    lastFrameTime = currentFrameTime;
</code></pre><p class="card-text"> Delta time is usually calculated as seconds since the last frame. By multiplying any movement or time-based calculation by <code>dt</code>, the logic remains smooth and consistent regardless of frame rate. </p></div></div></div>`,1)),u("div",jm,[u("div",Mm,[u("div",Vm,[n[9]||(n[9]=u("h5",{class:"card-title"},"GLAD",-1)),n[10]||(n[10]=u("p",{class:"card-text"}," GLAD is a modern OpenGL loader library that dynamically retrieves the addresses of OpenGL functions supported by your graphics driver at runtime. This step is crucial because modern OpenGL functions are not accessible until they are loaded. ",-1)),n[11]||(n[11]=u("p",{class:"card-text"}," Once you have made the GLFW context current, GLAD must be initialized to gain access to OpenGL functions. ",-1)),u("pre",qm,[u("code",null,yt(tt(fm)),1)]),n[12]||(n[12]=u("p",{class:"card-text"}," With this boilerplate complete, I'm able to call the following two OpenGL functions, which set the window's background color to coral. The window is now fully prepared for rendering. If any errors occur during this process, they may indicate an unsupported OpenGL version or a problem with the graphics driver or context setup. ",-1)),n[13]||(n[13]=u("pre",{class:"language-cpp"},[u("code",null,`glClearColor(1.0f, 0.5f, 0.5f, 1.0f);
glClear(GL_COLOR_BUFFER_BIT);`)],-1)),n[14]||(n[14]=u("p",{class:"card-text"},[ae(" Calling "),u("code",null,"glClearColor"),ae(" sets the color that will be used the next time the color buffer is cleared, but it does not actually clear the screen by itself. To apply the background color, you must call "),u("code",null,"glClear(GL_COLOR_BUFFER_BIT)"),ae(" during the render loop. This clears the current color buffer and fills the window with the color defined by "),u("code",null,"glClearColor"),ae(", preparing it for fresh drawing each frame. ")],-1)),n[15]||(n[15]=u("p",{class:"card-text"},"Complete Code Example:",-1)),u("pre",$m,[u("code",null,yt(tt(hm)),1)])])])]),n[17]||(n[17]=u("div",{class:"col-md-12"},[u("div",{class:"card shadow-sm h-100"},[u("div",{class:"card-body"},[u("h5",{class:"card-title"},"Window Events"),u("p",{class:"card-text"},[ae(" GLFW has a function "),u("code",null,"glfwPollEvents()"),ae(" which is what actually checks for and processes all pending window events. When called, it handles invoking the callback functions you have registered,before your main application logic runs. ")]),u("div",{class:"alert alert-info",role:"alert"}," This projects scope doesnt include learning about callbacks ")])])],-1))])])])])]),n[35]||(n[35]=mt(`<hr><section id="buffers" class="py-3"><div class="container"><h2 class="mb-4 text-center">Buffer Objects</h2><div class="row g-4 justify-content-center"><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Buffer Objects Overview</h5><p class="card-text"> Buffer objects are memory containers stored on the GPU, used to efficiently transfer large sets of data like vertices or indices from the CPU. They enable fast, reusable rendering workflows by avoiding per-frame data uploads. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Data</h5><p class="card-text"> Vertex data describes points in 3D space, typically using x, y, and z coordinates. Each vertex can also include additional attributes like color, normals, or texture coordinates. These attributes are sent to the GPU and used by shaders during rendering. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Indices &amp; Winding Order</h5><p class="card-text"> Indices determine the order in which vertices are connected to form primitives (like triangles). This reduces redundancy by allowing shared vertices. </p><p class="card-text"> OpenGL uses counter-clockwise winding order to determine front-facing triangles. This affects face culling and rendering behavior. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Array Object</h5><p class="card-text"> A Vertex Array Object (VAO) stores the configuration for how vertex data is interpreted—such as attribute pointers and buffer bindings. It simplifies switching between different mesh layouts by encapsulating this setup. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Buffer Object</h5><p class="card-text"> A Vertex Buffer Object (VBO) holds vertex data like positions, colors, and normals in GPU memory. It&#39;s the core data structure used to define the shape and appearance of 3D geometry for rendering. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Index/Element Buffer Object</h5><p class="card-text"> An Element Buffer Object (EBO), also known as an Index Buffer Object (IBO), stores indices that reference vertices in a VBO. This allows for efficient reuse of vertices when rendering shapes like triangles or quads. </p></div></div></div><div class="col-md-12"><h3 class="text-center mb-4">Buffer Objects Implementation</h3><div class="row g-4"><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Data</h5><p> Vertex data defines the positions of points in 3D space. These positions represent the geometry of the object being rendered. Each vertex typically contains attributes such as position, color, normal, or texture coordinates. </p><p> Below is an example of vertex data for a triangle. Each group of three floats represents the x, y, and z coordinates of a single vertex: </p><pre class="language-cpp"><code>float vertices[] = {
    -0.5f, -0.5f, 0.0f,  // left
     0.5f, -0.5f, 0.0f,  // right
     0.0f,  0.5f, 0.0f   // top
};</code></pre></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Indices &amp; Winding Order</h5><p> Index data tells OpenGL which vertices to use and in what order when constructing shapes like triangles. This avoids duplication and enables vertex reuse, which is especially useful for complex models. </p><p> In OpenGL, triangles are typically defined in a counter-clockwise winding order (CCW). If the vertices appear counter-clockwise from the viewer&#39;s perspective, the face is considered front-facing. This is important for back-face culling. </p><p>Below are the indices for a triangle:</p><pre class="language-cpp"><code>unsigned int indices[] = {
    0, // left
    1, // right
    2  // top
};</code></pre><p> In this case, the index buffer references the three vertices defined earlier to form a triangle. Although the indices are in order here, they are vital for larger models where vertices are often reused. </p><p> Having incorrect winding order causes me great pain especially when manually mapping each index for the vertices, which is only a problem really for manually mapping the data </p></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Array Object (VAO)</h5><p> The Vertex Array Object (VAO) is an OpenGL object that stores the configuration of vertex attribute pointers and their associated buffer bindings. This allows the application to set up vertex attribute state once and reuse it whenever the VAO is bound. </p><p> To create a VAO, OpenGL generates a unique identifier with <code>glGenVertexArrays</code>, which allocates a new VAO object on the GPU. Binding the VAO with <code>glBindVertexArray</code> makes it the current active vertex array, so subsequent vertex attribute and buffer configurations are saved within it. </p><p> Using VAOs simplifies switching between different vertex data configurations during rendering by binding the corresponding VAO. </p><p>This is how a VAO is created:</p><pre class="language-cpp"><code>unsigned int VAO;
glGenVertexArrays(1, &amp;VAO);
glBindVertexArray(VAO);</code></pre></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Buffer Object (VBO)</h5><p> The Vertex Buffer Object (VBO) is an OpenGL buffer that stores vertex data such as positions, colors, or texture coordinates (UV) directly in GPU memory. This enables fast access during rendering. </p><p> After binding a Vertex Array Object (VAO), the VBO is generated and bound to the <code>GL_ARRAY_BUFFER</code> target. Binding the VBO while the VAO is active associates this buffer with the VAO&#39;s state. This means the VAO remembers which buffer contains its vertex data. </p><p> Once bound, the vertex data is uploaded to the GPU using <code>glBufferData</code>. The data usage hint <code>GL_STATIC_DRAW</code> indicates that the data will not change frequently and will be used many times. </p><p> The <code>sizeof(vertices)</code> parameter in <code>glBufferData</code> specifies the total size in bytes of the vertex data being uploaded. This is necessary because OpenGL needs to know exactly how much memory to allocate on the GPU and how many bytes to copy from the source data. Without this size information, OpenGL cannot safely or correctly transfer the data. </p><p> It is important to get this size calculation correct. I have personally miscalculated sizes before, which caused subtle bugs and led to massive headaches during debugging. Incorrect sizes can result in crashes or rendering errors that are often hard to track down. </p><p>This is how a VBO is created:</p><pre class="language-cpp"><code>unsigned int VBO;
glGenBuffers(1, &amp;VBO);
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);</code></pre></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Element Buffer Object (EBO)</h5><p> The Element Buffer Object (EBO), also known as an Index Buffer Object (IBO), is an OpenGL buffer that stores indices used to specify which vertices to draw. This allows for efficient reuse of vertex data, reducing duplication and improving performance. </p><p> The EBO is generated and bound to the <code>GL_ELEMENT_ARRAY_BUFFER</code> target. Binding the EBO while the Vertex Array Object (VAO) is active associates the index data with that VAO&#39;s state. </p><p> It is important to bind the EBO after the VAO and VBO have been bound because the EBO binding is stored inside the currently bound VAO. This means the VAO keeps track of the EBO used for indexed drawing, ensuring the correct indices are applied when the VAO is bound during rendering. </p><p> The index data is then uploaded to the GPU using <code>glBufferData</code> with <code>GL_STATIC_DRAW</code> indicating that the data will not change frequently. </p><p>This is how a EBO is created:</p><pre class="language-cpp"><code>unsigned int EBO;
glGenBuffers(1, &amp;EBO);
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);</code></pre></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Buffer Layout</h5><p> Vertex attributes describe how raw vertex data stored in buffers is interpreted and fed into the vertex shader. Each attribute represents a piece of data like a vertex position, color, or texture coordinate. OpenGL requires explicit instructions on how to read this data because the buffer contains just a stream of bytes. </p><p> Together, these attributes define the <em>buffer layout</em>, which specifies the organization of all vertex data inside a buffer. This layout determines how different types of data are arranged sequentially in memory, often interleaved for efficiency. </p><p> The function <code>glVertexAttribPointer</code> configures how OpenGL interprets each attribute in the buffer by specifying parameters like data type, size, stride (spacing), and offset within the vertex data. The stride and offset are crucial as they describe the layout: how far apart each attribute is, and where it starts in the vertex. </p><pre class="language-cpp"><code>glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);</code></pre><ul><li><strong>Index (0):</strong> Matches the <code>layout(location = 0)</code> in the vertex shader, telling OpenGL which attribute slot this corresponds to. </li><li><strong>Size (3):</strong> Number of components in the attribute; here it&#39;s 3 floats for x, y, z position. </li><li><strong>Type (GL_FLOAT):</strong> The data type of each component.</li><li><strong>Normalized (GL_FALSE):</strong> Whether integer data should be normalized; false for floats. </li><li><strong>Stride (3 * sizeof(float)):</strong> Byte distance between consecutive vertices. Since data is tightly packed, it equals the size of one vertex. </li><li><strong>Offset ((void*)0):</strong> Byte offset where this attribute begins within each vertex. Zero means it starts at the beginning. </li></ul><p> It is very important to get the stride and offset values correct. Incorrect values can cause subtle bugs, resulting in visual glitches, corrupted geometry, or program crashes. Careful calculation ensures the GPU reads the right data for each attribute correctly. </p><p> After setting up an attribute, it must be enabled with <code>glEnableVertexAttribArray</code> so that OpenGL uses it during rendering. Without enabling, the attribute is ignored even if it is properly configured. </p><pre class="language-cpp"><code>glEnableVertexAttribArray(0);</code></pre><p> This call enables the vertex attribute at location 0. Enabling is necessary for OpenGL to use the attribute when rendering. </p></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Full Setup Code</h5><p> This is a complete example of setting up the core OpenGL objects: the Vertex Array Object (VAO), Vertex Buffer Object (VBO), and Element Buffer Object (EBO). It also includes configuration of the vertex attributes that tell OpenGL how to interpret the vertex data. Together, these steps lay the foundation for rendering geometry efficiently. </p><pre class="language-cpp"><code>float vertices[] = {
    -0.5f, -0.5f, 0.0f,  // left
     0.5f, -0.5f, 0.0f,  // right
     0.0f,  0.5f, 0.0f   // top
};

unsigned int indices[] = {
    0, // left
    1, // right
    2  // top
};

unsigned int VAO;
glGenVertexArrays(1, &amp;VAO);
glBindVertexArray(VAO);

unsigned int VBO;
glGenBuffers(1, &amp;VBO);
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

unsigned int EBO;
glGenBuffers(1, &amp;EBO);
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);

glBindBuffer(GL_ARRAY_BUFFER, 0);
glBindVertexArray(0);</code></pre><p>In this snippet:</p><ul><li><strong>VAO</strong> is created and bound first so it can capture the buffer and attribute configurations. </li><li><strong>VBO</strong> is used to upload raw vertex data to the GPU.</li><li><strong>EBO</strong> holds the indices that define the drawing order of the vertices. </li><li><strong>glVertexAttribPointer</strong> configures how the vertex data is laid out in memory. </li><li><strong>glEnableVertexAttribArray</strong> activates the attribute so it can be used by the shader. </li></ul><p> It&#39;s important that the setup occurs in this order: the VAO must be bound before configuring the VBO and EBO, and vertex attributes must be defined while the VAO is active. This ensures the entire configuration is captured by the VAO for later reuse. </p></div></div></div></div></div></div></div></section><hr><section id="drawcalls" class="py-3"><div class="container"><h2 class="mb-4 text-center">Draw Calls</h2><div class="row g-4 justify-content-center"><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Draw Call</h5><p class="card-text"> A Draw Call is an explicit instruction sent from the CPU to the GPU, telling it to render a set of primitives such as points, lines, or triangles based on the current state of the bound buffers, shaders, and other configurations. Even if all vertex data, index buffers, and shader programs are correctly set up, nothing will appear on screen until a draw call is made. </p><p class="card-text"> In OpenGL, common draw functions include <code>glDrawArrays</code> (for non-indexed drawing) and <code>glDrawElements</code> (for indexed drawing). These functions initiate the actual rendering process on the GPU. </p><p class="card-text"> A draw call takes parameters that define how many vertices or indices to process, what kind of primitives to generate (e.g., triangles, triangle strips), and how to interpret the input data. The GPU then pulls data from the currently bound Vertex Array Object (VAO), applies the vertex and fragment shaders, and rasterizes the result into pixels. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Issuing a Draw Call</h5><p class="card-text"> To render the geometry defined earlier, OpenGL requires a draw call to be placed inside your main loop. Even if you&#39;ve correctly set up your vertex data, VAO, VBO, and EBO, nothing is drawn to the screen until you explicitly tell OpenGL to do so. </p><p class="card-text"> The <code>glDrawElements</code> function is essential for rendering indexed geometry. Without it, the triangle (or any shape) you&#39;ve configured remains invisible because OpenGL never receives the instruction to actually draw it. </p><pre class="language-cpp"><code>while (!glfwWindowShouldClose(window))
{
    glClearColor(1.0f, 0.5f, 0.5f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glBindVertexArray(VAO); // Bind the VAO we want to draw from
    glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_INT, 0); // Issue the draw call

    glfwSwapBuffers(window);
    glfwPollEvents();
}</code></pre><ul><li><strong>glBindVertexArray</strong> makes sure the correct VAO is bound so OpenGL knows which vertex data and configuration to use. </li><li><strong>glDrawElements</strong> tells OpenGL to draw 3 indices from the index buffer using triangles. The type <code>GL_UNSIGNED_INT</code> must match the type used in your index buffer. </li></ul></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Black Triangle</h5><div class="row align-items-center"><div class="col-md-2 text-center"><img src="`+rm+`" class="img-fluid" style="max-height:150px;" alt="Black Triangle"></div><div class="col-md-8"><p class="card-text"> A common issue in OpenGL rendering is a triangle (or mesh) appearing black or not appearing at all. This usually happens when no shader program is bound before issuing a draw call. In modern OpenGL, shaders are mandatory without them, OpenGL doesn&#39;t know how to process vertex data or what color to assign to fragments. To fix this, a shader will need to be created, compiled, and used before rendering. </p></div></div></div></div></div></div></div></section><hr><section id="shaders" class="py-3"><div class="container"><h2 class="mb-4 text-center">Shaders</h2><div class="row g-4 justify-content-center"><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Shader Overview</h5><p class="card-text"> Shaders are small programs written in GLSL (OpenGL Shading Language) that run on the GPU. They control how vertices and fragments (pixels) are processed and rendered. Modern OpenGL requires shaders for rendering, replacing the fixed-function pipeline with a programmable one. At minimum, a vertex shader and a fragment shader are needed to render objects. </p><p class="card-text"> OpenGL also supports other types of shaders such as geometry, tessellation, and compute shaders. However, these are more advanced and beyond the scope of this project. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Shader</h5><p class="card-text"> The vertex shader processes each vertex&#39;s data individually. It transforms 3D coordinates into 2D screen space, typically applying model, view, and projection transformations. You can also pass data like normals and texture coordinates to the next stage in the pipeline via outputs. It&#39;s the first programmable stage in the rendering pipeline. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Fragment Shader</h5><p class="card-text"> The fragment shader runs for each fragment (screen pixel) generated after rasterization. It determines the final color of a pixel, often using lighting calculations, texture sampling, and blending. This is where most visual effects like shading, fog, and highlights are applied. </p></div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Shader Uniforms</h5><p class="card-text"> Uniforms are global GLSL variables that remain constant throughout a draw call. They pass data from the CPU to the GPU such as transformation matrices, lighting parameters, and material properties. Unlike attributes or varyings, uniforms do not change per vertex or per fragment, making them ideal for consistent rendering settings. </p></div></div></div><div class="col-md-12"><h3 class="text-center mb-4">Shader Implementation</h3><div class="row g-4"><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Shader</h5><p> Vertex data defines the positions of points in 3D space. These positions represent the geometry of the object being rendered. Each vertex typically contains attributes such as position, color, normal, or texture coordinates. </p><pre class="language-cpp"><code>float vertices[] = {
    // Positions       // Colors
    -0.5f, -0.5f, 0.0f,  1.0f, 0.0f, 0.0f,  // bottom left, red
     0.5f, -0.5f, 0.0f,  0.0f, 1.0f, 0.0f,  // bottom right, green
     0.0f,  0.5f, 0.0f,  0.0f, 0.0f, 1.0f   // top, blue
};</code></pre><p> Since each vertex now contains 6 floats, 3 for position and 3 for color, the buffer must define two vertex attributes using <code>glVertexAttribPointer</code> and <code>glEnableVertexAttribArray</code>. </p><pre class="language-cpp"><code>// Position attribute (location = 0)
glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);

// Color attribute (location = 1)
glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
glEnableVertexAttribArray(1);
</code></pre><p> In the vertex shader, each attribute must be bound to a <code>layout(location = X)</code>. This location corresponds to the order in the vertex buffer. The layout directive tells the GPU which parts of the input vertex data map to which variables. </p><ul><li><code>layout(location = 0)</code> matches the position attribute in the vertex shader. </li><li><code>layout(location = 1)</code> matches the color attribute in the vertex shader. </li><li><code>6 * sizeof(float)</code> is the stride, because each vertex consists of 6 floats total. </li><li><code>(void*)0</code> starts reading position from the beginning of each vertex. </li><li><code>(void*)(3 * sizeof(float))</code> starts reading color after the position (i.e., offset by 3 floats). </li></ul><pre class="language-glsl"><code>#version 460 core

layout(location = 0) in vec3 aPos;   // Position
layout(location = 1) in vec3 aColor; // Color
</code></pre><p> The <code>layout(location = 0)</code> means this variable receives the first group of values from each vertex (position: 3 floats), and <code>layout(location = 1)</code> receives the second group (color: 3 floats). The memory layout in the GPU buffer must match this exactly—if the vertex buffer stores position followed by color, the shader must read them in that order using matching locations. </p><pre class="language-glsl"><code>// Shader Outputs and Main Function
out vec3 vertexColor;

void main()
{
    gl_Position = vec4(aPos, 1.0);
    vertexColor = aColor;
}
</code></pre><p> The directive <code>#version 460 core</code> specifies that this shader uses version 4.60 of the OpenGL Shading Language, which corresponds to OpenGL 4.6. This version includes the most recent features and enhancements to GLSL, such as better support for compute shaders, atomic operations, and more advanced types and functions. </p><p> The <code>core</code> keyword indicates the shader should exclude legacy or deprecated GLSL features, enforcing a modern and forward-compatible coding style. </p><p> The <code>main()</code> function in a vertex shader is the entry point where each input vertex is processed. The core task is to compute <code>gl_Position</code>, which tells the GPU where on the screen the vertex should appear after transformation to clip space. </p><p> The line <code>gl_Position = vec4(aPos, 1.0);</code> takes the 3D position input and expands it into a 4D homogeneous coordinate, as required by the graphics pipeline. </p><p> The line <code>vertexColor = aColor;</code> stores the input color in an <code>out</code> variable. In GLSL, <code>out</code> variables from the vertex shader are automatically passed as <code>in</code> variables to the fragment shader in the rasterization stage. </p><p> During rasterization, the GPU linearly interpolates <code>vertexColor</code> between vertices to produce a smooth gradient across the surface of the triangle. This interpolated value becomes an <code>in</code> variable in the fragment shader. </p><p> This mechanism allows the fragment shader to use smoothly varying data for per-pixel calculations such as color. </p></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Fragment Shader</h5><p> While the vertex shader processes individual vertices, the fragment shader runs for each pixel (fragment) that a primitive (e.g., triangle) covers on the screen. Its main role is to compute the final color of each pixel. </p><pre class="language-glsl"><code>#version 460 core

in vec3 vertexColor;       // Color from vertex shader
out vec4 FragColor;        // Final output color of the pixel

void main()
{
    FragColor = vec4(vertexColor, 1.0); // Fragement Color as Vertex Color
}</code></pre><p> The <code>in vec3 vertexColor;</code> receives data from the vertex shader. Since this value is interpolated across the surface of the triangle, each fragment (pixel) receives a smoothly blended color based on the three vertex values. </p><p> The <code>out vec4 FragColor;</code> is the required output that determines what color gets written to the screen or framebuffer for the current fragment. It must be a 4-component vector: red, green, blue, and alpha (opacity). </p><p> In this example, the fragment shader takes the interpolated <code>vertexColor</code> and outputs it as-is, with an alpha value of 1.0 (fully opaque). This results in a gradient effect when the triangle has different colors at each vertex, thanks to GPU interpolation. </p><p> The connection between the vertex and fragment shaders is based on matching variable names and types, where the vertex shader declares <code>out vec3 vertexColor;</code> and the fragment shader declares <code>in vec3 vertexColor;</code>. This is how color or other per-fragment data is passed down the graphics pipeline. </p></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Uniforms</h5><p> Uniforms are global GLSL variables whose values remain constant for all processed vertices or fragments during a single draw call. They are commonly used to pass data like transformation matrices, lighting parameters, or any other values from your application to shaders. </p><p> Unlike vertex attributes, uniforms cannot be changed per-vertex but instead provide a way to communicate values that apply across the entire draw. </p><h6>Shader code</h6><p> The keyword <code>uniform</code> declares a global GLSL variable whose value is set from the application (CPU) side. It is read-only inside the shader and remains constant for all processed vertices or fragments during a single draw call. </p><pre class="language-glsl"><code>uniform float time;</code></pre><h6>Application code:</h6><p><code>glGetUniformLocation</code> retrieves the location/index of the uniform variable inside the shader program. Then <code>glUniform1f</code> uploads the float value to that uniform, there are a few different types, but i wont go over them all. Make sure to call <code>glUseProgram</code> before setting uniform values to ensure the correct shader program is active. This allows for the changing of the uniform values each frame or draw call. </p><pre class="language-cpp"><code>glUseProgram(shaderProgram); // Bind the shader

GLint location = glGetUniformLocation(shaderProgram, &quot;time&quot;); // Get the location of the uniform variable in the shader
glUniform1f(location, 1.0f); // Set the value of the uniform variable
</code></pre><p>Uniforms will become important later on when working with a camera</p></div></div></div><div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Full Shader Code</h5><p>Both vertex and fragment shader defines.</p><pre class="language-cpp"><code>const char* vertexShaderSource = R&quot;glsl(
#version 460 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;

out vec3 vertexColor;

void main()
{
    gl_Position = vec4(aPos, 1.0);
    vertexColor = aColor;
}
)glsl&quot;;

const char* fragmentShaderSource = R&quot;glsl(
#version 460 core
in vec3 vertexColor;
out vec4 FragColor;

void main()
{
    FragColor = vec4(vertexColor, 1.0);
}
)glsl&quot;;
</code></pre><p>Now the compilation and linking of the shaders into a program</p><p>First, create and compile the vertex shader:</p><pre class="language-cpp"><code>GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vertexShader, 1, &amp;vertexShaderSource, nullptr);
glCompileShader(vertexShader);</code></pre><p> - <code>glCreateShader(GL_VERTEX_SHADER)</code> creates a new vertex shader object.<br> - <code>glShaderSource</code> sets the source code of the shader from the string <code>vertexShaderSource</code>.<br> - <code>glCompileShader</code> compiles the shader source code into a binary executable that the GPU can use. </p><p>Next, create and compile the fragment shader:</p><pre class="language-cpp"><code>GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fragmentShader, 1, &amp;fragmentShaderSource, nullptr);
glCompileShader(fragmentShader);</code></pre><p> - <code>glCreateShader(GL_FRAGMENT_SHADER)</code> creates a fragment shader object.<br> - <code>glShaderSource</code> assigns the fragment shader source code.<br> - <code>glCompileShader</code> compiles the fragment shader. </p><p>Then, create a shader program, attach both shaders, and link them:</p><pre class="language-cpp"><code>GLuint shaderProgram = glCreateProgram();
glAttachShader(shaderProgram, vertexShader);
glAttachShader(shaderProgram, fragmentShader);
glLinkProgram(shaderProgram);</code></pre><p> - <code>glCreateProgram</code> creates a program object that will link the shaders.<br> - <code>glAttachShader</code> attaches the compiled vertex and fragment shaders to the program.<br> - <code>glLinkProgram</code> links the shaders into a complete GPU executable program. </p><p> Finally, make sure to delete the individual shader objects since they are no longer needed after linking </p><pre class="language-cpp"><code>glDeleteShader(vertexShader);
glDeleteShader(fragmentShader);</code></pre><p> Once linked, the shaders are part of the program object, so the standalone shader objects can be deleted to free resources. and then the shader program can be bound and used </p><pre class="language-cpp"><code>glUseProgram(shaderProgram); // Bind the Shader Program to use

glBindVertexArray(VAO); // Bind the VAO we want to draw from
glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_INT, 0); // Issue the draw call
</code></pre><p> This shader pipeline moves vertex attributes (like position and color) through the vertex shader, interpolates them across the triangle&#39;s surface, and then renders the final color in the fragment shader. </p><h6>Additional Notes:</h6><ul><li> Its good practise to always check for shader compile and link errors using <code>glGetShaderiv</code> and <code>glGetProgramiv</code>. </li><li> Shader source are usually to be loaded from external files instead of hardcoded strings. </li><li> Make sure to enable the correct vertex attribute layout in your VAO/VBO setup. </li></ul><p>With that a colored triangle should now be visible</p><div class="col-md-2 text-center"><img src="`+sm+'" style="max-height:300px;" alt="Black Triangle"></div></div></div></div></div></div></div></div></section><hr>',7)),u("section",Wm,[u("div",zm,[n[21]||(n[21]=u("h2",{class:"mb-4 text-center"},"Code so far",-1)),u("div",Hm,[u("div",Xm,[u("div",Ym,[u("div",Km,[u("pre",Qm,[u("code",null,yt(tt(pm)),1)])])])])])])]),n[36]||(n[36]=mt(`<hr><section id="depthtesting" class="py-3"><div class="container"><h2 class="mb-4 text-center">Depth Testing</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Depth Testing Overview</h5><p class="card-text"> Depth testing is a graphics rendering technique used to determine which objects, or parts of objects, are visible in a 3D scene. When multiple fragments overlap on the screen, the depth buffer stores their distance from the camera. Only the fragment closest to the viewer (with the lowest depth value) is rendered, preventing objects behind others from being drawn. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Depth Testing Modes</h5><p class="card-text"> Depth testing modes define how incoming fragment depths are compared with existing values in the depth buffer. Common modes include <code>GL_LESS</code> (passes if incoming depth is less), <code>GL_EQUAL</code> (passes if equal), and <code>GL_ALWAYS</code> (always passes). The mode chosen affects visual layering and whether hidden surfaces are correctly culled, the default for OpenGL is <code>GL_LESS</code>. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Depth Testing Example</h5><p class="card-text"> Depth testing needs to be enabled so OpenGL starts checking fragment depths during rendering. Setting the depth function to <code>GL_LESS</code>, which is also the default, means fragments closer to the camera will overwrite those farther away. </p><pre class="bg-light p-3 rounded"><code class="language-cpp">glEnable(GL_DEPTH_TEST);
glDepthFunc(GL_LESS);
</code></pre><p class="card-text"> With depth testing enabled, clearing the depth buffer each frame using <code>GL_DEPTH_BUFFER_BIT</code> is essential. It resets the stored depth information so old depth values don&#39;t interfere with rendering the new frame. Without clearing the depth buffer, depth comparisons become invalid, causing visual artifacts such as incorrect occlusion of objects. Forgetting to include <code>GL_DEPTH_BUFFER_BIT</code> in the <code>glClear</code> call can cause objects not to be drawn correctly. </p><pre class="bg-light p-3 rounded"><code class="language-cpp">glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
</code></pre></div></div></div></div></div></section><hr>`,3)),u("section",Jm,[u("div",Zm,[n[25]||(n[25]=u("h2",{class:"mb-4 text-center"},"Camera",-1)),u("div",ev,[n[24]||(n[24]=mt(`<div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Camera Overview</h5><p class="card-text"> The camera in 3D graphics is like a virtual eye that looks at the scene. It decides where you are looking from, where you are looking at, and how you see things. Like a real camera, it has a position and direction. The camera turns the 3D world into the 2D picture you see on the screen. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Perspective Camera</h5><p class="card-text"> A perspective camera shows things like our eyes do: objects farther away look smaller, which creates a feeling of depth. It uses a math method to shrink objects based on how far they are, making the scene look realistic. This is often used in 3D games and simulations. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Orthographic Camera</h5><p class="card-text"> An orthographic camera shows objects without making them smaller or bigger based on distance. This means everything keeps the same size no matter how far away it is. It creates a flat look, useful for technical drawings or 2D games where size and shape need to stay exact. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">What are Matrices</h5><p class="card-text"> Matrices are grids of numbers (usually 4x4) used to move, rotate, or resize objects. They help change points from one space to another, like from an object&#39;s own space to the world space or the screen. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Projection Matrix</h5><p class="card-text"> The projection matrix changes 3D points into 2D points you can draw on the screen. It controls if the view looks like it has depth (perspective) or looks flat (orthographic). It also decides what parts of the scene you can see and how far away things are shown. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">View Matrix</h5><p class="card-text"> The view matrix represents where the camera is and which way it faces. It moves and turns the whole scene so it looks like the camera is at the center, looking forward. This lets the scene be drawn from the camera&#39;s point of view. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Model Matrix</h5><p class="card-text"> The model matrix controls where and how an object is placed in the world. It moves, rotates, or resizes the object from its own local space into the shared world space. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Clip Space</h5><p class="card-text"> Clip space is the area after applying the projection but before final processing. It defines which parts of the scene will be visible and which parts will be cut off or hidden. </p></div></div></div><div class="col-md-12"><h3 class="text-center mb-4">Camera Implementation</h3><div class="row g-4"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Vertex Shader Changes</h5><p class="card-text"> To properly render 3D objects in a scene, the model, view and projection matrices need to be applied. These are passed into the shader as uniforms. The final vertex position is calculated by multiplying it all together <code>gl_Position = projection * view * model * vec4(aPos, 1.0);</code>. This transforms the vertex from local object space all the way to clip space, ensuring it appears correctly on screen. </p><p class="card-text"> The order of matrix multiplication matters. In the expression <code>gl_Position = projection * view * model * vec4(aPos, 1.0);</code>, the transformations are applied right to left: the vertex is first transformed by the <code>model</code> matrix (moving it into world space), then by the <code>view</code> matrix (placing it relative to the camera), and finally by the <code>projection</code> matrix (converting it into clip space for rendering). Changing this order will lead to incorrect results. </p><p class="card-text">Code:</p><pre class="language-glsl"><code>#version 460 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;

out vec3 vertexColor;

uniform mat4 model;       // Model transformation
uniform mat4 view;        // View (camera) transformation
uniform mat4 projection;  // Projection transformation

void main()
{
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    vertexColor = aColor;
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Adding in the Camera</h5><p class="card-text"> For displaying a 3D scene correctly, Inside of the main loop the camera needs to be defined as the view matrix. This involves setting the camera&#39;s position, the point it looks at, and its world up direction. These settings create a view matrix using <code>glm::lookAt</code>, which helps transform the scene to match the camera&#39;s perspective. Next, a projection matrix is created with <code>glm::perspective</code>, which defines how the 3D world is projected onto the 2D screen, taking into account the field of view and screen size. Finally, these matrices are sent to the shader so the graphics pipeline can transform each vertex properly, making sure the scene appears realistic and in the right place. </p><p class="card-text">Code:</p><pre class="language-cpp"><code>glm::vec3 cameraPos = glm::vec3(0.0f, 10.0f, 15.0f);
glm::vec3 cameraTarget = glm::vec3(0.0f, 0, 0.0f);
glm::vec3 cameraUp = glm::vec3(0.0f, 1.0f, 0.0f);

// looks at the target position from camera&#39;s position
glm::mat4 view = glm::lookAt(cameraPos, cameraTarget, cameraUp);

// properties for the camera, field of view, aspect ratio of screen and the clip planes
constexpr float fov = glm::radians(45.0f);
float aspectRatio = 1280.0f / 720.0f;
float nearPlane = 0.1f;
float farPlane = 100.0f;

// the projection
glm::mat4 projection = glm::perspective(fov, aspectRatio, nearPlane, farPlane);

// the uniform locations
GLuint viewLocation = glGetUniformLocation(shaderProgram, &quot;view&quot;);
GLuint projLocation = glGetUniformLocation(shaderProgram, &quot;projection&quot;);
GLuint modelLocation = glGetUniformLocation(shaderProgram, &quot;model&quot;);

// updates uniform locations
glUniformMatrix4fv(viewLocation, 1, GL_FALSE, glm::value_ptr(view));
glUniformMatrix4fv(projLocation, 1, GL_FALSE, glm::value_ptr(projection));
</code></pre><p class="card-text"> Each object in the scene can have its own model matrix, which controls its position, rotation, and scale within the world. </p><p class="card-text"> For example, a small floor quad can be scaled up by creating a scaling matrix with <code>glm::scale</code> and passing it to the shader via the <code>model</code> uniform. The model matrix can combine translation, rotation, and scaling to uniquely position and orient each object while using the same shader and view/projection setup. </p><pre class="language-cpp"><code>// Floor
{
    glBindVertexArray(VAO);
    glm::mat4 model = glm::scale(glm::mat4(1.0f), glm::vec3(10.0f)); // scale by 10x
    glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));

    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
}</code></pre></div></div></div></div></div>`,9)),u("div",tv,[u("div",nv,[u("div",rv,[n[22]||(n[22]=u("h5",{class:"card-title"},"Full Camera Code",-1)),n[23]||(n[23]=u("video",{controls:"",autoplay:"",loop:"",muted:"",width:"50%",style:{"border-radius":"8px"}},[u("source",{src:im,type:"video/mp4"}),ae(" Your browser does not support the video tag. ")],-1)),u("pre",sv,[u("code",null,yt(tt(gm)),1)])])])])])])]),n[37]||(n[37]=u("hr",null,null,-1)),u("section",iv,[u("div",av,[n[29]||(n[29]=u("h2",{class:"mb-4 text-center"},"Textures",-1)),u("div",ov,[n[28]||(n[28]=mt(`<div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Texture Overview</h5><p class="card-text"> Textures are 2D images applied to 3D surfaces to give them color, patterns, and visual detail. They can simulate materials like wood, metal, fabric, and more, enhancing the realism of 3D models without increasing geometric complexity. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Texture Units</h5><p class="card-text"> Texture units are slots in the GPU where textures are bound for use in shaders. By activating different texture units, a shader can sample multiple textures simultaneously, enabling effects like multitexturing, normal mapping, and detail blending. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Texture Samples</h5><p class="card-text"> Texture sampling refers to how color values are fetched from a texture image during rendering. Techniques like nearest-neighbor and linear filtering determine how pixel colors are chosen or blended, affecting the final visual quality, especially when textures are scaled. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Texture Wrapping</h5><p class="card-text"> Wrapping determines how textures behave when the UV coordinates fall outside the 0–1 range. Common modes include repeat (tiling), clamp to edge (stretching edge pixels), and mirrored repeat (alternating tiles in reverse). </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">UV Coordinates</h5><p class="card-text"> UV coordinates map points on a 3D model to points on a 2D texture. Each vertex in a model has a (U, V) pair that tells the renderer which part of the texture to sample, enabling precise control over how the image is projected. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body d-flex flex-column"><h5 class="card-title">Advanced Texture Types</h5><p class="card-text"> Modern rendering pipelines use various specialized textures for different effects. Examples include normal maps for surface detail, specular maps for shininess, ambient occlusion maps for shadows, and emissive maps for glowing areas. These help simulate realistic materials and lighting without extra geometry. </p></div></div></div><div class="col-md-12"><h3 class="text-center mb-4">Texture Implementation</h3><div class="row g-4"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Creating a Texture</h5><p class="card-text"> Textures are created in several stages loading the image data, creating the texture object, setting texture parameters, and uploading the data to the GPU. </p><p class="card-text"> The UV coordinates specify how the texture image is mapped onto the quad. They range from <code>0.0</code> to <code>1.0</code>, covering the entire texture from bottom-left to top-right, </p><pre class="language-cpp"><code>// Floor vertices: positions (x, y, z), colors (r, g, b), and UV coordinates (u, v)
float floorVertices[] = {
    // Positions        // Colors (gray)   // UVs
    -0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 0.0f,  // bottom-left
     0.5f, 0.0f, -0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 0.0f,  // bottom-right
     0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  1.0f, 1.0f,  // top-right
    -0.5f, 0.0f,  0.5f,  0.5f, 0.5f, 0.5f,  0.0f, 1.0f   // top-left
};

unsigned int floorIndices[] = {
    0, 1, 2,
    2, 3, 0
};
</code></pre><pre class="language-cpp"><code>// Load image with stb_image
int width, height, channels;
unsigned char* data = stbi_load(&quot;assets/texture.png&quot;, &amp;width, &amp;height, &amp;channels, 0);
</code></pre><p class="card-text"> This stage uses the stb_image library to read the image file from disk into memory. The variables <code>width</code>, <code>height</code>, and <code>channels</code> hold the image dimensions and number of color channels, while <code>data</code> points to the raw pixel data. </p><pre class="language-cpp"><code>// Generate texture object
GLuint texture;
glGenTextures(1, &amp;texture);
glBindTexture(GL_TEXTURE_2D, texture);
</code></pre><p class="card-text"> This stage generates a new texture ID and binds it as the current 2D texture. Binding means subsequent texture commands affect this texture until another is bound. </p><pre class="language-cpp"><code>// Set wrapping and filtering parameters
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
</code></pre><p class="card-text"> Texture parameters control how the texture behaves during sampling. Wrapping determines how texture coordinates outside the [0,1] range are handled (here, repeated). Filtering defines how pixels are sampled when scaling (linear filtering smooths the result, mipmapping improves performance and quality on minification). </p><pre class="language-cpp"><code>// Upload texture data
if (data != nullptr) {
  GLenum format = (channels == 4) ? GL_RGBA : GL_RGB;
  glTexImage2D(GL_TEXTURE_2D, 0, format, width, height, 0, format, GL_UNSIGNED_BYTE, data);
  stbi_image_free(data);
} else {
  // handle error loading texture
}

glBindTexture(GL_TEXTURE_2D, 0);
</code></pre><p class="card-text"> Here the image data is sent to the GPU using <code>glTexImage2D</code>, specifying format and dimensions. Making sure to free image data after its used the data loaded successfully free the image data after use. data and unbind the texture. </p><p class="card-text"> Additional changes for shaders:<br><code>layout (location = 2) in vec2 aUV;</code><br> Adds a vertex attribute for texture coordinates provided per vertex.<br><br><code>out vec2 uv;</code><br> Declares an output variable in the vertex shader to pass interpolated UVs to the fragment shader.<br><br><code>uv = aUV;</code><br> Assigns the incoming texture coordinates to the output variable for interpolation.<br><br><code>in vec2 uv;</code><br> Receives the interpolated texture coordinates as input in the fragment shader.<br><br><code>uniform sampler2D textureSampler;</code><br> Declares a texture sampler uniform in the fragment shader linked to the bound texture.<br><br><code>vec3 color = texture(textureSampler, uv).rgb;</code><br> Samples the texture color at the given UV coordinates.<br><br><code>FragColor = vec4(color, 1.0);</code><br> Outputs the sampled color with full opacity as the final fragment color. </p><p class="card-text"> Together, these additions enable your shaders to map the 2D texture image onto 3D geometry using UV coordinates. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Binding Texture and Setting Uniform</h5><p class="card-text"> After creating and configuring your texture, you need to bind it to a texture unit and upload the corresponding uniform sampler to your shader program before drawing. </p><pre class="language-cpp"><code>glActiveTexture(GL_TEXTURE0);
glBindTexture(GL_TEXTURE_2D, texture);

GLuint textureLocation = glGetUniformLocation(shaderProgram, &quot;textureSampler&quot;);
glUniform1i(textureLocation, 0);
</code></pre><p class="card-text"><code>glActiveTexture(GL_TEXTURE0);</code> sets the active texture unit to texture unit 0.<br><code>glBindTexture(GL_TEXTURE_2D, texture);</code> binds your texture object to the active unit.<br><code>glGetUniformLocation(shaderProgram, &quot;textureSampler&quot;);</code> retrieves the location of the sampler uniform from your compiled shader program.<br><code>glUniform1i(textureLocation, 0);</code> sets the uniform sampler to use texture unit 0.<br></p><p class="card-text"> This ensures your shader&#39;s <code>sampler2D textureSampler</code> uses the correct texture bound to unit 0 when rendering. </p></div></div></div></div></div>`,7)),u("div",lv,[u("div",cv,[u("div",dv,[n[26]||(n[26]=u("h5",{class:"card-title"},"Full Texture Code",-1)),n[27]||(n[27]=u("video",{controls:"",autoplay:"",loop:"",muted:"",width:"50%",style:{"border-radius":"8px"}},[u("source",{src:am,type:"video/mp4"}),ae(" Your browser does not support the video tag. ")],-1)),u("pre",uv,[u("code",null,yt(tt(mm)),1)])])])])])])]),n[38]||(n[38]=u("hr",null,null,-1)),u("section",fv,[u("div",hv,[n[33]||(n[33]=u("h2",{class:"mb-4 text-center"},"Lighting",-1)),u("div",pv,[n[32]||(n[32]=mt(`<div class="col-md-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Creating Lighting</h5><p class="card-text"> Lighting in 3D graphics simulates how light sources illuminate objects in a scene. It involves calculating light intensity, color, direction, and how surfaces respond to light based on material properties such as diffuse and specular reflection. Proper lighting enhances realism by creating highlights, shadows, and shading that convey depth and shape. Common lighting models include directional, point, and spotlights, which are combined with shading techniques to produce the final lit appearance. </p><h5>Normals</h5><p class="card-text"> Normals in 3D graphics are vectors perpendicular to surfaces that describe their orientation. They are crucial for lighting calculations because they determine how light interacts with each surface. Normals influence how much light is reflected or absorbed at a point, enabling effects like shading, highlights, and shadows that give objects depth and realism. Typically, normals are unit vectors (length of 1) and can be specified per-vertex or per-face. </p><h5>Adding in Normals</h5><p class="card-text"> Normals are incorporated into vertex data alongside positions, colors, and UVs. Each vertex has an associated normal that is passed to the shaders. The GPU uses these normals to determine how light hits the surface, resulting in realistic lighting effects. Adding normals involves including them in the vertex layout and using them within lighting calculations, similar to other vertex attributes. </p><h5>Vertex Shader Changes</h5><p> Within the vertex shader, the normal vector <code>aNormal</code> is transformed by applying the inverse transpose of the model matrix: </p><pre class="language-cpp"><code>fragNormal = mat3(transpose(inverse(model))) * aNormal;</code></pre><p> This transformation ensures that normals maintain correct orientation after any scaling, rotation, or other transformations applied by the model matrix. Because normals represent directions perpendicular to surfaces, using the inverse transpose keeps them accurate, which is vital for proper lighting calculations. </p><h5>Fragment Shader Changes</h5><p>A uniform variable is introduced to provide the light position to the shader:</p><pre class="language-cpp"><code>uniform vec3 lightPos;</code></pre><p> The lighting calculations in the fragment shader&#39;s <code>main()</code> function proceed as follows: </p><pre class="language-cpp"><code>void main()
{
    vec3 color = texture(textureSampler, fragUV).rgb;

    vec3 normal = normalize(fragNormal);
    vec3 lightDir = normalize(lightPos - fragPosition);

    float diffIntensity = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diffIntensity * fragColor;

    vec3 finalColor = diffuse * color;

    FragColor = vec4(finalColor, 1.0);
}</code></pre><p> The lighting logic calculates how much light a surface receives at each pixel to determine its final color. It begins by sampling the texture color using the UV coordinates (<code>fragUV</code>). The surface normal (<code>fragNormal</code>) is normalized to ensure accurate directional calculations.<br><br> Next, the direction vector from the fragment position (<code>fragPosition</code>) to the light source (<code>lightPos</code>) is computed and normalized. This vector represents the direction from the surface point toward the light.<br><br> The dot product between the normalized surface normal and the light direction gives the diffuse light intensity (<code>diffIntensity</code>). This value indicates how directly the surface faces the light source and is clamped to zero to avoid negative lighting.<br><br> The diffuse light intensity scales the vertex color (<code>fragColor</code>) to produce the diffuse lighting effect, simulating how light scatters on rough surfaces.<br><br> Finally, the diffuse lighting is combined with the sampled texture color to produce the <code>finalColor</code>, which is output as the fragment&#39;s final shaded color (<code>FragColor</code>). This process creates realistic shading by taking surface orientation and light direction into account. </p></div></div></div>`,1)),u("div",gv,[u("div",mv,[u("div",vv,[n[30]||(n[30]=u("h5",{class:"card-title"},"Full Lighting Code",-1)),n[31]||(n[31]=u("video",{controls:"",autoplay:"",loop:"",muted:"",width:"50%",style:{"border-radius":"8px"}},[u("source",{src:td,type:"video/mp4"}),ae(" Your browser does not support the video tag. ")],-1)),u("pre",bv,[u("code",null,yt(tt(vm)),1)])])])])])])]),n[39]||(n[39]=mt('<hr><section id="conclusion" class="py-3"><div class="container"><h2 class="mb-4 text-center">Project Conclusion</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Highlights &amp; Successes</h5><p class="card-text"> I built a basic 3D graphics pipeline using GLFW, GLAD, and OpenGL. It handles buffer objects, camera control, shaders, textures, and diffuse lighting. The research part was huge — tons of great resources helped me get the fundamentals down. Even though this was a 3D project, the techniques can be applied to 2D or 2.5D too, mixing 3D and 2D elements. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Lessons &amp; Improvements</h5><p class="card-text"> One big lesson was to always have proper error handling - I lost a lot of time trying to figure out why a corrupt image wasn&#39;t loading. Also, making sure assets are in the right place and the correct format is key. </p><p class="card-text"> For improvements, I want to add a layer of abstraction to make the code easier to reuse and extend. Loading models with something like Assimp instead of hardcoding data would help a lot. And eventually, I&#39;d like to try out more advanced stuff like physically based rendering (PBR). </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Takeaways</h5><p class="card-text"> This project really shows me how important every stage of the pipeline is for rendering 3D graphics. Managing geometry and lighting right sets the stage for more advanced effects later. Taking a clear, step-by-step iterative approach to coding the project really helped me understand the processes more. I think for future exploration outside of my game im making will be needed for more advanced concepts. </p></div></div></div></div></div></section>',2))],64))}}),yv={},wv={class:"py-5 pb-3",id:"about"};function xv(e,t){return _t(),xt("section",wv,t[0]||(t[0]=[u("div",{class:"container"},[u("div",{class:"mb-3"},[u("h1",{class:"display-4"},"Portfolio Site"),u("p",{class:"lead"}," A portfolio project showcasing my work, technology stack, and hands-on learning with web frameworks. ")]),u("div",{class:"alert alert-info mt-3 text-center",role:"alert"},[ae(" If you're interested in the technical specifics of the project, "),u("a",{href:"portfolio_deep_dive",class:"alert-link"},"click here"),ae(". ")]),u("div",{class:"row"},[u("div",{class:"col-lg-6"},[u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Project Purpose"),u("ul",{class:"list-unstyled"},[u("li",null,"Create a personal portfolio to showcase projects and skills"),u("li",null,"Strengthen understanding of modern web development using Vue and TypeScript"),u("li",null,"Build responsive, accessible, and user-friendly interfaces"),u("li",null,"Improve structuring of modular and maintainable front-end code"),u("li",null,"Explore and improve my UI/UX skills")])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Languages Used"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-html5-plain colored me-2 dev-icon"}),ae(" HTML ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-css3-plain colored me-2 dev-icon"}),ae(" CSS ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-typescript-plain colored me-2 dev-icon"}),ae(" TypeScript ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-javascript-plain colored me-2 dev-icon"}),ae(" JavaScript ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Frameworks & Software"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-vuejs-plain colored me-2 dev-icon"}),ae(" Vue ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-bootstrap-plain colored me-2 dev-icon"}),ae(" bootstrap ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-vscode-plain colored me-2 dev-icon"}),ae(" Visual Studio Code ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-github-plain colored me-2 dev-icon"}),ae(" GitHub ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-git-plain colored me-2 dev-icon"}),ae(" Git ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Source Code"),u("p",null,"Explore the full source code on GitHub."),u("a",{href:"https://github.com/rusjaell/vue-website",target:"_blank",class:"btn btn-primary mt-auto"},"View Source on GitHub")])])]),u("div",{class:"col-lg-6"},[u("section",{id:"demo"},[u("div",{class:"card shadow-sm h-100"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Demo"),u("p",{class:"text-center"},"This website is the demo.")])])])])])],-1)]))}const Av=jn(yv,[["render",xv]]),Ev=cn({__name:"PortfolioSiteDeepDive",setup(e){return jr(()=>{wn.highlightAll()}),Mr(()=>{wn.highlightAll()}),(t,n)=>(_t(),xt(bt,null,[Qe(Ns),n[0]||(n[0]=mt('<section class="py-3" id="about"><div class="container"><h1 class="display-4 mb-1">Portfolio Site</h1><p class="lead mb-2"> A portfolio project showcasing my projects, technology stack, and hands-on learning. </p><p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div></section><hr><section id="framework-concepts" class="py-3"><div class="container"><h2 class="mb-4 text-center">Frontend Framework Concepts</h2><div class="row g-4"><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Components</h5><p class="card-text"> Reusable building blocks that encapsulate UI structure, behavior, and styling to compose applications. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">State Management</h5><p class="card-text"> Handling and updating data that controls the behavior and rendering of components dynamically. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Props / Inputs</h5><p class="card-text"> Passing data and configuration from parent components to children to create flexible and dynamic interfaces. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Handling</h5><p class="card-text"> Responding to user actions and system events to trigger behavior changes or data updates. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Lifecycle Methods</h5><p class="card-text"> Hooks or methods that run during key stages of a component’s existence, like creation, update, and destruction. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Routing</h5><p class="card-text"> Managing navigation within the application, enabling transitions between different views or pages. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Directives / Conditional Rendering</h5><p class="card-text"> Dynamically showing, hiding, or looping over UI elements based on data or application state. </p></div></div></div><div class="col-md-6 col-lg-3"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Data Binding</h5><p class="card-text"> Synchronizing data between UI and application logic, either one-way or two-way binding. </p></div></div></div></div></div></section>',3))],64))}}),Tv="/understanding_asp/unit_tests.png",Sv="/understanding_asp/middleware.png",Lv={},Cv={class:"py-5 pb-3",id:"about"};function Ov(e,t){return _t(),xt("section",Cv,t[0]||(t[0]=[u("div",{class:"container"},[u("div",{class:"mb-3"},[u("h1",{class:"display-4"},"Understanding ASP.NET"),u("p",{class:"lead"},"A project for learning about the core features of ASP.NET.")]),u("div",{class:"alert alert-info mt-3 text-center",role:"alert"},[ae(" If you're interested in the technical specifics of the project, "),u("a",{href:"understanding_asp_deep_dive",class:"alert-link"},"click here"),ae(". ")]),u("div",{class:"row"},[u("div",{class:"col-lg-6"},[u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Project Purpose"),u("ul",{class:"list-unstyled"},[u("li",null,"Gain a deeper understanding of ASP.NET"),u("li",null,"Explore the core features of ASP.NET"),u("li",null,"Develop and implement core features"),u("li",null,"Strengthen expertise in C# ASP.NET")])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Languages Used"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-csharp-plain colored me-2 dev-icon"}),ae(" C# ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Frameworks & Software"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-dotnetcore-plain colored me-2 dev-icon"}),ae(" ASP.NET ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-dotnetcore-plain colored me-2 dev-icon"}),ae(" xUnit ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-visualstudio-plain colored me-2 dev-icon"}),ae(" Visual Studio ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-github-original colored me-2 dev-icon"}),ae(" GitHub ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-git-plain colored me-2 dev-icon"}),ae(" Git ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Source Code"),u("p",null,"Explore the full source code on GitHub."),u("a",{href:"https://github.com/rusjaell/understanding-asp",target:"_blank",class:"btn btn-primary mt-auto"},"View Source on GitHub")])])]),u("div",{class:"col-lg-6"},[u("section",{id:"screenshots"},[u("div",{class:"card shadow-sm h-100"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Screenshots"),u("img",{src:Tv,alt:"Unit Tests",class:"img-fluid img-animation d-block mb-3"}),u("img",{src:Sv,alt:"Middleware",class:"img-fluid img-animation d-block mb-3"})])])])])])],-1)]))}const Pv=jn(Lv,[["render",Ov],["__scopeId","data-v-0c1fd18e"]]),Iv=cn({__name:"UnderstandingASPDeepDive",setup(e){return jr(()=>{wn.highlightAll()}),Mr(()=>{wn.highlightAll()}),(t,n)=>(_t(),xt(bt,null,[Qe(Ns),n[0]||(n[0]=mt(`<section class="py-3" id="about"><div class="container"><h1 class="display-4 mb-1">Understanding ASP.NET</h1><p class="lead mb-2">A project for learning about the core features of ASP.NET.</p><p class="mb-0"> This project introduces key concepts in ASP.NET Core, starting with configuring the WebApplication builder to set up essential services, middleware, routing, and security. <br> It explores minimal API patterns for quickly creating lightweight endpoints with integrated OpenAPI support for testing and documentation. <br> It briefly covers the more structured MVC approach, demonstrating how to implement controllers that utilize dependency injection to create scalable and maintainable APIs. <br> Overall, this provides a solid foundation in ASP.NET Core for building web services and applications. </p></div></section><hr><section id="introduction" class="py-3"><div class="container"><h2 class="mb-4 text-center">ASP.NET Introduction</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">What is ASP.NET</h5><p class="card-text"> ASP.NET is a modern, high-performance web framework for building scalable APIs and dynamic web applications. It provides powerful features like routing, controllers, model binding, validation, and middleware which makes it ideal for structured, maintainable, and secure application development. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Why Choose ASP.NET</h5><p class="card-text"> ASP.NET offers a comprehensive, modular platform with built-in support for core features such as dependency injection, authentication and authorization, configuration management, logging, and content negotiation. Designed for flexibility and performance, it enables rapid development of robust APIs with clean architecture and seamless integration of tools like Scalar/OpenAPI and other 3rd party tools. </p></div></div></div></div></div></section><hr><section id="introduction" class="py-3"><div class="container"><h2 class="mb-4 text-center">ASP.NET API</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The Builder</h5><p class="card-text"> The builder is the first step in starting an ASP.NET application. It prepares everything your app needs—like services, settings, and features—before the app runs. This setup ensures all parts work smoothly together when the app starts. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The App</h5><p class="card-text"> After setup by the builder, the app manages how user requests are handled. It configures the flow of requests through middleware, routes them to the correct handlers, and starts the web server to listen for incoming traffic. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Minimal API</h5><p class="card-text"> Minimal APIs provide a simple, lightweight way to build HTTP APIs with less code. They let you quickly define routes and handlers without the need for controllers or extra setup, making it easy to create small or microservices. </p><p class="card-text"> Minimal APIs are great for quick, simple services, while MVC provides a fuller framework suited for larger apps with complex UI. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Model-View-Controller (MVC)</h5><p class="card-text">MVC splits an app into three parts:<br></p><p class="card-text"><strong>Model:</strong> data and business logic.<br><strong>View:</strong> user interface.<br><strong>Controller:</strong> handles user input and updates Model and View.<br></p><p class="card-text"> This helps organize code and makes apps easier to manage and scale. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Blazor &amp; Razor Pages</h5><p class="card-text"><strong>Blazor</strong> allows building interactive web UIs with C# instead of JavaScript. It offers both server-side and client-side hosting models for modern web applications.<br><strong>Razor Pages</strong> is a simplified, page-focused framework built on ASP.NET Core MVC, designed for scenarios where page-based UI is preferred over full MVC complexity. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">OpenAPI</h5><p class="card-text"> OpenAPI is a specification for describing RESTful APIs in a standard, machine-readable format. It defines available endpoints, HTTP methods, parameters, request and response formats, and security. </p><p class="card-text"> This enables automatic generation of interactive API documentation, client SDKs, and server stubs, improving development speed and consistency between API providers and consumers. </p><p class="card-text"> In ASP.NET Core, OpenAPI support is typically added via tools like Swashbuckle, which generate API documentation and a user-friendly interface for exploring and testing endpoints. </p></div></div></div></div></div></section><hr><section id="introduction" class="py-3"><div class="container"><h2 class="mb-4 text-center">ASP.NET Code</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The Builder</h5><p class="card-text"> The first step is creating the builder, which sets up the application&#39;s configuration, logging, and dependency injection. Services needed by the app are registered via the builder, such as controllers or views. </p><pre class="language-csharp"><code>var builder = WebApplication.CreateBuilder(args);
// Register services here
builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
</code></pre><ul class="card-text"><li><code>AddControllers()</code> adds support for API controllers without views, ideal for Web APIs. </li><li><code>AddControllersWithViews()</code> adds support for controllers with Razor views, enabling full MVC with UI rendering. </li></ul></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Service Configuration</h5><p class="card-text"> Services such as authentication, database contexts, or MVC controllers are configured here, extending the app&#39;s capabilities through dependency injection. </p><pre class="language-csharp"><code>builder.Services.AddControllers();
builder.Services.AddAuthentication();
builder.Services.AddDbContext&lt;MyDbContext&gt;();</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Service Lifetimes: Scoped, Transient, and Singleton</h5><p class="card-text"> When registering custom services for dependency injection, ASP.NET Core supports three main lifetimes: </p><ul><li><strong>Transient:</strong> A new instance is created each time the service is requested. Ideal for lightweight, stateless services. </li><li><strong>Scoped:</strong> A single instance is created per client request (scope), and shared within that request. Useful for services that maintain state within a request. </li><li><strong>Singleton:</strong> A single instance is created and shared for the entire application lifetime. Suitable for stateless, thread-safe services. </li></ul><p class="card-text"> In the <code>AddTransient</code>, <code>AddScoped</code>, and <code>AddSingleton</code> methods, you typically specify two types: </p><ul><li> The service type (usually an interface or abstract class) which consumers request. </li><li> The implementation type (a concrete class) which the dependency injection container will instantiate. </li></ul><p class="card-text"> You can also register just a concrete class without an interface, like <code>builder.Services.AddTransient&lt;MyService&gt;();</code>. This means the container will provide that class directly when requested. </p><p class="card-text"> Using interfaces promotes loose coupling and easier testing, but registering concrete classes is valid and simpler for small or internal services. </p> Example: <pre class="language-csharp"><code>builder.Services.AddTransient&lt;IMyTransientService, MyTransientService&gt;();
builder.Services.AddScoped&lt;IMyScopedService, MyScopedService&gt;();
builder.Services.AddSingleton&lt;IMySingletonService, MySingletonService&gt;();</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The App</h5><p class="card-text"> After building, the <code>app</code> manages the entire lifecycle of web requests. It sets up the middleware pipeline, configures routing to determine how requests are handled, and ultimately starts the web server to listen for incoming traffic.<br><br> The <code>app.Run()</code> method starts the web application and blocks the calling thread, keeping the server alive and ready to process requests until the application is shut down. </p><pre class="language-csharp"><code>var app = builder.Build();
// configure middleware and routings
app.Run();</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Middleware</h5><p class="card-text"> Middleware components handle cross-cutting concerns such as security, logging, and request/response modifications in the pipeline before reaching endpoints. </p><pre class="language-csharp"><code>app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

// Custom middleware example
app.Use(async (context, next) =&gt;
{
    Console.WriteLine($&quot;Request URL: {context.Request.Path}&quot;);
    await next.Invoke();
});
</code></pre><ul class="card-text"><li><code>app.UseHttpsRedirection();</code> Automatically redirects HTTP requests to HTTPS to ensure secure communication. </li><li><code>app.UseAuthentication();</code> Enables authentication middleware that verifies user identity based on configured authentication schemes. </li><li><code>app.UseAuthorization();</code> Checks if an authenticated user has permission to access resources, enforcing authorization policies. </li><li><code>Custom Middleware (app.Use(...)):</code> This example middleware runs on every request, logs the requested URL path to the console, then calls <code>next.Invoke()</code> to pass control to the next middleware in the pipeline. </li></ul></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Middleware Order Importance</h5><p class="card-text"> The order of middleware in the request pipeline is crucial because each middleware component can modify the request and response or decide whether to pass control to the next middleware.<br><br> Middleware runs in the order they are added:<br> - Incoming requests pass through each middleware in sequence.<br> - After the response is generated, it travels back through the middleware in reverse order.<br><br> If middleware like <code>UseAuthentication()</code> is placed after <code>UseAuthorization()</code>, authorization won&#39;t work properly because the user won&#39;t be authenticated first.<br> Similarly, <code>UseHttpsRedirection()</code> should be early to ensure all traffic is secure before other middleware runs.<br><br> Correct ordering ensures security, logging, error handling, and other concerns are applied at the right stages of request processing. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Routing</h5><p class="card-text"> Routing maps incoming HTTP requests to endpoints like controllers, Razor pages, or minimal API handlers. ASP.NET Core supports full RESTful patterns and CRUD operations through these endpoints. </p><pre class="language-csharp"><code>app.MapControllers();
app.MapRazorPages();

app.MapGet(&quot;/weatherforecast&quot;, () =&gt;
{
    // Return weather forecast data
});</code></pre><ul class="card-text"><li><code>app.MapControllers()</code> connects attribute-routed MVC or API controllers for RESTful endpoints. </li><li><code>app.MapRazorPages()</code> maps Razor Pages for page-based routing.</li><li><code>app.MapGet()</code>, <code>app.MapPost()</code>, <code>app.MapPut()</code>, <code>app.MapDelete()</code> define minimal API endpoints for specific HTTP verbs. </li><li><code>app.Map()</code> maps a route to a custom middleware pipeline or endpoint for flexible request handling. </li></ul></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Third-Party NuGet Packages</h5><p class="card-text"> ASP.NET Core can integrate with third-party NuGet packages to extend functionality. For example, OpenAPI support can be added using packages like <code>Microsoft.AspNetCore.OpenApi</code>.<br><br> This adds automatic API documentation and an interactive UI for testing endpoints. </p><pre class="language-csharp"><code>// Register OpenAPI services
builder.Services.AddOpenApi();

// Map OpenAPI middleware endpoints
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}</code></pre><ul class="card-text"><li><code>AddOpenApi()</code> registers OpenAPI services for automatic documentation. </li><li><code>MapOpenApi()</code> maps the OpenAPI JSON endpoint and interactive UI routes, typically enabled in development only. </li></ul><p class="card-text"> This approach fits well with minimal APIs and the modern ASP.NET Core middleware pipeline. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Model Binding &amp; Validation</h5><p class="card-text"> ASP.NET Core automatically binds incoming HTTP request data to your controller action parameters and model objects. This process is known as <strong>Model Binding</strong>. </p><pre class="language-csharp"><code>// Simple parameter binding
[HttpGet]
public IActionResult GetById(int id) // id from route or query
{
    return Ok(id); // Returns HTTP 200 OK with the value in the response body
}

// Complex type binding from body
[HttpPost]
public IActionResult Register([FromBody] UserDTO dto)
{
    return Ok(dto.Name); // Returns HTTP 200 OK with the value in the response body
}

// Data Transfer Object for this example
public class UserDTO
{
    [Required]
    public string Name { get; set; }

    [Range(18, 100)]
    public int Age { get; set; }
}</code></pre><p class="card-text"> With the <code>[ApiController]</code> attribute, model validation is automatic — invalid models will return a <code>400 Bad Request</code> with details in the response. </p><p class="card-text"> You can also specify the binding source using attributes like: </p><ul><li><code>[FromQuery]</code> - binds from query string</li><li><code>[FromRoute]</code> - binds from route parameters</li><li><code>[FromBody]</code> - binds from JSON body</li><li><code>[FromForm]</code> - binds from form fields</li><li><code>[FromHeader]</code> - binds from HTTP headers</li><li><code>[FromServices]</code> - binds from dependency injection container</li></ul><p class="card-text"> Custom validation can be by by extending <code>ValidationAttribute</code>: </p><pre class="language-csharp"><code>public class EvenNumberAttribute : ValidationAttribute
{
    public override bool IsValid(object value) =&gt; value is int i &amp;&amp; i % 2 == 0;
}

public class CustomModel
{
    [EvenNumber]
    public int Value { get; set; }
}</code></pre><p class="card-text"> For full manual control (without <code>[ApiController]</code>), use: </p><pre class="language-csharp"><code>if (!ModelState.IsValid)
{
    return BadRequest(ModelState);
}</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Minimal API Example Breakdown</h5><p class="card-text"> This is a default ASP.NET Core minimal API project demonstrating a lightweight, concise way to build HTTP APIs with minimal ceremony. It sets up routing for a simple weather forecast API with OpenAPI support for automatic API documentation and testing. </p><p class="card-text"> Minimal APIs use direct route mapping methods like <code>MapGet</code>, allowing quick setup without controllers or extra abstractions. This approach is ideal for small or microservices, prototyping, or when you want maximum control and minimal overhead. </p><pre class="language-csharp"><code>// Create the WebApplication builder which sets up configuration, logging, and services
var builder = WebApplication.CreateBuilder(args);

// Register OpenAPI services (for automatic API documentation)
builder.Services.AddOpenApi();

var app = builder.Build(); // Build the app from the configured builder

// Conditionally enable OpenAPI only in development environment
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Maps the OpenAPI JSON
}

app.UseHttpsRedirection(); // Redirects all HTTP requests to HTTPS

// Sample data for weather summaries
var summaries = new[]
{
    &quot;Freezing&quot;, &quot;Bracing&quot;, &quot;Chilly&quot;, &quot;Cool&quot;, &quot;Mild&quot;, &quot;Warm&quot;,
    &quot;Balmy&quot;, &quot;Hot&quot;, &quot;Sweltering&quot;, &quot;Scorching&quot;
};

// Define a GET endpoint at /weatherforecast returning a 5-day weather forecast array
app.MapGet(&quot;/weatherforecast&quot;, () =&gt;
{
    var forecast = Enumerable.Range(1, 5).Select(index =&gt;
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),   // Date for the forecast day
            Random.Shared.Next(-20, 55),                          // Random temperature in Celsius
            summaries[Random.Shared.Next(summaries.Length)]      // Random summary text
        ))
        .ToArray();
    return forecast; // Return array of WeatherForecast records
})
.WithName(&quot;GetWeatherForecast&quot;); // Assigns a name to the endpoint

app.Run(); // Starts the web server and begins listening for HTTP requests

// Record type representing the weather forecast data model
internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF =&gt; 32 + (int)(TemperatureC / 0.5556); // Computed property for Fahrenheit temperature
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">MVC Example Breakdown</h5><p class="card-text"> This is a more structured ASP.NET Core MVC setup with controller-based routing, and OpenAPI support. Controllers and endpoints are automatically mapped at runtime using <code>MapControllers()</code>. </p><p class="card-text"> Unlike minimal APIs where routes like <code>MapGet</code> are defined manually, MVC uses <code>[Route]</code> attributes in controller classes and maps them dynamically using <code>MapControllers()</code>. This makes it ideal for larger applications with clear separation of concerns. </p><pre class="language-csharp"><code>var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">MVC Controller Example</h5><p class="card-text"> This controller is automatically discovered and mapped at runtime by <code>MapControllers()</code>, thanks to ASP.NET Core&#39;s built-in dependency injection and attribute-based routing. </p><div class="card-text"><ul><li><code>[ApiController]</code>: Enables automatic model binding, validation, and better error responses. </li><li><code>[Route]</code>: Determines how HTTP requests map to controller actions. </li></ul></div><pre class="language-csharp"><code>using Microsoft.AspNetCore.Mvc;

namespace ControllerAPI.Controllers;

[ApiController]
[Route(&quot;[controller]&quot;)]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        &quot;Freezing&quot;, &quot;Bracing&quot;, &quot;Chilly&quot;, &quot;Cool&quot;, &quot;Mild&quot;, &quot;Warm&quot;, &quot;Balmy&quot;, &quot;Hot&quot;, &quot;Sweltering&quot;, &quot;Scorching&quot;
    };

    private readonly ILogger&lt;WeatherForecastController&gt; _logger;

    public WeatherForecastController(ILogger&lt;WeatherForecastController&gt; logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = &quot;GetWeatherForecast&quot;)]
    public IEnumerable&lt;WeatherForecast&gt; Get()
    {
        return Enumerable.Range(1, 5).Select(index =&gt; new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}

public class WeatherForecast
{
    public DateOnly Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF =&gt; 32 + (int)(TemperatureC / 0.5556);

    public string? Summary { get; set; }
}
</code></pre></div></div></div></div></div></section><hr><section id="minimal-demo" class="py-3"><div class="container"><h2 class="mb-4 text-center">API Demo</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The Plan</h5><div class="card-text"> Build a user service that enables full CRUD operations with minimal api and a minimal api that logs requests to console and add in tests to verify everything works as intended. </div></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">User Service</h5><p class="card-text"> This is a mock service that simulates what a database or service API would be responsible for. Its purpose isn&#39;t to be production-ready but to demonstrate the functionality of the service in this demo. </p><p class="card-text"> The first part of the service is the <code>User</code> record, which serves as a data model defining the schema used within this context. Typically, this would represent a user&#39;s identity in some applications. </p><pre class="language-csharp"><code>public record User(int Id, string Username, string Email);</code></pre><p class="card-text"> Next comes an interface, which can have one or multiple concrete implementations. The purpose of this interface is to decouple the implementation from the consumer, allowing for flexibility. In this case, it clearly describes what the service can do. </p><pre class="language-csharp"><code>public interface IUserService
{
    List&lt;User&gt; GetAll();
    User? GetById(int id);
    User? Create(User user);
    bool Update(int id, User user);
    bool Delete(int id);
}</code></pre><p class="card-text"> Finally, the service itself implements a concrete solution for the interface. </p><pre class="language-csharp"><code>public sealed class MockUserService : IUserService
{
    private int _nextId = 1;
    private readonly List&lt;User&gt; _users = new List&lt;User&gt;();

    public List&lt;User&gt; GetAll() =&gt; _users;

    public User? GetById(int id) =&gt; _users.FirstOrDefault(user =&gt; user.Id == id);

    public User? Create(User user)
    {
        if (string.IsNullOrWhiteSpace(user.Username) || string.IsNullOrWhiteSpace(user.Email))
            return null;

        var nextId = _nextId++;
        var newUser = user with { Id = nextId };
        _users.Add(newUser);
        return newUser;
    }

    public bool Update(int id, User modifiedUser)
    {
        var index = _users.FindIndex(user =&gt; user.Id == id);
        if (index == -1)
            return false;

        var updated = modifiedUser with { Id = id };
        _users[index] = updated;
        return true;
    }

    public bool Delete(int id)
    {
        var user = GetById(id);
        if (user == null)
            return false;

        return _users.Remove(user);
    }
}</code></pre><p class="card-text"> This provides the basic CRUD operations for the <code>User</code> record using an list to simulate a database. </p><p class="card-text"> The <code>GetAll()</code> method returns all users currently stored. <code>GetById(int id)</code> retrieves a user by their unique ID, or returns <code>null</code> if no matching user is found. </p><p class="card-text"> The <code>Create(User user)</code> method validates the input to ensure the username and email are not empty, assigns a new unique ID, adds the user to the list, and returns the newly created user. </p><p class="card-text"> The <code>Update(int id, User modifiedUser)</code> method finds the user by ID and updates their details if the user exists, returning <code>true</code> on success or <code>false</code> otherwise. </p><p class="card-text"> Finally, the <code>Delete(int id)</code> method removes the user with the given ID from the list if found, returning <code>true</code> if the deletion was successful or <code>false</code> if the user did not exist. </p><pre class="language-csharp"><code>builder.Services.AddSingleton&lt;IUserService, MockUserService&gt;();</code></pre><p class="card-text"> This mock service is registered in the builder, allowing it to be injected and used wherever the <code>IUserService</code> interface is required.<br> In a real-world application, this could would be replaced with a real database/backed implementation without changing the dependent code but thats beyond this project&#39;s scope. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Logging Middleware</h5><p class="card-text"> This middleware is responsible for logging incoming HTTP requests. It captures the request path and the IP address of the client, allowing for better visibility into application traffic allowing for monitoring. </p><p class="card-text"> The example below shows how dependency injection is used to retrieve an <code>ILogger</code> instance, which logs relevant details for each request. </p><pre class="language-csharp"><code>app.Use((context, next) =&gt;
{
    var logger = context.RequestServices.GetRequiredService&lt;ILogger&lt;Program&gt;&gt;();
    logger.LogInformation(&quot;Request from {IP} to {Path}&quot;,
        context.Connection.RemoteIpAddress?.ToString() ?? &quot;Unknown&quot;,
        context.Request.Path);
    return next.Invoke();
});</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Mappings</h5><p class="card-text"> Retrieves all users by calling the service&#39;s <code>GetAll()</code> method. Returns a full list of user objects. </p><pre class="language-csharp"><code>app.MapGet(&quot;/users&quot;, (IUserService userService) =&gt; userService.GetAll()).WithName(&quot;GetAllUsers&quot;);</code></pre><p class="card-text"> Fetches a user by their ID. If the user exists, returns 200 OK with the user&#39;s data. Otherwise, returns 404 Not Found. </p><pre class="language-csharp"><code>app.MapGet(&quot;/users/{id:int}&quot;, (int id, IUserService userService) =&gt;
{
    var user = userService.GetById(id);
    if (user != null)
        return Results.Ok(user);
    return Results.NotFound();
}).WithName(&quot;GetUserById&quot;);</code></pre><p class="card-text"> Validates and creates a new user. If either the username or email is missing, returns 400 Bad Request. On failure to create, returns 500 Problem. On success, returns 201 Created with the new user&#39;s location. </p><pre class="language-csharp"><code>app.MapPost(&quot;/users&quot;, (User user, IUserService userService) =&gt;
{
    if (string.IsNullOrWhiteSpace(user.Username) || string.IsNullOrWhiteSpace(user.Email))
        return Results.BadRequest(&quot;Username and Email are required.&quot;);

    var createdUser = userService.Create(user);
    if (createdUser == null)
        return Results.Problem(&quot;User creation failed.&quot;);

    return Results.Created($&quot;/users/{createdUser.Id}&quot;, createdUser);
}).WithName(&quot;CreateUser&quot;);</code></pre><p class="card-text"> Updates an existing user based on the provided ID. Returns 200 OK if the update was successful or 404 Not Found if the user doesn&#39;t exist. </p><pre class="language-csharp"><code>app.MapPut(&quot;/users/{id:int}&quot;, (int id, User user, IUserService userService) =&gt;
{
    var successful = userService.Update(id, user);
    if (successful)
        return Results.Ok(successful);

    return Results.NotFound();
}).WithName(&quot;UpdateUser&quot;);</code></pre><p class="card-text"> Deletes the user with the given ID. If successful, returns 204 No Content. Otherwise, returns 404 Not Found. </p><pre class="language-csharp"><code>app.MapDelete(&quot;/users/{id:int}&quot;, (int id, IUserService userService) =&gt;
{
    var deleted = userService.Delete(id);
    if (deleted)
        return Results.NoContent();

    return Results.NotFound();
}).WithName(&quot;DeleteUser&quot;);</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">XUnit Tests</h5><p class="card-text"> This section contains a set of unit tests using XUnit to validate the API endpoints&#39; HTTP responses, along with service-level tests to ensure the business logic behaves as expected. </p><p class="card-text"> Making <code>Program</code> a partial class is necessary to use XUnit for running an ASP.NET app with mapped endpoints. </p><pre class="language-csharp"><code>// inside the API
public partial class Program { }

// Unit Test
public class EndpointUnitTests : IClassFixture&lt;WebApplicationFactory&lt;Program&gt;&gt;</code></pre><p class="card-text"> The <code>WebApplicationFactory&lt;Program&gt;</code> creates a lightweight, in-memory version of the ASP.NET app for testing.<br> By using <code>IClassFixture</code>, this factory is injected into the test class, allowing creation of an <code>HttpClient</code> that can call the real app endpoints without running the app manually. </p><p class="card-text"> These tests verify the behavior of the API endpoints by making HTTP requests to the in-memory test server. They cover creating, retrieving, updating, and deleting users, ensuring the API responds correctly and performs the expected operations. </p><pre class="language-csharp"><code>public class EndpointUnitTests : IClassFixture&lt;WebApplicationFactory&lt;Program&gt;&gt;
{
    private readonly HttpClient _client;

    public EndpointUnitTests(WebApplicationFactory&lt;Program&gt; factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetAllUsers()
    {
        var newUser = new User(0, &quot;listuser&quot;, &quot;list@example.com&quot;);
        var createResponse = await _client.PostAsJsonAsync(&quot;/users&quot;, newUser);
        createResponse.EnsureSuccessStatusCode();

        var response = await _client.GetAsync(&quot;/users&quot;);
        response.EnsureSuccessStatusCode();

        var users = await response.Content.ReadFromJsonAsync&lt;List&lt;User&gt;&gt;();
        Assert.NotNull(users);
        Assert.Contains(users, user =&gt; user.Username == &quot;listuser&quot; &amp;&amp; user.Email == &quot;list@example.com&quot;);
    }

    [Fact]
    public async Task GetUserById()
    {
        var newUser = new User(0, &quot;testuser&quot;, &quot;test@example.com&quot;);
        var createResponse = await _client.PostAsJsonAsync(&quot;/users&quot;, newUser);
        createResponse.EnsureSuccessStatusCode();

        var createdUser = await createResponse.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(createdUser);

        var getResponse = await _client.GetAsync($&quot;/users/{createdUser.Id}&quot;);
        getResponse.EnsureSuccessStatusCode();

        var fetchedUser = await getResponse.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(fetchedUser);
        Assert.Equal(createdUser.Id, fetchedUser.Id);
    }

    [Fact]
    public async Task CreateUser()
    {
        var newUser = new User(0, &quot;testuser&quot;, &quot;test@example.com&quot;);

        var response = await _client.PostAsJsonAsync(&quot;/users&quot;, newUser);
        response.EnsureSuccessStatusCode();

        var createdUser = await response.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(createdUser);
        Assert.True(createdUser.Id &gt; 0);
        Assert.Equal(newUser.Username, createdUser.Username);
    }

    [Fact]
    public async Task UpdateUser()
    {
        var newUser = new User(0, &quot;beforeupdate&quot;, &quot;before@example.com&quot;);
        var createResponse = await _client.PostAsJsonAsync(&quot;/users&quot;, newUser);
        createResponse.EnsureSuccessStatusCode();

        var createdUser = await createResponse.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(createdUser);

        var updatedUser = new User(createdUser.Id, &quot;afterupdate&quot;, &quot;after@example.com&quot;);
        var updateResponse = await _client.PutAsJsonAsync($&quot;/users/{createdUser.Id}&quot;, updatedUser);
        updateResponse.EnsureSuccessStatusCode();

        var getResponse = await _client.GetAsync($&quot;/users/{createdUser.Id}&quot;);
        getResponse.EnsureSuccessStatusCode();

        var fetchedUser = await getResponse.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(fetchedUser);
        Assert.Equal(&quot;afterupdate&quot;, fetchedUser.Username);
        Assert.Equal(&quot;after@example.com&quot;, fetchedUser.Email);
    }

    [Fact]
    public async Task DeleteUser()
    {
        var newUser = new User(0, &quot;todelete&quot;, &quot;delete@example.com&quot;);
        var createResponse = await _client.PostAsJsonAsync(&quot;/users&quot;, newUser);
        createResponse.EnsureSuccessStatusCode();

        var createdUser = await createResponse.Content.ReadFromJsonAsync&lt;User&gt;();
        Assert.NotNull(createdUser);

        var deleteResponse = await _client.DeleteAsync($&quot;/users/{createdUser.Id}&quot;);
        Assert.Equal(HttpStatusCode.NoContent, deleteResponse.StatusCode);

        var getResponse = await _client.GetAsync($&quot;/users/{createdUser.Id}&quot;);
        Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
    }
}
</code></pre><p class="card-text"> Additionally, this section includes unit tests for the user service logic. These tests ensure that service methods for creating, retrieving, updating, and deleting users function correctly, independent of the API layer. </p><pre class="language-csharp"><code>using API.Services;

namespace API.Tests;

public class UserApiUnitTests
{
    private readonly IUserService _userService = new MockUserService();

    [Fact]
    public void GetAllUsers()
    {
        _userService.Create(new User(0, &quot;seeduser&quot;, &quot;seed@example.com&quot;));

        var result = _userService.GetAll();

        Assert.NotNull(result);
        Assert.NotEmpty(result);
    }

    [Fact]
    public void GetUserById()
    {
        var createdUser = _userService.Create(new User(0, &quot;testuser&quot;, &quot;test@example.com&quot;));
        Assert.NotNull(createdUser);

        var user = _userService.GetById(createdUser.Id);

        Assert.NotNull(user);
        Assert.Equal(createdUser.Id, user.Id);
    }

    [Fact]
    public void CreateUser()
    {
        var newUser = new User(0, &quot;newuser&quot;, &quot;newuser@example.com&quot;);
        var created = _userService.Create(newUser);

        Assert.NotNull(created);
        Assert.True(created.Id &gt; 0);
        Assert.Equal(newUser.Username, created.Username);
    }

    [Fact]
    public void UpdateUser()
    {
        var originalUser = _userService.Create(new User(0, &quot;beforeupdate&quot;, &quot;before@example.com&quot;));
        Assert.NotNull(originalUser);

        var updatedUser = new User(originalUser.Id, &quot;afterupdate&quot;, &quot;after@example.com&quot;);
        var success = _userService.Update(originalUser.Id, updatedUser);

        Assert.True(success);

        var fetched = _userService.GetById(originalUser.Id);
        Assert.NotNull(fetched);
        Assert.Equal(&quot;afterupdate&quot;, fetched.Username);
        Assert.Equal(&quot;after@example.com&quot;, fetched.Email);
    }

    [Fact]
    public void DeleteUser()
    {
        var createdUser = _userService.Create(new User(0, &quot;todelete&quot;, &quot;delete@example.com&quot;));
        Assert.NotNull(createdUser);

        var deleted = _userService.Delete(createdUser.Id);

        Assert.True(deleted);
    }
}
</code></pre></div></div></div></div></div></section><hr><section id="conclusion" class="py-3"><div class="container"><h2 class="mb-4 text-center">Project Conclusion</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Highlights &amp; Successes</h5><p class="card-text"> This project successfully introduced the core features of ASP.NET Core, including the setup and configuration of the WebApplication builder to enable essential services, middleware, routing. By implementing an minimal API, ive demonstrated how to create lightweight and efficient APIs using controllers and dependency injection. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Lessons &amp; Improvements</h5><p class="card-text"> Throughout the project, I learned more about how ASP.NET Core works and the differences between using minimal APIs and the MVC pattern. In the future, the project could be improved by adding database support with Entity Framework, with the goal of making a a real world application by exploring Blazor. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Takeaways</h5><p class="card-text"> Overall, this project provided a solid foundation in ASP.NET Core development, focusing on practical ways to build web services and applications. The knowledge gained here deepened my understanding of building API-based services, and i plan to use this in my projects going forward. </p></div></div></div></div></div></section>`,11))],64))}}),Fv="/sharp_event_bus/sharp_event_bus_preview.png",nd="/sharp_event_bus/code_example.png",Rv={},kv={class:"py-5 pb-3",id:"about"};function Gv(e,t){return _t(),xt("section",kv,t[0]||(t[0]=[u("div",{class:"container"},[u("div",{class:"mb-3"},[u("h1",{class:"display-4"},"Sharp Event Bus"),u("p",{class:"lead"}," A project aimed at creating an in-memory event bus with a consumer-subscriber model. ")]),u("div",{class:"alert alert-info mt-3 text-center",role:"alert"},[ae(" If you're interested in the technical specifics of the project, "),u("a",{href:"sharp_event_bus_deep_dive",class:"alert-link"},"click here"),ae(". ")]),u("div",{class:"row"},[u("div",{class:"col-lg-6"},[u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Project Purpose"),u("ul",{class:"list-unstyled"},[u("li",null,"Design, implement and document a lightweight in-memory event bus"),u("li",null,"Enable decoupled communication using a consumer-subscriber model"),u("li",null,"Create an easy-to-use and customizable event bus framework"),u("li",null,"Gain deeper understanding of event-driven architectures in C#")])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Languages Used"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-cplusplus-plain colored me-2 dev-icon"}),ae(" C# ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body"},[u("h5",{class:"card-title text-center"},"Frameworks & Software"),u("ul",{class:"list-unstyled row g-2 mb-0 justify-content-center"},[u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-dotnetcore-plain colored me-2 dev-icon"}),ae(" xUnit ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-visualstudio-plain colored me-2 dev-icon"}),ae(" Visual Studio ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-github-original colored me-2 dev-icon"}),ae(" GitHub ")]),u("li",{class:"col-6 d-flex align-items-center justify-content-center"},[u("i",{class:"devicon-git-plain colored me-2 dev-icon"}),ae(" Git ")])])])]),u("div",{class:"card shadow-sm mb-3"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Source Code"),u("p",null,"Explore the full source code on GitHub."),u("a",{href:"https://github.com/rusjaell/sharp-event-bus",target:"_blank",class:"btn btn-primary mt-auto"},"View Source on GitHub")])])]),u("div",{class:"col-lg-6"},[u("section",{id:"screenshots"},[u("div",{class:"card shadow-sm h-100"},[u("div",{class:"card-body d-flex flex-column justify-content-center"},[u("h5",{class:"card-title text-center"},"Screenshots"),u("img",{src:Fv,alt:"Preview",class:"img-fluid img-animation d-block mb-3"}),u("img",{src:nd,alt:"Code Example",class:"img-fluid img-animation d-block mb-3"})])])])])])],-1)]))}const Dv=jn(Rv,[["render",Gv]]),Bv=cn({__name:"SharpEventBusDeepDive",setup(e){return jr(()=>{wn.highlightAll()}),Mr(()=>{wn.highlightAll()}),(t,n)=>(_t(),xt(bt,null,[Qe(Ns),n[0]||(n[0]=mt(`<section class="py-3" id="about"><div class="container"><h1 class="display-4 mb-1">Sharp Event Bus</h1><p class="lead mb-2"> A project aimed at creating an in-memory event bus with a consumer-subscriber model. </p><p class="mb-0"> This project introduces key concepts in ASP.NET Core, starting with configuring the WebApplication builder to set up essential services, middleware, routing, and security. <br> It explores minimal API patterns for quickly creating lightweight endpoints with integrated OpenAPI support for testing and documentation. <br> It briefly covers the more structured MVC approach, demonstrating how to implement controllers that utilize dependency injection to create scalable and maintainable APIs. <br> Overall, this provides a solid foundation in ASP.NET Core for building web services and applications. </p></div></section><hr><section id="purpose" class="py-3"><div class="container"><h2 class="mb-4 text-center">Library Purpose</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Reason for the Project</h5><p class="card-text"> When building a single-threaded application, I needed a decoupled way for systems to interact without introducing direct dependencies or tight coupling. To solve this, I created a lightweight event bus that allowed systems to publish and subscribe to specific events. This pattern helped maintain a clean architecture, improved modularity, and made it easier to extend or modify individual components without affecting others. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Key Features</h5><p class="card-text"> The event bus supports only synchronous event dispatching and subscription mechanisms. Its simplicity and small size make it very lightweight, allowing easy customization of application logic for subscriber handling and event consumption through the framework&#39;s interfaces.<br> The framework is designed to provide flexibility to consume all events at once or manually control the consumption of individual events as per use-case. Being lightweight contributes to its high performance by minimizing overhead and ensuring fast event processing. </p></div></div></div></div></div></section><hr><section id="introduction" class="py-3"><div class="container"><h2 class="mb-4 text-center">Building the Framework</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Events</h5><p class="card-text"> The event interface, while minimal, serves as the foundation for the entire event-driven system.<br> It defines a common contract that all event types must follow, enabling consistent handling and encapsulation of data.<br> This simple abstraction lays the groundwork for extensibility, allowing users to define their own event types as the system grows. </p><pre class="language-csharp"><code>public interface IEvent { }</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Subscriber</h5><p class="card-text"> The purpose of defining the generic subscriber interface is to allow event handlers to process specific event types in a type-safe manner.<br> By using the generic parameter <code>T</code> constrained to <code>IEvent</code>, each subscriber can focus on handling only the events it cares about.<br> This improves code clarity and reduces the risk of runtime errors due to invalid event casting.<br> However, because subscribers are generic, managing and storing them uniformly in the event bus becomes more complex. </p><pre class="language-csharp"><code>public interface ISubscriber&lt;T&gt; where T : IEvent
{
    void OnEvent(T e);
}
</code></pre><p class="card-text"> Because subscribers are generic and handle specific event types, storing them together in a single collection is complicated.<br> To address this, an abstract base class was introduced that implements both generic and non-generic subscriber interfaces.<br> This allows all subscribers to be stored uniformly while maintaining type safety through casting.<br><br> When the event bus dispatches an event, it calls the non-generic <code>OnEvent(IEvent e)</code> method on each subscriber.<br> The base class explicitly implements this method by casting the event to the specific type <code>T</code> and forwarding it to the generic <code>OnEvent(T e)</code> method.<br><br> This design lets user code focus on implementing the type-safe generic method, while the base class handles dispatching and casting behind the scenes.<br><br> Additionally, this creates a processing layer where common functionality can be added before passing events to user code, keeping the subscriber system both flexible and extensible. </p><pre class="language-csharp"><code>public interface ISubscriber
{
    void OnEvent(IEvent e);
}

public interface ISubscriber&lt;T&gt; : ISubscriber where T : IEvent
{
    void OnEvent(T e);
}

public abstract class SubscriberBase&lt;T&gt; : ISubscriber&lt;T&gt; where T : IEvent
{
    public abstract void OnEvent(T e);

    void ISubscriber.OnEvent(IEvent e) =&gt; OnEvent((T)e);
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Queue</h5><p class="card-text"> The queue interface is essential for managing how events are stored and retrieved within the event bus.<br> It enables the implementation of custom logic for adding events to the queue and safely removing them.<br> By exposing basic operations such as checking if the queue is empty, this interface allows the event queue to be tailored to the specific requirements of any application. </p><pre class="language-csharp"><code>public interface IEventQueue
{
    bool IsEmpty { get; }
    void Enqueue(IEvent e);
    bool TryDequeue(out IEvent? e);
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Dispatcher</h5><p class="card-text"> To effectively deliver events to subscribers, the dispatcher interface exists to control how events are sent out. This separation allows for customizable dispatching logic tailored to the specific needs of the application, ensuring that each subscriber receives relevant events appropriately. </p><pre class="language-csharp"><code>public interface IEventDispatcher
{
    void Dispatch(IEvent e, IEnumerable&lt;ISubscriber&gt; subscribers);
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">The Event Bus</h5><p class="card-text"> The event bus interface brings together the queue, dispatcher, and subscriber components to manage the complete event lifecycle.<br> It enables publishing events, registering subscribers, and consuming events in a structured and extensible manner.<br> Whether processing all pending events or consuming them one at a time, the interface supports both batch and granular event handling—giving the application full control over event flow. </p><pre class="language-csharp"><code>public interface IEventBus
{
    void PublishEvent&lt;T&gt;(T e) where T : IEvent;
    void Subscribe&lt;T&gt;(ISubscriber&lt;T&gt; subscriber) where T : IEvent;
    void ConsumeEvents();
    bool ConsumeOneEvent();
}
</code></pre></div></div></div></div></div></section><hr><section id="implementation" class="py-3"><div class="container"><h2 class="mb-4 text-center">Default Implementation</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Bus</h5><p class="card-text"> The initial structure of the <code>EventBus</code> includes three core fields that coordinate how events are handled:<br><br><strong>_subscribers</strong><br> A dictionary mapping event types to lists of their respective subscribers.<br> This allows the event bus to quickly locate and notify the correct handlers when an event of a specific type is published.<br><br><strong>_eventQueue</strong><br> An implementation of the <code>IEventQueue</code> interface, used to queue incoming events.<br> This decouples the publishing of events from their consumption, allowing events to be processed asynchronously or in batches.<br><br><strong>_eventDispatcher</strong><br> An implementation of the <code>IEventDispatcher</code> interface, responsible for dispatching events from the queue to the appropriate subscribers.<br> It ensures that each event is delivered to all of its intended handlers in a clean and consistent way. </p><pre class="language-csharp"><code>public sealed class EventBus : IEventBus
{
    private readonly Dictionary&lt;Type, List&lt;ISubscriber&gt;&gt; _subscribers = new();
    private readonly IEventQueue _eventQueue;
    private readonly IEventDispatcher _eventDispatcher;

    internal EventBus(IEventQueue? eventQueue, IEventDispatcher? eventDispatcher)
    {
        ArgumentNullException.ThrowIfNull(eventQueue);
        ArgumentNullException.ThrowIfNull(eventDispatcher);

        _eventQueue = eventQueue;
        _eventDispatcher = eventDispatcher;
    }
</code></pre><p class="card-text"> The constructor is marked <code>internal</code>, meaning the <code>EventBus</code> is not intended to be created directly from outside the assembly.<br> This is intentional, as I&#39;ve designed it to be instantiated through a builder, allowing controlled and consistent configuration.<br><br> It also uses <code>ThrowIfNull</code> for strict null-checking, reflecting the framework&#39;s broader commitment to safety and stability through consistent null validation.<br> This pattern is applied throughout the entire framework to enforce robustness and prevent runtime errors caused by missing dependencies. </p><br><h5>Publishing</h5><pre class="language-csharp"><code>public void PublishEvent&lt;T&gt;(T e) where T : IEvent
{
    ArgumentNullException.ThrowIfNull(e);
    _eventQueue.Enqueue(e);
}
</code></pre><p class="card-text"> The <code>PublishEvent&lt;T&gt;</code> method is responsible for submitting new events to the queue.<br> It performs strict null-checking on the provided event to prevent invalid data from entering the system<br> After validation the event is passed to the queue for later consumption by subscribers. </p><br><h5>Subscribers</h5><p class="card-text"> The <code>Subscribe&lt;T&gt;</code> method registers a subscriber for a specific event type.<br></p><pre class="language-csharp"><code>public void Subscribe&lt;T&gt;(ISubscriber&lt;T&gt; subscriber) where T : IEvent
{
    ArgumentNullException.ThrowIfNull(subscriber);

    var type = typeof(T);

    ref var list = ref CollectionsMarshal.GetValueRefOrAddDefault(_subscribers, type, out var exists);
    if (!exists || list == null)
        list = new List&lt;ISubscriber&gt;();

    list.Add(subscriber);
}
</code></pre><p class="card-text"> It uses <code>CollectionsMarshal.GetValueRefOrAddDefault</code> to efficiently access or add entries in the dictionary of subscribers, minimizing unnecessary lookups and allocations.<br> If no subscriber list exists yet for the given event type, a new list is created, and the subscriber is added.<br> This approach ensures minimal overhead when registering new subscriptions.<br><br> Additionally, the direct <code>list.Add(subscriber);</code> operation is enabled by the handling of generics in the subscriber interface, which was discussed earlier. </p><h5>Consumers</h5><p class="card-text"> These two methods are responsible for consuming and dispatching events from the queue.<br><br> After retrieving the event type, any registered subscribers are fetched, and the dispatcher delivers the event to them.<br> This design offers both batch and granular control over event processing, allowing consumers to manage event flow as needed. </p><p class="card-text"><code>ConsumeEvents</code> processes all queued events in a loop, ensuring the event queue is fully drained.<br><code>ConsumeOneEvent</code> processes only a single event and returns a boolean indicating whether an event was handled. </p><pre class="language-csharp"><code>public void ConsumeEvents()
{
    while (_eventQueue.TryDequeue(out var e))
    {
        if (e == null)
            EventQueueTryDequeueException.Throw();

        var type = e!.GetType();
        if (_subscribers.TryGetValue(type, out var handlers))
            _eventDispatcher.Dispatch(e, handlers);
    }
}

public bool ConsumeOneEvent()
{
    if (_eventQueue.TryDequeue(out var e))
    {
        if (e == null)
            EventQueueTryDequeueException.Throw();

        var type = e!.GetType();
        if (_subscribers.TryGetValue(type, out var handlers))
            _eventDispatcher.Dispatch(e, handlers);
        return true;
    }
    return false;
}
</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Bus Builder</h5><p class="card-text"> The <code>Create</code> method serves as the main entry point to instantiate an <code>EventBus</code>. It initializes a new builder instance and applies an optional configuration action if provided. If no configuration is supplied, it automatically sets default implementations for the event queue and dispatcher, ensuring the <code>EventBus</code> is always created in a valid and consistent state. </p><p class="card-text"> The builder configures the event bus with default internal implementations: <code>DefaultEventQueue</code> and <code>DefaultEventDispatcher</code>.<br> These provide a ready-to-use, standard event handling mechanism out of the box.<br> Users only need to supply custom implementations if they require specialized event processing logic.<br> This approach balances simplicity for common use cases with flexibility for advanced scenarios. </p><pre><code class="language-csharp">public static EventBus Create(Action&lt;EventBusBuilder&gt;? configure = null)
{
    var builder = new EventBusBuilder();

    if (configure != null)
    {
        configure.Invoke(builder);
    }
    else
    {
        builder.WithEventQueue(new DefaultEventQueue());
        builder.WithEventDispatcher(new DefaultEventDispatcher());
    }
    return new EventBus(builder._eventQueue!, builder._eventDispatcher!);
}</code></pre><p class="card-text"> The <code>WithEventQueue</code> method allows specifying a custom event queue implementation. It validates that the provided instance is not null, assigns it internally, and returns the builder to enable chaining of the calls if desired. </p><pre><code class="language-csharp">public EventBusBuilder WithEventQueue(IEventQueue eventQueue)
{
    ArgumentNullException.ThrowIfNull(eventQueue);
    _eventQueue = eventQueue;
    return this;
}</code></pre><p class="card-text"> The <code>WithEventDispatcher</code> method works similarly to <code>WithEventQueue</code>, but for assigning the dispatcher. </p><pre><code class="language-csharp">public EventBusBuilder WithEventDispatcher(IEventDispatcher eventDispatcher)
{
    ArgumentNullException.ThrowIfNull(eventDispatcher);
    _eventDispatcher = eventDispatcher;
    return this;
}</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Dispatcher</h5><p class="card-text"> The <code>DefaultEventDispatcher</code> provides a simple implementation of the <code>IEventDispatcher</code> interface. It iterates over each subscriber and calls their <code>OnEvent</code> method with the event, ensuring that every subscriber receives the dispatched event. </p><pre><code class="language-csharp">internal sealed class DefaultEventDispatcher : IEventDispatcher
{
    public void Dispatch(IEvent e, IEnumerable&lt;ISubscriber&gt; subscribers)
    {
        ArgumentNullException.ThrowIfNull(e);
        ArgumentNullException.ThrowIfNull(subscribers);

        foreach (var handler in subscribers)
            handler.OnEvent(e);
    }
}</code></pre></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Queue</h5><p class="card-text"> The <code>DefaultEventQueue</code> implements the <code>IEventQueue</code> interface using a simple <code>Queue&lt;IEvent&gt;</code>. It provides basic methods to add events, check if the queue is empty, and remove events in a first-in, first-out order. This straightforward design offers a reliable event storage that can be used as is or replaced with more advanced queueing if needed. </p><pre><code class="language-csharp">internal sealed class DefaultEventQueue : IEventQueue
{
    private readonly Queue&lt;IEvent&gt; _queue = new Queue&lt;IEvent&gt;();

    public bool IsEmpty =&gt; _queue.Count == 0;

    public void Enqueue(IEvent e)
    {
        ArgumentNullException.ThrowIfNull(e);
        _queue.Enqueue(e);
    }

    public bool TryDequeue(out IEvent? e) =&gt; _queue.TryDequeue(out e);
}</code></pre></div></div></div></div></div></section><hr><section id="conclusion" class="py-3"><div class="container"><h2 class="mb-4 text-center">Example</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Event Bus Example</h5><p class="card-text"> This example shows how to use <code>EventBus</code> with its default setup. It defines two event types, <code>OrderPlacedEvent</code> and <code>OrderCancelledEvent</code>, and a subscriber that listens for order placed events. The event bus is created via <code>EventBusBuilder.Create()</code>, which configures the event queue and dispatcher automatically. </p><p class="card-text"> The program simulates publishing random order events in a loop, then processes all events synchronously with <code>ConsumeEvents()</code>. It runs until interrupted, demonstrating a simple, decoupled event handling system. </p><img src="`+nd+`" alt="Code Example" class="img-fluid img-animation d-block mb-3"><pre><code class="language-csharp">// Event representing an order being placed
public record class OrderPlacedEvent(string OrderId, DateTime Timestamp) : IEvent;

// Event representing an order being cancelled
public record class OrderCancelledEvent(string OrderId, string Reason) : IEvent;

// Subscriber that handles OrderPlacedEvent events
public class OrderPlacedSubscriber : SubscriberBase&lt;OrderPlacedEvent&gt;
{
    public override void OnEvent(OrderPlacedEvent e)
    {
        Console.WriteLine($&quot;Order placed: {e.OrderId} at {e.Timestamp}&quot;);
    }
}

// Subscriber that handles OrderCancelledEvent events
public class OrderCancelledEventSubscriber : SubscriberBase&lt;OrderCancelledEvent&gt;
{
    // Called when an OrderCancelledEvent is published
    public override void OnEvent(OrderCancelledEvent e)
    {
        Console.WriteLine($&quot;Order Cancelled: {e.OrderId} reason: {e.Reason}&quot;);
    }
}

internal sealed class Program
{
    public static async Task Main(string[] args)
    {
        var eventBus = EventBusBuilder.Create();

        eventBus.Subscribe(new OrderPlacedSubscriber());
        eventBus.Subscribe(new OrderCancelledEventSubscriber());

        using var cts = new CancellationTokenSource();

        Console.CancelKeyPress += (sender, eventArgs) =&gt;
        {
            Console.WriteLine(&quot;Cancellation requested, stopping...&quot;);
            cts.Cancel();
            eventArgs.Cancel = true;
        };

        Console.WriteLine(&quot;Starting event publishing loop. Press Ctrl+C to stop.&quot;);

        try
        {
            while (!cts.Token.IsCancellationRequested)
            {
                PublishRandomOrderEvent(eventBus);

                eventBus.ConsumeEvents();

                await Task.Delay(Random.Shared.Next(500, 1500), cts.Token);
            }
        }
        catch (TaskCanceledException)
        {
        }

        Console.WriteLine(&quot;Event publishing loop stopped.&quot;);
    }

    private static void PublishRandomOrderEvent(EventBus eventBus)
    {
        var random = Random.Shared;
        var chance = random.NextDouble();
        if (chance &lt;= 0.5) return;

        var orderId = Guid.NewGuid().ToString();
        var wasOrderPlaced = random.NextDouble() &gt; 0.5;
        if (wasOrderPlaced)
        {
            eventBus.PublishEvent(new OrderPlacedEvent(orderId, DateTime.UtcNow));
            return;
        }

        eventBus.PublishEvent(new OrderCancelledEvent(orderId, &quot;Customer Request&quot;));
    }
}</code></pre></div></div></div></div></div></section><hr><section id="unittests" class="py-3"><div class="container"><h2 class="mb-4 text-center">Unit tests</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Unit Tests Implementation</h5><p class="card-text">... todo</p></div></div></div></div></div></section><hr><section id="conclusion" class="py-3"><div class="container"><h2 class="mb-4 text-center">Project Conclusion</h2><div class="row g-4 justify-content-center"><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Conclusion</h5><p class="card-text"> This project successfully delivered a lightweight, in-memory event bus framework designed to facilitate decoupled communication across an application. By implementing a consumer-subscriber model, it enables flexible and scalable event-driven architecture in C#, supporting both batch and single-event processing. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Testing &amp; Validation</h5><p class="card-text"> Basic unit tests were written to ensure the event bus framework behaved as expected. These tests focused on verifying core behaviors like event publishing, subscription handling, and configuration compliance, helping ensure the framework actually is functional. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Design &amp; Development Approach</h5><p class="card-text"> Throughout development, I focused on creating a simple yet extensible design with strict null-checking and robust internal defaults, ensuring safety and stability across the framework. This approach not only improves reliability but also provides users with an easy way to customize event handling when needed. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Experience &amp; Outcomes</h5><p class="card-text"> The project was straightforward to create and marked my first experience building a proper project that utilizes interfaces to enable flexibility, as well as creating a NuGet package and documenting the code. Overall, I&#39;m happy with the results. </p></div></div></div><div class="col-12"><div class="card shadow-sm h-100"><div class="card-body"><h5 class="card-title">Future Enhancements</h5><p class="card-text"> Moving forward, I plan to enhance this foundation by exploring integration with external messaging systems and expanding the framework&#39;s capabilities for real-world applications.<br> Planned improvements include configurable settings, event triggers, event hooks support, event chaining, event filtering, event priorities, an event scheduler, and asynchronous publishing and consumption support. </p></div></div></div></div></div></section>`,13))],64))}}),Uv=Fg({history:lg("/"),routes:[{path:"/",name:"home",component:Jg},{path:"/graphics_engine",name:"graphics_engine",component:nm},{path:"/graphics_engine_deep_dive",name:"graphics_engine_deep_dive",component:_v},{path:"/portfolio",name:"portfolio",component:Av},{path:"/portfolio_deep_dive",name:"portfolio_deep_dive",component:Ev},{path:"/understanding_asp",name:"understanding_asp",component:Pv},{path:"/understanding_asp_deep_dive",name:"understanding_asp_deep_dive",component:Iv},{path:"/sharp_event_bus",name:"sharp_event_bus",component:Dv},{path:"/sharp_event_bus_deep_dive",name:"sharp_event_bus_deep_dive",component:Bv}],scrollBehavior(){return new Promise(e=>{e({left:0,top:0})})}});var ms={exports:{}};/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nv=ms.exports,kl;function jv(){return kl||(kl=1,function(e,t){(function(n,s){e.exports=s()})(Nv,function(){const n=new Map,s={set(l,r,a){n.has(l)||n.set(l,new Map);const f=n.get(l);f.has(r)||f.size===0?f.set(r,a):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(f.keys())[0]}.`)},get:(l,r)=>n.has(l)&&n.get(l).get(r)||null,remove(l,r){if(!n.has(l))return;const a=n.get(l);a.delete(r),a.size===0&&n.delete(l)}},i="transitionend",o=l=>(l&&window.CSS&&window.CSS.escape&&(l=l.replace(/#([^\s"#']+)/g,(r,a)=>`#${CSS.escape(a)}`)),l),d=l=>{l.dispatchEvent(new Event(i))},c=l=>!(!l||typeof l!="object")&&(l.jquery!==void 0&&(l=l[0]),l.nodeType!==void 0),h=l=>c(l)?l.jquery?l[0]:l:typeof l=="string"&&l.length>0?document.querySelector(o(l)):null,_=l=>{if(!c(l)||l.getClientRects().length===0)return!1;const r=getComputedStyle(l).getPropertyValue("visibility")==="visible",a=l.closest("details:not([open])");if(!a)return r;if(a!==l){const f=l.closest("summary");if(f&&f.parentNode!==a||f===null)return!1}return r},g=l=>!l||l.nodeType!==Node.ELEMENT_NODE||!!l.classList.contains("disabled")||(l.disabled!==void 0?l.disabled:l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"),b=l=>{if(!document.documentElement.attachShadow)return null;if(typeof l.getRootNode=="function"){const r=l.getRootNode();return r instanceof ShadowRoot?r:null}return l instanceof ShadowRoot?l:l.parentNode?b(l.parentNode):null},S=()=>{},O=l=>{l.offsetHeight},C=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,w=[],P=()=>document.documentElement.dir==="rtl",L=l=>{var r;r=()=>{const a=C();if(a){const f=l.NAME,A=a.fn[f];a.fn[f]=l.jQueryInterface,a.fn[f].Constructor=l,a.fn[f].noConflict=()=>(a.fn[f]=A,l.jQueryInterface)}},document.readyState==="loading"?(w.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of w)a()}),w.push(r)):r()},p=(l,r=[],a=l)=>typeof l=="function"?l.call(...r):a,y=(l,r,a=!0)=>{if(!a)return void p(l);const f=(F=>{if(!F)return 0;let{transitionDuration:j,transitionDelay:$}=window.getComputedStyle(F);const Q=Number.parseFloat(j),J=Number.parseFloat($);return Q||J?(j=j.split(",")[0],$=$.split(",")[0],1e3*(Number.parseFloat(j)+Number.parseFloat($))):0})(r)+5;let A=!1;const E=({target:F})=>{F===r&&(A=!0,r.removeEventListener(i,E),p(l))};r.addEventListener(i,E),setTimeout(()=>{A||d(r)},f)},x=(l,r,a,f)=>{const A=l.length;let E=l.indexOf(r);return E===-1?!a&&f?l[A-1]:l[0]:(E+=a?1:-1,f&&(E=(E+A)%A),l[Math.max(0,Math.min(E,A-1))])},I=/[^.]*(?=\..*)\.|.*/,B=/\..*/,M=/::\d+$/,re={};let K=1;const pe={mouseenter:"mouseover",mouseleave:"mouseout"},Te=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function $e(l,r){return r&&`${r}::${K++}`||l.uidEvent||K++}function ze(l){const r=$e(l);return l.uidEvent=r,re[r]=re[r]||{},re[r]}function Re(l,r,a=null){return Object.values(l).find(f=>f.callable===r&&f.delegationSelector===a)}function je(l,r,a){const f=typeof r=="string",A=f?a:r||a;let E=Se(l);return Te.has(E)||(E=l),[f,A,E]}function Ae(l,r,a,f,A){if(typeof r!="string"||!l)return;let[E,F,j]=je(r,a,f);r in pe&&(F=(ue=>function(ce){if(!ce.relatedTarget||ce.relatedTarget!==ce.delegateTarget&&!ce.delegateTarget.contains(ce.relatedTarget))return ue.call(this,ce)})(F));const $=ze(l),Q=$[j]||($[j]={}),J=Re(Q,F,E?a:null);if(J)return void(J.oneOff=J.oneOff&&A);const Y=$e(F,r.replace(I,"")),me=E?function(oe,ue,ce){return function fe(Be){const Me=oe.querySelectorAll(ue);for(let{target:_e}=Be;_e&&_e!==this;_e=_e.parentNode)for(const Oe of Me)if(Oe===_e)return ve(Be,{delegateTarget:_e}),fe.oneOff&&G.off(oe,Be.type,ue,ce),ce.apply(_e,[Be])}}(l,a,F):function(oe,ue){return function ce(fe){return ve(fe,{delegateTarget:oe}),ce.oneOff&&G.off(oe,fe.type,ue),ue.apply(oe,[fe])}}(l,F);me.delegationSelector=E?a:null,me.callable=F,me.oneOff=A,me.uidEvent=Y,Q[Y]=me,l.addEventListener(j,me,E)}function le(l,r,a,f,A){const E=Re(r[a],f,A);E&&(l.removeEventListener(a,E,!!A),delete r[a][E.uidEvent])}function ne(l,r,a,f){const A=r[a]||{};for(const[E,F]of Object.entries(A))E.includes(f)&&le(l,r,a,F.callable,F.delegationSelector)}function Se(l){return l=l.replace(B,""),pe[l]||l}const G={on(l,r,a,f){Ae(l,r,a,f,!1)},one(l,r,a,f){Ae(l,r,a,f,!0)},off(l,r,a,f){if(typeof r!="string"||!l)return;const[A,E,F]=je(r,a,f),j=F!==r,$=ze(l),Q=$[F]||{},J=r.startsWith(".");if(E===void 0){if(J)for(const Y of Object.keys($))ne(l,$,Y,r.slice(1));for(const[Y,me]of Object.entries(Q)){const oe=Y.replace(M,"");j&&!r.includes(oe)||le(l,$,F,me.callable,me.delegationSelector)}}else{if(!Object.keys(Q).length)return;le(l,$,F,E,A?a:null)}},trigger(l,r,a){if(typeof r!="string"||!l)return null;const f=C();let A=null,E=!0,F=!0,j=!1;r!==Se(r)&&f&&(A=f.Event(r,a),f(l).trigger(A),E=!A.isPropagationStopped(),F=!A.isImmediatePropagationStopped(),j=A.isDefaultPrevented());const $=ve(new Event(r,{bubbles:E,cancelable:!0}),a);return j&&$.preventDefault(),F&&l.dispatchEvent($),$.defaultPrevented&&A&&A.preventDefault(),$}};function ve(l,r={}){for(const[a,f]of Object.entries(r))try{l[a]=f}catch{Object.defineProperty(l,a,{configurable:!0,get:()=>f})}return l}function he(l){if(l==="true")return!0;if(l==="false")return!1;if(l===Number(l).toString())return Number(l);if(l===""||l==="null")return null;if(typeof l!="string")return l;try{return JSON.parse(decodeURIComponent(l))}catch{return l}}function He(l){return l.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}const Le={setDataAttribute(l,r,a){l.setAttribute(`data-bs-${He(r)}`,a)},removeDataAttribute(l,r){l.removeAttribute(`data-bs-${He(r)}`)},getDataAttributes(l){if(!l)return{};const r={},a=Object.keys(l.dataset).filter(f=>f.startsWith("bs")&&!f.startsWith("bsConfig"));for(const f of a){let A=f.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1),r[A]=he(l.dataset[f])}return r},getDataAttribute:(l,r)=>he(l.getAttribute(`data-bs-${He(r)}`))};class Ze{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const f=c(a)?Le.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof f=="object"?f:{},...c(a)?Le.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[A,E]of Object.entries(a)){const F=r[A],j=c(F)?"element":(f=F)==null?`${f}`:Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(E).test(j))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${j}" but expected type "${E}".`)}var f}}class Ee extends Ze{constructor(r,a){super(),(r=h(r))&&(this._element=r,this._config=this._getConfig(a),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),G.off(this._element,this.constructor.EVENT_KEY);for(const r of Object.getOwnPropertyNames(this))this[r]=null}_queueCallback(r,a,f=!0){y(r,a,f)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(r){return s.get(h(r),this.DATA_KEY)}static getOrCreateInstance(r,a={}){return this.getInstance(r)||new this(r,typeof a=="object"?a:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}const k=l=>{let r=l.getAttribute("data-bs-target");if(!r||r==="#"){let a=l.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?a.trim():null}return r?r.split(",").map(a=>o(a)).join(","):null},R={find:(l,r=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(r,l)),findOne:(l,r=document.documentElement)=>Element.prototype.querySelector.call(r,l),children:(l,r)=>[].concat(...l.children).filter(a=>a.matches(r)),parents(l,r){const a=[];let f=l.parentNode.closest(r);for(;f;)a.push(f),f=f.parentNode.closest(r);return a},prev(l,r){let a=l.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(l,r){let a=l.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(l){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,l).filter(a=>!g(a)&&_(a))},getSelectorFromElement(l){const r=k(l);return r&&R.findOne(r)?r:null},getElementFromSelector(l){const r=k(l);return r?R.findOne(r):null},getMultipleElementsFromSelector(l){const r=k(l);return r?R.find(r):[]}},W=(l,r="hide")=>{const a=`click.dismiss${l.EVENT_KEY}`,f=l.NAME;G.on(document,a,`[data-bs-dismiss="${f}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),g(this))return;const E=R.getElementFromSelector(this)||this.closest(`.${f}`);l.getOrCreateInstance(E)[r]()})},Z=".bs.alert",xe=`close${Z}`,m=`closed${Z}`;class v extends Ee{static get NAME(){return"alert"}close(){if(G.trigger(this._element,xe).defaultPrevented)return;this._element.classList.remove("show");const r=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),G.trigger(this._element,m),this.dispose()}static jQueryInterface(r){return this.each(function(){const a=v.getOrCreateInstance(this);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r](this)}})}}W(v,"close"),L(v);const T='[data-bs-toggle="button"]';class D extends Ee{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(r){return this.each(function(){const a=D.getOrCreateInstance(this);r==="toggle"&&a[r]()})}}G.on(document,"click.bs.button.data-api",T,l=>{l.preventDefault();const r=l.target.closest(T);D.getOrCreateInstance(r).toggle()}),L(D);const U=".bs.swipe",N=`touchstart${U}`,H=`touchmove${U}`,z=`touchend${U}`,q=`pointerdown${U}`,V=`pointerup${U}`,se={endCallback:null,leftCallback:null,rightCallback:null},X={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class te extends Ze{constructor(r,a){super(),this._element=r,r&&te.isSupported()&&(this._config=this._getConfig(a),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return se}static get DefaultType(){return X}static get NAME(){return"swipe"}dispose(){G.off(this._element,U)}_start(r){this._supportPointerEvents?this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX):this._deltaX=r.touches[0].clientX}_end(r){this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(r){this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX}_handleSwipe(){const r=Math.abs(this._deltaX);if(r<=40)return;const a=r/this._deltaX;this._deltaX=0,a&&p(a>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(G.on(this._element,q,r=>this._start(r)),G.on(this._element,V,r=>this._end(r)),this._element.classList.add("pointer-event")):(G.on(this._element,N,r=>this._start(r)),G.on(this._element,H,r=>this._move(r)),G.on(this._element,z,r=>this._end(r)))}_eventIsPointerPenTouch(r){return this._supportPointerEvents&&(r.pointerType==="pen"||r.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ie=".bs.carousel",ye=".data-api",De="ArrowLeft",Ce="ArrowRight",et="next",Ye="prev",rt="left",ct="right",An=`slide${ie}`,Mn=`slid${ie}`,dt=`keydown${ie}`,Ot=`mouseenter${ie}`,qr=`mouseleave${ie}`,sd=`dragstart${ie}`,id=`load${ie}${ye}`,ad=`click${ie}${ye}`,ua="carousel",$r="active",fa=".active",ha=".carousel-item",od=fa+ha,ld={[De]:ct,[Ce]:rt},cd={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},dd={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Vn extends Ee{constructor(r,a){super(r,a),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=R.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ua&&this.cycle()}static get Default(){return cd}static get DefaultType(){return dd}static get NAME(){return"carousel"}next(){this._slide(et)}nextWhenVisible(){!document.hidden&&_(this._element)&&this.next()}prev(){this._slide(Ye)}pause(){this._isSliding&&d(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?G.one(this._element,Mn,()=>this.cycle()):this.cycle())}to(r){const a=this._getItems();if(r>a.length-1||r<0)return;if(this._isSliding)return void G.one(this._element,Mn,()=>this.to(r));const f=this._getItemIndex(this._getActive());if(f===r)return;const A=r>f?et:Ye;this._slide(A,a[r])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(r){return r.defaultInterval=r.interval,r}_addEventListeners(){this._config.keyboard&&G.on(this._element,dt,r=>this._keydown(r)),this._config.pause==="hover"&&(G.on(this._element,Ot,()=>this.pause()),G.on(this._element,qr,()=>this._maybeEnableCycle())),this._config.touch&&te.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const a of R.find(".carousel-item img",this._element))G.on(a,sd,f=>f.preventDefault());const r={leftCallback:()=>this._slide(this._directionToOrder(rt)),rightCallback:()=>this._slide(this._directionToOrder(ct)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new te(this._element,r)}_keydown(r){if(/input|textarea/i.test(r.target.tagName))return;const a=ld[r.key];a&&(r.preventDefault(),this._slide(this._directionToOrder(a)))}_getItemIndex(r){return this._getItems().indexOf(r)}_setActiveIndicatorElement(r){if(!this._indicatorsElement)return;const a=R.findOne(fa,this._indicatorsElement);a.classList.remove($r),a.removeAttribute("aria-current");const f=R.findOne(`[data-bs-slide-to="${r}"]`,this._indicatorsElement);f&&(f.classList.add($r),f.setAttribute("aria-current","true"))}_updateInterval(){const r=this._activeElement||this._getActive();if(!r)return;const a=Number.parseInt(r.getAttribute("data-bs-interval"),10);this._config.interval=a||this._config.defaultInterval}_slide(r,a=null){if(this._isSliding)return;const f=this._getActive(),A=r===et,E=a||x(this._getItems(),f,A,this._config.wrap);if(E===f)return;const F=this._getItemIndex(E),j=Y=>G.trigger(this._element,Y,{relatedTarget:E,direction:this._orderToDirection(r),from:this._getItemIndex(f),to:F});if(j(An).defaultPrevented||!f||!E)return;const $=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(F),this._activeElement=E;const Q=A?"carousel-item-start":"carousel-item-end",J=A?"carousel-item-next":"carousel-item-prev";E.classList.add(J),O(E),f.classList.add(Q),E.classList.add(Q),this._queueCallback(()=>{E.classList.remove(Q,J),E.classList.add($r),f.classList.remove($r,J,Q),this._isSliding=!1,j(Mn)},f,this._isAnimated()),$&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return R.findOne(od,this._element)}_getItems(){return R.find(ha,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(r){return P()?r===rt?Ye:et:r===rt?et:Ye}_orderToDirection(r){return P()?r===Ye?rt:ct:r===Ye?ct:rt}static jQueryInterface(r){return this.each(function(){const a=Vn.getOrCreateInstance(this,r);if(typeof r!="number"){if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}}else a.to(r)})}}G.on(document,ad,"[data-bs-slide], [data-bs-slide-to]",function(l){const r=R.getElementFromSelector(this);if(!r||!r.classList.contains(ua))return;l.preventDefault();const a=Vn.getOrCreateInstance(r),f=this.getAttribute("data-bs-slide-to");return f?(a.to(f),void a._maybeEnableCycle()):Le.getDataAttribute(this,"slide")==="next"?(a.next(),void a._maybeEnableCycle()):(a.prev(),void a._maybeEnableCycle())}),G.on(window,id,()=>{const l=R.find('[data-bs-ride="carousel"]');for(const r of l)Vn.getOrCreateInstance(r)}),L(Vn);const hr=".bs.collapse",ud=`show${hr}`,fd=`shown${hr}`,hd=`hide${hr}`,pd=`hidden${hr}`,gd=`click${hr}.data-api`,js="show",qn="collapse",Wr="collapsing",md=`:scope .${qn} .${qn}`,Ms='[data-bs-toggle="collapse"]',vd={parent:null,toggle:!0},bd={parent:"(null|element)",toggle:"boolean"};class $n extends Ee{constructor(r,a){super(r,a),this._isTransitioning=!1,this._triggerArray=[];const f=R.find(Ms);for(const A of f){const E=R.getSelectorFromElement(A),F=R.find(E).filter(j=>j===this._element);E!==null&&F.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return vd}static get DefaultType(){return bd}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let r=[];if(this._config.parent&&(r=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(A=>A!==this._element).map(A=>$n.getOrCreateInstance(A,{toggle:!1}))),r.length&&r[0]._isTransitioning||G.trigger(this._element,ud).defaultPrevented)return;for(const A of r)A.hide();const a=this._getDimension();this._element.classList.remove(qn),this._element.classList.add(Wr),this._element.style[a]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const f=`scroll${a[0].toUpperCase()+a.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Wr),this._element.classList.add(qn,js),this._element.style[a]="",G.trigger(this._element,fd)},this._element,!0),this._element.style[a]=`${this._element[f]}px`}hide(){if(this._isTransitioning||!this._isShown()||G.trigger(this._element,hd).defaultPrevented)return;const r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,O(this._element),this._element.classList.add(Wr),this._element.classList.remove(qn,js);for(const a of this._triggerArray){const f=R.getElementFromSelector(a);f&&!this._isShown(f)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0,this._element.style[r]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Wr),this._element.classList.add(qn),G.trigger(this._element,pd)},this._element,!0)}_isShown(r=this._element){return r.classList.contains(js)}_configAfterMerge(r){return r.toggle=!!r.toggle,r.parent=h(r.parent),r}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const r=this._getFirstLevelChildren(Ms);for(const a of r){const f=R.getElementFromSelector(a);f&&this._addAriaAndCollapsedClass([a],this._isShown(f))}}_getFirstLevelChildren(r){const a=R.find(md,this._config.parent);return R.find(r,this._config.parent).filter(f=>!a.includes(f))}_addAriaAndCollapsedClass(r,a){if(r.length)for(const f of r)f.classList.toggle("collapsed",!a),f.setAttribute("aria-expanded",a)}static jQueryInterface(r){const a={};return typeof r=="string"&&/show|hide/.test(r)&&(a.toggle=!1),this.each(function(){const f=$n.getOrCreateInstance(this,a);if(typeof r=="string"){if(f[r]===void 0)throw new TypeError(`No method named "${r}"`);f[r]()}})}}G.on(document,gd,Ms,function(l){(l.target.tagName==="A"||l.delegateTarget&&l.delegateTarget.tagName==="A")&&l.preventDefault();for(const r of R.getMultipleElementsFromSelector(this))$n.getOrCreateInstance(r,{toggle:!1}).toggle()}),L($n);var ut="top",At="bottom",Et="right",ft="left",zr="auto",Wn=[ut,At,Et,ft],En="start",zn="end",pa="clippingParents",Vs="viewport",Hn="popper",ga="reference",qs=Wn.reduce(function(l,r){return l.concat([r+"-"+En,r+"-"+zn])},[]),$s=[].concat(Wn,[zr]).reduce(function(l,r){return l.concat([r,r+"-"+En,r+"-"+zn])},[]),ma="beforeRead",va="read",ba="afterRead",_a="beforeMain",ya="main",wa="afterMain",xa="beforeWrite",Aa="write",Ea="afterWrite",Ta=[ma,va,ba,_a,ya,wa,xa,Aa,Ea];function qt(l){return l?(l.nodeName||"").toLowerCase():null}function Tt(l){if(l==null)return window;if(l.toString()!=="[object Window]"){var r=l.ownerDocument;return r&&r.defaultView||window}return l}function Tn(l){return l instanceof Tt(l).Element||l instanceof Element}function Pt(l){return l instanceof Tt(l).HTMLElement||l instanceof HTMLElement}function Ws(l){return typeof ShadowRoot<"u"&&(l instanceof Tt(l).ShadowRoot||l instanceof ShadowRoot)}const zs={name:"applyStyles",enabled:!0,phase:"write",fn:function(l){var r=l.state;Object.keys(r.elements).forEach(function(a){var f=r.styles[a]||{},A=r.attributes[a]||{},E=r.elements[a];Pt(E)&&qt(E)&&(Object.assign(E.style,f),Object.keys(A).forEach(function(F){var j=A[F];j===!1?E.removeAttribute(F):E.setAttribute(F,j===!0?"":j)}))})},effect:function(l){var r=l.state,a={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,a.popper),r.styles=a,r.elements.arrow&&Object.assign(r.elements.arrow.style,a.arrow),function(){Object.keys(r.elements).forEach(function(f){var A=r.elements[f],E=r.attributes[f]||{},F=Object.keys(r.styles.hasOwnProperty(f)?r.styles[f]:a[f]).reduce(function(j,$){return j[$]="",j},{});Pt(A)&&qt(A)&&(Object.assign(A.style,F),Object.keys(E).forEach(function(j){A.removeAttribute(j)}))})}},requires:["computeStyles"]};function $t(l){return l.split("-")[0]}var Sn=Math.max,Hr=Math.min,Xn=Math.round;function Hs(){var l=navigator.userAgentData;return l!=null&&l.brands&&Array.isArray(l.brands)?l.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function Sa(){return!/^((?!chrome|android).)*safari/i.test(Hs())}function Yn(l,r,a){r===void 0&&(r=!1),a===void 0&&(a=!1);var f=l.getBoundingClientRect(),A=1,E=1;r&&Pt(l)&&(A=l.offsetWidth>0&&Xn(f.width)/l.offsetWidth||1,E=l.offsetHeight>0&&Xn(f.height)/l.offsetHeight||1);var F=(Tn(l)?Tt(l):window).visualViewport,j=!Sa()&&a,$=(f.left+(j&&F?F.offsetLeft:0))/A,Q=(f.top+(j&&F?F.offsetTop:0))/E,J=f.width/A,Y=f.height/E;return{width:J,height:Y,top:Q,right:$+J,bottom:Q+Y,left:$,x:$,y:Q}}function Xs(l){var r=Yn(l),a=l.offsetWidth,f=l.offsetHeight;return Math.abs(r.width-a)<=1&&(a=r.width),Math.abs(r.height-f)<=1&&(f=r.height),{x:l.offsetLeft,y:l.offsetTop,width:a,height:f}}function La(l,r){var a=r.getRootNode&&r.getRootNode();if(l.contains(r))return!0;if(a&&Ws(a)){var f=r;do{if(f&&l.isSameNode(f))return!0;f=f.parentNode||f.host}while(f)}return!1}function Jt(l){return Tt(l).getComputedStyle(l)}function _d(l){return["table","td","th"].indexOf(qt(l))>=0}function un(l){return((Tn(l)?l.ownerDocument:l.document)||window.document).documentElement}function Xr(l){return qt(l)==="html"?l:l.assignedSlot||l.parentNode||(Ws(l)?l.host:null)||un(l)}function Ca(l){return Pt(l)&&Jt(l).position!=="fixed"?l.offsetParent:null}function pr(l){for(var r=Tt(l),a=Ca(l);a&&_d(a)&&Jt(a).position==="static";)a=Ca(a);return a&&(qt(a)==="html"||qt(a)==="body"&&Jt(a).position==="static")?r:a||function(f){var A=/firefox/i.test(Hs());if(/Trident/i.test(Hs())&&Pt(f)&&Jt(f).position==="fixed")return null;var E=Xr(f);for(Ws(E)&&(E=E.host);Pt(E)&&["html","body"].indexOf(qt(E))<0;){var F=Jt(E);if(F.transform!=="none"||F.perspective!=="none"||F.contain==="paint"||["transform","perspective"].indexOf(F.willChange)!==-1||A&&F.willChange==="filter"||A&&F.filter&&F.filter!=="none")return E;E=E.parentNode}return null}(l)||r}function Ys(l){return["top","bottom"].indexOf(l)>=0?"x":"y"}function gr(l,r,a){return Sn(l,Hr(r,a))}function Oa(l){return Object.assign({},{top:0,right:0,bottom:0,left:0},l)}function Pa(l,r){return r.reduce(function(a,f){return a[f]=l,a},{})}const Ia={name:"arrow",enabled:!0,phase:"main",fn:function(l){var r,a=l.state,f=l.name,A=l.options,E=a.elements.arrow,F=a.modifiersData.popperOffsets,j=$t(a.placement),$=Ys(j),Q=[ft,Et].indexOf(j)>=0?"height":"width";if(E&&F){var J=function(Ue,Ge){return Oa(typeof(Ue=typeof Ue=="function"?Ue(Object.assign({},Ge.rects,{placement:Ge.placement})):Ue)!="number"?Ue:Pa(Ue,Wn))}(A.padding,a),Y=Xs(E),me=$==="y"?ut:ft,oe=$==="y"?At:Et,ue=a.rects.reference[Q]+a.rects.reference[$]-F[$]-a.rects.popper[Q],ce=F[$]-a.rects.reference[$],fe=pr(E),Be=fe?$==="y"?fe.clientHeight||0:fe.clientWidth||0:0,Me=ue/2-ce/2,_e=J[me],Oe=Be-Y[Q]-J[oe],be=Be/2-Y[Q]/2+Me,we=gr(_e,be,Oe),ke=$;a.modifiersData[f]=((r={})[ke]=we,r.centerOffset=we-be,r)}},effect:function(l){var r=l.state,a=l.options.element,f=a===void 0?"[data-popper-arrow]":a;f!=null&&(typeof f!="string"||(f=r.elements.popper.querySelector(f)))&&La(r.elements.popper,f)&&(r.elements.arrow=f)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Kn(l){return l.split("-")[1]}var yd={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fa(l){var r,a=l.popper,f=l.popperRect,A=l.placement,E=l.variation,F=l.offsets,j=l.position,$=l.gpuAcceleration,Q=l.adaptive,J=l.roundOffsets,Y=l.isFixed,me=F.x,oe=me===void 0?0:me,ue=F.y,ce=ue===void 0?0:ue,fe=typeof J=="function"?J({x:oe,y:ce}):{x:oe,y:ce};oe=fe.x,ce=fe.y;var Be=F.hasOwnProperty("x"),Me=F.hasOwnProperty("y"),_e=ft,Oe=ut,be=window;if(Q){var we=pr(a),ke="clientHeight",Ue="clientWidth";we===Tt(a)&&Jt(we=un(a)).position!=="static"&&j==="absolute"&&(ke="scrollHeight",Ue="scrollWidth"),(A===ut||(A===ft||A===Et)&&E===zn)&&(Oe=At,ce-=(Y&&we===be&&be.visualViewport?be.visualViewport.height:we[ke])-f.height,ce*=$?1:-1),A!==ft&&(A!==ut&&A!==At||E!==zn)||(_e=Et,oe-=(Y&&we===be&&be.visualViewport?be.visualViewport.width:we[Ue])-f.width,oe*=$?1:-1)}var Ge,Ke=Object.assign({position:j},Q&&yd),St=J===!0?function(Ut,ht){var Ft=Ut.x,Rt=Ut.y,Xe=ht.devicePixelRatio||1;return{x:Xn(Ft*Xe)/Xe||0,y:Xn(Rt*Xe)/Xe||0}}({x:oe,y:ce},Tt(a)):{x:oe,y:ce};return oe=St.x,ce=St.y,$?Object.assign({},Ke,((Ge={})[Oe]=Me?"0":"",Ge[_e]=Be?"0":"",Ge.transform=(be.devicePixelRatio||1)<=1?"translate("+oe+"px, "+ce+"px)":"translate3d("+oe+"px, "+ce+"px, 0)",Ge)):Object.assign({},Ke,((r={})[Oe]=Me?ce+"px":"",r[_e]=Be?oe+"px":"",r.transform="",r))}const Ks={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(l){var r=l.state,a=l.options,f=a.gpuAcceleration,A=f===void 0||f,E=a.adaptive,F=E===void 0||E,j=a.roundOffsets,$=j===void 0||j,Q={placement:$t(r.placement),variation:Kn(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:A,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,Fa(Object.assign({},Q,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:F,roundOffsets:$})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,Fa(Object.assign({},Q,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:$})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})},data:{}};var Yr={passive:!0};const Qs={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(l){var r=l.state,a=l.instance,f=l.options,A=f.scroll,E=A===void 0||A,F=f.resize,j=F===void 0||F,$=Tt(r.elements.popper),Q=[].concat(r.scrollParents.reference,r.scrollParents.popper);return E&&Q.forEach(function(J){J.addEventListener("scroll",a.update,Yr)}),j&&$.addEventListener("resize",a.update,Yr),function(){E&&Q.forEach(function(J){J.removeEventListener("scroll",a.update,Yr)}),j&&$.removeEventListener("resize",a.update,Yr)}},data:{}};var wd={left:"right",right:"left",bottom:"top",top:"bottom"};function Kr(l){return l.replace(/left|right|bottom|top/g,function(r){return wd[r]})}var xd={start:"end",end:"start"};function Ra(l){return l.replace(/start|end/g,function(r){return xd[r]})}function Js(l){var r=Tt(l);return{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Zs(l){return Yn(un(l)).left+Js(l).scrollLeft}function ei(l){var r=Jt(l),a=r.overflow,f=r.overflowX,A=r.overflowY;return/auto|scroll|overlay|hidden/.test(a+A+f)}function ka(l){return["html","body","#document"].indexOf(qt(l))>=0?l.ownerDocument.body:Pt(l)&&ei(l)?l:ka(Xr(l))}function mr(l,r){var a;r===void 0&&(r=[]);var f=ka(l),A=f===((a=l.ownerDocument)==null?void 0:a.body),E=Tt(f),F=A?[E].concat(E.visualViewport||[],ei(f)?f:[]):f,j=r.concat(F);return A?j:j.concat(mr(Xr(F)))}function ti(l){return Object.assign({},l,{left:l.x,top:l.y,right:l.x+l.width,bottom:l.y+l.height})}function Ga(l,r,a){return r===Vs?ti(function(f,A){var E=Tt(f),F=un(f),j=E.visualViewport,$=F.clientWidth,Q=F.clientHeight,J=0,Y=0;if(j){$=j.width,Q=j.height;var me=Sa();(me||!me&&A==="fixed")&&(J=j.offsetLeft,Y=j.offsetTop)}return{width:$,height:Q,x:J+Zs(f),y:Y}}(l,a)):Tn(r)?function(f,A){var E=Yn(f,!1,A==="fixed");return E.top=E.top+f.clientTop,E.left=E.left+f.clientLeft,E.bottom=E.top+f.clientHeight,E.right=E.left+f.clientWidth,E.width=f.clientWidth,E.height=f.clientHeight,E.x=E.left,E.y=E.top,E}(r,a):ti(function(f){var A,E=un(f),F=Js(f),j=(A=f.ownerDocument)==null?void 0:A.body,$=Sn(E.scrollWidth,E.clientWidth,j?j.scrollWidth:0,j?j.clientWidth:0),Q=Sn(E.scrollHeight,E.clientHeight,j?j.scrollHeight:0,j?j.clientHeight:0),J=-F.scrollLeft+Zs(f),Y=-F.scrollTop;return Jt(j||E).direction==="rtl"&&(J+=Sn(E.clientWidth,j?j.clientWidth:0)-$),{width:$,height:Q,x:J,y:Y}}(un(l)))}function Da(l){var r,a=l.reference,f=l.element,A=l.placement,E=A?$t(A):null,F=A?Kn(A):null,j=a.x+a.width/2-f.width/2,$=a.y+a.height/2-f.height/2;switch(E){case ut:r={x:j,y:a.y-f.height};break;case At:r={x:j,y:a.y+a.height};break;case Et:r={x:a.x+a.width,y:$};break;case ft:r={x:a.x-f.width,y:$};break;default:r={x:a.x,y:a.y}}var Q=E?Ys(E):null;if(Q!=null){var J=Q==="y"?"height":"width";switch(F){case En:r[Q]=r[Q]-(a[J]/2-f[J]/2);break;case zn:r[Q]=r[Q]+(a[J]/2-f[J]/2)}}return r}function Qn(l,r){r===void 0&&(r={});var a=r,f=a.placement,A=f===void 0?l.placement:f,E=a.strategy,F=E===void 0?l.strategy:E,j=a.boundary,$=j===void 0?pa:j,Q=a.rootBoundary,J=Q===void 0?Vs:Q,Y=a.elementContext,me=Y===void 0?Hn:Y,oe=a.altBoundary,ue=oe!==void 0&&oe,ce=a.padding,fe=ce===void 0?0:ce,Be=Oa(typeof fe!="number"?fe:Pa(fe,Wn)),Me=me===Hn?ga:Hn,_e=l.rects.popper,Oe=l.elements[ue?Me:me],be=function(ht,Ft,Rt,Xe){var Wt=Ft==="clippingParents"?function(Ne){var pt=mr(Xr(Ne)),kt=["absolute","fixed"].indexOf(Jt(Ne).position)>=0&&Pt(Ne)?pr(Ne):Ne;return Tn(kt)?pt.filter(function(hn){return Tn(hn)&&La(hn,kt)&&qt(hn)!=="body"}):[]}(ht):[].concat(Ft),zt=[].concat(Wt,[Rt]),er=zt[0],nt=zt.reduce(function(Ne,pt){var kt=Ga(ht,pt,Xe);return Ne.top=Sn(kt.top,Ne.top),Ne.right=Hr(kt.right,Ne.right),Ne.bottom=Hr(kt.bottom,Ne.bottom),Ne.left=Sn(kt.left,Ne.left),Ne},Ga(ht,er,Xe));return nt.width=nt.right-nt.left,nt.height=nt.bottom-nt.top,nt.x=nt.left,nt.y=nt.top,nt}(Tn(Oe)?Oe:Oe.contextElement||un(l.elements.popper),$,J,F),we=Yn(l.elements.reference),ke=Da({reference:we,element:_e,placement:A}),Ue=ti(Object.assign({},_e,ke)),Ge=me===Hn?Ue:we,Ke={top:be.top-Ge.top+Be.top,bottom:Ge.bottom-be.bottom+Be.bottom,left:be.left-Ge.left+Be.left,right:Ge.right-be.right+Be.right},St=l.modifiersData.offset;if(me===Hn&&St){var Ut=St[A];Object.keys(Ke).forEach(function(ht){var Ft=[Et,At].indexOf(ht)>=0?1:-1,Rt=[ut,At].indexOf(ht)>=0?"y":"x";Ke[ht]+=Ut[Rt]*Ft})}return Ke}function Ad(l,r){r===void 0&&(r={});var a=r,f=a.placement,A=a.boundary,E=a.rootBoundary,F=a.padding,j=a.flipVariations,$=a.allowedAutoPlacements,Q=$===void 0?$s:$,J=Kn(f),Y=J?j?qs:qs.filter(function(ue){return Kn(ue)===J}):Wn,me=Y.filter(function(ue){return Q.indexOf(ue)>=0});me.length===0&&(me=Y);var oe=me.reduce(function(ue,ce){return ue[ce]=Qn(l,{placement:ce,boundary:A,rootBoundary:E,padding:F})[$t(ce)],ue},{});return Object.keys(oe).sort(function(ue,ce){return oe[ue]-oe[ce]})}const Ba={name:"flip",enabled:!0,phase:"main",fn:function(l){var r=l.state,a=l.options,f=l.name;if(!r.modifiersData[f]._skip){for(var A=a.mainAxis,E=A===void 0||A,F=a.altAxis,j=F===void 0||F,$=a.fallbackPlacements,Q=a.padding,J=a.boundary,Y=a.rootBoundary,me=a.altBoundary,oe=a.flipVariations,ue=oe===void 0||oe,ce=a.allowedAutoPlacements,fe=r.options.placement,Be=$t(fe),Me=$||(Be!==fe&&ue?function(Ne){if($t(Ne)===zr)return[];var pt=Kr(Ne);return[Ra(Ne),pt,Ra(pt)]}(fe):[Kr(fe)]),_e=[fe].concat(Me).reduce(function(Ne,pt){return Ne.concat($t(pt)===zr?Ad(r,{placement:pt,boundary:J,rootBoundary:Y,padding:Q,flipVariations:ue,allowedAutoPlacements:ce}):pt)},[]),Oe=r.rects.reference,be=r.rects.popper,we=new Map,ke=!0,Ue=_e[0],Ge=0;Ge<_e.length;Ge++){var Ke=_e[Ge],St=$t(Ke),Ut=Kn(Ke)===En,ht=[ut,At].indexOf(St)>=0,Ft=ht?"width":"height",Rt=Qn(r,{placement:Ke,boundary:J,rootBoundary:Y,altBoundary:me,padding:Q}),Xe=ht?Ut?Et:ft:Ut?At:ut;Oe[Ft]>be[Ft]&&(Xe=Kr(Xe));var Wt=Kr(Xe),zt=[];if(E&&zt.push(Rt[St]<=0),j&&zt.push(Rt[Xe]<=0,Rt[Wt]<=0),zt.every(function(Ne){return Ne})){Ue=Ke,ke=!1;break}we.set(Ke,zt)}if(ke)for(var er=function(Ne){var pt=_e.find(function(kt){var hn=we.get(kt);if(hn)return hn.slice(0,Ne).every(function(is){return is})});if(pt)return Ue=pt,"break"},nt=ue?3:1;nt>0&&er(nt)!=="break";nt--);r.placement!==Ue&&(r.modifiersData[f]._skip=!0,r.placement=Ue,r.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ua(l,r,a){return a===void 0&&(a={x:0,y:0}),{top:l.top-r.height-a.y,right:l.right-r.width+a.x,bottom:l.bottom-r.height+a.y,left:l.left-r.width-a.x}}function Na(l){return[ut,Et,At,ft].some(function(r){return l[r]>=0})}const ja={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(l){var r=l.state,a=l.name,f=r.rects.reference,A=r.rects.popper,E=r.modifiersData.preventOverflow,F=Qn(r,{elementContext:"reference"}),j=Qn(r,{altBoundary:!0}),$=Ua(F,f),Q=Ua(j,A,E),J=Na($),Y=Na(Q);r.modifiersData[a]={referenceClippingOffsets:$,popperEscapeOffsets:Q,isReferenceHidden:J,hasPopperEscaped:Y},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":J,"data-popper-escaped":Y})}},Ma={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(l){var r=l.state,a=l.options,f=l.name,A=a.offset,E=A===void 0?[0,0]:A,F=$s.reduce(function(J,Y){return J[Y]=function(me,oe,ue){var ce=$t(me),fe=[ft,ut].indexOf(ce)>=0?-1:1,Be=typeof ue=="function"?ue(Object.assign({},oe,{placement:me})):ue,Me=Be[0],_e=Be[1];return Me=Me||0,_e=(_e||0)*fe,[ft,Et].indexOf(ce)>=0?{x:_e,y:Me}:{x:Me,y:_e}}(Y,r.rects,E),J},{}),j=F[r.placement],$=j.x,Q=j.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=$,r.modifiersData.popperOffsets.y+=Q),r.modifiersData[f]=F}},ni={name:"popperOffsets",enabled:!0,phase:"read",fn:function(l){var r=l.state,a=l.name;r.modifiersData[a]=Da({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})},data:{}},Va={name:"preventOverflow",enabled:!0,phase:"main",fn:function(l){var r=l.state,a=l.options,f=l.name,A=a.mainAxis,E=A===void 0||A,F=a.altAxis,j=F!==void 0&&F,$=a.boundary,Q=a.rootBoundary,J=a.altBoundary,Y=a.padding,me=a.tether,oe=me===void 0||me,ue=a.tetherOffset,ce=ue===void 0?0:ue,fe=Qn(r,{boundary:$,rootBoundary:Q,padding:Y,altBoundary:J}),Be=$t(r.placement),Me=Kn(r.placement),_e=!Me,Oe=Ys(Be),be=Oe==="x"?"y":"x",we=r.modifiersData.popperOffsets,ke=r.rects.reference,Ue=r.rects.popper,Ge=typeof ce=="function"?ce(Object.assign({},r.rects,{placement:r.placement})):ce,Ke=typeof Ge=="number"?{mainAxis:Ge,altAxis:Ge}:Object.assign({mainAxis:0,altAxis:0},Ge),St=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,Ut={x:0,y:0};if(we){if(E){var ht,Ft=Oe==="y"?ut:ft,Rt=Oe==="y"?At:Et,Xe=Oe==="y"?"height":"width",Wt=we[Oe],zt=Wt+fe[Ft],er=Wt-fe[Rt],nt=oe?-Ue[Xe]/2:0,Ne=Me===En?ke[Xe]:Ue[Xe],pt=Me===En?-Ue[Xe]:-ke[Xe],kt=r.elements.arrow,hn=oe&&kt?Xs(kt):{width:0,height:0},is=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Oo=is[Ft],Po=is[Rt],as=gr(0,ke[Xe],hn[Xe]),tf=_e?ke[Xe]/2-nt-as-Oo-Ke.mainAxis:Ne-as-Oo-Ke.mainAxis,nf=_e?-ke[Xe]/2+nt+as+Po+Ke.mainAxis:pt+as+Po+Ke.mainAxis,gi=r.elements.arrow&&pr(r.elements.arrow),rf=gi?Oe==="y"?gi.clientTop||0:gi.clientLeft||0:0,Io=(ht=St==null?void 0:St[Oe])!=null?ht:0,sf=Wt+nf-Io,Fo=gr(oe?Hr(zt,Wt+tf-Io-rf):zt,Wt,oe?Sn(er,sf):er);we[Oe]=Fo,Ut[Oe]=Fo-Wt}if(j){var Ro,af=Oe==="x"?ut:ft,of=Oe==="x"?At:Et,kn=we[be],os=be==="y"?"height":"width",ko=kn+fe[af],Go=kn-fe[of],mi=[ut,ft].indexOf(Be)!==-1,Do=(Ro=St==null?void 0:St[be])!=null?Ro:0,Bo=mi?ko:kn-ke[os]-Ue[os]-Do+Ke.altAxis,Uo=mi?kn+ke[os]+Ue[os]-Do-Ke.altAxis:Go,No=oe&&mi?function(lf,cf,vi){var jo=gr(lf,cf,vi);return jo>vi?vi:jo}(Bo,kn,Uo):gr(oe?Bo:ko,kn,oe?Uo:Go);we[be]=No,Ut[be]=No-kn}r.modifiersData[f]=Ut}},requiresIfExists:["offset"]};function Ed(l,r,a){a===void 0&&(a=!1);var f,A,E=Pt(r),F=Pt(r)&&function(Y){var me=Y.getBoundingClientRect(),oe=Xn(me.width)/Y.offsetWidth||1,ue=Xn(me.height)/Y.offsetHeight||1;return oe!==1||ue!==1}(r),j=un(r),$=Yn(l,F,a),Q={scrollLeft:0,scrollTop:0},J={x:0,y:0};return(E||!E&&!a)&&((qt(r)!=="body"||ei(j))&&(Q=(f=r)!==Tt(f)&&Pt(f)?{scrollLeft:(A=f).scrollLeft,scrollTop:A.scrollTop}:Js(f)),Pt(r)?((J=Yn(r,!0)).x+=r.clientLeft,J.y+=r.clientTop):j&&(J.x=Zs(j))),{x:$.left+Q.scrollLeft-J.x,y:$.top+Q.scrollTop-J.y,width:$.width,height:$.height}}function Td(l){var r=new Map,a=new Set,f=[];function A(E){a.add(E.name),[].concat(E.requires||[],E.requiresIfExists||[]).forEach(function(F){if(!a.has(F)){var j=r.get(F);j&&A(j)}}),f.push(E)}return l.forEach(function(E){r.set(E.name,E)}),l.forEach(function(E){a.has(E.name)||A(E)}),f}var qa={placement:"bottom",modifiers:[],strategy:"absolute"};function $a(){for(var l=arguments.length,r=new Array(l),a=0;a<l;a++)r[a]=arguments[a];return!r.some(function(f){return!(f&&typeof f.getBoundingClientRect=="function")})}function Qr(l){l===void 0&&(l={});var r=l,a=r.defaultModifiers,f=a===void 0?[]:a,A=r.defaultOptions,E=A===void 0?qa:A;return function(F,j,$){$===void 0&&($=E);var Q,J,Y={placement:"bottom",orderedModifiers:[],options:Object.assign({},qa,E),modifiersData:{},elements:{reference:F,popper:j},attributes:{},styles:{}},me=[],oe=!1,ue={state:Y,setOptions:function(fe){var Be=typeof fe=="function"?fe(Y.options):fe;ce(),Y.options=Object.assign({},E,Y.options,Be),Y.scrollParents={reference:Tn(F)?mr(F):F.contextElement?mr(F.contextElement):[],popper:mr(j)};var Me,_e,Oe=function(be){var we=Td(be);return Ta.reduce(function(ke,Ue){return ke.concat(we.filter(function(Ge){return Ge.phase===Ue}))},[])}((Me=[].concat(f,Y.options.modifiers),_e=Me.reduce(function(be,we){var ke=be[we.name];return be[we.name]=ke?Object.assign({},ke,we,{options:Object.assign({},ke.options,we.options),data:Object.assign({},ke.data,we.data)}):we,be},{}),Object.keys(_e).map(function(be){return _e[be]})));return Y.orderedModifiers=Oe.filter(function(be){return be.enabled}),Y.orderedModifiers.forEach(function(be){var we=be.name,ke=be.options,Ue=ke===void 0?{}:ke,Ge=be.effect;if(typeof Ge=="function"){var Ke=Ge({state:Y,name:we,instance:ue,options:Ue});me.push(Ke||function(){})}}),ue.update()},forceUpdate:function(){if(!oe){var fe=Y.elements,Be=fe.reference,Me=fe.popper;if($a(Be,Me)){Y.rects={reference:Ed(Be,pr(Me),Y.options.strategy==="fixed"),popper:Xs(Me)},Y.reset=!1,Y.placement=Y.options.placement,Y.orderedModifiers.forEach(function(Ge){return Y.modifiersData[Ge.name]=Object.assign({},Ge.data)});for(var _e=0;_e<Y.orderedModifiers.length;_e++)if(Y.reset!==!0){var Oe=Y.orderedModifiers[_e],be=Oe.fn,we=Oe.options,ke=we===void 0?{}:we,Ue=Oe.name;typeof be=="function"&&(Y=be({state:Y,options:ke,name:Ue,instance:ue})||Y)}else Y.reset=!1,_e=-1}}},update:(Q=function(){return new Promise(function(fe){ue.forceUpdate(),fe(Y)})},function(){return J||(J=new Promise(function(fe){Promise.resolve().then(function(){J=void 0,fe(Q())})})),J}),destroy:function(){ce(),oe=!0}};if(!$a(F,j))return ue;function ce(){me.forEach(function(fe){return fe()}),me=[]}return ue.setOptions($).then(function(fe){!oe&&$.onFirstUpdate&&$.onFirstUpdate(fe)}),ue}}var Sd=Qr(),Ld=Qr({defaultModifiers:[Qs,ni,Ks,zs]}),ri=Qr({defaultModifiers:[Qs,ni,Ks,zs,Ma,Ba,Va,Ia,ja]});const Wa=Object.freeze(Object.defineProperty({__proto__:null,afterMain:wa,afterRead:ba,afterWrite:Ea,applyStyles:zs,arrow:Ia,auto:zr,basePlacements:Wn,beforeMain:_a,beforeRead:ma,beforeWrite:xa,bottom:At,clippingParents:pa,computeStyles:Ks,createPopper:ri,createPopperBase:Sd,createPopperLite:Ld,detectOverflow:Qn,end:zn,eventListeners:Qs,flip:Ba,hide:ja,left:ft,main:ya,modifierPhases:Ta,offset:Ma,placements:$s,popper:Hn,popperGenerator:Qr,popperOffsets:ni,preventOverflow:Va,read:va,reference:ga,right:Et,start:En,top:ut,variationPlacements:qs,viewport:Vs,write:Aa},Symbol.toStringTag,{value:"Module"})),za="dropdown",Ln=".bs.dropdown",si=".data-api",Cd="ArrowUp",Ha="ArrowDown",Od=`hide${Ln}`,Pd=`hidden${Ln}`,Id=`show${Ln}`,Fd=`shown${Ln}`,Xa=`click${Ln}${si}`,Ya=`keydown${Ln}${si}`,Rd=`keyup${Ln}${si}`,Jn="show",Cn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',kd=`${Cn}.${Jn}`,Jr=".dropdown-menu",Gd=P()?"top-end":"top-start",Dd=P()?"top-start":"top-end",Bd=P()?"bottom-end":"bottom-start",Ud=P()?"bottom-start":"bottom-end",Nd=P()?"left-start":"right-start",jd=P()?"right-start":"left-start",Md={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vd={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Bt extends Ee{constructor(r,a){super(r,a),this._popper=null,this._parent=this._element.parentNode,this._menu=R.next(this._element,Jr)[0]||R.prev(this._element,Jr)[0]||R.findOne(Jr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Md}static get DefaultType(){return Vd}static get NAME(){return za}toggle(){return this._isShown()?this.hide():this.show()}show(){if(g(this._element)||this._isShown())return;const r={relatedTarget:this._element};if(!G.trigger(this._element,Id,r).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const a of[].concat(...document.body.children))G.on(a,"mouseover",S);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Jn),this._element.classList.add(Jn),G.trigger(this._element,Fd,r)}}hide(){if(g(this._element)||!this._isShown())return;const r={relatedTarget:this._element};this._completeHide(r)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(r){if(!G.trigger(this._element,Od,r).defaultPrevented){if("ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))G.off(a,"mouseover",S);this._popper&&this._popper.destroy(),this._menu.classList.remove(Jn),this._element.classList.remove(Jn),this._element.setAttribute("aria-expanded","false"),Le.removeDataAttribute(this._menu,"popper"),G.trigger(this._element,Pd,r),this._element.focus()}}_getConfig(r){if(typeof(r=super._getConfig(r)).reference=="object"&&!c(r.reference)&&typeof r.reference.getBoundingClientRect!="function")throw new TypeError(`${za.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return r}_createPopper(){if(Wa===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let r=this._element;this._config.reference==="parent"?r=this._parent:c(this._config.reference)?r=h(this._config.reference):typeof this._config.reference=="object"&&(r=this._config.reference);const a=this._getPopperConfig();this._popper=ri(r,this._menu,a)}_isShown(){return this._menu.classList.contains(Jn)}_getPlacement(){const r=this._parent;if(r.classList.contains("dropend"))return Nd;if(r.classList.contains("dropstart"))return jd;if(r.classList.contains("dropup-center"))return"top";if(r.classList.contains("dropdown-center"))return"bottom";const a=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return r.classList.contains("dropup")?a?Dd:Gd:a?Ud:Bd}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:r}=this._config;return typeof r=="string"?r.split(",").map(a=>Number.parseInt(a,10)):typeof r=="function"?a=>r(a,this._element):r}_getPopperConfig(){const r={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Le.setDataAttribute(this._menu,"popper","static"),r.modifiers=[{name:"applyStyles",enabled:!1}]),{...r,...p(this._config.popperConfig,[void 0,r])}}_selectMenuItem({key:r,target:a}){const f=R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(A=>_(A));f.length&&x(f,a,r===Ha,!f.includes(a)).focus()}static jQueryInterface(r){return this.each(function(){const a=Bt.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}static clearMenus(r){if(r.button===2||r.type==="keyup"&&r.key!=="Tab")return;const a=R.find(kd);for(const f of a){const A=Bt.getInstance(f);if(!A||A._config.autoClose===!1)continue;const E=r.composedPath(),F=E.includes(A._menu);if(E.includes(A._element)||A._config.autoClose==="inside"&&!F||A._config.autoClose==="outside"&&F||A._menu.contains(r.target)&&(r.type==="keyup"&&r.key==="Tab"||/input|select|option|textarea|form/i.test(r.target.tagName)))continue;const j={relatedTarget:A._element};r.type==="click"&&(j.clickEvent=r),A._completeHide(j)}}static dataApiKeydownHandler(r){const a=/input|textarea/i.test(r.target.tagName),f=r.key==="Escape",A=[Cd,Ha].includes(r.key);if(!A&&!f||a&&!f)return;r.preventDefault();const E=this.matches(Cn)?this:R.prev(this,Cn)[0]||R.next(this,Cn)[0]||R.findOne(Cn,r.delegateTarget.parentNode),F=Bt.getOrCreateInstance(E);if(A)return r.stopPropagation(),F.show(),void F._selectMenuItem(r);F._isShown()&&(r.stopPropagation(),F.hide(),E.focus())}}G.on(document,Ya,Cn,Bt.dataApiKeydownHandler),G.on(document,Ya,Jr,Bt.dataApiKeydownHandler),G.on(document,Xa,Bt.clearMenus),G.on(document,Rd,Bt.clearMenus),G.on(document,Xa,Cn,function(l){l.preventDefault(),Bt.getOrCreateInstance(this).toggle()}),L(Bt);const Ka="backdrop",Qa="show",Ja=`mousedown.bs.${Ka}`,qd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},$d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Za extends Ze{constructor(r){super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null}static get Default(){return qd}static get DefaultType(){return $d}static get NAME(){return Ka}show(r){if(!this._config.isVisible)return void p(r);this._append();const a=this._getElement();this._config.isAnimated&&O(a),a.classList.add(Qa),this._emulateAnimation(()=>{p(r)})}hide(r){this._config.isVisible?(this._getElement().classList.remove(Qa),this._emulateAnimation(()=>{this.dispose(),p(r)})):p(r)}dispose(){this._isAppended&&(G.off(this._element,Ja),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const r=document.createElement("div");r.className=this._config.className,this._config.isAnimated&&r.classList.add("fade"),this._element=r}return this._element}_configAfterMerge(r){return r.rootElement=h(r.rootElement),r}_append(){if(this._isAppended)return;const r=this._getElement();this._config.rootElement.append(r),G.on(r,Ja,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(r){y(r,this._getElement(),this._config.isAnimated)}}const Zr=".bs.focustrap",Wd=`focusin${Zr}`,zd=`keydown.tab${Zr}`,eo="backward",Hd={autofocus:!0,trapElement:null},Xd={autofocus:"boolean",trapElement:"element"};class to extends Ze{constructor(r){super(),this._config=this._getConfig(r),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Hd}static get DefaultType(){return Xd}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),G.off(document,Zr),G.on(document,Wd,r=>this._handleFocusin(r)),G.on(document,zd,r=>this._handleKeydown(r)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,G.off(document,Zr))}_handleFocusin(r){const{trapElement:a}=this._config;if(r.target===document||r.target===a||a.contains(r.target))return;const f=R.focusableChildren(a);f.length===0?a.focus():this._lastTabNavDirection===eo?f[f.length-1].focus():f[0].focus()}_handleKeydown(r){r.key==="Tab"&&(this._lastTabNavDirection=r.shiftKey?eo:"forward")}}const no=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ro=".sticky-top",es="padding-right",so="margin-right";class ii{constructor(){this._element=document.body}getWidth(){const r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}hide(){const r=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,es,a=>a+r),this._setElementAttributes(no,es,a=>a+r),this._setElementAttributes(ro,so,a=>a-r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,es),this._resetElementAttributes(no,es),this._resetElementAttributes(ro,so)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(r,a,f){const A=this.getWidth();this._applyManipulationCallback(r,E=>{if(E!==this._element&&window.innerWidth>E.clientWidth+A)return;this._saveInitialAttribute(E,a);const F=window.getComputedStyle(E).getPropertyValue(a);E.style.setProperty(a,`${f(Number.parseFloat(F))}px`)})}_saveInitialAttribute(r,a){const f=r.style.getPropertyValue(a);f&&Le.setDataAttribute(r,a,f)}_resetElementAttributes(r,a){this._applyManipulationCallback(r,f=>{const A=Le.getDataAttribute(f,a);A!==null?(Le.removeDataAttribute(f,a),f.style.setProperty(a,A)):f.style.removeProperty(a)})}_applyManipulationCallback(r,a){if(c(r))a(r);else for(const f of R.find(r,this._element))a(f)}}const It=".bs.modal",Yd=`hide${It}`,Kd=`hidePrevented${It}`,io=`hidden${It}`,ao=`show${It}`,Qd=`shown${It}`,Jd=`resize${It}`,Zd=`click.dismiss${It}`,eu=`mousedown.dismiss${It}`,tu=`keydown.dismiss${It}`,nu=`click${It}.data-api`,oo="modal-open",lo="show",ai="modal-static",ru={backdrop:!0,focus:!0,keyboard:!0},su={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends Ee{constructor(r,a){super(r,a),this._dialog=R.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ii,this._addEventListeners()}static get Default(){return ru}static get DefaultType(){return su}static get NAME(){return"modal"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||G.trigger(this._element,ao,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(oo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){this._isShown&&!this._isTransitioning&&(G.trigger(this._element,Yd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(lo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){G.off(window,It),G.off(this._dialog,It),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Za({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new to({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const a=R.findOne(".modal-body",this._dialog);a&&(a.scrollTop=0),O(this._element),this._element.classList.add(lo),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,G.trigger(this._element,Qd,{relatedTarget:r})},this._dialog,this._isAnimated())}_addEventListeners(){G.on(this._element,tu,r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),G.on(window,Jd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),G.on(this._element,eu,r=>{G.one(this._element,Zd,a=>{this._element===r.target&&this._element===a.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(oo),this._resetAdjustments(),this._scrollBar.reset(),G.trigger(this._element,io)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(G.trigger(this._element,Kd).defaultPrevented)return;const r=this._element.scrollHeight>document.documentElement.clientHeight,a=this._element.style.overflowY;a==="hidden"||this._element.classList.contains(ai)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add(ai),this._queueCallback(()=>{this._element.classList.remove(ai),this._queueCallback(()=>{this._element.style.overflowY=a},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const r=this._element.scrollHeight>document.documentElement.clientHeight,a=this._scrollBar.getWidth(),f=a>0;if(f&&!r){const A=P()?"paddingLeft":"paddingRight";this._element.style[A]=`${a}px`}if(!f&&r){const A=P()?"paddingRight":"paddingLeft";this._element.style[A]=`${a}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,a){return this.each(function(){const f=On.getOrCreateInstance(this,r);if(typeof r=="string"){if(f[r]===void 0)throw new TypeError(`No method named "${r}"`);f[r](a)}})}}G.on(document,nu,'[data-bs-toggle="modal"]',function(l){const r=R.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&l.preventDefault(),G.one(r,ao,f=>{f.defaultPrevented||G.one(r,io,()=>{_(this)&&this.focus()})});const a=R.findOne(".modal.show");a&&On.getInstance(a).hide(),On.getOrCreateInstance(r).toggle(this)}),W(On),L(On);const Zt=".bs.offcanvas",co=".data-api",iu=`load${Zt}${co}`,uo="show",fo="showing",ho="hiding",po=".offcanvas.show",au=`show${Zt}`,ou=`shown${Zt}`,lu=`hide${Zt}`,go=`hidePrevented${Zt}`,mo=`hidden${Zt}`,cu=`resize${Zt}`,du=`click${Zt}${co}`,uu=`keydown.dismiss${Zt}`,fu={backdrop:!0,keyboard:!0,scroll:!1},hu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class en extends Ee{constructor(r,a){super(r,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return fu}static get DefaultType(){return hu}static get NAME(){return"offcanvas"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||G.trigger(this._element,au,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ii().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fo),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(uo),this._element.classList.remove(fo),G.trigger(this._element,ou,{relatedTarget:r})},this._element,!0))}hide(){this._isShown&&(G.trigger(this._element,lu).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ho),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(uo,ho),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ii().reset(),G.trigger(this._element,mo)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const r=!!this._config.backdrop;return new Za({className:"offcanvas-backdrop",isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?()=>{this._config.backdrop!=="static"?this.hide():G.trigger(this._element,go)}:null})}_initializeFocusTrap(){return new to({trapElement:this._element})}_addEventListeners(){G.on(this._element,uu,r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():G.trigger(this._element,go))})}static jQueryInterface(r){return this.each(function(){const a=en.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r](this)}})}}G.on(document,du,'[data-bs-toggle="offcanvas"]',function(l){const r=R.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&l.preventDefault(),g(this))return;G.one(r,mo,()=>{_(this)&&this.focus()});const a=R.findOne(po);a&&a!==r&&en.getInstance(a).hide(),en.getOrCreateInstance(r).toggle(this)}),G.on(window,iu,()=>{for(const l of R.find(po))en.getOrCreateInstance(l).show()}),G.on(window,cu,()=>{for(const l of R.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(l).position!=="fixed"&&en.getOrCreateInstance(l).hide()}),W(en),L(en);const vo={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},pu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),gu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,mu=(l,r)=>{const a=l.nodeName.toLowerCase();return r.includes(a)?!pu.has(a)||!!gu.test(l.nodeValue):r.filter(f=>f instanceof RegExp).some(f=>f.test(a))},vu={allowList:vo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},bu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},_u={entry:"(string|element|function|null)",selector:"(string|element)"};class yu extends Ze{constructor(r){super(),this._config=this._getConfig(r)}static get Default(){return vu}static get DefaultType(){return bu}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(r=>this._resolvePossibleFunction(r)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(r){return this._checkContent(r),this._config.content={...this._config.content,...r},this}toHtml(){const r=document.createElement("div");r.innerHTML=this._maybeSanitize(this._config.template);for(const[A,E]of Object.entries(this._config.content))this._setContent(r,E,A);const a=r.children[0],f=this._resolvePossibleFunction(this._config.extraClass);return f&&a.classList.add(...f.split(" ")),a}_typeCheckConfig(r){super._typeCheckConfig(r),this._checkContent(r.content)}_checkContent(r){for(const[a,f]of Object.entries(r))super._typeCheckConfig({selector:a,entry:f},_u)}_setContent(r,a,f){const A=R.findOne(f,r);A&&((a=this._resolvePossibleFunction(a))?c(a)?this._putElementInTemplate(h(a),A):this._config.html?A.innerHTML=this._maybeSanitize(a):A.textContent=a:A.remove())}_maybeSanitize(r){return this._config.sanitize?function(a,f,A){if(!a.length)return a;if(A&&typeof A=="function")return A(a);const E=new window.DOMParser().parseFromString(a,"text/html"),F=[].concat(...E.body.querySelectorAll("*"));for(const j of F){const $=j.nodeName.toLowerCase();if(!Object.keys(f).includes($)){j.remove();continue}const Q=[].concat(...j.attributes),J=[].concat(f["*"]||[],f[$]||[]);for(const Y of Q)mu(Y,J)||j.removeAttribute(Y.nodeName)}return E.body.innerHTML}(r,this._config.allowList,this._config.sanitizeFn):r}_resolvePossibleFunction(r){return p(r,[void 0,this])}_putElementInTemplate(r,a){if(this._config.html)return a.innerHTML="",void a.append(r);a.textContent=r.textContent}}const wu=new Set(["sanitize","allowList","sanitizeFn"]),oi="fade",ts="show",xu=".tooltip-inner",bo=".modal",_o="hide.bs.modal",vr="hover",li="focus",Au={AUTO:"auto",TOP:"top",RIGHT:P()?"left":"right",BOTTOM:"bottom",LEFT:P()?"right":"left"},Eu={allowList:vo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Tu={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Pn extends Ee{constructor(r,a){if(Wa===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(r,a),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Eu}static get DefaultType(){return Tu}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),G.off(this._element.closest(bo),_o,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const r=G.trigger(this._element,this.constructor.eventName("show")),a=(b(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(r.defaultPrevented||!a)return;this._disposePopper();const f=this._getTipElement();this._element.setAttribute("aria-describedby",f.getAttribute("id"));const{container:A}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(A.append(f),G.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(f),f.classList.add(ts),"ontouchstart"in document.documentElement)for(const E of[].concat(...document.body.children))G.on(E,"mouseover",S);this._queueCallback(()=>{G.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!G.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ts),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))G.off(r,"mouseover",S);this._activeTrigger.click=!1,this._activeTrigger[li]=!1,this._activeTrigger[vr]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),G.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(r){const a=this._getTemplateFactory(r).toHtml();if(!a)return null;a.classList.remove(oi,ts),a.classList.add(`bs-${this.constructor.NAME}-auto`);const f=(A=>{do A+=Math.floor(1e6*Math.random());while(document.getElementById(A));return A})(this.constructor.NAME).toString();return a.setAttribute("id",f),this._isAnimated()&&a.classList.add(oi),a}setContent(r){this._newContent=r,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(r){return this._templateFactory?this._templateFactory.changeContent(r):this._templateFactory=new yu({...this._config,content:r,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[xu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(r){return this.constructor.getOrCreateInstance(r.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(oi)}_isShown(){return this.tip&&this.tip.classList.contains(ts)}_createPopper(r){const a=p(this._config.placement,[this,r,this._element]),f=Au[a.toUpperCase()];return ri(this._element,r,this._getPopperConfig(f))}_getOffset(){const{offset:r}=this._config;return typeof r=="string"?r.split(",").map(a=>Number.parseInt(a,10)):typeof r=="function"?a=>r(a,this._element):r}_resolvePossibleFunction(r){return p(r,[this._element,this._element])}_getPopperConfig(r){const a={placement:r,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:f=>{this._getTipElement().setAttribute("data-popper-placement",f.state.placement)}}]};return{...a,...p(this._config.popperConfig,[void 0,a])}}_setListeners(){const r=this._config.trigger.split(" ");for(const a of r)if(a==="click")G.on(this._element,this.constructor.eventName("click"),this._config.selector,f=>{this._initializeOnDelegatedTarget(f).toggle()});else if(a!=="manual"){const f=a===vr?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),A=a===vr?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");G.on(this._element,f,this._config.selector,E=>{const F=this._initializeOnDelegatedTarget(E);F._activeTrigger[E.type==="focusin"?li:vr]=!0,F._enter()}),G.on(this._element,A,this._config.selector,E=>{const F=this._initializeOnDelegatedTarget(E);F._activeTrigger[E.type==="focusout"?li:vr]=F._element.contains(E.relatedTarget),F._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},G.on(this._element.closest(bo),_o,this._hideModalHandler)}_fixTitle(){const r=this._element.getAttribute("title");r&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",r),this._element.setAttribute("data-bs-original-title",r),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(r,a){clearTimeout(this._timeout),this._timeout=setTimeout(r,a)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(r){const a=Le.getDataAttributes(this._element);for(const f of Object.keys(a))wu.has(f)&&delete a[f];return r={...a,...typeof r=="object"&&r?r:{}},r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r.container=r.container===!1?document.body:h(r.container),typeof r.delay=="number"&&(r.delay={show:r.delay,hide:r.delay}),typeof r.title=="number"&&(r.title=r.title.toString()),typeof r.content=="number"&&(r.content=r.content.toString()),r}_getDelegateConfig(){const r={};for(const[a,f]of Object.entries(this._config))this.constructor.Default[a]!==f&&(r[a]=f);return r.selector=!1,r.trigger="manual",r}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(r){return this.each(function(){const a=Pn.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}}L(Pn);const Su=".popover-header",Lu=".popover-body",Cu={...Pn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ou={...Pn.DefaultType,content:"(null|string|element|function)"};class ns extends Pn{static get Default(){return Cu}static get DefaultType(){return Ou}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Su]:this._getTitle(),[Lu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(r){return this.each(function(){const a=ns.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}}L(ns);const ci=".bs.scrollspy",Pu=`activate${ci}`,yo=`click${ci}`,Iu=`load${ci}.data-api`,Zn="active",di="[href]",wo=".nav-link",Fu=`${wo}, .nav-item > ${wo}, .list-group-item`,Ru={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ku={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class br extends Ee{constructor(r,a){super(r,a),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ru}static get DefaultType(){return ku}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const r of this._observableSections.values())this._observer.observe(r)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(r){return r.target=h(r.target)||document.body,r.rootMargin=r.offset?`${r.offset}px 0px -30%`:r.rootMargin,typeof r.threshold=="string"&&(r.threshold=r.threshold.split(",").map(a=>Number.parseFloat(a))),r}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(G.off(this._config.target,yo),G.on(this._config.target,yo,di,r=>{const a=this._observableSections.get(r.target.hash);if(a){r.preventDefault();const f=this._rootElement||window,A=a.offsetTop-this._element.offsetTop;if(f.scrollTo)return void f.scrollTo({top:A,behavior:"smooth"});f.scrollTop=A}}))}_getNewObserver(){const r={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(a=>this._observerCallback(a),r)}_observerCallback(r){const a=F=>this._targetLinks.get(`#${F.target.id}`),f=F=>{this._previousScrollData.visibleEntryTop=F.target.offsetTop,this._process(a(F))},A=(this._rootElement||document.documentElement).scrollTop,E=A>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=A;for(const F of r){if(!F.isIntersecting){this._activeTarget=null,this._clearActiveClass(a(F));continue}const j=F.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(E&&j){if(f(F),!A)return}else E||j||f(F)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const r=R.find(di,this._config.target);for(const a of r){if(!a.hash||g(a))continue;const f=R.findOne(decodeURI(a.hash),this._element);_(f)&&(this._targetLinks.set(decodeURI(a.hash),a),this._observableSections.set(a.hash,f))}}_process(r){this._activeTarget!==r&&(this._clearActiveClass(this._config.target),this._activeTarget=r,r.classList.add(Zn),this._activateParents(r),G.trigger(this._element,Pu,{relatedTarget:r}))}_activateParents(r){if(r.classList.contains("dropdown-item"))R.findOne(".dropdown-toggle",r.closest(".dropdown")).classList.add(Zn);else for(const a of R.parents(r,".nav, .list-group"))for(const f of R.prev(a,Fu))f.classList.add(Zn)}_clearActiveClass(r){r.classList.remove(Zn);const a=R.find(`${di}.${Zn}`,r);for(const f of a)f.classList.remove(Zn)}static jQueryInterface(r){return this.each(function(){const a=br.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}})}}G.on(window,Iu,()=>{for(const l of R.find('[data-bs-spy="scroll"]'))br.getOrCreateInstance(l)}),L(br);const In=".bs.tab",Gu=`hide${In}`,Du=`hidden${In}`,Bu=`show${In}`,Uu=`shown${In}`,Nu=`click${In}`,ju=`keydown${In}`,Mu=`load${In}`,Vu="ArrowLeft",xo="ArrowRight",qu="ArrowUp",Ao="ArrowDown",ui="Home",Eo="End",Fn="active",To="fade",fi="show",So=".dropdown-toggle",hi=`:not(${So})`,Lo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',pi=`.nav-link${hi}, .list-group-item${hi}, [role="tab"]${hi}, ${Lo}`,$u=`.${Fn}[data-bs-toggle="tab"], .${Fn}[data-bs-toggle="pill"], .${Fn}[data-bs-toggle="list"]`;class Rn extends Ee{constructor(r){super(r),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),G.on(this._element,ju,a=>this._keydown(a)))}static get NAME(){return"tab"}show(){const r=this._element;if(this._elemIsActive(r))return;const a=this._getActiveElem(),f=a?G.trigger(a,Gu,{relatedTarget:r}):null;G.trigger(r,Bu,{relatedTarget:a}).defaultPrevented||f&&f.defaultPrevented||(this._deactivate(a,r),this._activate(r,a))}_activate(r,a){r&&(r.classList.add(Fn),this._activate(R.getElementFromSelector(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.removeAttribute("tabindex"),r.setAttribute("aria-selected",!0),this._toggleDropDown(r,!0),G.trigger(r,Uu,{relatedTarget:a})):r.classList.add(fi)},r,r.classList.contains(To)))}_deactivate(r,a){r&&(r.classList.remove(Fn),r.blur(),this._deactivate(R.getElementFromSelector(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.setAttribute("aria-selected",!1),r.setAttribute("tabindex","-1"),this._toggleDropDown(r,!1),G.trigger(r,Du,{relatedTarget:a})):r.classList.remove(fi)},r,r.classList.contains(To)))}_keydown(r){if(![Vu,xo,qu,Ao,ui,Eo].includes(r.key))return;r.stopPropagation(),r.preventDefault();const a=this._getChildren().filter(A=>!g(A));let f;if([ui,Eo].includes(r.key))f=a[r.key===ui?0:a.length-1];else{const A=[xo,Ao].includes(r.key);f=x(a,r.target,A,!0)}f&&(f.focus({preventScroll:!0}),Rn.getOrCreateInstance(f).show())}_getChildren(){return R.find(pi,this._parent)}_getActiveElem(){return this._getChildren().find(r=>this._elemIsActive(r))||null}_setInitialAttributes(r,a){this._setAttributeIfNotExists(r,"role","tablist");for(const f of a)this._setInitialAttributesOnChild(f)}_setInitialAttributesOnChild(r){r=this._getInnerElement(r);const a=this._elemIsActive(r),f=this._getOuterElement(r);r.setAttribute("aria-selected",a),f!==r&&this._setAttributeIfNotExists(f,"role","presentation"),a||r.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(r,"role","tab"),this._setInitialAttributesOnTargetPanel(r)}_setInitialAttributesOnTargetPanel(r){const a=R.getElementFromSelector(r);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),r.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`${r.id}`))}_toggleDropDown(r,a){const f=this._getOuterElement(r);if(!f.classList.contains("dropdown"))return;const A=(E,F)=>{const j=R.findOne(E,f);j&&j.classList.toggle(F,a)};A(So,Fn),A(".dropdown-menu",fi),f.setAttribute("aria-expanded",a)}_setAttributeIfNotExists(r,a,f){r.hasAttribute(a)||r.setAttribute(a,f)}_elemIsActive(r){return r.classList.contains(Fn)}_getInnerElement(r){return r.matches(pi)?r:R.findOne(pi,r)}_getOuterElement(r){return r.closest(".nav-item, .list-group-item")||r}static jQueryInterface(r){return this.each(function(){const a=Rn.getOrCreateInstance(this);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}})}}G.on(document,Nu,Lo,function(l){["A","AREA"].includes(this.tagName)&&l.preventDefault(),g(this)||Rn.getOrCreateInstance(this).show()}),G.on(window,Mu,()=>{for(const l of R.find($u))Rn.getOrCreateInstance(l)}),L(Rn);const fn=".bs.toast",Wu=`mouseover${fn}`,zu=`mouseout${fn}`,Hu=`focusin${fn}`,Xu=`focusout${fn}`,Yu=`hide${fn}`,Ku=`hidden${fn}`,Qu=`show${fn}`,Ju=`shown${fn}`,Co="hide",rs="show",ss="showing",Zu={animation:"boolean",autohide:"boolean",delay:"number"},ef={animation:!0,autohide:!0,delay:5e3};class _r extends Ee{constructor(r,a){super(r,a),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ef}static get DefaultType(){return Zu}static get NAME(){return"toast"}show(){G.trigger(this._element,Qu).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Co),O(this._element),this._element.classList.add(rs,ss),this._queueCallback(()=>{this._element.classList.remove(ss),G.trigger(this._element,Ju),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(G.trigger(this._element,Yu).defaultPrevented||(this._element.classList.add(ss),this._queueCallback(()=>{this._element.classList.add(Co),this._element.classList.remove(ss,rs),G.trigger(this._element,Ku)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(rs),super.dispose()}isShown(){return this._element.classList.contains(rs)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(r,a){switch(r.type){case"mouseover":case"mouseout":this._hasMouseInteraction=a;break;case"focusin":case"focusout":this._hasKeyboardInteraction=a}if(a)return void this._clearTimeout();const f=r.relatedTarget;this._element===f||this._element.contains(f)||this._maybeScheduleHide()}_setListeners(){G.on(this._element,Wu,r=>this._onInteraction(r,!0)),G.on(this._element,zu,r=>this._onInteraction(r,!1)),G.on(this._element,Hu,r=>this._onInteraction(r,!0)),G.on(this._element,Xu,r=>this._onInteraction(r,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(r){return this.each(function(){const a=_r.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r](this)}})}}return W(_r),L(_r),{Alert:v,Button:D,Carousel:Vn,Collapse:$n,Dropdown:Bt,Modal:On,Offcanvas:en,Popover:ns,ScrollSpy:br,Tab:Rn,Toast:_r,Tooltip:Pn}})}(ms)),ms.exports}jv();var Mv=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},ee=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,s={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function C(w){return w instanceof o?new o(w.type,C(w.content),w.alias):Array.isArray(w)?w.map(C):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(C){return Object.prototype.toString.call(C).slice(8,-1)},objId:function(C){return C.__id||Object.defineProperty(C,"__id",{value:++n}),C.__id},clone:function C(w,P){var L,p;switch(P=P||{},i.util.type(w)){case"Object":if(p=i.util.objId(w),P[p])return P[p];for(var y in L={},P[p]=L,w)w.hasOwnProperty(y)&&(L[y]=C(w[y],P));return L;case"Array":return p=i.util.objId(w),P[p]?P[p]:(L=[],P[p]=L,w.forEach(function(x,I){L[I]=C(x,P)}),L);default:return w}},getLanguage:function(C){for(;C;){var w=t.exec(C.className);if(w)return w[1].toLowerCase();C=C.parentElement}return"none"},setLanguage:function(C,w){C.className=C.className.replace(RegExp(t,"gi"),""),C.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(L){var C=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(C){var w=document.getElementsByTagName("script");for(var P in w)if(w[P].src==C)return w[P]}return null}},isActive:function(C,w,P){for(var L="no-"+w;C;){var p=C.classList;if(p.contains(w))return!0;if(p.contains(L))return!1;C=C.parentElement}return!!P}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(C,w){var P=i.util.clone(i.languages[C]);for(var L in w)P[L]=w[L];return P},insertBefore:function(C,w,P,L){var p=(L=L||i.languages)[C],y={};for(var x in p)if(p.hasOwnProperty(x)){if(x==w)for(var I in P)P.hasOwnProperty(I)&&(y[I]=P[I]);P.hasOwnProperty(x)||(y[x]=p[x])}var B=L[C];return L[C]=y,i.languages.DFS(i.languages,function(M,re){re===B&&M!=C&&(this[M]=y)}),y},DFS:function C(w,P,L,p){p=p||{};var y=i.util.objId;for(var x in w)if(w.hasOwnProperty(x)){P.call(w,x,w[x],L||x);var I=w[x],B=i.util.type(I);B!=="Object"||p[y(I)]?B!=="Array"||p[y(I)]||(p[y(I)]=!0,C(I,P,x,p)):(p[y(I)]=!0,C(I,P,null,p))}}},plugins:{},highlightAll:function(C,w){i.highlightAllUnder(document,C,w)},highlightAllUnder:function(C,w,P){var L={callback:P,container:C,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),i.hooks.run("before-all-elements-highlight",L);for(var p,y=0;p=L.elements[y++];)i.highlightElement(p,w===!0,L.callback)},highlightElement:function(C,w,P){var L=i.util.getLanguage(C),p=i.languages[L];i.util.setLanguage(C,L);var y=C.parentElement;y&&y.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(y,L);var x={element:C,language:L,grammar:p,code:C.textContent};function I(M){x.highlightedCode=M,i.hooks.run("before-insert",x),x.element.innerHTML=x.highlightedCode,i.hooks.run("after-highlight",x),i.hooks.run("complete",x),P&&P.call(x.element)}if(i.hooks.run("before-sanity-check",x),(y=x.element.parentElement)&&y.nodeName.toLowerCase()==="pre"&&!y.hasAttribute("tabindex")&&y.setAttribute("tabindex","0"),!x.code)return i.hooks.run("complete",x),void(P&&P.call(x.element));if(i.hooks.run("before-highlight",x),x.grammar)if(w&&e.Worker){var B=new Worker(i.filename);B.onmessage=function(M){I(M.data)},B.postMessage(JSON.stringify({language:x.language,code:x.code,immediateClose:!0}))}else I(i.highlight(x.code,x.grammar,x.language));else I(i.util.encode(x.code))},highlight:function(C,w,P){var L={code:C,grammar:w,language:P};if(i.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=i.tokenize(L.code,L.grammar),i.hooks.run("after-tokenize",L),o.stringify(i.util.encode(L.tokens),L.language)},tokenize:function(C,w){var P=w.rest;if(P){for(var L in P)w[L]=P[L];delete w.rest}var p=new h;return _(p,p.head,C),c(C,p,w,p.head,0),function(y){for(var x=[],I=y.head.next;I!==y.tail;)x.push(I.value),I=I.next;return x}(p)},hooks:{all:{},add:function(C,w){var P=i.hooks.all;P[C]=P[C]||[],P[C].push(w)},run:function(C,w){var P=i.hooks.all[C];if(P&&P.length)for(var L,p=0;L=P[p++];)L(w)}},Token:o};function o(C,w,P,L){this.type=C,this.content=w,this.alias=P,this.length=0|(L||"").length}function d(C,w,P,L){C.lastIndex=w;var p=C.exec(P);if(p&&L&&p[1]){var y=p[1].length;p.index+=y,p[0]=p[0].slice(y)}return p}function c(C,w,P,L,p,y){for(var x in P)if(P.hasOwnProperty(x)&&P[x]){var I=P[x];I=Array.isArray(I)?I:[I];for(var B=0;B<I.length;++B){if(y&&y.cause==x+","+B)return;var M=I[B],re=M.inside,K=!!M.lookbehind,pe=!!M.greedy,Te=M.alias;if(pe&&!M.pattern.global){var $e=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,$e+"g")}for(var ze=M.pattern||M,Re=L.next,je=p;Re!==w.tail&&!(y&&je>=y.reach);je+=Re.value.length,Re=Re.next){var Ae=Re.value;if(w.length>C.length)return;if(!(Ae instanceof o)){var le,ne=1;if(pe){if(!(le=d(ze,je,C,K))||le.index>=C.length)break;var Se=le.index,G=le.index+le[0].length,ve=je;for(ve+=Re.value.length;Se>=ve;)ve+=(Re=Re.next).value.length;if(je=ve-=Re.value.length,Re.value instanceof o)continue;for(var he=Re;he!==w.tail&&(ve<G||typeof he.value=="string");he=he.next)ne++,ve+=he.value.length;ne--,Ae=C.slice(je,ve),le.index-=je}else if(!(le=d(ze,0,Ae,K)))continue;Se=le.index;var He=le[0],Le=Ae.slice(0,Se),Ze=Ae.slice(Se+He.length),Ee=je+Ae.length;y&&Ee>y.reach&&(y.reach=Ee);var k=Re.prev;if(Le&&(k=_(w,k,Le),je+=Le.length),g(w,k,ne),Re=_(w,k,new o(x,re?i.tokenize(He,re):He,Te,He)),Ze&&_(w,Re,Ze),ne>1){var R={cause:x+","+B,reach:Ee};c(C,w,P,Re.prev,je,R),y&&R.reach>y.reach&&(y.reach=R.reach)}}}}}}function h(){var C={value:null,prev:null,next:null},w={value:null,prev:C,next:null};C.next=w,this.head=C,this.tail=w,this.length=0}function _(C,w,P){var L=w.next,p={value:P,prev:w,next:L};return w.next=p,L.prev=p,C.length++,p}function g(C,w,P){for(var L=w.next,p=0;p<P&&L!==C.tail;p++)L=L.next;w.next=L,L.prev=w,C.length-=p}if(e.Prism=i,o.stringify=function C(w,P){if(typeof w=="string")return w;if(Array.isArray(w)){var L="";return w.forEach(function(B){L+=C(B,P)}),L}var p={type:w.type,content:C(w.content,P),tag:"span",classes:["token",w.type],attributes:{},language:P},y=w.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(p.classes,y):p.classes.push(y)),i.hooks.run("wrap",p);var x="";for(var I in p.attributes)x+=" "+I+'="'+(p.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+x+">"+p.content+"</"+p.tag+">"},!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener("message",function(C){var w=JSON.parse(C.data),P=w.language,L=w.code,p=w.immediateClose;e.postMessage(i.highlight(L,i.languages[P],P)),p&&e.close()},!1)),i;var b=i.util.currentScript();function S(){i.manual||i.highlightAll()}if(b&&(i.filename=b.src,b.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var O=document.readyState;O==="loading"||O==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return i}(Mv);typeof vs<"u"&&vs.exports&&(vs.exports=ee),typeof global<"u"&&(global.Prism=ee);ee.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},ee.languages.markup.tag.inside["attr-value"].inside.entity=ee.languages.markup.entity,ee.languages.markup.doctype.inside["internal-subset"].inside=ee.languages.markup,ee.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(ee.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:ee.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:ee.languages[t]};var i={};i[e]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:s},ee.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(ee.languages.markup.tag,"addAttribute",{value:function(e,t){ee.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:ee.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),ee.languages.html=ee.languages.markup,ee.languages.mathml=ee.languages.markup,ee.languages.svg=ee.languages.markup,ee.languages.xml=ee.languages.extend("markup",{}),ee.languages.ssml=ee.languages.xml,ee.languages.atom=ee.languages.xml,ee.languages.rss=ee.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(ee);ee.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};ee.languages.javascript=ee.languages.extend("clike",{"class-name":[ee.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),ee.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,ee.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:ee.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:ee.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:ee.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:ee.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:ee.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),ee.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:ee.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),ee.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),ee.languages.markup&&(ee.languages.markup.tag.addInlined("script","javascript"),ee.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),ee.languages.js=ee.languages.javascript;(function(e){function t(ve,he){return ve.replace(/<<(\d+)>>/g,function(He,Le){return"(?:"+he[+Le]+")"})}function n(ve,he,He){return RegExp(t(ve,he),"")}function s(ve,he){for(var He=0;He<he;He++)ve=ve.replace(/<<self>>/g,function(){return"(?:"+ve+")"});return ve.replace(/<<self>>/g,"[^\\s\\S]")}var i="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",o="class enum interface record struct",d="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",c="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function h(ve){return"\\b(?:"+ve.trim().replace(/ /g,"|")+")\\b"}var _=h(o),g=RegExp(h(i+" "+o+" "+d+" "+c)),b=h(o+" "+d+" "+c),S=h(i+" "+o+" "+c),O=s("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),C=s("\\((?:[^()]|<<self>>)*\\)",2),w="@?\\b[A-Za-z_]\\w*\\b",P=t("<<0>>(?:\\s*<<1>>)?",[w,O]),L=t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[b,P]),p="\\[\\s*(?:,\\s*)*\\]",y=t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[L,p]),x=t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[O,C,p]),I=t("\\(<<0>>+(?:,<<0>>+)+\\)",[x]),B=t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[I,L,p]),M={keyword:g,punctuation:/[<>()?,.:[\]]/},re=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,K=`"(?:\\\\.|[^\\\\"\r
])*"`;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:n("(^|[^@$\\\\])<<0>>",[K]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[L]),lookbehind:!0,inside:M},{pattern:n("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[w,B]),lookbehind:!0,inside:M},{pattern:n("(\\busing\\s+)<<0>>(?=\\s*=)",[w]),lookbehind:!0},{pattern:n("(\\b<<0>>\\s+)<<1>>",[_,P]),lookbehind:!0,inside:M},{pattern:n("(\\bcatch\\s*\\(\\s*)<<0>>",[L]),lookbehind:!0,inside:M},{pattern:n("(\\bwhere\\s+)<<0>>",[w]),lookbehind:!0},{pattern:n("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:M},{pattern:n("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[B,S,w]),inside:M}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n("([(,]\\s*)<<0>>(?=\\s*:)",[w]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[w]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[C]),lookbehind:!0,alias:"class-name",inside:M},"return-type":{pattern:n("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[B,L]),inside:M,alias:"class-name"},"constructor-invocation":{pattern:n("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[B]),lookbehind:!0,inside:M,alias:"class-name"},"generic-method":{pattern:n("<<0>>\\s*<<1>>(?=\\s*\\()",[w,O]),inside:{function:n("^<<0>>",[w]),generic:{pattern:RegExp(O),alias:"class-name",inside:M}}},"type-list":{pattern:n("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[_,P,w,B,g.source,C,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:n("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[P,C]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:g,"class-name":{pattern:RegExp(B),greedy:!0,inside:M},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var pe=K+"|"+re,Te=t(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[pe]),$e=s(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[Te]),2),ze="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",Re=t("<<0>>(?:\\s*\\(<<1>>*\\))?",[L,$e]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[ze,Re]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n("^<<0>>(?=\\s*:)",[ze]),alias:"keyword"},"attribute-arguments":{pattern:n("\\(<<0>>*\\)",[$e]),inside:e.languages.csharp},"class-name":{pattern:RegExp(L),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var je=`:[^}\r
]+`,Ae=s(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[Te]),2),le=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[Ae,je]),ne=s(t(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[pe]),2),Se=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[ne,je]);function G(ve,he){return{interpolation:{pattern:n("((?:^|[^{])(?:\\{\\{)*)<<0>>",[ve]),lookbehind:!0,inside:{"format-string":{pattern:n("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[he,je]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[le]),lookbehind:!0,greedy:!0,inside:G(le,Ae)},{pattern:n('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[Se]),lookbehind:!0,greedy:!0,inside:G(Se,ne)}],char:{pattern:RegExp(re),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp})(ee);ee.languages.aspnet=ee.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:ee.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:ee.languages.csharp}}}),ee.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,ee.languages.insertBefore("inside","punctuation",{directive:ee.languages.aspnet.directive},ee.languages.aspnet.tag.inside["attr-value"]),ee.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),ee.languages.insertBefore("aspnet",ee.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:ee.languages.csharp||{}}});(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(ee);const rd=Op(jg);rd.use(Uv);rd.mount("#app")});export default Vv();
