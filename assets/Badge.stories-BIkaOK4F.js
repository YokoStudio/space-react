import{j as a}from"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";var t=(e=>(e.Circle="circle",e.Rectangle="rectangle",e.Line="line",e))(t||{}),n=(e=>(e.Primary="primary",e.Secondary="secondary",e.Ghost="ghost",e.Error="error",e.Warning="warning",e.Success="success",e))(n||{});function b(e){return e.type==="line"?a.jsx("div",{"data-type":e.type,"data-variant":e.variant,className:"badge"}):a.jsx("div",{"data-type":e.type,"data-variant":e.variant,className:"badge",children:a.jsx("div",{className:"badge__content",children:"icon"in e?a.jsx("div",{className:"badge__content--icon",children:e.icon}):a.jsxs(a.Fragment,{children:["prependIcon"in e&&e.prependIcon&&a.jsx("div",{className:"badge__content--icon",children:e.prependIcon}),a.jsx("div",{className:"badge__content--text",children:e.text}),"appendIcon"in e&&e.appendIcon&&a.jsx("div",{className:"badge__content--icon",children:e.appendIcon})]})})})}const h={component:b,argTypes:{type:{options:Object.values(t),control:{type:"radio"}},variant:{options:Object.values(n),control:{type:"inline-radio"}},text:{type:"string",if:{arg:"type",neq:"line"},control:{type:"text"}},icon:{type:"string",if:{arg:"type",neq:"line"},control:{type:"text"}},prependIcon:{type:"string",if:{arg:"type",neq:"line"},control:{type:"text"}},appendIcon:{type:"string",if:{arg:"type",neq:"line"},control:{type:"text"}}}},r={args:{type:t.Rectangle,variant:n.Primary,text:"Sample Text"}},c={args:{type:t.Rectangle,variant:n.Primary,text:"Sample Text",prependIcon:a.jsx("i",{className:"icon icon-book"})}},i={args:{type:t.Rectangle,variant:n.Primary,icon:a.jsx("i",{className:"icon icon-book"})}},o={args:{type:t.Rectangle,variant:n.Primary}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: BadgeType.Rectangle,
    variant: BadgeVariant.Primary,
    text: 'Sample Text'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: BadgeType.Rectangle,
    variant: BadgeVariant.Primary,
    text: 'Sample Text',
    prependIcon: <i className="icon icon-book" />
  }
}`,...(g=(m=c.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,x,u;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: BadgeType.Rectangle,
    variant: BadgeVariant.Primary,
    icon: <i className="icon icon-book" />
  }
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,j,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: BadgeType.Rectangle,
    variant: BadgeVariant.Primary
  }
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const N=["Text","TextWithIcon","Icon","Status"];export{i as Icon,o as Status,r as Text,c as TextWithIcon,N as __namedExportsOrder,h as default};
