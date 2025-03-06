import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{K as R,$ as w,a as M,_ as N,L as k}from"./render-BP9QO1k2.js";import{r as p}from"./index-DRjF_FHU.js";import{a as F}from"./disabled-5oy4jK2L.js";import{u as I,I as P,U as T}from"./label-CqeFuFQi.js";import"./use-sync-refs-C4KtZHb2.js";let Z="textarea";function y(i,t){let l=p.useId(),d=I(),a=F(),{id:C=d||`headlessui-textarea-${l}`,disabled:o=a||!1,autoFocus:r=!1,invalid:c=!1,...v}=i,h=P(),b=T(),{isFocused:n,focusProps:j}=w({autoFocus:r}),{isHovered:u,hoverProps:$}=M({isDisabled:o}),g=N({ref:t,id:C,"aria-labelledby":h,"aria-describedby":b,"aria-invalid":c?"":void 0,disabled:o||void 0,autoFocus:r},j,$),L=p.useMemo(()=>({disabled:o,invalid:c,hover:u,focus:n,autofocus:r}),[o,c,u,n,r]);return k()({ourProps:g,theirProps:v,slot:L,defaultTag:Z,name:"Textarea"})}let D=R(y);const E=({name:i,value:t,defaultValue:l,prependIcon:d,actionButton:a})=>e.jsxs("div",{className:"textarea",children:[e.jsx("span",{className:"textarea-prependicon",children:d}),e.jsx(D,{name:i,value:t,defaultValue:l}),a&&e.jsx("span",{className:"textarea-action",children:a})]}),_=()=>e.jsxs("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.49996 2.00002C5.18625 2.00002 2.49996 4.68631 2.49996 8.00002C2.49996 11.3137 5.18625 14 8.49996 14C11.8137 14 14.5 11.3137 14.5 8.00002C14.5 4.68631 11.8137 2.00002 8.49996 2.00002ZM1.16663 8.00002C1.16663 3.94993 4.44987 0.666687 8.49996 0.666687C12.55 0.666687 15.8333 3.94993 15.8333 8.00002C15.8333 12.0501 12.55 15.3334 8.49996 15.3334C4.44987 15.3334 1.16663 12.0501 1.16663 8.00002Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.9714 5.52862C11.2317 5.78897 11.2317 6.21108 10.9714 6.47143L6.97136 10.4714C6.71101 10.7318 6.2889 10.7318 6.02855 10.4714C5.76821 10.2111 5.76821 9.78897 6.02855 9.52862L10.0286 5.52862C10.2889 5.26827 10.711 5.26827 10.9714 5.52862Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.02855 5.52862C6.2889 5.26827 6.71101 5.26827 6.97136 5.52862L10.9714 9.52862C11.2317 9.78897 11.2317 10.2111 10.9714 10.4714C10.711 10.7318 10.2889 10.7318 10.0286 10.4714L6.02855 6.47143C5.76821 6.21108 5.76821 5.78897 6.02855 5.52862Z",fill:"currentColor"})]}),U={component:E},s={args:{prependIcon:e.jsx("i",{className:"icon icon-book"}),value:"salam",actionButton:e.jsx("div",{onClick:()=>alert("hi"),children:e.jsx(_,{})})}};var m,f,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    prependIcon: <i className="icon icon-book" />,
    value: 'salam',
    actionButton: <div onClick={() => alert('hi')}>
                <CrossCircle />
            </div>
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,U as default};
