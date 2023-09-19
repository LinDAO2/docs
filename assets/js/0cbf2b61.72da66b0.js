"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[1007],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(8957),n=(a(9496),a(9613));a(8378);const i={id:"change-log",title:"Changelog",sidebar_position:1},l=void 0,o={unversionedId:"change-and-release-logs/change-log",id:"change-and-release-logs/change-log",title:"Changelog",description:"Proof Service",source:"@site/docs/change-and-release-logs/change-logs.md",sourceDirName:"change-and-release-logs",slug:"/change-and-release-logs/change-log",permalink:"/change-and-release-logs/change-log",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/change-and-release-logs/change-logs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"change-log",title:"Changelog",sidebar_position:1},sidebar:"docs",previous:{title:"FAQs",permalink:"/faq"},next:{title:"Release Note",permalink:"/change-and-release-logs/release-note"}},c={},s=[{value:"Proof Service",id:"proof-service",level:2},{value:"Changelog 2023-09-06 by @Nyk Ma",id:"changelog-2023-09-06-by-nyk-ma",level:3},{value:"New Features",id:"new-features",level:3},{value:"Updates",id:"updates",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Relation Service",id:"relation-service",level:2},{value:"Changelog 2023-09-06 by @Zella Zhong",id:"changelog-2023-09-06-by-zella-zhong",level:3},{value:"New Features",id:"new-features-1",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Removals",id:"removals",level:3},{value:"Infrastructure &amp; Maintenance",id:"infrastructure--maintenance",level:2}],d={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"proof-service"},"Proof Service"),(0,n.kt)("h3",{id:"changelog-2023-09-06-by-nyk-ma"},"Changelog 2023-09-06 by ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/nykma"},"@Nyk Ma")),(0,n.kt)("h3",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added support platforms:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/66a3974879b2bed0e148a33dbed3d0a9b4e53d18"},"Slack")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/b121a1855100d37142f92b383ea5c2bb6134c55f"},"Introduced proof expiration mechanism: proof will be revalidated only if the record is outdated")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/bcbc3bd3e7b62cf87fcf97bf1af5db62a620d408"},"Display current runtime information in the /healthz endpoint"))),(0,n.kt)("h3",{id:"updates"},"Updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/66a3974879b2bed0e148a33dbed3d0a9b4e53d18"},"Updated code related to Slack integration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/9e82cacdd9e187abacbd397069c120ab97cd1476"},"Split read and write database connections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Platform::Twitter"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/c4962f661c478b20dab858fd8116472b16cd3104"},"Record the numeric ID of Twitter users (in ",(0,n.kt)("inlineCode",{parentName:"a"},"AltID")," field)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Platform::Twitter"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/1e347de2dde2c3a5db091082d73a585d430fc3c4"},"Use twitter\u2019s GraphQL API for Twitter binding validation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Platform::Twitter"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/fb0e97d8170f3cb71cd846fab56d0dfcc8ddc389"},"Retry several times when calling twitter GraphQL API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To overcome temporarily request fails"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /v1/proof"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server/commit/f894b6c6c9bb4d81585608b84d945a832c8073cb"},"now shows 40 records per page"))),(0,n.kt)("h3",{id:"fixes"},"Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix some issue with headless browser function"),(0,n.kt)("li",{parentName:"ul"},"Disable auto migration in Lambda environment to boost cold start duration when a new lambda instance starts")),(0,n.kt)("h2",{id:"relation-service"},"Relation Service"),(0,n.kt)("h3",{id:"changelog-2023-09-06-by-zella-zhong"},"Changelog 2023-09-06 by ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ZhongFuze"},"@Zella Zhong")),(0,n.kt)("p",null,"Switched GraphDB Engine to TigerGraph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why: To handle rising data volumes and enable advanced analytics capabilities"),(0,n.kt)("li",{parentName:"ul"},"Impact: Improved query performance by 70%, added new query functionalities, and optimized data fetching"),(0,n.kt)("li",{parentName:"ul"},"Features:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/61895f0ccf00d6a595caaaa91a34dab785c3d501"},"GSQL migrations and [tdb] configuration")),(0,n.kt)("li",{parentName:"ul"},"New query functionalities like ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/319d93605457bacb6cac44e44475f35f0dc69359"},(0,n.kt)("inlineCode",{parentName:"a"},"neighbors()")),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/d166c76ef0b0abb539631daefed2fad29c4a55d9"},(0,n.kt)("inlineCode",{parentName:"a"},"neighbors_with_source()")),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/f4b3fa21d7714524ea9600466e53a69f28d054df"},(0,n.kt)("inlineCode",{parentName:"a"},"domain()")),", etc"),(0,n.kt)("li",{parentName:"ul"},"Action Required: Users may need to update configurations and be aware of deprecated ArangoDB-related code")))),(0,n.kt)("h3",{id:"new-features-1"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GSQL Client Tweaks: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/f99e5a26a360811a2cc16a296d0d84656f88f178"},"Optimized GSQL interactions for faster migrations and queries")),(0,n.kt)("li",{parentName:"ul"},"Delete Vertex and Edge Method: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/a5ce35a05ab402d0a2bfa3023135ce8008a69d74"},"Added for handling outdated data"))),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fetch All Procedure: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/e7282c9c068f7aa192985439e5554ec880a343c5"},"Enhanced to support parallel querying and timeout settings")),(0,n.kt)("li",{parentName:"ul"},"Access Management: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/cabd96d91945c810f1757d2b1141224e8870acfc"},"Improved security for graph and tokens")),(0,n.kt)("li",{parentName:"ul"},"Data Sources: Expanded and updated DataSource enum",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/91"},"Farcaster")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/86"},"UnstoppableDomains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/93"},"SpaceID")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/89"},"Dotbit")," ")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/e435a5839b6014598ffd9ebf22b0e2708879060b"},"Fixed issues with ",(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"naive_datetime"))," serialization")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/bca19bc042c98a712c814f23ed230a2c5868f1df"},"URL encoding"))),(0,n.kt)("h3",{id:"removals"},"Removals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/relation_server/pull/105/commits/4bd6c534f9513d672d6f87f90096e5b7a468ec6d"},"Deprecated all ArangoDB-related code"))),(0,n.kt)("h2",{id:"infrastructure--maintenance"},"Infrastructure & Maintenance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies and configurations"),(0,n.kt)("li",{parentName:"ul"},"Merged changes into the ",(0,n.kt)("inlineCode",{parentName:"li"},"graphdb/tigergraph")," branch and set up CI")))}m.isMDXComponent=!0},8378:(e,t,a)=>{a(9496)}}]);