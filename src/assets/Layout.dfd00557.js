import{f as m,h as e,T as i,m as u,g as p,n as d,p as c,q as f,r,s as v,t as g}from"./app.d747f7b6.js";import{S as h}from"./SkipLink.7e1d7c41.js";var b=m({name:"FadeSlideY",setup(s,{slots:a}){const o=u(),t=o.resolve,l=o.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:l},()=>{var n;return(n=a.default)==null?void 0:n.call(a)})}}),L=m({name:"Layout",setup(){const s=g(),a=p(),o=v(),t=d();return c(),f(()=>a.value.blog.sidebarDisplay||s.value.blog.sidebarDisplay||"mobile"),()=>[e(h),e(r("CommonWrapper"),{},{default:()=>t.value.home?e(r("HomePage")):e(b,()=>e(r("NormalPage"),{key:o.value.path}))})]}});export{L as default};
