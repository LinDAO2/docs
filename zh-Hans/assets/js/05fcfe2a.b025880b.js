"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[844],{4154:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=i(6600),n=(i(9496),i(9613));i(9295);const o={id:"ps-intro",title:"Introduction",sidebar_position:1},s=void 0,a={unversionedId:"proof-service/ps-intro",id:"proof-service/ps-intro",title:"Introduction",description:"ProofService provides a DID service to build a connection between",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/proof-service/intro.md",sourceDirName:"proof-service",slug:"/proof-service/ps-intro",permalink:"/zh-Hans/proof-service/ps-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/proof-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ps-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"Architecture",permalink:"/zh-Hans/core-concepts/architecture"},next:{title:"Glossary",permalink:"/zh-Hans/proof-service/ps-glossary"}},l={},p=[{value:"Feature",id:"feature",level:2},{value:"Two-way binding",id:"two-way-binding",level:3},{value:"Publicly verifiable",id:"publicly-verifiable",level:3},{value:"Design goal",id:"design-goal",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," provides a DID service to build a connection between\nasymmetric cryptography (currently elliptic curve) and other identity\nprovider (other asymmetric cryptography ID, Web2.0 identity provider,\netc)."),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("h3",{id:"two-way-binding"},"Two-way binding"),(0,n.kt)("p",null,"Missing proof material will make this binding status\n",(0,n.kt)("a",{parentName:"p",href:"ps-glossary#glossary-downgrade"},"downgraded"),"."),(0,n.kt)("h3",{id:"publicly-verifiable"},"Publicly verifiable"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," should be anonymously\naccessible. Any user / service / program can verify this binding\nwithout much cost."),(0,n.kt)("h2",{id:"design-goal"},"Design goal"),(0,n.kt)("p",null,'ProofService is designed to prove "An\n',(0,n.kt)("a",{parentName:"p",href:"ps-glossary#glossary-identity"},"Identity")," and a\n",(0,n.kt)("a",{parentName:"p",href:"ps-glossary#glossary-avatar"},"Avatar"),' is held by same person".'),(0,n.kt)("p",null,"Let's take this assertion into 2 parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'"I" hold this Persona.'),(0,n.kt)("li",{parentName:"ol"},'"I" hold this identity.')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1"),' equals "Generate a signature using secret key of this Persona".'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"2"),' equals "Make an action using this identity".'),(0,n.kt)("p",null,"Here we reach ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," with ",(0,n.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," mechanism."))}c.isMDXComponent=!0}}]);