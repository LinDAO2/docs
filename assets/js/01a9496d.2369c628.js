"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[2416],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(8028),i=(r(9496),r(9613));r(8378);const a={id:"overall-intro",title:"Introduction",slug:"/"},o=void 0,s={unversionedId:"introduction/overall-intro",id:"introduction/overall-intro",title:"Introduction",description:"Next.ID is an decentralized identity (DID) creation and management protocol built for developers. The Next ID protocol is used as the secure connecting fiber between different web2 and web3 identifiers, such as wallets, twitter profiles, ENS names, Lens profiles, and many more.",source:"@site/docs/introduction/intro.md",sourceDirName:"introduction",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/introduction/intro.md",tags:[],version:"current",frontMatter:{id:"overall-intro",title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"How Next.ID works",permalink:"/introduction/how-it-works"}},l={},d=[{value:"Sovereign Identity Graphs",id:"sovereign-identity-graphs",level:2},{value:"Universal Profile API - One API for all web3 profiles",id:"universal-profile-api---one-api-for-all-web3-profiles",level:2},{value:"Identity + data",id:"identity--data",level:3},{value:"Data integrity",id:"data-integrity",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Next.ID is an decentralized identity (DID) creation and management protocol built for developers. The Next ID protocol is used as the secure connecting fiber between different web2 and web3 identifiers, such as wallets, twitter profiles, ENS names, Lens profiles, and many more.\nBy connecting a person\u2019s different identifiers together, they form an identity graph - a powerful, portable, sovereign (self-owned) digital identities. Next ID refers to these identities, digital representations of self, as avatars."),(0,i.kt)("p",null,"We provide services for creating DIDs, querying existing relationships, attaching data payloads to DIDs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don\u2019t know what DIDs are? \u2014> ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=zaYYQLDnS6s&t=12s"},"Video explainer link"))),(0,i.kt)("h2",{id:"sovereign-identity-graphs"},"Sovereign Identity Graphs"),(0,i.kt)("p",null,"An identity graph is the network of a user\u2019s identifiers (addresses, social profiles, etc.). Using secure key pair (Avatar) signatures, entities are bonded to an address.\n",(0,i.kt)("img",{src:r(7772).Z,width:"2422",height:"1715"})),(0,i.kt)("h2",{id:"universal-profile-api---one-api-for-all-web3-profiles"},"Universal Profile API - One API for all web3 profiles"),(0,i.kt)("p",null,"Identity graphs consist of identifiers, like twitter, reddit, or github handles. These are used to build Universal Profiles for users. Developers, using the the Universal Profile SDK import information-rich user profiles, decreasing onboarding time and enabling instant personalization.\n",(0,i.kt)("img",{src:r(3690).Z,width:"2922",height:"996"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://api.web3.bio"},"Universal Profile")),(0,i.kt)("h3",{id:"identity--data"},"Identity + data"),(0,i.kt)("p",null,"Next.ID\u2019s KVService functions as a data backpack. Fundamentally, it is a way to attach a payload (data) to an Avatar/ID graph. For example, a social graph of follows/followers can be appended to a DID, enabling simple portability, making the data travel wherever the user goes."),(0,i.kt)("h3",{id:"data-integrity"},"Data integrity"),(0,i.kt)("p",null,"DIDs are created and modified using a cryptographically secured private-public key pairing (Avatar) system. This ensures every change and its history are only made by users with the right private keys."),(0,i.kt)("p",null,"Every change and its history are publicly available and verifiable on Arweave, following Next ID\u2019s commitment to decentralization and transparency."))}u.isMDXComponent=!0},7772:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/avatar-diagram-ed9b76208873c99d320131960efdbc02.png"},3690:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/universal-profile-19ef8a5fd45347f3f3f20eab26f1b190.png"},8378:(e,t,r)=>{r(9496)}}]);