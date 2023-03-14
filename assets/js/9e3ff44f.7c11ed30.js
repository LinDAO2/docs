"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[4798],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(1163),a=(r(9496),r(9613));r(8378);const o={id:"as-intro",title:"Introduction",sidebar_position:1},i=void 0,p={unversionedId:"auth-service/as-intro",id:"auth-service/as-intro",title:"Introduction",description:"AuthService is a self-hosted service that provides authentication and authorization for web app/dApp.",source:"@site/docs/auth-service/intro.md",sourceDirName:"auth-service",slug:"/auth-service/as-intro",permalink:"/auth-service/as-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/auth-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"as-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"FAQ",permalink:"/relation-service/rs-faq"},next:{title:"Workflow",permalink:"/auth-service/as-workflow"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Subkey",id:"subkey",level:3},{value:"OAuth Apps",id:"oauth-apps",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Deployment",id:"deployment",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AuthService")," is a self-hosted service that provides authentication and authorization for web app/dApp."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pre-requisites"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"#subkey"},"subkey")," signed by your Avatar."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oauth-apps"},"OAuth Apps")," applied for your Auth Service to verify your identity."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("em",{parentName:"li"},"server")," that your devices could access. Note that you don't really need a VPS, but an ",(0,a.kt)("inlineCode",{parentName:"li"},"IP:PORT")," that browsers could redirect you to.")),(0,a.kt)("p",null,"We're using Docker to simplify deployment. You can also run it without Docker, but you'll need to compile the binary yourself."),(0,a.kt)("h3",{id:"subkey"},"Subkey"),(0,a.kt)("p",null,"Subkey is a key pair signed by your Avatar. It is meant to be used for authentication purposes without saving your primary Avatar key pair on server, which is a dangerous action. Now we support ",(0,a.kt)("strong",{parentName:"p"},"Secp256k1")," key pair ",(0,a.kt)("em",{parentName:"p"},"only"),", but more curves will be supported in the future."),(0,a.kt)("p",null,"Run the following command with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/auth_server/blob/develop/build/generate_subkey.py"},"generate_subkey.py")," to generate a new subkey and sign it with your Avatar private key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install base58 eth_keys # skip if installed\npython ./build/generate_subkey.py\n")),(0,a.kt)("p",null,"Subkey is randomly generated so that you can regenerate and use a new subkey at any time."),(0,a.kt)("h3",{id:"oauth-apps"},"OAuth Apps"),(0,a.kt)("p",null,"Currently supported OAuth apps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.com/developers/"},"Discord")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.twitter.com/en/portal/dashboard"},"Twitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/settings/developers"},"GitHub"))),(0,a.kt)("p",null,"Take ",(0,a.kt)("strong",{parentName:"p"},"Discord")," as an example, you need to apply for an OAuth App to get a ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_SECRET"),". You can find the guide ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/oauth2"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Callback URL"),"/",(0,a.kt)("strong",{parentName:"p"},"Redirect URL")," is the URL that your browser will be redirected to in order to continue AuthService authentication process. It should be your AuthServer's address, suffixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"/signin-${platform}"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:5050/signin-discord"),"."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Once you have your subkey signed and OAuth applications, you can start to configure your AuthServer."),(0,a.kt)("p",null,"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.Production.json")," with your secrets as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "Avatars": [\n    {\n      "Avatar": "0x1145141919810...",\n      "Subkey": {\n        "PrivateKey": "0xbadbadbad...",\n        "CertificationSignature": "aBcDEFGHij123456..."\n      }\n    }\n  ],\n  "Discord": {\n    "ClientID": "123456789012345678",\n    "ClientSecret": "123456789012345678"\n  },\n  "Twitter": {\n    "ClientID": "aBcDEFG...",\n    "ClientSecret": "Hij123456..."\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"Note that AuthServer supports multiple Avatars, so you can add more Avatars to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Avatars")," array."),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Firstly, you need to build the Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t authserver -f ./src/AuthServer.Server/Dockerfile .\n")),(0,a.kt)("p",null,"Run the following command to run it once, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/appsettings.Production.json")," with your own configuration file path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 80:80 -v /path/to/appsettings.Production.json:/app/appsettings.Production.json authserver\n")))}d.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);