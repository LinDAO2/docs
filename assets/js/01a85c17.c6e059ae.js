"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[4013],{7932:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(9496),n=a(5924),r=a(9121),s=a(2665),c=a(6443),i=a(7848);const m="sidebar_kdDP",o="sidebarItemTitle_s172",u="sidebarItemList_dpk2",d="sidebarItem_W1Kr",g="sidebarItemLink_Ls4A",p="sidebarItemLinkActive_HpuY";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var b=a(8675);function k(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function _(e){return l.createElement(b.Zo,{component:k,props:e})}function h(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(_,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},1263:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(9496),n=a(5924),r=a(8578),s=a(7281),c=a(9803),i=a(7932),m=a(9782),o=a(6959);function u(e){let{tags:t,sidebar:a}=e;const u=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:u}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(i.Z,{sidebar:a},l.createElement("h1",null,u),l.createElement(m.Z,{tags:t})))}},4379:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(9496),n=a(5924),r=a(6443);const s="tag_KMOF",c="tagRegular_CXKa",i="tagWithCount_fNjl";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}},9782:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),n=a(8578),r=a(4379);const s="tag_h1Yp";function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s},l.createElement(r.Z,e))))),l.createElement("hr",null))}function i(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},8578:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(7848);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);