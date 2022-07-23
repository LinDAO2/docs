"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[4461],{49613:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>g});var t=a(59496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return a?t.createElement(m,i(i({ref:n},u),{},{components:a})):t.createElement(m,i({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},47471:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(59496),r=a(45924);const s="tabItem_FTZG";function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},n)}},59890:(e,n,a)=>{a.d(n,{Z:()=>g});var t=a(62081),r=a(59496),s=a(45924),i=a(80506),o=a(20741),l=a(73802),c=a(52075);const u="tabList_m6Et",d="tabItem_b767";function p(e){var n,a;const{lazy:i,block:p,defaultValue:g,values:m,groupId:f,className:b}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),k=(0,o.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===g?g:null!=(n=null!=g?g:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?n:y[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:S}=(0,l.U)(),[x,_]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&h.some((n=>n.value===e))&&_(e)}const T=e=>{const n=e.currentTarget,a=E.indexOf(n),t=h[a].value;t!==x&&(w(n),_(t),null!=f&&S(f,String(t)))},C=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{var t;const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{var r;const n=E.indexOf(e.currentTarget)-1;a=null!=(r=E[n])?r:E[E.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},b)},h.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>E.push(e),onKeyDown:C,onFocus:T,onClick:T},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function g(e){const n=(0,i.Z)();return r.createElement(p,(0,t.Z)({key:String(n)},e))}},364:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(62081),r=(a(59496),a(49613)),s=a(59890),i=a(47471);const o={id:"ps-faq",title:"FAQ",sidebar_position:5},l=void 0,c={unversionedId:"proof-service/ps-faq",id:"proof-service/ps-faq",title:"FAQ",description:"How do I generate a Avatar?",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/proof-service/faq.mdx",sourceDirName:"proof-service",slug:"/proof-service/ps-faq",permalink:"/zh-Hans/proof-service/ps-faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/proof-service/faq.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"ps-faq",title:"FAQ",sidebar_position:5}},u={},d=[{value:"How do I generate a Avatar?",id:"how-do-i-generate-a-avatar",level:2},{value:"I got <code>&quot;bad signature&quot;</code> error in <code>POST /v1/proof</code>",id:"bad-signature",level:2},{value:"Sample code snippets for avatar-generating and signing",id:"sample",level:2}],p={toc:d};function g(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-i-generate-a-avatar"},"How do I generate a ",(0,r.kt)("a",{parentName:"h2",href:"ps-glossary#glossary-avatar"},"Avatar"),"?"),(0,r.kt)("p",null,"As in ",(0,r.kt)("a",{parentName:"p",href:"ps-glossary#glossary-avatar"},"glossary"),", technically, avatar\nis the same as Ethereum wallet: they're both ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic\ncurve asymmetric keypair."),(0,r.kt)("p",null,"So, generating and managing Persona should be the same as generating /\nmanaging wallets. Search for an ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," SDK in your project's\nprogramming language to generate one."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Basiclly,"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"secret key should be 32-bytes long"),(0,r.kt)("li",{parentName:"ul"},"public key has 2 shapes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uncompressed(65-bytes, started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x04"),"), or"),(0,r.kt)("li",{parentName:"ul"},"compressed(33-bytes, started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x02")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"0x03"),", in most case ",(0,r.kt)("inlineCode",{parentName:"li"},"0x02"),")"))))),(0,r.kt)("h2",{id:"bad-signature"},"I got ",(0,r.kt)("inlineCode",{parentName:"h2"},'"bad signature"')," error in ",(0,r.kt)("a",{parentName:"h2",href:"api#proof-add"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /v1/proof"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if ",(0,r.kt)("inlineCode",{parentName:"li"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," is the same as ",(0,r.kt)("a",{parentName:"li",href:"api#proof-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /v1/proof/payload"))," result."),(0,r.kt)("li",{parentName:"ol"},"Check if you're using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js/blob/1.x/docs/web3-eth-personal.rst#sign"},"Ethereum Personal Sign"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your DApp is using wallet SDK (e.g. MetaMask), make sure\nyou're using correct signature RPC method.")))),(0,r.kt)("admonition",{title:"How do I implement personal sign by myself?",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"In pseudo-code, ",(0,r.kt)("inlineCode",{parentName:"li"},"personal_sign")," is:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sign(keccak256("\\x19Ethereum Signed Message:\\n" + dataToSign.length + dataToSign)))\n')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"dataToSign.length")," is length of bytes (",(0,r.kt)("inlineCode",{parentName:"li"},"Buffer"),"\nlength in some language), not UTF-8 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Code_point"},"code\npoint")," length.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'assert.Equal(4, len([]byte("\ud83d\udc0e"))) // Not 1\n'))),(0,r.kt)("li",{parentName:"ul"},"Signature should be 65-bytes long.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"<<r::binary-size(32), s::binary-size(32), v::binary-size(1)>> = signature_binary\n# v should be 0x00 or 0x01 or 0x1B or 0x1C\n# 0x00 is equivalent to 0x1B\n# 0x01 is equivalent to 0x1C\n")),(0,r.kt)("p",{parentName:"admonition"},"Here's a test case."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Psuedo-code\n// Given a signature payload\npayload := "Test123123!"\n// And a secret key\nsecret_key := "0x9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"\n// The personal sign result should be\nassert.Equal(\n  "0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401",\n  personal_sign(secret_key, payload).ToHexString()\n)\n'))),(0,r.kt)("h2",{id:"sample"},"Sample code snippets for avatar-generating and signing"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[dependencies]\nlibsecp256k1 = "0.7"\nhex = "0.4"\nsha3 = "0.10" # Keccak256\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use libsecp256k1::{SecretKey, Message};\nuse sha3::{Keccak256, Digest};\n\nconst SECRET_KEY: &str = "9DEBA3488458C0314E5FEF8920D3B117DD76415569CF270DB8FD864896C02732";\nconst SIGN_PAYLOAD: &str = "Test123123!";\n\nfn main() {\n    // Raw sign message\n    let sign_payload: String = SIGN_PAYLOAD.to_string();\n    // SecretKey instance\n    let secret_key = SecretKey::parse_slice(hex::decode(SECRET_KEY).unwrap().as_slice()).unwrap();\n    // Sign it\n    let personal_signature = personal_sign(&sign_payload, &secret_key);\n    // Verify it\n    println!("Signature: 0x{}", hex::encode(personal_signature));\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n/// `web3.eth.personal.sign()`\nfn personal_sign(payload: &String, secret_key: &SecretKey) -> Vec<u8> {\n    // Wrap personal.sign() required signature struct\n    let personal_message = format!("\\x19Ethereum Signed Message:\\n{}{}", payload.len(), payload);\n    // Keccak256 it into a digest.\n    let mut hasher = Keccak256::default();\n    hasher.update(personal_message);\n    let digest: [u8; 32] = hasher.finalize().into();\n\n    // Sign the digest.\n    let (r_and_s, v) = libsecp256k1::sign(&Message::parse(&digest), secret_key);\n    // Rebuild the sig into a [u8; 65]\n    let mut signature: Vec<u8> = vec![];\n    signature.extend_from_slice(&r_and_s.r.b32()); // r (32 bytes)\n    signature.extend_from_slice(&r_and_s.s.b32()); // s (32 bytes)\n    signature.push(v.serialize()); // v (1 byte)\n    if signature.len() != 65 {\n        panic!("Signature length is not 65 bytes");\n    }\n    signature\n}\n'))),(0,r.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="cmd/playground.go"',title:'"cmd/playground.go"'},'package main\n\nimport (\n    "crypto/ecdsa"\n    "fmt"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nconst (\n    SECRET_KEY   = "9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"\n    SIGN_PAYLOAD = "Test123123!"\n)\n\nfunc main() {\n    sk, err := crypto.HexToECDSA(SECRET_KEY)\n    if err != nil {\n        panic(err)\n    }\n\n    sign, err := signPersonal([]byte(SIGN_PAYLOAD), sk)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Signature: %s\\n", hexutil.Encode(sign))\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n// signPersonal signs a payload using given secret key.\nfunc signPersonal(payload []byte, sk *ecdsa.PrivateKey) (signature []byte, err error) {\n    digest := signPersonalDigest(payload)\n    signature, err = crypto.Sign(digest, sk)\n    if err != nil {\n        return nil, err\n    }\n\n    return signature, nil\n}\n\n// signPersonalDigest hashes the given payload with eth.personal.sign struct.\nfunc signPersonalDigest(data []byte) []byte {\n    messsage := fmt.Sprintf("\\x19Ethereum Signed Message:\\n%d%s", len(data), data)\n    return crypto.Keccak256([]byte(messsage))\n}\n'))),(0,r.kt)(i.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "dependencies": {\n    "ethereumjs-util": "^7.1.4"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import { ecsign, toRpcSig, keccakFromString } from 'ethereumjs-util'\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), 'hex')\n}\n\nasync function main() {\n    const message = Buffer.from('Test123123!', 'utf8');\n    const secretKey = Buffer.from('9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732', 'hex');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString('hex')}`);\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d5641c\n\n    console.log(`Signature(base64): ${signature.toString('base64')}`);\n    // Signature(base64): UvIQ2trRPEyNBlbnOAMAo2egVmMc8mlQuqfeT1gBh3lcdrX8lN5b0LivTV30Mmh9kAQCy6hqElcK9WvjW6jVZBw=\n}\n\nmain();\n")))))}g.isMDXComponent=!0}}]);