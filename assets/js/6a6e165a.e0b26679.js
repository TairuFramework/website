"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6623"],{8691:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"agents/react-dom","title":"React DOM library","description":"For websites and applications using React, the @tairu/react-dom package exposes a Tile component to load and render Tiles.","source":"@site/docs/agents/react-dom.mdx","sourceDirName":"agents","slug":"/agents/react-dom","permalink":"/docs/agents/react-dom","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"jQuery plugin library","permalink":"/docs/agents/jquery"},"next":{"title":"React Native library","permalink":"/docs/agents/react-native"}}'),a=n("2676"),s=n("9938"),l=n("6206"),o=n("4076");let i={},c="React DOM library",u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Server component",id:"server-component",level:3},{value:"Next.js support",id:"nextjs-support",level:3}];function h(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"react-dom-library",children:"React DOM library"})}),"\n",(0,a.jsxs)(r.p,{children:["For websites and applications using ",(0,a.jsx)(r.a,{href:"https://react.dev/",children:"React"}),", the ",(0,a.jsxs)(r.a,{href:"/docs/api/react-dom/react-dom/",children:[(0,a.jsx)(r.code,{children:"@tairu/react-dom"})," package"]})," exposes a ",(0,a.jsx)(r.code,{children:"Tile"})," component to load and render Tiles."]}),"\n",(0,a.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(l.Z,{groupId:"package-manager",children:[(0,a.jsx)(o.Z,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"npm install @tairu/react-dom\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"pnpm add @tairu/react-dom\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"Tile"})," component simply needs to be provided the Tile URL to load and render:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"import { Tile } from '@tairu/react-dom'\n\nfunction MyComponent() {\n  return <Tile url=\"http://localhost:3210\" />\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"Tile"})," component exported from the main ",(0,a.jsx)(r.code,{children:"@tairu/react-dom"})," module is a Client component, which means that it will load and render the Tile contents in the browser."]}),"\n",(0,a.jsx)(r.h3,{id:"server-component",children:"Server component"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"Tile"})," component can be used as a ",(0,a.jsx)(r.a,{href:"https://react.dev/reference/rsc/server-components",children:"Server component"})," when imported from the ",(0,a.jsx)(r.code,{children:"@tairu/react-dom/server"})," module. Using this import, the Tile contents will be loaded and pre-rendered on the server (or during the build process for static websites), and interacions handlers will be added client-side."]}),"\n",(0,a.jsxs)(r.p,{children:["A ",(0,a.jsxs)(r.a,{href:"https://react.dev/reference/react/Suspense",children:[(0,a.jsx)(r.code,{children:"Suspense"})," boundary"]})," need to be present in order to load the Tile as a server component, for example:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"import { Tile } from '@tairu/react-dom/server'\nimport { Suspense } from 'react'\n\nfunction MyComponent() {\n  return (\n    <Suspense>\n      <Tile url=\"http://localhost:3210\" />\n    </Suspense>\n  )\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"nextjs-support",children:"Next.js support"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"@tairu/next"})," package provides a ",(0,a.jsx)(r.a,{href:"/docs/integrations/next",children:"higher-level integration for Next.js"})," based on the React DOM package."]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4076:function(e,r,n){n.d(r,{Z:()=>l});var t=n("2676");n("5271");var a=n("4461");let s="tabItem_TBo_";function l(e){let{children:r,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n,children:r})}},6206:function(e,r,n){n.d(r,{Z:()=>g});var t=n("2676"),a=n("5271"),s=n("4461"),l=n("3351"),o=n("3225"),i=n("213"),c=n("8912"),u=n("4601"),d=n("550");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var m=n("9157");let f="tabList_Catn",x="tabItem_mfQ4";function v(e){let{className:r,block:n,selectedValue:a,selectValue:o,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let r=e.currentTarget,n=i[c.indexOf(r)].value;n!==a&&(u(r),o(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:i.map(e=>{let{value:r,label:n,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>c.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item",x,l?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function b(e){let{lazy:r,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=o.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function j(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,s=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}});return!function(e){let r=(0,u.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[l,m]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:s})),[f,x]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),l=(0,c._X)(s);return[l,(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})},[s,t])]}({queryString:n,groupId:t}),[v,b]=function(e){var r;let{groupId:n}=e;let t=(r=n)?`docusaurus.tab.${r}`:null,[s,l]=(0,d.Nk)(t);return[s,(0,a.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),j=(()=>{let e=f??v;return p({value:e,tabValues:s})?e:null})();return(0,i.Z)(()=>{j&&m(j)},[j]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),b(e)},[x,b,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",f),children:[(0,t.jsx)(v,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function g(e){let r=(0,m.default)();return(0,t.jsx)(j,{...e,children:h(e.children)},String(r))}},9938:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return l}});var t=n(5271);let a={},s=t.createContext(a);function l(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);