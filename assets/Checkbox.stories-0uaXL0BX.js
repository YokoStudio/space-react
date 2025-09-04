import{j as u}from"./jsx-runtime-CpqJQ-2U.js";import{C as l}from"./Checkbox-B_Wu05ec.js";import{r as n}from"./iframe-DYtV9SfR.js";import"./clsx-B-dksMZM.js";import"./render-DgmoG-Gt.js";import"./use-active-press-CTAxzjaV.js";import"./use-disposables-TuCwlguh.js";import"./bugs-JreD_pGs.js";import"./index-Dn1IgrbV.js";import"./keyboard-D9urSswH.js";import"./disabled-BooyTcZw.js";import"./label-2y4tnfRp.js";import"./use-sync-refs-C89h9ZMy.js";import"./preload-helper-C1FmrZbK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,w={component:l,argTypes:{disabled:{type:"boolean",control:{type:"boolean"},table:{defaultValue:{summary:"false"},subcategory:"Props"}},checked:{control:{type:"boolean"},table:{subcategory:"Props"}},onChange:{type:"function",description:"The onChange method handles checkbox state changes and doesn't trigger when disabled.",table:{subcategory:"Actions"}},indeterminate:{type:"boolean",description:"The indeterminate property visually sets a checkbox to an intermediate state (neither checked nor unchecked). It takes precedence over the checked prop when both are applied.",table:{defaultValue:{summary:"false"},subcategory:"Props"}}}},f=e=>{const[h,r]=n.useState(e.checked);return n.useEffect(()=>{r(e.checked)},[e.checked]),u.jsx(l,{...e,indeterminate:e.indeterminate,checked:h,onChange:o=>{r(o),e.onChange(o)}})},t={render:f,args:{checked:!0,indeterminate:!1,disabled:!1,onChange(e){b("onChange")(e)}}},a={...t,args:{...t.args,disabled:!0}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
    onChange(value: CheckboxProps['checked']) {
      action('onChange')(value);
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const A=["Default","Disabled"];export{t as Default,a as Disabled,A as __namedExportsOrder,w as default};
