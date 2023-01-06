"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[4053],{2645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(6600),r=(n(9496),n(9613));n(9295);const i={title:"Liftoff, Hello Space!"},o=void 0,l={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Liftoff, Hello Space!",description:"To get started, let's walk through a binding process with the most frequently used platform: Twitter.",source:"@site/docs/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/getting-started/quick-start",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/getting-started/quick-start.md",tags:[],version:"current",frontMatter:{title:"Liftoff, Hello Space!"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"How Next.ID works",permalink:"/core-concepts/how-it-works"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-step: Setting up your first Avatar",id:"step-by-step-setting-up-your-first-avatar",level:2},{value:"Binding your Twitter account",id:"binding-your-twitter-account",level:2},{value:"Get a payload",id:"get-a-payload",level:3},{value:"Generate the signature",id:"generate-the-signature",level:3},{value:"Post a proof Tweet",id:"post-a-proof-tweet",level:3},{value:"Verify the proof",id:"verify-the-proof",level:3},{value:"Check your Avatar&#39;s status",id:"check-your-avatars-status",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get started, let's walk through a binding process with the most frequently used platform: Twitter.\nHold tight, let's go!"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basics in Cryptography"),(0,r.kt)("li",{parentName:"ul"},"Basics in Python, TypeScript and Node.js"),(0,r.kt)("li",{parentName:"ul"},"Basics in Postman or cURL"),(0,r.kt)("li",{parentName:"ul"},"Basics in any other programming languages")),(0,r.kt)("p",null,"New to this but keen on learning? Don't panic, you can learn it all in just a few hours!"),(0,r.kt)("h2",{id:"step-by-step-setting-up-your-first-avatar"},"Step-by-step: Setting up your first Avatar"),(0,r.kt)("p",null,"In the Crypto world, a cryptographic key pair is what stands as one of your Avatars. Next.ID uses by far the most secure algorithm to protect your sovereignty: curve secp256k1."),(0,r.kt)("p",null,"We're showing it by using Python's ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/secp256k1/"},"secp256k1-py"),"."),(0,r.kt)("p",null,"First, install secp256k1-py lib:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# get PIP installed in advance or use your own way\npip install secp256k1\n")),(0,r.kt)("p",null,"Then generate your own private and public key pair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m secp256k1 privkey -p\n\n# ATTENTION! We intentionally replaced the last three digits of private key to be xxx.\n# Your private key is EVERYTHING. NEVER expose it to others or reveal it anywhere publicly.\n43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx\nPublic key: 03bce884894fdc4fb45475733be317dd3c289f003bceebb097ac79a6b95e6edc56\n")),(0,r.kt)("p",null,"With this one key pair, you now create an Avatar secured by unbreakable cryptography."),(0,r.kt)("h2",{id:"binding-your-twitter-account"},"Binding your Twitter account"),(0,r.kt)("p",null,"From here, we're demonstrating the whole process by using a Twitter handle and key-pair as generated above. Replace all fields with your own information -- you'll be prompted to do so accordingly."),(0,r.kt)("p",null,"Please take note especially to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"your_twitter_handle"),"."),(0,r.kt)("h3",{id:"get-a-payload"},"Get a payload"),(0,r.kt)("p",null,"If we're heading into space, there'll be a Rocket carrying us as a payload. Entering Cyberspace each time is similar."),(0,r.kt)("p",null,"First, let's get the payload needed to represent us. Calling REST API ",(0,r.kt)("inlineCode",{parentName:"p"},"/proof/payload")," by using POSTMAN or using cURL in the command line:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4619).Z,width:"1756",height:"504"})),(0,r.kt)("p",null,"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key")," fields with your own information, and it will return like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "post_content": {\n        "default": "\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\\nSig: %SIG_BASE64%\\n\\nInstall Mask.io to enhance your Web3 experience.\\n",\n        "en_US": "\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\\nSig: %SIG_BASE64%\\n\\nInstall Mask.io to enhance your Web3 experience.\\n",\n        "zh_CN": "\ud83c\udfad \u6b63\u5728\u901a\u8fc7 @NextDotID \u9a8c\u8bc1\u6211\u7684 Twitter \u5e10\u53f7 @your_twitter_handle \u3002\\nSig: %SIG_BASE64%\\n\\n\u8bf7\u4e0b\u8f7d\u5b89\u88c5 Mask.io \u53bb\u589e\u5f3a\u60a8\u7684 Web3 \u4f53\u9a8c\u3002\\n"\n    },\n    "sign_payload": "{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"77f5ccaa-7919-4854-96de-81975f96744a\\"}",\n    "uuid": "77f5ccaa-7919-4854-96de-81975f96744a",\n    "created_at": "1656843378"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sign_payload")," is the payload we're looking for. ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," are also required for the following steps."),(0,r.kt)("h3",{id:"generate-the-signature"},"Generate the signature"),(0,r.kt)("p",null,"With the payload returned, we can go ahead to sign it. Git clones our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample"},"open-source Demo in TypeScript")," to accomplish this."),(0,r.kt)("p",null,"Note: you'll need to set up Node.js and TypeScript before downloading, then go to install the required libs as ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereumjs-util"),"."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file under ",(0,r.kt)("inlineCode",{parentName:"p"},"/src")," and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"const message")," with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_payload")," in the former step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ecsign, toRpcSig, keccakFromString, BN } from \'ethereumjs-util\';\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), \'hex\')\n}\n\nasync function main() {\n    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload\n    const message = Buffer.from(\'{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"353449e6-3a6f-4ac8-ae65-ba14bf466baf\\"}\', \'utf8\');\n    // ATTENTION! RUN THIS LOCALLY! NEVER SHARE YOUR PRIVATE KEY WITH ANY OTHERS OR PUBLIC!\n    // replace XXX with your own Private Key for generating a signature\n    const secretKey = Buffer.from(\'XXX\', \'hex\');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString(\'hex\')}`);\n    // For demo ONLY\n    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b\n\n    console.log(`Signature(base64): ${signature.toString(\'base64\')}`);\n    // For demo ONLY\n    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n}\n\nmain();\n')),(0,r.kt)("p",null,"Now we can run it properly. Go to the root directory to compile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tsc\n")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/disc")," directory to get it running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ node index.js\n")),(0,r.kt)("p",null,"We will get two console.log outputs. One is the Signature(base64) that we're going to use for proof posting on Twitter."),(0,r.kt)("h3",{id:"post-a-proof-tweet"},"Post a proof Tweet"),(0,r.kt)("p",null,"Follow the format we get in calling ",(0,r.kt)("inlineCode",{parentName:"p"},"/proof/payload"),", replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sig")," with Signature(base64) we just get and visit twitter.com to tweet as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\nSig: 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n\nNext.ID YOUR DIGITAL IDENTITIES IN ONE PLACE\n")),(0,r.kt)("p",null,"Then go to the detail page of this tweet, get its ID at the end of the URL like `1543541274254639104``:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://twitter.com/your_twitter_handle/status/1543541274254639104\n")),(0,r.kt)("p",null,"This ID will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"proof_location")," we need for verification."),(0,r.kt)("h3",{id:"verify-the-proof"},"Verify the proof"),(0,r.kt)("p",null,"We're getting close! Call the REST API ",(0,r.kt)("inlineCode",{parentName:"p"},"/proof")," by using POSTMAN or using cURL in the command line:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2609).Z,width:"1756",height:"650"})),(0,r.kt)("p",null,"It will return a code of ",(0,r.kt)("inlineCode",{parentName:"p"},"201")," Created` and empty curly brackets :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{}\n")),(0,r.kt)("h3",{id:"check-your-avatars-status"},"Check your Avatar's status"),(0,r.kt)("p",null,"All set! Let's go to have a look at our newly created Avatar."),(0,r.kt)("p",null,"Call REST API ",(0,r.kt)("inlineCode",{parentName:"p"},"/proof"),"with ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method and with two fields of ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"identity"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://proof-service.next.id/v1/proof?platform=twitter&identity=your_twitter_handle\n")),(0,r.kt)("p",null,"We will get as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pagination": {\n        "total": 4,\n        "per": 20,\n        "current": 1,\n        "next": 0\n    },\n    "ids": [\n        {\n            "avatar": "0x03bce884894fdc4fb45475733be317dd3c289f003bceebb097ac79a6b95e6edc56",\n            "proofs": [\n                {\n                    "platform": "twitter",\n                    "identity": "your_twitter_handle",\n                    "created_at": "1656844114",\n                    "last_checked_at": "1656844114",\n                    "is_valid": true,\n                    "invalid_reason": ""\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Congrats! You have successfully created an Avatar on-chain. Go explore cyberspace with your new digital identity!"),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View the ",(0,r.kt)("a",{parentName:"li",href:"/core-concepts/architecture"},"architecture of Next.ID framework")),(0,r.kt)("li",{parentName:"ul"},"Understand ",(0,r.kt)("a",{parentName:"li",href:"/core-concepts/how-it-works"},"how it works in detail"))))}d.isMDXComponent=!0},4619:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-payload-993e92252d7bfff848375af3e672ef0e.png"},2609:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/verify-post-d0d9587cec7ec45656f929f5e05339d0.png"}}]);