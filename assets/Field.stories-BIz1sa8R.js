import{j as e}from"./jsx-runtime-CpqJQ-2U.js";import{r as d}from"./iframe-DYtV9SfR.js";import{I as c}from"./Input-BXCLYwEf.js";import{c as C}from"./clsx-B-dksMZM.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-Cay0vh91.js";import"./Icon-CXtZxVve.js";import"./render-DgmoG-Gt.js";import"./disabled-BooyTcZw.js";import"./label-2y4tnfRp.js";import"./use-sync-refs-C89h9ZMy.js";const h=()=>e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.50003 4.43941C8.77617 4.43941 9.00003 4.66327 9.00003 4.93941V9.27275C9.00003 9.54889 8.77617 9.77275 8.50003 9.77275C8.22389 9.77275 8.00003 9.54889 8.00003 9.27275V4.93941C8.00003 4.66327 8.22389 4.43941 8.50003 4.43941Z",fill:"currentColor"}),e.jsx("path",{d:"M7.83336 11.6061C7.83336 11.2379 8.13184 10.9394 8.50003 10.9394C8.86822 10.9394 9.16669 11.2379 9.16669 11.6061C9.16669 11.9743 8.86822 12.2728 8.50003 12.2728C8.13184 12.2728 7.83336 11.9743 7.83336 11.6061Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8C2 4.41015 4.91015 1.5 8.5 1.5C12.0899 1.5 15 4.41015 15 8C15 11.5899 12.0899 14.5 8.5 14.5C4.91015 14.5 2 11.5899 2 8ZM8.5 2.5C5.46243 2.5 3 4.96243 3 8C3 11.0376 5.46243 13.5 8.5 13.5C11.5376 13.5 14 11.0376 14 8C14 4.96243 11.5376 2.5 8.5 2.5Z",fill:"currentColor"})]})}),t=({label:r,children:s,required:i,message:l,mode:p,className:f})=>{const x=[c],g=d.Children.map(s,a=>d.isValidElement(a)&&x.includes(a.type)?a:(console.warn("Invalid child type:",a),null));return e.jsxs("div",{className:C("flex flex-col",f),children:[e.jsxs("label",{htmlFor:"text",className:`self-start relative bg-neutral-1-default px-0.5 transition ease-in-out ${p==="compact"&&"-mb-2 ms-2"}`,children:[r,i&&e.jsx("span",{className:"ms-1 text-error-1-default",children:"*"})]}),g,l&&e.jsxs("div",{className:"flex gap-1 text-caption-c1 text-neutral-5-default mt-1",children:[e.jsx(h,{}),l]})]})};try{t.displayName="Field",t.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I={component:t},n={render({label:r,required:s,message:i,mode:l}){return e.jsx(t,{label:r,required:s,message:i,mode:l,children:e.jsx(c,{})})},args:{children:null,label:"Email Address",required:!0,message:"Enter valid email",mode:"compact"}};var o,m,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render({
    label,
    required,
    message,
    mode
  }) {
    return <Field label={label} required={required} message={message} mode={mode}>
                <Input />
            </Field>;
  },
  args: {
    children: null,
    label: 'Email Address',
    required: true,
    message: 'Enter valid email',
    mode: 'compact'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,I as default};
