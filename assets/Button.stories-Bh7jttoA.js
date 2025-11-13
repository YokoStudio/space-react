import{j as e}from"./jsx-runtime-BhKIUgJ2.js";import{B as r}from"./Button-CmuF73o5.js";import{I as x}from"./Icon-_yxSzOPi.js";import"./iframe-DppK3DH5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Spinner-BK2rorbI.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,I={component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with support for multiple variants, colors, sizes, loading states, and icons. Built with accessibility in mind and follows UI kit best practices."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Button content",table:{type:{summary:"ReactNode"}}},color:{control:"radio",options:["primary","secondary","error"],description:"Color scheme of the button",table:{defaultValue:{summary:"primary"},type:{summary:"primary | secondary | error"}}},variant:{control:"radio",options:["filled","outlined","ghost"],description:"Visual style variant of the button",table:{defaultValue:{summary:"filled"},type:{summary:"filled | outlined | ghost"}}},size:{control:"radio",options:["xs","sm","md","lg","xl"],description:"Size of the button",table:{defaultValue:{summary:"md"},type:{summary:"xs | sm | md | lg | xl"}}},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows loading spinner and disables the button",table:{defaultValue:{summary:"false"}}},block:{control:"boolean",description:"Makes the button full width",table:{defaultValue:{summary:"false"}}},type:{control:"radio",options:["button","submit","reset"],description:"HTML button type",table:{defaultValue:{summary:"button"},category:"Form"}},prependIcon:{control:!1,description:"Icon or element to display before the button content",table:{type:{summary:"string | ReactNode"}}},appendIcon:{control:!1,description:"Icon or element to display after the button content",table:{type:{summary:"string | ReactNode"}}},ariaLabel:{control:"text",description:"Accessible label for the button",table:{category:"Accessibility"}},ariaDescribedby:{control:"text",description:"ID of element that describes the button",table:{category:"Accessibility"}},onClick:{action:"clicked",description:"Callback fired when the button is clicked",table:{category:"Events"}}}},t={args:{children:"Button",color:"primary",variant:"filled",size:"md",onClick:o("clicked")}},a={args:{...t.args,color:"primary",children:"Primary Button"}},n={args:{...t.args,color:"secondary",children:"Secondary Button"}},c={args:{...t.args,color:"error",children:"Error Button"}},s={args:{...t.args,children:"Search",prependIcon:"search"}},i={args:{...t.args,children:"Clear",appendIcon:"cross-circle"}},l={args:{...t.args,children:"Action",prependIcon:"search",appendIcon:"cross-circle"}},d={args:{...t.args,children:"Loading Button",loading:!0}},u={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs("div",{className:"border border-neutral-6-default rounded p-4",children:[e.jsx("p",{className:"text-sm text-neutral-2-default mb-2",children:"Container width: 100% (384px)"}),e.jsx(r,{block:!0,onClick:o("clicked"),children:"Block Button (Full Width)"})]}),e.jsxs("div",{className:"border border-neutral-6-default rounded p-4",children:[e.jsx("p",{className:"text-sm text-neutral-2-default mb-2",children:"Container width: 100% (384px)"}),e.jsx(r,{onClick:o("clicked"),children:"Regular Button (Auto Width)"})]})]})},m={args:{...t.args,children:"Disabled Button",disabled:!0}},p={args:{...t.args,children:"Submit Form",type:"submit"}},h={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"primary",variant:"filled",onClick:o("clicked"),children:"Primary Filled"}),e.jsx(r,{color:"primary",variant:"outlined",onClick:o("clicked"),children:"Primary Outlined"}),e.jsx(r,{color:"primary",variant:"ghost",onClick:o("clicked"),children:"Primary Ghost"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"secondary",variant:"filled",onClick:o("clicked"),children:"Secondary Filled"}),e.jsx(r,{color:"secondary",variant:"outlined",onClick:o("clicked"),children:"Secondary Outlined"}),e.jsx(r,{color:"secondary",variant:"ghost",onClick:o("clicked"),children:"Secondary Ghost"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{color:"error",variant:"filled",onClick:o("clicked"),children:"Error Filled"}),e.jsx(r,{color:"error",variant:"outlined",onClick:o("clicked"),children:"Error Outlined"}),e.jsx(r,{color:"error",variant:"ghost",onClick:o("clicked"),children:"Error Ghost"})]})]})},g={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx(r,{size:"xs",onClick:o("clicked"),children:"Extra Small"}),e.jsx(r,{size:"sm",onClick:o("clicked"),children:"Small"}),e.jsx(r,{size:"md",onClick:o("clicked"),children:"Medium"}),e.jsx(r,{size:"lg",onClick:o("clicked"),children:"Large"}),e.jsx(r,{size:"xl",onClick:o("clicked"),children:"Extra Large"})]})},k={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{prependIcon:e.jsx(x,{name:"search",size:"md"}),onClick:o("clicked"),children:"Custom Icon"}),e.jsx(r,{appendIcon:e.jsx(x,{name:"cross-circle",size:"md"}),onClick:o("clicked"),children:"Custom Icon"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'filled',
    size: 'md',
    onClick: action('clicked')
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'primary',
    children: 'Primary Button'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'secondary',
    children: 'Secondary Button'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error',
    children: 'Error Button'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Search',
    prependIcon: 'search' as const
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Clear',
    appendIcon: 'cross-circle' as const
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Action',
    prependIcon: 'search' as const,
    appendIcon: 'cross-circle' as const
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Loading Button',
    loading: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4 w-96">
            <div className="border border-neutral-6-default rounded p-4">
                <p className="text-sm text-neutral-2-default mb-2">
                    Container width: 100% (384px)
                </p>
                <Button block onClick={action('clicked')}>
                    Block Button (Full Width)
                </Button>
            </div>
            <div className="border border-neutral-6-default rounded p-4">
                <p className="text-sm text-neutral-2-default mb-2">
                    Container width: 100% (384px)
                </p>
                <Button onClick={action('clicked')}>
                    Regular Button (Auto Width)
                </Button>
            </div>
        </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Disabled Button',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: 'Submit Form',
    type: 'submit'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button color="primary" variant="filled" onClick={action('clicked')}>
                    Primary Filled
                </Button>
                <Button color="primary" variant="outlined" onClick={action('clicked')}>
                    Primary Outlined
                </Button>
                <Button color="primary" variant="ghost" onClick={action('clicked')}>
                    Primary Ghost
                </Button>
            </div>
            <div className="flex gap-2">
                <Button color="secondary" variant="filled" onClick={action('clicked')}>
                    Secondary Filled
                </Button>
                <Button color="secondary" variant="outlined" onClick={action('clicked')}>
                    Secondary Outlined
                </Button>
                <Button color="secondary" variant="ghost" onClick={action('clicked')}>
                    Secondary Ghost
                </Button>
            </div>
            <div className="flex gap-2">
                <Button color="error" variant="filled" onClick={action('clicked')}>
                    Error Filled
                </Button>
                <Button color="error" variant="outlined" onClick={action('clicked')}>
                    Error Outlined
                </Button>
                <Button color="error" variant="ghost" onClick={action('clicked')}>
                    Error Ghost
                </Button>
            </div>
        </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex items-center gap-2 flex-wrap">
            <Button size="xs" onClick={action('clicked')}>
                Extra Small
            </Button>
            <Button size="sm" onClick={action('clicked')}>
                Small
            </Button>
            <Button size="md" onClick={action('clicked')}>
                Medium
            </Button>
            <Button size="lg" onClick={action('clicked')}>
                Large
            </Button>
            <Button size="xl" onClick={action('clicked')}>
                Extra Large
            </Button>
        </div>
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex gap-2">
            <Button prependIcon={<Icon name="search" size="md" />} onClick={action('clicked')}>
                Custom Icon
            </Button>
            <Button appendIcon={<Icon name="cross-circle" size="md" />} onClick={action('clicked')}>
                Custom Icon
            </Button>
        </div>
}`,...k.parameters?.docs?.source}}};const j=["Default","Primary","Secondary","Error","WithPrependIcon","WithAppendIcon","WithBothIcons","Loading","Block","Disabled","SubmitButton","AllVariants","AllSizes","WithCustomIcon"];export{g as AllSizes,h as AllVariants,u as Block,t as Default,m as Disabled,c as Error,d as Loading,a as Primary,n as Secondary,p as SubmitButton,i as WithAppendIcon,l as WithBothIcons,k as WithCustomIcon,s as WithPrependIcon,j as __namedExportsOrder,I as default};
