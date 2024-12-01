"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9274"],{7233:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"quick-start","title":"Quick start","description":"Installation","source":"@site/docs/quick-start.mdx","sourceDirName":".","slug":"/quick-start","permalink":"/docs/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/overview"},"next":{"title":"Going further","permalink":"/docs/going-further"}}'),l=r("2676"),a=r("9938"),i=r("6206"),s=r("4076");let o={},d="Quick start",u={},c=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Handler package",id:"handler-package",level:3},{value:"Your first Tile",id:"your-first-tile",level:2},{value:"Creating the handler",id:"creating-the-handler",level:3},{value:"Running the server",id:"running-the-server",level:3},{value:"Displaying the Tile",id:"displaying-the-tile",level:3},{value:"Improving the Tile",id:"improving-the-tile",level:2},{value:"Using JSX",id:"using-jsx",level:3},{value:"Adding interactions",id:"adding-interactions",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"quick-start",children:"Quick start"})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://nodejs.org/en",children:"Node.js"})," v20 or higher and a package manager such as npm (included in Node.js) are required to install and use the Tairu framework."]}),"\n",(0,l.jsx)(n.h3,{id:"handler-package",children:"Handler package"}),"\n",(0,l.jsxs)(n.p,{children:["First, let's install the ",(0,l.jsx)(n.a,{href:"/docs/api/handler/",children:"handler package"})," to create Tiles server-side."]}),"\n",(0,l.jsxs)(i.Z,{groupId:"package-manager",children:[(0,l.jsx)(s.Z,{value:"npm",label:"npm",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm install @tairu/handler\n"})})}),(0,l.jsx)(s.Z,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"pnpm add @tairu/handler\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"your-first-tile",children:"Your first Tile"}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-handler",children:"Creating the handler"}),"\n",(0,l.jsxs)(n.p,{children:["Let's create a file named ",(0,l.jsx)(n.code,{children:"handler.jsx"})," (or ",(0,l.jsx)(n.code,{children:"handler.tsx"})," if you want to use TypeScript), with the following contents:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:'title="handler.jsx" showLineNumbers',children:'import { handle } from \'@tairu/handler\'\n\nfunction myFirstTileHandler() {\n  return {\n    type: "Tile",\n    version: "0.1",\n    props: {\n      title: "Demo tile",\n      children: [\n        { type: "Text", props: { children: ["Hello Tairu!"] } }\n      ]\n    }\n  }\n}\n\nexport default handle(myFirstTileHandler)\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Here, the ",(0,l.jsx)(n.code,{children:"myFirstTileHandler()"})," function at line 3 returns an object matching the ",(0,l.jsx)(n.a,{href:"/docs/protocol#tile",children:"Tile protocol"})," and the default export of the module (line 16) wraps the handler function in the ",(0,l.jsx)(n.code,{children:"handle()"})," call to run the Tairu server logic."]}),"\n",(0,l.jsx)(n.h3,{id:"running-the-server",children:"Running the server"}),"\n",(0,l.jsx)(n.p,{children:"The simplest way to run a Tile server is to use the Tairu CLI:"}),"\n",(0,l.jsxs)(i.Z,{groupId:"package-manager",children:[(0,l.jsx)(s.Z,{value:"npm",label:"npm",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npx tairu serve handler.jsx\n"})})}),(0,l.jsx)(s.Z,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"pnpm dlx tairu serve handler.jsx\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"displaying-the-tile",children:"Displaying the Tile"}),"\n",(0,l.jsxs)(n.p,{children:["The Tile can be displayed in any Web browser simply by accessing its URL, ",(0,l.jsx)(n.code,{children:"http://localhost:3210"})," by default when using the Tairu CLI, try it out!"]}),"\n",(0,l.jsx)(n.p,{children:"The Tairu CLI can also be used to render simple (text) Tiles in a terminal, for example we can render our first Tile:"}),"\n",(0,l.jsxs)(i.Z,{groupId:"package-manager",children:[(0,l.jsx)(s.Z,{value:"npm",label:"npm",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npx tairu open http://localhost:3210\n"})})}),(0,l.jsx)(s.Z,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"pnpm dlx tairu open http://localhost:3210\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"improving-the-tile",children:"Improving the Tile"}),"\n",(0,l.jsx)(n.h3,{id:"using-jsx",children:"Using JSX"}),"\n",(0,l.jsxs)(n.p,{children:["Tairu uses React internally, so JSX can be used to define Tiles instead of JSON. Our ",(0,l.jsx)(n.code,{children:"handler.jsx"})," file can be rewritten as:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:'title="handler.jsx" {1,5-7} showLineNumbers',children:"import { Text, Tile, handle } from '@tairu/handler'\n\nfunction myFirstTileHandler() {\n  return (\n    <Tile title=\"Demo tile\">\n      <Text>Hello Tairu!</Text>\n    </Tile>\n  )\n}\n\nexport default handle(myFirstTileHandler)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Here, we import the ",(0,l.jsx)(n.code,{children:"Text"})," and ",(0,l.jsx)(n.code,{children:"Tile"})," components from the ",(0,l.jsx)(n.code,{children:"@tairu/handler"})," package and use them to rewrite our Tile using JSX."]}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["Tairu is ",(0,l.jsx)(n.strong,{children:"not"})," a React framework, it only uses the JSX syntax for convenience. Only the components exported by the ",(0,l.jsx)(n.code,{children:"@tairu/handler"})," package can be used in Tile handlers."]})}),"\n",(0,l.jsx)(n.h3,{id:"adding-interactions",children:"Adding interactions"}),"\n",(0,l.jsx)(n.p,{children:"Let's add a text input to our Tile so that we can change the text with the input value:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:'title="handler.jsx" {1,3,6,7,9} showLineNumbers',children:'import { SubmitAction, Text, TextInput, Tile, handle } from \'@tairu/handler\'\n\nfunction myFirstTileHandler(request) {\n  return (\n    <Tile\n      input={<TextInput label="What is your name?" />}\n      actions={<SubmitAction label="Send" />}\n      title="Demo tile">\n      <Text>Hello {request.action?.value ?? \'stranger\'}!</Text>\n    </Tile>\n  )\n}\n\nexport default handle(myFirstTileHandler)\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Here, we add a ",(0,l.jsx)(n.code,{children:"TextInput"})," element (line 6) to our ",(0,l.jsx)(n.code,{children:"Tile"})," and a ",(0,l.jsx)(n.code,{children:"SubmitAction"})," element (line 7) to submit the input value to the handler."]}),"\n",(0,l.jsxs)(n.p,{children:["Using the ",(0,l.jsx)(n.code,{children:"request"})," argument provided to our handler (line 3), we can display the submitted action value or a fallback value (line 9)."]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4076:function(e,n,r){r.d(n,{Z:()=>i});var t=r("2676");r("5271");var l=r("4461");let a="tabItem_TBo_";function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:r,children:n})}},6206:function(e,n,r){r.d(n,{Z:()=>T});var t=r("2676"),l=r("5271"),a=r("4461"),i=r("3351"),s=r("3225"),o=r("213"),d=r("8912"),u=r("4601"),c=r("550");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("9157");let x="tabList_Catn",f="tabItem_mfQ4";function g(e){let{className:n,block:r,selectedValue:l,selectValue:s,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{let n=e.currentTarget,r=o[d.indexOf(n)].value;r!==l&&(u(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{let r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===n}),children:r??n},n)})})}function j(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,l.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,l.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[x,f]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,d._X)(a);return[i,(0,l.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[g,j]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[a,i]=(0,c.Nk)(t);return[a,(0,l.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),v=(()=>{let e=x??g;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:i,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),j(e)},[f,j,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",x),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(j,{...n,...e})]})}function T(e){let n=(0,m.default)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},9938:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(5271);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);