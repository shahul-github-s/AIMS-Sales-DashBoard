import{P as d,j as a,C as j,w as u,r as p}from"./mui-913aed92.js";import{S as N,Y as y,T as S,o as C,h as R,f as e,Z as B,m as E,C as T,$ as P,j as A,i as L,l as F,n as I,a0 as q,a1 as D,a2 as M,a3 as k,a4 as z,a5 as W,a6 as _,a7 as G,a8 as Y,a9 as H,aa as J,u as O,ab as Q,ac as U,B as V,A as X}from"./index-5b2db7fa.js";import{S as $}from"./Search-0dfddefb.js";import{P as x}from"./Pagination-af19598a.js";import{E as K}from"./Empty-8068ec50.js";import{u as Z}from"./usePagination-76ec6005.js";import{R as ee}from"./columnDefs-cd404f4a.js";import"./helpers-fc71785b.js";const f=({review:r,active:i,setActive:m,index:l})=>{const n=()=>{i===r.id?m(""):m(r.id)};return a.jsxs(N,{className:"card-container card-container--light p-4 rounded-2xl",type:"slideUp",index:l,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(y,{id:r.id,labelClass:"dark:!border-[var(--label-light)]"}),a.jsx(S,{product:r.product,imgSize:40,titleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",subtitleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",withCategory:!0})]}),a.jsx("button",{className:`btn-collapse ${i===r.id?"active":""}`,onClick:n,"aria-label":"Toggle",children:a.jsx("i",{className:"icon-chevron-down-regular"})})]}),a.jsx(j,{in:i===r.id,children:a.jsx("div",{className:"mt-4 border rounded-[10px]",children:a.jsx("table",{className:"border-collapse w-full",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Date:"}),a.jsx("td",{className:"p-2 border-b",children:u(r.date).format("DD.MM.YY")})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Status:"}),a.jsx("td",{className:"capitalize p-2 border-b",children:r.status})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Rating:"}),a.jsx("td",{className:"p-2 border-b",children:a.jsx(C,{value:r.rating})})]}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Review:"})}),a.jsx("tr",{children:a.jsx("td",{className:"p-2 border-b",colSpan:"2",children:r.review})}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Author:"})}),a.jsx("tr",{children:a.jsxs("td",{className:"p-2",colSpan:"2",children:[r.user.firstName," ",r.user.lastName]})})]})})})})]})};f.propTypes={review:d.object.isRequired,active:d.string.isRequired,setActive:d.func.isRequired,index:d.number.isRequired};const g=[{id:"review-1",status:"pending",product:{category:"lingerie",name:"Gioia Super Push-up Bra",img:R},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-2",status:"approved",product:{category:"lingerie",name:"Medium Control Slip",img:B},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-3",status:"trash",product:{category:"sportswear",name:"Non Wired Sports Bra",img:E},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-4",status:"approved",product:{category:"accessories",name:"Square Sunglasses",img:T},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-5",status:"approved",product:{category:"accessories",name:"Cross-body Bag",img:P},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-6",status:"pending",product:{category:"accessories",name:"Leather Cross Body Bag",img:A},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-7",status:"approved",product:{category:"shoes",name:"Leather Flat Sandals",img:L},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-8",status:"approved",product:{category:"accessories",name:"Hair clip with Pearls",img:F},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-9",status:"approved",product:{category:"accessories",name:"Watch with Leather Strap",img:I},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-10",status:"approved",product:{category:"sportswear",name:"Non Wired Sports Top",img:q},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-11",status:"approved",product:{category:"shoes",name:"Birkenstock Arizona",img:D},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-12",status:"trash",product:{category:"shoes",name:"Crocs Jibbitz Crocband",img:M},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:2.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-13",status:"approved",product:{category:"shoes",name:"ASICS Gel-Sonoma 7",img:k},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-14",status:"pending",product:{category:"accessories",name:"Guess Abey Small Hobo",img:z},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-15",status:"trash",product:{category:"accessories",name:"Puma Core Pop Boxy X-Body",img:W},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-16",status:"approved",product:{category:"accessories",name:"Traum Blue Ring Earrings",img:_},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:1,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-17",status:"approved",product:{category:"dresses",name:"Dressa Turquoise Flower Dress",img:G},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-18",status:"pending",product:{category:"dresses",name:"Dressa Mint Mid-length Dress",img:Y},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-19",status:"approved",product:{category:"jeans",name:"Levi's XL Balloon Medium Indigo",img:H},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-20",status:"approved",product:{category:"jeans",name:"Trendyol Clear Blue Mom Jeans",img:J},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()}],ae=()=>{const{width:r}=O(),[i,m]=p.useState("all"),[l,n]=p.useState(""),[h,c]=p.useState("");p.useEffect(()=>(window.addEventListener("resize",()=>{c("")}),()=>{window.removeEventListener("resize",()=>{c("")})}),[]);const v=s=>s==="all"?g.length:g.filter(t=>t.status===s).length,w=g.sort((s,t)=>{const b=u(s.date);return u(t.date)-b}).filter(s=>i==="all"?s:s.status===i).filter(s=>l===""?s:s.product.name.toLowerCase().includes(l.toLowerCase())),o=Z(w,10);return a.jsx("div",{className:"layout-wrapper",children:a.jsxs(N,{className:"card flex flex-col flex-1 w-full h-full",children:[a.jsxs("div",{className:"flex flex-col gap-5 p-5 !pb-4 border-b xs:p-6",children:[a.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[a.jsx($,{value:l,onChange:n,wrapperClass:"flex-1",placeholder:"Search for Product..."}),a.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex"})]}),a.jsx("div",{className:"flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between",children:a.jsx("div",{className:"flex flex-wrap gap-x-6 gap-y-4",children:Q.map((s,t)=>a.jsx(U,{...s,qty:v(s.value),active:i,setActive:m},t))})})]}),a.jsx("div",{className:"flex-1 px-5 pt-4 pb-5 xs:px-6 xs:pb-6 md:pb-2.5",children:r<768?a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx("div",{className:"flex flex-col gap-4",children:o.currentItems().map((s,t)=>a.jsx(f,{review:s,active:h,setActive:c,index:t},t))}),o.maxPage>1&&a.jsx(x,{pagination:o})]}):a.jsx(V,{columns:ee,dataSource:o.currentItems(),rowKey:"id",rowSelection:{type:"checkbox"},pagination:!1,locale:{emptyText:a.jsx(K,{title:"No Reviews Found"})},showSorterTooltip:!1,footer:()=>a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("p",{className:"uppercase",children:o.showingOf()}),a.jsx(x,{pagination:o,btnClass:"dark:bg-widget"})]})})})]})})},ne=()=>a.jsxs(a.Fragment,{children:[a.jsx(X,{title:"Reviews"}),a.jsx(ae,{})]});export{ne as default};