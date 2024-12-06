import{j as k}from"./jsx-runtime-CkxqCPlQ.js";import{K as H,a as L,$ as M,b as N,_ as V,L as A,c as K}from"./render-DQMj-x5Z.js";import{r as m}from"./index-DJO9vBfz.js";import{u as O,I as R,U}from"./label-Esl2zwDk.js";let w="input";function z(t,d){let u=m.useId(),i=O(),l=L(),{id:T=i||`headlessui-input-${u}`,disabled:r=l||!1,autoFocus:a=!1,invalid:n=!1,...E}=t,_=R(),F=U(),{isFocused:c,focusProps:P}=M({autoFocus:a}),{isHovered:p,hoverProps:S}=N({isDisabled:r}),j=V({ref:d,id:T,"aria-labelledby":_,"aria-describedby":F,"aria-invalid":n?"":void 0,disabled:r||void 0,autoFocus:a},P,S),q=m.useMemo(()=>({disabled:r,invalid:n,hover:p,focus:c,autofocus:a}),[r,n,p,c,a]);return A()({ourProps:j,theirProps:E,slot:q,defaultTag:w,name:"Input"})}let B=H(z);const D=({placeholder:t,error:d=!1,disabled:u=!1,className:i,...l})=>k.jsx(B,{placeholder:t,className:K("input",{error:d},i),disabled:u,...l});D.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["InputHTMLAttributes"]};const W={component:D},e={args:{placeholder:"yoko search..."}},s={args:{...e.args,error:!0}},o={args:{...e.args,disabled:!0}};var f,b,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'yoko search...'
  }
}`,...(g=(b=e.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,$,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true
  }
}`,...(v=($=s.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var x,y,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const X=["Default","Error","Disable"];export{e as Default,o as Disable,s as Error,X as __namedExportsOrder,W as default};
