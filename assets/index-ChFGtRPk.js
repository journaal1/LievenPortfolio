(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),J=new WeakMap;let dt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const _t=r=>new dt(typeof r=="string"?r:r+"",void 0,Y),L=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new dt(e,r,Y)},vt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return _t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:bt,getOwnPropertyDescriptor:At,getOwnPropertyNames:wt,getOwnPropertySymbols:Et,getPrototypeOf:xt}=Object,$=globalThis,Q=$.trustedTypes,St=Q?Q.emptyScript:"",D=$.reactiveElementPolyfillSupport,S=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},pt=(r,t)=>!yt(r,t),X={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&bt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...wt(e),...Et(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:W;this._$Em=i,this[i]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??pt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,D==null||D({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,M=P.trustedTypes,tt=M?M.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+g,Pt=`<${ft}>`,b=document,C=()=>b.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",mt=Array.isArray,Ct=r=>mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",k=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,_=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,rt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ot=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),y=Ot(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,v=b.createTreeWalker(b,129);function $t(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Ut=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=x;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===x?p[1]==="!--"?o=et:p[1]!==void 0?o=it:p[2]!==void 0?(gt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=i??x,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?rt:st):o===rt||o===st?o=_:o===et||o===it?o=x:(o=_,i=void 0);const m=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===x?a+Pt:h>=0?(s.push(c),a.slice(0,h)+ut+a.slice(h)+g+m):a+g+(h===-2?l:m)}return[$t(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[c,p]=Ut(t,e);if(this.el=U.createElement(c,s),v.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ut)){const u=p[o++],m=i.getAttribute(h).split(g),j=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:j[2],strings:m,ctor:j[1]==="."?Tt:j[1]==="?"?Rt:j[1]==="@"?jt:z}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(gt.test(i.tagName)){const h=i.textContent.split(g),u=h.length-1;if(u>0){i.textContent=M?M.emptyScript:"";for(let m=0;m<u;m++)i.append(h[m],C()),v.nextNode(),a.push({type:2,index:++n});i.append(h[u],C())}}}else if(i.nodeType===8)if(i.data===ft)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){var o,l;if(t===w)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??b).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new T(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Ht(n,this,t)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=v.nextNode(),o++)}return v.currentNode=b,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement($t(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new Nt(i,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new U(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new T(this.S(C()),this.S(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=E(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=E(this,l[s+a],e,a),c===w&&(c=this._$AH[a]),o||(o=!O(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Rt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class jt extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===w)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const I=P.litHtmlPolyfillSupport;I==null||I(U,T),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.3");const Mt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new T(t.insertBefore(C(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}};var ct;f._$litElement$=!0,f.finalized=!0,(ct=globalThis.litElementHydrateSupport)==null||ct.call(globalThis,{LitElement:f});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=new WeakMap,at=r=>{if((e=>e.pattern!==void 0)(r))return r.pattern;let t=ot.get(r);return t===void 0&&ot.set(r,t=new URLPattern({pathname:r.path})),t};let Lt=class{constructor(t,e,s){this.routes=[],this.o=[],this.t={},this.i=i=>{if(i.routes===this)return;const n=i.routes;this.o.push(n),n.h=this,i.stopImmediatePropagation(),i.onDisconnect=()=>{var l;(l=this.o)==null||l.splice(this.o.indexOf(n)>>>0,1)};const o=ht(this.t);o!==void 0&&n.goto(o)},(this.l=t).addController(this),this.routes=[...e],this.fallback=s==null?void 0:s.fallback}link(t){var e;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t??(t=this.u),(((e=this.h)==null?void 0:e.link())??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const s=this.p(t);if(s===void 0)throw Error("No route found for "+t);const i=at(s).exec({pathname:t}),n=(i==null?void 0:i.pathname.groups)??{};if(e=ht(n),typeof s.enter=="function"&&await s.enter(n)===!1)return;this.v=s,this.t=n,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const s of this.o)s.goto(e);this.l.requestUpdate()}outlet(){var t,e;return(e=(t=this.v)==null?void 0:t.render)==null?void 0:e.call(t,this.t)}get params(){return this.t}p(t){const e=this.routes.find(s=>at(s).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(N.eventName,this.i);const t=new N(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)==null||t.call(this),this.h=void 0}};const ht=r=>{let t;for(const e of Object.keys(r))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&r[t]};class N extends Event{constructor(t){super(N.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}N.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=location.origin||location.protocol+"//"+location.host;class Dt extends Lt{constructor(){super(...arguments),this.m=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const s=t.composedPath().find(o=>o.tagName==="A");if(s===void 0||s.target!==""||s.hasAttribute("download")||s.getAttribute("rel")==="external")return;const i=s.href;if(i===""||i.startsWith("mailto:"))return;const n=window.location;s.origin===zt&&(t.preventDefault(),i!==n.href&&(window.history.pushState({},"",i),this.goto(s.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}var kt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,Bt=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&kt(t,e,i),i};let V=class extends f{render(){return y`
            <header>
                <nav>
                    <div class="links left">
                        <a href="/">Home</a>
                    </div>
                    <div class="links right">
                        <a @click="${this.handleLinkClick}" href="#">Music</a>
                        <a href="/monthly">Monthly</a>
                    </div>
                </nav>
            </header>
        `}handleLinkClick(r){r.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new Event("location-changed"))}};V.styles=L`
        header {
            position: fixed;
            left: 1rem;
            right: 1rem;
            top: 0.5rem;
            z-index: 40;
            margin-left: 15rem;
            margin-right: 15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 3.5rem;
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            transition: background-color 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .links {
            display: flex;
            align-items: center;
        }

        .links a:hover {
            color: red;
            gap: 20px;
        }

        .links a {
            text-decoration: none;
            color: black;
            font-weight: bold;
            margin: 0.5em;
        }

        .left {
            margin-left: 5rem;
        }

        .right {
            margin-right: 5rem;
        }
    `;V=Bt([R("nav-bar")],V);var Wt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,qt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Vt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Wt(t,e,i),i};let q=class extends f{render(){return y`
            <div class="text-container">
                <h3>Portfolio by Lieven Schokker</h3>
                <h1>WELCOME TO</h1>
                <h1>MY PORTFOLIO</h1>
            </div>
        `}};q.styles=L`
        h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1a202c;
            margin: 0;
            font-family: "Comfortaa", sans-serif;
            font-style: italic;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: rgb(73, 76, 79);
            margin: 0;
        }

        h3 {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(170, 46, 38);
            margin: 0;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #4a5568;
            margin: 0;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 3rem;
            width: 55rem;
        }
    `;q=qt([R("welcome-page")],q);var Kt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Ft=(r,t,e,s)=>{for(var i=s>1?void 0:s?Gt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Kt(t,e,i),i};let K=class extends f{render(){return y`
            <section>
                <div class="textBox">
                    <h2>Unity Engine</h2>
                    <h1>Virtual Synthesizer</h1>
                    <p>In this project, I was experimenting with <strong>Unity</strong> in VR. <strong>The
                        goal</strong> of the project
                        was to make sound
                        design fun. By hitting the instrument in different places and with different velocities, you can
                        create a variety of unique sounds.</p>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="img/thumbnails/vrGame.png" alt="vrGame">
                    </div>
                    <span>  
                        <div class="small-content">
                            <p>This project is available on: </p>
                            <a href="https://gitlab.fdmci.hva.nl/schokkl1/unityvr" class="link">GitHub</a>
                        </div>
                    </span>
                </div>
            </section>
        `}};K.styles=L`
        h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1a202c;
            margin: 0;
            font-family: "Comfortaa", sans-serif;
            font-style: italic;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: rgb(73, 76, 79);
            margin: 0;
        }

        a {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(170, 46, 38);
            margin: 0;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #4a5568;
            margin: 0;
        }

        section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 10rem 3rem 20rem 3rem;
            width: 55rem;
        }

        .card {
            display: flex;
            position: relative;
            background-color: rgb(243, 244, 246);
            box-sizing: border-box;
            margin-left: 2em;
            border: 2px solid white;
            border-radius: 0.5rem;
            width: 50%;
            flex-direction: column; /* Ensure card content is column */
        }

        .content {
            padding: 1.25rem;
            position: relative;
            z-index: 10;
            display: block;
        }

        span {
            position: absolute;
            border-radius: 0.5rem;
            min-width: 100%;
            min-height: 100%;
            top: 4rem;
            right: 2rem;
            border: 2px solid white;
            z-index: 0;
        }

        .small-content {
            display: flex;
            position: absolute;
            left: 1rem;
            bottom: 1.25rem;
            justify-content: space-between;
            align-items: center;
        }

        img {
            object-fit: contain;
            border-radius: 0.5rem;
            width: 100%;
            height: 100%;
        }

        .link {
            text-decoration: underline;
        }

        .textBox {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 3rem;
            width: 50%;
        }
    `;K=Ft([R("project-template")],K);var Yt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Zt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Jt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Yt(t,e,i),i};let G=class extends f{render(){return y`
            <div class="text-container">
                <h3>a little showccase</h3>
                <h1>WELCOME TO</h1>
                <h1>MY MONTHLY PROGRESS</h1>
            </div>
        `}};G.styles=L`
        h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1a202c;
            margin: 0;
            font-family: "Comfortaa", sans-serif;
            font-style: italic;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: rgb(73, 76, 79);
            margin: 0;
        }

        h3 {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(170, 46, 38);
            margin: 0;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #4a5568;
            margin: 0;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 3rem;
            width: 55rem;
        }
    `;G=Zt([R("monthly-page")],G);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,te=(r,t,e,s)=>{for(var i=s>1?void 0:s?Xt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Qt(t,e,i),i};let lt=class extends f{constructor(){super(),this._router=new Dt(this,[{path:"/",render:()=>y`
                    <welcome-page></welcome-page>
                    <project-template></project-template>`},{path:"/monthly",render:()=>y`
                    <monthly-page></monthly-page>`}])}render(){return y`
            <nav-bar></nav-bar>
            <main>${this._router.outlet()}</main>
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `}};lt=te([R("portfolio-root")],lt);
