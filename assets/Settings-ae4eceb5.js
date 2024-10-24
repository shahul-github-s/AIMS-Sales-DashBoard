import{j as e,w as S,r as y}from"./mui-913aed92.js";import{S as w,k as x,f as h,c as k,Q as C,A as F}from"./index-9074475a.js";import{A}from"./AppGrid-3a1fe67a.js";import{P as L,a as R}from"./react-number-format.es-29132dc5.js";import{u as E}from"./web-b54d8366.js";import{S as Y}from"./index-f91c2928.js";import{u as P,C as f}from"./index.esm-a6fb6a1d.js";import{P as N}from"./PasswordInput-e7bed938.js";import"./browser-25fb6bf6.js";import"./memoize-one.esm-297ddbcb.js";const q=({data:c,index:o,isFirstChild:r,isLastChild:t})=>e.jsxs(w,{className:x("flex items-center justify-between",{"border-b pb-4":!t},{"pt-4":!r}),type:"slideUp",index:o,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`w-[60px] h-[60px] hidden xs:flex md:hidden lg:flex items-center justify-center btn--base
                     rounded-[10px]`,children:e.jsx("i",{className:`icon-${c.device}-regular -mt-[1px] text-2xl text-sidebar dark:text-turquoise`})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-[15px] text-header font-semibold",children:c.title}),e.jsx("span",{className:"text-label",children:S(c.timestamp).format("MMM DD, YYYY [at] hh:mm A")})]})]}),e.jsx("button",{className:"font-semibold text-[15px] text-peach dark:text-turquoise",children:"Logout"})]}),v=[{title:"Web",device:"desktop",timestamp:h.date.past()},{title:"Ipad",device:"tablet",timestamp:h.date.past()},{title:"Iphone",device:"mobile",timestamp:h.date.past()},{title:"Web",device:"desktop",timestamp:h.date.past()},{title:"Web",device:"desktop",timestamp:h.date.past()},{title:"Tablet, Android",device:"tablet",timestamp:h.date.past()},{title:"Mobile, Android",device:"mobile",timestamp:h.date.past()},{title:"Web",device:"desktop",timestamp:h.date.past()}],I=()=>{const[c,{height:o}]=E();return e.jsxs(w,{className:"card h-[600px] md:h-full overflow-hidden",children:[e.jsxs("div",{className:`flex flex-col gap-4 p-5 pb-[18px] xs:flex-row xs:justify-between xs:items-center
                 xs:pt-[28px] xs:px-6`,ref:c,children:[e.jsx("h2",{children:"Login History"}),e.jsx("button",{className:`btn btn--sm btn--base w-full xs:w-[115px] text-sidebar dark:text-turquoise hover:border-sidebar
                        dark:hover:border-turquoise`,children:"Logout All"})]}),e.jsx(k,{heightDeps:o,children:e.jsx("div",{className:"track pb-6 px-4 xs:pb-[28px] xs:px-6",children:v.sort((r,t)=>t.timestamp-r.timestamp).map((r,t)=>e.jsx(q,{data:r,isFirstChild:t===0,isLastChild:t===v.length-1,index:t},t))})})]})},z=function c(o){function r(a,s,d){var l,n={};if(Array.isArray(a))return a.concat(s);for(l in a)n[d?l.toLowerCase():l]=a[l];for(l in s){var p=d?l.toLowerCase():l,m=s[l];n[p]=p in n&&typeof m=="object"?r(n[p],m,p=="headers"):m}return n}function t(a,s,d,l,n){var p=typeof a!="string"?(s=a).url:a,m={config:s},i=r(o,s),b={};l=l||i.data,(i.transformRequest||[]).map(function(u){l=u(l,i.headers)||l}),i.auth&&(b.authorization=i.auth),l&&typeof l=="object"&&typeof l.append!="function"&&typeof l.text!="function"&&(l=JSON.stringify(l),b["content-type"]="application/json");try{b[i.xsrfHeaderName]=decodeURIComponent(document.cookie.match(RegExp("(^|; )"+i.xsrfCookieName+"=([^;]*)"))[2])}catch{}return i.baseURL&&(p=p.replace(/^(?!.*\/\/)\/?/,i.baseURL+"/")),i.params&&(p+=(~p.indexOf("?")?"&":"?")+(i.paramsSerializer?i.paramsSerializer(i.params):new URLSearchParams(i.params))),(i.fetch||fetch)(p,{method:(d||i.method||"get").toUpperCase(),body:l,headers:r(i.headers,b,!0),credentials:i.withCredentials?"include":n}).then(function(u){for(var j in u)typeof u[j]!="function"&&(m[j]=u[j]);return i.responseType=="stream"?(m.data=u.body,m):u[i.responseType||"text"]().then(function(g){m.data=g,m.data=JSON.parse(g)}).catch(Object).then(function(){return(i.validateStatus?i.validateStatus(u.status):u.ok)?m:Promise.reject(m)})})}return o=o||{},t.request=t,t.get=function(a,s){return t(a,s,"get")},t.delete=function(a,s){return t(a,s,"delete")},t.head=function(a,s){return t(a,s,"head")},t.options=function(a,s){return t(a,s,"options")},t.post=function(a,s,d){return t(a,d,"post",s)},t.put=function(a,s,d){return t(a,d,"put",s)},t.patch=function(a,s,d){return t(a,d,"patch",s)},t.all=Promise.all.bind(Promise),t.spread=function(a){return a.apply.bind(a,a)},t.CancelToken=typeof AbortController=="function"?AbortController:Object,t.defaults=o,t.create=c,t}(),U=()=>z.get("https://restcountries.com/v3.1/all").then(c=>{const o=[];return c.data.forEach(r=>{o.push({value:r.cca2,label:r.name.common})}),o.sort((r,t)=>r.label.localeCompare(t.label))}).catch(c=>console.log(c)),D=()=>{const[c,o]=y.useState(),{register:r,handleSubmit:t,setValue:a,control:s,formState:{errors:d}}=P(),l=n=>{console.log(n),C.success("Profile updated successfully!")};return y.useEffect(()=>{U().then(n=>o(n))},[]),e.jsxs("div",{className:"px-4 pb-4 pt-5 rounded-2xl border dark:bg-body dark:border-body",children:[e.jsxs("form",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-6",children:[e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"firstName",children:"First Name"}),e.jsx("input",{className:x("field-input",{"field-input--error":d.firstName}),placeholder:"Your First Name",id:"firstName",type:"text",...r("firstName",{required:!0})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"lastName",children:"Last Name"}),e.jsx("input",{className:x("field-input",{"field-input--error":d.lastName}),placeholder:"Your Last Name",id:"lastName",type:"text",...r("lastName",{required:!0})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"phone",children:"Phone Number"}),e.jsx(f,{name:"phone",control:s,defaultValue:"",render:({field:n})=>e.jsx(L,{className:x("field-input",{"field-input--error":d.phone}),placeholder:"Your Phone Number",id:"phone",format:"+1 (###) ###-####",mask:"_",getInputRef:n.ref,value:n.value,onValueChange:n.onChange})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"email",children:"Email"}),e.jsx("input",{className:x("field-input",{"field-input--error":d.email}),placeholder:"Your Email Address",id:"email",type:"text",...r("email",{required:!0,pattern:/^\S+@\S+$/i})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"country",children:"Country"}),e.jsx(f,{name:"country",control:s,render:({field:n})=>e.jsx(Y,{variant:"basic",placeholder:"Select your country",id:"country",isSearchable:!0,options:c,value:n.value,onChange:p=>{n.onChange(p),a("city","")}})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"city",children:"City"}),e.jsx("input",{className:"field-input",placeholder:"Your City",id:"city",type:"text",...r("city")})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"address",children:"Address"}),e.jsx("input",{className:"field-input",placeholder:"Your Address",id:"address",type:"text",...r("address")})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"zipCode",children:"Postal Code"}),e.jsx("input",{className:x("field-input",{"field-input--error":d.zipCode}),placeholder:"Your Postal Code",id:"zipCode",type:"text",...r("zipCode",{required:!0,pattern:/^\d{5}(?:[-\s]\d{4})?$/})})]}),e.jsxs("div",{className:"field-wrapper md:col-span-2",children:[e.jsx("label",{className:"field-label",htmlFor:"bio",children:"About You"}),e.jsx("textarea",{className:"field-input !py-4 !h-[93px]",placeholder:"Enter personal bio",id:"bio",...r("about")})]})]}),e.jsx("button",{className:"btn btn--primary w-full mt-6 !p-0 md:w-[174px] md:ml-auto",onClick:t(l),children:"Update Profile"})]})},M=()=>{const{handleSubmit:c,control:o,watch:r,formState:{errors:t}}=P({defaultValues:{currentPassword:"",newPassword:"",repeatNewPassword:""}}),a=s=>{console.log(s),C.success("Password changed successfully!")};return e.jsxs("form",{className:`px-4 py-5 rounded-2xl border dark:bg-body dark:border-body grid grid-cols-1 gap-4
              md:grid-cols-2 md:gap-y-6`,onSubmit:c(a),children:[e.jsx(f,{name:"currentPassword",control:o,rules:{required:!0},render:({field:s})=>e.jsx(N,{id:"currentPassword",label:"Current Password",placeholder:"Enter Current Password",isInvalid:t.currentPassword,innerRef:s.ref,value:s.value,onChange:s.onChange})}),e.jsx(f,{name:"newPassword",control:o,render:({field:s})=>e.jsx(N,{id:"newPassword",label:"New Password",placeholder:"Enter New Password",isInvalid:t.newPassword,innerRef:s.ref,value:s.value,onChange:s.onChange})}),e.jsx(f,{name:"repeatNewPassword",control:o,rules:{validate:s=>s===r("newPassword")},render:({field:s})=>e.jsx(N,{id:"repeatNewPassword",label:"Repeat New Password",placeholder:"Repeat new password",isInvalid:t.repeatNewPassword,innerRef:s.ref,value:s.value,onChange:s.onChange})}),e.jsxs("div",{className:"flex flex-col items-center gap-4 md:flex-row md:justify-end md:gap-[30px] md:mt-6",children:[e.jsx("button",{className:"text-header font-semibold hover:text-peach",onClick:s=>s.preventDefault(),children:"Forgot password?"}),e.jsxs("button",{className:"btn btn--primary w-full md:w-[140px] lg:w-[200px]",type:"submit",children:[e.jsx("span",{className:"md:hidden lg:inline",children:"Change password"}),e.jsx("span",{className:"hidden md:inline lg:hidden",children:"Save"})]})]})]})},O=()=>e.jsxs(w,{className:"card px-4 py-6 h-full xs:p-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"mb-4",children:"Edit Profile"}),e.jsx(D,{})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-4",children:"Change Password"}),e.jsx(M,{})]})]}),H={profile_card:e.jsx(R,{isPrivate:!0}),login_history:e.jsx(I,{}),edit_profile:e.jsx(O,{})},X=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Settings"}),e.jsx(A,{id:"settings",widgets:H})]});export{X as default};
