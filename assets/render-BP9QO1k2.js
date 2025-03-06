import{R as I,r as s}from"./index-DRjF_FHU.js";const B=typeof document<"u"?I.useLayoutEffect:()=>{};function q(e){const n=s.useRef(null);return B(()=>{n.current=e},[e]),s.useCallback((...t)=>{const r=n.current;return r==null?void 0:r(...t)},[])}const w=e=>{var n;return(n=e==null?void 0:e.ownerDocument)!==null&&n!==void 0?n:document},$=e=>e&&"window"in e&&e.window===e?e:w(e).defaultView||window;function J(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function Q(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function N(e){let n=null;return()=>(n==null&&(n=e()),n)}const X=N(function(){return Q(/^Mac/i)}),ee=N(function(){return J(/Android/i)});function te(e){return e.mozInputSource===0&&e.isTrusted?!0:ee()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class ne{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function K(e){let n=s.useRef({isFocused:!1,observer:null});B(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=q(r=>{e==null||e(r)});return s.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,l=c=>{n.current.isFocused=!1,o.disabled&&t(new ne("blur",c)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",l,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var c;(c=n.current.observer)===null||c===void 0||c.disconnect();let i=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:i})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:i}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function re(e){let{isDisabled:n,onFocus:t,onBlur:r,onFocusChange:o}=e;const l=s.useCallback(a=>{if(a.target===a.currentTarget)return r&&r(a),o&&o(!1),!0},[r,o]),c=K(l),i=s.useCallback(a=>{const f=w(a.target);a.target===a.currentTarget&&f.activeElement===a.target&&(t&&t(a),o&&o(!0),c(a))},[o,t,c]);return{focusProps:{onFocus:!n&&(t||o||r)?i:void 0,onBlur:!n&&(r||o)?l:void 0}}}let T=null,x=new Set,y=new Map,m=!1,j=!1;const oe={Tab:!0,Escape:!0};function W(e,n){for(let t of x)t(e,n)}function ie(e){return!(e.metaKey||!X()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function H(e){m=!0,ie(e)&&(T="keyboard",W("keyboard",e))}function g(e){T="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(m=!0,W("pointer",e))}function V(e){te(e)&&(m=!0,T="virtual")}function _(e){e.target===window||e.target===document||(!m&&!j&&(T="virtual",W("virtual",e)),m=!1,j=!1)}function U(){m=!1,j=!0}function O(e){if(typeof window>"u"||y.get($(e)))return;const n=$(e),t=w(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){m=!0,r.apply(this,arguments)},t.addEventListener("keydown",H,!0),t.addEventListener("keyup",H,!0),t.addEventListener("click",V,!0),n.addEventListener("focus",_,!0),n.addEventListener("blur",U,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",g,!0),t.addEventListener("pointerup",g,!0)):(t.addEventListener("mousedown",g,!0),t.addEventListener("mousemove",g,!0),t.addEventListener("mouseup",g,!0)),n.addEventListener("beforeunload",()=>{G(e)},{once:!0}),y.set(n,{focus:r})}const G=(e,n)=>{const t=$(e),r=w(e);n&&r.removeEventListener("DOMContentLoaded",n),y.has(t)&&(t.HTMLElement.prototype.focus=y.get(t).focus,r.removeEventListener("keydown",H,!0),r.removeEventListener("keyup",H,!0),r.removeEventListener("click",V,!0),t.removeEventListener("focus",_,!0),t.removeEventListener("blur",U,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",g,!0),r.removeEventListener("pointermove",g,!0),r.removeEventListener("pointerup",g,!0)):(r.removeEventListener("mousedown",g,!0),r.removeEventListener("mousemove",g,!0),r.removeEventListener("mouseup",g,!0)),y.delete(t))};function ae(e){const n=w(e);let t;return n.readyState!=="loading"?O(e):(t=()=>{O(e)},n.addEventListener("DOMContentLoaded",t)),()=>G(e,t)}typeof document<"u"&&ae();function Y(){return T!=="pointer"}const ue=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function se(e,n,t){var r;const o=typeof window<"u"?$(t==null?void 0:t.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?$(t==null?void 0:t.target).HTMLTextAreaElement:HTMLTextAreaElement,c=typeof window<"u"?$(t==null?void 0:t.target).HTMLElement:HTMLElement,i=typeof window<"u"?$(t==null?void 0:t.target).KeyboardEvent:KeyboardEvent;return e=e||(t==null?void 0:t.target)instanceof o&&!ue.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||(t==null?void 0:t.target)instanceof l||(t==null?void 0:t.target)instanceof c&&(t==null?void 0:t.target.isContentEditable),!(e&&n==="keyboard"&&t instanceof i&&!oe[t.key])}function le(e,n,t){O(),s.useEffect(()=>{let r=(o,l)=>{se(!!(t!=null&&t.isTextInput),o,l)&&e(Y())};return x.add(r),()=>{x.delete(r)}},n)}function ce(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:o}=e,l=s.useRef({isFocusWithin:!1}),c=s.useCallback(f=>{l.current.isFocusWithin&&!f.currentTarget.contains(f.relatedTarget)&&(l.current.isFocusWithin=!1,t&&t(f),o&&o(!1))},[t,o,l]),i=K(c),a=s.useCallback(f=>{!l.current.isFocusWithin&&document.activeElement===f.target&&(r&&r(f),o&&o(!0),l.current.isFocusWithin=!0,i(f))},[r,o,i]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:a,onBlur:c}}}let S=!1,k=0;function D(){S=!0,setTimeout(()=>{S=!1},50)}function A(e){e.pointerType==="touch"&&D()}function fe(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",A):document.addEventListener("touchend",D),k++,()=>{k--,!(k>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",A):document.removeEventListener("touchend",D))}}function Le(e){let{onHoverStart:n,onHoverChange:t,onHoverEnd:r,isDisabled:o}=e,[l,c]=s.useState(!1),i=s.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;s.useEffect(fe,[]);let{hoverProps:a,triggerHoverEnd:f}=s.useMemo(()=>{let d=(u,b)=>{if(i.pointerType=b,o||b==="touch"||i.isHovered||!u.currentTarget.contains(u.target))return;i.isHovered=!0;let h=u.currentTarget;i.target=h,n&&n({type:"hoverstart",target:h,pointerType:b}),t&&t(!0),c(!0)},v=(u,b)=>{if(i.pointerType="",i.target=null,b==="touch"||!i.isHovered)return;i.isHovered=!1;let h=u.currentTarget;r&&r({type:"hoverend",target:h,pointerType:b}),t&&t(!1),c(!1)},p={};return typeof PointerEvent<"u"?(p.onPointerEnter=u=>{S&&u.pointerType==="mouse"||d(u,u.pointerType)},p.onPointerLeave=u=>{!o&&u.currentTarget.contains(u.target)&&v(u,u.pointerType)}):(p.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},p.onMouseEnter=u=>{!i.ignoreEmulatedMouseEvents&&!S&&d(u,"mouse"),i.ignoreEmulatedMouseEvents=!1},p.onMouseLeave=u=>{!o&&u.currentTarget.contains(u.target)&&v(u,"mouse")}),{hoverProps:p,triggerHoverEnd:v}},[n,t,r,o,i]);return s.useEffect(()=>{o&&f({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:a,isHovered:l}}function Pe(e={}){let{autoFocus:n=!1,isTextInput:t,within:r}=e,o=s.useRef({isFocused:!1,isFocusVisible:n||Y()}),[l,c]=s.useState(!1),[i,a]=s.useState(()=>o.current.isFocused&&o.current.isFocusVisible),f=s.useCallback(()=>a(o.current.isFocused&&o.current.isFocusVisible),[]),d=s.useCallback(u=>{o.current.isFocused=u,c(u),f()},[f]);le(u=>{o.current.isFocusVisible=u,f()},[],{isTextInput:t});let{focusProps:v}=re({isDisabled:r,onFocusChange:d}),{focusWithinProps:p}=ce({isDisabled:!r,onFocusWithinChange:d});return{isFocused:l,isFocusVisible:i,focusProps:r?p:v}}var de=Object.defineProperty,ve=(e,n,t)=>n in e?de(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,M=(e,n,t)=>(ve(e,typeof n!="symbol"?n+"":n,t),t);let pe=class{constructor(){M(this,"current",this.detect()),M(this,"handoffState","pending"),M(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},be=new pe,ge=(e,n)=>{be.isServer?s.useEffect(e,n):s.useLayoutEffect(e,n)};function he(e){let n=s.useRef(e);return ge(()=>{n.current=e},[e]),n}let Se=function(e){let n=he(e);return I.useCallback((...t)=>n.current(...t),[n])};function R(...e){return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}function z(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,z),r}var $e=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($e||{}),me=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(me||{});function ke(){let e=ye();return s.useCallback(n=>Ee({mergeRefs:e,...n}),[e])}function Ee({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:o,visible:l=!0,name:c,mergeRefs:i}){i=i??we;let a=Z(n,e);if(l)return P(a,t,r,c,i);let f=o??0;if(f&2){let{static:d=!1,...v}=a;if(d)return P(v,t,r,c,i)}if(f&1){let{unmount:d=!0,...v}=a;return z(d?0:1,{0(){return null},1(){return P({...v,hidden:!0,style:{display:"none"}},t,r,c,i)}})}return P(a,t,r,c,i)}function P(e,n={},t,r,o){let{as:l=t,children:c,refName:i="ref",...a}=C(e,["unmount","static"]),f=e.ref!==void 0?{[i]:e.ref}:{},d=typeof c=="function"?c(n):c;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(n)),a["aria-labelledby"]&&a["aria-labelledby"]===a.id&&(a["aria-labelledby"]=void 0);let v={};if(n){let p=!1,u=[];for(let[b,h]of Object.entries(n))typeof h=="boolean"&&(p=!0),h===!0&&u.push(b.replace(/([A-Z])/g,F=>`-${F.toLowerCase()}`));if(p){v["data-headlessui-state"]=u.join(" ");for(let b of u)v[`data-${b}`]=""}}if(l===s.Fragment&&(Object.keys(E(a)).length>0||Object.keys(E(v)).length>0))if(!s.isValidElement(d)||Array.isArray(d)&&d.length>1){if(Object.keys(E(a)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(E(a)).concat(Object.keys(E(v))).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`))}else{let p=d.props,u=p==null?void 0:p.className,b=typeof u=="function"?(...L)=>R(u(...L),a.className):R(u,a.className),h=b?{className:b}:{},F=Z(d.props,E(C(a,["ref"])));for(let L in v)L in F&&delete v[L];return s.cloneElement(d,Object.assign({},F,v,f,{ref:o(Te(d),f.ref)},h))}return s.createElement(l,Object.assign({},C(a,["ref"]),l!==s.Fragment&&f,l!==s.Fragment&&v),d)}function ye(){let e=s.useRef([]),n=s.useCallback(t=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(t):r.current=t)},[]);return(...t)=>{if(!t.every(r=>r==null))return e.current=t,n}}function we(...e){return e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])for(let r in t)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(t[r]=[o=>{var l;return(l=o==null?void 0:o.preventDefault)==null?void 0:l.call(o)}]);for(let r in t)Object.assign(n,{[r](o,...l){let c=t[r];for(let i of c){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...l)}}});return n}function Me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];for(let r in t)Object.assign(n,{[r](...o){let l=t[r];for(let c of l)c==null||c(...o)}});return n}function Ce(e){var n;return Object.assign(s.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function E(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function C(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function Te(e){return I.version.split(".")[0]>="19"?e.props.ref:e.ref}export{Pe as $,Ce as K,ke as L,$e as O,Me as _,Le as a,he as b,E as m,ge as n,Se as o,be as s,z as u};
