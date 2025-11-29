(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Q=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),re=new WeakMap;let $e=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&re.set(t,e))}return e}toString(){return this.cssText}};const Ae=r=>new $e(typeof r=="string"?r:r+"",void 0,ee),H=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new $e(t,r,ee)},xe=(r,e)=>{if(Q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},oe=Q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ae(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:je,defineProperty:Se,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:ke,getOwnPropertySymbols:Pe,getPrototypeOf:Ce}=Object,_=globalThis,ne=_.trustedTypes,Oe=ne?ne.emptyScript:"",J=_.reactiveElementPolyfillSupport,M=(r,e)=>r,W={toAttribute(r,e){switch(e){case Boolean:r=r?Oe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},te=(r,e)=>!je(r,e),ae={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Se(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=Ee(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=Ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,s=[...ke(t),...Pe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(oe(i))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:W).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:W;this._$Em=i;const h=a.fromAttribute(t,l.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const o=this.constructor,n=this[e];if(s??(s=o.getPropertyOptions(e)),!((s.hasChanged??te)(n,t)||s.useDefault&&s.reflect&&n===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[M("elementProperties")]=new Map,S[M("finalized")]=new Map,J==null||J({ReactiveElement:S}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,F=T.trustedTypes,le=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,ve="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+y,ze=`<${ye}>`,x=document,L=()=>x.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",ie=Array.isArray,Me=r=>ie(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",G=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,he=/>/g,b=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,pe=/"/g,_e=/^(?:script|style|textarea|title)$/i,be=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),C=be(1),ue=be(2),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,w=x.createTreeWalker(x,129);function we(r,e){if(!ie(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}const Te=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=z;for(let l=0;l<t;l++){const a=r[l];let h,d,c=-1,$=0;for(;$<a.length&&(n.lastIndex=$,d=n.exec(a),d!==null);)$=n.lastIndex,n===z?d[1]==="!--"?n=ce:d[1]!==void 0?n=he:d[2]!==void 0?(_e.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=i??z,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?b:d[3]==='"'?pe:de):n===pe||n===de?n=b:n===ce||n===he?n=z:(n=b,i=void 0);const v=n===b&&r[l+1].startsWith("/>")?" ":"";o+=n===z?a+ze:c>=0?(s.push(h),a.slice(0,c)+ve+a.slice(c)+y+v):a+y+(c===-2?l:v)}return[we(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class R{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[h,d]=Te(e,t);if(this.el=R.createElement(h,s),w.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=w.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ve)){const $=d[n++],v=i.getAttribute(c).split(y),D=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:D[2],strings:v,ctor:D[1]==="."?Ue:D[1]==="?"?Re:D[1]==="@"?He:q}),i.removeAttribute(c)}else c.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(_e.test(i.tagName)){const c=i.textContent.split(y),$=c.length-1;if($>0){i.textContent=F?F.emptyScript:"";for(let v=0;v<$;v++)i.append(c[v],L()),w.nextNode(),a.push({type:2,index:++o});i.append(c[$],L())}}}else if(i.nodeType===8)if(i.data===ye)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(y,c+1))!==-1;)a.push({type:7,index:o}),c+=y.length-1}o++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function k(r,e,t=r,s){var n,l;if(e===E)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=U(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=k(r,i._$AS(r,e.values),i,s)),e}class Le{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??x).importNode(t,!0);w.currentNode=i;let o=w.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ne(o,this,e)),this._$AV.push(h),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=w.nextNode(),n++)}return w.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),U(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=R.createElement(we(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new Le(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new R(e)),t}k(e){ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new N(this.O(L()),this.O(L()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=k(this,e,t,0),n=!U(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const l=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=k(this,l[s+a],t,a),h===E&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===p?e=p:e!==p&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Re extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class He extends q{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??p)===E)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const Y=T.litHtmlPolyfillSupport;Y==null||Y(R,N),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.1");const Be=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new N(e.insertBefore(L(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class f extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Be(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var ge;f._$litElement$=!0,f.finalized=!0,(ge=A.litElementHydrateSupport)==null||ge.call(A,{LitElement:f});const K=A.litElementPolyfillSupport;K==null||K({LitElement:f});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:te},Ie=(r=De,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function u(r){return(e,t)=>typeof t=="object"?Ie(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(r){return u({...r,state:!0,attribute:!1})}var We=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,B=(r,e,t,s)=>{for(var i=s>1?void 0:s?Fe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&We(e,t,i),i};let j=class extends f{constructor(){super(...arguments),this.connections=[],this.jackPositions=new Map,this.pageHeight=0,this.pageWidth=0,this.requestRender=()=>{this.requestUpdate()},this.updatePageSize=()=>{this.pageHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),this.pageWidth=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)},this.handleJackPosition=r=>{const{id:e,x:t,y:s,color:i}=r.detail;this.jackPositions=new Map(this.jackPositions).set(e,{id:e,x:t,y:s,color:i})},this.handleJackRemoved=r=>{const e=new Map(this.jackPositions);e.delete(r.detail.id),this.jackPositions=e}}connectedCallback(){super.connectedCallback(),this.addEventListener("jack-position",this.handleJackPosition),this.addEventListener("jack-removed",this.handleJackRemoved),this.updatePageSize(),window.addEventListener("resize",this.updatePageSize),window.addEventListener("scroll",this.requestRender)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("jack-position",this.handleJackPosition),this.removeEventListener("jack-removed",this.handleJackRemoved),window.removeEventListener("resize",this.updatePageSize),window.removeEventListener("scroll",this.requestRender)}calculateCablePath(r,e){const t=window.scrollY,s=r.x,i=r.y-t,o=e.x,n=e.y-t,l=o-s,a=n-i,h=Math.sqrt(l*l+a*a),d=Math.min(h*.25,120),c=h*.1;return`M ${s} ${i} C ${s+c} ${i+d*.5}, ${o-c} ${n+d*.5}, ${o} ${n}`}renderCable(r){const e=this.jackPositions.get(r.from),t=this.jackPositions.get(r.to);if(!e||!t)return ue``;const s=this.calculateCablePath(e,t);return ue`
            <g class="cable">
                <path class="cable-shadow" d="${s}" transform="translate(2, 4)" />
                <path class="cable-body" d="${s}" stroke="${r.color}" />
            </g>
        `}render(){return C`
            <div class="cable-overlay">
                <svg 
                    class="cable-svg" 
                    width="${this.pageWidth}" 
                    height="${this.pageHeight}"
                    viewBox="0 0 ${this.pageWidth} ${window.innerHeight}"
                >
                    ${this.connections.map(r=>this.renderCable(r))}
                </svg>
            </div>
            <slot></slot>
        `}};j.styles=H`
        :host {
            display: block;
            position: relative;
        }

        .cable-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
        }

        .cable-svg {
            position: absolute;
            top: 0;
            left: 0;
            overflow: visible;
        }

        .cable {
            fill: none;
            stroke-linecap: round;
        }

        .cable-shadow {
            fill: none;
            stroke: rgba(0, 0, 0, 0.2);
            stroke-width: 10;
            stroke-linecap: round;
        }

        .cable-body {
            stroke-width: 6;
        }

        .cable-highlight {
            stroke-width: 2;
            opacity: 0.4;
        }
    `;B([u({type:Array})],j.prototype,"connections",2);B([se()],j.prototype,"jackPositions",2);B([se()],j.prototype,"pageHeight",2);B([se()],j.prototype,"pageWidth",2);j=B([O("cable-manager")],j);var qe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,V=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ve(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&qe(e,t,i),i};let P=class extends f{constructor(){super(...arguments),this.jackId="",this.color="#666",this.connected=!1,this.reportPosition=()=>{const r=this.getBoundingClientRect(),e=r.left+r.width/2+window.scrollX,t=r.top+r.height/2+window.scrollY;this.dispatchEvent(new CustomEvent("jack-position",{bubbles:!0,composed:!0,detail:{id:this.jackId,x:e,y:t,color:this.color}}))}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.reportPosition),window.addEventListener("scroll",this.reportPosition),this.resizeObserver=new ResizeObserver(()=>this.reportPosition()),this.resizeObserver.observe(document.body),requestAnimationFrame(()=>this.reportPosition())}disconnectedCallback(){var r;super.disconnectedCallback(),window.removeEventListener("resize",this.reportPosition),window.removeEventListener("scroll",this.reportPosition),(r=this.resizeObserver)==null||r.disconnect(),this.dispatchEvent(new CustomEvent("jack-removed",{bubbles:!0,composed:!0,detail:{id:this.jackId}}))}render(){return C`
            <svg class="jack" viewBox="-14 -14 28 28">
                <circle class="jack-outer" r="13" />
                <circle class="jack-ring" r="10" />
                <circle class="jack-inner" r="7" />
                <circle class="jack-plug" r="5" fill="${this.color}" />
            </svg>
        `}};P.styles=H`
        :host {
            display: inline-block;
            position: relative;
        }

        .jack {
            width: 28px;
            height: 28px;
            cursor: pointer;
        }

        .jack-outer {
            fill: #1a1a1a;
            stroke: #333;
            stroke-width: 2;
        }

        .jack-inner {
            fill: #0a0a0a;
        }

        .jack-ring {
            fill: none;
            stroke: #444;
            stroke-width: 1;
        }

        .jack-plug {
            transition: transform 0.2s ease;
        }

        :host([connected]) .jack-plug {
            transform: scale(1);
        }

        :host(:not([connected])) .jack-plug {
            transform: scale(0);
        }
    `;V([u({type:String,attribute:"jack-id"})],P.prototype,"jackId",2);V([u({type:String})],P.prototype,"color",2);V([u({type:Boolean,reflect:!0})],P.prototype,"connected",2);P=V([O("jack-point")],P);var Je=Object.getOwnPropertyDescriptor,Ge=(r,e,t,s)=>{for(var i=s>1?void 0:s?Je(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(i)||i);return i};let X=class extends f{render(){return C`
      <header>
        <nav>
          <div class="links">
            <a href="https://soundcloud.com/lieven-schokker">Music</a>
          </div>
        </nav>
      </header>
    `}};X.styles=H`
    header {
      position: fixed;
      left: 1rem;
      right: 1rem;
      top: 1rem;
      z-index: 40;
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 3rem;
      width: 70rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      transition: background-color 0.3s ease;
      padding: 0.5rem 1rem;
    }

    nav {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }

    .links {
      display: flex;
      gap: 1rem;
    }

    .links a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .links a:hover {
      color: red;
    }

    a {
      margin: 0.5em;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      header {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 1rem;
      }

      nav {
        width: 100%;
        justify-content: flex-end;
      }

      .links {
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      .links a {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      header {
        padding: 0.5rem 1rem;
      }

      .links a {
        font-size: 0.9rem;
      }
    }
  `;X=Ge([O("nav-bar")],X);var Ye=Object.getOwnPropertyDescriptor,Ke=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ye(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(i)||i);return i};let Z=class extends f{render(){return C`
      <div class="text-container">
        <h3>Portfolio by Lieven Schokker</h3>
        <h1>WELCOME TO</h1>
        <h1>MY PORTFOLIO</h1>
      </div>
    `}};Z.styles=H`
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
    }

    /* Responsive adjustments */
    @media screen and (max-width: 60rem) {
      .text-container {
        margin: 2rem;
        width: 50%;
      }

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1rem;
      }

      h3 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  `;Z=Ke([O("welcome-page")],Z);var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,g=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ze(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Xe(e,t,i),i};let m=class extends f{constructor(){super(...arguments),this.subtitle="",this.title="",this.description="",this.imageSrc="",this.imageAlt="",this.cardTitle="",this.cardSubtitle="",this.detailsLink="#",this.reverseLayout=!1}render(){return C`
      <section class="${this.reverseLayout?"reverse":""}">
        <div class="textBox">
          <h2>${this.subtitle}</h2>
          <h1>${this.title}</h1>
          <p>${this.description}</p>
        </div>
        <div class="card">
          <div class="content">
            <img src="${this.imageSrc}" alt="${this.imageAlt}" />
          </div>
          <span>
            <div class="small-content">
              <h2>
                ${this.cardTitle}
                <p>${this.cardSubtitle}</p>
              </h2>
              <a href="${this.detailsLink}" class="link">
                <h3 class="details">More Details -></h3>
              </a>
            </div>
          </span>
        </div>
      </section>
    `}};m.styles=H`
      h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #3d3557;
          margin: 0;
          font-family: "Comfortaa", sans-serif;
          font-style: italic;
      }

      h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #6b5b95;
          margin: 0;
      }

      h3 {
          font-size: 1rem;
          font-weight: 400;
          color: #c94940;
          text-decoration: underline;
          margin: 0;
      }

      p {
          font-size: 1rem;
          font-weight: 400;
          color: #5a5a6b;
          margin: 0;
      }

      section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin: 10rem 3rem 20rem 3rem;
          max-width: 70rem;
          width: 100%;
      }

      section.reverse {
          flex-direction: row-reverse;
      }

      .card {
          display: flex;
          position: relative;
          background-color: #f8f9fa;
          box-sizing: border-box;
          margin-left: 2em;
          border: 2px solid #f8f9fa;
          border-radius: 0.5rem;
          width: 50%;
          min-width: 300px;
          z-index: 1;
      }

      section.reverse .card {
          margin-left: 0;
          margin-right: 2em;
      }

      .content {
          padding: 1.25rem;
          position: relative;
          z-index: 10;
          display: block;
          background-color: #f8f9fa;
          border-radius: 0.5rem;
      }

      span {
          position: absolute;
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
          top: 6rem;
          right: 3rem;
          border: 2px solid white;
          z-index: 0;
      }

      section.reverse span {
          right: auto;
          left: 3rem;
      }

      .small-content {
          display: flex;
          position: absolute;
          left: 3rem;
          right: 2rem;
          bottom: 2rem;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
      }

      img {
          object-fit: contain;
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
      }

      .link {
          text-decoration: none;
          color: inherit;
      }

      .textBox {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0.25rem;
          margin: 3rem;
          width: 50%;
          min-width: 250px;
      }

      .details {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
      }

      @media screen and (max-width: 80rem) {
          section {
              margin: 8rem 2rem 15rem 2rem;
          }

          h1 {
              font-size: 1.75rem;
          }
      }

      @media screen and (max-width: 60rem) {
          section {
              margin: 5rem 1.5rem 10rem 1.5rem;
              gap: 1.5rem;
          }

          h1 {
              font-size: 1.5rem;
          }

          h2 {
              font-size: 1rem;
          }

          span {
              right: 1.5rem;
              top: 5rem;
          }

          section.reverse span {
              right: auto;
              left: 1.5rem;
          }

          .small-content {
              font-size: 0.9rem;
          }
      }

      @media screen and (max-width: 45rem) {
          section,
          section.reverse {
              flex-direction: column;
              align-items: center;
          }

          .card {
              margin-left: 0 !important;
              margin-right: 0 !important;
          }

          span {
              right: 1.5rem !important;
              left: auto !important;
          }
      }
  `;g([u({type:String})],m.prototype,"subtitle",2);g([u({type:String})],m.prototype,"title",2);g([u({type:String})],m.prototype,"description",2);g([u({type:String})],m.prototype,"imageSrc",2);g([u({type:String})],m.prototype,"imageAlt",2);g([u({type:String})],m.prototype,"cardTitle",2);g([u({type:String})],m.prototype,"cardSubtitle",2);g([u({type:String})],m.prototype,"detailsLink",2);g([u({type:Boolean})],m.prototype,"reverseLayout",2);m=g([O("project-template")],m);var Qe=Object.getOwnPropertyDescriptor,et=(r,e,t,s)=>{for(var i=s>1?void 0:s?Qe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(i)||i);return i};let fe=class extends f{constructor(){super(...arguments),this.connections=[{from:"header-1",to:"project-engine",color:"#EC4899"},{from:"header-2",to:"project-threejs",color:"#FBBF24"},{from:"project-engine",to:"project-giff",color:"#8B5CF6"},{from:"project-threejs",to:"project-synth",color:"#3B82F6"},{from:"project-giff",to:"footer-1",color:"#10B981"}]}render(){return C`
            <cable-manager .connections="${this.connections}">
                
                <nav-bar>
                    <div class="header-jacks">
                        <jack-point jack-id="header-1" color="#EC4899"></jack-point>
                        <jack-point jack-id="header-2" color="#FBBF24"></jack-point>
                    </div>
                </nav-bar>

                <welcome-page></welcome-page>

                <!-- Add jacks to each project -->
                <project-template
                    subtitle="Multiplayer game engine in c++"
                    title="Multiplayer game engine in c++"
                    description="A modern e-commerce platform built with React and TypeScript"
                    imageSrc="/img/thumbnails/ecommerce.png"
                    imageAlt="E-Commerce Platform"
                    cardTitle="Based on SDL"
                    cardSubtitle="Cross platform available"
                    detailsLink="/project-details/ecommerce"
                    reverseLayout
                >
                    <jack-point 
                        slot="jack" 
                        jack-id="project-engine" 
                        color="#EC4899"
                        class="jack-left"
                    ></jack-point>
                </project-template>

                <project-template
                    subtitle="A ThreeJS experiment"
                    title="Draw in 3D"
                    description="A Quick and simple demo"
                    imageSrc="/img/thumbnails/ai.png"
                    imageAlt="Simple drawing"
                    cardTitle="Try me!"
                    cardSubtitle="Giffsplash source code"
                    detailsLink="https://github.com/journaal1/GIFSplash"
                >
                    <jack-point 
                        slot="jack" 
                        jack-id="project-threejs" 
                        color="#FBBF24"
                        class="jack-right"
                    ></jack-point>
                </project-template>
                
                <project-template
                    subtitle="GiffSplash"
                    title="A couch play party game"
                    description="Giffsplash a web based game made with Springboot and Angular."
                    imageSrc="/img/thumbnails/ai.png"
                    imageAlt="Drawing interaction"
                    cardTitle="Spring Boot + Angular"
                    cardSubtitle="Giffsplash source code"
                    detailsLink="https://github.com/journaal1/GIFSplash"
                >
                    <jack-point 
                        slot="jack" 
                        jack-id="project-giff" 
                        color="#8B5CF6"
                        class="jack-left"
                    ></jack-point>
                </project-template>

                <project-template
                    subtitle="Unity Engine"
                    title="Virtual Synthesizer"
                    description="This project features a synthesizer in virtual reality."
                    imageSrc="/img/thumbnails/vrGame.png"
                    imageAlt="VR Game"
                    cardTitle="Unity"
                    cardSubtitle="Virtual Synthesizer"
                    detailsLink="/project-details/vr-synth"
                >
                    <jack-point 
                        slot="jack" 
                        jack-id="project-synth" 
                        color="#3B82F6"
                        class="jack-right"
                    ></jack-point>
                </project-template>
            </cable-manager>
        `}};fe=et([O("portfolio-root")],fe);
