"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9128],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(8957),n=(a(9496),a(9613));a(8378);const i={id:"rs-graphdb",title:"GraphDB",sidebar_position:2},o=void 0,s={unversionedId:"core-concepts/relation-service/rs-graphdb",id:"core-concepts/relation-service/rs-graphdb",title:"GraphDB",description:"As RelationService aims to build comprehensive personal identity graphs, incorporating both on-chain and off-chain data to provide a holistic view of an individual\u2019s digital presence.The Graph Database is the most important technology behind, aiming to supporting a full range of identity queries and social use cases.",source:"@site/docs/core-concepts/relation-service/graphDB.md",sourceDirName:"core-concepts/relation-service",slug:"/core-concepts/relation-service/rs-graphdb",permalink:"/core-concepts/relation-service/rs-graphdb",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/relation-service/graphDB.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"rs-graphdb",title:"GraphDB",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/core-concepts/relation-service/rs-intro"},next:{title:"Query from Graph Database",permalink:"/core-concepts/relation-service/rs-example"}},c={},l=[{value:"What is a graph database?",id:"what-is-a-graph-database",level:2},{value:"Graph Database in Next.ID",id:"graph-database-in-nextid",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As ",(0,n.kt)("inlineCode",{parentName:"p"},"RelationService")," aims to build comprehensive personal identity graphs, incorporating both on-chain and off-chain data to provide a holistic view of an individual\u2019s digital presence.The Graph Database is the most important technology behind, aiming to supporting a full range of identity queries and social use cases.\nGraph Databases focus on relationships between data, making them a better option when dealing with complex relationships between intertwined data stored in multiple tables."),(0,n.kt)("h2",{id:"what-is-a-graph-database"},"What is a graph database?"),(0,n.kt)("p",null,"A graph database is a database that focuses on relationships, i.e. Something \u2014 is related to \u2014 Something else. It looks like the following:\n",(0,n.kt)("img",{src:a(603).Z,width:"2422",height:"1715"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It is a class of NoSQL databases"),(0,n.kt)("li",{parentName:"ol"},"Stores relationships, reflecting entity-to-entity relationships"),(0,n.kt)("li",{parentName:"ol"},"Uses directional-based nodes to represent data, rather than rows and columns in a table")),(0,n.kt)("h2",{id:"graph-database-in-nextid"},"Graph Database in Next.ID"),(0,n.kt)("p",null,"As using the graph database to build the identity graph in ",(0,n.kt)("inlineCode",{parentName:"p"},"RelationService"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"Vertices")," represent entities or instances. In NextID, vertices usually represent an identity or smart contract that interact with some accounts  (e.g.Twitter account, Ethereum account, etc)\n",(0,n.kt)("inlineCode",{parentName:"p"},"Edges")," define the relationships between vertices. (Two identities proven to belong to the same one, the accounts that hold a NFT, the account who interact with a smart contract)\n",(0,n.kt)("inlineCode",{parentName:"p"},"Neighbors")," describe the other vertices that near to a vertex\n",(0,n.kt)("inlineCode",{parentName:"p"},"Traversal")," refers to the process of visiting each vertex in a graph with some conditions"),(0,n.kt)("p",null,"With Graph Databases, accessing related nodes is straightforward. It means no matter looking for a specific individual identity graph, the accounts that hold an NFT collection or interact with the same smart contract can be collected by traversing the graph."))}h.isMDXComponent=!0},603:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hyper-multi-graph-1578eb8b12cbc4f329a08056c2818e2a.png"},8378:(e,t,a)=>{a(9496)}}]);