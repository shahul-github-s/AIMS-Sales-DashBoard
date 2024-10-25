import{P as Z,j as c,R as D,r as T}from"./mui-913aed92.js";import{S as Ce,af as Ve}from"./index-74978c6f.js";const oe=({isActive:e,className:t,onClick:r})=>c.jsxs("button",{className:`btn--base w-[100px] h-9 rounded-[10px] text-label font-semibold text-[15px] ${t||""}`,onClick:r,children:[c.jsx("i",{className:`icon-${e?"floppy-disk":"pen-to-square"}-regular mr-2.5`}),e?"Save":"Edit"]});oe.propTypes={isActive:Z.bool,className:Z.string,onClick:Z.func};const Ie={firstName:"Shahul",lastName:"Hameed S",avatar:Ve,role:"admin",mobile:"+1-9846499950",email:"dashboard@comvi.com",city:"California",country:"United States"},Ze=({data:e=Ie,isPrivate:t})=>{const r=`${e.firstName} ${e.lastName}`,n=`${e.city}, ${e.country}`;return c.jsxs(Ce,{className:"card flex flex-col p-5 h-full xs:p-6",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsx("h2",{children:t?"My Profile":"Client Details"}),!t&&c.jsx(oe,{})]}),c.jsxs("div",{className:"flex flex-col flex-1 justify-between gap-4",children:[c.jsxs("div",{className:"flex flex-col items-center gap-4 xs:flex-row xs:gap-6",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{className:"w-20 h-20 rounded-full",src:e.avatar,alt:r}),t&&c.jsx("button",{className:"w-6 h-6 rounded-full bg-peach absolute bottom-0 -right-1 flex items-center justify-center","aria-label":"Change profile picture",children:c.jsx("i",{className:"icon-camera-solid text-[11px] text-white"})})]}),c.jsxs("div",{className:"flex flex-col items-center gap-2 xs:items-start",children:[c.jsx("h3",{children:r}),c.jsx("span",{className:"text-header font-semibold uppercase",children:e.role})]})]}),c.jsxs("ul",{children:[t&&c.jsxs("li",{className:"flex justify-between items-center font-medium pb-[14px] border-b",children:[c.jsx("span",{className:"text-xs text-label uppercase",children:"Full Name :"}),c.jsx("span",{children:r})]}),c.jsxs("li",{className:"flex justify-between items-center font-medium pt-4 pb-[14px] border-b",children:[c.jsx("span",{className:"text-xs text-label uppercase",children:"Mobile :"}),t?c.jsx("span",{children:e.mobile}):c.jsx("a",{href:`tel:${e.mobile}`,children:e.mobile})]}),c.jsxs("li",{className:"flex justify-between items-center font-medium pt-4 pb-[14px] border-b",children:[c.jsx("span",{className:"text-xs text-label uppercase",children:"E-mail :"}),t?c.jsx("span",{className:"max-w-[160px] truncate xxs:max-w-[200px]",children:e.email}):c.jsx("a",{className:"max-w-[160px] truncate xxs:max-w-[200px]",href:`mailto:${e.email}`,children:e.email})]}),c.jsxs("li",{className:`flex justify-between items-center font-medium pt-4 ${t?"":"pb-[14px] border-b"}`,children:[c.jsx("span",{className:"text-xs text-label uppercase",children:"Location :"}),c.jsx("span",{className:"max-w-[160px] truncate xxs:max-w-[200px]",children:t?n:e.location1})]}),!t&&c.jsxs("li",{className:"flex justify-between items-center font-medium pt-4",children:[c.jsx("span",{className:"text-xs text-label uppercase",children:"Location:"}),c.jsx("span",{className:"max-w-[160px] truncate xxs:max-w-[200px]",children:e.location2})]})]})]})]})};function le(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var H;(function(e){e.event="event",e.props="prop"})(H||(H={}));function B(){}function Ee(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(o,f){return o===t[f]})||(t=n,r=e.apply(void 0,n)),r}}function K(e){return!!(e||"").match(/\d/)}function W(e){return e==null}function Ae(e){return typeof e=="number"&&isNaN(e)}function Te(e){return W(e)||Ae(e)||typeof e=="number"&&!isFinite(e)}function Fe(e){var t=T.useRef(e);t.current=e;var r=T.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function ue(e,t){return Array(t+1).join(e)}function Me(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(o=Number(o),!o)return r+a;a=a.replace(".","");var f=1+o,m=a.length;return f<0?a="0."+ue("0",Math.abs(f))+a:f>=m?a=a+ue("0",f-m):a=(a.substring(0,f)||"0")+"."+a.substring(f),r+a}function te(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Oe=Ee(function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}),Re=function(e,t){var r=Math.min(e.selectionStart,t);return{from:{start:r,end:e.selectionEnd},to:{start:r,end:t}}};function Be(e,t,r){return Math.min(Math.max(e,t),r)}function ee(e){return Math.max(e.selectionStart,e.selectionEnd)}function ke(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function _e(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function se(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function De(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function Le(e,t,r,n,a,o,f){f===void 0&&(f=De);var m=a.findIndex(function(V){return V}),p=e.slice(0,m);!t&&!r.startsWith(p)&&(t=p,r=p+r,n=n+p.length);for(var w=r.length,N=e.length,I={},v=new Array(w),b=0;b<w;b++){v[b]=-1;for(var l=0,S=N;l<S;l++){var y=f({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:b,formattedValueIndex:l});if(y&&I[l]!==!0){v[b]=l,I[l]=!0;break}}}for(var d=n;d<w&&(v[d]===-1||!o(r[d]));)d++;var E=d===w||v[d]===-1?N:v[d];for(d=n-1;d>0&&v[d]===-1;)d--;var j=d===-1||v[d]===-1?0:v[d]+1;return j>E?E:n-j<E-n?j:E}function G(e,t,r,n){var a=e.length;if(t=Be(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function $e(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(K(e[r])||K(e[r-1]));return t}function Ke(e,t,r,n,a,o){o===void 0&&(o=B);var f=Fe(function(l,S){var y,d;return Te(l)?(d="",y=""):typeof l=="number"||S?(d=typeof l=="number"?Me(l):l,y=n(d)):(d=a(l,void 0),y=n(d)),{formattedValue:y,numAsString:d}}),m=T.useState(function(){return f(W(e)?t:e,r)}),p=m[0],w=m[1],N=function(l,S){l.formattedValue!==p.formattedValue&&w({formattedValue:l.formattedValue,numAsString:l.value}),o(l,S)},I=e,v=r;W(e)&&(I=p.numAsString,v=!0);var b=f(I,v);return T.useMemo(function(){w(b)},[b.formattedValue]),[p,N]}function Pe(e){return e.replace(/[^0-9]/g,"")}function Ue(e){return e}function qe(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,o=e.getInputRef,f=e.format;f===void 0&&(f=Ue);var m=e.removeFormatting;m===void 0&&(m=Pe);var p=e.defaultValue,w=e.valueIsNumericString,N=e.onValueChange,I=e.isAllowed,v=e.onChange;v===void 0&&(v=B);var b=e.onKeyDown;b===void 0&&(b=B);var l=e.onMouseUp;l===void 0&&(l=B);var S=e.onFocus;S===void 0&&(S=B);var y=e.onBlur;y===void 0&&(y=B);var d=e.value,E=e.getCaretBoundary;E===void 0&&(E=$e);var j=e.isValidInputCharacter;j===void 0&&(j=K);var V=e.isCharacterSame,R=le(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),P=Ke(d,p,!!w,f,m,N),re=P[0],C=re.formattedValue,U=re.numAsString,fe=P[1],q=T.useRef(),z=T.useRef({formattedValue:C,numAsString:U}),ne=function(i,u){z.current={formattedValue:i.formattedValue,numAsString:i.value},fe(i,u)},ae=T.useState(!1),ce=ae[0],ve=ae[1],L=T.useRef(null),k=T.useRef({setCaretTimeout:null,focusTimeout:null});T.useEffect(function(){return ve(!0),function(){clearTimeout(k.current.setCaretTimeout),clearTimeout(k.current.focusTimeout)}},[]);var me=f,J=function(i,u){var s=parseFloat(u);return{formattedValue:i,value:u,floatValue:isNaN(s)?void 0:s}},_=function(i,u,s){i.selectionStart===0&&i.selectionEnd===i.value.length||(te(i,u),k.current.setCaretTimeout=setTimeout(function(){i.value===s&&i.selectionStart!==u&&te(i,u)},0))},$=function(i,u,s){return G(i,u,E(i),s)},Q=function(i,u,s){var h=E(u),A=Le(u,C,i,s,h,j,V);return A=G(u,A,h),A},de=function(i){var u=i.formattedValue;u===void 0&&(u="");var s=i.input,h=i.source,A=i.event,x=i.numAsString,g;if(s){var F=i.inputValue||s.value,M=ee(s);s.value=u,g=Q(F,u,M),g!==void 0&&_(s,g,u)}u!==C&&ne(J(u,x),{event:A,source:h})};T.useEffect(function(){var i=z.current,u=i.formattedValue,s=i.numAsString;(C!==u||U!==s)&&ne(J(C,U),{event:void 0,source:H.props})},[C,U]);var ge=L.current?ee(L.current):void 0,he=typeof window<"u"?T.useLayoutEffect:T.useEffect;he(function(){var i=L.current;if(C!==z.current.formattedValue&&i){var u=Q(z.current.formattedValue,C,ge);i.value=C,_(i,u,C)}},[C]);var xe=function(i,u,s){var h=u.target,A=q.current?Re(q.current,h.selectionEnd):Oe(C,i),x=Object.assign(Object.assign({},A),{lastValue:C}),g=m(i,x),F=me(g);if(g=m(F,void 0),I&&!I(J(F,g))){var M=u.target,O=ee(M),Y=Q(i,C,O);return M.value=C,_(M,Y,C),!1}return de({formattedValue:F,numAsString:g,inputValue:i,event:u,source:s,input:u.target}),!0},X=function(i,u){u===void 0&&(u=0);var s=i.selectionStart,h=i.selectionEnd;q.current={selectionStart:s,selectionEnd:h+u}},pe=function(i){var u=i.target,s=u.value,h=xe(s,i,H.event);h&&v(i),q.current=void 0},ye=function(i){var u=i.target,s=i.key,h=u.selectionStart,A=u.selectionEnd,x=u.value;x===void 0&&(x="");var g;s==="ArrowLeft"||s==="Backspace"?g=Math.max(h-1,0):s==="ArrowRight"?g=Math.min(h+1,x.length):s==="Delete"&&(g=h);var F=0;s==="Delete"&&h===A&&(F=1);var M=s==="ArrowLeft"||s==="ArrowRight";if(g===void 0||h!==A&&!M){b(i),X(u,F);return}var O=g;if(M){var Y=s==="ArrowLeft"?"left":"right";O=$(x,g,Y),O!==g&&i.preventDefault()}else s==="Delete"&&!j(x[g])?O=$(x,g,"right"):s==="Backspace"&&!j(x[g])&&(O=$(x,g,"left"));O!==g&&_(u,O,x),b(i),X(u,F)},be=function(i){var u=i.target,s=function(){var h=u.selectionStart,A=u.selectionEnd,x=u.value;if(x===void 0&&(x=""),h===A){var g=$(x,h);g!==h&&_(u,g,x)}};s(),requestAnimationFrame(function(){s()}),l(i),X(u)},we=function(i){i.persist&&i.persist();var u=i.target,s=i.currentTarget;L.current=u,k.current.focusTimeout=setTimeout(function(){var h=u.selectionStart,A=u.selectionEnd,x=u.value;x===void 0&&(x="");var g=$(x,h);g!==h&&!(h===0&&A===x.length)&&_(u,g,x),S(Object.assign(Object.assign({},i),{currentTarget:s}))},0)},je=function(i){L.current=null,clearTimeout(k.current.focusTimeout),clearTimeout(k.current.setCaretTimeout),y(i)},Ne=ce&&ke()?"numeric":void 0,ie=Object.assign({inputMode:Ne},R,{type:t,value:C,onChange:pe,onKeyDown:ye,onMouseUp:be,onFocus:we,onBlur:je});if(r==="text")return a?D.createElement(D.Fragment,null,a(C,R)||null):D.createElement("span",Object.assign({},R,{ref:o}),C);if(n){var Se=n;return D.createElement(Se,Object.assign({},ie,{ref:o}))}return D.createElement("input",Object.assign({},ie,{ref:o}))}function ze(e,t){var r=t.format,n=t.allowEmptyFormatting,a=t.mask,o=t.patternChar;if(o===void 0&&(o="#"),e===""&&!n)return"";for(var f=0,m=r.split(""),p=0,w=r.length;p<w;p++)r[p]===o&&(m[p]=e[f]||se(a,f),f+=1);return m.join("")}function He(e,t,r){t===void 0&&(t=_e(e));var n=r.format,a=r.patternChar;a===void 0&&(a="#");var o=t.from,f=t.to,m=t.lastValue;m===void 0&&(m="");var p=function(y){return n[y]===a},w=function(y,d){for(var E="",j=0;j<y.length;j++)p(d+j)&&K(y[j])&&(E+=y[j]);return E},N=function(y){return y.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return N(e);if((m===""||o.end-o.start===m.length)&&e.length===n.length){for(var I="",v=0;v<e.length;v++)if(p(v))K(e[v])&&(I+=e[v]);else if(e[v]!==n[v])return N(e);return I}var b=m.substring(0,o.start),l=e.substring(f.start,f.end),S=m.substring(o.end);return""+w(b,0)+N(l)+w(S,o.end)}function We(e,t){var r=t.format,n=t.mask,a=t.patternChar;a===void 0&&(a="#");var o=Array.from({length:e.length+1}).map(function(){return!0}),f=0,m=-1,p={};r.split("").forEach(function(v,b){var l=void 0;v===a&&(f++,l=se(n,f-1),m===-1&&e[b]===l&&(m=b)),p[b]=l});for(var w=function(v){return r[v]===a&&e[v]!==p[v]},N=0,I=o.length;N<I;N++)o[N]=N===m||w(N)||w(N-1);return o[r.indexOf(a)]=!0,o}function Ge(e){var t=e.mask;if(t){var r=t==="string"?t:t.toString();if(r.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function Je(e,t){return e===""?!0:!(t!=null&&t.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function Qe(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;r===void 0&&(r="numeric");var n=e.onKeyDown;n===void 0&&(n=B);var a=e.patternChar;a===void 0&&(a="#");var o=e.value,f=e.defaultValue,m=e.valueIsNumericString,p=le(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);Ge(e);var w=function(l){return We(l,e)},N=function(l){var S=l.key,y=l.target,d=y.selectionStart,E=y.selectionEnd,j=y.value;if(d!==E){n(l);return}var V=d;if(S==="Backspace"||S==="Delete"){var R="right";if(S==="Backspace"){for(;V>0&&t[V-1]!==a;)V--;R="left"}else{for(var P=t.length;V<P&&t[V]!==a;)V++;R="right"}V=G(j,V,w(j),R)}else t[V]!==a&&S!=="ArrowLeft"&&S!=="ArrowRight"&&(V=G(j,V+1,w(j),"right"));V!==d&&te(y,V),n(l)},I=W(o)?f:o,v=m??Je(I,t),b=Object.assign(Object.assign({},e),{valueIsNumericString:v});return Object.assign(Object.assign({},p),{value:o,defaultValue:f,valueIsNumericString:v,inputMode:r,format:function(l){return ze(l,b)},removeFormatting:function(l,S){return He(l,S,b)},getCaretBoundary:w,onKeyDown:N})}function et(e){var t=Qe(e);return D.createElement(qe,Object.assign({},t))}export{oe as E,et as P,Ze as a};
