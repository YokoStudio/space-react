import{j as R}from"./jsx-runtime-CkxqCPlQ.js";import{o as y,K as _,a as F,$ as V,b as j,_ as H,L as N,c as z}from"./render-DQMj-x5Z.js";import{r as f}from"./index-DJO9vBfz.js";import{p as C,u as D}from"./use-disposables-IQKeU2sV.js";function M(e){let r=e.width/2,s=e.height/2;return{top:e.clientY-s,right:e.clientX+r,bottom:e.clientY+s,left:e.clientX-r}}function X(e,r){return!(!e||!r||e.right<r.left||e.left>r.right||e.bottom<r.top||e.top>r.bottom)}function Y({disabled:e=!1}={}){let r=f.useRef(null),[s,n]=f.useState(!1),t=C(),a=y(()=>{r.current=null,n(!1),t.dispose()}),i=y(o=>{if(t.dispose(),r.current===null){r.current=o.currentTarget,n(!0);{let l=D(o.currentTarget);t.addEventListener(l,"pointerup",a,!1),t.addEventListener(l,"pointermove",u=>{if(r.current){let p=M(u);n(X(p,r.current.getBoundingClientRect()))}},!1),t.addEventListener(l,"pointercancel",a,!1)}}});return{pressed:s,pressProps:e?{}:{onPointerDown:i,onPointerUp:a,onClick:a}}}let k="button";function A(e,r){var s;let n=F(),{disabled:t=n||!1,autoFocus:a=!1,...i}=e,{isFocusVisible:o,focusProps:l}=V({autoFocus:a}),{isHovered:u,hoverProps:p}=j({isDisabled:t}),{pressed:v,pressProps:q}=Y({disabled:t}),B=H({ref:r,type:(s=i.type)!=null?s:"button",disabled:t||void 0,autoFocus:a},l,p,q),L=f.useMemo(()=>({disabled:t,hover:u,focus:o,active:v,autofocus:a}),[t,u,o,v,a]);return N()({ourProps:B,theirProps:i,slot:L,defaultTag:k,name:"Button"})}let I=_(A);const w=({variant:e="primary",status:r="filled",size:s="md",className:n,children:t,...a})=>R.jsx(I,{className:z("button",e,r,"size-"+s,n),...a,children:t});w.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const J={component:w},d={args:{variant:"primary",status:"filled",children:"Primary"}},c={args:{variant:"secondary",status:"filled",children:"Secondary"}},m={args:{variant:"error",status:"filled",children:"Error"}};var g,b,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    status: 'filled',
    children: 'Primary'
  }
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,P,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    status: 'filled',
    children: 'Secondary'
  }
}`,...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,S,$;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    status: 'filled',
    children: 'Error'
  }
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const Q=["Primary","Secondary","Error"];export{m as Error,d as Primary,c as Secondary,Q as __namedExportsOrder,J as default};
