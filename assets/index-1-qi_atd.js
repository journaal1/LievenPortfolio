(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,F=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Z=new WeakMap;let he=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(t,e))}return e}toString(){return this.cssText}};const fe=n=>new he(typeof n=="string"?n:n+"",void 0,K),G=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new he(t,n,K)},me=(n,e)=>{if(F)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=T.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},Y=F?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return fe(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$e,defineProperty:ge,getOwnPropertyDescriptor:_e,getOwnPropertyNames:ye,getOwnPropertySymbols:ve,getPrototypeOf:Ae}=Object,$=globalThis,Q=$.trustedTypes,be=Q?Q.emptyScript:"",j=$.reactiveElementPolyfillSupport,S=(n,e)=>n,I={toAttribute(n,e){switch(e){case Boolean:n=n?be:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},le=(n,e)=>!$e(n,e),X={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ge(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=_e(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const h=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=Ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,i=[...ye(t),...ve(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Y(s))}else e!==void 0&&t.push(Y(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const h=i.getPropertyOptions(s),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((r=h.converter)==null?void 0:r.fromAttribute)!==void 0?h.converter:I;this._$Em=s;const c=a.fromAttribute(t,h.type);this[s]=c??((o=this._$Ej)==null?void 0:o.get(s))??c,this._$Em=null}}requestUpdate(e,t,i){var s;if(e!==void 0){const r=this.constructor,o=this[e];if(i??(i=r.getPropertyOptions(e)),!((i.hasChanged??le)(o,t)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:h}=o,a=this[r];h!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,j==null||j({ReactiveElement:b}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,H=P.trustedTypes,ee=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,ce="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+m,we=`<${de}>`,A=document,C=()=>A.createComment(""),O=n=>n===null||typeof n!="object"&&typeof n!="function",J=Array.isArray,xe=n=>J(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,se=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,re=/"/g,pe=/^(?:script|style|textarea|title)$/i,Ee=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),N=Ee(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ne=new WeakMap,y=A.createTreeWalker(A,129);function ue(n,e){if(!J(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(e):e}const Se=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",o=E;for(let h=0;h<t;h++){const a=n[h];let c,p,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===E?p[1]==="!--"?o=te:p[1]!==void 0?o=se:p[2]!==void 0?(pe.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=s??E,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?re:ie):o===re||o===ie?o=_:o===te||o===se?o=E:(o=_,s=void 0);const f=o===_&&n[h+1].startsWith("/>")?" ":"";r+=o===E?a+we:l>=0?(i.push(c),a.slice(0,l)+ce+a.slice(l)+m+f):a+m+(l===-2?h:f)}return[ue(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class U{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const h=e.length-1,a=this.parts,[c,p]=Se(e,t);if(this.el=U.createElement(c,i),y.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ce)){const u=p[o++],f=s.getAttribute(l).split(m),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:M[2],strings:f,ctor:M[1]==="."?Ce:M[1]==="?"?Oe:M[1]==="@"?Ue:R}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(pe.test(s.tagName)){const l=s.textContent.split(m),u=l.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],C()),y.nextNode(),a.push({type:2,index:++r});s.append(l[u],C())}}}else if(s.nodeType===8)if(s.data===de)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function x(n,e,t=n,i){var o,h;if(e===w)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=O(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=x(n,s._$AS(n,e.values),s,i)),e}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??A).importNode(t,!0);y.currentNode=s;let r=y.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new z(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new ze(r,this,e)),this._$AV.push(c),a=i[++h]}o!==(a==null?void 0:a.index)&&(r=y.nextNode(),o++)}return y.currentNode=A,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=U.createElement(ue(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new Pe(s,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new U(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new z(this.O(C()),this.O(C()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=x(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==w,o&&(this._$AH=e);else{const h=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=x(this,h[i+a],t,a),c===w&&(c=this._$AH[a]),o||(o=!O(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Oe extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Ue extends R{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??d)===w)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const D=P.litHtmlPolyfillSupport;D==null||D(U,z),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.1");const Me=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new z(e.insertBefore(C(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis;class g extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}}var ae;g._$litElement$=!0,g.finalized=!0,(ae=v.litElementHydrateSupport)==null||ae.call(v,{LitElement:g});const B=v.litElementPolyfillSupport;B==null||B({LitElement:g});(v.litElementVersions??(v.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};var Te=Object.getOwnPropertyDescriptor,He=(n,e,t,i)=>{for(var s=i>1?void 0:i?Te(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let V=class extends g{render(){return N`
      <header>
        <nav>
          <div class="links">
            <a href="https://soundcloud.com/lieven-schokker">Music</a>
          </div>
        </nav>
      </header>
    `}};V.styles=G`
    header {
      position: fixed;
      left: 1rem;
      right: 1rem;
      top: 0.5rem;
      z-index: 40;
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 3.5rem;
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
  `;V=He([k("nav-bar")],V);var Ne=Object.getOwnPropertyDescriptor,Re=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ne(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let W=class extends g{render(){return N`
      <div class="text-container">
        <h3>Portfolio by Lieven Schokker</h3>
        <h1>WELCOME TO</h1>
        <h1>MY PORTFOLIO</h1>
      </div>
    `}};W.styles=G`
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
  `;W=Re([k("welcome-page")],W);var ke=Object.getOwnPropertyDescriptor,je=(n,e,t,i)=>{for(var s=i>1?void 0:i?ke(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let q=class extends g{render(){return N`
      <section>
        <div class="textBox">
          <h2>Unity Engine</h2>
          <h1>Virtual Synthesizer</h1>
          <p>
            This project features a synthesizer in virtual reality. The goal of
            this project is to make sound design more fun and approachable
          </p>
        </div>
        <div class="card">
          <div class="content">
            <img src="/img/thumbnails/vrGame.png" alt="vrGame" />
          </div>
          <span>
            <div class="small-content">
              <p>Virtual Synthesizer</p>
            </div>
          </span>
        </div>
      </section>
    `}};q.styles=G`
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
    z-index: 1; 
  }

  .content {
    padding: 1.25rem;
    position: relative;
    z-index: 10;
    display: block;
    background-color: rgb(243, 244, 246);
    border-radius: 0.5rem; 
  }

  span {
    position: absolute;
    border-radius: 0.5rem;
    min-width: 100%;
    min-height: 100%;
    top: 4rem;
    right: 3rem;
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

  @media screen and (max-width: 60rem) {
    section {
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;q=je([k("project-template")],q);var Le=Object.getOwnPropertyDescriptor,De=(n,e,t,i)=>{for(var s=i>1?void 0:i?Le(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let oe=class extends g{render(){return N`
            <nav-bar></nav-bar>
            <welcome-page></welcome-page>
            <project-template></project-template>
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `}};oe=De([k("portfolio-root")],oe);
