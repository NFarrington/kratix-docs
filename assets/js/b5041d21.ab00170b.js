"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[2995],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),m=d(o),c=a,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return o?r.createElement(h,s(s({ref:t},u),{},{components:o})):r.createElement(h,s({ref:t},u))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,s[1]=n;for(var d=2;d<i;d++)s[d]=o[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2086:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=o(7462),a=(o(7294),o(3905));const i={},s="Frequently Asked Questions",n={unversionedId:"main/faq",id:"main/faq",title:"Frequently Asked Questions",description:'What does the "day two" experience of a Kratix-based platform look like?',source:"@site/docs/main/06-faq.md",sourceDirName:"main",slug:"/main/faq",permalink:"/docs/main/faq",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/06-faq.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Deleting",permalink:"/docs/main/reference/resource-requests/deleting-a-resource-request"}},l={},d=[{value:"What does the &quot;day two&quot; experience of a Kratix-based platform look like?",id:"what-does-the-day-two-experience-of-a-kratix-based-platform-look-like",level:3},{value:"Should the platform team or the stream-aligned team be responsible for updating the version of a deployed instance? Who should be responsible for storage/network/other configuration?",id:"should-the-platform-team-or-the-stream-aligned-team-be-responsible-for-updating-the-version-of-a-deployed-instance-who-should-be-responsible-for-storagenetworkother-configuration",level:3},{value:"How do I scan/validate/sign-off/log a request from a user before deploying the resources associated with their requested instance from a Promise?",id:"how-do-i-scanvalidatesign-offlog-a-request-from-a-user-before-deploying-the-resources-associated-with-their-requested-instance-from-a-promise",level:3},{value:"Is Kratix only useful for deploying simple services?",id:"is-kratix-only-useful-for-deploying-simple-services",level:3},{value:"My organisation would like to add all of our tooling as Promises to our platform, and some of our tools are challenging to deploy and manage. I worry a single platform team would get overwhelmed. How do I scale up?",id:"my-organisation-would-like-to-add-all-of-our-tooling-as-promises-to-our-platform-and-some-of-our-tools-are-challenging-to-deploy-and-manage-i-worry-a-single-platform-team-would-get-overwhelmed-how-do-i-scale-up",level:3},{value:"How do I manage roles/teams/credentials/identity/networking/other?",id:"how-do-i-manage-rolesteamscredentialsidentitynetworkingother",level:3},{value:"How do I schedule workloads to different clusters?",id:"how-do-i-schedule-workloads-to-different-clusters",level:3},{value:"How do I use GitHub/GitLab/S3/other instead of MinIO in my GitOps pipeline?",id:"how-do-i-use-githubgitlabs3other-instead-of-minio-in-my-gitops-pipeline",level:3},{value:"How does Kratix compare to X? (where X is...)",id:"how-does-kratix-compare-to-x-where-x-is",level:3},{value:"AWS, Google Cloud, Microsoft Azure",id:"aws-google-cloud-microsoft-azure",level:3},{value:"I&#39;d like to invest/partner/buy. Who do I talk to?",id:"id-like-to-investpartnerbuy-who-do-i-talk-to",level:3}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"what-does-the-day-two-experience-of-a-kratix-based-platform-look-like"},'What does the "day two" experience of a Kratix-based platform look like?'),(0,a.kt)("p",null,'Kratix is intended to help platform teams deliver platforms in a sustainable way. Products are never "done", so a Platform-as-a-Product is never done. Instead, a platform is an opportunity to continuously learn about the best way to accelerate delivery in your organisation. Day two, three, four, etc. are equally as important as day one.'),(0,a.kt)("p",null,"In the future, Kratix will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add testing to Promises, so that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The capability of the platform to deploy promised instances on-demand is continuously asserted, with Service-Level Objective(s) assigned against relevant Service-Level indicator(s)"),(0,a.kt)("li",{parentName:"ul"},"The capability of each promised instance to deliver its Service-Level Objective(s) against relevant Service-Level indicator(s) is continuously asserted"))),(0,a.kt)("li",{parentName:"ul"},"Expose service status information via standard endpoints"),(0,a.kt)("li",{parentName:"ul"},"Converge all deployed resources (cluster or instance) when a Promise is updated"),(0,a.kt)("li",{parentName:"ul"},"Converge individual instance resources when a user's request is updated")),(0,a.kt)("h3",{id:"should-the-platform-team-or-the-stream-aligned-team-be-responsible-for-updating-the-version-of-a-deployed-instance-who-should-be-responsible-for-storagenetworkother-configuration"},"Should the platform team or the stream-aligned team be responsible for updating the version of a deployed instance? Who should be responsible for storage/network/other configuration?"),(0,a.kt)("p",null,"The platform team should collaborate with the stream-aligned teams when building Promises. The Promises should encapsulate the contract between the teams - the elements the stream-aligned teams care about should be exposed via the API, and the other elements should be configured by the platform team. Which settings matter to the stream-aligned team, and which matter to the platform team, is often organisation specific, particularly for bespoke Promises."),(0,a.kt)("h3",{id:"how-do-i-scanvalidatesign-offlog-a-request-from-a-user-before-deploying-the-resources-associated-with-their-requested-instance-from-a-promise"},"How do I scan/validate/sign-off/log a request from a user before deploying the resources associated with their requested instance from a Promise?"),(0,a.kt)("p",null,"Add images to the ",(0,a.kt)("inlineCode",{parentName:"p"},"xaasRequestPipeline")," array inside the Promise definition to ensure all relevant steps are fulfilled prior to scheduling an instance. See ",(0,a.kt)("a",{parentName:"p",href:"./guides/writing-a-promise"},"Writing a Promise"),"."),(0,a.kt)("h3",{id:"is-kratix-only-useful-for-deploying-simple-services"},"Is Kratix only useful for deploying simple services?"),(0,a.kt)("p",null,"Quite the opposite, Kratix is at its most powerful when deploying complex services. The more complexity is removed from the stream-aligned teams (and encapsulated in the platform), the lower their cognitive load, and the more productive they are. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Syntasso/kratix/tree/main/samples/appstack"},"Kpack-and-Knative Application Stack")," as an example of a more complex Promise making life easier for stream-aligned teams."),(0,a.kt)("h3",{id:"my-organisation-would-like-to-add-all-of-our-tooling-as-promises-to-our-platform-and-some-of-our-tools-are-challenging-to-deploy-and-manage-i-worry-a-single-platform-team-would-get-overwhelmed-how-do-i-scale-up"},"My organisation would like to add all of our tooling as Promises to our platform, and some of our tools are challenging to deploy and manage. I worry a single platform team would get overwhelmed. How do I scale up?"),(0,a.kt)("p",null,"Platform teams do not need to author all, or any, of the Promises in their platform. Off-the-shelf Promises should be used when suitable (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kratix/samples"},"samples on GitHub"),'). Where bespoke Promises are necessary, follow Team Topologies; where possible "Complicated Subsystem Teams" should collaboratively author Promises with stream-aligned teams, and add them to the platform. Thus multiple complicated subsystem teams can contribute to a platform delivered by a platform team.'),(0,a.kt)("h3",{id:"how-do-i-manage-rolesteamscredentialsidentitynetworkingother"},"How do I manage roles/teams/credentials/identity/networking/other?"),(0,a.kt)("p",null,"Kratix functionality will be enhanced in many of these aspects in the future, utilising the best of the Kubernetes ecosystem."),(0,a.kt)("h3",{id:"how-do-i-schedule-workloads-to-different-clusters"},"How do I schedule workloads to different clusters?"),(0,a.kt)("p",null,"The supplied Kratix scheduler (work_controller) labels all Work objects with ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster=worker"),". This scheduler will be swappable with customised schedulers for the specific needs of your organisation."),(0,a.kt)("h3",{id:"how-do-i-use-githubgitlabs3other-instead-of-minio-in-my-gitops-pipeline"},"How do I use GitHub/GitLab/S3/other instead of MinIO in my GitOps pipeline?"),(0,a.kt)("p",null,"The supplied Kratix Work writer (work_writer_controller) writes directly to a local Minio. This will be swappable with any other writer able to take a scheduled Work and write its resources to a compatible ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/source/"},"source"),"."),(0,a.kt)("h3",{id:"how-does-kratix-compare-to-x-where-x-is"},"How does Kratix compare to X? (where X is...)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./value-of-kratix#comparison-with-other-tools"},"See here")),(0,a.kt)("h3",{id:"aws-google-cloud-microsoft-azure"},"AWS, Google Cloud, Microsoft Azure"),(0,a.kt)("p",null,'The big public cloud providers offer tremendous power and functionality. Unfortunately, they also require expert knowledge, experience, time, and effort to deliver results in your organisation. Running a multi-cloud multi-cluster Kubernetes-based topology, powered by Kratix and a sustainable platform team, is the best way for your stream-aligned teams to leverage the power of public clouds without being "locked in" to a vendor.'),(0,a.kt)("h3",{id:"id-like-to-investpartnerbuy-who-do-i-talk-to"},"I'd like to invest/partner/buy. Who do I talk to?"),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@syntasso.io?subject=Kratix%20Enquiry"},"contact Syntasso"),"."))}p.isMDXComponent=!0}}]);