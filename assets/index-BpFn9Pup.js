(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,J=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),X=new WeakMap;let de=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=X.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(t,e))}return e}toString(){return this.cssText}};const ge=r=>new de(typeof r=="string"?r:r+"",void 0,K),Z=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new de(t,r,K)},$e=(r,e)=>{if(J)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ee=J?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ge(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:_e,getOwnPropertyDescriptor:ve,getOwnPropertyNames:Ae,getOwnPropertySymbols:be,getPrototypeOf:we}=Object,_=globalThis,te=_.trustedTypes,Se=te?te.emptyScript:"",I=_.reactiveElementPolyfillSupport,T=(r,e)=>r,N={toAttribute(r,e){switch(e){case Boolean:r=r?Se:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Y=(r,e)=>!ye(r,e),ie={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&_e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=ve(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=we(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,s=[...Ae(t),...be(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ee(i))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:N).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:N;this._$Em=i;const c=a.fromAttribute(t,l.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const n=this.constructor,o=this[e];if(s??(s=n.getPropertyOptions(e)),!((s.hasChanged??Y)(o,t)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[T("elementProperties")]=new Map,x[T("finalized")]=new Map,I==null||I({ReactiveElement:x}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,R=U.trustedTypes,se=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+y,xe=`<${ue}>`,S=document,M=()=>S.createComment(""),j=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,Ee=r=>Q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ne=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,ae=/"/g,me=/^(?:script|style|textarea|title)$/i,Pe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),E=Pe(1),P=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),le=new WeakMap,b=S.createTreeWalker(S,129);function fe(r,e){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const Ce=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=O;for(let l=0;l<t;l++){const a=r[l];let c,p,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===O?p[1]==="!--"?o=re:p[1]!==void 0?o=ne:p[2]!==void 0?(me.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=A):p[3]!==void 0&&(o=A):o===A?p[0]===">"?(o=i??O,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?A:p[3]==='"'?ae:oe):o===ae||o===oe?o=A:o===re||o===ne?o=O:(o=A,i=void 0);const $=o===A&&r[l+1].startsWith("/>")?" ":"";n+=o===O?a+xe:h>=0?(s.push(c),a.slice(0,h)+pe+a.slice(h)+y+$):a+y+(h===-2?l:$)}return[fe(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class z{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,p]=Ce(e,t);if(this.el=z.createElement(c,s),b.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=b.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(pe)){const f=p[o++],$=i.getAttribute(h).split(y),k=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:k[2],strings:$,ctor:k[1]==="."?Te:k[1]==="?"?Ue:k[1]==="@"?Me:D}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(me.test(i.tagName)){const h=i.textContent.split(y),f=h.length-1;if(f>0){i.textContent=R?R.emptyScript:"";for(let $=0;$<f;$++)i.append(h[$],M()),b.nextNode(),a.push({type:2,index:++n});i.append(h[f],M())}}}else if(i.nodeType===8)if(i.data===ue)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var o,l;if(e===P)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=j(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Oe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??S).importNode(t,!0);b.currentNode=i;let n=b.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new L(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new je(n,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=b.nextNode(),o++)}return b.currentNode=S,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class L{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),j(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=z.createElement(fe(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Oe(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=le.get(e.strings);return t===void 0&&le.set(e.strings,t=new z(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new L(this.O(M()),this.O(M()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=C(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==P,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=C(this,l[s+a],t,a),c===P&&(c=this._$AH[a]),o||(o=!j(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ue extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Me extends D{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??d)===P)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class je{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const V=U.litHtmlPolyfillSupport;V==null||V(z,L),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");const ze=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new L(e.insertBefore(M(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;class v extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return P}}var ce;v._$litElement$=!0,v.finalized=!0,(ce=w.litElementHydrateSupport)==null||ce.call(w,{LitElement:v});const q=w.litElementPolyfillSupport;q==null||q({LitElement:v});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Y},ke=(r=Le,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function g(r){return(e,t)=>typeof t=="object"?ke(r,e,t):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}var He=Object.getOwnPropertyDescriptor,Ne=(r,e,t,s)=>{for(var i=s>1?void 0:s?He(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let G=class extends v{render(){return E`
      <header>
        <nav>
          <div class="links">
            <a href="https://soundcloud.com/lieven-schokker">Music</a>
          </div>
        </nav>
      </header>
    `}};G.styles=Z`
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
  `;G=Ne([B("nav-bar")],G);var Re=Object.getOwnPropertyDescriptor,De=(r,e,t,s)=>{for(var i=s>1?void 0:s?Re(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let F=class extends v{render(){return E`
      <div class="text-container">
        <h3>Portfolio by Lieven Schokker</h3>
        <h1>WELCOME TO</h1>
        <h1>MY PORTFOLIO</h1>
      </div>
    `}};F.styles=Z`
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
  `;F=De([B("welcome-page")],F);var Be=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,m=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ie(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Be(e,t,i),i};let u=class extends v{constructor(){super(...arguments),this.subtitle="",this.title="",this.description="",this.imageSrc="",this.imageAlt="",this.cardTitle="",this.cardSubtitle="",this.detailsLink="#",this.reverseLayout=!1}get isVideo(){return[".mp4",".webm",".ogg",".mov"].some(e=>this.imageSrc.toLowerCase().endsWith(e))}render(){return E`
            <section class="${this.reverseLayout?"reverse":""}">
                <div class="textBox">
                    <h2>${this.subtitle}</h2>
                    <h1>${this.title}</h1>
                    <p>${this.description}</p>
                </div>
                <div class="card">
                    <div class="content">
                        ${this.isVideo?E`
                                    <video
                                            src="${this.imageSrc}"
                                            autoplay
                                            loop
                                            muted
                                            playsinline
                                            aria-label="${this.imageAlt}"
                                    ></video>`:E`<img src="${this.imageSrc}" alt="${this.imageAlt}"/>`}
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
        `}};u.styles=Z`
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

        img, video {
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
    `;m([g({type:String})],u.prototype,"subtitle",2);m([g({type:String})],u.prototype,"title",2);m([g({type:String})],u.prototype,"description",2);m([g({type:String})],u.prototype,"imageSrc",2);m([g({type:String})],u.prototype,"imageAlt",2);m([g({type:String})],u.prototype,"cardTitle",2);m([g({type:String})],u.prototype,"cardSubtitle",2);m([g({type:String})],u.prototype,"detailsLink",2);m([g({type:Boolean})],u.prototype,"reverseLayout",2);u=m([B("project-template")],u);var We=Object.getOwnPropertyDescriptor,Ve=(r,e,t,s)=>{for(var i=s>1?void 0:s?We(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let he=class extends v{render(){return E`
            <nav-bar>
            </nav-bar>

            <welcome-page></welcome-page>
            
            <project-template
                    subtitle="Multiplayer game engine in c++"
                    title="WIP Multiplayer game engine in c++"
                    description="A server authorative multiplayer game engine written in C++ using SDL"
                    imageSrc="/video/thumbnails/gameEngine.mp4"
                    imageAlt="Game Engine Video"
                    cardTitle="Based on SDL"
                    cardSubtitle="Cross platform"
                    detailsLink="/private-repo"
                    reverseLayout
            >
            </project-template>

            <project-template
                    subtitle="A ThreeJS experiment"
                    title="Draw in 3D"
                    description="Challenged myself to quickly make something in ThreeJS"
                    imageSrc="/img/thumbnails/ai.png"
                    imageAlt="Simple drawing"
                    cardTitle="Try me!"
                    cardSubtitle="Drawing in 3D"
                    detailsLink="https://github.com/journaal1/GIFSplash"
            >
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
            </project-template>
        `}};he=Ve([B("portfolio-root")],he);
