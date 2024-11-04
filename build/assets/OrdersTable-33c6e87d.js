import{j as e,r as o}from"./mui-306f5cf6.js";import{j as f,n as E,S as b,u as T,B as k,d as h}from"./index-741da66d.js";import{P as O}from"./Pagination-fdbda9c2.js";import{S as A}from"./Search-cef420a4.js";const q=({item:s,index:l,data:n})=>e.jsxs("div",{className:f("flex gap-4 px-4 md:h-full md:!p-0 md:justify-center",{"pt-4":l===0,"pb-4":l===n.length-1,"md:border-r":l!==n.length-1}),children:[e.jsx("i",{className:`icon-${s.icon}-regular text-turquoise text-[24px] mt-[15px]`}),e.jsxs("div",{className:"flex flex-col gap-[3px]",children:[e.jsx("span",{className:"counter",children:E(s.value)}),e.jsx("span",{className:"uppercase text-xs font-medium text-label",children:s.label})]})]}),v=({item:s,index:l,data:n})=>e.jsxs("div",{className:f("flex gap-4 px-4 md:h-full md:!p-0 md:justify-center",{"pt-4":l===0,"pb-4":l===n.length-1,"md:border-r":l!==n.length-1}),children:[e.jsx("i",{className:`icon-${s.icon}-regular text-turquoise text-[24px] mt-[15px]`}),e.jsxs("div",{className:"flex flex-col gap-[3px]",children:[e.jsx("span",{className:"counter",children:s.value}),e.jsx("span",{className:"uppercase text-xs font-medium text-label",children:s.label})]})]}),F=()=>{const[s,l]=o.useState([{icon:"square-list",value:0,label:"Lead Count"}]),[n,i]=o.useState([{icon:"square-fragile",value:0,label:"Unsettled Amount"},{icon:"box-check",value:0,label:"In Hand Cash"},{icon:"bars-progress",value:0,label:"UPI Transaction"}]),[u,d]=o.useState(null);return o.useEffect(()=>{const a=async()=>{try{d(null);const p=await fetch("https://script.google.com/macros/s/AKfycbxqlCvLzLqOTJJSB5hg3wJEhWAtb0CurkG-VkVvjfWSThcrxGtC_izLn8umbuSEFbyo/exec");p.ok;const c=await p.json();c&&c.excess&&c.data&&(l([{icon:"cart-circle-xmark",value:c.excess.leadCount??0,label:"Lead Count"}]),i([{icon:"square-fragile",value:c.data.unsettledAmount??0,label:"Unsettled Amount"},{icon:"box-check",value:c.data.inHandCash??0,label:"In Hand Cash"},{icon:"bars-progress",value:c.data.upiTransaction??0,label:"UPI Transaction"}]))}catch{}},r=setInterval(a,1e3);return a(),()=>clearInterval(r)},[]),e.jsxs(b,{className:"bg-turquoise md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[e.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Profit Tracker"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0",children:[s.map((a,r)=>e.jsxs(o.Fragment,{children:[e.jsx(v,{index:r,data:s,item:a}),r!==s.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},a.label)),n.map((a,r)=>e.jsxs(o.Fragment,{children:[e.jsx(q,{index:r,data:n,item:a}),r!==n.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},a.label))]})]})},W=()=>{const s=[{icon:"arrow-right-arrow-left",value:0,label:"Order 1"},{icon:"arrow-right-arrow-left",value:0,label:"Order 2"},{icon:"square-list",value:0,label:"Order 3"},{icon:"square-list",value:0,label:"Order 4"}],[l,n]=o.useState(s);return o.useEffect(()=>{const i=async()=>{try{const d=await fetch("https://script.google.com/macros/s/AKfycbxpizx2j_pXlpZRhrW393vPJayMUyr7XdrQV02ODWAFhMXSBpa4PTTMt_gdosXSztgE/exec");if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const a=await d.json();n(r=>[{icon:"arrow-right-arrow-left",value:a.order1.value!==void 0?a.order1.value:r[0].value,label:a.order1.label||r[0].label},{icon:"arrow-right-arrow-left",value:a.order2.value!==void 0?a.order2.value:r[1].value,label:a.order2.label||r[1].label},{icon:"square-list",value:a.order3.value!==void 0?a.order3.value:r[2].value,label:a.order3.label||r[2].label},{icon:"square-list",value:a.order4.value!==void 0?a.order4.value:r[3].value,label:a.order4.label||r[3].label}])}catch(d){console.error("Error fetching data:",d)}},u=setInterval(i,1e3);return i(),()=>clearInterval(u)},[]),e.jsxs(b,{className:"bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[e.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Top Rank"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0",children:l.map((i,u)=>e.jsxs(o.Fragment,{children:[e.jsx(v,{item:i,index:u,data:l}),u!==l.length-1&&e.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},i.label))})]})},M=()=>{T();const[s,l]=o.useState([]),[n,i]=o.useState({currentPage:0,itemsPerPage:10}),[u,d]=o.useState(""),[a,r]=o.useState(null),p=async()=>{try{const t=await h.get("https://script.google.com/macros/s/AKfycbyCVd-u_KZeHfTrj-5-wbXosnvtdh2WG0YRDz7YqP4ddyBHcZa7ODPCKYHyUoylyqut/exec");l(t.data),r(null)}catch(t){r("Error fetching data. Please try again later."),console.error("Error fetching data:",t)}};o.useEffect(()=>{p();const t=setInterval(p,1e3);return()=>{clearInterval(t)}},[]);const{currentPage:c,itemsPerPage:x}=n,j=s.length,S=Math.ceil(j/x),y=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Outline","Browsing","AePS"],g=s.filter(t=>{const m=t["Service Unit Report "];return m&&y.includes(m.trim())&&m.toLowerCase().includes(u.toLowerCase())}),w=g.slice(c*x,(c+1)*x),C=t=>{t>=0&&t<S&&i({...n,currentPage:t})},P=[{title:"Service Unit Report",dataIndex:"Service Unit Report ",key:"Service Unit Report ",fixed:"left",render:t=>t||null},...Object.keys(s[0]||{}).filter(t=>t!=="Service Unit Report ").map(t=>({title:t.trim(),dataIndex:t.trim(),key:t.trim()}))],N=async()=>{const t="https://script.google.com/macros/s/AKfycbxwvmdJsvn0unmWqaUXkN7lJL1cIO9c34FBkswQtPYGd4q6VIOIjnkad3Rrw3gy7YPB/exec";try{const m=await h.get(t),{url:I}=m.data;window.open(I,"_blank")}catch(m){r("Error exporting file. Please try again later."),console.error("Error exporting file:",m)}};return e.jsx("div",{className:"orders-table",children:e.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(A,{wrapperClass:"flex-1",value:u,onChange:d,placeholder:"Search for Service..."}),e.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",onClick:N,children:[e.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),e.jsx(k,{columns:P,dataSource:w,rowKey:"Service Unit Report ",pagination:!1,scroll:{x:"max-content"}}),e.jsx(O,{currentPage:c,totalItems:g.length,itemsPerPage:x,onPageChange:C})]})})};export{W as F,F as O,M as a};
