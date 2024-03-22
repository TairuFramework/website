"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[857],{4858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(3274),a=n(9779),l=n(3927),s=n(424);const i={},c="Getting started",u={id:"getting-started",title:"Getting started",description:"Prerequisites",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Discover Tairu",permalink:"/docs/overview"},next:{title:"Core concepts",permalink:"/docs/concepts"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Your first Tile",id:"your-first-tile",level:2},{value:"Serving the Tile",id:"serving-the-tile",level:2},{value:"Accessing the Tile",id:"accessing-the-tile",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/en",children:"Node.js"})," v20 or higher and a package manager such as npm are required to install and use the Tairu framework."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/docs/api/handler",children:"handler package"})," is needed to create Tiles server-side."]}),"\n",(0,r.jsxs)(l.A,{groupId:"package-manager",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm install @tairu/handler\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"pnpm add @tairu/handler\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"your-first-tile",children:"Your first Tile"}),"\n",(0,r.jsxs)(t.p,{children:["A Tile can be simply defined using JSX and exporting the handler wrapped in the ",(0,r.jsx)(t.code,{children:"handle()"})," function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"handler.tsx",children:"import { Text, Tile, handle, h } from '@tairu/handler'\n\nexport function handler() {\n  return (\n    <Tile title=\"Demo tile\">\n      <Text>Hello Tairu!</Text>\n    </Tile>\n  )\n}\n\nexport default handle(handler)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"serving-the-tile",children:"Serving the Tile"}),"\n",(0,r.jsx)(t.p,{children:"The tile can then be served by the CLI:"}),"\n",(0,r.jsxs)(l.A,{groupId:"package-manager",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npx tairu serve handler.tsx\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"pnpm dlx tairu serve handler.tsx\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The Tile is then accessible at the URL ",(0,r.jsx)(t.code,{children:"http://localhost:3210"})," by default."]}),"\n",(0,r.jsx)(t.h2,{id:"accessing-the-tile",children:"Accessing the Tile"}),"\n",(0,r.jsx)(t.p,{children:"Finally, the Tile can be accessed from different clients:"}),"\n",(0,r.jsxs)(l.A,{groupId:"client",children:[(0,r.jsx)(s.A,{value:"cli",label:"Tairu CLI",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npx tairu open http://localhost:3210\n"})})}),(0,r.jsx)(s.A,{value:"browser",label:"Web browser embed",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<iframe src="http://localhost:3210"></iframe>\n'})})}),(0,r.jsxs)(s.A,{value:"react",value:"React embed",children:[(0,r.jsxs)(t.p,{children:["Using the ",(0,r.jsx)(t.code,{children:"tairu/react"})," package:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Tile } from '@tairu/react'\n\nfunction App() {\n  return <Tile url=\"http://localhost:3210\" />\n}\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},424:(e,t,n)=>{n.d(t,{A:()=>s});n(9474);var r=n(8923);const a={tabItem:"tabItem_LVN6"};var l=n(3274);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},3927:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(9474),a=n(8923),l=n(4160),s=n(241),i=n(9551),c=n(2269),u=n(5426),o=n(7866);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),x=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(5389);const x={tabList:"tabList_rWhg",tabItem:"tabItem_gtsB"};var b=n(3274);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:o,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function T(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,b.jsx)(T,{...e,children:d(e.children)},String(t))}},9779:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(9474);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);