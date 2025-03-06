import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";const k=r=>{const e={linear:b,section:N};let{mode:t}=r;(!t||!["linear","section"].includes(t))&&(t??(t="linear"));const a=l=>{const u=Math.min(Math.max(Number(l.target.value),r.min),r.max);r.onChange({...l,target:{...l.target,value:u}})},d=e[t];return s.jsx(d,{...r,onChange:a,mode:t})},N=({step:r=1,min:e,max:t,value:a,onChange:d})=>{var m;const[l,u]=n.useState(1),[c,_]=n.useState(0),[h,g]=n.useState(0),o=n.useRef(null);return n.useEffect(()=>{const i=Math.max(Math.floor((t-e)/r),1);_(i),g(Math.max(0,Math.min(Math.floor((a-e)/r),i)))},[e,t,r,a]),n.useEffect(()=>{if(o.current){const i=o.current.offsetWidth;u((i-(16+c*2))/c)}},[c,(m=o.current)==null?void 0:m.offsetWidth]),n.useEffect(()=>{a<e&&console.warn(`Slider: The value cannot be smaller than the minimum value (${e}).`),a>t&&console.warn(`Slider: The value cannot be larger than the maximum value (${t}).`)},[a,e,t]),s.jsxs("div",{className:"slider",ref:o,children:[s.jsx("div",{className:"slider__trackbar start-0",children:Array.from({length:h}).map((i,f)=>s.jsx("div",{style:{width:`${l}px`},className:"slider__track slider__track--filled"},f))}),s.jsx("input",{className:"w-full",type:"range",value:a,step:r,min:e,max:t,onInput:d}),s.jsx("div",{className:"slider__trackbar end-0",children:Array.from({length:c-h}).map((i,f)=>s.jsx("div",{style:{width:`${l}px`},className:"slider__track"},f))})]})},b=({step:r=1,min:e,max:t,value:a,onChange:d})=>{var f;const[l,u]=n.useState(0),[c,_]=n.useState(0),[h,g]=n.useState(0),o=n.useRef(null);n.useEffect(()=>{const x=Math.max(Math.floor((t-e)/r),1);_(x),g(Math.max(0,Math.min(Math.floor((a-e)/r),x)))},[e,t,r,a]),n.useEffect(()=>{if(o.current){const x=o.current.offsetWidth;u((x-16)/c)}},[c,(f=o.current)==null?void 0:f.offsetWidth]),n.useEffect(()=>{a<e&&console.warn(`Slider: The value cannot be smaller than the minimum value (${e}).`),a>t&&console.warn(`Slider: The value cannot be larger than the maximum value (${t}).`)},[a,e,t]);const m=l*h>2?l*h-2:0,i=l*(c-h)>2?l*(c-h)-2:0;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"slider",ref:o,children:[s.jsx("div",{className:"slider__trackbar start-0",children:s.jsx("div",{style:{width:`${m}px`},className:"slider__track slider__track--filled"})}),s.jsx("input",{className:"w-full",type:"range",value:a,step:r,min:e,max:t,onInput:d}),s.jsx("div",{className:"slider__trackbar end-0",children:s.jsx("div",{style:{width:`${i}px`},className:"slider__track"})})]}),s.jsxs("div",{className:"flex justify-between text-body-b2 mt-2",children:[s.jsx("span",{children:e}),s.jsx("span",{children:t})]})]})},M={component:k,argTypes:{mode:{control:{type:"radio"},options:["linear","section"]}}},p={render:function({value:e,onChange:t,...a}){const[d,l]=n.useState(e);return n.useEffect(()=>{l(e)},[e]),s.jsx(k,{value:d,onChange:u=>l(Number(u.target.value)),...a})},args:{max:10,min:1,step:1,value:1,mode:"linear",onChange(){}}};var S,v,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render({
    value,
    onChange: _,
    ...props
  }) {
    const [_value, setValue] = useState(value);
    useEffect(() => {
      setValue(value);
    }, [value]);
    return <Slider value={_value} onChange={e => setValue(Number(e.target.value))} {...props} />;
  },
  args: {
    max: 10,
    min: 1,
    step: 1,
    value: 1,
    mode: 'linear',
    onChange() {}
  }
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const W=["Default"];export{p as Default,W as __namedExportsOrder,M as default};
