import{r as t}from"./mui-913aed92.js";const E=()=>{const[n,o]=t.useState(!1),[r,i]=t.useState(0),[a,m]=t.useState(0),u=t.useRef(null);return t.useEffect(()=>{const e=u.current,l=s=>{o(!0),i(s.pageX-e.offsetLeft),m(e.scrollLeft)},c=()=>{o(!1)},f=()=>{o(!1)},v=s=>{if(!n)return;s.preventDefault();const L=(s.pageX-e.offsetLeft-r)*3;e.scrollLeft=a-L};if(e)return e.addEventListener("mousedown",l),e.addEventListener("mouseleave",c),e.addEventListener("mouseup",f),e.addEventListener("mousemove",v),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("mouseleave",c),e.removeEventListener("mouseup",f),e.removeEventListener("mousemove",v)}},[n,r,a]),{containerRef:u,isDragging:n}};export{E as u};
