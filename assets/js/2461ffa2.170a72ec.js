"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["136"],{7488:function(e,i,r){r.r(i),r.d(i,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"api","title":"Tairu packages","description":"Tiles handling","source":"@site/docs/api.mdx","sourceDirName":".","slug":"/api","permalink":"/docs/api","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"api","next":{"title":"@tairu/handler","permalink":"/docs/api/handler/"}}'),t=r("2676"),a=r("9938");let s={},d="Tairu packages",l={},c=[{value:"Tiles handling",id:"tiles-handling",level:2},{value:"<code>@tairu/handler</code>",id:"tairuhandler",level:3},{value:"<code>@tairu/json-handler</code>",id:"tairujson-handler",level:3},{value:"Tiles rendering",id:"tiles-rendering",level:2},{value:"<code>@tairu/web-client</code>",id:"tairuweb-client",level:3},{value:"<code>@tairu/jquery</code>",id:"tairujquery",level:3},{value:"<code>@tairu/react-dom</code>",id:"tairureact-dom",level:3},{value:"<code>@tairu/react-native</code>",id:"tairureact-native",level:3},{value:"Integrations",id:"integrations",level:2},{value:"<code>@tairu/next</code>",id:"tairunext",level:3},{value:"Utilities",id:"utilities",level:2},{value:"<code>@tairu/protocol</code>",id:"tairuprotocol",level:3},{value:"<code>@tairu/loader</code>",id:"tairuloader",level:3},{value:"<code>@tairu/renderer</code>",id:"tairurenderer",level:3},{value:"<code>@tairu/testing</code>",id:"tairutesting",level:3},{value:"<code>@tairu/jsx</code>",id:"tairujsx",level:3},{value:"<code>@tairu/react</code>",id:"tairureact",level:3}];function o(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"tairu-packages",children:"Tairu packages"})}),"\n",(0,t.jsx)(i.h2,{id:"tiles-handling",children:"Tiles handling"}),"\n",(0,t.jsxs)(i.p,{children:["The following packages provide APIs to create Tile handlers, that can be served over HTTP using the ",(0,t.jsx)(i.a,{href:"/docs/cli",children:"Tairu CLI"})," or a Node.js HTTP server."]}),"\n",(0,t.jsx)(i.h3,{id:"tairuhandler",children:(0,t.jsx)(i.a,{href:"/docs/api/handler/",children:(0,t.jsx)(i.code,{children:"@tairu/handler"})})}),"\n",(0,t.jsx)(i.p,{children:"This is the main package to use when getting started with Tairu. It enables to create handlers serving JSON Tiles, but also rendering as HTML and SVG."}),"\n",(0,t.jsx)(i.h3,{id:"tairujson-handler",children:(0,t.jsx)(i.a,{href:"/docs/api/json-handler/",children:(0,t.jsx)(i.code,{children:"@tairu/json-handler"})})}),"\n",(0,t.jsxs)(i.p,{children:["APIs to create handlers for JSON Tiles only. The ",(0,t.jsxs)(i.a,{href:"/docs/api/handler/",children:[(0,t.jsx)(i.code,{children:"@tairu/handler"})," package"]})," should be used instead for rendering HTML and SVG."]}),"\n",(0,t.jsx)(i.h2,{id:"tiles-rendering",children:"Tiles rendering"}),"\n",(0,t.jsx)(i.p,{children:"The following packages provide APIs to load, display and interact with Tiles on clients."}),"\n",(0,t.jsx)(i.h3,{id:"tairuweb-client",children:(0,t.jsx)(i.a,{href:"/docs/api/web-client/",children:(0,t.jsx)(i.code,{children:"@tairu/web-client"})})}),"\n",(0,t.jsx)(i.p,{children:"Main client for supporting Tiles in DOM environments, allowing to add interactions to prerendered Tiles or fully loading and rending Tiles by URL."}),"\n",(0,t.jsx)(i.h3,{id:"tairujquery",children:(0,t.jsx)(i.a,{href:"/docs/api/jquery/",children:(0,t.jsx)(i.code,{children:"@tairu/jquery"})})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://jquery.com/",children:"jQuery"})," plugin for interacting with Tiles."]}),"\n",(0,t.jsx)(i.h3,{id:"tairureact-dom",children:(0,t.jsx)(i.a,{href:"/docs/api/react-dom/react-dom/",children:(0,t.jsx)(i.code,{children:"@tairu/react-dom"})})}),"\n",(0,t.jsxs)(i.p,{children:["High-level logic for supporting Tiles in clients using ",(0,t.jsx)(i.a,{href:"https://react.dev/",children:"React"})," for DOM environments. The ",(0,t.jsx)(i.a,{href:"/docs/api/react-dom/react-dom/server/",children:(0,t.jsx)(i.code,{children:"@tairu/react-dom/server"})})," export can also be used to support ",(0,t.jsx)(i.a,{href:"https://react.dev/reference/rsc/server-components",children:"React Server Components"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"tairureact-native",children:(0,t.jsx)(i.a,{href:"/docs/api/react-native/",children:(0,t.jsx)(i.code,{children:"@tairu/react-native"})})}),"\n",(0,t.jsxs)(i.p,{children:["High-level logic for supporting Tiles in clients using ",(0,t.jsx)(i.a,{href:"https://reactnative.dev/",children:"React Native"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"integrations",children:"Integrations"}),"\n",(0,t.jsx)(i.h3,{id:"tairunext",children:(0,t.jsx)(i.a,{href:"/docs/api/next/next/",children:(0,t.jsx)(i.code,{children:"@tairu/next"})})}),"\n",(0,t.jsxs)(i.p,{children:["High-level integration for the ",(0,t.jsx)(i.a,{href:"https://nextjs.org/",children:"Next.js React framework"}),". This package exports a ",(0,t.jsx)(i.code,{children:"Tile"})," component that can be used to simply integrate Tiles in a Next.js application, supporting ",(0,t.jsx)(i.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/server-components",children:"Server Components rendering"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/docs/api/next/next/server/",children:(0,t.jsx)(i.code,{children:"@tairu/next/server"})})," export can also be used to create Tile handlers as ",(0,t.jsx)(i.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers",children:"Next.js Route Handlers"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"utilities",children:"Utilities"}),"\n",(0,t.jsxs)(i.p,{children:["These are low-level packages mainly used to provide common logic for the higher-level packages supporting ",(0,t.jsx)(i.a,{href:"#tiles-handling",children:"Tiles handling"})," and ",(0,t.jsx)(i.a,{href:"#tiles-rendering",children:"rendering"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"tairuprotocol",children:(0,t.jsx)(i.a,{href:"/docs/api/protocol/",children:(0,t.jsx)(i.code,{children:"@tairu/protocol"})})}),"\n",(0,t.jsxs)(i.p,{children:["The schemas and types implementing the ",(0,t.jsx)(i.a,{href:"/docs/protocol",children:"Tairu protocol"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"tairuloader",children:(0,t.jsx)(i.a,{href:"/docs/api/loader/",children:(0,t.jsx)(i.code,{children:"@tairu/loader"})})}),"\n",(0,t.jsxs)(i.p,{children:["APIs to interact with ",(0,t.jsx)(i.a,{href:"#tiles-handling",children:"Tile handlers"})," by loading Tiles and ",(0,t.jsx)(i.a,{href:"/docs/protocol#action-buttons",children:"posting actions"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"tairurenderer",children:(0,t.jsx)(i.a,{href:"/docs/api/renderer/",children:(0,t.jsx)(i.code,{children:"@tairu/renderer"})})}),"\n",(0,t.jsxs)(i.p,{children:["This package provides the base class that needs to be extended to implement platform-specific rendering logic. In most cases, the ",(0,t.jsx)(i.a,{href:"#tiles-rendering",children:"high-level Tiles rendering packages"})," should be used instead of this package."]}),"\n",(0,t.jsx)(i.h3,{id:"tairutesting",children:(0,t.jsx)(i.a,{href:"/docs/api/testing/",children:(0,t.jsx)(i.code,{children:"@tairu/testing"})})}),"\n",(0,t.jsxs)(i.p,{children:["This package provides a ",(0,t.jsx)(i.code,{children:"TestAgent"})," class that can be used to interact with Tile handlers in tests with minimal setup."]}),"\n",(0,t.jsx)(i.h3,{id:"tairujsx",children:(0,t.jsx)(i.a,{href:"/docs/api/jsx/",children:(0,t.jsx)(i.code,{children:"@tairu/jsx"})})}),"\n",(0,t.jsxs)(i.p,{children:["Utilities to convert JSX elements to the JSON Tile structure, allowing to use the JSX syntax as an abstraction in ",(0,t.jsx)(i.a,{href:"#tiles-handling",children:"Tile handlers"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"tairureact",children:(0,t.jsx)(i.a,{href:"/docs/api/react/",children:(0,t.jsx)(i.code,{children:"@tairu/react"})})}),"\n",(0,t.jsxs)(i.p,{children:["Generic rendering logic for React, used by the ",(0,t.jsx)(i.a,{href:"/docs/api/react-dom/react-dom/",children:(0,t.jsx)(i.code,{children:"@tairu/react-dom"})})," and ",(0,t.jsx)(i.a,{href:"/docs/api/react-native/",children:(0,t.jsx)(i.code,{children:"@tairu/react-native"})})," packages."]})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},9938:function(e,i,r){r.d(i,{Z:function(){return d},a:function(){return s}});var n=r(5271);let t={},a=n.createContext(t);function s(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);