import{j as e}from"./mui-306f5cf6.js";import{A as c,G as p}from"./GoogleButton-fc3a8389.js";import{P as x}from"./PasswordInput-526fb567.js";import{u as h,C as f}from"./index.esm-27ca21fc.js";import{Y as g,a as j,k as v}from"./index-ef19bcd1.js";import"./recharts-68aed0f6.js";const A=({setIsAuthenticated:l})=>{const{register:t,control:i,handleSubmit:o,formState:{errors:r}}=h(),n=g(),{theme:m}=j(),a=s=>{const{email:d,password:u}=s;d==="admin@aimstravels.com"&&u==="27.04.1987@Anees"?(l(!0),localStorage.setItem("isAuthenticated","true"),n("/")):alert("Invalid email or password.")};return e.jsx(c,{title:"Sign In",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("form",{onSubmit:o(a),children:[e.jsxs("div",{className:"field-wrapper mb-5",children:[e.jsx("label",{className:"field-label",htmlFor:"email",children:"Email"}),e.jsx("input",{className:v("field-input",{"field-input--error":r.email}),id:"email",type:"text",placeholder:"Enter your email",...t("email",{required:!0,pattern:/^\S+@\S+$/i})}),r.email&&e.jsx("p",{className:"error-message",children:"Please enter a valid email."})]}),e.jsx(f,{name:"password",control:i,rules:{required:!0},render:({field:s})=>e.jsx(x,{id:"password",placeholder:"Enter your password",isInvalid:r.password,value:s.value,onChange:s.onChange,innerRef:s.ref})}),r.password&&e.jsx("p",{className:"error-message",children:"Password is required."}),e.jsx("button",{className:`btn btn--primary w-full mt-6 ${m==="light"?"green":""}`,type:"submit",children:"Sign In"})]}),e.jsx("div",{className:"flex flex-col gap-4 xs:gap-6",children:e.jsx(p,{onSubmit:a})})]})})};export{A as default};