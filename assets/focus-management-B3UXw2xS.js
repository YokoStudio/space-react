import{u as N}from"./render-BP9QO1k2.js";import{u as F}from"./use-disposables-Bc217F-y.js";let m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),h=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var x=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(x||{}),A=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(A||{}),y=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(y||{});function f(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(m)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}function p(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var S=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(S||{});function L(e,t=0){var r;return e===((r=F(e))==null?void 0:r.body)?!1:N(t,{0(){return e.matches(m)},1(){let n=e;for(;n!==null;){if(n.matches(m))return!0;n=n.parentElement}return!1}})}var w=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(w||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let M=["textarea","input"].join(",");function I(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,M))!=null?r:!1}function O(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),s=t(n);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function g(e,t){return _(f(),t,{relativeTo:e})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:i=[]}={}){let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?O(e):e:t&64?p(e):f(e);i.length>0&&o.length>1&&(o=o.filter(u=>!i.some(d=>d!=null&&"current"in d?(d==null?void 0:d.current)===u:d===u))),n=n??s.activeElement;let E=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=t&32?{preventScroll:!0}:{},c=0,a=o.length,l;do{if(c>=a||c+a<=0)return 0;let u=b+c;if(t&16)u=(u+a)%a;else{if(u<0)return 3;if(u>=a)return 1}l=o[u],l==null||l.focus(v),c+=E}while(l!==s.activeElement);return t&6&&I(l)&&l.select(),2}export{L as A,x as F,_ as P,A as T,O as _,S as h,g as j};
