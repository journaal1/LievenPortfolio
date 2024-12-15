(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,q=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),J=new WeakMap;let ae=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(t,e))}return e}toString(){return this.cssText}};const ue=r=>new ae(typeof r=="string"?r:r+"",void 0,F),K=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ae(t,r,F)},fe=(r,e)=>{if(q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Z=q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ue(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:me,defineProperty:$e,getOwnPropertyDescriptor:ge,getOwnPropertyNames:_e,getOwnPropertySymbols:ye,getPrototypeOf:ve}=Object,$=globalThis,Y=$.trustedTypes,Ae=Y?Y.emptyScript:"",M=$.reactiveElementPolyfillSupport,E=(r,e)=>r,B={toAttribute(r,e){switch(e){case Boolean:r=r?Ae:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},he=(r,e)=>!me(r,e),Q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&$e(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=ge(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,i=[..._e(t),...ye(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Z(s))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:B;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??he)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,M==null||M({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,H=S.trustedTypes,X=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,le="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ce="?"+m,be=`<${ce}>`,v=document,P=()=>v.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,xe=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),se=/'/g,ie=/"/g,de=/^(?:script|style|textarea|title)$/i,we=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),N=we(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),re=new WeakMap,y=v.createTreeWalker(v,129);function pe(r,e){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Ee=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=w;for(let l=0;l<t;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===w?p[1]==="!--"?o=ee:p[1]!==void 0?o=te:p[2]!==void 0?(de.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=s??w,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?ie:se):o===ie||o===se?o=_:o===ee||o===te?o=w:(o=_,s=void 0);const f=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===w?a+be:h>=0?(i.push(c),a.slice(0,h)+le+a.slice(h)+m+f):a+m+(h===-2?l:f)}return[pe(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,p]=Ee(e,t);if(this.el=O.createElement(c,i),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(le)){const u=p[o++],f=s.getAttribute(h).split(m),T=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:T[2],strings:f,ctor:T[1]==="."?Pe:T[1]==="?"?Ce:T[1]==="@"?Oe:R}),s.removeAttribute(h)}else h.startsWith(m)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(de.test(s.tagName)){const h=s.textContent.split(m),u=h.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let f=0;f<u;f++)s.append(h[f],P()),y.nextNode(),a.push({type:2,index:++n});s.append(h[u],P())}}}else if(s.nodeType===8)if(s.data===ce)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(m,h+1))!==-1;)a.push({type:7,index:n}),h+=m.length-1}n++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function x(r,e,t=r,i){var o,l;if(e===b)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=C(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=x(r,s._$AS(r,e.values),s,i)),e}class Se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??v).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new U(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Ue(n,this,e)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),C(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(pe(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Se(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=re.get(e.strings);return t===void 0&&re.set(e.strings,t=new O(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new U(this.O(P()),this.O(P()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=x(this,e,t,0),o=!C(e)||e!==this._$AH&&e!==b,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=x(this,l[i+a],t,a),c===b&&(c=this._$AH[a]),o||(o=!C(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pe extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ce extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Oe extends R{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??d)===b)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const D=S.litHtmlPolyfillSupport;D==null||D(O,U),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.2.1");const Te=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new U(e.insertBefore(P(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Te(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return b}}var oe;g._$litElement$=!0,g.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:g});const k=globalThis.litElementPolyfillSupport;k==null||k({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var ze=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ne=(r,e,t,i)=>{for(var s=i>1?void 0:i?He(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ze(e,t,s),s};let I=class extends g{render(){return N`
      <header>
        <nav>
          <div class="links">
            <a href="https://soundcloud.com/lieven-schokker">Music</a>
          </div>
        </nav>
      </header>
    `}};I.styles=K`
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
  `;I=Ne([j("nav-bar")],I);var Re=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Me=(r,e,t,i)=>{for(var s=i>1?void 0:i?je(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Re(e,t,s),s};let V=class extends g{render(){return N`
      <div class="text-container">
        <h3>Portfolio by Lieven Schokker</h3>
        <h1>WELCOME TO</h1>
        <h1>MY PORTFOLIO</h1>
      </div>
    `}};V.styles=K`
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
  `;V=Me([j("welcome-page")],V);var Le=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ke=(r,e,t,i)=>{for(var s=i>1?void 0:i?De(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Le(e,t,s),s};let W=class extends g{render(){return N`
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
    `}};W.styles=K`
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

    @media screen and (max-width: 60rem) {
      section {
        flex-wrap: wrap;
        width: 100%;
      }
    }
  `;W=ke([j("project-template")],W);var Be=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ie(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Be(e,t,s),s};let ne=class extends g{render(){return N`
            <nav-bar></nav-bar>
            <welcome-page></welcome-page>
            <project-template></project-template>
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `}};ne=Ve([j("portfolio-root")],ne);
