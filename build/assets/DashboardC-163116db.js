import{r as d,j as e}from"./mui-306f5cf6.js";import{u as g,a as y,P as c,S as m,b as p,C as t,n as k,f as N,A as R,e as F,h}from"./index-ef19bcd1.js";import{P as A,V as T}from"./ProfitBars-f7414442.js";import{R as v,A as S,C as w,X as C,Y as $,T as f,c as u,P as B,d as P,e as D,B as K,f as x}from"./recharts-68aed0f6.js";import"./Counter-0febfbdf.js";const O=[{name:"Mon",value:{week:{newRevenue:4e3,orders:2400,refunds:650},month:{newRevenue:6584,orders:15201,refunds:3750},year:{newRevenue:6300,orders:15900,refunds:7890}}},{name:"Tue",value:{week:{newRevenue:5684,orders:2514,refunds:1298},month:{newRevenue:8999,orders:5605,refunds:402},year:{newRevenue:18900,orders:6300,refunds:9510}}},{name:"Wed",value:{week:{newRevenue:7854,orders:1500,refunds:3655},month:{newRevenue:18900,orders:25600,refunds:2560},year:{newRevenue:16540,orders:10800,refunds:3654}}},{name:"Thu",value:{week:{newRevenue:12874,orders:6587,refunds:14875},month:{newRevenue:4200,orders:1500,refunds:3600},year:{newRevenue:31e3,orders:8974,refunds:6954}}},{name:"Fri",value:{week:{newRevenue:7895,orders:10457,refunds:7854},month:{newRevenue:14800,orders:2e4,refunds:5604},year:{newRevenue:9800,orders:10365,refunds:3659}}},{name:"Sat",value:{week:{newRevenue:8977,orders:4574,refunds:10500},month:{newRevenue:10254,orders:8755,refunds:7895},year:{newRevenue:26900,orders:12800,refunds:7854}}},{name:"Sun",value:{week:{newRevenue:4e3,orders:2400,refunds:400},month:{newRevenue:36900,orders:15800,refunds:6542},year:{newRevenue:45874,orders:6484,refunds:10548}}}],I=({active:r,payload:a,label:s})=>r?e.jsxs("div",{className:"bg-white p-4 rounded-[10px] shadow-lg min-w-[200px] dark:bg-body",children:[e.jsx("p",{className:"text-sm font-bold uppercase text-header mb-2",children:N(s)}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-[2px]",style:{background:a[0].color}}),"New Revenue"]}),"$",a[0].value.toFixed(2)]}),e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-[2px]",style:{background:a[1].color}}),"Orders"]}),"$",a[1].value.toFixed(2)]}),e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-[2px]",style:{background:a[2].color}}),"Refunds"]}),"$",a[2].value.toFixed(2)]})]})]}):null,W=()=>{const{width:r}=g(),{theme:a}=y(),[s,n]=d.useState(c[0]),[l,i]=d.useState(!1);return d.useEffect(()=>(i(!0),setTimeout(()=>i(!1),2e3),()=>i(!1)),[s]),e.jsxs(m,{className:"card flex flex-col h-[392px] p-5 md:h-full",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between",children:[e.jsx("h2",{children:"Audience Overview"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(p,{options:c,value:s,onChange:n})})]}),e.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-3 my-4 md:justify-end",children:[e.jsx(t,{color:"var(--turquoise)",label:"New Revenue"}),e.jsx(t,{color:"var(--blue)",label:"Orders"}),e.jsx(t,{color:"var(--peach)",label:"Refunds"})]}),e.jsx("div",{className:"flex-1 overflow-hidden xs:-ml-6 md:-mr-2",children:e.jsx(v,{width:"99%",height:"100%",children:e.jsxs(S,{data:O,margin:!1,children:[e.jsx(w,{vertical:!1,stroke:"var(--cartesian-grid)",strokeDasharray:"8 8"}),e.jsx(C,{dataKey:"name",tickLine:!1,axisLine:!1,hide:r<414,dy:10}),e.jsx($,{tickLine:!1,axisLine:!1,hide:r<414,dx:-10,tickFormatter:b=>k(b,0)}),e.jsx(f,{cursor:!1,content:e.jsx(I,{})}),e.jsx(u,{type:"linear",isAnimationActive:l,activeDot:!1,dataKey:`value.${s.value}.newRevenue`,stackId:"1",stroke:"var(--peach)",fill:a==="light"?"#FFF7F3":"#3B300A"}),e.jsx(u,{type:"linear",isAnimationActive:l,activeDot:!1,dataKey:`value.${s.value}.orders`,stackId:"1",stroke:"var(--blue)",fill:a==="light"?"#F1F7FF":"#14344A"}),e.jsx(u,{type:"linear",isAnimationActive:l,activeDot:!1,dataKey:`value.${s.value}.refunds`,stackId:"1",stroke:"var(--turquoise)",fill:a==="light"?"#F4FFFF":"#1B3838"})]})})})]})},o=[{name:"Positive",value:{week:400,month:600,year:800},color:"var(--turquoise)"},{name:"Neutral",value:{week:200,month:150,year:250},color:"var(--yellow)"},{name:"Negative",value:{week:100,month:198,year:356},color:"var(--red)"}],L=(r,a)=>{const s=o.reduce((l,i)=>l+i.value[a.value],0);return`${(r*100/s).toFixed(0)}%`},q=({active:r,payload:a,period:s})=>r?e.jsx("div",{className:"basic-tooltip",children:L(a[0].value,s)}):null,E=()=>{const[r,a]=d.useState(c[0]);return e.jsxs(m,{className:"card flex flex-col p-5 h-[392px] xs:p-6 md:h-full",children:[e.jsxs("div",{className:"flex gap-4 items-center justify-between",children:[e.jsx("h2",{children:"Feedback"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(p,{value:r,onChange:a,options:c})})]}),e.jsx("div",{className:"flex-1 overflow-hidden -m-2.5",children:e.jsx(v,{width:"99%",height:"100%",children:e.jsxs(B,{margin:!1,children:[e.jsx(P,{data:o,dataKey:`value.${r.value}`,strokeWidth:0,innerRadius:70,children:o.map((s,n)=>e.jsx(D,{fill:s.color},n))}),e.jsx(f,{content:e.jsx(q,{period:r})})]})})}),e.jsx("div",{className:"flex gap-4 justify-center",children:o.map((s,n)=>e.jsx(t,{color:s.color,label:s.name},n))})]})},_=[{name:"Monday",a:4e3,b:2400,c:2400},{name:"Tuesday",a:3e3,b:1398,c:2210},{name:"Wednesday",a:2e3,b:9800,c:2290},{name:"Thursday",a:2780,b:3908,c:2e3},{name:"Friday",a:1890,b:4800,c:2181},{name:"Saturday",a:2390,b:3800,c:2500},{name:"Sunday",a:3490,b:4300,c:2100}],z=({active:r,payload:a})=>r?e.jsx("div",{className:"flex flex-col gap-1.5 bg-white p-2.5 rounded-md shadow-lg dark:bg-body",children:a.map((s,n)=>e.jsx(t,{color:s.fill,label:`$${s.value}`},n))}):null,G=()=>e.jsxs(m,{className:"card flex flex-col p-5 h-[392px] md:h-full",children:[e.jsxs("div",{className:`flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between md:flex-col
                 md:items-stretch lg:flex-row lg:items-center`,children:[e.jsx("h2",{children:"Total Transactions"}),e.jsx("button",{className:"btn--base h-9 px-6 rounded-[10px] text-label min-w-[105px]",children:"Export"})]}),e.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-2 mt-3 mb-5 md:justify-end",children:[e.jsx(t,{color:"var(--turquoise)",label:"This Week"}),e.jsx(t,{color:"var(--blue)",label:"Last Week"}),e.jsx(t,{color:"var(--peach)",label:"Cost"})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(v,{width:"99%",height:"100%",children:e.jsxs(K,{data:_,margin:{top:1,right:0,left:0,bottom:1},children:[e.jsx(w,{vertical:!1,stroke:"var(--cartesian-grid)",strokeDasharray:"8 8"}),e.jsx(f,{cursor:!1,content:e.jsx(z,{})}),e.jsx(x,{dataKey:"b",stackId:"a",fill:"var(--turquoise)",maxBarSize:30,radius:[0,0,8,8]}),e.jsx(x,{dataKey:"a",stackId:"a",fill:"var(--blue)",maxBarSize:30}),e.jsx(x,{dataKey:"c",stackId:"a",fill:"var(--peach)",maxBarSize:30,radius:[8,8,0,0]})]})})})]}),j={a:{earnings:450,orders:40,customers:70},b:{earnings:8200,orders:99200,customers:13e5}},M={stats_overview_a:e.jsx(h,{title:"Today Overview",data:j.a}),stats_overview_b:e.jsx(h,{title:"Total Overview",data:j.b}),profit:e.jsx(A,{}),audience:e.jsx(W,{}),feedback:e.jsx(E,{}),visits:e.jsx(T,{}),transactions:e.jsx(G,{})},Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Dashboard"}),e.jsx(F,{id:"dashboard_c",widgets:M})]});export{Q as default};