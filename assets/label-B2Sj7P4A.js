import{r as o,R as x}from"./index-DRjF_FHU.js";import{o as v,K as T,a as $,n as M,L as S}from"./render-C2leH1Nx.js";let P=o.createContext(void 0);function O(){return o.useContext(P)}function Q({id:e,children:t}){return x.createElement(P.Provider,{value:e},t)}let L=Symbol();function _(e,t=!0){return Object.assign(e,{[L]:t})}function j(...e){let t=o.useRef(e);o.useEffect(()=>{t.current=e},[e]);let n=v(l=>{for(let r of t.current)r!=null&&(typeof r=="function"?r(l):r.current=l)});return e.every(l=>l==null||(l==null?void 0:l[L]))?void 0:n}let b=o.createContext(null);b.displayName="DescriptionContext";function w(){let e=o.useContext(b);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return e}function q(){var e,t;return(t=(e=o.useContext(b))==null?void 0:e.value)!=null?t:void 0}function z(){let[e,t]=o.useState([]);return[e.length>0?e.join(" "):void 0,o.useMemo(()=>function(n){let l=v(i=>(t(u=>[...u,i]),()=>t(u=>{let a=u.slice(),s=a.indexOf(i);return s!==-1&&a.splice(s,1),a}))),r=o.useMemo(()=>({register:l,slot:n.slot,name:n.name,props:n.props,value:n.value}),[l,n.slot,n.name,n.props,n.value]);return x.createElement(b.Provider,{value:r},n.children)},[t])]}let H="p";function B(e,t){let n=o.useId(),l=$(),{id:r=`headlessui-description-${n}`,...i}=e,u=w(),a=j(t);M(()=>u.register(r),[r,u.register]);let s=l||!1,d=o.useMemo(()=>({...u.slot,disabled:s}),[u.slot,s]),p={ref:a,...u.props,id:r};return S()({ourProps:p,theirProps:i,slot:d,defaultTag:H,name:u.name||"Description"})}let K=T(B),J=Object.assign(K,{}),h=o.createContext(null);h.displayName="LabelContext";function D(){let e=o.useContext(h);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return e}function N(e){var t,n,l;let r=(n=(t=o.useContext(h))==null?void 0:t.value)!=null?n:void 0;return((l=e==null?void 0:e.length)!=null?l:0)>0?[r,...e].filter(Boolean).join(" "):r}function V({inherit:e=!1}={}){let t=N(),[n,l]=o.useState([]),r=e?[t,...n].filter(Boolean):n;return[r.length>0?r.join(" "):void 0,o.useMemo(()=>function(i){let u=v(s=>(l(d=>[...d,s]),()=>l(d=>{let p=d.slice(),f=p.indexOf(s);return f!==-1&&p.splice(f,1),p}))),a=o.useMemo(()=>({register:u,slot:i.slot,name:i.name,props:i.props,value:i.value}),[u,i.slot,i.name,i.props,i.value]);return x.createElement(h.Provider,{value:a},i.children)},[l])]}let R="label";function U(e,t){var n;let l=o.useId(),r=D(),i=O(),u=$(),{id:a=`headlessui-label-${l}`,htmlFor:s=i??((n=r.props)==null?void 0:n.htmlFor),passive:d=!1,...p}=e,f=j(t);M(()=>r.register(a),[a,r.register]);let F=v(C=>{let g=C.currentTarget;if(g instanceof HTMLLabelElement&&C.preventDefault(),r.props&&"onClick"in r.props&&typeof r.props.onClick=="function"&&r.props.onClick(C),g instanceof HTMLLabelElement){let c=document.getElementById(g.htmlFor);if(c){let k=c.getAttribute("disabled");if(k==="true"||k==="")return;let y=c.getAttribute("aria-disabled");if(y==="true"||y==="")return;(c instanceof HTMLInputElement&&(c.type==="radio"||c.type==="checkbox")||c.role==="radio"||c.role==="checkbox"||c.role==="switch")&&c.click(),c.focus({preventScroll:!0})}}}),E=u||!1,I=o.useMemo(()=>({...r.slot,disabled:E}),[r.slot,E]),m={ref:f,...r.props,id:a,htmlFor:s,onClick:F};return d&&("onClick"in m&&(delete m.htmlFor,delete m.onClick),"onClick"in p&&delete p.onClick),S()({ourProps:m,theirProps:p,slot:I,defaultTag:s?R:"div",name:r.name||"Label"})}let A=T(U),W=Object.assign(A,{});export{J as H,N as I,V as K,W as Q,_ as T,q as U,Q as f,O as u,z as w,j as y};
