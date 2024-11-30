import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const m=({placeholder:f,error:g=!1,disabled:b=!1,...h})=>s.jsx(s.Fragment,{children:s.jsx("input",{className:`input ${g&&"error"}`,disabled:b,placeholder:f,...h})});m.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["DetailedHTMLProps"]};const y={component:m},e={args:{placeholder:"yoko search..."}},r={args:{...e.args,error:!0}},a={args:{...e.args,disabled:!0}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'yoko search...'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const j=["Default","Error","Disable"];export{e as Default,a as Disable,r as Error,j as __namedExportsOrder,y as default};
