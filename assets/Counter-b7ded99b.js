import{j,r as B,x as rt,d as it,c as ot,g as at,P as J}from"./mui-913aed92.js";import{k as st}from"./index-9074475a.js";import{n as Q,c as lt}from"./helpers-fc71785b.js";const ut=({children:r,isPositive:t})=>j.jsx("div",{className:st("h-9 flex items-center justify-center pl-4 pr-5 rounded-xl",{"bg-[#F4FFFF] dark:bg-sidebar border border-turquoise dark:border-sidebar":t,"bg-[#FFF3F4] dark:bg-[#4E3130] border border-red dark:border-[#4E3130]":!t}),children:r}),At=({value:r=0,label:t="",suffix:n="",labelClass:o="",withBg:e})=>{const u=r>0,l=e?ut:B.Fragment,i=e?{isPositive:u}:{};return j.jsx(l,{...i,children:j.jsxs("div",{className:"flex gap-1",children:[j.jsxs("div",{className:"flex items-center gap-2",style:{color:u?"var(--turquoise)":"var(--red)"},children:[j.jsx("i",{className:`icon-arrow-trend-${u?"up":"down"}-regular mt-1`}),j.jsxs("span",{className:"font-semibold",children:[u&&"",r,n]})]}),j.jsx("span",{className:o,children:t})]})})};var q={},K=function(){return K=Object.assign||function(r){for(var t,n=1,o=arguments.length;n<o;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r},K.apply(this,arguments)},ft=function(){function r(t,n,o){var e=this;this.endVal=n,this.options=o,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(u){e.startTime||(e.startTime=u);var l=u-e.startTime;e.remaining=e.duration-l,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(l,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(l,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(l/e.duration);var i=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=i?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),l<e.duration?e.rAF=requestAnimationFrame(e.count):e.finalEndVal!==null?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(u){var l,i,s,d,p=u<0?"-":"";l=Math.abs(u).toFixed(e.options.decimalPlaces);var y=(l+="").split(".");if(i=y[0],s=y.length>1?e.options.decimal+y[1]:"",e.options.useGrouping){d="";for(var f=3,P=0,V=0,g=i.length;V<g;++V)e.options.useIndianSeparators&&V===4&&(f=2,P=1),V!==0&&P%f==0&&(d=e.options.separator+d),P++,d=i[g-V-1]+d;i=d}return e.options.numerals&&e.options.numerals.length&&(i=i.replace(/[0-9]/g,function(E){return e.options.numerals[+E]}),s=s.replace(/[0-9]/g,function(E){return e.options.numerals[+E]})),p+e.options.prefix+i+s+e.options.suffix},this.easeOutExpo=function(u,l,i,s){return i*(1-Math.pow(2,-10*u/s))*1024/1023+l},this.options=K(K({},this.defaults),o),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(u){return u()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,o=t.el.getBoundingClientRect(),e=o.top+window.pageYOffset,u=o.top+o.height+window.pageYOffset;u<n&&u>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>u||e>n)&&!t.paused&&t.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var o=this.countDown?1:-1;this.endVal=t+o*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(t){var n;if(this.el){var o=this.formattingFn(t);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,o):this.el.tagName==="INPUT"?this.el.value=o:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=o:this.el.innerHTML=o}},r.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},r.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const ct=Object.freeze(Object.defineProperty({__proto__:null,CountUp:ft},Symbol.toStringTag,{value:"Module"})),pt=rt(ct);Object.defineProperty(q,"__esModule",{value:!0});var O=B,dt=pt;function ht(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o,e,u,l,i=[],s=!0,d=!1;try{if(u=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=u.call(n)).done)&&(i.push(o.value),i.length!==t);s=!0);}catch(p){d=!0,e=p}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw e}}return i}}function X(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,o)}return n}function G(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(o){bt(r,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))})}return r}function mt(r,t){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function yt(r){var t=mt(r,"string");return typeof t=="symbol"?t:String(t)}function bt(r,t,n){return t=yt(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function $(){return $=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},$.apply(this,arguments)}function gt(r,t){if(r==null)return{};var n={},o=Object.keys(r),e,u;for(u=0;u<o.length;u++)e=o[u],!(t.indexOf(e)>=0)&&(n[e]=r[e]);return n}function tt(r,t){if(r==null)return{};var n=gt(r,t),o,e;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(e=0;e<u.length;e++)o=u[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(n[o]=r[o])}return n}function vt(r,t){return Ot(r)||ht(r,t)||Et(r,t)||wt()}function Ot(r){if(Array.isArray(r))return r}function Et(r,t){if(r){if(typeof r=="string")return Z(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(r,t)}}function Z(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?O.useLayoutEffect:O.useEffect;function R(r){var t=O.useRef(r);return _t(function(){t.current=r}),O.useCallback(function(){for(var n=arguments.length,o=new Array(n),e=0;e<n;e++)o[e]=arguments[e];return t.current.apply(void 0,o)},[])}var Vt=function(t,n){var o=n.decimal,e=n.decimals,u=n.duration,l=n.easingFn,i=n.end,s=n.formattingFn,d=n.numerals,p=n.prefix,y=n.separator,f=n.start,P=n.suffix,V=n.useEasing,g=n.useGrouping,E=n.useIndianSeparators,U=n.enableScrollSpy,S=n.scrollSpyDelay,D=n.scrollSpyOnce,C=n.plugin;return new dt.CountUp(t,i,{startVal:f,duration:u,decimal:o,decimalPlaces:e,easingFn:l,formattingFn:s,numerals:d,separator:y,prefix:p,suffix:P,plugin:C,useEasing:V,useIndianSeparators:E,useGrouping:g,enableScrollSpy:U,scrollSpyDelay:S,scrollSpyOnce:D})},St=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],Pt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},et=function(t){var n=Object.fromEntries(Object.entries(t).filter(function(x){var A=vt(x,2),c=A[1];return c!==void 0})),o=O.useMemo(function(){return G(G({},Pt),n)},[t]),e=o.ref,u=o.startOnMount,l=o.enableReinitialize,i=o.delay,s=o.onEnd,d=o.onStart,p=o.onPauseResume,y=o.onReset,f=o.onUpdate,P=tt(o,St),V=O.useRef(),g=O.useRef(),E=O.useRef(!1),U=R(function(){return Vt(typeof e=="string"?e:e.current,P)}),S=R(function(x){var A=V.current;if(A&&!x)return A;var c=U();return V.current=c,c}),D=R(function(){var x=function(){return S(!0).start(function(){s==null||s({pauseResume:C,reset:_,start:M,update:I})})};i&&i>0?g.current=setTimeout(x,i*1e3):x(),d==null||d({pauseResume:C,reset:_,update:I})}),C=R(function(){S().pauseResume(),p==null||p({reset:_,start:M,update:I})}),_=R(function(){S().el&&(g.current&&clearTimeout(g.current),S().reset(),y==null||y({pauseResume:C,start:M,update:I}))}),I=R(function(x){S().update(x),f==null||f({pauseResume:C,reset:_,start:M})}),M=R(function(){_(),D()}),F=R(function(x){u&&(x&&_(),D())});return O.useEffect(function(){E.current?l&&F(!0):(E.current=!0,F())},[l,E,F,i,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),O.useEffect(function(){return function(){_()}},[_]),{start:M,pauseResume:C,reset:_,update:I,getCountUp:S}},Ct=["className","redraw","containerProps","children","style"],xt=function(t){var n=t.className,o=t.redraw,e=t.containerProps,u=t.children,l=t.style,i=tt(t,Ct),s=O.useRef(null),d=O.useRef(!1),p=et(G(G({},i),{},{ref:s,startOnMount:typeof u!="function"||t.delay===0,enableReinitialize:!1})),y=p.start,f=p.reset,P=p.update,V=p.pauseResume,g=p.getCountUp,E=R(function(){y()}),U=R(function(C){t.preserveValue||f(),P(C)}),S=R(function(){if(typeof t.children=="function"&&!(s.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}g()});O.useEffect(function(){S()},[S]),O.useEffect(function(){d.current&&U(t.end)},[t.end,U]);var D=o&&t;return O.useEffect(function(){o&&d.current&&E()},[E,o,D]),O.useEffect(function(){!o&&d.current&&E()},[E,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),O.useEffect(function(){d.current=!0},[]),typeof u=="function"?u({countUpRef:s,start:y,reset:f,update:P,pauseResume:V,getCountUp:g}):O.createElement("span",$({className:n,ref:s,style:l},e),typeof t.start<"u"?g().formattingFn(t.start):"")},Tt=q.default=xt;q.useCountUp=et;var nt={exports:{}};(function(r,t){(function(o,e){r.exports=e(B,it)})(ot,function(n,o){return function(e){var u={};function l(i){if(u[i])return u[i].exports;var s=u[i]={i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,l),s.l=!0,s.exports}return l.m=e,l.c=u,l.d=function(i,s,d){l.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:d})},l.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,s){if(s&1&&(i=l(i)),s&8||s&4&&typeof i=="object"&&i&&i.__esModule)return i;var d=Object.create(null);if(l.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:i}),s&2&&typeof i!="string")for(var p in i)l.d(d,p,(function(y){return i[y]}).bind(null,p));return d},l.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return l.d(s,"a",s),s},l.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},l.p="",l(l.s=4)}([function(e,u,l){e.exports=l(5)()},function(e,u){e.exports=n},function(e,u){e.exports=o},function(e,u){e.exports=function(l,i,s){var d=l.direction,p=l.value;switch(d){case"top":return s.top+p<i.top&&s.bottom>i.bottom&&s.left<i.left&&s.right>i.right;case"left":return s.left+p<i.left&&s.bottom>i.bottom&&s.top<i.top&&s.right>i.right;case"bottom":return s.bottom-p>i.bottom&&s.left<i.left&&s.right>i.right&&s.top<i.top;case"right":return s.right-p>i.right&&s.left<i.left&&s.top<i.top&&s.bottom>i.bottom}}},function(e,u,l){l.r(u),l.d(u,"default",function(){return A});var i=l(1),s=l.n(i),d=l(2),p=l.n(d),y=l(0),f=l.n(y),P=l(3),V=l.n(P);function g(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(m){return typeof m}:g=function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},g(c)}function E(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")}function U(c,h){for(var m=0;m<h.length;m++){var a=h[m];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function S(c,h,m){return h&&U(c.prototype,h),m&&U(c,m),c}function D(c,h){return h&&(g(h)==="object"||typeof h=="function")?h:_(c)}function C(c){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(m){return m.__proto__||Object.getPrototypeOf(m)},C(c)}function _(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function I(c,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(h&&h.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),h&&M(c,h)}function M(c,h){return M=Object.setPrototypeOf||function(a,T){return a.__proto__=T,a},M(c,h)}function F(c,h,m){return h in c?Object.defineProperty(c,h,{value:m,enumerable:!0,configurable:!0,writable:!0}):c[h]=m,c}function x(c){return c.width===void 0&&(c.width=c.right-c.left),c.height===void 0&&(c.height=c.bottom-c.top),c}var A=function(c){I(h,c);function h(m){var a;return E(this,h),a=D(this,C(h).call(this,m)),F(_(a),"getContainer",function(){return a.props.containment||window}),F(_(a),"addEventListener",function(T,b,v,W){a.debounceCheck||(a.debounceCheck={});var w,L,N=function(){w=null,a.check()};W>-1?L=function(){w||(w=setTimeout(N,W||0))}:L=function(){clearTimeout(w),w=setTimeout(N,v||0)};var z={target:T,fn:L,getLastTimeout:function(){return w}};T.addEventListener(b,z.fn),a.debounceCheck[b]=z}),F(_(a),"startWatching",function(){a.debounceCheck||a.interval||(a.props.intervalCheck&&(a.interval=setInterval(a.check,a.props.intervalDelay)),a.props.scrollCheck&&a.addEventListener(a.getContainer(),"scroll",a.props.scrollDelay,a.props.scrollThrottle),a.props.resizeCheck&&a.addEventListener(window,"resize",a.props.resizeDelay,a.props.resizeThrottle),!a.props.delayedCall&&a.check())}),F(_(a),"stopWatching",function(){if(a.debounceCheck){for(var T in a.debounceCheck)if(a.debounceCheck.hasOwnProperty(T)){var b=a.debounceCheck[T];clearTimeout(b.getLastTimeout()),b.target.removeEventListener(T,b.fn),a.debounceCheck[T]=null}}a.debounceCheck=null,a.interval&&(a.interval=clearInterval(a.interval))}),F(_(a),"check",function(){var T=a.node,b,v;if(!T)return a.state;if(b=x(a.roundRectDown(T.getBoundingClientRect())),a.props.containment){var W=a.props.containment.getBoundingClientRect();v={top:W.top,left:W.left,bottom:W.bottom,right:W.right}}else v={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var w=a.props.offset||{},L=g(w)==="object";L&&(v.top+=w.top||0,v.left+=w.left||0,v.bottom-=w.bottom||0,v.right-=w.right||0);var N={top:b.top>=v.top,left:b.left>=v.left,bottom:b.bottom<=v.bottom,right:b.right<=v.right},z=b.height>0&&b.width>0,k=z&&N.top&&N.left&&N.bottom&&N.right;if(z&&a.props.partialVisibility){var H=b.top<=v.bottom&&b.bottom>=v.top&&b.left<=v.right&&b.right>=v.left;typeof a.props.partialVisibility=="string"&&(H=N[a.props.partialVisibility]),k=a.props.minTopValue?H&&b.top<=v.bottom-a.props.minTopValue:H}typeof w.direction=="string"&&typeof w.value=="number"&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",w.direction,w.value),k=V()(w,b,v));var Y=a.state;return a.state.isVisible!==k&&(Y={isVisible:k,visibilityRect:N},a.setState(Y),a.props.onChange&&a.props.onChange(k)),Y}),a.state={isVisible:null,visibilityRect:{}},a}return S(h,[{key:"componentDidMount",value:function(){this.node=p.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(a){this.node=p.a.findDOMNode(this),this.props.active&&!a.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(a){return{top:Math.floor(a.top),left:Math.floor(a.left),bottom:Math.floor(a.bottom),right:Math.floor(a.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):s.a.Children.only(this.props.children)}}]),h}(s.a.Component);F(A,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:s.a.createElement("span",null)}),F(A,"propTypes",{onChange:f.a.func,active:f.a.bool,partialVisibility:f.a.oneOfType([f.a.bool,f.a.oneOf(["top","right","bottom","left"])]),delayedCall:f.a.bool,offset:f.a.oneOfType([f.a.shape({top:f.a.number,left:f.a.number,bottom:f.a.number,right:f.a.number}),f.a.shape({direction:f.a.oneOf(["top","right","bottom","left"]),value:f.a.number})]),scrollCheck:f.a.bool,scrollDelay:f.a.number,scrollThrottle:f.a.number,resizeCheck:f.a.bool,resizeDelay:f.a.number,resizeThrottle:f.a.number,intervalCheck:f.a.bool,intervalDelay:f.a.number,containment:typeof window<"u"?f.a.instanceOf(window.Element):f.a.any,children:f.a.oneOfType([f.a.element,f.a.func]),minTopValue:f.a.number})},function(e,u,l){var i=l(6);function s(){}function d(){}d.resetWarningCache=s,e.exports=function(){function p(P,V,g,E,U,S){if(S!==i){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}p.isRequired=p;function y(){return p}var f={array:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:y,element:p,elementType:p,instanceOf:y,node:p,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:d,resetWarningCache:s};return f.PropTypes=f,f}},function(e,u,l){var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=i}])})})(nt);var jt=nt.exports;const Dt=at(jt),Ft=({value:r,className:t,isFormatted:n,...o})=>{const[e,u]=B.useState(!1);return B.useEffect(()=>{u(!1)},[r]),j.jsx(Tt,{start:e?r:0,end:r,duration:2,onEnd:()=>u(!0),formattingFn:n?l=>Q(l,o.decimals||0,o.prefix):null,...o,children:({countUpRef:l,start:i})=>j.jsx(Dt,{onChange:i,active:!e,delayedCall:!0,children:j.jsxs("span",{className:`relative ${t||""}`,children:[j.jsxs("span",{className:"opacity-0",children:[n?Q(r,o.decimals||0,o.prefix):lt(r),o.suffix]}),j.jsx("span",{className:"absolute left-0",ref:l})]})})})};Ft.propTypes={value:J.number.isRequired,className:J.string};export{Ft as C,At as T};
