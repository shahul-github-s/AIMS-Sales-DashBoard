import{j as e,r as l}from"./mui-913aed92.js";import{k as f,S as b,u as D,B as I,b as g}from"./index-9074475a.js";import{n as O}from"./helpers-fc71785b.js";import{P as T}from"./Pagination-af19598a.js";import{S as A}from"./Search-0dfddefb.js";const k=({item:a,index:n,data:s})=>e.jsxs("div",{className:f("flex gap-4 px-4 md:h-full md:!p-0 md:justify-center",{"pt-4":n===0,"pb-4":n===s.length-1,"md:border-r":n!==s.length-1}),children:[e.jsx("i",{className:`icon-${a.icon}-regular text-turquoise text-[24px] mt-[15px]`}),e.jsxs("div",{className:"flex flex-col gap-[3px]",children:[e.jsx("span",{className:"counter",children:O(a.value)}),e.jsx("span",{className:"uppercase text-xs font-medium text-label",children:a.label})]})]}),v=({item:a,index:n,data:s})=>e.jsxs("div",{className:f("flex gap-4 px-4 md:h-full md:!p-0 md:justify-center",{"pt-4":n===0,"pb-4":n===s.length-1,"md:border-r":n!==s.length-1}),children:[e.jsx("i",{className:`icon-${a.icon}-regular text-turquoise text-[24px] mt-[15px]`}),e.jsxs("div",{className:"flex flex-col gap-[3px]",children:[e.jsx("span",{className:"counter",children:a.value}),e.jsx("span",{className:"uppercase text-xs font-medium text-label",children:a.label})]})]}),M=()=>{const[a,n]=l.useState([{icon:"square-list",value:0,label:"Lead Count"}]),[s,u]=l.useState([{icon:"square-fragile",value:0,label:"Unsettled Amount"},{icon:"box-check",value:0,label:"In Hand Cash"},{icon:"bars-progress",value:0,label:"UPI Transaction"}]),[i,t]=l.useState(null);return l.useEffect(()=>{const d=async()=>{try{t(null);const p=await fetch("https://script.google.com/macros/s/AKfycbxqlCvLzLqOTJJSB5hg3wJEhWAtb0CurkG-VkVvjfWSThcrxGtC_izLn8umbuSEFbyo/exec");p.ok;const c=await p.json();c&&c.excess&&c.data&&(n([{icon:"cart-circle-xmark",value:c.excess.leadCount??0,label:"Lead Count"}]),u([{icon:"square-fragile",value:c.data.unsettledAmount??0,label:"Unsettled Amount"},{icon:"box-check",value:c.data.inHandCash??0,label:"In Hand Cash"},{icon:"bars-progress",value:c.data.upiTransaction??0,label:"UPI Transaction"}]))}catch{}},o=setInterval(d,1e3);return d(),()=>clearInterval(o)},[]),e.jsxs(b,{className:"bg-turquoise md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[e.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Profit Tracker"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0",children:[a.map((d,o)=>e.jsxs(l.Fragment,{children:[e.jsx(v,{index:o,data:a,item:d}),o!==a.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},d.label)),s.map((d,o)=>e.jsxs(l.Fragment,{children:[e.jsx(k,{index:o,data:s,item:d}),o!==s.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},d.label))]})]})},W=()=>{const[a,n]=l.useState([{icon:"arrow-right-arrow-left",value:0,label:"Order 1"},{icon:"arrow-right-arrow-left",value:0,label:"Order 2"},{icon:"square-list",value:0,label:"Order 3"},{icon:"square-list",value:0,label:"Order 4"}]);return l.useEffect(()=>{const u=setInterval(async()=>{try{const i=await fetch("https://script.google.com/macros/s/AKfycbwjzkGFpw_52ulSmnoupvg8TER3GAREuWUl7QNQr5tNZUSOiEnDuMMdPYSv_C9O3Nz0/exec");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const t=await i.json();t&&t.order1&&t.order2&&t.order3&&t.order4?n([{icon:"arrow-right-arrow-left",value:t.order1.value||0,label:t.order1.label||"Order 1"},{icon:"arrow-right-arrow-left",value:t.order2.value||0,label:t.order2.label||"Order 2"},{icon:"square-list",value:t.order3.value||0,label:t.order3.label||"Order 3"},{icon:"square-list",value:t.order4.value||0,label:t.order4.label||"Order 4"}]):console.error("Invalid data structure from the API",t)}catch(i){console.error("Error fetching data:",i)}},1e4);return()=>clearInterval(u)},[]),e.jsxs(b,{className:"bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[e.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Top Rank"}),e.jsx("div",{className:`grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4
                 md:items-center md:gap-0`,children:a.map((s,u)=>e.jsxs(l.Fragment,{children:[e.jsx(v,{item:s,index:u,data:a}),u!==a.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},s.label))})]})},G=()=>{D();const[a,n]=l.useState([]),[s,u]=l.useState({currentPage:0,itemsPerPage:10}),[i,t]=l.useState(""),[d,o]=l.useState(null),p=async()=>{try{const r=await g.get("https://script.google.com/macros/s/AKfycbyCVd-u_KZeHfTrj-5-wbXosnvtdh2WG0YRDz7YqP4ddyBHcZa7ODPCKYHyUoylyqut/exec");n(r.data),o(null)}catch(r){o("Error fetching data. Please try again later."),console.error("Error fetching data:",r)}};l.useEffect(()=>{p();const r=setInterval(p,1e3);return()=>{clearInterval(r)}},[]);const{currentPage:c,itemsPerPage:x}=s,S=a.length,j=Math.ceil(S/x),w=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Outline","Browsing","AePS"],h=a.filter(r=>{const m=r["Service Unit Report "];return m&&w.includes(m.trim())&&m.toLowerCase().includes(i.toLowerCase())}),y=h.slice(c*x,(c+1)*x),C=r=>{r>=0&&r<j&&u({...s,currentPage:r})},N=[{title:"Service Unit Report",dataIndex:"Service Unit Report ",key:"Service Unit Report ",fixed:"left",render:r=>r||null},...Object.keys(a[0]||{}).filter(r=>r!=="Service Unit Report ").map(r=>({title:r.trim(),dataIndex:r.trim(),key:r.trim()}))],P=async()=>{const r="https://script.google.com/macros/s/AKfycbxs8Tu419YvBriSD6m9Pvx245AQ2hDvgrWAKNR8lurzHer1BMsSPDDhwDShGRUb8yGE/exec";try{const m=await g.get(r),{url:E}=m.data;window.open(E,"_blank")}catch(m){o("Error exporting file. Please try again later."),console.error("Error exporting file:",m)}};return e.jsx("div",{className:"orders-table",children:e.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(A,{wrapperClass:"flex-1",value:i,onChange:t,placeholder:"Search for Service..."}),e.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",onClick:P,children:[e.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),e.jsx(I,{columns:N,dataSource:y,rowKey:"Service Unit Report ",pagination:!1,scroll:{x:"max-content"}}),e.jsx(T,{currentPage:c,totalItems:h.length,itemsPerPage:x,onPageChange:C})]})})};export{W as F,M as O,G as a};
