import{j as w}from"./jsx-runtime-CkxqCPlQ.js";import{K as B,a as F,$ as V,b as j,_ as H,L as N,c as R}from"./render-DQMj-x5Z.js";import{r as z}from"./index-DJO9vBfz.js";import{w as L}from"./use-active-press-B0O0slw8.js";import"./use-disposables-IQKeU2sV.js";let M="button";function A(l,n){var a;let i=F(),{disabled:e=i||!1,autoFocus:r=!1,...d}=l,{isFocusVisible:u,focusProps:E}=V({autoFocus:r}),{isHovered:m,hoverProps:S}=j({isDisabled:e}),{pressed:c,pressProps:$}=L({disabled:e}),q=H({ref:n,type:(a=d.type)!=null?a:"button",disabled:e||void 0,autoFocus:r},E,S,$),_=z.useMemo(()=>({disabled:e,hover:m,focus:u,active:c,autofocus:r}),[e,m,u,c,r]);return N()({ourProps:q,theirProps:d,slot:_,defaultTag:M,name:"Button"})}let D=B(A);const T=({variant:l="primary",status:n="filled",size:a="md",className:i,children:e,...r})=>w.jsx(D,{className:R("button",l,n,"size-"+a,i),...r,children:e});T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const G={component:T},s={args:{variant:"primary",status:"filled",children:"Primary"}},t={args:{variant:"secondary",status:"filled",children:"Secondary"}},o={args:{variant:"error",status:"filled",children:"Error"}};var p,f,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    status: 'filled',
    children: 'Primary'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,b,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    status: 'filled',
    children: 'Secondary'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,x,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    status: 'filled',
    children: 'Error'
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const J=["Primary","Secondary","Error"];export{o as Error,s as Primary,t as Secondary,J as __namedExportsOrder,G as default};
