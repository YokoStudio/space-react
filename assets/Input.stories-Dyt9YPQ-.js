import{j as e}from"./jsx-runtime-B2VhGOcv.js";import{r as x}from"./iframe-CQl7QfkW.js";import{I as r}from"./Input-CcLJcv-W.js";import{I as g}from"./Icon-V1Tw3JNA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Spinner-XkAzZvBJ.js";import"./Button-C324-9FA.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,B={component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile input component that supports controlled and uncontrolled modes, with built-in support for icons, loading states, and clear functionality."}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Size of the input field",table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},type:{control:"select",options:["text","email","password","number","tel","url","search","date","time","datetime-local"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Controlled value (for controlled components)",table:{category:"Form"}},defaultValue:{control:"text",description:"Default value (for uncontrolled components)",table:{category:"Form"}},id:{control:"text",description:"HTML id attribute for form association",table:{category:"Form"}},name:{control:"text",description:"HTML name attribute for form submission",table:{category:"Form"}},error:{control:"boolean",description:"Shows error state styling",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables the input",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows loading spinner",table:{defaultValue:{summary:"false"}}},clearButton:{control:"boolean",description:"Shows clear button when input has value (only visible when input has content)",table:{defaultValue:{summary:"false"}}},prependIcon:{control:!1,description:"Icon or element to display before the input",table:{type:{summary:"ReactNode"}}},autoFocus:{control:"boolean",description:"Automatically focus the input on mount",table:{category:"Form"}},onChange:{action:"changed",description:"Callback fired when the value changes",table:{category:"Events"}},onFocus:{action:"focused",description:"Callback fired when the input receives focus",table:{category:"Events"}},onBlur:{action:"blurred",description:"Callback fired when the input loses focus",table:{category:"Events"}}}},a={args:{placeholder:"Enter text...",size:"md",type:"text",onChange:m("onChange"),onFocus:m("onFocus"),onBlur:m("onBlur")}},t={args:{...a.args,defaultValue:"Initial value"}},I=f=>{const[y,b]=x.useState("Controlled value");return e.jsx(r,{...f,value:y,onChange:h=>{b(h),m("onChange")(h)}})},o={render:I,args:{...a.args}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(r,{placeholder:"Small input",size:"sm"}),e.jsx(r,{placeholder:"Medium input",size:"md"}),e.jsx(r,{placeholder:"Large input",size:"lg"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"}),e.jsx(r,{type:"tel",placeholder:"Phone input"}),e.jsx(r,{type:"url",placeholder:"URL input"}),e.jsx(r,{type:"search",placeholder:"Search input"})]})},l={args:{...a.args,placeholder:"Search...",prependIcon:e.jsx(g,{name:"search",size:"md"})}},c={args:{...a.args,placeholder:"Type to see clear button",clearButton:!0,defaultValue:"Sample text"}},p={args:{...a.args,placeholder:"Loading state",loading:!0}},u={args:{...a.args,placeholder:"Search with clear",prependIcon:e.jsx(g,{name:"search",size:"md"}),clearButton:!0,defaultValue:"Search term"}},i={args:{...a.args,placeholder:"Input with error",error:!0,defaultValue:"Invalid value"}},d={args:{...a.args,placeholder:"Disabled input",disabled:!0,defaultValue:"Cannot edit"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    type: 'text',
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur')
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'Initial value'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ControlledInput,
  args: {
    ...Default.args
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
            <Input placeholder="Small input" size="sm" />
            <Input placeholder="Medium input" size="md" />
            <Input placeholder="Large input" size="lg" />
        </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
            <Input type="text" placeholder="Text input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input type="number" placeholder="Number input" />
            <Input type="tel" placeholder="Phone input" />
            <Input type="url" placeholder="URL input" />
            <Input type="search" placeholder="Search input" />
        </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Search...',
    prependIcon: <Icon name="search" size="md" />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Type to see clear button',
    clearButton: true,
    defaultValue: 'Sample text'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Loading state',
    loading: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Search with clear',
    prependIcon: <Icon name="search" size="md" />,
    clearButton: true,
    defaultValue: 'Search term'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Input with error',
    error: true,
    defaultValue: 'Invalid value'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit'
  }
}`,...d.parameters?.docs?.source}}};const E=["Default","WithValue","Controlled","Sizes","Types","WithPrependIcon","WithClearButton","WithLoading","WithIconAndClear","Error","Disabled"];export{o as Controlled,a as Default,d as Disabled,i as Error,n as Sizes,s as Types,c as WithClearButton,u as WithIconAndClear,p as WithLoading,l as WithPrependIcon,t as WithValue,E as __namedExportsOrder,B as default};
