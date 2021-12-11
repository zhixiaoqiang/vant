import{u as A,a as T,T as I}from"./index.ab8318f5.js";import{c as N,L as D,n as V,G as F,N as _,a as $}from"./use-translate.5cf29aa7.js";import{c as q,m as z,t as M,w as G}from"./with-install.28bb645f.js";import{u as H}from"./use-expose.e3e68c29.js";import{L as X}from"./index.656b17e0.js";import{z as P,C as v,x as E,X as J,M as K,e as s,q as O,o as g,c as p,w as f,A as n,a as j,b as C,F as k}from"./vue-libs.cab43f37.js";import{C as B}from"./index.5e7e8759.js";import{P as Q}from"./index.cabbb288.js";import"./use-id.af5595af.js";import"./use-route.1ad21ca2.js";import"./index.18e69ab2.js";import"./use-touch.0cf4a6e6.js";import"./on-popup-reopen.6de6ab9a.js";import"./constant.80c6de18.js";import"./interceptor.e15676cf.js";import"./use-refs.38ed045b.js";import"./index.fbbfcaaa.js";import"./index.71a5f3d3.js";const[W,m,Y]=N("list"),Z={error:Boolean,offset:q(300),loading:Boolean,finished:Boolean,errorText:String,direction:z("down"),loadingText:String,finishedText:String,immediateCheck:M};var ee=P({name:W,props:Z,emits:["load","update:error","update:loading"],setup(i,{emit:o,slots:t}){const l=v(!1),h=v(),u=v(),e=A(),r=D(h),d=()=>{O(()=>{if(l.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:a,direction:x}=i,c=F(r);if(!c.height||_(h))return;let b=!1;const R=F(u);x==="up"?b=c.top-R.top<=a:b=R.bottom-c.bottom<=a,b&&(l.value=!0,o("update:loading",!0),o("load"))})},w=()=>{if(i.finished){const a=t.finished?t.finished():i.finishedText;if(a)return s("div",{class:m("finished-text")},[a])}},U=()=>{o("update:error",!1),d()},S=()=>{if(i.error){const a=t.error?t.error():i.errorText;if(a)return s("div",{role:"button",class:m("error-text"),tabindex:0,onClick:U},[a])}},y=()=>{if(l.value&&!i.finished)return s("div",{class:m("loading")},[t.loading?t.loading():s(X,{class:m("loading-icon")},{default:()=>[i.loadingText||Y("loading")]})])};return E(()=>[i.loading,i.finished,i.error],d),e&&E(e,a=>{a&&d()}),J(()=>{l.value=i.loading}),K(()=>{i.immediateCheck&&d()}),H({check:d}),V("scroll",d,{target:r}),()=>{var c;const a=(c=t.default)==null?void 0:c.call(t),x=s("div",{ref:u,class:m("placeholder")},null);return s("div",{ref:h,role:"feed",class:m(),"aria-busy":l.value},[i.direction==="down"?a:x,y(),w(),S(),i.direction==="up"?a:x])}}});const L=G(ee);const be=P({setup(i){const o=$({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=v([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),l=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},h=u=>{t.value[u].finished=!1,l(u)};return(u,e)=>(g(),p(n(I),null,{default:f(()=>[s(n(T),{title:n(o)("basicUsage")},{default:f(()=>[s(n(L),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(o)("finishedText"),onLoad:e[1]||(e[1]=r=>l(0))},{default:f(()=>[(g(!0),j(k,null,C(t.value[0].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),s(n(T),{title:n(o)("errorInfo")},{default:f(()=>[s(n(L),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(o)("errorText"),onLoad:e[4]||(e[4]=r=>l(1))},{default:f(()=>[(g(!0),j(k,null,C(t.value[1].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),s(n(T),{title:n(o)("pullRefresh")},{default:f(()=>[s(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>h(2))},{default:f(()=>[s(n(L),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(o)("finishedText"),onLoad:e[6]||(e[6]=r=>l(2))},{default:f(()=>[(g(!0),j(k,null,C(t.value[2].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{be as default};