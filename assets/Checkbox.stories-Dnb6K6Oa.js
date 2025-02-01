import{j as u}from"./jsx-runtime-DR9Q75dM.js";import{C as m,a as b}from"./chunk-D5ZWXAHU-D-zQfqpj.js";import{r as n}from"./index-DRjF_FHU.js";import"./render-C2leH1Nx.js";import"./use-active-press-BWFZXNjd.js";import"./use-disposables-yAv6qWhn.js";import"./keyboard-6XayD_ap.js";import"./index-CwCTVE6e.js";import"./label-B2Sj7P4A.js";import"./v4-CQkTLCs1.js";const v={component:m,argTypes:{disabled:{type:"boolean",control:{type:"boolean"},table:{defaultValue:{summary:"false"},subcategory:"Props"}},checked:{control:{type:"boolean"},table:{subcategory:"Props"}},onChange:{type:"function",description:"The onChange method handles checkbox state changes and doesn't trigger when disabled.",table:{subcategory:"Actions"}},indeterminate:{type:"boolean",description:"The indeterminate property visually sets a checkbox to an intermediate state (neither checked nor unchecked). It takes precedence over the checked prop when both are applied.",table:{defaultValue:{summary:"false"},subcategory:"Props"}}}},f=e=>{const[h,r]=n.useState(e.checked);return n.useEffect(()=>{r(e.checked)},[e.checked]),u.jsx(m,{...e,indeterminate:e.indeterminate,checked:h,onChange:o=>{r(o),e.onChange(o)}})},t={render:f,args:{checked:!0,indeterminate:!1,disabled:!1,onChange(e){b("onChange")(e)}}},a={...t,args:{...t.args,disabled:!0}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
    onChange(value: CheckboxProps['checked']) {
      action('onChange')(value);
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Default","Disabled"];export{t as Default,a as Disabled,S as __namedExportsOrder,v as default};
