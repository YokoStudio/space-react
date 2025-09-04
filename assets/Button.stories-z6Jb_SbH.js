import{j as e}from"./jsx-runtime-CpqJQ-2U.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as ue}from"./iframe-DYtV9SfR.js";import{i as fe,I as ve}from"./Icon-CXtZxVve.js";import{S as ye,u as ge}from"./Spinner-Cay0vh91.js";import{K as he,$ as xe,a as Be,_ as be,L as je}from"./render-DgmoG-Gt.js";import{w as Se}from"./use-active-press-CTAxzjaV.js";import{a as Ie}from"./disabled-BooyTcZw.js";import"./preload-helper-C1FmrZbK.js";import"./use-disposables-TuCwlguh.js";const pe=()=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L1.64645 6.35355C1.45118 6.15829 1.45118 5.84171 1.64645 5.64645C1.84171 5.45118 2.15829 5.45118 2.35355 5.64645L4.5 7.79289L9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645Z",fill:"currentColor"})}),me=()=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C2 5.72386 2.22386 5.5 2.5 5.5H9.5C9.77614 5.5 10 5.72386 10 6C10 6.27614 9.77614 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27614 2 6Z",fill:"currentColor"})});let Ne="button";function ze(t,I){var s;let N=Ie(),{disabled:a=N||!1,autoFocus:o=!1,...l}=t,{isFocusVisible:i,focusProps:z}=xe({autoFocus:o}),{isHovered:d,hoverProps:E}=Be({isDisabled:a}),{pressed:c,pressProps:P}=Se({disabled:a}),w=be({ref:I,type:(s=l.type)!=null?s:"button",disabled:a||void 0,autoFocus:o},z,E,P),V=ue.useMemo(()=>({disabled:a,hover:d,focus:i,active:c,autofocus:o}),[a,d,i,c,o]);return je()({ourProps:w,theirProps:l,slot:V,defaultTag:Ne,name:"Button"})}let Ee=he(ze);const r=ue.forwardRef(({color:t="primary",variant:I="filled",size:s="md",className:N,children:a,prependIcon:o,appendIcon:l,loading:i=!1,block:z=!1,disabled:d=!1,type:E="button",ariaLabel:c,ariaDescribedby:P,...w},V)=>{const n=ge("button"),C=u=>typeof u=="string"&&fe[u]?e.jsx("div",{className:p(n("prepend-icon")),children:e.jsx(ve,{name:u,size:"lg"})}):e.jsx("div",{className:p(n("prepend-icon")),children:u});return e.jsx(Ee,{className:p(n(),n("color",t),n("variant",I),n("size",s),{"w-full":z},N),disabled:d,type:E,ref:V,"aria-label":c,"aria-describedby":P,...w,children:i?e.jsx(ye,{direction:"row",size:"md",classNameIcon:p({"!text-neutral-10-default":t==="primary"})}):e.jsxs(e.Fragment,{children:[o&&C(o),a,l&&C(l)]})})});r.displayName="Button";try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'}]}},variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"ghost"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},prependIcon:{defaultValue:null,description:"",name:"prependIcon",required:!1,type:{name:"ReactNode"}},appendIcon:{defaultValue:null,description:"",name:"appendIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},ariaDescribedby:{defaultValue:null,description:"",name:"ariaDescribedby",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}const Me={component:r,argTypes:{size:{type:"string",control:"radio",options:["xs","sm","md","lg","xl"]},variant:{type:"string",control:"radio",options:["filled","outlined","ghost"]},color:{type:"string",control:"radio",options:["primary","secondary","error"]},disabled:{type:"boolean",control:"boolean"},loading:{type:"boolean",control:"boolean"},block:{type:"boolean",control:"boolean"},type:{type:"string",control:"radio",options:["button","submit","reset"]},prependIcon:{type:"string",control:"text",defaultValue:e.jsx(pe,{})},appendIcon:{type:"string",control:"text",defaultValue:e.jsx(me,{})}}},m={args:{color:"primary",variant:"filled",children:"Primary Button"}},f={args:{color:"secondary",variant:"filled",children:"Secondary Button"}},v={args:{color:"error",variant:"filled",children:"Error Button"}},y={args:{color:"primary",variant:"filled",children:"With Icon",prependIcon:e.jsx(pe,{})}},g={args:{color:"primary",variant:"filled",children:"With Icon",appendIcon:e.jsx(me,{})}},h={args:{color:"primary",variant:"filled",children:"Loading Button",loading:!0}},x={args:{color:"primary",variant:"filled",children:"Block Button",block:!0}},B={args:{color:"primary",variant:"filled",children:"Disabled Button",disabled:!0}},b={args:{color:"primary",variant:"filled",children:"Submit Form",type:"submit"}},j={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"primary",variant:"filled",children:"Primary Filled"}),e.jsx(r,{color:"primary",variant:"outlined",children:"Primary Outlined"}),e.jsx(r,{color:"primary",variant:"ghost",children:"Primary Ghost"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"secondary",variant:"filled",children:"Secondary Filled"}),e.jsx(r,{color:"secondary",variant:"outlined",children:"Secondary Outlined"}),e.jsx(r,{color:"secondary",variant:"ghost",children:"Secondary Ghost"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"error",variant:"filled",children:"Error Filled"}),e.jsx(r,{color:"error",variant:"outlined",children:"Error Outlined"}),e.jsx(r,{color:"error",variant:"ghost",children:"Error Ghost"})]})]})},S={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{size:"xs",children:"Extra Small"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"xl",children:"Extra Large"})]})};var L,F,k;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Primary Button'
  }
}`,...(k=(F=m.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var q,_,R;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    variant: 'filled',
    children: 'Secondary Button'
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var M,W,A;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: 'error',
    variant: 'filled',
    children: 'Error Button'
  }
}`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,O,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'With Icon',
    prependIcon: <CheckIcon />
  }
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,H,T;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'With Icon',
    appendIcon: <MinusIcon />
  }
}`,...(T=(H=g.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var Z,K,J;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Loading Button',
    loading: true
  }
}`,...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Block Button',
    block: true
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,re;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Disabled Button',
    disabled: true
  }
}`,...(re=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Submit Form',
    type: 'submit'
  }
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,le,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button color="primary" variant="filled">Primary Filled</Button>
                <Button color="primary" variant="outlined">Primary Outlined</Button>
                <Button color="primary" variant="ghost">Primary Ghost</Button>
            </div>
            <div className="flex gap-2">
                <Button color="secondary" variant="filled">Secondary Filled</Button>
                <Button color="secondary" variant="outlined">Secondary Outlined</Button>
                <Button color="secondary" variant="ghost">Secondary Ghost</Button>
            </div>
            <div className="flex gap-2">
                <Button color="error" variant="filled">Error Filled</Button>
                <Button color="error" variant="outlined">Error Outlined</Button>
                <Button color="error" variant="ghost">Error Ghost</Button>
            </div>
        </div>
}`,...(se=(le=j.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex items-center gap-2">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
        </div>
}`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const We=["Primary","Secondary","Error","WithPrependIcon","WithAppendIcon","Loading","Block","Disabled","SubmitButton","AllVariants","AllSizes"];export{S as AllSizes,j as AllVariants,x as Block,B as Disabled,v as Error,h as Loading,m as Primary,f as Secondary,b as SubmitButton,g as WithAppendIcon,y as WithPrependIcon,We as __namedExportsOrder,Me as default};
