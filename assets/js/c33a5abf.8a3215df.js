"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9820],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(8028),r=(a(9496),a(9613));a(8378);const i={title:"KVService API"},l=void 0,p={unversionedId:"rest-api/kvservice-api",id:"rest-api/kvservice-api",title:"KVService API",description:"Entrypoint",source:"@site/docs/rest-api/kvservice-api.md",sourceDirName:"rest-api",slug:"/rest-api/kvservice-api",permalink:"/rest-api/kvservice-api",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/rest-api/kvservice-api.md",tags:[],version:"current",frontMatter:{title:"KVService API"},sidebar:"docs",previous:{title:"Platforms supported by ProofService",permalink:"/rest-api/proofservice-platforms-supported"},next:{title:"FAQs",permalink:"/faq"}},c={},o=[{value:"Entrypoint",id:"entrypoint",level:3},{value:"Structure",id:"structure",level:3},{value:"About struct patching",id:"about-struct-patching",level:3},{value:"Group KV",id:"group-kv",level:2},{value:"Get current KV of a avatar GET /v1/kv",id:"query",level:3},{value:"Get signature payload for updating POST /v1/kv/payload",id:"payload",level:3},{value:"Apply a patch POST /v1/kv",id:"patch",level:3}],u={toc:o},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"entrypoint"},"Entrypoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Online"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Healthcheck"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Staging"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kv-service.nextnext.id"},"https://kv-service.nextnext.id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kv-service.nextnext.id/healthz"},"https://kv-service.nextnext.id/healthz"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Production"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kv-service.next.id"},"https://kv-service.next.id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kv-service.next.id/healthz"},"https://kv-service.next.id/healthz"))))),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"All requests and responses should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json"),"."),(0,r.kt)("h3",{id:"about-struct-patching"},"About struct patching"),(0,r.kt)("p",null,"We choose ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7396"},"RFC 7396")," standard for\nKV modifying."),(0,r.kt)("p",null,"Client should choose a lib which implements this."),(0,r.kt)("p",null,"e.g.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pierreinglebert/json-merge-patch"},"json-merge-patch"),"\nfor JavaScript, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/idubrov/json-patch"},"json-patch"),"\nfor Rust."),(0,r.kt)("h2",{id:"group-kv"},"Group KV"),(0,r.kt)("h3",{id:"query"},"Get current KV of a avatar ","[GET /v1/kv]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Parameters"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"avatar (string, required) - Avatar public key (hexstring started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Example"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/kv?avatar=0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"avatar (string, required) - Avatar public key (uncompressed hexstring started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")."),(0,r.kt)("li",{parentName:"ul"},"proofs (array","[object]",", required) - All proofs belong to this avatar",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"content (object, required) - KV-pair of this entry."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "proofs": [{\n    "platform": "nextid",\n    "identity": "0x04c7cacde73.....",\n    "content": {\n      "this": "is",\n      "a": ["sample", "kv", "content"]\n    }\n  }, {\n    "platform": "twitter",\n    "identity": "yeiwb",\n    "content": {\n      "twitter": "only",\n      "kv": ["content", "goes", "here"]\n    }\n  }]\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 404 (application/json)"))),(0,r.kt)("p",null,"Persona not found (no KV was ever created)."),(0,r.kt)("h3",{id:"payload"},"Get signature payload for updating ","[POST /v1/kv/payload]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure to save order-aware struct in ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," value.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"avatar (string, required) - Avatar public key (both comressed / uncompressed and with/without ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," are OK)."),(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"patch (object, required) - Patch to current data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "platform": "nextid",\n  "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "patch": {\n      "this": "is",\n      "a": "sample",\n      "structure": ["it", "could", "be", "anything"],\n      "key": {\n        "to": {\n          "delete": null\n        }\n      }\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (body)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID for this patch action. Send this UUID in ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv")," as-is."),(0,r.kt)("li",{parentName:"ul"},"created_at (number, required) - Creation timestamp of this request. Send this in ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv")," as-is."),(0,r.kt)("li",{parentName:"ul"},"sign_payload (string, required) - String to sign to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",\n  "created_at": 1646983606,\n  "sign_payload": "{\\"action\\":\\"kv\\",\\"created_at\\":1646983606,\\"patch\\":{\\"a\\":\\"sample\\",\\"key_to_delete\\":null,\\"structure\\":[\\"it\\",\\"could\\",\\"be\\",\\"anything\\"],\\"this\\":\\"is\\"},\\"prev\\":null,\\"uuid\\":\\"40c13c92-31e5-40d1-aebb-143d8e5b9c5e\\"}"\n}\n')))))),(0,r.kt)("h3",{id:"patch"},"Apply a patch ","[POST /v1/kv]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"avatar (string, required) - Avatar public key (hexstring, both comressed / uncompressed are OK)."),(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID given by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv/payload"),"."),(0,r.kt)("li",{parentName:"ul"},"created_at (number, required) - Creation timestamp given by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv/payload"),"."),(0,r.kt)("li",{parentName:"ul"},"signature (string, required) - Signature of this request. Base64-ed."),(0,r.kt)("li",{parentName:"ul"},"patch (object, required) - Patch content"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "platform": "nextid",\n  "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",\n  "created_at": 1646983606,\n  "signature": "BASE64_SIGNATURE_HERE",\n  "patch": {\n      "this": "is",\n      "a": "sample",\n      "structure": ["it", "could", "be", "any", "JSON"],\n      "key": {\n        "to": {\n          "delete": null\n        }\n      }\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 201 (application/json)"))),(0,r.kt)("p",null,"Created successfully. Response is same as ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/kv"),"."))}s.isMDXComponent=!0},8378:(e,t,a)=>{a(9496)}}]);