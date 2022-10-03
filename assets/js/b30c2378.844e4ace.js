"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1370],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),i=(r(7294),r(4137));const n={},o="Introduction",l={unversionedId:"main/whats-kratix",id:"main/whats-kratix",title:"Introduction",description:"What is Kratix?",source:"@site/docs/main/02-whats-kratix.md",sourceDirName:"main",slug:"/main/whats-kratix",permalink:"/kratix-docs/docs/main/whats-kratix",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/02-whats-kratix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/kratix-docs/docs/main/intro"},next:{title:"The Value of Kratix",permalink:"/kratix-docs/docs/main/value-of-kratix"}},s={},u=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Want to see Kratix in action?",id:"want-to-see-kratix-in-action",level:3},{value:"Using Kratix to build your platform you can:",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to:",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Guides: Jump right in",id:"guides-jump-right-in",level:2},{value:"Fundamentals: Dive a little deeper",id:"fundamentals-dive-a-little-deeper",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-kratix"},"What is Kratix?"),(0,i.kt)("p",null,"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."),(0,i.kt)("h3",{id:"want-to-see-kratix-in-action"},"Want to see Kratix in action?"),(0,i.kt)("p",null,"Check out a video overview of our product:"),(0,i.kt)("div",{style:{"text-align":"center"}},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZZUD2NUCBJI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h3",{id:"using-kratix-to-build-your-platform-you-can"},"Using Kratix to build your platform you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use GitOps workflow with Flux and familiar Kubernetes-native constructs."),(0,i.kt)("li",{parentName:"ul"},"co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d. Learn more about Kratix Promises in ",(0,i.kt)("a",{parentName:"li",href:"fundamentals/promises"},"Promises"),"."),(0,i.kt)("li",{parentName:"ul"},"create a flexible platform with your paved paths as Promises."),(0,i.kt)("li",{parentName:"ul"},"evolve your platform easily as your business needs change."),(0,i.kt)("li",{parentName:"ul"},"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere.")),(0,i.kt)("h3",{id:"providing-a-kratix-built-platform-allows-your-users-to"},"Providing a Kratix-built platform allows your users to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"discover available services that are already fit-for-purpose."),(0,i.kt)("li",{parentName:"ul"},"consume services on demand using standard Kubernetes APIs."),(0,i.kt)("li",{parentName:"ul"},"move focus away from infrastructure toward adding product value.")),(0,i.kt)("h2",{id:"guides-jump-right-in"},"Guides: Jump right in"),(0,i.kt)("p",null,"Follow our handy guides to get started on the basics as quickly as possible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../category/installing-kratix"},"Installing Kratix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/installing-a-promise"},"Installing and using a Promise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/writing-a-promise"},"Writing a Promise"))),(0,i.kt)("h2",{id:"fundamentals-dive-a-little-deeper"},"Fundamentals: Dive a little deeper"),(0,i.kt)("p",null,"Learn the fundamentals of Kratix to get a deeper understanding of our main features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./fundamentals/promises"},"Promises"))))}p.isMDXComponent=!0}}]);