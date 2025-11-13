import{j as n}from"./jsx-runtime-BhKIUgJ2.js";import{r as s}from"./iframe-DppK3DH5.js";import"./preload-helper-PPVm8Dsz.js";const _=a=>{const e={linear:S,section:v};let{mode:t}=a;(!t||!["linear","section"].includes(t))&&(t??="linear");const r=l=>{const c=Math.min(Math.max(Number(l.target.value),a.min),a.max);a.onChange({...l,target:{...l.target,value:c.toString()}})},u=e[t];return n.jsx(u,{...a,onChange:r,mode:t})},v=({step:a=1,min:e,max:t,value:r,onChange:u})=>{const[l,c]=s.useState(1),[i,x]=s.useState(0),[m,g]=s.useState(0),o=s.useRef(null);return s.useEffect(()=>{const d=Math.max(Math.floor((t-e)/a),1);x(d),g(Math.max(0,Math.min(Math.floor((r-e)/a),d)))},[e,t,a,r]),s.useEffect(()=>{if(o.current){const d=o.current.offsetWidth;c((d-(16+i*2))/i)}},[i,o.current?.offsetWidth]),s.useEffect(()=>{r<e&&console.warn(`Slider: The value cannot be smaller than the minimum value (${e}).`),r>t&&console.warn(`Slider: The value cannot be larger than the maximum value (${t}).`)},[r,e,t]),n.jsxs("div",{className:"slider",ref:o,children:[n.jsx("div",{className:"slider__trackbar start-0",children:Array.from({length:m}).map((d,h)=>n.jsx("div",{style:{width:`${l}px`},className:"slider__track slider__track--filled"},h))}),n.jsx("input",{className:"w-full",type:"range",value:r,step:a,min:e,max:t,onInput:u}),n.jsx("div",{className:"slider__trackbar end-0",children:Array.from({length:i-m}).map((d,h)=>n.jsx("div",{style:{width:`${l}px`},className:"slider__track"},h))})]})},S=({step:a=1,min:e,max:t,value:r,onChange:u})=>{const[l,c]=s.useState(0),[i,x]=s.useState(0),[m,g]=s.useState(0),o=s.useRef(null);s.useEffect(()=>{const f=Math.max(Math.floor((t-e)/a),1);x(f),g(Math.max(0,Math.min(Math.floor((r-e)/a),f)))},[e,t,a,r]),s.useEffect(()=>{if(o.current){const f=o.current.offsetWidth;c((f-16)/i)}},[i,o.current?.offsetWidth]),s.useEffect(()=>{r<e&&console.warn(`Slider: The value cannot be smaller than the minimum value (${e}).`),r>t&&console.warn(`Slider: The value cannot be larger than the maximum value (${t}).`)},[r,e,t]);const d=l*m>2?l*m-2:0,h=l*(i-m)>2?l*(i-m)-2:0;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"slider",ref:o,children:[n.jsx("div",{className:"slider__trackbar start-0",children:n.jsx("div",{style:{width:`${d}px`},className:"slider__track slider__track--filled"})}),n.jsx("input",{className:"w-full",type:"range",value:r,step:a,min:e,max:t,onInput:u}),n.jsx("div",{className:"slider__trackbar end-0",children:n.jsx("div",{style:{width:`${h}px`},className:"slider__track"})})]}),n.jsxs("div",{className:"flex justify-between text-body-b2 mt-2",children:[n.jsx("span",{children:e}),n.jsx("span",{children:t})]})]})};try{_.displayName="Slider",_.__docgenInfo={description:"",displayName:"Slider",props:{step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"section"'},{value:'"linear"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"FormEventHandler<HTMLInputElement>"}}}}}catch{}const k={component:_,argTypes:{mode:{control:{type:"radio"},options:["linear","section"]}}},p={render:function({value:e,onChange:t,...r}){const[u,l]=s.useState(e);return s.useEffect(()=>{l(e)},[e]),n.jsx(_,{value:u,onChange:c=>{l(Number(c.target.value)),t?.(c)},...r})},args:{max:10,min:1,step:1,value:1,mode:"linear",onChange(){}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render({
    value,
    onChange: _onChange,
    ...props
  }) {
    const [_value, setValue] = useState(value);
    useEffect(() => {
      setValue(value);
    }, [value]);
    return <Slider value={_value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
      _onChange?.(e);
    }} {...props} />;
  },
  args: {
    max: 10,
    min: 1,
    step: 1,
    value: 1,
    mode: 'linear',
    onChange() {}
  }
}`,...p.parameters?.docs?.source}}};const N=["Default"];export{p as Default,N as __namedExportsOrder,k as default};
