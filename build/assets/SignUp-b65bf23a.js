import{P as n,j as e}from"./mui-913aed92.js";import{y as d,A as u,G as x}from"./GoogleButton-d869610d.js";import{P as h}from"./PasswordInput-6c2cca88.js";import{Q as f,ai as g,a as j,k as o}from"./index-74978c6f.js";import{u as b,C as N}from"./index.esm-a6fb6a1d.js";const v="/assets/twitter-3d6bd1e4.svg",c=({text:t="Sign In",onSubmit:r})=>{const a=s=>{f.error(s)};return e.jsxs(d,{className:"btn btn--base h-[50px] gap-2.5 cursor-pointer",client_id:"Y0VsMEN5TlFXVXU0cGhTQWNEZzA6MTpjaQ",client_secret:"PfoXnBBOyMgR9EmP_PIbTpPWjpvVBj-ITLoFtCOoD92PpI5GMK",redirect_uri:"https://comvi.merku.love",onReject:a,onResolve:r,children:[e.jsx("img",{className:"w-[22px]",src:v,alt:"Google",width:22,height:22}),t," with Twitter"]})};c.propTypes={onSubmit:n.func,text:n.string};const E=()=>{const{register:t,control:r,handleSubmit:a,formState:{errors:s}}=b(),m=g(),{theme:p}=j(),i=()=>m("/");return e.jsx(u,{title:"Create an Account",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("form",{onSubmit:a(i),children:[e.jsxs("div",{className:"flex flex-col gap-5 mb-6",children:[e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"name",children:"Name"}),e.jsx("input",{className:o("field-input",{"field-input--error":s.name}),id:"name",type:"text",placeholder:"Enter your name",...t("name",{required:!0})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{className:"field-label",htmlFor:"email",children:"Email"}),e.jsx("input",{className:o("field-input",{"field-input--error":s.email}),id:"email",type:"text",placeholder:"Enter your email",...t("email",{required:!0,pattern:/^\S+@\S+$/i})})]}),e.jsx(N,{name:"password",control:r,rules:{required:!0},render:({field:l})=>e.jsx(h,{id:"password",placeholder:"Enter your password",isInvalid:s.password,value:l.value,onChange:l.onChange,innerRef:l.ref})})]}),e.jsx("button",{className:`btn btn--primary w-full ${p==="light"?"green":""}`,type:"submit",children:"Create an Account"})]}),e.jsxs("div",{className:"flex flex-col gap-4 xs:gap-6",children:[e.jsx(x,{text:"Sign Up",onSubmit:i}),e.jsx(c,{text:"Sign Up",onSubmit:i})]}),e.jsxs("p",{className:"flex items-center justify-center gap-3",children:["Already have an Account?",e.jsx("a",{className:"font-semibold text-[15px] text-sidebar dark:text-peach hover:text-header",href:"/sign-in",children:"Sign In"})]})]})})};export{E as default};
