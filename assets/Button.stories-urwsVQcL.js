import{j as _}from"./jsx-runtime-DR9Q75dM.js";import{K as B,a as H,$ as R,b as T,_ as w,L as z,c as D}from"./render-C2leH1Nx.js";import{r as K}from"./index-DRjF_FHU.js";import{w as L}from"./use-active-press-BWFZXNjd.js";import"./use-disposables-yAv6qWhn.js";let M="button";function N(n,i){var s;let c=H(),{disabled:r=c||!1,autoFocus:e=!1,...d}=n,{isFocusVisible:l,focusProps:E}=R({autoFocus:e}),{isHovered:u,hoverProps:S}=T({isDisabled:r}),{pressed:m,pressProps:$}=L({disabled:r}),F=w({ref:i,type:(s=d.type)!=null?s:"button",disabled:r||void 0,autoFocus:e},E,S,$),j=K.useMemo(()=>({disabled:r,hover:u,focus:l,active:m,autofocus:e}),[r,u,l,m,e]);return z()({ourProps:F,theirProps:d,slot:j,defaultTag:M,name:"Button"})}let O=B(N);const V=({variant:n="primary",status:i="filled",size:s="md",className:c,children:r,...e})=>_.jsx(O,{className:D("button",n,i,"size-"+s,c),...e,children:r}),I={component:V},a={args:{variant:"primary",status:"filled",children:"Primary"}},o={args:{variant:"secondary",status:"filled",children:"Secondary"}},t={args:{variant:"error",status:"filled",children:"Error"}};var p,f,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const J=["Primary","Secondary","Error"];export{t as Error,a as Primary,o as Secondary,J as __namedExportsOrder,I as default};
