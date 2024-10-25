import{r as s,j as e}from"./mui-913aed92.js";import{u as A,a as W,P,S as R,B as k,b,A as G}from"./index-74978c6f.js";import{A as E}from"./AppGrid-d55aa9bb.js";import{S as U}from"./StatisticsCard-e745765a.js";import{S as B}from"./index-2c163dc3.js";import{g as K,n as N,c as T}from"./helpers-fc71785b.js";import{R as I,A as J,C as L,X as V,Y as z,T as O,a as H,P as Q,b as q,c as Y}from"./recharts-469978c2.js";import{P as X,V as _}from"./ProfitBars-c3d27ae1.js";import{O as Z,F as $,a as ee}from"./OrdersTable-012cfc17.js";import{P as D}from"./Pagination-af19598a.js";import{S as F}from"./Search-0dfddefb.js";import te from"./SignIn-ecd86066.js";import"./browser-25fb6bf6.js";import"./Counter-b5d2ba6d.js";import"./memoize-one.esm-297ddbcb.js";import"./GoogleButton-d869610d.js";import"./PasswordInput-6c2cca88.js";import"./index.esm-a6fb6a1d.js";const ae=()=>{const[i,c]=s.useState({todayRevenue:{value:0,trend:0},todayVisitors:{value:0,trend:0},todayProfit:{value:0,trend:0},totalExpenses:{value:0,trend:0}}),[d,x]=s.useState(!0),[h,v]=s.useState(null),S=async()=>{try{x(!0);const f=await fetch("https://script.google.com/macros/s/AKfycbzcTBjYrTZX4AWvr48Z9fBfB-yXj1kamlBk2sxeEAgPHpTb44MgopWAE1sPDovlGEY/exec");f.ok;const r=await f.json();JSON.stringify(r)!==JSON.stringify(i)&&c(r),x(!1),v(null)}catch(f){v(f.message),x(!1)}};s.useEffect(()=>{S();const f=setInterval(()=>{S()},100);return()=>clearInterval(f)},[i]);const{todayRevenue:p,todayVisitors:n,todayProfit:l,totalExpenses:m}=i,g=[{title:"Today Sales",iconClass:"wallet-solid",value:p.value,valuePrefix:"₹",trend:p.trend},{title:"Today Visitors",iconClass:"user-plus-solid",value:n.value,valuePrefix:"",trend:n.trend},{title:"Today Profit",iconClass:"arrow-down-to-line-solid",value:l.value,valuePrefix:"₹",trend:l.trend},{title:"Total Expenses",iconClass:"bag-shopping-solid",value:m.value,valuePrefix:"₹",trend:m.trend}];return e.jsxs("div",{className:"grid grid-cols-1 h-full gap-6 md:grid-cols-2 xl:gap-8 3xl:grid-cols-4",children:[g.map((f,r)=>e.jsx(U,{data:f,chartClass:"xl:w-[250px] 3xl:hidden min-[1800px]:block min-[1800px]:w-[110px] 5xl:w-[130px]"},r)),d&&e.jsx("div",{}),h&&e.jsx("div",{style:{color:"red"}})]})},re=({active:i,payload:c,label:d})=>i&&c&&c.length>0?e.jsxs("div",{className:"bg-peach p-2.5 rounded-md dark:shadow-md",children:[e.jsx("p",{className:"text-[18px] font-semibold !text-white mb-1",children:d}),e.jsxs("p",{className:"text-[15px] font-semibold text-white",children:["Profit: ₹",c[0].value]})]}):null,w={week:[{name:"Mon",b:0},{name:"Tues",b:0},{name:"Wednes",b:0},{name:"Thurs",b:0},{name:"Fri",b:0},{name:"Satur",b:0},{name:"Sun",b:0}],month:[{name:"01-05",b:0},{name:"06-10",b:0},{name:"11-15",b:0},{name:"16-20",b:0},{name:"21-25",b:0},{name:"26-31",b:0}],year:[{name:"Jan-Mar",b:0},{name:"Apr-Jun",b:0},{name:"Jul-Sep",b:0},{name:"Oct-Dec",b:0}]},se=async()=>{try{return await(await fetch("https://script.google.com/macros/s/AKfycbyyujOq2iUHk38KphwhUqKNBMdFu6Oub67nyCCasDugHKZn5Fjn2xGEpghW-RxEPgG8/exec")).json()}catch(i){return console.error("Error fetching sales data:",i),null}},oe=()=>{const{width:i}=A(),{theme:c}=W(),[d,x]=s.useState(P[0]),[h,v]=s.useState(w[d.value]),[S,p]=s.useState({week:w.week,month:w.month,year:w.year});return s.useEffect(()=>{const n=async()=>{const m=await se();if(m){const g={week:m.week||w.week,month:m.month||w.month,year:m.year||w.year};JSON.stringify(g)!==JSON.stringify(S)&&p(g)}};n();const l=setInterval(n,1e3);return()=>clearInterval(l)},[S]),s.useEffect(()=>{const n=S[d.value];n&&JSON.stringify(n)!==JSON.stringify(h)&&v(n)},[d,S]),e.jsxs(R,{className:"card flex flex-col gap-[22px] h-[392px] xs:h-[315px] p-5 xs:p-6 md:h-full",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between xs:gap-5",children:[e.jsx("h2",{children:"Profit Analytics"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(B,{value:d,variant:"minimal",onChange:x,options:P})})]}),e.jsx("div",{className:"flex-1 overflow-hidden -mr-2 md:-ml-11 md:-mr-4",children:e.jsx(I,{width:"99%",height:"100%",id:"salesAnalytics",children:e.jsxs(J,{data:h,margin:{top:0,right:7,left:7,bottom:0},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"salesAnalyticsFill",x1:"-124.434",y1:"-94.766",x2:"-124.434",y2:"227.785",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"var(--peach)"}),e.jsx("stop",{offset:"1",stopColor:c==="light"?"white":"transparent",stopOpacity:"0.01"})]})}),e.jsx(L,{vertical:!1,horizontalPoints:K("salesAnalytics",50,"x"),strokeWidth:1,stroke:"var(--cartesian-grid)",strokeDasharray:"8 8"}),e.jsx(V,{dataKey:"name",dy:10,axisLine:!1,tickLine:!1,hide:i<768}),e.jsx(z,{tickCount:7,tickFormatter:n=>N(n,0),axisLine:!1,tickLine:!1,hide:i<768}),e.jsx(O,{cursor:{strokeDasharray:"8 8",stroke:"var(--peach)"},content:e.jsx(re,{})}),e.jsx(H,{type:"monotone",dataKey:"b",stroke:"var(--peach)",strokeWidth:3,strokeLinecap:"round",fill:"url(#salesAnalyticsFill)"})]})})})]})},ie=[{name:"General Service",data:{week:{profit:0,products:0},month:{profit:0,products:0},year:{profit:0,products:0}},color:"turquoise",darkAura:"#1B3838",lightAura:"#F4FFFF"},{name:"E-Sevai",data:{week:{profit:0,products:0},month:{profit:0,products:0},year:{profit:0,products:0}},color:"blue",darkAura:"#14344A",lightAura:"#F1F7FF"},{name:"Job Application Support",data:{week:{profit:0,products:0},month:{profit:0,products:0},year:{profit:0,products:0}},color:"yellow",darkAura:"#3B300A",lightAura:"#FFFBF0"},{name:"Travel Services",data:{week:{profit:0,products:0},month:{profit:0,products:0},year:{profit:0,products:0}},color:"peach",darkAura:"#3B300A",lightAura:"#FFFBF0"}],ne=()=>{const{width:i}=A(),[c,d]=s.useState(P[0]),[x,h]=s.useState(ie),[v,S]=s.useState(null),[p,n]=s.useState(0),l=async()=>{try{S(null);const r=await fetch("https://script.google.com/macros/s/AKfycby4NhtW4ag8QNkhUXgse32KQ1y1GgQiwuPSv1_7ezjFoRLut57mdbErS6y8cSRSbzaK/exec");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const o=await r.json();if(!o.generalService||!o.eSevai||!o.jobApplicationSupport||!o.travelServices)throw new Error("Invalid data structure received from API.");const y=[{name:"General Service",data:o.generalService,color:"turquoise",darkAura:"#1B3838",lightAura:"#F4FFFF"},{name:"E-Sevai",data:o.eSevai,color:"blue",darkAura:"#14344A",lightAura:"#F1F7FF"},{name:"Job Application Support",data:o.jobApplicationSupport,color:"yellow",darkAura:"#3B300A",lightAura:"#FFFBF0"},{name:"Travel Services",data:o.travelServices,color:"peach",darkAura:"#3B300A",lightAura:"#FFFBF0"}];h(C=>JSON.stringify(C)!==JSON.stringify(y)?y:C),n(0)}catch{p<3&&setTimeout(()=>{n(p+1),l()},5e3)}};s.useEffect(()=>{l();const r=setInterval(()=>{l()},1e3);return()=>clearInterval(r)},[p]);const m=()=>x.reduce((r,o)=>r+o.data[c.value].profit,0),g=({active:r,payload:o})=>r&&o&&o.length?e.jsx("div",{className:"basic-tooltip",children:N(o[0].value,0,"₹")}):null,f=({item:r,period:o})=>{const y=x.reduce((j,t)=>j+t.data[o].products,0),C=r.data[o].products/y*100;return e.jsxs("div",{className:"flex gap-2.5",children:[e.jsx("span",{className:"flex items-center justify-center w-[15px] h-[15px] rounded-full mt-1 shrink-0",style:{backgroundColor:r.lightAura},children:e.jsx("span",{className:`w-[7px] h-[7px] rounded-full bg-${r.color}`})}),e.jsxs("div",{className:"flex flex-col flex-1 gap-1",children:[e.jsxs("p",{className:"flex justify-between font-medium text-[15px] text-header",children:[r.name," (",C.toFixed(2),"%)",e.jsxs("span",{children:["₹",T(r.data[o].profit)]})]}),e.jsxs("p",{className:"uppercase text-xs text-label",children:[T(r.data[o].products)," Lead Count"]})]})]})};return e.jsxs(R,{className:"card flex flex-col gap-4 p-5 h-full xs:p-6",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between",children:[e.jsx("h2",{children:"Profit By Category"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(B,{options:P,value:c,onChange:d})})]}),e.jsxs("div",{className:"flex flex-col items-start gap-6 flex-1 md:flex-row md:items-center md:gap-[65px]",children:[e.jsxs("div",{className:`relative overflow-hidden min-h-[240px] min-w-[240px] xs:min-w-[294px]
                     xs:min-h-[294px] m-auto md:m-0 md:w-[294px] md:h-[294px]`,children:[e.jsx(I,{width:"99%",height:"99%",children:e.jsxs(Q,{children:[e.jsx(q,{data:x,dataKey:`data.${c.value}.profit`,nameKey:"name",cx:"50%",cy:"50%",outerRadius:i<414?118:140,innerRadius:95,strokeWidth:0,fill:"#8884d8",children:x.map((r,o)=>e.jsx(Y,{fill:`var(--${r.color})`},o))}),e.jsx(O,{cursor:!1,content:e.jsx(g,{})})]})}),e.jsx("span",{className:"counter absolute-center",children:N(m(),0,"₹")})]}),e.jsx("div",{className:"flex flex-col flex-1 w-full gap-4",children:x.map((r,o)=>e.jsx(f,{item:r,period:c.value},o))})]}),v&&e.jsxs("p",{className:"text-red-600",children:["Error: ",v,". Retrying (",p,"/3)..."]})]})},ce=()=>{A();const[i,c]=s.useState([]),[d,x]=s.useState({currentPage:0,itemsPerPage:10}),[h,v]=s.useState(""),[S,p]=s.useState(null),n=async()=>{try{const a=await b.get("https://script.google.com/macros/s/AKfycbwZu59c-18Urfnt_HsHpAXLrZNPn5mYsuS6FHFE1UcKda1ginMLwQcOQvB8mvUR4hCv/exec");c(a.data),p(null)}catch(a){p("Error fetching data. Please try again later."),console.error("Error fetching data:",a)}};s.useEffect(()=>{n();const a=setInterval(n,1e3);return()=>{clearInterval(a)}},[]);const{currentPage:l,itemsPerPage:m}=d,g=i.length,f=Math.ceil(g/m),r=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Outline","Browsing","AePS"],o=i.filter(a=>{const u=a["Service Unit Report "];return u&&r.includes(u.trim())&&u.toLowerCase().includes(h.toLowerCase())}),y=o.slice(l*m,(l+1)*m),C=a=>{a>=0&&a<f&&x({...d,currentPage:a})},j=[{title:"Service Unit Report",dataIndex:"Service Unit Report ",key:"Service Unit Report ",fixed:"left",render:a=>a||null},...Object.keys(i[0]||{}).filter(a=>a!=="Service Unit Report ").map(a=>({title:a.trim(),dataIndex:a.trim(),key:a.trim()}))],t=async()=>{const a="https://script.google.com/macros/s/AKfycbxs8Tu419YvBriSD6m9Pvx245AQ2hDvgrWAKNR8lurzHer1BMsSPDDhwDShGRUb8yGE/exec";try{const u=await b.get(a),{url:M}=u.data;window.open(M,"_blank")}catch(u){p("Error exporting file. Please try again later."),console.error("Error exporting file:",u)}};return e.jsx("div",{className:"orders-table",children:e.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(F,{wrapperClass:"flex-1",value:h,onChange:v,placeholder:"Search for Service..."}),e.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",onClick:t,children:[e.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),e.jsx(k,{columns:j,dataSource:y,rowKey:"Service Unit Report ",pagination:!1,scroll:{x:"max-content"}}),e.jsx(D,{currentPage:l,totalItems:o.length,itemsPerPage:m,onPageChange:C})]})})},le=()=>{A();const[i,c]=s.useState([]),[d,x]=s.useState({currentPage:0,itemsPerPage:10}),[h,v]=s.useState(""),[S,p]=s.useState("");s.useEffect(()=>{const t=async()=>{try{const u=await b.get("https://script.google.com/macros/s/AKfycbxTl2PiERe4xQSSFau4lNszUQSpz7C8_90W7QRwBj9DfwKooElA7BnhXLAsCCJifgbO/exec");c(u.data),p("")}catch{p()}};t();const a=setInterval(t,1e3);return()=>clearInterval(a)},[]);const{currentPage:n,itemsPerPage:l}=d,m=i.filter(t=>{const a=t["Service Category Report"];return a&&a.toLowerCase().includes(h.toLowerCase())}),g=m.length,f=Math.ceil(g/l),r=m.slice(n*l,(n+1)*l),o=t=>{t>=0&&t<f&&x({...d,currentPage:t})},y=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Outline","General Services","E-Sevai","Job Application Support","Travel Services"],C=[{title:"Service Category Report",dataIndex:"Service Category Report",key:"Service Category Report",fixed:"left",render:t=>y.includes(t)?t:""},...i.length>0?Object.keys(i[0]||{}).filter(t=>t!=="Service Category Report").map(t=>({title:t.trim(),dataIndex:t.trim(),key:t.trim()})):[]],j=async()=>{const t="https://script.google.com/macros/s/AKfycbxzvEcbC38UG2gDvb1gpSz8bzAJWcnIlcHgZgAX3aA8dGfhsbqWuzcltqnKGp7ARbYD/exec";try{const a=await b.get(t),{url:u}=a.data;u&&window.open(u,"_blank")}catch{}};return e.jsx("div",{className:"orders-table",children:e.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(F,{wrapperClass:"flex-1",value:h,onChange:v,placeholder:"Search for Service..."}),e.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",onClick:j,children:[e.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),e.jsx(k,{columns:C,dataSource:r,rowKey:"Service Category Report",pagination:!1,scroll:{x:"max-content"}}),e.jsx(D,{currentPage:n,totalItems:g,itemsPerPage:l,onPageChange:o})]})})},de=()=>{A();const[i,c]=s.useState([]),[d,x]=s.useState({currentPage:0,itemsPerPage:10}),[h,v]=s.useState(""),[S,p]=s.useState("");s.useEffect(()=>{const t=async()=>{try{const u=await b.get("https://script.google.com/macros/s/AKfycbw54o9lNhQfuxI8DBUMeuWGOVYJ8ukQnQK-9FXz5XSTkH9qsEINy6ZHzDVNRBH0j0nA/exec");c(u.data),p("")}catch{p("Failed to fetch data. Please check your network connection or try again later.")}};t();const a=setInterval(t,1e3);return()=>clearInterval(a)},[]);const{currentPage:n,itemsPerPage:l}=d,m=i.filter(t=>{const a=t["Service Category Report"];return a&&a.toLowerCase().includes(h.toLowerCase())}),g=m.length,f=Math.ceil(g/l),r=m.slice(n*l,(n+1)*l),o=t=>{t>=0&&t<f&&x({...d,currentPage:t})},y=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Outline","General Services","E-Sevai","Job Application Support","Travel Services"],C=[{title:"Service Category Report",dataIndex:"Service Category Report",key:"Service Category Report",fixed:"left",render:t=>y.includes(t)?t:""},...i.length>0?Object.keys(i[0]||{}).filter(t=>t!=="Service Category Report").map(t=>({title:t.trim(),dataIndex:t.trim(),key:t.trim()})):[]],j=async()=>{const t="https://script.google.com/macros/s/AKfycbxzvEcbC38UG2gDvb1gpSz8bzAJWcnIlcHgZgAX3aA8dGfhsbqWuzcltqnKGp7ARbYD/exec";try{const a=await b.get(t),{url:u}=a.data;u&&window.open(u,"_blank")}catch{p("Failed to export the file. Please try again later.")}};return e.jsx("div",{className:"orders-table",children:e.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(F,{wrapperClass:"flex-1",value:h,onChange:v,placeholder:"Search for Service..."}),e.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",onClick:j,children:[e.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),e.jsx(k,{columns:C,dataSource:r,rowKey:"Service Category Report",pagination:!1,scroll:{x:"max-content"}}),e.jsx(D,{currentPage:n,totalItems:g,itemsPerPage:l,onPageChange:o})]})})},pe={statistics:e.jsx(ae,{}),sales_analytics:e.jsx(oe,{}),sales_by_category:e.jsx(ne,{})},me={profit:e.jsx(X,{}),visits:e.jsx(_,{})},Ee=()=>{const[i,c]=s.useState(!1);s.useEffect(()=>{localStorage.getItem("isAuthenticated")==="true"&&c(!0)},[]);const d=()=>{c(!1),localStorage.removeItem("isAuthenticated")};return i?e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"AIMS Sales Dashboard",onLogout:d}),e.jsx(E,{id:"dashboard_a",widgets:pe,cols:{xl:4,lg:3,md:2}}),e.jsx(E,{id:"dashboard_c",widgets:me,cols:{xl:4,lg:3,md:2}}),e.jsxs("div",{className:"layout-wrapper flex flex-col flex-1 gap-6 md:gap-8",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:gap-8 3xl:grid-cols-2",children:[e.jsx(Z,{}),e.jsx($,{})]}),e.jsx("h2",{className:"Bold",children:"Performance Review"}),e.jsx(le,{}),e.jsx(ee,{}),e.jsx("h2",{children:"Sales Review"}),e.jsx(de,{}),e.jsx(ce,{})]})]}):e.jsx(te,{setIsAuthenticated:c})};export{Ee as default};
