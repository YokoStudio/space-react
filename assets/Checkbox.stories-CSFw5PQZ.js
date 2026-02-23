import{j as d}from"./jsx-runtime-B2VhGOcv.js";import{C as s}from"./Checkbox-BUa-WWS4.js";import{r as n}from"./iframe-CQl7QfkW.js";import"./index-CCGI1aPx.js";import"./index-DlBJohmm.js";import"./index-CdXghlIj.js";import"./index-8JBuHxPi.js";import"./index-IKAdH0lP.js";import"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,x={component:s,argTypes:{disabled:{type:"boolean",control:{type:"boolean"},table:{defaultValue:{summary:"false"},subcategory:"Props"}},checked:{control:{type:"boolean"},table:{subcategory:"Props"}},onChange:{type:"function",description:"The onChange method handles checkbox state changes and doesn't trigger when disabled.",table:{subcategory:"Actions"}},indeterminate:{type:"boolean",description:"The indeterminate property visually sets a checkbox to an intermediate state (neither checked nor unchecked). It takes precedence over the checked prop when both are applied.",table:{defaultValue:{summary:"false"},subcategory:"Props"}}}},p=e=>{const[c,r]=n.useState(e.checked);return n.useEffect(()=>{r(e.checked)},[e.checked]),d.jsx(s,{...e,indeterminate:e.indeterminate,checked:c,onChange:o=>{r(o),e.onChange(o)}})},t={render:p,args:{checked:!0,indeterminate:!1,disabled:!1,onChange(e){i("onChange")(e)}}},a={...t,args:{...t.args,disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
    onChange(value: CheckboxProps['checked']) {
      action('onChange')(value);
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const _=["Default","Disabled"];export{t as Default,a as Disabled,_ as __namedExportsOrder,x as default};
