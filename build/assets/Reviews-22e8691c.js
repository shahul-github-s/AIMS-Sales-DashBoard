import{P as i,j as a,C as k,y as x,r as c}from"./mui-306f5cf6.js";import{_ as f,t as n,S as N,u as R,M as B,B as q,A as T}from"./index-741da66d.js";import{S as E}from"./Search-cef420a4.js";import{P as h}from"./Pagination-fdbda9c2.js";import{i as A,b as I,a as P,c as F,d as L,e as _,f as z,g as M,h as D,j as W,k as G,l as H,m as J,E as O}from"./Empty-c98ef857.js";import{S as Q,a as U,d as V,b as X,i as Y,c as K,e as $}from"./StarRating-7c7478ec.js";import{T as Z}from"./TopSellingProductItem-08709df1.js";import{u as ee}from"./usePagination-3bb9ce79.js";import{i as ae,R as re}from"./columnDefs-da987402.js";import{f as e}from"./index-1f53deeb.js";import"./recharts-68aed0f6.js";const se=f.button.withConfig({displayName:"FilterItem__Button",componentId:"sc-1n9on1e-0"})(["text-transform:uppercase;font-size:14px;font-weight:600;color:",";display:flex;align-items:center;gap:11px;transition:var(--transition);.qty{height:36px;min-width:45px;padding:0 8px;border:1px solid ",";border-radius:10px;background:",";display:flex;align-items:center;justify-content:center;transition:var(--transition);}&:hover,&.active{color:",";.qty{border-color:",";background:",";}}"],n("theme",{light:"var(--label)",dark:"var(--header)"}),n("theme",{light:"var(--border)",dark:"var(--body)"}),n("theme",{light:"var(--header-dark)",dark:"var(--body)"}),n("theme",{light:"var(--sidebar)",dark:"var(--turquoise)"}),n("theme",{light:"var(--sidebar)",dark:"var(--turquoise)"}),n("theme",{light:"var(--border)",dark:"transparent"})),v=({label:r,value:t,qty:o,active:d,setActive:m})=>a.jsxs(se,{className:d===t?"active":"",onClick:()=>m(t),children:[r," ",a.jsxs("span",{className:"qty",children:["(",o,")"]})]});v.propTypes={label:i.string.isRequired,value:i.string.isRequired,qty:i.number.isRequired,active:i.string.isRequired,setActive:i.func.isRequired};const te=f.div.withConfig({displayName:"BasicCheckbox__StyledBasicCheckbox",componentId:"sc-17wrwsd-0"})(["input{display:none;&:checked + label{border-color:var(--peach) !important;background:var(--peach)  !important;i{opacity:1;}}}label{display:flex;align-items:center;justify-content:center;width:15px;height:15px;background:",";border:1px solid ",";border-radius:4px;transition:all var(--transition);i{font-size:10px;color:#fff;margin-top:-1px;opacity:0;transition:all var(--transition);}}"],n("theme",{light:"#fff",dark:"transparent"}),n("theme",{light:"var(--border)",dark:"var(--text-light)"})),b=({id:r,labelClass:t,...o})=>a.jsxs(te,{children:[a.jsx("input",{type:"checkbox",id:r,checked:o.checked,onChange:o.onChange}),a.jsx("label",{className:t||"",htmlFor:r,children:a.jsx("i",{className:"icon-check-regular"})})]});b.propTypes={id:i.string.isRequired,labelClass:i.string};const w=({review:r,active:t,setActive:o,index:d})=>{const m=()=>{t===r.id?o(""):o(r.id)};return a.jsxs(N,{className:"card-container card-container--light p-4 rounded-2xl",type:"slideUp",index:d,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(b,{id:r.id,labelClass:"dark:!border-[var(--label-light)]"}),a.jsx(Z,{product:r.product,imgSize:40,titleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",subtitleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",withCategory:!0})]}),a.jsx("button",{className:`btn-collapse ${t===r.id?"active":""}`,onClick:m,"aria-label":"Toggle",children:a.jsx("i",{className:"icon-chevron-down-regular"})})]}),a.jsx(k,{in:t===r.id,children:a.jsx("div",{className:"mt-4 border rounded-[10px]",children:a.jsx("table",{className:"border-collapse w-full",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Date:"}),a.jsx("td",{className:"p-2 border-b",children:x(r.date).format("DD.MM.YY")})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Status:"}),a.jsx("td",{className:"capitalize p-2 border-b",children:r.status})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Rating:"}),a.jsx("td",{className:"p-2 border-b",children:a.jsx(Q,{value:r.rating})})]}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Review:"})}),a.jsx("tr",{children:a.jsx("td",{className:"p-2 border-b",colSpan:"2",children:r.review})}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Author:"})}),a.jsx("tr",{children:a.jsxs("td",{className:"p-2",colSpan:"2",children:[r.user.firstName," ",r.user.lastName]})})]})})})})]})};w.propTypes={review:i.object.isRequired,active:i.string.isRequired,setActive:i.func.isRequired,index:i.number.isRequired};const u=[{id:"review-1",status:"pending",product:{category:"lingerie",name:"Gioia Super Push-up Bra",img:U},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-2",status:"approved",product:{category:"lingerie",name:"Medium Control Slip",img:A},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-3",status:"trash",product:{category:"sportswear",name:"Non Wired Sports Bra",img:V},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-4",status:"approved",product:{category:"accessories",name:"Square Sunglasses",img:ae},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-5",status:"approved",product:{category:"accessories",name:"Cross-body Bag",img:I},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-6",status:"pending",product:{category:"accessories",name:"Leather Cross Body Bag",img:X},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-7",status:"approved",product:{category:"shoes",name:"Leather Flat Sandals",img:Y},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-8",status:"approved",product:{category:"accessories",name:"Hair clip with Pearls",img:K},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-9",status:"approved",product:{category:"accessories",name:"Watch with Leather Strap",img:$},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-10",status:"approved",product:{category:"sportswear",name:"Non Wired Sports Top",img:P},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-11",status:"approved",product:{category:"shoes",name:"Birkenstock Arizona",img:F},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-12",status:"trash",product:{category:"shoes",name:"Crocs Jibbitz Crocband",img:L},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:2.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-13",status:"approved",product:{category:"shoes",name:"ASICS Gel-Sonoma 7",img:_},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-14",status:"pending",product:{category:"accessories",name:"Guess Abey Small Hobo",img:z},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-15",status:"trash",product:{category:"accessories",name:"Puma Core Pop Boxy X-Body",img:M},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-16",status:"approved",product:{category:"accessories",name:"Traum Blue Ring Earrings",img:D},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:1,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-17",status:"approved",product:{category:"dresses",name:"Dressa Turquoise Flower Dress",img:W},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-18",status:"pending",product:{category:"dresses",name:"Dressa Mint Mid-length Dress",img:G},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-19",status:"approved",product:{category:"jeans",name:"Levi's XL Balloon Medium Indigo",img:H},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-20",status:"approved",product:{category:"jeans",name:"Trendyol Clear Blue Mom Jeans",img:J},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()}],ie=()=>{const{width:r}=R(),[t,o]=c.useState("all"),[d,m]=c.useState(""),[j,g]=c.useState("");c.useEffect(()=>(window.addEventListener("resize",()=>{g("")}),()=>{window.removeEventListener("resize",()=>{g("")})}),[]);const y=s=>s==="all"?u.length:u.filter(l=>l.status===s).length,S=u.sort((s,l)=>{const C=x(s.date);return x(l.date)-C}).filter(s=>t==="all"?s:s.status===t).filter(s=>d===""?s:s.product.name.toLowerCase().includes(d.toLowerCase())),p=ee(S,10);return a.jsx("div",{className:"layout-wrapper",children:a.jsxs(N,{className:"card flex flex-col flex-1 w-full h-full",children:[a.jsxs("div",{className:"flex flex-col gap-5 p-5 !pb-4 border-b xs:p-6",children:[a.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[a.jsx(E,{value:d,onChange:m,wrapperClass:"flex-1",placeholder:"Search for Product..."}),a.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex"})]}),a.jsx("div",{className:"flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between",children:a.jsx("div",{className:"flex flex-wrap gap-x-6 gap-y-4",children:B.map((s,l)=>a.jsx(v,{...s,qty:y(s.value),active:t,setActive:o},l))})})]}),a.jsx("div",{className:"flex-1 px-5 pt-4 pb-5 xs:px-6 xs:pb-6 md:pb-2.5",children:r<768?a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx("div",{className:"flex flex-col gap-4",children:p.currentItems().map((s,l)=>a.jsx(w,{review:s,active:j,setActive:g,index:l},l))}),p.maxPage>1&&a.jsx(h,{pagination:p})]}):a.jsx(q,{columns:re,dataSource:p.currentItems(),rowKey:"id",rowSelection:{type:"checkbox"},pagination:!1,locale:{emptyText:a.jsx(O,{title:"No Reviews Found"})},showSorterTooltip:!1,footer:()=>a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("p",{className:"uppercase",children:p.showingOf()}),a.jsx(h,{pagination:p,btnClass:"dark:bg-widget"})]})})})]})})},Ne=()=>a.jsxs(a.Fragment,{children:[a.jsx(T,{title:"Reviews"}),a.jsx(ie,{})]});export{Ne as default};