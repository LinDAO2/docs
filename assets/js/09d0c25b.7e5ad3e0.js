"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[6244],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),v=i,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(1163),i=(r(9496),r(9613));r(8378);const o={id:"kv-faq",title:"FAQ",sidebar_position:5},a=void 0,c={unversionedId:"kv-service/kv-faq",id:"kv-service/kv-faq",title:"FAQ",description:"I got public key mismatch error in POST /v1/kv",source:"@site/docs/kv-service/faq.md",sourceDirName:"kv-service",slug:"/kv-service/kv-faq",permalink:"/kv-service/kv-faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/kv-service/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"kv-faq",title:"FAQ",sidebar_position:5},sidebar:"docs",previous:{title:"Introduction",permalink:"/kv-service/kv-intro"},next:{title:"Introduction",permalink:"/relation-service/rs-intro"}},s={},l=[{value:"I got <code>public key mismatch</code> error in <code>POST /v1/kv</code>",id:"bad-signature",level:2},{value:"Does KVService rely on an existed Persona / binding on ProofService?",id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bad-signature"},"I got ",(0,i.kt)("inlineCode",{parentName:"h2"},"public key mismatch")," error in ",(0,i.kt)("inlineCode",{parentName:"h2"},"POST /v1/kv")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/proof-service/ps-faq#bad-signature"},"ProofService FAQ"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Double check ",(0,i.kt)("inlineCode",{parentName:"p"},"dataToSign.length")," part.")),(0,i.kt)("h2",{id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice"},"Does KVService rely on an existed Persona / binding on ProofService?"),(0,i.kt)("p",null,"Not really! You can use this as a storage for every secp256k1 keypair\n(",(0,i.kt)("inlineCode",{parentName:"p"},'platform == nextid && identity == "0xPUBLIC_KEY"'),") without even\nusing it on ProofService."),(0,i.kt)("p",null,"But, if you want to save data related to a specific account, we still\nencourage you to put it under precise ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,i.kt)("p",null,"A typical case is, your DApp allows user to set different NFT avatar\non Twitter and Github. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," should\nbe specified (instead of being put under an ambiguous avatar pubkey)."))}u.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);