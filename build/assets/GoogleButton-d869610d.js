import{P as ie,j as K,r as t,R as J}from"./mui-913aed92.js";import{aj as ue,S as pe,Q as me}from"./index-74978c6f.js";const fe=({title:e,children:a})=>K.jsxs(K.Fragment,{children:[K.jsx(ue,{children:K.jsx("title",{children:"AIMS Sales Report"})}),K.jsx("div",{className:"flex flex-col flex-1 justify-center items-center",children:K.jsxs(pe,{className:"bg-widget rounded-[20px] w-full p-5 xs:p-6 md:p-20",type:"slideUp",children:[K.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[K.jsx("h1",{className:"mt-4 mb-2",children:"AIMS"}),K.jsx("p",{className:"max-w-[220px] text-label",children:"Sales Analytics"})]}),a]})})]});fe.propTypes={children:ie.node.isRequired,title:ie.string.isRequired};function F(){return(F=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(e[f]=s[f])}return e}).apply(this,arguments)}function le(e,a){(a==null||a>e.length)&&(a=e.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=e[s];return f}var ae=window;t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.client_id,E=e.className,w=e.redirect_uri,S=e.scope,_=S===void 0?"profile":S,N=e.isOnlyGetToken,g=N!==void 0&&N,x=e.scope_data,I=x===void 0?{profile:{essential:!0}}:x,P=e.response_type,R=P===void 0?"token":P,k=e.children,l=e.onReject,u=e.onResolve,c=e.onLoginStart,p=t.useRef(null),h=t.useState(!1),L=h[0],y=h[1];t.useEffect(function(){!L&&r()},[L]),t.useEffect(function(){return function(){p.current&&p.current.remove()}},[]);var b=t.useCallback(function(){return!!document.getElementById("amazon-login")},[]),d=t.useCallback(function(m,C,H,D,j){C===void 0&&(C="script");var T=m.createElement(C);T.id=H,T.src=D,T.async=!0,T.defer=!0;var z=document.getElementsByTagName("script")[0];p.current=T,z&&z.parentNode&&z.parentNode.insertBefore(T,z),T.onload=j},[]),i=t.useCallback(function(m){try{return fetch("https://api.amazon.com/user/profile",{headers:{Authorization:"Bearer "+m.access_token}}).then(function(C){return C.json()}).then(function(C){u({provider:"amazon",data:F({},C,m)})}).catch(function(C){l(C)}).finally(function(){}),Promise.resolve()}catch(C){return Promise.reject(C)}},[l,u]),n=t.useCallback(function(m){g?u({provider:"amazon",data:F({},m)}):i(m)},[i,u,g]),o=t.useCallback(function(m){l(m)},[l]),r=t.useCallback(function(){b()?y(!0):d(document,"script","amazon-login","https://assets.loginwithamazon.com/sdk/na/login1.js",function(){ae.amazon.Login.setClientId(f),y(!0)})},[b,f,d]),v=t.useCallback(function(){L&&(ae.amazon?(c&&c(),ae.amazon.Login.authorize({scope:_,scope_data:I,response_type:R,redirect_uri:w,state:s},function(m){m.error?o(m.error):n(m)})):(r(),l("Google SDK isn't loaded!")))},[r,_,s,l,I,L,o,c,w,R,n]);return J.createElement("div",{className:E,onClick:v},k)});var ce=window;t.memo(function(e){var a=e.appId,s=e.scope,f=s===void 0?"email,public_profile":s,E=e.state,w=E===void 0||E,S=e.xfbml,_=S===void 0||S,N=e.cookie,g=N===void 0||N,x=e.version,I=x===void 0?"v2.7":x,P=e.language,R=P===void 0?"en_EN":P,k=e.auth_type,l=k===void 0?"":k,u=e.className,c=e.onLoginStart,p=e.onReject,h=e.onResolve,L=e.redirect_uri,y=e.fieldsProfile,b=y===void 0?"id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender":y,d=e.response_type,i=d===void 0?"code":d,n=e.return_scopes,o=n===void 0||n,r=e.isOnlyGetToken,v=r!==void 0&&r,m=e.children,C=t.useRef(null),H=t.useState(!1),D=H[0],j=H[1],T=t.useState(!1),z=T[0],O=T[1];t.useEffect(function(){!D&&Y()},[D]),t.useEffect(function(){return function(){C.current&&C.current.remove()}},[]);var A=t.useCallback(function(B,M){var $=B.createElement("script");$.id="facebook-jssdk",$.src="https://connect.facebook.net/en_EN/sdk.js";var G=B.getElementsByTagName("script")[0];G&&G.parentNode&&G.parentNode.insertBefore($,G),M()},[]),W=t.useCallback(function(){return!!document.getElementById("facebook-jssdk")},[]),q=t.useCallback(function(B,M){var $=window;$.fbAsyncInit=function(){$.FB&&$.FB.init(F({},B)),j(!0);var G=M.getElementById("fb-root");G||((G=M.createElement("div")).id="fb-root",M.body.appendChild(G)),C.current=G}},[]),ee=t.useCallback(function(B){ce.FB.api("/me",{locale:R,fields:b},function(M){h({provider:"facebook",data:F({},B,M)})})},[b,R,h]),te=t.useCallback(function(B){console.log("🚀 ~ file: index.tsx:127 ~ response:",B),B.authResponse?v?h({provider:"facebook",data:F({},B.authResponse)}):ee(B.authResponse):p(B),O(!1)},[ee,v,p,h]),Y=t.useCallback(function(){W()?j(!0):A(document,function(){q({appId:a,xfbml:_,version:I,state:w,cookie:g,redirect_uri:L,response_type:i},document)})},[w,a,_,g,I,q,L,i,A,W]),Z=t.useCallback(function(){D&&!z&&(ce.FB?(O(!0),c&&c(),ce.FB.login(te,{scope:f,return_scopes:o,auth_type:l})):(Y(),p("Fb isn't loaded!"),O(!1)))},[Y,f,p,l,D,c,z,o,te]);return J.createElement("div",{className:u,onClick:Z},m)});var Q="875c0462-6309-4ddf-9889-5227b1acc82c",ne=window,he=t.memo(function(e){var a=e.client_id,s=e.scope,f=s===void 0?"https://www.googleapis.com/auth/userinfo.profile":s,E=e.prompt,w=E===void 0?"select_account":E,S=e.typeResponse,_=S===void 0?"accessToken":S,N=e.ux_mode,g=e.className,x=g===void 0?"":g,I=e.login_hint,P=I===void 0?"":I,R=e.access_type,k=R===void 0?"online":R,l=e.onLoginStart,u=e.onReject,c=e.onResolve,p=e.redirect_uri,h=p===void 0?"/":p,L=e.auto_select,y=L!==void 0&&L,b=e.isOnlyGetToken,d=b!==void 0&&b,i=e.cookie_policy,n=i===void 0?"single_host_origin":i,o=e.hosted_domain,r=o===void 0?"":o,v=e.discoveryDocs,m=v===void 0?"":v,C=e.children,H=e.fetch_basic_profile,D=H===void 0||H,j=t.useRef(null),T=t.useState(!1),z=T[0],O=T[1],A=t.useState(null),W=A[0],q=A[1];t.useEffect(function(){!z&&M()},[z]),t.useEffect(function(){return function(){j.current&&j.current.remove()}},[]);var ee=t.useCallback(function(){return!!document.getElementById("google-login")},[]),te=t.useCallback(function(G,V,U,oe,de){V===void 0&&(V="script");var X=G.createElement(V);X.id=U,X.src=oe,X.async=!0,X.defer=!0;var re=document.getElementsByTagName("script")[0];j.current=X,re&&re.parentNode&&re.parentNode.insertBefore(X,re),X.onload=de},[]),Y=t.useCallback(function(G){if(_==="accessToken"){var V=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q,Authorization:"Bearer "+G.access_token});fetch("https://cors.bridged.cc/https://www.googleapis.com/oauth2/v3/userinfo?alt=json",{method:"GET",headers:V}).then(function(U){return U.json()}).then(function(U){var oe=F({},G,U);c({provider:"google",data:oe})}).catch(function(U){u(U)})}else fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+G.credential,{method:"GET"}).then(function(U){return U.json()}).then(function(U){var oe=F({},G,U);c({provider:"google",data:oe})}).catch(function(U){u(U)})},[_,u,c]),Z=t.useCallback(function(G){G&&k==="offline"||d?c({provider:"google",data:G}):Y(G)},[k,d,Y,c]),B=t.useCallback(function(G){u({provider:"google",data:G})},[u]),M=t.useCallback(function(){ee()?O(!0):te(document,"script","google-login","https://accounts.google.com/gsi/client",function(){var G={client_id:a,ux_mode:N},V=null;if(_==="idToken")ne.google.accounts.id.initialize(F({},G,{auto_select:y,prompt:"select_account",login_uri:h,callback:Z,native_callback:Z,error_callback:B}));else{var U=F({},G,{scope:f,prompt:w,login_hint:P,access_type:k,hosted_domain:r,redirect_uri:h,cookie_policy:n,discoveryDocs:m,immediate:!0,fetch_basic_profile:D,callback:Z,error_callback:B});V=k==="offline"?ne.google.accounts.oauth2.initCodeClient(U):ne.google.accounts.oauth2.initTokenClient(U)}V&&q(V),O(!0)})},[f,w,N,a,P,y,k,h,_,m,n,r,Z,B,D,te,ee]),$=t.useCallback(function(){z&&(ne.google?(l&&l(),W?k==="offline"?W.requestCode():W.requestAccessToken():ne.google.accounts.id.prompt()):(M(),u("Google SDK isn't loaded!")))},[k,W,z,M,l,u]);return J.createElement("div",{className:x,onClick:$},C)});t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.scope,E=f===void 0?"repo,gist":f,w=e.client_id,S=e.client_secret,_=e.className,N=_===void 0?"":_,g=e.redirect_uri,x=e.allow_signup,I=x!==void 0&&x,P=e.isOnlyGetToken,R=P!==void 0&&P,k=e.isOnlyGetCode,l=k!==void 0&&k,u=e.children,c=e.onReject,p=e.onResolve,h=e.onLoginStart;t.useEffect(function(){var n=new URL(window.location.href),o=n.searchParams.get("code"),r=n.searchParams.get("state");r!=null&&r.includes("_github")&&o&&(localStorage.setItem("github",o),window.close())},[]);var L=t.useCallback(function(n){fetch("https://cors.bridged.cc/https://api.github.com//user",{method:"GET",headers:{Authorization:"token "+n.access_token,"x-cors-grida-api-key":Q}}).then(function(o){return o.json()}).then(function(o){p({provider:"github",data:F({},o,n)})}).catch(function(o){c(o)})},[c,p]),y=t.useCallback(function(n){if(l)p({provider:"github",data:{code:n}});else{var o={code:n,state:s,redirect_uri:g,client_id:w,client_secret:S},r=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q});fetch("https://cors.bridged.cc/https://github.com/login/oauth/access_token",{method:"POST",headers:r,body:new URLSearchParams(o)}).then(function(v){return v.text()}).then(function(v){for(var m,C={},H=function(j,T){var z;if(typeof Symbol>"u"||j[Symbol.iterator]==null){if(Array.isArray(j)||(z=function(A,W){if(A){if(typeof A=="string")return le(A,void 0);var q=Object.prototype.toString.call(A).slice(8,-1);return q==="Object"&&A.constructor&&(q=A.constructor.name),q==="Map"||q==="Set"?Array.from(A):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?le(A,void 0):void 0}}(j))){z&&(j=z);var O=0;return function(){return O>=j.length?{done:!0}:{done:!1,value:j[O++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(z=j[Symbol.iterator]()).next.bind(z)}(new URLSearchParams(v));!(m=H()).done;){var D=m.value;C[D[0]]=D[1]}C.access_token?R?p({provider:"github",data:C}):L(C):c("no data")}).catch(function(v){c(v)})}},[s,c,L,p,w,g,S,l,R]),b=t.useCallback(function(n){var o=n.type,r=n.code,v=n.provider;try{return Promise.resolve(o==="code"&&v==="github"&&r&&y(r))}catch(m){return Promise.reject(m)}},[y]),d=t.useCallback(function(){window.removeEventListener("storage",d,!1);var n=localStorage.getItem("github");n&&(b({provider:"github",type:"code",code:n}),localStorage.removeItem("github"))},[b]),i=t.useCallback(function(){h&&h(),window.addEventListener("storage",d,!1);var n=window.screen.width/2-225,o=window.screen.height/2-365;window.open("https://github.com/login/oauth/authorize?client_id="+w+"&scope="+E+"&state="+s+"_github&redirect_uri="+g+"&allow_signup="+I,"Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+o+", left="+n)},[E,s,w,g,I,h,d]);return J.createElement("div",{className:N,onClick:i},u)});t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.client_id,E=e.client_secret,w=e.className,S=e.redirect_uri,_=e.fields,N=_===void 0?"id,username,account_type,media_count":_,g=e.scope,x=g===void 0?"user_profile,user_media":g,I=e.response_type,P=I===void 0?"code":I,R=e.isOnlyGetCode,k=R!==void 0&&R,l=e.isOnlyGetToken,u=l!==void 0&&l,c=e.children,p=e.onReject,h=e.onResolve,L=e.onLoginStart;t.useEffect(function(){var o=new URL(window.location.href),r=o.searchParams.get("code"),v=o.searchParams.get("state");v!=null&&v.includes("_instagram")&&r&&(localStorage.setItem("instagram",r),window.close())},[]);var y=t.useCallback(function(o){fetch("https://cors.bridged.cc/https://graph.instagram.com//me?fields="+N+"&access_token="+o.access_token,{method:"GET",headers:{"x-cors-grida-api-key":Q}}).then(function(r){return r.json()}).then(function(r){h({provider:"instagram",data:F({},r,o)})}).catch(function(r){p(r)})},[N,p,h]),b=t.useCallback(function(o){if(k)h({provider:"instagram",data:{code:o}});else{var r={grant_type:"authorization_code",code:o,redirect_uri:S,client_id:f,client_secret:E},v=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q});fetch("https://cors.bridged.cc/https://api.instagram.com/oauth/access_token",{method:"POST",headers:v,body:new URLSearchParams(r)}).then(function(m){return m.json()}).then(function(m){m.access_token?u?h({provider:"instagram",data:m}):y(m):p("no data")}).catch(function(m){p(m)}).finally(function(){})}},[p,h,y,f,S,E,k,u]),d=t.useCallback(function(o){var r=o.type,v=o.code,m=o.provider;try{return Promise.resolve(r==="code"&&m==="instagram"&&v&&b(v))}catch(C){return Promise.reject(C)}},[b]),i=t.useCallback(function(){window.removeEventListener("storage",i,!1);var o=localStorage.getItem("instagram");o&&(d({provider:"instagram",type:"code",code:o}),localStorage.removeItem("instagram"))},[d]),n=t.useCallback(function(){L&&L(),window.addEventListener("storage",i,!1);var o=window.screen.width/2-225,r=window.screen.height/2-365;window.open("https://api.instagram.com/oauth/authorize?response_type="+P+"&client_id="+f+"&scope="+x+"&state="+s+"_instagram&redirect_uri="+S,"Instagram","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+r+", left="+o)},[x,s,f,S,L,P,i]);return J.createElement("div",{className:w,onClick:n},c)});t.memo(function(e){var a=e.tenant,s=a===void 0?"common":a,f=e.state,E=f===void 0?"":f,w=e.client_id,S=e.className,_=e.redirect_uri,N=e.scope,g=N===void 0?"profile openid email":N,x=e.response_type,I=x===void 0?"code":x,P=e.response_mode,R=P===void 0?"query":P,k=e.children,l=e.code_challenge,u=l===void 0?"19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9":l,c=e.code_challenge_method,p=c===void 0?"plain":c,h=e.prompt,L=h===void 0?"select_account":h,y=e.isOnlyGetCode,b=y!==void 0&&y,d=e.isOnlyGetToken,i=d!==void 0&&d,n=e.onLoginStart,o=e.onReject,r=e.onResolve;t.useEffect(function(){var j=new URL(window.location.href),T=j.searchParams.get("code"),z=j.searchParams.get("state");z!=null&&z.includes("_microsoft")&&T&&(localStorage.setItem("microsoft",T),window.close())},[]);var v=t.useCallback(function(j){fetch("https://graph.microsoft.com/v1.0/me",{method:"GET",headers:{Authorization:"Bearer "+j.access_token}}).then(function(T){return T.json()}).then(function(T){r({provider:"microsoft",data:F({},T,j)})}).catch(function(T){o(T)})},[o,r]),m=t.useCallback(function(j){if(b)r({provider:"microsoft",data:{code:j}});else{var T={code:j,scope:g,client_id:w,redirect_uri:_,code_verifier:u,grant_type:"authorization_code"},z=new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"});fetch("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/token",{method:"POST",headers:z,body:new URLSearchParams(T)}).then(function(O){return O.json()}).then(function(O){O.access_token?i?r({provider:"microsoft",data:O}):v(O):o("no data")}).catch(function(O){o(O)})}},[g,s,o,v,w,r,_,u,b,i]),C=t.useCallback(function(j){var T=j.type,z=j.code,O=j.provider;try{return Promise.resolve(T==="code"&&O==="microsoft"&&z&&m(z))}catch(A){return Promise.reject(A)}},[m]),H=t.useCallback(function(){window.removeEventListener("storage",H,!1);var j=localStorage.getItem("microsoft");j&&(C({provider:"microsoft",type:"code",code:j}),localStorage.removeItem("microsoft"))},[C]),D=t.useCallback(function(){n&&n(),window.addEventListener("storage",H,!1);var j=window.screen.width/2-225,T=window.screen.height/2-365;window.open("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/authorize?client_id="+w+`
        &response_type=`+I+`
        &redirect_uri=`+_+`
        &response_mode=`+R+`
        &scope=`+g+`
        &state=`+E+`_microsoft
        &prompt=`+L+`
        &code_challenge=`+u+`
        &code_challenge_method=`+p,"Microsoft","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+T+", left="+j)},[g,E,L,s,w,n,_,R,I,u,H,p]);return J.createElement("div",{className:S,onClick:D},k)});t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.scope,E=f===void 0?"r_liteprofile":f,w=e.client_id,S=e.client_secret,_=e.className,N=_===void 0?"":_,g=e.redirect_uri,x=e.response_type,I=x===void 0?"code":x,P=e.isOnlyGetCode,R=P!==void 0&&P,k=e.isOnlyGetToken,l=k!==void 0&&k,u=e.children,c=e.onLoginStart,p=e.onReject,h=e.onResolve;t.useEffect(function(){var n=new URL(window.location.href),o=n.searchParams.get("code"),r=n.searchParams.get("state");r!=null&&r.includes("_linkedin")&&o&&(localStorage.setItem("linkedin",o),window.close())},[]);var L=t.useCallback(function(n){fetch("https://api.allorigins.win/get?url="+encodeURIComponent("https://api.linkedin.com/v2/me?oauth2_access_token="+n.access_token+"&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"),{method:"GET"}).then(function(o){return o.json()}).then(function(o){var r=F({},n);if(o.contents){var v=JSON.parse(o.contents);typeof n=="object"&&Object.entries(v).map(function(m){r[m[0]]=m[1]})}h({provider:"linkedin",data:r})}).catch(function(o){p(o)})},[p,h]),y=t.useCallback(function(n){if(R)h({provider:"linkedin",data:{code:n}});else{var o={code:n,grant_type:"authorization_code",redirect_uri:g,client_id:w,client_secret:S},r=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q});fetch("https://cors.bridged.cc/https://www.linkedin.com/oauth/v2/accessToken",{method:"POST",headers:r,body:new URLSearchParams(o)}).then(function(v){return v.json()}).then(function(v){l?h({provider:"linkedin",data:v}):L(v)}).catch(function(v){p(v)})}},[p,h,w,L,g,S,R,l]),b=t.useCallback(function(n){var o=n.type,r=n.code,v=n.provider;try{return Promise.resolve(o==="code"&&v==="linkedin"&&r&&y(r))}catch(m){return Promise.reject(m)}},[y]),d=t.useCallback(function(){window.removeEventListener("storage",d,!1);var n=localStorage.getItem("linkedin");n&&(b({provider:"linkedin",type:"code",code:n}),localStorage.removeItem("linkedin"))},[b]),i=t.useCallback(function(){c&&c(),window.addEventListener("storage",d,!1);var n=window.screen.width/2-225,o=window.screen.height/2-365;window.open("https://www.linkedin.com/oauth/v2/authorization?response_type="+I+"&client_id="+w+"&scope="+E+"&state="+s+"_linkedin&redirect_uri="+g,"Linkedin","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+o+", left="+n)},[c,d,I,w,E,s,g]);return J.createElement("div",{className:N,onClick:i},u)});t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.scope,E=f===void 0?"boards:read,pins:read,user_accounts:read":f,w=e.client_id,S=e.client_secret,_=e.className,N=_===void 0?"":_,g=e.redirect_uri,x=e.isOnlyGetCode,I=x!==void 0&&x,P=e.isOnlyGetToken,R=P!==void 0&&P,k=e.children,l=e.onLoginStart,u=e.onReject,c=e.onResolve;t.useEffect(function(){var d=new URL(window.location.href),i=d.searchParams.get("code"),n=d.searchParams.get("state");n!=null&&n.includes("_pinterest")&&i&&(localStorage.setItem("pinterest",i),window.close())},[]);var p=t.useCallback(function(d){fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/user_account",{method:"GET",headers:{Authorization:"Bearer "+d.access_token,"x-cors-grida-api-key":Q}}).then(function(i){return i.json()}).then(function(i){c({provider:"pinterest",data:F({},d,i)})}).catch(function(i){return u(i)})},[u,c]),h=t.useCallback(function(d){try{var i=function(){if(!I){var n={code:d,redirect_uri:g,grant_type:"authorization_code"},o=[];for(var r in n){var v=encodeURIComponent(r),m=encodeURIComponent(n[r]);o.push(v+"="+m)}return o=o.join("&"),Promise.resolve(fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/oauth/token",{method:"POST",headers:{Authorization:"Basic "+btoa(w+":"+S),"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q},body:o}).then(function(C){return C.json()}).catch(function(C){return u(C)})).then(function(C){C.access_token&&(R?c({provider:"pinterest",data:C}):p(C))})}c({provider:"pinterest",data:{code:d}})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},[u,w,p,c,g,S,I,R]),L=t.useCallback(function(d){var i=d.type,n=d.code,o=d.provider;try{return Promise.resolve(i==="code"&&o==="pinterest"&&n&&h(n))}catch(r){return Promise.reject(r)}},[h]),y=t.useCallback(function(){window.removeEventListener("storage",y,!1);var d=localStorage.getItem("pinterest");d&&(L({provider:"pinterest",type:"code",code:d}),localStorage.removeItem("pinterest"))},[L]),b=t.useCallback(function(){l&&l(),window.addEventListener("storage",y,!1);var d=window.screen.width/2-225,i=window.screen.height/2-365;window.open("https://www.pinterest.com/oauth/?client_id="+w+"&scope="+E+"&state="+s+"_pinterest&redirect_uri="+g+"&response_type=code","Pinterest","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+i+", left="+d)},[E,s,w,g,l,y]);return J.createElement("div",{className:N,onClick:b},k)});var be=t.memo(function(e){var a=e.client_id,s=e.className,f=s===void 0?"":s,E=e.redirect_uri,w=e.children,S=e.fields,_=S===void 0?"created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld":S,N=e.state,g=N===void 0?"state":N,x=e.scope,I=x===void 0?"users.read%20tweet.read":x,P=e.isOnlyGetCode,R=P!==void 0&&P,k=e.isOnlyGetToken,l=k!==void 0&&k,u=e.onLoginStart,c=e.onReject,p=e.onResolve;t.useEffect(function(){var i=new URL(window.location.href),n=i.searchParams.get("code");i.searchParams.get("state")&&n&&(localStorage.setItem("twitter",""+n),window.close())},[]);var h=t.useCallback(function(i){fetch("https://cors.bridged.cc/https://api.twitter.com/2/users/me?user.fields="+_,{method:"GET",headers:{Authorization:"Bearer "+i.access_token,"x-cors-grida-api-key":Q}}).then(function(n){return n.json()}).then(function(n){p({provider:"twitter",data:F({},i,n.data)})}).catch(function(n){return c(n)})},[_,c,p]),L=t.useCallback(function(i){try{var n=function(){if(!R){var o=new URLSearchParams({code:i,redirect_uri:E,client_id:a,grant_type:"authorization_code",code_verifier:"challenge"});return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/2/oauth2/token",{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":Q}}).then(function(r){return r.json()}).catch(function(r){return c(r)})).then(function(r){r.access_token&&(l?p({provider:"twitter",data:r}):h(r))})}p({provider:"twitter",data:{code:i}})}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(o){return Promise.reject(o)}},[c,h,p,a,E,R,l]),y=t.useCallback(function(i){var n=i.type,o=i.code,r=i.provider;try{return Promise.resolve(n==="code"&&r==="twitter"&&o&&L(o))}catch(v){return Promise.reject(v)}},[L]),b=t.useCallback(function(){window.removeEventListener("storage",b,!1);var i=localStorage.getItem("twitter");i&&(y({provider:"twitter",type:"code",code:i}),localStorage.removeItem("twitter"))},[y]),d=t.useCallback(function(){try{u&&u(),window.addEventListener("storage",b,!1);var i=window.screen.width/2-225,n=window.screen.height/2-365;return window.open("https://twitter.com/i/oauth2/authorize?response_type=code&client_id="+a+"&redirect_uri="+E+"&scope="+I+"&state="+g+"&code_challenge=challenge&code_challenge_method=plain","twitter","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+n+", left="+i),Promise.resolve()}catch(o){return Promise.reject(o)}},[I,g,a,u,E,b]);return J.createElement("div",{className:f,onClick:d},w)});typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var se=window;t.memo(function(e){var a=e.client_id,s=e.scope,f=s===void 0?"name email":s,E=e.className,w=E===void 0?"":E,S=e.onLoginStart,_=e.onReject,N=e.onResolve,g=e.redirect_uri,x=g===void 0?"/":g,I=e.children,P=t.useRef(null),R=t.useState(!1),k=R[0],l=R[1];t.useEffect(function(){!k&&h()},[k]),t.useEffect(function(){return function(){P.current&&P.current.remove()}},[]);var u=t.useCallback(function(){return!!document.getElementById("apple-login")},[]),c=t.useCallback(function(y,b,d,i,n){b===void 0&&(b="script");var o=y.createElement(b);o.id=d,o.src=i,o.async=!0,o.defer=!0;var r=document.getElementsByTagName("script")[0];P.current=o,r&&r.parentNode&&r.parentNode.insertBefore(o,r),o.onload=n},[]),p=t.useCallback(function(y){N({provider:"apple",data:y})},[N]),h=t.useCallback(function(){u()?l(!0):c(document,"script","apple-login","https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",function(){se.AppleID.auth.init({clientId:a,scope:f,redirectURI:x,state:"origin:web",usePopup:!0}),l(!0)})},[f,a,x,c,u]),L=t.useCallback(function(){try{if(!k)return Promise.resolve();var y=function(){if(se.AppleID){S&&S();var b=function(d,i){try{var n=Promise.resolve(se.AppleID.auth.signIn()).then(function(o){p(o)})}catch(o){return i(o)}return n&&n.then?n.then(void 0,i):n}(0,function(d){_({err:d})});if(b&&b.then)return b.then(function(){})}else h(),_("Apple SDK isn't loaded!")}();return Promise.resolve(y&&y.then?y.then(function(){}):void 0)}catch(b){return Promise.reject(b)}},[p,k,h,S,_]);return J.createElement("div",{className:w,onClick:L},I)});t.memo(function(e){var a=e.state,s=a===void 0?"":a,f=e.scope,E=f===void 0?"user.info.basic":f,w=e.client_key,S=e.className,_=S===void 0?"":S,N=e.redirect_uri,g=e.children,x=e.onResolve,I=e.onLoginStart;t.useEffect(function(){var l=new URL(window.location.href),u=l.searchParams.get("code"),c=l.searchParams.get("state");c!=null&&c.includes("_tiktok")&&u&&(localStorage.setItem("tiktok",u),window.close())},[]);var P=t.useCallback(function(l){var u=l.type,c=l.code,p=l.provider;try{return Promise.resolve(u==="code"&&p==="tiktok"&&c&&x({provider:"tiktok",data:{code:c}}))}catch(h){return Promise.reject(h)}},[x]),R=t.useCallback(function(){window.removeEventListener("storage",R,!1);var l=localStorage.getItem("tiktok");l&&(P({provider:"tiktok",type:"code",code:l}),localStorage.removeItem("instagram"))},[P]),k=t.useCallback(function(){I&&I(),window.addEventListener("storage",R,!1);var l=window.screen.width/2-225,u=window.screen.height/2-365;window.open("https://www.tiktok.com/auth/authorize?client_key="+w+"&scope="+E+"&state="+s+"_tiktok&redirect_uri="+N+"&response_type=code","Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+u+", left="+l)},[E,s,w,N,I,R]);return J.createElement("div",{className:_,onClick:k},g)});const ve="/assets/google-9c973ef5.svg",ge=({text:e="Sign In",onSubmit:a})=>{const s=f=>{me.error(f)};return K.jsxs(he,{className:"btn btn--base h-[50px] gap-2.5 cursor-pointer",client_id:"943143970773-5he4rmdj25pp3h9irumru35k971edsoi.apps.googleusercontent.com",onReject:s,onResolve:a,children:[K.jsx("img",{className:"w-[22px]",src:ve,alt:"Google",width:22,height:22}),e," with Google"]})};ge.propTypes={onSubmit:ie.func,text:ie.string};export{fe as A,ge as G,be as y};
