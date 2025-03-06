import{j as _}from"./jsx-runtime-DR9Q75dM.js";import{c as B}from"./clsx-B-dksMZM.js";import{K as H,$ as R,a as T,_ as w,L as z}from"./render-BP9QO1k2.js";import{r as D}from"./index-DRjF_FHU.js";import{w as K}from"./use-active-press-rHJ2hxsR.js";import{a as L}from"./disabled-5oy4jK2L.js";import"./use-disposables-Bc217F-y.js";let M="button";function N(n,i){var s;let c=L(),{disabled:r=c||!1,autoFocus:e=!1,...d}=n,{isFocusVisible:m,focusProps:E}=R({autoFocus:e}),{isHovered:l,hoverProps:S}=T({isDisabled:r}),{pressed:u,pressProps:$}=K({disabled:r}),F=w({ref:i,type:(s=d.type)!=null?s:"button",disabled:r||void 0,autoFocus:e},E,S,$),j=D.useMemo(()=>({disabled:r,hover:l,focus:m,active:u,autofocus:e}),[r,l,m,u,e]);return z()({ourProps:F,theirProps:d,slot:j,defaultTag:M,name:"Button"})}let O=H(N);const V=({variant:n="primary",status:i="filled",size:s="md",className:c,children:r,...e})=>_.jsx(O,{className:B("button",n,i,"size-"+s,c),...e,children:r}),Q={component:V},a={args:{variant:"primary",status:"filled",children:"Primary"}},o={args:{variant:"secondary",status:"filled",children:"Secondary"}},t={args:{variant:"error",status:"filled",children:"Error"}};var p,f,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    status: 'filled',
    children: 'Primary'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,b,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    status: 'filled',
    children: 'Secondary'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,x,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    status: 'filled',
    children: 'Error'
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const U=["Primary","Secondary","Error"];export{t as Error,a as Primary,o as Secondary,U as __namedExportsOrder,Q as default};
