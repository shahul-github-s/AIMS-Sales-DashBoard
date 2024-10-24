import{r as l,j as e}from"./mui-913aed92.js";import{P as w,S as y,u as N}from"./index-9074475a.js";import{S as b}from"./index-f91c2928.js";import{R as k,B as A,X as S,Y as C,T as B,d as E,C as T,c as D}from"./recharts-469978c2.js";import{C as L,T as K}from"./Counter-b7ded99b.js";const d={walkIn:"var(--blue)",insta:"var(--peach)",wb:"var(--turquoise)",fb:"var(--yellow)",metaAd:"var(--red)",camp:"var(--green)"},I=l.memo(({active:m,payload:t})=>m&&t&&t.length?e.jsx("div",{className:"basic-tooltip",children:t[0].value}):null),O=()=>{const[m,t]=l.useState([{name:"Walk-in",value:{week:0,month:0,year:0},fill:d.walkIn},{name:"Insta",value:{week:0,month:0,year:0},fill:d.insta},{name:"WB",value:{week:0,month:0,year:0},fill:d.wb},{name:"FB",value:{week:0,month:0,year:0},fill:d.fb},{name:"Meta AD",value:{week:0,month:0,year:0},fill:d.metaAd},{name:"Camp",value:{week:0,month:0,year:0},fill:d.camp}]),[f,g]=l.useState(w[0]),[p,i]=l.useState(!1),x=async(r=1,u=new AbortController)=>{try{const n=await fetch("https://script.google.com/macros/s/AKfycbx7y2jDTv9nhvA0n4gcpxxBZ_mkZ54e06whrvkswLbMMesKitT0vyvK94Fvf7yUiMLs/exec",{signal:u.signal});n.ok;const h=await n.json();t(j=>j.map(o=>{var v,s,a;return{...o,value:{week:((v=h.find(c=>c.name===o.name))==null?void 0:v.value.week)||0,month:((s=h.find(c=>c.name===o.name))==null?void 0:s.value.month)||0,year:((a=h.find(c=>c.name===o.name))==null?void 0:a.value.year)||0}}}))}catch(n){n.name==="AbortError"?console.warn("Fetch aborted:",n):(console.error("Failed to fetch data:",n),r>0?(console.log("Retrying fetch..."),setTimeout(()=>x(r-1,u),2e3)):console.log("Fetching failed. Displaying previous data."))}};return l.useEffect(()=>{const r=new AbortController;x(1,r);const u=setInterval(()=>{r.abort(),x(1,new AbortController)},1e4);return()=>{clearInterval(u),r.abort()}},[]),l.useEffect(()=>{i(!0);const r=setTimeout(()=>{i(!1)},500);return()=>{clearTimeout(r)}},[f]),e.jsxs(y,{className:"card flex flex-col gap-4 p-5 h-[392px] xs:p-6 md:h-full",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between md:flex-col md:items-stretch lg:flex-row lg:items-center",children:[e.jsx("h2",{children:"Visits by Source"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(b,{value:f,onChange:g,options:w})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(k,{width:"100%",height:"100%",id:"visitsBySource",children:e.jsxs(A,{data:m,margin:{top:0,right:0,left:10,bottom:0},layout:"vertical",children:[e.jsx(S,{type:"number",hide:!0}),e.jsx(C,{type:"category",dataKey:"name",dx:-10,tickLine:!1,axisLine:!1}),e.jsx(B,{cursor:!1,content:e.jsx(I,{})}),e.jsx(E,{dataKey:`value.${f.value}`,isAnimationActive:p,maxBarSize:24,radius:8})]})})})]})},W=()=>{var j,o,v;const{width:m}=N(),[t,f]=l.useState(w[0]),[g,p]=l.useState(null),[i,x]=l.useState({week:{data:[],trend:0},month:{data:[],trend:0},year:{data:[],trend:0}});l.useEffect(()=>{(async()=>{try{const c=await(await fetch("https://script.google.com/macros/s/AKfycbx4HPz64rEusTJ4Nv2hURt9BReWEWQ9UK1t29zw7gIb5mmFm26qbOmQ3Fgmlx0D4vxl/exec")).json();x(c)}catch(a){console.error("Error fetching data:",a)}})()},[]);const r=(s,a)=>{p(a)},u=()=>{p(null)},n=()=>{let s=0;return i[t.value].data.forEach(a=>{s+=a.value}),s},h=({active:s,payload:a})=>s&&a&&a.length?e.jsx("div",{className:"basic-tooltip",children:a[0].value}):null;return e.jsxs(y,{className:"card flex flex-col p-5 h-[392px] xs:p-6 md:h-full",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{children:"Audio Overview"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(b,{value:t,onChange:f,options:w})})]}),e.jsxs("div",{className:"flex flex-col gap-4 mt-4 mb-6 lg:flex-row lg:items-center lg:justify-between",children:[e.jsx(L,{className:"h1",value:n(),prefix:""}),e.jsx(K,{labelClass:"text-label",value:(j=i[t.value])==null?void 0:j.trend,withBg:!0})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(k,{width:"99%",height:"100%",children:e.jsxs(A,{data:(o=i[t.value])==null?void 0:o.data,margin:!1,children:[e.jsx(T,{stroke:"var(--cartesian-grid)",vertical:!1,strokeDasharray:"8 8"}),e.jsx(S,{dataKey:"name",dy:10,hide:m<768,tickLine:!1,axisLine:!1}),e.jsx(C,{dx:-10,hide:m<768,tickLine:!1,axisLine:!1}),e.jsx(B,{cursor:!1,content:e.jsx(h,{})}),e.jsx(E,{dataKey:"value",maxBarSize:30,radius:8,children:(v=i[t.value])==null?void 0:v.data.map((s,a)=>e.jsx(D,{style:{transition:"fill var(--transition)"},fill:g===a?"var(--turquoise)":"var(--blue)",onMouseEnter:()=>r(s,a),onMouseLeave:u},`cell-${a}`))})]})})})]})};export{W as P,O as V};
