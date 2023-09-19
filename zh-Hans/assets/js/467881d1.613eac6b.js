"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9083],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(8957),n=(a(9496),a(9613));a(8378);const i={title:"ProofService API"},l=void 0,o={unversionedId:"rest-api/proofservice-api",id:"rest-api/proofservice-api",title:"ProofService API",description:"Entrypoint",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/rest-api/proofservice-api.md",sourceDirName:"rest-api",slug:"/rest-api/proofservice-api",permalink:"/zh-Hans/rest-api/proofservice-api",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/rest-api/proofservice-api.md",tags:[],version:"current",frontMatter:{title:"ProofService API"},sidebar:"docs",previous:{title:"Importing Universal Profiles",permalink:"/zh-Hans/getting-started/importing-universal-profiles"},next:{title:"KVService API",permalink:"/zh-Hans/rest-api/kvservice-api"}},p={},s=[{value:"Entrypoint",id:"entrypoint",level:3},{value:"Structure",id:"structure",level:3},{value:"Supported platforms for proofing",id:"supported-platforms-for-proofing",level:3},{value:"Post struct placeholders",id:"post-struct-placeholders",level:3},{value:"Group Common",id:"group-common",level:2},{value:"General info GET /healthz",id:"healthz",level:3},{value:"Group Proof",id:"group-proof",level:2},{value:"Query a proof payload to signature and to post POST /v1/proof/payload",id:"proof-payload",level:3},{value:"Add a proof modification into Proof chain POST /v1/proof",id:"proof-add",level:3},{value:"Query an existed binding GET /v1/proof",id:"proof-query",level:3},{value:"Check if a proof exists GET /v1/proof/exists",id:"proof-query-exists",level:3},{value:"Get one single ProofChain under an Avatar GET /v1/proofchain",id:"get-one-single-proofchain-under-an-avatar-get-v1proofchain",level:3},{value:"Get separated ProofChain link (aka Changelog of whole server) GET /v1/proofchain/changes",id:"get-separated-proofchain-link-aka-changelog-of-whole-server-get-v1proofchainchanges",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"entrypoint"},"Entrypoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Online"),(0,n.kt)("th",{parentName:"tr",align:null},"Environment"),(0,n.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,n.kt)("th",{parentName:"tr",align:null},"Healthcheck"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Staging"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://proof-service.nextnext.id"},"https://proof-service.nextnext.id")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://proof-service.nextnext.id/healthz"},"https://proof-service.nextnext.id/healthz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Production"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://proof-service.next.id"},"https://proof-service.next.id")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://proof-service.next.id/healthz"},"https://proof-service.next.id/healthz"))))),(0,n.kt)("h3",{id:"structure"},"Structure"),(0,n.kt)("p",null,"All requests and responses should be ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json"),"."),(0,n.kt)("h3",{id:"supported-platforms-for-proofing"},"Supported platforms for proofing"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported")),(0,n.kt)("h3",{id:"post-struct-placeholders"},"Post struct placeholders"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"placeholders"),(0,n.kt)("th",{parentName:"tr",align:null},"Should be replaced to"),(0,n.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%SIG_BASE64%")),(0,n.kt)("td",{parentName:"tr",align:null},"Base64-encoded signature"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1uZDzxZ6wae+IaF4BgJXWAWC9e/nxbkdC0xp+xRLz1FqeghynyW+SQnGQygdgQYLTLfXqq03nyFQJU0GidQ/3QA="))))),(0,n.kt)("h2",{id:"group-common"},"Group Common"),(0,n.kt)("h3",{id:"healthz"},"General info ","[GET /healthz]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request (application/json)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes (object)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hello (string, required) - must be ",(0,n.kt)("inlineCode",{parentName:"li"},"proof service"),"."),(0,n.kt)("li",{parentName:"ul"},"built_at (string, required) - UNIX Timestamp of when server is built."),(0,n.kt)("li",{parentName:"ul"},"revision (string, required) - On which git commit is this server built."),(0,n.kt)("li",{parentName:"ul"},"environment (string, required) - App environment of this server (",(0,n.kt)("inlineCode",{parentName:"li"},"staging")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"production"),")"),(0,n.kt)("li",{parentName:"ul"},"platforms (array","[string]",", required) - All ",(0,n.kt)("inlineCode",{parentName:"li"},"platform"),"s supported by this server."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "hello": "proof service",\n  "built_at": "1658210228",\n  "revision": "fffa94639d99c0a707cb7befdb51201ea655896d",\n  "environment": "staging",\n  "platforms": [\n      "github",\n      "twitter",\n      "ethereum",\n      "keybase"\n  ]\n}\n')))))),(0,n.kt)("h2",{id:"group-proof"},"Group Proof"),(0,n.kt)("h3",{id:"proof-payload"},"Query a proof payload to signature and to post ","[POST /v1/proof/payload]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request (application/json)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes (object)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"action (string, required) - Action (",(0,n.kt)("inlineCode",{parentName:"li"},"create")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"delete"),")"),(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Target platform. See table above for all available platforms. See table in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported")," for all available values."),(0,n.kt)("li",{parentName:"ul"},'identity (string, required) - Identity in target platform to proof. Usually a "username" or "screen name". See ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported"),"."),(0,n.kt)("li",{parentName:"ul"},"public_key (string, required) - Public key of Avatar to connect to. Should be secp256k1 curve (for now), 65-bytes or 33-bytes long (uncompressed / compressed) and stringified into hex form (",(0,n.kt)("inlineCode",{parentName:"li"},"/^0x[0-9a-f]{65,130}$/"),")."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "action": "create",\n  "platform": "twitter",\n  "identity": "my_twitter_screen_name",\n  "public_key": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575"\n}\n'))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes (object)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"post_content (object, required) - Post (in different languages) to let user send / save to target platform.\nPlaceholders should be replaced by frontend / client.\nLanguage code follows BCP-47 standard (i.e. ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a"},"https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a")," ).\nNote: there is always a ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," content."),(0,n.kt)("li",{parentName:"ul"},"sign_payload (string, required) - Raw string to be sent to ",(0,n.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,n.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID of this chain link. Send this UUID to ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof")," as-is."),(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Creation time of this chain link (UNIX timestamp, unit: second). Send this to ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof")," as-is."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "post_content": {\n    "default": "Prove myself: I\'m 0x028c3cda474361179d653c41a62f6bbb07265d535121e19aedf660da2924d0b1e3 on Next.ID. Signature: %SIG_BASE64%"\n    "zh_CN": "\u9a8c\u8bc1\u63a8\u7279\u8d26\u53f7 @my_twitter_screen_name \u7684 Next.ID \u8eab\u4efd @NextDotID \u3002\\nSig: %SIG_BASE64%\\n\\n\u8bf7\u4e0b\u8f7d\u5b89\u88c5 mask.io \u53bb\u4f7f\u7528\u60a8 Web 3.0 \u7684\u53bb\u4e2d\u5fc3\u5316\u8eab\u4efd\u3002\\n"\n  },\n  "sign_payload": "{\\"action\\":\\"add\\",\\"identity\\":\\"my_twitter_screen_name\\",\\"platform\\":\\"twitter\\",\\"prev\\":null}"\n  "uuid": "ed9f421d-92e1-4c80-9bff-8516ef46ff43",\n  "created_at": "1647332405"\n}\n')))))),(0,n.kt)("h3",{id:"proof-add"},"Add a proof modification into Proof chain ","[POST /v1/proof]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request (application/json)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes (object)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"action (string, required) - Action (",(0,n.kt)("inlineCode",{parentName:"li"},"create")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"delete"),")"),(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Target platform. See table above for all available platforms. See table above for all available values."),(0,n.kt)("li",{parentName:"ul"},'identity (string, required) - Identity in target platform to proof. Usually a "username" or "screen name". See ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported"),"."),(0,n.kt)("li",{parentName:"ul"},"proof_location (string, optional) - Location where public-accessible proof post is set. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported"),"."),(0,n.kt)("li",{parentName:"ul"},"public_key (string, required) - Public key of Next.ID Avatar to connect to. Should be secp256k1 curve (for now), 65-bytes or 33-bytes long (uncompressed / compressed) and stringified into hex form (",(0,n.kt)("inlineCode",{parentName:"li"},"/^0x[0-9a-f]{65,130}$/"),")."),(0,n.kt)("li",{parentName:"ul"},"extra (object, optional) - Extra info for specific platform needed. See ",(0,n.kt)("a",{parentName:"li",href:"/introduction/how-it-works#binding-an-avatar-to-an-application-via-ethereum-wallet"},"Flow")," for more info.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"wallet_signature (string, optional) - (required when ",(0,n.kt)("inlineCode",{parentName:"li"},"platform: ethereum"),") Signature signed by ETH wallet (w/ same sign payload), BASE64-ed."),(0,n.kt)("li",{parentName:"ul"},"signature (string, optional) - (required when ",(0,n.kt)("inlineCode",{parentName:"li"},"platform: ethereum")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"action: delete"),") Signature signed by Avatar private key (w/ same sign payload), BASE64-ed."))),(0,n.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID of this chain link. Use the exact value from ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof/payload"),"."),(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Creation time of this chain link (UNIX timestamp, unit: second). Use the exact value from ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof/payload"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "action": "create",\n  "platform": "twitter",\n  "identity": "my_twitter_screen_name",\n  "proof_location": "1415362679095635970",\n  "public_key": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "extra": {},\n  "uuid": "ed9f421d-92e1-4c80-9bff-8516ef46ff43",\n  "created_at": "1647332405"\n}\n'))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 201 (application/json)"))),(0,n.kt)("p",null,"Request submitted successfully. No error happened."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Response 400 (application/json)")),(0,n.kt)("p",null,"Request failed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'+ Attributes\n\n  + message (string, required) - Contains some error info for user.\n\n+ Body\n\n    {\n       "message": "Tweet author is not the same as given identity."\n    }\n')),(0,n.kt)("h3",{id:"proof-query"},"Query an existed binding ","[GET /v1/proof]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parameters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"platform (string, optional) - Proof platform. If not given, all platforms will be searched."),(0,n.kt)("li",{parentName:"ul"},"identity (string, required) - Identity on target platform. Separate identities with comma (",(0,n.kt)("inlineCode",{parentName:"li"},","),") if you want to query mutipe identity at once."),(0,n.kt)("li",{parentName:"ul"},"page (number, optional) - Pagination. First page is number ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},"exact (boolean, optional) - Perform a exact match for ",(0,n.kt)("inlineCode",{parentName:"li"},"identity"),". Ambiguous match if not provided."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"GET /proof?platform=twitter&identity=my_twitter_screen_name&exact=true")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"GET /proof?identity=abc,def&page=3"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pagination (object, required) - Pagination info",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"total (number, required) - Total amount of results."),(0,n.kt)("li",{parentName:"ul"},"per (number, required) - How many ",(0,n.kt)("inlineCode",{parentName:"li"},"ids")," results per page."),(0,n.kt)("li",{parentName:"ul"},"current (number, required) - current page number."),(0,n.kt)("li",{parentName:"ul"},"next (number, required) - Next page. ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," if current page is the last one."))),(0,n.kt)("li",{parentName:"ul"},"ids (array","[object]",", required) - All IDs found. Will be empty array if not found.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"avatar (string, required) - Avatar public key"),(0,n.kt)("li",{parentName:"ul"},"last_arweave_id (string, required) - Arweave transaction ID of last proof this avatar signed"),(0,n.kt)("li",{parentName:"ul"},"proofs (array","[object]",", required) - All proofs under this Avatar",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Platform"),(0,n.kt)("li",{parentName:"ul"},"identity (string, required) - Identity on that platform"),(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Creation time of this proof. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"last_checked_at (string, required) - When last validation happened. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"is_valid (bool, required) - This record is valid or not according to last validation."),(0,n.kt)("li",{parentName:"ul"},"invalid_reason (string, required) - If not valid, reason will appears here."))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "pagination": {\n    "total": 27,\n    "per": 10,\n    "current": 1,\n    "next": 2\n  },\n  "ids": [{\n    "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n    "last_arweave_id": "W1-5W8l3EfcSPSlgGJJoRZUObqkXqlXDuQH5cIA53t0",\n    "proofs": [{\n      "platform": "twitter",\n      "identity": "my_twitter_screen_name",\n      "created_at": "1643099438",\n      "last_checked_at": "1643099438",\n      "is_valid": false,\n      "invalid_reason": "tweet not found"\n    }, {\n      "platform": "facebook",\n      "identity": "my_facebook_username",\n      "created_at": "1643099438",\n      "last_checked_at": "1643099438",\n      "is_valid": true,\n      "invalid_reason": ""\n    }]\n  }, {\n    "avatar": "0xANOTHER",\n    "proofs": [{\n      "platform": "ethereum",\n      "identity": "0x114514......",\n      "created_at": "1643099438",\n      "last_checked_at": "1643099438",\n      "is_valid": true,\n      "invalid_reason": ""\n    }]\n  }]\n}\n')))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that an empty ",(0,n.kt)("inlineCode",{parentName:"p"},"last_arweave_id")," indicates that the last proof this avatar signed has not been uploaded to Arweave Network yet, please try again later.")),(0,n.kt)("h3",{id:"proof-query-exists"},"Check if a proof exists ","[GET /v1/proof/exists]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parameters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Proof platform."),(0,n.kt)("li",{parentName:"ul"},"identity (string, required) - Identity on target platform."),(0,n.kt)("li",{parentName:"ul"},"public_key (string, required) - Public key of Next.ID Avatar to connect to. Should be secp256k1 curve (for now), 65-bytes or 33-bytes long (uncompressed / compressed) and stringified into hex form (",(0,n.kt)("inlineCode",{parentName:"li"},"/^0x[0-9a-f]{65,130}$/"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"GET /v1/proof/exists?platform=twitter&identity=some_twitter_screenname&public_key=0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"))),(0,n.kt)("p",null,"Found."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Createtion time of this proof. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"last_checked_at (string, required) - When last validation happened. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"is_valid (bool, required) - This record is valid or not according to last validation."),(0,n.kt)("li",{parentName:"ul"},"invalid_reason (string, required) - If not valid, reason will appears here."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "created_at": "1643099438",\n  "last_checked_at": "1643099438",\n  "is_valid": true,\n  "invalid_reason": ""\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 404 (application/json)"))),(0,n.kt)("p",null,"Not found."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"message (string, required) - Message of which part goes wrong.")))),(0,n.kt)("h3",{id:"get-one-single-proofchain-under-an-avatar-get-v1proofchain"},"Get one single ProofChain under an Avatar ","[GET /v1/proofchain]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parameters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"public_key (string, required) - Public key of NextID Avatar to connect to. Should be secp256k1 curve (for now), 65-bytes or 33-bytes long (uncompressed / compressed) and stringified into hex form (",(0,n.kt)("inlineCode",{parentName:"li"},"/^0x[0-9a-f]{65,130}$/"),")"),(0,n.kt)("li",{parentName:"ul"},"page (number, optional) - Pagination. First page is number ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"GET /v1/proofchain?public_key=0x028c3cda474361179d653c41a62f6bbb07265d535121e19aedf660da2924d0b1e3&page=1"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"))),(0,n.kt)("p",null,"Found."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"pagination (object, required) - Pagination info"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"total (number, required) - Total amount of results."),(0,n.kt)("li",{parentName:"ul"},"per (number, required) - How many ",(0,n.kt)("inlineCode",{parentName:"li"},"proof item")," results per page."),(0,n.kt)("li",{parentName:"ul"},"current (number, required) - current page number."),(0,n.kt)("li",{parentName:"ul"},"next (number, required) - Next page. ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," if current page is the last one."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"proof_chain (array","[object]",", required) - Will be empty array if not found."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"action (string, required) - Action(create / delete)"),(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Target platform. See table above for all available platforms. See table above for all available values."),(0,n.kt)("li",{parentName:"ul"},"identity (string, required) - Identity on that platform"),(0,n.kt)("li",{parentName:"ul"},"proof_location (string, required) - Location where public-accessible proof post is set. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported"),"."),(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Creation time of this proof. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"signature (string, required) - generate signature_payload and avatar_private_key"),(0,n.kt)("li",{parentName:"ul"},"signature_payload (string, required) - Raw string to be sent to ",(0,n.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,n.kt)("li",{parentName:"ul"},"extra (string, optional) -  Extra info for specific platform needed."),(0,n.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID of this chain link. Use the exact value from ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof/payload"),"."),(0,n.kt)("li",{parentName:"ul"},"arweave_id (string, required) - Arweave transaction ID of this proof")))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n    "pagination":{\n        "total":1,\n        "per":20,\n        "current":1,\n        "next":0\n    },\n    "proof_chain":[\n        {\n            "action":"create",\n            "platform":"twitter",\n            "identity":"yeiwb",\n            "proof_location":"1469221200140574720",\n            "created_at":"1648023422",\n            "signature":"gMUJ75eewkdaNrFp7bafzckv9+rlW7rVaxkB7/sYzYgFdFltYG+gn0lYzVNgrAdHWZPmu2giwJniGG7HG9iNigE=",\n            "signature_payload":"",\n            "uuid":"",\n            "arweave_id": "",\n            "extra":{\n\n            }\n        }\n    ]\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 400 (application/json)"))),(0,n.kt)("p",null,"Params error."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Response 500 (application/json)")),(0,n.kt)("p",null,"Internal error."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"message (string, required) - Message of which part goes wrong.")))),(0,n.kt)("h3",{id:"get-separated-proofchain-link-aka-changelog-of-whole-server-get-v1proofchainchanges"},"Get separated ProofChain link (aka Changelog of whole server) ","[GET /v1/proofchain/changes]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parameters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'last_id (number, required) - The "cursor" indicates where to start. Usually the maximum ',(0,n.kt)("inlineCode",{parentName:"li"},"id")," from previous request's response. If you want to start a new server iteration, set it to ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},"count (number, optional) - How meny records to return in a request, should be ",(0,n.kt)("inlineCode",{parentName:"li"},"10 <= count <= 100"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"GET /v1/proofchain/changes?id=203&count=20"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 200 (application/json)"))),(0,n.kt)("p",null,"Found."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"links (array","[object]",", required) - Each link of every ProofChain.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'id (number, required) - ProofChain link ID in ProofService\'s database. Can be used as the "cursor" in query.'),(0,n.kt)("li",{parentName:"ul"},"avatar (string, required) - Which Avatar this link belongs to."),(0,n.kt)("li",{parentName:"ul"},"action (string, required) - Action (",(0,n.kt)("inlineCode",{parentName:"li"},"create")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"delete"),")"),(0,n.kt)("li",{parentName:"ul"},"platform (string, required) - Target platform. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported")," for all supported platforms."),(0,n.kt)("li",{parentName:"ul"},"identity (string, required) - Identity on that platform. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported")," for the meaning of this field.."),(0,n.kt)("li",{parentName:"ul"},"proof_location (string, required) - Location where public-accessible proof post is set. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server#supported"},"Platform supported"),"."),(0,n.kt)("li",{parentName:"ul"},"created_at (string, required) - Creation time of this proof. (timestamp, unit: second)"),(0,n.kt)("li",{parentName:"ul"},"signature (string, required) - generate signature_payload and avatar_private_key"),(0,n.kt)("li",{parentName:"ul"},"signature_payload (string, required) - Raw string to be sent to ",(0,n.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,n.kt)("li",{parentName:"ul"},"extra (string, optional) -  Extra info for specific platform needed."),(0,n.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID of this chain link. Use the exact value from ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /v1/proof/payload"),"."),(0,n.kt)("li",{parentName:"ul"},"arweave_id (string, required) - Arweave transaction ID of this ProofChain link."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n    "links":[\n        {\n            "id": 204,\n            "avatar": "0x028c3cda474361179d653c41a62f6bbb07265d535121e19aedf660da2924d0b1e3",\n            "action": "create",\n            "platform": "twitter",\n            "identity": "yeiwb",\n            "proof_location": "1469221200140574720",\n            "created_at": "1648023422",\n            "signature": "gMUJ75eewkdaNrFp7bafzckv9+rlW7rVaxkB7/sYzYgFdFltYG+gn0lYzVNgrAdHWZPmu2giwJniGG7HG9iNigE=",\n            "signature_payload": "",\n            "uuid": "",\n            "arweave_id": "",\n            "extra": {}\n        }\n    ]\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response 400 (application/json)"))),(0,n.kt)("p",null,"Params error."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Response 500 (application/json)")),(0,n.kt)("p",null,"Internal error."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"message (string, required) - Message of which part goes wrong.")))))}m.isMDXComponent=!0},8378:(e,t,a)=>{a(9496)}}]);