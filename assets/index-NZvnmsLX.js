var Od=Object.defineProperty;var Ud=(i,e,t)=>e in i?Od(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Dt=(i,e,t)=>(Ud(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ul(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Qe={},is=[],un=()=>{},zd=()=>!1,Bd=/^on[^a-z]/,fo=i=>Bd.test(i),fl=i=>i.startsWith("onUpdate:"),ht=Object.assign,hl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},kd=Object.prototype.hasOwnProperty,Ve=(i,e)=>kd.call(i,e),Ie=Array.isArray,Xs=i=>po(i)==="[object Map]",Hd=i=>po(i)==="[object Set]",Fe=i=>typeof i=="function",dt=i=>typeof i=="string",ho=i=>typeof i=="symbol",it=i=>i!==null&&typeof i=="object",Lf=i=>(it(i)||Fe(i))&&Fe(i.then)&&Fe(i.catch),Gd=Object.prototype.toString,po=i=>Gd.call(i),Vd=i=>po(i).slice(8,-1),Wd=i=>po(i)==="[object Object]",dl=i=>dt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Yr=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},jd=/-(\w)/g,hn=mo(i=>i.replace(jd,(e,t)=>t?t.toUpperCase():"")),qd=/\B([A-Z])/g,Ms=mo(i=>i.replace(qd,"-$1").toLowerCase()),go=mo(i=>i.charAt(0).toUpperCase()+i.slice(1)),Uo=mo(i=>i?`on${go(i)}`:""),Ei=(i,e)=>!Object.is(i,e),zo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},no=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Xd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Zl;const La=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=dt(n)?Zd(n):pl(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(dt(i)||it(i))return i}const Kd=/;(?![^(]*\))/g,Yd=/:([^]+)/,$d=/\/\*[^]*?\*\//g;function Zd(i){const e={};return i.replace($d,"").split(Kd).forEach(t=>{if(t){const n=t.split(Yd);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ml(i){let e="";if(dt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=ml(i[t]);n&&(e+=n+" ")}else if(it(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Jd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qd=ul(Jd);function Pf(i){return!!i||i===""}let Yt;class ep{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tp(i,e=Yt){e&&e.active&&e.effects.push(i)}function np(){return Yt}const gl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Df=i=>(i.w&ti)>0,If=i=>(i.n&ti)>0,ip=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=ti},sp=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Df(s)&&!If(s)?s.delete(i):e[t++]=s,s.w&=~ti,s.n&=~ti}e.length=t}},Pa=new WeakMap;let Hs=0,ti=1;const Da=30;let $t;const Mi=Symbol(""),Ia=Symbol("");class _l{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,tp(this,n)}run(){if(!this.active)return this.fn();let e=$t,t=Jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Jn=!0,ti=1<<++Hs,Hs<=Da?ip(this):Jl(this),this.fn()}finally{Hs<=Da&&sp(this),ti=1<<--Hs,$t=this.parent,Jn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Jl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Jn=!0;const Nf=[];function bs(){Nf.push(Jn),Jn=!1}function Ss(){const i=Nf.pop();Jn=i===void 0?!0:i}function Lt(i,e,t){if(Jn&&$t){let n=Pa.get(i);n||Pa.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=gl()),Ff(s)}}function Ff(i,e){let t=!1;Hs<=Da?If(i)||(i.n|=ti,t=!Df(i)):t=!i.has($t),t&&(i.add($t),$t.deps.push(i))}function Cn(i,e,t,n,s,r){const o=Pa.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!ho(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?dl(t)&&a.push(o.get("length")):(a.push(o.get(Mi)),Xs(i)&&a.push(o.get(Ia)));break;case"delete":Ie(i)||(a.push(o.get(Mi)),Xs(i)&&a.push(o.get(Ia)));break;case"set":Xs(i)&&a.push(o.get(Mi));break}if(a.length===1)a[0]&&Na(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Na(gl(l))}}function Na(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&Ql(n);for(const n of t)n.computed||Ql(n)}function Ql(i,e){(i!==$t||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const rp=ul("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ho)),ec=op();function op(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Xe(this);for(let r=0,o=this.length;r<o;r++)Lt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Xe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){bs();const n=Xe(this)[e].apply(this,t);return Ss(),n}}),i}function ap(i){const e=Xe(this);return Lt(e,"has",i),e.hasOwnProperty(i)}class Uf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&n===(s?r?yp:Hf:r?kf:Bf).get(e))return e;const o=Ie(e);if(!s){if(o&&Ve(ec,t))return Reflect.get(ec,t,n);if(t==="hasOwnProperty")return ap}const a=Reflect.get(e,t,n);return(ho(t)?Of.has(t):rp(t))||(s||Lt(e,"get",t),r)?a:vt(a)?o&&dl(t)?a:a.value:it(a)?s?Vf(a):xo(a):a}}class zf extends Uf{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(us(r)&&vt(r)&&!vt(n))return!1;if(!this._shallow&&(!io(n)&&!us(n)&&(r=Xe(r),n=Xe(n)),!Ie(e)&&vt(r)&&!vt(n)))return r.value=n,!0;const o=Ie(e)&&dl(t)?Number(t)<e.length:Ve(e,t),a=Reflect.set(e,t,n,s);return e===Xe(s)&&(o?Ei(n,r)&&Cn(e,"set",t,n):Cn(e,"add",t,n)),a}deleteProperty(e,t){const n=Ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Cn(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!ho(t)||!Of.has(t))&&Lt(e,"has",t),n}ownKeys(e){return Lt(e,"iterate",Ie(e)?"length":Mi),Reflect.ownKeys(e)}}class lp extends Uf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cp=new zf,up=new lp,fp=new zf(!0),xl=i=>i,_o=i=>Reflect.getPrototypeOf(i);function vr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Xe(i),r=Xe(e);t||(Ei(e,r)&&Lt(s,"get",e),Lt(s,"get",r));const{has:o}=_o(s),a=n?xl:t?Ml:er;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function yr(i,e=!1){const t=this.__v_raw,n=Xe(t),s=Xe(i);return e||(Ei(i,s)&&Lt(n,"has",i),Lt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Mr(i,e=!1){return i=i.__v_raw,!e&&Lt(Xe(i),"iterate",Mi),Reflect.get(i,"size",i)}function tc(i){i=Xe(i);const e=Xe(this);return _o(e).has.call(e,i)||(e.add(i),Cn(e,"add",i,i)),this}function nc(i,e){e=Xe(e);const t=Xe(this),{has:n,get:s}=_o(t);let r=n.call(t,i);r||(i=Xe(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?Ei(e,o)&&Cn(t,"set",i,e):Cn(t,"add",i,e),this}function ic(i){const e=Xe(this),{has:t,get:n}=_o(e);let s=t.call(e,i);s||(i=Xe(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Cn(e,"delete",i,void 0),r}function sc(){const i=Xe(this),e=i.size!==0,t=i.clear();return e&&Cn(i,"clear",void 0,void 0),t}function br(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Xe(o),l=e?xl:i?Ml:er;return!i&&Lt(a,"iterate",Mi),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Sr(i,e,t){return function(...n){const s=this.__v_raw,r=Xe(s),o=Xs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?xl:e?Ml:er;return!e&&Lt(r,"iterate",l?Ia:Mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Fn(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function hp(){const i={get(r){return vr(this,r)},get size(){return Mr(this)},has:yr,add:tc,set:nc,delete:ic,clear:sc,forEach:br(!1,!1)},e={get(r){return vr(this,r,!1,!0)},get size(){return Mr(this)},has:yr,add:tc,set:nc,delete:ic,clear:sc,forEach:br(!1,!0)},t={get(r){return vr(this,r,!0)},get size(){return Mr(this,!0)},has(r){return yr.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:br(!0,!1)},n={get(r){return vr(this,r,!0,!0)},get size(){return Mr(this,!0)},has(r){return yr.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Sr(r,!1,!1),t[r]=Sr(r,!0,!1),e[r]=Sr(r,!1,!0),n[r]=Sr(r,!0,!0)}),[i,t,e,n]}const[dp,pp,mp,gp]=hp();function vl(i,e){const t=e?i?gp:mp:i?pp:dp;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Ve(t,s)&&s in n?t:n,s,r)}const _p={get:vl(!1,!1)},xp={get:vl(!1,!0)},vp={get:vl(!0,!1)},Bf=new WeakMap,kf=new WeakMap,Hf=new WeakMap,yp=new WeakMap;function Mp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bp(i){return i.__v_skip||!Object.isExtensible(i)?0:Mp(Vd(i))}function xo(i){return us(i)?i:yl(i,!1,cp,_p,Bf)}function Gf(i){return yl(i,!1,fp,xp,kf)}function Vf(i){return yl(i,!0,up,vp,Hf)}function yl(i,e,t,n,s){if(!it(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=bp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function ss(i){return us(i)?ss(i.__v_raw):!!(i&&i.__v_isReactive)}function us(i){return!!(i&&i.__v_isReadonly)}function io(i){return!!(i&&i.__v_isShallow)}function Wf(i){return ss(i)||us(i)}function Xe(i){const e=i&&i.__v_raw;return e?Xe(e):i}function jf(i){return no(i,"__v_skip",!0),i}const er=i=>it(i)?xo(i):i,Ml=i=>it(i)?Vf(i):i;function qf(i){Jn&&$t&&(i=Xe(i),Ff(i.dep||(i.dep=gl())))}function Xf(i,e){i=Xe(i);const t=i.dep;t&&Na(t)}function vt(i){return!!(i&&i.__v_isRef===!0)}function Fa(i){return Kf(i,!1)}function Sp(i){return Kf(i,!0)}function Kf(i,e){return vt(i)?i:new wp(i,e)}class wp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Xe(e),this._value=t?e:er(e)}get value(){return qf(this),this._value}set value(e){const t=this.__v_isShallow||io(e)||us(e);e=t?e:Xe(e),Ei(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:er(e),Xf(this))}}function rs(i){return vt(i)?i.value:i}const Tp={get:(i,e,t)=>rs(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return vt(s)&&!vt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Yf(i){return ss(i)?i:new Proxy(i,Tp)}class Ep{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,Xf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Xe(this);return qf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ap(i,e,t=!1){let n,s;const r=Fe(i);return r?(n=i,s=un):(n=i.get,s=i.set),new Ep(n,s,r||!s,t)}function Qn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){vo(r,e,t)}return s}function en(i,e,t,n){if(Fe(i)){const r=Qn(i,e,t,n);return r&&Lf(r)&&r.catch(o=>{vo(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(en(i[r],e,t,n));return s}function vo(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Qn(l,null,10,[i,o,a]);return}}Cp(i,t,s,n)}function Cp(i,e,t,n=!0){console.error(i)}let tr=!1,Oa=!1;const xt=[];let cn=0;const os=[];let wn=null,di=0;const $f=Promise.resolve();let bl=null;function Zf(i){const e=bl||$f;return i?e.then(this?i.bind(this):i):e}function Rp(i){let e=cn+1,t=xt.length;for(;e<t;){const n=e+t>>>1,s=xt[n],r=nr(s);r<i||r===i&&s.pre?e=n+1:t=n}return e}function Sl(i){(!xt.length||!xt.includes(i,tr&&i.allowRecurse?cn+1:cn))&&(i.id==null?xt.push(i):xt.splice(Rp(i.id),0,i),Jf())}function Jf(){!tr&&!Oa&&(Oa=!0,bl=$f.then(eh))}function Lp(i){const e=xt.indexOf(i);e>cn&&xt.splice(e,1)}function Pp(i){Ie(i)?os.push(...i):(!wn||!wn.includes(i,i.allowRecurse?di+1:di))&&os.push(i),Jf()}function rc(i,e=tr?cn+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function Qf(i){if(os.length){const e=[...new Set(os)];if(os.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((t,n)=>nr(t)-nr(n)),di=0;di<wn.length;di++)wn[di]();wn=null,di=0}}const nr=i=>i.id==null?1/0:i.id,Dp=(i,e)=>{const t=nr(i)-nr(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function eh(i){Oa=!1,tr=!0,xt.sort(Dp);try{for(cn=0;cn<xt.length;cn++){const e=xt[cn];e&&e.active!==!1&&Qn(e,null,14)}}finally{cn=0,xt.length=0,Qf(),tr=!1,bl=null,(xt.length||os.length)&&eh()}}function Ip(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Qe;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||Qe;h&&(s=t.map(p=>dt(p)?p.trim():p)),f&&(s=t.map(Xd))}let a,l=n[a=Uo(e)]||n[a=Uo(hn(e))];!l&&r&&(l=n[a=Uo(Ms(e))]),l&&en(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,en(c,i,6,s)}}function th(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Fe(i)){const l=c=>{const u=th(c,e,!0);u&&(a=!0,ht(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(it(i)&&n.set(i,null),null):(Ie(r)?r.forEach(l=>o[l]=null):ht(o,r),it(i)&&n.set(i,o),o)}function yo(i,e){return!i||!fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(i,e[0].toLowerCase()+e.slice(1))||Ve(i,Ms(e))||Ve(i,e))}let Jt=null,Mo=null;function so(i){const e=Jt;return Jt=i,Mo=i&&i.type.__scopeId||null,e}function Np(i){Mo=i}function Fp(){Mo=null}function Op(i,e=Jt,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&gc(-1);const r=so(e);let o;try{o=i(...s)}finally{so(r),n._d&&gc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Bo(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const y=so(i);try{if(t.shapeFlag&4){const v=s||n,T=v;d=an(u.call(T,v,f,r,p,h,g)),_=l}else{const v=e;d=an(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),_=e.props?l:Up(l)}}catch(v){Ys.length=0,vo(v,i,1),d=Gt(ir)}let w=d;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:T}=w;v.length&&T&7&&(o&&v.some(fl)&&(_=zp(_,o)),w=fs(w,_))}return t.dirs&&(w=fs(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),d=w,so(y),d}const Up=i=>{let e;for(const t in i)(t==="class"||t==="style"||fo(t))&&((e||(e={}))[t]=i[t]);return e},zp=(i,e)=>{const t={};for(const n in i)(!fl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Bp(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?oc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!yo(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?oc(n,o,c):!0:!!o;return!1}function oc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!yo(t,r))return!0}return!1}function kp({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const nh="components";function Hp(i,e){return Vp(nh,i,!0,e)||i}const Gp=Symbol.for("v-ndc");function Vp(i,e,t=!0,n=!1){const s=Jt||ft;if(s){const r=s.type;if(i===nh){const a=Fm(r,!1);if(a&&(a===e||a===hn(e)||a===go(hn(e))))return r}const o=ac(s[i]||r[i],e)||ac(s.appContext[i],e);return!o&&n?r:o}}function ac(i,e){return i&&(i[e]||i[hn(e)]||i[go(hn(e))])}const Wp=i=>i.__isSuspense;function jp(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):Pp(i)}const wr={};function $r(i,e,t){return ih(i,e,t)}function ih(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=Qe){var a;const l=np()===((a=ft)==null?void 0:a.scope)?ft:null;let c,u=!1,f=!1;if(vt(i)?(c=()=>i.value,u=io(i)):ss(i)?(c=()=>i,n=!0):Ie(i)?(f=!0,u=i.some(v=>ss(v)||io(v)),c=()=>i.map(v=>{if(vt(v))return v.value;if(ss(v))return ts(v);if(Fe(v))return Qn(v,l,2)})):Fe(i)?e?c=()=>Qn(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),en(i,l,3,[p])}:c=un,e&&n){const v=c;c=()=>ts(v())}let h,p=v=>{h=y.onStop=()=>{Qn(v,l,4),h=y.onStop=void 0}},g;if(rr)if(p=un,e?t&&en(e,l,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const v=zm();g=v.__watcherHandles||(v.__watcherHandles=[])}else return un;let m=f?new Array(i.length).fill(wr):wr;const d=()=>{if(y.active)if(e){const v=y.run();(n||u||(f?v.some((T,R)=>Ei(T,m[R])):Ei(v,m)))&&(h&&h(),en(e,l,3,[v,m===wr?void 0:f&&m[0]===wr?[]:m,p]),m=v)}else y.run()};d.allowRecurse=!!e;let _;s==="sync"?_=d:s==="post"?_=()=>At(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),_=()=>Sl(d));const y=new _l(c,_);e?t?d():m=y.run():s==="post"?At(y.run.bind(y),l&&l.suspense):y.run();const w=()=>{y.stop(),l&&l.scope&&hl(l.scope.effects,y)};return g&&g.push(w),w}function qp(i,e,t){const n=this.proxy,s=dt(i)?i.includes(".")?sh(n,i):()=>n[i]:i.bind(n,n);let r;Fe(e)?r=e:(r=e.handler,t=e);const o=ft;hs(this);const a=ih(s,r.bind(n),t);return o?hs(o):bi(),a}function sh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function ts(i,e){if(!it(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),vt(i))ts(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)ts(i[t],e);else if(Hd(i)||Xs(i))i.forEach(t=>{ts(t,e)});else if(Wd(i))for(const t in i)ts(i[t],e);return i}function oi(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(bs(),en(l,t,8,[i.el,a,i,e]),Ss())}}/*! #__NO_SIDE_EFFECTS__ */function wl(i,e){return Fe(i)?ht({name:i.name},e,{setup:i}):i}const Zr=i=>!!i.type.__asyncLoader,rh=i=>i.type.__isKeepAlive;function Xp(i,e){oh(i,"a",e)}function Kp(i,e){oh(i,"da",e)}function oh(i,e,t=ft){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(bo(e,n,t),t){let s=t.parent;for(;s&&s.parent;)rh(s.parent.vnode)&&Yp(n,e,t,s),s=s.parent}}function Yp(i,e,t,n){const s=bo(e,i,n,!0);ch(()=>{hl(n[e],s)},t)}function bo(i,e,t=ft,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;bs(),hs(t);const a=en(e,t,i,o);return bi(),Ss(),a});return n?s.unshift(r):s.push(r),r}}const Dn=i=>(e,t=ft)=>(!rr||i==="sp")&&bo(i,(...n)=>e(...n),t),$p=Dn("bm"),ah=Dn("m"),Zp=Dn("bu"),Jp=Dn("u"),lh=Dn("bum"),ch=Dn("um"),Qp=Dn("sp"),em=Dn("rtg"),tm=Dn("rtc");function nm(i,e=ft){bo("ec",i,e)}const Ua=i=>i?Mh(i)?Ll(i)||i.proxy:Ua(i.parent):null,Ks=ht(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ua(i.parent),$root:i=>Ua(i.root),$emit:i=>i.emit,$options:i=>Tl(i),$forceUpdate:i=>i.f||(i.f=()=>Sl(i.update)),$nextTick:i=>i.n||(i.n=Zf.bind(i.proxy)),$watch:i=>qp.bind(i)}),ko=(i,e)=>i!==Qe&&!i.__isScriptSetup&&Ve(i,e),im={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ko(n,e))return o[e]=1,n[e];if(s!==Qe&&Ve(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Ve(c,e))return o[e]=3,r[e];if(t!==Qe&&Ve(t,e))return o[e]=4,t[e];za&&(o[e]=0)}}const u=Ks[e];let f,h;if(u)return e==="$attrs"&&Lt(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&Ve(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ve(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return ko(s,e)?(s[e]=t,!0):n!==Qe&&Ve(n,e)?(n[e]=t,!0):Ve(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==Qe&&Ve(i,o)||ko(e,o)||(a=r[0])&&Ve(a,o)||Ve(n,o)||Ve(Ks,o)||Ve(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ve(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function lc(i){return Ie(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let za=!0;function sm(i){const e=Tl(i),t=i.proxy,n=i.ctx;za=!1,e.beforeCreate&&cc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:w,unmounted:v,render:T,renderTracked:R,renderTriggered:D,errorCaptured:M,serverPrefetch:L,expose:k,inheritAttrs:z,components:oe,directives:ce,filters:O}=e;if(c&&rm(c,n,null),o)for(const K in o){const G=o[K];Fe(G)&&(n[K]=G.bind(t))}if(s){const K=s.call(t,t);it(K)&&(i.data=xo(K))}if(za=!0,r)for(const K in r){const G=r[K],B=Fe(G)?G.bind(t,t):Fe(G.get)?G.get.bind(t,t):un,X=!Fe(G)&&Fe(G.set)?G.set.bind(t):un,de=Zt({get:B,set:X});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>de.value,set:ae=>de.value=ae})}if(a)for(const K in a)uh(a[K],n,t,K);if(l){const K=Fe(l)?l.call(t):l;Reflect.ownKeys(K).forEach(G=>{Jr(G,K[G])})}u&&cc(u,i,"c");function U(K,G){Ie(G)?G.forEach(B=>K(B.bind(t))):G&&K(G.bind(t))}if(U($p,f),U(ah,h),U(Zp,p),U(Jp,g),U(Xp,m),U(Kp,d),U(nm,M),U(tm,R),U(em,D),U(lh,y),U(ch,v),U(Qp,L),Ie(k))if(k.length){const K=i.exposed||(i.exposed={});k.forEach(G=>{Object.defineProperty(K,G,{get:()=>t[G],set:B=>t[G]=B})})}else i.exposed||(i.exposed={});T&&i.render===un&&(i.render=T),z!=null&&(i.inheritAttrs=z),oe&&(i.components=oe),ce&&(i.directives=ce)}function rm(i,e,t=un){Ie(i)&&(i=Ba(i));for(const n in i){const s=i[n];let r;it(s)?"default"in s?r=Rn(s.from||n,s.default,!0):r=Rn(s.from||n):r=Rn(s),vt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function cc(i,e,t){en(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function uh(i,e,t,n){const s=n.includes(".")?sh(t,n):()=>t[n];if(dt(i)){const r=e[i];Fe(r)&&$r(s,r)}else if(Fe(i))$r(s,i.bind(t));else if(it(i))if(Ie(i))i.forEach(r=>uh(r,e,t,n));else{const r=Fe(i.handler)?i.handler.bind(t):e[i.handler];Fe(r)&&$r(s,r,i)}}function Tl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>ro(l,c,o,!0)),ro(l,e,o)),it(e)&&r.set(e,l),l}function ro(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&ro(i,r,t,!0),s&&s.forEach(o=>ro(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=om[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const om={data:uc,props:fc,emits:fc,methods:Gs,computed:Gs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Gs,directives:Gs,watch:lm,provide:uc,inject:am};function uc(i,e){return e?i?function(){return ht(Fe(i)?i.call(this,this):i,Fe(e)?e.call(this,this):e)}:e:i}function am(i,e){return Gs(Ba(i),Ba(e))}function Ba(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function wt(i,e){return i?[...new Set([].concat(i,e))]:e}function Gs(i,e){return i?ht(Object.create(null),i,e):e}function fc(i,e){return i?Ie(i)&&Ie(e)?[...new Set([...i,...e])]:ht(Object.create(null),lc(i),lc(e??{})):e}function lm(i,e){if(!i)return e;if(!e)return i;const t=ht(Object.create(null),i);for(const n in e)t[n]=wt(i[n],e[n]);return t}function fh(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(i,e){return function(n,s=null){Fe(n)||(n=ht({},n)),s!=null&&!it(s)&&(s=null);const r=fh(),o=new WeakSet;let a=!1;const l=r.app={_uid:cm++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Bm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Gt(n,s);return h.appContext=r,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ll(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){oo=l;try{return c()}finally{oo=null}}};return l}}let oo=null;function Jr(i,e){if(ft){let t=ft.provides;const n=ft.parent&&ft.parent.provides;n===t&&(t=ft.provides=Object.create(n)),t[i]=e}}function Rn(i,e,t=!1){const n=ft||Jt;if(n||oo){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:oo._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Fe(e)?e.call(n&&n.proxy):e}}function fm(i,e,t,n=!1){const s={},r={};no(r,wo,1),i.propsDefaults=Object.create(null),hh(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Gf(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function hm(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Xe(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(yo(i.emitsOptions,h))continue;const p=e[h];if(l)if(Ve(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=hn(h);s[g]=ka(l,a,g,p,i,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{hh(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Ve(e,f)&&((u=Ms(f))===f||!Ve(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ka(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ve(e,f))&&(delete r[f],c=!0)}c&&Cn(i,"set","$attrs")}function hh(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;s&&Ve(s,u=hn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:yo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Xe(t),c=a||Qe;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ka(s,l,f,c[f],i,!Ve(c,f))}}return o}function ka(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Ve(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(hs(s),n=c[t]=l.call(null,e),bi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Ms(t))&&(n=!0))}return n}function dh(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Fe(i)){const u=f=>{l=!0;const[h,p]=dh(f,e,!0);ht(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return it(i)&&n.set(i,is),is;if(Ie(r))for(let u=0;u<r.length;u++){const f=hn(r[u]);hc(f)&&(o[f]=Qe)}else if(r)for(const u in r){const f=hn(u);if(hc(f)){const h=r[u],p=o[f]=Ie(h)||Fe(h)?{type:h}:ht({},h);if(p){const g=mc(Boolean,p.type),m=mc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ve(p,"default"))&&a.push(f)}}}const c=[o,a];return it(i)&&n.set(i,c),c}function hc(i){return i[0]!=="$"}function dc(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function pc(i,e){return dc(i)===dc(e)}function mc(i,e){return Ie(e)?e.findIndex(t=>pc(t,i)):Fe(e)&&pc(e,i)?0:-1}const ph=i=>i[0]==="_"||i==="$stable",El=i=>Ie(i)?i.map(an):[an(i)],dm=(i,e,t)=>{if(e._n)return e;const n=Op((...s)=>El(e(...s)),t);return n._c=!1,n},mh=(i,e,t)=>{const n=i._ctx;for(const s in i){if(ph(s))continue;const r=i[s];if(Fe(r))e[s]=dm(s,r,n);else if(r!=null){const o=El(r);e[s]=()=>o}}},gh=(i,e)=>{const t=El(e);i.slots.default=()=>t},pm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Xe(e),no(e,"_",t)):mh(e,i.slots={})}else i.slots={},e&&gh(i,e);no(i.slots,wo,1)},mm=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=Qe;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(ht(s,e),!t&&a===1&&delete s._):(r=!e.$stable,mh(e,s)),o=e}else e&&(gh(i,e),o={default:1});if(r)for(const a in s)!ph(a)&&o[a]==null&&delete s[a]};function Ha(i,e,t,n,s=!1){if(Ie(i)){i.forEach((h,p)=>Ha(h,e&&(Ie(e)?e[p]:e),t,n,s));return}if(Zr(n)&&!s)return;const r=n.shapeFlag&4?Ll(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Ve(f,c)&&(f[c]=null)):vt(c)&&(c.value=null)),Fe(l))Qn(l,a,12,[o,u]);else{const h=dt(l),p=vt(l);if(h||p){const g=()=>{if(i.f){const m=h?Ve(f,l)?f[l]:u[l]:l.value;s?Ie(m)&&hl(m,r):Ie(m)?m.includes(r)||m.push(r):h?(u[l]=[r],Ve(f,l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ve(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,At(g,t)):g()}}}const At=jp;function gm(i){return _m(i)}function _m(i,e){const t=La();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=un,insertStaticContent:g}=i,m=(E,C,N,j=null,J=null,le=null,pe=!1,ie=null,me=!!C.dynamicChildren)=>{if(E===C)return;E&&!Is(E,C)&&(j=V(E),ae(E,J,le,!0),E=null),C.patchFlag===-2&&(me=!1,C.dynamicChildren=null);const{type:ue,ref:b,shapeFlag:x}=C;switch(ue){case So:d(E,C,N,j);break;case ir:_(E,C,N,j);break;case Ho:E==null&&y(C,N,j,pe);break;case En:oe(E,C,N,j,J,le,pe,ie,me);break;default:x&1?T(E,C,N,j,J,le,pe,ie,me):x&6?ce(E,C,N,j,J,le,pe,ie,me):(x&64||x&128)&&ue.process(E,C,N,j,J,le,pe,ie,me,Q)}b!=null&&J&&Ha(b,E&&E.ref,le,C||E,!C)},d=(E,C,N,j)=>{if(E==null)n(C.el=a(C.children),N,j);else{const J=C.el=E.el;C.children!==E.children&&c(J,C.children)}},_=(E,C,N,j)=>{E==null?n(C.el=l(C.children||""),N,j):C.el=E.el},y=(E,C,N,j)=>{[E.el,E.anchor]=g(E.children,C,N,j,E.el,E.anchor)},w=({el:E,anchor:C},N,j)=>{let J;for(;E&&E!==C;)J=h(E),n(E,N,j),E=J;n(C,N,j)},v=({el:E,anchor:C})=>{let N;for(;E&&E!==C;)N=h(E),s(E),E=N;s(C)},T=(E,C,N,j,J,le,pe,ie,me)=>{pe=pe||C.type==="svg",E==null?R(C,N,j,J,le,pe,ie,me):L(E,C,J,le,pe,ie,me)},R=(E,C,N,j,J,le,pe,ie)=>{let me,ue;const{type:b,props:x,shapeFlag:F,transition:Y,dirs:ne}=E;if(me=E.el=o(E.type,le,x&&x.is,x),F&8?u(me,E.children):F&16&&M(E.children,me,null,j,J,le&&b!=="foreignObject",pe,ie),ne&&oi(E,null,j,"created"),D(me,E,E.scopeId,pe,j),x){for(const Me in x)Me!=="value"&&!Yr(Me)&&r(me,Me,null,x[Me],le,E.children,j,J,$);"value"in x&&r(me,"value",null,x.value),(ue=x.onVnodeBeforeMount)&&on(ue,j,E)}ne&&oi(E,null,j,"beforeMount");const he=xm(J,Y);he&&Y.beforeEnter(me),n(me,C,N),((ue=x&&x.onVnodeMounted)||he||ne)&&At(()=>{ue&&on(ue,j,E),he&&Y.enter(me),ne&&oi(E,null,j,"mounted")},J)},D=(E,C,N,j,J)=>{if(N&&p(E,N),j)for(let le=0;le<j.length;le++)p(E,j[le]);if(J){let le=J.subTree;if(C===le){const pe=J.vnode;D(E,pe,pe.scopeId,pe.slotScopeIds,J.parent)}}},M=(E,C,N,j,J,le,pe,ie,me=0)=>{for(let ue=me;ue<E.length;ue++){const b=E[ue]=ie?qn(E[ue]):an(E[ue]);m(null,b,C,N,j,J,le,pe,ie)}},L=(E,C,N,j,J,le,pe)=>{const ie=C.el=E.el;let{patchFlag:me,dynamicChildren:ue,dirs:b}=C;me|=E.patchFlag&16;const x=E.props||Qe,F=C.props||Qe;let Y;N&&ai(N,!1),(Y=F.onVnodeBeforeUpdate)&&on(Y,N,C,E),b&&oi(C,E,N,"beforeUpdate"),N&&ai(N,!0);const ne=J&&C.type!=="foreignObject";if(ue?k(E.dynamicChildren,ue,ie,N,j,ne,le):pe||G(E,C,ie,null,N,j,ne,le,!1),me>0){if(me&16)z(ie,C,x,F,N,j,J);else if(me&2&&x.class!==F.class&&r(ie,"class",null,F.class,J),me&4&&r(ie,"style",x.style,F.style,J),me&8){const he=C.dynamicProps;for(let Me=0;Me<he.length;Me++){const S=he[Me],se=x[S],ge=F[S];(ge!==se||S==="value")&&r(ie,S,se,ge,J,E.children,N,j,$)}}me&1&&E.children!==C.children&&u(ie,C.children)}else!pe&&ue==null&&z(ie,C,x,F,N,j,J);((Y=F.onVnodeUpdated)||b)&&At(()=>{Y&&on(Y,N,C,E),b&&oi(C,E,N,"updated")},j)},k=(E,C,N,j,J,le,pe)=>{for(let ie=0;ie<C.length;ie++){const me=E[ie],ue=C[ie],b=me.el&&(me.type===En||!Is(me,ue)||me.shapeFlag&70)?f(me.el):N;m(me,ue,b,null,j,J,le,pe,!0)}},z=(E,C,N,j,J,le,pe)=>{if(N!==j){if(N!==Qe)for(const ie in N)!Yr(ie)&&!(ie in j)&&r(E,ie,N[ie],null,pe,C.children,J,le,$);for(const ie in j){if(Yr(ie))continue;const me=j[ie],ue=N[ie];me!==ue&&ie!=="value"&&r(E,ie,ue,me,pe,C.children,J,le,$)}"value"in j&&r(E,"value",N.value,j.value)}},oe=(E,C,N,j,J,le,pe,ie,me)=>{const ue=C.el=E?E.el:a(""),b=C.anchor=E?E.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:Y}=C;Y&&(ie=ie?ie.concat(Y):Y),E==null?(n(ue,N,j),n(b,N,j),M(C.children,N,b,J,le,pe,ie,me)):x>0&&x&64&&F&&E.dynamicChildren?(k(E.dynamicChildren,F,N,J,le,pe,ie),(C.key!=null||J&&C===J.subTree)&&_h(E,C,!0)):G(E,C,N,b,J,le,pe,ie,me)},ce=(E,C,N,j,J,le,pe,ie,me)=>{C.slotScopeIds=ie,E==null?C.shapeFlag&512?J.ctx.activate(C,N,j,pe,me):O(C,N,j,J,le,pe,me):q(E,C,me)},O=(E,C,N,j,J,le,pe)=>{const ie=E.component=Lm(E,j,J);if(rh(E)&&(ie.ctx.renderer=Q),Pm(ie),ie.asyncDep){if(J&&J.registerDep(ie,U),!E.el){const me=ie.subTree=Gt(ir);_(null,me,C,N)}return}U(ie,E,C,N,J,le,pe)},q=(E,C,N)=>{const j=C.component=E.component;if(Bp(E,C,N))if(j.asyncDep&&!j.asyncResolved){K(j,C,N);return}else j.next=C,Lp(j.update),j.update();else C.el=E.el,j.vnode=C},U=(E,C,N,j,J,le,pe)=>{const ie=()=>{if(E.isMounted){let{next:b,bu:x,u:F,parent:Y,vnode:ne}=E,he=b,Me;ai(E,!1),b?(b.el=ne.el,K(E,b,pe)):b=ne,x&&zo(x),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&on(Me,Y,b,ne),ai(E,!0);const S=Bo(E),se=E.subTree;E.subTree=S,m(se,S,f(se.el),V(se),E,J,le),b.el=S.el,he===null&&kp(E,S.el),F&&At(F,J),(Me=b.props&&b.props.onVnodeUpdated)&&At(()=>on(Me,Y,b,ne),J)}else{let b;const{el:x,props:F}=C,{bm:Y,m:ne,parent:he}=E,Me=Zr(C);if(ai(E,!1),Y&&zo(Y),!Me&&(b=F&&F.onVnodeBeforeMount)&&on(b,he,C),ai(E,!0),x&&Ee){const S=()=>{E.subTree=Bo(E),Ee(x,E.subTree,E,J,null)};Me?C.type.__asyncLoader().then(()=>!E.isUnmounted&&S()):S()}else{const S=E.subTree=Bo(E);m(null,S,N,j,E,J,le),C.el=S.el}if(ne&&At(ne,J),!Me&&(b=F&&F.onVnodeMounted)){const S=C;At(()=>on(b,he,S),J)}(C.shapeFlag&256||he&&Zr(he.vnode)&&he.vnode.shapeFlag&256)&&E.a&&At(E.a,J),E.isMounted=!0,C=N=j=null}},me=E.effect=new _l(ie,()=>Sl(ue),E.scope),ue=E.update=()=>me.run();ue.id=E.uid,ai(E,!0),ue()},K=(E,C,N)=>{C.component=E;const j=E.vnode.props;E.vnode=C,E.next=null,hm(E,C.props,j,N),mm(E,C.children,N),bs(),rc(),Ss()},G=(E,C,N,j,J,le,pe,ie,me=!1)=>{const ue=E&&E.children,b=E?E.shapeFlag:0,x=C.children,{patchFlag:F,shapeFlag:Y}=C;if(F>0){if(F&128){X(ue,x,N,j,J,le,pe,ie,me);return}else if(F&256){B(ue,x,N,j,J,le,pe,ie,me);return}}Y&8?(b&16&&$(ue,J,le),x!==ue&&u(N,x)):b&16?Y&16?X(ue,x,N,j,J,le,pe,ie,me):$(ue,J,le,!0):(b&8&&u(N,""),Y&16&&M(x,N,j,J,le,pe,ie,me))},B=(E,C,N,j,J,le,pe,ie,me)=>{E=E||is,C=C||is;const ue=E.length,b=C.length,x=Math.min(ue,b);let F;for(F=0;F<x;F++){const Y=C[F]=me?qn(C[F]):an(C[F]);m(E[F],Y,N,null,J,le,pe,ie,me)}ue>b?$(E,J,le,!0,!1,x):M(C,N,j,J,le,pe,ie,me,x)},X=(E,C,N,j,J,le,pe,ie,me)=>{let ue=0;const b=C.length;let x=E.length-1,F=b-1;for(;ue<=x&&ue<=F;){const Y=E[ue],ne=C[ue]=me?qn(C[ue]):an(C[ue]);if(Is(Y,ne))m(Y,ne,N,null,J,le,pe,ie,me);else break;ue++}for(;ue<=x&&ue<=F;){const Y=E[x],ne=C[F]=me?qn(C[F]):an(C[F]);if(Is(Y,ne))m(Y,ne,N,null,J,le,pe,ie,me);else break;x--,F--}if(ue>x){if(ue<=F){const Y=F+1,ne=Y<b?C[Y].el:j;for(;ue<=F;)m(null,C[ue]=me?qn(C[ue]):an(C[ue]),N,ne,J,le,pe,ie,me),ue++}}else if(ue>F)for(;ue<=x;)ae(E[ue],J,le,!0),ue++;else{const Y=ue,ne=ue,he=new Map;for(ue=ne;ue<=F;ue++){const Pe=C[ue]=me?qn(C[ue]):an(C[ue]);Pe.key!=null&&he.set(Pe.key,ue)}let Me,S=0;const se=F-ne+1;let ge=!1,be=0;const xe=new Array(se);for(ue=0;ue<se;ue++)xe[ue]=0;for(ue=Y;ue<=x;ue++){const Pe=E[ue];if(S>=se){ae(Pe,J,le,!0);continue}let ke;if(Pe.key!=null)ke=he.get(Pe.key);else for(Me=ne;Me<=F;Me++)if(xe[Me-ne]===0&&Is(Pe,C[Me])){ke=Me;break}ke===void 0?ae(Pe,J,le,!0):(xe[ke-ne]=ue+1,ke>=be?be=ke:ge=!0,m(Pe,C[ke],N,null,J,le,pe,ie,me),S++)}const Le=ge?vm(xe):is;for(Me=Le.length-1,ue=se-1;ue>=0;ue--){const Pe=ne+ue,ke=C[Pe],I=Pe+1<b?C[Pe+1].el:j;xe[ue]===0?m(null,ke,N,I,J,le,pe,ie,me):ge&&(Me<0||ue!==Le[Me]?de(ke,N,I,2):Me--)}}},de=(E,C,N,j,J=null)=>{const{el:le,type:pe,transition:ie,children:me,shapeFlag:ue}=E;if(ue&6){de(E.component.subTree,C,N,j);return}if(ue&128){E.suspense.move(C,N,j);return}if(ue&64){pe.move(E,C,N,Q);return}if(pe===En){n(le,C,N);for(let x=0;x<me.length;x++)de(me[x],C,N,j);n(E.anchor,C,N);return}if(pe===Ho){w(E,C,N);return}if(j!==2&&ue&1&&ie)if(j===0)ie.beforeEnter(le),n(le,C,N),At(()=>ie.enter(le),J);else{const{leave:x,delayLeave:F,afterLeave:Y}=ie,ne=()=>n(le,C,N),he=()=>{x(le,()=>{ne(),Y&&Y()})};F?F(le,ne,he):he()}else n(le,C,N)},ae=(E,C,N,j=!1,J=!1)=>{const{type:le,props:pe,ref:ie,children:me,dynamicChildren:ue,shapeFlag:b,patchFlag:x,dirs:F}=E;if(ie!=null&&Ha(ie,null,N,E,!0),b&256){C.ctx.deactivate(E);return}const Y=b&1&&F,ne=!Zr(E);let he;if(ne&&(he=pe&&pe.onVnodeBeforeUnmount)&&on(he,C,E),b&6)Ae(E.component,N,j);else{if(b&128){E.suspense.unmount(N,j);return}Y&&oi(E,null,C,"beforeUnmount"),b&64?E.type.remove(E,C,N,J,Q,j):ue&&(le!==En||x>0&&x&64)?$(ue,C,N,!1,!0):(le===En&&x&384||!J&&b&16)&&$(me,C,N),j&&_e(E)}(ne&&(he=pe&&pe.onVnodeUnmounted)||Y)&&At(()=>{he&&on(he,C,E),Y&&oi(E,null,C,"unmounted")},N)},_e=E=>{const{type:C,el:N,anchor:j,transition:J}=E;if(C===En){we(N,j);return}if(C===Ho){v(E);return}const le=()=>{s(N),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(E.shapeFlag&1&&J&&!J.persisted){const{leave:pe,delayLeave:ie}=J,me=()=>pe(N,le);ie?ie(E.el,le,me):me()}else le()},we=(E,C)=>{let N;for(;E!==C;)N=h(E),s(E),E=N;s(C)},Ae=(E,C,N)=>{const{bum:j,scope:J,update:le,subTree:pe,um:ie}=E;j&&zo(j),J.stop(),le&&(le.active=!1,ae(pe,E,C,N)),ie&&At(ie,C),At(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},$=(E,C,N,j=!1,J=!1,le=0)=>{for(let pe=le;pe<E.length;pe++)ae(E[pe],C,N,j,J)},V=E=>E.shapeFlag&6?V(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),re=(E,C,N)=>{E==null?C._vnode&&ae(C._vnode,null,null,!0):m(C._vnode||null,E,C,null,null,null,N),rc(),Qf(),C._vnode=E},Q={p:m,um:ae,m:de,r:_e,mt:O,mc:M,pc:G,pbc:k,n:V,o:i};let te,Ee;return e&&([te,Ee]=e(Q)),{render:re,hydrate:te,createApp:um(re,te)}}function ai({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function xm(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function _h(i,e,t=!1){const n=i.children,s=e.children;if(Ie(n)&&Ie(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qn(s[r]),a.el=o.el),t||_h(o,a)),a.type===So&&(a.el=o.el)}}function vm(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const ym=i=>i.__isTeleport,En=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),Ys=[];let Qt=null;function xh(i=!1){Ys.push(Qt=i?null:[])}function Mm(){Ys.pop(),Qt=Ys[Ys.length-1]||null}let sr=1;function gc(i){sr+=i}function vh(i){return i.dynamicChildren=sr>0?Qt||is:null,Mm(),sr>0&&Qt&&Qt.push(i),i}function bm(i,e,t,n,s,r){return vh(Al(i,e,t,n,s,r,!0))}function Sm(i,e,t,n,s){return vh(Gt(i,e,t,n,s,!0))}function Ga(i){return i?i.__v_isVNode===!0:!1}function Is(i,e){return i.type===e.type&&i.key===e.key}const wo="__vInternal",yh=({key:i})=>i??null,Qr=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?dt(i)||vt(i)||Fe(i)?{i:Jt,r:i,k:e,f:!!t}:i:null);function Al(i,e=null,t=null,n=0,s=null,r=i===En?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&yh(e),ref:e&&Qr(e),scopeId:Mo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Cl(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),sr>0&&!o&&Qt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qt.push(l),l}const Gt=wm;function wm(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Gp)&&(i=ir),Ga(i)){const a=fs(i,e,!0);return t&&Cl(a,t),sr>0&&!r&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(i)]=a:Qt.push(a)),a.patchFlag|=-2,a}if(Om(i)&&(i=i.__vccOpts),e){e=Tm(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=ml(a)),it(l)&&(Wf(l)&&!Ie(l)&&(l=ht({},l)),e.style=pl(l))}const o=dt(i)?1:Wp(i)?128:ym(i)?64:it(i)?4:Fe(i)?2:0;return Al(i,e,t,n,s,o,r,!0)}function Tm(i){return i?Wf(i)||wo in i?ht({},i):i:null}function fs(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Am(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&yh(a),ref:e&&e.ref?t&&s?Ie(s)?s.concat(Qr(e)):[s,Qr(e)]:Qr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==En?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&fs(i.ssContent),ssFallback:i.ssFallback&&fs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Em(i=" ",e=0){return Gt(So,null,i,e)}function an(i){return i==null||typeof i=="boolean"?Gt(ir):Ie(i)?Gt(En,null,i.slice()):typeof i=="object"?qn(i):Gt(So,null,String(i))}function qn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:fs(i)}function Cl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Cl(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(wo in e)?e._ctx=Jt:s===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),n&64?(t=16,e=[Em(e)]):t=8);i.children=e,i.shapeFlag|=t}function Am(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=ml([e.class,n.class]));else if(s==="style")e.style=pl([e.style,n.style]);else if(fo(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function on(i,e,t,n=null){en(i,e,7,[t,n])}const Cm=fh();let Rm=0;function Lm(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Cm,r={uid:Rm++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(n,s),emitsOptions:th(n,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:n.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ip.bind(null,r),i.ce&&i.ce(r),r}let ft=null,Rl,Oi,_c="__VUE_INSTANCE_SETTERS__";(Oi=La()[_c])||(Oi=La()[_c]=[]),Oi.push(i=>ft=i),Rl=i=>{Oi.length>1?Oi.forEach(e=>e(i)):Oi[0](i)};const hs=i=>{Rl(i),i.scope.on()},bi=()=>{ft&&ft.scope.off(),Rl(null)};function Mh(i){return i.vnode.shapeFlag&4}let rr=!1;function Pm(i,e=!1){rr=e;const{props:t,children:n}=i.vnode,s=Mh(i);fm(i,t,s,e),pm(i,n);const r=s?Dm(i,e):void 0;return rr=!1,r}function Dm(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=jf(new Proxy(i.ctx,im));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Nm(i):null;hs(i),bs();const r=Qn(n,i,0,[i.props,s]);if(Ss(),bi(),Lf(r)){if(r.then(bi,bi),e)return r.then(o=>{xc(i,o,e)}).catch(o=>{vo(o,i,0)});i.asyncDep=r}else xc(i,r,e)}else bh(i,e)}function xc(i,e,t){Fe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:it(e)&&(i.setupState=Yf(e)),bh(i,t)}let vc;function bh(i,e,t){const n=i.type;if(!i.render){if(!e&&vc&&!n.render){const s=n.template||Tl(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=ht(ht({isCustomElement:r,delimiters:a},o),l);n.render=vc(s,c)}}i.render=n.render||un}{hs(i),bs();try{sm(i)}finally{Ss(),bi()}}}function Im(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Lt(i,"get","$attrs"),e[t]}}))}function Nm(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return Im(i)},slots:i.slots,emit:i.emit,expose:e}}function Ll(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Yf(jf(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](i)},has(e,t){return t in e||t in Ks}}))}function Fm(i,e=!0){return Fe(i)?i.displayName||i.name:i.name||e&&i.__name}function Om(i){return Fe(i)&&"__vccOpts"in i}const Zt=(i,e)=>Ap(i,e,rr);function Sh(i,e,t){const n=arguments.length;return n===2?it(e)&&!Ie(e)?Ga(e)?Gt(i,null,[e]):Gt(i,e):Gt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Ga(t)&&(t=[t]),Gt(i,e,t))}const Um=Symbol.for("v-scx"),zm=()=>Rn(Um),Bm="3.3.9",km="http://www.w3.org/2000/svg",pi=typeof document<"u"?document:null,yc=pi&&pi.createElement("template"),Hm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?pi.createElementNS(km,i):pi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>pi.createTextNode(i),createComment:i=>pi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>pi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yc.innerHTML=n?`<svg>${i}</svg>`:i;const a=yc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gm=Symbol("_vtc");function Vm(i,e,t){const n=i[Gm];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Wm=Symbol("_vod");function jm(i,e,t){const n=i.style,s=dt(t);if(t&&!s){if(e&&!dt(e))for(const r in e)t[r]==null&&Va(n,r,"");for(const r in t)Va(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),Wm in i&&(n.display=r)}}const Mc=/\s*!important$/;function Va(i,e,t){if(Ie(t))t.forEach(n=>Va(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=qm(i,e);Mc.test(t)?i.setProperty(Ms(n),t.replace(Mc,""),"important"):i[n]=t}}const bc=["Webkit","Moz","ms"],Go={};function qm(i,e){const t=Go[e];if(t)return t;let n=hn(e);if(n!=="filter"&&n in i)return Go[e]=n;n=go(n);for(let s=0;s<bc.length;s++){const r=bc[s]+n;if(r in i)return Go[e]=r}return e}const Sc="http://www.w3.org/1999/xlink";function Xm(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Sc,e.slice(6,e.length)):i.setAttributeNS(Sc,e,t);else{const r=Qd(e);t==null||r&&!Pf(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function Km(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Pf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Ym(i,e,t,n){i.addEventListener(e,t,n)}function $m(i,e,t,n){i.removeEventListener(e,t,n)}const wc=Symbol("_vei");function Zm(i,e,t,n,s=null){const r=i[wc]||(i[wc]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Jm(e);if(n){const c=r[e]=tg(n,s);Ym(i,a,c,l)}else o&&($m(i,a,o,l),r[e]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function Jm(i){let e;if(Tc.test(i)){e={};let n;for(;n=i.match(Tc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ms(i.slice(2)),e]}let Vo=0;const Qm=Promise.resolve(),eg=()=>Vo||(Qm.then(()=>Vo=0),Vo=Date.now());function tg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;en(ng(n,t.value),e,5,[n])};return t.value=i,t.attached=eg(),t}function ng(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Ec=/^on[a-z]/,ig=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?Vm(i,n,s):e==="style"?jm(i,t,n):fo(e)?fl(e)||Zm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sg(i,e,n,s))?Km(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Xm(i,e,n,s))};function sg(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Ec.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Ec.test(e)&&dt(t)?!1:e in i}const rg=ht({patchProp:ig},Hm);let Ac;function og(){return Ac||(Ac=gm(rg))}const ag=(...i)=>{const e=og().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=lg(n);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function lg(i){return dt(i)?document.querySelector(i):i}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Qi=typeof window<"u";function cg(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Wo(i,e){const t={};for(const n in e){const s=e[n];t[n]=nn(s)?s.map(i):i(s)}return t}const $s=()=>{},nn=Array.isArray,ug=/\/$/,fg=i=>i.replace(ug,"");function jo(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=mg(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function hg(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Cc(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function dg(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&ds(e.matched[n],t.matched[s])&&wh(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function ds(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function wh(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!pg(i[t],e[t]))return!1;return!0}function pg(i,e){return nn(i)?Rc(i,e):nn(e)?Rc(e,i):i===e}function Rc(i,e){return nn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function mg(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}var or;(function(i){i.pop="pop",i.push="push"})(or||(or={}));var Zs;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Zs||(Zs={}));function gg(i){if(!i)if(Qi){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),fg(i)}const _g=/^[^#]+#/;function xg(i,e){return i.replace(_g,"#")+e}function vg(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const To=()=>({left:window.pageXOffset,top:window.pageYOffset});function yg(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=vg(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Lc(i,e){return(history.state?history.state.position-e:-1)+i}const Wa=new Map;function Mg(i,e){Wa.set(i,e)}function bg(i){const e=Wa.get(i);return Wa.delete(i),e}let Sg=()=>location.protocol+"//"+location.host;function Th(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Cc(l,"")}return Cc(t,i)+n+s}function wg(i,e,t,n){let s=[],r=[],o=null;const a=({state:h})=>{const p=Th(i,location),g=t.value,m=e.value;let d=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}d=m?h.position-m.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:d,type:or.pop,direction:d?d>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Ze({},h.state,{scroll:To()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Pc(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?To():null}}function Tg(i){const{history:e,location:t}=window,n={value:Th(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:Sg()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=Ze({},e.state,Pc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=Ze({},s.value,e.state,{forward:l,scroll:To()});r(u.current,u,!0);const f=Ze({},Pc(n.value,l,null),{position:u.position+1},c);r(l,f,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function Eg(i){i=gg(i);const e=Tg(i),t=wg(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Ze({location:"",base:i,go:n,createHref:xg.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ag(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),Eg(i)}function Cg(i){return typeof i=="string"||i&&typeof i=="object"}function Eh(i){return typeof i=="string"||typeof i=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ah=Symbol("");var Dc;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Dc||(Dc={}));function ps(i,e){return Ze(new Error,{type:i,[Ah]:!0},e)}function gn(i,e){return i instanceof Error&&Ah in i&&(e==null||!!(i.type&e))}const Ic="[^/]+?",Rg={sensitive:!1,strict:!1,start:!0,end:!0},Lg=/[.+*?^${}()[\]/\\]/g;function Pg(i,e){const t=Ze({},Rg,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Lg,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=h;r.push({name:g,repeatable:m,optional:d});const y=_||Ic;if(y!==Ic){p+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+v.message)}}let w=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(w=d&&c.length<2?`(?:/${w})`:"/"+w),d&&(w+="?"),s+=w,p+=20,d&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in c?c[g]:"";if(nn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=nn(_)?_.join("/"):_;if(!y)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function Dg(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ig(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=Dg(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Nc(n))return 1;if(Nc(s))return-1}return s.length-n.length}function Nc(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Ng={type:0,value:""},Fg=/[a-zA-Z0-9_]/;function Og(i){if(!i)return[[]];if(i==="/")return[[Ng]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:Fg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Ug(i,e,t){const n=Pg(Og(i.path),t),s=Ze(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zg(i,e){const t=[],n=new Map;e=Uc({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,f,h){const p=!h,g=Bg(u);g.aliasOf=h&&h.record;const m=Uc(e,u),d=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of w)d.push(Ze({},g,{components:h?h.record.components:g.components,path:v,aliasOf:h?h.record:g}))}let _,y;for(const w of d){const{path:v}=w;if(f&&v[0]!=="/"){const T=f.record.path,R=T[T.length-1]==="/"?"":"/";w.path=f.record.path+(v&&R+v)}if(_=Ug(w,f,m),h?h.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&u.name&&!Oc(_)&&o(u.name)),g.children){const T=g.children;for(let R=0;R<T.length;R++)r(T[R],_,h&&h.children[R])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:$s}function o(u){if(Eh(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&Ig(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Ch(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Oc(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,m;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw ps(1,{location:u});m=h.record.name,p=Ze(Fc(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Fc(u.params,h.keys.map(y=>y.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(y=>y.re.test(g)),h&&(p=h.parse(g),m=h.record.name);else{if(h=f.name?n.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw ps(1,{location:u,currentLocation:f});m=h.record.name,p=Ze({},f.params,u.params),g=h.stringify(p)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:Hg(d)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fc(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Bg(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:kg(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function kg(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function Oc(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function Hg(i){return i.reduce((e,t)=>Ze(e,t.meta),{})}function Uc(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Ch(i,e){return e.children.some(t=>t===i||Ch(i,t))}const Rh=/#/g,Gg=/&/g,Vg=/\//g,Wg=/=/g,jg=/\?/g,Lh=/\+/g,qg=/%5B/g,Xg=/%5D/g,Ph=/%5E/g,Kg=/%60/g,Dh=/%7B/g,Yg=/%7C/g,Ih=/%7D/g,$g=/%20/g;function Pl(i){return encodeURI(""+i).replace(Yg,"|").replace(qg,"[").replace(Xg,"]")}function Zg(i){return Pl(i).replace(Dh,"{").replace(Ih,"}").replace(Ph,"^")}function ja(i){return Pl(i).replace(Lh,"%2B").replace($g,"+").replace(Rh,"%23").replace(Gg,"%26").replace(Kg,"`").replace(Dh,"{").replace(Ih,"}").replace(Ph,"^")}function Jg(i){return ja(i).replace(Wg,"%3D")}function Qg(i){return Pl(i).replace(Rh,"%23").replace(jg,"%3F")}function e_(i){return i==null?"":Qg(i).replace(Vg,"%2F")}function ao(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function t_(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Lh," "),o=r.indexOf("="),a=ao(o<0?r:r.slice(0,o)),l=o<0?null:ao(r.slice(o+1));if(a in e){let c=e[a];nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zc(i){let e="";for(let t in i){const n=i[t];if(t=Jg(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(nn(n)?n.map(r=>r&&ja(r)):[n&&ja(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function n_(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=nn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const i_=Symbol(""),Bc=Symbol(""),Dl=Symbol(""),Nh=Symbol(""),qa=Symbol("");function Ns(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Xn(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ps(4,{from:t,to:e})):f instanceof Error?a(f):Cg(f)?a(ps(2,{from:e,to:f})):(r&&n.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function qo(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(s_(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Xn(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=cg(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Xn(h,t,n,r,o)()}))}}return s}function s_(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function kc(i){const e=Rn(Dl),t=Rn(Nh),n=Zt(()=>e.resolve(rs(i.to))),s=Zt(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ds.bind(null,u));if(h>-1)return h;const p=Hc(l[c-2]);return c>1&&Hc(u)===p&&f[f.length-1].path!==p?f.findIndex(ds.bind(null,l[c-2])):h}),r=Zt(()=>s.value>-1&&l_(t.params,n.value.params)),o=Zt(()=>s.value>-1&&s.value===t.matched.length-1&&wh(t.params,n.value.params));function a(l={}){return a_(l)?e[rs(i.replace)?"replace":"push"](rs(i.to)).catch($s):Promise.resolve()}return{route:n,href:Zt(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const r_=wl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kc,setup(i,{slots:e}){const t=xo(kc(i)),{options:n}=Rn(Dl),s=Zt(()=>({[Gc(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Gc(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Sh("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),o_=r_;function a_(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function l_(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!nn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Hc(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Gc=(i,e,t)=>i??e??t,c_=wl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Rn(qa),s=Zt(()=>i.route||n.value),r=Rn(Bc,0),o=Zt(()=>{let c=rs(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Zt(()=>s.value.matched[o.value]);Jr(Bc,Zt(()=>o.value+1)),Jr(i_,a),Jr(qa,s);const l=Fa();return $r(()=>[l.value,a.value,i.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ds(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return Vc(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=Sh(h,Ze({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Vc(t.default,{Component:d,route:c})||d}}});function Vc(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const u_=c_;function f_(i){const e=zg(i.routes,i),t=i.parseQuery||t_,n=i.stringifyQuery||zc,s=i.history,r=Ns(),o=Ns(),a=Ns(),l=Sp(On);let c=On;Qi&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wo.bind(null,V=>""+V),f=Wo.bind(null,e_),h=Wo.bind(null,ao);function p(V,re){let Q,te;return Eh(V)?(Q=e.getRecordMatcher(V),te=re):te=V,e.addRoute(te,Q)}function g(V){const re=e.getRecordMatcher(V);re&&e.removeRoute(re)}function m(){return e.getRoutes().map(V=>V.record)}function d(V){return!!e.getRecordMatcher(V)}function _(V,re){if(re=Ze({},re||l.value),typeof V=="string"){const N=jo(t,V,re.path),j=e.resolve({path:N.path},re),J=s.createHref(N.fullPath);return Ze(N,j,{params:h(j.params),hash:ao(N.hash),redirectedFrom:void 0,href:J})}let Q;if("path"in V)Q=Ze({},V,{path:jo(t,V.path,re.path).path});else{const N=Ze({},V.params);for(const j in N)N[j]==null&&delete N[j];Q=Ze({},V,{params:f(N)}),re.params=f(re.params)}const te=e.resolve(Q,re),Ee=V.hash||"";te.params=u(h(te.params));const E=hg(n,Ze({},V,{hash:Zg(Ee),path:te.path})),C=s.createHref(E);return Ze({fullPath:E,hash:Ee,query:n===zc?n_(V.query):V.query||{}},te,{redirectedFrom:void 0,href:C})}function y(V){return typeof V=="string"?jo(t,V,l.value.path):Ze({},V)}function w(V,re){if(c!==V)return ps(8,{from:re,to:V})}function v(V){return D(V)}function T(V){return v(Ze(y(V),{replace:!0}))}function R(V){const re=V.matched[V.matched.length-1];if(re&&re.redirect){const{redirect:Q}=re;let te=typeof Q=="function"?Q(V):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=y(te):{path:te},te.params={}),Ze({query:V.query,hash:V.hash,params:"path"in te?{}:V.params},te)}}function D(V,re){const Q=c=_(V),te=l.value,Ee=V.state,E=V.force,C=V.replace===!0,N=R(Q);if(N)return D(Ze(y(N),{state:typeof N=="object"?Ze({},Ee,N.state):Ee,force:E,replace:C}),re||Q);const j=Q;j.redirectedFrom=re;let J;return!E&&dg(n,te,Q)&&(J=ps(16,{to:j,from:te}),de(te,te,!0,!1)),(J?Promise.resolve(J):k(j,te)).catch(le=>gn(le)?gn(le,2)?le:X(le):G(le,j,te)).then(le=>{if(le){if(gn(le,2))return D(Ze({replace:C},y(le.to),{state:typeof le.to=="object"?Ze({},Ee,le.to.state):Ee,force:E}),re||j)}else le=oe(j,te,!0,C,Ee);return z(j,te,le),le})}function M(V,re){const Q=w(V,re);return Q?Promise.reject(Q):Promise.resolve()}function L(V){const re=we.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(V):V()}function k(V,re){let Q;const[te,Ee,E]=h_(V,re);Q=qo(te.reverse(),"beforeRouteLeave",V,re);for(const N of te)N.leaveGuards.forEach(j=>{Q.push(Xn(j,V,re))});const C=M.bind(null,V,re);return Q.push(C),$(Q).then(()=>{Q=[];for(const N of r.list())Q.push(Xn(N,V,re));return Q.push(C),$(Q)}).then(()=>{Q=qo(Ee,"beforeRouteUpdate",V,re);for(const N of Ee)N.updateGuards.forEach(j=>{Q.push(Xn(j,V,re))});return Q.push(C),$(Q)}).then(()=>{Q=[];for(const N of E)if(N.beforeEnter)if(nn(N.beforeEnter))for(const j of N.beforeEnter)Q.push(Xn(j,V,re));else Q.push(Xn(N.beforeEnter,V,re));return Q.push(C),$(Q)}).then(()=>(V.matched.forEach(N=>N.enterCallbacks={}),Q=qo(E,"beforeRouteEnter",V,re),Q.push(C),$(Q))).then(()=>{Q=[];for(const N of o.list())Q.push(Xn(N,V,re));return Q.push(C),$(Q)}).catch(N=>gn(N,8)?N:Promise.reject(N))}function z(V,re,Q){a.list().forEach(te=>L(()=>te(V,re,Q)))}function oe(V,re,Q,te,Ee){const E=w(V,re);if(E)return E;const C=re===On,N=Qi?history.state:{};Q&&(te||C?s.replace(V.fullPath,Ze({scroll:C&&N&&N.scroll},Ee)):s.push(V.fullPath,Ee)),l.value=V,de(V,re,Q,C),X()}let ce;function O(){ce||(ce=s.listen((V,re,Q)=>{if(!Ae.listening)return;const te=_(V),Ee=R(te);if(Ee){D(Ze(Ee,{replace:!0}),te).catch($s);return}c=te;const E=l.value;Qi&&Mg(Lc(E.fullPath,Q.delta),To()),k(te,E).catch(C=>gn(C,12)?C:gn(C,2)?(D(C.to,te).then(N=>{gn(N,20)&&!Q.delta&&Q.type===or.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),G(C,te,E))).then(C=>{C=C||oe(te,E,!1),C&&(Q.delta&&!gn(C,8)?s.go(-Q.delta,!1):Q.type===or.pop&&gn(C,20)&&s.go(-1,!1)),z(te,E,C)}).catch($s)}))}let q=Ns(),U=Ns(),K;function G(V,re,Q){X(V);const te=U.list();return te.length?te.forEach(Ee=>Ee(V,re,Q)):console.error(V),Promise.reject(V)}function B(){return K&&l.value!==On?Promise.resolve():new Promise((V,re)=>{q.add([V,re])})}function X(V){return K||(K=!V,O(),q.list().forEach(([re,Q])=>V?Q(V):re()),q.reset()),V}function de(V,re,Q,te){const{scrollBehavior:Ee}=i;if(!Qi||!Ee)return Promise.resolve();const E=!Q&&bg(Lc(V.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Zf().then(()=>Ee(V,re,E)).then(C=>C&&yg(C)).catch(C=>G(C,V,re))}const ae=V=>s.go(V);let _e;const we=new Set,Ae={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:i,push:v,replace:T,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:U.add,isReady:B,install(V){const re=this;V.component("RouterLink",o_),V.component("RouterView",u_),V.config.globalProperties.$router=re,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Qi&&!_e&&l.value===On&&(_e=!0,v(s.location).catch(Ee=>{}));const Q={};for(const Ee in On)Object.defineProperty(Q,Ee,{get:()=>l.value[Ee],enumerable:!0});V.provide(Dl,re),V.provide(Nh,Gf(Q)),V.provide(qa,l);const te=V.unmount;we.add(V),V.unmount=function(){we.delete(V),we.size<1&&(c=On,ce&&ce(),ce=null,l.value=On,_e=!1,K=!1),te()}}};function $(V){return V.reduce((re,Q)=>re.then(()=>L(Q)),Promise.resolve())}return Ae}function h_(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>ds(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>ds(c,l))||s.push(l))}return[t,n,s]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="143",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d_=0,Wc=1,p_=2,Fh=1,Oh=2,Vs=3,Ai=0,Wt=1,ni=2,m_=1,ei=0,as=1,Xa=2,jc=3,qc=4,g_=5,es=100,__=101,x_=102,Xc=103,Kc=104,v_=200,y_=201,M_=202,b_=203,Uh=204,zh=205,S_=206,w_=207,T_=208,E_=209,A_=210,C_=0,R_=1,L_=2,Ka=3,P_=4,D_=5,I_=6,N_=7,Bh=0,F_=1,O_=2,Ln=0,U_=1,z_=2,B_=3,kh=4,k_=5,Hh=300,ms=301,gs=302,Ya=303,$a=304,Eo=306,ii=1e3,Ht=1001,lo=1002,lt=1003,Za=1004,Ja=1005,Ct=1006,Gh=1007,ws=1008,Ci=1009,H_=1010,G_=1011,Vh=1012,V_=1013,_i=1014,$n=1015,ar=1016,W_=1017,j_=1018,ls=1020,q_=1021,X_=1022,Ft=1023,K_=1024,Y_=1025,Si=1026,_s=1027,$_=1028,Z_=1029,J_=1030,Q_=1031,e0=1033,Xo=33776,Ko=33777,Yo=33778,$o=33779,Yc=35840,$c=35841,Zc=35842,Jc=35843,t0=36196,Qc=37492,eu=37496,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,fu=37818,hu=37819,du=37820,pu=37821,mu=36492,lr=2300,xs=2301,Zo=2302,gu=2400,_u=2401,xu=2402,n0=2500,i0=1,Wh=2,Ri=3e3,$e=3001,s0=3200,r0=3201,Nl=0,o0=1,Tn="srgb",xi="srgb-linear",Jo=7680,a0=519,Qa=35044,vu="300 es",el=1035;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const Js=Math.PI/180,cr=180/Math.PI;function tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Fl(i,e){return(i%e+e)%e}function l0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function c0(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function f0(i,e=1){return e-Math.abs(Fl(i,e*2)-e)}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function m0(i,e){return i+Math.random()*(e-i)}function g0(i){return i*(.5-Math.random())}function _0(i){i!==void 0&&(yu=i);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*Js}function v0(i){return i*cr}function tl(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function co(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function M0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function b0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nl=Object.freeze({__proto__:null,DEG2RAD:Js,RAD2DEG:cr,generateUUID:tn,clamp:gt,euclideanModulo:Fl,mapLinear:l0,inverseLerp:c0,lerp:Qs,damp:u0,pingpong:f0,smoothstep:h0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:x0,radToDeg:v0,isPowerOfTwo:tl,ceilPowerOfTwo:jh,floorPowerOfTwo:co,setQuaternionFromProperEuler:y0,normalize:b0,denormalize:M0});class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],y=s[1],w=s[4],v=s[7],T=s[2],R=s[5],D=s[8];return r[0]=o*m+a*y+l*T,r[3]=o*d+a*w+l*R,r[6]=o*_+a*v+l*D,r[1]=c*m+u*y+f*T,r[4]=c*d+u*w+f*R,r[7]=c*_+u*v+f*D,r[2]=h*m+p*y+g*T,r[5]=h*d+p*w+g*R,r[8]=h*_+p*v+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=h*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qo={[Tn]:{[xi]:wi},[xi]:{[Tn]:eo}},jt={legacyMode:!0,get workingColorSpace(){return xi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Qo[e]&&Qo[e][t]!==void 0){const n=Qo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},qt={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Er(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=xi){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=xi){if(e=Fl(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ea(o,r,e+1/3),this.g=ea(o,r,e),this.b=ea(o,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return jt.fromWorkingColorSpace(Er(this,at),e),gt(at.r*255,0,255)<<16^gt(at.g*255,0,255)<<8^gt(at.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xi){jt.fromWorkingColorSpace(Er(this,at),t);const n=at.r,s=at.g,r=at.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xi){return jt.fromWorkingColorSpace(Er(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Tn){return jt.fromWorkingColorSpace(Er(this,at),e),e!==Tn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Tr);const n=Qs(qt.h,Tr.h,t),s=Qs(qt.s,Tr.s,t),r=Qs(qt.l,Tr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=Xh;let Bi;class Kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=ur("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yh{constructor(e=null){this.isSource=!0,this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S0=0;class Mt extends Pi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ht,s=Ht,r=Ct,o=ws,a=Ft,l=Ci,c=1,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=tn(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Hh;class qe{constructor(e=0,t=0,n=0,s=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(p+1)/2,T=(_+1)/2,R=(u+h)/4,D=(f+m)/4,M=(g+d)/4;return w>v&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=D/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=M/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=D/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-m)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class si extends Pi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Mt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $h extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=lt,this.minFilter=lt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=lt,this.minFilter=lt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==g){let d=1-a;const _=l*h+c*p+u*g+f*m,y=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const T=Math.sqrt(w),R=Math.atan2(T,_*y);d=Math.sin(d*R)/T,a=Math.sin(a*R)/T}const v=a*y;if(l=l*d+h*v,c=c*d+p*v,u=u*d+g*v,f=f*d+m*v,d===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new P,Mu=new Pn;class Ts{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)li.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox),ia.applyMatrix4(e.matrixWorld),this.union(ia);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Ar.subVectors(this.max,Fs),ki.subVectors(e.a,Fs),Hi.subVectors(e.b,Fs),Gi.subVectors(e.c,Fs),Un.subVectors(Hi,ki),zn.subVectors(Gi,Hi),ci.subVectors(ki,Gi);let t=[0,-Un.z,Un.y,0,-zn.z,zn.y,0,-ci.z,ci.y,Un.z,0,-Un.x,zn.z,0,-zn.x,ci.z,0,-ci.x,-Un.y,Un.x,0,-zn.y,zn.x,0,-ci.y,ci.x,0];return!sa(t,ki,Hi,Gi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ki,Hi,Gi,Ar))?!1:(Cr.crossVectors(Un,zn),t=[Cr.x,Cr.y,Cr.z],sa(t,ki,Hi,Gi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new P,new P,new P,new P,new P,new P,new P,new P],li=new P,ia=new Ts,ki=new P,Hi=new P,Gi=new P,Un=new P,zn=new P,ci=new P,Fs=new P,Ar=new P,Cr=new P,ui=new P;function sa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const T0=new Ts,bu=new P,Rr=new P,ra=new P;class Es{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):T0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(ra.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?Rr.set(0,0,1).multiplyScalar(e.radius):Rr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(bu.copy(e.center).add(Rr)),this.expandByPoint(bu.copy(e.center).sub(Rr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new P,oa=new P,Lr=new P,Bn=new P,aa=new P,Pr=new P,la=new P;class Ol{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=Bn.dot(this.direction),l=-Bn.dot(Lr),c=Bn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(Lr).multiplyScalar(h).add(oa),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){aa.subVectors(t,e),Pr.subVectors(n,e),la.crossVectors(aa,Pr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(Bn,Pr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(Bn));if(c<0||l+c>o)return null;const u=-a*Bn.dot(la);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,A0)}lookAt(e,t,n){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),kn.crossVectors(n,It),kn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),kn.crossVectors(n,It)),kn.normalize(),Dr.crossVectors(It,kn),s[0]=kn.x,s[4]=Dr.x,s[8]=It.x,s[1]=kn.y,s[5]=Dr.y,s[9]=It.y,s[2]=kn.z,s[6]=Dr.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],y=n[3],w=n[7],v=n[11],T=n[15],R=s[0],D=s[4],M=s[8],L=s[12],k=s[1],z=s[5],oe=s[9],ce=s[13],O=s[2],q=s[6],U=s[10],K=s[14],G=s[3],B=s[7],X=s[11],de=s[15];return r[0]=o*R+a*k+l*O+c*G,r[4]=o*D+a*z+l*q+c*B,r[8]=o*M+a*oe+l*U+c*X,r[12]=o*L+a*ce+l*K+c*de,r[1]=u*R+f*k+h*O+p*G,r[5]=u*D+f*z+h*q+p*B,r[9]=u*M+f*oe+h*U+p*X,r[13]=u*L+f*ce+h*K+p*de,r[2]=g*R+m*k+d*O+_*G,r[6]=g*D+m*z+d*q+_*B,r[10]=g*M+m*oe+d*U+_*X,r[14]=g*L+m*ce+d*K+_*de,r[3]=y*R+w*k+v*O+T*G,r[7]=y*D+w*z+v*q+T*B,r[11]=y*M+w*oe+v*U+T*X,r[15]=y*L+w*ce+v*K+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+m*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+d*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],y=f*d*c-m*h*c+m*l*p-a*d*p-f*l*_+a*h*_,w=g*h*c-u*d*c-g*l*p+o*d*p+u*l*_-o*h*_,v=u*m*c-g*f*c+g*a*p-o*m*p-u*a*_+o*f*_,T=g*f*l-u*m*l-g*a*h+o*m*h+u*a*d-o*f*d,R=t*y+n*w+s*v+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=y*D,e[1]=(m*h*r-f*d*r-m*s*p+n*d*p+f*s*_-n*h*_)*D,e[2]=(a*d*r-m*l*r+m*s*c-n*d*c-a*s*_+n*l*_)*D,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*D,e[4]=w*D,e[5]=(u*d*r-g*h*r+g*s*p-t*d*p-u*s*_+t*h*_)*D,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*D,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*D,e[8]=v*D,e[9]=(g*f*r-u*m*r-g*n*p+t*m*p+u*n*_-t*f*_)*D,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*D,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*D,e[12]=T*D,e[13]=(u*m*s-g*f*s+g*n*h-t*m*h-u*n*d+t*f*d)*D,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*d-t*a*d)*D,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,m=o*u,d=o*f,_=a*f,y=l*c,w=l*u,v=l*f,T=n.x,R=n.y,D=n.z;return s[0]=(1-(m+_))*T,s[1]=(p+v)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(h+_))*R,s[6]=(d+y)*R,s[7]=0,s[8]=(g+w)*D,s[9]=(d-y)*D,s[10]=(1-(h+m))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,u=1/o,f=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new P,Xt=new He,E0=new P(0,0,0),A0=new P(1,1,1),kn=new P,Dr=new P,It=new P,Su=new He,wu=new Pn;class gr{constructor(e=0,t=0,n=0,s=gr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}gr.DefaultOrder="XYZ";gr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const Tu=new P,Wi=new Pn,vn=new He,Ir=new P,Os=new P,R0=new P,L0=new Pn,Eu=new P(1,0,0),Au=new P(0,1,0),Cu=new P(0,0,1),P0={type:"added"},Ru={type:"removed"};class ot extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new P,t=new gr,n=new Pn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Vt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Os,Ir,this.up):vn.lookAt(Ir,Os,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(vn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ru)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DefaultUp=new P(0,1,0);ot.DefaultMatrixAutoUpdate=!0;const Kt=new P,yn=new P,ca=new P,Mn=new P,ji=new P,qi=new P,Lu=new P,ua=new P,fa=new P,ha=new P;class An{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),yn.subVectors(n,t),ca.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(yn),l=Kt.dot(ca),c=yn.dot(yn),u=yn.dot(ca),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Mn),l.set(0,0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),yn.subVectors(e,t),Kt.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Kt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return An.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),qi.subVectors(r,n),ua.subVectors(e,n);const l=ji.dot(ua),c=qi.dot(ua);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,s);const u=ji.dot(fa),f=qi.dot(fa);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ji,o);ha.subVectors(e,r);const p=ji.dot(ha),g=qi.dot(ha);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return Lu.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Lu,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(n).addScaledVector(ji,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let D0=0;class fn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=as,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uh,this.blendDst=zh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===m_;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zn extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new P,Nr=new Ce;class Ot{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Qa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new Ce),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new P),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Jh extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qh extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let I0=0;const kt=new He,da=new ot,Xi=new P,Nt=new Ts,Us=new Ts,ut=new P;class Ut extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Qh:Jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Nt.min,Us.min),Nt.expandByPoint(ut),ut.addVectors(Nt.max,Us.max),Nt.expandByPoint(ut)):(Nt.expandByPoint(Us.min),Nt.expandByPoint(Us.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),ut.add(Xi)),s=Math.max(s,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let k=0;k<a;k++)c[k]=new P,u[k]=new P;const f=new P,h=new P,p=new P,g=new Ce,m=new Ce,d=new Ce,_=new P,y=new P;function w(k,z,oe){f.fromArray(s,k*3),h.fromArray(s,z*3),p.fromArray(s,oe*3),g.fromArray(o,k*2),m.fromArray(o,z*2),d.fromArray(o,oe*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const ce=1/(m.x*d.y-d.x*m.y);isFinite(ce)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(ce),y.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(ce),c[k].add(_),c[z].add(_),c[oe].add(_),u[k].add(y),u[z].add(y),u[oe].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let k=0,z=v.length;k<z;++k){const oe=v[k],ce=oe.start,O=oe.count;for(let q=ce,U=ce+O;q<U;q+=3)w(n[q+0],n[q+1],n[q+2])}const T=new P,R=new P,D=new P,M=new P;function L(k){D.fromArray(r,k*3),M.copy(D);const z=c[k];T.copy(z),T.sub(D.multiplyScalar(D.dot(z))).normalize(),R.crossVectors(M,z);const ce=R.dot(u[k])<0?-1:1;l[k*4]=T.x,l[k*4+1]=T.y,l[k*4+2]=T.z,l[k*4+3]=ce}for(let k=0,z=v.length;k<z;++k){const oe=v[k],ce=oe.start,O=oe.count;for(let q=ce,U=ce+O;q<U;q+=3)L(n[q+0]),L(n[q+1]),L(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const o=n[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new Ot(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new He,Ki=new Ol,pa=new Es,Hn=new P,Gn=new P,Vn=new P,ma=new P,ga=new P,_a=new P,Fr=new P,Or=new P,Ur=new P,zr=new Ce,Br=new Ce,kr=new Ce,xa=new P,Hr=new P;class yt extends ot{constructor(e=new Ut,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),e.ray.intersectsSphere(pa)===!1)||(Pu.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Pu),n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let T=w,R=v;T<R;T+=3){const D=a.getX(T),M=a.getX(T+1),L=a.getX(T+2);o=Gr(this,y,e,Ki,l,c,u,f,h,D,M,L),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const w=a.getX(_),v=a.getX(_+1),T=a.getX(_+2);o=Gr(this,s,e,Ki,l,c,u,f,h,w,v,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let T=w,R=v;T<R;T+=3){const D=T,M=T+1,L=T+2;o=Gr(this,y,e,Ki,l,c,u,f,h,D,M,L),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const w=_,v=_+1,T=_+2;o=Gr(this,s,e,Ki,l,c,u,f,h,w,v,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function N0(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==ni,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Gr(i,e,t,n,s,r,o,a,l,c,u,f){Hn.fromBufferAttribute(s,c),Gn.fromBufferAttribute(s,u),Vn.fromBufferAttribute(s,f);const h=i.morphTargetInfluences;if(r&&h){Fr.set(0,0,0),Or.set(0,0,0),Ur.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=h[g],_=r[g];d!==0&&(ma.fromBufferAttribute(_,c),ga.fromBufferAttribute(_,u),_a.fromBufferAttribute(_,f),o?(Fr.addScaledVector(ma,d),Or.addScaledVector(ga,d),Ur.addScaledVector(_a,d)):(Fr.addScaledVector(ma.sub(Hn),d),Or.addScaledVector(ga.sub(Gn),d),Ur.addScaledVector(_a.sub(Vn),d)))}Hn.add(Fr),Gn.add(Or),Vn.add(Ur)}i.isSkinnedMesh&&(i.boneTransform(c,Hn),i.boneTransform(u,Gn),i.boneTransform(f,Vn));const p=N0(i,e,t,n,Hn,Gn,Vn,xa);if(p){a&&(zr.fromBufferAttribute(a,c),Br.fromBufferAttribute(a,u),kr.fromBufferAttribute(a,f),p.uv=An.getUV(xa,Hn,Gn,Vn,zr,Br,kr,new Ce)),l&&(zr.fromBufferAttribute(l,c),Br.fromBufferAttribute(l,u),kr.fromBufferAttribute(l,f),p.uv2=An.getUV(xa,Hn,Gn,Vn,zr,Br,kr,new Ce));const g={a:c,b:u,c:f,normal:new P,materialIndex:0};An.getNormal(Hn,Gn,Vn,g.normal),p.face=g}return p}class As extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function g(m,d,_,y,w,v,T,R,D,M,L){const k=v/D,z=T/M,oe=v/2,ce=T/2,O=R/2,q=D+1,U=M+1;let K=0,G=0;const B=new P;for(let X=0;X<U;X++){const de=X*z-ce;for(let ae=0;ae<q;ae++){const _e=ae*k-oe;B[m]=_e*y,B[d]=de*w,B[_]=O,c.push(B.x,B.y,B.z),B[m]=0,B[d]=0,B[_]=R>0?1:-1,u.push(B.x,B.y,B.z),f.push(ae/D),f.push(1-X/M),K+=1}}for(let X=0;X<M;X++)for(let de=0;de<D;de++){const ae=h+de+q*X,_e=h+de+q*(X+1),we=h+(de+1)+q*(X+1),Ae=h+(de+1)+q*X;l.push(ae,_e,Ae),l.push(_e,we,Ae),G+=6}a.addGroup(p,G,L),p+=G,h+=K}}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function F0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const uo={clone:vs,merge:mt};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ed extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _t extends ed{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=90,$i=1;class z0 extends ot{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new _t(Yi,$i,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(1,0,0)),this.add(s);const r=new _t(Yi,$i,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const o=new _t(Yi,$i,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new _t(Yi,$i,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const l=new _t(Yi,$i,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new _t(Yi,$i,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class td extends Mt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends si{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:ei});r.uniforms.tEquirect.value=t;const o=new yt(s,r),a=t.minFilter;return t.minFilter===ws&&(t.minFilter=Ct),new z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const va=new P,k0=new P,H0=new Vt;class Kn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=va.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||H0.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Es,Vr=new P;class Ul{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],y=n[14],w=n[15];return t[0].setComponents(a-s,f-l,m-h,w-d).normalize(),t[1].setComponents(a+s,f+l,m+h,w+d).normalize(),t[2].setComponents(a+r,f+c,m+p,w+_).normalize(),t[3].setComponents(a-r,f-c,m-p,w-_).normalize(),t[4].setComponents(a-o,f-u,m-g,w-y).normalize(),t[5].setComponents(a+o,f+u,m+g,w+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function G0(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Ao extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const y=_*h-o;for(let w=0;w<c;w++){const v=w*f-r;g.push(v,-y,0),m.push(0,0,1),d.push(w/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const w=y+c*_,v=y+c*(_+1),T=y+1+c*(_+1),R=y+1+c*_;p.push(w,v,R),p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(d,2))}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0="vec3 transformed = vec3( position );",$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,J0=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lx=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Px=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ox=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ux=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,nv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Dv=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Iv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Uv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,iy=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ry=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,py=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:V0,alphamap_pars_fragment:W0,alphatest_fragment:j0,alphatest_pars_fragment:q0,aomap_fragment:X0,aomap_pars_fragment:K0,begin_vertex:Y0,beginnormal_vertex:$0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ox,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:fx,displacementmap_vertex:hx,emissivemap_fragment:dx,emissivemap_pars_fragment:px,encodings_fragment:mx,encodings_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:xx,envmap_pars_fragment:vx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Px,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:wx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ex,lightmap_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_vertex:Rx,lights_pars_begin:Lx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Ix,lights_phong_fragment:Nx,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Ux,lights_fragment_begin:zx,lights_fragment_maps:Bx,lights_fragment_end:kx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Wx,map_fragment:jx,map_pars_fragment:qx,map_particle_fragment:Xx,map_particle_pars_fragment:Kx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:$x,morphcolor_vertex:Zx,morphnormal_vertex:Jx,morphtarget_pars_vertex:Qx,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:uv,output_fragment:fv,packing:hv,premultiplied_alpha_fragment:dv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:xv,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:yv,shadowmap_vertex:Mv,shadowmask_pars_fragment:bv,skinbase_vertex:Sv,skinning_pars_vertex:wv,skinning_vertex:Tv,skinnormal_vertex:Ev,specularmap_fragment:Av,specularmap_pars_fragment:Cv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Lv,transmission_fragment:Pv,transmission_pars_fragment:Dv,uv_pars_fragment:Iv,uv_pars_vertex:Nv,uv_vertex:Fv,uv2_pars_fragment:Ov,uv2_pars_vertex:Uv,uv2_vertex:zv,worldpos_vertex:Bv,background_vert:kv,background_frag:Hv,cube_vert:Gv,cube_frag:Vv,depth_vert:Wv,depth_frag:jv,distanceRGBA_vert:qv,distanceRGBA_frag:Xv,equirect_vert:Kv,equirect_frag:Yv,linedashed_vert:$v,linedashed_frag:Zv,meshbasic_vert:Jv,meshbasic_frag:Qv,meshlambert_vert:ey,meshlambert_frag:ty,meshmatcap_vert:ny,meshmatcap_frag:iy,meshnormal_vert:sy,meshnormal_frag:ry,meshphong_vert:oy,meshphong_frag:ay,meshphysical_vert:ly,meshphysical_frag:cy,meshtoon_vert:uy,meshtoon_frag:fy,points_vert:hy,points_frag:dy,shadow_vert:py,shadow_frag:my,sprite_vert:gy,sprite_frag:_y},ve={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},ln={basic:{uniforms:mt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:mt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:mt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:mt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:mt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:mt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:mt([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:mt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:mt([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:mt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:mt([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:mt([ve.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:mt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:mt([ve.lights,ve.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ln.physical={uniforms:mt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function xy(i,e,t,n,s,r){const o=new Re(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(m,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=e.get(y));const w=i.xr,v=w.getSession&&w.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Eo)?(c===void 0&&(c=new yt(new As(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:vs(ln.cube.uniforms),vertexShader:ln.cube.vertexShader,fragmentShader:ln.cube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yt(new Ao(2,2),new sn({name:"BackgroundMaterial",uniforms:vs(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function vy(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function f(O,q,U,K,G){let B=!1;if(o){const X=m(K,U,q);c!==X&&(c=X,p(c.object)),B=_(O,K,U,G),B&&y(O,K,U,G)}else{const X=q.wireframe===!0;(c.geometry!==K.id||c.program!==U.id||c.wireframe!==X)&&(c.geometry=K.id,c.program=U.id,c.wireframe=X,B=!0)}G!==null&&t.update(G,34963),(B||u)&&(u=!1,M(O,q,U,K),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,q,U){const K=U.wireframe===!0;let G=a[O.id];G===void 0&&(G={},a[O.id]=G);let B=G[q.id];B===void 0&&(B={},G[q.id]=B);let X=B[K];return X===void 0&&(X=d(h()),B[K]=X),X}function d(O){const q=[],U=[],K=[];for(let G=0;G<s;G++)q[G]=0,U[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:U,attributeDivisors:K,object:O,attributes:{},index:null}}function _(O,q,U,K){const G=c.attributes,B=q.attributes;let X=0;const de=U.getAttributes();for(const ae in de)if(de[ae].location>=0){const we=G[ae];let Ae=B[ae];if(Ae===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),we===void 0||we.attribute!==Ae||Ae&&we.data!==Ae.data)return!0;X++}return c.attributesNum!==X||c.index!==K}function y(O,q,U,K){const G={},B=q.attributes;let X=0;const de=U.getAttributes();for(const ae in de)if(de[ae].location>=0){let we=B[ae];we===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(we=O.instanceColor));const Ae={};Ae.attribute=we,we&&we.data&&(Ae.data=we.data),G[ae]=Ae,X++}c.attributes=G,c.attributesNum=X,c.index=K}function w(){const O=c.newAttributes;for(let q=0,U=O.length;q<U;q++)O[q]=0}function v(O){T(O,0)}function T(O,q){const U=c.newAttributes,K=c.enabledAttributes,G=c.attributeDivisors;U[O]=1,K[O]===0&&(i.enableVertexAttribArray(O),K[O]=1),G[O]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),G[O]=q)}function R(){const O=c.newAttributes,q=c.enabledAttributes;for(let U=0,K=q.length;U<K;U++)q[U]!==O[U]&&(i.disableVertexAttribArray(U),q[U]=0)}function D(O,q,U,K,G,B){n.isWebGL2===!0&&(U===5124||U===5125)?i.vertexAttribIPointer(O,q,U,G,B):i.vertexAttribPointer(O,q,U,K,G,B)}function M(O,q,U,K){if(n.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const G=K.attributes,B=U.getAttributes(),X=q.defaultAttributeValues;for(const de in B){const ae=B[de];if(ae.location>=0){let _e=G[de];if(_e===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),_e!==void 0){const we=_e.normalized,Ae=_e.itemSize,$=t.get(_e);if($===void 0)continue;const V=$.buffer,re=$.type,Q=$.bytesPerElement;if(_e.isInterleavedBufferAttribute){const te=_e.data,Ee=te.stride,E=_e.offset;if(te.isInstancedInterleavedBuffer){for(let C=0;C<ae.locationSize;C++)T(ae.location+C,te.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let C=0;C<ae.locationSize;C++)v(ae.location+C);i.bindBuffer(34962,V);for(let C=0;C<ae.locationSize;C++)D(ae.location+C,Ae/ae.locationSize,re,we,Ee*Q,(E+Ae/ae.locationSize*C)*Q)}else{if(_e.isInstancedBufferAttribute){for(let te=0;te<ae.locationSize;te++)T(ae.location+te,_e.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let te=0;te<ae.locationSize;te++)v(ae.location+te);i.bindBuffer(34962,V);for(let te=0;te<ae.locationSize;te++)D(ae.location+te,Ae/ae.locationSize,re,we,Ae*Q,Ae/ae.locationSize*te*Q)}}else if(X!==void 0){const we=X[de];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(ae.location,we);break;case 3:i.vertexAttrib3fv(ae.location,we);break;case 4:i.vertexAttrib4fv(ae.location,we);break;default:i.vertexAttrib1fv(ae.location,we)}}}}R()}function L(){oe();for(const O in a){const q=a[O];for(const U in q){const K=q[U];for(const G in K)g(K[G].object),delete K[G];delete q[U]}delete a[O]}}function k(O){if(a[O.id]===void 0)return;const q=a[O.id];for(const U in q){const K=q[U];for(const G in K)g(K[G].object),delete K[G];delete q[U]}delete a[O.id]}function z(O){for(const q in a){const U=a[q];if(U[O.id]===void 0)continue;const K=U[O.id];for(const G in K)g(K[G].object),delete K[G];delete U[O.id]}}function oe(){ce(),u=!0,c!==l&&(c=l,p(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:ce,dispose:L,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:v,disableUnusedAttributes:R}}function yy(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function My(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),y=i.getParameter(36349),w=h>0,v=o||e.has("OES_texture_float"),T=w&&v,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:R}}function by(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Kn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||s;return s=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const y=r?0:n,w=y*4;let v=_.clippingState||null;l.value=v,v=u(g,h,w,p);for(let T=0;T!==w;++T)v[T]=t[T];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let w=0,v=p;w!==m;++w,v+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Sy(i){let e=new WeakMap;function t(o,a){return a===Ya?o.mapping=ms:a===$a&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ya||a===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new B0(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zl extends ed{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,Du=[.125,.215,.35,.446,.526,.582],mi=20,ya=new zl,Iu=new Re;let Ma=null;const fi=(1+Math.sqrt(5))/2,Ji=1/fi,Nu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,fi,Ji),new P(0,fi,-Ji),new P(Ji,0,fi),new P(-Ji,0,fi),new P(fi,Ji,0),new P(-fi,Ji,0)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ar,format:Ft,encoding:Ri,depthBuffer:!1},s=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wy(r)),this._blurMaterial=Ty(r,e,t)}return s}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s){const a=new _t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Iu),u.toneMapping=Ln,u.autoClear=!1;const p=new Zn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new yt(new As,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Iu),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;Wr(s,y*w,_>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nu[(s-1)%Nu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):mi;d>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mi}`);const _=[];let y=0;for(let D=0;D<mi;++D){const M=D/m,L=Math.exp(-M*M/2);_.push(L),D===0?y+=L:D<d&&(y+=2*L)}for(let D=0;D<_.length;D++)_[D]=_[D]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const v=this._sizeLods[s],T=3*v*(s>w-ns?s-w+ns:0),R=4*(this._cubeSize-v);Wr(t,T,R,3*v,2*v),l.setRenderTarget(t),l.render(f,ya)}}function wy(i){const e=[],t=[],n=[];let s=i;const r=i-ns+1+Du.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ns?l=Du[o-i+ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,y=new Float32Array(m*g*p),w=new Float32Array(d*g*p),v=new Float32Array(_*g*p);for(let R=0;R<p;R++){const D=R%3*2/3-1,M=R>2?0:-1,L=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];y.set(L,m*g*R),w.set(h,d*g*R);const k=[R,R,R,R,R,R];v.set(k,_*g*R)}const T=new Ut;T.setAttribute("position",new Ot(y,m)),T.setAttribute("uv",new Ot(w,d)),T.setAttribute("faceIndex",new Ot(v,_)),e.push(T),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(i,e,t){const n=new si(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ty(i,e,t){const n=new Float32Array(mi),s=new P(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ou(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Uu(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Ey(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ya||l===$a,u=l===ms||l===gs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new il(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new il(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ay(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let w=0,v=y.length;w<v;w+=3){const T=y[w+0],R=y[w+1],D=y[w+2];h.push(T,R,R,D,D,T)}}else{const y=g.array;m=g.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const T=w+0,R=w+1,D=w+2;h.push(T,R,R,D,D,T)}}const d=new(qh(h)?Qh:Jh)(h,1);d.version=m;const _=r.get(f);_&&e.remove(_),r.set(f,d)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ry(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Ly(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Py(i,e){return i[0]-e[0]}function Dy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ba(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Iy(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let q=function(){ce.dispose(),r.delete(u),u.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();const w=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let L=0;w===!0&&(L=1),v===!0&&(L=2),T===!0&&(L=3);let k=u.attributes.position.count*L,z=1;k>e.maxTextureSize&&(z=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const oe=new Float32Array(k*z*4*m),ce=new $h(oe,k,z,m);ce.type=$n,ce.needsUpdate=!0;const O=L*4;for(let U=0;U<m;U++){const K=R[U],G=D[U],B=M[U],X=k*z*4*U;for(let de=0;de<K.count;de++){const ae=de*O;w===!0&&(o.fromBufferAttribute(K,de),K.normalized===!0&&ba(o,K),oe[X+ae+0]=o.x,oe[X+ae+1]=o.y,oe[X+ae+2]=o.z,oe[X+ae+3]=0),v===!0&&(o.fromBufferAttribute(G,de),G.normalized===!0&&ba(o,G),oe[X+ae+4]=o.x,oe[X+ae+5]=o.y,oe[X+ae+6]=o.z,oe[X+ae+7]=0),T===!0&&(o.fromBufferAttribute(B,de),B.normalized===!0&&ba(o,B),oe[X+ae+8]=o.x,oe[X+ae+9]=o.y,oe[X+ae+10]=o.z,oe[X+ae+11]=B.itemSize===4?o.w:1)}}d={count:m,texture:ce,size:new Ce(k,z)},r.set(u,d),u.addEventListener("dispose",q)}let _=0;for(let w=0;w<p.length;w++)_+=p[w];const y=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<g;v++){const T=m[v];T[0]=v,T[1]=p[v]}m.sort(Dy);for(let v=0;v<8;v++)v<g&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Py);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const T=a[v],R=T[0],D=T[1];R!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+v)!==d[R]&&u.setAttribute("morphTarget"+v,d[R]),_&&u.getAttribute("morphNormal"+v)!==_[R]&&u.setAttribute("morphNormal"+v,_[R]),s[v]=D,y+=D):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const w=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ny(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const id=new Mt,sd=new $h,rd=new w0,od=new td,zu=[],Bu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Co(i,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function By(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Et(t,n)}}function ky(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),Et(t,n)}}function Hy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),Et(t,n)}}function Gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vy(i,e){const t=this.cache;Tt(t,e)||(i.uniform2iv(this.addr,e),Et(t,e))}function Wy(i,e){const t=this.cache;Tt(t,e)||(i.uniform3iv(this.addr,e),Et(t,e))}function jy(i,e){const t=this.cache;Tt(t,e)||(i.uniform4iv(this.addr,e),Et(t,e))}function qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){const t=this.cache;Tt(t,e)||(i.uniform2uiv(this.addr,e),Et(t,e))}function Ky(i,e){const t=this.cache;Tt(t,e)||(i.uniform3uiv(this.addr,e),Et(t,e))}function Yy(i,e){const t=this.cache;Tt(t,e)||(i.uniform4uiv(this.addr,e),Et(t,e))}function $y(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||id,s)}function Zy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function Jy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function Qy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function eM(i){switch(i){case 5126:return Fy;case 35664:return Oy;case 35665:return Uy;case 35666:return zy;case 35674:return By;case 35675:return ky;case 35676:return Hy;case 5124:case 35670:return Gy;case 35667:case 35671:return Vy;case 35668:case 35672:return Wy;case 35669:case 35673:return jy;case 5125:return qy;case 36294:return Xy;case 36295:return Ky;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}function tM(i,e){i.uniform1fv(this.addr,e)}function nM(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function iM(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function sM(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function rM(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oM(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function aM(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lM(i,e){i.uniform1iv(this.addr,e)}function cM(i,e){i.uniform2iv(this.addr,e)}function uM(i,e){i.uniform3iv(this.addr,e)}function fM(i,e){i.uniform4iv(this.addr,e)}function hM(i,e){i.uniform1uiv(this.addr,e)}function dM(i,e){i.uniform2uiv(this.addr,e)}function pM(i,e){i.uniform3uiv(this.addr,e)}function mM(i,e){i.uniform4uiv(this.addr,e)}function gM(i,e,t){const n=e.length,s=Co(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||id,s[r])}function _M(i,e,t){const n=e.length,s=Co(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||rd,s[r])}function xM(i,e,t){const n=e.length,s=Co(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||od,s[r])}function vM(i,e,t){const n=e.length,s=Co(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||sd,s[r])}function yM(i){switch(i){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return hM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return vM}}class MM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=eM(t.type)}}class bM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yM(t.type)}}class SM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function wM(i,e,t){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),o=Sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vu(t,c===void 0?new MM(a,i,e):new bM(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new SM(a),Vu(t,f)),t=f}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Wu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let TM=0;function EM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function AM(i){switch(i){case Ri:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ju(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+EM(i.getShaderSource(e),o)}else return s}function CM(i,e){const t=AM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function RM(i,e){let t;switch(e){case U_:t="Linear";break;case z_:t="Reinhard";break;case B_:t="OptimizedCineon";break;case kh:t="ACESFilmic";break;case k_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function PM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ws(i){return i!==""}function qu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(IM,NM)}function NM(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sl(t)}const FM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(OM,ad).replace(FM,UM)}function UM(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ad(i,e,t,n)}function ad(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function HM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function GM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function VM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zM(t),c=BM(t),u=kM(t),f=HM(t),h=GM(t),p=t.isWebGL2?"":LM(t),g=PM(r),m=s.createProgram();let d,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ws).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Ws).join(`
`),_.length>0&&(_+=`
`)):(d=[Yu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),_=[p,Yu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ln?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,CM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),o=sl(o),o=qu(o,t),o=Xu(o,t),a=sl(a),a=qu(a,t),a=Xu(a,t),o=Ku(o),a=Ku(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=y+d+o,v=y+_+a,T=Wu(s,35633,w),R=Wu(s,35632,v);if(s.attachShader(m,T),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(R).trim();let oe=!0,ce=!0;if(s.getProgramParameter(m,35714)===!1){oe=!1;const O=ju(s,T,"vertex"),q=ju(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+O+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||z==="")&&(ce=!1);ce&&(this.diagnostics={runnable:oe,programLog:L,vertexShader:{log:k,prefix:d},fragmentShader:{log:z,prefix:_}})}s.deleteShader(T),s.deleteShader(R);let D;this.getUniforms=function(){return D===void 0&&(D=new to(s,m)),D};let M;return this.getAttributes=function(){return M===void 0&&(M=DM(s,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=TM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let WM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new qM(e);t.set(e,n)}return t.get(e)}}class qM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function XM(i,e,t,n,s,r,o){const a=new Zh,l=new jM,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,L,k,z,oe){const ce=z.fog,O=oe.geometry,q=M.isMeshStandardMaterial?z.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),K=U&&U.mapping===Eo?U.image.height:null,G=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,X=B!==void 0?B.length:0;let de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let ae,_e,we,Ae;if(G){const Ee=ln[G];ae=Ee.vertexShader,_e=Ee.fragmentShader}else ae=M.vertexShader,_e=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const $=i.getRenderTarget(),V=M.alphaTest>0,re=M.clearcoat>0,Q=M.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:M.type,vertexShader:ae,fragmentShader:_e,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Ri,map:!!M.map,matcap:!!M.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===o0,tangentSpaceNormalMap:M.normalMapType===Nl,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===$e,clearcoat:re,clearcoatMap:re&&!!M.clearcoatMap,clearcoatRoughnessMap:re&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!M.clearcoatNormalMap,iridescence:Q,iridescenceMap:Q&&!!M.iridescenceMap,iridescenceThicknessMap:Q&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===as,alphaMap:!!M.alphaMap,alphaTest:V,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ce,useFog:M.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:de,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:Ln,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===Wt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)L.push(k),L.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(_(L,M),y(L,M),L.push(i.outputEncoding)),L.push(M.customProgramCacheKey),L.join()}function _(M,L){M.push(L.precision),M.push(L.outputEncoding),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.combine),M.push(L.vertexUvs),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function y(M,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),M.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),M.push(a.mask)}function w(M){const L=g[M.type];let k;if(L){const z=ln[L];k=uo.clone(z.uniforms)}else k=M.uniforms;return k}function v(M,L){let k;for(let z=0,oe=c.length;z<oe;z++){const ce=c[z];if(ce.cacheKey===L){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new VM(i,L,M,r),c.push(k)),k}function T(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:D}}function KM(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function YM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,m,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||YM),n.length>1&&n.sort(h||$u),s.length>1&&s.sort(h||$u)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $M(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new Zu,i.set(n,[r])):s>=i.get(n).length?(r=new Zu,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function JM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QM=0;function eb(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function tb(i,e){const t=new ZM,n=JM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,o=new He,a=new He;function l(u,f){let h=0,p=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let m=0,d=0,_=0,y=0,w=0,v=0,T=0,R=0;u.sort(eb);const D=f!==!0?Math.PI:1;for(let L=0,k=u.length;L<k;L++){const z=u[L],oe=z.color,ce=z.intensity,O=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=oe.r*ce*D,p+=oe.g*ce*D,g+=oe.b*ce*D;else if(z.isLightProbe)for(let U=0;U<9;U++)s.probe[U].addScaledVector(z.sh.coefficients[U],ce);else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*D),z.castShadow){const K=z.shadow,G=n.get(z);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.directionalShadow[m]=G,s.directionalShadowMap[m]=q,s.directionalShadowMatrix[m]=z.shadow.matrix,v++}s.directional[m]=U,m++}else if(z.isSpotLight){const U=t.get(z);if(U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(oe).multiplyScalar(ce*D),U.distance=O,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,z.castShadow){const K=z.shadow,G=n.get(z);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.spotShadow[_]=G,s.spotShadowMap[_]=q,s.spotShadowMatrix[_]=z.shadow.matrix,R++}s.spot[_]=U,_++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(oe).multiplyScalar(ce),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=U,y++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*D),U.distance=z.distance,U.decay=z.decay,z.castShadow){const K=z.shadow,G=n.get(z);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,s.pointShadow[d]=G,s.pointShadowMap[d]=q,s.pointShadowMatrix[d]=z.shadow.matrix,T++}s.point[d]=U,d++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(ce*D),U.groundColor.copy(z.groundColor).multiplyScalar(ce*D),s.hemi[w]=U,w++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const M=s.hash;(M.directionalLength!==m||M.pointLength!==d||M.spotLength!==_||M.rectAreaLength!==y||M.hemiLength!==w||M.numDirectionalShadows!==v||M.numPointShadows!==T||M.numSpotShadows!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=d,s.hemi.length=w,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=T,s.spotShadowMatrix.length=R,M.directionalLength=m,M.pointLength=d,M.spotLength=_,M.rectAreaLength=y,M.hemiLength=w,M.numDirectionalShadows=v,M.numPointShadows=T,M.numSpotShadows=R,s.version=QM++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let y=0,w=u.length;y<w;y++){const v=u[y];if(v.isDirectionalLight){const T=s.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),h++}else if(v.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const T=s.rectArea[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const T=s.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const T=s.hemi[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Ju(i,e){const t=new tb(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nb(i,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Ju(i,e),t.set(r,[a])):o>=t.get(r).length?(a=new Ju(i,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:n,dispose:s}}class ib extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(i,e,t){let n=new Ul;const s=new Ce,r=new Ce,o=new qe,a=new ib({depthPacking:r0}),l=new sb,c={},u=t.maxTextureSize,f={0:Wt,1:Ai,2:ni},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:rb,fragmentShader:ob}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new yt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh,this.render=function(v,T,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const D=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let z=0,oe=v.length;z<oe;z++){const ce=v[z],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const q=O.getFrameExtents();if(s.multiply(q),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,O.mapSize.y=r.y)),O.map===null){const K=this.type!==Vs?{minFilter:lt,magFilter:lt}:{};O.map=new si(s.x,s.y,K),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const U=O.getViewportCount();for(let K=0;K<U;K++){const G=O.getViewport(K);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),k.viewport(o),O.updateMatrices(ce,K),n=O.getFrustum(),w(T,R,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===Vs&&_(O,R),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(D,M,L)};function _(v,T){const R=e.update(m);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new si(s.x,s.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,R,h,m,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,R,p,m,null)}function y(v,T,R,D,M,L){let k=null;const z=R.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(z!==void 0?k=z:k=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const oe=k.uuid,ce=T.uuid;let O=c[oe];O===void 0&&(O={},c[oe]=O);let q=O[ce];q===void 0&&(q=k.clone(),O[ce]=q),k=q}return k.visible=T.visible,k.wireframe=T.wireframe,L===Vs?k.side=T.shadowSide!==null?T.shadowSide:T.side:k.side=T.shadowSide!==null?T.shadowSide:f[T.side],k.alphaMap=T.alphaMap,k.alphaTest=T.alphaTest,k.clipShadows=T.clipShadows,k.clippingPlanes=T.clippingPlanes,k.clipIntersection=T.clipIntersection,k.displacementMap=T.displacementMap,k.displacementScale=T.displacementScale,k.displacementBias=T.displacementBias,k.wireframeLinewidth=T.wireframeLinewidth,k.linewidth=T.linewidth,R.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(R.matrixWorld),k.nearDistance=D,k.farDistance=M),k}function w(v,T,R,D,M){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===Vs)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);const z=e.update(v),oe=v.material;if(Array.isArray(oe)){const ce=z.groups;for(let O=0,q=ce.length;O<q;O++){const U=ce[O],K=oe[U.materialIndex];if(K&&K.visible){const G=y(v,K,D,R.near,R.far,M);i.renderBufferDirect(R,null,z,G,v,U)}}}else if(oe.visible){const ce=y(v,oe,D,R.near,R.far,M);i.renderBufferDirect(R,null,z,ce,v,null)}}const k=v.children;for(let z=0,oe=k.length;z<oe;z++)w(k[z],T,R,D,M)}}function lb(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const ye=new qe;let ee=null;const Te=new qe(0,0,0,0);return{setMask:function(Se){ee!==Se&&!I&&(i.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){I=Se},setClear:function(Se,We,ct,nt,In){In===!0&&(Se*=nt,We*=nt,ct*=nt),ye.set(Se,We,ct,nt),Te.equals(ye)===!1&&(i.clearColor(Se,We,ct,nt),Te.copy(ye))},reset:function(){I=!1,ee=null,Te.set(-1,0,0,0)}}}function r(){let I=!1,ye=null,ee=null,Te=null;return{setTest:function(Se){Se?V(2929):re(2929)},setMask:function(Se){ye!==Se&&!I&&(i.depthMask(Se),ye=Se)},setFunc:function(Se){if(ee!==Se){if(Se)switch(Se){case C_:i.depthFunc(512);break;case R_:i.depthFunc(519);break;case L_:i.depthFunc(513);break;case Ka:i.depthFunc(515);break;case P_:i.depthFunc(514);break;case D_:i.depthFunc(518);break;case I_:i.depthFunc(516);break;case N_:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ee=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Te!==Se&&(i.clearDepth(Se),Te=Se)},reset:function(){I=!1,ye=null,ee=null,Te=null}}}function o(){let I=!1,ye=null,ee=null,Te=null,Se=null,We=null,ct=null,nt=null,In=null;return{setTest:function(et){I||(et?V(2960):re(2960))},setMask:function(et){ye!==et&&!I&&(i.stencilMask(et),ye=et)},setFunc:function(et,mn,zt){(ee!==et||Te!==mn||Se!==zt)&&(i.stencilFunc(et,mn,zt),ee=et,Te=mn,Se=zt)},setOp:function(et,mn,zt){(We!==et||ct!==mn||nt!==zt)&&(i.stencilOp(et,mn,zt),We=et,ct=mn,nt=zt)},setLocked:function(et){I=et},setClear:function(et){In!==et&&(i.clearStencil(et),In=et)},reset:function(){I=!1,ye=null,ee=null,Te=null,Se=null,We=null,ct=null,nt=null,In=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,w=null,v=null,T=null,R=null,D=null,M=null,L=!1,k=null,z=null,oe=null,ce=null,O=null;const q=i.getParameter(35661);let U=!1,K=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=K>=2);let B=null,X={};const de=i.getParameter(3088),ae=i.getParameter(2978),_e=new qe().fromArray(de),we=new qe().fromArray(ae);function Ae(I,ye,ee){const Te=new Uint8Array(4),Se=i.createTexture();i.bindTexture(I,Se),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let We=0;We<ee;We++)i.texImage2D(ye+We,0,6408,1,1,0,6408,5121,Te);return Se}const $={};$[3553]=Ae(3553,3553,1),$[34067]=Ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(2929),l.setFunc(Ka),J(!1),le(Wc),V(2884),N(ei);function V(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function re(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Q(I,ye){return p[I]!==ye?(i.bindFramebuffer(I,ye),p[I]=ye,n&&(I===36009&&(p[36160]=ye),I===36160&&(p[36009]=ye)),!0):!1}function te(I,ye){let ee=m,Te=!1;if(I)if(ee=g.get(ye),ee===void 0&&(ee=[],g.set(ye,ee)),I.isWebGLMultipleRenderTargets){const Se=I.texture;if(ee.length!==Se.length||ee[0]!==36064){for(let We=0,ct=Se.length;We<ct;We++)ee[We]=36064+We;ee.length=Se.length,Te=!0}}else ee[0]!==36064&&(ee[0]=36064,Te=!0);else ee[0]!==1029&&(ee[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ee(I){return d!==I?(i.useProgram(I),d=I,!0):!1}const E={[es]:32774,[__]:32778,[x_]:32779};if(n)E[Xc]=32775,E[Kc]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(E[Xc]=I.MIN_EXT,E[Kc]=I.MAX_EXT)}const C={[v_]:0,[y_]:1,[M_]:768,[Uh]:770,[A_]:776,[T_]:774,[S_]:772,[b_]:769,[zh]:771,[E_]:775,[w_]:773};function N(I,ye,ee,Te,Se,We,ct,nt){if(I===ei){_===!0&&(re(3042),_=!1);return}if(_===!1&&(V(3042),_=!0),I!==g_){if(I!==y||nt!==L){if((w!==es||R!==es)&&(i.blendEquation(32774),w=es,R=es),nt)switch(I){case as:i.blendFuncSeparate(1,771,1,771);break;case Xa:i.blendFunc(1,1);break;case jc:i.blendFuncSeparate(0,769,0,1);break;case qc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case as:i.blendFuncSeparate(770,771,1,771);break;case Xa:i.blendFunc(770,1);break;case jc:i.blendFuncSeparate(0,769,0,1);break;case qc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,T=null,D=null,M=null,y=I,L=nt}return}Se=Se||ye,We=We||ee,ct=ct||Te,(ye!==w||Se!==R)&&(i.blendEquationSeparate(E[ye],E[Se]),w=ye,R=Se),(ee!==v||Te!==T||We!==D||ct!==M)&&(i.blendFuncSeparate(C[ee],C[Te],C[We],C[ct]),v=ee,T=Te,D=We,M=ct),y=I,L=null}function j(I,ye){I.side===ni?re(2884):V(2884);let ee=I.side===Wt;ye&&(ee=!ee),J(ee),I.blending===as&&I.transparent===!1?N(ei):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Te=I.stencilWrite;c.setTest(Te),Te&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(32926):re(32926)}function J(I){k!==I&&(I?i.frontFace(2304):i.frontFace(2305),k=I)}function le(I){I!==d_?(V(2884),I!==z&&(I===Wc?i.cullFace(1029):I===p_?i.cullFace(1028):i.cullFace(1032))):re(2884),z=I}function pe(I){I!==oe&&(U&&i.lineWidth(I),oe=I)}function ie(I,ye,ee){I?(V(32823),(ce!==ye||O!==ee)&&(i.polygonOffset(ye,ee),ce=ye,O=ee)):re(32823)}function me(I){I?V(3089):re(3089)}function ue(I){I===void 0&&(I=33984+q-1),B!==I&&(i.activeTexture(I),B=I)}function b(I,ye){B===null&&ue();let ee=X[B];ee===void 0&&(ee={type:void 0,texture:void 0},X[B]=ee),(ee.type!==I||ee.texture!==ye)&&(i.bindTexture(I,ye||$[I]),ee.type=I,ee.texture=ye)}function x(){const I=X[B];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function S(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){_e.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function xe(I){we.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),we.copy(I))}function Le(I,ye){let ee=f.get(ye);ee===void 0&&(ee=new WeakMap,f.set(ye,ee));let Te=ee.get(I);Te===void 0&&(Te=i.getUniformBlockIndex(ye,I.name),ee.set(I,Te))}function Pe(I,ye){const Te=f.get(ye).get(I);u.get(I)!==Te&&(i.uniformBlockBinding(ye,Te,I.__bindingPointIndex),u.set(I,Te))}function ke(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},B=null,X={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,w=null,v=null,T=null,R=null,D=null,M=null,L=!1,k=null,z=null,oe=null,ce=null,O=null,_e.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:V,disable:re,bindFramebuffer:Q,drawBuffers:te,useProgram:Ee,setBlending:N,setMaterial:j,setFlipSided:J,setCullFace:le,setLineWidth:pe,setPolygonOffset:ie,setScissorTest:me,activeTexture:ue,bindTexture:b,unbindTexture:x,compressedTexImage2D:F,texImage2D:se,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:Me,texStorage3D:S,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:he,scissor:be,viewport:xe,reset:ke}}function cb(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,x){return _?new OffscreenCanvas(b,x):ur("canvas")}function w(b,x,F,Y){let ne=1;if((b.width>Y||b.height>Y)&&(ne=Y/Math.max(b.width,b.height)),ne<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const he=x?co:Math.floor,Me=he(ne*b.width),S=he(ne*b.height);m===void 0&&(m=y(Me,S));const se=F?y(Me,S):m;return se.width=Me,se.height=S,se.getContext("2d").drawImage(b,0,0,Me,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+S+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return tl(b.width)&&tl(b.height)}function T(b){return a?!1:b.wrapS!==Ht||b.wrapT!==Ht||b.minFilter!==lt&&b.minFilter!==Ct}function R(b,x){return b.generateMipmaps&&x&&b.minFilter!==lt&&b.minFilter!==Ct}function D(b){i.generateMipmap(b)}function M(b,x,F,Y,ne=!1){if(a===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=x;return x===6403&&(F===5126&&(he=33326),F===5131&&(he=33325),F===5121&&(he=33321)),x===33319&&(F===5126&&(he=33328),F===5131&&(he=33327),F===5121&&(he=33323)),x===6408&&(F===5126&&(he=34836),F===5131&&(he=34842),F===5121&&(he=Y===$e&&ne===!1?35907:32856),F===32819&&(he=32854),F===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function L(b,x,F){return R(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==lt&&b.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function k(b){return b===lt||b===Za||b===Ja?9728:9729}function z(b){const x=b.target;x.removeEventListener("dispose",z),ce(x),x.isVideoTexture&&g.delete(x)}function oe(b){const x=b.target;x.removeEventListener("dispose",oe),q(x)}function ce(b){const x=n.get(b);if(x.__webglInit===void 0)return;const F=b.source,Y=d.get(F);if(Y){const ne=Y[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(b),Object.keys(Y).length===0&&d.delete(F)}n.remove(b)}function O(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const F=b.source,Y=d.get(F);delete Y[x.__cacheKey],o.memory.textures--}function q(b){const x=b.texture,F=n.get(b),Y=n.get(x);if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ne]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ne=0;ne<F.__webglColorRenderbuffer.length;ne++)F.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ne]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,he=x.length;ne<he;ne++){const Me=n.get(x[ne]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(x[ne])}n.remove(x),n.remove(b)}let U=0;function K(){U=0}function G(){const b=U;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),U+=1,b}function B(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function X(b,x){const F=n.get(b);if(b.isVideoTexture&&me(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,b,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,F.__webglTexture)}function de(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){re(F,b,x);return}t.activeTexture(33984+x),t.bindTexture(35866,F.__webglTexture)}function ae(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){re(F,b,x);return}t.activeTexture(33984+x),t.bindTexture(32879,F.__webglTexture)}function _e(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Q(F,b,x);return}t.activeTexture(33984+x),t.bindTexture(34067,F.__webglTexture)}const we={[ii]:10497,[Ht]:33071,[lo]:33648},Ae={[lt]:9728,[Za]:9984,[Ja]:9986,[Ct]:9729,[Gh]:9985,[ws]:9987};function $(b,x,F){if(F?(i.texParameteri(b,10242,we[x.wrapS]),i.texParameteri(b,10243,we[x.wrapT]),(b===32879||b===35866)&&i.texParameteri(b,32882,we[x.wrapR]),i.texParameteri(b,10240,Ae[x.magFilter]),i.texParameteri(b,10241,Ae[x.minFilter])):(i.texParameteri(b,10242,33071),i.texParameteri(b,10243,33071),(b===32879||b===35866)&&i.texParameteri(b,32882,33071),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,10240,k(x.magFilter)),i.texParameteri(b,10241,k(x.minFilter)),x.minFilter!==lt&&x.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(x.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function V(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",z));const Y=x.source;let ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));const he=B(x);if(he!==b.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[he].usedTimes++;const Me=ne[b.__cacheKey];Me!==void 0&&(ne[b.__cacheKey].usedTimes--,Me.usedTimes===0&&O(x)),b.__cacheKey=he,b.__webglTexture=ne[he].texture}return F}function re(b,x,F){let Y=3553;x.isDataArrayTexture&&(Y=35866),x.isData3DTexture&&(Y=32879);const ne=V(b,x),he=x.source;if(t.activeTexture(33984+F),t.bindTexture(Y,b.__webglTexture),he.version!==he.__currentVersion||ne===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const Me=T(x)&&v(x.image)===!1;let S=w(x.image,Me,!1,u);S=ue(x,S);const se=v(S)||a,ge=r.convert(x.format,x.encoding);let be=r.convert(x.type),xe=M(x.internalFormat,ge,be,x.encoding,x.isVideoTexture);$(Y,x,se);let Le;const Pe=x.mipmaps,ke=a&&x.isVideoTexture!==!0,I=he.__currentVersion===void 0||ne===!0,ye=L(x,S,se);if(x.isDepthTexture)xe=6402,a?x.type===$n?xe=36012:x.type===_i?xe=33190:x.type===ls?xe=35056:xe=33189:x.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Si&&xe===6402&&x.type!==Vh&&x.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=_i,be=r.convert(x.type)),x.format===_s&&xe===6402&&(xe=34041,x.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ls,be=r.convert(x.type))),I&&(ke?t.texStorage2D(3553,1,xe,S.width,S.height):t.texImage2D(3553,0,xe,S.width,S.height,0,ge,be,null));else if(x.isDataTexture)if(Pe.length>0&&se){ke&&I&&t.texStorage2D(3553,ye,xe,Pe[0].width,Pe[0].height);for(let ee=0,Te=Pe.length;ee<Te;ee++)Le=Pe[ee],ke?t.texSubImage2D(3553,ee,0,0,Le.width,Le.height,ge,be,Le.data):t.texImage2D(3553,ee,xe,Le.width,Le.height,0,ge,be,Le.data);x.generateMipmaps=!1}else ke?(I&&t.texStorage2D(3553,ye,xe,S.width,S.height),t.texSubImage2D(3553,0,0,0,S.width,S.height,ge,be,S.data)):t.texImage2D(3553,0,xe,S.width,S.height,0,ge,be,S.data);else if(x.isCompressedTexture){ke&&I&&t.texStorage2D(3553,ye,xe,Pe[0].width,Pe[0].height);for(let ee=0,Te=Pe.length;ee<Te;ee++)Le=Pe[ee],x.format!==Ft?ge!==null?ke?t.compressedTexSubImage2D(3553,ee,0,0,Le.width,Le.height,ge,Le.data):t.compressedTexImage2D(3553,ee,xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,ee,0,0,Le.width,Le.height,ge,be,Le.data):t.texImage2D(3553,ee,xe,Le.width,Le.height,0,ge,be,Le.data)}else if(x.isDataArrayTexture)ke?(I&&t.texStorage3D(35866,ye,xe,S.width,S.height,S.depth),t.texSubImage3D(35866,0,0,0,0,S.width,S.height,S.depth,ge,be,S.data)):t.texImage3D(35866,0,xe,S.width,S.height,S.depth,0,ge,be,S.data);else if(x.isData3DTexture)ke?(I&&t.texStorage3D(32879,ye,xe,S.width,S.height,S.depth),t.texSubImage3D(32879,0,0,0,0,S.width,S.height,S.depth,ge,be,S.data)):t.texImage3D(32879,0,xe,S.width,S.height,S.depth,0,ge,be,S.data);else if(x.isFramebufferTexture){if(I)if(ke)t.texStorage2D(3553,ye,xe,S.width,S.height);else{let ee=S.width,Te=S.height;for(let Se=0;Se<ye;Se++)t.texImage2D(3553,Se,xe,ee,Te,0,ge,be,null),ee>>=1,Te>>=1}}else if(Pe.length>0&&se){ke&&I&&t.texStorage2D(3553,ye,xe,Pe[0].width,Pe[0].height);for(let ee=0,Te=Pe.length;ee<Te;ee++)Le=Pe[ee],ke?t.texSubImage2D(3553,ee,0,0,ge,be,Le):t.texImage2D(3553,ee,xe,ge,be,Le);x.generateMipmaps=!1}else ke?(I&&t.texStorage2D(3553,ye,xe,S.width,S.height),t.texSubImage2D(3553,0,0,0,ge,be,S)):t.texImage2D(3553,0,xe,ge,be,S);R(x,se)&&D(Y),he.__currentVersion=he.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Q(b,x,F){if(x.image.length!==6)return;const Y=V(b,x),ne=x.source;if(t.activeTexture(33984+F),t.bindTexture(34067,b.__webglTexture),ne.version!==ne.__currentVersion||Y===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,S=[];for(let ee=0;ee<6;ee++)!he&&!Me?S[ee]=w(x.image[ee],!1,!0,c):S[ee]=Me?x.image[ee].image:x.image[ee],S[ee]=ue(x,S[ee]);const se=S[0],ge=v(se)||a,be=r.convert(x.format,x.encoding),xe=r.convert(x.type),Le=M(x.internalFormat,be,xe,x.encoding),Pe=a&&x.isVideoTexture!==!0,ke=ne.__currentVersion===void 0||Y===!0;let I=L(x,se,ge);$(34067,x,ge);let ye;if(he){Pe&&ke&&t.texStorage2D(34067,I,Le,se.width,se.height);for(let ee=0;ee<6;ee++){ye=S[ee].mipmaps;for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];x.format!==Ft?be!==null?Pe?t.compressedTexSubImage2D(34069+ee,Te,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(34069+ee,Te,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+ee,Te,0,0,Se.width,Se.height,be,xe,Se.data):t.texImage2D(34069+ee,Te,Le,Se.width,Se.height,0,be,xe,Se.data)}}}else{ye=x.mipmaps,Pe&&ke&&(ye.length>0&&I++,t.texStorage2D(34067,I,Le,S[0].width,S[0].height));for(let ee=0;ee<6;ee++)if(Me){Pe?t.texSubImage2D(34069+ee,0,0,0,S[ee].width,S[ee].height,be,xe,S[ee].data):t.texImage2D(34069+ee,0,Le,S[ee].width,S[ee].height,0,be,xe,S[ee].data);for(let Te=0;Te<ye.length;Te++){const We=ye[Te].image[ee].image;Pe?t.texSubImage2D(34069+ee,Te+1,0,0,We.width,We.height,be,xe,We.data):t.texImage2D(34069+ee,Te+1,Le,We.width,We.height,0,be,xe,We.data)}}else{Pe?t.texSubImage2D(34069+ee,0,0,0,be,xe,S[ee]):t.texImage2D(34069+ee,0,Le,be,xe,S[ee]);for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];Pe?t.texSubImage2D(34069+ee,Te+1,0,0,be,xe,Se.image[ee]):t.texImage2D(34069+ee,Te+1,Le,be,xe,Se.image[ee])}}}R(x,ge)&&D(34067),ne.__currentVersion=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function te(b,x,F,Y,ne){const he=r.convert(F.format,F.encoding),Me=r.convert(F.type),S=M(F.internalFormat,he,Me,F.encoding);n.get(x).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,S,x.width,x.height,x.depth,0,he,Me,null):t.texImage2D(ne,0,S,x.width,x.height,0,he,Me,null)),t.bindFramebuffer(36160,b),ie(x)?h.framebufferTexture2DMultisampleEXT(36160,Y,ne,n.get(F).__webglTexture,0,pe(x)):i.framebufferTexture2D(36160,Y,ne,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(b,x,F){if(i.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let Y=33189;if(F||ie(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===$n?Y=36012:ne.type===_i&&(Y=33190));const he=pe(x);ie(x)?h.renderbufferStorageMultisampleEXT(36161,he,Y,x.width,x.height):i.renderbufferStorageMultisample(36161,he,Y,x.width,x.height)}else i.renderbufferStorage(36161,Y,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const Y=pe(x);F&&ie(x)===!1?i.renderbufferStorageMultisample(36161,Y,35056,x.width,x.height):ie(x)?h.renderbufferStorageMultisampleEXT(36161,Y,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,b)}else{const Y=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0;ne<Y.length;ne++){const he=Y[ne],Me=r.convert(he.format,he.encoding),S=r.convert(he.type),se=M(he.internalFormat,Me,S,he.encoding),ge=pe(x);F&&ie(x)===!1?i.renderbufferStorageMultisample(36161,ge,se,x.width,x.height):ie(x)?h.renderbufferStorageMultisampleEXT(36161,ge,se,x.width,x.height):i.renderbufferStorage(36161,se,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function E(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,ne=pe(x);if(x.depthTexture.format===Si)ie(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,ne):i.framebufferTexture2D(36160,36096,3553,Y,0);else if(x.depthTexture.format===_s)ie(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,ne):i.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function C(b){const x=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function N(b,x,F){const Y=n.get(b);x!==void 0&&te(Y.__webglFramebuffer,b,b.texture,36064,3553),F!==void 0&&C(b)}function j(b){const x=b.texture,F=n.get(b),Y=n.get(x);b.addEventListener("dispose",oe),b.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,he=b.isWebGLMultipleRenderTargets===!0,Me=v(b)||a;if(ne){F.__webglFramebuffer=[];for(let S=0;S<6;S++)F.__webglFramebuffer[S]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),he)if(s.drawBuffers){const S=b.texture;for(let se=0,ge=S.length;se<ge;se++){const be=n.get(S[se]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ie(b)===!1){const S=he?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let se=0;se<S.length;se++){const ge=S[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[se]);const be=r.convert(ge.format,ge.encoding),xe=r.convert(ge.type),Le=M(ge.internalFormat,be,xe,ge.encoding),Pe=pe(b);i.renderbufferStorageMultisample(36161,Pe,Le,b.width,b.height),i.framebufferRenderbuffer(36160,36064+se,36161,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(36161,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Y.__webglTexture),$(34067,x,Me);for(let S=0;S<6;S++)te(F.__webglFramebuffer[S],b,x,36064,34069+S);R(x,Me)&&D(34067),t.unbindTexture()}else if(he){const S=b.texture;for(let se=0,ge=S.length;se<ge;se++){const be=S[se],xe=n.get(be);t.bindTexture(3553,xe.__webglTexture),$(3553,be,Me),te(F.__webglFramebuffer,b,be,36064+se,3553),R(be,Me)&&D(3553)}t.unbindTexture()}else{let S=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?S=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(S,Y.__webglTexture),$(S,x,Me),te(F.__webglFramebuffer,b,x,36064,S),R(x,Me)&&D(S),t.unbindTexture()}b.depthBuffer&&C(b)}function J(b){const x=v(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Y=0,ne=F.length;Y<ne;Y++){const he=F[Y];if(R(he,x)){const Me=b.isWebGLCubeRenderTarget?34067:3553,S=n.get(he).__webglTexture;t.bindTexture(Me,S),D(Me),t.unbindTexture()}}}function le(b){if(a&&b.samples>0&&ie(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,Y=b.height;let ne=16384;const he=[],Me=b.stencilBuffer?33306:36096,S=n.get(b),se=b.isWebGLMultipleRenderTargets===!0;if(se)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,S.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,S.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){he.push(36064+ge),b.depthBuffer&&he.push(Me);const be=S.__ignoreDepthValues!==void 0?S.__ignoreDepthValues:!1;if(be===!1&&(b.depthBuffer&&(ne|=256),b.stencilBuffer&&(ne|=1024)),se&&i.framebufferRenderbuffer(36008,36064,36161,S.__webglColorRenderbuffer[ge]),be===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),se){const xe=n.get(x[ge]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,xe,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,ne,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,S.__webglColorRenderbuffer[ge]);const be=n.get(x[ge]).__webglTexture;t.bindFramebuffer(36160,S.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,be,0)}t.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}}function pe(b){return Math.min(f,b.samples)}function ie(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(b){const x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function ue(b,x){const F=b.encoding,Y=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===el||F!==Ri&&(F===$e?a===!1?e.has("EXT_sRGB")===!0&&Y===Ft?(b.format=el,b.minFilter=Ct,b.generateMipmaps=!1):x=Kh.sRGBToLinear(x):(Y!==Ft||ne!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),x}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=de,this.setTexture3D=ae,this.setTextureCube=_e,this.rebindTextures=N,this.setupRenderTarget=j,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ie}function ub(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Ci)return 5121;if(r===W_)return 32819;if(r===j_)return 32820;if(r===H_)return 5120;if(r===G_)return 5122;if(r===Vh)return 5123;if(r===V_)return 5124;if(r===_i)return 5125;if(r===$n)return 5126;if(r===ar)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===q_)return 6406;if(r===Ft)return 6408;if(r===K_)return 6409;if(r===Y_)return 6410;if(r===Si)return 6402;if(r===_s)return 34041;if(r===$_)return 6403;if(r===X_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Z_)return 36244;if(r===J_)return 33319;if(r===Q_)return 33320;if(r===e0)return 36249;if(r===Xo||r===Ko||r===Yo||r===$o)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yc||r===$c||r===Zc||r===Jc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===t0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qc||r===eu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qc)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===fu||r===hu||r===du||r===pu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===iu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===su)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ru)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ou)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pu)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===mu)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ls?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class fb extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let vi=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};const hb={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const y=new vi;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class db extends Mt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=_i),n===void 0&&u===_s&&(n=ls),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}class pb extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],y=[],w=new _t;w.layers.enable(1),w.viewport=new qe;const v=new _t;v.layers.enable(2),v.viewport=new qe;const T=[w,v],R=new fb;R.layers.enable(1),R.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=_[B];return X===void 0&&(X=new wa,_[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=_[B];return X===void 0&&(X=new wa,_[B]=X),X.getGripSpace()},this.getHand=function(B){let X=_[B];return X===void 0&&(X=new wa,_[B]=X),X.getHandSpace()};function L(B){const X=y.indexOf(B.inputSource);if(X===-1)return;const de=_[X];de!==void 0&&de.dispatchEvent({type:B.type,data:B.inputSource})}function k(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",z);for(let B=0;B<_.length;B++){const X=y[B];X!==null&&(y[B]=null,_[B].disconnect(X))}D=null,M=null,e.setRenderTarget(m),h=null,f=null,u=null,s=null,d=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",k),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:h}),d=new si(h.framebufferWidth,h.framebufferHeight,{format:Ft,type:Ci,encoding:e.outputEncoding})}else{let X=null,de=null,ae=null;g.depth&&(ae=g.stencil?35056:33190,X=g.stencil?_s:Si,de=g.stencil?ls:_i);const _e={colorFormat:32856,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),d=new si(f.textureWidth,f.textureHeight,{format:Ft,type:Ci,depthTexture:new db(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(B){for(let X=0;X<B.removed.length;X++){const de=B.removed[X],ae=y.indexOf(de);ae>=0&&(y[ae]=null,_[ae].dispatchEvent({type:"disconnected",data:de}))}for(let X=0;X<B.added.length;X++){const de=B.added[X];let ae=y.indexOf(de);if(ae===-1){for(let we=0;we<_.length;we++)if(we>=y.length){y.push(de),ae=we;break}else if(y[we]===null){y[we]=de,ae=we;break}if(ae===-1)break}const _e=_[ae];_e&&_e.dispatchEvent({type:"connected",data:de})}}const oe=new P,ce=new P;function O(B,X,de){oe.setFromMatrixPosition(X.matrixWorld),ce.setFromMatrixPosition(de.matrixWorld);const ae=oe.distanceTo(ce),_e=X.projectionMatrix.elements,we=de.projectionMatrix.elements,Ae=_e[14]/(_e[10]-1),$=_e[14]/(_e[10]+1),V=(_e[9]+1)/_e[5],re=(_e[9]-1)/_e[5],Q=(_e[8]-1)/_e[0],te=(we[8]+1)/we[0],Ee=Ae*Q,E=Ae*te,C=ae/(-Q+te),N=C*-Q;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(N),B.translateZ(C),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const j=Ae+C,J=$+C,le=Ee-N,pe=E+(ae-N),ie=V*$/J*j,me=re*$/J*j;B.projectionMatrix.makePerspective(le,pe,ie,me,j,J)}function q(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;R.near=v.near=w.near=B.near,R.far=v.far=w.far=B.far,(D!==R.near||M!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,M=R.far);const X=B.parent,de=R.cameras;q(R,X);for(let _e=0;_e<de.length;_e++)q(de[_e],X);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),B.position.copy(R.position),B.quaternion.copy(R.quaternion),B.scale.copy(R.scale),B.matrix.copy(R.matrix),B.matrixWorld.copy(R.matrixWorld);const ae=B.children;for(let _e=0,we=ae.length;_e<we;_e++)ae[_e].updateMatrixWorld(!0);de.length===2?O(R,w,v):R.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){f!==null&&(f.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let U=null;function K(B,X){if(c=X.getViewerPose(l||o),p=X,c!==null){const de=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ae=!1;de.length!==R.cameras.length&&(R.cameras.length=0,ae=!0);for(let _e=0;_e<de.length;_e++){const we=de[_e];let Ae=null;if(h!==null)Ae=h.getViewport(we);else{const V=u.getViewSubImage(f,we);Ae=V.viewport,_e===0&&(e.setRenderTargetTextures(d,V.colorTexture,f.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(d))}let $=T[_e];$===void 0&&($=new _t,$.layers.enable(_e),$.viewport=new qe,T[_e]=$),$.matrix.fromArray(we.transform.matrix),$.projectionMatrix.fromArray(we.projectionMatrix),$.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),_e===0&&R.matrix.copy($.matrix),ae===!0&&R.cameras.push($)}}for(let de=0;de<_.length;de++){const ae=y[de],_e=_[de];ae!==null&&_e!==void 0&&_e.update(ae,X,l||o)}U&&U(B,X),p=null}const G=new nd;G.setAnimationLoop(K),this.setAnimationLoop=function(B){U=B},this.dispose=function(){}}}function mb(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,y,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Wt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Wt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Wt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gb(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(y,w){const v=w.program;n.uniformBlockBinding(y,v)}function c(y,w){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",d));const T=w.program;n.updateUBOMapping(y,T);const R=e.render.frame;r[y.id]!==R&&(h(y),r[y.id]=R)}function u(y){const w=f();y.__bindingPointIndex=w;const v=i.createBuffer(),T=y.__size,R=y.usage;return i.bindBuffer(35345,v),i.bufferData(35345,T,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,w,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(35345,w);for(let R=0,D=v.length;R<D;R++){const M=v[R];if(p(M,R,T)===!0){const L=M.value,k=M.__offset;typeof L=="number"?(M.__data[0]=L,i.bufferSubData(35345,k,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):L.toArray(M.__data),i.bufferSubData(35345,k,M.__data))}}i.bindBuffer(35345,null)}function p(y,w,v){const T=y.value;if(v[w]===void 0)return typeof T=="number"?v[w]=T:v[w]=T.clone(),!0;if(typeof T=="number"){if(v[w]!==T)return v[w]=T,!0}else{const R=v[w];if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(y){const w=y.uniforms;let v=0;const T=16;let R=0;for(let D=0,M=w.length;D<M;D++){const L=w[D],k=m(L);if(L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,D>0){R=v%T;const z=T-R;R!==0&&z-k.boundary<0&&(v+=T-R,L.__offset=v)}v+=k.storage}return R=v%T,R>0&&(v+=T-R),y.__size=v,y.__cache={},this}function m(y){const w=y.value,v={boundary:0,storage:0};return typeof w=="number"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function d(y){const w=y.target;w.removeEventListener("dispose",d);const v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function _(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function _b(){const i=ur("canvas");return i.style.display="block",i}function ld(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:_b(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ri,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,y=0,w=null,v=-1,T=null;const R=new qe,D=new qe;let M=null,L=e.width,k=e.height,z=1,oe=null,ce=null;const O=new qe(0,0,L,k),q=new qe(0,0,L,k);let U=!1;const K=new Ul;let G=!1,B=!1,X=null;const de=new He,ae=new Ce,_e=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?z:1}let $=t;function V(A,H){for(let Z=0;Z<A.length;Z++){const W=A[Z],fe=e.getContext(W,H);if(fe!==null)return fe}return null}try{const A={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",ke,!1),$===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),$=V(H,A),$===null)throw V(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let re,Q,te,Ee,E,C,N,j,J,le,pe,ie,me,ue,b,x,F,Y,ne,he,Me,S,se,ge;function be(){re=new Ay($),Q=new My($,re,i),re.init(Q),S=new ub($,re,Q),te=new lb($,re,Q),Ee=new Ly,E=new KM,C=new cb($,re,te,E,Q,S,Ee),N=new Sy(m),j=new Ey(m),J=new G0($,Q),se=new vy($,re,J,Q),le=new Cy($,J,Ee,se),pe=new Ny($,le,J,Ee),ne=new Iy($,Q,C),x=new by(E),ie=new XM(m,N,j,re,Q,se,x),me=new mb(m,E),ue=new $M,b=new nb(re,Q),Y=new xy(m,N,te,pe,u,o),F=new ab(m,pe,Q),ge=new gb($,Ee,Q,te),he=new yy($,re,Ee,Q),Me=new Ry($,re,Ee,Q),Ee.programs=ie.programs,m.capabilities=Q,m.extensions=re,m.properties=E,m.renderLists=ue,m.shadowMap=F,m.state=te,m.info=Ee}be();const xe=new pb(m,$);this.xr=xe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(L,k,!1))},this.getSize=function(A){return A.set(L,k)},this.setSize=function(A,H,Z){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,k=H,e.width=Math.floor(A*z),e.height=Math.floor(H*z),Z!==!1&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(L*z,k*z).floor()},this.setDrawingBufferSize=function(A,H,Z){L=A,k=H,z=Z,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,H,Z,W){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,H,Z,W),te.viewport(R.copy(O).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(q)},this.setScissor=function(A,H,Z,W){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,H,Z,W),te.scissor(D.copy(q).multiplyScalar(z).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(A){te.setScissorTest(U=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,H=!0,Z=!0){let W=0;A&&(W|=16384),H&&(W|=256),Z&&(W|=1024),$.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),ue.dispose(),b.dispose(),E.dispose(),N.dispose(),j.dispose(),pe.dispose(),se.dispose(),ge.dispose(),ie.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",We),xe.removeEventListener("sessionend",ct),X&&(X.dispose(),X=null),nt.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=Ee.autoReset,H=F.enabled,Z=F.autoUpdate,W=F.needsUpdate,fe=F.type;be(),Ee.autoReset=A,F.enabled=H,F.autoUpdate=Z,F.needsUpdate=W,F.type=fe}function ke(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function I(A){const H=A.target;H.removeEventListener("dispose",I),ye(H)}function ye(A){ee(A),E.remove(A)}function ee(A){const H=E.get(A).programs;H!==void 0&&(H.forEach(function(Z){ie.releaseProgram(Z)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,W,fe,De){H===null&&(H=we);const Ne=fe.isMesh&&fe.matrixWorld.determinant()<0,Ue=Dd(A,H,Z,W,fe);te.setMaterial(W,Ne);let Oe=Z.index;const Ye=Z.attributes.position;if(Oe===null){if(Ye===void 0||Ye.count===0)return}else if(Oe.count===0)return;let Ge=1;W.wireframe===!0&&(Oe=le.getWireframeAttribute(Z),Ge=2),se.setup(fe,W,Ue,Z,Oe);let je,tt=he;Oe!==null&&(je=J.get(Oe),tt=Me,tt.setIndex(je));const ri=Oe!==null?Oe.count:Ye.count,Ii=Z.drawRange.start*Ge,Ni=Z.drawRange.count*Ge,rn=De!==null?De.start*Ge:0,Ke=De!==null?De.count*Ge:1/0,Fi=Math.max(Ii,rn),st=Math.min(ri,Ii+Ni,rn+Ke)-1,Bt=Math.max(0,st-Fi+1);if(Bt!==0){if(fe.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*Ae()),tt.setMode(1)):tt.setMode(4);else if(fe.isLine){let Nn=W.linewidth;Nn===void 0&&(Nn=1),te.setLineWidth(Nn*Ae()),fe.isLineSegments?tt.setMode(1):fe.isLineLoop?tt.setMode(2):tt.setMode(3)}else fe.isPoints?tt.setMode(0):fe.isSprite&&tt.setMode(4);if(fe.isInstancedMesh)tt.renderInstances(Fi,Bt,fe.count);else if(Z.isInstancedBufferGeometry){const Nn=Math.min(Z.instanceCount,Z._maxInstanceCount);tt.renderInstances(Fi,Bt,Nn)}else tt.render(Fi,Bt)}},this.compile=function(A,H){h=b.get(A),h.init(),g.push(h),A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(Z){const W=Z.material;if(W)if(Array.isArray(W))for(let fe=0;fe<W.length;fe++){const De=W[fe];Io(De,A,Z)}else Io(W,A,Z)}),g.pop(),h=null};let Te=null;function Se(A){Te&&Te(A)}function We(){nt.stop()}function ct(){nt.start()}const nt=new nd;nt.setAnimationLoop(Se),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(A){Te=A,xe.setAnimationLoop(A),A===null?nt.stop():nt.start()},xe.addEventListener("sessionstart",We),xe.addEventListener("sessionend",ct),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,H,w),h=b.get(A,g.length),h.init(),g.push(h),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(de),B=this.localClippingEnabled,G=x.init(this.clippingPlanes,B,H),f=ue.get(A,p.length),f.init(),p.push(f),In(A,H,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(oe,ce),G===!0&&x.beginShadows();const Z=h.state.shadowsArray;if(F.render(Z,A,H),G===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(f,A),h.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const W=H.cameras;for(let fe=0,De=W.length;fe<De;fe++){const Ne=W[fe];et(f,A,Ne,Ne.viewport)}}else et(f,A,H);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(m,A,H),se.resetDefaultState(),v=-1,T=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function In(A,H,Z,W){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){W&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ne=pe.update(A),Ue=A.material;Ue.visible&&f.push(A,Ne,Ue,Z,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ee.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ee.render.frame),!A.frustumCulled||K.intersectsObject(A))){W&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ne=pe.update(A),Ue=A.material;if(Array.isArray(Ue)){const Oe=Ne.groups;for(let Ye=0,Ge=Oe.length;Ye<Ge;Ye++){const je=Oe[Ye],tt=Ue[je.materialIndex];tt&&tt.visible&&f.push(A,Ne,tt,Z,_e.z,je)}}else Ue.visible&&f.push(A,Ne,Ue,Z,_e.z,null)}}const De=A.children;for(let Ne=0,Ue=De.length;Ne<Ue;Ne++)In(De[Ne],H,Z,W)}function et(A,H,Z,W){const fe=A.opaque,De=A.transmissive,Ne=A.transparent;h.setupLightsView(Z),De.length>0&&mn(fe,H,Z),W&&te.viewport(R.copy(W)),fe.length>0&&zt(fe,H,Z),De.length>0&&zt(De,H,Z),Ne.length>0&&zt(Ne,H,Z),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function mn(A,H,Z){const W=Q.isWebGL2;X===null&&(X=new si(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?ar:Ci,minFilter:ws,samples:W&&r===!0?4:0})),m.getDrawingBufferSize(ae),W?X.setSize(ae.x,ae.y):X.setSize(co(ae.x),co(ae.y));const fe=m.getRenderTarget();m.setRenderTarget(X),m.clear();const De=m.toneMapping;m.toneMapping=Ln,zt(A,H,Z),m.toneMapping=De,C.updateMultisampleRenderTarget(X),C.updateRenderTargetMipmap(X),m.setRenderTarget(fe)}function zt(A,H,Z){const W=H.isScene===!0?H.overrideMaterial:null;for(let fe=0,De=A.length;fe<De;fe++){const Ne=A[fe],Ue=Ne.object,Oe=Ne.geometry,Ye=W===null?Ne.material:W,Ge=Ne.group;Ue.layers.test(Z.layers)&&Pd(Ue,H,Z,Oe,Ye,Ge)}}function Pd(A,H,Z,W,fe,De){A.onBeforeRender(m,H,Z,W,fe,De),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),fe.onBeforeRender(m,H,Z,W,A,De),fe.transparent===!0&&fe.side===ni?(fe.side=Wt,fe.needsUpdate=!0,m.renderBufferDirect(Z,H,W,fe,A,De),fe.side=Ai,fe.needsUpdate=!0,m.renderBufferDirect(Z,H,W,fe,A,De),fe.side=ni):m.renderBufferDirect(Z,H,W,fe,A,De),A.onAfterRender(m,H,Z,W,fe,De)}function Io(A,H,Z){H.isScene!==!0&&(H=we);const W=E.get(A),fe=h.state.lights,De=h.state.shadowsArray,Ne=fe.state.version,Ue=ie.getParameters(A,fe.state,De,H,Z),Oe=ie.getProgramCacheKey(Ue);let Ye=W.programs;W.environment=A.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(A.isMeshStandardMaterial?j:N).get(A.envMap||W.environment),Ye===void 0&&(A.addEventListener("dispose",I),Ye=new Map,W.programs=Ye);let Ge=Ye.get(Oe);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ne)return Yl(A,Ue),Ge}else Ue.uniforms=ie.getUniforms(A),A.onBuild(Z,Ue,m),A.onBeforeCompile(Ue,m),Ge=ie.acquireProgram(Ue,Oe),Ye.set(Oe,Ge),W.uniforms=Ue.uniforms;const je=W.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=x.uniform),Yl(A,Ue),W.needsLights=Nd(A),W.lightsStateVersion=Ne,W.needsLights&&(je.ambientLightColor.value=fe.state.ambient,je.lightProbe.value=fe.state.probe,je.directionalLights.value=fe.state.directional,je.directionalLightShadows.value=fe.state.directionalShadow,je.spotLights.value=fe.state.spot,je.spotLightShadows.value=fe.state.spotShadow,je.rectAreaLights.value=fe.state.rectArea,je.ltc_1.value=fe.state.rectAreaLTC1,je.ltc_2.value=fe.state.rectAreaLTC2,je.pointLights.value=fe.state.point,je.pointLightShadows.value=fe.state.pointShadow,je.hemisphereLights.value=fe.state.hemi,je.directionalShadowMap.value=fe.state.directionalShadowMap,je.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,je.spotShadowMap.value=fe.state.spotShadowMap,je.spotShadowMatrix.value=fe.state.spotShadowMatrix,je.pointShadowMap.value=fe.state.pointShadowMap,je.pointShadowMatrix.value=fe.state.pointShadowMatrix);const tt=Ge.getUniforms(),ri=to.seqWithValue(tt.seq,je);return W.currentProgram=Ge,W.uniformsList=ri,Ge}function Yl(A,H){const Z=E.get(A);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Dd(A,H,Z,W,fe){H.isScene!==!0&&(H=we),C.resetTextureUnits();const De=H.fog,Ne=W.isMeshStandardMaterial?H.environment:null,Ue=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Ri,Oe=(W.isMeshStandardMaterial?j:N).get(W.envMap||Ne),Ye=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!W.normalMap&&!!Z.attributes.tangent,je=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,ri=!!Z.morphAttributes.color,Ii=W.toneMapped?m.toneMapping:Ln,Ni=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=Ni!==void 0?Ni.length:0,Ke=E.get(W),Fi=h.state.lights;if(G===!0&&(B===!0||A!==T)){const Pt=A===T&&W.id===v;x.setState(W,A,Pt)}let st=!1;W.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Fi.state.version||Ke.outputEncoding!==Ue||fe.isInstancedMesh&&Ke.instancing===!1||!fe.isInstancedMesh&&Ke.instancing===!0||fe.isSkinnedMesh&&Ke.skinning===!1||!fe.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Oe||W.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==x.numPlanes||Ke.numIntersection!==x.numIntersection)||Ke.vertexAlphas!==Ye||Ke.vertexTangents!==Ge||Ke.morphTargets!==je||Ke.morphNormals!==tt||Ke.morphColors!==ri||Ke.toneMapping!==Ii||Q.isWebGL2===!0&&Ke.morphTargetsCount!==rn)&&(st=!0):(st=!0,Ke.__version=W.version);let Bt=Ke.currentProgram;st===!0&&(Bt=Io(W,H,fe));let Nn=!1,Ps=!1,No=!1;const bt=Bt.getUniforms(),Ds=Ke.uniforms;if(te.useProgram(Bt.program)&&(Nn=!0,Ps=!0,No=!0),W.id!==v&&(v=W.id,Ps=!0),Nn||T!==A){if(bt.setValue($,"projectionMatrix",A.projectionMatrix),Q.logarithmicDepthBuffer&&bt.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),T!==A&&(T=A,Ps=!0,No=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Pt=bt.map.cameraPosition;Pt!==void 0&&Pt.setValue($,_e.setFromMatrixPosition(A.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&bt.setValue($,"isOrthographic",A.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||fe.isSkinnedMesh)&&bt.setValue($,"viewMatrix",A.matrixWorldInverse)}if(fe.isSkinnedMesh){bt.setOptional($,fe,"bindMatrix"),bt.setOptional($,fe,"bindMatrixInverse");const Pt=fe.skeleton;Pt&&(Q.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),bt.setValue($,"boneTexture",Pt.boneTexture,C),bt.setValue($,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fo=Z.morphAttributes;if((Fo.position!==void 0||Fo.normal!==void 0||Fo.color!==void 0&&Q.isWebGL2===!0)&&ne.update(fe,Z,W,Bt),(Ps||Ke.receiveShadow!==fe.receiveShadow)&&(Ke.receiveShadow=fe.receiveShadow,bt.setValue($,"receiveShadow",fe.receiveShadow)),Ps&&(bt.setValue($,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&Id(Ds,No),De&&W.fog===!0&&me.refreshFogUniforms(Ds,De),me.refreshMaterialUniforms(Ds,W,z,k,X),to.upload($,Ke.uniformsList,Ds,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(to.upload($,Ke.uniformsList,Ds,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&bt.setValue($,"center",fe.center),bt.setValue($,"modelViewMatrix",fe.modelViewMatrix),bt.setValue($,"normalMatrix",fe.normalMatrix),bt.setValue($,"modelMatrix",fe.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let Oo=0,Fd=Pt.length;Oo<Fd;Oo++)if(Q.isWebGL2){const $l=Pt[Oo];ge.update($l,Bt),ge.bind($l,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function Id(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Nd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,H,Z){E.get(A.texture).__webglTexture=H,E.get(A.depthTexture).__webglTexture=Z;const W=E.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Z===void 0,W.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const Z=E.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Z=0){w=A,_=H,y=Z;let W=!0;if(A){const Oe=E.get(A);Oe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(36160,null),W=!1):Oe.__webglFramebuffer===void 0?C.setupRenderTarget(A):Oe.__hasExternalTextures&&C.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture)}let fe=null,De=!1,Ne=!1;if(A){const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Ne=!0);const Ye=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(fe=Ye[H],De=!0):Q.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?fe=E.get(A).__webglMultisampledFramebuffer:fe=Ye,R.copy(A.viewport),D.copy(A.scissor),M=A.scissorTest}else R.copy(O).multiplyScalar(z).floor(),D.copy(q).multiplyScalar(z).floor(),M=U;if(te.bindFramebuffer(36160,fe)&&Q.drawBuffers&&W&&te.drawBuffers(A,fe),te.viewport(R),te.scissor(D),te.setScissorTest(M),De){const Oe=E.get(A.texture);$.framebufferTexture2D(36160,36064,34069+H,Oe.__webglTexture,Z)}else if(Ne){const Oe=E.get(A.texture),Ye=H||0;$.framebufferTextureLayer(36160,36064,Oe.__webglTexture,Z||0,Ye)}v=-1},this.readRenderTargetPixels=function(A,H,Z,W,fe,De,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){te.bindFramebuffer(36160,Ue);try{const Oe=A.texture,Ye=Oe.format,Ge=Oe.type;if(Ye!==Ft&&S.convert(Ye)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ge===ar&&(re.has("EXT_color_buffer_half_float")||Q.isWebGL2&&re.has("EXT_color_buffer_float"));if(Ge!==Ci&&S.convert(Ge)!==$.getParameter(35738)&&!(Ge===$n&&(Q.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-W&&Z>=0&&Z<=A.height-fe&&$.readPixels(H,Z,W,fe,S.convert(Ye),S.convert(Ge),De)}finally{const Oe=w!==null?E.get(w).__webglFramebuffer:null;te.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(A,H,Z=0){const W=Math.pow(2,-Z),fe=Math.floor(H.image.width*W),De=Math.floor(H.image.height*W);C.setTexture2D(H,0),$.copyTexSubImage2D(3553,Z,0,0,A.x,A.y,fe,De),te.unbindTexture()},this.copyTextureToTexture=function(A,H,Z,W=0){const fe=H.image.width,De=H.image.height,Ne=S.convert(Z.format),Ue=S.convert(Z.type);C.setTexture2D(Z,0),$.pixelStorei(37440,Z.flipY),$.pixelStorei(37441,Z.premultiplyAlpha),$.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?$.texSubImage2D(3553,W,A.x,A.y,fe,De,Ne,Ue,H.image.data):H.isCompressedTexture?$.compressedTexSubImage2D(3553,W,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Ne,H.mipmaps[0].data):$.texSubImage2D(3553,W,A.x,A.y,Ne,Ue,H.image),W===0&&Z.generateMipmaps&&$.generateMipmap(3553),te.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Z,W,fe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=A.max.x-A.min.x+1,Ne=A.max.y-A.min.y+1,Ue=A.max.z-A.min.z+1,Oe=S.convert(W.format),Ye=S.convert(W.type);let Ge;if(W.isData3DTexture)C.setTexture3D(W,0),Ge=32879;else if(W.isDataArrayTexture)C.setTexture2DArray(W,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,W.flipY),$.pixelStorei(37441,W.premultiplyAlpha),$.pixelStorei(3317,W.unpackAlignment);const je=$.getParameter(3314),tt=$.getParameter(32878),ri=$.getParameter(3316),Ii=$.getParameter(3315),Ni=$.getParameter(32877),rn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;$.pixelStorei(3314,rn.width),$.pixelStorei(32878,rn.height),$.pixelStorei(3316,A.min.x),$.pixelStorei(3315,A.min.y),$.pixelStorei(32877,A.min.z),Z.isDataTexture||Z.isData3DTexture?$.texSubImage3D(Ge,fe,H.x,H.y,H.z,De,Ne,Ue,Oe,Ye,rn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ge,fe,H.x,H.y,H.z,De,Ne,Ue,Oe,rn.data)):$.texSubImage3D(Ge,fe,H.x,H.y,H.z,De,Ne,Ue,Oe,Ye,rn),$.pixelStorei(3314,je),$.pixelStorei(32878,tt),$.pixelStorei(3316,ri),$.pixelStorei(3315,Ii),$.pixelStorei(32877,Ni),fe===0&&W.generateMipmaps&&$.generateMipmap(Ge),te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){_=0,y=0,w=null,te.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xb extends ld{}xb.prototype.isWebGL1Renderer=!0;class vb extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class cd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const St=new P;class fr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qu=new P,ef=new qe,tf=new qe,yb=new P,nf=new He;class Mb extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;ef.fromBufferAttribute(s.attributes.skinIndex,e),tf.fromBufferAttribute(s.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=tf.getComponent(r);if(o!==0){const a=ef.getComponent(r);nf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yb.copy(Qu).applyMatrix4(nf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ud extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bb extends Mt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=lt,u=lt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new He,Sb=new He;class kl{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sb;sf.multiplyMatrices(a,t[r]),sf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=jh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bb(t,e,e,Ft,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ud),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Hl extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rf=new P,of=new P,af=new He,Ta=new Ol,jr=new Es;class Gl extends ot{constructor(e=new Ut,t=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)rf.fromBufferAttribute(t,s-1),of.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rf.distanceTo(of);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;af.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,f=new P,h=new P,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let w=_,v=y-1;w<v;w+=p){const T=g.getX(w),R=g.getX(w+1);if(c.fromBufferAttribute(d,T),u.fromBufferAttribute(d,R),Ta.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=_,v=y-1;w<v;w+=p){if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,w+1),Ta.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const lf=new P,cf=new P;class fd extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lf.distanceTo(cf);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wb extends Gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hd extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uf=new He,rl=new Ol,qr=new Es,Xr=new P;class Tb extends ot{constructor(e=new Ut,t=new hd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;uf.copy(s).invert(),rl.copy(e.ray).applyMatrix4(uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,m=p;g<m;g++){const d=c.getX(g);Xr.fromBufferAttribute(f,d),ff(Xr,d,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,m=p;g<m;g++)Xr.fromBufferAttribute(f,g),ff(Xr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ff(i,e,t,n,s,r,o){const a=rl.distanceSqToPoint(i);if(a<t){const l=new P;rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class hf extends Mt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=lt,this.minFilter=lt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Vl extends Ut{constructor(e=1,t=.4,n=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new P,f=new P,h=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const m=g/s*r,d=p/n*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(m),f.y=(e+t*Math.cos(d))*Math.sin(m),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const m=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,_=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(m,d,y),o.push(d,_,y)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}static fromJSON(e){return new Vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ea extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ro extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Di extends Ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Wn(i,e,t){return dd(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Kr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Eb(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function df(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function pd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class _r{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ab extends _r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=e,a=2*t-n;break;case xu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=e,l=2*n-t;break;case xu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),m=g*g,d=m*g,_=-h*d+2*h*m-h*g,y=(1+h)*d+(-1.5-2*h)*m+(-.5+h)*g+1,w=(-1-p)*d+(1.5+p)*m+.5*g,v=p*d-p*m;for(let T=0;T!==a;++T)r[T]=_*o[u+T]+y*o[c+T]+w*o[l+T]+v*o[f+T];return r}}class Cb extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class Rb extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class pn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Wn(n,r,o),this.values=Wn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dd(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Wn(this.times),t=Wn(this.values),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const m=t[f+g];if(m!==t[h+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Wn(e,0,o),this.values=Wn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Wn(this.times,0),t=Wn(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=xs;class Rs extends pn{}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=lr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class md extends pn{}md.prototype.ValueTypeName="color";class hr extends pn{}hr.prototype.ValueTypeName="number";class Lb extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Li extends pn{InterpolantFactoryMethodLinear(e){return new Lb(this.times,this.values,this.getValueSize(),e)}}Li.prototype.ValueTypeName="quaternion";Li.prototype.DefaultInterpolation=xs;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends pn{}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=lr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends pn{}dr.prototype.ValueTypeName="vector";class Pb{constructor(e,t=-1,n,s=n0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ib(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Eb(l);l=df(l,1,u),c=df(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,m){if(p.length!==0){const d=[],_=[];pd(p,d,_,g),d.length!==0&&m.push(new f(h,d,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)p[h[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let y=0;y!==h[g].morphTargets.length;++y){const w=h[g];d.push(w.time),_.push(w.morphTarget===m?1:0)}s.push(new hr(".morphTargetInfluence["+m+"]",d,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(dr,p+".position",h,"pos",s),n(Li,p+".quaternion",h,"rot",s),n(dr,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Db(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return md;case"quaternion":return Li;case"bool":case"boolean":return Rs;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ib(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Db(i.type);if(i.times===void 0){const t=[],n=[];pd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ys={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nb{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Fb=new Nb;class xr{constructor(e){this.manager=e!==void 0?e:Fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const bn={};class Ob extends Error{constructor(e,t){super(e),this.response=t}}class gd extends xr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ys.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:n,onError:s});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){y();function y(){f.read().then(({done:w,value:v})=>{if(w)_.close();else{m+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let R=0,D=u.length;R<D;R++){const M=u[R];M.onProgress&&M.onProgress(T)}_.enqueue(v),y()}})}}});return new Response(d)}else throw new Ob(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ys.add(e,c);const u=bn[e];delete bn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete bn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ub extends xr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function l(){u(),ys.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ol extends xr{constructor(e){super(e)}load(e,t,n,s){const r=new Mt,o=new Ub(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Lo extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pf=new He,mf=new P,gf=new P;class Wl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),pf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zb extends Wl{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bb extends Lo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.shadow=new zb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _f=new He,zs=new P,Aa=new P;class kb extends Wl{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f)}}class _d extends Lo{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hb extends Wl{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class js extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gb extends Lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ti{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vb extends xr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ys.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Wb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xf(){return(typeof performance>"u"?Date:performance).now()}const jl="\\[\\]\\.:\\/",jb=new RegExp("["+jl+"]","g"),ql="[^"+jl+"]",qb="[^"+jl.replace("\\.","")+"]",Xb=/((?:WC+[\/:])*)/.source.replace("WC",ql),Kb=/(WCOD+)?/.source.replace("WCOD",qb),Yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),$b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Zb=new RegExp("^"+Xb+Kb+Yb+$b+"$"),Jb=["material","materials","bones"];class Qb{constructor(e,t,n){const s=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jb,"")}static parseTrackName(e){const t=Zb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Jb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Qb;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yf=new Ce;class eS{constructor(e=new Ce(1/0,1/0),t=new Ce(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yf.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class tS extends fd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ut;s.setAttribute("position",new Rt(t,3)),s.setAttribute("color",new Rt(n,3));const r=new Hl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Re,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);var cs={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-cs.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?cs.Bounce.In(i*2)*.5:cs.Bounce.Out(i*2-1)*.5+.5}}},qs;typeof self>"u"&&typeof process<"u"&&process.hrtime?qs=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?qs=self.performance.now.bind(self.performance):Date.now!==void 0?qs=Date.now:qs=function(){return new Date().getTime()};var Yn=qs,Xl=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=Yn()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),yi={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=yi.Utils.Linear;return e<0?r(i[0],i[1],n):e>1?r(i[t],i[t-1],t-n):r(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,r=yi.Utils.Bernstein,o=0;o<=n;o++)t+=s(1-e,n-o)*s(e,o)*i[o]*r(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=yi.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),r(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(r(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):r(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=yi.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,s){var r=(t-i)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*s+e}}},Po=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),xd=new Xl,vd=function(){function i(e,t){t===void 0&&(t=xd),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=cs.Linear.None,this._interpolationFunction=yi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Po.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Yn()+parseFloat(e):e:Yn(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,s){for(var r in n){var o=e[r],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[r]);if(!(l==="undefined"||l==="function")){if(c){var u=n[r];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[r]=a?[]:{};for(var f in o)t[r][f]=o[f];s[r]=a?[]:{},this._setupProperties(o,t[r],n[r],s[r])}else typeof t[r]>"u"&&(t[r]=o),a||(t[r]*=1),c?s[r]=n[r].slice().reverse():s[r]=t[r]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=Yn()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=Yn()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=Yn()),t===void 0&&(t=!0),this._isPaused)return!0;var n,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,s){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),yd="18.6.4",Md=Po.nextId,dn=xd,bd=dn.getAll.bind(dn),Sd=dn.removeAll.bind(dn),wd=dn.add.bind(dn),Td=dn.remove.bind(dn),Kl=dn.update.bind(dn),nS={Easing:cs,Group:Xl,Interpolation:yi,now:Yn,Sequence:Po,nextId:Md,Tween:vd,VERSION:yd,getAll:bd,removeAll:Sd,add:wd,remove:Td,update:Kl};const iS=Object.freeze(Object.defineProperty({__proto__:null,Easing:cs,Group:Xl,Interpolation:yi,Sequence:Po,Tween:vd,VERSION:yd,add:wd,default:nS,getAll:bd,nextId:Md,now:Yn,remove:Td,removeAll:Sd,update:Kl},Symbol.toStringTag,{value:"Module"})),Mf={type:"change"},Ca={type:"start"},bf={type:"end"};class sS extends Pi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ue),this._domElementKeyEvents=S},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mf),n.update(),r=s.NONE},this.update=function(){const S=new P,se=new Pn().setFromUnitVectors(e.up,new P(0,1,0)),ge=se.clone().invert(),be=new P,xe=new Pn,Le=2*Math.PI;return function(){const ke=n.object.position;S.copy(ke).sub(n.target),S.applyQuaternion(se),a.setFromVector3(S),n.autoRotate&&r===s.NONE&&L(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let I=n.minAzimuthAngle,ye=n.maxAzimuthAngle;return isFinite(I)&&isFinite(ye)&&(I<-Math.PI?I+=Le:I>Math.PI&&(I-=Le),ye<-Math.PI?ye+=Le:ye>Math.PI&&(ye-=Le),I<=ye?a.theta=Math.max(I,Math.min(ye,a.theta)):a.theta=a.theta>(I+ye)/2?Math.max(I,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),S.setFromSpherical(a),S.applyQuaternion(ge),ke.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||be.distanceToSquared(n.object.position)>o||8*(1-xe.dot(n.object.quaternion))>o?(n.dispatchEvent(Mf),be.copy(n.object.position),xe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",le),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new vf,l=new vf;let c=1;const u=new P;let f=!1;const h=new Ce,p=new Ce,g=new Ce,m=new Ce,d=new Ce,_=new Ce,y=new Ce,w=new Ce,v=new Ce,T=[],R={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function L(S){l.theta-=S}function k(S){l.phi-=S}const z=function(){const S=new P;return function(ge,be){S.setFromMatrixColumn(be,0),S.multiplyScalar(-ge),u.add(S)}}(),oe=function(){const S=new P;return function(ge,be){n.screenSpacePanning===!0?S.setFromMatrixColumn(be,1):(S.setFromMatrixColumn(be,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(ge),u.add(S)}}(),ce=function(){const S=new P;return function(ge,be){const xe=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;S.copy(Le).sub(n.target);let Pe=S.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ge*Pe/xe.clientHeight,n.object.matrix),oe(2*be*Pe/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ge*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),oe(be*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(S){n.object.isPerspectiveCamera?c/=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*S)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(S){n.object.isPerspectiveCamera?c*=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/S)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(S){h.set(S.clientX,S.clientY)}function K(S){y.set(S.clientX,S.clientY)}function G(S){m.set(S.clientX,S.clientY)}function B(S){p.set(S.clientX,S.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;L(2*Math.PI*g.x/se.clientHeight),k(2*Math.PI*g.y/se.clientHeight),h.copy(p),n.update()}function X(S){w.set(S.clientX,S.clientY),v.subVectors(w,y),v.y>0?O(M()):v.y<0&&q(M()),y.copy(w),n.update()}function de(S){d.set(S.clientX,S.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),ce(_.x,_.y),m.copy(d),n.update()}function ae(S){S.deltaY<0?q(M()):S.deltaY>0&&O(M()),n.update()}function _e(S){let se=!1;switch(S.code){case n.keys.UP:ce(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:ce(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:ce(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:ce(-n.keyPanSpeed,0),se=!0;break}se&&(S.preventDefault(),n.update())}function we(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const S=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);h.set(S,se)}}function Ae(){if(T.length===1)m.set(T[0].pageX,T[0].pageY);else{const S=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);m.set(S,se)}}function $(){const S=T[0].pageX-T[1].pageX,se=T[0].pageY-T[1].pageY,ge=Math.sqrt(S*S+se*se);y.set(0,ge)}function V(){n.enableZoom&&$(),n.enablePan&&Ae()}function re(){n.enableZoom&&$(),n.enableRotate&&we()}function Q(S){if(T.length==1)p.set(S.pageX,S.pageY);else{const ge=Me(S),be=.5*(S.pageX+ge.x),xe=.5*(S.pageY+ge.y);p.set(be,xe)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;L(2*Math.PI*g.x/se.clientHeight),k(2*Math.PI*g.y/se.clientHeight),h.copy(p)}function te(S){if(T.length===1)d.set(S.pageX,S.pageY);else{const se=Me(S),ge=.5*(S.pageX+se.x),be=.5*(S.pageY+se.y);d.set(ge,be)}_.subVectors(d,m).multiplyScalar(n.panSpeed),ce(_.x,_.y),m.copy(d)}function Ee(S){const se=Me(S),ge=S.pageX-se.x,be=S.pageY-se.y,xe=Math.sqrt(ge*ge+be*be);w.set(0,xe),v.set(0,Math.pow(w.y/y.y,n.zoomSpeed)),O(v.y),y.copy(w)}function E(S){n.enableZoom&&Ee(S),n.enablePan&&te(S)}function C(S){n.enableZoom&&Ee(S),n.enableRotate&&Q(S)}function N(S){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",j),n.domElement.addEventListener("pointerup",J)),Y(S),S.pointerType==="touch"?b(S):pe(S))}function j(S){n.enabled!==!1&&(S.pointerType==="touch"?x(S):ie(S))}function J(S){ne(S),T.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(bf),r=s.NONE}function le(S){ne(S)}function pe(S){let se;switch(S.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ui.DOLLY:if(n.enableZoom===!1)return;K(S),r=s.DOLLY;break;case Ui.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;G(S),r=s.PAN}else{if(n.enableRotate===!1)return;U(S),r=s.ROTATE}break;case Ui.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;U(S),r=s.ROTATE}else{if(n.enablePan===!1)return;G(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ca)}function ie(S){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;B(S);break;case s.DOLLY:if(n.enableZoom===!1)return;X(S);break;case s.PAN:if(n.enablePan===!1)return;de(S);break}}function me(S){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(S.preventDefault(),n.dispatchEvent(Ca),ae(S),n.dispatchEvent(bf))}function ue(S){n.enabled===!1||n.enablePan===!1||_e(S)}function b(S){switch(he(S),T.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;we(),r=s.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;Ae(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),r=s.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ca)}function x(S){switch(he(S),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(S),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;te(S),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(S),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(S),n.update();break;default:r=s.NONE}}function F(S){n.enabled!==!1&&S.preventDefault()}function Y(S){T.push(S)}function ne(S){delete R[S.pointerId];for(let se=0;se<T.length;se++)if(T[se].pointerId==S.pointerId){T.splice(se,1);return}}function he(S){let se=R[S.pointerId];se===void 0&&(se=new Ce,R[S.pointerId]=se),se.set(S.pageX,S.pageY)}function Me(S){const se=S.pointerId===T[0].pointerId?T[1]:T[0];return R[se.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",le),n.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}class rS extends xr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new vS(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ti.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=e;else if(Ti.decodeText(new Uint8Array(e,0,4))===Ed){try{o[Be.KHR_BINARY_GLTF]=new yS(e)}catch(f){s&&s(f);return}r=o[Be.KHR_BINARY_GLTF].content}else r=Ti.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new IS(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const f=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(f){case Be.KHR_MATERIALS_UNLIT:o[f]=new lS;break;case Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[f]=new SS;break;case Be.KHR_DRACO_MESH_COMPRESSION:o[f]=new MS(l,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:o[f]=new bS;break;case Be.KHR_MESH_QUANTIZATION:o[f]=new wS;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function oS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class aS{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new js(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _d(u),c.distance=f;break;case"spot":c=new Bb(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lS{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){const s=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$e))}return Promise.all(s)}}class cS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}}class fS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class hS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$e)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class dS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class pS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re(a[0],a[1],a[2]),Promise.all(r)}}class mS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gS{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$e)),Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xS{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new ArrayBuffer(u*f),p=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(h),u,f,p,s.mode,s.filter),h})}else return null}}const Ed="glTF",Bs=12,Sf={JSON:1313821514,BIN:5130562};class yS{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs);if(this.header={magic:Ti.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Bs,s=new DataView(e,Bs);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===Sf.JSON){const l=new Uint8Array(e,Bs+r,o);this.content=Ti.decodeText(l)}else if(a===Sf.BIN){const l=Bs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class MS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=ll[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=ll[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=pr[h.componentType];c[f]=p,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}f(h)},a,c)})})}}class bS{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class al extends Ro{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Re().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class SS{constructor(){this.name=Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return al}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Re(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,$e)),e.emissive=new Re(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Re(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,$e))}return Promise.all(r)}createMaterial(e){const t=new al(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Nl,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class wS{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class Ad extends _r{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,m=g-c,d=-2*p+3*h,_=p-h,y=1-d,w=_-h+f;for(let v=0;v!==a;v++){const T=o[m+v+a],R=o[m+v+l]*u,D=o[g+v+a],M=o[g+v]*u;r[v]=y*T+w*R+d*D+_*M}return r}}const TS=new Pn;class ES extends Ad{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return TS.fromArray(r).normalize().toArray(r),r}}const Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:lt,9729:Ct,9984:Za,9985:Gh,9986:Ja,9987:ws},Tf={33071:Ht,33648:lo,10497:ii},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AS={CUBICSPLINE:void 0,LINEAR:xs,STEP:lr},Ra={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ro({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function ks(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function LS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PS(i){const e=i.extensions&&i.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Af(e.attributes):t=i.indices+":"+Af(i.attributes)+":"+i.mode,t}function Af(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class IS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new ol(this.options.manager):this.textureLoader=new Vb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};ks(r,a,s),hi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ti.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ef[s.type],c=pr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,d;if(p&&p!==f){const _=Math.floor(h/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let w=t.cache.get(y);w||(m=new c(a,_*p,s.count*p/u),w=new cd(m,p/u),t.cache.add(y,w)),d=new fr(w,l,h%p/u,g)}else a===null?m=new c(s.count*l):m=new c(a,h,s.count*l),d=new Ot(m,l,g);if(s.sparse!==void 0){const _=Ef.SCALAR,y=pr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new y(o[1],w,s.sparse.count*_),R=new c(o[2],v,s.sparse.count*l);a!==null&&(d=new Ot(d.array.slice(),d.itemSize,d.normalized));for(let D=0,M=T.length;D<M;D++){const L=T[D];if(d.setX(L,R[D*l]),l>=2&&d.setY(L,R[D*l+1]),l>=3&&d.setZ(L,R[D*l+2]),l>=4&&d.setW(L,R[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,o.name&&(u.name=o.name);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=wf[h.magFilter]||Ct,u.minFilter=wf[h.minFilter]||ws,u.wrapS=Tf[h.wrapS]||ii,u.wrapT=Tf[h.wrapT]||ii,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(m){const d=new Mt(m);d.needsUpdate=!0,h(d)}),t.load(Ti.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||DS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hd,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hl,fn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ro}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=s[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else if(l[Be.KHR_MATERIALS_UNLIT]){const f=s[Be.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$e)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ni);const u=r.alphaMode||Ra.OPAQUE;if(u===Ra.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ra.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zn&&(a.emissive=new Re().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,$e)),Promise.all(c).then(function(){let f;return o===al?f=s[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):f=new o(a),r.name&&(f.name=r.name),hi(f,r),t.associations.set(f,{materials:e}),r.extensions&&ks(s,f,r),f})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=PS(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Cf(new Ut,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?CS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=o[p];let _;const y=c[p];if(d.mode===Sn.TRIANGLES||d.mode===Sn.TRIANGLE_STRIP||d.mode===Sn.TRIANGLE_FAN||d.mode===void 0)_=r.isSkinnedMesh===!0?new Mb(m,y):new yt(m,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===Sn.TRIANGLE_STRIP?_.geometry=Rf(_.geometry,i0):d.mode===Sn.TRIANGLE_FAN&&(_.geometry=Rf(_.geometry,Wh));else if(d.mode===Sn.LINES)_=new fd(m,y);else if(d.mode===Sn.LINE_STRIP)_=new Gl(m,y);else if(d.mode===Sn.LINE_LOOP)_=new wb(m,y);else if(d.mode===Sn.POINTS)_=new Tb(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&LS(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),hi(_,r),d.extensions&&ks(s,_,d),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new vi;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _t(nl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[h.input]:h.input,d=n.parameters!==void 0?n.parameters[h.output]:h.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(h),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],m=[];for(let _=0,y=u.length;_<y;_++){const w=u[_],v=f[_],T=h[_],R=p[_],D=g[_];if(w===void 0)continue;w.updateMatrix();let M;switch(jn[D.path]){case jn.weights:M=hr;break;case jn.rotation:M=Li;break;case jn.position:case jn.scale:default:M=dr;break}const L=w.name?w.name:w.uuid,k=R.interpolation!==void 0?AS[R.interpolation]:xs,z=[];jn[D.path]===jn.weights?w.traverse(function(ce){ce.morphTargetInfluences&&z.push(ce.name?ce.name:ce.uuid)}):z.push(L);let oe=T.array;if(T.normalized){const ce=cl(oe.constructor),O=new Float32Array(oe.length);for(let q=0,U=oe.length;q<U;q++)O[q]=oe[q]*ce;oe=O}for(let ce=0,O=z.length;ce<O;ce++){const q=new M(z[ce]+"."+jn[D.path],v.array,oe,k);R.interpolation==="CUBICSPLINE"&&(q.createInterpolant=function(K){const G=this instanceof Li?ES:Ad;return new G(this.times,this.values,this.getValueSize()/3,K)},q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(q)}}const d=n.name?n.name:"animation_"+e;return new Pb(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new ud:a.length>1?l=new vi:a.length===1?l=a[0]:l=new ot,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),hi(l,r),r.extensions&&ks(n,l,r),r.matrix!==void 0){const c=new He;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new vi;s.name&&(o.name=r.createUniqueName(s.name)),hi(o,s),s.extensions&&ks(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Cd(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof fn||h instanceof Mt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(o),o})}}function Cd(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let f=0,h=a.length;f<h;f++){const p=a[f];if(p){c.push(p);const g=new He;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[f])}l.bind(new kl(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(Cd(u,r,t,n))}}return Promise.all(o)})}function NS(i,e,t){const n=e.attributes,s=new Ts;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=cl(pr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const m=cl(pr[h.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Es;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Cf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ll[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return hi(i,e),NS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?RS(i,e.targets,t):i})}function Rf(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Wh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}class FS extends yt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new P(.70707,.70707,0),f=new Re(t.sunColor!==void 0?t.sunColor:16777215),h=new Re(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new P(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,m=t.side!==void 0?t.side:Ai,d=t.fog!==void 0?t.fog:!1,_=new Kn,y=new P,w=new P,v=new P,T=new He,R=new P(0,0,-1),D=new qe,M=new P,L=new P,k=new qe,z=new He,oe=new _t,ce=new si(s,r),O={uniforms:uo.merge([ve.fog,ve.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new He},sunColor:{value:new Re(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new Re(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},q=new sn({fragmentShader:O.fragmentShader,vertexShader:O.vertexShader,uniforms:uo.clone(O.uniforms),lights:!0,side:m,fog:d});q.uniforms.mirrorSampler.value=ce.texture,q.uniforms.textureMatrix.value=z,q.uniforms.alpha.value=a,q.uniforms.time.value=l,q.uniforms.normalSampler.value=c,q.uniforms.sunColor.value=f,q.uniforms.waterColor.value=h,q.uniforms.sunDirection.value=u,q.uniforms.distortionScale.value=g,q.uniforms.eye.value=p,n.material=q,n.onBeforeRender=function(U,K,G){if(w.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(G.matrixWorld),T.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(T),M.subVectors(w,v),M.dot(y)>0)return;M.reflect(y).negate(),M.add(w),T.extractRotation(G.matrixWorld),R.set(0,0,-1),R.applyMatrix4(T),R.add(v),L.subVectors(w,R),L.reflect(y).negate(),L.add(w),oe.position.copy(M),oe.up.set(0,1,0),oe.up.applyMatrix4(T),oe.up.reflect(y),oe.lookAt(L),oe.far=G.far,oe.updateMatrixWorld(),oe.projectionMatrix.copy(G.projectionMatrix),z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),z.multiply(oe.projectionMatrix),z.multiply(oe.matrixWorldInverse),_.setFromNormalAndCoplanarPoint(y,w),_.applyMatrix4(oe.matrixWorldInverse),D.set(_.normal.x,_.normal.y,_.normal.z,_.constant);const B=oe.projectionMatrix;k.x=(Math.sign(D.x)+B.elements[8])/B.elements[0],k.y=(Math.sign(D.y)+B.elements[9])/B.elements[5],k.z=-1,k.w=(1+B.elements[10])/B.elements[14],D.multiplyScalar(2/D.dot(k)),B.elements[2]=D.x,B.elements[6]=D.y,B.elements[10]=D.z+1-o,B.elements[14]=D.w,p.setFromMatrixPosition(G.matrixWorld);const X=U.getRenderTarget(),de=U.xr.enabled,ae=U.shadowMap.autoUpdate;n.visible=!1,U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(ce),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(K,oe),n.visible=!0,U.xr.enabled=de,U.shadowMap.autoUpdate=ae,U.setRenderTarget(X);const _e=G.viewport;_e!==void 0&&U.state.viewport(_e)}}}class Do extends yt{constructor(){const e=Do.SkyShader,t=new sn({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:uo.clone(e.uniforms),side:Wt,depthWrite:!1});super(new As(1,1,1),t),this.isSky=!0}}Do.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class mr extends yt{constructor(){super(mr.Geometry,new Zn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new P,t=new P,n=new hf(16,16,Ft),s=new hf(16,16,Ft),r=mr.Geometry,o=new Ea({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new Ea({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new yt(r,o),c=[],u=gi.Shader,f=new Ea({uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Re(16777215)},scale:{value:new Ce},screenPosition:{value:new P}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xa,transparent:!0,depthWrite:!1}),h=new yt(r,f);this.addElement=function(_){c.push(_)};const p=new Ce,g=new Ce,m=new eS,d=new qe;this.onBeforeRender=function(_,y,w){_.getCurrentViewport(d);const v=d.w/d.z,T=d.z/2,R=d.w/2;let D=16/d.w;if(p.set(D*v,D),m.min.set(d.x,d.y),m.max.set(d.x+(d.z-16),d.y+(d.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(w.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(w.projectionMatrix),g.x=d.x+e.x*T+T-8,g.y=d.y+e.y*R+R-8,m.containsPoint(g))){_.copyFramebufferToTexture(g,n);let M=o.uniforms;M.scale.value=p,M.screenPosition.value=e,_.renderBufferDirect(w,null,r,o,l,null),_.copyFramebufferToTexture(g,s),M=a.uniforms,M.scale.value=p,M.screenPosition.value=e,_.renderBufferDirect(w,null,r,a,l,null);const L=-e.x*2,k=-e.y*2;for(let z=0,oe=c.length;z<oe;z++){const ce=c[z],O=f.uniforms;O.color.value.copy(ce.color),O.map.value=ce.texture,O.screenPosition.value.x=e.x+L*ce.distance,O.screenPosition.value.y=e.y+k*ce.distance,D=ce.size/d.w;const q=d.w/d.z;O.scale.value.set(D*q,D),f.uniformsNeedUpdate=!0,_.renderBufferDirect(w,null,r,f,h,null)}}},this.dispose=function(){o.dispose(),a.dispose(),f.dispose(),n.dispose(),s.dispose();for(let _=0,y=c.length;_<y;_++)c[_].texture.dispose()}}}class gi{constructor(e,t=1,n=0,s=new Re(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}}gi.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};mr.Geometry=function(){const i=new Ut,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new cd(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new fr(t,3,0,!1)),i.setAttribute("uv",new fr(t,2,3,!1)),i}();const OS=""+new URL("lensflare0-QA4pBekj.png",import.meta.url).href,US=""+new URL("lensflare1-vf6V-Y-6.png",import.meta.url).href;var zS=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vUV = uv;
  vNormal = vec3(normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,BS=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vec4 c = vec4(abs(vNormal) + vec3(vUV, 0.0), 0.1);
  gl_FragColor = c;
}`;const kS=""+new URL("waternormals-35viC6WO.jpg",import.meta.url).href,HS=i=>(Np("data-v-cf68092a"),i=i(),Fp(),i),GS={id:"ocean"},VS=HS(()=>Al("div",{id:"ocean-webgl"},null,-1)),WS=[VS],jS=wl({__name:"index",setup(i){class e{constructor(o){Dt(this,"webglCanvas");Dt(this,"camera");Dt(this,"scene");Dt(this,"renderer");Dt(this,"loader");Dt(this,"controls");Dt(this,"clock");Dt(this,"mixers");Dt(this,"sky");Dt(this,"water");Dt(this,"island");Dt(this,"state",{loadingProcess:0,sceneReady:!1});this.webglCanvas=o,this.mixers=[],this.scene=new vb,this.initRender(),this.initCamera(),this.initLight(),this.initModel(),this.initControls(),this.animate()}initRender(){this.renderer=new ld({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.webglCanvas.clientWidth,this.webglCanvas.clientHeight),this.renderer.toneMapping=kh,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Oh,this.webglCanvas.appendChild(this.renderer.domElement),this.clock=new Wb}initCamera(){this.camera=new _t(800,this.webglCanvas.clientWidth/this.webglCanvas.clientHeight,.1,1e4),this.camera.position.set(60,280,280)}initLight(){var o=new Gb(16777215,.8);o.name="_ambientLight",this.scene.add(o);const a=new js(16777215,1);a.color.setHSL(.1,1,.95),a.position.set(-1,1.75,1),a.position.multiplyScalar(30),this.scene.add(a);const l=new _d(16777215,1.2,2e3);l.color.setHSL(.995,.5,.9),l.position.set(0,45,-2e3);const c=new ol,u=c.load(OS),f=c.load(US),h=new mr;h.addElement(new gi(u,600,0,l.color)),h.addElement(new gi(f,60,.6)),h.addElement(new gi(f,70,.7)),h.addElement(new gi(f,120,.9)),h.addElement(new gi(f,70,1)),l.add(h);var p=new js(16777215,1);p.name="_directionalLight",p.position.set(180,100,50);var g=new js(16777215,1);g.name="_directionalLight2",g.position.set(-180,100,50);var m=new js(16777215,1);m.name="_directionalLight3",m.position.set(-180,100,-50)}initModel(){this.loader=new rS;const o=new Ao(1e4,1e4);this.water=new FS(o,{textureWidth:512,textureHeight:512,waterNormals:new ol().load(kS,m=>{m.wrapS=ii,m.wrapT=ii}),sunDirection:new P,sunColor:16777215,waterColor:29439,distortionScale:4,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water),this.sky=new Do,this.sky.scale.setScalar(1e4),this.scene.add(this.sky);const a=this.sky.material.uniforms;a.turbidity.value=20,a.rayleigh.value=2,a.mieCoefficient.value=.005,a.mieDirectionalG.value=.8;const l=new P,c=new il(this.renderer),u=nl.degToRad(88),f=nl.degToRad(180);l.setFromSphericalCoords(1,u,f),this.sky.material.uniforms.sunPosition.value.copy(l),this.water.material.uniforms.sunDirection.value.copy(l).normalize(),this.scene.environment=c.fromScene(this.sky).texture,this.loader.load("./models/island.glb",m=>{const d=m.scene;d.traverse(_=>{_.isMesh&&(_.material.metalness=.4,_.material.roughness=.6)}),d.position.set(0,-5,0),d.scale.set(80,80,80),this.island=d,this.scene.add(d)});const h=new sn({side:ni,transparent:!0,uniforms:{},vertexShader:zS,fragmentShader:BS}),p=new Vl(200,10,50,100),g=new yt(p,h);g.opacity=.1,g.position.set(0,-50,-400)}initControls(){this.controls=new sS(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.maxPolarAngle=1.5,this.controls.minDistance=50,this.controls.maxDistance=1200,this.controls.enabled=!0}animate(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)),this.controls&&this.controls.update(),iS&&Kl();const o=this.clock.getDelta();this.mixers&&this.mixers.forEach(a=>{a.update(o)})}initHelper(){var o=new tS(350);this.scene.add(o)}}const t=Fa(null),n=Fa({width:0,height:0});function s(){const r=document.getElementById("ocean-webgl");n.value={width:r.offsetWidth,height:r.offsetHeight},t.value=new e(r),console.log(t.value)}return ah(()=>{s()}),lh(()=>{console.log("组件销毁了！"),t.value&&(cancelAnimationFrame(t.value.animate),t.value.scene.clear())}),(r,o)=>(xh(),bm("div",GS,WS))}}),Rd=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},qS=Rd(jS,[["__scopeId","data-v-cf68092a"]]),XS=[{path:"/test",name:"Home",component:qS}],KS=f_({history:Ag(),routes:XS}),YS={};function $S(i,e){const t=Hp("router-view");return xh(),Sm(t)}const ZS=Rd(YS,[["render",$S]]),Ld=ag(ZS);Ld.use(KS);Ld.mount("#app");
