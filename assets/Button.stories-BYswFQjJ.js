import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const c=({variant:p="primary",status:y="filled",size:f="md",disabled:v,children:g,...h})=>x.jsx("button",{disabled:v,className:`button ${p} ${y} size-${f}`,...h,children:g});c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["DetailedHTMLProps"]};const T={component:c},e={args:{variant:"primary",status:"filled",children:"Primary"}},r={args:{variant:"secondary",status:"filled",children:"Secondary"}},a={args:{variant:"error",status:"filled",children:"Error"}};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    status: 'filled',
    children: 'Primary'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var n,i,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    status: 'filled',
    children: 'Secondary'
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    status: 'filled',
    children: 'Error'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const q=["Primary","Secondary","Error"];export{a as Error,e as Primary,r as Secondary,q as __namedExportsOrder,T as default};
