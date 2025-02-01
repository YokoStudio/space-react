import{j as n}from"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";var i=(e=>(e.Middle="middle",e.Left="left",e.Right="right",e.LeftEnd="left-end",e.RightEnd="right-end",e))(i||{});function u(e){return"icon"in e?n.jsx("div",{className:"divider","data-position":e.position,children:n.jsx("div",{className:"divider__content",children:n.jsx("span",{className:"divider__content--icon",children:e.icon})})}):n.jsx("div",{className:"divider","data-position":e.position,children:n.jsxs("div",{className:"divider__content",children:[e.prependIcon&&n.jsx("span",{className:"divider__content--icon",children:e.prependIcon}),e.text,e.appendIcon&&n.jsx("span",{className:"divider__content--icon",children:e.appendIcon})]})})}const I={component:u,argTypes:{position:{type:"string",options:Object.values(i),control:{type:"radio"}},text:{type:"string"},icon:{type:"string"},prependIcon:{type:"string"},appendIcon:{type:"string"}}},o={args:{text:"Sample Text",position:i.Middle}},t={args:{text:"Sample Text",position:i.Middle,prependIcon:n.jsx("i",{className:"icon icon-book"}),appendIcon:n.jsx("i",{className:"icon icon-chevron-down"})}},s={args:{position:i.Middle,icon:n.jsx("i",{className:"icon icon-book"})}};var c,a,r;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle,
    prependIcon: <i className="icon icon-book"></i>,
    appendIcon: <i className="icon icon-chevron-down"></i>
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,x,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    position: DividerPosition.Middle,
    icon: <i className="icon icon-book"></i>
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const j=["Default","TextWithIcon","Icon"];export{o as Default,s as Icon,t as TextWithIcon,j as __namedExportsOrder,I as default};
