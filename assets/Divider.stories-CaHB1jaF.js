import{j as n}from"./jsx-runtime-CpqJQ-2U.js";import"./iframe-DYtV9SfR.js";import"./preload-helper-C1FmrZbK.js";var i=(e=>(e.Middle="middle",e.Left="left",e.Right="right",e.LeftEnd="left-end",e.RightEnd="right-end",e))(i||{});function r(e){return"icon"in e?n.jsx("div",{className:"divider","data-position":e.position,children:n.jsx("div",{className:"divider__content",children:n.jsx("span",{className:"divider__content--icon",children:e.icon})})}):n.jsx("div",{className:"divider","data-position":e.position,children:n.jsxs("div",{className:"divider__content",children:[e.prependIcon&&n.jsx("span",{className:"divider__content--icon",children:e.prependIcon}),e.text,e.appendIcon&&n.jsx("span",{className:"divider__content--icon",children:e.appendIcon})]})})}try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"left"'},{value:'"right"'},{value:'"left-end"'},{value:'"right-end"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},prependIcon:{defaultValue:null,description:"",name:"prependIcon",required:!1,type:{name:"ReactNode"}},appendIcon:{defaultValue:null,description:"",name:"appendIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const I={component:r,argTypes:{position:{type:"string",options:Object.values(i),control:{type:"radio"}},text:{type:"string"},icon:{type:"string"},prependIcon:{type:"string"},appendIcon:{type:"string"}}},t={args:{text:"Sample Text",position:i.Middle}},o={args:{text:"Sample Text",position:i.Middle,prependIcon:n.jsx("i",{className:"icon icon-book"}),appendIcon:n.jsx("i",{className:"icon icon-chevron-down"})}},a={args:{position:i.Middle,icon:n.jsx("i",{className:"icon icon-book"})}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Sample Text',
    position: DividerPosition.Middle,
    prependIcon: <i className="icon icon-book"></i>,
    appendIcon: <i className="icon icon-chevron-down"></i>
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: DividerPosition.Middle,
    icon: <i className="icon icon-book"></i>
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const h=["Default","TextWithIcon","Icon"];export{t as Default,a as Icon,o as TextWithIcon,h as __namedExportsOrder,I as default};
