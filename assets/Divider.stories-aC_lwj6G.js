import{j as n}from"./jsx-runtime-BhKIUgJ2.js";import"./iframe-DppK3DH5.js";import"./preload-helper-PPVm8Dsz.js";var i=(e=>(e.Middle="middle",e.Left="left",e.Right="right",e.LeftEnd="left-end",e.RightEnd="right-end",e))(i||{});function r(e){return"icon"in e?n.jsx("div",{className:"divider","data-position":e.position,children:n.jsx("div",{className:"divider__content",children:n.jsx("span",{className:"divider__content--icon",children:e.icon})})}):n.jsx("div",{className:"divider","data-position":e.position,children:n.jsxs("div",{className:"divider__content",children:[e.prependIcon&&n.jsx("span",{className:"divider__content--icon",children:e.prependIcon}),e.text,e.appendIcon&&n.jsx("span",{className:"divider__content--icon",children:e.appendIcon})]})})}try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"left"'},{value:'"right"'},{value:'"left-end"'},{value:'"right-end"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},prependIcon:{defaultValue:null,description:"",name:"prependIcon",required:!1,type:{name:"ReactNode"}},appendIcon:{defaultValue:null,description:"",name:"appendIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const l={component:r,argTypes:{position:{type:"string",options:Object.values(i),control:{type:"radio"}},text:{type:"string"},icon:{type:"string"},prependIcon:{type:"string"},appendIcon:{type:"string"}}},t={args:{text:"Sample Text",position:i.Middle}},o={args:{text:"Sample Text",position:i.Middle,prependIcon:n.jsx("i",{className:"icon icon-book"}),appendIcon:n.jsx("i",{className:"icon icon-chevron-down"})}},a={args:{position:i.Middle,icon:n.jsx("i",{className:"icon icon-book"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle,
    prependIcon: <i className="icon icon-book"></i>,
    appendIcon: <i className="icon icon-chevron-down"></i>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    position: DividerPosition.Middle,
    icon: <i className="icon icon-book"></i>
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","TextWithIcon","Icon"];export{t as Default,a as Icon,o as TextWithIcon,p as __namedExportsOrder,l as default};
