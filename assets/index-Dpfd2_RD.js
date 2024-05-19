(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,q=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),G=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&G.set(t,e))}return e}toString(){return this.cssText}};const ue=r=>new ne(typeof r=="string"?r:r+"",void 0,F),K=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ne(t,r,F)},fe=(r,e)=>{if(q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},J=q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ue(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$e,defineProperty:me,getOwnPropertyDescriptor:_e,getOwnPropertyNames:ge,getOwnPropertySymbols:ye,getPrototypeOf:ve}=Object,m=globalThis,Y=m.trustedTypes,Ae=Y?Y.emptyScript:"",z=m.reactiveElementPolyfillSupport,w=(r,e)=>r,k={toAttribute(r,e){switch(e){case Boolean:r=r?Ae:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},he=(r,e)=>!$e(r,e),Z={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&me(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=_e(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,i=[...ge(t),...ye(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(J(s))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:k).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:k;this._$Em=s,this[s]=a.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??he)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,z==null||z({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,N=P.trustedTypes,Q=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,le="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ae="?"+$,be=`<${ae}>`,v=document,x=()=>v.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ce=Array.isArray,Ee=r=>ce(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,ee=/>/g,g=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,se=/"/g,de=/^(?:script|style|textarea|title)$/i,Se=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),M=Se(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ie=new WeakMap,y=v.createTreeWalker(v,129);function pe(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(e):e}const we=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":"",n=S;for(let a=0;a<t;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=X:p[1]!==void 0?n=ee:p[2]!==void 0?(de.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?se:te):n===se||n===te?n=g:n===X||n===ee?n=S:(n=g,s=void 0);const f=n===g&&r[a+1].startsWith("/>")?" ":"";o+=n===S?h+be:l>=0?(i.push(c),h.slice(0,l)+le+h.slice(l)+$+f):h+$+(l===-2?a:f)}return[pe(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const a=e.length-1,h=this.parts,[c,p]=we(e,t);if(this.el=O.createElement(c,i),y.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(le)){const u=p[n++],f=s.getAttribute(l).split($),T=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:T[2],strings:f,ctor:T[1]==="."?xe:T[1]==="?"?Ce:T[1]==="@"?Oe:R}),s.removeAttribute(l)}else l.startsWith($)&&(h.push({type:6,index:o}),s.removeAttribute(l));if(de.test(s.tagName)){const l=s.textContent.split($),u=l.length-1;if(u>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],x()),y.nextNode(),h.push({type:2,index:++o});s.append(l[u],x())}}}else if(s.nodeType===8)if(s.data===ae)h.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf($,l+1))!==-1;)h.push({type:7,index:o}),l+=$.length-1}o++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function E(r,e,t=r,i){var n,a;if(e===b)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=C(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=E(r,s._$AS(r,e.values),s,i)),e}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??v).importNode(t,!0);y.currentNode=s;let o=y.nextNode(),n=0,a=0,h=i[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new U(o,o.nextSibling,this,e):h.type===1?c=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(c=new Ue(o,this,e)),this._$AV.push(c),h=i[++a]}n!==(h==null?void 0:h.index)&&(o=y.nextNode(),n++)}return y.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),C(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(pe(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Pe(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new O(e)),t}k(e){ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new U(this.S(x()),this.S(x()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!C(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const a=e;let h,c;for(e=o[0],h=0;h<o.length-1;h++)c=E(this,a[i+h],t,h),c===b&&(c=this._$AH[h]),n||(n=!C(c)||c!==this._$AH[h]),c===d?e=d:e!==d&&(e+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xe extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ce extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Oe extends R{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===b)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const D=P.litHtmlPolyfillSupport;D==null||D(O,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.3");const Te=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new U(e.insertBefore(x(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Te(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return b}}var oe;_._$litElement$=!0,_.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:_});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var He=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Me=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ne(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&He(e,t,s),s};let B=class extends _{render(){return M`
            <header>
                <nav>
                    <div class="links">
                        <a href="https://soundcloud.com/lieven-schokker">Music</a>
                        <a href="/Monthly">Monthly</a>
                    </div>
                </nav>
            </header>
        `}};B.styles=K`

        header {
            position: fixed;
            left: 1rem;
            right: 1rem;
            top: 0.5rem;
            z-index: 40;
            margin-left: 15rem;
            margin-right: 15rem;
            display: flex;
            justify-content: flex-end;
            height: 3.5rem;
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            transition: background-color 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 5rem;
        }

        .links :hover {
            color: red;
            gap: 20px;

        }

        .links a {
            text-decoration: none;
            color: black; /* Link color */
            font-weight: bold;
        }

        a {
            margin: 0.5em;
        }
    `;B=Me([j("nav-bar")],B);var Re=Object.defineProperty,je=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?je(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Re(e,t,s),s};let W=class extends _{render(){return M`
            <div class="text-container">
                <h3>Portfolio by Lieven Schokker</h3>
                <h1>WELCOME TO</h1>
                <h1>MY PORTFOLIO</h1>
            </div>
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

        .text-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 3rem;
            width: 55rem;
        }
    `;W=ze([j("welcome-page")],W);var Le=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Ie=(r,e,t,i)=>{for(var s=i>1?void 0:i?De(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Le(e,t,s),s};let V=class extends _{render(){return M`
            <container>
                <article>
                    <h2>This is the title of my projec</h2>
                    <h3>I learned a lot</h3>
                    <p>wow</p>
                </article>
                <div class="card">
                    <article class="filled">
                        <img src="../../public/img/thumbnails/vrGame.png" alt="vrGame">
                    </article>
                    <article class="border">
                        <h2>This project can be found on github:</h2>
                        <h3 class="link">github</h3>
                    </article>
                </div>
            </container>
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

        .filled {
            z-index: 10;
            position: relative;
            background-color: white;
            bottom: 5em;
            left: 5em;
        }

        img {
            width: 20em;
            height: 20em;
            border-radius: 5em;
            padding: 2em;
        }

        .border {
            position: absolute;
            z-index: 0;
            border-style: solid;
            border-radius: .5rem;
            border-color: rgb(255 255 255);
            border-width: 2px;
            padding: 4em;
            bottom: 5em;
        }

        container {
            display: flex;
            flex-direction: row;
        }

        card {
            display: flex;
            position: relative;
            margin-left: auto;
        }

        .link {
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }

        div {
            display: flex;
            margin-left: 3em;
        }
    `;V=Ie([j("project-template")],V);var ke=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,We=(r,e,t,i)=>{for(var s=i>1?void 0:i?Be(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&ke(e,t,s),s};let re=class extends _{render(){return M`
            <nav-bar></nav-bar>
            <welcome-page></welcome-page>
            <project-template></project-template>
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `}};re=We([j("portfolio-root")],re);
