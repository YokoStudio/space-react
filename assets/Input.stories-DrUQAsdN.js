import{j as T}from"./jsx-runtime-DR9Q75dM.js";import{K as H,a as K,$ as L,b as M,_ as N,L as O,c as R}from"./render-C2leH1Nx.js";import{r as m}from"./index-DRjF_FHU.js";import{u as U,I as q,U as w}from"./label-B2Sj7P4A.js";let z="input";function A(t,d){let c=m.useId(),u=U(),i=K(),{id:E=u||`headlessui-input-${c}`,disabled:e=i||!1,autoFocus:a=!1,invalid:n=!1,...I}=t,F=q(),P=w(),{isFocused:l,focusProps:S}=L({autoFocus:a}),{isHovered:p,hoverProps:j}=M({isDisabled:e}),_=N({ref:d,id:E,"aria-labelledby":F,"aria-describedby":P,"aria-invalid":n?"":void 0,disabled:e||void 0,autoFocus:a},S,j),k=m.useMemo(()=>({disabled:e,invalid:n,hover:p,focus:l,autofocus:a}),[e,n,p,l,a]);return O()({ourProps:_,theirProps:I,slot:k,defaultTag:z,name:"Input"})}let B=H(A);const C=({placeholder:t,error:d=!1,disabled:c=!1,className:u,...i})=>T.jsx(B,{placeholder:t,className:R("input",{error:d},u),disabled:c,...i}),W={component:C},r={args:{placeholder:"yoko search..."}},s={args:{...r.args,error:!0}},o={args:{...r.args,disabled:!0}};var f,b,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'yoko search...'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var $,x,h;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,D,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const X=["Default","Error","Disable"];export{r as Default,o as Disable,s as Error,X as __namedExportsOrder,W as default};
